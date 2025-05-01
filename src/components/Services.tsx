import { Layout, Search, Settings, ShoppingBag, Smartphone, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
    const servicesList = [
        {
            icon: <Layout className="w-6 h-6" />,
            title: 'Interneto svetainių kūrimas ir dizainas',
            description: 'Profesionalus interneto svetainių kūrimas – nuo idėjos iki pilnai veikiančio projekto. Kuriame vizualiai patrauklias, mobiliesiems pritaikytas svetaines (reprezentacines, verslo svetaines, portfolio), kurios ne tik puikiai atspindi jūsų prekės ženklą, bet ir efektyviai pritraukia naujus klientus bei užtikrina sklandžią vartotojo patirtį (UX).',
        },
        {
            icon: <ShoppingBag className="w-6 h-6" />,
            title: 'Elektroninių parduotuvių kūrimas',
            description: 'Patikimas elektroninių parduotuvių kūrimas pagal jūsų verslo poreikius, siekiant maksimalių pardavimų. Specializuojamės kuriant funkcionalias, saugias ir pardavimus skatinančias e-komercijos platformas (pvz., naudojant WooCommerce), kurios užtikrina patogų apsipirkimą jūsų klientams ir lengvą valdymą jums.',
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: 'Esminis svetainių optimizavimas paieškos sistemoms',
            description: 'Užtikriname, kad jūsų svetainė būtų tinkamai paruošta paieškos sistemoms, tokioms kaip Google. Atliekame svarbiausius optimizavimo veiksmus, įskaitant puslapių metaduomenų ir turinio pritaikymą, kad padidintume jūsų svetainės matomumą ir pritrauktume daugiau lankytojų.',
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
Mes kuriame aukštos kokybės interneto svetaines, pritaikytas jūsų unikaliems verslo tikslams ir poreikiams, naudojant naujausias technologijas ir geriausią praktiką.                </p>
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