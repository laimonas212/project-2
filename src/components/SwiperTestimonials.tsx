import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Link } from "react-router-dom";
import {
	ArrowLeft,
	ArrowRight,
	ExternalLink,
	Quote,
	Sparkles,
	Star,
} from "lucide-react";
import { motion } from "framer-motion";

import "swiper/css";

const testimonials = [
	{
		content:
			"Rekomenduoju 100 proc.! Lengvas bendravimas, puiki darbų kokybė, demokratiška kaina ir super darbų atlikimo greitis. Turėjau daug vargų su kitais programavimo ir dizaino paslaugų teikėjais, iki kol atradau Amber Web! Dabar jaučiuosi suprasta ir be IT žodyno, jaučiuosi kompetentingai konsultuojama. Jaučiuosi, kad mano verslo idėjos ir el. parduotuvė patikimose rankose, kai tik vėl prireiks pagalbos! :D",
		name: "Kristina",
		company: "Nervų sistemai",
		url: "https://nervusistemai.lt/",
	},
	{
		content:
			"Puikus rezultatas bei kokybės ir kainos santykis. Malonus bendravimas, gavome daug naudingų patarimų. Kai reikės tokio tipo paslaugos - žinosime kur kreiptis. Rekomenduoju.",
		name: "Rūta",
		company: "Puppy Yoga - Mėta",
		url: "https://puppyogameta.lt/",
	},
	{
		content:
			"Puiki kokybė atliepiant konkrečius poreikius. Aukšto lygio techninis nusimanymas, profesionalus bendravimas. Rekomenduoju.",
		name: "Povilas",
		company: "Freelance CG illustrator & animator",
		url: "https://gavorka.com/",
	},
	{
		content:
			"Komunikacija, darbų atlikimas greitas ir sklandus. Kainodara aiški ir logiška. Aukštos kompetencijos. Didžiulis privalumas, kad padeda išsigryninti lūkesčius, net kai ir pats dar gerai nežinai ką ir kaip darysi. Labai platus paslaugų spektras, operatyvus prisitaikymas prie kintančios situacijos ir sprendimų atradimas, nebijo ieškoti nestandartinių kelių. Iš žmogiškos pusės labai kūrybingas, komunikabilus ir patikimas kūrėjas.",
		name: "Aiva",
		company: "Holistinė kosmetologija",
		url: "https://holistinekosmetologija.lt",
	},
	{
		content:
			"Malonus ir punktualus žmogus, savo srities profesionalas. Paslauga atlikta kokybiškai, per neįtikėtinai trumpą laiko tarpą už gerą kainą. Labai rekomenduoju.",
		name: "Rasa",
		company: "Esu tau",
		url: "https://esutau.lt",
	},
	{
		content:
			"Su šiuo specialistu dirbu jau daugiau nei metai. Pirmąkart užkabino tai, kad jis pasiūlė tikrai sąžiningą kainą. O darbus atlieka itin kokybiškai, visada daro tol, kol klientui rezultatas būna toks, kokio ir norėjo. Ir svarbiausia visada pasiekiamas, kai reikia skubaus darbo. Ir iš esmės terminai yra labai spartūs. Ketinu ir toliau dirbti su šiuo specialistu.",
		name: "Andrius",
		company: "Basanavičiaus odontologijos centras",
		url: "https://bocenter.lt",
	},
	{
		content:
			"Puikus darbas kuriant įstaigos svetainę. Profesionalu, atsižvelgiama į visus pasiūlymus, ieškoma geriausių sprendimų. Darbas atliktas laikantis visų sutartų terminų. Rekomenduojame.",
		name: "Rūta",
		company: "Kauno „Paparčio“ pradinė mokykla",
		url: "https://paparciopm.lt/",
	},
	{
		content:
			"Likau labai patenkinta dėl internetinės svetainės sukūrimo, viskas greitai, nesudėtingai ir už protingą kainą. Taip pat labai patiko greita komunikacija ir atsižvelgimas į konkrečius norus. Ačiū ir dar tikrai sugrįšiu su kitais projektais :)",
		name: "Greta",
		company: "GO deko",
		url: "https://godeko.lt/",
	},
	{
		content:
			"Didelis pasisekimas bendradarbiauti su tokiu paslaugų kūrėju ir tiekėju. Labai operatyvus darbas, profesionalus ir išsamus konsultavimas, argumentuoti patarimai, daug kantrybės, sąžiningumas, lankstumas, visokeriopa pagalba nuo pačios pradžios iki sklandžios pabaigos ir ilgalaikio bendradarbiavimo. Pranoko lūkesčius.",
		name: "Sigita",
		company: "Holistinė kosmetologija",
		url: "https://holistinekosmetologija.lt",
	},
	{
		content:
			"Puikiai ir profesionaliai atliktas darbas, visada atsiliepiama ir pakonsultuojama telefonu. Viskas puikiai, gera kaina.",
		name: "Regina",
		company: 'Lopšelis-darželis - "Smaragdo uostas"',
		url: "https://smaragdouostas.lt/",
	},
];

const CardSwiper: React.FC = () => {
	const [swiper, setSwiper] = useState<SwiperType | null>(null);
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<section className="relative overflow-hidden py-20">
			<div className="container relative z-10 mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.6 }}
					className="mb-12 flex flex-col justify-between gap-8 lg:mb-14 lg:flex-row lg:items-end"
				>
					<div className="max-w-2xl">
						<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-electric-blue/20 bg-electric-blue/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-electric-blue">
							<Sparkles size={14} />
							Klientų atsiliepimai
						</div>

						<h2 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
							Geriausias mūsų darbo įvertinimas -{" "}
							<span className="bg-gradient-to-r from-electric-blue to-purple-400 bg-clip-text text-transparent">
								klientų pasitikėjimas.
							</span>
						</h2>

						<p className="max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
							Svarbiausia ne tik sukurti gerą svetainę, bet ir
							pasirūpinti, kad visas bendradarbiavimo procesas
							būtų sklandus. Štai ką apie mus sako klientai.
						</p>
					</div>

					<div className="flex shrink-0 items-center gap-4 lg:pb-2">
						<div>
							<div className="flex items-center gap-1 text-amber-400">
								{Array.from({ length: 5 }).map((_, i) => (
									<Star
										key={i}
										size={17}
										fill="currentColor"
										strokeWidth={1.5}
									/>
								))}
							</div>
							<p className="mt-2 text-sm text-white/50">
								Klientų rekomendacijos
							</p>
						</div>
					</div>
				</motion.div>

				{/* Swiper */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.1 }}
					transition={{ duration: 0.6 }}
				>
					<Swiper
						modules={[Autoplay]}
						onSwiper={setSwiper}
						onSlideChange={(instance) =>
							setActiveIndex(instance.realIndex)
						}
						loop
						grabCursor
						speed={650}
						autoplay={{
							delay: 6500,
							disableOnInteraction: false,
							pauseOnMouseEnter: true,
						}}
						spaceBetween={20}
						breakpoints={{
							0: {
								slidesPerView: 1,
								spaceBetween: 16,
							},
							768: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							1280: {
								slidesPerView: 3,
								spaceBetween: 24,
							},
						}}
						className="!overflow-visible"
					>
						{testimonials.map((testimonial, index) => (
							<SwiperSlide
								key={`${testimonial.name}-${index}`}
								className="!h-auto"
							>
								<article className="group relative flex h-full min-h-[350px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-dark-surface-2 p-6 transition-all duration-300 hover:border-electric-blue/30 sm:p-7">
									<div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-electric-blue/[0.04] blur-3xl transition-colors duration-500 group-hover:bg-electric-blue/[0.12]" />

									<div className="relative mb-6 flex items-center justify-between">
										<div className="flex gap-1 text-amber-400">
											{Array.from({ length: 5 }).map(
												(_, i) => (
													<Star
														key={i}
														size={14}
														fill="currentColor"
														strokeWidth={1.5}
													/>
												),
											)}
										</div>
										<Quote
											size={30}
											className="text-electric-blue/30"
										/>
									</div>

									<p className="relative mb-8 flex-1 text-sm leading-relaxed text-white/70">
										{testimonial.content}
									</p>

									<div className="relative mt-auto border-t border-white/[0.08] pt-5">
										<p className="font-semibold text-white">
											{testimonial.name}
										</p>

										<Link
											to={testimonial.url}
											target="_blank"
											rel="noopener noreferrer"
											className="mt-1 inline-flex max-w-full items-center gap-1 text-sm text-white/40 transition-colors hover:text-electric-blue"
										>
											<span className="truncate">
												{testimonial.company}
											</span>
											<ExternalLink
												size={12}
												className="shrink-0"
											/>
										</Link>
									</div>
								</article>
							</SwiperSlide>
						))}
					</Swiper>

					{/* Navigation */}
					<div className="mt-10 flex items-center justify-between">
						<div className="flex items-center gap-2">
							<button
								type="button"
								onClick={() => swiper?.slidePrev()}
								aria-label="Ankstesni atsiliepimai"
								className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-all hover:border-electric-blue/40 hover:bg-electric-blue/10 hover:text-electric-blue"
							>
								<ArrowLeft size={18} />
							</button>

							<button
								type="button"
								onClick={() => swiper?.slideNext()}
								aria-label="Kiti atsiliepimai"
								className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-all hover:border-electric-blue/40 hover:bg-electric-blue/10 hover:text-electric-blue"
							>
								<ArrowRight size={18} />
							</button>
						</div>

						<div className="flex items-center gap-2">
							<span className="text-sm font-semibold tabular-nums text-electric-blue">
								{String(activeIndex + 1).padStart(2, "0")}
							</span>
							<div className="h-px w-12 bg-white/20 sm:w-20">
								<div
									className="h-px bg-electric-blue transition-all duration-500"
									style={{
										width: `${((activeIndex + 1) / testimonials.length) * 100}%`,
									}}
								/>
							</div>
							<span className="text-sm tabular-nums text-white/35">
								{String(testimonials.length).padStart(2, "0")}
							</span>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default CardSwiper;
