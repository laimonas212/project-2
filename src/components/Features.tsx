import React from "react";
import {
	Briefcase,
	TrendingUp,
	Eye,
	Puzzle,
	ThumbsUp,
	ArrowRight,
	Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface FeaturesProps {
	h1?: string;
	introText?: string;
	seoContent?: string[];
}

const features = [
	{
		icon: Briefcase,
		number: "01",
		title: "Patirtis ir inovacijos",
		description:
			"Pasitelkiame patirtį, šiuolaikines technologijas ir kūrybiškumą, kad sukurtume svetaines, padedančias siekti realių verslo tikslų.",
	},
	{
		icon: TrendingUp,
		number: "02",
		title: "Investicija į augimą",
		description:
			"Kuriame ne tik gražias svetaines, bet ir verslo įrankius, kurie padeda pritraukti klientus, stiprinti įvaizdį ir auginti pardavimus.",
	},
	{
		icon: Eye,
		number: "03",
		title: "Dizainas, turintis tikslą",
		description:
			"Kiekvienas dizaino sprendimas apgalvotas. Svarbu ne tik estetika, bet ir aiški struktūra, patogus naudojimas bei gera lankytojo patirtis.",
	},
	{
		icon: Puzzle,
		number: "04",
		title: "Sprendimai jūsų verslui",
		description:
			"Kiekvienas verslas skirtingas, todėl svetaines pritaikome individualiems poreikiams, veiklos specifikai ir užsibrėžtiems tikslams.",
	},
	{
		icon: ThumbsUp,
		number: "05",
		title: "Partnerystė ir palaikymas",
		description:
			"Neapsiribojame vien svetainės paleidimu. Esame pasiruošę padėti, konsultuoti ir užtikrinti sklandų jos veikimą.",
	},
];

const Features: React.FC<FeaturesProps> = ({ h1, introText, seoContent }) => {
	return (
		<section className="relative overflow-hidden py-20 md:py-28">
			{/* Background effects */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-electric-blue/[0.06] blur-[130px]" />
				<div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-500/[0.05] blur-[130px]" />
			</div>

			<div className="container relative z-10 mx-auto px-4">
				{/* Section heading */}
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.6 }}
					className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
				>
					<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-electric-blue/20 bg-electric-blue/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-electric-blue">
						<Sparkles size={14} />
						Kodėl Amberweb?
					</div>

					<h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
						{h1 || (
							<>
								Daugiau nei svetainė.
								<span className="block bg-gradient-to-r from-electric-blue to-purple-400 bg-clip-text text-transparent">
									Sprendimas jūsų verslui.
								</span>
							</>
						)}
					</h2>

					<p className="mx-auto max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
						{introText ||
							"Kuriame interneto svetaines, kurios ne tik reprezentuoja jūsų verslą, bet ir padeda jam augti."}
					</p>
				</motion.div>

				{/* SEO content */}
				{seoContent && seoContent.length > 0 && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="mx-auto mb-14 max-w-4xl space-y-4 text-base leading-relaxed text-white/60"
					>
						{seoContent.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))}
					</motion.div>
				)}

				{/* Feature cards */}
				<div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
					{features.map((feature, index) => {
						const Icon = feature.icon;

						return (
							<motion.div
								key={feature.number}
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.1 }}
								transition={{
									duration: 0.5,
									delay: (index % 3) * 0.1,
								}}
								className={`group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-dark-surface-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-electric-blue/30 hover:shadow-[0_15px_45px_rgba(0,200,255,0.06)] sm:p-7 ${
									index === 3 ? "xl:col-span-1" : ""
								}`}
							>
								{/* Hover glow */}
								<div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-electric-blue/[0.04] blur-3xl transition-all duration-500 group-hover:bg-electric-blue/[0.12]" />

								<div className="relative flex h-full flex-col">
									<div className="mb-7 flex items-start justify-between">
										<div className="flex h-14 w-14 items-center justify-center rounded-xl border border-electric-blue/20 bg-electric-blue/[0.08] text-electric-blue transition-all duration-300 group-hover:border-electric-blue/40 group-hover:bg-electric-blue/[0.14]">
											<Icon size={25} strokeWidth={1.7} />
										</div>

										<span className="text-sm font-semibold tracking-wider text-white/20 transition-colors duration-300 group-hover:text-electric-blue/60">
											{feature.number}
										</span>
									</div>

									<h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-electric-blue">
										{feature.title}
									</h3>

									<p className="text-sm leading-relaxed text-white/55">
										{feature.description}
									</p>

									<div className="mt-auto flex justify-end pt-6">
										<div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-white/30 transition-all duration-300 group-hover:border-electric-blue/30 group-hover:text-electric-blue">
											<ArrowRight size={15} />
										</div>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-electric-blue/15 bg-electric-blue/[0.04] p-7 sm:flex-row sm:p-9"
				>
					<div className="text-center sm:text-left">
						<h3 className="mb-2 text-xl font-bold text-white">
							Turite idėją? Paverskime ją realybe.
						</h3>

						<p className="text-sm text-white/55">
							Pasikalbėkime apie jūsų projektą ir raskime
							tinkamiausią sprendimą.
						</p>
					</div>

					<Link
						to="/kontaktai"
						className="button-primary group inline-flex shrink-0 items-center gap-2"
					>
						Gaukite konsultaciją
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

export default Features;
