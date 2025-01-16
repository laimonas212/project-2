import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the Footer component
import Home from './pages/Home';
import Projects from './pages/Projects';
import Templates from './pages/Templates';
import Pricing from './pages/Pricing';
import Kontaktai from './pages/Kontaktai';
import { motion } from 'framer-motion';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background overflow-hidden flex flex-col">
        <div className="fixed inset-0 grid-pattern opacity-20" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 flex-grow"
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/kontaktai" element={<Kontaktai />} />
          </Routes>
        </motion.div>
        <Footer /> {/* Footer is placed here to show on all pages */}
      </div>
    </Router>
  );
}

export default App;
