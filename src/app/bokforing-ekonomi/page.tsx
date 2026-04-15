import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bokföring & ekonomi – Guider för företagare",
  description:
    "Lär dig allt om bokföring, fakturering, bokslut och ekonomistyrning. Jämför bokföringsprogram och få koll på reglerna.",
  alternates: { canonical: "https://driva-foretag.se/bokforing-ekonomi" },
};

const pillarArticles = [
  {
    title: "Bästa bokföringsprogrammet 2026 – stor jämförelse",
    href: "/bokforing-ekonomi/basta-bokforingsprogram",
    desc: "Vi jämför Fortnox, Bokio, Visma och fler. Pris, funktioner och omdömen.",
    readTime: "10 min",
  },
  {
    title: "Bokföring enskild firma – komplett guide",
    href: "/bokforing-ekonomi/bokforing-enskild-firma",
    desc: "Kontantmetoden, faktureringsmetoden, årsbokslut och NE-bilagan.",
    readTime: "12 min",
  },
  {
    title: "Bokföring aktiebolag – steg-för-steg",
    href: "/bokforing-ekonomi/bokforing-aktiebolag",
    desc: "Löpande bokföring, årsredovisning, K2/K3 och revision.",
    readTime: "11 min",
  },
];

const clusterArticles = [
  { title: "Förenklat årsbokslut – guide och mall", href: "/bokforing-ekonomi/forenklat-arsbokslut", readTime: "7 min" },
  { title: "Faktureringsmetoden vs kontantmetoden", href: "/bokforing-ekonomi/faktureringsmetoden-vs-kontantmetoden", readTime: "6 min" },
  { title: "Faktura – mall, regler och tips", href: "/bokforing-ekonomi/faktura-mall", readTime: "8 min" },
  { title: "Resultatrapport – så läser du den", href: "/bokforing-ekonomi/resultatrapport", readTime: "5 min" },
  { title: "Balansrapport förklarad", href: "/bokforing-ekonomi/balansrapport", readTime: "5 min" },
  { title: "Egen insättning och eget uttag", href: "/bokforing-ekonomi/egen-insattning-eget-uttag", readTime: "4 min" },
  { title: "Periodiseringsfond – regler och bokföring", href: "/bokforing-ekonomi/periodiseringsfond", readTime: "6 min" },
  { title: "Avskrivningar – regler och metoder", href: "/bokforing-ekonomi/avskrivningar", readTime: "7 min" },
  { title: "SIE-filer – vad är det och hur fungerar det?", href: "/bokforing-ekonomi/sie-filer", readTime: "4 min" },
  { title: "BAS-kontoplanen – guide för nybörjare", href: "/bokforing-ekonomi/bas-kontoplanen", readTime: "8 min" },
  { title: "Fortnox recension 2026", href: "/bokforing-ekonomi/fortnox-recension", readTime: "7 min" },
  { title: "Bokio recension 2026", href: "/bokforing-ekonomi/bokio-recension", readTime: "7 min" },
];

export default function BokforingEkonomi() {
  return (
    <>
      <section className="bg-[var(--color-brand)] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="text-sm text-white/40 mb-6">
            <a href="/" className="hover:text-white/70">Hem</a>
            <span className="mx-2">›</span>
            <span className="text-white/70">Bokföring & ekonomi</span>
          </nav>
          <div className="max-w-3xl">
            <span className="text-4xl mb-4 block">📊</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-white">
              Bokföring & ekonomi
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Guider om löpande bokföring, bokslut, fakturering och de bästa bokföringsprogrammen – oavsett om du har enskild firma eller aktiebolag.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--color-brand)] mb-8">📌 Viktigaste guiderna</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {pillarArticles.map((a) => (
              <a key={a.href} href={a.href} className="card group border-l-4 border-l-[var(--color-success)]">
                <h3 className="text-lg font-bold text-[var(--color-brand)] group-hover:text-[var(--color-accent)] transition-colors mb-2 leading-snug">{a.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-3">{a.desc}</p>
                <span className="text-xs text-[var(--color-text-muted)]">📖 {a.readTime}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--color-brand)] mb-8">Alla bokföringsguider</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clusterArticles.map((a) => (
              <a key={a.href} href={a.href} className="silo-link group">
                <h3 className="font-semibold text-[var(--color-brand)] group-hover:text-[var(--color-accent)] transition-colors text-sm leading-snug">{a.title}</h3>
                <span className="text-xs text-[var(--color-text-muted)] mt-1 block">📖 {a.readTime}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-[var(--color-brand)] mb-4">Behöver du hjälp med bokföringen?</h2>
          <p className="text-[var(--color-text-muted)] mb-8">Hitta en redovisningskonsult som kan hjälpa dig – helt gratis att jämföra.</p>
          <a href="/hitta-radgivare" className="btn-primary">Hitta redovisningskonsult →</a>
        </div>
      </section>
    </>
  );
}
