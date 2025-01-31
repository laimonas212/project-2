import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the Footer component
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


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="min-h-screen bg-background overflow-hidden flex flex-col pt-24 md:pt-0">
        {/* <div className="fixed inset-0 grid-pattern opacity-20" /> */}
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
          </Routes>
          <ScrollToTopButton />
        </motion.div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
