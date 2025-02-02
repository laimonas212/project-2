import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Images from '../img/Images';

interface Project {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

interface ProjectSectionProps {
  project: Project;
  index: number;
}

const projects: Project[] = [
  {
    title: 'Holistinė kosmetologija',
    subtitle: 'Sveikata ir grožis',
    description: 'Holistinė kosmetologija - tai sveikatos ir grožio paslaugos, grindžiamos natūraliais ir ekologiškais ingredientais. Svetainėje pateikiama informacija apie paslaugas, produktus ir jų naudojimą.',
    image: Images.projects.holistinekosmetologija,
    tags: ['Wordpress', 'Divi', 'E-parduotuvė', 'Kalendorius'],
    link: 'https://www.holistinekosmetologija.lt',
  },
  {
    title: 'Brangus Auto',
    subtitle: 'Automobilių supirkimas',
    description: 'Brangus Auto specializuojasi greitame ir patikimame automobilių supirkime. Svetainėje pateikiama informacija apie supirkimo procesą, klientų atsiliepimai ir galimybė gauti pasiūlymą užpildant formą.',
    image: Images.projects.brangusAuto,
    tags: ['Wordpress', 'Divi', 'Failų įkelimas'],
    link: 'https://www.brangusauto.lt',
  },
  {
    title: 'Kaliause',
    subtitle: 'Renginių vedėjai',
    description: 'Tai profesionalių renginių vedėjų komanda su daugiau nei 10 metų patirtimi. Jie organizuoja renginius suaugusiems, įmonėms ir vaikams, užtikrindami įsimintinas šventes. Svetainėje rasite išsamią informaciją apie teikiamas paslaugas ir renginių vedėjų kompetenciją.',
    image: Images.projects.kaliause,
    tags: ['Wordpress', 'Divi', 'Galerija'],
    link: 'https://www.kaliause.lt',
  },
  {
    title: 'Esu Tau',
    subtitle: 'Konsultacijos',
    description: 'Esu Tau teikia dvasinio konsultavimo ir asistavimo paslaugas, padedančias asmeniniam augimui ir savęs pažinimui.',
    image: Images.projects.esuTau,
    tags: ['Wordpress', 'Divi'],
    link: 'https://www.esutau.lt',
  },
  {
    title: 'Angel Butikas',
    subtitle: 'Butikas',
    description: 'Angel Butikas - mados butikas, siūlantis išskirtinius drabužius ir aksesuarus. Svetainėje pateikiama informacija apie prekes ir galimybė įsigyti internetu.',
    image: Images.projects.angelButikas,
    tags: ['Wordpress', 'Divi', 'E-parduotuvė'],
    link: 'https://www.angelbutikas.lt',
  },
  {
    title: 'GoDeko',
    subtitle: 'Švenčių dekoravimas',
    description: 'GoDeko specializuojasi švenčių dekoravimo paslaugose, siūlydama kūrybiškus sprendimus įvairioms progoms. Svetainėje pateikiama paslaugų informacija ir nuotraukų galerija.',
    image: Images.projects.godeko,
    tags: ['Wordpress', 'Divi', 'Galerija'],
    link: 'https://www.godeko.lt',
  },
  {
    title: 'Eriola',
    subtitle: 'Logistikos įmonė',
    description: 'UAB „Eriola“ - stabili ir sparčiai auganti krovinių pervežimo įmonė, teikianti visas transporto ir logistikos paslaugas pasauliniu mastu. Svetainėje pateikiama informacija apie paslaugas ir kontaktai.',
    image: Images.projects.eriola,
    tags: ['Wordpress', 'Divi', 'Kalbos'],
    link: 'https://www.eriola.lt',
  },
  {
    title: 'Gavorka Art',
    subtitle: 'Meninė galerija',
    description: 'Gavorka Art - meninė galerija, pristatanti išskirtinius Povilo Gavorkos darbus. Svetainėje galima peržiūrėti menininko kūrinius ir sužinoti daugiau apie jo veiklą.',
    image: Images.projects.gavorkaArt,
    tags: ['Wordpress', 'Divi', 'Galerija'],
    link: 'https://www.gavorka.art',
  },
  // {
  //   title: 'Evakuacinė Kuprinė',
  //   subtitle: 'Safety Equipment',
  //   description: 'E-commerce solution for a safety equipment store, featuring an intuitive product catalog and streamlined ordering process.',
  //   image: Images.projects.evakuacineKuprine,
  //   tags: ['React', 'Node.js', 'E-commerce'],
  //   link: 'https://www.evakuacinekuprine.lt',
  // },
  {
    title: 'Gavorka',
    subtitle: '3D Animacija',
    description: '3D animacijos studijos tinklalapis su darbų portfeliu.',
    image: Images.projects.gavorka,
    tags: ['Wordpress', 'Divi', 'Portfolio'],
    link: 'https://www.gavorka.com',
  },
  {
    title: 'Grožio Forma',
    subtitle: 'Kosmetikos parduotuvė',
    description: 'Kosmetikos parduotuvė, siūlanti platų grožio priemonių asortimentą. Svetainėje pateikiama išsami prekių informacija ir galimybė jas įsigyti internetu.',
    image: Images.projects.grozioForma,
    tags: ['Wordpress', 'Divi', 'E-parduotuvė'],
    link: 'https://www.grozioforma.lt',
  },
  // {
  //   title: 'Kamtechna',
  //   subtitle: 'Industrial Equipment',
  //   description: 'E-commerce solution for an industrial equipment store, featuring an intuitive product catalog and streamlined ordering process.',
  //   image: Images.projects.kamtechna,
  //   tags: ['React', 'Node.js', 'E-commerce'],
  //   link: 'https://www.kamtechna.lt',
  // },
  {
    title: 'OVC',
    subtitle: 'Internetinė parduotuvė',
    description: 'Šioje parduotuvėje rasite unikalius produktus - knygas ir žaidimus, sukurtus pačių OVC Consulting komandos narių. Tai puikūs įrankiai mokymams, komandiniam darbui ar savęs tobulinimui. Visi produktai pasižymi kokybe ir pritaikomumu įvairioms situacijoms.',
    image: Images.projects.ovc,
    tags: ['Wordpress', 'Divi', 'E-parduotuvė'],
    link: 'https://www.e-shop.ovc.lt',
  },
  {
    title: 'Printery',
    subtitle: 'Spauda ant tekstilės',
    description: 'Printery specializuojasi originalių tekstų ir emblemų spaudoje ant drabužių ir aksesuarų, siūlydama individualius dizainus ir kokybišką spaudą.',
    image: Images.projects.printery,
    tags: ['Wordpress', 'Divi', 'E-parduotuvė', 'Failų įkelimas'],
    link: 'https://www.printery.lt',
  },
  {
    title: 'Prisipušk Šypsena',
    subtitle: 'Internetinė parduotuvė',
    description: 'Internetinė parduotuvė su išsamia prekių informacija ir sklandžiu užsakymo procesu.',
    image: Images.projects.prisipuskSypsena,
    tags: ['Wordpress', 'Divi', 'E-parduotuvė'],
    link: 'https://www.prisipusksypsena.lt',
  },
  {
    title: 'Provanso Svajos',
    subtitle: 'Rankų darbo dovanos',
    description: 'Internetinė parduotuvė, kurioje siūlomos unikalios rankų darbo dovanos, puikiai tinkančios bet kokiai progai.',
    image: Images.projects.provansoSvajos,
    tags: ['Wordpress', 'Divi', 'E-parduotuvė'],
    link: 'https://www.provansosvajos.lt',
  },
  {
    title: 'Smaragdo Uostas',
    subtitle: 'Vaikų darželis',
    description: 'Informacinis vaikų darželio tinklalapis, kuriame pateikiama detali informacija apie ugdymo programas, veiklas ir dienotvarkes.',
    image: Images.projects.smaragdoUostas,
    tags: ['Wordpress', 'Divi', 'Galerija'],
    link: 'https://www.smaragdouostas.lt',
  },
  {
    title: 'SSSprendimai',
    subtitle: 'Silpnų srovių sprendimai',
    description: 'Profesionalus tinklalapis, skirtas silpnųjų srovių sprendimų paslaugoms pristatyti, su aiškia paslaugų struktūra ir kontaktais.',
    image: Images.projects.sssprendimai,
    tags: ['Wordpress', 'Divi'],
    link: 'https://www.sssprendimai.lt',
  },
  {
    title: 'Termoventa',
    subtitle: 'Inžinerinės sistemos',
    description: 'Modernus tinklalapis, skirtas inžinerinių sistemų paslaugų pristatymui, pateikiantis techninę informaciją ir įmonės sprendimus.',
    image: Images.projects.termoventa,
    tags: ['Wordpress', 'Divi'],
    link: 'https://www.termoventa.lt',
  },
  {
    title: 'Tradicinė Virtuvė',
    subtitle: 'Kavinė',
    description: 'Tinklalapis, kuriame tradicinė lietuviška virtuvė atskleidžiama per išsamų meniu, nuotraukas ir kavinės kontaktus.',
    image: Images.projects.tradicineVirtuve,
    tags: ['Wordpress', 'Divi'],
    link: 'https://www.tradicinevirtuve.lt',
  },
  {
    title: 'U Smiler',
    subtitle: 'Irigatorius',
    description: 'E-parduotuvė, skirta irigatorių pristatymui bei pardavimui, su patogiu užsakymo procesu ir vartotojo patirtimi.',
    image: Images.projects.uSmiler,
    tags: ['Wordpress', 'Divi', 'E-parduotuvė'],
    link: 'https://www.u-smiler.lt',
  },
];

const ProjectsList: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center mt-12 mb-12"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Įgyvendinti projektai</h1>
      <p className="text-lg mb-2 text-white/70">
        Čia pateikiami keli iš daugelio mūsų įgyvendintų projektų.
        <br />
        Kiekvienas jų kruopščiai pritaikytas pagal kliento poreikius, užtikrinant estetiką ir funkcionalumą.
      </p>
    </motion.div>
  );
};

const ProjectSection: React.FC<ProjectSectionProps> = ({ project, index }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <motion.div 
      ref={sectionRef}
      className="flex items-center py-12 lg:py-20 relative kaka"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full relative">
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="text-4xl font-display font-bold relative z-10">
              <a href={project.link} target="_blank" rel="noreferrer">
                {project.title}
              </a>
            </h2>
            {project.subtitle && (
              <p className="text-electric-blue text-xl mt-2">{project.subtitle}</p>
            )}
            <div className="absolute -inset-4 bg-dark-surface/50 rounded-lg -z-10 backdrop-blur-sm" />
          </motion.div>

          <motion.div
            className="w-full aspect-[16/9] rounded-lg overflow-hidden mb-6 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <a href={project.link} target="_blank" rel="noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                />
            </a>
          </motion.div>

          <motion.div 
            className="space-y-4 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 p-6  backdrop-blur-sm">
              <p className="text-white/70 text-lg leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-dark-surface/80 rounded-full text-electric-blue text-sm backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-[1fr_2fr] gap-8 items-center max-w-[90%] mx-auto">
          {/* Floating Title */}
          <motion.div
            className="relative h-full flex items-center"
            style={{ y, scale, opacity }}
            
          >
            <div className="vertical-text">
              <h2 className="text-6xl xl:text-7xl font-display font-bold whitespace-nowrap relative">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.div>
                </a>
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 to-neon-purple/10 blur-3xl -z-10" />
              </h2>
              {project.subtitle && (
                <p className="text-electric-blue mt-4 text-xl vertical-text">
                  {project.subtitle}
                </p>
              )}
            </div>
          </motion.div>

          {/* Project Content */}
          <motion.div 
            className="w-full"
            style={{ scale, opacity }}
          >
            <div className="max-w-[85%]">
              {/* Project Image */}
              <motion.div
                className="w-full aspect-[16/9] rounded-lg overflow-hidden mb-12 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    />
                </a>
              </motion.div>

              {/* Project Info */}
              <motion.div
                className="space-y-8 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative z-10 p-8 backdrop-blur-sm">
                  <p className="text-white/70 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-dark-surface/80 rounded-full text-electric-blue text-sm backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="pt-24 relative">

      <div className="relative">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.1)_0%,transparent_70%)]" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(157,0,255,0.1) 0%, transparent 60%)'
        }} />
        </div>
        <ProjectsList />
        {projects.map((project, index) => (
          <ProjectSection key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;