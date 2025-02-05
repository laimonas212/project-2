export default function Kontaktai() {
  return (
    <div className="pt-36 mb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Parašykite mums</h1>
          <p className="text-lg text-white/70">
            Turite klausimų? Parašykite mums ir mes su Jumis susisieksime.
          </p>
        </div>

        {/* Hidden form for Netlify detection */}
        <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message" />
        </form>

        <div className="max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg">
          <div className="p-6 bg-dark-surface">
            <h2 className="text-xl font-bold mb-4">Užklausos forma</h2>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit="submit"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Jūsų vardas"
                  className="bg-gray-800 text-white border rounded-lg py-2 px-4 w-full"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="El. paštas"
                  className="bg-gray-800 text-white border rounded-lg py-2 px-4 w-full"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Telefono numeris"
                  className="bg-gray-800 text-white border rounded-lg py-2 px-4 w-full"
                />
                <textarea
                  name="message"
                  placeholder="Žinutė"
                  rows={4}
                  className="bg-gray-800 text-white border rounded-lg py-2 px-4 w-full"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg w-full"
                >
                  Siųsti
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
