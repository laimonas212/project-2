import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Clock, Handshake, MonitorSmartphone, PenTool, Rocket } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24h in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const format = (t: number) => String(t).padStart(2, '0');
  const hours = format(Math.floor(timeLeft / 3600));
  const minutes = format(Math.floor((timeLeft % 3600) / 60));
  const seconds = format(timeLeft % 60);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="text-6xl md:text-9xl text-transparent font-black bg-clip-text bg-gradient-to-r from-electric-blue to-neon-purple tracking-widest font-mono [font-feature-settings:'tnum']"
    >
      {hours}:{minutes}:{seconds}
    </motion.div>
  );
};

const HeroSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const stats = [
    { icon: <Rocket className="w-8 h-8" />, label: 'Svetainė paruošta per 24 val.' },
    { icon: <MonitorSmartphone className="w-8 h-8" />, label: 'Pilnai pritaikyta mobiliesiems' },
    { icon: <PenTool className="w-8 h-8" />, label: 'Dizainas pagal šabloną' },
    { icon: <Handshake className="w-8 h-8" />, label: 'Palaikymas po paleidimo' },
  ];

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3, ease: 'easeOut' },
    }),
  };

  return (
    <section className="-mt-20 :md-mt-36 min-h-screen flex flex-col items-center justify-center bg-background px-4 relative overflow-hidden">
      <ParticlesBackground />

      {/* Overlays */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(60,80,200,0.25)_0%,transparent_70%)]" />
      </div>

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 text-center max-w-3xl mx-auto space-y-8 pt-20"
      >
        <motion.div
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={titleVariants}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-dark-surface/60 backdrop-blur"
        >
          <Rocket className="w-5 h-5 text-electric-blue" />
          <span className="text-white/80 text-sm font-medium">
            Gaukite savo svetainę per 24 valandas
          </span>
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={titleVariants}
          className="flex flex-col items-center justify-center gap-2"
        >
          <Countdown />
          <span className="text-white/40 text-sm flex items-center gap-1">
            <Clock className="w-4 h-4" /> Iki jūsų svetainės paleidimo
          </span>
        </motion.div>

        <motion.h1
          custom={2}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-4xl md:text-7xl font-bold leading-tight text-white"
        >
          Profesionali interneto svetainė&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-purple">
            per 24h
          </span>
        </motion.h1>

        <motion.p
          custom={3}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-white/70 text-lg md:text-xl"
        >
          Sukursime pilnai veikiančią interneto svetainę vos per vieną dieną.
          <br /> Viskas įskaičiuota.
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={titleVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link to="/kontaktai">
            <button className="button-primary">Užsisakyti dabar</button>
          </Link>
          <Link to="/projektai">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 hover:border-electric-blue/50 transition-colors duration-300 backdrop-blur-sm">
              Peržiūrėti darbus
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="relative z-10 mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            custom={5 + index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={titleVariants}
          >
            <div className="text-3xl md:text-4xl flex justify-center text-electric-blue mb-2">
              {stat.icon}
            </div>
            <p className="text-white/70 text-base">{stat.label}</p>
          </motion.div>
        ))}
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-white/50">Slinkite žemyn</span>
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center p-1"
            >
              <div className="w-1 h-1.5 bg-electric-blue rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
