import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import HeroSectionLanding from '../components/HeroSectionLanding';
import Footer from '../components/Footer';
import 'swiper/css/autoplay';
import CardSwiper from '../components/SwiperTestimonials';
import Blog from '../components/Blog';
import Technologies from '../components/Technologies';
import Process from '../components/Process';
import PrivalumaiLanding from '../components/PrivalumaiLanding';
import Features from '../components/Features';
import CTA from '../components/CTA';
import FAQ from '../components/Faq';
import HomepageSampleWork from '../components/HomepageSampleWork';
import PaslaugosLanding from '../components/PaslaugosLanding';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
        <section ref={servicesRef} className="py-20 relative bg-dark-surface">
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
        <FAQ />

        {/* text block */}
        <section className="pb-20 relative overflow-hidden max-w-4xl mx-auto">
          <div className="container px-4">
            <p className="card text-white/70 text-justify">
              Interneto svetainių kūrimas yra viena svarbiausių investicijų
              šiuolaikiniam verslui. Profesionaliai sukurta svetainė leidžia ne
              tik atstovauti jūsų įmonei internete, bet ir aktyviai pritraukti
              naujus klientus. Mūsų komanda specializuojasi WordPress
              platformoje, naudodami Divi dizaino įrankius, kurie leidžia
              greitai ir patogiai pritaikyti sprendimus įvairiems verslo
              poreikiams – nuo paprastų reprezentacinių tinklapių iki sudėtingų
              el. parduotuvių su integruotais atsiskaitymais ir unikaliu
              dizainu.
              <br />
              <br />
              Kuriame SEO optimizuotas svetaines, kurios greitai kraunasi ir yra
              pritaikytos mobiliesiems įrenginiams. Dirbdami su įvairiais
              klientais Lietuvoje, pastebime, kad kokybiškas tinklalapis padeda
              išsiskirti konkurencingoje rinkoje, sukuria patikimą įvaizdį ir
              didina pardavimus.
              <br />
              Jei ieškote patikimos komandos interneto svetainių kūrimui –
              kviečiame kreiptis į mus.
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
