import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import projects from "../components/Projects";
import { ArrowUpRight, Plus, Sparkles } from "lucide-react";
import sortedIds from "../components/sortedProjectIds";
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

const sortedProjects = [...projects].sort(
	(a, b) => sortedIds.indexOf(a.id) - sortedIds.indexOf(b.id),
);

// HEADER
const ProjectsHeader: React.FC = () => {
	return (
		<div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 md:pt-24 pb-14 md:pb-20">
			<motion.div
				initial={{ opacity: 0, y: 25 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				className="relative"
			>
				<div className="flex items-center gap-2 text-electric-blue text-xs font-semibold tracking-[0.2em] mb-7">
					<Sparkles size={15} />
					<span>AMBER WEB / PORTFOLIO</span>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end">
					<div>
						<h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05]">
							Idėjos.
							<br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-blue-400 to-neon-purple">
								Sprendimai.
							</span>
							<br />
							Rezultatai.
						</h1>

						<p className="text-white/50 text-base md:text-lg max-w-xl mt-7 leading-relaxed">
							Kiekvienas projektas - unikalus sprendimas, sukurtas
							atsižvelgiant į verslo tikslus, klientų poreikius ir
							šiuolaikines dizaino tendencijas.
						</p>
					</div>

					<div className="lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-electric-blue/50 pl-5 lg:pl-0 lg:pr-6">
						<div className="text-5xl md:text-6xl font-bold text-white">
							{String(sortedProjects.length).padStart(2, "0")}
							<span className="text-electric-blue">+</span>
						</div>
						<p className="text-white/40 text-sm mt-2">
							Atrinktų projektų
						</p>
					</div>
				</div>

				<div className="mt-14 flex items-center gap-4">
					<div className="h-px flex-1 bg-gradient-to-r from-electric-blue/50 to-transparent" />
					<span className="text-white/30 text-[10px] tracking-[0.25em] uppercase">
						Projektai
					</span>
					<div className="h-px flex-1 bg-gradient-to-l from-purple-500/30 to-transparent" />
				</div>
			</motion.div>
		</div>
	);
};

// PROJECT CARD
interface ProjectCardProps {
	project: Project;
	index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
	const isFeatured = index === 0;

	return (
		<motion.article
			initial={{ opacity: 0, y: 35 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.08 }}
			transition={{
				duration: 0.65,
				delay: isFeatured ? 0 : 0.08,
			}}
			className={`group relative min-w-0 ${
				isFeatured ? "lg:col-span-12" : "lg:col-span-6"
			}`}
		>
			<div
				className={`relative h-full overflow-hidden rounded-2xl border border-white/[0.09] bg-[#11121a] transition-all duration-500 hover:border-electric-blue/40 hover:shadow-[0_20px_80px_-30px_rgba(40,100,255,0.2)] ${
					isFeatured
						? "grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]"
						: "flex flex-col"
				}`}
			>
				{/* PREVIEW */}
				<div
					className={`relative min-w-0 overflow-hidden bg-[#191a25] ${
						isFeatured
							? "min-h-[260px] sm:min-h-[380px] lg:min-h-[480px]"
							: "aspect-[16/10]"
					}`}
				>
					<Link
						to={`/projektai/${project.id}`}
						className="absolute inset-0 block"
						aria-label={`Peržiūrėti projektą ${project.title}`}
					>
						<div className="absolute inset-0 flex items-center justify-center p-3 sm:p-6 lg:p-8 transition-transform duration-700 group-hover:scale-[1.025]">
							<ProjectShowcase
								images={project.images}
								altTitle={project.title}
							/>
						</div>

						{/* IMAGE OVERLAY */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

						{/* PROJECT NUMBER */}
						<div className="absolute top-5 left-5 z-10 flex items-center gap-2">
							<span className="px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white/80 text-[10px] tracking-wider">
								PROJEKTAS / {String(index + 1).padStart(2, "0")}
							</span>
						</div>

						{/* VIEW ICON */}
						<div className="absolute bottom-5 right-5 z-10 w-11 h-11 rounded-full bg-white text-black flex items-center justify-center transition-all duration-300 group-hover:bg-electric-blue group-hover:text-white group-hover:rotate-45">
							<ArrowUpRight size={21} />
						</div>
					</Link>
				</div>

				{/* PROJECT DETAILS */}
				<div
					className={`flex flex-col justify-between min-w-0 p-6 sm:p-8 ${
						isFeatured ? "lg:p-10" : "flex-1"
					}`}
				>
					<div>
						<div className="flex items-center gap-2 mb-4">
							<div className="w-5 h-px bg-electric-blue" />
							<span className="text-electric-blue text-xs font-semibold tracking-widest uppercase">
								{project.subtitle || "Web projektas"}
							</span>
						</div>

						<Link
							to={`/projektai/${project.id}`}
							className="inline-block group/title"
						>
							<h2
								className={`font-bold text-white tracking-tight transition-colors duration-300 group-hover/title:text-electric-blue ${
									isFeatured
										? "text-3xl sm:text-4xl lg:text-5xl"
										: "text-2xl sm:text-3xl"
								}`}
							>
								<span className="notranslate">
									{project.title}
								</span>
								<ArrowUpRight
									className="inline-block ml-2 text-white/30 group-hover/title:text-electric-blue transition-all"
									size={isFeatured ? 27 : 21}
								/>
							</h2>
						</Link>

						<p
							className={`text-white/50 leading-relaxed mt-5 ${
								isFeatured ? "text-base max-w-xl" : "text-sm"
							}`}
						>
							{project.description}
						</p>
					</div>

					{/* TAGS */}
					<div className="mt-8">
						<div className="flex flex-wrap gap-2">
							{project.tags.map((tag) => (
								<span
									key={tag}
									className={`px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-white/50 text-[11px] transition-colors duration-300 group-hover:border-electric-blue/20 group-hover:text-white/70 ${
										tag === "Divi" || tag === "WordPress"
											? "notranslate"
											: ""
									}`}
								>
									{tag}
								</span>
							))}
						</div>

						<div className="flex items-center justify-between mt-8 pt-5 border-t border-white/[0.08]">
							<span className="text-white/30 text-xs">
								Amber Web
							</span>

							<Link
								to={`/projektai/${project.id}`}
								className="flex items-center gap-2 text-electric-blue text-xs font-semibold hover:gap-3 transition-all"
							>
								Peržiūrėti projektą
								<ArrowUpRight size={15} />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</motion.article>
	);
};

// MAIN
const Projects: React.FC = () => {
	const INITIAL_COUNT = 5;

	const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

	const handleLoadMore = () => {
		setVisibleCount((prev) => Math.min(prev + 4, sortedProjects.length));
	};

	const hasMore = visibleCount < sortedProjects.length;

	return (
		<div className="relative min-h-screen">
			<Helmet>
				<title>Įgyvendinti projektai | Amberweb</title>
				<meta
					name="description"
					content="Peržiūrėkite Amber Web įgyvendintus interneto svetainių, el. parduotuvių ir individualių skaitmeninių sprendimų projektus."
				/>
				<meta
					name="keywords"
					content="interneto svetainių kūrimas, web dizainas, WordPress, Divi, e-parduotuvės, portfolio"
				/>
				<link
					rel="canonical"
					href="https://www.amberweb.lt/projektai"
				/>
			</Helmet>

			{/* BACKGROUND */}
			<div className="fixed inset-0 z-0 pointer-events-none">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(60,80,200,0.18)_0%,transparent_65%)]" />
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_70%,rgba(130,50,220,0.08)_0%,transparent_55%)]" />
			</div>

			<div className="relative z-10">
				<ProjectsHeader />

				{/* PROJECT GRID */}
				<div className="max-w-7xl mx-auto px-4 sm:px-8 pb-10">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7">
						{sortedProjects
							.slice(0, visibleCount)
							.map((project, index) => (
								<ProjectCard
									key={project.id}
									project={project}
									index={index}
								/>
							))}
					</div>

					{/* LOAD MORE */}
					{hasMore && (
						<motion.div
							initial={{ opacity: 0, y: 15 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="flex flex-col items-center py-20"
						>
							<div className="w-px h-12 bg-gradient-to-b from-electric-blue/50 to-transparent mb-6" />

							<motion.button
								onClick={handleLoadMore}
								whileHover={{ scale: 1.04 }}
								whileTap={{ scale: 0.96 }}
								className="group relative flex items-center gap-3 px-7 py-4 rounded-full border border-electric-blue/30 bg-white/[0.03] backdrop-blur-md text-white text-sm font-medium hover:border-electric-blue hover:bg-electric-blue/10 transition-all duration-300"
							>
								<Plus
									size={18}
									className="text-electric-blue group-hover:rotate-90 transition-transform duration-300"
								/>
								Rodyti daugiau projektų
							</motion.button>

							<p className="text-white/30 text-xs mt-4">
								Rodoma{" "}
								{Math.min(visibleCount, sortedProjects.length)}{" "}
								iš {sortedProjects.length} projektų
							</p>
						</motion.div>
					)}

					{/* END SECTION */}
					{!hasMore && sortedProjects.length > 0 && (
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							className="text-center py-20"
						>
							<div className="w-16 h-px bg-gradient-to-r from-transparent via-electric-blue/60 to-transparent mx-auto mb-6" />

							<p className="text-white/40 text-sm">
								Tai tik dalis mūsų įgyvendintų projektų.
							</p>

							<Link
								to="/kontaktai"
								className="inline-flex items-center gap-2 mt-5 text-electric-blue text-sm font-semibold hover:gap-3 transition-all"
							>
								Pradėkime Jūsų projektą
								<ArrowUpRight size={17} />
							</Link>
						</motion.div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Projects;
