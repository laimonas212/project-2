import React from "react";
import Images from "../../img/Images";
import CTA from "../../components/CTA";
import BlogNavigation from "../../components/BlogNavigation";
import blogEntries from "../../components/blogEntries";
import { Helmet } from "react-helmet-async";

const entry = blogEntries.find((e) => e.id === "kodel-jusu-verslui-butina-tureti-tinklarasti");

const VersloTinklarastis = () => {
  return (
    <div className="pt-36 min-h-screen">
      <Helmet>
        <title>Kodėl jūsų verslui būtina turėti tinklaraštį? | Amberweb</title>
        <meta
          name="description"
          content="Sužinokite, kodėl tinklaraštis yra būtinas jūsų verslui: SEO, pasitikėjimo kūrimas, ilgalaikis srautas ir papildomas pardavimų kanalas."
        />
        <link rel="canonical" href={`https://amberweb.lt${entry?.url}`} />
      </Helmet>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(60,80,200,0.25)_0%,transparent_70%)]" />
      </div>

      <div className="container relative max-w-screen-lg text-white/80 mx-auto px-4">
        <div className="w-full pb-8">
          <img
            src={Images.blog.versloTinklarastis}
            alt="Kodėl verslui būtina turėti tinklaraštį"
            className="w-full h-auto bg-gradient-to-r from-electric-blue to-neon-purple pt-[2px] rounded-b-lg"
          />
        </div>
        <div className="mb-8 pb-8 card">
          <h1 className="text-4xl font-bold text-electric-blue mb-12">
            Kodėl jūsų verslui būtina turėti tinklaraštį?
          </h1>

          <h3 className="text-white/70 mb-6">
            Vien tik turėti interneto svetainę šiandien nepakanka. Tinklaraštis
            yra vienas iš efektyviausių būdų pritraukti klientus, pakilti
            „Google“ paieškoje ir parodyti savo ekspertizę. Štai priežastys,
            kodėl verslui verta jį turėti.
          </h3>

          <h2 className="text-2xl font-semibold mb-4">
            1. Tinklaraštis padeda pakilti „Google“ paieškoje
          </h2>
          <p className="text-white/70 mb-6">
            „Google“ mėgsta šviežią turinį. Straipsniai su tinkamais raktiniais
            žodžiais padeda pritraukti organinį srautą, didina matomumą ir
            leidžia klientams jus rasti be reklamos. Kiekvienas įrašas – nauja
            galimybė būti pastebėtam.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            2. Tinklaraštis kuria pasitikėjimą ir autoritetą
          </h2>
          <p className="text-white/70 mb-6">
            Dalindamiesi patarimais ir įžvalgomis, rodote, kad esate savo
            srities ekspertai. Tai stiprina pasitikėjimą jūsų verslu ir padeda
            potencialiems klientams apsispręsti rinktis jus, o ne konkurentą.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            3. Tinklaraštis generuoja ilgalaikę vertę
          </h2>
          <p className="text-white/70 mb-6">
            Reklama veikia tik tol, kol už ją mokate. Tuo tarpu tinklaraščio
            įrašai gali pritraukti lankytojų metus ar net ilgiau. Tai
            investicija į nuolatinį organinį srautą.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            4. Tinklaraštis stiprina santykį su klientais
          </h2>
          <p className="text-white/70 mb-6">
            Per straipsnius galite atsakyti į klientų klausimus, pasidalinti
            naujienomis ar patarimais. Tai kuria ne tik lojalumą, bet ir
            bendruomenę aplink jūsų prekės ženklą.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            5. Tinklaraštis – papildomas pardavimų kanalas
          </h2>
          <p className="text-white/70 mb-6">
            Įrašuose natūraliai integruokite savo paslaugas ar produktus. Taip
            tinklaraštis tampa subtiliu, bet efektyviu pardavimų įrankiu.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Išvada</h2>
          <p className="text-white/70 mb-6">
            Tinklaraštis yra SEO variklis, pasitikėjimo kūrėjas ir ilgalaikė
            investicija į jūsų verslo matomumą. Kuo anksčiau pradėsite, tuo
            daugiau naudos sukursite ateityje.
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

export default VersloTinklarastis;
