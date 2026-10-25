import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles } from "lucide-react";

interface CTAProps {
	title?: string;
	subtitle?: string;
	buttonText?: string;
	link?: string;
	small?: boolean;
}

const CTA = ({
	title = "Gaukite nemokamą konsultaciją",
	subtitle = "Susisiekite su mumis ir pradėkite savo interneto svetainės kūrimo kelionę jau šiandien.",
	buttonText = "Konsultuotis",
	link = "/kontaktai",
	small = false,
}: CTAProps) => {
	const Icon = small ? Phone : ArrowRight;

	if (small) {
		return (
			<section className="relative">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="flex flex-col items-start gap-4"
				>
					<div>
						<h2 className="mb-2 text-xl font-bold text-white">
							{title}
						</h2>

						<p className="text-sm leading-relaxed text-white/60">
							{subtitle}
						</p>
					</div>

					<Link
						to={link}
						className="button-primary group inline-flex items-center gap-2"
					>
						<span>{buttonText}</span>
						<Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
					</Link>
				</motion.div>
			</section>
		);
	}

	return (
		<section className="relative overflow-hidden py-20 md:py-28">
			<div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-electric-blue to-neon-purple" />

			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute -left-20 -top-32 h-80 w-80 rounded-full border border-white/10" />
				<div className="absolute -left-10 -top-20 h-60 w-60 rounded-full border border-white/10" />
				<div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full border border-white/10" />
				<div className="absolute inset-0 bg-black/[0.08]" />
			</div>

			<motion.div
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6 }}
				className="container relative mx-auto px-5 text-center md:px-10"
			>
				<div className="mx-auto max-w-3xl">
					<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white">
						<Sparkles className="h-4 w-4" />
						Pradėkime bendradarbiauti
					</div>

					<h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
						{title}
					</h2>

					<p className="mx-auto mb-9 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
						{subtitle}
					</p>

					<Link
						to={link}
						className="group inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-semibold text-dark-surface shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
					>
						<span>{buttonText}</span>
						<Icon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
					</Link>
				</div>
			</motion.div>
		</section>
	);
};

export default CTA;
