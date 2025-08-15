import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Features from "../components/Features";
import CTA from "../components/CTA";

const Kainos = () => {
  const plans = [
    {
      name: "Reprezentacinė svetainė",
      description: "Idealiai tinka mažoms įmonėms ar asmeniniams projektams",
      price: "€499",
      features: [
        "Turinio valdymo sistema (WordPress)",
        "Pasirinktas paruoštas dizainas",
        "1-5 puslapiai",
        "Kontaktinės formos",
        "Individualios spalvos",
        "Informacijos patalpinimas",
        "Mobiliesiems pritaikytas dizainas",
        "Bazinis SEO",
        "Google Analytics ir Search Console pajungimas",
      ],
      extras: [
        "Hostingas + SSL su 50% nuolaida pirmais metais",
        "Metinė priežiūra: serverio palaikymas, SSL atnaujinimai, baziniai saugumo patikrinimai (nemokamai 1 metams)",
        "1 mėn. nemokama techninė pagalba po paleidimo",
      ],
    },
    {
      name: "Elektroninė Parduotuvė",
      description:
        "Puikiai tinka įmonėms, norinčioms pradėti arba išplėsti savo internetinę prekybą",
      price: "€799",
      features: [
        "Turinio valdymo sistema (WordPress + WooCommerce)",
        "Pasirinktas paruoštas dizainas",
        "1-10 puslapių",
        "Kontaktinės formos",
        "Individualios spalvos",
        "Informacijos patalpinimas",
        "Mobiliesiems pritaikytas dizainas",
        "Bazinis SEO",
        "Google Analytics ir Search Console pajungimas",
        "El. prekybos pajungimas",
        "10 prekių įkėlimas nemokamai",
        "Atsiskaitymų pajungimas",
        "Paštomatų/Kurjerių integracija",
      ],
      extras: [
        "Nemokamas hostingas + SSL 1 metams",
        "Metinė priežiūra: serverio palaikymas, SSL atnaujinimai, saugumo patikrinimai, atsarginės kopijos, smulkūs turinio pakeitimai (nemokamai 1 metams)",
        "3 mėn. nemokama techninė pagalba po paleidimo",
      ],
      highlighted: true,
    },
    {
      name: "Svetainė per 24h",
      description:
        "Greitas startas – informacinė svetainė paruošta per 24 valandas.",
      price: "€299",
      features: [
        "Turinio valdymo sistema (WordPress)",
        "Pasirinktas paruoštas dizainas",
        "1-2 puslapiai (pvz. landing, kontaktai)",
        "Kontaktinė forma",
        "Informacijos patalpinimas",
        "Mobiliesiems pritaikytas dizainas",
      ],
      extras: [
        "Hostingas + SSL su 30% nuolaida pirmais metais",
        "Metinė priežiūra: serverio palaikymas ir SSL atnaujinimai (nemokamai 1 metams)",
      ],
    },
  ];

  return (
    <div className="pt-4 md:pt-36 min-h-screen">
      <Helmet>
        <title>Mūsų Kainos - Pasirinkite Planą | Amberweb</title>
        <meta
          name="description"
          content="Pasirinkite tinkamiausią planą savo projektui. Sužinokite, ką siūlome ir kokie yra mūsų paslaugų įkainiai."
        />
        <link rel="canonical" href="https://amberweb.lt/kainos" />
      </Helmet>

      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6 px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold">Mūsų Kainos</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto text-center mb-12 px-4"
        >
          <p className="text-xl text-white/70 pb-2">
            Pasirinkite tinkamiausią planą savo projektui
          </p>
          <p className="text-xs text-white/70">
            Mūsų kainos – aiškiai ir be paslėptų mokesčių. Gaukite viską, ko
            reikia stipriai internetinei svetainei – už fiksuotą kainą.
          </p>
        </motion.div>

        {/* Kortelės */}
        <div className="px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              className={`p-[1px] h-min rounded-lg shadow-lg bg-gradient-to-r from-electric-blue/50 to-purple-500/50 ${
                plan.highlighted ? "animate-gradient-x" : ""
              }`}
              key={plan.name}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card transform hover:-translate-y-2 flex flex-col h-auto"
              >
                <div className="space-y-6 mb-12 flex-1">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-white/70">{plan.description}</p>
                  </div>

                  <div className="text-4xl font-bold text-electric-blue">
                    Nuo {plan.price}
                  </div>

                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-electric-blue shrink-0 mt-0.5" />
                        <span className="text-white/70">{feature}</span>
                      </li>
                    ))}
                    <p className="text-sm text-electric-blue font-semibold mt-4">
                      Talpinant svetainę pas mus:
                    </p>
                    {plan.extras.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-electric-blue shrink-0 mt-0.5" />
                        <p className="text-white/70">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/kontaktai">
                  <button className="w-full button-primary py-3 rounded-lg transition-colors duration-300">
                    Nemokama Konsultacija
                  </button>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>

        <p className="px-4 text-center pt-8">
          *Pateikta kaina apima visas nurodytas funkcijas. Galutinė kaina gali
          keistis priklausomai nuo papildomų funkcijų, puslapių skaičiaus ar
          specifinių poreikių.
        </p>

        <div className="max-w-5xl mx-auto mt-24 px-4">
          <Features />
        </div>

        <div className="w-full mx-auto mt-24">
          <CTA
            title="Nežinote kuris planas jums tinka?"
            subtitle="Parašykite mums – padėsime išsirinkti."
            buttonText="Susisiekti"
            link="/kontaktai"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="my-20 pb-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">
            Norite pamatyti mūsų darbus?
          </h2>
          <p className="text-white/70 mb-8">
            Peržiūrėkite mūsų sėkmingai įgyvendintus projektus
          </p>
          <Link
            to="/projektai"
            className="inline-flex items-center gap-2 button-primary group"
          >
            <span>Peržiūrėti Projektus</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Kainos;
