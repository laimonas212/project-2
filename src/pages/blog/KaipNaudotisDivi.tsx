import React from 'react';
import Images from '../../img/Images';
import CTA from '../../components/CTA';
import BlogNavigation from '../../components/BlogNavigation';
import blogEntries from '../../components/blogEntries';
import { Helmet } from 'react-helmet-async';

const entry = blogEntries.find(e => e.url === '/blog/kaip-naudotis-divi');

const KaipNaudotisDivi = () => {
  return (
    <div className="pt-36 min-h-screen">
      <Helmet>
        <title>Kaip naudotis Divi? | Amberweb</title>
        <meta
          name="description"
          content="Kaip naudotis Divi? Divi yra populiari „drag-and-drop“ svetainių kūrimo sistema, leidžianti kurti profesionalias interneto svetaines be programavimo žinių."
        />
        <link rel="canonical" href={`https://amberweb.lt${entry?.url}`} />
      </Helmet>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(60,80,200,0.25)_0%,transparent_70%)]" />
      </div>

      <div className="container relative max-w-screen-lg text-white/80 mx-auto px-4">
        <div className="w-full pb-8">
          <img
            src={Images.blog.kaipNaudotisDivi}
            alt="Kaip naudotis Divi?"
            className="w-full h-auto bg-gradient-to-r from-electric-blue to-neon-purple pt-[2px] rounded-b-lg"
          />
        </div>
        <div className="mb-8 card">
          <h1 className="text-4xl font-bold text-electric-blue mb-12">
            Kaip naudotis Divi?
          </h1>
          <h2 className="text-2xl font-semibold  mb-4">Kas yra Divi?</h2>
          <p className="text-white/70 mb-6">
            Divi yra populiari „drag-and-drop“ svetainių kūrimo sistema,
            leidžianti kurti profesionalias interneto svetaines be programavimo
            žinių. Ji veikia kaip „WordPress“ tema su įdiegtu puslapių kūrimo
            įrankiu („Divi Builder“), kuris leidžia redaguoti puslapius realiu
            laiku.
          </p>

          <h2 className="text-2xl font-semibold  mb-4">
            Pagrindinė sąsaja ir navigacija
          </h2>
          <p className="text-white/70 mb-6">
            Kai prisijungiate prie „WordPress“ administratoriaus valdymo
            skydelio (angl. „Dashboard“), kairiajame šone rasite meniu, kuriame
            yra sekcijos „Pages“ (Puslapiai), „Posts“ (Įrašai), „Divi“
            nustatymai ir kitos. Pagrindinis įrankis, su kuriuo dirbsime, yra
            „Divi Builder“, kuris leidžia redaguoti puslapius vizualiai.
          </p>

          <h3 className="text-xl font-semibold  mb-2">
            Kaip redaguoti puslapius su Divi?
          </h3>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>Eikite į „Pages“ (Puslapiai) kairiajame meniu.</li>
            <li>
              Pasirinkite puslapį, kurį norite redaguoti, ir spustelėkite „Edit
              with Divi Builder“.
            </li>
            <li>
              Atsidarys vizualus redaktorius, kuriame matysite savo puslapį
              taip, kaip jis atrodo vartotojams.
            </li>
          </ol>

          <h2 className="text-2xl font-semibold  mb-4">
            Kaip pridėti naują sekciją?
          </h2>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>
              Paspauskite mėlyną pliuso mygtuką (+), kad pridėtumėte naują
              sekciją.
            </li>
            <li>
              Pasirinkite sekcijos tipą:
              <ul className="list-inside list-disc ml-4 text-white/70">
                <li>Regular – paprasta sekcija su eilutėmis.</li>
                <li>
                  Specialty – sudėtingesnės sekcijos su unikaliomis išdėstymo
                  galimybėmis.
                </li>
                <li>Fullwidth – sekcija, užimanti visą puslapio plotį.</li>
              </ul>
            </li>
            <li>Į sekciją pridėkite eilutę (Row), paspaudę žalią pliusą.</li>
            <li>
              Pasirinkite išdėstymą – kiek stulpelių norite (pvz., 1, 2, 3 ar
              daugiau).
            </li>
            <li>
              Pridėkite modulį (Module), paspausdami juodą pliusą ir pasirinkite
              norimą elementą (pvz., tekstą, vaizdą, mygtuką).
            </li>
          </ol>

          <h2 className="text-2xl font-semibold  mb-4">Kaip keisti tekstą?</h2>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>
              Norėdami pakeisti tekstą, spustelėkite ant jo tiesiogiai
              vizualiniame redaktoriuje ir pradėkite rašyti.
            </li>
            <li>
              Alternatyviai galite spausti nustatymų mygtuką (krumpliaratį ⚙️)
              ant teksto modulio.
            </li>
            <li>
              Atsidarys nustatymų langas, kuriame galėsite pakeisti tekstą,
              spalvą, dydį ir kitus parametrus.
            </li>
            <li>Baigus keitimus, paspauskite „Save“ (Išsaugoti).</li>
          </ol>

          <h2 className="text-2xl font-semibold  mb-4">Kaip keisti spalvas?</h2>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>
              Paspauskite nustatymų mygtuką (⚙️) ant norimos sekcijos, eilutės
              ar modulio.
            </li>
            <li>Eikite į „Design“ (Dizainas) skiltį.</li>
            <li>
              Suraskite „Text Color“ (Teksto spalva) arba „Background“ (Fonas)
              nustatymus.
            </li>
            <li>
              Pasirinkite spalvą iš spalvų paletės arba įveskite HEX kodą.
            </li>
            <li>Paspauskite „Save“ (Išsaugoti).</li>
          </ol>

          <h2 className="text-2xl font-semibold  mb-4">
            Kaip keisti teksto dydį?
          </h2>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>Atidarykite teksto modulio nustatymus (⚙️).</li>
            <li>Eikite į „Design“ (Dizainas) → „Text“ (Tekstas).</li>
            <li>
              Suraskite „Text Size“ (Teksto dydis) slankiklį ir reguliuokite
              dydį.
            </li>
            <li>Paspauskite „Save“ (Išsaugoti).</li>
          </ol>

          <h2 className="text-2xl font-semibold  mb-4">
            Pagrindiniai Divi moduliai
          </h2>
          <p className="text-white/70 mb-6">
            Divi siūlo daugybę modulių, kurie leidžia lengvai pritaikyti
            puslapį:
          </p>
          <ul className="list-inside list-disc ml-6 text-white/70 mb-6">
            <li>Text (Tekstas) – leidžia rašyti ir formatuoti tekstą.</li>
            <li>Image (Vaizdas) – įkelti ir rodyti paveikslėlius.</li>
            <li>Button (Mygtukas) – sukurti mygtuką su nuoroda.</li>
            <li>
              Gallery (Galerija) – rodyti kelis paveikslėlius kaip galeriją.
            </li>
            <li>Form (Forma) – pridėti kontaktų formą.</li>
            <li>Video – įterpti vaizdo įrašą.</li>
          </ul>

          <h2 className="text-2xl font-semibold  mb-4">
            Kaip išsaugoti ir publikuoti pakeitimus?
          </h2>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>
              Baigus redaguoti, spustelėkite „Save“ (Išsaugoti) apatiniame
              dešiniajame kampe.
            </li>
            <li>
              Norėdami atnaujinti puslapį, spustelėkite „Exit Visual Builder“
              (Išeiti iš vizualinio redaktoriaus).
            </li>
            <li>
              Jei puslapis dar nepublikuotas, paspauskite „Publish“
              (Publikuoti).
            </li>
          </ol>

          <p className="mt-4 text-lg">
            Išsamesnė informacija:{" "}
            <a
              href="https://www.elegantthemes.com/documentation/divi/visual-builder/"
              target="_blank"
              className="text-electric-blue underline"
            >
              DIVI dokumentacija
            </a>
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

export default KaipNaudotisDivi;
