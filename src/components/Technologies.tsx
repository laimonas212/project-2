import { motion } from "framer-motion";
import Images from "../img/Images";

const Technologies = () => {
	const technologiesList = [
		{ name: "WordPress", image: Images.logos.wordpress },
		{ name: "WooCommerce", image: Images.logos.wooWhite },
		{ name: "Divi", image: Images.logos.divi },
		{ name: "Elementor", image: Images.logos.elementor },
		{ name: "Midjourney", image: Images.logos.midjourney },
		{ name: "ChatGPT", image: Images.logos.chatgpt },
		{ name: "React", image: Images.logos.react },
		{ name: "HTML5", image: Images.logos.html },
		{ name: "CSS3", image: Images.logos.css },
	];

	const squareLogos = ["React", "HTML5", "CSS3"];

	return (
		<section className="relative overflow-hidden py-20 md:py-28">
			<div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-electric-blue/10 blur-[120px]" />

			<div className="container relative mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6 }}
					className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
				>
					<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-electric-blue/20 bg-electric-blue/10 px-4 py-2 text-sm font-medium text-electric-blue">
						<span className="h-2 w-2 rounded-full bg-electric-blue" />
						Technologijų pasirinkimas
					</div>

					<h2 className="mb-5 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
						Technologijos, kurios padeda kurti{" "}
						<span className="bg-gradient-to-r from-electric-blue to-purple-400 bg-clip-text text-transparent">
							geresnius sprendimus
						</span>
					</h2>

					<p className="mx-auto max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
						Dirbame su patikrintomis platformomis ir šiuolaikiniais
						įrankiais, kurie leidžia kurti greitas, funkcionalias,
						saugias ir lengvai valdomas interneto svetaines bei
						elektronines parduotuves.
					</p>
				</motion.div>

				<div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-5">
					{technologiesList.map((technology, index) => (
						<motion.div
							key={technology.name}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{
								duration: 0.45,
								delay: index * 0.06,
							}}
							whileHover={{ y: -5 }}
							className="group flex min-h-[116px] flex-col items-center justify-center gap-3 rounded-2xl border border-white/[0.07] bg-dark-surface-2/70 px-4 py-6 transition-colors duration-300 hover:border-electric-blue/40 hover:bg-dark-surface-2 sm:min-h-[130px]"
						>
							<div className="flex h-10 items-center justify-center">
								<img
									src={technology.image}
									alt={technology.name}
									loading="lazy"
									className={`max-h-10 object-contain transition-transform duration-300 group-hover:scale-110 ${
										squareLogos.includes(technology.name)
											? "h-10 w-10"
											: "h-auto w-24"
									}`}
								/>
							</div>

							<span className="text-sm font-medium text-white/65 transition-colors duration-300 group-hover:text-white">
								{technology.name}
							</span>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Technologies;
