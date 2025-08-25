import React from 'react';
import CTA from '../../components/CTA';
import BlogNavigation from '../../components/BlogNavigation';
import blogEntries from '../../components/blogEntries';
import { Helmet } from 'react-helmet-async';
import { Clock } from 'lucide-react';
import Images from '../../img/Images';
import { Link } from 'react-router-dom';

const Svetaine24hStraipsnis = () => {
    return (
      <div className="pt-36 min-h-screen">
        <Helmet>
          <title>
            Internetinė svetainė per 24 val. – ar tai įmanoma? | Amberweb
          </title>
          <meta
            name="description"
            content="Sužinokite, kaip įmanoma sukurti profesionalią interneto svetainę per 24 valandas – greitai, kokybiškai ir efektyviai. Amberweb siūlo sprendimus verslui, kuriam svarbus greitis."
          />
          <link
            rel="canonical"
            href="https://amberweb.lt/blog/svetaine-per-24h"
          />
        </Helmet>

        <div className="container max-w-screen-lg text-white/80 mx-auto px-4">
          <div className="w-full pb-8">
            <img
              src={Images.blog.websiteIn24h}
              alt="Svetainė per 24h."
              className="w-full h-auto bg-gradient-to-r from-electric-blue to-neon-purple pt-[2px] rounded-b-lg"
            />
          </div>
          <div className="mb-8 pb-8 card">
            <h1 className="text-4xl font-bold text-electric-blue mb-12">
              Internetinė svetainė per 24 val. – ar tai įmanoma?
            </h1>

            <h3 className="text-white/70 mb-6">
              Verslui svarbus greitis – kartais naujos svetainės reikia čia ir
              dabar. Bet ar įmanoma ją sukurti vos per{" "}
              <strong>vieną dieną</strong>? Atsakymas – taip. Paaiškinsime kaip.
            </h3>

            <h2 className="text-2xl font-semibold mb-4">
              Greita nereiškia paviršutiniška
            </h2>
            <p className="text-white/70 mb-6">
              24 valandų terminas galioja ne kompromisams, o procesui. Dirbant
              su iš anksto paruoštu dizainu, efektyvia struktūra ir žinant
              kliento poreikius – svetainė gali būti paleista greičiau, nei
              daugelis įsivaizduoja.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              Kas įeina į 24h sprendimą?
            </h2>
            <ul className="pl-4 mb-6">
              <li className="text-white/70 list-item list-disc">
                Turinio valdymo sistema (WordPress)
              </li>
              <li className="text-white/70 list-item list-disc">
                Parinktas dizainas pagal nišą
              </li>
              <li className="text-white/70 list-item list-disc">
                1-2 puslapiai (pvz. landing, kontaktai)
              </li>
              <li className="text-white/70 list-item list-disc">
                Kontaktinė forma
              </li>
              <li className="text-white/70 list-item list-disc">
                Informacijos patalpinimas
              </li>
              <li className="text-white/70 list-item list-disc">
                Mobiliesiems pritaikytas dizainas
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
              Kam toks sprendimas tinka?
            </h2>
            <p className="text-white/70 mb-6">
              Šis modelis idealus naujam verslui, laikinai kampanijai ar kai
              tiesiog reikia <strong>greitai būti internete</strong>. Jei vėliau
              norėsite plėsti svetainę – tam pasiruošta.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Kokie apribojimai?</h2>
            <p className="text-white/70 mb-6">
              Greitis reikalauja tvarkos: visa informacija (tekstai, logotipas,
              kontaktai) turi būti pateikta iš anksto. Nestandartiniai
              sprendimai ar el. prekyba – jau ilgesnis procesas.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              Kodėl verta rinktis būtent mus?
            </h2>
            <ul className="pl-4 mb-6">
              <li className="text-white/70 list-item list-disc">
                Turime ilgametę patirtį su WordPress ir Divi
              </li>
              <li className="text-white/70 list-item list-disc">
                Puikiai suprantame mažų verslų poreikius
              </li>
              <li className="text-white/70 list-item list-disc">
                Turime paruoštų
                {/* link to  paruosti-dizainai*/}
                <Link
                  to="/paruosti-dizainai"
                  className="text-electric-blue hover:underline"
                >
                  &nbsp;profesionalių dizaino šablonų&nbsp;
                </Link>
                skirtingoms nišoms
              </li>
              <li className="text-white/70 list-item list-disc">
                Sklandus bendravimas ir darbas iki rezultato
              </li>
            </ul>

            <p className="text-white/70 mb-6">
              Jei reikia greitos, profesionalios ir estetiškos svetainės –
              susisiekite. Gali būti, kad jūsų projektas bus paleistas dar
              rytoj.
            </p>

            <div className="flex items-center gap-2 text-white/70 mt-12">
              <Clock className="w-5 h-5 text-electric-blue" />
              <span>
                Svetainė per 24 val. – skamba greitai, nes ir yra greitai.
              </span>
            </div>
          </div>
        </div>

        <BlogNavigation blogEntries={blogEntries} />
        <div className="relative">
          <CTA />
        </div>
      </div>
    );
};

export default Svetaine24hStraipsnis;
