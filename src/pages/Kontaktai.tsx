import React, { useState } from 'react';
import { motion } from 'framer-motion';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ErrorMessages = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const Kontaktai: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<ErrorMessages>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = (): ErrorMessages => {
    let validationErrors: ErrorMessages = {};

    if (!formData.name.trim()) {
      validationErrors.name = 'Vardas yra privalomas.';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'El. paštas yra privalomas.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      validationErrors.email = 'Netinkamas el. pašto adresas.';
    }

    if (!formData.phone.trim()) {
      validationErrors.phone = 'Telefono numeris yra privalomas.';
    } else if (!/^\+?[0-9\s-]+$/.test(formData.phone)) {
      validationErrors.phone = 'Netinkamas telefono numeris.';
    }

    if (!formData.message.trim()) {
      validationErrors.message = 'Laukelis negali būti tuščias.';
    }

    return validationErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare form data
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('access_key', 'd1a4724e-cee7-43da-85b8-57dfa121a7b2');
      formDataToSubmit.append('name', formData.name);
      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('phone', formData.phone);
      formDataToSubmit.append('message', formData.message);

      // Send form data
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSubmit,
      });

      const result = await response.json();

      if (result.success) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        alert('Jūsų žinutė išsiųsta sėkmingai!');
      } else {
        alert('Įvyko klaida siunčiant žinutę. Prašome bandyti dar kartą.');
      }
    } catch (error) {
      alert('Įvyko klaida siunčiant žinutę. Prašome bandyti dar kartą.');
    } finally {
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
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Jūsų vardas"
                  value={formData.name}
                  onChange={handleChange}
                  className={`bg-gray-800 text-white border ${errors.message
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
                  className={`bg-gray-800 text-white border ${errors.message
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
                  className={`bg-gray-800 text-white border ${errors.message
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
              {/* <div className="h-captcha" data-captcha="true"></div> */}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Kontaktai;
