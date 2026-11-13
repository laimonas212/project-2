import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";

import GoogleConsent from "./components/GoogleConsent";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { initGA, logPageView } from "./analytics";

const Projektai = lazy(() => import("./pages/Projektai"));
const Templates = lazy(() => import("./pages/Dizainai"));
const Kainos = lazy(() => import("./pages/Kainos"));
const Kontaktai = lazy(() => import("./pages/Kontaktai"));
const PrivatumoPolitika = lazy(() => import("./pages/PrivatumoPolitika"));
const Salygos = lazy(() => import("./pages/Salygos"));
const Slapukai = lazy(() => import("./pages/Slapukai"));
const Titulinis = lazy(() => import("./pages/Titulinis"));
const Straipsniai = lazy(() => import("./pages/Straipsniai"));
const Landing = lazy(() => import("./pages/Landing"));
const BlogPost = lazy(() => import("./pages/blog/BlogPost"));
const SeoLanding = lazy(() => import("./pages/seo/SeoLanding"));
const NotFoundPage = lazy(() => import("./components/NotFoundPage"));

const LzspaPage = lazy(() => import("./pages/projektai/lzspa"));
const HolistineKosmetologija = lazy(
	() => import("./pages/projektai/holistine-kosmetologija"),
);
const Veselovaite = lazy(() => import("./pages/projektai/veselovaite"));
const Topstone = lazy(() => import("./pages/projektai/topstone"));
const Brangusauto = lazy(() => import("./pages/projektai/brangus-auto"));
const Kaliause = lazy(() => import("./pages/projektai/kaliause"));
const Esutau = lazy(() => import("./pages/projektai/esu-tau"));
const Angelbutikas = lazy(() => import("./pages/projektai/angel-butikas"));
const Godeko = lazy(() => import("./pages/projektai/godeko"));
const Eriola = lazy(() => import("./pages/projektai/eriola"));
const Gavorkaart = lazy(() => import("./pages/projektai/gavorka-art"));
const Gavorka = lazy(() => import("./pages/projektai/gavorka"));
const Grozioforma = lazy(() => import("./pages/projektai/grozio-forma"));
const Ovc = lazy(() => import("./pages/projektai/ovc"));
const Printery = lazy(() => import("./pages/projektai/printery"));
const Prisipusksypsena = lazy(
	() => import("./pages/projektai/prisipusk-sypsena"),
);
const Provansosvajos = lazy(() => import("./pages/projektai/provanso-svajos"));
const Romasta = lazy(() => import("./pages/projektai/romasta"));
const Smaragdouostas = lazy(() => import("./pages/projektai/smaragdo-uostas"));
const Sssprendimai = lazy(() => import("./pages/projektai/sssprendimai"));
const Termoventa = lazy(() => import("./pages/projektai/termoventa"));
const Tradicinevirtuve = lazy(
	() => import("./pages/projektai/tradicine-virtuve"),
);
const Usmiler = lazy(() => import("./pages/projektai/u-smiler"));
const Paparciopm = lazy(() => import("./pages/projektai/paparciopm"));
const ArchiGrupe = lazy(() => import("./pages/projektai/archi-grupe"));
const Lithuan = lazy(() => import("./pages/projektai/lithuan"));
const YogaWithMeta = lazy(() => import("./pages/projektai/yoga-with-meta"));
const Akmenukas = lazy(() => import("./pages/projektai/akmenukas"));
const DentesVitae = lazy(() => import("./pages/projektai/dentes-vitae"));
const Smokedrop = lazy(() => import("./pages/projektai/smokedrop"));
const Inviteu = lazy(() => import("./pages/projektai/inviteu"));
const Dust2riches = lazy(() => import("./pages/projektai/dusttoriches"));

const RouteFallback = () => <div className="min-h-[60vh]" aria-busy="true" />;

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
						<Suspense fallback={<RouteFallback />}>
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
						</Suspense>
					</motion.div>

					<Footer />
				</div>
			</Router>
		</HelmetProvider>
	);
}

export default App;
