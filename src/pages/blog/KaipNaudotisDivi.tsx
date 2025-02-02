import React from 'react';
import Images from '../../img/Images'

const KaipNaudotisDivi: React.FC = () => {
    return (
        <div className="pt-36 mb-32 min-h-screen bg-gray-900">
            <div className="container text-white/70 mx-auto px-4">
                <h1 className="text-4xl font-bold text-electric-blue mb-6">Kaip naudotis DIVI?</h1>
                <p className="text-lg text-white/70 mb-16">
                    Divi yra viena iš populiariausių ir galingiausių WordPress temų, kuri suteikia galimybę kurti modernias, profesionalias svetaines be jokių programavimo žinių. Pateikiame išsamias instrukcijas, kaip naudotis Divi.
                </p>

                <section className="mb-6">
                    <h4 className="text-2xl font-semibold text-electric-blue">1. Įdiegimas ir aktyvavimas</h4>
                    <p className="text-white/70">
            Norėdami pradėti naudoti Divi, pirmiausia turite įdiegti Divi temą savo WordPress svetainėje. Tai galite padaryti atsisiųsdami temą iš „Elegant Themes“ svetainės ir įkeldami ją į savo WordPress. Įdiegus, aktyvuokite temą per „Appearance &gt; Themes“ meniu.
                    </p>
                </section>

                <section className="mb-6">
                    <h4 className="text-2xl font-semibold text-electric-blue">2. Divi Builder aktyvavimas</h4>
                    <p className="text-white/70">
                        Divi Builder yra galingas įrankis, leidžiantis kurti puslapius ir įrašus su drag-and-drop funkcionalumu. Po Divi temos aktyvavimo, galite įjungti Divi Builder paspaudę „Enable Divi Builder“ kai kuriate ar redaguojate puslapį. Šis įrankis leidžia lengvai pridėti sekcijas, eilutes ir modulius.
                    </p>
                </section>

                <section className="mb-6">
                    <h4 className="text-2xl font-semibold text-electric-blue">3. Sekcijos, eilutės ir moduliai</h4>
                    <p className="text-white/70">
                        Divi svetainių kūrimas yra pagrįstas trimis pagrindiniais elementais: sekcijomis, eilutėmis ir moduliais.
                        <ul className="list-disc pl-5">
                            <li><strong>Sekcijos</strong> - tai didžiausi dizaino blokai, kurie suskirsto puslapį į skirtingas sritis.</li>
                            <li><strong>Eilutės</strong> - tai horizontali grupė, kuri talpina modulius. Galite pasirinkti skirtingus stulpelių išdėstymus.</li>
                            <li><strong>Moduliai</strong> - tai komponentai, kuriuos galite pridėti į eilutes, pvz., tekstai, mygtukai, nuotraukos, formos ir kt.</li>
                        </ul>
                    </p>
                </section>

                <section className="mb-6">
                    <h4 className="text-2xl font-semibold text-electric-blue">4. Modulių pritaikymas ir redagavimas</h4>
                    <p className="text-white/70">
                        Kiekvienas modulis gali būti redaguojamas tiesiogiai per nustatymus. Paspaudę ant modulio, galėsite keisti jo turinį (tekstą, nuotraukas, nuorodas), išvaizdą (spalvas, šriftus) ir funkcijas (pvz., animacijas, efektus). Divi taip pat leidžia pritaikyti dizainą naudojant tiesioginius stilizavimo įrankius.
                    </p>
                </section>

                <section className="mb-6">
                    <h4 className="text-2xl font-semibold text-electric-blue">5. Išdėstymo kūrimas</h4>
                    <p className="text-white/70">
                        Divi suteikia galimybę kurti labai pritaikytus išdėstymus be jokių programavimo žinių. Pasirinkite eilutes su skirtingais stulpelių išdėstymais, kad sukurkite norimą struktūrą. Galite paspausti ant kiekvieno modulio ir pakeisti jo išdėstymą, kad jis atitiktų jūsų poreikius.
                    </p>
                </section>

                <section className="mb-6">
                    <h4 className="text-2xl font-semibold text-electric-blue">6. Pritaikymas mobiliesiems įrenginiams</h4>
                    <p className="text-white/70">
                        Divi leidžia lengvai pritaikyti svetainės dizainą mobiliesiems įrenginiams. Kai redaguojate puslapį, galite perjungti į mobilųjį peržiūros režimą ir koreguoti dizainą tik mobiliesiems, kad jis būtų tinkamas mažesniems ekranams.
                    </p>
                </section>

                <section className="mb-6">
                    <h4 className="text-2xl font-semibold text-electric-blue">7. Išsaugojimas ir publikavimas</h4>
                    <p className="text-white/70">
                        Kai baigsite kurti puslapį, galite jį išsaugoti ir publikuoti. Paspaudę „Publish“ mygtuką, jūsų svetainė bus matoma visiems. Be to, galite naudoti „Save Draft“ funkciją, jei norite išsaugoti puslapį vėlesniam redagavimui.
                    </p>
                </section>

                <section className="mb-6">
                    <h4 className="text-2xl font-semibold text-electric-blue">8. Atnaujinimai ir palaikymas</h4>
                    <p className="text-white/70">
                        Divi yra nuolat atnaujinama ir suteikia vartotojams naujas funkcijas bei patobulinimus. Įsitikinkite, kad jūsų tema ir Divi Builder yra visada atnaujinti, kad galėtumėte pasinaudoti visomis naujausiomis galimybėmis.
                    </p>
                </section>

                <img src={Images.logos.divi} alt="WooCommerce" className="mx-auto h-16 mt-24" />

                <p className="mt-4 pb-24 text-lg">
                    Išsamesnė informacija: <a href="https://www.elegantthemes.com/documentation/divi/visual-builder/" className="text-electric-blue underline">DIVI dokumentacija</a>
                </p>
            </div>
        </div>
    );
};

export default KaipNaudotisDivi;
