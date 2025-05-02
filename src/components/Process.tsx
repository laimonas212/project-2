import { motion } from "framer-motion";

const Process = () => {
    const processList = [
        { number: '01', title: 'Poreikių analizė', description: 'Jūsų poreikių ir tikslų išsiaiškinimas' },
        { number: '02', title: 'Planavimas', description: 'Sudarome aiškų veiksmų planą' },
        { number: '03', title: 'Dizainas', description: 'Pasirenkate tinkamą dizainą' },
        { number: '04', title: 'Kūrimas', description: 'Naudojame pažangiausias technologijas' },
        { number: '05', title: 'Paleidimas', description: 'Įgyvendiname ir optimizuojame projektą' },
    ];
    return (
        <section className="py-20 bg-dark-surface relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Interneto svetainių kūrimo procesas</h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Dirbame pagal aiškų ir patikrintą procesą – nuo idėjos iki galutinės svetainės paleidimo. Tai leidžia užtikrinti sklandų darbą, kokybę ir rezultatą, kuris padeda augti jūsų verslui internete.
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="absolute top-1/3 my-2 left-0 w-full h-0.5 bg-dark-surface-2 hidden lg:block">
                        <div className="h-full bg-gradient-to-r from-electric-blue to-neon-purple w-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {processList.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="text-5xl font-display font-bold text-electric-blue mb-4">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-white/70">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Process;