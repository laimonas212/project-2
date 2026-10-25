import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles, ChevronRight } from "lucide-react";

import { getSeoPage } from "./seoPages";
import NotFoundPage from "../../components/NotFoundPage";

import CardSwiper from "../../components/SwiperTestimonials";
import Blog from "../../components/Blog";
import Technologies from "../../components/Technologies";
import Process from "../../components/Process";
import Services from "../../components/Services";
import Features from "../../components/Features";
import CTA from "../../components/CTA";
import FAQ from "../../components/Faq";
import HomepageSampleWork from "../../components/HomepageSampleWork";

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
		answer: "Taip! Visos svetainės kuriamos atsižvelgiant į SEO pagrindus, techninį veikimą ir patogią naudotojo patirtį.",
	},
];

const defaultBlocks = [
	"seo-content",
	"process",
	"testimonials",
	"services",
	"faq",
	"cta",
];

export default function SeoLanding() {
	const { slug } = useParams();
	const page = getSeoPage(slug);

	if (!page) {
		return <NotFoundPage />;
	}

	const activeFaqs = page.customFaq || defaultFaqs;
	const blocksToRender = page.contentBlocks || defaultBlocks;

	const showFaq = blocksToRender.includes("faq");

	// Struktūrizuoti duomenys
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
				url: `https://amberweb.lt/${page.slug}`,
				...(page.location && {
					areaServed: {
						"@type": "Place",
						name: page.location,
					},
				}),
			},
			...(showFaq
				? [
						{
							"@type": "FAQPage",
							mainEntity: activeFaqs.map((faq) => ({
								"@type": "Question",
								name: faq.question,
								acceptedAnswer: {
									"@type": "Answer",
									text:
										typeof faq.answer === "string"
											? faq.answer
											: "Daugiau informacijos rasite susisiekus su mumis.",
								},
							})),
						},
					]
				: []),
		],
	};

	// Kompaktiškas Hero – iškart pristatoma konkreti paslauga
	const renderHero = () => (
		<section className="relative isolate overflow-hidden bg-dark-bg pb-16 pt-28 md:pb-20 md:pt-36">
			{/* Background effects */}
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute -top-48 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-electric-blue/[0.10] blur-[140px]" />
				<div className="absolute -right-40 top-40 h-80 w-80 rounded-full bg-neon-purple/[0.08] blur-[120px]" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[length:28px_28px] opacity-30" />
			</div>

			<div className="container relative z-10 mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="mx-auto max-w-4xl text-center"
				>
					{/* Breadcrumb */}
					<div className="mb-8 flex items-center justify-center gap-2 text-sm text-white/40">
						<Link
							to="/"
							className="transition-colors hover:text-electric-blue"
						>
							Pradžia
						</Link>
						<ChevronRight size={14} />
						<span className="text-white/65">{page.h1}</span>
					</div>

					<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-electric-blue/20 bg-electric-blue/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-electric-blue">
						<Sparkles size={14} />
						Amberweb paslaugos
					</div>

					<h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl">
						{page.h1}
					</h1>

					{page.introText && (
						<p className="mx-auto mt-7 max-w-3xl text-base leading-relaxed text-white/65 sm:text-lg md:text-xl">
							{page.introText}
						</p>
					)}

					<div className="mt-9 flex flex-wrap items-center justify-center gap-4">
						<motion.div
							whileHover={{ y: -3 }}
							whileTap={{ scale: 0.97 }}
						>
							<Link
								to="/kontaktai"
								className="button-primary group inline-flex items-center gap-3"
							>
								Gaukite pasiūlymą
								<ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
							</Link>
						</motion.div>

						<Link
							to="/projektai"
							className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-white/75 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.04] hover:text-white"
						>
							Mūsų darbai
							<ArrowUpRight size={17} />
						</Link>
					</div>
				</motion.div>
			</div>

			{/* Bottom fade */}
			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-dark-surface/30 to-transparent" />
		</section>
	);

	// Pagrindinis SEO turinys

	// Pagrindinis struktūrizuotas SEO turinys
	const renderSeoContent = () => (
		<section className="relative overflow-hidden bg-dark-surface py-16 md:py-24">
			<div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-electric-blue/[0.06] blur-[130px]" />
			<div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-neon-purple/[0.05] blur-[130px]" />

			<div className="container relative z-10 mx-auto px-4">
				<div className="mx-auto max-w-6xl">
					<motion.div
						initial={{ opacity: 0, y: 25 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.1 }}
						transition={{ duration: 0.65 }}
					>
						{/* Section heading */}
						<div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-electric-blue">
							<span className="h-px w-7 bg-electric-blue" />
							Apie paslaugą
						</div>

						<h2 className="mb-12 max-w-4xl text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
							{page.contentHeading ||
								"Svetainė, kuri padeda jūsų verslui augti"}
						</h2>

						{/* SEO turinio skyriai */}
						<div className="space-y-5">
							{page.seoContent.map((section, sectionIndex) => (
								<motion.article
									key={sectionIndex}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.1 }}
									transition={{
										duration: 0.5,
										delay: sectionIndex * 0.08,
									}}
									className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-colors duration-300 hover:border-white/[0.14] hover:bg-white/[0.035] md:p-9"
								>
									<div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-10">
										{/* Kairė dalis – skyriaus antraštė */}
										<div>
											<div className="mb-3 text-xs font-semibold tracking-widest text-electric-blue/70">
												{String(
													sectionIndex + 1,
												).padStart(2, "0")}
											</div>

											{section.heading && (
												<h3 className="text-xl font-bold leading-snug text-white md:text-2xl">
													{section.heading}
												</h3>
											)}
										</div>

										{/* Dešinė dalis – turinio blokai */}
										<div className="min-w-0 space-y-5">
											{section.intro && (
												<p className="text-lg leading-relaxed text-white/80">
													{section.intro}
												</p>
											)}

											{section.blocks.map(
												(block, blockIndex) => {
													switch (block.type) {
														case "text":
															return (
																<div
																	key={
																		blockIndex
																	}
																>
																	{block.heading && (
																		<h4 className="mb-3 text-lg font-semibold text-white">
																			{
																				block.heading
																			}
																		</h4>
																	)}

																	{block.subheading && (
																		<p className="mb-2 text-sm font-medium text-electric-blue">
																			{
																				block.subheading
																			}
																		</p>
																	)}

																	{block.content && (
																		<p className="text-base leading-[1.85] text-white/65">
																			{
																				block.content
																			}
																		</p>
																	)}

																	{block.paragraphs?.map(
																		(
																			paragraph,
																			i,
																		) => (
																			<p
																				key={
																					i
																				}
																				className="mt-4 text-base leading-[1.85] text-white/65"
																			>
																				{
																					paragraph
																				}
																			</p>
																		),
																	)}
																</div>
															);

														case "heading":
															return (
																<h4
																	key={
																		blockIndex
																	}
																	className="pt-2 text-xl font-bold text-white"
																>
																	{block.heading ||
																		block.content}
																</h4>
															);

														case "list":
															return (
																<div
																	key={
																		blockIndex
																	}
																>
																	{block.heading && (
																		<h4 className="mb-4 text-lg font-semibold text-white">
																			{
																				block.heading
																			}
																		</h4>
																	)}

																	<ul className="space-y-3">
																		{block.items?.map(
																			(
																				item,
																				i,
																			) => (
																				<li
																					key={
																						i
																					}
																					className="flex items-start gap-3 text-base leading-relaxed text-white/70"
																				>
																					<span className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric-blue/10 text-electric-blue">
																						<ArrowRight
																							size={
																								12
																							}
																						/>
																					</span>
																					<span>
																						{
																							item
																						}
																					</span>
																				</li>
																			),
																		)}
																	</ul>
																</div>
															);

														case "highlight":
															return (
																<div
																	key={
																		blockIndex
																	}
																	className={`rounded-xl border p-5 md:p-6 ${
																		block.variant ===
																		"purple"
																			? "border-neon-purple/20 bg-neon-purple/[0.07]"
																			: block.variant ===
																				  "blue"
																				? "border-electric-blue/20 bg-electric-blue/[0.07]"
																				: "border-white/10 bg-white/[0.04]"
																	}`}
																>
																	{block.heading && (
																		<h4 className="mb-2 text-lg font-bold text-white">
																			{
																				block.heading
																			}
																		</h4>
																	)}

																	{block.subheading && (
																		<p className="mb-3 text-sm font-medium text-electric-blue">
																			{
																				block.subheading
																			}
																		</p>
																	)}

																	{block.content && (
																		<p className="text-base leading-relaxed text-white/75">
																			{
																				block.content
																			}
																		</p>
																	)}

																	{block.paragraphs?.map(
																		(
																			paragraph,
																			i,
																		) => (
																			<p
																				key={
																					i
																				}
																				className="mt-3 text-base leading-relaxed text-white/75"
																			>
																				{
																					paragraph
																				}
																			</p>
																		),
																	)}
																</div>
															);

														default:
															return null;
													}
												},
											)}
										</div>
									</div>
								</motion.article>
							))}
						</div>

						{/* CTA */}
						<div className="mt-12">
							<Link
								to="/kontaktai"
								className="button-primary group inline-flex items-center gap-3"
							>
								Aptarkime jūsų projektą
								<ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
							</Link>
						</div>

						{/* Related pages */}
						{page.relatedPages && page.relatedPages.length > 0 && (
							<div className="mt-16 border-t border-white/10 pt-10">
								<h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white/40">
									Taip pat gali būti aktualu
								</h3>

								<div className="grid gap-3 sm:grid-cols-2">
									{page.relatedPages.map((rel) => (
										<Link
											key={rel.slug}
											to={`/${rel.slug}`}
											className="group flex items-center justify-between gap-4 rounded-xl border border-white/[0.08] bg-white/[0.025] px-5 py-4 text-sm text-white/70 transition-all duration-300 hover:border-electric-blue/30 hover:bg-electric-blue/[0.05] hover:text-white"
										>
											<span>{rel.title}</span>
											<ArrowUpRight className="h-4 w-4 shrink-0 text-electric-blue transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
										</Link>
									))}
								</div>
							</div>
						)}
					</motion.div>
				</div>
			</div>
		</section>
	);

	// Dinaminių blokų renderinimas
	const renderBlock = (blockName: string) => {
		switch (blockName) {
			case "seo-content":
				return (
					<React.Fragment key={blockName}>
						{renderSeoContent()}
					</React.Fragment>
				);

			case "process":
				return (
					<section
						key={blockName}
						className="relative overflow-hidden py-16 md:py-24"
					>
						<Process />
					</section>
				);

			case "testimonials":
				return (
					<section
						key={blockName}
						className="relative overflow-hidden bg-dark-surface py-16 md:py-24"
					>
						<CardSwiper />
					</section>
				);

			case "services":
				return (
					<section
						key={blockName}
						className="relative overflow-hidden py-16 md:py-24"
					>
						<Services />
					</section>
				);

			case "portfolio":
				return (
					<section
						key={blockName}
						className="relative overflow-hidden bg-dark-surface py-16 md:py-24"
					>
						<HomepageSampleWork />
					</section>
				);

			case "technologies":
				return <Technologies key={blockName} />;

			case "features":
				return (
					<section
						key={blockName}
						className="relative overflow-hidden bg-dark-surface py-16 md:py-24"
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
						subtext="Neradote atsakymo? Susisiekite ir aptarsime jūsų poreikius!"
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
		<div className="overflow-hidden bg-dark-bg">
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

			{renderHero()}

			{/* Turinys generuojamas pagal JSON nurodytą eiliškumą */}
			{blocksToRender.map((block) => renderBlock(block))}
		</div>
	);
}
