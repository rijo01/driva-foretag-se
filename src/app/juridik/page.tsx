import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Juridik för företagare – Avtal, lagar och regler i Sverige",
  description: "Guider om bolagsrätt, avtal, GDPR, arbetsrätt, upphandling och tvistlösning för svenska företagare.",
  alternates: { canonical: "https://driva-foretag.se/juridik" },
};

const pillarArticles = [
  { title: "Aktieägaravtal – mall och guide", href: "/juridik/aktieavtal", desc: "Varför du behöver ett aktieägaravtal och vad det ska innehålla.", readTime: "9 min" },
  { title: "GDPR för företag – komplett guide", href: "/juridik/gdpr-foretag", desc: "Allt om dataskyddsförordningen och vad du måste göra.", readTime: "11 min" },
  { title: "Anställningsavtal – mall och regler", href: "/juridik/anstallningsavtal", desc: "Vad som måste stå med och vanliga misstag att undvika.", readTime: "8 min" },
];

const clusterArticles = [
  { title: "Bolagsordning – vad ska stå med?", href: "/juridik/bolagsordning", readTime: "6 min" },
  { title: "Kundavtal och allmänna villkor", href: "/juridik/kundavtal", readTime: "7 min" },
  { title: "Konsultavtal – mall och tips", href: "/juridik/konsultavtal", readTime: "6 min" },
  { title: "Företagsnamn och varumärkesskydd", href: "/juridik/varumrkesskydd", readTime: "5 min" },
  { title: "Personuppgiftsbiträdesavtal (PUB)", href: "/juridik/pub-avtal", readTime: "5 min" },
  { title: "Arbetsrätt – grunderna för arbetsgivare", href: "/juridik/arbetsratt", readTime: "10 min" },
  { title: "Styrelseansvar i aktiebolag", href: "/juridik/styrelseansvar", readTime: "7 min" },
  { title: "Avveckla aktiebolag – steg-för-steg", href: "/juridik/avveckla-aktiebolag", readTime: "8 min" },
  { title: "Sekretessavtal (NDA) – mall", href: "/juridik/sekretessavtal", readTime: "5 min" },
  { title: "Tvistlösning – domstol eller skiljedom?", href: "/juridik/tvistlosning", readTime: "6 min" },
];

export default function Juridik() {
  return (
    <>
      <section className="bg-[var(--color-brand)] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="text-sm text-white/40 mb-6"><a href="/" className="hover:text-white/70">Hem</a><span className="mx-2">›</span><span className="text-white/70">Juridik</span></nav>
          <div className="max-w-3xl">
            <span className="text-4xl mb-4 block">⚖️</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-white">Juridik för företagare</h1>
            <p className="text-lg text-white/70 leading-relaxed">Avtal, bolagsrätt, GDPR och arbetsrätt – allt du behöver veta som företagare i Sverige.</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--color-brand)] mb-8">📌 Viktigaste guiderna</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {pillarArticles.map((a) => (
              <a key={a.href} href={a.href} className="card group border-l-4 border-l-[#6366F1]">
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
          <h2 className="text-2xl font-bold text-[var(--color-brand)] mb-8">Alla juridikguider</h2>
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
    </>
  );
}
