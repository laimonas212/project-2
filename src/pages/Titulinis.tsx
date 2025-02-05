import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Layout, Smartphone, Award, Users, ArrowRight, ShoppingCart, CircleUser
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Images from '../img/Images';

const Titulinis = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: 'Individualus svetainių kūrimas',
      description: 'Modernūs ir funkcionalūs interneto svetainių sprendimai, pritaikyti jūsų verslo poreikiams.',
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: 'E-komercijos sprendimai',
      description: 'Profesionalūs el. parduotuvių sprendimai, kurie padeda didinti pardavimus ir pasiekti tikslus.',
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Pritaikyta visiems įrenginiams',
      description: 'Visiškai adaptuotos svetainės, kurios puikiai veikia tiek kompiuteriuose, tiek mobiliuosiuose įrenginiuose.',
    },
  ];

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Patyrusi Komanda',
      description: 'Mūsų komanda turi daugelio metų patirtį interneto svetainių kūrime.',
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: 'Individualūs Sprendimai',
      description: 'Siūlome personalizuotas paslaugas, pritaikytas jūsų specifiniams poreikiams.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Klientų Pasitenkinimas',
      description: 'Mes prioritetą teikiame klientų pasitenkinimui ir siekiame viršyti lūkesčius.',
    },
  ];

  const testimonials = [
    {
      content: '"Puslapis sukurtas profesonaliai, greitai ir kokybiškai, 100% rekomenduoju!"',
      name: 'Povilas',
      company: 'Freelance CG illustrator & animator',
      url: 'https://gavorka.com/',
    },
    {
      content: '"Puikus darbas kuriant įstaigos svetainę. Profesionalu, atsižvelgiama į visus pasiūlymus, ieškoma geriausių sprendimų. Darbas atliktas laikantis visų sutartų terminų. Rekomenduojame."',
      name: 'Rūta',
      company: 'Kauno „Paparčio“ pradinė mokykla',
      url: 'https://paparciopm.lt/',
    },
    {
      content: '"Likau labai patenkinta dėl internetinės svetainės sukūrimo, viskas greitai, nesudėtingai ir už protingą kainą. Taip pat labai patiko greita komunikacija ir atsižvelgimas į konkrečius norus. Ačiū ir dar tikrai sugrįšiu su kitais projektais :)"',
      name: 'Greta',
      company: 'GO deko',
      url: 'https://godeko.lt/',
    },
    {
      content: '"Puikiai ir profesionaliai atliktas darbas, visada atsiliepiama ir pakonsultuojama telefonu. Viskas puikiai, gera kaina."',
      name: 'Regina',
      company: 'Lopšelis-darželis - "Smaragdo uostas"',
      url: 'https://smaragdouostas.lt/',
    },
  ];

  const technologies = [
    {
      name: 'Wordpress',
      image: Images.logos.wordpress,
    },
    {
      name: 'Woocommerce',
      image: Images.logos.wooWhite,
    },
    {
      name: 'Divi',
      image: Images.logos.divi,
    },
    {
      name: 'Elementor',
      image: Images.logos.elementor,
    },
    {
      name: 'Midjourney',
      image: Images.logos.midjourney,
    },
    {
      name: 'ChatGpt',
      image: Images.logos.chatgpt,
    },
    {
      name: 'React',
      image: Images.logos.react,
    },
    {
      name: 'HTML5',
      image: Images.logos.html,
    },
    {
      name: 'CSS3',
      image: Images.logos.css,
    },
  ];

  const process = [
    { number: '01', title: 'Poreikių analizė', description: 'Jūsų poreikių ir tikslų išsiaiškinimas' },
    { number: '02', title: 'Planavimas', description: 'Sudarome aiškų veiksmų planą' },
    { number: '03', title: 'Dizainas', description: 'Pasirenkate tinkamą dizainą' },
    { number: '04', title: 'Kūrimas', description: 'Naudojame pažangiausias technologijas' },
    { number: '05', title: 'Paleidimas', description: 'Įgyvendiname ir optimizuojame projektą' },
  ];

  return (
    <div className="overflow-hidden">
      <HeroSection />

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Teikiamos paslaugos</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Teikiame visapusiškas interneto svetainių kūrimo paslaugas, pritaikytas jūsų verslo poreikiams. Mūsų komanda dirba su naujausiomis technologijomis ir geriausia praktika, siekdama sukurti aukštos kokybės interneto svetaines.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card group hover:border-electric-blue/30 transition-colors duration-300"
                >
                  <div className="text-electric-blue mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/70">{service.description}</p>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-surface relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Kodėl pasirinkti mus?
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Esame patyrusi komanda, kuri derina pažangias technologijas ir kūrybinius sprendimus, kad sukurtume unikalius ir aukščiausios kokybės interneto svetainių sprendimus.
              </p>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-2 bg-dark-surface-2 rounded-lg text-electric-blue">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{feature.title}</h3>
                      <p className="text-white/70">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Testimonials Section */}
            <section className="relative">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Ką sako mūsų klientai</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col justify-between card hover:border-electric-blue/30 transition-colors duration-300 p-6"
                    >
                      <p className="text-white/70 mb-4">
                        {testimonial.content}
                      </p>
                      <div>
                        <div className="flex items-center gap-4">
                          <CircleUser className="w-6 h-6 text-electric-blue" />
                          <h3 className="text-xl font-bold mb-1">{testimonial.name}</h3>
                        </div>
                        <Link to={testimonial.url} target='_blank' className='text-xs font-light text-white/70'>{testimonial.company }</Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Naudojamos technologijos</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Naudojame modernias technologijas ir geriausias praktikas, siekdami sukurti aukštos kokybės interneto svetaines.
            </p>
          </motion.div>

          {/* align vertically */}
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((technology, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className=" hover:border-electric-blue/30 h-auto w-36 card flex items-center justify-center transition-colors duration-300"
              >
                <div className="text-electric-blue">
                  <img
                    src={technology.image}
                    alt={technology.name}
                    className={`${technology.name === 'React' || technology.name === 'HTML5' || technology.name === "CSS3"
                        ? 'h-10 w-10'
                        : 'h-auto w-24'
                      }`}
                  />
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-dark-surface relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Procesas</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Mūsų darbo procesas yra struktūruotas ir efektyvus, kad užtikrintume aukščiausios kokybės interneto svetainių kūrimą.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute top-1/3 my-2 left-0 w-full h-0.5 bg-dark-surface-2 hidden lg:block">
              <div className="h-full bg-gradient-to-r from-electric-blue to-neon-purple w-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-5xl font-display font-bold text-electric-blue mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/50 to-neon-purple/50" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pasiruošę pradėti savo projektą?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Susisiekite su mumis ir pradėkite savo interneto svetainės kūrimo kelionę jau šiandien.
            </p>
            <Link to="/kontaktai">

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button-primary inline-flex items-center gap-2 group"
              >
                <span>Konsultuotis</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Display 3 'blog' entries (cards), title, subtitle, read more  */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Naujienos ir gidai</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Naujausia informacija, naudingi patarimai ir įžvalgos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card group hover:border-electric-blue/30 transition-colors duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img src={Images.logos.wooWhite} alt="Woocommerce" className="object-cover w-auto h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">WooCommerce užsakymų valdymas</h3>
              <p className="text-white/70">
                WooCommerce užsakymų valdymas leidžia lengvai sekti ir tvarkyti užsakymus, keisti jų būsenas, generuoti sąskaitas faktūras ir organizuoti prekių pristatymą. Tai patogus įrankis efektyviam užsakymų apdorojimui.
              </p>

              <Link to="/blog/woocommerce-uzsakymu-valdymas" className="text-electric-blue font-bold hover:text-electric-blue/70 transition-colors duration-300">
                Skaityti daugiau
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            className="card group hover:border-electric-blue/30 transition-colors duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img src={Images.logos.wooWhite} alt="Woocommerce" className="object-cover w-auto h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Kaip sukurti naują WooCommerce produktą?</h3>
              <p className="text-white/70">
                Norėdami sukurti naują produktą WooCommerce, eikite į „Produktai“ sekciją ir pasirinkite „Pridėti naują“. Čia galite įvesti produkto pavadinimą, aprašymą, kainą, nuotraukas ir kitas detales. Pasirinkite produktų kategorijas ir pritaikykite prekių variantus, jei reikia.
              </p>

              <Link to="/blog/naujas-woocommerce-produktas" className="text-electric-blue font-bold hover:text-electric-blue/70 transition-colors duration-300">
                Skaityti daugiau
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card group hover:border-electric-blue/30 transition-colors duration-300"
          >
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <img src={Images.logos.divi} alt="WordPress" className="object-cover w-auto h-8" />
            </div>
              <h3 className="text-xl font-bold mb-2">Kaip naudotis DIVI?</h3>
              <p className="text-white/70">
                Divi yra populiarus WordPress puslapių kūrimo įrankis, leidžiantis lengvai kurti puslapius naudojant drag-and-drop redaktorių. Norėdami pradėti, tiesiog įdiekite Divi temą, pasirinkite šabloną arba kurkite puslapius nuo nulio. Naudodami Divi, galite pridėti įvairias sekcijas, modulius ir pritaikyti dizainą pagal savo poreikius.
              </p>
            <Link to="/blog/kaip-naudotis-divi" className="text-electric-blue font-bold hover:text-electric-blue/70 transition-colors duration-300">
              Skaityti daugiau
            </Link>
          </motion.div>
          </div>
        </div>
      </section>
    </div>

  );
  
};
<Footer />

export default Titulinis;