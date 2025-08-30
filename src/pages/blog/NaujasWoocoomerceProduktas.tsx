import CTA from '../../components/CTA';
import Images from '../../img/Images';
import React from 'react';
import BlogNavigation from '../../components/BlogNavigation';
import blogEntries from '../../components/blogEntries';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const entry = blogEntries.find((e) => e.id === "naujas-woocommerce-produktas");

const WoocommerceNaujasProduktas: React.FC = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/blog");
  };
    return (
      <div className="min-h-screen">
        <Helmet>
          <title>Naujo produkto kūrimas WooCommerce | Amberweb</title>
          <meta
            name="description"
            content="Naujo produkto kūrimas WooCommerce. Kaip sukurti naują produktą savo WooCommerce parduotuvėje. Žingsnis po žingsnio instrukcija."
          />
          <link rel="canonical" href={`https://amberweb.lt${entry?.url}`} />
        </Helmet>
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(60,80,200,0.25)_0%,transparent_70%)]" />
        </div>
        <div className="container relative max-w-screen-lg text-white/80 mx-auto px-4">
          <button
            onClick={handleBack}
            className="mb-6 text-sm text-electric-blue hover:underline"
          >
            ← Visi straipsniai
          </button>
          <div className="w-full pb-8">
            <img
              src={Images.blog.newProductWoo}
              alt="5 klaidos, kurias daro verslai kurdami svetainę"
              className="w-full h-auto bg-gradient-to-r from-electric-blue to-neon-purple pt-[2px] rounded-b-lg animate-gradient-x"
            />
          </div>
          <div className="mb-8 pb-8 card">
            <h1 className="text-4xl font-bold text-electric-blue mb-6">
              Naujo produkto kūrimas WooCommerce
            </h1>
            <p className="text-lg text-white/70 mb-16">
              Jei norite pridėti naują produktą į savo WooCommerce parduotuvę,
              sekite šiuos paprastus žingsnius. Šiame vadove paaiškinsime, kaip
              sukurti fizinius ir skaitmeninius produktus.
            </p>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold ">
                Naujo produkto pridėjimas
              </h2>
              <p className="mb-4 text-lg text-white/70">
                Norėdami pridėti naują produktą:
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  Prieš pradėdami, eikite į Prietaisų skydelis &gt; WooCommerce
                  &gt; Produktai.
                </li>
                <li>Spustelėkite „Pridėti naują“ viršuje.</li>
                <li>Įveskite produkto pavadinimą ir aprašymą.</li>
              </ol>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold ">Produkto informaciją</h2>
              <p className="mb-4 text-lg text-white/70">
                Kiekvienam produktui reikės įvesti šią informaciją:
              </p>
              <ul className="list-decimal pl-5 space-y-2">
                <li>
                  Produkto aprašymas – trumpas arba išsamus aprašymas apie jūsų
                  produktą.
                </li>
                <li>Produkto kaina ir nuolaidos (jei taikoma).</li>
                <li>
                  Produkto paveikslėliai ir galerija, kad klientai galėtų
                  matyti, kaip produktas atrodo.
                </li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold ">
                Produkto tipas ir inventorius
              </h2>
              <p className="mb-4 text-lg text-white/70">
                Pasirinkite produkto tipą ir nustatykite inventorių:
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  Pasirinkite „Fizinis produktas“ arba „Skaitmeninis produktas“
                  pagal tai, kas tinka.
                </li>
                <li>
                  Jei tai fizinis produktas, galite nustatyti sandėlio kiekį ir
                  aprašyti, kokį svorį jis turi.
                </li>
              </ol>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold ">
                Produkto kategorijos ir žymos
              </h2>
              <p className="mb-4 text-lg text-white/70">
                Kategorijos ir žymos padės klientams lengviau rasti jūsų
                produktus parduotuvėje.
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  Pasirinkite atitinkamą kategoriją, kad produktas būtų rodomas
                  teisingoje grupėje.
                </li>
                <li>
                  Galite sukurti ir priskirti žymas, kad produktai būtų lengviau
                  randami pagal paiešką.
                </li>
              </ol>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold ">
                Produkto kaina ir mokesčiai
              </h2>
              <p className="mb-4 text-lg text-white/70">
                Nustatykite produkto kainą ir mokesčius (jei taikoma) pagal savo
                parduotuvės reikalavimus.
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Įveskite produkto kainą laukelyje „Pagrindinė kaina“.</li>
                <li>Jei taikoma nuolaida, galite nustatyti „Akcijos kainą“.</li>
              </ol>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold ">Produkto pristatymas</h2>
              <p className="mb-4 text-lg text-white/70">
                Jei tai fizinis produktas, reikia nurodyti jo pristatymo
                informaciją.
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  Pasirinkite produkto svorį ir matmenis, kad gautumėte tikslų
                  pristatymo apskaičiavimą.
                </li>
                <li>
                  Pasirinkite pristatymo klasę, jei norite suteikti specialius
                  pristatymo įkainius tam tikriems produktams.
                </li>
              </ol>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold ">Produkto paskelbimas</h2>
              <p className="mb-4 text-lg text-white/70">
                Kai visos informacijos laukeliai užpildyti, spustelėkite
                „Paskelbti“ ir produktas bus matomas jūsų parduotuvėje.
              </p>
            </section>

            <p className="mt-4 text-lg">
              Daugiau informacijos rasite:{" "}
              <a
                href="https://docs.woocommerce.com/document/managing-products/"
                target="_blank"
                className="text-electric-blue underline"
              >
                WooCommerce dokumentacija
              </a>
              .
            </p>
          </div>
        </div>
        <div className="relative">
          <BlogNavigation blogEntries={blogEntries} />
          <CTA />
        </div>
      </div>
    );
};

export default WoocommerceNaujasProduktas;
