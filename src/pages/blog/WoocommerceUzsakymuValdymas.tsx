import Images from '../../img/Images';
import React from 'react';

const WoocommerceUzsakymuValdymas: React.FC = () => {
    return (
        <div className="pt-36 mb-32 min-h-screen bg-gray-900">
            <div className="container text-white/70 mx-auto px-4">
                <h1 className="text-4xl font-bold text-electric-blue mb-6">Užsakymų valdymas WooCommerce</h1>
                <p className="text-lg text-white/70 mb-16">
                    Kai klientas pateikia užsakymą jūsų parduotuvėje, užsakymo informacija bus rodoma WooCommerce užsakymų skiltyje.
                    Šiame vadove aptarsime, kaip peržiūrėti, redaguoti ir valdyti užsakymus.
                </p>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-electric-blue">Užsakymų peržiūra</h2>
                    <p className="mb-4 text-lg text-white/70">Norėdami peržiūrėti užsakymus:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>Eikite į Prietaisų skydelis &gt; WooCommerce &gt; Užsakymai.</li>
                        <li>Čia matysite visus užsakymus su svarbia informacija, tokią kaip užsakymo numeris, data, klientas, suma ir būsena.</li>
                    </ol>
                    <p className="mt-4 text-lg text-white/70">Užsakymo būsena gali būti:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Laukiama apmokėjimo</li>
                        <li>Apdorojamas</li>
                        <li>Išsiųstas</li>
                        <li>Atliktas</li>
                        <li>Atšauktas</li>
                        <li>Nepavykęs</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-electric-blue">Užsakymo peržiūra ir redagavimas</h2>
                    <p className="mb-4 text-lg text-white/70">Norėdami peržiūrėti ar redaguoti užsakymo informaciją:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>Eikite į WooCommerce &gt; Užsakymai ir spustelėkite užsakymą, kurį norite peržiūrėti.</li>
                        <li>Užsakymo puslapyje matysite visą užsakymo informaciją:</li>
                    </ol>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Produkto duomenys</li>
                        <li>Atsiskaitymo ir pristatymo adresas</li>
                        <li>Pastabos</li>
                    </ul>
                    <p className="mt-4 text-lg text-white/70">Jei reikia, galite redaguoti užsakymo būseną, produktų kiekį ar pridėti pastabas.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-electric-blue">Užsakymo būsenos keitimas</h2>
                    <p className="mb-4 text-lg text-white/70">Norėdami keisti užsakymo būseną:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>Užsakymo puslapyje Būsena skiltyje pasirinkite norimą būseną iš išskleidžiamo sąrašo.</li>
                        <li>Spustelėkite Atnaujinti, kad pakeitimas būtų išsaugotas.</li>
                    </ol>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-electric-blue">Kliento pranešimai ir užsakymo pastabos</h2>
                    <p className="mb-4 text-lg text-white/70">
                        Jūs galite pridėti pastabas prie užsakymų, kurios gali būti siunčiamos klientams arba naudojamos tik vidinėje sistemoje.
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>Užsakymo puslapyje eikite į Užsakymo pastabos skyrių.</li>
                        <li>Pasirinkite „Klientui matoma“ arba „Privati pastaba“ ir įrašykite pastabą.</li>
                        <li>Spustelėkite Pridėti, kad išsaugotumėte pastabą.</li>
                    </ol>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-electric-blue">Grąžinimų ir atšaukimų valdymas</h2>
                    <p className="mb-4 text-lg text-white/70">Jei klientas nori grąžinti prekę arba atšaukti užsakymą:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>Atidarykite užsakymą ir spustelėkite Grąžinti šalia prekės, kurią reikia grąžinti.</li>
                        <li>Nurodykite grąžinamos prekės kiekį ir sumą.</li>
                        <li>Pasirinkite, ar norite grąžinti per mokėjimo sistemą, ir spustelėkite Grąžinti.</li>
                    </ol>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-electric-blue">Užsakymų filtravimas ir eksportavimas</h2>
                    <p className="mb-4 text-lg text-white/70">WooCommerce leidžia lengvai filtruoti užsakymus pagal datą, būseną ir kitus kriterijus:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>Eikite į WooCommerce &gt; Užsakymai.</li>
                        <li>Virš užsakymų sąrašo galite pasirinkti filtravimo kriterijus.</li>
                        <li>Norėdami eksportuoti užsakymus, naudokite specialias eksportavimo priemones ar papildinius, kurie leidžia eksportuoti užsakymus į CSV arba kitus formatus.</li>
                    </ol>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-electric-blue">Užsakymo ataskaitos</h2>
                    <p className="mb-4 text-lg text-white/70">Norėdami gauti daugiau įžvalgų apie savo užsakymus ir pardavimus:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>Eikite į WooCommerce &gt; Ataskaitos.</li>
                        <li>Čia rasite įvairias ataskaitas apie pardavimus, klientus ir produktus, kurie padės geriau suprasti parduotuvės veiklą.</li>
                    </ol>
                </section>

                {/* add woo logo from Images.woo flex center*/}
                <img src={Images.logos.wooWhite} alt="WooCommerce" className="mx-auto h-16 mt-24" />

                <p className="mt-4 pb-24 text-lg">
                    Išsamesnė informacija: <a href="https://docs.woocommerce.com/document/managing-orders/" className="text-electric-blue underline">Woocommerce dokumentacija</a>
                </p>
            </div>
        </div>
    );
};

export default WoocommerceUzsakymuValdymas;
