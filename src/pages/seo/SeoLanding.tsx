import React, { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getSeoPage, type SeoPage } from "./seoPages";
import NotFoundPage from "../../components/NotFoundPage";

import HeroSection from "../../components/HeroSection";
import Footer from "../../components/Footer";
import "swiper/css/autoplay";
import CardSwiper from "../../components/SwiperTestimonials";
import Blog from "../../components/Blog";
import Technologies from "../../components/Technologies";
import Process from "../../components/Process";
import Services from "../../components/Services";
import Features from "../../components/Features";
import CTA from "../../components/CTA";
import FAQ from "../../components/Faq";
import HomepageSampleWork from "../../components/HomepageSampleWork";

export default function SeoLanding() {
	const { slug } = useParams();
	const page = getSeoPage(slug);
	const servicesRef = useRef(null);

	if (!page) {
		return <NotFoundPage />;
	}

	const defaultFaqs = [
		{
			question: "Kiek laiko užtrunka interneto svetainės kūrimas?",
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
			question: "Ar optimizuojate svetaines paieškos sistemoms (SEO)?",
			answer: "Taip! Visos svetainės yra SEO optimizuotos, greitai kraunasi ir gerai matomos Google, kad jūsų verslas pasiektų daugiau klientų.",
		},
	];

	const activeFaqs = page.customFaq || defaultFaqs;

	// Struktūrizuoti duomenys (FAQ Schema + Service Schema)
	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Service",
				name: page.h1,
				description: page.description,
				provider: {
					"@type": "Organization",
					name: "Amberweb",
					url: "https://amberweb.lt",
				},
				...(page.location && {
					areaServed: {
						"@type": "Place",
						name: page.location,
					},
				}),
			},
			{
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: activeFaqs.map((f) => ({
					"@type": "Question",
					name: f.question,
					acceptedAnswer: {
						"@type": "Answer",
						text:
							typeof f.answer === "string"
								? f.answer
								: "Daugiau informacijos rasite susisiekus su mumis.",
					},
				})),
			},
		],
	};

	// Numatytieji blokai, jei JSON'e nenurodyta kitaip
	const defaultBlocks = [
		"services",
		"seo-content",
		"portfolio",
		"technologies",
		"process",
		"faq",
		"cta",
		"blog",
	];

	const blocksToRender = page.contentBlocks || defaultBlocks;

	// Atskiro bloko renderinimo funkcija
	const renderBlock = (blockName: string) => {
		switch (blockName) {
			case "services":
				return (
					<section
						key={blockName}
						ref={servicesRef}
						className="py-20 relative"
					>
						<Services />
					</section>
				);

			case "seo-content":
				return (
					<section
						key={blockName}
						className="py-20 bg-dark-surface relative overflow-hidden"
					>
						<div className="container mx-auto px-4">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									className="space-y-6 text-white/80 text-justify"
								>
									<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
										{page.contentHeading ||
											"Svetainė, kuri padeda jūsų verslui augti"}
									</h2>
									<p className="text-lg text-white/90 font-medium">
										{page.introText}
									</p>
									{page.seoContent.map((paragraph, index) => (
										<p key={index}>{paragraph}</p>
									))}

									{/* CTA Mygtukas */}
									<div className="pt-2">
										<Link
											to="/kontaktai"
											className="text-white"
										>
											<motion.button
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
												className="button-primary inline-flex items-center gap-2 group"
											>
												Gaukite nemokamą konsultaciją
												<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
											</motion.button>
										</Link>
									</div>

									{/* Vidinis linkavimas (Internal Linking) */}
									{page.relatedPages &&
										page.relatedPages.length > 0 && (
											<div className="mt-8 pt-6 border-t border-white/10">
												<h4 className="text-white font-semibold mb-3">
													Susijusios paslaugos:
												</h4>
												<div className="flex flex-col gap-2">
													{page.relatedPages.map(
														(rel) => (
															<Link
																key={rel.slug}
																to={`/${rel.slug}`}
																className="text-electric-blue hover:underline text-sm inline-flex items-center gap-1.5"
															>
																→ {rel.title}
															</Link>
														),
													)}
												</div>
											</div>
										)}
								</motion.div>

								<section className="relative">
									<CardSwiper />
								</section>
							</div>
						</div>
					</section>
				);

			case "portfolio":
				return (
					<section
						key={blockName}
						className="py-20 bg-dark-surface relative overflow-hidden"
					>
						<HomepageSampleWork />
					</section>
				);

			case "technologies":
				return <Technologies key={blockName} />;

			case "process":
				return <Process key={blockName} />;

			case "features":
				return (
					<section
						key={blockName}
						className="py-20 bg-dark-surface relative overflow-hidden"
					>
						<div className="container mx-auto px-4">
							<Features />
						</div>
					</section>
				);

			case "faq":
				return (
					<FAQ
						key={blockName}
						heading="Dažniausiai užduodami klausimai"
						subtext="Neradote atsakymo? Susisiekite ir aptarsime jūsų svetainės kūrimo poreikius!"
						data={activeFaqs}
					/>
				);

			case "cta":
				return <CTA key={blockName} />;

			case "blog":
				return <Blog key={blockName} />;

			default:
				return null;
		}
	};

	return (
		<div className="overflow-hidden">
			<Helmet>
				<title>{page.title}</title>
				<meta name="description" content={page.description} />
				<meta property="og:title" content={page.title} />
				<meta property="og:description" content={page.description} />
				<meta
					property="og:image"
					content="https://amberweb.lt/amberweb_social.jpg"
				/>
				<meta
					property="og:url"
					content={`https://amberweb.lt/${page.slug}`}
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<link
					rel="canonical"
					href={`https://amberweb.lt/${page.slug}`}
				/>
				<script type="application/ld+json">
					{JSON.stringify(jsonLd)}
				</script>
			</Helmet>

			{/* Dinaminė Hero sekcija gaunanti H1 ir intro iš JSON */}
			<HeroSection h1={page.h1} introText={page.introText} />

			{/* Blokų generavimas pagal eiliškumą JSON faile */}
			{blocksToRender.map((block) => renderBlock(block))}
		</div>
	);
}
