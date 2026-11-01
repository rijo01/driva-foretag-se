import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, OWNER_COMPANY, OWNER_ORG_NR } from "@/lib/site";
import { GUIDE_PRICE_SEK } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Köpvillkor för branschguider",
  description:
    "Köpvillkor för de branschspecifika startguiderna (PDF) på driva-foretag.se: säljare, pris, betalning, leverans, ångerrätt och reklamation.",
  alternates: { canonical: "https://driva-foretag.se/kopvillkor" },
};

/** Ändra datumet när villkoren ändras – och i STATIC_LAST_MODIFIED i sitemap.ts. */
const UPDATED = "2026-11-01";

const h2 = "font-heading text-2xl font-bold text-brand mt-12 mb-4";
const p = "text-gray-700 leading-relaxed mb-4";
const a = "text-accent hover:underline";

export default function KopvillkorPage() {
  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand">
          Hem
        </Link>
        <span className="mx-2">/</span>
        <span className="text-brand font-medium">Köpvillkor</span>
      </nav>

      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-brand mb-4">
            Köpvillkor
          </h1>
          <p className="text-sm text-gray-500 mb-8">Uppdaterad: {UPDATED}</p>
          <p className={p}>
            Villkoren gäller när du köper en branschspecifik startguide i
            PDF-format på{" "}
            <Link href="/guider" className={a}>
              driva-foretag.se/guider
            </Link>
            .
          </p>

          <h2 className={h2}>1. Säljare</h2>
          <p className={p}>
            {OWNER_COMPANY}, organisationsnummer {OWNER_ORG_NR}. Kontakt:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className={a}>
              {CONTACT_EMAIL}
            </a>
            .
          </p>

          <h2 className={h2}>2. Produkt</h2>
          <p className={p}>
            En guide är digitalt innehåll: en PDF-fil för en viss bransch. Vad den
            innehåller beskrivs på respektive guidesida. Guiden ger allmän
            information om att starta och driva företag och är inte individuell
            juridisk, skattemässig eller ekonomisk rådgivning. Belopp och regler
            gäller vid den tidpunkt som anges i guiden och kan ändras senare.
          </p>

          <h2 className={h2}>3. Pris och betalning</h2>
          <p className={p}>
            Priset är {GUIDE_PRICE_SEK} kr per guide, inklusive eventuell moms.
            Det pris som visas i kassan är det du betalar, och inga andra avgifter
            tillkommer. Du betalar med kort via Stripe. Köpet är klart när
            betalningen har godkänts.
          </p>

          <h2 className={h2}>4. Leverans</h2>
          <p className={p}>
            Direkt efter betalningen kommer du till en sida där du kan ladda ner
            guiden. Spara filen på din enhet. Om nedladdningen inte fungerar,
            mejla oss med datum och e-postadressen du använde vid köpet, så
            skickar vi guiden.
          </p>

          <h2 className={h2}>5. Ångerrätt</h2>
          <p className={p}>
            Som konsument har du normalt 14 dagars ångerrätt vid köp på distans.
            För digitalt innehåll som inte levereras på ett fysiskt medium gäller
            ångerrätten dock inte om leveransen har påbörjats med ditt
            uttryckliga samtycke och du har bekräftat att ångerrätten därmed går
            förlorad (lagen om distansavtal och avtal utanför affärslokaler, 2 kap.
            11 § 11). Innan du betalar ber vi dig därför kryssa i att guiden får
            levereras direkt och att ångerrätten upphör när den levereras.
          </p>
          <p className={p}>
            Har du betalat men ännu inte laddat ner guiden kan du ångra köpet inom
            14 dagar genom att mejla oss. Du får då tillbaka hela beloppet.
          </p>

          <h2 className={h2}>6. Fel i guiden</h2>
          <p className={p}>
            Om guiden inte går att öppna, inte motsvarar beskrivningen eller
            innehåller fel som gör den väsentligt sämre, kontakta oss inom skälig
            tid efter att du upptäckt felet. Vi rättar felet och skickar en
            uppdaterad version, eller betalar tillbaka köpesumman om det inte går.
            Som konsument har du alltid de rättigheter som tvingande
            konsumentlagstiftning ger dig.
          </p>

          <h2 className={h2}>7. Användning</h2>
          <p className={p}>
            Guiden är för ditt eget bruk och din egen verksamhet. Du får inte sälja
            den vidare, sprida den eller publicera den, helt eller delvis.
          </p>

          <h2 className={h2}>8. Personuppgifter</h2>
          <p className={p}>
            Hur vi behandlar uppgifterna från ditt köp står i vår{" "}
            <Link href="/integritetspolicy" className={a}>
              integritetspolicy
            </Link>
            .
          </p>

          <h2 className={h2}>9. Tvister</h2>
          <p className={p}>
            Kontakta oss först, så försöker vi lösa saken. Som konsument kan du
            också vända dig till Allmänna reklamationsnämnden,{" "}
            <a href="https://www.arn.se" className={a} rel="noopener">
              arn.se
            </a>
            . Vi följer ARN:s rekommendationer. Svensk lag gäller för köpet.
          </p>
        </div>
      </section>
    </>
  );
}
