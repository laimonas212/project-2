import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Naujienos ir gidai
          </h2>
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
          speed={800}
          centeredSlides={false}
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={{
            640: {
              // telefonai
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              // planšetės / mid ekranai
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              // dideli ekranai
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="custom-swiper"
        >
          {blogEntries.map((entry, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="card group hover:border-electric-blue/30 transition-colors duration-300 flex flex-col h-full">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="object-cover w-auto h-16"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{entry.title}</h3>
                <p className="text-white/70 flex-grow line-clamp-2">
                  {entry.excerpt}
                </p>
                <Link
                  to={entry.url}
                  className="text-electric-blue font-bold hover:text-electric-blue/70 transition-colors duration-300 mt-auto"
                >
                  Skaityti daugiau
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* add a button to /blog */}
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-block px-6 py-3 button-primary text-white font-bold"
          >
            Peržiūrėti visus įrašus
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
