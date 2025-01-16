import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
    title: 'Printery',
    subtitle: 'Print Shop Website',
    description: 'Modern e-commerce solution for a print shop, featuring an intuitive product catalog and streamlined ordering process.',
    image: 'https://www.amberweb.lt/wp-content/uploads/2024/08/printery-1.webp',
    tags: ['React', 'Node.js', 'E-commerce'],
    link: 'https://www.printery.lt',
  },
  {
    title: 'Kaliause',
    subtitle: 'Fashion Brand',
    description: 'Elegant fashion brand website with a focus on visual storytelling and seamless shopping experience.',
    image: 'https://www.amberweb.lt/wp-content/uploads/2024/08/kaliause-2.webp',
    tags: ['Next.js', 'Tailwind', 'Shopify'],
  },
  {
    title: 'Esu Tau',
    subtitle: 'Lifestyle Platform',
    description: 'Lifestyle and wellness platform with personalized content delivery and community features.',
    image: 'https://www.amberweb.lt/wp-content/uploads/2024/11/esutau-980x584.jpg',
    tags: ['React', 'GraphQL', 'MongoDB'],
  },
  {
    title: 'Angel Butikas',
    subtitle: 'Boutique Store',
    description: 'Luxury boutique online store with high-end product presentation and VIP customer service integration.',
    image: 'https://www.amberweb.lt/wp-content/uploads/2024/11/angelbutikas-980x584.jpg',
    tags: ['Vue.js', 'Strapi', 'AWS'],
  },
  {
    title: 'GoDeko',
    subtitle: 'Interior Design',
    description: 'Showcase platform for an interior design company featuring interactive project galleries and consultation booking.',
    image: 'https://www.amberweb.lt/wp-content/uploads/2024/11/godeko-980x584.jpg',
    tags: ['React', 'Three.js', 'Sanity'],
  },
];

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
      {/* Static Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-surface/50 to-background/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.1)_0%,transparent_70%)]" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(157,0,255,0.1) 0%, transparent 60%)'
        }} />
      </div>

      {/* Content */}
      <div className="relative">
        {projects.map((project, index) => (
          <ProjectSection key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;