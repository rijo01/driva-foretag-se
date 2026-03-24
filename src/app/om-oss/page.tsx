import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Om oss – Vår mission och principer",
  description:
    "Driva Företag är Sveriges mest kompletta resurs för företagare. Läs om vår mission, principer och hur vi finansieras.",
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

          <div className="prose prose-lg max-w-none">
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

            <h2 className="font-heading text-2xl font-bold text-brand mt-12 mb-4">
              Våra principer
            </h2>
            <div className="space-y-6">
              <div className="bg-surface rounded-xl p-6">
                <h3 className="font-semibold text-brand mb-2">
                  Kvalitet framför kvantitet
                </h3>
                <p className="text-gray-700">
                  Varje guide är noggrant researchad och skriven för att ge
                  verkligt värde. Vi publicerar inte innehåll bara för att fylla
                  sidor.
                </p>
              </div>
              <div className="bg-surface rounded-xl p-6">
                <h3 className="font-semibold text-brand mb-2">
                  Oberoende rådgivning
                </h3>
                <p className="text-gray-700">
                  Vi rekommenderar aldrig produkter eller tjänster baserat på
                  ekonomiska incitament. Våra guider är skrivna utifrån
                  företagarens bästa.
                </p>
              </div>
              <div className="bg-surface rounded-xl p-6">
                <h3 className="font-semibold text-brand mb-2">
                  Alltid uppdaterat
                </h3>
                <p className="text-gray-700">
                  Svenska lagar och regler ändras. Vi granskar och uppdaterar
                  vårt innehåll regelbundet för att säkerställa att det är
                  korrekt.
                </p>
              </div>
              <div className="bg-surface rounded-xl p-6">
                <h3 className="font-semibold text-brand mb-2">
                  Tillgängligt för alla
                </h3>
                <p className="text-gray-700">
                  Allt innehåll är gratis. Vi skriver på klarspråk utan
                  onödig jargong så att alla kan förstå.
                </p>
              </div>
            </div>

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
        </div>
      </section>
    </>
  );
}
