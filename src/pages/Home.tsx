import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, Layout, Smartphone, Shield, Clock, Target, Award, Star, 
  ChevronRight, Zap, Users, Laptop, Palette, Database, Cloud,
  ArrowRight, Sparkles
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

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
      title: 'Web Design',
      description: 'Beautiful, responsive websites that engage users and drive results.',
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Development',
      description: 'Robust web applications with modern technologies and best practices.',
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile First',
      description: 'Seamless experiences across all devices and screen sizes.',
    },
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast',
      description: 'Optimized performance for the best user experience',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure',
      description: 'Built with security best practices from the ground up',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'User-Centric',
      description: 'Designed with your users in mind',
    },
  ];

  const technologies = [
    { icon: <Laptop />, name: 'Frontend', items: ['React', 'Next.js', 'TypeScript'] },
    { icon: <Database />, name: 'Backend', items: ['Node.js', 'PostgreSQL', 'GraphQL'] },
    { icon: <Palette />, name: 'Design', items: ['Figma', 'Tailwind', 'Framer'] },
    { icon: <Cloud />, name: 'DevOps', items: ['AWS', 'Docker', 'CI/CD'] },
  ];

  const process = [
    { number: '01', title: 'Discovery', description: 'Understanding your needs and goals' },
    { number: '02', title: 'Planning', description: 'Creating a roadmap for success' },
    { number: '03', title: 'Design', description: 'Crafting beautiful user experiences' },
    { number: '04', title: 'Development', description: 'Building with cutting-edge tech' },
    { number: '05', title: 'Launch', description: 'Deploying and optimizing' },
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              We offer comprehensive web solutions tailored to your needs
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
                Why Choose Us?
              </h2>
              <p className="text-white/70 text-lg mb-8">
                We combine technical expertise with creative innovation to deliver exceptional results.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">What our clients say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="card hover:border-electric-blue/30 transition-colors duration-300 p-6">
                    <p className="text-white/70 mb-4">
                      "I was very impressed with the quality of work and the level of service I received from [Your Company Name]. They were always on time, on budget, and very responsive to my needs."
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
                  <div className="card hover:border-electric-blue/30 transition-colors duration-300 p-6">
                    <p className="text-white/70 mb-4">
                      "The team at [Your Company Name] was a pleasure to work with. They were very knowledgeable and professional, and they helped me to achieve my goals."
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Tech Stack</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              We use cutting-edge technologies to build modern web applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-dark-surface-2 hidden lg:block">
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
              Ready to Start Your Project?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Let's create something amazing together. Get in touch with us today.
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