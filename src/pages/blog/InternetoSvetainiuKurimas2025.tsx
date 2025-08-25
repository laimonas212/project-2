import React from 'react';
import Images from '../../img/Images';
import CTA from '../../components/CTA';
import BlogNavigation from '../../components/BlogNavigation';
import blogEntries from '../../components/blogEntries';
import { Helmet } from 'react-helmet-async';

const entry = blogEntries.find((e) => e.id === "interneto-svetainiu-kurimas-2025");

const InternetoSvetainiuKurimas2025 = () => {
    return (
      <div className="pt-36 min-h-screen">
        <Helmet>
          <title>
            Interneto svetainių kūrimas 2025 metais: kaip sukurti sėkmingą
            projektą? | Amberweb
          </title>
          <meta
            name="description"
            content="Ieškote profesionalaus interneto svetainių kūrimo? Sužinokite svarbiausius žingsnius, kainos veiksnius ir kaip pasirinkti tinkamą partnerį savo sėkmingam interneto projektui 2025 metais."
          />
          <link rel="canonical" href={`https://amberweb.lt${entry?.url}`} />
          <script type="application/ld+json">
            {`
                        {
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": "Interneto svetainių kūrimas 2025 metais: kaip sukurti sėkmingą projektą?",
                        "description": "Ieškote profesionalaus interneto svetainių kūrimo? Sužinokite svarbiausius žingsnius, kainos veiksnius ir kaip pasirinkti tinkamą partnerį savo sėkmingam interneto projektui 2025 metais.",
                        "author": {
                            "@type": "Organization",
                            "name": "Amberweb"
                        },
                        "datePublished": "2025-05-01",
                        "dateModified": "2025-05-01",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://amberweb.lt/interneto-svetainiu-kurimas-2025"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Amberweb",
                            "logo": {
                            "@type": "ImageObject",
                            "url": "https://amberweb.lt/images/logoInWhite.jpg"
                            }
                        }
                        }
                        `}
          </script>
        </Helmet>
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(60,80,200,0.25)_0%,transparent_70%)]" />
        </div>

        <div className="container relative max-w-screen-lg text-white/80 mx-auto px-4">
          <div className="w-full pb-8">
            <img
              src={Images.blog.svetainiuKurimas2025}
              alt="Interneto svetainių kūrimas 2025 metais"
              className="w-full h-auto bg-gradient-to-r from-electric-blue to-neon-purple pt-[2px] rounded-b-lg"
            />
          </div>
          <div className="mb-8 pb-8 card">
            <h1 className="text-4xl font-bold text-electric-blue mb-12">
              Interneto svetainių kūrimas 2025 metais: kaip sukurti sėkmingą
              projektą?
            </h1>

            <p className="text-white/70 mb-6">
              Šiandien, kai skaitmeninė erdvė yra tapusi neatsiejama verslo
              dalimi, kokybiška interneto svetainė yra ne tik vizitinė kortelė,
              bet ir galingas įrankis, padedantis pritraukti naujus klientus,
              stiprinti prekės ženklą ir didinti pardavimus. 2025 metais
              sėkmingas interneto svetainių kūrimas reikalauja ne tik modernaus
              dizaino ir patogaus naudojimo, bet ir strateginio požiūrio bei
              kruopštaus planavimo.
            </p>

            <h2 className="text-2xl font-semibold  mb-4">
              Kodėl verta investuoti į kokybišką interneto svetainių kūrimą?
            </h2>
            <ul className="pl-4">
              <li className="text-white/70 mb-4 list-item list-disc">
                <strong>Profesionalus įvaizdis:</strong> Aukštos kokybės
                svetainė sukuria patikimą ir profesionalų jūsų verslo įvaizdį.
              </li>
              <li className="text-white/70 mb-4 list-item list-disc">
                <strong>Klientų pritraukimas:</strong> Optimizuota ir patraukli
                svetainė efektyviai pritraukia potencialius klientus iš paieškos
                sistemų ir kitų kanalų.
              </li>
              <li className="text-white/70 mb-4 list-item list-disc">
                <strong>Pardavimų didinimas:</strong> Patogi ir funkcionali
                svetainė gali tiesiogiai prisidėti prie pardavimų augimo, ypač
                jei planuojate vykdyti elektroninę komerciją.
              </li>
              <li className="text-white/70 mb-4 list-item list-disc">
                <strong>Konkurencinis pranašumas:</strong> Profesionaliai
                sukurta svetainė gali padėti jums išsiskirti iš konkurentų ir
                pritraukti daugiau dėmesio.
              </li>
              <li className="text-white/70 mb-4 list-item list-disc">
                <strong>Patogi komunikacija:</strong> Svetainė leidžia lengvai
                komunikuoti su klientais, teikti informaciją ir atsakyti į jų
                klausimus.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold  mb-4">
              Pagrindiniai interneto svetainių kūrimo etapai 2025 metais
            </h2>
            <p className="text-white/70 mb-6">
              Sėkmingas interneto svetainės kūrimas susideda iš kelių svarbių
              etapų, kurių kiekvienas reikalauja kruopštaus planavimo ir
              įgyvendinimo:
            </p>
            <ul className="pl-4">
              <li className="text-white/70 mb-4 list-item list-disc">
                <strong>Planavimas ir strategija:</strong> Pirmiausia būtina
                aiškiai apibrėžti svetainės tikslus, tikslinę auditoriją,
                reikiamą funkcionalumą ir turinį.
              </li>
              <li className="text-white/70 mb-4 list-item list-disc">
                <strong>Dizaino kūrimas (UX/UI):</strong> Kuriama patogi
                vartotojo sąsaja (UI) ir užtikrinama puiki vartotojo patirtis
                (UX), atsižvelgiant į naujausias dizaino tendencijas ir mobilųjų
                įrenginių pritaikymą.
              </li>
              <li className="text-white/70 mb-4 list-item list-disc">
                <strong>Turinio paruošimas:</strong> Kokybiškas ir aktualus
                turinys yra svetainės pagrindas. Ruošiami tekstai, nuotraukos,
                video ir kita reikalinga informacija.
              </li>
              <li className="text-white/70 mb-4 list-item list-disc">
                <strong>Techninis įgyvendinimas:</strong> Pasirenkama tinkama
                platforma (pvz., WordPress), atliekami programavimo darbai,
                integruojamas reikiamas funkcionalumas.
              </li>
              <li className="text-white/70 mb-4 list-item list-disc">
                <strong>Testavimas ir paleidimas:</strong> Prieš paleidžiant
                svetainę, atliekami kruopštūs testavimai, siekiant užtikrinti
                jos stabilų ir sklandų veikimą.
              </li>
              <li className="text-white/70 mb-4 list-item list-disc">
                <strong>Tolesnis palaikymas ir optimizavimas:</strong> Po
                paleidimo svarbu nuolat prižiūrėti svetainę, atnaujinti turinį
                ir vykdyti optimizavimo veiksmus (įskaitant SEO), kad būtų
                užtikrintas jos matomumas ir efektyvumas.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold  mb-4">
              Kas lemia interneto svetainių kūrimo kainą Lietuvoje 2025 m.?
            </h2>
            <p className="text-white/70 mb-6">
              Interneto svetainių kūrimo kaina gali labai varijuoti priklausomai
              nuo daugelio veiksnių:
            </p>
            <ul className="pl-4">
              <li className="text-white/70 mb-4 list-item list-disc">
                <strong>Svetainės tipas ir sudėtingumas:</strong> Paprasta
                reprezentacinė svetainė kainuos mažiau nei sudėtinga elektroninė
                parduotuvė ar specializuotas portalas.
              </li>
              <li className="text-white/70 mb-4 list-item list-disc">
                <strong>Dizaino unikalumas:</strong> Individualus dizainas
                kainuos brangiau nei šablono pritaikymas.
              </li>
              <li className="text-white/70 mb-4 list-item list-disc">
                <strong>Funkcionalumas:</strong> Kuo daugiau specialių funkcijų
                (pvz., registracijos sistemos, mokėjimo integracijos,
                interaktyvūs elementai), tuo didesnė bus kaina.
              </li>
              <li className="text-white/70 mb-4 list-item list-disc">
                <strong>Puslapių skaičius:</strong> Daugiau puslapių reiškia
                daugiau darbo.
              </li>
              <li className="text-white/70 mb-4 list-item list-disc">
                <strong>Papildomos integracijos:</strong> Integracijos su el.
                pašto rinkodaros platformomis ir kitomis sistemomis gali
                padidinti kainą.
              </li>
              <li className="text-white/70 mb-4 list-item list-disc">
                <strong>Paslaugų teikėjo patirtis ir reputacija:</strong>{" "}
                Patyrusių ir gerai žinomų agentūrų ar specialistų paslaugos
                dažniausiai kainuoja brangiau.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold  mb-4">
              Kaip pasirinkti patikimą interneto svetainių kūrimo partnerį?
            </h2>
            <p className="text-white/70 mb-6">
              Norint, kad jūsų investicija į interneto svetainę atsipirktų,
              labai svarbu pasirinkti patikimą ir profesionalų kūrimo partnerį.
              Štai keletas patarimų, į ką reikėtų atkreipti dėmesį:
            </p>
            <ul className="pl-4 mb-6">
              <li className="text-white/70 mb-4 list-item list-disc">
                <strong>Portfolio ir atsiliepimai:</strong> Peržiūrėkite
                potencialių partnerių atliktus darbus ir klientų atsiliepimus.
                Tai padės susidaryti įspūdį apie jų kompetenciją ir darbo
                kokybę.
              </li>
              <li className="text-white/70 mb-4 list-item list-disc">
                <strong>Patirtis ir specializacija:</strong> Išsiaiškinkite,
                kiek laiko įmonė ar specialistas dirba šioje srityje ir ar jie
                turi patirties kuriant būtent tokio tipo svetaines, kokios jums
                reikia.
              </li>
              <li className="text-white/70 mb-4 list-item list-disc">
                <strong>Komunikacija ir supratimas:</strong> Patikimas partneris
                turėtų aiškiai komunikuoti, suprasti jūsų poreikius ir viziją
                bei gebėti patarti.
              </li>
              <li className="text-white/70 mb-4 list-item list-disc">
                <strong>Sutartis ir garantijos:</strong> Prieš pradedant darbus,
                būtina sudaryti aiškią sutartį, kurioje būtų nurodytos
                paslaugos, kaina, terminai ir kitos svarbios sąlygos.
                Pasidomėkite, ar teikiamos kokios nors garantijos.
              </li>
              <li className="text-white/70 mb-4 list-item list-disc">
                <strong>Palaikymas po paleidimo:</strong> Pasidomėkite, ar
                partneris teikia svetainės priežiūros ir palaikymo paslaugas po
                projekto baigimo.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
              Mūsų interneto svetainių kūrimo paslaugos
            </h2>
            <p className="text-white/70 mb-6">
              „Amberweb“ komanda teikia profesionalias interneto svetainių
              kūrimo paslaugas, pritaikytas įvairiems verslo poreikiams. Mes
              deriname kūrybiškumą, naujausias technologijas ir geriausią
              praktiką, kad sukurtume aukštos kokybės, efektyvias ir patrauklias
              interneto svetaines.
            </p>
            <ul className="pl-4">
              <li className="text-white/70 mb-4 list-item list-disc">
                Reprezentacinės svetainės
              </li>
              <li className="text-white/70 mb-4 list-item list-disc">
                Verslo svetainės
              </li>
              <li className="text-white/70 mb-4 list-item list-disc">
                Elektroninės parduotuvės
              </li>
              <li className="text-white/70 mb-4 list-item list-disc">
                Portfolio svetainės
              </li>
              <li className="text-white/70 mb-4 list-item list-disc">
                Individualūs sprendimai
              </li>
            </ul>
            <p className="text-white/70 mb-6">
              Mūsų tikslas – ne tik sukurti puikiai atrodančią svetainę, bet ir
              užtikrinti, kad ji veiktų jūsų verslo sėkmei, pritrauktų naujų
              klientų ir padėtų jums augti.
            </p>

            <p className="text-white/70 mb-6">
              Turite idėją savo naujai interneto svetainei?{" "}
              <a href="/kontaktai" className="text-electric-blue underline">
                Susisiekite
              </a>{" "}
              su mumis šiandien ir gaukite nemokamą konsultaciją. Padėsime jums
              žengti pirmą žingsnį link sėkmingo interneto projekto{" "}
              {new Date().getFullYear()} metais.
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

export default InternetoSvetainiuKurimas2025;