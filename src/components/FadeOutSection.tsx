import React, { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface FadeOutSectionProps {
    children: ReactNode;
}

const FadeOutSection = ({ children }: FadeOutSectionProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"], // Fades as the top of the section leaves the viewport
    });

    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <motion.section ref={sectionRef} style={{ opacity }} className="relative">
            {children}
        </motion.section>
    );
};

export default FadeOutSection;