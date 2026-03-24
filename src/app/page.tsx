import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { categories } from "@/lib/categories";

const popularArticles = [
  { href: "/starta-foretag/enskild-firma-vs-aktiebolag", title: "Enskild firma vs Aktiebolag – Vilken bolagsform passar dig?" },
  { href: "/bokforing-ekonomi/bokforing-enskild-firma", title: "Bokföring för enskild firma – komplett guide" },
  { href: "/skatt/skatteplanering-aktiebolag", title: "Skatteplanering aktiebolag – laglig optimering" },
  { href: "/marknadsforing/seo-guide", title: "SEO för småföretag – komplett guide" },
  { href: "/finansiering/bidrag-stod", title: "Bidrag och stöd för företagare" },
  { href: "/juridik/avtal-guide", title: "Avtal för företagare – komplett guide" },
];

const tools = [
  { title: "Lönekalkylator", description: "Beräkna lön, skatt och arbetsgivaravgifter", emoji: "💵" },
  { title: "Momskalkylator", description: "Räkna ut moms snabbt och enkelt", emoji: "🧮" },
  { title: "Vinstkalkylator", description: "Beräkna förväntad vinst och marginal", emoji: "📈" },
  { title: "Break-even-kalkylator", description: "Se när företaget går med vinst", emoji: "⚖️" },
];

const checklists = [
  {
    phase: "Planera",
    emoji: "📋",
    items: ["Validera affärsidé", "Välj bolagsform", "Skriv affärsplan", "Budgetera startkapital", "Undersök marknaden"],
  },
  {
    phase: "Starta",
    emoji: "🚀",
    items: ["Registrera hos Bolagsverket", "Ansök om F-skatt", "Öppna företagskonto", "Teckna försäkringar", "Sätt upp bokföring"],
  },
  {
    phase: "Växa",
    emoji: "📈",
    items: ["Bygg digital närvaro", "Optimera skatten", "Anställ personal", "Automatisera processer", "Sök finansiering"],
  },
];

const faqItems = [
  {
    question: "Vilken bolagsform ska jag välja?",
    answer: "Det beror på din situation. Enskild firma är enklast att starta och passar soloföretagare. Aktiebolag ger bättre skydd mot personligt ansvar och kan vara skattemässigt fördelaktigt vid högre vinster. Läs vår guide om enskild firma vs aktiebolag.",
  },
  {
    question: "Hur mycket kostar det att starta företag?",
    answer: "Enskild firma kostar inget att registrera. Aktiebolag kräver 25 000 kr i aktiekapital plus registreringsavgift på ca 2 200 kr hos Bolagsverket. Utöver det tillkommer kostnader för eventuell utrustning och marknadsföring.",
  },
  {
    question: "Behöver jag en revisor?",
    answer: "Mindre aktiebolag kan välja bort revisor om de inte uppfyller minst två av: fler än 3 anställda, mer än 1,5 miljoner i balansomslutning, eller mer än 3 miljoner i nettoomsättning. Enskilda firmor behöver normalt inte revisor.",
  },
  {
    question: "Hur fungerar F-skatt?",
    answer: "F-skatt (företagsskatt) innebär att du själv ansvarar för att betala din skatt och sociala avgifter. Du ansöker hos Skatteverket och godkänns om du bedriver eller ska bedriva näringsverksamhet. F-skattsedel krävs för att fakturera företag.",
  },
  {
    question: "Vad är skillnaden mellan moms och skatt?",
    answer: "Moms (mervärdesskatt) är en konsumtionsskatt som läggs på varor och tjänster. Företag är mellanhänder som tar ut moms av kunder och redovisar till Skatteverket. Inkomstskatt betalas på företagets vinst. Momssatserna är 25%, 12% eller 6% beroende på vara/tjänst.",
  },
  {
    question: "Kan jag starta företag vid sidan av min anställning?",
    answer: "Ja, det är fullt möjligt att driva företag vid sidan av en anställning. Kontrollera dock ditt anställningsavtal för eventuella konkurrensklausuler. Informera gärna din arbetsgivare. Tänk på att du behöver hantera bokföring och deklaration för företaget.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand to-brand-light text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
            Allt du behöver för att
            <span className="text-accent"> driva företag</span> i Sverige
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Guider, verktyg och rådgivning för varje fas av företagandet – från
            idé till tillväxt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/starta-foretag"
              className="px-8 py-3.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-colors text-lg"
            >
              Starta företag
            </Link>
            <Link
              href="/verktyg"
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors text-lg border border-white/20"
            >
              Utforska verktyg
            </Link>
          </div>
        </div>
      </section>

      {/* Kategorikort */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-heading font-bold text-center mb-4">
            Utforska våra guider
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
            Djupgående guider inom åtta nyckelområden för svenska företagare.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="group p-6 bg-surface rounded-xl hover:shadow-lg transition-all border border-transparent hover:border-accent/20"
              >
                <span className="text-3xl mb-3 block">{cat.emoji}</span>
                <h3 className="font-heading font-bold text-lg text-brand mb-2 group-hover:text-accent transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {cat.description}
                </p>
                <span className="text-sm text-accent font-medium mt-3 inline-block">
                  {cat.pillars.length + cat.clusters.length} artiklar →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Populära artiklar */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            Mest lästa guiderna
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <h3 className="font-heading font-semibold text-brand hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <span className="text-sm text-accent mt-3 inline-block font-medium">
                  Läs guiden →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Verktyg */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-heading font-bold text-center mb-4">
            Gratis verktyg för företagare
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
            Kalkylatorer och mallar som sparar tid och pengar.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.title}
                className="p-6 border border-gray-200 rounded-xl hover:border-accent/30 transition-colors"
              >
                <span className="text-2xl mb-3 block">{tool.emoji}</span>
                <h3 className="font-semibold text-brand mb-1">{tool.title}</h3>
                <p className="text-sm text-gray-600">{tool.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/verktyg"
              className="text-accent font-semibold hover:underline"
            >
              Se alla verktyg →
            </Link>
          </div>
        </div>
      </section>

      {/* Checklistor */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            Din resa som företagare
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {checklists.map((list) => (
              <div key={list.phase} className="bg-white rounded-xl p-8 shadow-sm">
                <span className="text-3xl mb-3 block">{list.emoji}</span>
                <h3 className="font-heading font-bold text-xl text-brand mb-4">
                  {list.phase}
                </h3>
                <ul className="space-y-3">
                  {list.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700">
                      <svg
                        className="w-5 h-5 text-accent shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead-formulär */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-surface rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-heading font-bold text-center mb-3">
              Behöver du hjälp?
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Beskriv ditt behov så matchar vi dig med rätt rådgivare – helt
              gratis.
            </p>
            <LeadForm source="homepage" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            Vanliga frågor
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white rounded-xl border border-gray-100"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-brand">
                  {faq.question}
                  <svg
                    className="w-5 h-5 shrink-0 ml-4 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
