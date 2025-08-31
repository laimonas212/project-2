import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
        answer:
            "Interneto svetainės kūrimo trukmė priklauso nuo projekto sudėtingumo ir pateiktos informacijos. Paprastų asmeninių svetainių kūrimas dažniausiai trunka 1–3 darbo dienas, o el. parduotuvių – 3–5 darbo dienas.",
    },
    {
        question: "Ar galima vėliau keisti svetainės dizainą?",
        answer:
            "Taip, sukurtos svetainės dizainas gali būti lengvai atnaujinamas ar koreguojamas pagal jūsų verslo poreikius.",
    },
    {
        question: "Ar galėsiu pats redaguoti svetainės turinį?",
        answer:
            "Taip, visos mūsų kuriamos svetainės turi patogią turinio valdymo sistemą (WordPress), leidžiančią lengvai keisti tekstus, nuotraukas ar struktūrą.",
    },
    {
        question: "Ar padedate su svetainės tekstų kūrimu?",
        answer:
            "Taip, galime padėti su profesionaliu turiniu – nuo pardaviminių tekstų iki SEO optimizuoto turinio.",
    },
    {
        question: "Ar optimizuojate svetaines paieškos sistemoms (SEO)?",
        answer:
            "Taip, visos mūsų svetainės turi bazinį SEO optimizavimą: greitaveika, struktūriniai duomenys, tinkami meta aprašymai.",
    },
    {
        question: "Kiek kainuoja interneto svetainės kūrimas?",
        answer:
            "Svetainės kūrimo kaina priklauso nuo funkcionalumo ir turinio apimties. Paprastos svetainės kainuoja nuo 350€, el. parduotuvės – nuo 550€.",
    },
    {
        question:
            "Kokie papildomi sprendimai reikalingi el. parduotuvės kūrimui, palyginus su paprasta svetaine?",
        answer:
            "El. parduotuvė reikalauja integracijų su mokėjimų sistemomis, prekių valdymo, krepšelio, vartotojo paskyrų, atsargų stebėjimo ir automatinio informacijos siuntimo. Paprasta svetainė dažniausiai apsiriboja informaciniu turiniu ir kontaktine forma.",
    },
    {
        question: "Kodėl verta rinktis WordPress svetainę?",
        answer:
            "WordPress yra viena populiariausių ir lankščiausių turinio valdymo sistemų pasaulyje. Ji leidžia lengvai valdyti svetainę, turi daug papildinių, ir yra puikiai pritaikoma SEO optimizavimui.",
    },
];

const FAQ = ({ data = defaultFAQ, heading = "D.U.K.", subtext = "Jeigu turite klausimų apie mūsų paslaugas ar norite gauti daugiau informacijos, susisiekite su mumis." }: FAQProps) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="pt-8 flex justify-center items-center flex-col text-center pb-16">
			<h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>

			<motion.div
				className="container mx-auto p-4 gap-8 max-w-4xl"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
			>
				<div className="space-y-2">
					{data.map((item, index) => (
						<div key={index} className="border-b card hover:border-electric-blue/30 pt-2 pb-2">
							<button
								className="w-full text-left text-white/80 flex justify-between items-center py-2 text-lg font-medium group"
								onClick={() => toggleFAQ(index)}
							>
								{item.question}
								<motion.span
									animate={{ rotate: openIndex === index ? 180 : 0 }}
									transition={{ duration: 0.3 }}
									className="inline-block group-hover:text-electric-blue"
								>
									<ChevronDown />
								</motion.span>
							</button>
							<motion.div
								initial={{ height: 0, opacity: 0 }}
								animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
								transition={{ duration: 0.3, ease: "easeInOut" }}
								className="overflow-hidden text-white/50 text-md text-left"
							>
								<div className="py-2">{item.answer}</div>
							</motion.div>
						</div>
					))}
				</div>

				{subtext && (
					<p className="text-md pt-8 text-white/80">{subtext}</p>
				)}
			</motion.div>
		</div>
	);
};

export default FAQ;
