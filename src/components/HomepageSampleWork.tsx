import React from "react";
import projects, { Project } from "./Projects";
import { ArrowRight, MousePointerClick, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectShowcase from "./ProjectShowcase";

const HomepageSampleWork: React.FC = () => {
	const projectsList = projects as Project[];

	const projectOrder = ["smokedrop", "paparciopm", "romasta"];

	const firstThreeProjects = projectOrder
		.map((id) => projectsList.find((project) => project.id === id))
		.filter((project): project is Project => Boolean(project));

	return (
		<section className="relative overflow-hidden py-20 md:py-28">
			{/* Background glow */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-electric-blue/[0.06] blur-[130px]" />
				<div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-500/[0.05] blur-[130px]" />
			</div>

			<div className="container relative z-10 mx-auto px-4">
				{/* Heading */}
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6 }}
					className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
				>
					<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-electric-blue/20 bg-electric-blue/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-electric-blue">
						<Sparkles size={14} />
						Amberweb projektai
					</div>

					<h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
						Idėjos, virtusios{" "}
						<span className="bg-gradient-to-r from-electric-blue to-purple-400 bg-clip-text text-transparent">
							realiais projektais.
						</span>
					</h2>

					<p className="mx-auto max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
						Kiekvienas projektas - individualus sprendimas, sukurtas
						atsižvelgiant į kliento veiklą, poreikius ir tikslus.
					</p>
				</motion.div>

				{/* Projects */}
				<div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
					{firstThreeProjects.map((project, index) => (
						<motion.article
							key={project.id}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.1 }}
							transition={{
								duration: 0.5,
								delay: index * 0.1,
							}}
							className="group h-full"
						>
							<Link
								to={`/projektai/${project.id}`}
								className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-dark-surface-2 transition-all duration-300 hover:-translate-y-1 hover:border-electric-blue/30 hover:shadow-[0_15px_50px_rgba(0,200,255,0.08)]"
							>
								{/* Project preview */}
								<div className="relative overflow-hidden bg-black/20">
									<div className="transition-transform duration-500 group-hover:scale-[1.015]">
										<ProjectShowcase
											images={project.images}
											altTitle={project.title}
										/>
									</div>

									<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

									<div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
										<ArrowRight size={18} />
									</div>
								</div>

								{/* Content */}
								<div className="flex flex-1 flex-col p-6">
									<h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-electric-blue">
										{project.title}
									</h3>

									<p className="mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-white/55">
										{project.description}
									</p>

									<div className="mt-auto flex items-center justify-between border-t border-white/[0.08] pt-5">
										<span className="text-sm font-semibold text-electric-blue">
											Peržiūrėti projektą
										</span>

										<MousePointerClick
											size={18}
											className="text-white/30 transition-colors duration-300 group-hover:text-electric-blue"
										/>
									</div>
								</div>
							</Link>
						</motion.article>
					))}
				</div>

				{/* All projects CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="mt-14 text-center"
				>
					<Link
						to="/projektai"
						className="button-primary group inline-flex items-center gap-2"
					>
						Peržiūrėti visus projektus
						<ArrowRight
							size={18}
							className="transition-transform duration-300 group-hover:translate-x-1"
						/>
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default HomepageSampleWork;
