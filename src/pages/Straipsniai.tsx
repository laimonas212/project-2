import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import blogEntries from "../components/blogEntries"; // Naudojame tą patį blogo įrašų objektą
import CTA from "../components/CTA"; // Galite įkelti CTA komponentą

const Straipsniai = () => {
  return (
    <div className="pt-4 md:pt-36 min-h-screen">
      <Helmet>
        <title>Įrašai ir Naujienos | Amberweb</title>
        <meta
          name="description"
          content="Naujausia informacija apie interneto svetainių kūrimą, SEO, WordPress ir kitas skaitmenines paslaugas. Naudingi patarimai jūsų verslui."
        />
        <link rel="canonical" href="https://amberweb.lt/blog" />
      </Helmet>

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(60,80,200,0.25)_0%,transparent_70%)]" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Naujausi Įrašai
          </h1>
          <p className="text-xl text-white/70">
            Naudingi patarimai ir įžvalgos verslui
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {blogEntries.map((entry, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
              className="card group hover:border-electric-blue/30 transition-colors duration-300 flex flex-col h-full"
            >
              <Link to={entry.url} className="block h-full">
                <img
                  src={entry.image}
                  alt={entry.title}
                  className="w-full h-auto object-cover mb-4 rounded-lg"
                />
                <h3 className="text-xl font-bold mb-2 group-hover:text-electric-blue transition-colors duration-300">
                  {entry.title}
                </h3>
                <p className="text-white/70 flex-grow line-clamp-3">
                  {entry.excerpt}
                </p>
                <div className="mt-4 text-electric-blue font-bold group-hover:text-electric-blue/70 transition-colors duration-300">
                  Skaityti daugiau
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full mx-auto">
        <CTA
          title="Turite klausimų apie svetainių kūrimą?"
          subtitle="Parašykite mums – mielai pasidalinsime įžvalgomis."
          buttonText="Susisiekti"
          link="/kontaktai"
        />
      </div>
    </div>
  );
};

export default Straipsniai;
