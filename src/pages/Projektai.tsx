import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import projects  from '../components/Projects';
import { MousePointerClick } from 'lucide-react';
import sortedIds from '../components/sortedProjectIds';

interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  alt: string;
  tags: string[];
  link?: string;
}

interface ProjectSectionProps {
  project: Project;
  index: number;
}

const sortedProjects = [...projects].sort(
  (a, b) => sortedIds.indexOf(a.id) - sortedIds.indexOf(b.id)
);

const ProjectsList: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center mt-0 md:mt-12 mb-12"
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
      className="flex items-center py-12 lg:py-20 relative"
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
              <a href={`/projektai/${project.id}`} className="block" rel="noreferrer">
                <div className="notranslate">{project.title}</div>
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
            <a href={`/projektai/${project.id}`} rel="noreferrer">
            {/* Hover button in the center */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="backdrop-blur-sm bg-white/60 px-4 py-2 rounded-md pointer-events-auto">
                  <a href={`/projektai/${project.id}`} rel="noreferrer" className="text-black text-xs font-medium flex items-center gap-2">
                  Peržiūrėti
                  <MousePointerClick className="w-4 h-4 animate-carousel-ping" />
                </a>
              </div>
            </div>
              <img
                src={project.image}
                alt={project.alt}
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
            <div className="relative z-10  backdrop-blur-sm">
              <div className="flex flex-wrap gap-3">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className={`px-4 py-2 bg-dark-surface/80 rounded-full text-electric-blue text-sm backdrop-blur-sm ${tag === 'Divi' ? 'notranslate' : ''
                      }`}
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
                <a href={`/projektai/${project.id}`} rel="noreferrer">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="notranslate">{project.title}</div>
                  </motion.div>
                </a>
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 to-neon-purple/10 blur-3xl -z-10" />
              </h2>
              {project.subtitle && (
                <p className="text-electric-blue mt-4 text-xl ">
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
                className="w-full aspect-[16/9] rounded-lg overflow-hidden mb-12 relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <a href={`/projektai/${project.id}`} rel="noreferrer" className="block relative">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover transition"
                  />

                  {/* Hover button in the center */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className="backdrop-blur-sm bg-white/60 px-5 py-2 rounded-md pointer-events-auto">
                      <a href={`/projektai/${project.id}`} rel="noreferrer" className="text-black text-sm font-medium flex items-center gap-2">
                        Peržiūrėti
                        <MousePointerClick className="w-6 h-6 animate-carousel-ping" />
                      </a>
                    </div>
                  </div>
                </a>
              </motion.div>

              {/* Project Info */}
              <motion.div
                className="space-y-8 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative z-10 backdrop-blur-sm">
                  {/* <p className="text-white/70 text-lg leading-relaxed">
                    {project.description}
                  </p> */}
                  <div className="flex flex-wrap gap-3 justify-center">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className={`px-4 py-2 bg-dark-surface/80 rounded-full text-electric-blue text-sm backdrop-blur-sm ${tag === 'Divi' ? 'notranslate' : ''
                          }`}
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
    <div className="pt-4 md:pt-24 relative">
      <Helmet>
        <title>Įgyvendinti projektai | Amberweb</title>
        <meta
          name="description"
          content="Mūsų įgyvendinti projektai - unikalūs sprendimai, pritaikyti pagal kliento poreikius, užtikrinantys tiek estetiką, tiek funkcionalumą."
        />
        <meta
          name="keywords"
          content="interneto svetainių kūrimas, web dizainas, Wordpress, Divi, e-parduotuvės, portfolio"
        />
        <link rel="canonical" href="https://www.amberweb.lt/projektai" />
      </Helmet>
      <div className="relative">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.1)_0%,transparent_70%)]" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(157,0,255,0.1) 0%, transparent 60%)'
        }} />
        </div>
        <ProjectsList />
        {sortedProjects.map((project, index) => (
          <ProjectSection key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;