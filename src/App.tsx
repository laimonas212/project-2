import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

// Import CookieBot
import CookieBot from 'react-cookiebot';

// Your CookieBot domain group ID (replace this with your actual ID)
const domainGroupId = 'c7302216-6ce5-4c9a-b458-23d9186ba517';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      {/* Add CookieBot Here */}
      <CookieBot domainGroupId={domainGroupId} />

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
          </Routes>
          <ScrollToTopButton />
        </motion.div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
