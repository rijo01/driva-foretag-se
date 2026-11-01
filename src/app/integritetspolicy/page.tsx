import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, OWNER_COMPANY, OWNER_ORG_NR } from "@/lib/site";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description:
    "Så behandlar driva-foretag.se personuppgifter: köp av guider, cookies och Google Analytics, och vilka rättigheter du har.",
  alternates: { canonical: "https://driva-foretag.se/integritetspolicy" },
};

/** Ändra datumet när innehållet ändras – och i STATIC_LAST_MODIFIED i sitemap.ts. */
const UPDATED = "2026-11-01";

const h2 = "font-heading text-2xl font-bold text-brand mt-12 mb-4";
const p = "text-gray-700 leading-relaxed mb-4";
const ul = "list-disc pl-6 space-y-2 text-gray-700 mb-6";
const a = "text-accent hover:underline";

export default function IntegritetspolicyPage() {
  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand">
          Hem
        </Link>
        <span className="mx-2">/</span>
        <span className="text-brand font-medium">Integritetspolicy</span>
      </nav>

      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-brand mb-4">
            Integritetspolicy
          </h1>
          <p className="text-sm text-gray-500 mb-8">Uppdaterad: {UPDATED}</p>

          <h2 className={h2}>Personuppgiftsansvarig</h2>
          <p className={p}>
            Personuppgiftsansvarig för driva-foretag.se är{" "}
            <strong className="text-brand">{OWNER_COMPANY}</strong>,
            organisationsnummer {OWNER_ORG_NR}. Frågor om hur vi behandlar dina
            uppgifter, och begäran om att utöva dina rättigheter, skickar du till{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className={a}>
              {CONTACT_EMAIL}
            </a>
            .
          </p>

          <h2 className={h2}>När du läser sajten</h2>
          <p className={p}>
            Du kan läsa allt innehåll utan att lämna några personuppgifter. Som
            alla webbplatser loggar vår driftleverantör Vercel tekniska uppgifter,
            bland annat IP-adress, webbläsare och vilken sida som efterfrågades.
            Det behövs för att leverera sidorna och skydda tjänsten mot
            överbelastning och missbruk. Den rättsliga grunden är vårt berättigade
            intresse av en fungerande och säker webbplats.
          </p>

          <h2 className={h2}>Cookies och Google Analytics</h2>
          <p className={p}>
            Vi använder Google Analytics 4 för att förstå hur sajten används,
            till exempel vilka artiklar som läses. Google Analytics laddas{" "}
            <strong>bara om du godkänner det</strong> i cookie-rutan. Utan
            samtycke körs inget mätskript och inga analyscookies sätts.
          </p>
          <ul className={ul}>
            <li>
              <strong>Cookies:</strong> <code>_ga</code> och{" "}
              <code>_ga_&lt;id&gt;</code>, som skiljer besökare och sessioner åt.
              De sätts av Google Analytics och lagras i upp till två år.
            </li>
            <li>
              <strong>Mottagare:</strong> Google Ireland Ltd och Google LLC.
              Uppgifter kan överföras till USA. Google omfattas av EU:s och USA:s
              ramverk för dataskydd (EU-U.S. Data Privacy Framework).
            </li>
            <li>
              <strong>Rättslig grund:</strong> ditt samtycke. Du kan när som helst
              ändra eller dra tillbaka det via{" "}
              <em>Cookieinställningar</em> längst ned på varje sida.
            </li>
          </ul>
          <p className={p}>
            Ditt val sparas i webbläsarens lokala lagring (localStorage) så att
            rutan inte visas på varje sida. Den lagringen är nödvändig för att
            komma ihåg ditt val och kräver därför inget samtycke.
          </p>

          <h2 className={h2}>När du köper en guide</h2>
          <p className={p}>
            Betalningen sköts av Stripe. Kortuppgifterna går direkt till Stripe och
            hanteras aldrig av oss. Vi får uppgifter om köpet, till exempel e-post,
            belopp, datum och vilken guide du köpt.
          </p>
          <ul className={ul}>
            <li>
              <strong>Ändamål och rättslig grund:</strong> att fullgöra köpet
              (avtal) och att uppfylla bokföringslagen (rättslig förpliktelse).
            </li>
            <li>
              <strong>Lagringstid:</strong> räkenskapsinformation sparas i sju år
              efter utgången av det kalenderår då räkenskapsåret avslutades, som
              bokföringslagen kräver.
            </li>
            <li>
              <strong>Mottagare:</strong> Stripe (betalning), som är
              självständigt personuppgiftsansvarig för vissa behandlingar, till
              exempel bedrägeriskydd.
            </li>
          </ul>
          <p className={p}>
            Villkoren för köpet finns i våra{" "}
            <Link href="/kopvillkor" className={a}>
              köpvillkor
            </Link>
            .
          </p>

          <h2 className={h2}>Dina rättigheter</h2>
          <p className={p}>Enligt dataskyddsförordningen (GDPR) har du rätt att:</p>
          <ul className={ul}>
            <li>få veta vilka uppgifter vi har om dig och få en kopia av dem</li>
            <li>få felaktiga uppgifter rättade</li>
            <li>
              få uppgifter raderade, om vi inte måste spara dem enligt lag, till
              exempel bokföringslagen
            </li>
            <li>begära att behandlingen begränsas och invända mot den</li>
            <li>få ut uppgifter du lämnat till oss i ett maskinläsbart format</li>
            <li>när som helst återkalla ett samtycke</li>
          </ul>
          <p className={p}>
            Skriv till{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className={a}>
              {CONTACT_EMAIL}
            </a>
            . Om du är missnöjd med hur vi behandlar dina uppgifter kan du klaga
            hos Integritetsskyddsmyndigheten,{" "}
            <a href="https://www.imy.se" className={a} rel="noopener">
              imy.se
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
