import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: 'Reprezentacinė svetainė',
      description: 'Idealiai tinka mažoms įmonėms ar asmeniniams projektams',
      price: '€350',
      features: [
        'Pasirinktas paruoštas dizainas',
        '1-5 puslapiai',
        'Individualios spalvos',
        'Informacijos patalpinimas',
        'Mobiliesiems pritaikytas dizainas',
        'Bazinis SEO',
      ],
    },
    {
      name: 'Elektroninė Parduotuvė',
      description: 'Puikiai tinka vidutinio dydžio įmonėms, norinčioms sustiprinti savo internetinę veiklą',
      price: '€550',
      features: [
        'Pasirinktas paruoštas dizainas',
        '1-10 puslapiai',
        'Individualios spalvos',
        'Informacijos patalpinimas',
        'Mobiliesiems pritaikytas dizainas',
        'Bazinis SEO',
        'El. prekyba',
        '15 prekių įkėlimas nemokamai',
        'Atsiskaitymų pajungimas',
        'Paštomatų/Kurjerių pajungimas',
      ],
      highlighted: true,
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mūsų Kainos</h1>
          <p className="text-xl text-white/70">Pasirinkite tinkamiausią planą savo projektui</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card transform hover:-translate-y-2"
            >
              <div className="space-y-6">
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
                </ul>

                <button className="w-full button-primary py-3 rounded-lg transition-colors duration-300">
                  Užsakyti
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="my-20 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Norite pamatyti mūsų darbus?</h2>
          <p className="text-white/70 mb-8">Peržiūrėkite mūsų sėkmingai įgyvendintus projektus</p>
          <Link 
            to="/projects"
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

export default Pricing;