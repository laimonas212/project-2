import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutGrid, AlignRight, X } from 'lucide-react';
import { cn } from '../lib/utils';
import logo from '../img/amberweb-logo-amber-only.png';
import logo2 from '../img/amberweb-logo-white-no-amber.png';
import Accessibility from '../components/Accessibility';
import LanguageSwitcher from '../components/LanguageSwitcher';

// Define a type for your link objects to improve type safety
interface NavLinkItem {
  href?: string; // Optional for buttons
  label: string | React.ReactElement;
  isButton?: boolean;
  isHighlight?: boolean;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAccessibilityMenu, setShowAccessibilityMenu] = useState(false);
  const location = useLocation();

  // Define regular URL links separately
  const urlLinks: NavLinkItem[] = [
    { href: '/', label: <LayoutGrid /> },
    { href: '/projektai', label: 'Projektai' },
    { href: '/paruosti-dizainai', label: 'Paruošti dizainai' },
    { href: '/kainos', label: 'Kainos' },
    { href: '/kontaktai', label: 'Kontaktai' },
    { href: '/blog', label: 'Straipsniai' },
  ];

  // The 'Svetainė per 24h' link
  const highlightLink: NavLinkItem = { href: '/svetaine-per-24h', label: 'Svetainė per 24h', isHighlight: true };

  // The Accessibility button link
  const accessibilityLink: NavLinkItem = { label: <Accessibility />, isButton: true };


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAccessibilityToggle = () => {
    setShowAccessibilityMenu(!showAccessibilityMenu);

    // nuimti hash iš URL jei buvo uždėtas
    if (window.location.hash === '#accessibility') {
      history.replaceState(null, '', window.location.pathname);
    }
  };

  return (
    <nav className={cn(
      'fixed w-full z-50 transition-all duration-300',
      scrolled ? 'py-4 bg-background/80 backdrop-blur-lg' : 'py-6'
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 logo-wrapper">
            <div
              className="gradient-mask"
              style={{
                position: "absolute",
                top: 0,
                left: "7px",
                width: "100%",
                height: "100%",
                background: "linear-gradient(90deg, #00f0ff, #763bff, #9D00FF, #00ffcc, #00f0ff)",
                backgroundSize: "200%",
                WebkitMaskImage: `url(${logo2})`,
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                WebkitMaskSize: "contain",
                maskImage: `url(${logo2})`,
                maskRepeat: "no-repeat",
                maskPosition: "center",
                maskSize: "contain",
                animation: "gradient-animation 15s linear infinite",
              }}
            />
            <img src={logo} alt="Amberweb" className="w-10 h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* All URL links */}
            {urlLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href || ''}
                className={cn(
                  "font-medium transition-colors",
                  location.pathname === link.href
                    ? "text-electric-blue"
                    : "text-white/80 hover:text-electric-blue"
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* 24h button */}
            <Link
              key={highlightLink.href}
              to={highlightLink.href || ''}
              className={cn(
                "font-medium transition-colors button-primary rounded-full animate-gradient-x"
              )}
            >
              {highlightLink.label}
            </Link>

            {/* Accessibility button */}
            <button
              key="accessibility"
              onClick={handleAccessibilityToggle}
              className="text-white/80 hover:text-electric-blue transition-colors"
            >
              {accessibilityLink.label}
            </button>

            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button and Highlight Button (in header) */}
          <div className="md:hidden flex items-center space-x-4">
            <Link
              key={highlightLink.href}
              to={highlightLink.href || ''}
              className={cn(
                "font-medium transition-colors button-primary rounded-full animate-gradient-x",
                "adaptive-button-font"
              )}
            >
              {highlightLink.label}
            </Link>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <AlignRight />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (Dropdown Menu) */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-dark-surface-2"
      >
        <div className="container mx-auto px-4 py-4">
          {/* All URL links for mobile menu */}
          {urlLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href || ''}
              className={cn(
                'block py-2 font-medium transition-colors',
                location.pathname === link.href
                  ? 'text-electric-blue'
                  : 'text-white/80 hover:text-electric-blue'
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Accessibility button for mobile menu */}
          <button
            key="accessibility-mobile"
            onClick={() => {
              handleAccessibilityToggle();
              setIsOpen(false); // Close menu when accessibility is toggled
            }}
            className="block py-2 w-full text-left text-white/80 hover:text-electric-blue"
          >
            {accessibilityLink.label}
          </button>

          <LanguageSwitcher />
        </div>
      </motion.div>

      {/* Accessibility submeniu */}
      {showAccessibilityMenu && (
        <div className="absolute top-full right-4 bg-dark-surface text-white p-4 rounded shadow-xl z-50">
          {/* You would render your Accessibility component content here */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;