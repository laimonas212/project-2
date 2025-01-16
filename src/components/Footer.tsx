import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: 'Email',
            value: 'info@amberweb.lt',
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: 'Phone',
            value: '+370 611 18874',
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: 'Location',
            value: 'Vilnius, Lithuania',
        },
    ];

    return (
        <footer className="bg-dark-surface py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 * index }}
                            className="flex items-start space-x-4 p-4 bg-dark-surface-2 rounded-lg shadow-lg"
                        >
                            <div className="p-3 bg-dark-surface rounded-full text-electric-blue">
                                {info.icon}
                            </div>
                            <div>
                                <h3 className="font-medium text-white mb-1">{info.title}</h3>
                                <p className="text-white/70">{info.value}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
