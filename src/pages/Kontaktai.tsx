import { useState } from 'react';
import { motion } from 'framer-motion';

const Kontaktai = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form (simple validation example)
    const newErrors = {
      name: formData.name ? '' : 'Name is required',
      email: formData.email ? '' : 'Email is required',
      phone: formData.phone ? '' : 'Phone number is required',
      message: formData.message ? '' : 'Message is required',
    };
    setErrors(newErrors);

    // Only submit if no errors
    if (!Object.values(newErrors).some((error) => error)) {
      const formDataToSend = new FormData();
      formDataToSend.append('form-name', 'contact');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('message', formData.message);

      try {
        const response = await fetch('/', {
          method: 'POST',
          body: formDataToSend,
        });

        if (response.ok) {
          alert('Form submitted successfully!');
        } else {
          alert('Error submitting the form');
        }
      } catch (error) {
        console.error(error);
        alert('Error submitting the form');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
    }
  };

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
              onSubmit={handleSubmit}
              name="contact"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Jūsų vardas"
                  value={formData.name}
                  onChange={handleChange}
                  className={`bg-gray-800 text-white border ${errors.name
                    ? 'border-electric-blue'
                    : 'border-gray-700 focus:border-blue-500'
                    } rounded-lg py-2 px-4 focus:ring focus:ring-blue-500 placeholder-gray-500 w-full`}
                />
                {errors.name && <p className="text-electric-blue text-sm">{errors.name}</p>}

                <input
                  type="email"
                  name="email"
                  placeholder="El. paštas"
                  value={formData.email}
                  onChange={handleChange}
                  className={`bg-gray-800 text-white border ${errors.email
                    ? 'border-electric-blue'
                    : 'border-gray-700 focus:border-blue-500'
                    } rounded-lg py-2 px-4 focus:ring focus:ring-blue-500 placeholder-gray-500 w-full`}
                />
                {errors.email && <p className="text-electric-blue text-sm">{errors.email}</p>}

                <input
                  type="text"
                  name="phone"
                  placeholder="Telefono numeris"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`bg-gray-800 text-white border ${errors.phone
                    ? 'border-electric-blue'
                    : 'border-gray-700 focus:border-blue-500'
                    } rounded-lg py-2 px-4 focus:ring focus:ring-blue-500 placeholder-gray-500 w-full`}
                />
                {errors.phone && <p className="text-electric-blue text-sm">{errors.phone}</p>}

                <textarea
                  name="message"
                  placeholder="Žinutė"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`bg-gray-800 text-white border ${errors.message
                    ? 'border-electric-blue'
                    : 'border-gray-700 focus:border-blue-500'
                    } rounded-lg py-2 px-4 focus:ring focus:ring-blue-500 placeholder-gray-500 w-full`}
                />
                {errors.message && <p className="text-electric-blue text-sm">{errors.message}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 rounded-lg shadow-lg w-full"
                >
                  {isSubmitting ? 'Siunčiama...' : 'Siųsti'}
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
