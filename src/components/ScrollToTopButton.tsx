import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = Math.min((scrollTop / windowHeight) * 100, 100); // Calculate scroll progress
            setScrollProgress(progress);
            setIsVisible(scrollTop > 300); // Show button after scrolling 300px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling
        });
    };

    return (
        <div
            className={`fixed bottom-8 right-8 flex items-center justify-center rounded-full transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
                }`}
            style={{
                width: '52px',
                height: '52px',
                background: `conic-gradient(
                    #00f0ff 0%, 
                    #9370DB ${scrollProgress}%, 
                    transparent ${scrollProgress}%
                )`,
                visibility: isVisible ? 'visible' : 'hidden', // Ensures proper hiding
            }}
        >
            {/* Blurred Background */}
            <div
                className="absolute inset-0 rounded-full"
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white
                    backdropFilter: 'blur(10px)', // Blur effect
                    WebkitBackdropFilter: 'blur(10px)', // Safari support
                }}
            ></div>

            {/* Inner Button */}
            <div
                className="relative w-12 h-12 bg-dark-surface rounded-full flex items-center justify-center text-electric-blue shadow-lg"
            >
                <button
                    onClick={scrollToTop}
                    className="w-full h-full rounded-full flex items-center justify-center"
                    aria-label="Scroll to Top"
                >
                    <ChevronUp className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

export default ScrollToTopButton;
