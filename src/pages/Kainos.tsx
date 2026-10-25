import React from "react";
import { motion } from "framer-motion";
import {
	Check,
	ArrowRight,
	Sparkles,
	Globe,
	ShoppingCart,
	LayoutTemplate,
	ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Features from "../components/Features";
import CTA from "../components/CTA";

const Kainos = () => {
	const plans = [
		{
			name: "Pradinė svetainė",
			label: "Paprastam startui",
			description:
				"Profesionalus internetinis pristatymas smulkiam verslui ar individualiai veiklai.",
			price: "€499",
			icon: <LayoutTemplate size={22} />,
			features: [
				"Turinio valdymo sistema (WordPress)",
				"Pasirinktas paruoštas dizainas",
				"1-3 puslapiai",
				"Kontaktinė forma",
				"Individualių spalvų pritaikymas",
				"Informacijos patalpinimas",
				"Mobiliesiems pritaikytas dizainas",
				"Bazinis SEO optimizavimas",
			],
			extras: [
				"Hostingas + SSL su 30% nuolaida pirmais metais",
				"Metinė priežiūra: serverio palaikymas ir SSL atnaujinimai (nemokamai 1 metams)",
			],
		},
		{
			name: "Verslo svetainė",
			label: "Populiariausias pasirinkimas",
			description:
				"Išsamus internetinis įvaizdis įmonėms, siekiančioms profesionaliai pristatyti savo veiklą ir paslaugas.",
			price: "€899",
			icon: <Globe size={22} />,
			features: [
				"Turinio valdymo sistema (WordPress)",
				"Individualiai pritaikytas dizainas",
				"1-8 puslapiai",
				"Kontaktinės formos",
				"Individualios spalvos ir vizualinis stilius",
				"Informacijos patalpinimas",
				"Mobiliesiems pritaikytas dizainas",
				"SEO optimizavimas",
				"Google Analytics ir Search Console pajungimas",
				"Socialinių tinklų integracija",
			],
			extras: [
				"Hostingas + SSL su 50% nuolaida pirmais metais",
				"Metinė priežiūra: serverio palaikymas, SSL atnaujinimai, baziniai saugumo patikrinimai (nemokamai 1 metams)",
				"1 mėn. nemokama techninė pagalba po paleidimo",
			],
			highlighted: true,
		},
		{
			name: "Internetinė parduotuvė",
			label: "Prekybai internetu",
			description:
				"Pilnai paruošta el. prekybos platforma verslui, norinčiam parduoti internetu.",
			price: "€1 299",
			icon: <ShoppingCart size={22} />,
			features: [
				"Turinio valdymo sistema (WordPress + WooCommerce)",
				"Individualiai pritaikytas dizainas",
				"1-10 puslapių",
				"Produktų kategorijų struktūra",
				"Kontaktinės formos",
				"Individualios spalvos ir vizualinis stilius",
				"Informacijos patalpinimas",
				"Mobiliesiems pritaikytas dizainas",
				"SEO optimizavimas",
				"Google Analytics ir Search Console pajungimas",
				"El. prekybos funkcionalumas",
				"10 prekių įkėlimas nemokamai",
				"Atsiskaitymų integracija",
				"Paštomatų / kurjerių integracija",
			],
			extras: [
				"Nemokamas hostingas + SSL 1 metams",
				"Metinė priežiūra: serverio palaikymas, SSL atnaujinimai, saugumo patikrinimai, atsarginės kopijos ir smulkūs turinio pakeitimai (nemokamai 1 metams)",
				"3 mėn. nemokama techninė pagalba po paleidimo",
			],
		},
	];

	return (
		<div className="relative min-h-screen overflow-hidden">
			<Helmet>
				<title>Svetainių kūrimo kainos | Amberweb</title>
				<meta
					name="description"
					content="Skaidrios internetinių svetainių ir el. parduotuvių kūrimo kainos. Pasirinkite tinkamą planą ir gaukite profesionalų sprendimą savo verslui."
				/>
				<link rel="canonical" href="https://amberweb.lt/kainos" />
			</Helmet>

			{/* Background */}
			<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute left-1/2 top-0 h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(60,80,200,0.22)_0%,transparent_70%)] blur-3xl" />
				<div className="absolute -right-40 top-[900px] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[130px]" />
			</div>

			<div className="mx-auto">
				{/* Hero */}
				<section className="mx-auto max-w-4xl px-4 pb-14 pt-20 text-center md:pb-20 md:pt-28">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-electric-blue/20 bg-electric-blue/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-electric-blue">
							<Sparkles size={15} />
							Investicija į jūsų verslą
						</div>

						<h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
							Svetainių kūrimo kainos.
							<br />
							<span className="bg-gradient-to-r from-electric-blue to-purple-400 bg-clip-text text-transparent">
								Be jokių netikėtumų.
							</span>
						</h1>

						<p className="mx-auto max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
							Aiškūs svetainių ir el. parduotuvių kūrimo planai,
							pritaikyti skirtingiems verslo poreikiams.
							Pasirinkite tinkamiausią variantą arba susisiekite
							dėl individualaus sprendimo.
						</p>
					</motion.div>

					<div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/50">
						<span className="flex items-center gap-2">
							<Check size={16} className="text-electric-blue" />
							Fiksuota pradinė kaina
						</span>
						<span className="flex items-center gap-2">
							<Check size={16} className="text-electric-blue" />
							Be paslėptų mokesčių
						</span>
						<span className="flex items-center gap-2">
							<Check size={16} className="text-electric-blue" />
							Pritaikyta mobiliesiems
						</span>
					</div>
				</section>

				{/* Pricing cards */}
				<section
					aria-label="Svetainių kūrimo planai"
					className="mx-auto max-w-7xl px-4"
				>
					<div className="grid grid-cols-1 items-stretch gap-7 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
						{plans.map((plan, index) => (
							<motion.div
								key={plan.name}
								initial={{ opacity: 0, y: 25 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.45,
									delay: index * 0.12,
								}}
								className={`relative h-full rounded-2xl p-[1px] ${
									plan.highlighted
										? "bg-gradient-to-b from-electric-blue via-purple-500 to-electric-blue/40 shadow-[0_0_40px_rgba(60,80,200,0.15)]"
										: "bg-white/10"
								}`}
							>
								<div
									className={`relative flex h-full flex-col overflow-hidden rounded-2xl p-6 sm:p-7 ${
										plan.highlighted
											? "bg-[#111426]"
											: "bg-dark-surface-2"
									}`}
								>

									{/* Plan header */}
									<div className="mb-7">
										<div
											className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl border ${
												plan.highlighted
													? "border-electric-blue/30 bg-electric-blue/15 text-electric-blue"
													: "border-white/10 bg-white/5 text-white/70"
											}`}
										>
											{plan.icon}
										</div>

										<p className="mb-2 text-xs font-medium uppercase tracking-wider text-electric-blue">
											{plan.label}
										</p>

										<h2 className="mb-3 text-2xl font-bold text-white">
											{plan.name}
										</h2>

										<p className="min-h-[4.5rem] text-sm leading-relaxed text-white/55">
											{plan.description}
										</p>
									</div>

									{/* Price */}
									<div className="mb-7 border-b border-white/10 pb-7">
										<p className="mb-1 text-xs text-white/40">
											Projekto kaina
										</p>
										<div className="flex items-baseline gap-2">
											<span className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
												{plan.price}
											</span>
											<span className="text-sm text-white/40">
												/ nuo
											</span>
										</div>
									</div>

									{/* Features */}
									<div className="flex-1">
										<p className="mb-5 text-xs font-semibold uppercase tracking-wider text-white/45">
											Į kainą įskaičiuota
										</p>

										<ul className="space-y-3.5">
											{plan.features.map((feature) => (
												<li
													key={feature}
													className="flex items-start gap-3"
												>
													<Check
														size={17}
														className="mt-0.5 shrink-0 text-electric-blue"
													/>
													<span className="text-sm leading-relaxed text-white/70">
														{feature}
													</span>
												</li>
											))}
										</ul>

										<div className="my-7 border-t border-white/10 pt-6">
											<p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-electric-blue">
												<ShieldCheck size={16} />
												Papildomos naudos
											</p>

											<ul className="space-y-3.5">
												{plan.extras.map((feature) => (
													<li
														key={feature}
														className="flex items-start gap-3"
													>
														<Check
															size={17}
															className="mt-0.5 shrink-0 text-electric-blue"
														/>
														<span className="text-sm leading-relaxed text-white/55">
															{feature}
														</span>
													</li>
												))}
											</ul>
										</div>
									</div>

									{/* CTA */}
									<div className="mt-7 border-t border-white/10 pt-6">
										<Link
											to="/kontaktai"
											className={`group flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-300 ${
												plan.highlighted
													? "button-primary text-white shadow-lg shadow-electric-blue/20"
													: "border border-white/15 bg-white/5 text-white hover:border-electric-blue/50 hover:bg-electric-blue/10"
											}`}
										>
											Nemokama konsultacija
											<ArrowRight
												size={17}
												className="transition-transform duration-300 group-hover:translate-x-1"
											/>
										</Link>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Price note */}
				<p className="mx-auto mt-8 max-w-4xl px-4 text-center text-xs leading-relaxed text-white/40">
					* Pateikta kaina apima visas nurodytas funkcijas. Galutinė
					kaina gali keistis priklausomai nuo papildomų funkcijų,
					puslapių skaičiaus ar specifinių poreikių.
				</p>

				{/* Features */}
				<div className="mx-auto mt-24 max-w-5xl px-4">
					<Features />
				</div>

				{/* CTA */}
				<div className="mx-auto mt-24 w-full">
					<CTA
						title="Nežinote, kuris planas jums tinka?"
						subtitle="Parašykite mums - padėsime išsirinkti tinkamiausią sprendimą."
						buttonText="Susisiekti"
						link="/kontaktai"
					/>
				</div>

				{/* Portfolio link */}
				<motion.section
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.15 }}
					className="relative my-20 px-4 pb-8 text-center"
				>
					<h2 className="mb-4 text-2xl font-bold text-white">
						Norite pamatyti mūsų darbus?
					</h2>

					<p className="mb-8 text-white/60">
						Peržiūrėkite mūsų įgyvendintus projektus ir dizaino
						sprendimus.
					</p>

					<Link
						to="/projektai"
						className="button-primary group inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-white"
					>
						<span>Peržiūrėti projektus</span>
						<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
					</Link>
				</motion.section>
			</div>
		</div>
	);
};

export default Kainos;
