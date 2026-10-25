import Images from "../../img/Images";
import CTA from "../../components/CTA";
import BlogNavigation from "../../components/BlogNavigation";
import blogEntries from "../../components/blogEntries";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Share2 } from "lucide-react";

const entry = blogEntries.find(
	(e) => e.id === "wordpress-svetaines-kaina-2025"
);

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
};

const WordPressKaina2025 = () => {
	const navigate = useNavigate();
	const handleBack = () => {
		navigate("/blog");
	};
	return (
		<div className="min-h-screen">
			<Helmet>
				<title>
					Kiek kainuoja svetainė su WordPress Lietuvoje 2025 m.? |
					Amberweb
				</title>
				<meta
					name="description"
					content="Ieškai, kiek kainuoja WordPress svetainė 2025 m. Lietuvoje? Sužinok pagrindinius kainos faktorius, ką įeina į paslaugą ir kaip nesumokėti per daug."
				/>
				<link
					rel="canonical"
					href={`https://amberweb.lt${entry?.url}`}
				/>
				<script type="application/ld+json">{`
                    {
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": "Kiek kainuoja svetainė su WordPress Lietuvoje 2025 m.?",
                    "description": "Ieškai, kiek kainuoja WordPress svetainė 2025 m. Lietuvoje? Sužinok pagrindinius kainos faktorius, ką įeina į paslaugą ir kaip nesumokėti per daug.",
                    "author": {
                        "@type": "Organization",
                        "name": "Amberweb"
                    },
                    "datePublished": "2025-05-01",
                    "dateModified": "2025-05-01",
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": "https://amberweb.lt/wordpress-svetaines-kaina-2025"
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
                `}</script>
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
						src={Images.blog.wordpressKaina2025}
						alt="Interneto svetainių kūrimas 2025 metais"
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
						Kiek kainuoja svetainė su WordPress Lietuvoje 2025 m.?
					</h1>

					<p className="text-white/70 mb-6">
						Svetainės kaina su WordPress gali labai skirtis,
						priklausomai nuo poreikių, funkcionalumo ir pasirinkto
						paslaugų tiekėjo. 2025 m. Lietuvoje dažniausiai
						svetainių kūrimo kainos prasideda nuo{" "}
						<strong>300-500€</strong> ir gali siekti net{" "}
						<strong>3000€ ar daugiau</strong>. Pažiūrėkime, kas
						lemia tą kainą ir ką gaunate už tam tikrą sumą.
					</p>

					<h2 className="text-2xl font-semibold  mb-4">
						1. Ką įprastai apima bazinė WordPress svetainės kaina?
					</h2>
					<ul className="pl-4">
						<li className="text-white/70 mb-4 list-item list-disc">
							Pasirinktas dizainas (šablonas arba individualus
							dizainas)
						</li>
						<li className="text-white/70 mb-4 list-item list-disc">
							Turinio valdymo sistema (WordPress)
						</li>
						<li className="text-white/70 mb-4 list-item list-disc">
							Iki 5 puslapių (pvz.: Apie mus, Paslaugos,
							Kontaktai, ir t.t.)
						</li>
						<li className="text-white/70 mb-4 list-item list-disc">
							Kontaktinė forma
						</li>
						<li className="text-white/70 mb-4 list-item list-disc">
							Responsyvus dizainas (pritaikyta mobiliesiems)
						</li>
						<li className="text-white/70 mb-4 list-item list-disc">
							Pagrindinis SEO (techninis ir struktūrinis)
						</li>
					</ul>

					<h2 className="text-2xl font-semibold  mb-4">
						2. Kas gali kelti kainą?
					</h2>
					<ul className="pl-4">
						<li className="text-white/70 mb-4 list-item list-disc">
							El. parduotuvės funkcionalumas (WooCommerce)
						</li>
						<li className="text-white/70 mb-4 list-item list-disc">
							Individualus dizainas ir animacijos
						</li>
						<li className="text-white/70 mb-4 list-item list-disc">
							Daugiau puslapių ar kalbų
						</li>
						<li className="text-white/70 mb-4 list-item list-disc">
							Integracijos su kitomis sistemomis (CRM, el. paštas,
							rezervacijos ir pan.)
						</li>
						<li className="text-white/70 mb-4 list-item list-disc">
							Pilnas SEO paketas su raktinių žodžių analize ir
							optimizacija
						</li>
					</ul>

					<h2 className="text-2xl font-semibold  mb-4">
						3. Pigiai vs. kokybiškai - ar verta taupyti?
					</h2>
					<p className="text-white/70 mb-6">
						Daug kas siūlo svetaines už 100-200 €, bet tai
						dažniausiai būna paviršutiniški puslapiai be
						optimizacijos ir be jokio palaikymo. Tokiu atveju gali
						prarasti daugiau nei sutaupai. Kokybiškai padaryta
						svetainė ne tik atrodys profesionaliai, bet ir veiks
						greitai, bus saugi, lengvai valdoma ir pritaikyta Google
						paieškai.
					</p>

					<h2 className="text-2xl font-semibold  mb-4">
						4. O tai kiek kainuoja svetainė su WooCommerce?
					</h2>
					<p className="text-white/70 mb-6">
						El. parduotuvė su WordPress + WooCommerce dažniausiai
						kainuoja nuo <strong>500€</strong>. Kaina priklauso nuo
						produktų kiekio, ar reikalingi mokėjimo metodai,
						pristatymo skaičiavimai, sandėlio valdymas ir pan.
					</p>

					<h2 className="text-2xl font-semibold  mb-4">
						5. Kokias kainas siūlome mes?
					</h2>
					<p className="text-white/70 mb-6">
						Mūsų siūlomos svetainės dažniausiai kainuoja nuo{" "}
						<strong>499€</strong>, priklausomai nuo funkcionalumo. Į
						kainą įeina:
					</p>
					<ul className="pl-4">
						<li className="text-white/70 mb-4 list-item list-disc">
							WordPress su Divi
						</li>
						<li className="text-white/70 mb-4 list-item list-disc">
							Dizaino pritaikymas
						</li>
						<li className="text-white/70 mb-4 list-item list-disc">
							Kontaktinė forma
						</li>
						<li className="text-white/70 mb-4 list-item list-disc">
							Pritaikymas telefonams
						</li>
						<li className="text-white/70 mb-4 list-item list-disc">
							Bazinis SEO
						</li>
						<li className="text-white/70 mb-4 list-item list-disc">
							Turinio įkėlimas ir konsultacijos
						</li>
					</ul>

					<p className="text-white/70 mb-6">
						Jeigu reikia el. parduotuvės - kaina prasideda nuo{" "}
						<strong>799€</strong>, priklausomai nuo specifikos.
					</p>

					<p className="text-white/70 mb-6">
						Turite idėją?{" "}
						<a
							href="/kontaktai"
							className="text-electric-blue underline"
						>
							Susisiekite
						</a>{" "}
						ir pakonsultuosime be jokio įsipareigojimo.
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

export default WordPressKaina2025;
