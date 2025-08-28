import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Pridedame HelmetProvider
import GoogleConsent from "./components/GoogleConsent";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projektai from './pages/Projektai';
import Templates from './pages/Dizainai';
import Kainos from './pages/Kainos';
import Kontaktai from './pages/Kontaktai';
import SvetainePer24h from './pages/SvetainePer24h';
import { motion } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import PrivatumoPolitika from './pages/PrivatumoPolitika';
import Salygos from './pages/Salygos';
import Slapukai from './pages/Slapukai';
import Titulinis from './pages/Titulinis';
import Straipsniai from './pages/Straipsniai';
import WoocommerceUzsakymuValdymas from './pages/blog/WoocommerceUzsakymuValdymas';
import NaujasWoocommerceProduktas from './pages/blog/NaujasWoocoomerceProduktas';
import KaipNaudotisDivi from './pages/blog/KaipNaudotisDivi';
import KasYraDivi from './pages/blog/KasYraDivi';
import KlaidosKuriasDaroVerslai from './pages/blog/KlaidosKuriasDaroVerslai';
import { initGA, logPageView } from "./analytics";
import NotFoundPage from './components/NotFoundPage';
import LzspaPage from './pages/projektai/lzspa';
import HolistineKosmetologija from './pages/projektai/holistine-kosmetologija';
import Veselovaite from './pages/projektai/veselovaite';
import Topstone from './pages/projektai/topstone';
import Brangusauto from './pages/projektai/brangus-auto';
import Kaliause from './pages/projektai/kaliause';
import Esutau from './pages/projektai/esu-tau';
import Angelbutikas from './pages/projektai/angel-butikas';
import Godeko from './pages/projektai/godeko';
import Eriola from './pages/projektai/eriola';
import Gavorkaart from './pages/projektai/gavorka-art';
import Gavorka from './pages/projektai/gavorka';
import Grozioforma from './pages/projektai/grozio-forma';
import Ovc from './pages/projektai/ovc';
import Printery from './pages/projektai/printery';
import Prisipusksypsena from './pages/projektai/prisipusk-sypsena';
import Provansosvajos from './pages/projektai/provanso-svajos';
import Smaragdouostas from './pages/projektai/smaragdo-uostas';
import Sssprendimai from './pages/projektai/sssprendimai';
import Termoventa from './pages/projektai/termoventa';
import Tradicinevirtuve from './pages/projektai/tradicine-virtuve';
import Usmiler from './pages/projektai/u-smiler';
import Paparciopm from './pages/projektai/paparciopm';
import ArchiGrupe from './pages/projektai/archi-grupe';
import Lithuan from './pages/projektai/lithuan';
import YogaWithMeta  from './pages/projektai/yoga-with-meta';
import WordPressKaina2025 from './pages/blog/WordPressKaina2025';
import InternetoSvetainiuKurimas2025 from './pages/blog/InternetoSvetainiuKurimas2025';
import PigiosSvetaines from './pages/blog/PigiosSvetaines';
import Divi5Straipsnis from './pages/blog/Divi5';
import Svetaine24hStraipsnis from './pages/blog/Svetaine24hStraipsnis';
import Akmenukas from './pages/projektai/akmenukas';
import DentesVitae from './pages/projektai/dentes-vitae';
import VersloTinklarastis from './pages/blog/VersloTinklarastis';
import DomenoPasirinkimas from './pages/blog/DomenoPasirinkimas';

function App() {
  useEffect(() => {
    initGA(); // Initialize Google Analytics
    logPageView(); // Log initial page load
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <GoogleConsent />
        <ScrollToTop />
        <Navbar />
        <ScrollToTopButton />

        <div className="min-h-screen bg-background overflow-hidden flex flex-col pt-32 md:pt-36">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex-grow"
          >
            <Routes>
              <Route path="/" element={<Titulinis />} />
              <Route path="/projektai" element={<Projektai />} />
              <Route path="/paruosti-dizainai" element={<Templates />} />
              <Route path="/kainos" element={<Kainos />} />
              <Route path="/kontaktai" element={<Kontaktai />} />
              <Route path="/blog" element={<Straipsniai />} />
              <Route path="/svetaine-per-24h" element={<SvetainePer24h />} />
              <Route
                path="/privatumo-politika"
                element={<PrivatumoPolitika />}
              />
              <Route path="/salygos" element={<Salygos />} />
              <Route path="/slapukai" element={<Slapukai />} />
              <Route
                path="/blog/woocommerce-uzsakymu-valdymas"
                element={<WoocommerceUzsakymuValdymas />}
              />
              <Route
                path="/blog/naujas-woocommerce-produktas"
                element={<NaujasWoocommerceProduktas />}
              />
              <Route
                path="/blog/kaip-naudotis-divi"
                element={<KaipNaudotisDivi />}
              />
              <Route path="/blog/kas-yra-divi" element={<KasYraDivi />} />
              <Route
                path="/blog/5-klaidos-kurias-daro-verslai"
                element={<KlaidosKuriasDaroVerslai />}
              />
              <Route
                path="/blog/wordpress-svetaines-kaina-2025"
                element={<WordPressKaina2025 />}
              />
              <Route
                path="/blog/interneto-svetainiu-kurimas-2025"
                element={<InternetoSvetainiuKurimas2025 />}
              />
              <Route
                path="/blog/pigios-svetaines"
                element={<PigiosSvetaines />}
              />
              <Route
                path="//blog/kas-yra-divi-5"
                element={<Divi5Straipsnis />}
              />
              <Route
                path="/blog/svetaine-per-24h"
                element={<Svetaine24hStraipsnis />}
              />
              <Route
                path="/blog/kodel-jusu-verslui-butina-tureti-tinklarasti"
                element={<VersloTinklarastis />}
              />
              <Route
                path="/blog/domeno-pasirinkimas"
                element={<DomenoPasirinkimas />}
              />

              <Route path="*" element={<NotFoundPage />} />
              <Route path="/projektai/lzspa" element={<LzspaPage />} />
              <Route
                path="/projektai/holistine-kosmetologija"
                element={<HolistineKosmetologija />}
              />
              <Route path="/projektai/veselovaite" element={<Veselovaite />} />
              <Route path="/projektai/topstone" element={<Topstone />} />
              <Route path="/projektai/brangus-auto" element={<Brangusauto />} />
              <Route path="/projektai/kaliause" element={<Kaliause />} />
              <Route path="/projektai/esu-tau" element={<Esutau />} />
              <Route
                path="/projektai/angel-butikas"
                element={<Angelbutikas />}
              />
              <Route path="/projektai/godeko" element={<Godeko />} />
              <Route path="/projektai/eriola" element={<Eriola />} />
              <Route path="/projektai/gavorka-art" element={<Gavorkaart />} />
              <Route path="/projektai/gavorka" element={<Gavorka />} />
              <Route path="/projektai/grozio-forma" element={<Grozioforma />} />
              <Route path="/projektai/ovc" element={<Ovc />} />
              <Route path="/projektai/printery" element={<Printery />} />
              <Route
                path="/projektai/prisipusk-sypsena"
                element={<Prisipusksypsena />}
              />
              <Route
                path="/projektai/provanso-svajos"
                element={<Provansosvajos />}
              />
              <Route
                path="/projektai/yoga-with-meta"
                element={<YogaWithMeta />}
              />
              <Route
                path="/projektai/smaragdo-uostas"
                element={<Smaragdouostas />}
              />
              <Route
                path="/projektai/sssprendimai"
                element={<Sssprendimai />}
              />
              <Route path="/projektai/termoventa" element={<Termoventa />} />
              <Route
                path="/projektai/tradicine-virtuve"
                element={<Tradicinevirtuve />}
              />
              <Route path="/projektai/u-smiler" element={<Usmiler />} />
              <Route path="/projektai/paparciopm" element={<Paparciopm />} />
              <Route path="/projektai/archi-grupe" element={<ArchiGrupe />} />
              <Route path="/projektai/lithuan" element={<Lithuan />} />
              <Route path="/projektai/akmenukas" element={<Akmenukas />} />
              <Route path="/projektai/dentes-vitae" element={<DentesVitae />} />
            </Routes>
          </motion.div>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
