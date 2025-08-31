import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import HeroSectionLanding from "../components/HeroSectionLanding";
import Footer from "../components/Footer";
import "swiper/css/autoplay";
import CardSwiper from "../components/SwiperTestimonials";
import Blog from "../components/Blog";
import Technologies from "../components/Technologies";
import Process from "../components/Process";
import PrivalumaiLanding from "../components/PrivalumaiLanding";
import Features from "../components/Features";
import CTA from "../components/CTA";
import FAQ from "../components/Faq";
import HomepageSampleWork from "../components/HomepageSampleWork";
import PaslaugosLanding from "../components/PaslaugosLanding";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Landing = () => {
	const servicesRef = useRef(null);

	return (
		<div className="overflow-hidden">
			<Helmet>
				<title>Interneto svetainių kūrimas – Amberweb</title>
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
					content="Interneto svetainių kūrimas – Amberweb"
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

			<HeroSectionLanding />

			{/* Services Section */}
			<section
				ref={servicesRef}
				className="py-20 relative bg-dark-surface"
			>
				<PrivalumaiLanding />
			</section>

			{/* section Musu paslaugos, 4 cols */}
			<section className="py-20 relative overflow-hidden">
				<div className="container mx-auto px-4">
					<PaslaugosLanding />
				</div>
			</section>

			<section className="py-20 bg-dark-surface relative overflow-hidden">
				<HomepageSampleWork />
			</section>

			{/* Features Section */}
			<section className="py-20 relative overflow-hidden">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<Features />

						{/* Testimonials Section */}
						<section className="relative">
							<CardSwiper />
						</section>
					</div>
				</div>
			</section>

			<Technologies />
			<Process />
			<CTA />
			<FAQ
				heading="Dažniausiai užduodami klausimai"
				subtext="Neradote atsakymo? Susisiekite ir aptarsime jūsų svetainės kūrimo poreikius!"
				data={[
					{
						question:
							"Kiek laiko užtrunka interneto svetainės kūrimas?",
						answer: "Laikas priklauso nuo projekto sudėtingumo. Paprastą reprezentacinę svetainę galime sukurti per kelias dienas, o sudėtingas el. parduotuves – pagal sutartą terminą. Visada laikomės aiškių terminų.",
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
								Kaina priklauso nuo svetainės tipo, puslapių skaičiaus ir funkcionalumo. Susisiekite ir pateiksime aiškią ir sąžiningą pasiūlymą. Daugiau informacijos rasite <a href="/kainos" className="text-electric-blue">kainų puslapyje</a>.
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
						answer: "WordPress – patikima ir lanksti platforma, leidžianti greitai kurti modernias svetaines, lengvai valdyti turinį ir optimizuoti SEO, todėl tai puikus sprendimas bet kokiam verslui. WordPress naudojasi daugiau nei 40% visų interneto svetainių pasaulyje, todėl tai yra patikima ir nuolat tobulėjanti platforma.",
					},
				]}
			/>

			{/* text block */}
			<section className="pb-20 relative overflow-hidden max-w-4xl mx-auto">
				<div className="container px-4">
					<p className="card text-white/70 text-justify">
						Interneto svetainių kūrimas yra viena svarbiausių
						investicijų šiuolaikiniam verslui. Profesionaliai
						sukurta svetainė leidžia ne tik atstovauti jūsų įmonei
						internete, bet ir aktyviai pritraukti naujus klientus.
						Mūsų komanda specializuojasi WordPress platformoje,
						naudodami Divi dizaino įrankius, kurie leidžia greitai
						ir patogiai pritaikyti sprendimus įvairiems verslo
						poreikiams – nuo paprastų reprezentacinių tinklapių iki
						sudėtingų el. parduotuvių su integruotais atsiskaitymais
						ir unikaliu dizainu.
						<br />
						<br />
						Kuriame SEO optimizuotas svetaines, kurios greitai
						kraunasi ir yra pritaikytos mobiliesiems įrenginiams.
						Dirbdami su įvairiais klientais Lietuvoje, pastebime,
						kad kokybiškas tinklalapis padeda išsiskirti
						konkurencingoje rinkoje, sukuria patikimą įvaizdį ir
						didina pardavimus.
						<br />
						Jei ieškote patikimos komandos interneto svetainių
						kūrimui – kviečiame kreiptis į mus.
						<Link to="/kontaktai" className="text-white">
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="button-primary inline-flex items-center mt-8 gap-2 group"
							>
								Gaukite nemokamą konsultaciją
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</motion.button>
						</Link>
					</p>
				</div>
			</section>
		</div>
	);
};

export default Landing;
