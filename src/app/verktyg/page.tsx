import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Verktyg för företagare – Kalkylatorer, mallar & checklistor",
  description:
    "Gratis verktyg för svenska företagare. Kalkylatorer för lön, moms och vinst. Mallar för avtal och affärsplan. Checklistor för att starta och driva företag.",
  alternates: { canonical: "https://driva-foretag.se/verktyg" },
};

const kalkylatorer = [
  { title: "Lönekalkylator", description: "Beräkna bruttolön, nettolön, arbetsgivaravgifter och skatt.", emoji: "💵" },
  { title: "Momskalkylator", description: "Räkna ut moms (25%, 12%, 6%) på belopp snabbt.", emoji: "🧮" },
  { title: "Vinstkalkylator", description: "Beräkna förväntad vinst och vinstmarginal.", emoji: "📈" },
  { title: "Break-even-kalkylator", description: "Beräkna vid vilken omsättning du går plus.", emoji: "⚖️" },
  { title: "Utdelningskalkylator", description: "Räkna ut optimal lön vs utdelning i AB.", emoji: "💎" },
  { title: "Timpriskalkylator", description: "Räkna ut ditt timpris som konsult.", emoji: "⏱️" },
  { title: "Aktiekapitalkalkylator", description: "Beräkna startkostnader för aktiebolag.", emoji: "🏦" },
  { title: "ROI-kalkylator", description: "Beräkna avkastning på investering.", emoji: "📊" },
];

const mallar = [
  { title: "Affärsplan", description: "Komplett mall för affärsplan i Word-format.", emoji: "📝" },
  { title: "Aktieägaravtal", description: "Mall för aktieägaravtal mellan delägare.", emoji: "🤝" },
  { title: "Kundavtal", description: "Standardavtal för kundrelationer.", emoji: "📄" },
  { title: "Konsultavtal", description: "Avtalsmall för konsultuppdrag.", emoji: "💼" },
  { title: "Budget", description: "Budgetmall för småföretag i Excel.", emoji: "📊" },
  { title: "Fakturamall", description: "Professionell fakturamall med alla krav.", emoji: "🧾" },
];

const checklistor = [
  { title: "Starta företag", description: "Allt du behöver göra för att komma igång.", emoji: "🚀" },
  { title: "Momsregistrering", description: "Checklista för momsregistrering.", emoji: "✅" },
  { title: "Anställa personal", description: "Steg-för-steg vid första anställningen.", emoji: "👥" },
  { title: "Årsavslut", description: "Checklista för bokslut och deklaration.", emoji: "📋" },
];

export default function VerktyPage() {
  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand">Hem</Link>
        <span className="mx-2">/</span>
        <span className="text-brand font-medium">Verktyg</span>
      </nav>

      <section className="bg-gradient-to-br from-brand to-brand-light text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-5xl mb-4 block">🛠️</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Verktyg för företagare
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Gratis kalkylatorer, mallar och checklistor som hjälper dig driva
            företag smartare.
          </p>
        </div>
      </section>

      {/* Kalkylatorer */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-heading font-bold mb-8">
            Kalkylatorer ({kalkylatorer.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kalkylatorer.map((tool) => (
              <div
                key={tool.title}
                className="p-6 bg-surface rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
              >
                <span className="text-2xl mb-3 block">{tool.emoji}</span>
                <h3 className="font-semibold text-brand mb-2">{tool.title}</h3>
                <p className="text-sm text-gray-600">{tool.description}</p>
                <span className="text-sm text-accent font-medium mt-3 inline-block">
                  Kommer snart
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mallar */}
      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-heading font-bold mb-8">
            Mallar ({mallar.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mallar.map((mall) => (
              <div
                key={mall.title}
                className="p-6 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <span className="text-2xl mb-3 block">{mall.emoji}</span>
                <h3 className="font-semibold text-brand mb-2">{mall.title}</h3>
                <p className="text-sm text-gray-600">{mall.description}</p>
                <span className="text-sm text-accent font-medium mt-3 inline-block">
                  Kommer snart
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklistor */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-heading font-bold mb-8">
            Checklistor ({checklistor.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {checklistor.map((list) => (
              <div
                key={list.title}
                className="p-6 border border-gray-200 rounded-xl hover:border-accent/30 transition-colors"
              >
                <span className="text-2xl mb-3 block">{list.emoji}</span>
                <h3 className="font-semibold text-brand mb-2">{list.title}</h3>
                <p className="text-sm text-gray-600">{list.description}</p>
                <span className="text-sm text-accent font-medium mt-3 inline-block">
                  Kommer snart
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
