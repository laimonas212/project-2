import Images from "../img/Images";

export type Project = {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	image: string;
	images?: {
		desktop: string;
		tablet: string;
		mobile: string;
	};
	alt: string;
	tags: string[];
	link: string;
	metaTitle?: string;
	metaDescription?: string;
	goals?: string[];
	solutions?: string[];
	results?: string[];

};

const projects = [
	//  LŽSPA
	{
		id: "lzspa",
		title: "LŽSPA",
		subtitle: "Lietuvos žmonių su stuburo pažeidimais asociacija",
		description:
			"LŽSPA – Lietuvos žmonių su stuburo pažeidimais asociacijos svetainė, sukurta siekiant informuoti, įgalinti ir suburti bendruomenę. Puslapyje pateikiama informacija apie asociacijos veiklą, renginius, aktualijas bei galimybę prisidėti prie jos iniciatyvų. Dizainas pritaikytas prieinamumui – aiški struktūra, kontrastingos spalvos ir lengvai skaitomas turinys. Projektas įgyvendintas su WordPress ir Divi, neatlygintinai, kaip socialiai atsakinga iniciatyva.",
		image: Images.projects.lzspa,
		images: {
			desktop: Images.projects.lzspa.desktop,
			tablet: Images.projects.lzspa.tablet,
			mobile: Images.projects.lzspa.mobile,
		},
		alt: "LŽSPA, Lietuvos žmonių su stuburo pažeidimais asociacija interneto svetainė su WordPress, prieinamumo funkcijomis ir informacija apie veiklą",
		tags: [
			"WordPress",
			"Divi",
			"Prieinamumas",
			"SEO",
			"NVO",
			"Asociacija",
			"Labdara",
			"Nemokama svetainė",
			"Turinio valdymas",
		],
		link: "https://www.lzspa.lt",

		metaTitle: "LŽSPA – asociacijos svetainės kūrimas | Amberweb",
		metaDescription:
			"Sukūrėme LŽSPA svetainę su WordPress ir Divi, pritaikytą prieinamumui ir bendruomenės įgalinimui. Peržiūrėkite projektą!",

		goals: [
			"Informuoti visuomenę apie asociacijos veiklą",
			"Suburti žmones su stuburo pažeidimais bendruomenei",
			"Užtikrinti svetainės prieinamumą visiems lankytojams",
			"Sukurti lengvai valdomą turinio struktūrą su WordPress + Divi",
		],
		solutions: [
			"Aiški ir kontrastinga svetainės struktūra",
			"Lengvai skaitomas turinys ir prieinamumo funkcijos",
			"Integruoti renginių ir aktualijų skyriai",
			"WordPress + Divi leidžia administruoti turinį patogiai ir greitai",
		],
		results: [
			"Padidintas asociacijos matomumas internete",
			"Sukurta patogi ir prieinama platforma bendruomenės nariams",
			"Lengviau pasiekiama informacija apie renginius ir iniciatyvas",
		],
		testimonial: {
			client: "LŽSPA",
			text: "Džiaugiamės svetaine – ji lengvai valdoma, prieinama visiems, o bendruomenė aktyviau dalyvauja mūsų iniciatyvose.",
		},
	},
	//   Yoga with Mėta
	{
		id: "yoga-with-meta",
		title: "Yoga with Mėta",
		subtitle: "Jogos studija",
		description:
			"Yoga with Mėta – unikalūs jogos užsiėmimai, derinantys švelnius jogos pratimus su mažų gyvūnų, tokių kaip šuniukai, kačiukai ir triušiukai, draugija, taip pat joga žvakių šviesoje. Dalyviai gali atsipalaiduoti, sumažinti stresą ir mėgautis jaukia, raminančia atmosfera. Svetainėje pateikiama informacija apie užsiėmimus, trenerius, tvarkaraštį ir leidžiama registruotis internetu.",
		image: Images.projects.yogaWithMeta,
		images: {
			desktop: Images.projects.yogaWithMeta.desktop,
			tablet: Images.projects.yogaWithMeta.tablet,
			mobile: Images.projects.yogaWithMeta.mobile,
		},
		alt: "Yoga with Mėta – jogos su gyvūnais ir joga žvakių šviesoje svetainė su WordPress ir Divi",
		tags: [
			"WordPress",
			"E-Parduotuvė",
			"Divi",
			"SEO",
			"Registracija",
			"Joga su gyvūnais",
			"Joga žvakių šviesoje",
		],
		link: "https://yogawithmeta.lt",
		metaTitle:
			"Yoga with Mėta – jogos su gyvūnais ir žvakių šviesoje svetainės kūrimas | Amberweb",
		metaDescription:
			"Sukūrėme Yoga with Mėta svetainę su WordPress ir Divi, pritaikytą SEO, mobiliems įrenginiams ir užsiėmimų registracijai. Užsiėmimai apima jogą su gyvūnais ir jogą žvakių šviesoje.",
		goals: [
			"Sukurti jaukią ir raminančią svetainę jogos studijai",
			"Integruoti užsiėmimų registracijos sistemą",
			"Optimizuoti turinį SEO paieškai",
			"Užtikrinti patogų naršymą mobiliuosiuose įrenginiuose",
			"Tiksliai atspindėti jogos su gyvūnais ir žvakių šviesoje užsiėmimus",
		],
		solutions: [
			"Jaukus ir raminantis dizainas su WordPress + Divi",
			"Aiški paslaugų ir užsiėmimų struktūra",
			"SEO optimizuotas turinys ir meta žymos",
			"Kontaktų forma ir paprasta registracijos sistema",
			"Specifinių užsiėmimų informacijos integracija apie jogą su gyvūnais ir žvakių šviesoje sesijas",
		],
		results: [
			"Padidintas studijos matomumas internete",
			"Daugiau užsiregistravusių klientų per svetainę",
			"Sukurtas šiltas ir patrauklus įvaizdis, atitinkantis jogos filosofiją",
			"Tiksliai komunikuojama apie unikalius užsiėmimus su gyvūnais ir žvakių šviesoje",
		],
		testimonial: {
			client: "Yoga with Mėta",
			text: "Svetainė puikiai atspindi mūsų studijos dvasią, o užsiėmimų registracija tapo daug paprastesnė tiek mums, tiek mūsų klientams. Specialūs užsiėmimai su gyvūnais ir joga žvakių šviesoje yra aiškiai pristatyti ir patraukliai pateikti.",
		},
	},
	//   MB Akmenukas
	{
		id: "akmenukas",
		title: "MB Akmenukas",
		subtitle: "Paminklų gamyba ir kapų priežiūra Lietuvoje",
		description:
			"MB „Akmenukas“ – daugiau nei 20 metų patirties turinti įmonė, kurianti individualius sprendimus paminklų gamyboje, kapaviečių įrengime bei natūralaus akmens gaminių srityje. Svetainėje pristatomos teikiamos paslaugos, skaldos prekyba, akmens gaminiai interjerui ir eksterjerui. Projektas sukurtas naudojant WordPress ir Divi, su švariu, vizualiai patraukliu dizainu, optimizuotu SEO ir socialiniam dalinimuisi.",
		image: Images.projects.akmenukas.desktop,
		images: {
			desktop: Images.projects.akmenukas.desktop,
			tablet: Images.projects.akmenukas.tablet,
			mobile: Images.projects.akmenukas.mobile,
		},
		alt: "MB Akmenukas – paminklų gamyba, kapų tvarkymas ir akmens gaminiai, WordPress svetainė su Divi dizainu",
		tags: [
			"WordPress",
			"Divi",
			"SEO",
			"Unikalus dizainas",
			"Paminklai",
			"Kapų tvarkymas",
			"Akmens gaminiai",
			"Kontaktų forma",
			"Verslo svetainė",
		],
		link: "https://akmenukas.lt",

		metaTitle:
			"MB Akmenukas – paminklų gamybos svetainės kūrimas | Amberweb",
		metaDescription:
			"Sukūrėme MB Akmenukas svetainę su WordPress ir Divi, pritaikytą SEO, mobiliems įrenginiams ir socialiniam dalinimuisi. Peržiūrėkite projektą!",

		goals: [
			"Sukurti modernią ir patikimą interneto svetainę",
			"Pritaikyti svetainę mobiliesiems įrenginiams",
			"Optimizuoti turinį SEO paieškai",
			"Suteikti galimybę paprastai valdyti svetainę su WordPress + Divi",
		],
		solutions: [
			"Unikalus dizainas su Divi",
			"Aiški paslaugų struktūra (paminklai, priežiūra, gaminiai)",
			"SEO optimizuotas turinys ir meta žymos",
			"Kontaktų forma ir paprastas klientų užklausų valdymas",
		],
		results: [
			"Padidintas įmonės matomumas internete",
			"Paprastesnis klientų užklausų valdymas",
			"Šiuolaikiškas įvaizdis, atitinkantis įmonės patirtį ir patikimumą",
		],
		testimonial: {
			client: "MB Akmenukas",
			text: "Esame labai patenkinti rezultatu – svetainė atrodo moderniai, ją paprasta valdyti, o klientai mus randa lengviau.",
		},
	},
	//   Dentes Vitae
	{
		id: "dentes-vitae",
		title: "Dentes Vitae",
		subtitle: "Burnos priežiūros klinika",
		description:
			"Dentes Vitae – tai moderni burnos priežiūros klinika, teikianti aukštos kokybės odontologines paslaugas. Svetainėje pateikiama informacija apie klinikos teikiamas paslaugas, gydytojus, pacientų atsiliepimus bei leidžiama registruotis vizitams internetu. Projektas sukurtas naudojant WordPress ir Divi, su švariu, profesionaliu dizainu, optimizuotu SEO ir pritaikytu mobiliems įrenginiams.",
		image: Images.projects.dentesVitae,
		images: {
			desktop: Images.projects.dentesVitae.desktop,
			tablet: Images.projects.dentesVitae.tablet,
			mobile: Images.projects.dentesVitae.mobile,
		},
		alt: "Dentes Vitae – burnos priežiūros klinika, WordPress svetainė su Divi dizainu",
		tags: [
			"WordPress",
			"Divi",
			"SEO",
			"Registracija",
			"Odontologija",
			"Burnos priežiūra",
			"Kontaktų forma",
			"Verslo svetainė",
		],
		link: "https://dentesvitae.lt",
		metaTitle:
			"Dentes Vitae – burnos priežiūros svetainės kūrimas | Amberweb",
		metaDescription:
			"Sukūrėme Dentes Vitae svetainę su WordPress ir Divi, pritaikytą SEO, mobiliems įrenginiams ir vizitų registracijai. Peržiūrėkite projektą!",
		goals: [
			"Sukurti profesionalią ir patikimą interneto svetainę",
			"Pritaikyti svetainę mobiliesiems įrenginiams",
			"Optimizuoti turinį SEO paieškai",
			"Suteikti galimybę paprastai valdyti svetainę su WordPress + Divi",
			"Leisti pacientams registruotis vizitams internetu",
		],
		solutions: [
			"Profesionalus dizainas su Divi",
			"Aiški paslaugų struktūra (odontologija, burnos priežiūra)",
			"SEO optimizuotas turinys ir meta žymos",
			"Kontaktų forma ir paprastas pacientų užklausų valdymas",
			"Integruota vizitų registracijos sistema",
		],
		results: [
			"Padidintas klinikos matomumas internete",
			"Paprastesnis pacientų užklausų ir registracijų valdymas",
			"Šiuolaikiškas įvaizdis, atitinkantis klinikos profesionalumą",
		],
		testimonial: {
			client: "Dentes Vitae",
			text: "Svetainė puikiai atspindi mūsų klinikos profesionalumą, o registracijos sistema labai palengvino pacientų aptarnavimą.",
		},
	},
	//   Kauno „Paparčio“ mokykla
	{
		id: "paparciopm",
		title: "Kauno „Paparčio“ mokykla",
		subtitle: "Pradinio ugdymo įstaiga",
		description:
			"Kauno „Paparčio“ pradinė mokykla – tai savivaldybės biudžetinė įstaiga, teikianti pradinio ugdymo programas skirtingų gebėjimų mokiniams. Svetainėje pateikiama informacija apie mokyklos veiklą, pedagogus, neformaliojo ugdymo būrelius ir aktualijas. Taip pat integruota „Patyčių dėžutė“ bei prieinamumo nustatymai, užtikrinantys patogų naudojimąsi svetaine visiems lankytojams.",
		image: Images.projects.paparcioPradineMokykla,
		images: {
			desktop: Images.projects.paparcioPradineMokykla.desktop,
			tablet: Images.projects.paparcioPradineMokykla.tablet,
			mobile: Images.projects.paparcioPradineMokykla.mobile,
		},
		alt: "Kauno „Paparčio“ pradinės mokyklos interneto svetainė su WordPress ir Divi, integruota Patyčių dėžutė ir prieinamumo funkcijos",
		tags: [
			"WordPress",
			"Divi",
			"Prieinamumas",
			"Švietimas",
			"Patyčių dėžutė",
			"Mokyklos svetainė",
			"Kontaktų forma",
			"SEO",
			"Turinio valdymas",
		],
		link: "https://paparciopm.lt",

		metaTitle: "Kauno „Paparčio“ mokykla – interneto svetainė | Amberweb",
		metaDescription:
			"Sukūrėme Kauno „Paparčio“ pradinės mokyklos svetainę su WordPress ir Divi, pritaikytą prieinamumui ir mokyklos bendruomenei. Peržiūrėkite projektą!",

		goals: [
			"Informuoti apie mokyklos veiklą ir programas",
			"Užtikrinti patogų turinio pasiekiamumą visiems lankytojams",
			"Skatinti bendruomenės dalyvavimą ir sąveiką su mokykla",
			"Integruoti prieinamumo funkcijas ir interaktyvias priemones (pvz., Patyčių dėžutę)",
		],
		solutions: [
			"Aiški svetainės struktūra su WordPress + Divi",
			"Prieinamumo funkcijos visiems lankytojams",
			"Informacija apie pedagogus, būrelius ir aktualijas",
			"Interaktyvios priemonės mokinių ir tėvų įsitraukimui",
		],
		results: [
			"Padidintas mokyklos matomumas internete",
			"Lengviau pasiekiama informacija mokiniams ir tėvams",
			"Sukurtas saugus ir prieinamas skaitmeninis ryšys su bendruomene",
		],
		testimonial: {
			client: "Kauno „Paparčio“ mokykla",
			text: "Svetainė puikiai atspindi mokyklos veiklą ir yra patogi tiek tėvams, tiek mokiniams, o interaktyvios funkcijos padeda bendrauti saugiai.",
		},
	},
	//   Holistinė kosmetologija
	{
		id: "holistine-kosmetologija",
		title: "Holistinė kosmetologija",
		subtitle: "Sveikata ir grožis",
		description:
			"Holistinė kosmetologija – tai sveikatingumo ir grožio paslaugas teikiantis verslas, orientuotas į natūralumą, ekologiškumą ir holistinį požiūrį į kūno priežiūrą. Svetainėje įdiegta aiški paslaugų struktūra, integruota rezervacijų sistema su kalendoriumi bei el. parduotuvė natūraliems produktams. Dizainas sukurtas jaukus ir šviesus, pritaikytas tiek informacijos pateikimui, tiek vartotojo patogumui naršant mobiliuoju įrenginiu.",
		image: Images.projects.holistinekosmetologija,
		images: {
			desktop: Images.projects.holistinekosmetologija.desktop,
			tablet: Images.projects.holistinekosmetologija.tablet,
			mobile: Images.projects.holistinekosmetologija.mobile,
		},
		alt: "Holistinė kosmetologija, sveikatingumo ir grožio paslaugos su el. parduotuve natūraliems produktams, sukurta WordPress ir WooCommerce",
		tags: [
			"WordPress",
			"Divi",
			"WooCommerce",
			"E-parduotuvė",
			"Kalendorius",
			"Grožio paslaugos",
			"Sveikatingumas",
			"Kontaktų forma",
			"SEO",
			"Produktų katalogas",
		],
		link: "https://www.holistinekosmetologija.lt",

		metaTitle:
			"Holistinė kosmetologija – interneto svetainė su e-parduotuve | Amberweb",
		metaDescription:
			"Sukūrėme Holistinė kosmetologija svetainę su WordPress, Divi ir WooCommerce, integruotu kalendoriumi ir e-parduotuve. Peržiūrėkite projektą!",

		goals: [
			"Sukurti patrauklią ir jaukią svetainę sveikatingumo paslaugoms",
			"Integruoti rezervacijų sistemą su kalendoriumi",
			"Įdiegti el. parduotuvę natūraliems produktams",
			"Užtikrinti patogų naršymą mobiliuosiuose įrenginiuose",
		],
		solutions: [
			"Šviesus ir jaukus dizainas su WordPress + Divi",
			"Aiški paslaugų struktūra ir informacijos pateikimas",
			"Integruota WooCommerce el. parduotuvė",
			"Rezervacijų sistema su kalendoriumi klientų patogumui",
		],
		results: [
			"Padidintas klientų skaičius dėl patogios rezervacijos",
			"Natūralių produktų pardavimų augimas internetu",
			"Moderni svetainė, atitinkanti holistinės kosmetologijos koncepciją",
		],
		testimonial: {
			client: "Holistinė kosmetologija",
			text: "Svetainė tiksliai atspindi mūsų koncepciją, o rezervacijos sistema ir e-parduotuvė labai palengvino mūsų darbą su klientais.",
		},
	},
	//   Advokatės A. Veselovaitės kontora
	{
		id: "veselovaite",
		title: "Advokatės A. Veselovaitės kontora",
		subtitle: "Teisinės paslaugos",
		description:
			"A. Veselovaitės advokatų kontora – tai profesionalias teisines paslaugas teikianti įstaiga, orientuota į verslo, šeimos ir baudžiamąją teisę. Sukūrėme modernią, patikimą ir aiškios struktūros svetainę, kurioje lankytojai gali greitai rasti aktualią informaciją apie paslaugas, teisininkų patirtį ir kontaktus. Svetainė sukurta su WordPress ir Divi, įdiegta kalbų pasirinkimo funkcija, pritaikyta įvairiems įrenginiams bei optimizuota SEO.",
		image: Images.projects.veselovaite,
		images: {
			desktop: Images.projects.veselovaite.desktop,
			tablet: Images.projects.veselovaite.tablet,
			mobile: Images.projects.veselovaite.mobile,
		},
		alt: "A. Veselovaitės advokatų kontoros svetainė su WordPress ir Divi, teisinės paslaugos, kalbų pasirinkimas ir SEO optimizacija",
		tags: [
			"WordPress",
			"Divi",
			"Teisinės paslaugos",
			"SEO",
			"Kontaktų forma",
			"Verslo svetainė",
			"Kalbų pasirinkimas",
			"LT, EN, RU",
		],
		link: "https://www.veselovaite.lt",

		metaTitle:
			"Advokatės A. Veselovaitės kontora – svetainė su WordPress | Amberweb",
		metaDescription:
			"Sukūrėme Advokatės Veselovaitės kontoros svetainę su WordPress ir Divi, pritaikytą SEO ir skirtingoms kalboms. Peržiūrėkite projektą!",

		goals: [
			"Sukurti patikimą ir profesionalią interneto svetainę",
			"Užtikrinti aiškią paslaugų struktūrą ir greitą informacijos paiešką",
			"Įdiegti kalbų pasirinkimo funkciją",
			"Optimizuoti svetainę paieškai (SEO) ir mobiliems įrenginiams",
		],
		solutions: [
			"Modernus dizainas su WordPress ir Divi",
			"Aiški informacijos struktūra apie paslaugas ir teisininkus",
			"Kalbų pasirinkimo funkcija lankytojams",
			"SEO optimizacija ir pritaikymas mobiliesiems įrenginiams",
		],
		results: [
			"Padidėjęs klientų pasitikėjimas dėl patikimos svetainės",
			"Lengvesnė informacijos paieška lankytojams",
			"Moderni svetainė, atitinkanti profesionalaus advokatų kontoros įvaizdį",
		],
		testimonial: {
			client: "A. Veselovaitės kontora",
			text: "Svetainė puikiai reprezentuoja mūsų kontorą, o kalbų pasirinkimo funkcija labai patogi mūsų klientams.",
		},
	},
	//   TopStone Lietuva
	{
		id: "topstone",
		title: "TopStone Lietuva",
		subtitle: "Akmens kilimai",
		description:
			"TopStone Lietuva – tai dekoratyvinių akmens kilimų gamintojas ir montuotojas, pristatantis unikalų grindų dangos sprendimą vidaus ir lauko erdvėms. Svetainėje sukurta aiški produktų ir spalvų kolekcijų struktūra, skaičiuoklė kainai paskaičiuoti pagal dangos tipą ir plotą, o dizainas paryškina natūralaus akmens estetiką. Sprendimas sukurtas su WordPress + Divi, optimizuotas tiek informaciniam, tiek pardavimų tikslui.",
		image: Images.projects.topStone,
		images: {
			desktop: Images.projects.topStone.desktop,
			tablet: Images.projects.topStone.tablet,
			mobile: Images.projects.topStone.mobile,
		},
		alt: "TopStone Lietuva interneto svetainė su WordPress, dekoratyviniai akmens kilimai, grindų dangos skaičiuoklė ir e-parduotuvė",
		tags: [
			"WordPress",
			"Divi",
			"WooCommerce",
			"E-parduotuvė",
			"Skaičiuoklė",
			"Akmens kilimai",
			"Grindų dangos",
			"SEO",
			"Kontaktų forma",
			"Verslo svetainė",
		],
		link: "https://www.topstonelietuva.com",

		metaTitle:
			"TopStone Lietuva – dekoratyvinių akmens kilimų svetainė | Amberweb",
		metaDescription:
			"Sukūrėme TopStone Lietuva svetainę su WordPress ir Divi, su skaičiuokle, e-parduotuve ir aiškia produktų struktūra. Peržiūrėkite projektą!",

		goals: [
			"Sukurti modernią ir aiškią interneto svetainę akmens kilimų produktams",
			"Integruoti kainos skaičiuoklę pagal dangos tipą ir plotą",
			"Optimizuoti svetainę pardavimams ir informacijos pateikimui",
			"Paryškinti natūralaus akmens estetiką dizainu",
		],
		solutions: [
			"WordPress ir Divi sprendimas su unikaliu dizainu",
			"Aiški produktų ir spalvų kolekcijų struktūra",
			"Kainos skaičiuoklė pagal plotą ir dangos tipą",
			"SEO optimizacija ir e-parduotuvės integracija",
		],
		results: [
			"Padidinta pardavimų galimybė internetu",
			"Lankytojai lengvai randa reikiamus produktus ir spalvas",
			"Profesionalus ir estetiškas svetainės įvaizdis",
		],
		testimonial: {
			client: "TopStone Lietuva",
			text: "Svetainė puikiai atspindi mūsų produktų unikalumą, o skaičiuoklė padeda klientams apsispręsti greičiau.",
		},
	},
	//   ARCHI grupė
	{
		id: "archi-grupe",
		title: "ARCHI grupė",
		subtitle: "Miškininkystės ir geodezijos paslaugos",
		description:
			"Archigrupė – įmonė, teikianti profesionalias geodezijos, kartografijos, žemėtvarkos bei miškininkystės paslaugas visoje Lietuvoje. Svetainėje pateikiama informacija apie topografinius ir kadastrinius matavimus, teritorijų planavimą, miškotvarką bei kitus sprendimus, susijusius su žemės ūkio ir miškų valdymu. Patogi struktūra leidžia greitai rasti reikiamą paslaugą ir lengvai susisiekti su specialistais.",
		image: Images.projects.archiGrupe,
		images: {
			desktop: Images.projects.archiGrupe.desktop,
			tablet: Images.projects.archiGrupe.tablet,
			mobile: Images.projects.archiGrupe.mobile,
		},
		alt: "ARCHI grupė, geodezijos ir miškininkystės paslaugos, svetainė su WordPress ir Divi",
		tags: [
			"WordPress",
			"Divi",
			"Geodezija",
			"Miškininkystė",
			"SEO",
			"Kontaktų forma",
			"Verslo svetainė",
			"Turinio valdymas",
		],
		link: "https://www.archigrupe.lt",

		metaTitle:
			"ARCHI grupė – geodezijos ir miškininkystės paslaugų svetainė | Amberweb",
		metaDescription:
			"Sukūrėme ARCHI grupė svetainę su WordPress ir Divi, pateikiančią informaciją apie geodeziją, miškininkystę ir žemėtvarką. Peržiūrėkite projektą!",

		goals: [
			"Sukurti aiškią ir profesionalią interneto svetainę",
			"Pateikti informaciją apie geodezijos ir miškininkystės paslaugas",
			"Palengvinti kontaktą su specialistais",
			"Optimizuoti svetainę informacijos sklaidai ir SEO",
		],
		solutions: [
			"WordPress + Divi sprendimas su aiškiu dizainu",
			"Patogi paslaugų struktūra ir navigacija",
			"Kontaktų forma ir greitas užklausų valdymas",
			"SEO optimizacija ir informacijos aiškumas",
		],
		results: [
			"Padidintas įmonės matomumas internete",
			"Lengvesnis klientų užklausų tvarkymas",
			"Profesionalus svetainės įvaizdis, atitinkantis įmonės patikimumą",
		],
		testimonial: {
			client: "ARCHI grupė",
			text: "Svetainė atspindi mūsų profesionalumą ir leidžia klientams greitai rasti reikiamą informaciją.",
		},
	},
	//   Brangus Auto
	{
		id: "brangus-auto",
		title: "Brangus Auto",
		subtitle: "Automobilių supirkimas",
		description:
			"Brangus Auto – įmonė, teikianti greitas ir patikimas automobilių supirkimo paslaugas visoje Lietuvoje. Svetainėje įdiegtas supirkimo pasiūlymo formos sprendimas su galimybe įkelti automobilio nuotraukas bei dokumentus, pateikti informaciją apie transporto priemonę ir greitai gauti atsakymą. Dizainas aiškus, veikia kaip konversijų tunelis – lankytojas iškart nukreipiamas veiksmui, o struktūra pritaikyta tiek mobiliems, tiek stacionariems naudotojams.",
		image: Images.projects.brangusAuto,
		images: {
			desktop: Images.projects.brangusAuto.desktop,
			tablet: Images.projects.brangusAuto.tablet,
			mobile: Images.projects.brangusAuto.mobile,
		},
		alt: "Brangus Auto WordPress interneto svetainė su automobilių supirkimo forma, nuotraukų ir dokumentų įkėlimu, pritaikyta tiek mobiliems, tiek stacionariems įrenginiams",
		tags: [
			"WordPress",
			"Divi",
			"Automobilių supirkimas",
			"Failų įkėlimas",
			"Nuotraukų galerija",
			"Kontaktų forma",
			"SEO",
			"Mobiliesiems įrenginiams",
			"Verslo svetainė",
		],
		link: "https://www.brangusauto.lt",

		metaTitle: "Brangus Auto – automobilių supirkimo svetainė | Amberweb",
		metaDescription:
			"Sukūrėme Brangus Auto svetainę su WordPress ir Divi, integruota supirkimo forma su nuotraukų ir dokumentų įkėlimu. Peržiūrėkite projektą!",

		goals: [
			"Sukurti konversijoms optimizuotą svetainę",
			"Supaprastinti automobilių supirkimo pasiūlymų teikimą",
			"Pritaikyti svetainę mobiliesiems ir stacionariems įrenginiams",
			"Užtikrinti greitą atsakymą klientams",
		],
		solutions: [
			"WordPress + Divi sprendimas su aiškiu dizainu",
			"Supirkimo forma su nuotraukų ir dokumentų įkėlimu",
			"Konversijų optimizuotas vartotojo kelias",
			"SEO optimizacija ir patogus kontaktų valdymas",
		],
		results: [
			"Padidintas užklausų skaičius",
			"Greitesnis atsakymas klientams",
			"Profesionalus ir patikimas įmonės įvaizdis internete",
		],
		testimonial: {
			client: "Brangus Auto",
			text: "Svetainė labai praktiška, supirkimo procesas tapo greitesnis ir lengvesnis mūsų klientams.",
		},
	},
	//   Kaliausė
	{
		id: "kaliause",
		title: "Kaliausė",
		subtitle: "Renginių vedėjai",
		description:
			"Kaliausė – profesionalių renginių vedėjų komanda, turinti daugiau nei 10 metų patirties organizuojant šventes suaugusiems, įmonėms ir vaikams. Svetainėje pristatomos teikiamos paslaugos, teminių renginių idėjos bei realių švenčių nuotraukų galerijos, padedančios klientams susidaryti aiškų įspūdį. Dizainas žaismingas, tačiau struktūriškai aiškus – lankytojas greitai randa tai, ko ieško. Projektas sukurtas WordPress + Divi pagrindu, pritaikytas skirtingiems įrenginiams bei turinio administravimui savarankiškai.",
		image: Images.projects.kaliause,
		images: {
			desktop: Images.projects.kaliause.desktop,
			tablet: Images.projects.kaliause.tablet,
			mobile: Images.projects.kaliause.mobile,
		},
		alt: "WordPress svetainė skirta renginių vedėjų komandai, su galerija, teminių renginių idėjomis ir paslaugų pristatymu",
		tags: [
			"WordPress",
			"Divi",
			"Renginių vedėjai",
			"Galerija",
			"Teminiai renginiai",
			"Kontaktų forma",
			"SEO",
			"Verslo svetainė",
			"Paslaugų pristatymas",
		],
		link: "https://www.kaliause.lt",

		metaTitle: "Kaliausė – renginių vedėjų svetainė | Amberweb",
		metaDescription:
			"Sukūrėme Kaliausė svetainę su WordPress ir Divi, kurioje pateikiamos paslaugos, galerijos ir teminių renginių idėjos. Peržiūrėkite projektą!",

		goals: [
			"Pristatyti renginių vedėjų paslaugas ir patirtį",
			"Įkvėpti klientus teminių renginių idėjomis",
			"Pateikti vizualų įspūdį per nuotraukų galerijas",
			"Užtikrinti patogų turinio valdymą WordPress + Divi",
		],
		solutions: [
			"Žaismingas, bet struktūriškai aiškus dizainas",
			"Galerijos ir paslaugų pristatymas",
			"SEO optimizuotas turinys ir meta žymos",
			"Pritaikymas mobiliesiems įrenginiams",
		],
		results: [
			"Padidintas lankytojų susidomėjimas paslaugomis",
			"Lengvesnis turinio valdymas komandai",
			"Profesionalus įvaizdis internete, atspindintis patirtį ir kūrybiškumą",
		],
		testimonial: {
			client: "Kaliausė",
			text: "Esame labai patenkinti svetainės dizainu ir funkcionalumu – mūsų paslaugos pristatomos aiškiai, o klientai greitai randa informaciją.",
		},
	},
	//   Esu Tau
	{
		id: "esu-tau",
		title: "Esu Tau",
		subtitle: "Konsultacijos",
		description:
			"Esu Tau – dvasinio konsultavimo ir asmeninio augimo paslaugas teikiantis projektas, orientuotas į žmones, ieškančius vidinės ramybės, savęs pažinimo ir emocinės pusiausvyros. Svetainė minimalistinė, šilta ir jauki, perteikianti paslaugų esmę per tekstus, vizualus ir švarią struktūrą. Informacija pateikta aiškiai, su lengvu navigavimu, o WordPress + Divi pagrindu sukurta sistema leidžia lengvai administruoti turinį bei bendrauti su lankytojais per kontaktų formą.",
		image: Images.projects.esuTau,
		images: {
			desktop: Images.projects.esuTau.desktop,
			tablet: Images.projects.esuTau.tablet,
			mobile: Images.projects.esuTau.mobile,
		},
		alt: "Minimalistinė WordPress svetainė dvasinio konsultavimo paslaugoms, su aiškia struktūra ir lengvu navigavimu",
		tags: [
			"WordPress",
			"Divi",
			"Dvasinis konsultavimas",
			"Minimalistinis dizainas",
			"Kontaktų forma",
			"SEO",
			"Verslo svetainė",
			"Turinio valdymas",
			"Lengva navigacija",
		],
		link: "https://www.esutau.lt",

		metaTitle: "Esu Tau – dvasinio konsultavimo svetainė | Amberweb",
		metaDescription:
			"Sukūrėme Esu Tau svetainę su WordPress ir Divi, minimalistinį dizainą, lengvą navigaciją ir patogų turinio valdymą. Peržiūrėkite projektą!",

		goals: [
			"Pristatyti dvasinio konsultavimo paslaugas aiškiai ir patraukliai",
			"Sukurti minimalistinę, jaukią svetainės atmosferą",
			"Užtikrinti patogų turinio valdymą WordPress + Divi",
			"Suteikti lankytojams galimybę lengvai susisiekti per kontaktų formą",
		],
		solutions: [
			"Minimalistinis ir šiltas dizainas",
			"Aiški paslaugų struktūra ir lengva navigacija",
			"SEO optimizuotas turinys ir meta žymos",
			"Kontaktų forma integruota su administravimo sistema",
		],
		results: [
			"Padidintas lankytojų pasitikėjimas paslaugomis",
			"Lengvas turinio valdymas ir atnaujinimas",
			"Jauki svetainė, skatinanti lankytojus pasinaudoti paslaugomis",
		],
		testimonial: {
			client: "Esu Tau",
			text: "Svetainė tiksliai perteikia mūsų veiklos esmę – minimalistinė, aiški ir patogi tiek mums, tiek lankytojams.",
		},
	},
	//   Angel Butikas
	{
		id: "angel-butikas",
		title: "Angel Butikas",
		subtitle: "Butikas",
		description:
			"Angel Butikas – tai internetinė mados platforma, pristatanti išskirtinius drabužius ir aksesuarus moterims, ieškančioms originalumo ir elegancijos. Svetainėje įgyvendinta e. prekybos sistema su patogia prekių naršymo patirtimi, vizualiai akcentuotos kolekcijos bei paprastas užsakymo procesas. Dizainas subtilus ir moteriškas, paremtas šviesia palete bei aiškia struktūra, leidžiančia greitai atrasti norimą prekę. Sukurta naudojant WordPress ir Divi, optimizuota mobiliesiems.",
		image: Images.projects.angelButikas,
		images: {
			desktop: Images.projects.angelButikas.desktop,
			tablet: Images.projects.angelButikas.tablet,
			mobile: Images.projects.angelButikas.mobile,
		},
		alt: "WordPress interneto svetainė mados butikai, su e. prekybos sistema, patogiu prekių naršymu ir užsakymu",
		tags: [
			"WordPress",
			"Divi",
			"E-parduotuvė",
			"Mados butikai",
			"WooCommerce",
			"Produktų katalogas",
			"Patogus naršymas",
			"Užsakymų sistema",
			"SEO",
			"Verslo svetainė",
		],
		link: "https://www.angelbutikas.lt",

		metaTitle: "Angel Butikas – internetinė mados svetainė | Amberweb",
		metaDescription:
			"Sukūrėme Angel Butikas svetainę su WordPress ir Divi, e. prekybos sistema, aiškia struktūra ir patogia naršymo patirtimi. Peržiūrėkite projektą!",

		goals: [
			"Sukurti patrauklią ir moterišką internetinę mados platformą",
			"Integruoti e. prekybos sistemą su patogia prekių naršymo patirtimi",
			"Vizualiai akcentuoti kolekcijas ir produktus",
			"Optimizuoti svetainę mobiliesiems įrenginiams",
		],
		solutions: [
			"Subtilus, moteriškas dizainas su šviesia spalvų palete",
			"E. prekybos sistema su paprastu užsakymu",
			"Aiški prekių struktūra ir kolekcijų išdėstymas",
			"WordPress + Divi pagrindu su optimizacija mobiliesiems",
		],
		results: [
			"Padidintas pardavimų skaičius ir lankytojų įsitraukimas",
			"Greitas ir patogus prekių naršymas",
			"Profesionalus ir patrauklus įvaizdis internete",
		],
		testimonial: {
			client: "Angel Butikas",
			text: "Svetainė tiksliai atspindi mūsų stilių – elegantiška, lengvai naršoma ir skatinanti pirkimus.",
		},
	},
	//   GoDeko
	{
		id: "godeko",
		title: "GoDeko",
		subtitle: "Švenčių dekoravimas",
		description:
			"GoDeko – kūrybinė studija, teikianti švenčių dekoravimo paslaugas įvairioms progoms: nuo vaikų gimtadienių iki vestuvių ar įmonių renginių. Svetainėje akcentuojamas vizualinis turinys – integruota galerija su realių projektų nuotraukomis padeda lankytojams pajusti dekoro stilių ir estetiką. Aiški paslaugų struktūra ir užklausos forma leidžia greitai susisiekti dėl individualaus dekoro sprendimo. Projektas sukurtas su WordPress ir Divi, dizainas lengvas, žaismingas ir pilnai pritaikytas mobiliesiems įrenginiams.",
		image: Images.projects.godeko,
		images: {
			desktop: Images.projects.godeko.desktop,
			tablet: Images.projects.godeko.tablet,
			mobile: Images.projects.godeko.mobile,
		},
		alt: "WordPress svetainė švenčių dekoravimo paslaugoms, su galerija ir užklausos forma, pritaikyta mobiliems įrenginiams",
		tags: [
			"WordPress",
			"Divi",
			"Švenčių dekoravimas",
			"Galerija",
			"Kontaktų / užklausos forma",
			"SEO",
			"Mobiliesiems įrenginiams",
			"Verslo svetainė",
			"Paslaugų pristatymas",
		],
		link: "https://www.godeko.lt",

		metaTitle: "GoDeko – švenčių dekoravimo svetainė | Amberweb",
		metaDescription:
			"Sukūrėme GoDeko svetainę su WordPress ir Divi, su galerija, užklausos forma ir aiškia paslaugų struktūra. Peržiūrėkite projektą!",

		goals: [
			"Sukurti žaismingą ir patrauklią švenčių dekoravimo svetainę",
			"Integruoti galeriją su realių projektų nuotraukomis",
			"Supaprastinti klientų užklausų pateikimą per formą",
			"Pritaikyti svetainę mobiliems įrenginiams",
		],
		solutions: [
			"Lengvas ir vizualiai patrauklus dizainas su WordPress + Divi",
			"Galerija su realiais projektais ir nuotraukų demonstracija",
			"Užklausos forma su greitu atsakymu",
			"Aiški paslaugų struktūra ir navigacija",
		],
		results: [
			"Padidintas klientų užklausų skaičius",
			"Aiškus dekoro stiliaus perteikimas svetainėje",
			"Profesionalus ir žaismingas įvaizdis internete",
		],
		testimonial: {
			client: "GoDeko",
			text: "Svetainė puikiai atspindi mūsų kūrybą – lengva naršyti, vizualiai patraukli ir skatina klientus susisiekti.",
		},
	},
	//   Eriola
	{
		id: "eriola",
		title: "Eriola",
		subtitle: "Logistikos įmonė",
		description:
			"Eriola – tarptautinė logistikos ir krovinių pervežimo įmonė, teikianti platų transportavimo paslaugų spektrą visoje Europoje ir už jos ribų. Svetainėje pristatytos pagrindinės paslaugų kryptys, pabrėžiant įmonės patirtį, patikimumą ir operatyvų klientų aptarnavimą. Dizainas modernus ir aiškus, su integruotu kalbų pasirinkimu, pritaikytas skirtingiems rinkų segmentams. Sukurta su WordPress ir Divi, svetainė lengvai administruojama bei puikiai veikia visuose įrenginiuose.",
		image: Images.projects.eriola,
		images: {
			desktop: Images.projects.eriola.desktop,
			tablet: Images.projects.eriola.tablet,
			mobile: Images.projects.eriola.mobile,
		},
		alt: "WordPress svetainė tarptautinei logistikos įmonei su kalbų pasirinkimo funkcija ir moderniu dizainu",
		tags: [
			"WordPress",
			"Divi",
			"Logistika",
			"Tarptautinė įmonė",
			"Kalbų pasirinkimas",
			"SEO",
			"Verslo svetainė",
			"Kontaktų forma",
			"Modernus dizainas",
		],

		link: "https://www.eriola.lt",

		metaTitle: "Eriola – logistikos svetainė | Amberweb",
		metaDescription:
			"Sukūrėme Eriola svetainę su WordPress ir Divi, su kalbų pasirinkimo funkcija ir moderniu dizainu. Peržiūrėkite projektą!",

		goals: [
			"Sukurti modernią ir patikimą logistikos įmonės svetainę",
			"Pabrėžti įmonės patirtį ir patikimumą",
			"Integruoti kalbų pasirinkimo funkciją",
			"Užtikrinti sklandų veikimą visuose įrenginiuose",
		],
		solutions: [
			"Aiškus ir profesionalus dizainas su WordPress + Divi",
			"Kalbų pasirinkimo integracija",
			"Patogi paslaugų pristatymo struktūra",
			"Lengva svetainės administracija",
		],
		results: [
			"Pagerintas įmonės įvaizdis internete",
			"Lengvesnis klientų informacijos pasiekimas",
			"Padidintas lankytojų patogumas ir įsitraukimas",
		],
		testimonial: {
			client: "Eriola",
			text: "Svetainė puikiai atspindi mūsų profesionalumą – moderni, aiški ir lengvai administruojama.",
		},
	},
	//   Lithuan
	{
		id: "lithuan",
		title: "Lithuan",
		subtitle: "Vertimų biuras",
		description:
			"Lithuan – profesionalias vertimo paslaugas teikiantis biuras, dirbantis su įvairiomis kalbų poromis ir skirtingų sričių tekstais – nuo teisinių dokumentų iki techninių instrukcijų. Svetainėje pateikta aiški paslaugų struktūra, kalbų sąrašas, įkainių informacija ir kontaktų forma greitam užklausos pateikimui. Dizainas minimalus ir funkcionalus, orientacija į verslo klientus. Projektas įgyvendintas su WordPress ir Divi, užtikrinant lengvą turinio valdymą ir gerą pasiekiamumą mobiliuose įrenginiuose.",
		image: Images.projects.lithuan,
		images: {
			desktop: Images.projects.lithuan.desktop,
			tablet: Images.projects.lithuan.tablet,
			mobile: Images.projects.lithuan.mobile,
		},
		alt: "WordPress svetainė vertimų biurui su aiškia paslaugų struktūra ir kalbų pasirinkimo funkcija",
		tags: [
			"WordPress",
			"Divi",
			"Vertimų biuras",
			"Paslaugų struktūra",
			"Kalbų pasirinkimas",
			"SEO",
			"Verslo svetainė",
			"Kontaktų forma",
			"Profesionalus dizainas",
		],

		link: "https://www.lithuan.eu",

		metaTitle: "Lithuan – vertimų biuro svetainė | Amberweb",
		metaDescription:
			"Sukūrėme Lithuania svetainę su WordPress ir Divi, su aiškia paslaugų struktūra ir kalbų pasirinkimo funkcija. Peržiūrėkite projektą!",

		goals: [
			"Sukurti profesionalią vertimų biuro svetainę",
			"Aiškiai pristatyti paslaugas ir kalbų sąrašą",
			"Užtikrinti greitą klientų užklausų pateikimą",
			"Padaryti svetainę funkcionalią ir lengvai administruojamą",
		],
		solutions: [
			"Minimalus ir verslo orientuotas dizainas su WordPress + Divi",
			"Aiški paslaugų struktūra ir kontaktų forma",
			"Kalbų pasirinkimo integracija",
			"Mobiliesiems pritaikytas turinio valdymas",
		],
		results: [
			"Pagerintas verslo įvaizdis internete",
			"Lengvesnis paslaugų pasiekiamumas klientams",
			"Svetainė lengvai administruojama ir palaikoma",
		],
		testimonial: {
			client: "Lithuan",
			text: "Svetainė profesionaliai atspindi mūsų paslaugų pobūdį – aiški, funkcionali ir paprasta naudotis.",
		},
	},
	//   Gavorka Art
	{
		id: "gavorka-art",
		title: "Gavorka Art",
		subtitle: "Meninė galerija",
		description:
			"Gavorka Art – meninė galerija internete, skirta pristatyti išskirtinius Povilo Gavorkos kūrinius. Svetainė sukurta kaip minimalistinė ir vizualiai išgryninta erdvė, leidžianti lankytojui koncentruotis į meną – be pašalinių trukdžių. Integruota galerija su darbų peržiūra, kūrinių aprašymais bei informacija apie menininko veiklą. Projektas įgyvendintas WordPress ir Divi pagrindu, optimizuotas vizualinio turinio pateikimui ir naršymui skirtinguose įrenginiuose.",
		image: Images.projects.gavorkaArt,
		images: {
			desktop: Images.projects.gavorkaArt.desktop,
			tablet: Images.projects.gavorkaArt.tablet,
			mobile: Images.projects.gavorkaArt.mobile,
		},
		alt: "Gavorka Art – meninė galerija WordPress ir Divi pagrindu, pristatanti Povilo Gavorkos kūrinius",
		tags: [
			"WordPress",
			"Divi",
			"Meninė galerija",
			"Povilo Gavorkos kūriniai",
			"SEO",
			"Verslo svetainė",
			"Kontaktų forma",
			"Portfelis",
			"Vizualinis dizainas",
		],

		link: "https://www.gavorka.art",

		metaTitle: "Gavorka Art – meninė galerija internete | Amberweb",
		metaDescription:
			"Sukūrėme Gavorka Art svetainę su WordPress ir Divi, akcentuojant meninį turinį ir vizualią patirtį.",

		goals: [
			"Pristatyti Povilo Gavorkos kūrinius vizualiai patraukliai",
			"Sukurti minimalistinę galerijos erdvę be trukdžių",
			"Padėti lankytojams lengvai susipažinti su menininko veikla",
		],
		solutions: [
			"Minimalistinis dizainas su WordPress ir Divi",
			"Galerija su darbų aprašymais ir nuotraukomis",
			"Optimizuota vizualinio turinio pateikimui ir mobiliems įrenginiams",
		],
		results: [
			"Lankytojai susikoncentruoja į meną",
			"Padidintas menininko kūrinių matomumas internete",
			"Svetainė lengvai administruojama",
		],
		testimonial: {
			client: "Gavorka Art",
			text: "Svetainė puikiai perteikia mano kūrinių esmę – minimalistinė, aiški ir vizualiai patraukli.",
		},
	},
	//   Gavorka
	{
		id: "gavorka",
		title: "Gavorka",
		subtitle: "3D Animacija",
		description:
			"Gavorka – 3D animacijos studijos svetainė, skirta vizualiai pristatyti kūrybinius projektus ir animuotus sprendimus. Tinklalapyje pateikiamas darbų portfolio, demonstruojantis įvairius 3D animacijos stilius ir taikymus – nuo komercinių projektų iki asmeninių vizualinių eksperimentų. Dizainas kontrastingas, leidžiantis animacijoms išsiskirti, o navigacija minimalistinė ir greita. Svetainė sukurta su WordPress ir Divi, pritaikyta darbų demonstravimui bei klientų užklausų pateikimui.",
		image: Images.projects.gavorka,
		images: {
			desktop: Images.projects.gavorka.desktop,
			tablet: Images.projects.gavorka.tablet,
			mobile: Images.projects.gavorka.mobile,
		},
		alt: "Gavorka 3D animacijos portfolio su WordPress ir Divi, skirta animuotų projektų demonstravimui",
		tags: [
			"WordPress",
			"Divi",
			"3D animacija",
			"Portfolio",
			"Animuoti projektai",
			"SEO",
			"Verslo svetainė",
			"Kontaktų forma",
			"Vizualinis dizainas",
		],

		link: "https://www.gavorka.com",

		metaTitle: "Gavorka – 3D animacijos studija internete | Amberweb",
		metaDescription:
			"Sukūrėme Gavorka svetainę su WordPress ir Divi, skirta 3D animacijos projektų demonstravimui ir klientų užklausoms.",

		goals: [
			"Pristatyti 3D animacijos projektus vizualiai efektyviai",
			"Sukurti aiškų ir minimalistinį navigacijos sprendimą",
			"Skatinti klientų užklausų pateikimą",
		],
		solutions: [
			"Kontrastingas dizainas su WordPress ir Divi",
			"Portfolio demonstracija su animacijomis",
			"Minimalistinė ir greita navigacija",
		],
		results: [
			"Padidintas 3D projektų matomumas",
			"Lankytojai lengvai susipažįsta su darbais",
			"Svetainė funkcionali ir patogi administruoti",
		],
		testimonial: {
			client: "Gavorka",
			text: "Svetainė puikiai perteikia mano kūrybinius projektus ir leidžia klientams lengvai susisiekti dėl užsakymų.",
		},
	},
	//   Grožio Forma
	{
		id: "grozio-forma",
		title: "Grožio Forma",
		subtitle: "Kosmetikos parduotuvė",
		description:
			"Grožio Forma – internetinė kosmetikos parduotuvė, siūlanti platų grožio priemonių asortimentą moterims, vertinančioms kokybę ir estetiką. Svetainėje įdiegta patogi el. prekybos sistema su išsamia prekių informacija, filtravimo galimybėmis ir sklandžiu užsakymo procesu. Dizainas šviesus, minimalistinis, orientuotas į vizualinę prekių pateiktį bei mobiliųjų naudotojų patirtį. Projektas įgyvendintas WordPress ir Divi pagrindu, užtikrinant lengvą administravimą ir greitą veikimą.",
		image: Images.projects.grozioForma,
		images: {
			desktop: Images.projects.grozioForma.desktop,
			tablet: Images.projects.grozioForma.tablet,
			mobile: Images.projects.grozioForma.mobile,
		},
		alt: "Grožio Forma – kosmetikos e-parduotuvė sukurtas su WordPress ir WooCommerce, minimalistinis dizainas",
		tags: [
			"WordPress",
			"Divi",
			"WooCommerce",
			"Kosmetika",
			"E-parduotuvė",
			"Minimalistinis dizainas",
			"SEO",
			"Verslo svetainė",
			"Produktų katalogas",
			"Patogus naršymas",
		],

		link: "https://www.grozioforma.lt",

		metaTitle: "Grožio Forma – kosmetikos e-parduotuvė | Amberweb",
		metaDescription:
			"Sukūrėme Grožio Forma svetainę su WordPress ir WooCommerce, užtikrinant patogų prekių naršymą ir modernų dizainą.",

		goals: [
			"Sukurti patogią ir minimalistinę kosmetikos e-parduotuvę",
			"Padėti lankytojams greitai rasti prekes ir pateikti užsakymus",
			"Užtikrinti gerą mobiliojo įrenginio patirtį",
		],
		solutions: [
			"WordPress + Divi e-parduotuvės įdiegimas",
			"Išsamios prekių informacijos pateikimas ir filtrai",
			"Minimalistinis ir šviesus dizainas su mobilia pritaikymo optimizacija",
		],
		results: [
			"Lengvas ir sklandus prekių naršymas",
			"Padidintas klientų užsakymų skaičius",
			"Greita ir patogi turinio administracija",
		],
		testimonial: {
			client: "Grožio Forma",
			text: "Svetainė tapo aiški, minimalistinė ir labai patogi mūsų klientams naršyti bei pirkti prekes.",
		},
	},
	//   OVC
	{
		id: "ovc",
		title: "OVC",
		subtitle: "Internetinė parduotuvė",
		description:
			"OVC – tai internetinė parduotuvė, kurioje pristatomi unikalūs mokymų produktai – knygos, žaidimai ir praktiniai įrankiai, sukurti OVC Consulting komandos. Svetainė skirta tam, kad lankytojai lengvai atrastų tinkamiausius produktus asmeniniam tobulėjimui, komandiniam darbui ar profesiniams mokymams. Integruota el. prekybos sistema su aiškiu produktų išdėstymu, patogiu krepšeliu ir sklandžiu pirkimo procesu. Dizainas švarus ir modernus, su WordPress + Divi pagrindu, pritaikytas tiek verslo klientams, tiek individualiems pirkėjams.",
		image: Images.projects.ovc,
		images: {
			desktop: Images.projects.ovc.desktop,
			tablet: Images.projects.ovc.tablet,
			mobile: Images.projects.ovc.mobile,
		},
		alt: "OVC – internetinė parduotuvė su mokymų produktais sukurta WordPress ir WooCommerce, modernus dizainas",
		tags: [
			"WordPress",
			"Divi",
			"WooCommerce",
			"Mokymai",
			"E-parduotuvė",
			"Modernus dizainas",
			"SEO",
			"Verslo svetainė",
			"Produktų katalogas",
			"Patogus naršymas",
		],

		link: "https://www.e-shop.ovc.lt",

		metaTitle: "OVC – internetinė mokymų parduotuvė | Amberweb",
		metaDescription:
			"Sukūrėme OVC internetinę parduotuvę su WordPress ir WooCommerce, užtikrinant modernų dizainą ir patogų produktų pasirinkimą.",

		goals: [
			"Sukurti internetinę parduotuvę mokymų produktams",
			"Užtikrinti aiškią produktų struktūrą ir greitą pirkimo procesą",
			"Padėti tiek verslo, tiek individualiems klientams",
		],
		solutions: [
			"WordPress + Divi e-parduotuvės sistema",
			"Produkto filtrai, krepšelis ir sklandus užsakymas",
			"Modernus ir švarus dizainas su optimizacija mobiliems įrenginiams",
		],
		results: [
			"Pagerinta produktų prieinamumas ir patogumas",
			"Padidintas klientų skaičius",
			"Lengva turinio administracija",
		],
		testimonial: {
			client: "OVC",
			text: "Svetainė labai patogi ir moderni – klientams lengva rasti produktus ir juos įsigyti.",
		},
	},
	//   Printery
	{
		id: "printery",
		title: "Printery",
		subtitle: "Spauda ant tekstilės",
		description:
			"Printery – tai spaudos ant tekstilės paslaugas teikianti platforma, leidžianti klientams kurti individualius dizainus drabužiams ir aksesuarams. Svetainėje integruota failų įkėlimo sistema, leidžianti pateikti savo maketus ar logotipus tiesiai užsakymo metu. El. parduotuvėje patogiai pateikti produktai, spaudos tipai ir kainos, o užsakymo procesas – greitas ir intuityvus. Dizainas švarus, su moderniu charakteriu, pritaikytas tiek B2C, tiek B2B klientams. Projektas sukurtas su WordPress ir Divi, dėmesys skirtas sklandžiai vartotojo patirčiai bei techniniam funkcionalumui.",
		image: Images.projects.printery,
		images: {
			desktop: Images.projects.printery.desktop,
			tablet: Images.projects.printery.tablet,
			mobile: Images.projects.printery.mobile,
		},
		alt: "Printery – spauda ant tekstilės su WordPress ir WooCommerce, paprasta ir intuityvi e-parduotuvė",
		tags: [
			"WordPress",
			"Divi",
			"WooCommerce",
			"Spauda ant tekstilės",
			"E-parduotuvė",
			"Failų įkelimas",
			"Patogus naršymas",
			"SEO",
			"Verslo svetainė",
			"Minimalistinis dizainas",
		],

		link: "https://www.printery.lt",

		metaTitle:
			"Printery – spauda ant tekstilės internetinėje parduotuvėje | Amberweb",
		metaDescription:
			"Sukūrėme Printery svetainę su WordPress ir WooCommerce, integruojant failų įkėlimo sistemą ir modernų dizainą.",

		goals: [
			"Sukurti patogią spaudos ant tekstilės platformą",
			"Leisti klientams įkelti savo dizainus užsakymo metu",
			"Užtikrinti greitą ir intuityvų pirkimo procesą",
		],
		solutions: [
			"WordPress + Divi e-parduotuvė su failų įkėlimo funkcija",
			"Produktų ir spaudos tipų aiški struktūra",
			"Modernus dizainas pritaikytas B2C ir B2B klientams",
		],
		results: [
			"Pagerinta klientų patirtis",
			"Greitas ir intuityvus užsakymas",
			"Lengva turinio administracija",
		],
		testimonial: {
			client: "Printery",
			text: "Svetainė leidžia mūsų klientams greitai pateikti maketus ir užsakymus, o dizainas atrodo profesionaliai.",
		},
	},
	//   Prisipūsk Šypseną
	{
		id: "prisipusk-sypsena",
		title: "Prisipūsk Šypseną",
		subtitle: "Internetinė parduotuvė",
		description:
			"Prisipūsk Šypseną – tai internetinė parduotuvė, siūlanti ne tik balionų dekoracijas, bet ir prasmingas dovanas bei ritualinius rinkinius, skirtus džiuginti ir įkvėpti. Svetainėje integruota el. prekybos sistema su aiškia prekių struktūra, leidžiančia lengvai rasti norimą produktą. Dizainas šviesus ir žaismingas, atspindintis prekės ženklo pozityvumą. Projektas sukurtas naudojant WordPress ir Divi, užtikrinant patogų turinio valdymą ir sklandų naršymą įvairiuose įrenginiuose.",
		image: Images.projects.prisipuskSypsena,
		images: {
			desktop: Images.projects.prisipuskSypsena.desktop,
			tablet: Images.projects.prisipuskSypsena.tablet,
			mobile: Images.projects.prisipuskSypsena.mobile,
		},
		alt: "Prisipūsk Šypseną – balionų ir dovanų parduotuvė sukurta su WordPress ir WooCommerce, šviesus ir žaismingas dizainas",
		tags: [
			"WordPress",
			"Divi",
			"WooCommerce",
			"Balionai",
			"Dovanos",
			"E-parduotuvė",
			"Šviesus dizainas",
			"Žaismingas dizainas",
			"SEO",
			"Verslo svetainė",
			"Patogus naršymas",
		],

		link: "https://www.prisipusksypsena.lt",

		metaTitle:
			"Prisipūsk Šypseną – balionų ir dovanų e-parduotuvė | Amberweb",
		metaDescription:
			"Sukūrėme Prisipūsk Šypseną e-parduotuvę su WordPress ir WooCommerce, šviesiu ir žaismingu dizainu, skirta balionams ir dovanoms.",

		goals: [
			"Sukurti žaismingą ir patogią balionų bei dovanų e-parduotuvę",
			"Padėti lankytojams lengvai rasti ir užsisakyti prekes",
			"Užtikrinti sklandų turinio valdymą",
		],
		solutions: [
			"WordPress + Divi sukurta e-parduotuvė",
			"Aiški prekių struktūra ir patogus užsakymo procesas",
			"Žaismingas dizainas, optimizuotas mobiliesiems",
		],
		results: [
			"Padidintas klientų patogumas naršyti ir pirkti",
			"Greitas turinio atnaujinimas administracijoje",
			"Estetiškai patrauklus dizainas, atspindintis prekės ženklo identitetą",
		],
		testimonial: {
			client: "Prisipūsk Šypseną",
			text: "Svetainė tapo aiški, šviesi ir patraukli mūsų klientams – užsakymų skaičius padidėjo.",
		},
	},
	//   Provanso Svajos
	{
		id: "provanso-svajos",
		title: "Provanso Svajos",
		subtitle: "Rankų darbo dovanos",
		description:
			"Provanso Svajos – kūrybinės dirbtuvės ir jauki erdvė, kurioje vyksta rankdarbių užsiėmimai, edukacijos, vaikų vasaros stovyklos bei rankų darbo dovanų kūrimas. Svetainė skirta pristatyti veiklų grafiką, supažindinti lankytojus su dirbtuvėse gimstančiais kūriniais bei suteikti galimybę susisiekti dėl dalyvavimo ar individualių užsakymų. Dizainas šviesus, įkvėptas Provanso estetikos, o struktūra – paprasta ir šilta, skatinanti naršyti. Projektas sukurtas naudojant WordPress ir Divi, orientuotas į bendruomeniškumą ir kūrybišką saviraišką.",
		image: Images.projects.provansoSvajos,
		images: {
			desktop: Images.projects.provansoSvajos.desktop,
			tablet: Images.projects.provansoSvajos.tablet,
			mobile: Images.projects.provansoSvajos.mobile,
		},
		alt: "Provanso Svajos – rankų darbo dovanų ir dirbtuvių svetainė sukurta naudojant WordPress ir Divi",
		tags: [
			"WordPress",
			"Divi",
			"Rankų darbo dovanos",
			"Dirbtuvės",
			"E-parduotuvė",
			"SEO",
			"Verslo svetainė",
			"Minimalistinis dizainas",
			"Kontaktų forma",
			"Patogus naršymas",
		],

		link: "https://www.provansosvajos.lt",

		metaTitle:
			"Provanso Svajos – rankų darbo dovanos ir dirbtuvės | Amberweb",
		metaDescription:
			"Sukūrėme Provanso Svajos svetainę su WordPress ir Divi, pristatančią rankų darbo dovanas, dirbtuves ir edukacijas.",

		goals: [
			"Pristatyti rankų darbo kūrinius ir dirbtuvių veiklas",
			"Leisti lankytojams susisiekti dėl užsakymų ar dalyvauti užsiėmimuose",
			"Sukurti jaukią, bendruomenišką svetainės patirtį",
		],
		solutions: [
			"WordPress + Divi svetainė su šviesiu ir paprastu dizainu",
			"Aiški veiklų struktūra ir užsakymo kontaktinė forma",
			"Vizualinis turinys su nuotraukomis ir aprašymais",
		],
		results: [
			"Padidintas lankytojų įsitraukimas į dirbtuves",
			"Greitas užsakymų pateikimas",
			"Jauki, bendruomeniška svetainės atmosfera",
		],
		testimonial: {
			client: "Provanso Svajos",
			text: "Svetainė leidžia lengvai susipažinti su mūsų kūriniais ir dalyvauti dirbtuvėse – labai patogu.",
		},
	},
	//   Smaragdo Uostas
	{
		id: "smaragdo-uostas",
		title: "Smaragdo Uostas",
		subtitle: "Vaikų darželis",
		description:
			"Smaragdo Uostas – vaikų darželis, kuriame kuriama saugi, šilta ir kūrybiška aplinka mažųjų ugdymui. Svetainėje pateikiama išsami informacija apie ugdymo programas, kasdienę darželio rutiną, pedagogų komandą ir organizuojamas veiklas. Integruota galerija leidžia tėvams susipažinti su darželio aplinka bei veiklų akimirkomis. Dizainas šviesus, draugiškas ir lengvai naršomas, sukurtas naudojant WordPress ir Divi – užtikrinant tiek informacijos aiškumą, tiek patogų turinio valdymą.",
		image: Images.projects.smaragdoUostas,
		images: {
			desktop: Images.projects.smaragdoUostas.desktop,
			tablet: Images.projects.smaragdoUostas.tablet,
			mobile: Images.projects.smaragdoUostas.mobile,
		},
		alt: "Smaragdo Uostas – vaikų darželis su WordPress ir Divi, edukacinės veiklos ir galerija",
		tags: [
			"WordPress",
			"Divi",
			"Vaikų darželis",
			"Edukacinė veikla",
			"Galerija",
			"SEO",
			"Verslo svetainė",
			"Kontaktų forma",
			"Mobiliesiems įrenginiams",
			"Informacija tėvams",
		],

		link: "https://www.smaragdouostas.lt",

		metaTitle: "Smaragdo Uostas – vaikų darželis su galerija | Amberweb",
		metaDescription:
			"Sukūrėme Smaragdo Uostas svetainę su WordPress ir Divi, pristatančią vaikų darželio programas, galeriją ir pedagogų komandą.",

		goals: [
			"Pristatyti vaikų darželio programas ir kasdienę rutiną",
			"Leisti tėvams susipažinti su aplinka ir veiklomis",
			"Sukurti draugišką ir lengvai naršomą svetainę",
		],
		solutions: [
			"WordPress + Divi svetainė su galerija ir aiškia informacijos struktūra",
			"Vizualinis turinys su nuotraukomis",
			"Mobiliesiems ir kompiuteriams pritaikytas dizainas",
		],
		results: [
			"Padidintas tėvų pasitikėjimas darželiu",
			"Lengva susipažinti su programomis ir užsiregistruoti",
			"Aiški ir draugiška svetainės patirtis",
		],
		testimonial: {
			client: "Smaragdo Uostas",
			text: "Svetainė labai informatyvi ir patogi tėvams – aišku, ką siūlome vaikams ir kaip registruotis.",
		},
	},
	//   SSSprendimai
	{
		id: "sssprendimai",
		title: "SSSprendimai",
		subtitle: "Silpnų srovių sprendimai",
		description:
			"SSSprendimai – įmonės svetainė, pristatanti profesionalius silpnųjų srovių sprendimus: nuo apsaugos sistemų iki vaizdo stebėjimo, elektros instaliacijos bei IT tinklų. Svetainėje pateikta aiški paslaugų struktūra, leidžianti greitai suprasti, kokius sprendimus įmonė siūlo verslui ar privatiems klientams. Dizainas minimalus, funkcionalus, atitinkantis techninio sektoriaus lūkesčius. Projektas įgyvendintas su WordPress ir Divi, užtikrinant stabilų veikimą, greitą įkėlimą ir lengvą administravimą.",
		image: Images.projects.sssprendimai,
		images: {
			desktop: Images.projects.sssprendimai.desktop,
			tablet: Images.projects.sssprendimai.tablet,
			mobile: Images.projects.sssprendimai.mobile,
		},
		alt: "SSSprendimai – silpnųjų srovių sprendimai, apsaugos sistemos ir IT tinklai sukurta naudojant WordPress ir Divi",
		tags: [
			"WordPress",
			"Divi",
			"IT sprendimai",
			"Apsaugos sistemos",
			"Silpnųjų srovių sprendimai",
			"SEO",
			"Verslo svetainė",
			"Kontaktų forma",
			"Techninis dizainas",
			"Mobiliesiems įrenginiams",
		],

		link: "https://www.sssprendimai.lt",

		metaTitle:
			"SSSprendimai – silpnųjų srovių sprendimų svetainė | Amberweb",
		metaDescription:
			"Sukūrėme SSSprendimai svetainę su WordPress ir Divi, pristatančią apsaugos sistemas, elektros instaliaciją ir IT sprendimus.",

		goals: [
			"Pristatyti profesionalius silpnųjų srovių sprendimus",
			"Užtikrinti aiškią paslaugų struktūrą verslo klientams",
			"Sukurti minimalistinį ir funkcionalų dizainą",
		],
		solutions: [
			"WordPress + Divi svetainė su minimalizuotu dizainu",
			"Aiški paslaugų struktūra ir greita navigacija",
			"Optimizuota administravimui ir veikimui",
		],
		results: [
			"Stabili ir funkcionali svetainė",
			"Lengva klientams suprasti paslaugas",
			"Greitas turinio valdymas administracijoje",
		],
		testimonial: {
			// client: "SSSprendimai",
			// text: "Svetainė aiški ir profesionali, padeda klientams greitai rasti reikiamą informaciją."
		},
	},
	//   Termoventa
	{
		id: "termoventa",
		title: "Termoventa",
		subtitle: "Inžinerinės sistemos",
		description:
			"Termoventa – įmonės svetainė, pristatanti inžinerinių sistemų projektavimo, montavimo ir aptarnavimo paslaugas. Svetainėje pateikiama techninė informacija apie šildymo, vėdinimo, kondicionavimo bei kitus sprendimus, sklandžiai struktūruota pagal paslaugų kategorijas. Dizainas modernus ir funkcionalus, orientuotas į verslo klientus, ieškančius patikimo partnerio. Projektas įgyvendintas WordPress ir Divi pagrindu, užtikrinant lengvą turinio administravimą ir patogią vartotojo patirtį tiek kompiuteriuose, tiek mobiliuosiuose įrenginiuose.",
		image: Images.projects.termoventa,
		images: {
			desktop: Images.projects.termoventa.desktop,
			tablet: Images.projects.termoventa.tablet,
			mobile: Images.projects.termoventa.mobile,
		},
		alt: "Termoventa – inžinerinių sistemų projektavimas ir montavimas, sukurtas su WordPress ir Divi",
		tags: [
			"WordPress",
			"Divi",
			"Inžinerinės sistemos",
			"Projektavimas",
			"Montavimas",
			"SEO",
			"Verslo svetainė",
			"Kontaktų forma",
			"Techninis dizainas",
			"Mobiliesiems įrenginiams",
		],

		link: "https://www.termoventa.lt",

		metaTitle:
			"Termoventa – inžinerinių sistemų projektavimo svetainė | Amberweb",
		metaDescription:
			"Sukūrėme Termoventa svetainę su WordPress ir Divi, pristatančią šildymo, vėdinimo ir kondicionavimo sprendimus.",

		goals: [
			"Pristatyti inžinerinių sistemų paslaugas",
			"Sukurti modernią ir patogią svetainę verslo klientams",
			"Užtikrinti aiškią informacijos struktūrą",
		],
		solutions: [
			"WordPress + Divi svetainė su moderniu dizainu",
			"Aiški paslaugų kategorijų struktūra",
			"Optimizuota administravimui ir vartotojo patirčiai",
		],
		results: [
			"Padidintas klientų pasitikėjimas įmone",
			"Lengva rasti techninę informaciją",
			"Greitas ir patogus turinio valdymas",
		],
		testimonial: {
			client: "Termoventa",
			text: "Svetainė aiški ir profesionali, puikiai pristato mūsų paslaugas.",
		},
	},
	//   Tradicinė Virtuvė
	{
		id: "tradicine-virtuve",
		title: "Tradicinė Virtuvė",
		subtitle: "Kavinė",
		description:
			"Tradicinė Virtuvė – tai kavinės svetainė, skirta pristatyti autentiškus lietuviškus patiekalus šiuolaikiškai. Svetainėje lankytojai gali peržiūrėti išsamų meniu, pasigrožėti patiekalų nuotraukomis bei greitai rasti kontaktinę informaciją ar rezervacijos galimybę. Dizainas šiltas, jaukus, atitinkantis tradicinės virtuvės dvasią, tačiau pateiktas moderniai ir aiškiai. Projektas sukurtas su WordPress ir Divi, pritaikytas tiek stacionariems įrenginiams, tiek mobiliesiems – kad alkani klientai greitai rastų, ko ieško.",
		image: Images.projects.tradicineVirtuve,
		images: {
			desktop: Images.projects.tradicineVirtuve.desktop,
			tablet: Images.projects.tradicineVirtuve.tablet,
			mobile: Images.projects.tradicineVirtuve.mobile,
		},
		alt: "Tradicinė Virtuvė – lietuviškų patiekalų kavinė sukurta naudojant WordPress ir Divi, modernus dizainas",
		tags: [
			"WordPress",
			"Divi",
			"Kavinė",
			"Lietuviški patiekalai",
			"Modernus dizainas",
			"SEO",
			"Verslo svetainė",
			"Meniu",
			"Kontaktų forma",
			"Mobiliesiems įrenginiams",
		],

		link: "https://www.tradicinevirtuve.lt",

		metaTitle: "Tradicinė Virtuvė – kavinės svetainė su meniu | Amberweb",
		metaDescription:
			"Sukūrėme Tradicinė Virtuvė svetainę su WordPress ir Divi, pristatančią autentiškus lietuviškus patiekalus ir meniu.",

		goals: [
			"Pristatyti kavinės meniu ir autentiškus patiekalus",
			"Sukurti šiltą ir jaukią svetainę",
			"Užtikrinti aiškią navigaciją tiek mobiliesiems, tiek kompiuteriams",
		],
		solutions: [
			"WordPress + Divi svetainė su moderniu ir šiltu dizainu",
			"Vizualinis meniu ir patiekalų nuotraukos",
			"Greita rezervacijos ir kontaktinė informacija",
		],
		results: [
			"Padidintas lankytojų įsitraukimas",
			"Lengva naršyti meniu ir pateikti užsakymus",
			"Jauki svetainės patirtis",
		],
		testimonial: {
			client: "Tradicinė Virtuvė",
			text: "Svetainė aiški ir patogi – lankytojai greitai randa meniu ir kontaktus.",
		},
	},
	//   U-Smiler
	{
		id: "u-smiler",
		title: "U-Smiler",
		subtitle: "Irigatorius",
		description:
			"U-Smiler – internetinė parduotuvė, skirta irigatorių – dantų ir burnos ertmės priežiūros prietaisų – pristatymui ir pardavimui. Svetainėje pateikiama detali informacija apie produktų privalumus, naudojimo būdus bei naudą sveikatai. Dizainas švarus, minimalistinis, atspindintis higienos tematiką ir pasitikėjimą. Įdiegta patogi užsakymo sistema, leidžianti greitai įsigyti prekę tiek mobiliuoju, tiek kompiuteriu. Projektas sukurtas WordPress ir Divi pagrindu, optimizuotas vartotojo patirčiai ir pirkimo konversijoms.",
		image: Images.projects.uSmiler,
		images: {
			desktop: Images.projects.uSmiler.desktop,
			tablet: Images.projects.uSmiler.tablet,
			mobile: Images.projects.uSmiler.mobile,
		},
		alt: "U-Smiler – dantų ir burnos ertmės priežiūros prietaisai, e-parduotuvė sukurta su WordPress ir WooCommerce",
		tags: [
			"WordPress",
			"Divi",
			"WooCommerce",
			"Dantų priežiūros prietaisai",
			"E-parduotuvė",
			"SEO",
			"Verslo svetainė",
			"Produktų katalogas",
			"Minimalistinis dizainas",
			"Patogus naršymas",
		],

		link: "https://www.u-smiler.lt",

		metaTitle: "U-Smiler – irigatorių e-parduotuvė | Amberweb",
		metaDescription:
			"Sukūrėme U-Smiler e-parduotuvę su WordPress ir WooCommerce, pristatančią irigatorius ir dantų priežiūros priemones.",

		goals: [
			"Pristatyti ir parduoti dantų ir burnos ertmės priežiūros prietaisus",
			"Sukurti minimalistinę ir higienišką svetainę",
			"Optimizuoti vartotojo patirtį pirkimui",
		],
		solutions: [
			"WordPress + Divi e-parduotuvė",
			"Detali produktų informacija ir aiškus užsakymo procesas",
			"Minimalistinis dizainas, optimizuotas konversijoms",
		],
		results: [
			"Padidintas prekių pardavimas",
			"Greitas ir patogus pirkimo procesas",
			"Pozityvi vartotojo patirtis",
		],
		testimonial: {
			client: "U-Smiler",
			text: "Svetainė minimalistinė ir patogi – klientams lengva įsigyti prekę.",
		},
	},
	// Gabikami
	{
		id: "gabikami",
		title: "Gabikami",
		subtitle: "Profesionalus makiažas Vilniuje",
		description:
			"Gabikami – tai profesionalaus makiažo paslaugų svetainė, pristatanti šventinį, vestuvinį ir kasdienį makiažą Vilniuje. Svetainėje lankytojai gali patogiai registruotis internetu, susipažinti su paslaugomis, kainomis, makiažo patarimais bei peržiūrėti atliktų darbų galeriją. Dizainas švarus, elegantiškas ir moteriškas – atspindintis grožio industrijos estetiką. Projektas sukurtas naudojant WordPress ir Divi, užtikrinant lengvą valdymą tiek klientui, tiek administratoriui.",
		image: Images.projects.gabikami,
		images: {
			desktop: Images.projects.gabikami.desktop,
			tablet: Images.projects.gabikami.tablet,
			mobile: Images.projects.gabikami.mobile,
		},
		alt: "Gabikami – makiažo paslaugų svetainė su elegantišku dizainu ir registracijos forma",
		tags: [
			"WordPress",
			"Divi",
			"Makiažas",
			"Grožio industrija",
			"Galerija",
			"SEO",
			"Kontaktų forma",
			"Kainoraštis",
			"Pritaikyta mobiliems",
		],
		link: "https://www.gabikami.lt",
		metaTitle:
			"Gabikami – profesionalaus makiažo paslaugos Vilniuje | Amberweb",
		metaDescription:
			"Sukūrėme Gabikami makiažo paslaugų svetainę su WordPress ir Divi – su registracija internetu, paslaugų kainoraščiu ir darbų galerija.",
		goals: [
			"Sudaryti galimybę klientams lengvai registruotis internetu",
			"Elegantiškai pristatyti makiažo paslaugas ir kainas",
			"Parodyti atliktų darbų galeriją ir patarimus klientams",
		],
		solutions: [
			"WordPress + Divi svetainė su integruota registracijos forma",
			"Elegantiškas ir moteriškas dizainas su pastelinių spalvų blokais",
			"Aiški paslaugų struktūra, kainoraštis ir darbų galerija",
		],
		results: [
			"Padidintas klientų pasitikėjimas paslaugomis",
			"Patogus būdas registruotis internetu",
			"Skaidri kainodara ir vizualiai patraukli darbų galerija",
		],
		testimonial: {
			client: "Gabikami",
			text: "Svetainė ne tik elegantiška, bet ir labai patogi – klientams lengva registruotis ir rasti visą informaciją apie paslaugas.",
		},
	},
];

export default projects;
