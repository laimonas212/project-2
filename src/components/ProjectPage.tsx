import { Helmet } from "react-helmet-async";
import { useNavigate, Link } from "react-router-dom";
import { Project } from "../components/Projects";
import projects from "./Projects";
import sortedIds from "./sortedProjectIds";
import { motion } from "framer-motion";
import {
	Goal,
	Target,
	TrendingUp,
	ArrowUpRight,
	ArrowLeft,
	ArrowRight,
	Sparkles,
	ExternalLink,
} from "lucide-react";
import ProjectShowcase from "./ProjectShowcase";

type Props = {
	project: Project;
};

export default function ProjectPage({ project }: Props) {
	const navigate = useNavigate();

	const baseUrl = "https://amberweb.lt";
	const projectUrl = `${baseUrl}/projektai/${project.id}`;

	const handleBack = () => navigate("/projektai");

	const sortedProjects = [...projects].sort(
		(a, b) => sortedIds.indexOf(a.id) - sortedIds.indexOf(b.id),
	);

	const currentIndex = sortedProjects.findIndex((p) => p.id === project.id);

	const prevProject = sortedProjects[currentIndex - 1] || null;
	const nextProject = sortedProjects[currentIndex + 1] || null;

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "CreativeWork",
		name: project.title,
		description: project.description,
		image: project.images?.desktop || project.image,
		url: projectUrl,
		author: {
			"@type": "Organization",
			name: "Amber Web",
			url: baseUrl,
		},
		hasPart: [
			{
				"@type": "WebPageElement",
				name: "Projekto tikslai",
				description: project.goals?.join(" ") || "",
			},
			{
				"@type": "WebPageElement",
				name: "Įgyvendinti sprendimai",
				description: project.solutions?.join(" ") || "",
			},
			{
				"@type": "WebPageElement",
				name: "Rezultatai",
				description: project.results?.join(" ") || "",
			},
		],
	};

	const overviewItems = [
		{
			title: "Projekto tikslai",
			subtitle: "Ko siekėme?",
			icon: Target,
			items: project.goals,
		},
		{
			title: "Įgyvendinti sprendimai",
			subtitle: "Kaip tai padarėme?",
			icon: Goal,
			items: project.solutions,
		},
		{
			title: "Rezultatai",
			subtitle: "Kas pasiekta?",
			icon: TrendingUp,
			items: project.results,
		},
	].filter((item) => item.items && item.items.length > 0);

	return (
		<div className="relative min-h-screen overflow-hidden">
			{/* BACKGROUND */}
			<div className="fixed inset-0 z-0 pointer-events-none">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_15%,rgba(60,80,200,0.22)_0%,transparent_65%)]" />
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_70%,rgba(130,50,220,0.08)_0%,transparent_55%)]" />
			</div>

			<Helmet>
				<title>
					{project.metaTitle || `${project.title} | Amberweb`}
				</title>

				<meta
					name="description"
					content={project.metaDescription || project.description}
				/>

				<meta
					property="og:title"
					content={project.metaTitle || project.title}
				/>
				<meta
					property="og:description"
					content={project.metaDescription || project.description}
				/>
				<meta property="og:image" content={project.images?.desktop} />
				<meta property="og:url" content={projectUrl} />
				<meta property="og:type" content="website" />

				<link rel="canonical" href={projectUrl} />

				{project.images?.desktop && (
					<link
						rel="preload"
						as="image"
						href={project.images.desktop}
						type="image/webp"
					/>
				)}

				<script type="application/ld+json">
					{JSON.stringify(structuredData)}
				</script>
			</Helmet>

			<div className="relative z-10">
				{/* HERO */}
				<section className="max-w-7xl mx-auto px-5 sm:px-8 pt-12 md:pt-20 pb-12">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						{/* BACK NAVIGATION */}
						<button
							onClick={handleBack}
							className="group flex items-center gap-2 text-white/40 hover:text-electric-blue text-sm transition-colors mb-12"
						>
							<ArrowLeft
								size={16}
								className="group-hover:-translate-x-1 transition-transform"
							/>
							Visi projektai
						</button>

						<div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-end">
							<div>
								<div className="flex items-center gap-2 text-electric-blue text-xs font-semibold tracking-[0.2em] uppercase mb-6">
									<Sparkles size={15} />
									<span>
										{project.subtitle ||
											"Įgyvendintas projektas"}
									</span>
								</div>

								<h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight">
									<span className="notranslate">
										{project.title}
									</span>
								</h1>

								<p className="text-white/55 text-base md:text-lg max-w-2xl mt-7 leading-relaxed">
									{project.description}
								</p>
							</div>

							{project.link && (
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="button-primary inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl whitespace-nowrap group"
								>
									Aplankyti svetainę
									<ExternalLink
										size={17}
										className="group-hover:translate-x-1 transition-transform"
									/>
								</a>
							)}
						</div>

						{/* TECHNOLOGY TAGS */}
						<div className="flex flex-wrap gap-2 mt-10">
							{project.tags.map((tag, idx) => (
								<span
									key={idx}
									className={`px-4 py-2 rounded-full border border-white/[0.09] bg-white/[0.03] text-white/55 text-xs backdrop-blur-sm hover:border-electric-blue/40 hover:text-electric-blue transition-colors ${
										tag === "Divi" || tag === "WordPress"
											? "notranslate"
											: ""
									}`}
								>
									{tag}
								</span>
							))}
						</div>
					</motion.div>
				</section>

				{/* PROJECT SHOWCASE */}
				<section className="max-w-7xl mx-auto px-4 sm:px-8">
					<motion.div
						initial={{ opacity: 0, y: 35 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.15 }}
						className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-[#11121a] p-3 sm:p-6 md:p-10 shadow-[0_30px_100px_-40px_rgba(40,80,200,0.25)]"
					>
						<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent" />

						<div className="relative">
							<ProjectShowcase
								images={project.images}
								altTitle={project.title}
							/>
						</div>
					</motion.div>
				</section>

				{/* PROJECT OVERVIEW */}
				{overviewItems.length > 0 && (
					<section className="max-w-7xl mx-auto px-5 sm:px-8 pt-24 md:pt-32">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="mb-12"
						>
							<div className="text-electric-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
								01 / Projekto apžvalga
							</div>

							<div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
								<h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
									Nuo idėjos iki
									<br />
									<span className="text-white/35">
										įgyvendinimo.
									</span>
								</h2>

								<p className="text-white/45 max-w-md text-sm leading-relaxed">
									Kiekvienas projektas prasideda nuo tikslo.
									Štai kaip jį pavertėme funkcionaliu
									skaitmeniniu sprendimu.
								</p>
							</div>
						</motion.div>

						<div
							className={`grid grid-cols-1 md:grid-cols-3 gap-5`}
						>
							{overviewItems.map((item, index) => {
								const Icon = item.icon;

								return (
									<motion.div
										key={item.title}
										initial={{ opacity: 0, y: 25 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.5,
											delay: index * 0.12,
										}}
										className="group relative p-7 md:p-8 rounded-2xl border border-white/[0.09] bg-white/[0.025] hover:bg-white/[0.045] hover:border-electric-blue/30 transition-all duration-500"
									>
										<div className="flex items-center justify-between mb-9">
											<div className="w-12 h-12 rounded-xl bg-electric-blue/10 flex items-center justify-center text-electric-blue group-hover:scale-110 transition-transform">
												<Icon size={23} />
											</div>

											<span className="text-white/20 text-xs font-semibold tracking-widest">
												0{index + 1}
											</span>
										</div>

										<p className="text-electric-blue text-xs font-semibold tracking-widest uppercase mb-3">
											{item.subtitle}
										</p>

										<h3 className="text-xl font-bold text-white mb-6">
											{item.title}
										</h3>

										<ul className="space-y-4">
											{item.items?.map((text, i) => (
												<li
													key={i}
													className="flex items-start gap-3 text-white/50 text-sm leading-relaxed"
												>
													<span className="w-1.5 h-1.5 rounded-full bg-electric-blue mt-1.5 shrink-0" />
													{text}
												</li>
											))}
										</ul>
									</motion.div>
								);
							})}
						</div>
					</section>
				)}

				{/* TECHNOLOGY SECTION */}
				<section className="max-w-7xl mx-auto px-5 sm:px-8 pt-24 md:pt-32">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#141a2a] to-[#11121a] p-8 md:p-12"
					>
						<div className="absolute -right-20 -top-32 w-80 h-80 bg-electric-blue/10 rounded-full blur-[100px] pointer-events-none" />

						<div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-center">
							<div>
								<div className="text-electric-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
									02 / Technologijos
								</div>

								<h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
									Technologijos, kurios
									<br />
									<span className="text-white/35">
										paverčia idėjas realybe.
									</span>
								</h2>

								<p className="text-white/45 text-sm leading-relaxed max-w-lg">
									Kiekvienam projektui parenkami tinkami
									įrankiai ir technologijos, leidžiantys
									užtikrinti patogų turinio valdymą,
									funkcionalumą ir sklandų veikimą.
								</p>
							</div>

							<div className="flex flex-wrap gap-3 lg:justify-end">
								{project.tags.map((tag, index) => (
									<div
										key={index}
										className="px-5 py-3 rounded-xl border border-white/10 bg-white/[0.04] text-white/75 text-sm font-medium hover:border-electric-blue/40 hover:text-electric-blue transition-colors"
									>
										{tag}
									</div>
								))}
							</div>
						</div>
					</motion.div>
				</section>

				{/* PROJECT NAVIGATION */}
				<section className="max-w-7xl mx-auto px-5 sm:px-8 pt-24 md:pt-32">
					<div className="flex items-center gap-4 mb-8">
						<div className="h-px flex-1 bg-white/10" />
						<span className="text-white/30 text-xs tracking-[0.2em] uppercase">
							03 / Kiti projektai
						</span>
						<div className="h-px flex-1 bg-white/10" />
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
						{prevProject ? (
							<Link
								to={`/projektai/${prevProject.id}`}
								className="group relative flex items-center gap-5 p-5 md:p-7 rounded-2xl border border-white/10 bg-white/[0.025] hover:bg-white/[0.05] hover:border-electric-blue/40 transition-all"
							>
								<img
									src={prevProject.images?.desktop}
									alt={prevProject.alt}
									className="w-24 h-20 md:w-32 md:h-24 object-cover rounded-xl border border-white/10"
								/>

								<div className="min-w-0 flex-1">
									<p className="text-white/35 text-xs mb-2">
										Ankstesnis projektas
									</p>
									<h3 className="text-white font-bold text-lg md:text-xl truncate group-hover:text-electric-blue transition-colors">
										{prevProject.title}
									</h3>
								</div>

								<ArrowLeft
									size={20}
									className="text-white/30 group-hover:text-electric-blue group-hover:-translate-x-1 transition-all shrink-0"
								/>
							</Link>
						) : (
							<div />
						)}

						{nextProject ? (
							<Link
								to={`/projektai/${nextProject.id}`}
								className="group relative flex items-center gap-5 p-5 md:p-7 rounded-2xl border border-white/10 bg-white/[0.025] hover:bg-white/[0.05] hover:border-electric-blue/40 transition-all md:flex-row-reverse md:text-right"
							>
								<img
									src={nextProject.images?.desktop}
									alt={nextProject.alt}
									className="w-24 h-20 md:w-32 md:h-24 object-cover rounded-xl border border-white/10"
								/>

								<div className="min-w-0 flex-1">
									<p className="text-white/35 text-xs mb-2">
										Kitas projektas
									</p>
									<h3 className="text-white font-bold text-lg md:text-xl truncate group-hover:text-electric-blue transition-colors">
										{nextProject.title}
									</h3>
								</div>

								<ArrowRight
									size={20}
									className="text-white/30 group-hover:text-electric-blue group-hover:translate-x-1 transition-all shrink-0"
								/>
							</Link>
						) : (
							<div />
						)}
					</div>
				</section>

				{/* CTA */}
				<section className="max-w-7xl mx-auto px-4 sm:px-8 pt-24 md:pt-32 pb-20">
					<motion.div
						initial={{ opacity: 0, y: 25 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-r from-electric-blue to-neon-purple p-10 md:p-16 text-center"
					>
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.25),transparent_60%)] pointer-events-none" />

						<div className="relative z-10 max-w-2xl mx-auto">
							<div className="flex justify-center mb-6">
								<div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center">
									<Sparkles
										size={27}
										className="text-white"
									/>
								</div>
							</div>

							<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
								Pradėkime Jūsų projektą?
							</h2>

							<p className="text-white/80 text-base md:text-lg mb-9 leading-relaxed">
								Turite idėją ar ieškote sprendimo savo verslui?
								Sukurkime kažką išskirtinio kartu.
							</p>

							<Link
								to="/kontaktai"
								className="inline-flex items-center gap-3 bg-white text-[#171923] px-8 py-4 rounded-xl font-bold text-sm hover:scale-105 transition-transform shadow-xl"
							>
								Pradėti projektą
								<ArrowUpRight size={18} />
							</Link>
						</div>
					</motion.div>
				</section>
			</div>
		</div>
	);
}
