import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, ArrowRight, Sparkles } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import ParticlesBackground from "./ParticlesBackground"; // Jei palieki foną

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

	const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

	const titleVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.1,
				duration: 0.8,
				ease: [0.215, 0.61, 0.355, 1],
			},
		}),
	};

	return (
		<motion.div
			ref={containerRef}
			className="-mt-20 :md-mt-36 relative min-h-screen flex items-center justify-center overflow-hidden"
			style={{ opacity }}
		>
			<ParticlesBackground />

			{/* Gradient Overlays */}
			<div className="fixed inset-0 z-0 pointer-events-none">
				<div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(60,80,200,0.25)_0%,transparent_70%)]" />
			</div>

			{/* Content */}
			<div className="container mx-auto px-4 relative z-10" ref={ref}>
				<div className="max-w-5xl mx-auto">
					<div className="space-y-6 text-center mb-12">
						<motion.div
							initial="hidden"
							animate={inView ? "visible" : "hidden"}
							variants={titleVariants}
							custom={0}
							className="inline-flex items-center gap-2 bg-dark-surface/50 backdrop-blur-sm px-6 py-3 rounded-full"
						>
							<Sparkles className="w-5 h-5 text-electric-blue" />
							<h1 className="text-white/90">
								WordPress ir el. parduotuvių kūrimas
							</h1>
						</motion.div>

						<motion.h1
							initial={{ y: 20 }}
							animate={{ y: 0 }}
							transition={{
								duration: 0.8,
								ease: [0.215, 0.61, 0.355, 1],
							}}
							className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight opacity-100"
						>
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-purple">
								Interneto svetainių
							</span>{" "}
							kūrimas jūsų verslui
						</motion.h1>

						<motion.p
							initial="hidden"
							animate={inView ? "visible" : "hidden"}
							variants={titleVariants}
							custom={2}
							className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto"
						>
							Kuriame modernias interneto svetaines ir el.
							parduotuves, kurios padeda pritraukti klientus,
							didina pardavimus ir stiprina jūsų įmonės įvaizdį.
						</motion.p>
					</div>

					{/* CTA Buttons */}
					<motion.div
						initial="hidden"
						animate={inView ? "visible" : "hidden"}
						variants={titleVariants}
						custom={3}
						className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-32"
					>
						<Link to="/kontaktai" className="text-white">
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="button-primary inline-flex items-center gap-2 group"
							>
								Gaukite nemokamą konsultaciją
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</motion.button>
						</Link>
						<Link to="/projektai" className="text-white">
							<button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 hover:border-electric-blue/50 transition-colors duration-300 backdrop-blur-sm">
								<Code2 className="w-5 h-5" />
								Peržiūrėkite mūsų darbus
							</button>
						</Link>
					</motion.div>
				</div>

				{/* Scroll Indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5 }}
					className="absolute bottom-8 left-1/2 -translate-x-1/2"
				>
					<div className="flex flex-col items-center gap-2">
						<span className="text-sm text-white/50">
							Sužinokite daugiau apie svetainių kūrimą
						</span>
						<motion.div
							animate={{
								y: [0, 10, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "reverse",
							}}
							className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center p-1"
						>
							<div className="w-1 h-1.5 bg-electric-blue rounded-full" />
						</motion.div>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default HeroSectionLanding;
