import { Layout, ShoppingBag, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
    const servicesList = [
        {
            icon: <Layout className="w-6 h-6" />,
            title: 'Individualus svetainių kūrimas',
            description: 'Modernūs ir funkcionalūs interneto svetainių sprendimai, pritaikyti jūsų verslo poreikiams.',
        },
        {
            icon: <ShoppingBag className="w-6 h-6" />,
            title: 'E-komercijos sprendimai',
            description: 'Profesionalūs el. parduotuvių sprendimai, kurie padeda didinti pardavimus ir pasiekti tikslus.',
        },
        {
            icon: <Smartphone className="w-6 h-6" />,
            title: 'Pritaikyta visiems įrenginiams',
            description: 'Visiškai adaptuotos svetainės, kurios puikiai veikia tiek kompiuteriuose, tiek mobiliuosiuose įrenginiuose.',
        },
    ];
    return (
        <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Teikiamos paslaugos</h2>
                <p className="text-white/70 text-lg max-w-2xl mx-auto">
                    Teikiame visapusiškas interneto svetainių kūrimo paslaugas, pritaikytas jūsų verslo poreikiams. Mūsų komanda dirba su naujausiomis technologijomis ir geriausia praktika, siekdama sukurti aukštos kokybės interneto svetaines.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {servicesList.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="card group hover:border-electric-blue/30 transition-colors duration-300"
                    >
                        <div className="text-electric-blue mb-4 group-hover:scale-110 transition-transform duration-300">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-white/70">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Services;