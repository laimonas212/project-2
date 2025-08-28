import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Project } from "../components/Projects";
import projects from "./Projects";
import sortedIds from "./sortedProjectIds";
import { motion } from "framer-motion";
import { Goal, Target, TrendingUp } from "lucide-react";

type Props = {
  project: Project;
};

export default function ProjectPage({ project }: Props) {
  const navigate = useNavigate();

  const baseUrl = "https://amberweb.lt";

  const handleBack = () => {
    navigate("/projektai");
  };

  const sortedProjects = [...projects].sort(
    (a, b) => sortedIds.indexOf(a.id) - sortedIds.indexOf(b.id)
  );

  const currentIndex = sortedProjects.findIndex((p) => p.id === project.id);
  const prevProject = sortedProjects[currentIndex - 1] || null;
  const nextProject = sortedProjects[currentIndex + 1] || null;

  // Generate structured data for the page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    image: project.image,
    url: `${baseUrl}/projektai/${project.id}`, // Use your actual URL structure
    dateCreated: "2024-05-01", // Replace with actual project start date
    author: {
      "@type": "Organization",
      name: "Amberweb",
    },
    hasPart: [
      {
        "@type": "WebPageElement",
        name: "Project Goals",
        description: project.goals ? project.goals.join(" ") : "", // Corrected line
      },
      {
        "@type": "WebPageElement",
        name: "Implemented Solutions",
        description: project.solutions ? project.solutions.join(" ") : "", // Corrected line
      },
      {
        "@type": "WebPageElement",
        name: "Results",
        description: project.results ? project.results.join(" ") : "", // Corrected line
      },
    ],
  };

  return (
    <div className="relative z-10">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(60,80,200,0.25)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-5xl mx-auto mb-24 relative z-10 p-6 md:p-10 lg:p-0">
        <Helmet>
          <title>{project.metaTitle || `${project.title} | Amberweb`}</title>
          <meta
            name="description"
            content={project.metaTitle || project.description}
          />
          <meta property="og:title" content={project.title} />
          <meta property="og:description" content={project.description} />
          <meta property="og:image" content={project.image} />
          <meta
            property="og:url"
            content={`${baseUrl}/projektai/${project.id}`}
          />
          <meta property="og:type" content="website" />
          <link rel="canonical" href={`${baseUrl}/projektai/${project.id}`} />
          <link
            rel="preload"
            as="image"
            href={project.image}
            type="image/webp"
          />
          <script type="application/ld+json">
            {JSON.stringify(structuredData, null, 2)}
          </script>
        </Helmet>

        <button
          onClick={handleBack}
          className="mb-6 text-sm text-electric-blue hover:underline"
        >
          ← Grįžti atgal į projektus
        </button>

        <img
          src={project.image}
          alt={project.alt}
          className="rounded-xl mb-4"
        />
        <h1 className="text-3xl font-bold text-white/80">{project.title}</h1>
        <h2 className="text-xl text-white/80 mb-4">{project.subtitle}</h2>
        <p className="mb-4 text-white/60">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-dark-surface/80 rounded-full text-electric-blue text-sm backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <a href={project.link} target="_blank" className="button-primary">
          Aplankyti svetainę →
        </a>

        {/* Papildomas SEO turinys */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {project.goals && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card group p-6 bg-dark-surface/60 rounded-xl border border-white/10 hover:border-electric-blue/30 transition-all duration-300"
            >
              <div className="text-electric-blue mb-4 group-hover:-translate-x-1 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white/80 mb-4">
                Projekto tikslai
              </h2>
              <ul className="list-disc pl-6 text-white/60 text-sm space-y-2">
                {project.goals.map((goal, i) => (
                  <li key={i}>{goal}</li>
                ))}
              </ul>
            </motion.div>
          )}

          {project.solutions && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card group p-6 bg-dark-surface/60 rounded-xl border border-white/10 hover:border-electric-blue/30 transition-all duration-300"
            >
              <div className="text-electric-blue mb-4 group-hover:-translate-x-1 group-hover:scale-110 transition-transform duration-300">
                <Goal className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white/80 mb-4">
                Įgyvendinti sprendimai
              </h2>
              <ul className="list-disc pl-6 text-white/60 text-sm space-y-2">
                {project.solutions.map((solution, i) => (
                  <li key={i}>{solution}</li>
                ))}
              </ul>
            </motion.div>
          )}

          {project.results && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card group p-6 bg-dark-surface/60 rounded-xl border border-white/10 hover:border-electric-blue/30 transition-all duration-300"
            >
              <div className="text-electric-blue mb-4 group-hover:-translate-x-1 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white/80 mb-4">
                Rezultatai
              </h2>
              <ul className="list-disc pl-6 text-white/60 text-sm space-y-2">
                {project.results.map((result, i) => (
                  <li key={i}>{result}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </section>
      </div>

      {/* Navigacija tarp projektų */}
      <div className="relative mt-20 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between text-white/80 gap-8 max-w-5xl mx-auto px-6 text-center md:text-left">
        {prevProject ? (
          <a
            href={`/projektai/${prevProject.id}`}
            className="group w-full md:w-1/2 flex items-center gap-4 justify-center md:justify-start text-center md:text-left"
          >
            <img
              src={prevProject.image}
              alt={prevProject.alt}
              className="w-20 h-14 object-cover rounded-md border border-white/10"
            />
            <div>
              <p className="text-sm mb-1 group-hover:text-electric-blue">
                ← Ankstesnis projektas
              </p>
              <div className="font-semibold">{prevProject.title}</div>
            </div>
          </a>
        ) : (
          <div className="w-full md:w-1/2" />
        )}

        {nextProject ? (
          <a
            href={`/projektai/${nextProject.id}`}
            className="group w-full md:w-1/2 flex items-center gap-4 justify-center md:justify-end text-center md:text-right"
          >
            <div>
              <p className="text-sm mb-1 group-hover:text-electric-blue">
                Kitas projektas →
              </p>
              <div className="font-semibold">{nextProject.title}</div>
            </div>
            <img
              src={nextProject.image}
              alt={nextProject.alt}
              className="w-20 h-14 object-cover rounded-md border border-white/10"
            />
          </a>
        ) : (
          <div className="w-full md:w-1/2" />
        )}
      </div>

      {/* CTA sekcija */}
      <div className="relative z-10">
        <section className="mt-24 bg-gradient-to-r from-electric-blue to-neon-purple p-16 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Patiko šis projektas?
          </h2>
          <p className="text-white/70 mb-6">
            Sukursime ir Jūsų verslui tokią svetainę – greitą, modernią ir
            pritaikytą Jūsų poreikiams.
          </p>
          <a href="/kontaktai" className="button-cta">
            Susisiekti dabar →
          </a>
        </section>
      </div>
    </div>
  );
}
