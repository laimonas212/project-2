import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import blogEntries from "./blogEntries";

const Blog = () => {
	return (
		<section className="relative overflow-hidden py-20 md:py-28">
			<div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-electric-blue/[0.07] blur-[140px]" />

			<div className="container relative mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6 }}
					className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
				>
					<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-electric-blue/20 bg-electric-blue/10 px-4 py-2 text-sm font-medium text-electric-blue">
						<BookOpen className="h-4 w-4" />
						Amberweb įžvalgos
					</div>

					<h2 className="mb-5 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
						Naujienos, gidai ir{" "}
						<span className="bg-gradient-to-r from-electric-blue to-purple-400 bg-clip-text text-transparent">
							naudingos įžvalgos
						</span>
					</h2>

					<p className="mx-auto max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
						Naujausia informacija, praktiniai patarimai ir idėjos,
						padėsiančios efektyviau išnaudoti interneto galimybes.
					</p>
				</motion.div>

				<Swiper
					slidesPerView={1}
					spaceBetween={16}
					loop={blogEntries.length > 3}
					grabCursor
					autoplay={{
						delay: 7000,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					}}
					pagination={{ clickable: true }}
					speed={700}
					modules={[Pagination, Autoplay]}
					breakpoints={{
						640: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						1200: {
							slidesPerView: 3,
							spaceBetween: 24,
						},
					}}
					className="blog-swiper !pb-14"
				>
					{blogEntries.map((entry, index) => (
						<SwiperSlide
							key={entry.url || index}
							className="!h-auto"
						>
							<motion.article
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.2 }}
								transition={{
									duration: 0.45,
									delay: (index % 3) * 0.08,
								}}
								className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-dark-surface-2 transition-all duration-300 hover:-translate-y-1 hover:border-electric-blue/30"
							>
								<Link
									to={entry.url}
									className="relative block aspect-[16/10] overflow-hidden bg-white/[0.03]"
								>
									<img
										src={entry.image}
										alt={entry.title}
										loading="lazy"
										className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
									/>

									<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60" />
								</Link>

								<div className="flex flex-1 flex-col p-6">
									<h3 className="mb-3 text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-electric-blue md:text-xl">
										<Link to={entry.url}>
											{entry.title}
										</Link>
									</h3>

									<p className="mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-white/55 md:text-base">
										{entry.excerpt}
									</p>

									<Link
										to={entry.url}
										className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-electric-blue transition-colors duration-300 hover:text-white"
									>
										Skaityti daugiau
										<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
									</Link>
								</div>
							</motion.article>
						</SwiperSlide>
					))}
				</Swiper>

				<motion.div
					initial={{ opacity: 0, y: 15 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="mt-8 text-center"
				>
					<Link
						to="/blog"
						className="button-primary group inline-flex items-center gap-3"
					>
						Peržiūrėti visus įrašus
						<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
					</Link>
				</motion.div>
			</div>

			<style>{`
				.blog-swiper .swiper-pagination {
					bottom: 0;
				}

				.blog-swiper .swiper-pagination-bullet {
					width: 7px;
					height: 7px;
					background: rgba(255, 255, 255, 0.3);
					opacity: 1;
					transition: all 0.3s ease;
				}

				.blog-swiper .swiper-pagination-bullet-active {
					width: 22px;
					border-radius: 10px;
					background: #3b82f6;
				}
			`}</style>
		</section>
	);
};

export default Blog;
