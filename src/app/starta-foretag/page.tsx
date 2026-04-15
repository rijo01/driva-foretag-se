import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Starta företag – Komplett guide för att starta eget i Sverige 2026",
  description:
    "Allt om att starta företag: bolagsform, registrering, affärsplan, F-skatt, budget och checklista. Steg-för-steg-guide för alla som vill starta eget.",
  alternates: { canonical: "https://driva-foretag.se/starta-foretag" },
};

const pillarArticles = [
  {
    title: "Enskild firma vs aktiebolag – vilken bolagsform passar dig?",
    href: "/starta-foretag/enskild-firma-vs-aktiebolag",
    desc: "Jämförelse av ansvar, skatt, administration och flexibilitet.",
    readTime: "8 min",
    isPillar: true,
  },
  {
    title: "Affärsplan – gratis mall och steg-för-steg-guide",
    href: "/starta-foretag/affarsplan-mall",
    desc: "Ladda ner vår kostnadsfria mall och fyll i din affärsplan.",
    readTime: "12 min",
    isPillar: true,
  },
  {
    title: "Registrera företag – så gör du hos Bolagsverket",
    href: "/starta-foretag/registrera-foretag",
    desc: "Steg-för-steg: registrering, organisationsnummer och avgifter.",
    readTime: "6 min",
    isPillar: true,
  },
];

const clusterArticles = [
  {
    title: "Starta enskild firma – komplett guide",
    href: "/starta-foretag/starta-enskild-firma",
    readTime: "10 min",
  },
  {
    title: "Starta aktiebolag – steg-för-steg",
    href: "/starta-foretag/starta-aktiebolag",
    readTime: "9 min",
  },
  {
    title: "Bästa affärsidéerna 2026 – 50+ idéer",
    href: "/starta-foretag/affarside",
    readTime: "15 min",
  },
  {
    title: "Aktiekapital – hur mycket behöver du?",
    href: "/starta-foretag/aktiekapital",
    readTime: "5 min",
  },
  {
    title: "Företagsnamn – regler och tips",
    href: "/starta-foretag/foretagsnamn",
    readTime: "6 min",
  },
  {
    title: "Starta handelsbolag – guide",
    href: "/starta-foretag/starta-handelsbolag",
    readTime: "7 min",
  },
  {
    title: "Starta företag utan pengar – så gör du",
    href: "/starta-foretag/starta-utan-pengar",
    readTime: "8 min",
  },
  {
    title: "Checklista: 20 saker innan du startar",
    href: "/starta-foretag/checklista",
    readTime: "5 min",
  },
  {
    title: "Företagskonto – jämförelse av banker 2026",
    href: "/starta-foretag/foretagskonto",
    readTime: "7 min",
  },
  {
    title: "Starta eget med anställning – så funkar det",
    href: "/starta-foretag/starta-eget-med-anstallning",
    readTime: "6 min",
  },
  {
    title: "Sidoinkomst och hobby – när blir det företag?",
    href: "/starta-foretag/hobbyverksamhet-vs-foretag",
    readTime: "5 min",
  },
  {
    title: "Starta konsultbolag – komplett guide",
    href: "/starta-foretag/starta-konsultbolag",
    readTime: "8 min",
  },
  {
    title: "Starta e-handel i Sverige – guide 2026",
    href: "/starta-foretag/starta-ehandel",
    readTime: "10 min",
  },
  {
    title: "Starta restaurang – tillstånd och regler",
    href: "/starta-foretag/starta-restaurang",
    readTime: "9 min",
  },
  {
    title: "Företagsförsäkring – vilken behöver du?",
    href: "/starta-foretag/foretagsforsakring",
    readTime: "6 min",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Starta företag i Sverige – Guider & mallar",
  description: "Komplett samling guider om att starta företag i Sverige.",
  url: "https://driva-foretag.se/starta-foretag",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: pillarArticles.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://driva-foretag.se${a.href}`,
      name: a.title,
    })),
  },
};

export default function StartaForetag() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-[var(--color-brand)] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="text-sm text-white/40 mb-6">
            <a href="/" className="hover:text-white/70">Hem</a>
            <span className="mx-2">›</span>
            <span className="text-white/70">Starta företag</span>
          </nav>
          <div className="max-w-3xl">
            <span className="text-4xl mb-4 block">🚀</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-white">
              Starta företag i Sverige
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Komplett guide med allt du behöver veta för att starta eget – bolagsform, registrering, affärsplan, F-skatt och mycket mer.
            </p>
          </div>
        </div>
      </section>

      {/* Pillar articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--color-brand)] mb-8">
            📌 Viktigaste guiderna
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {pillarArticles.map((a) => (
              <a key={a.href} href={a.href} className="card group border-l-4 border-l-[var(--color-accent)]">
                <h3 className="text-lg font-bold text-[var(--color-brand)] group-hover:text-[var(--color-accent)] transition-colors mb-2 leading-snug">
                  {a.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-3">{a.desc}</p>
                <span className="text-xs text-[var(--color-text-muted)]">📖 {a.readTime}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Cluster articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--color-brand)] mb-8">
            Alla guider om att starta företag
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clusterArticles.map((a) => (
              <a key={a.href} href={a.href} className="silo-link group">
                <h3 className="font-semibold text-[var(--color-brand)] group-hover:text-[var(--color-accent)] transition-colors text-sm leading-snug">
                  {a.title}
                </h3>
                <span className="text-xs text-[var(--color-text-muted)] mt-1 block">📖 {a.readTime}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-[var(--color-brand)] mb-4">
            Behöver du vägledning?
          </h2>
          <p className="text-[var(--color-text-muted)] mb-8">
            Boka ett gratis samtal med en företagsrådgivare som kan hjälpa dig välja rätt väg framåt.
          </p>
          <a href="/hitta-radgivare" className="btn-primary">
            Hitta rådgivare →
          </a>
        </div>
      </section>
    </>
  );
}
