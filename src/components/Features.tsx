import { Briefcase, TrendingUp, Eye, Puzzle, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
    const features = [ 
        {
            icon: <Briefcase className="w-6 h-6" />,
            title: 'Patirtis ir inovacijos jūsų sėkmei',
            description: 'Mūsų patyrusi komanda pasitelkia pažangias technologijas ir kūrybiškumą, kad sukurtų unikalias ir aukščiausios kokybės svetaines, padedančias jums pasiekti savo verslo tikslus.',
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: 'Investicija, atsiperkanti rezultatais',
            description: 'Teikiame aukščiausios kokybės paslaugas, kurios ne tik atitinka, bet ir viršija jūsų lūkesčius, užtikrindamos ilgalaikę vertę jūsų verslui.',
        },
        {
            icon: <Eye className="w-6 h-6" />,
            title: 'Patrauklus dizainas, pritraukiantis klientus',
            description: 'Kuriame modernaus dizaino svetaines, kurios ne tik puikiai atrodo, bet ir yra patogios naudoti bei efektyviai pritraukia jūsų tikslinę auditoriją.',
        },
        {
            icon: <Puzzle className="w-6 h-6" />,
            title: 'Sprendimai, pritaikyti būtent jūsų verslui',
            description: 'Mes nesame vieno dydžio tinkančių sprendimų šalininkai. Kuriame personalizuotas svetaines, atitinkančias unikalius jūsų verslo poreikius ir tikslus.',
        },
        {
            icon: <ThumbsUp className="w-6 h-6" />,
            title: 'Jūsų sėkmė – mūsų prioritetas',
            description: 'Mūsų tikslas – ne tik sukurti puikią svetainę, bet ir užtikrinti jūsų visišką pasitenkinimą bei ilgalaikį bendradarbiavimą, padedant jums augti.',
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
                Kuriame interneto svetaines, kurios veikia jūsų verslo sėkmei.
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