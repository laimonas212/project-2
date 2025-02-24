import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Salygos: React.FC = () => {
    return (
        <div className="pt-24 min-h-auto mt-4 mb-24 bg-background text-gray-800">
            <Helmet>
                <title>Sąlygos | Amberweb</title>
                <meta name="description" content="Amberweb sąlygos. Sutikdami su šiomis sąlygomis, Jūs patvirtinate, kad naudosite svetainę teisėtai ir nesiekiate pažeisti mūsų ar kitų asmenų teisių." />
            </Helmet>
            <div className="container mx-auto px-6 md:px-12">
                <h1 className="text-3xl md:text-4xl font-bold text-electric-blue mb-8">Sąlygos</h1>

                <section className="mb-12">
                    <p className="  leading-relaxed text-white/70">
                        Bendroji informacija
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-electric-blue mb-4">Naudojimosi svetaine sąlygos</h2>
                    <ul className="text-white/70 text-sm leading-relaxed list-disc pl-6 space-y-4">
                        <li className='list-disc'>
                            Svetainėje pateikiama informacija skirta tik Jums, kaip klientui, užsakyti paslaugas.
                        </li>
                        <li className='list-disc'>
                            Jūs patvirtinate, kad naudojatės svetaine tik teisėtai ir nesiekiate pažeisti mūsų teisių ar kitų asmenų teisių.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-electric-blue mb-4">Paslaugų teikimo sąlygos</h2>
                    <ul className="text-white/70 text-sm leading-relaxed list-disc pl-6 space-y-4">
                        <li>
                            Mes teikiame internetinių svetainių kūrimo paslaugas pagal individualius užsakymus.
                        </li>
                        <li className='list-disc'>
                            Visos paslaugos ir kainos nurodomos atitinkamose svetainės dalyse, ir mes pasiliekame teisę jas keisti.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-electric-blue mb-4">Intelektinė nuosavybė</h2>
                    <ul className="text-white/70 text-sm leading-relaxed list-disc pl-6 space-y-4">
                        <li className='list-disc'>
                            Visi svetainėje esantys duomenys, įskaitant tekstus, vaizdus ir kitą medžiagą, yra saugomi autorių teisių ir priklauso mūsų įmonei.
                        </li>
                        <li className='list-disc'>
                            Kopijuoti, platinti ar naudoti šią medžiagą komerciniais tikslais be mūsų raštiško sutikimo yra draudžiama.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-electric-blue mb-4">Atsiliepimai ir rekomendacijos</h2>
                    <ul className="text-white/70 text-sm leading-relaxed list-disc pl-6 space-y-4">
                        <li>
                            Mūsų svetainėje galite palikti atsiliepimus ir rekomendacijas apie paslaugas, tačiau turite užtikrinti, kad jie būtų sąžiningi ir nepažeistų kitų asmenų teisių.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-electric-blue mb-4">Atsakomybė ir išimtys</h2>
                    <ul className="text-white/70 text-sm leading-relaxed list-disc pl-6 space-y-4">
                        <li>
                            Mes dedame visas pastangas, kad svetainė veiktų be trikdžių.
                        </li>
                        <li>
                            Mes nesame atsakingi už trečiųjų šalių svetaines, į kurias galite patekti per mūsų nuorodas.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-electric-blue mb-4">Privatumo politika</h2>
                    <ul className="text-white/70 text-sm leading-relaxed list-disc pl-6 space-y-4">
                        <li>
                            Naudodamiesi mūsų svetaine, Jūs sutinkate su mūsų&nbsp;
                            <Link to="/privatumo-politika" className="text-electric-blue hover:underline">
                                Privatumo politika
                            </Link>,
                            kuri paaiškina, kaip renkame ir naudojame Jūsų asmeninę informaciją.
                        </li>
                    </ul>
                </section>

            </div>
        </div>
    );
};

export default Salygos;
