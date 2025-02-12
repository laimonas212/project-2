import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Images from "../img/Images";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import BlogNavigation from "./BlogNavigation";
import blogEntries from "./blogEntries";

const Blog = () => {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Naujienos ir gidai</h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Naujausia informacija, naudingi patarimai ir įžvalgos
                    </p>
                </motion.div>

                {/* Swiper su taškeliais */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    loop={true}
                    grabCursor={true}
                    autoplay={{ delay: 7000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="custom-swiper"
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        1024: { slidesPerView: 2, spaceBetween: 30 },
                    }}
                >
                    {blogEntries.map((entry, index) => (
                        <SwiperSlide key={index} className="h-auto">
                            <div className="card group hover:border-electric-blue/30 transition-colors duration-300 flex flex-col h-full">
                                <div className="aspect-w-16 aspect-h-9 mb-4">
                                    <img src={entry.image} alt={entry.title} className="object-cover w-auto h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{entry.title}</h3>
                                <p className="text-white/70 flex-grow">{entry.excerpt}</p>
                                <Link to={entry.url} className="text-electric-blue font-bold hover:text-electric-blue/70 transition-colors duration-300 mt-auto">
                                    Skaityti daugiau
                                </Link>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
            <BlogNavigation blogEntries={blogEntries} />
            </section>
    );
};

export default Blog;
