import Images from '../../img/Images';
import React from 'react';

const WoocommerceNaujasProduktas: React.FC = () => {
    return (
        <div className="pt-36 mb-32 min-h-screen bg-gray-900">
            <div className="container text-white/70 mx-auto px-4">
                <h1 className="text-4xl font-bold text-electric-blue mb-6">Naujo produkto kūrimas WooCommerce</h1>
                <p className="text-lg text-white/70 mb-16">
                    Jei norite pridėti naują produktą į savo WooCommerce parduotuvę, sekite šiuos paprastus žingsnius.
                    Šiame vadove paaiškinsime, kaip sukurti fizinius ir skaitmeninius produktus.
                </p>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-electric-blue">Naujo produkto pridėjimas</h2>
                    <p className="mb-4 text-lg text-white/70">Norėdami pridėti naują produktą:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>Prieš pradėdami, eikite į Prietaisų skydelis &gt; WooCommerce &gt; Produktai.</li>
                        <li>Spustelėkite „Pridėti naują“ viršuje.</li>
                        <li>Įveskite produkto pavadinimą ir aprašymą.</li>
                    </ol>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-electric-blue">Produkto informaciją</h2>
                    <p className="mb-4 text-lg text-white/70">Kiekvienam produktui reikės įvesti šią informaciją:</p>
                    <ul className="list-decimal pl-5 space-y-2">
                        <li>Produkto aprašymas – trumpas arba išsamus aprašymas apie jūsų produktą.</li>
                        <li>Produkto kaina ir nuolaidos (jei taikoma).</li>
                        <li>Produkto paveikslėliai ir galerija, kad klientai galėtų matyti, kaip produktas atrodo.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-electric-blue">Produkto tipas ir inventorius</h2>
                    <p className="mb-4 text-lg text-white/70">Pasirinkite produkto tipą ir nustatykite inventorių:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>Pasirinkite „Fizinis produktas“ arba „Skaitmeninis produktas“ pagal tai, kas tinka.</li>
                        <li>Jei tai fizinis produktas, galite nustatyti sandėlio kiekį ir aprašyti, kokį svorį jis turi.</li>
                    </ol>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-electric-blue">Produkto kategorijos ir žymos</h2>
                    <p className="mb-4 text-lg text-white/70">
                        Kategorijos ir žymos padės klientams lengviau rasti jūsų produktus parduotuvėje.
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>Pasirinkite atitinkamą kategoriją, kad produktas būtų rodomas teisingoje grupėje.</li>
                        <li>Galite sukurti ir priskirti žymas, kad produktai būtų lengviau randami pagal paiešką.</li>
                    </ol>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-electric-blue">Produkto kaina ir mokesčiai</h2>
                    <p className="mb-4 text-lg text-white/70">
                        Nustatykite produkto kainą ir mokesčius (jei taikoma) pagal savo parduotuvės reikalavimus.
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>Įveskite produkto kainą laukelyje „Pagrindinė kaina“.</li>
                        <li>Jei taikoma nuolaida, galite nustatyti „Akcijos kainą“.</li>
                    </ol>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-electric-blue">Produkto pristatymas</h2>
                    <p className="mb-4 text-lg text-white/70">
                        Jei tai fizinis produktas, reikia nurodyti jo pristatymo informaciją.
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>Pasirinkite produkto svorį ir matmenis, kad gautumėte tikslų pristatymo apskaičiavimą.</li>
                        <li>Pasirinkite pristatymo klasę, jei norite suteikti specialius pristatymo įkainius tam tikriems produktams.</li>
                    </ol>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-electric-blue">Produkto paskelbimas</h2>
                    <p className="mb-4 text-lg text-white/70">Kai visos informacijos laukeliai užpildyti, spustelėkite „Paskelbti“ ir produktas bus matomas jūsų parduotuvėje.</p>
                </section>

                {/* add woo logo from Images.woo flex center */}
                <img src={Images.logos.wooWhite} alt="WooCommerce" className="mx-auto h-16 mt-24" />

                <p className="mt-4 pb-24 text-lg">
                    Daugiau informacijos rasite: <a href="https://docs.woocommerce.com/document/managing-products/" className="text-electric-blue underline">WooCommerce dokumentacija</a>.
                </p>
            </div>
        </div>
    );
};

export default WoocommerceNaujasProduktas;
