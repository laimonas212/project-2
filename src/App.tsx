import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Pridedame HelmetProvider
import GoogleConsent from "./components/GoogleConsent";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projektai from './pages/Projektai';
import Templates from './pages/Dizainai';
import Kainos from './pages/Kainos';
import Kontaktai from './pages/Kontaktai';
import { motion } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import PrivatumoPolitika from './pages/PrivatumoPolitika';
import Salygos from './pages/Salygos';
import Slapukai from './pages/Slapukai';
import Titulinis from './pages/Titulinis';
import WoocommerceUzsakymuValdymas from './pages/blog/WoocommerceUzsakymuValdymas';
import NaujasWoocommerceProduktas from './pages/blog/NaujasWoocoomerceProduktas';
import KaipNaudotisDivi from './pages/blog/KaipNaudotisDivi';
import KasYraDivi from './pages/blog/KasYraDivi';
import KlaidosKuriasDaroVerslai from './pages/blog/KlaidosKuriasDaroVerslai';
import { initGA, logPageView } from "./analytics";

function App() {
  useEffect(() => {
    initGA(); // Initialize Google Analytics
    logPageView(); // Log initial page load
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <GoogleConsent />
        <ScrollToTop />
        <Navbar />

        <div className="min-h-screen bg-background overflow-hidden flex flex-col pt-24 md:pt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex-grow"
          >
            <Routes>
              <Route path="/" element={<Titulinis />} />
              <Route path="/projektai" element={<Projektai />} />
              <Route path="/paruosti-dizainai" element={<Templates />} />
              <Route path="/kainos" element={<Kainos />} />
              <Route path="/kontaktai" element={<Kontaktai />} />
              <Route path="/privatumo-politika" element={<PrivatumoPolitika />} />
              <Route path="/salygos" element={<Salygos />} />
              <Route path="/slapukai" element={<Slapukai />} />
              <Route path="/blog/woocommerce-uzsakymu-valdymas" element={<WoocommerceUzsakymuValdymas />} />
              <Route path="/blog/naujas-woocommerce-produktas" element={<NaujasWoocommerceProduktas />} />
              <Route path="/blog/kaip-naudotis-divi" element={<KaipNaudotisDivi />} />
              <Route path="/blog/kas-yra-divi" element={<KasYraDivi />} />
              <Route path="/blog/5-klaidos-kurias-daro-verslai" element={<KlaidosKuriasDaroVerslai />} />
            </Routes>
            <ScrollToTopButton />
          </motion.div>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
