import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";
import projects from "../components/Projects";
import { MousePointerClick, Plus } from "lucide-react"; // Pridėjau Plus ikoną mygtukui
import sortedIds from "../components/sortedProjectIds";
import FadeOutSection from "../components/FadeOutSection";
import { Link } from "react-router-dom";
import ProjectShowcase from "../components/ProjectShowcase";

interface Project {
	id: string;
	title: string;
	subtitle?: string;
	description: string;
	image: any;
	images?: {
		mobile: string;
		tablet: string;
		desktop: string;
	};
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
			className="text-center mb-12"
		>
			<h1 className="text-4xl md:text-5xl font-bold mb-6">
				Įgyvendinti projektai
			</h1>
			<p className="text-lg mb-2 text-white/70">
				Čia pateikiami keli iš daugelio mūsų įgyvendintų projektų.
				<br />
				Kiekvienas jų kruopščiai pritaikytas pagal kliento poreikius,
				užtikrinant estetiką ir funkcionalumą.
			</p>
		</motion.div>
	);
};

const ProjectSection: React.FC<ProjectSectionProps> = ({ project, index }) => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
	const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
	const opacity = useTransform(
		scrollYProgress,
		[0, 0.2, 0.8, 1],
		[0.3, 1, 1, 0.3]
	);

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
				<div className="lg:hidden space-y-6 px-6 mb-8">
					<FadeOutSection>
						<motion.a
							href={`/projektai/${project.id}`}
							rel="noreferrer"
							className="block"
						>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className="relative"
							>
								<h2 className="text-4xl font-display font-bold relative z-10">
									<div className="notranslate">
										{project.title}
									</div>
								</h2>
								{project.subtitle && (
									<p className="text-electric-blue text-xl mb-12 mt-2">
										{project.subtitle}
									</p>
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
								<div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
									<div className="backdrop-blur-sm bg-white/60 px-4 py-2 rounded-md border pointer-events-auto">
										<span className="text-black text-xs font-medium flex items-center gap-2">
											Peržiūrėti
											<MousePointerClick className="w-4 h-4 animate-carousel-ping" />
										</span>
									</div>
								</div>

								<ProjectShowcase
									images={project.images}
									altTitle={project.title}
								/>
							</motion.div>
						</motion.a>

						<motion.div
							className="space-y-4 relative"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							<div className="relative z-10  backdrop-blur-sm">
								<div className="flex flex-wrap justify-center gap-3">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className={`px-4 py-2 bg-dark-surface/80 rounded-full text-electric-blue text-sm backdrop-blur-sm ${
												tag === "Divi"
													? "notranslate"
													: ""
											}`}
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					</FadeOutSection>
				</div>

				{/* Desktop Layout */}
				<div className="hidden lg:grid grid-cols-[1fr_2fr] gap-8 items-center max-w-[90%] mx-auto">
					{/* Floating Title */}
					<FadeOutSection>
						<motion.div
							className="relative h-full flex items-center"
							style={{ y, scale, opacity }}
						>
							<div className="vertical-text">
								<h2 className="text-6xl xl:text-7xl font-display font-bold whitespace-nowrap relative">
									<a
										href={`/projektai/${project.id}`}
										rel="noreferrer"
									>
										<motion.div
											whileHover={{ scale: 1.05 }}
											transition={{ duration: 0.3 }}
										>
											<div className="notranslate">
												{project.title}
											</div>
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
					</FadeOutSection>

					{/* Project Content */}
					<FadeOutSection>
						<motion.div
							className="w-full"
							style={{ scale, opacity }}
						>
							<div className="max-w-[85%]">
								<Link
									to={`/projektai/${project.id}`}
									className="relative flex justify-center items-end w-full m-auto my-20"
								>
									<div className="z-50 absolute inset-0 flex items-center justify-center pointer-events-none">
										<div className="backdrop-blur-sm bg-white/60 px-5 py-2 rounded-md pointer-events-auto">
											<span className="text-black border-gray-50 text-sm font-medium flex items-center gap-2">
												Peržiūrėti
												<MousePointerClick className="w-6 h-6 animate-carousel-ping" />
											</span>
										</div>
									</div>

									<ProjectShowcase
										images={project.images}
										altTitle={project.title}
									/>
								</Link>

								{/* Project Info */}
								<motion.div
									className="space-y-8 relative"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
								>
									<div className="relative z-10 backdrop-blur-sm">
										<div className="flex flex-wrap gap-3 justify-center">
											{project.tags.map((tag) => (
												<span
													key={tag}
													className={`px-4 py-2 bg-dark-surface/80 rounded-full text-electric-blue text-sm backdrop-blur-sm ${
														tag === "Divi"
															? "notranslate"
															: ""
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
					</FadeOutSection>
				</div>
			</div>
		</motion.div>
	);
};

const Projects: React.FC = () => {
	// Kiek projektų rodyti iš pradžių
	const INITIAL_COUNT = 4;
	const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

	const handleLoadMore = () => {
		// Pridedame dar 4 projektus paspaudus
		setVisibleCount((prev) => prev + 4);
	};

	const hasMore = visibleCount < sortedProjects.length;

	return (
		<div className="relative">
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
				<link
					rel="canonical"
					href="https://www.amberweb.lt/projektai"
				/>
			</Helmet>
			<div className="relative">
				<div className="fixed inset-0 z-0 pointer-events-none">
					<div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(60,80,200,0.25)_0%,transparent_70%)]" />
				</div>

				<ProjectsList />

				{/* Naudojame slice, kad rodytume tik dalį masyvo */}
				{sortedProjects.slice(0, visibleCount).map((project, index) => (
					<ProjectSection
						key={project.id} // Pakeista iš project.title į project.id dėl stabilumo
						project={project}
						index={index}
					/>
				))}

				{/* Mygtukas rodomas tik jei yra dar ko rodyti */}
				{hasMore && (
					<div className="flex justify-center items-center py-16">
						<motion.button
							onClick={handleLoadMore}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="group relative flex items-center gap-3 px-5 py-3 bg-dark-surface/50 border border-electric-blue/30 rounded-full text-white text-xs font-medium hover:border-electric-blue transition-all backdrop-blur-md overflow-hidden"
						>
							<div className="absolute inset-0 bg-electric-blue/10 opacity-0 group-hover:opacity-100 transition-opacity" />
							<Plus className="w-4 h-4 text-electric-blue" />
							<span>Rodyti daugiau projektų</span>
						</motion.button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Projects;
