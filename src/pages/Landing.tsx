import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import HeroSectionLanding from "../components/HeroSectionLanding";
import CardSwiper from "../components/SwiperTestimonials";
import Technologies from "../components/Technologies";
import Process from "../components/Process";
import PrivalumaiLanding from "../components/PrivalumaiLanding";
import Features from "../components/Features";
import CTA from "../components/CTA";
import FAQ from "../components/Faq";
import HomepageSampleWork from "../components/HomepageSampleWork";
import PaslaugosLanding from "../components/PaslaugosLanding";

const Landing = () => {
	return (
		<div className="overflow-hidden bg-dark-surface">
			<Helmet>
				<title>Interneto svetainių kūrimas - Amberweb</title>
				<meta
					name="description"
					content="Profesionalus interneto svetainių kūrimas verslui. Modernios, SEO optimizuotos ir greitos svetainės, kurios padeda pritraukti klientus."
				/>
				<meta
					name="keywords"
					content="interneto svetainių kūrimas, svetainių dizainas, el. parduotuvės, WordPress, SEO, Amberweb"
				/>
				<meta
					property="og:title"
					content="Interneto svetainių kūrimas - Amberweb"
				/>
				<meta
					property="og:description"
					content="Kuriame modernias interneto svetaines ir el. parduotuves, pritaikytas jūsų verslui. Nemokama konsultacija!"
				/>
				<meta
					property="og:image"
					content="https://amberweb.lt/amberweb_social.jpg"
				/>
				<meta
					property="og:url"
					content="https://amberweb.lt/interneto-svetainiu-kurimas"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<link
					rel="canonical"
					href="https://amberweb.lt/interneto-svetainiu-kurimas"
				/>
			</Helmet>

			{/* Hero */}
			<HeroSectionLanding />

			{/* Privalumai */}
			<section className="relative overflow-hidden bg-dark-surface py-20 md:py-28">
				<div className="absolute left-0 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-blue/5 blur-[120px] pointer-events-none" />
				<div className="relative z-10">
					<PrivalumaiLanding />
				</div>
			</section>

			{/* Paslaugos */}
			<section className="relative overflow-hidden bg-dark-surface-2 py-20 md:py-28">
				<div className="container relative z-10 mx-auto px-4">
					<PaslaugosLanding />
				</div>
			</section>

			{/* Atlikti darbai */}
			<section className="relative overflow-hidden bg-dark-surface py-20 md:py-28">
				<div className="absolute right-0 top-1/3 h-96 w-96 translate-x-1/2 rounded-full bg-neon-purple/5 blur-[140px] pointer-events-none" />
				<div className="relative z-10">
					<HomepageSampleWork />
				</div>
			</section>

			{/* Features */}
			<section className="relative overflow-hidden bg-dark-surface-2 py-20 md:py-28">
				<div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-blue/5 blur-[140px] pointer-events-none" />
				<div className="container relative z-10 mx-auto px-4">
					<Features />
				</div>
			</section>

			{/* Atsiliepimai */}
			<section className="relative overflow-hidden bg-dark-surface py-20 md:py-28">
				<div className="container relative z-10 mx-auto px-4">
					<CardSwiper />
				</div>
			</section>

			{/* Technologijos */}
			<Technologies />

			{/* Darbo procesas */}
			<Process />

			{/* CTA */}
			<CTA />

			{/* DUK */}
			<FAQ
				heading="Dažniausiai užduodami klausimai"
				subtext="Neradote atsakymo? Susisiekite ir aptarsime jūsų svetainės kūrimo poreikius!"
				data={[
					{
						question:
							"Kiek laiko užtrunka interneto svetainės kūrimas?",
						answer: "Laikas priklauso nuo projekto sudėtingumo. Paprastą reprezentacinę svetainę galime sukurti per kelias dienas, o sudėtingas el. parduotuves - pagal sutartą terminą. Visada laikomės aiškių terminų.",
					},
					{
						question: "Ar galima vėliau keisti svetainės dizainą?",
						answer: "Taip! Kuriame lankstų WordPress sprendimą, todėl galite keisti dizainą, pridėti puslapius ar funkcijas pagal savo poreikius.",
					},
					{
						question: "Ar galėsiu pats redaguoti turinį?",
						answer: "Žinoma! Svetainės kuriamos WordPress su Divi redaktoriumi, todėl galėsite lengvai atnaujinti tekstus, nuotraukas ir puslapius be programuotojo pagalbos.",
					},
					{
						question:
							"Ar optimizuojate svetaines paieškos sistemoms (SEO)?",
						answer: "Taip! Visos svetainės yra SEO optimizuotos, greitai kraunasi ir gerai matomos Google, kad jūsų verslas pasiektų daugiau klientų.",
					},
					{
						question: "Kiek kainuoja interneto svetainės kūrimas?",
						answer: (
							<>
								Kaina priklauso nuo svetainės tipo, puslapių
								skaičiaus ir funkcionalumo. Susisiekite ir
								pateiksime aiškų ir sąžiningą pasiūlymą. Daugiau
								informacijos rasite{" "}
								<Link
									to="/kainos"
									className="font-medium text-electric-blue transition-colors hover:text-white"
								>
									kainų puslapyje
								</Link>
								.
							</>
						),
					},
					{
						question:
							"Kokie papildomi sprendimai reikalingi el. parduotuvės kūrimui?",
						answer: "El. parduotuvėms reikalingi mokėjimų integravimai, produktų valdymo sistema ir saugumo nustatymai. Visa tai įskaičiuota į projektą.",
					},
					{
						question: "Kodėl verta rinktis WordPress svetainę?",
						answer: "WordPress - patikima ir lanksti platforma, leidžianti greitai kurti modernias svetaines, lengvai valdyti turinį ir optimizuoti SEO, todėl tai puikus sprendimas bet kokiam verslui. WordPress naudojasi daugiau nei 40% visų interneto svetainių pasaulyje, todėl tai yra patikima ir nuolat tobulėjanti platforma.",
					},
				]}
			/>

			{/* SEO turinys */}
			<section className="relative overflow-hidden bg-dark-surface-2 py-16 md:py-24">
				<div className="absolute right-0 top-0 h-80 w-80 translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none" />

				<div className="container relative z-10 mx-auto max-w-5xl px-4">
					<div className="rounded-3xl border border-white/10 bg-dark-surface p-6 shadow-xl shadow-black/10 md:p-10 lg:p-12">
						<div className="mb-6 flex items-center gap-3">
							<div className="h-1 w-10 rounded-full bg-electric-blue" />
							<span className="text-sm font-semibold uppercase tracking-wider text-electric-blue">
								Amberweb
							</span>
						</div>

						<div className="space-y-5 text-justify text-sm leading-8 text-white/65 md:text-base">
							<p>
								Interneto svetainių kūrimas yra viena
								svarbiausių investicijų šiuolaikiniam verslui.
								Profesionaliai sukurta svetainė leidžia ne tik
								atstovauti jūsų įmonei internete, bet ir
								aktyviai pritraukti naujus klientus. Mūsų
								komanda specializuojasi WordPress platformoje,
								naudodami Divi dizaino įrankius, kurie leidžia
								greitai ir patogiai pritaikyti sprendimus
								įvairiems verslo poreikiams - nuo paprastų
								reprezentacinių tinklalapių iki sudėtingų el.
								parduotuvių su integruotais atsiskaitymais ir
								unikaliu dizainu.
							</p>

							<p>
								Kuriame SEO optimizuotas svetaines, kurios
								greitai kraunasi ir yra pritaikytos mobiliesiems
								įrenginiams. Dirbdami su įvairiais klientais
								Lietuvoje, pastebime, kad kokybiškas tinklalapis
								padeda išsiskirti konkurencingoje rinkoje,
								sukuria patikimą įvaizdį ir didina pardavimus.
							</p>

							<p>
								Jei ieškote patikimos komandos interneto
								svetainių kūrimui - kviečiame kreiptis į mus.
							</p>
						</div>

						<motion.div
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.98 }}
							className="mt-8"
						>
							<Link
								to="/kontaktai"
								className="button-primary group inline-flex items-center gap-3"
							>
								Gaukite nemokamą konsultaciją
								<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
							</Link>
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Landing;
