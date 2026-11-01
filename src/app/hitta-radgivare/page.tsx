import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Så väljer du redovisningsbyrå eller revisor",
  description:
    "Guide till att välja redovisningsbyrå eller revisor: skillnaden mellan rollerna, vad du ska fråga om, hur du kontrollerar auktorisation och vad som bör stå i uppdragsavtalet.",
  alternates: { canonical: "https://driva-foretag.se/hitta-radgivare" },
};

/** Ändra datumet när innehållet ändras – och i STATIC_LAST_MODIFIED i sitemap.ts. */
const UPDATED = "2026-11-01";

const h2 = "font-heading text-2xl font-bold text-brand mt-12 mb-4";
const h3 = "font-heading text-lg font-bold text-brand mt-8 mb-2";
const p = "text-gray-700 leading-relaxed mb-4";
const ul = "list-disc pl-6 space-y-2 text-gray-700 mb-6";
const a = "text-accent hover:underline";

const ABL =
  "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/aktiebolagslag-2005551_sfs-2005-551/";
const PTL =
  "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2017630-om-atgarder-mot-penningtvatt-och_sfs-2017-630/";

export default function HittaRadgivarePage() {
  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand">
          Hem
        </Link>
        <span className="mx-2">/</span>
        <span className="text-brand font-medium">Välja rådgivare</span>
      </nav>

      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-brand mb-4">
            Så väljer du redovisningsbyrå eller revisor
          </h1>
          <p className="text-sm text-gray-500 mb-8">Uppdaterad: {UPDATED}</p>
          <p className={p}>
            Många företagare tar hjälp med bokföring, bokslut och deklaration,
            och vissa aktiebolag måste dessutom ha en revisor. Den här guiden går
            igenom vad de två rollerna gör, vad du bör jämföra innan du väljer och
            hur du kontrollerar att den du anlitar har de behörigheter den säger
            sig ha. Vi förmedlar inga rådgivare och får ingen ersättning från
            byråer.
          </p>

          <h2 className={h2}>Redovisningskonsult och revisor är olika roller</h2>
          <p className={p}>
            <strong>En redovisningskonsult</strong> hjälper dig att sköta
            ekonomin: löpande bokföring, momsredovisning, löner,
            årsbokslut eller årsredovisning och deklaration. Hur mycket byrån gör
            och hur mycket du gör själv bestämmer ni i uppdraget.
          </p>
          <p className={p}>
            <strong>En revisor</strong> granskar i efterhand bolagets
            räkenskaper och styrelsens och vd:s förvaltning, och lämnar en
            revisionsberättelse till bolagsstämman. Revisorn ska vara oberoende i
            förhållande till bolaget. Ett aktiebolag som passerar vissa
            storleksgränser är skyldigt att ha revisor, medan mindre bolag kan
            välja bort det (
            <a href={ABL} className={a} rel="noopener">
              aktiebolagslagen 9 kap. 1 §
            </a>
            ). Kontrollera de aktuella gränsvärdena hos Bolagsverket innan du
            bestämmer dig, eftersom en höjning har diskuterats.
          </p>
          <p className={p}>
            Har du en enskild firma eller ett handelsbolag med fysiska personer
            som delägare behöver du i regel ingen revisor, men kan ändå ha nytta
            av en redovisningskonsult.
          </p>

          <h2 className={h2}>Kontrollera behörigheten</h2>
          <ul className={ul}>
            <li>
              <strong>Revisorer</strong> är antingen auktoriserade eller
              godkända och finns i det register som{" "}
              <a href="https://www.revisorsinspektionen.se/" className={a} rel="noopener">
                Revisorsinspektionen
              </a>{" "}
              för. Sök på namnet innan du anlitar någon som kallar sig revisor.
            </li>
            <li>
              <strong>Auktoriserad redovisningskonsult</strong> är en
              branschauktorisation från{" "}
              <a href="https://www.srfkonsult.se/" className={a} rel="noopener">
                Srf konsulterna
              </a>{" "}
              eller{" "}
              <a href="https://www.far.se/" className={a} rel="noopener">
                FAR
              </a>
              , inte en statlig behörighet. Vem som helst får arbeta med
              bokföring åt andra, så fråga om konsulten är auktoriserad och av
              vilken organisation. Båda organisationerna har sökfunktioner på
              sina webbplatser.
            </li>
          </ul>

          <h2 className={h2}>Frågor att ställa innan du väljer</h2>
          <h3 className={h3}>Vad ingår?</h3>
          <p className={p}>
            Be om en skriftlig lista över vad byrån gör och vad du själv ansvarar
            för: underlag, kvitton, fakturor, lönerapporter och deadlines.
            Fråga vem som skickar in moms- och arbetsgivardeklarationer och vem
            som bär ansvaret om något blir försenat.
          </p>
          <h3 className={h3}>Hur prissätts arbetet?</h3>
          <p className={p}>
            Byråer tar antingen fast månadsavgift eller timpris, ibland en
            blandning. Fråga vad som räknas som extraarbete, till exempel
            rättelser av sent inlämnat underlag eller frågor från Skatteverket,
            och vad bokslut och deklaration kostar utöver den löpande avgiften.
          </p>
          <h3 className={h3}>Känner byrån till din bransch?</h3>
          <p className={p}>
            Byggmoms, ROT och RUT, kassaregister, utlandsförsäljning och
            3:12-reglerna är exempel på områden där erfarenhet av liknande
            företag sparar tid. Be gärna om referenser från kunder i samma
            bransch.
          </p>
          <h3 className={h3}>Vilket bokföringsprogram används?</h3>
          <p className={p}>
            Använder du redan ett program är det smidigast om byrån kan arbeta i
            det. Fråga också vem som äger licensen och hur du får ut ditt
            material om ni slutar samarbeta.
          </p>
          <h3 className={h3}>Finns ansvarsförsäkring?</h3>
          <p className={p}>
            Fråga om byrån har en ansvarsförsäkring som täcker fel i uppdraget.
            För auktoriserade redovisningskonsulter är försäkring ett krav från
            branschorganisationen.
          </p>

          <h2 className={h2}>Uppdragsavtalet</h2>
          <p className={p}>Se till att ni skriver ett avtal som minst anger:</p>
          <ul className={ul}>
            <li>vilka tjänster som ingår och vilka som inte gör det</li>
            <li>pris, hur det justeras och vad extraarbete kostar</li>
            <li>när du ska lämna underlag och när byrån ska leverera</li>
            <li>vem som gör vad gentemot Skatteverket och Bolagsverket</li>
            <li>uppsägningstid och hur materialet lämnas tillbaka</li>
          </ul>
          <p className={p}>
            Räkna med att byrån ber om legitimation och uppgifter om bolagets
            ägare innan uppdraget börjar. Bokförings- och revisionstjänster
            omfattas av{" "}
            <a href={PTL} className={a} rel="noopener">
              penningtvättslagen (1 kap. 2 §)
            </a>
            , och byrån måste därför göra en kundkännedomskontroll.
          </p>

          <h2 className={h2}>Kom ihåg att ansvaret är ditt</h2>
          <p className={p}>
            Även om du lämnar över bokföringen till en byrå är det du som
            företagare, eller styrelsen i ett aktiebolag, som ansvarar för att
            bokföring och deklarationer blir rätt och kommer in i tid. Gå igenom
            det byrån tar fram och ställ frågor om det du inte förstår.
          </p>

          <h2 className={h2}>Läs mer</h2>
          <ul className={ul}>
            <li>
              <Link href="/bokforing-ekonomi" className={a}>
                Guider om bokföring och ekonomi
              </Link>
            </li>
            <li>
              <Link href="/skatt" className={a}>
                Guider om skatt
              </Link>
            </li>
            <li>
              <Link href="/starta-foretag" className={a}>
                Guider om att starta företag
              </Link>
            </li>
          </ul>

          <h2 className={h2}>Källor</h2>
          <ul className={ul}>
            <li>
              <a href={ABL} className={a} rel="noopener">
                Aktiebolagslag (2005:551), riksdagen.se
              </a>
            </li>
            <li>
              <a href={PTL} className={a} rel="noopener">
                Lag (2017:630) om åtgärder mot penningtvätt och
                finansiering av terrorism, riksdagen.se
              </a>
            </li>
            <li>
              <a href="https://www.revisorsinspektionen.se/" className={a} rel="noopener">
                Revisorsinspektionen
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
