import { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2"; // Import SweetAlert2

const Kontaktai = () => {
  const [formData, setFormData] = useState<{ name: string; email: string; phone: string; message: string }>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string; message?: string }>({});

  const validate = () => {
    let newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = "Įveskite vardą";
    if (!formData.email.includes("@")) newErrors.email = "Neteisingas el. pašto formatas";
    if (!/^\+?\d{7,}$/.test(formData.phone)) newErrors.phone = "Neteisingas telefono numeris";
    if (!formData.message.trim()) newErrors.message = "Žinutė negali būti tuščia";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Trigger SweetAlert success message with custom styling
      Swal.fire({
        icon: 'success',
        title: 'Jūsų žinutė sėkmingai išsiųsta!',
        showConfirmButton: false,
        timer: 5000, // Alert disappears after 5 seconds
        background: '#12121a',
        customClass: {
          title: 'text-white/70', // Set the text color to white/70
        }
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };


  return (
    <div className="pt-36 mb-24">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-electric-blue">Parašykite mums</h1>
          <p className="text-lg text-white/70">Turite klausimų? Parašykite mums ir mes su Jumis susisieksime.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg">
          <div className="p-6 bg-dark-surface">
            <h2 className="text-xl font-bold mb-4 text-electric-blue">Užklausos forma</h2>
            <form name="contact-form" method="POST" action="/kontaktai" data-netlify="true" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact-form" />

              <div className="grid grid-cols-1 gap-4">
                {["name", "email", "phone"].map((field) => (
                  <div key={field}>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      placeholder={field === "name" ? "Jūsų vardas" : field === "email" ? "El. paštas" : "Telefono numeris"}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      className={`bg-gray-800 text-electric-blue border ${errors[field as keyof typeof errors] ? "border-electric-blue" : "border-gray-700"} focus:border-blue-500 rounded-lg py-2 px-4 focus:ring focus:ring-blue-500 placeholder-gray-500 w-full`}
                    />
                    {errors[field as keyof typeof errors] && <p className="text-electric-blue text-sm mt-1">{errors[field as keyof typeof errors]}</p>}
                  </div>
                ))}

                <div>
                  <textarea
                    name="message"
                    placeholder="Žinutė"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`bg-gray-800 text-electric-blue border ${errors.message ? "border-electric-blue" : "border-gray-700"} focus:border-blue-500 rounded-lg py-2 px-4 focus:ring focus:ring-blue-500 placeholder-gray-500 w-full`}
                  />
                  {errors.message && <p className="text-electric-blue text-sm mt-1">{errors.message}</p>}
                </div>

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
