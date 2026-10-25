import React from 'react';
import Images from '../../img/Images';
import CTA from '../../components/CTA';
import BlogNavigation from '../../components/BlogNavigation';
import blogEntries from '../../components/blogEntries';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Share2 } from 'lucide-react';

const entry = blogEntries.find(e => e.url === '/blog/kas-yra-divi');

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

const KasYraDivi = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/blog");
    };
    return (
		<div className="min-h-screen">
			<Helmet>
				<title>
					Kas yra Divi ir kodėl jis geras pasirinkimas svetainėms? |
					Amberweb
				</title>
				<meta
					name="description"
					content="Kas yra Divi ir kodėl jis geras pasirinkimas svetainėms? Divi yra vienas populiariausių „WordPress“ puslapių kūrimo įrankių, sukurtas „Elegant Themes“. Jis leidžia kurti svetaines vizualiai – naudojant drag-and-drop metodą, todėl tai patogus sprendimas tiek pradedantiesiems, tiek patyrusiems dizaineriams ir programuotojams."
				/>
				<link
					rel="canonical"
					href={`https://amberweb.lt${entry?.url}`}
				/>
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
						src={Images.blog.KasYraDivi}
						alt="Kas yra divi"
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
						Kas yra Divi ir kodėl jis geras pasirinkimas svetainėms?
					</h1>

					<h3 className="text-white/70 mb-6">
						Divi yra vienas populiariausių „WordPress“ puslapių
						kūrimo įrankių (angl. page builder), sukurtas „Elegant
						Themes“. Jis leidžia kurti svetaines vizualiai –
						naudojant drag-and-drop metodą, todėl tai patogus
						sprendimas tiek pradedantiesiems, tiek patyrusiems
						dizaineriams ir programuotojams.
					</h3>

					<h2 className="text-2xl font-semibold  mb-4">
						Kodėl verta rinktis Divi?
					</h2>

					<h2 className="text-2xl font-semibold  mb-4">
						1. Paprastas vizualinis redaktorius
					</h2>
					<p className="text-white/70 mb-6">
						Divi veikia pagal WYSIWYG principą („What You See Is
						What You Get“), todėl redaguodami svetainę iškart
						matote, kaip ji atrodys. Galite keisti spalvas, šriftus,
						išdėstymą ir turinį realiu laiku, be jokių kodavimo
						žinių.
					</p>

					<h2 className="text-2xl font-semibold  mb-4">
						2. Lankstumas ir plačios dizaino galimybės
					</h2>
					<p className="text-white/70 mb-6">
						Divi suteikia galimybę kurti unikalias svetaines be
						išorinių įskiepių. Su daugybe integruotų modulių, galite
						lengvai įterpti formas, galerijas, mygtukus, vaizdo
						įrašus ir kitus elementus.
					</p>

					<h2 className="text-2xl font-semibold  mb-4">
						3. Atsako į įvairius ekranų dydžius
					</h2>
					<p className="text-white/70 mb-6">
						Visos su Divi sukurtos svetainės yra automatiškai
						pritaikomos mobiliems įrenginiams, planšetėms ir
						kompiuteriams. Be to, galite atskirai redaguoti
						kiekvienos versijos išdėstymą.
					</p>

					<h2 className="text-2xl font-semibold  mb-4">
						4. Didelis našumas ir greitis
					</h2>
					<p className="text-white/70 mb-6">
						Naujausios Divi versijos yra optimizuotos greitesniam
						užkrovimui. Taip pat galima valdyti skriptus, CSS ir
						kitus resursus, kad svetainė veiktų dar greičiau.
					</p>

					<h2 className="text-2xl font-semibold  mb-4">
						5. Nuolatiniai atnaujinimai ir palaikymas
					</h2>
					<p className="text-white/70 mb-6">
						„Elegant Themes“ reguliariai atnaujina Divi, kad jis
						būtų suderinamas su naujausiomis „WordPress“ versijomis
						ir turėtų naujas funkcijas. Taip pat siūloma plati
						dokumentacija bei klientų aptarnavimas.
					</p>

					<h2 className="text-2xl font-semibold  mb-4">
						6. Integracija su WooCommerce
					</h2>
					<p className="text-white/70 mb-6">
						Divi turi pilną integraciją su „WooCommerce“, todėl
						puikiai tinka el. parduotuvėms. Galite tinkinti produktų
						puslapius, krepšelį ir atsiskaitymo procesą be papildomų
						įskiepių.
					</p>

					<h2 className="text-2xl font-semibold  mb-4">
						7. Galimybė kurti ir išsaugoti šablonus
					</h2>
					<p className="text-white/70 mb-6">
						Naudodami Divi galite kurti savo dizaino šablonus ir
						juos pritaikyti kitoms svetainėms, taip sutaupydami daug
						laiko.
					</p>

					<h2 className="text-2xl font-semibold  mb-4">
						Kam tinkamas Divi?
					</h2>
					<ul className="pl-4">
						<li className="text-white/70 mb-6 list-item list-disc">
							Smulkioms ir vidutinėms įmonėms
						</li>
						<li className="text-white/70 mb-6 list-item list-disc">
							Laisvai samdomiems dizaineriams ir programuotojams
						</li>
						<li className="text-white/70 mb-6 list-item list-disc">
							Tiems, kurie nori sukurti profesionalią svetainę be
							kodavimo
						</li>
						<li className="text-white/70 mb-6 list-item list-disc">
							El. parduotuvėms su WooCommerce
						</li>
					</ul>

					<p className="text-white/70 mb-6">
						Išvada: Divi yra vienas iš geriausių pasirinkimų norint
						sukurti vizualiai patrauklią, funkcionalią ir lengvai
						valdomą „WordPress“ svetainę. Nesvarbu, ar esate
						pradedantysis, ar profesionalas – su Divi galima
						įgyvendinti beveik bet kokią dizaino idėją be didelių
						techninių žinių.
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

export default KasYraDivi;
