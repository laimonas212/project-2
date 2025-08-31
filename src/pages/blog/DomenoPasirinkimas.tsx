import React from "react";
import Images from "../../img/Images";
import CTA from "../../components/CTA";
import BlogNavigation from "../../components/BlogNavigation";
import blogEntries from "../../components/blogEntries";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const entry = blogEntries.find((e) => e.id === "domeno-pasirinkimas");

const DomenoPasirinkimas = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/blog");
    };
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Kaip pasirinkti tinkamą domeną? | Amberweb</title>
                <meta
                    name="description"
                    content="Kaip išsirinkti geriausią domeną savo verslui? Sužinokite, kokius kriterijus svarbu įvertinti renkantis domeno pavadinimą: paprastumą, raktažodžius, galūnę ir prekės ženklo atpažįstamumą."
                />
                <link rel="canonical" href={`https://amberweb.lt${entry?.url}`} />
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
                        src={Images.blog.Domenas}
                        alt="Kaip pasirinkti tinkamą domeną"
                        className="w-full h-auto bg-gradient-to-r from-electric-blue to-neon-purple pt-[2px] rounded-b-lg animate-gradient-x"
                    />
                </div>
                <div className="mb-8 pb-8 card">
                    <h1 className="text-4xl font-bold text-electric-blue mb-12">
                        Kaip pasirinkti tinkamą domeną?
                    </h1>

                    <h3 className="text-white/70 mb-6">
                        Domenas – tai jūsų verslo adresas internete. Tinkamai
                        pasirinktas domeno pavadinimas gali padėti išsiskirti,
                        geriau pozicionuoti savo svetainę „Google“ paieškoje ir
                        sukurti patikimą pirmą įspūdį.
                    </h3>

                    <h2 className="text-2xl font-semibold mb-4">
                        1. Paprastumas ir įsimenamumas
                    </h2>
                    <p className="text-white/70 mb-6">
                        Trumpas ir lengvai įsimenamas domenas yra raktas į sėkmę.
                        Venkite sudėtingų raidžių derinių ar skaičių – kuo
                        paprasčiau, tuo geriau. Pvz., <em>manoimone.lt</em> visada
                        bus aiškiau nei <em>mano-imone123.lt</em>.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">
                        2. Raktažodžiai domeno pavadinime
                    </h2>
                    <p className="text-white/70 mb-6">
                        Jei įmanoma, naudokite raktažodį, susijusį su jūsų veikla.
                        Tai gali padėti SEO. Pavyzdžiui, jei teikiate buhalterijos
                        paslaugas, domenas
                        <em> buhalterija.lt</em> yra aiškus signalas tiek
                        klientams, tiek paieškos sistemoms.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">
                        3. Pasirinkite tinkamą galūnę (.lt, .com, .eu ir kt.)
                    </h2>
                    <p className="text-white/70 mb-6">
                        Lietuvoje veikiantiems verslams labiausiai tinka{" "}
                        <strong>.lt</strong> domenas. Jei planuojate tarptautinę
                        veiklą, verta pagalvoti apie <strong>.com</strong> ar{" "}
                        <strong>.eu</strong>. Svarbiausia – pasirinkti galūnę,
                        atitinkančią jūsų auditoriją.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">
                        4. Prekės ženklo atpažįstamumas
                    </h2>
                    <p className="text-white/70 mb-6">
                        Domenas turėtų stiprinti jūsų prekės ženklą. Jei
                        pavadinimas unikalus ir lengvai atpažįstamas – klientams
                        bus lengviau jus prisiminti. Tokiu būdu domenas tampa ne
                        tik adresu, bet ir verslo identiteto dalimi.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">
                        5. Patikrinkite, ar domenas neužimtas
                    </h2>
                    <p className="text-white/70 mb-6">
                        Prieš registruodami, pasitikrinkite domeno prieinamumą.
                        Jei pavadinimas jau naudojamas, geriau rinktis kitą
                        variantą, o ne pridėti nereikalingų simbolių, kurie tik
                        klaidina vartotojus.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">Išvada</h2>
                    <p className="text-white/70 mb-6">
                        Tinkamai pasirinktas domenas yra ilgalaikė investicija į
                        jūsų verslo matomumą internete. Paprastumas, tinkama
                        galūnė, raktažodžiai ir prekės ženklo stiprinimas –
                        pagrindiniai kriterijai, į kuriuos verta atsižvelgti.
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

export default DomenoPasirinkimas;
