import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, Layout, Smartphone, Shield, Clock, Target, Award, Star, 
  ChevronRight, Zap, Users, Laptop, Palette, Database, Cloud,
  ArrowRight, Sparkles, ShoppingCart
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

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

  const technologies = [
    { icon: <Laptop />, name: 'Frontend', items: ['React', 'Next.js', 'TypeScript'] },
    { icon: <Database />, name: 'Backend', items: ['Node.js', 'PostgreSQL', 'GraphQL'] },
    { icon: <Palette />, name: 'Design', items: ['Figma', 'Tailwind', 'Framer'] },
    { icon: <Cloud />, name: 'DevOps', items: ['AWS', 'Docker', 'CI/CD'] },
  ];

  const process = [
    { number: '01', title: 'Poreikių analizė', description: 'Jūsų poreikių ir tikslų išsiaiškinimas' },
    { number: '02', title: 'Planavimas', description: 'Sudarome aiškų veiksmų planą' },
    { number: '03', title: 'Dizainas', description: 'Pasitenkate tinkamą dizainą' },
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            <section className="py-20 relative">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Ką sako mūsų klientai</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="card hover:border-electric-blue/30 transition-colors duration-300 p-6">
                    <p className="text-white/70 mb-4">
                      “Puslapis sukurtas profesonaliai, greitai ir kokybiškai, 100% rekomenduoju!”
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-200 rounded-full mr-4">
                        <img src="/src/img/gavorka.jpg" alt="Client avatar" className="rounded-full w-full h-full" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">Povilas</h3>
                        <p className="text-gray-400">gavorka.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="card hover:border-electric-blue/30 transition-colors duration-300 p-6">
                    <p className="text-white/70 mb-4">
                      “Labai esu patenkinta sukurta svetaine! Greitai ir kokybiškai. Malonus ir paprastas bendravimas! Labai profesionalus darbas. Rekomenduoju!”
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-200 rounded-full mr-4">
                        <img src="..." alt="Client avatar" className="rounded-full w-full h-full" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">Client Name</h3>
                        <p className="text-gray-400">Company Name</p>
                      </div>
                    </div>
                  </div>
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
              Naudojame modernias technologijas ir geriausias praktikas, siekdami sukurti aukštos kokybės interneto svetaines
            </p>
          </motion.div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card hover:border-electric-blue/30 transition-colors duration-300"
              >
                <div className="text-electric-blue mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold mb-4">{tech.name}</h3>
                <div className="space-y-2">
                  {tech.items.map(item => (
                    <div
                      key={item}
                      className="px-3 py-1.5 bg-dark-surface/80 rounded-lg text-white/70"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div> */}

          {/* list of technologies with simple logos, ie. worpress, woocommerce, divi, elementor, etc.
           */}
          {/* align vertically */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card hover:border-electric-blue/30 flex items-center justify-center transition-colors duration-300"
            >
              <div className="text-electric-blue mb-4">
                <img src="https://www.amberweb.lt/wp-content/uploads/2024/11/WordPress-logotype-standard-300x102.png" alt="WordPress" className="w-full h-full" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card hover:border-electric-blue/30 flex items-center justify-center transition-colors duration-300"
            >
              <div className="text-electric-blue mb-4">
                <img src="https://www.amberweb.lt/wp-content/uploads/2024/11/pngwing.com_-300x76.png" alt="WooCommerce" className="w-full h-full" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card hover:border-electric-blue/30 flex items-center justify-center transition-colors duration-300"
            >
              <div className="text-electric-blue mb-4">
                <img src="https://www.amberweb.lt/wp-content/uploads/2024/11/logo-divi-1-300x127.png" alt="Divi" className="w-full h-full" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="card hover:border-electric-blue/30 flex items-center justify-center transition-colors duration-300"
            >
              <div className = "text-electric-blue mb-4">
                <img src="https://www.amberweb.lt/wp-content/uploads/2024/11/Elementor-Logo-Full-Red-300x60.png" alt="Elementor" className="w-full h-full" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="card hover:border-electric-blue/30 flex items-center justify-center transition-colors duration-300"
            >
              <div className="text-electric-blue mb-4">
                <img src="https://www.amberweb.lt/wp-content/uploads/2024/11/chatgpt-logo-300x127.png" alt="WooCommerce" className="w-full h-full" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="card hover:border-electric-blue/30 flex items-center justify-center transition-colors duration-300"
            >
              <div className="text-electric-blue mb-4">
                <img src="https://www.amberweb.lt/wp-content/uploads/2024/11/midjourney-logo-1-300x127.png" alt="WooCommerce" className="w-full h-full" />
              </div>
            </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              A streamlined approach to bringing your vision to life
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
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 to-neon-purple/10" />
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-primary inline-flex items-center gap-2 group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>

  );
  
};
<Footer />

export default Home;