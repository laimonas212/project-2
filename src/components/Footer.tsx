import { motion } from "framer-motion";
import {
	Mail,
	Phone,
	MapPin,
	Shield,
	ReceiptText,
	Cookie,
	ArrowUpRight,
	Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const navigation = [
		{ title: "Projektai", url: "/projektai" },
		{ title: "Kainos", url: "/kainos" },
		{ title: "Straipsniai", url: "/blog" },
		{ title: "Kontaktai", url: "/kontaktai" },
	];

	const services = [
		{ title: "Interneto svetainių kūrimas", url: "/svetainiu-kurimas" },
		{ title: "El. parduotuvių kūrimas", url: "/el-parduotuviu-kurimas" },
		{ title: "SEO optimizavimas", url: "/seo-optimizavimas" },
	];

	const contactInfo = [
		{
			icon: Mail,
			title: "El. paštas",
			value: "info@amberweb.lt",
			url: "mailto:info@amberweb.lt",
		},
		{
			icon: Phone,
			title: "Telefonas",
			value: "+370 611 18874",
			url: "tel:+37061118874",
		},
		{
			icon: MapPin,
			title: "Vieta",
			value: "Vilnius, Lietuva",
		},
	];

	const legalPages = [
		{
			title: "Privatumo politika",
			url: "/privatumo-politika",
			icon: Shield,
		},
		{
			title: "Sąlygos",
			url: "/salygos",
			icon: ReceiptText,
		},
		{
			title: "Slapukai",
			url: "/slapukai",
			icon: Cookie,
		},
	];

	return (
		<footer className="relative z-10 overflow-hidden border-t border-white/[0.06] bg-dark-surface">
			<div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-electric-blue/[0.06] blur-[140px]" />

			<div className="container relative mx-auto px-4">
				<div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr] lg:gap-10 lg:py-20">
					{/* Brand */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<Link to="/" className="inline-flex items-center gap-2">
							<span className="text-2xl font-bold tracking-tight text-white">
								Amber
								<span className="text-electric-blue">web</span>
								<span className="text-electric-blue">.</span>
							</span>
						</Link>

						<p className="mt-5 max-w-xs text-sm leading-7 text-white/50">
							Kuriame modernias interneto svetaines ir
							elektronines parduotuves, padedančias verslui augti
							skaitmeninėje erdvėje.
						</p>

						<div className="mt-6 inline-flex items-center gap-2 text-sm text-white/40">
							<Globe className="h-4 w-4 text-electric-blue" />
							amberweb.lt
						</div>
					</motion.div>

					{/* Navigation */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
							Navigacija
						</h3>

						<ul className="space-y-3">
							{navigation.map((item) => (
								<li key={item.url}>
									<Link
										to={item.url}
										className="group inline-flex items-center gap-2 text-sm text-white/50 transition-colors duration-300 hover:text-electric-blue"
									>
										{item.title}
										<ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
									</Link>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Services */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
							Paslaugos
						</h3>

						<ul className="space-y-3">
							{services.map((item) => (
								<li key={item.url}>
									<Link
										to={item.url}
										className="text-sm leading-relaxed text-white/50 transition-colors duration-300 hover:text-electric-blue"
									>
										{item.title}
									</Link>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Contact */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
							Susisiekime
						</h3>

						<div className="space-y-5">
							{contactInfo.map((info) => {
								const Icon = info.icon;

								return (
									<div
										key={info.title}
										className="flex items-start gap-3"
									>
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-electric-blue/15 bg-electric-blue/[0.08] text-electric-blue">
											<Icon className="h-4 w-4" />
										</div>

										<div>
											<p className="mb-1 text-xs text-white/35">
												{info.title}
											</p>

											{info.url ? (
												<a
													href={info.url}
													className="text-sm text-white/70 transition-colors hover:text-electric-blue"
												>
													{info.value}
												</a>
											) : (
												<p className="text-sm text-white/70">
													{info.value}
												</p>
											)}
										</div>
									</div>
								);
							})}
						</div>
					</motion.div>
				</div>

				{/* Bottom bar */}
				<div className="flex flex-col gap-6 border-t border-white/[0.07] py-7 md:flex-row md:items-center md:justify-between">
					<p className="text-center text-xs text-white/35 md:text-left">
						© {currentYear} Amberweb. Visos teisės saugomos.
					</p>

					<div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:justify-end">
						{legalPages.map((item) => (
							<Link
								key={item.url}
								to={item.url}
								className="inline-flex items-center gap-1.5 text-xs text-white/40 transition-colors duration-300 hover:text-electric-blue"
							>
								{item.title}
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
