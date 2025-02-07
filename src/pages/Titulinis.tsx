import React, { useRef } from 'react';
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


const Titulinis = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  return (
    <div className="overflow-hidden">
      <HeroSection />

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 relative">
        <Services />
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
    </div>

  );
  
};
<Footer />

export default Titulinis;