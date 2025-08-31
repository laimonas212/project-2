import React from "react";
import { Helmet } from "react-helmet-async";

const PrivatumoPolitika: React.FC = () => {
	return (
		<div className="pt-4 md:pt-36 min-h-auto mt-4 mb-24 bg-background text-gray-800">
			<Helmet>
				<title>Privatumo Politika | Amberweb</title>
				<meta
					name="description"
					content="Amberweb privatumo politika. Mes įsipareigoję užtikrinti jūsų asmens duomenų apsaugą."
				/>
				<link
					rel="canonical"
					href="https://amberweb.lt/privatumo-politika"
				/>
			</Helmet>
			<div className="container mx-auto px-6 md:px-12">
				{/* Title */}
				<h1 className="text-3xl md:text-4xl font-bold text-electric-blue mb-8">
					Privatumo politika
				</h1>

				{/* Section 1: Introduction */}
				<section className="mb-12">
					<p className="  leading-relaxed text-white/70">
						Mes, “Amber Web” (toliau - Mes), esame įsipareigoję
						užtikrinti jūsų asmens duomenų apsaugą, kai naudojatės
						mūsų svetaine (toliau – Svetainė).
					</p>
				</section>

				{/* Section 2: Terms */}
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-electric-blue mb-4">
						1. Sąvokos
					</h2>
					<ul className="list-disc pl-6 space-y-4 text-white/70 text-sm">
						<li>
							<strong>Asmens duomenys</strong> - informacija,
							pagal kurią galima nustatyti jūsų tapatybę, pvz., IP
							adresas, el. paštas.
						</li>
					</ul>
				</section>

				{/* Section 3: Data Processing */}
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-electric-blue mb-4">
						2. Duomenų tvarkymas
					</h2>
					<p className="text-white/70   leading-relaxed">
						Mes renkame ir tvarkome jūsų asmens duomenis šiais
						tikslais:
					</p>
					<ul className="list-disc pl-6 space-y-4 text-white/70 text-sm">
						<li>Svetainės funkcionalumo užtikrinimas;</li>
						<li>Statistiniai ir analitiniai tikslai;</li>
						<li>Atsakymai į užklausas.</li>
					</ul>
				</section>

				{/* Section 4: Cookies */}
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-electric-blue mb-4">
						3. Slapukų naudojimas
					</h2>
					<p className="text-white/70   leading-relaxed">
						Svetainė naudoja slapukus, siekdama pagerinti naršymo
						patirtį. Slapukų duomenys gali apimti jūsų naršymo
						istoriją, kalbos pasirinkimus.
					</p>
				</section>

				{/* Section 5: Data Subject Rights */}
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-electric-blue mb-4">
						4. Duomenų subjektų teisės
					</h2>
					<p className="text-white/70   leading-relaxed">
						Jūs turite teisę reikalauti susipažinti su tvarkomais
						duomenimis, juos taisyti, ištrinti ar apriboti jų
						tvarkymą.
					</p>
				</section>

				{/* Section 6: Data Storage Duration */}
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-electric-blue mb-4">
						5. Duomenų saugojimo trukmė
					</h2>
					<p className="text-white/70   leading-relaxed">
						Mes saugome jūsų asmens duomenis tol, kol tai būtina
						šios privatumo politikos tikslams pasiekti.
					</p>
				</section>

				{/* Section 7: Minor Privacy */}
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-electric-blue mb-4">
						6. Nepilnamečių privatumas
					</h2>
					<p className="text-white/70   leading-relaxed">
						Svetainė nėra skirta asmenims iki 18 metų. Nepilnamečiai
						gali naudotis mūsų paslaugomis tik turėdami tėvų ar
						globėjų sutikimą.
					</p>
				</section>

				{/* Section 8: Data Subject Requests */}
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-electric-blue mb-4">
						7. Duomenų subjektų užklausos
					</h2>
					<p className="text-white/70   leading-relaxed">
						Norėdami pasinaudoti savo teisėmis, galite kreiptis į
						mus el. paštu:{" "}
						<a
							href="mailto:info@amberweb.lt"
							className="text-electric-blue hover:underline"
						>
							info@amberweb.lt
						</a>
					</p>
				</section>

				{/* Section 9: Final Provisions */}
				<section className="mb-12">
					<h2 className="text-xl font-semibold text-electric-blue mb-4">
						8. Baigiamosios nuostatos
					</h2>
					<p className="text-white/70   leading-relaxed">
						Mes galime periodiškai atnaujinti šią privatumo
						politiką, apie kurią būsite informuoti per Svetainę arba
						kitomis komunikacijos priemonėmis.
					</p>
				</section>
			</div>
		</div>
	);
};

export default PrivatumoPolitika;
