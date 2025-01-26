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
            className={`fixed bottom-8 right-5 w-14 h-14 flex items-center justify-center rounded-full transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            style={{
                background: `conic-gradient(
                    #00f0ff 0%,
                    #9370DB ${scrollProgress}%, 
                    transparent ${scrollProgress}%
                )`, // Smooth gradient from blue to purple
            }}
        >
            <div
                className="w-12 h-12 bg-dark-surface rounded-full flex items-center justify-center text-white shadow-lg"
                style={{
                    boxShadow: `conic-gradient(
                        #00f0ff 0%, 
                        #9370DB ${scrollProgress}%, 
                        transparent ${scrollProgress}%
                    )`, // Control progress bar thickness
                }}
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
