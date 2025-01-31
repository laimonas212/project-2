import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Shield, ReceiptText, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

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

    const termsAndConditionsPages = [
        {
            title: 'Privacy Policy',
            url: '/kontaktai',
            icon: <Shield className="w-6 h-6" />
        },
        {
            title: 'Terms & Conditions',
            url: '/terms-and-conditions',
            icon: <ReceiptText className="w-6 h-6" />
        },
        {
            title: 'Cookies Policy',
            url: '/cookies-policy',
            icon: <Cookie className="w-6 h-6" />
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

                    {termsAndConditionsPages.map((info, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 * index }}
                            className="flex items-center space-x-4 px-4 py-2 bg-dark-surface-2 rounded-lg shadow-lg"
                        >
                            <div className="p-3 bg-dark-surface rounded-full text-electric-blue">
                                {info.icon}
                            </div>
                            <div>

                                <Link to={info.url} className="text-white/70 text-sm hover:text-white">
                                    {info.title}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="text-white/50 text-center text-sm flex align-center justify-center md:text-right mt-12">
                &copy; {new Date().getFullYear()} Amberweb
            </div>
        </footer>
    );
};

export default Footer;
