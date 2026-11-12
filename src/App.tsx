import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";

import GoogleConsent from "./components/GoogleConsent";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import NotFoundPage from "./components/NotFoundPage";

import { initGA, logPageView } from "./analytics";

// Pagrindiniai puslapiai
import Projektai from "./pages/Projektai";
import Templates from "./pages/Dizainai";
import Kainos from "./pages/Kainos";
import Kontaktai from "./pages/Kontaktai";
import PrivatumoPolitika from "./pages/PrivatumoPolitika";
import Salygos from "./pages/Salygos";
import Slapukai from "./pages/Slapukai";
import Titulinis from "./pages/Titulinis";
import Straipsniai from "./pages/Straipsniai";
import Landing from "./pages/Landing";

// Dinaminis blogo straipsnio puslapis
import BlogPost from "./pages/blog/BlogPost";

// SEO puslapiai
import SeoLanding from "./pages/seo/SeoLanding";

// Projektų puslapiai
import LzspaPage from "./pages/projektai/lzspa";
import HolistineKosmetologija from "./pages/projektai/holistine-kosmetologija";
import Veselovaite from "./pages/projektai/veselovaite";
import Topstone from "./pages/projektai/topstone";
import Brangusauto from "./pages/projektai/brangus-auto";
import Kaliause from "./pages/projektai/kaliause";
import Esutau from "./pages/projektai/esu-tau";
import Angelbutikas from "./pages/projektai/angel-butikas";
import Godeko from "./pages/projektai/godeko";
import Eriola from "./pages/projektai/eriola";
import Gavorkaart from "./pages/projektai/gavorka-art";
import Gavorka from "./pages/projektai/gavorka";
import Grozioforma from "./pages/projektai/grozio-forma";
import Ovc from "./pages/projektai/ovc";
import Printery from "./pages/projektai/printery";
import Prisipusksypsena from "./pages/projektai/prisipusk-sypsena";
import Provansosvajos from "./pages/projektai/provanso-svajos";
import Romasta from "./pages/projektai/romasta";
import Smaragdouostas from "./pages/projektai/smaragdo-uostas";
import Sssprendimai from "./pages/projektai/sssprendimai";
import Termoventa from "./pages/projektai/termoventa";
import Tradicinevirtuve from "./pages/projektai/tradicine-virtuve";
import Usmiler from "./pages/projektai/u-smiler";
import Paparciopm from "./pages/projektai/paparciopm";
import ArchiGrupe from "./pages/projektai/archi-grupe";
import Lithuan from "./pages/projektai/lithuan";
import YogaWithMeta from "./pages/projektai/yoga-with-meta";
import Akmenukas from "./pages/projektai/akmenukas";
import DentesVitae from "./pages/projektai/dentes-vitae";
import Smokedrop from "./pages/projektai/smokedrop";
import Inviteu from "./pages/projektai/inviteu";
import Dust2riches from "./pages/projektai/dusttoriches";

function App() {
	useEffect(() => {
		initGA();
		logPageView();
	}, []);

	return (
		<HelmetProvider>
			<Router>
				<GoogleConsent />
				<ScrollToTop />

				<Navbar />
				<ScrollToTopButton />

				<div className="min-h-screen bg-background overflow-hidden flex flex-col">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
						className="relative z-10 flex-grow"
					>
						<Routes>
							{/* Pagrindinis puslapis */}
							<Route path="/" element={<Titulinis />} />

							{/* Pagrindiniai puslapiai */}
							<Route path="/projektai" element={<Projektai />} />
							<Route
								path="/paruosti-dizainai"
								element={<Templates />}
							/>
							<Route path="/kainos" element={<Kainos />} />
							<Route path="/kontaktai" element={<Kontaktai />} />

							{/* Svetainės kūrimo landing page */}
							<Route
								path="/interneto-svetainiu-kurimas"
								element={<Landing />}
							/>

							{/* Blogas */}
							<Route path="/blog" element={<Straipsniai />} />
							<Route path="/blog/:slug" element={<BlogPost />} />

							{/* Teisiniai puslapiai */}
							<Route
								path="/privatumo-politika"
								element={<PrivatumoPolitika />}
							/>
							<Route path="/salygos" element={<Salygos />} />
							<Route path="/slapukai" element={<Slapukai />} />

							{/* Projektų puslapiai */}
							<Route
								path="/projektai/lzspa"
								element={<LzspaPage />}
							/>
							<Route
								path="/projektai/dusttoriches"
								element={<Dust2riches />}
							/>
							<Route
								path="/projektai/holistine-kosmetologija"
								element={<HolistineKosmetologija />}
							/>
							<Route
								path="/projektai/veselovaite"
								element={<Veselovaite />}
							/>
							<Route
								path="/projektai/topstone"
								element={<Topstone />}
							/>
							<Route
								path="/projektai/brangus-auto"
								element={<Brangusauto />}
							/>
							<Route
								path="/projektai/kaliause"
								element={<Kaliause />}
							/>
							<Route
								path="/projektai/esu-tau"
								element={<Esutau />}
							/>
							<Route
								path="/projektai/inviteu"
								element={<Inviteu />}
							/>
							<Route
								path="/projektai/angel-butikas"
								element={<Angelbutikas />}
							/>
							<Route
								path="/projektai/godeko"
								element={<Godeko />}
							/>
							<Route
								path="/projektai/eriola"
								element={<Eriola />}
							/>
							<Route
								path="/projektai/gavorka-art"
								element={<Gavorkaart />}
							/>
							<Route
								path="/projektai/gavorka"
								element={<Gavorka />}
							/>
							<Route
								path="/projektai/grozio-forma"
								element={<Grozioforma />}
							/>
							<Route path="/projektai/ovc" element={<Ovc />} />
							<Route
								path="/projektai/printery"
								element={<Printery />}
							/>
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
								path="/projektai/smokedrop"
								element={<Smokedrop />}
							/>
							<Route
								path="/projektai/sssprendimai"
								element={<Sssprendimai />}
							/>
							<Route
								path="/projektai/termoventa"
								element={<Termoventa />}
							/>
							<Route
								path="/projektai/tradicine-virtuve"
								element={<Tradicinevirtuve />}
							/>
							<Route
								path="/projektai/u-smiler"
								element={<Usmiler />}
							/>
							<Route
								path="/projektai/paparciopm"
								element={<Paparciopm />}
							/>
							<Route
								path="/projektai/archi-grupe"
								element={<ArchiGrupe />}
							/>
							<Route
								path="/projektai/lithuan"
								element={<Lithuan />}
							/>
							<Route
								path="/projektai/akmenukas"
								element={<Akmenukas />}
							/>
							<Route
								path="/projektai/dentes-vitae"
								element={<DentesVitae />}
							/>
							<Route
								path="/projektai/romasta"
								element={<Romasta />}
							/>

							{/* Dinaminiai SEO puslapiai */}
							<Route path="/:slug" element={<SeoLanding />} />

							{/* 404 */}
							<Route path="*" element={<NotFoundPage />} />
						</Routes>
					</motion.div>

					<Footer />
				</div>
			</Router>
		</HelmetProvider>
	);
}

export default App;
