import React from 'react';

const Slapukai: React.FC = () => {
    return (
        <div className="pt-24 min-h-auto mt-4 mb-24">
            <div className="container mx-auto px-6 md:px-12">
                <h1 className="text-3xl md:text-4xl font-bold text-electric-blue mb-8">Slapukai</h1>
                
                <section className="mb-8">
                    <p className='text-white/70'>
                        Naudodamiesi šia svetaine, Jūs sutinkate, kad mes naudojame slapukus, kad pagerintume naršymo patirtį ir užtikrintume tam tikras funkcijas. Slapukai yra nedideli tekstiniai failai, kurie įrašomi į Jūsų įrenginį, kai lankotės mūsų svetainėje.
                    </p>
                </section>
                
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-electric-blue mb-4">Kokius slapukų mes naudojame?</h2>
                    <p className='text-white/70'>
                        Būtini slapukai - šie slapukai yra būtini, kad svetainė veiktų tinkamai. Jie leidžia naršyti po puslapius, naudotis pagrindinėmis funkcijomis, pvz., kontaktine forma.
                    </p>
                    <p className='text-white/70'>
                        Analitiniai slapukai - mes naudojame Google Analytics slapukus, kad galėtume rinkti informaciją apie Jūsų naršymą mūsų svetainėje. Tai leidžia mums analizuoti, kaip lankytojai naudojasi mūsų svetaine, ir tobulinti jos funkcionalumą.
                    </p>
                    <p className='text-white/70'>
                        Slapukai su sutikimu - mes naudojame CookieYes paslaugą slapukų valdymui. Jūsų sutikimas dėl slapukų naudojimo bus prašomas lankantis mūsų svetainėje. CookieYes leidžia Jums pasirinkti, kuriuos slapukus norite priimti arba atmesti.
                    </p>
                </section>
                
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-electric-blue mb-4">Kaip valdyti slapukus?</h2>
                    <p className='text-white/70'>
                        Jūs turite teisę bet kada valdyti slapukų nustatymus. Jei nesutinkate su slapukų naudojimu, galite pakeisti savo naršyklės nustatymus arba naudoti CookiesBot pateiktas parinktis, kad atšauktumėte slapukų sutikimą arba valdykite savo pasirinkimus.
                    </p>
                </section>
                
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-electric-blue mb-4">Sutikimas su slapukais</h2>
                    <p className='text-white/70'>
                        Naudodamiesi šia svetaine, Jūs sutinkate su mūsų slapukų naudojimu pagal šią politiką. Jei nesutinkate su slapukų naudojimu, galite atsisakyti slapukų naudojimo, tačiau kai kurios svetainės funkcijos gali neveikti tinkamai.
                    </p>
                </section>
            </div>
        </div>
  );
};

export default Slapukai;
