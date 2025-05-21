import React from 'react';
import projects, { Project } from './Projects';
import { Eye, MousePointerClick } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomepageSampleWork = () => {
    const projectsList = projects as Project[];
    const projectOrder = ['paparciopm', 'veselovaite', 'holistine-kosmetologija'];
    const firstThreeProjects = projectOrder.map((id) =>
        projectsList.find((project) => project.id === id)
    );

    return (
        <div className="container mx-auto px-4 mt-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ką esame sukūrę</h2>
                <p className="text-white/70 text-lg max-w-2xl mx-auto">
                    Pasitikėję klientai ir jų sėkmingos svetainės.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {firstThreeProjects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative p-4 justify-center flex flex-col group border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:border-electric-blue/30"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-48 w-auto object-scale-down"
                        />
                        <div className="p-4">
                            <h2 className="text-xl text-center font-bold text-white">{project.title}</h2>
                            <p className="text-sm text-center text-white/70 line-clamp-3">{project.description}</p>
                        </div>
                        {/* Hover icon overlay */}
                        <div className="absolute inset-0 bg-black/60 text-white/80 backdrop-blur-sm z-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300 space-y-2 text-center">
                            <span className="text-sm">Peržiūrėti</span>
                            <span className="text-lg font-semibold">{project.title}</span>
                            <MousePointerClick className="w-6 h-6 animate-carousel-ping" />
                            <Link to={`/projektai/${project.id}`} className="absolute inset-0"></Link>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-16">
                <a href="/projektai" className="button-primary">
                    Peržiūrėti visus projektus
                </a>
            </div>
        </div>
    );
};

export default HomepageSampleWork;
