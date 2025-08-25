import React from 'react';
import CTA from '../../components/CTA';
import BlogNavigation from '../../components/BlogNavigation';
import blogEntries from '../../components/blogEntries';
import { Helmet } from 'react-helmet-async';
import { Wrench } from 'lucide-react'; // maža, tinkama ikonėlė
import Images from '../../img/Images';

const entry = blogEntries.find((e) => e.id === "kas-yra-divi-5");

const Divi5Straipsnis = () => {
  return (
    <div className="pt-36 min-h-screen">
      <Helmet>
        <title>
          Divi 5 ir WordPress svetainių kūrimas verslui | Amberweb
        </title>
        <meta
          name="description"
          content="Naujoji Divi 5 versija keičia WordPress svetainių kūrimą – greitesnis veikimas, modulių perrašymas ir švaresnis kodas. Sužinokite, kaip tai padeda verslams gauti modernią svetainę."
        />
        <link rel="canonical" href={`https://amberweb.lt${entry?.url}`} />
      </Helmet>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(60,80,200,0.25)_0%,transparent_70%)]" />
      </div>

      <div className="container relative max-w-screen-lg text-white/80 mx-auto px-4">
        <div className="w-full pb-8">
          <img
            src={Images.blog.divi5}
            alt="Divi 5 ir WordPress svetainių kūrimas"
            className="w-full h-auto bg-gradient-to-r from-electric-blue to-neon-purple pt-[2px] rounded-b-lg"
          />
        </div>
        <div className="mb-8 pb-8 card">
          <h1 className="text-4xl font-bold text-electric-blue mb-12">
            Divi 5 ir WordPress svetainių kūrimas verslui: ką reikia žinoti?
          </h1>

          <h3 className="text-white/70 mb-6">
            Nuo 2025 m. viena populiariausių WordPress temų –{" "}
            <strong>Divi</strong> – išleido reikšmingą atnaujinimą:{" "}
            <strong>Divi 5</strong>. Tai nėra tik kosmetinis pakeitimas – tai
            visas sistemos perrašymas. Tačiau svarbiausia – ką tai reiškia
            verslui ir svetainių kūrimo paslaugų ieškantiems klientams?
          </h3>

          <h2 className="text-2xl font-semibold mb-4">
            Greitesnis svetainių veikimas
          </h2>
          <p className="text-white/70 mb-6">
            Divi 5 atsisakė senos architektūros ir dabar naudoja naują{" "}
            <strong>React pagrįstą modulių sistemą</strong>. Tai leidžia
            puslapiams krautis greičiau, o tai tiesiogiai veikia ir SEO, ir
            vartotojo patirtį. Jei anksčiau Divi buvo kritikuojamas dėl
            greičio – ši versija atsako į tuos priekaištus.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Kodėl tai svarbu jūsų verslui?
          </h2>
          <p className="text-white/70 mb-6">
            Svetainės greitis, aiškumas ir saugumas dar niekada nebuvo tokie
            svarbūs. <strong>Naudojant Divi 5 ir WordPress</strong>, galima
            sukurti patikimą, profesionalią svetainę, kuri:
          </p>
          <ul className="pl-4 mb-6">
            <li className="text-white/70 list-item list-disc">
              Greitai kraunasi
            </li>
            <li className="text-white/70 list-item list-disc">
              Yra lengvai pritaikoma mobiliesiems
            </li>
            <li className="text-white/70 list-item list-disc">
              Atitinka SEO rekomendacijas
            </li>
            <li className="text-white/70 list-item list-disc">
              Pritaikyta jūsų verslo tikslams (paslaugos, el. parduotuvė ir
              pan.)
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            Technologija – bet ne jūsų rūpestis
          </h2>
          <p className="text-white/70 mb-6">
            Daugelis įmonių nesidomi, ar svetainė padaryta su Divi, Elementor
            ar custom sprendimu – jiems svarbu, kad ji{" "}
            <strong>
              veiktų greitai, atrodytų profesionaliai ir būtų lengvai valdoma
            </strong>
            . Būtent tai ir siūlome – pasirūpinsime visa technine puse,
            naudodami efektyviausius įrankius, įskaitant Divi 5.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Kuo skiriasi nuo ankstesnių versijų?
          </h2>
          <ul className="pl-4 mb-6">
            <li className="text-white/70 list-item list-disc">
              Švaresnis kodas, mažiau priklausomybių
            </li>
            <li className="text-white/70 list-item list-disc">
              Nauja API – galima plėtoti papildomus sprendimus greičiau
            </li>
            <li className="text-white/70 list-item list-disc">
              Lengviau pritaikyti specifiniams poreikiams
            </li>
            <li className="text-white/70 list-item list-disc">
              Pagerintas builder'io stabilumas ir greitis
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            Ieškote, kas sukurtų svetainę su Divi 5 ar WordPress?
          </h2>
          <p className="text-white/70 mb-6">
            Esame pasiruošę padėti. Naudojame Divi 5, taip pat ir kitus
            sprendimus, kad jūsų svetainė būtų:
          </p>
          <ul className="pl-4 mb-6">
            <li className="text-white/70 list-item list-disc">
              Patogi naudoti ir administruoti
            </li>
            <li className="text-white/70 list-item list-disc">
              Pritaikyta mobiliesiems
            </li>
            <li className="text-white/70 list-item list-disc">
              Sukurta pagal jūsų verslo poreikius
            </li>
          </ul>

          <p className="text-white/70 mb-6">
            <strong>Susisiekite,</strong> jei norite modernios, greitos ir
            profesionalios svetainės, kuri padės jūsų verslui augti internete.
          </p>

          <div className="flex items-center gap-2 text-white/70 mt-12">
            <Wrench className="w-5 h-5 text-electric-blue" />
            <span>
              Naudojame naujausius sprendimus, kad jūsų svetainė būtų
              konkurencinga 2025-aisiais.
            </span>
          </div>
        </div>
      </div>

      <div className="relative">
        <BlogNavigation blogEntries={blogEntries} />
        <CTA />
      </div>
    </div>
  );
};

export default Divi5Straipsnis;
