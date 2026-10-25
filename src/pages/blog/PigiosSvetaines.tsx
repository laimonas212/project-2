import Images from "../../img/Images";
import CTA from "../../components/CTA";
import BlogNavigation from "../../components/BlogNavigation";
import blogEntries from "../../components/blogEntries";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Share2 } from "lucide-react";

const entry = blogEntries.find((e) => e.id === "pigios-svetaines");

const handleShare = async () => {
	if (navigator.share && entry) {
		try {
			await navigator.share({
				title: entry.title,
				text: entry.excerpt,
				url: window.location.href,
			});
		} catch (error) {
			// Fallback to copying URL
			navigator.clipboard.writeText(window.location.href);
		}
	} else {
		// Fallback to copying URL
		navigator.clipboard.writeText(window.location.href);
	}
}

const PigiosSvetaines = () => {
	const navigate = useNavigate();
	const handleBack = () => {
		navigate("/blog");
	};
	return (
		<div className="min-h-screen">
			<Helmet>
				<title>
					Kodėl pigios svetainės brangiai kainuoja: dažniausi mitai ir
					realybė | Amberweb
				</title>
				<meta
					name="description"
					content="Ar tikrai pigi svetainė padeda sutaupyti? Sužinokite, kodėl dažnai taupymas kuriant svetainę baigiasi didesnėmis išlaidomis. Analizuojame dažniausius mitus apie pigias svetaines."
				/>
				<link
					rel="canonical"
					href={`https://amberweb.lt${entry?.url}`}
				/>
			</Helmet>
			<div className="fixed inset-0 z-0 pointer-events-none">
				<div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(60,80,200,0.25)_0%,transparent_70%)]" />
			</div>

			<div className="container relative max-w-screen-lg text-white/80 mx-auto px-4 pt-36">
				<button
					onClick={handleBack}
					className="mb-6 text-sm text-electric-blue hover:underline"
				>
					← Visi straipsniai
				</button>
				<div className="w-full pb-8">
					<img
						src={Images.blog.pigiosSvetaines}
						alt="5 klaidos, kurias daro verslai kurdami svetainę"
						className="w-full h-auto bg-gradient-to-r from-electric-blue to-neon-purple pt-[2px] rounded-b-lg animate-gradient-x"
					/>

					<div className="mt-2 text-sm inline-flex gap-4">
						<button
							onClick={handleShare}
							className="hover:underline flex items-center text-electric-blue"
						>
							<Share2 className="h-4 w-4 mr-2" />
							Dalintis
						</button>
					</div>
				</div>
				<div className="mb-8 pb-8 card">
					<h1 className="text-4xl font-bold text-electric-blue mb-12">
						Kodėl pigios svetainės brangiai kainuoja: dažniausi
						mitai ir realybė
					</h1>

					<h3 className="text-white/70 mb-6">
						Daugelis verslų, ypač pradedančiųjų, renkasi pigiausią
						sprendimą kurdami interneto svetainę. Tačiau ar tikrai
						pigi svetainė reiškia ekonomišką sprendimą? Šiame
						straipsnyje paneigsime dažniausius mitus ir
						paaiškinsime, kaip "taupymas" gali virsti didelėmis
						išlaidomis ateityje.
					</h3>

					<h2 className="text-2xl font-semibold  mb-4">
						1. Mitas: "Svarbiausia - kad veiktų"
					</h2>
					<p className="text-white/70 mb-6">
						Techninis veikimas yra tik pradžia. Svetainė turi būti
						greita, patogi naudoti, pritaikyta SEO, mobiliems
						įrenginiams ir atitikti verslo tikslus. Pigūs sprendimai
						dažnai praleidžia šiuos svarbius aspektus.
					</p>

					<h2 className="text-2xl font-semibold  mb-4">
						2. Mitas: "Dizainas nėra svarbus, svarbu turinys"
					</h2>
					<p className="text-white/70 mb-6">
						Nors turinys svarbus, pirmą įspūdį sukuria dizainas.
						Pigi svetainė dažnai atrodo neprofesionaliai, o tai
						atbaido potencialius klientus. Dizainas formuoja
						pasitikėjimą prekės ženklu.
					</p>

					<h2 className="text-2xl font-semibold  mb-4">
						3. Mitas: "SEO susitvarkys vėliau"
					</h2>
					<p className="text-white/70 mb-6">
						SEO yra pamatas, o ne priedas. Pigios svetainės dažnai
						neturi optimizuotos struktūros, meta žymų ar greičio,
						todėl jas vėliau pritaikyti SEO reikalavimams kainuoja
						daugiau nei padaryti viską tinkamai iš karto.
					</p>

					<h2 className="text-2xl font-semibold  mb-4">
						4. Mitas: "Svarbiausia, kad būtų pigiai padaryta, o
						paskui tobulinsim"
					</h2>
					<p className="text-white/70 mb-6">
						Pigi svetainė dažnai neturi tvirtų technologinių
						pagrindų. Tobulinimas tampa brangus, o kartais -
						neįmanomas. Tenka kurti viską iš naujo, kas reiškia
						dvigubas išlaidas.
					</p>

					<h2 className="text-2xl font-semibold  mb-4">
						5. Mitas: "Kaimynas moka HTML, padarys pigiai"
					</h2>
					<p className="text-white/70 mb-6">
						Vien HTML nepakanka. Reikia UI/UX žinių, saugumo,
						atsakomybės. Jei kažkas nepavyks - nebus garantijos ar
						pagalbos. Profesionalumas atsiperka.
					</p>

					<h2 className="text-2xl font-semibold  mb-4">
						6. Realybė: Kokybiška svetainė yra investicija
					</h2>
					<p className="text-white/70 mb-6">
						Kokybiška svetainė generuoja pasitikėjimą, konversijas
						ir veikia ilgus metus. Tai ne išlaidos, o investicija į
						jūsų verslo augimą ir reputaciją internete.
					</p>

					<h2 className="text-2xl font-semibold  mb-4">
						7. Realybė: Klientai sprendžia per sekundes
					</h2>
					<p className="text-white/70 mb-6">
						Tyrimai rodo, kad vartotojai per 3-5 sekundes
						nusprendžia, ar likti svetainėje. Pigi ir prastai
						atrodanti svetainė gali reikšti prarastus klientus.
					</p>

					<p className="text-white/70 mb-6">
						Išvada: Taupant kuriant svetainę dažnai tenka mokėti du
						kartus. Geriau iš karto rinktis profesionalų sprendimą,
						kuris kurtų vertę, o ne rūpesčius.
					</p>

					<p className="text-white/70">
						Daugiau apie mūsų interneto svetainių kūrimo paslaugas
						skaitykite&nbsp;
						<a
							href="/interneto-svetainiu-kurimas"
							className="text-electric-blue underline"
						>
							čia
						</a>
						.
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

export default PigiosSvetaines;
