import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import 'swiper/css/autoplay';
import CardSwiper from '../components/SwiperTestimonials';
import Blog from '../components/Blog';
import Technologies from '../components/Technologies';
import Process from '../components/Process';
import Services from '../components/Services';
import Features from '../components/Features';
import CTA from '../components/CTA';
import FAQ from '../components/Faq';
import HomepageSampleWork from '../components/HomepageSampleWork';

const Titulinis = () => {
  const servicesRef = useRef(null);

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Amberweb – Profesionalus Interneto Svetainių Kūrimas</title>
        <meta name="description" content="Kuriame modernias ir funkcionalias interneto svetaines bei el. parduotuves." />
        <meta name="keywords" content="interneto svetainių kūrimas, el. parduotuvės, web dizainas, SEO, WordPress, WooCommerce" />
        <meta property="og:title" content="Amberweb – Profesionalus Interneto Svetainių Kūrimas" />
        <meta property="og:description" content="Modernios interneto svetainės ir el. parduotuvės, pritaikytos verslo poreikiams." />
        <meta property="og:image" content="https://amberweb.lt/amberweb_social.jpg" />
        <meta property="og:url" content="https://amberweb.lt" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://amberweb.lt" />
      </Helmet>

      <HeroSection />

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 relative">
        <Services />
      </section>

      <section className="py-20 bg-dark-surface relative overflow-hidden">
        <HomepageSampleWork />
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-dark-surface relative overflow-hidden">
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
      <Blog />
      <FAQ />
    </div>
  );
};

export default Titulinis;
