import React from 'react';
import Images from '../../img/Images';
import CTA from '../../components/CTA';
import BlogNavigation from '../../components/BlogNavigation';
import blogEntries from '../../components/blogEntries';

const KlaidosKuriasDaroVerslai = () => {
    return (
        <div className="pt-36 min-h-screen">
            <div className="container text-white/80 mx-auto px-4">
                <div className="mb-8 pb-24">
                    <h1 className="text-4xl font-bold text-electric-blue mb-12">5 klaidos, kurias daro verslai kurdami svetainę</h1>

                    <h3 className="text-white/70 mb-6">Kuriant svetainę verslui, svarbu išvengti dažniausiai pasitaikančių klaidų, kurios gali turėti įtakos svetainės sėkmei, lankytojų patirčiai ir net pardavimams. Štai penkios esminės klaidos, kurių reikėtų vengti.</h3>

                    <h2 className="text-2xl font-semibold  mb-4">1. Neaiški struktūra ir navigacija</h2>
                    <p className="text-white/70 mb-6">Jei lankytojai negali greitai rasti norimos informacijos, jie greitai išeis iš svetainės. Būtina užtikrinti, kad navigacija būtų aiški, logiška ir intuityvi. Kiekvienas puslapis turėtų turėti aiškų tikslą ir lengvai pasiekiamus pagrindinius skyrius. Taip pat svarbu naudoti aiškius meniu pavadinimus, kurie atspindėtų turinį.</p>

                    <h2 className="text-2xl font-semibold  mb-4">2. Lėtas svetainės užkrovimo greitis</h2>
                    <p className="text-white/70 mb-6">Tyrimai rodo, kad lankytojai palieka svetainę, jei ji kraunasi ilgiau nei 3 sekundes. Didelės, neoptimizuotos nuotraukos, per daug įskiepių ar prastas hostingas gali lemti lėtą užkrovimo laiką. Naudokite optimizuotas nuotraukas, greitą serverį ir „caching“ technologijas. Taip pat verta išbandyti Google PageSpeed Insights įrankį, kad pamatytumėte, ką galima pagerinti.</p>

                    <h2 className="text-2xl font-semibold  mb-4">3. Netinkamas dizainas mobiliesiems įrenginiams</h2>
                    <p className="text-white/70 mb-6">Daugiau nei pusė interneto srauto ateina iš mobiliųjų įrenginių, todėl būtina užtikrinti, kad svetainė būtų visiškai pritaikyta mobiliesiems. Jei lankytojai susidurs su nepatogiu naudotojo interfeisu telefone, jie greičiausiai paliks puslapį. Testuokite savo svetainę skirtinguose įrenginiuose ir įsitikinkite, kad visi mygtukai, tekstai ir paveikslėliai yra gerai matomi ir lengvai paspaudžiami.</p>

                    <h2 className="text-2xl font-semibold  mb-4">4. Per daug arba per mažai informacijos</h2>
                    <p className="text-white/70 mb-6">Perkrauta svetainė su begale teksto, mirgančių reklamų ir painių mygtukų gali atbaidyti lankytojus. Kita vertus, jei informacijos per mažai, vartotojas gali nesuprasti, ką jūsų verslas siūlo. Svarbu rasti balansą ir pateikti tik svarbiausią informaciją aiškiai ir patraukliai. Naudokite antraštes, sąrašus ir vizualinius elementus, kad informacija būtų lengvai skaitoma ir suprantama.</p>

                    <h2 className="text-2xl font-semibold  mb-4">5. Nepakankama SEO optimizacija</h2>
                    <p className="text-white/70 mb-6">Net ir gražiausia svetainė nebus naudinga, jei jos niekas neranda. Dažna klaida – ignoruoti SEO (paieškos sistemų optimizavimą). Tinkamai parinkti raktiniai žodžiai, meta aprašymai, greitas užkrovimo laikas ir kokybiškas turinys padės svetainei būti lengviau randamai „Google“ paieškoje. Taip pat svarbu užtikrinti, kad svetainėje yra vidinės nuorodos ir tinkamai naudojamos antraštės (H1, H2, H3), kad paieškos sistemos geriau suprastų svetainės turinį.</p>

                    <p className="text-white/70 mb-6">Išvada:
                        Sėkminga verslo svetainė turi būti greita, aiški, pritaikyta mobiliesiems ir optimizuota paieškos sistemoms. Išvengę šių penkių dažniausių klaidų, galėsite sukurti efektyvesnį ir patrauklesnį puslapį savo verslui. Taip pat svarbu nuolat stebėti svetainės statistiką ir atlikti reikalingus patobulinimus, kad ji atitiktų lankytojų lūkesčius.</p>
                </div>
            </div>
            <BlogNavigation blogEntries={blogEntries} />
            <div className='relative'>
                <CTA />
            </div>
        </div>
    );
};

export default KlaidosKuriasDaroVerslai;
