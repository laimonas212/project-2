import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/50 to-neon-purple/50" />
            <div className="container mx-auto px-4 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pasiruošę pradėti savo projektą?
                </h2>
                <p className="text-white/70 text-lg mb-8">
                Susisiekite su mumis ir pradėkite savo interneto svetainės kūrimo kelionę jau šiandien.
                </p>
                <Link to="/kontaktai">

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="button-primary inline-flex items-center gap-2 group"
                >
                    <span>Konsultuotis</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </Link>
            </motion.div>
            </div>
        </section>
    );
}

export default CTA;