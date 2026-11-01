import type { Metadata } from "next";
import Link from "next/link";
import Faktagranskningsmetod from "@/components/Faktagranskningsmetod";
import {
  CONTACT_EMAIL,
  OWNER_COMPANY,
  OWNER_ORG_NR,
  isPlaceholder,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Om oss – vem som står bakom driva-foretag.se",
  description:
    "driva-foretag.se är en guidesajt för svenska företagare. Läs om vem som driver sajten, hur vi faktagranskar belopp och lagrum, och hur sajten finansieras.",
  alternates: { canonical: "https://driva-foretag.se/om-oss" },
};

/** Liten röd markör så att en oifylld platshållare inte kan smita förbi. */
function Platshallare() {
  return (
    <span className="text-red-600 font-medium">
      {" "}
      (platshållare – fylls i före publicering)
    </span>
  );
}

export default function OmOssPage() {
  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand">
          Hem
        </Link>
        <span className="mx-2">/</span>
        <span className="text-brand font-medium">Om oss</span>
      </nav>

      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-brand mb-6">
            Om driva-foretag.se
          </h1>

          {/* Vad sajten ar */}
          <h2 className="font-heading text-2xl font-bold text-brand mt-10 mb-4">
            Vad sajten är
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            driva-foretag.se är en guidesajt för dig som driver eller ska starta
            företag i Sverige. Här finns artiklar om bolagsformer, bokföring,
            skatt, moms, arbetsrätt, personalfrågor, finansiering och
            marknadsföring, samt några kalkylatorer för moms, lön och vinst.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Målet är enkelt: att du ska hitta rätt siffra och rätt regel utan att
            behöva leta igenom myndighetstexter själv – och att du ska kunna
            kontrollera varje uppgift mot originalkällan när det gäller något
            viktigt.
          </p>

          {/* Vem som driver den */}
          <h2 className="font-heading text-2xl font-bold text-brand mt-12 mb-4">
            Vem som driver sajten
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Sajten ägs och drivs av{" "}
            <strong className="text-brand">{OWNER_COMPANY}</strong>
            {isPlaceholder(OWNER_COMPANY) && <Platshallare />}, organisationsnummer{" "}
            <strong className="text-brand">{OWNER_ORG_NR}</strong>
            {isPlaceholder(OWNER_ORG_NR) && <Platshallare />}.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Innehållet ges ut av{" "}
            <Link href="/redaktionen" className="text-accent hover:underline">
              redaktionen
            </Link>{" "}
            och publiceras under namnet{" "}
            <strong className="text-brand">Redaktionen, driva-foretag.se</strong>
            . Vi publicerar inte artiklar under enskilda skribenters namn, och vi
            anger inga titlar eller meriter som inte går att kontrollera.
          </p>

          {/* Kontakt */}
          <h2 className="font-heading text-2xl font-bold text-brand mt-12 mb-4">
            Kontakt
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Frågor, rättelser och synpunkter går till{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-accent hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            . Gäller det en enskild artikel, skriv gärna vilken – det gör det
            snabbare att rätta.
          </p>

          {/* Faktagranskning */}
          <h2 className="font-heading text-2xl font-bold text-brand mt-12 mb-4">
            Så faktagranskar vi
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Sajten handlar om pengar, skatt och juridik. En felaktig siffra kan
            kosta en läsare riktiga pengar. Därför arbetar vi så här:
          </p>
          <Faktagranskningsmetod />

          {/* Finansiering */}
          <h2 className="font-heading text-2xl font-bold text-brand mt-12 mb-4">
            Hur sajten finansieras
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Artiklarna är gratis att läsa. Sajten finansieras på två sätt:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li>
              <strong className="text-brand">Branschguider.</strong> Vi säljer
              fördjupade{" "}
              <Link href="/guider" className="text-accent hover:underline">
                startguider som PDF
              </Link>{" "}
              för enskilda branscher. Köpvillkoren finns på{" "}
              <Link href="/kopvillkor" className="text-accent hover:underline">
                Köpvillkor
              </Link>
              .
            </li>
            <li>
              <strong className="text-brand">Annonslänkar.</strong> Vissa länkar
              till tjänsteleverantörer kan ge oss ersättning. Varje sådan länk är
              märkt &quot;Annonslänk&quot; där den förekommer. Ersättning styr
              aldrig vad vi skriver eller vilka verktyg vi beskriver.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Vi förmedlar inga rådgivare och får ingen ersättning från
            rådgivare eller byråer. Behöver du hjälp med ditt eget fall går vår
            guide{" "}
            <Link href="/hitta-radgivare" className="text-accent hover:underline">
              Så väljer du redovisningsbyrå eller revisor
            </Link>{" "}
            igenom vad du ska fråga om. Hur vi hanterar personuppgifter står i vår{" "}
            <Link href="/integritetspolicy" className="text-accent hover:underline">
              integritetspolicy
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
