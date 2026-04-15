import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finansiering – Företagslån, bidrag och investerare i Sverige",
  description: "Jämför företagslån, hitta bidrag från Almi och Tillväxtverket, lär dig om investerare och crowdfunding.",
  alternates: { canonical: "https://driva-foretag.se/finansiering" },
};

const pillarArticles = [
  { title: "Företagslån – jämför de bästa lånen 2026", href: "/finansiering/foretagslan", desc: "Ränta, krav och villkor hos 15+ långivare i Sverige.", readTime: "12 min" },
  { title: "Bidrag och stöd för företagare – komplett lista", href: "/finansiering/bidrag-stod", desc: "Alla bidrag du kan söka: Almi, Tillväxtverket, Vinnova m.fl.", readTime: "10 min" },
  { title: "Hitta investerare till din startup", href: "/finansiering/hitta-investerare", desc: "Änglar, VC, pitch-tips och term sheets förklarade.", readTime: "11 min" },
];

const clusterArticles = [
  { title: "Almi-lån – krav och ansökan", href: "/finansiering/almi-lan", readTime: "6 min" },
  { title: "Crowdfunding i Sverige – plattformar", href: "/finansiering/crowdfunding", readTime: "7 min" },
  { title: "Bootstrap – starta utan extern finansiering", href: "/finansiering/bootstrap", readTime: "6 min" },
  { title: "Factoring – frigör kapital i fakturor", href: "/finansiering/factoring", readTime: "5 min" },
  { title: "Starta-eget-bidrag från Arbetsförmedlingen", href: "/finansiering/starta-eget-bidrag", readTime: "6 min" },
  { title: "Företagskredit vs företagslån", href: "/finansiering/foretagskredit-vs-foretagslan", readTime: "5 min" },
  { title: "Leasing av utrustning – guide", href: "/finansiering/leasing", readTime: "5 min" },
  { title: "Så gör du en pitch deck", href: "/finansiering/pitch-deck", readTime: "9 min" },
];

export default function Finansiering() {
  return (
    <>
      <section className="bg-[var(--color-brand)] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="text-sm text-white/40 mb-6"><a href="/" className="hover:text-white/70">Hem</a><span className="mx-2">›</span><span className="text-white/70">Finansiering</span></nav>
          <div className="max-w-3xl">
            <span className="text-4xl mb-4 block">💰</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-white">Finansiering för företag</h1>
            <p className="text-lg text-white/70 leading-relaxed">Företagslån, bidrag, investerare och alternativ finansiering – hitta rätt kapital till ditt företag.</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--color-brand)] mb-8">📌 Viktigaste guiderna</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {pillarArticles.map((a) => (<a key={a.href} href={a.href} className="card group border-l-4 border-l-[#F59E0B]"><h3 className="text-lg font-bold text-[var(--color-brand)] group-hover:text-[var(--color-accent)] transition-colors mb-2 leading-snug">{a.title}</h3><p className="text-sm text-[var(--color-text-muted)] mb-3">{a.desc}</p><span className="text-xs text-[var(--color-text-muted)]">📖 {a.readTime}</span></a>))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--color-brand)] mb-8">Alla finansieringsguider</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clusterArticles.map((a) => (<a key={a.href} href={a.href} className="silo-link group"><h3 className="font-semibold text-[var(--color-brand)] group-hover:text-[var(--color-accent)] transition-colors text-sm leading-snug">{a.title}</h3><span className="text-xs text-[var(--color-text-muted)] mt-1 block">📖 {a.readTime}</span></a>))}
          </div>
        </div>
      </section>
    </>
  );
}
