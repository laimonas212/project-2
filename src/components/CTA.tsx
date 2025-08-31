import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

interface CTAProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    link?: string;
    small?: boolean; // New prop: optional boolean to control size
}

const CTA = ({
	title = "Gaukite nemokamą konsultaciją",
	subtitle = "Susisiekite su mumis ir pradėkite savo interneto svetainės kūrimo kelionę jau šiandien.",
	buttonText = "Konsultuotis",
	link = "/kontaktai",
	small = false // Default to false, so it's large by default
}: CTAProps) => {
	const Icon = small ? Phone : ArrowRight;
	return (
		<section className={`${small ? 'py-0' : 'py-20 relative overflow-hidden'}`}>
			{/* Conditional background for the large CTA */}
			{!small && (
				<div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-neon-purple" />
			)}

			{/* The inner container remains, but its padding adjusts */}
			<div className={`container mx-auto text-center ${small ? 'px-0' : 'px-4'} relative`}>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={small ? { opacity: 1, y: 0 } : undefined}
					whileInView={!small ? { opacity: 1, y: 0 } : undefined}
					viewport={{ once: true }}
				>

					{/* Title color is already text-white, which is good */}
					<h2 className={`${small ? 'text-xl mb-2' : 'text-3xl md:text-4xl mb-6'} font-bold text-white`}>
						{title}
					</h2>
					{/* Subtitle color: Ensure it's fully opaque for small version */}
					<p className={`${small ? 'text-white/70 text-sm mb-4' : 'text-white/90 text-lg mb-8'}`}>
						{subtitle}
					</p>
					<Link to={link}>
						<motion.button
                            
							className={`inline-flex items-center gap-2 group ${small ? 'button-primary' : 'button-cta'}`}
						>
							<span>{buttonText}</span>
							<Icon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</motion.button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
}

export default CTA;