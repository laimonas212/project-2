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
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error on input change
  };

  const validate = (): ErrorMessages => {
    let validationErrors: ErrorMessages = {};

    if (!formData.name.trim()) {
      validationErrors.name = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email address is required.';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      validationErrors.email = 'Invalid email address.';
    }

    if (!formData.phone.trim()) {
      validationErrors.phone = 'Phone number is required.';
    } else if (!/^\+?[0-9\s-]+$/.test(formData.phone)) {
      validationErrors.phone = 'Invalid phone number.';
    }

    if (!formData.message.trim()) {
      validationErrors.message = 'Message cannot be empty.';
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

    // Web3Forms API URL and access key
    const WEB3FORMS_API_URL = 'https://api.web3forms.com/submit';
    const accessKey = 'c7e2ee01-742f-4076-b0cf-8cac80da311e';

    const formDataToSubmit = new FormData();
    formDataToSubmit.append('access_key', accessKey);
    formDataToSubmit.append('name', formData.name);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('phone', formData.phone);
    formDataToSubmit.append('message', formData.message);

    try {
      const response = await fetch(WEB3FORMS_API_URL, {
        method: 'POST',
        body: formDataToSubmit,
      });

      const result = await response.json();

      if (result.success) {
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        alert('Your message has been sent!');
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-white/70">
            Have a question or want to work together?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg"
        >
          <div className="p-6 bg-dark-surface">
            <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4">
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`bg-gray-800 text-white border ${errors.name
                      ? 'border-red-500'
                      : 'border-gray-700 focus:border-blue-500'
                      } rounded-lg py-2 px-4 focus:ring focus:ring-blue-500 placeholder-gray-500 w-full`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-gray-800 text-white border ${errors.email
                      ? 'border-red-500'
                      : 'border-gray-700 focus:border-blue-500'
                      } rounded-lg py-2 px-4 focus:ring focus:ring-blue-500 placeholder-gray-500 w-full`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`bg-gray-800 text-white border ${errors.phone
                      ? 'border-red-500'
                      : 'border-gray-700 focus:border-blue-500'
                      } rounded-lg py-2 px-4 focus:ring focus:ring-blue-500 placeholder-gray-500 w-full`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`bg-gray-800 text-white border ${errors.message
                      ? 'border-red-500'
                      : 'border-gray-700 focus:border-blue-500'
                      } rounded-lg py-2 px-4 focus:ring focus:ring-blue-500 placeholder-gray-500 w-full`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 rounded-lg shadow-lg w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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
