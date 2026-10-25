import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, BookOpen, Sparkles, Lightbulb } from "lucide-react";

import blogEntries from "../components/blogEntries";
import CTA from "../components/CTA";

const Straipsniai = () => {
	return (
		<div className="relative min-h-screen overflow-hidden">
			<Helmet>
				<title>Straipsniai ir patarimai | Amberweb</title>
				<meta
					name="description"
					content="Įžvalgos apie interneto svetainių kūrimą, WordPress, SEO ir skaitmeninį verslą. Praktiniai patarimai, padedantys auginti jūsų verslą internete."
				/>
				<link rel="canonical" href="https://amberweb.lt/blog" />
			</Helmet>

			{/* Background glow */}
			<div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
				<div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-electric-blue/[0.08] blur-[140px]" />
				<div className="absolute right-0 top-[700px] h-[400px] w-[400px] rounded-full bg-purple-500/[0.06] blur-[130px]" />
			</div>

			<div className="container relative z-10 mx-auto px-4">
				{/* Hero */}
				<section className="relative pb-16 pt-24 text-center md:pb-20 md:pt-32">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="mx-auto max-w-3xl"
					>
						<div className="mb-7 inline-flex items-center gap-2 rounded-full border border-electric-blue/20 bg-electric-blue/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-electric-blue">
							<Sparkles size={14} />
							Amberweb įžvalgos
						</div>

						<h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
							Idėjos, įžvalgos ir{" "}
							<span className="bg-gradient-to-r from-electric-blue to-purple-400 bg-clip-text text-transparent">
								patarimai
							</span>
						</h1>

						<p className="mx-auto max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
							Naudinga informacija apie interneto svetainių
							kūrimą, WordPress, SEO ir skaitmeninį verslą.
							Dalinamės žiniomis, kurios padeda priimti geresnius
							sprendimus internete.
						</p>

						<div className="mt-9 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
							<div className="flex items-center gap-2">
								<BookOpen
									size={16}
									className="text-electric-blue"
								/>
								Praktiniai straipsniai
							</div>

							<div className="flex items-center gap-2">
								<Lightbulb
									size={16}
									className="text-electric-blue"
								/>
								Naudingos įžvalgos
							</div>
						</div>
					</motion.div>
				</section>

				{/* Articles */}
				<section className="pb-24 md:pb-32">
					<div className="mb-8 flex flex-wrap items-end justify-between gap-4">
						<div>
							<p className="mb-2 text-xs font-semibold uppercase tracking-widest text-electric-blue">
								Skaitykite ir atraskite
							</p>

							<h2 className="text-2xl font-bold text-white sm:text-3xl">
								Naujausi straipsniai
							</h2>
						</div>

						<p className="text-sm text-white/40">
							{blogEntries.length}{" "}
							{blogEntries.length === 1
								? "straipsnis"
								: blogEntries.length >= 2 &&
									  blogEntries.length <= 9
									? "straipsniai"
									: "straipsnių"}
						</p>
					</div>

					{blogEntries.length > 0 ? (
						<div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
							{blogEntries.map((entry, index) => (
								<motion.article
									key={entry.url || index}
									initial={{ opacity: 0, y: 24 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.5,
										delay: (index % 3) * 0.1,
									}}
									viewport={{ once: true, amount: 0.1 }}
									className="group h-full"
								>
									<Link
										to={entry.url}
										className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-dark-surface-2 transition-all duration-300 hover:-translate-y-1 hover:border-electric-blue/30 hover:shadow-[0_15px_50px_rgba(0,200,255,0.08)]"
									>
										{/* Image */}
										<div className="relative aspect-[16/10] overflow-hidden bg-white/[0.03]">
											<img
												src={entry.image}
												alt={entry.title}
												loading="lazy"
												className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
											/>

											<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
										</div>

										{/* Content */}
										<div className="flex flex-1 flex-col p-6">
											<h3 className="mb-3 line-clamp-2 min-h-[3.5rem] text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-electric-blue">
												{entry.title}
											</h3>

											<p className="mb-6 line-clamp-3 min-h-[4.5rem] flex-1 text-sm leading-relaxed text-white/55">
												{entry.excerpt}
											</p>

											<div className="mt-auto flex items-center justify-between border-t border-white/[0.08] pt-5">
												<span className="text-sm font-semibold text-electric-blue transition-colors duration-300 group-hover:text-white">
													Skaityti straipsnį
												</span>

												<div className="flex h-9 w-9 items-center justify-center rounded-full border border-electric-blue/20 bg-electric-blue/[0.08] text-electric-blue transition-all duration-300 group-hover:border-electric-blue group-hover:bg-electric-blue group-hover:text-white">
													<ArrowRight
														size={16}
														className="transition-transform duration-300 group-hover:translate-x-0.5"
													/>
												</div>
											</div>
										</div>
									</Link>
								</motion.article>
							))}
						</div>
					) : (
						<div className="rounded-2xl border border-white/[0.08] bg-dark-surface-2 px-6 py-20 text-center">
							<BookOpen
								size={36}
								className="mx-auto mb-4 text-electric-blue/60"
							/>

							<h3 className="mb-2 text-xl font-bold text-white">
								Straipsniai ruošiami
							</h3>

							<p className="text-sm text-white/50">
								Netrukus čia rasite naudingų įžvalgų ir
								patarimų.
							</p>
						</div>
					)}
				</section>
			</div>

			{/* CTA */}
			<div className="relative z-10 w-full">
				<CTA
					title="Turite klausimų apie svetainių kūrimą?"
					subtitle="Parašykite mums - mielai pasidalinsime įžvalgomis ir padėsime rasti tinkamiausią sprendimą jūsų verslui."
					buttonText="Susisiekti"
					link="/kontaktai"
				/>
			</div>
		</div>
	);
};

export default Straipsniai;
