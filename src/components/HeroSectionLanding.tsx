import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
	Code2,
	ArrowRight,
	Sparkles,
	Rocket,
	MonitorSmartphone,
	PenTool,
	Handshake,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import ParticlesBackground from "./ParticlesBackground";

const HeroSectionLanding = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});

	const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);

	const titleVariants = {
		hidden: { opacity: 0, y: 24 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.12,
				duration: 0.75,
				ease: [0.215, 0.61, 0.355, 1] as const,
			},
		}),
	};

	const benefits = [
		{
			icon: Rocket,
			title: "Greitis ir SEO",
			description: "Greitai veikiančios, paieškai optimizuotos svetainės",
		},
		{
			icon: MonitorSmartphone,
			title: "Pritaikyta visiems įrenginiams",
			description: "Patogi patirtis telefone, planšetėje ir kompiuteryje",
		},
		{
			icon: PenTool,
			title: "Individualus dizainas",
			description: "Sprendimai, pritaikyti jūsų verslo identitetui",
		},
		{
			icon: Handshake,
			title: "Pagalba ir palaikymas",
			description: "Aiškus procesas ir ilgalaikis bendradarbiavimas",
		},
	];

	return (
		<motion.section
			ref={containerRef}
			style={{ opacity }}
			className="relative isolate -mt-20 flex min-h-[850px] items-center overflow-hidden bg-dark-surface pb-24 pt-36 md:min-h-screen md:pb-28 md:pt-40"
		>
			{/* Background */}
			<div className="absolute inset-0 z-0">
				<ParticlesBackground />

				<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(60,80,200,0.20)_0%,transparent_65%)]" />

				<div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-electric-blue/10 blur-[150px]" />

				<div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-neon-purple/10 blur-[150px]" />

				<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-dark-surface/10 via-transparent to-dark-surface" />
			</div>

			{/* Content */}
			<div ref={ref} className="container relative z-10 mx-auto px-4">
				<div className="mx-auto max-w-6xl">
					{/* Heading */}
					<div className="mx-auto mb-14 max-w-5xl space-y-7 text-center">
						<motion.div
							initial="hidden"
							animate={inView ? "visible" : "hidden"}
							variants={titleVariants}
							custom={0}
							className="inline-flex items-center gap-2 rounded-full border border-electric-blue/20 bg-electric-blue/10 px-5 py-2.5 backdrop-blur-md"
						>
							<Sparkles className="h-4 w-4 text-electric-blue" />
							<span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
								WordPress ir el. parduotuvių kūrimas
							</span>
						</motion.div>

						<motion.h1
							initial="hidden"
							animate={inView ? "visible" : "hidden"}
							variants={titleVariants}
							custom={1}
							className="font-display text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
						>
							<span className="bg-gradient-to-r from-electric-blue via-[#8B7CFF] to-neon-purple bg-clip-text text-transparent">
								Interneto svetainių
							</span>{" "}
							kūrimas jūsų verslui
						</motion.h1>

						<motion.p
							initial="hidden"
							animate={inView ? "visible" : "hidden"}
							variants={titleVariants}
							custom={2}
							className="mx-auto max-w-3xl text-base leading-relaxed text-white/65 sm:text-lg md:text-xl"
						>
							Kuriame modernias interneto svetaines ir el.
							parduotuves, kurios padeda pritraukti klientus,
							didina pardavimus ir stiprina jūsų įmonės įvaizdį.
						</motion.p>
					</div>

					{/* CTA */}
					<motion.div
						initial="hidden"
						animate={inView ? "visible" : "hidden"}
						variants={titleVariants}
						custom={3}
						className="mb-20 flex flex-col items-center justify-center gap-4 sm:flex-row"
					>
						<motion.div
							whileHover={{ y: -3 }}
							whileTap={{ scale: 0.97 }}
						>
							<Link
								to="/kontaktai"
								className="button-primary group inline-flex min-h-14 items-center justify-center gap-3 px-7 text-white"
							>
								Gaukite nemokamą konsultaciją
								<ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
							</Link>
						</motion.div>

						<motion.div
							whileHover={{ y: -3 }}
							whileTap={{ scale: 0.97 }}
						>
							<Link
								to="/projektai"
								className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-7 text-sm font-semibold text-white transition-all duration-300 hover:border-electric-blue/50 hover:bg-white/[0.08]"
							>
								<Code2 className="h-5 w-5 text-electric-blue" />
								Peržiūrėkite mūsų darbus
							</Link>
						</motion.div>
					</motion.div>

					{/* Benefits */}
					<motion.div
						initial="hidden"
						animate={inView ? "visible" : "hidden"}
						variants={titleVariants}
						custom={4}
						className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
					>
						{benefits.map((benefit, index) => {
							const Icon = benefit.icon;

							return (
								<motion.div
									key={benefit.title}
									initial={{ opacity: 0, y: 20 }}
									animate={
										inView
											? { opacity: 1, y: 0 }
											: { opacity: 0, y: 20 }
									}
									transition={{
										delay: 0.55 + index * 0.12,
										duration: 0.6,
									}}
									className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-electric-blue/30 hover:bg-white/[0.05]"
								>
									<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-electric-blue/[0.06] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

									<div className="relative z-10">
										<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-electric-blue/20 bg-electric-blue/10 text-electric-blue transition-all duration-300 group-hover:scale-110 group-hover:bg-electric-blue/15">
											<Icon className="h-6 w-6" />
										</div>

										<h3 className="mb-2 text-sm font-semibold text-white">
											{benefit.title}
										</h3>

										<p className="text-xs leading-relaxed text-white/50">
											{benefit.description}
										</p>
									</div>
								</motion.div>
							);
						})}
					</motion.div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: inView ? 1 : 0 }}
				transition={{ delay: 1.5 }}
				className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
			>
				<span className="text-xs text-white/40">
					Sužinokite daugiau apie svetainių kūrimą
				</span>

				<motion.div
					animate={{ y: [0, 8, 0] }}
					transition={{
						duration: 1.5,
						repeat: Infinity,
						repeatType: "reverse",
					}}
					className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-white/20 p-1"
				>
					<div className="h-1.5 w-1 rounded-full bg-electric-blue" />
				</motion.div>
			</motion.div>

			<div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-dark-surface to-transparent" />
		</motion.section>
	);
};

export default HeroSectionLanding;
