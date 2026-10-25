import React from "react";
import { Link } from "react-router-dom";
import {
	Layout,
	ShoppingBag,
	TrendingUp,
	ArrowUpRight,
	Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const servicesList = [
	{
		icon: Layout,
		number: "01",
		title: "Interneto svetainių kūrimas",
		slug: "/svetainiu-kurimas",
		description:
			"Kuriame profesionalias reprezentacines, verslo ir asmenines svetaines – nuo pirmosios idėjos iki veikiančio projekto. Modernus dizainas, patogi navigacija ir mobiliesiems pritaikyta struktūra padeda tinkamai pristatyti jūsų veiklą ir pritraukti naujų klientų.",
		tags: ["WordPress", "Individualus dizainas", "Responsive"],
	},
	{
		icon: ShoppingBag,
		number: "02",
		title: "Elektroninių parduotuvių kūrimas",
		slug: "/el-parduotuviu-kurimas",
		description:
			"Projektuojame funkcionalias elektronines parduotuves, pritaikytas jūsų prekybos procesams. Integruojame produktų valdymą, atsiskaitymo būdus ir pristatymo sprendimus, kad apsipirkimas būtų patogus klientams, o parduotuvės administravimas – paprastas jums.",
		tags: ["WooCommerce", "Mokėjimai", "Pristatymo integracijos"],
	},
	{
		icon: TrendingUp,
		number: "03",
		title: "SEO optimizavimas",
		slug: "/seo-optimizavimas",
		description:
			"Paruošiame svetainę paieškos sistemoms ir atliekame svarbiausius pradinio SEO optimizavimo darbus. Sutvarkome metaduomenis, turinio struktūrą ir techninius aspektus, padedančius gerinti svetainės matomumą Google paieškoje.",
		tags: ["Techninis SEO", "Meta duomenys", "Google"],
	},
];

const Services: React.FC = () => {
	return (
		<div className="container relative z-10 mx-auto px-4">
			{/* Section heading */}
			<motion.div
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6 }}
				className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
			>
				<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-electric-blue/20 bg-electric-blue/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-electric-blue">
					<Sparkles size={14} />
					Ką galime pasiūlyti?
				</div>

				<h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
					Sprendimai jūsų verslui{" "}
					<span className="bg-gradient-to-r from-electric-blue to-purple-400 bg-clip-text text-transparent">
						internete.
					</span>
				</h2>

				<p className="mx-auto max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
					Nuo reprezentacinės svetainės iki pilnai veikiančios
					elektroninės parduotuvės – pasirūpiname jūsų verslo
					įvaizdžiu ir galimybėmis internete.
				</p>
			</motion.div>

			{/* Services cards */}
			<div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
				{servicesList.map((service, index) => {
					const Icon = service.icon;

					return (
						<motion.article
							key={service.number}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.1 }}
							transition={{
								duration: 0.5,
								delay: index * 0.1,
							}}
							className="group relative h-full"
						>
							<Link
								to={service.slug}
								aria-label={`Sužinoti daugiau: ${service.title}`}
								className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-4 focus-visible:ring-offset-dark-bg"
							>
								<div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-dark-surface-2 p-7 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-electric-blue/30 group-hover:shadow-[0_15px_50px_rgba(0,200,255,0.07)] sm:p-8">
									{/* Decorative glow */}
									<div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-electric-blue/[0.04] blur-3xl transition-colors duration-500 group-hover:bg-electric-blue/[0.12]" />

									<div className="relative flex flex-1 flex-col">
										{/* Icon and number */}
										<div className="mb-8 flex items-start justify-between">
											<div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-electric-blue/20 bg-electric-blue/[0.08] text-electric-blue transition-all duration-300 group-hover:border-electric-blue/40 group-hover:bg-electric-blue/[0.15]">
												<Icon
													size={28}
													strokeWidth={1.6}
												/>
											</div>

											<span className="text-sm font-semibold tracking-wider text-white/20 transition-colors duration-300 group-hover:text-electric-blue/60">
												{service.number}
											</span>
										</div>

										{/* Content */}
										<h3 className="mb-4 text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-electric-blue sm:text-2xl">
											{service.title}
										</h3>

										<p className="flex-1 text-sm leading-relaxed text-white/55 sm:text-base">
											{service.description}
										</p>

										{/* Tags */}
										<div className="mt-8 flex flex-wrap gap-2">
											{service.tags.map((tag) => (
												<span
													key={tag}
													className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-white/50 transition-colors duration-300 group-hover:border-electric-blue/15 group-hover:text-white/70"
												>
													{tag}
												</span>
											))}
										</div>

										{/* Bottom link indicator */}
										<div className="mt-7 flex items-center justify-between border-t border-white/[0.08] pt-5">
											<span className="text-xs font-semibold uppercase tracking-wider text-white/35 transition-colors duration-300 group-hover:text-electric-blue">
												Sužinoti daugiau
											</span>

											<div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-white/40 transition-all duration-300 group-hover:border-electric-blue/30 group-hover:bg-electric-blue/10 group-hover:text-electric-blue">
												<ArrowUpRight
													size={17}
													className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
												/>
											</div>
										</div>
									</div>
								</div>
							</Link>
						</motion.article>
					);
				})}
			</div>
		</div>
	);
};

export default Services;
