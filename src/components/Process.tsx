import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface Step {
	number: string;
	title: string;
	description: string;
}

interface ProcessProps {
	steps?: Step[];
	headline?: string;
	description?: string;
}

const makeTextBold = (text: string) => {
	const regex = /\*\*(.*?)\*\*/g;

	return text.split(regex).map((part, index) =>
		index % 2 === 1 ? (
			<strong key={index} className="font-semibold text-white">
				{part}
			</strong>
		) : (
			part
		),
	);
};

const Process = ({
	steps = [
		{
			number: "01",
			title: "Poreikių analizė",
			description:
				"Mes atliekame išsamią **poreikių analizę** ir konsultacijas, kad suprastume jūsų verslo modelį, tikslinę auditoriją ir ilgalaikius tikslus. Išsiaiškiname, kokios funkcijos reikalingos sėkmingam **e-komercijos projektui** ar informacinei **interneto svetainei**, ir nustatome pagrindinius reikalavimus, užtikrinančius geriausią vartotojo patirtį (**UX**).",
		},
		{
			number: "02",
			title: "Planavimas ir architektūra",
			description:
				"Remdamiesi analize, sudarome aiškų ir detalų **projekto planą**. Šis etapas apima išsamų projekto plano sudarymą, **svetainės architektūros** kūrimą, kuris yra optimizuotas patogiam naršymui, bei preliminarios **SEO strategijos** nustatymą. Tai leidžia užtikrinti sklandų ir efektyvų **svetainės kūrimo procesą**.",
		},
		{
			number: "03",
			title: "Dizainas ir maketavimas",
			description:
				"Šiame etape kuriame vizualiai patrauklų ir funkcionalų **UI/UX dizainą**, atitinkantį jūsų prekės ženklo identitetą. Mes pateikiame **maketus** ir **prototipus**, užtikrindami, kad **dizainas** būtų modernus, pritaikytas visiems įrenginiams (**responsive design**) ir lengvai suprantamas jūsų klientams.",
		},
		{
			number: "04",
			title: "Programavimo darbai",
			description:
				"Mūsų komanda dirba su patikimomis technologijomis, tokiomis kaip **WordPress** ar **React**, užtikrindama, kad sprendimas būtų ne tik techniškai tvarkingas, bet ir pritaikytas jūsų verslo poreikiams. Atliekame **funkcionalumo konfigūravimą**, koreguojame dizainą bei optimizuojame svetainę, kad ji būtų greita ir pasiektų gerus rezultatus **Google paieškoje**.",
		},
		{
			number: "05",
			title: "Testavimas ir paleidimas",
			description:
				"Prieš paleidžiant projektą, atliekame išsamų **testavimą**, kad įsitikintume, jog viskas veikia nepriekaištingai. Atliekame paskutinius **optimizavimo darbus**, konfigūruojame talpinimo paslaugas ir oficialiai paleidžiame svetainę.",
		},
		{
			number: "06",
			title: "Palaikymas ir augimas",
			description:
				"Po paleidimo rūpinamės tolesniu jūsų projekto sklandžiu veikimu: atliekame **techninį palaikymą**, atnaujinimus, saugumo patikrinimus ir konsultuojame dėl tolimesnio **svetainės augimo** bei SEO tobulinimo.",
		},
	],
	headline = "Išsamus interneto svetainių kūrimo procesas",
	description = "Mes dirbame pagal aiškų ir patikrintą procesą, nuo pradinės idėjos iki galutinės svetainės paleidimo ir techninio palaikymo. Tai leidžia užtikrinti sklandų darbą, aukščiausią kokybę ir rezultatą, kuris efektyviai padeda augti jūsų verslui internete.",
}: ProcessProps) => {
	return (
		<section className="relative overflow-hidden bg-dark-surface py-20 md:py-28">
			<div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-electric-blue/10 blur-[140px]" />
			<div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-500/[0.07] blur-[140px]" />

			<div className="container relative mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6 }}
					className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
				>
					<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-electric-blue/20 bg-electric-blue/10 px-4 py-2 text-sm font-medium text-electric-blue">
						<span className="h-2 w-2 rounded-full bg-electric-blue" />
						Kaip vyksta darbas?
					</div>

					<h2 className="mb-5 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
						{headline}
					</h2>

					<p className="mx-auto max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
						{description}
					</p>
				</motion.div>

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{steps.map((step, index) => (
						<motion.div
							key={step.number}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.15 }}
							transition={{
								duration: 0.5,
								delay: (index % 3) * 0.08,
							}}
							className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-dark-surface-2/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-electric-blue/30 hover:bg-dark-surface-2 md:p-8"
						>
							<div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-electric-blue/[0.04] blur-3xl transition-all duration-500 group-hover:bg-electric-blue/[0.12]" />

							<div className="relative mb-7 flex items-center justify-between">
								<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-electric-blue/20 bg-electric-blue/10 text-sm font-bold text-electric-blue transition-all duration-300 group-hover:border-electric-blue/40 group-hover:bg-electric-blue/20">
									{step.number}
								</div>

								<ArrowUpRight className="h-5 w-5 text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-electric-blue" />
							</div>

							<div className="relative flex flex-1 flex-col">
								<h3 className="mb-4 text-xl font-bold text-white transition-colors duration-300 group-hover:text-electric-blue">
									{step.title}
								</h3>

								<p className="text-sm leading-7 text-white/55 md:text-base">
									{makeTextBold(step.description)}
								</p>
							</div>

							<div className="mt-7 flex items-center gap-2 border-t border-white/[0.06] pt-5 text-xs font-medium uppercase tracking-wider text-white/30">
								<CheckCircle2 className="h-4 w-4 text-electric-blue/70" />
								<span>Proceso žingsnis {step.number}</span>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Process;
