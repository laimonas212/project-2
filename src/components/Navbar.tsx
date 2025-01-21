import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutGrid, AlignRight, X } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { href: '/', label: <LayoutGrid /> },
    { href: '/projects', label: 'Projektai' },
    { href: '/templates', label: 'Paruošti dizainai' },
    { href: '/pricing', label: 'Kainos' },
    { href: '/kontaktai', label: 'Kontaktai' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        scrolled ? 'py-4 bg-background/80 backdrop-blur-lg' : 'py-6'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 logo-wrapper">
            <div className="gradient-mask"></div>
            <img src="src/img/amberweb-logo-amber-only.png" alt="Amberweb" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'font-medium transition-colors hover:text-electric-blue',
                  location.pathname === link.href ? 'text-electric-blue' : 'text-white/80'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <AlignRight />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-dark-surface-2"
      >
        <div className="container mx-auto px-4 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'block py-2 font-medium transition-colors hover:text-electric-blue',
                location.pathname === link.href ? 'text-electric-blue' : 'text-white/80'
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;