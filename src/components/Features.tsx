import { Users, Layout, Award } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
    const features = [
        {
            icon: <Users className="w-6 h-6" />,
            title: 'Patyrusi Komanda',
            description: 'Mūsų komanda turi daugelio metų patirtį interneto svetainių kūrime.',
        },
        {
            icon: <Layout className="w-6 h-6" />,
            title: 'Individualūs Sprendimai',
            description: 'Siūlome personalizuotas paslaugas, pritaikytas jūsų specifiniams poreikiams.',
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: 'Klientų Pasitenkinimas',
            description: 'Mes prioritetą teikiame klientų pasitenkinimui ir siekiame viršyti lūkesčius.',
        },
    ];
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Kodėl pasirinkti mus?
            </h2>
            <p className="text-white/70 text-lg mb-8">
                Esame patyrusi komanda, kuri derina pažangias technologijas ir kūrybinius sprendimus, kad sukurtume unikalius ir aukščiausios kokybės interneto svetainių sprendimus.
            </p>
            <div className="space-y-6">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4"
                    >
                        <div className="p-2 bg-dark-surface-2 rounded-lg text-electric-blue">
                            {feature.icon}
                        </div>
                        <div>
                            <h3 className="font-bold mb-1">{feature.title}</h3>
                            <p className="text-white/70">{feature.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default Features;