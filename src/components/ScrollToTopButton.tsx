import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300); // Show button after scrolling 300px
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling
        });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="toTop fixed bottom-8 right-5 p-3 border rounded-full border-electric-blue/100 transition-colors duration-300 backdrop-blur-sm"
                aria-label="Scroll to Top"
            >
                <ChevronUp className="w-4 h-4" />
            </button>
        )
    );
};

export default ScrollToTopButton;
