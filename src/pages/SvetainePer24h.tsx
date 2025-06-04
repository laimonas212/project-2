import React from 'react';
import HeroSection24h from '../components/HeroSection24h';
import Process from '../components/Process';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import FAQ from '../components/Faq';
import CTA from '../components/CTA';
import { Helmet } from 'react-helmet-async';

const SvetainePer24h: React.FC = () => {
    const plans = [
        {
            name: 'Svetainė per 24h',
            description: 'Greitas startas – informacinė svetainė paruošta per 24 valandas nuo visos informacijos pateikimo.',
            price: '€299',
            features: [
                'Turinio valdymo sistema',
                'Pasirinktas paruoštas dizainas',
                '1-2 puslapiai (pvz. landing, kontaktai)',
                'Kontaktinė forma',
                'Informacijos patalpinimas',
                'Mobiliesiems pritaikytas dizainas',
            ],
        },
    ];
    return (
        <div>
            <Helmet>
                <title>Svetainė per 24 valandas | AmberWeb</title>
                <meta name="description" content="Svetainė per 24 valandas – greitas ir efektyvus sprendimas jūsų verslui. Sukurkite profesionalią svetainę su visomis būtinosiomis funkcijomis." />
                <link rel="canonical" href="https://amberweb.lt/svetaine-per-24h" />
            </Helmet>
            <section className="pb-20">
                <HeroSection24h />
            </section>
            <section className="bg-dark-surface relative overflow-hidden">

                <Process
                    headline="Kaip viskas vyksta"
                    description="Kiekvienas žingsnis – svarbus."
                    steps={[
                        { number: '01', title: 'Trumpa konsultacija', description: 'Susisiekiame ir greitai aptariame, ko reikia jūsų svetainei.' },
                        { number: '02', title: 'Dizaino pasirinkimas', description: 'Išsirenkate vieną iš siūlomų šablonų arba dizaino krypčių.' },
                        { number: '03', title: 'Turinio suvedimas', description: 'Patalpiname jūsų tekstus, nuotraukas, kontaktus ir kitą informaciją.' },
                        { number: '04', title: 'Techninis paruošimas', description: 'Sutvarkome mobilų vaizdą ir pasiruošiame paleidimui.' },
                        { number: '05', title: 'Svetainės paleidimas', description: 'Per 24 val. jūsų svetainė jau veikia su viskuo, ko reikia startui!' },
                    ]}
                />
            </section>

            <section className="py-20 bg-dark-surface relative overflow-hidden px-4 grid grid-cols-1 md:grid-cols-1 gap-8 max-w-5xl mx-auto">
                

                {/* heading and subheading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Kiek kainuoja tokia interneto svetainė?</h2>
                    <p className="text-white/60 text-lg mt-2">Kainos be jokių paslėptų mokesčių – <span className='text-electric-blue'>viskas įskaičiuota</span>.</p>
                </motion.div>
                {plans.map((plan, index) => (
                    <div className='rounded-lg shadow-lg bg-gradient-to-r max-w-[500px] mx-auto from-electric-blue/50 to-purple-500/50 p-[1px]'>
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="card transform hover:-translate-y-2 flex flex-col h-full"
                        >
                            <div className="space-y-6 mb-12 flex-1">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                    <p className="text-white/70">{plan.description}</p>
                                </div>

                                <div className="text-4xl font-bold text-electric-blue">
                                    Nuo {plan.price}
                                </div>

                                <ul className="space-y-4">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-electric-blue shrink-0 mt-0.5" />
                                            <span className="text-white/70">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link to="/kontaktai">
                                <button className="w-full button-primary py-3 rounded-lg transition-colors duration-300">
                                    Nemokama Konsultacija
                                </button>
                            </Link>
                        </motion.div>

                        {/* perziureti kitus planus */}
                        <div className="text-center mt-8">
                            <Link to="/kainos">
                                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 hover:border-electric-blue/50 transition-colors duration-300 backdrop-blur-sm">
                                    Peržiūrėti visus planus
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}

            </section>

            <section className="bg-dark-surface relative overflow-hidden px-4 grid grid-cols-1 md:grid-cols-1 gap-8 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center my-16"
                >
                    <FAQ
                        heading="D.U.K."
                        subtext="Jei neradote atsakymo – susisiekite su mumis!"
                        data={[
                            { question: 'Ar tikrai per 24h?', answer: 'Taip, projektą pradedame iškart po apmokėjimo ir informacijos pateikimo.' },
                            { question: 'Ar bus galima papildyti?', answer: 'Žinoma, vėliau galima pridėti naujų puslapių ar funkcijų.' },
                            { question: 'Kokios yra papildomos išlaidos?', answer: 'Papildomai gali kainuoti domeno registracija ir hostingas, jei jų neturite.' },
                            { question: 'Ar svetainė bus pritaikyta mobiliesiems?', answer: 'Taip, visi šablonai yra pritaikyti mobiliesiems įrenginiams.' },
                            { question: 'Ar gausiu pagalbą po paleidimo?', answer: 'Taip, suteikiame 30 dienų nemokamą palaikymą po svetainės paleidimo.' },
                            { question: 'Ar galiu pasirinkti dizainą?', answer: 'Taip, galite pasirinkti iš mūsų siūlomų šablonų arba pateikti savo dizaino idėją.' },
                            { question: 'Ar galiu atnaujinti svetainę pats?', answer: 'Taip, svetainė bus sukurta naudojant WordPress, todėl galėsite lengvai atnaujinti turinį patys.' },
                        ]}
                    />
                </motion.div>
            </section>

            <CTA
                title="Pradėkite šiandien ir startuokite rytoj!"
                subtitle="Susisiekite su mumis ir gaukite nemokamą konsultaciją dėl svetainės kūrimo per 24 valandas."
                buttonText="Užsisakyti dabar"
                link="/kontaktai"
            />
        </div>
    );
};

export default SvetainePer24h;
