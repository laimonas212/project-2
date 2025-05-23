import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { CalendarDays, CalendarPlus, Clock, Clock3, MessageCircle, UserCheck } from 'lucide-react';
import CTA from '../components/CTA'; // Make sure CTA.tsx has the 'small' prop implemented
import ParticlesBackground from '../components/ParticlesBackground';
import Maps from '../components/Maps'; // Ensure this Maps.tsx uses the updated loading logic

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
  const navigate = useNavigate();

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
    setFormData((prev) => ({ ...prev, [name]: value }));
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

    if (!validate()) return;

    let myForm = document.getElementById("contact-form") as HTMLFormElement;
    let netlifyFormData = new FormData(myForm); // Use new FormData instance for fetch

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(netlifyFormData as any).toString(),
    })
      .then(() => {
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
          setFormData({ name: '', email: '', phone: '', message: '' });
          setErrors({});
          navigate('/kontaktai');
          myForm.reset();
        });
      })
      .catch((error) => {
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
    <div className="pt-4 md:pt-36 relative min-h-screen flex flex-col justify-between">
      <ParticlesBackground />

      {/* Gradient Overlays */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.15)_0%,transparent_50%)]" />
      </div>

      <Helmet>
        <title>Kontaktai - Susisiekite su mumis | Amberweb</title>
        <meta name="description" content="Susisiekite su mumis užklausti klausimų, gauti informaciją ar užsisakyti paslaugas." />
        <link rel="canonical" href="https://amberweb.lt/kontaktai" />
      </Helmet>

      <div className="mx-auto relative z-10 w-full max-w-5xl px-4 pt-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              // Gradient border trick: outer div with gradient, inner div with solid background
              className="relative mx-auto rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-electric-blue to-purple-500 p-[1px]"
            >
              <div className="flex flex-col p-6 bg-dark-surface rounded-t-lg h-full w-full relative"> {/* Added relative for sticky positioning */}
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
                            className={`bg-gray-800 text-electric-blue border rounded-lg py-2 px-4 w-full focus:ring focus:ring-blue-500 placeholder-gray-500 ${errors[field as keyof Errors] ? 'border-red-500' : 'border-gray-700' // Changed error border color to red for better visibility
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
                            className={`bg-gray-800 text-electric-blue border rounded-lg py-2 px-4 w-full focus:ring focus:ring-blue-500 placeholder-gray-500 ${errors[field as keyof Errors] ? 'border-red-500' : 'border-gray-700' // Changed error border color to red
                              }`}
                          />
                        )}
                        {errors[field as keyof Errors] && <p className="text-red-500 text-sm mt-1">{errors[field as keyof Errors]}</p>} {/* Changed error text color to red */}
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

              {/* Sticky CTA block for the form */}
              <div className="sticky bottom-0 left-0 right-0 z-20 bg-dark-surface backdrop-blur-sm p-4 pb-6 rounded-b-lg border-t border-gray-700">
                <CTA
                  title="Nepatinka formos?"
                  subtitle="Paskambinkite – pasikalbėsime telefonu!"
                  buttonText="Skambinti"
                  link="tel:+37061118874"
                  small={true}
                />
              </div>
            </motion.div>

          </div>
          <div className='flex flex-col justify-between gap-8 '>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }} className='rounded-lg shadow-lg bg-gradient-to-r from-electric-blue to-purple-500 p-[1px]'>
              
              <div className="bg-dark-surface rounded-lg w-full shadow-xl p-6">
                <h2 className="text-xl font-bold mb-6 text-electric-blue">Darbo laikas</h2>

                <div className="flex flex-col gap-4 text-left text-sm justify-center">
                  <div className="flex items-center gap-3 text-white/70">
                    <CalendarDays className="w-5 h-5 text-electric-blue" />
                    <span>Pirmadienis – Penktadienis: 10:00 – 18:00</span>
                  </div>

                  <div className="flex items-center gap-3 text-white/70">
                    <CalendarPlus className="w-5 h-5 text-electric-blue" />
                    <span>Šeštadienis – Sekmadienis: Tik susitarus</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <Maps />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontaktai;