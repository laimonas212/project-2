import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2'; // Import SweetAlert2
import 'sweetalert2/dist/sweetalert2.min.css'; // Import the SweetAlert2 styles

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
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
    subject: 'Nauja kliento užklausa.',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    Swal.fire({
      icon: 'success',
      title: 'Jūsų žinutė išsiųsta sėkmingai!',
      text: 'Artimiausiu metu su Jumis susisieksime.',
      background: "#12121a",
      color: 'rgba(255,255,255,0.7)',
      showConfirmButton: true,
      confirmButtonText: 'Gerai',
      confirmButtonColor: '#4c6ef5',
      timer: 3000, // Auto close after 3 seconds
    });

    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'Nauja kliento užklausa.',
      message: '',
    });

    setIsSubmitting(false);
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
            <form name="contact" netlify>
              <p>
                <label>Name <input type="text" name="name" /></label>
              </p>
              <p>
                <label>Email <input type="email" name="email" /></label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Kontaktai;
