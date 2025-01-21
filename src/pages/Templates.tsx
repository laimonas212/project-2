import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Template {
  id: number;
  title: string;
  type: 'personal' | 'e-shop';
  images: string[]; // Multiple images
  description: string;
}

const templates: Template[] = [
  {
    id: 1,
    title: 'Portfolio One',
    type: 'personal',
    images: [
      'src/img/templates/acai-bowl-landing-page-533x2357.jpg',
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d',
    ],
    description: 'Minimalist portfolio template for creatives',
  },
  {
    id: 2,
    title: 'Portfolio Two',
    type: 'personal',
    images: [
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    ],
    description: 'Dynamic portfolio with 3D elements',
  },
  // Add more templates as needed...
  {
    id: 3,
    title: 'E-Shop One',
    type: 'e-shop',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d',
    ],
    description: 'E-commerce template with a focus on product presentation',
  },
  {
    id: 4,
    title: 'E-Shop Two',
    type: 'e-shop',
    images: [
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    ],
    description: 'Modern e-commerce solution with advanced filtering',
  },
  {
    id: 5,
    title: 'E-Shop Three',
    type: 'e-shop',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d',
    ],
    description: 'Fashion e-commerce template with a focus on visual storytelling',
  },
  // add 5 more templates
  {
    id: 6,
    title: 'Portfolio Three',
    type: 'personal',
    images: [
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    ],
    description: 'Creative portfolio template with a focus on visual storytelling',
  },
  {
    id: 7,
    title: 'Portfolio Four',
    type: 'personal',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d',
    ],
    description: 'Portfolio template for photographers and visual artists',
  },
  {
    id: 8,
    title: 'E-Shop Four',
    type: 'e-shop',
    images: [
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    ],
    description: 'Fashion e-commerce template with a focus on visual storytelling',
  },
  {
    id: 9,
    title: 'E-Shop Five',
    type: 'e-shop',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d',
    ],
    description: 'Modern e-commerce solution with advanced filtering',
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
  const [selectedType, setSelectedType] = useState<'all' | 'personal' | 'e-shop'>('all');
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const filteredTemplates = templates.filter(
    (template) => selectedType === 'all' || template.type === selectedType
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
            {['all', 'personal', 'e-shop'].map((type) => (
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
