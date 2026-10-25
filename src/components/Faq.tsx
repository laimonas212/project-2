import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	ChevronDown,
	MessageCircle,
	ArrowUpRight,
	Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

interface FAQItem {
	question: string;
	answer: string | React.ReactNode;
}

interface FAQProps {
	data?: FAQItem[];
	heading?: string;
	subtext?: string;
}

const defaultFAQ: FAQItem[] = [
	{
		question: "Kiek laiko užtrunka interneto svetainės kūrimas?",
		answer: "Interneto svetainės kūrimo trukmė priklauso nuo projekto apimties, funkcionalumo ir individualių poreikių. Paprastai reprezentacinių svetainių kūrimas trunka 2-4 savaites, o sudėtingesnių projektų ir el. parduotuvių - 4-8 savaites ar ilgiau. Tikslesnis terminas nustatomas įvertinus projekto reikalavimus.",
	},
	{
		question: "Ar galima vėliau keisti svetainės dizainą?",
		answer: "Taip, sukurtos svetainės dizainas gali būti lengvai atnaujinamas ar koreguojamas pagal jūsų verslo poreikius.",
	},
	{
		question: "Ar galėsiu pats redaguoti svetainės turinį?",
		answer: "Taip, visos mūsų kuriamos svetainės turi patogią turinio valdymo sistemą (WordPress), leidžiančią lengvai keisti tekstus, nuotraukas ar struktūrą.",
	},
	{
		question: "Ar padedate su svetainės tekstų kūrimu?",
		answer: "Taip, galime padėti su profesionaliu turiniu - nuo pardaviminių tekstų iki SEO optimizuoto turinio.",
	},
	{
		question: "Ar optimizuojate svetaines paieškos sistemoms (SEO)?",
		answer: "Taip, visos mūsų svetainės turi bazinį SEO optimizavimą: greitaveika, struktūriniai duomenys, tinkami meta aprašymai.",
	},
	{
		question: "Kiek kainuoja interneto svetainės kūrimas?",
		answer: "Svetainės kūrimo kaina priklauso nuo funkcionalumo ir turinio apimties. Paprastos svetainės kainuoja nuo 499€, el. parduotuvės - nuo 1299€.",
	},
	{
		question:
			"Kokie papildomi sprendimai reikalingi el. parduotuvės kūrimui, palyginus su paprasta svetaine?",
		answer: "El. parduotuvė reikalauja integracijų su mokėjimų sistemomis, prekių valdymo, krepšelio, vartotojo paskyrų, atsargų stebėjimo ir automatinio informacijos siuntimo. Paprasta svetainė dažniausiai apsiriboja informaciniu turiniu ir kontaktine forma.",
	},
	{
		question: "Kodėl verta rinktis WordPress svetainę?",
		answer: "WordPress yra viena populiariausių ir lanksčiausių turinio valdymo sistemų pasaulyje. Ji leidžia lengvai valdyti svetainę, turi daug papildinių ir yra puikiai pritaikoma SEO optimizavimui.",
	},
];

const FAQ = ({
	data = defaultFAQ,
	heading = "Dažniausiai užduodami klausimai",
	subtext = "Jeigu turite klausimų apie mūsų paslaugas ar norite gauti daugiau informacijos, susisiekite su mumis.",
}: FAQProps) => {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const toggleFAQ = (index: number) => {
		setOpenIndex((current) => (current === index ? null : index));
	};

	return (
		<section className="relative overflow-hidden bg-dark-surface py-20 md:py-28">
			<div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-electric-blue/[0.07] blur-[140px]" />

			<div className="container relative mx-auto px-4">
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
					{/* Left side */}
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.6 }}
						className="flex flex-col items-start lg:sticky lg:top-28 lg:self-start"
					>
						<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-electric-blue/20 bg-electric-blue/10 px-4 py-2 text-sm font-medium text-electric-blue">
							<Sparkles className="h-4 w-4" />
							DUK
						</div>

						<h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
							{heading}
						</h2>

						<p className="mb-8 text-base leading-relaxed text-white/60 md:text-lg">
							{subtext}
						</p>

						<div className="w-full rounded-2xl border border-white/[0.07] bg-dark-surface-2 p-6 md:p-7">
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-electric-blue/20 bg-electric-blue/10 text-electric-blue">
								<MessageCircle className="h-6 w-6" />
							</div>

							<h3 className="mb-2 text-lg font-bold text-white">
								Neradai atsakymo?
							</h3>

							<p className="mb-5 text-sm leading-relaxed text-white/50">
								Kiekvienas projektas skirtingas. Susisiekite ir
								aptarkime jūsų idėją individualiai.
							</p>

							<Link
								to="/kontaktai"
								className="button-primary group inline-flex items-center gap-2"
							>
								Užduoti klausimą
								<ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
							</Link>
						</div>
					</motion.div>

					{/* Right side - FAQ accordion */}
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.1 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="space-y-3"
					>
						{data.map((item, index) => {
							const isOpen = openIndex === index;

							return (
								<div
									key={index}
									className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
										isOpen
											? "border-electric-blue/30 bg-dark-surface-2"
											: "border-white/[0.07] bg-dark-surface-2/60 hover:border-white/15"
									}`}
								>
									<button
										type="button"
										onClick={() => toggleFAQ(index)}
										aria-expanded={isOpen}
										className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6 md:py-6"
									>
										<span
											className={`text-base font-semibold leading-snug transition-colors duration-300 md:text-lg ${
												isOpen
													? "text-electric-blue"
													: "text-white/85"
											}`}
										>
											{item.question}
										</span>

										<span
											className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
												isOpen
													? "rotate-180 border-electric-blue/30 bg-electric-blue/10 text-electric-blue"
													: "border-white/10 text-white/50"
											}`}
										>
											<ChevronDown className="h-5 w-5" />
										</span>
									</button>

									<AnimatePresence initial={false}>
										{isOpen && (
											<motion.div
												initial={{
													height: 0,
													opacity: 0,
												}}
												animate={{
													height: "auto",
													opacity: 1,
												}}
												exit={{
													height: 0,
													opacity: 0,
												}}
												transition={{
													duration: 0.3,
													ease: "easeInOut",
												}}
												className="overflow-hidden"
											>
												<div className="border-t border-white/[0.06] px-5 pb-6 pt-4 text-sm leading-7 text-white/55 md:px-6 md:text-base">
													{item.answer}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							);
						})}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
