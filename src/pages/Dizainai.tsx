import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, User, ShoppingBag, Layers, Info, Plus, Images as Gallery, MousePointerClick } from 'lucide-react';
import Images from '../img/Images';
import { Helmet } from 'react-helmet-async';
import { createPortal } from 'react-dom';
import templates from '../components/Templates';

interface Template {
  id: number;
  title: string;
  type: 'asmeninės svetainės' | 'el. parduotuvės';
  images: string[]; // Multiple images
  description: string;
}

interface MobilePreviewProps {
  template: Template;
  onClick: (imageIndex: number) => void;
}

const MobilePreview: React.FC<MobilePreviewProps> = ({ template, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="group"
    >
      <div
        className="relative mx-auto w-[280px] h-[560px] rounded-[3rem] border-[7px] border-dark-surface-2 overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
        onClick={() => onClick(0)} // Show the first image on click
      >
        <img
          src={template.images[0]} // Show the first image as the main image
          alt={template.title}
          className="w-full h-[200%] object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/60 text-black/80 backdrop-blur-sm z-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300 space-y-2 text-center">
          <span className="text-sm">Peržiūrėti</span>
          <span className="text-lg font-semibold">{template.title}</span>
          <MousePointerClick className="w-6 h-6 animate-carousel-ping" />
        </div>


      </div>
      <div className="mt-4 text-center">
        <h3 className="text-xl font-bold mb-1 flex items-center justify-center gap-2">
          {template.title}
          {template.type === 'asmeninės svetainės' ? (
            <User className="inline-block h-5" />
          ) : (
              <ShoppingBag className="inline-block h-5" />
          )}
        </h3>

        <p className="text-white/70 text-sm">{template.description}</p>
      </div>
    </motion.div>
  );
};

interface LightboxProps {
  template: Template | null;
  onClose: () => void;
}

import ReactDOM from 'react-dom';

const Lightbox: React.FC<LightboxProps> = ({ template, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    if (template) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % template.images.length);
    }
  };

  const handlePrevImage = () => {
    if (template) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + template.images.length) % template.images.length
      );
    }
  };

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') handlePrevImage();
      else if (event.key === 'ArrowRight') handleNextImage();
      else if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeydown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = '';
    };
  }, [template, currentImageIndex]);

  if (!template) return null;

  const modalContent = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-[10000] button-primary rounded-full p-3"
      >
        <X className="w-6 h-6" />
      </button>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-6xl w-full rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center absolute top-1/2 w-full transform -translate-y-1/2 px-4 z-10">
          <button
            onClick={handlePrevImage}
            className="bg-dark-surface/60 p-2 text-white rounded-full hover:bg-dark-surface/80"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={handleNextImage}
            className="bg-dark-surface/60 p-2 text-white rounded-full hover:bg-dark-surface/80"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        <img
          src={template.images[currentImageIndex]}
          alt={template.title}
          className="w-full h-auto max-h-[80vh] object-contain"
        />
      </motion.div>
    </motion.div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

const Templates: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'rodyti viską' | 'asmeninės svetainės' | 'el. parduotuvės'>('rodyti viską');
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const filteredTemplates = templates.filter(
    (template) => selectedType === 'rodyti viską' || template.type === selectedType
  );

  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Controls delay between items
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="pt-4 md:pt-36 min-h-screen">
      {/* Helmet for SEO */}
      <Helmet>
        <title>Paruošti dizainai | Amberweb</title>
        <meta name="description" content="Pasirinkite iš mūsų paruoštų maketų ir pradėkite kurti savo svetainę!" />
        <meta property="og:title" content="Paruošti dizainai" />
        <meta property="og:description" content="Pasirinkite iš mūsų paruoštų maketų ir pradėkite kurti savo svetainę!" />
        < link rel="canonical" href="https://amberweb.lt/paruosti-dizainai" />
      </Helmet>
      {/* Static Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* <div className="absolute inset-0 bg-gradient-to-b from-dark-surface/50 to-background/80" /> */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.1)_0%,transparent_70%)]" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(157,0,255,0.1) 0%, transparent 60%)'
        }} />
      </div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Paruošti dizainai</h1>
          <p className="text-lg mb-2 text-white/70">
            Pasirinkite iš mūsų paruoštų maketų ir pradėkite kurti savo svetainę!
          </p>
          <p className="text-xs mb-16 text-white/70">
            <span>
              <Info className="w-6 h-6 inline-block mr-2" />
            </span>
            Mūsų paruošti dizainai tinka bet kokiam verslui - svarbiausia pasirinkti tinkamą išdėstymą, nes paveikslėlius, spalvas ir tekstus galima lengvai pritaikyti. <br />Galite rinktis pagal tematiką, tačiau jei išdėstymas jums patinka, jį galima pritaikyti bet kokiai sričiai.
          </p>
          <div className="flex justify-center gap-4">
            {[
              { type: 'rodyti viską', icon: <Layers /> },
              { type: 'asmeninės svetainės', icon: <User /> },
              { type: 'el. parduotuvės', icon: <ShoppingBag /> },
            ].map(({ type, icon }) => (
              <button
                key={type}
                onClick={() => setSelectedType(type as typeof selectedType)}
                className={`px-6 py-2 rounded-full transition-colors text-xs ${selectedType === type
                  ? 'button-primary'
                  : 'bg-dark-surface-2 text-white/70 hover:text-white'
                  } flex items-center gap-2`}
              >
                {icon}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          // initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Ensures animation happens only once
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-32"
        >
          {filteredTemplates.map((template) => (
            <motion.div key={template.id} variants={itemVariants}>
              <MobilePreview
                template={template as Template}
                onClick={() => setSelectedTemplate(template as Template)}
              />
            </motion.div>
          ))}

          <motion.div
            variants={itemVariants} // Uses same animation settings
            className="flex justify-center items-center gap-4 flex-col"
          >
            <Plus className="w-20 h-20 text-electric-blue" />
            <h2 className="text-white/70 text-lg text-center">
              Galime pasiūlyti daugiau nei 2000 variacijų
            </h2>
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox for Template Preview */}
      {selectedTemplate && (
        <Lightbox template={selectedTemplate} onClose={() => setSelectedTemplate(null)} />
      )}
    </div>
  );
};

export default Templates;
