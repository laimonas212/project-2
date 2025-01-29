import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, User, ShoppingCart, Layers } from 'lucide-react';
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
  {
    id: 7,
    title: 'Bed And Breakfast',
    type: 'asmeninės svetainės',
    images: [
      Images.templates.bedAndBreakfast.landing,
      Images.templates.bedAndBreakfast.about,
      Images.templates.bedAndBreakfast.contact,
      Images.templates.bedAndBreakfast.home,
      Images.templates.bedAndBreakfast.rooms,
      Images.templates.bedAndBreakfast.blog,
    ],
    description: 'Kaip ir puikūs nakvynės su pusryčiais namai, šis šablonas yra ir prabangus, ir tvarkingas, su visais būtiniausiais elementais.',
  },
  {
    id: 8,
    title: 'Butcher',
    type: 'el. parduotuvės',
    images: [
      Images.templates.butcher.landing,
      Images.templates.butcher.about,
      Images.templates.butcher.contact,
      Images.templates.butcher.home,
      Images.templates.butcher.recipes,
      Images.templates.butcher.recipe,
    ],
    description: 'Šis maketas yra puikus pasirinkimas mėsos parduotuvėms, restoranams ar kitiems maisto prekių tiekėjams.',
  },
  {
    id: 9,
    title: 'Cafe',
    type: 'asmeninės svetainės',
    images: [
      Images.templates.cafe.landing,
      Images.templates.cafe.about,
      Images.templates.cafe.contact,
      Images.templates.cafe.home,
      Images.templates.cafe.menu,
      Images.templates.cafe.location,
    ],
    description: 'Jei planuojate kurti svetainę savo kavinei, būtinai peržiūrėkite „Cafe Layout Pack“ skirtą „Divi“. Šis nuostabus išdėstymo rinkinys padės jūsų produktams išsiskirti.',
  },
  {
    id: 10,
    title: 'Calligrapher',
    type: 'asmeninės svetainės',
    images: [
      Images.templates.calligrapher.landing,
      Images.templates.calligrapher.about,
      Images.templates.calligrapher.contact,
      Images.templates.calligrapher.home,
      Images.templates.calligrapher.services,
      Images.templates.calligrapher.portfolio,
      Images.templates.calligrapher.blog,
      Images.templates.calligrapher.classes,
    ],
    description: 'Kaligrafo išdėstymo paketas sujungia minimalistinį stilių su įspūdingais šepetėlių efektais, todėl tai bus jūsų pagrindinis pasirinkimas kuriant bet kurią kaligrafijos svetainę.',
  },
  {
    id: 11,
    title: 'Candle Making',
    type: 'el. parduotuvės',
    images: [
      Images.templates.candleMaking.landing,
      Images.templates.candleMaking.about,
      Images.templates.candleMaking.contact,
      Images.templates.candleMaking.home,
      Images.templates.candleMaking.shop,
      Images.templates.candleMaking.product,
      Images.templates.candleMaking.blog,
    ],
    description: 'Žvakių gamybos išdėstymo paketas pasižymi erdviais ir tvarkingais dizaino elementais, suteikiančiais turiniui daugiau erdvės. Ypač išsiskiria estetiški apvalūs mygtukai.',
  },
  {
    id: 12,
    title: 'Car dealer',
    type: 'asmeninės svetainės',
    images: [
      Images.templates.carDealer.landing,
      Images.templates.carDealer.about,
      Images.templates.carDealer.contact,
      Images.templates.carDealer.home,
      Images.templates.carDealer.listings,
      Images.templates.carDealer.listing,
      Images.templates.carDealer.financing
    ],
    description: 'Automobilių plovimo išdėstymo paketas yra puikus pasirinkimas automobilių plovimo įmonėms, kurios nori pristatyti savo paslaugas internete.',
  },
  {
    id: 13,
    title: 'Consulting',
    type: 'asmeninės svetainės',
    images: [
      Images.templates.consulting.landing,
      Images.templates.consulting.about,
      Images.templates.consulting.contact,
      Images.templates.consulting.home,
      Images.templates.consulting.services,
      Images.templates.consulting.service,
      Images.templates.consulting.blog,
    ],
    description: 'Šis įspūdingas dizainas kupinas vizualių elementų, kurie patrauks būsimų klientų dėmesį - nuo ryškaus kontrasto ir spalvų akcentų iki tinkamo kiekio vaizdų jūsų istorijai perteikti.',
  },
  {
    id: 14,
    title: 'Design agency',
    type: 'asmeninės svetainės',
    images: [
      Images.templates.designAgency.landing,
      Images.templates.designAgency.home,
      Images.templates.designAgency.about,
      Images.templates.designAgency.blog,
      Images.templates.designAgency.contact,
      Images.templates.designAgency.caseStudy,
      Images.templates.designAgency.portfolio,
      Images.templates.designAgency.project1,
      Images.templates.designAgency.project2,
    ],
    description: 'Šis dizaino agentūros išdėstymo paketas suteiks jūsų lankytojams visą reikiamą informaciją. Taip pat leis stilingai pabrėžti pačius vertingiausius jūsų agentūros privalumus.',
  }
  

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
        <h3 className="text-xl font-bold mb-1 flex items-center justify-center gap-2">
          {template.title}
          {template.type === 'asmeninės svetainės' ? (
            <User className="inline-block h-5" />
          ) : (
            <ShoppingCart className="inline-block h-5" />
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
        className="absolute bottom-8 align-center p-2 bg-dark-surface/60 p-2 text-white rounded-full hover:bg-dark-surface/80"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Paruošti dizainai</h1>
          <p className="text-lg mb-8 text-white/70">
            Pasirinkite iš mūsų paruoštų maketų ir pradėkite kurti savo svetainę!
          </p>
          <div className="flex justify-center gap-4">
            {[
              { type: 'rodyti viską', icon: <Layers /> },
              { type: 'asmeninės svetainės', icon: <User /> },
              { type: 'el. parduotuvės', icon: <ShoppingCart /> },
            ].map(({ type, icon }) => (
              <button
                key={type}
                onClick={() => setSelectedType(type as typeof selectedType)}
                className={`px-6 py-2 rounded-full transition-colors text-xs ${selectedType === type
                  ? 'bg-electric-blue text-background'
                  : 'bg-dark-surface-2 text-white/70 hover:text-white'
                  } flex items-center gap-2`}
              >
                {icon}
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
