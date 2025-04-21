import { Helmet } from "react-helmet-async"
import { useNavigate } from "react-router-dom"
import { Project } from "./Projects"
import projects from './Projects'
import sortedIds from "./sortedProjectIds"
import Images from "../img/Images"

type Props = {
    project: Project
}

export default function ProjectPage({ project }: Props) {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/projektai')
    }

    const sortedProjects = [...projects].sort(
        (a, b) => sortedIds.indexOf(a.id) - sortedIds.indexOf(b.id)
    );

    const currentIndex = sortedProjects.findIndex(p => p.id === project.id);
    const prevProject = sortedProjects[currentIndex - 1] || null;
    const nextProject = sortedProjects[currentIndex + 1] || null;

    return (
        <div className="relative mt:4 md:mt-36 mb-12 z-10">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.15)_0%,transparent_50%)]" />
            </div>

            <div className="max-w-5xl mx-auto mb-24 relative z-10 p-6 md:p-10 lg:p-0">
                <Helmet>
                    <title>{project.title} | Amberweb</title>
                    <meta name="description" content={project.description} />
                    <link
                        rel="preload"
                        as="image"
                        href={Images.projects.lzspa}
                        type="image/webp"
                    />
                </Helmet>

                <button onClick={handleBack} className="mb-6 text-sm text-electric-blue hover:underline">
                    ← Grįžti atgal į projektus
                </button>

                <img src={project.image} alt={project.title} className="rounded-xl mb-4" />
                <h1 className="text-3xl font-bold text-white/80">{project.title}</h1>
                <h2 className="text-xl text-white/80 mb-4">{project.subtitle}</h2>
                <p className="mb-4 text-white/60">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, idx) => (
                        <span key={idx} className="px-4 py-2 bg-dark-surface/80 rounded-full text-electric-blue text-sm backdrop-blur-sm">
                            {tag}
                        </span>
                    ))}
                </div>

                <a href={project.link} target="_blank" className="button-primary">Aplankyti svetainę →</a>
            </div>

            <div className="relative mt-20 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between text-white/80 gap-8 max-w-5xl mx-auto px-6 text-center md:text-left">
                {prevProject ? (
                    <a href={`/projektai/${prevProject.id}`} className="group w-full md:w-1/2 flex items-center gap-4 justify-center md:justify-start text-center md:text-left">
                        <img src={prevProject.image} alt={prevProject.title} className="w-20 h-14 object-cover rounded-md border border-white/10" />
                        <div>
                            <p className="text-sm mb-1 group-hover:text-electric-blue">← Ankstesnis projektas</p>
                            <div className="font-semibold">{prevProject.title}</div>
                        </div>
                    </a>
                ) : (
                    <div className="w-full md:w-1/2" />
                )}

                {nextProject ? (
                    <a href={`/projektai/${nextProject.id}`} className="group w-full md:w-1/2 flex items-center gap-4 justify-center md:justify-end text-center md:text-right">
                        <div>
                            <p className="text-sm mb-1 group-hover:text-electric-blue">Kitas projektas →</p>
                            <div className="font-semibold">{nextProject.title}</div>
                        </div>
                        <img src={nextProject.image} alt={nextProject.title} className="w-20 h-14 object-cover rounded-md border border-white/10" />
                    </a>
                ) : (
                    <div className="w-full md:w-1/2" />
                )}
            </div>

            <div className="relative z-10">
                <section className="mt-24 bg-gradient-to-r from-electric-blue/50 to-neon-purple/50 p-16 text-center relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Patiko šis projektas?
                    </h2>
                    <p className="text-white/70 mb-6">
                        Sukursime ir Jūsų verslui tokią svetainę – greitą, modernią ir pritaikytą Jūsų poreikiams.
                    </p>
                    <a href="/kontaktai" className="button-primary">
                        Susisiekti dabar →
                    </a>
                </section>
            </div>
        </div>
    )
}
