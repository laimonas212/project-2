import { Edit, Globe, Layout, Search } from "lucide-react";
import { motion } from "framer-motion";

const Privalumai = () => {
	const privalumaiList = [
		{
			description: "Svetainė atrodytų moderniai ir patikimai.",
		},
		{
			description:
				"Jūsų verslas būtų lengvai randamas „Google“ ir pasiektų daugiau klientų.",
		},
		{
			description: "Klientai greitai rastų reikiamą informaciją.",
		},
		{
			description: "Galėtumėte patys patogiai valdyti turinį.",
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
					Kodėl svarbu turėti kokybišką internetinę svetainę?
				</h2>
				<p className="text-white/70 text-lg max-w-2xl mx-auto">
					Šiandien daugiau nei 80 % klientų pirmiausia informacijos
					ieško internete. Jeigu jūsų svetainė lėta, nepatogi ar
					pasenusi - konkurentas laimės klientą. Profesionalus
					interneto svetainių kūrimas užtikrina, kad:
				</p>
			</motion.div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{privalumaiList.map((service, index) => (
					<motion.div
						key={service.description}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: index * 0.1 }}
						className="card group bg-dark-surface-2 hover:border-electric-blue/30 transition-colors duration-300 text-center"
					>
						<h3 className="text-xl text-white/80 font-bold mb-2">
							{service.description}
						</h3>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Privalumai;
