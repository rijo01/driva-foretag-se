import type { Metadata } from "next";
import Link from "next/link";
import { authors } from "@/lib/authors";

export const metadata: Metadata = {
  title: "Om oss – Vår mission, redaktion och principer",
  description:
    "Driva Företag är Sveriges mest kompletta resurs för företagare. Läs om vår redaktion, mission, principer och hur vi arbetar.",
  alternates: { canonical: "https://driva-foretag.se/om-oss" },
};

export default function OmOssPage() {
  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand">Hem</Link>
        <span className="mx-2">/</span>
        <span className="text-brand font-medium">Om oss</span>
      </nav>

      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-brand mb-8">
            Om Driva Företag
          </h1>

          {/* Mission */}
          <h2 className="font-heading text-2xl font-bold text-brand mt-12 mb-4">
            Vår mission
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Driva Företag finns för att göra det enklare att starta och driva
            företag i Sverige. Vi tror att alla blivande företagare förtjänar
            tillgång till kvalitativ, lättförståelig information – oavsett
            bakgrund eller budget.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Vår vision är att vara den mest kompletta och pålitliga resursen
            för svenska företagare. Från den första affärsidén till skalbar
            tillväxt.
          </p>

          {/* Redaktion */}
          <h2 className="font-heading text-2xl font-bold text-brand mt-12 mb-4">
            Vår redaktion
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Alla artiklar på Driva Företag skrivs av ämnesexperter med gedigen
            bakgrund inom sina respektive områden. Vår redaktion består av
            auktoriserade revisorer, affärsjurister, skattekonsulter och
            marknadsföringsexperter.
          </p>
          <div className="space-y-4 mb-8">
            {authors.map((author) => (
              <Link
                key={author.slug}
                href={`/forfattare/${author.slug}`}
                className="group flex items-center gap-4 p-4 bg-surface rounded-xl hover:shadow-sm transition-shadow"
              >
                <span
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shrink-0"
                  style={{ backgroundColor: author.bgColor }}
                >
                  {author.initials}
                </span>
                <div>
                  <p className="font-semibold text-brand group-hover:text-accent transition-colors">
                    {author.name}
                  </p>
                  <p className="text-sm text-gray-500">{author.title}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Redaktionell policy */}
          <h2 className="font-heading text-2xl font-bold text-brand mt-12 mb-4">
            Redaktionell policy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Alla artiklar faktagranskas av experter inom respektive område. Vi
            uppdaterar innehållet löpande för att säkerställa att informationen
            är korrekt och aktuell. Varje artikel har en tydlig faktagranskningsbadge
            som visar vilken typ av expert som har granskat innehållet.
          </p>
          <div className="space-y-4 mb-8">
            <div className="bg-surface rounded-xl p-5">
              <p className="font-semibold text-brand mb-1">Skattartiklar</p>
              <p className="text-sm text-gray-600">Faktagranskas av auktoriserad revisor med expertis inom företagsbeskattning.</p>
            </div>
            <div className="bg-surface rounded-xl p-5">
              <p className="font-semibold text-brand mb-1">Juridikartiklar</p>
              <p className="text-sm text-gray-600">Faktagranskas av affärsjurist med specialisering på bolagsrätt och avtal.</p>
            </div>
            <div className="bg-surface rounded-xl p-5">
              <p className="font-semibold text-brand mb-1">Övriga artiklar</p>
              <p className="text-sm text-gray-600">Faktagranskas av redaktionen och relevanta ämnesexperter.</p>
            </div>
          </div>

          {/* Så arbetar vi */}
          <h2 className="font-heading text-2xl font-bold text-brand mt-12 mb-4">
            Så arbetar vi
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Varje artikel på Driva Företag genomgår en noggrann process innan
            publicering:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
            <li>
              <strong className="text-brand">Research</strong> – Vi analyserar
              aktuella lagar, regler och praxis från Skatteverket, Bolagsverket
              och andra myndigheter.
            </li>
            <li>
              <strong className="text-brand">Skrivande</strong> – En ämnesexpert
              skriver artikeln med fokus på praktisk tillämpning för svenska
              företagare.
            </li>
            <li>
              <strong className="text-brand">Faktagranskning</strong> – En
              oberoende granskare kontrollerar att alla siffror, lagrum och
              rekommendationer är korrekta.
            </li>
            <li>
              <strong className="text-brand">Publicering och uppdatering</strong>{" "}
              – Vi publicerar artikeln och granskar den löpande. Alla artiklar
              har ett synligt &quot;senast uppdaterad&quot;-datum.
            </li>
          </ol>

          {/* Principer */}
          <h2 className="font-heading text-2xl font-bold text-brand mt-12 mb-4">
            Våra principer
          </h2>
          <div className="space-y-6 mb-8">
            <div className="bg-surface rounded-xl p-6">
              <h3 className="font-semibold text-brand mb-2">Kvalitet framför kvantitet</h3>
              <p className="text-gray-700">Varje guide är noggrant researchad och skriven för att ge verkligt värde. Vi publicerar inte innehåll bara för att fylla sidor.</p>
            </div>
            <div className="bg-surface rounded-xl p-6">
              <h3 className="font-semibold text-brand mb-2">Oberoende rådgivning</h3>
              <p className="text-gray-700">Vi rekommenderar aldrig produkter eller tjänster baserat på ekonomiska incitament. Våra guider är skrivna utifrån företagarens bästa.</p>
            </div>
            <div className="bg-surface rounded-xl p-6">
              <h3 className="font-semibold text-brand mb-2">Alltid uppdaterat</h3>
              <p className="text-gray-700">Svenska lagar och regler ändras. Vi granskar och uppdaterar vårt innehåll regelbundet för att säkerställa att det är korrekt.</p>
            </div>
            <div className="bg-surface rounded-xl p-6">
              <h3 className="font-semibold text-brand mb-2">Tillgängligt för alla</h3>
              <p className="text-gray-700">Allt innehåll är gratis. Vi skriver på klarspråk utan onödig jargong så att alla kan förstå.</p>
            </div>
          </div>

          {/* Finansiering */}
          <h2 className="font-heading text-2xl font-bold text-brand mt-12 mb-4">
            Hur vi finansieras
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Driva Företag finansieras genom att matcha företagare med
            kvalificerade rådgivare via vår{" "}
            <Link href="/hitta-radgivare" className="text-accent hover:underline">
              Hitta rådgivare
            </Link>
            -tjänst. Rådgivare betalar för kvalificerade leads, medan tjänsten
            är helt gratis för företagare.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Vi kan även ha affiliate-partnerskap med utvalda tjänsteleverantörer.
            Dessa partnerskap påverkar aldrig våra redaktionella
            rekommendationer – vi markerar alltid tydligt när en länk är en
            affiliatelänk.
          </p>
        </div>
      </section>
    </>
  );
}
