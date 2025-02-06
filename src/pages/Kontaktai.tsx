import { motion } from 'framer-motion';

const Kontaktai = () => {
  return (
    <div className="pt-36 mb-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Parašykite mums</h1>
          <p className="text-lg text-white/70">
            Turite klausimų? Parašykite mums ir mes su Jumis susisieksime.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg"
        >
          <div className="p-6 bg-dark-surface">
            <h2 className="text-xl font-bold mb-4">Užklausos forma</h2>
            <form
              name="contact-form"
              method="POST"
              action="/kontaktai"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact-form" />

              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Jūsų vardas"
                  required
                  className="bg-gray-800 text-white border border-gray-700 focus:border-blue-500 rounded-lg py-2 px-4 focus:ring focus:ring-blue-500 placeholder-gray-500 w-full"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="El. paštas"
                  required
                  className="bg-gray-800 text-white border border-gray-700 focus:border-blue-500 rounded-lg py-2 px-4 focus:ring focus:ring-blue-500 placeholder-gray-500 w-full"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Telefono numeris"
                  required
                  className="bg-gray-800 text-white border border-gray-700 focus:border-blue-500 rounded-lg py-2 px-4 focus:ring focus:ring-blue-500 placeholder-gray-500 w-full"
                />

                <textarea
                  name="message"
                  placeholder="Žinutė"
                  rows={4}
                  required
                  className="bg-gray-800 text-white border border-gray-700 focus:border-blue-500 rounded-lg py-2 px-4 focus:ring focus:ring-blue-500 placeholder-gray-500 w-full"
                />

                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 rounded-lg shadow-lg w-full"
                >
                  Siųsti
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Kontaktai;
