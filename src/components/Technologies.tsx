import { motion } from "framer-motion";
import Images from "../img/Images";


const Technologies = () => {
    const technologiesList = [
        {
            name: 'Wordpress',
            image: Images.logos.wordpress,
        },
        {
            name: 'Woocommerce',
            image: Images.logos.wooWhite,
        },
        {
            name: 'Divi',
            image: Images.logos.divi,
        },
        {
            name: 'Elementor',
            image: Images.logos.elementor,
        },
        {
            name: 'Midjourney',
            image: Images.logos.midjourney,
        },
        {
            name: 'ChatGpt',
            image: Images.logos.chatgpt,
        },
        {
            name: 'React',
            image: Images.logos.react,
        },
        {
            name: 'HTML5',
            image: Images.logos.html,
        },
        {
            name: 'CSS3',
            image: Images.logos.css,
        },
    ];

    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Naudojamos technologijos</h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Naudojame modernias technologijas ir geriausias praktikas, siekdami sukurti aukštos kokybės interneto svetaines.
                    </p>
                </motion.div>

                {/* align vertically */}
                <div className="flex flex-wrap justify-center gap-4">
                    {technologiesList.map((technology, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className=" hover:border-electric-blue/30 h-auto w-36 card flex items-center justify-center transition-colors duration-300"
                        >
                            <div className="text-electric-blue">
                                <img
                                    src={technology.image}
                                    alt={technology.name}
                                    className={`${technology.name === 'React' || technology.name === 'HTML5' || technology.name === "CSS3"
                                        ? 'h-10 w-10'
                                        : 'h-auto w-24'
                                        }`}
                                />
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

    );

};


export default Technologies