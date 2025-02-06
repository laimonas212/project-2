import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Kontaktai = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const navigate = useNavigate(); // for navigation after form submission

  const validate = (): boolean => {
    let newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = 'Įveskite savo vardą';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Įveskite galiojantį el. paštą';
    if (!/^\+?\d{7,15}$/.test(formData.phone)) newErrors.phone = 'Įveskite galiojantį telefono numerį';
    if (!formData.message.trim()) newErrors.message = 'Parašykite žinutę';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validate();
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!validate()) return; // Skip submission if validation fails

    let myForm = document.getElementById("contact-form") as HTMLFormElement;
    let formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(), // `as any` is used to type FormData properly
    })
      .then(() => {
        // Show success message with SweetAlert2
        Swal.fire({
          icon: 'success',
          title: 'Žinutė išsiųsta sėkmingai!',
          text: 'Netrukus su Jumis susisieksime.',
          confirmButtonText: 'Gerai',
          background: '#12121a',
          customClass: {
            popup: 'bg-dark-surface text-electric-blue', // Custom class for the popup
            title: 'text-electric-blue', // Custom class for the header (title)
            icon: 'text-green-500', // Custom class for the icon
            confirmButton: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-purple-500 hover:to-blue-500' // Custom button styles
          }
        }).then(() => {
          // Redirect back to contact form after the success message
          navigate('/kontaktai');
        });
      })
      .catch((error) => {
        // Show error message if fetch fails
        Swal.fire({
          icon: 'error',
          title: 'Įvyko klaida',
          text: 'Prašome pabandyti dar kartą.',
          confirmButtonText: 'Gerai',
          background: '#12121a', // Optional: match your popup theme
          customClass: {
            popup: 'bg-dark-surface text-electric-blue',
            title: 'text-electric-blue',
            icon: 'text-red-500',
            confirmButton: 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-orange-500 hover:to-red-500'
          }
        });
      });
  };


  return (
    <div className="pt-36 mb-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-electric-blue">Parašykite mums</h1>
          <p className="text-lg text-electric-blue/70">
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
            <h2 className="text-xl font-bold mb-4 text-electric-blue">Užklausos forma</h2>
            <form
              id="contact-form"
              name="contact-form"
              method="POST"
              action="/kontaktai"
              data-netlify="true"
              onSubmit={submitHandler}  // Use submitHandler on form submit
            >
              <input type="hidden" name="form-name" value="contact-form" />
              <div className="grid grid-cols-1 gap-4">
                {['name', 'email', 'phone', 'message'].map((field) => (
                  <div key={field}>
                    {field !== 'message' ? (
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        placeholder={
                          field === 'name' ? 'Jūsų vardas' : field === 'email' ? 'El. paštas' : 'Telefono numeris'
                        }
                        value={formData[field as keyof FormData]}
                        onChange={handleChange}
                        className={`bg-gray-800 text-electric-blue border rounded-lg py-2 px-4 w-full focus:ring focus:ring-blue-500 placeholder-gray-500 ${errors[field as keyof Errors] ? 'border-electric-blue' : 'border-gray-700'
                          }`}
                      />
                    ) : (
                      <textarea
                        name={field}
                        placeholder="Žinutė"
                        rows={4}
                        value={formData[field as keyof FormData]}
                        onChange={handleChange}
                        className={`bg-gray-800 text-electric-blue border rounded-lg py-2 px-4 w-full focus:ring focus:ring-blue-500 placeholder-gray-500 ${errors[field as keyof Errors] ? 'border-electric-blue' : 'border-gray-700'
                          }`}
                      />
                    )}
                    {errors[field as keyof Errors] && <p className="text-electric-blue text-sm mt-1">{errors[field as keyof Errors]}</p>}
                  </div>
                ))}
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
