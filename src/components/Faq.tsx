import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    { question: "Kiek laiko užtrunka tinklapio kūrimas?", answer: "Tai priklauso nuo projekto sudėtingumo ir nuo to, kaip greitai pateiksite visą reikiamą informaciją. Asmeninių svetainių kūrimas dažniausiai trunka 1–3 d. d., o elektroninių parduotuvių – 3–5 d. d." },
    { question: "Ar galima vėliau keisti dizainą?", answer: "Taip, svetainė bus pritaikyta redagavimui ir plėtrai ateityje." },
    { question: "Ar galiu pats redaguoti turinį?", answer: "Taip, gausite prieigą prie administracinės dalies, kad galėtumėte lengvai redaguoti turinį." },
    { question: "Ar galite padėti su tekstų kūrimu?", answer: "Taip, galime sukurti aiškius ir profesionalius tekstus jūsų svetainei pagal jūsų poreikius." },
    { question: "Ar optimizuojate svetaines paieškos sistemoms (SEO)?", answer: "Taip, įtraukiame bazinį SEO ir galime pasiūlyti papildomas optimizavimo paslaugas." },
    { question: "Kokia yra paslaugų kaina?", answer: "Kaina priklauso nuo projekto sudėtingumo bei informacijos kiekio. Bazinė kaina prasideda nuo 350€ už asmeninę svetainę." },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="pt-8 flex justify-center items-center flex-col text-center pb-16">
            <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">D.U.K.</h2>

            <motion.div
                className="container mx-auto p-4 gap-8 max-w-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="space-y-2 hover:border-electric-blue/30">
                    {faqData.map((item, index) => (
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
                            {openIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-white/50 text-md text-left mt-2"
                                >
                                    {item.answer}
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>

                <p className="text-md pt-8 text-white/80">
                    Jeigu turite klausimų apie mūsų paslaugas ar norite gauti daugiau informacijos, susisiekite su mumis.
                </p>

            </motion.div>
        </div>
    );
};

export default FAQ;
