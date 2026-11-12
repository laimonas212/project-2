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
		<div className="overflow-hidden bg-dark-surface pt-20">
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

			{/* SEO turinys */}
			<section className="relative overflow-hidden bg-dark-surface-2 py-16 md:py-24">
				<div className="absolute right-0 top-0 h-80 w-80 translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none" />
				<div className="absolute bottom-0 left-0 h-80 w-80 -translate-x-1/2 translate-y-1/2 rounded-full bg-electric-blue/5 blur-[120px] pointer-events-none" />

				<div className="container relative z-10 mx-auto px-4">
					<div className="rounded-3xl border border-white/10 bg-dark-surface p-6 shadow-xl shadow-black/10 md:p-10 lg:p-12">
						<div className="mb-6 flex items-center gap-3">
							<div className="h-1 w-10 rounded-full bg-electric-blue" />
							<span className="text-sm font-semibold uppercase tracking-wider text-electric-blue">
								Amberweb
							</span>
						</div>

						<div className="space-y-12 text-sm leading-8 text-white/65 md:text-base">
							{/* Įžanga */}
							<div>
								<h2 className="mb-4 text-2xl font-bold leading-tight text-white md:text-3xl">
									Interneto svetainių kūrimas – daugiau nei
									gražus dizainas
								</h2>
								<p>
									Šiandien interneto svetainė yra vienas
									svarbiausių verslo įrankių. Tai ne tik
									vieta, kurioje pateikiama informacija apie
									įmonę, bet ir galimybė pristatyti paslaugas,
									užmegzti ryšį su potencialiais klientais ir
									generuoti naujas užklausas. Todėl
									profesionalus interneto svetainių kūrimas
									prasideda ne nuo spalvų ar dizaino elementų,
									o nuo verslo tikslų ir lankytojų poreikių
									supratimo.
								</p>
								<p className="mt-4">
									Amberweb kuriame modernias, greitas ir
									mobiliems įrenginiams pritaikytas interneto
									svetaines. Kiekvieną projektą planuojame
									atsižvelgdami į konkrečią veiklą, tikslinę
									auditoriją ir funkcionalumą, kurio reikia
									sėkmingam svetainės darbui.
								</p>
							</div>

							{/* Svetainių tipai */}
							<div>
								<h2 className="mb-4 text-2xl font-bold leading-tight text-white md:text-3xl">
									Kokias interneto svetaines kuriame?
								</h2>
								<p>
									Kiekvienas verslas turi skirtingus
									poreikius, todėl nėra vieno sprendimo, kuris
									tiktų visiems. Kuriame svetaines tiek
									pradedančiam verslui, tiek įmonėms, kurios
									nori atnaujinti savo internetinį įvaizdį ar
									išplėsti veiklą internete.
								</p>

								<div className="mt-6 grid gap-4 md:grid-cols-2">
									<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
										<h3 className="mb-2 text-lg font-semibold text-white">
											Reprezentacinės svetainės
										</h3>
										<p>
											Svetainės įmonėms, specialistams ir
											paslaugų teikėjams. Aiškiai
											pristatome jūsų veiklą, paslaugas,
											privalumus ir padedame lankytojui
											rasti reikiamą informaciją bei
											susisiekti.
										</p>
									</div>

									<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
										<h3 className="mb-2 text-lg font-semibold text-white">
											El. parduotuvės
										</h3>
										<p>
											Kuriame internetines parduotuves su
											produktų katalogais, kategorijomis,
											mokėjimų integracijomis ir patogiu
											užsakymų valdymu. Naudojame
											WordPress ir WooCommerce.
										</p>
										<Link
											to="/el-parduotuviu-kurimas"
											className="mt-3 inline-flex items-center gap-2 font-medium text-electric-blue hover:text-white"
										>
											El. parduotuvių kūrimas
											<ArrowRight className="h-4 w-4" />
										</Link>
									</div>

									<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
										<h3 className="mb-2 text-lg font-semibold text-white">
											WordPress svetainės
										</h3>
										<p>
											Lankstūs sprendimai, kuriuose
											galėsite patys redaguoti tekstus,
											nuotraukas, puslapius ir kitą
											svetainės turinį. Projektuose
											naudojame WordPress ir Divi.
										</p>
										<Link
											to="/wordpress-svetainiu-kurimas"
											className="mt-3 inline-flex items-center gap-2 font-medium text-electric-blue hover:text-white"
										>
											WordPress svetainių kūrimas
											<ArrowRight className="h-4 w-4" />
										</Link>
									</div>

									<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
										<h3 className="mb-2 text-lg font-semibold text-white">
											Individualūs internetiniai
											sprendimai
										</h3>
										<p>
											Kai standartinio svetainės šablono
											nepakanka, galime pritaikyti
											individualų dizainą, funkcionalumą
											ir integracijas pagal projekto
											poreikius.
										</p>
									</div>
								</div>
							</div>

							{/* WordPress */}
							<div>
								<h2 className="mb-4 text-2xl font-bold leading-tight text-white md:text-3xl">
									Kodėl svetainių kūrimui renkamės WordPress?
								</h2>
								<p>
									WordPress yra viena populiariausių turinio
									valdymo sistemų pasaulyje. Ji suteikia
									galimybę kurti įvairaus sudėtingumo
									interneto svetaines ir patogiai valdyti jų
									turinį be nuolatinės programuotojo pagalbos.
								</p>
								<p className="mt-4">
									Naudodami Divi įrankius galime kurti
									individualius puslapių išdėstymus,
									pritaikyti dizainą skirtingiems įrenginiams
									ir palikti klientui patogią svetainės
									valdymo aplinką. Tai ypač naudinga verslui,
									kuriam svarbu savarankiškai atnaujinti
									informaciją ir auginti svetainę kartu su
									įmone.
								</p>
							</div>

							{/* SEO */}
							<div>
								<h2 className="mb-4 text-2xl font-bold leading-tight text-white md:text-3xl">
									SEO optimizuotas interneto svetainių kūrimas
								</h2>
								<p>
									Svetainė turi būti ne tik patraukli
									lankytojams, bet ir techniškai suprantama
									paieškos sistemoms. Todėl kurdami interneto
									svetaines atsižvelgiame į pagrindinius
									techninio SEO principus: aiškią puslapių
									struktūrą, tinkamą antraščių hierarchiją,
									mobiliųjų įrenginių pritaikymą, puslapių
									greitį ir tvarkingas nuorodas.
								</p>
								<p className="mt-4">
									Taip pat svarbus kokybiškas turinys,
									tinkamai parinkti raktažodžiai ir vidinės
									nuorodos tarp susijusių svetainės puslapių.
									Visa tai sudaro pagrindą tolimesniam
									svetainės matomumo Google paieškoje
									gerinimui. Vis dėlto konkrečios pozicijos
									priklauso ir nuo konkurencijos, turinio bei
									nuoseklaus SEO darbo.
								</p>
								<Link
									to="/seo-optimizavimas"
									className="mt-3 inline-flex items-center gap-2 font-medium text-electric-blue hover:text-white"
								>
									Sužinokite apie SEO optimizavimą
									<ArrowRight className="h-4 w-4" />
								</Link>
							</div>

							{/* Procesas */}
							<div>
								<h2 className="mb-4 text-2xl font-bold leading-tight text-white md:text-3xl">
									Kaip vyksta interneto svetainės kūrimas?
								</h2>
								<p>
									Kiekvieną projektą pradedame nuo pokalbio ir
									poreikių įvertinimo. Išsiaiškiname, kokia
									yra svetainės paskirtis, kam ji skirta ir
									kokias užduotis turi atlikti. Tuomet
									planuojame struktūrą, dizainą, funkcionalumą
									ir įgyvendinimo etapus.
								</p>

								<ol className="mt-6 space-y-4">
									<li className="flex gap-4">
										<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-electric-blue/10 font-bold text-electric-blue">
											1
										</span>
										<div>
											<h3 className="font-semibold text-white">
												Poreikių analizė ir planavimas
											</h3>
											<p>
												Apibrėžiame projekto tikslus,
												auditoriją, puslapių struktūrą
												ir reikalingas funkcijas.
											</p>
										</div>
									</li>
									<li className="flex gap-4">
										<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-electric-blue/10 font-bold text-electric-blue">
											2
										</span>
										<div>
											<h3 className="font-semibold text-white">
												Dizainas ir turinio struktūra
											</h3>
											<p>
												Parenkame vizualinę kryptį,
												išdėstymą ir suplanuojame patogų
												lankytojo kelią.
											</p>
										</div>
									</li>
									<li className="flex gap-4">
										<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-electric-blue/10 font-bold text-electric-blue">
											3
										</span>
										<div>
											<h3 className="font-semibold text-white">
												Programavimas ir funkcionalumas
											</h3>
											<p>
												Įgyvendiname svetainę,
												pritaikome ją mobiliesiems
												įrenginiams ir atliekame
												reikalingas integracijas.
											</p>
										</div>
									</li>
									<li className="flex gap-4">
										<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-electric-blue/10 font-bold text-electric-blue">
											4
										</span>
										<div>
											<h3 className="font-semibold text-white">
												Testavimas ir paleidimas
											</h3>
											<p>
												Patikriname veikimą, nuorodas,
												formas, greitį ir paruošiame
												svetainę lankytojams.
											</p>
										</div>
									</li>
								</ol>
							</div>

							{/* Kaina */}
							<div>
								<h2 className="mb-4 text-2xl font-bold leading-tight text-white md:text-3xl">
									Kiek kainuoja interneto svetainės kūrimas?
								</h2>
								<p>
									Interneto svetainės kaina priklauso nuo
									projekto apimties, puslapių skaičiaus,
									dizaino sprendimų ir reikalingo
									funkcionalumo. Nedidelė reprezentacinė
									svetainė paprastai reikalauja mažiau darbo
									nei didesnis projektas su individualiomis
									funkcijomis, daugiakalbyste ar išorinėmis
									integracijomis.
								</p>
								<p className="mt-4">
									Kiekvieną projektą vertiname individualiai,
									kad pasiūlymas atitiktų realius poreikius, o
									ne nereikalingas funkcijas. Daugiau
									informacijos rasite mūsų{" "}
									<Link
										to="/kainos"
										className="font-medium text-electric-blue hover:text-white"
									>
										interneto svetainių kūrimo kainų
										puslapyje
									</Link>
									.
								</p>
							</div>

							{/* Pabaiga */}
							<div>
								<h2 className="mb-4 text-2xl font-bold leading-tight text-white md:text-3xl">
									Patikima interneto svetainė jūsų verslui
								</h2>
								<p>
									Gerai suplanuota svetainė padeda
									profesionaliai pristatyti įmonę, suteikia
									klientams reikiamą informaciją ir sudaro
									sąlygas verslui augti internete. Svarbu, kad
									ji būtų patogi naudoti, lengvai atnaujinama
									ir paruošta tolimesniam vystymui.
								</p>
								<p className="mt-4">
									Jeigu planuojate kurti naują interneto
									svetainę ar atnaujinti esamą, susisiekite su
									Amberweb. Aptarsime jūsų poreikius ir
									pasiūlysime tinkamiausią sprendimą.
								</p>
							</div>
						</div>

						<motion.div
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.98 }}
							className="mt-10"
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

			{/* Paslaugos */}
			<section className="relative overflow-hidden bg-dark-surface-2 py-20 md:py-28">
				<div className="container relative z-10 mx-auto px-4">
					<PaslaugosLanding />
				</div>
			</section>

			{/* Atlikti darbai */}
			<section className="relative overflow-hidden bg-dark-surface">
				<div className="absolute right-0 top-1/3 h-96 w-96 translate-x-1/2 rounded-full bg-neon-purple/5 blur-[140px] pointer-events-none" />
				<div className="relative z-10">
					<HomepageSampleWork />
				</div>
			</section>

			{/* Features */}
			<section className="relative overflow-hidden bg-dark-surface-2">
				<div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-blue/5 blur-[140px] pointer-events-none" />
				<div className=" relative z-10 mx-auto">
					<Features />
				</div>
			</section>

			{/* Atsiliepimai */}
			<section className="relative overflow-hidden bg-dark-surface">
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
		</div>
	);
};

export default Landing;
