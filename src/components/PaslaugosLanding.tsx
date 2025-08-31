import {
	Layout,
	Search,
	Settings,
	ShoppingBag,
	Smartphone,
	TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const PaslaugosLanding = () => {
	const paslaugosList = [
		{
			icon: <Layout className="w-6 h-6" />,
			title: "Interneto svetainių kūrimas",
			description:
				"Kuriame reprezentacines svetaines įmonėms, paslaugų teikėjams, organizacijoms.",
		},
		{
			icon: <ShoppingBag className="w-6 h-6" />,
			title: "Elektroninių parduotuvių kūrimas",
			description:
				"„WooCommerce“ pagrindu sukurtos parduotuvės su integruotais mokėjimais ir patogia prekių administracija.",
		},
		{
			icon: <TrendingUp className="w-6 h-6" />,
			title: "WordPress svetainių kūrimas",
			description:
				"Naudojame populiariausią turinio valdymo sistemą su patogiu „Divi“ dizaino redaktoriumi.",
		},
		{
			icon: <TrendingUp className="w-6 h-6" />,
			title: "SEO optimizacija",
			description:
				"Pasirūpiname, kad jūsų svetainė būtų greita, matoma „Google“ ir pritrauktų organinį srautą.",
		},
		{
			icon: <TrendingUp className="w-6 h-6" />,
			title: "Mobilus pritaikymas",
			description:
				"Visos mūsų svetainės puikiai veikia telefonuose ir planšetėse.",
		},
	];
	return (
		<div className="container mx-auto px-4">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="text-center mb-16"
			>
				<h2 className="text-3xl md:text-4xl font-bold mb-4">
					{" "}
					Mūsų paslaugos
				</h2>
			</motion.div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{paslaugosList.map((service, index) => (
					<motion.div
						key={service.title}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: index * 0.1 }}
						className="card group hover:border-electric-blue/30 transition-colors duration-300"
					>
						<div className="text-electric-blue mb-4 group-hover:scale-110 transition-transform duration-300">
							{service.icon}
						</div>
						<h3 className="text-xl font-bold mb-2">
							{service.title}
						</h3>
						<p className="text-white/70">{service.description}</p>
					</motion.div>
				))}
				{/* button kontaktai */}
			</div>
		</div>
	);
};

export default PaslaugosLanding;
