import Images from "../../img/Images";
import CTA from "../../components/CTA";
import BlogNavigation from "../../components/BlogNavigation";
import blogEntries from "../../components/blogEntries";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Share2 } from "lucide-react";

const entry = blogEntries.find(
	(e) => e.id === "senos-svetaines-atnaujinimas-ar-kurti-nauja"
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

const RedesignVsRebuild = () => {
	const navigate = useNavigate();
	const handleBack = () => navigate("/blog");

	return (
		<div className="min-h-screen">
			<Helmet>
				<title>
					Atnaujinti seną svetainę ar kurti naują? Pilnas gidas 2025 |
					Amberweb
				</title>
				<meta
					name="description"
					content="Nežinote, ar verta gaivinti seną svetainę, ar kurti naują su WordPress? Palyginimas: greitis, SEO, kaina, rizikos, migravimo planas ir rekomendacijos 2025 m."
				/>
				<link
					rel="canonical"
					href={`https://amberweb.lt${
						entry?.url ||
						"/senos-svetaines-atnaujinimas-ar-kurti-nauja"
					}`}
				/>
				<script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Atnaujinti seną svetainę ar kurti naują? Pilnas gidas 2025",
            "description": "Palyginimas: kada verta gaivinti seną svetainę, o kada kurti naują su WordPress. Kainos, SEO, greitis, saugumas, migravimo planas.",
            "author": { "@type": "Organization", "name": "Amberweb" },
            "datePublished": "2025-08-30",
            "dateModified": "2025-08-30",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://amberweb.lt/≠"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Amberweb",
              "logo": { "@type": "ImageObject", "url": "https://amberweb.lt/images/logoInWhite.jpg" }
            }
          }
        `}</script>
			</Helmet>

			<div className="fixed inset-0 z-0 pointer-events-none">
				<div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(60,80,200,0.25)_0%,transparent_70%)]" />
			</div>

			<div className="container relative max-w-screen-lg text-white/80 mx-auto px-4">
				<button
					onClick={handleBack}
					className="mb-6 text-sm text-electric-blue hover:underline"
				>
					← Visi straipsniai
				</button>

				<div className="w-full pb-8">
					<img
						src={Images.blog.senaVsNauja}
						alt="Sena svetainė ar nauja WordPress svetainė – ką rinktis 2025?"
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
						Atnaujinti seną svetainę ar kurti naują? Pilnas gidas
						2025
					</h1>

					<p className="text-white/70 mb-6">
						Daugelis verslų susiduria su dilema:{" "}
						<strong>gaivinti seną svetainę</strong> ar
						<strong> kurti naują su WordPress</strong>. Žemiau –
						praktiškas palyginimas pagal greitį, SEO, kainą, saugumą
						ir rizikas, kad pasirinkimas būtų pagrįstas.
					</p>

					<h2 className="text-2xl font-semibold mb-4">
						1. Kada užtenka atnaujinti seną svetainę?
					</h2>
					<ul className="pl-4">
						<li className="text-white/70 mb-3 list-item list-disc">
							Dizainas morališkai tvarkingas, reikia tik
							kosmetikos (spalvos, tipografija, vizualai).
						</li>
						<li className="text-white/70 mb-3 list-item list-disc">
							Sistema palaikoma (WordPress naujausia versija,
							įskiepiai atnaujinami).
						</li>
						<li className="text-white/70 mb-3 list-item list-disc">
							Turinio daug (straipsniai, produktai), nenori
							masinės migracijos.
						</li>
						<li className="text-white/70 mb-3 list-item list-disc">
							SEO pozicijos stabilios – pokyčiai turi būti
							atsargūs, kad jų neprarasti.
						</li>
					</ul>

					<h2 className="text-2xl font-semibold mb-4">
						2. Kada geriau kurti naują svetainę?
					</h2>
					<ul className="pl-4">
						<li className="text-white/70 mb-3 list-item list-disc">
							Sena technologija (custom CMS, neatnaujinami
							įskiepiai, nėra mobilumo).
						</li>
						<li className="text-white/70 mb-3 list-item list-disc">
							Lėtas krovimas, saugumo spragos, dažni nulūžimai.
						</li>
						<li className="text-white/70 mb-3 list-item list-disc">
							Reikalingos naujos funkcijos: WooCommerce,
							rezervacijos, integracijos, kalbos.
						</li>
						<li className="text-white/70 mb-3 list-item list-disc">
							Dizainas atbaido lankytojus ir mažina konversiją.
						</li>
					</ul>

					<h2 className="text-2xl font-semibold mb-4">
						3. Kainos: atnaujinimas vs. nauja svetainė
					</h2>
					<p className="text-white/70 mb-4">
						<strong>Atnaujinimas</strong> (UI korekcijos,
						greičio/SEO pataisymai): dažniausiai nuo{" "}
						<strong>200–500 €</strong>.<br />
						<strong>Nauja WordPress svetainė</strong> (Divi + SEO
						pagrindai): nuo <strong>499 €</strong>.<br />
						<strong>WooCommerce</strong> parduotuvė: nuo{" "}
						<strong>799 €</strong>, priklausomai nuo funkcijų.
					</p>
					<p className="text-white/60 text-sm mb-6">
						Pastaba: reali kaina priklauso nuo apimties, integracijų
						ir turinio kiekio.
					</p>

					<h2 className="text-2xl font-semibold mb-4">
						4. SEO rizikos ir kaip jų išvengti
					</h2>
					<ul className="pl-4">
						<li className="text-white/70 mb-3 list-item list-disc">
							<strong>URL žemėlapis</strong>: nekeičiant
							struktūros – palikti; keičiant – sukurti 301
							peradresavimus.
						</li>
						<li className="text-white/70 mb-3 list-item list-disc">
							<strong>Meta žymos ir H1</strong>:
							perkelti/optimizuoti prieš paleidžiant.
						</li>
						<li className="text-white/70 mb-3 list-item list-disc">
							<strong>Sitemap + robots.txt</strong>: atnaujinti ir
							pateikti į Google Search Console.
						</li>
						<li className="text-white/70 mb-3 list-item list-disc">
							<strong>Greitis</strong>: CDN, vaizdų optimizacija,
							kešavimas, minimalūs skriptai.
						</li>
					</ul>

					<h2 className="text-2xl font-semibold mb-4">
						5. Greitas sprendimo medis
					</h2>
					<ul className="pl-4">
						<li className="text-white/70 mb-3 list-item list-disc">
							Jei svetainė &gt; 5–7 metų ir lėta –{" "}
							<strong>nauja</strong>.
						</li>
						<li className="text-white/70 mb-3 list-item list-disc">
							Jei SEO traukia srautą ir reikia tik UX –{" "}
							<strong>atnaujinimas</strong>.
						</li>
						<li className="text-white/70 mb-3 list-item list-disc">
							Jei reikalingos naujos funkcijos –{" "}
							<strong>nauja</strong>.
						</li>
						<li className="text-white/70 mb-3 list-item list-disc">
							Jei biudžetas ribotas, bet reikia „atsikvėpti“ –{" "}
							<strong>mini atnaujinimas</strong> dabar, planuojant
							naują vėliau.
						</li>
					</ul>

					<h2 className="text-2xl font-semibold mb-4">
						6. Mūsų pasiūlymas 2025 m.
					</h2>
					<ul className="pl-4">
						<li className="text-white/70 mb-3 list-item list-disc">
							Greita esamos svetainės apžiūra (UX, SEO, greitis,
							saugumas).
						</li>
						<li className="text-white/70 mb-3 list-item list-disc">
							Aiški rekomendacija: <em>gaivinti</em> ar{" "}
							<em>kurti naują</em> – su pro/contra.
						</li>
						<li className="text-white/70 mb-3 list-item list-disc">
							Jei nauja – WordPress + Divi, mobilumas, bazinis
							SEO, turinio perkėlimas, 301 planas.
						</li>
					</ul>

					<h2 className="text-2xl font-semibold mb-4">7. D.U.K.</h2>
					<p className="text-white/70 mb-3">
						<strong>Ar prarasiu SEO kurdamas naują?</strong> Ne, jei
						teisingai padarysi 301 peradresavimus ir perkelsi meta
						duomenis.
					</p>
					<p className="text-white/70 mb-3">
						<strong>Kiek trunka?</strong> Atnaujinimas – nuo kelių
						dienų; nauja svetainė – nuo 2 savaičių (priklauso nuo
						apimties).
					</p>
					<p className="text-white/70 mb-6">
						<strong>Ar galima etapais?</strong> Taip – pirmiausia
						kritiniai dalykai (greitis, UX), vėliau – nauja versija.
					</p>

					<p className="text-white/70 mb-6">
						Turite seną svetainę ir norite aiškaus atsakymo?{" "}
						<a
							href="/kontaktai"
							className="text-electric-blue underline"
						>
							Susisiekite
						</a>{" "}
						– nemokamai įvertinsime, kas jums finansiškai ir
						strategiškai labiausiai apsimoka.
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

export default RedesignVsRebuild;
