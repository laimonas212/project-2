import { motion } from "framer-motion";
import Images from "../img/Images";

const technologyGroups = [
	{
		title: "Svetainės ir el. prekyba",
		description:
			"Patikimos platformos verslo svetainėms ir elektroninėms parduotuvėms.",
		items: [
			{ name: "WordPress", image: Images.logos.wordpress },
			{ name: "WooCommerce", image: Images.logos.wooWhite },
			{ name: "Divi", image: Images.logos.divi },
			{ name: "Elementor", image: Images.logos.elementor },
		],
	},
	{
		title: "Programavimas ir individualūs sprendimai",
		description:
			"Modernios technologijos individualiam funkcionalumui ir web aplikacijoms.",
		items: [
			{ name: "React", image: Images.logos.react },
			{ name: "JavaScript", image: Images.logos.js},
			{ name: "PHP", image: Images.logos.php },
			{ name: "HTML5", image: Images.logos.html },
			{ name: "CSS3", image: Images.logos.css },
		],
	},
	{
		title: "AI įrankiai ir inovacijos",
		description:
			"Dirbtinio intelekto sprendimai, padedantys greičiau kurti, testuoti ir įgyvendinti naujas idėjas.",
		items: [
			{ name: "ChatGPT", image: Images.logos.chatgpt },
			{ name: "Lovable", image: Images.logos.lovable },
		],
	},
];

const Technologies = () => {
	const squareLogos = ["React", "HTML5", "CSS3"];

	return (
		<section className="section-spacing relative overflow-hidden">
			<div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-electric-blue/10 blur-[120px]" />

			<div className="container relative mx-auto px-4">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6 }}
					className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
				>
					<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-electric-blue/20 bg-electric-blue/10 px-4 py-2 text-sm font-medium text-electric-blue">
						<span className="h-2 w-2 rounded-full bg-electric-blue" />
						Technologijų ekosistema
					</div>

					<h2 className="mb-5 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
						Technologijos, kurios padeda kurti{" "}
						<span className="bg-gradient-to-r from-electric-blue to-purple-400 bg-clip-text text-transparent">
							geresnius sprendimus
						</span>
					</h2>

					<p className="mx-auto max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
						Deriname patikrintas platformas, modernias programavimo
						technologijas ir dirbtinio intelekto įrankius, kad
						kurtume funkcionalius, greitus ir šiuolaikiškus
						skaitmeninius sprendimus.
					</p>
				</motion.div>

				{/* Technology groups */}
				<div className="mx-auto max-w-5xl space-y-10 md:space-y-12">
					{technologyGroups.map((group, groupIndex) => (
						<motion.div
							key={group.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.15 }}
							transition={{ duration: 0.5 }}
						>
							{/* Group heading */}
							<div className="mb-5">
								<h3 className="text-lg font-semibold text-white md:text-xl">
									{group.title}
								</h3>
								<p className="mt-1 text-sm text-white/45">
									{group.description}
								</p>
							</div>

							{/* Technology cards */}
							<div
								className={`grid gap-3 sm:gap-4 ${
									groupIndex === 0
										? "grid-cols-2 sm:grid-cols-4"
										: groupIndex === 1
											? "grid-cols-2 sm:grid-cols-3 md:grid-cols-5"
											: "grid-cols-2"
								}`}
							>
								{group.items.map((technology, index) => (
									<motion.div
										key={technology.name}
										initial={{ opacity: 0, y: 16 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{
											once: true,
											amount: 0.2,
										}}
										transition={{
											duration: 0.4,
											delay: index * 0.05,
										}}
										whileHover={{ y: -4 }}
										className="group flex min-h-[116px] flex-col items-center justify-center gap-3 rounded-2xl border border-white/[0.07] bg-dark-surface-2/70 px-4 py-6 transition-[border-color,background-color] duration-300 hover:border-electric-blue/40 hover:bg-dark-surface-2 sm:min-h-[130px]"
									>
										<div className="flex h-10 items-center justify-center">
											{technology.image ? (
												<img
													src={technology.image}
													alt={technology.name}
													loading="lazy"
													className={`max-h-10 object-contain transition-transform duration-300 group-hover:scale-110 ${
														squareLogos.includes(
															technology.name,
														)
															? "h-10 w-10"
															: "h-auto w-24"
													}`}
												/>
											) : (
												<span className="flex h-10 min-w-10 items-center justify-center rounded-lg bg-white/10 px-2 text-lg font-bold text-white transition-transform duration-300 group-hover:scale-110">
													{technology.textLogo}
												</span>
											)}
										</div>

										<span className="text-sm font-medium text-white/65 transition-colors duration-300 group-hover:text-white">
											{technology.name}
										</span>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Technologies;
