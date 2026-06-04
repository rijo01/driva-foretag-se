import type { Metadata } from "next";
import Link from "next/link";
import { guides, GUIDE_PRICE_SEK } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Branschguider – kompletta startguider för 20 branscher",
  description:
    "Branschspecifika startguider som PDF. Tillstånd, kostnader, registrering steg för steg och checklista – allt du behöver för att starta i din bransch. 399 kr per guide.",
  alternates: { canonical: "https://driva-foretag.se/guider" },
};

export default function GuiderPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">
            Startguider
          </p>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl">
            Kompletta startguider för 20 branscher
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl leading-relaxed">
            Allt du behöver för att starta företag i din bransch, samlat i en
            guide. Tillstånd och krav, startkostnader, registrering steg för
            steg, prissättning och en färdig checklista.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
            <span className="text-accent font-semibold">{GUIDE_PRICE_SEK} kr</span>
            <span className="text-white/70">per guide · PDF · direkt nedladdning</span>
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guider/${guide.slug}`}
                className="group bg-surface rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
              >
                <h2 className="font-heading font-semibold text-lg text-brand mb-2 leading-snug group-hover:text-brand-light">
                  {guide.name}
                </h2>
                <p className="text-sm text-gray-600 flex-1">{guide.tagline}</p>
                <div className="mt-4 flex items-center justify-between">
                  {guide.available ? (
                    <>
                      <span className="text-sm font-semibold text-brand">
                        {GUIDE_PRICE_SEK} kr
                      </span>
                      <span className="text-sm text-accent font-medium">
                        Visa guiden →
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-2.5 py-1">
                        Kommer snart
                      </span>
                      <span className="text-sm text-accent font-medium">
                        Läs mer →
                      </span>
                    </>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trygghet */}
      <section className="bg-surface py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="font-heading font-bold text-brand text-lg mb-1">
              Direkt nedladdning
            </p>
            <p className="text-sm text-gray-600">
              Du får PDF:en direkt efter köpet – ingen väntan på e-post.
            </p>
          </div>
          <div>
            <p className="font-heading font-bold text-brand text-lg mb-1">
              Branschanpassat
            </p>
            <p className="text-sm text-gray-600">
              Skrivet för just din verksamhet – inte generiska råd.
            </p>
          </div>
          <div>
            <p className="font-heading font-bold text-brand text-lg mb-1">
              Uppdaterat innehåll
            </p>
            <p className="text-sm text-gray-600">
              Ses över mot Bolagsverket och Skatteverket löpande.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
