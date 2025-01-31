import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, User, ShoppingCart, Layers, Info, Plus } from 'lucide-react';
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
    description: 'Šis verslo dizaino paketas suteikia viską, ko reikia: kontaktus su forma kiekviename puslapyje, portfelio ir kainų puslapius (su DUK). Landing page turi pilno ekrano antraštę su dviem CTA, taip pat naudingus elementus, kaip atsiliepimus, kainų lentelę ir el. pašto užsakymą.',
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
  },
  {
    id: 15,
    title: 'Digital marketing',
    type: 'asmeninės svetainės',
    images: [
      Images.templates.digitalMarketing.landing,
      Images.templates.digitalMarketing.about,
      Images.templates.digitalMarketing.contact,
      Images.templates.digitalMarketing.home,
      Images.templates.digitalMarketing.services,
      Images.templates.digitalMarketing.careers,
      Images.templates.digitalMarketing.portfolio,
      Images.templates.digitalMarketing.blog,
    ],
    description: 'Ryškių spalvų ir abstrakčių formų naudojimas suteiks jūsų svetainei modernų ir šiuolaikišką pojūtį. Šis rinkinys puikiai tinka aiškiam ir lengvai skaitomam turiniui dalintis, neprarandant estetiško ir patrauklaus dizaino.',
  },
  {
    id: 16,
    title: 'Fitness gym',
    type: 'asmeninės svetainės',
    images: [
      Images.templates.fitnessGym.landing,
      Images.templates.fitnessGym.about,
      Images.templates.fitnessGym.contact,
      Images.templates.fitnessGym.home,
      Images.templates.fitnessGym.classes,
      Images.templates.fitnessGym.pricing,
      Images.templates.fitnessGym.blog,
    ],
    description: 'Šis rinkinys apima puslapius, skirtus reklamuoti jūsų sporto klubo narystes, užsiėmimus, programas, kainų planus ir dar daugiau. Erdvi turinio tinklelio išdėstymo struktūra leidžia foninėms nuotraukoms ir gražiems antraščių dizainams atsiskleisti visu savo grožiu.',
  },
  {
    id: 17,
    title: 'Fitness trainer',
    type: 'asmeninės svetainės',
    images: [
      Images.templates.fitnessTrainer.landing,
      Images.templates.fitnessTrainer.about,
      Images.templates.fitnessTrainer.contact,
      Images.templates.fitnessTrainer.home,
      Images.templates.fitnessTrainer.services,
      Images.templates.fitnessTrainer.service,
      Images.templates.fitnessTrainer.blog,
      Images.templates.fitnessTrainer.pricing,
    ],
    description: 'Su subtiliomis animacijomis, ryškiomis spalvomis ir išraiškingu tekstu šis rinkinys puikiai tinka jūsų paslaugoms, atsiliepimams ir kitiems svarbiems akcentams pristatyti, padedant kurti jūsų sporto treniruočių verslą stilingai.',
  },
  {
    id: 18,
    title: 'Furniture',
    type: 'el. parduotuvės',
    images: [
      Images.templates.furniture.landing,
      Images.templates.furniture.about,
      Images.templates.furniture.contact,
      Images.templates.furniture.home,
      Images.templates.furniture.shop,
      Images.templates.furniture.product,
      Images.templates.furniture.sale,
      Images.templates.furniture.blog,
    ],
    description: 'Šis rinkinys apima aukštos kokybės vaizdus ir piktogramas, kuriuos galite naudoti be jokių apribojimų. Be įprastų puslapių išdėstymų, rasite ir unikalius su produktais susijusius dizainus, kurie pakels jūsų internetinės parduotuvės išvaizdą į aukštesnį lygį.',
  },
  {
    id: 19,
    title: 'Home decor',
    type: 'el. parduotuvės',
    images: [
      Images.templates.homeDecor.landing,
      Images.templates.homeDecor.about,
      Images.templates.homeDecor.contact,
      Images.templates.homeDecor.home,
      Images.templates.homeDecor.shop,
      Images.templates.homeDecor.product,
      Images.templates.homeDecor.blog,
    ],
    description: 'Ryškus kontrastas ir tekstas pabrėžia produktų nuorodas, vaizdus ir CTA mygtukus. Pagrindiniame puslapyje yra turinio sekcijos, kurios pritraukia pirkėjus - kategorijų aprašymai, išskirti produktai ir galerija.',
  },
  {
    id: 20,
    title: 'Home goods',
    type: 'el. parduotuvės',
    images: [
      Images.templates.homeGoods.landing,
      Images.templates.homeGoods.about,
      Images.templates.homeGoods.contact,
      Images.templates.homeGoods.home,
      Images.templates.homeGoods.shop,
      Images.templates.homeGoods.blog,
    ],
    description: 'Galite stilingai pristatyti savo produktus naudodami drąsų, didelio dydžio tekstą, įdomius vaizdus, specialias produktų sekcijas, efektyvų raginimą veikti su atgalinio skaičiavimo laikmačiu ir dar daugiau.',
  },
  {
    id: 21,
    title: 'Home rental',
    type: 'asmeninės svetainės',
    images: [
      Images.templates.homeRental.landing,
      Images.templates.homeRental.about,
      Images.templates.homeRental.contact,
      Images.templates.homeRental.home,
      Images.templates.homeRental.features,
      Images.templates.homeRental.pricing,
      Images.templates.homeRental.blog,
    ],
    description: 'Elementai apima paslaugų sekciją jūsų nuomojamo būsto patogumams pristatyti, vaizdų galeriją ir efektyvų raginimą veikti, kad pritrauktumėte naujus nuomininkus. Nesvarbu, ar nuomojate namą, daugiabutį ar kitą būstą, „Home Rental“ išdėstymo paketas suteikia viską, ko reikia jūsų nuomai stilingai pristatyti.',
  },
  {
    id: 22,
    title: 'Perfumery',
    type: 'el. parduotuvės',
    images: [
      Images.templates.perfumery.landing,
      Images.templates.perfumery.about,
      Images.templates.perfumery.contact,
      Images.templates.perfumery.home,
      Images.templates.perfumery.shop,
      Images.templates.perfumery.product,
      Images.templates.perfumery.blog,
    ],
    description: '„Perfumery“ išdėstymo paketas tikrai atgaivins bet kurią internetinę kvepalų parduotuvę. Produktai pristatomi su įspūdingomis fotografijomis, kurias papildo gaivus ir elegantiškas dizainas.',
  },
  {
    id: 23,
    title: 'Pizzeria',
    type: 'asmeninės svetainės',
    images: [
      Images.templates.pizzeria.landing,
      Images.templates.pizzeria.about,
      Images.templates.pizzeria.contact,
      Images.templates.pizzeria.home,
      Images.templates.pizzeria.menu,
      Images.templates.pizzeria.booking,
    ],
    description: 'Šis paketas iškelia jūsų picerijos produktus į pirmą planą per aukštos kokybės nuotraukas ir elegantiškas puslapių struktūras. Meniu ir rezervacijos puslapiai padeda sukurti sklandžią klientų patirtį bei sustiprinti jūsų prekės ženklą!',
  },
  {
    id: 24,
    title: 'Soccer club',
    type: 'asmeninės svetainės',
    images: [
      Images.templates.soccerClub.landing,
      Images.templates.soccerClub.about,
      Images.templates.soccerClub.contact,
      Images.templates.soccerClub.home,
      Images.templates.soccerClub.blog,
      Images.templates.soccerClub.team,
      Images.templates.soccerClub.resources,
    ],
    description: 'Svetainės kūrimas naudojant „Soccer Club“ išdėstymo paketą yra tikras malonumas. Visi puslapiai, vaizdai ir struktūros jau apgalvoti už jus, todėl belieka tik pritaikyti svetainę pagal savo futbolo klubą.',
  },
  {
    id: 25,
    title: 'Sunglasses',
    type: 'el. parduotuvės',
    images: [
      Images.templates.sunglasses.landing,
      Images.templates.sunglasses.about,
      Images.templates.sunglasses.contact,
      Images.templates.sunglasses.home,
      Images.templates.sunglasses.shop,
      Images.templates.sunglasses.product,
      Images.templates.sunglasses.blog,
    ],
    description: 'Pasižymi modernia monochromine spalvų schema su ryškiomis mandarinų spalvos detalėmis, kurios stilingai parodo jūsų akinius. Vaizdai su suapvalintais kampais ir didelėmis antraštėmis pabrėžia dizainą, leidžiant klientams žiūrėti į tinkamas vietas.',
  },
  {
    id: 26,
    title: 'Travel',
    type: 'el. parduotuvės',
    images: [
      Images.templates.travel.landing,
      Images.templates.travel.about,
      Images.templates.travel.contact,
      Images.templates.travel.home,
      Images.templates.travel.shop,
      Images.templates.travel.packages,
      Images.templates.travel.team,
      Images.templates.travel.blog,
    ],
    description: 'Šis dizainas sukurtas taip, kad iš karto atrodytų nuostabiai. Vienas iš šio dizaino akcentų yra CTA (kvietimas veikti) puslapio apačioje pagrindiniame puslapyje. Parallax efektas su įspūdingais vaizdais yra nuostabus derinys.',
  },
  {
    id: 27,
    title: 'Venture capital',
    type: 'asmeninės svetainės',
    images: [
      Images.templates.ventureCapital.landing,
      Images.templates.ventureCapital.about,
      Images.templates.ventureCapital.contact,
      Images.templates.ventureCapital.home,
      Images.templates.ventureCapital.portfolio,
      Images.templates.ventureCapital.team,
      Images.templates.ventureCapital.blog,
    ],
    description: '„Venture Capital“ dizaino paketas sujungia gražius maketus su lengvai sekamomis puslapių struktūromis - tobula kombinacija kuriant profesionalią svetainę, kuri orientuota į jūsų lankytojų problemas ir poreikius.',
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
          <p className="text-lg mb-2 text-white/70">
            Pasirinkite iš mūsų paruoštų maketų ir pradėkite kurti savo svetainę!
          </p>
          <p className="text-xs mb-16 text-white/70">
            <span>
              <Info className="w-6 h-6 inline-block mr-2" />
            </span>
            Mūsų paruošti dizainai tinka bet kokiam verslui - svarbiausia pasirinkti tinkamą išdėstymą, nes paveikslėlius, spalvas ir tekstus galima lengvai pritaikyti. Galite rinktis pagal tematiką, tačiau jei išdėstymas jums patinka, jį galima pritaikyti bet kokiai sričiai.
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
              onClick={() => setSelectedTemplate(template)}
            />
          ))}
       
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-center items-center gap-4 flex-col"
          >
            <Plus className="w-20 h-20 text-white" />
            <h2 className="text-white/70 text-lg text-center">Galime pasiūlyti daugiau nei 2000 variacijų</h2>
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
