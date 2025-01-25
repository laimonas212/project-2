import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Images from '../img/Images';

interface Template {
  id: number;
  title: string;
  type: 'asmeninės svetainės' | 'el. parduotuvės';
  images: string[]; // Multiple images
  description: string;
}

const templates: Template[] = [
  {
    id: 1,
    title: 'Acai bowl',
    type: 'asmeninės svetainės',
    images: [
      Images.templates.acaiBowl.landing,
      Images.templates.acaiBowl.about,
      Images.templates.acaiBowl.contact,
      Images.templates.acaiBowl.home,
      Images.templates.acaiBowl.menu,
      Images.templates.acaiBowl.blog,
    ],
    description: 'Šis spalvingas maketas sujungia nuostabias pastelines spalvas su aukštos kokybės nuotraukomis, leidžiančiomis greitai sukurti unikalų ir profesionalų svetainės dizainą!',
  },
  {
    id: 2,
    title: 'Agency',
    type: 'asmeninės svetainės',
    images: [
      Images.templates.agency.landing,
      Images.templates.agency.about,
      Images.templates.agency.contact,
      Images.templates.agency.home,
      Images.templates.agency.portfolio,
      Images.templates.agency.blog,
      Images.templates.agency.pricing,
    ],
    description: 'Šis verslo maketas sukurtas tam, kad suteiktų viską, ko vidutinei įmonei gali prireikti iš karto.',
  },
  {
    id: 3,
    title: 'App Developer',
    type: 'asmeninės svetainės',
    images: [
      Images.templates.appDeveloper.landing,
      Images.templates.appDeveloper.about,
      Images.templates.appDeveloper.contact,
      Images.templates.appDeveloper.home,
      Images.templates.appDeveloper.services,
      Images.templates.appDeveloper.portfolio,
      Images.templates.appDeveloper.service,
      Images.templates.appDeveloper.project,
    ],
    description: 'Šis maketas turi visus puslapių išdėstymus, reikalingus pristatyti programų kūrimo paslaugas, projektus, portfelius ir kt.',
  },
  {
    id: 4,
    title: 'Bakery',
    type: 'el. parduotuvės',
    images: [
      Images.templates.bakery.landing,
      Images.templates.bakery.about,
      Images.templates.bakery.contact,
      Images.templates.bakery.home,
      Images.templates.bakery.menu,
      Images.templates.bakery.blog,
    ],
    description: 'Bakery maketas turi visas reikalingas sudedamąsias dalis, kad pažadintų jūsų klientų apetitą ir padėtų jums pristatyti savo produktus.',
  },
  {
    id: 5,
    title: 'Barber Shop',
    type: 'el. parduotuvės',
    images: [
      Images.templates.barberShop.landing,
      Images.templates.barberShop.about,
      Images.templates.barberShop.contact,
      Images.templates.barberShop.home,
      Images.templates.barberShop.services,
      Images.templates.barberShop.shop,
    ],
    description: 'Šis klasikinis tamsus maketas išryškina didelius, ryškius tekstus, subtilias fonines nuotraukas ir tik tiek spalvų, kad jūsų verslas išsiskirtų.',
  },
  {
    id: 6,
    title: 'Beauty Product',
    type: 'el. parduotuvės',
    images: [
      Images.templates.beautyProduct.landing,
      Images.templates.beautyProduct.about,
      Images.templates.beautyProduct.contact,
      Images.templates.beautyProduct.home,
      Images.templates.beautyProduct.product,
      Images.templates.beautyProduct.shop,
      Images.templates.beautyProduct.blog,
    ],
    description: 'Šis maketas sukurtas grožio produktų nišai, ir pasižymi išskirtiniais vaizdų maketais, kuriuos galima pritaikyti pagal jūsų poreikius.',
  },
  
];

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
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-xl from:text-electric-blue to:text-white font-bold mb-1">{template.title}</h3>
        <p className="text-white/70 text-sm">{template.description}</p>
      </div>
    </motion.div>
  );
};

interface LightboxProps {
  template: Template | null;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ template, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle next image
  const handleNextImage = () => {
    if (template) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % template.images.length);
    }
  };

  // Handle previous image
  const handlePrevImage = () => {
    if (template) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + template.images.length) % template.images.length
      );
    }
  };

  // Listen for keyboard events (left/right arrow keys) when the lightbox is open
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (event.key === 'ArrowRight') {
        handleNextImage();
      }
    };

    // Add the event listener when the lightbox is open
    window.addEventListener('keydown', handleKeydown);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [template, currentImageIndex]);

  if (!template) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white/70 hover:text-white"
      >
        <X className="w-6 h-6" />
      </button>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-6xl w-full  rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Navigation */}
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

        {/* Display current image */}
        <img
          src={template.images[currentImageIndex]}
          alt={template.title}
          className="w-full h-auto max-h-[80vh] object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

const Templates: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'rodyti viską' | 'asmeninės svetainės' | 'el. parduotuvės'>('rodyti viską');
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const filteredTemplates = templates.filter(
    (template) => selectedType === 'rodyti viską' || template.type === selectedType
  );

  return (
    <div className="pt-24 min-h-screen">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Website Templates</h1>
          <div className="flex justify-center gap-4">
            {['rodyti viską', 'asmeninės svetainės', 'el. parduotuvės'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type as typeof selectedType)}
                className={`px-6 py-2 rounded-full transition-colors ${selectedType === type
                  ? 'bg-electric-blue text-background'
                  : 'bg-dark-surface-2 text-white/70 hover:text-white'
                  }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-32"
        >
          {filteredTemplates.map((template) => (
            <MobilePreview
              key={template.id}
              template={template}
              onClick={(imageIndex) => setSelectedTemplate(template)}
            />
          ))}
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
