"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/effect-cards";
import { motion } from "framer-motion";

const testimonials = [
    {
        content: '"Puiki kokybė atliekant konkrečius poreikius. Aukšto lygio techninis nusimanymas, profesionalus bendravimas. Rekomenduoju.Puiki kokybė atliepiant konkrečius poreikius. Aukšto lygio techninis nusimanymas, profesionalus bendravimas. Rekomenduoju."',
        name: 'Povilas',
        company: 'Freelance CG illustrator & animator',
        url: 'https://gavorka.com/',
    },
    {
        content: '"Komunikacija, darbų atlikimas greitas ir sklandus. Kainodara aiški ir logiška. Aukštos kompetencijos. Didžiulis privalumas, kad padeda išsigryninti lūkesčius, net kai ir pats dar gerai nežinai ką ir kaip darysi. Labai platus paslaugų spektras, operatyvus prisitaikymas prie kintančios situacijos ir sprendimų atradimas, nebijo ieškoti nestandartinių kelių. Iš žmogiškos pusės labai kūrybingas, komunikabilus ir patikimas kūrėjas."',
        name: 'Aiva',
        company: 'Holistinė kosmetologija',
        url: 'https://holistinekosmetologija.lt',
    },
    {
        content: '"Malonus ir punktualus žmogus, savo srities profesionalas. Paslauga atlikta kokybiškai, per neįtikėtinai trumpą laiko tarpą už gerą kainą. Labai rekomenduoju."',
        name: 'Rasa',
        company: 'Esu tau',
        url: 'https://esutau.lt',
    },
    {
        content: '"Su šiuo specialistu dirbu jau daugiau nei metai. Pirmąkart užkabino tai, kad jis pasiūlė tikrai sąžiningą kainą. O darbus atlieka ytin kokybiškai, visada daro tol, kol klientui rezultatas būna toks kokio ir norėjo. Ir svarbiausia visada pasiekiamas kai reikia skubaus darbo. Ir iš esmės terminai yra labai spartūs. Ketinu ir toliau dirbti su šiuo specialistu."',
        name: 'Andrius',
        company: 'Basanavičiaus odontologijos centras',
        url: 'https://bocenter.lt',
    },
    {
        content: '"Puikus darbas kuriant įstaigos svetainę. Profesionalu, atsižvelgiama į visus pasiūlymus, ieškoma geriausių sprendimų. Darbas atliktas laikantis visų sutartų terminų. Rekomenduojame."',
        name: 'Rūta',
        company: 'Kauno „Paparčio“ pradinė mokykla',
        url: 'https://paparciopm.lt/',
    },
    {
        content: '"Likau labai patenkinta dėl internetinės svetainės sukūrimo, viskas greitai, nesudėtingai ir už protingą kainą. Taip pat labai patiko greita komunikacija ir atsižvelgimas į konkrečius norus. Ačiū ir dar tikrai sugrįšiu su kitais projektais :)"',
        name: 'Greta',
        company: 'GO deko',
        url: 'https://godeko.lt/',
    },
    {
        content: '"Didelis pasisekimas bendradarbiauti su tokiu paslaugų kūrėju ir tiekėju. Labai operatyvus darbas, profesionalus ir išsamus konsultavimas, argumentuoti patarimai, daug kantrybės, sąžiningumas, lankstumas, visokeriopa pagalba nuo pačios pradžios iki sklandžios pabaigos ir ilgalaikio bendradarbiavimo. Pranoko lūkesčius."',
        name: 'Sigita',
        company: 'Holistinė kosmetologija',
        url: 'https://holistinekosmetologija.lt',
    },
    {
        content: '"Puikiai ir profesionaliai atliktas darbas, visada atsiliepiama ir pakonsultuojama telefonu. Viskas puikiai, gera kaina."',
        name: 'Regina',
        company: 'Lopšelis-darželis - "Smaragdo uostas"',
        url: 'https://smaragdouostas.lt/',
    },
];

const CardSwiper = () => {
    return (
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Ką sako mūsų klientai</h2>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="w-full max-w-xs mx-auto">
                    <div className="w-full max-w-xs mx-auto pt-4">
                        <Swiper
                            effect="cards"
                            loop={true}
                            grabCursor={true}
                            modules={[EffectCards, Autoplay]}
                            autoplay={{ delay: 7000, disableOnInteraction: false }}
                            className="h-[400px]" // Ensures consistent height
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index} className="flex items-stretch">
                                    <div className="card text-white p-6 flex flex-col justify-between rounded-lg hover:border-electric-blue/30 shadow-lg h-full min-h-[250px] transition-colors duration-300">
                                        <div className="flex flex-col align-center flex-grow justify-center">
                                            <p className="text-center text-white/80 mb-4">{testimonial.content}</p>
                                        </div>
                                        <div className="mt-auto">
                                            <h3 className="text-white/30">{testimonial.name}</h3>
                                            <Link to={testimonial.url} className="text-sm text-white/30" target="_blank">{testimonial.company}</Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default CardSwiper;
