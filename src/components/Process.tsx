import { motion } from "framer-motion";

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

// function to make text between ** ** bold in markdown
const makeTextBold = (text: string) => {
    const regex = /\*\*(.*?)\*\*/g;
    return text.split(regex).map((part, index) =>
        index % 2 === 1 ? (
            <strong key={index} className="font-bold">
                {part}
            </strong>
        ) : (
            part
        )
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
			title: "Paleidimas ir palaikymas",
			description:
				"Prieš paleidžiant projektą, atliekame išsamų **testavimą**, kad įsitikintume, jog viskas veikia nepriekaištingai. Po to, atliekame paskutinius **optimizavimo darbus**, konfigūruojame talpinimo paslaugas ir oficialiai paleidžiame svetainę. Mes ne tik paleidžiame projektą, bet ir pasirūpiname, kad jis būtų paruoštas augti ir pritraukti jūsų auditoriją, teikdami ir tolesnį **techninį palaikymą**.",
		},
	],
	headline = "Išsamus interneto svetainių kūrimo procesas",
	description = "Mes dirbame pagal aiškų ir patikrintą procesą, nuo pradinės idėjos iki galutinės svetainės paleidimo ir techninio palaikymo. Tai leidžia užtikrinti sklandų darbą, aukščiausią kokybę ir rezultatą, kuris efektyviai padeda augti jūsų verslui internete.",
}: ProcessProps) => {
	return (
    <section className="py-20 bg-dark-surface relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{headline}</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="group relative bg-dark-surface-2 rounded-lg p-6 shadow-lg flex flex-col 
             border border-transparent hover:border-electric-blue/30 transition-colors duration-300"
            >
              {/* Badge */}
              <div
                className="absolute -top-4 -left-3 w-12 h-12 rounded-full bg-dark-surface-2 flex items-center justify-center text-white font-bold transition-all duration-300 ease-in-out group-hover:scale-0 group-hover:opacity-0"
              >
                {step.number}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-white/70">{makeTextBold(step.description)}</p>

              {/* Rodyklės burbuliuko stiliumi */}
              {index < steps.length - 1 && (
                <>
                  {/* Desktop / tablet – į dešinę */}
                  <div
                    className="hidden md:block absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 
                      transition-opacity duration-300 group-hover:opacity-0"
                  >
                    <div className="w-0 h-0 border-t-[16px] border-b-[16px] border-l-[16px] border-transparent border-l-dark-surface-2"></div>
                  </div>

                  {/* Mobile – į apačią */}
                  <div
                    className="md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full 
                      transition-opacity duration-300 group-hover:opacity-0"
                  >
                    <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-t-[16px] border-transparent border-t-dark-surface-2"></div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
