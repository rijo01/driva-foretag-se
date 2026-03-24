import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Hitta rådgivare – Få matchad med rätt expert",
  description:
    "Hitta rätt rådgivare för ditt företag. Vi matchar dig med experter inom redovisning, juridik, skatt, finansiering och marknadsföring.",
  alternates: { canonical: "https://driva-foretag.se/hitta-radgivare" },
};

const advisorCategories = [
  {
    title: "Redovisningskonsult",
    description: "Bokföring, årsredovisning och löpande ekonomi.",
    emoji: "📊",
  },
  {
    title: "Jurist",
    description: "Avtal, bolagsrätt och arbetsrätt.",
    emoji: "⚖️",
  },
  {
    title: "Skatterådgivare",
    description: "Skatteplanering, deklaration och optimering.",
    emoji: "🧾",
  },
  {
    title: "Finansiell rådgivare",
    description: "Lån, investeringar och kapitalanskaffning.",
    emoji: "💰",
  },
  {
    title: "Marknadsföringskonsult",
    description: "Digital marknadsföring, SEO och varumärke.",
    emoji: "📣",
  },
  {
    title: "Affärsutvecklare",
    description: "Strategi, tillväxt och affärsplanering.",
    emoji: "🚀",
  },
];

export default function HittaRadgivarePage() {
  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand">Hem</Link>
        <span className="mx-2">/</span>
        <span className="text-brand font-medium">Hitta rådgivare</span>
      </nav>

      <section className="bg-gradient-to-br from-brand to-brand-light text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-5xl mb-4 block">🔍</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Hitta rätt rådgivare
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Beskriv ditt behov så matchar vi dig med kvalificerade rådgivare
            helt gratis och utan förpliktelser.
          </p>
        </div>
      </section>

      {/* Kategorier */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-heading font-bold mb-8">
            Vilken typ av rådgivare söker du?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisorCategories.map((cat) => (
              <div
                key={cat.title}
                className="p-6 bg-surface rounded-xl border border-gray-100"
              >
                <span className="text-3xl mb-3 block">{cat.emoji}</span>
                <h3 className="font-heading font-bold text-brand mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-600">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulär */}
      <section className="py-12 bg-surface">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
            <h2 className="text-2xl font-heading font-bold text-center mb-3">
              Skicka din förfrågan
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Fyll i formuläret nedan så kontaktar vi dig inom 24 timmar med
              matchade rådgivare.
            </p>
            <LeadForm source="hitta-radgivare" />
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-heading font-bold text-brand">100%</p>
              <p className="text-gray-600 mt-1">Gratis och utan förpliktelser</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-brand">24h</p>
              <p className="text-gray-600 mt-1">Svarstid på alla förfrågningar</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-brand">Kvalitetssäkrade</p>
              <p className="text-gray-600 mt-1">Alla rådgivare är verifierade</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
