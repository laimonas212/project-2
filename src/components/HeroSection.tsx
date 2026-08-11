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

interface HeroSectionProps {
	h1?: string;
	introText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ h1, introText }) => {
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
							<h2 className="text-white/90 text-sm font-medium">
								Profesionalios paslaugos
							</h2>
						</motion.div>

						<motion.h1
							initial={{ y: 20 }}
							animate={{ y: 0 }}
							transition={{
								duration: 0.8,
								ease: [0.215, 0.61, 0.355, 1],
							}}
							className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-white"
						>
							{h1 ? (
								h1
							) : (
								<>
									Kuriame{" "}
									<span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-purple">
										Skaitmenines
									</span>{" "}
									Patirtis
								</>
							)}
						</motion.h1>

						<motion.p
							initial="hidden"
							animate={inView ? "visible" : "hidden"}
							variants={titleVariants}
							custom={2}
							className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
						>
							{introText ||
								"Idėjas paverčiame profesionaliomis interneto svetainėmis, naudodami pažangiausias technologijas ir kūrybinius sprendimus."}
						</motion.p>
					</div>

					{/* CTA Buttons */}
					<motion.div
						initial="hidden"
						animate={inView ? "visible" : "hidden"}
						variants={titleVariants}
						custom={3}
						className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
					>
						<Link to="/kontaktai" className="text-white">
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="button-primary inline-flex items-center gap-2 group"
							>
								Pradėkite savo projektą
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

					{/* Stats */}
					<motion.div
						initial="hidden"
						animate={inView ? "visible" : "hidden"}
						variants={titleVariants}
						custom={4}
						className="grid grid-cols-2 md:grid-cols-4 gap-8"
					>
						{[
							{
								icon: <Rocket className="w-8 h-8" />,
								label: "Greitos ir SEO draugiškos svetainės",
							},
							{
								icon: <MonitorSmartphone className="w-8 h-8" />,
								label: "Sklandžiai veikia kompiuteriuose ir telefonuose",
							},
							{
								icon: <PenTool className="w-8 h-8" />,
								label: "Priderintas dizainas pagal kliento poreikius",
							},
							{
								icon: <Handshake className="w-8 h-8" />,
								label: "Sklandus bendradarbiavimas ir palaikymas",
							},
						].map((stat, index) => (
							<motion.div
								key={stat.label}
								initial={{ opacity: 0, y: 20 }}
								animate={
									inView
										? { opacity: 1, y: 0 }
										: { opacity: 0, y: 20 }
								}
								transition={{ delay: 0.5 + index * 0.1 }}
								className="text-center"
							>
								<div className="text-3xl md:text-4xl flex align-center justify-center font-display font-bold text-electric-blue mb-2">
									{stat.icon}
								</div>
								<div className="text-white/70 text-sm">
									{stat.label}
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default HeroSection;
