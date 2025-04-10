import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { Clock3, MessageCircle, UserCheck } from 'lucide-react';

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
    const { name, value } = e.target;

    // Update the form data
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate only the field being changed
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value)
    }));
  };

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "name":
        return value.trim() ? undefined : "Įveskite savo vardą";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? undefined : "Įveskite galiojantį el. paštą";
      case "phone":
        return /^\+?\d{7,15}$/.test(value) ? undefined : "Įveskite galiojantį telefono numerį";
      case "message":
        return value.trim() ? undefined : "Parašykite žinutę";
      default:
        return undefined;
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!validate()) return; // Skip submission if validation fails

    let myForm = document.getElementById("contact-form") as HTMLFormElement;
    let formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
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
            popup: 'bg-dark-surface text-electric-blue',
            title: 'text-electric-blue',
            icon: 'text-green-500',
            confirmButton: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-purple-500 hover:to-blue-500'
          }
        }).then(() => {
          // Reset form data state and errors
          setFormData({ name: '', email: '', phone: '', message: '' });
          setErrors({}); // Clear any errors
          navigate('/kontaktai'); // Redirect to the same page (or another)
          myForm.reset(); // Reset the form element's values
        });
      })
      .catch((error) => {
        // Show error message if fetch fails
        Swal.fire({
          icon: 'error',
          title: 'Įvyko klaida',
          text: 'Prašome pabandyti dar kartą.',
          confirmButtonText: 'Gerai',
          background: '#12121a',
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
      {/* Helmet component for page title and meta */}
      <Helmet>
        <title>Kontaktai - Susisiekite su mumis | Amberweb</title>
        <meta name="description" content="Susisiekite su mumis užklausti klausimų, gauti informaciją ar užsisakyti paslaugas." />
      </Helmet>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Parašykite mums</h1>
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
            <h2 className="text-xl font-bold mb-4 text-electric-blue">Užklausos forma</h2>
            <form
              id="contact-form"
              name="contact-form"
              method="POST"
              action="/kontaktai"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={submitHandler}
            >
              {/* Hidden form-name for Netlify */}
              <input type="hidden" name="form-name" value="contact-form" />

              {/* Honeypot field */}
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human:
                  <input name="bot-field" />
                </label>
              </p>

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
                        required
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
                        required
                        value={formData[field as keyof FormData]}
                        onChange={handleChange}
                        className={`bg-gray-800 text-electric-blue border rounded-lg py-2 px-4 w-full focus:ring focus:ring-blue-500 placeholder-gray-500 ${errors[field as keyof Errors] ? 'border-electric-blue' : 'border-gray-700'
                          }`}
                      />
                    )}
                    {errors[field as keyof Errors] && <p className="text-electric-blue text-sm mt-1">{errors[field as keyof Errors]}</p>}
                  </div>
                ))}

                <button type="submit" className="button-primary">Siųsti užklausą</button>
              </div>
            </form>

            <div className="mt-12 text-white/80 text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                <div className="flex flex-col items-center">
                  <MessageCircle size={32} className="text-electric-blue mb-2" />
                  <p>Greitas ir aiškus atsakymas į Jūsų klausimus.</p>
                </div>
                <div className="flex flex-col items-center">
                  <UserCheck size={32} className="text-electric-blue mb-2" />
                  <p>Asmeniškai pritaikytas pasiūlymas pagal Jūsų poreikius.</p>
                </div>
                <div className="flex flex-col items-center">
                  <Clock3 size={32} className="text-electric-blue mb-2" />
                  <p>14+ metų patirtis – žinome, ką darome.</p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Kontaktai;
