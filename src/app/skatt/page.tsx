import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skatt för företagare – F-skatt, moms, deklaration & avdrag",
  description: "Allt om skatt som företagare: F-skatt, moms, arbetsgivaravgifter, deklaration, skatteavdrag och skatteplanering.",
  alternates: { canonical: "https://driva-foretag.se/skatt" },
};

const pillarArticles = [
  { title: "F-skatt – komplett guide 2026", href: "/skatt/f-skatt", desc: "Vad F-skatt är, hur du ansöker och vad det innebär.", readTime: "6 min" },
  { title: "Momsguide – allt om moms för företag", href: "/skatt/momsguide", desc: "Momspliktigt, momsfritt, avdragsrätt och momsredovisning.", readTime: "9 min" },
  { title: "Skatteplanering i aktiebolag – laglig optimering", href: "/skatt/skatteplanering-aktiebolag", desc: "3:12-reglerna, utdelning, lön och pensionsavsättning.", readTime: "12 min" },
];

const clusterArticles = [
  { title: "Deklarera enskild firma – NE-bilagan", href: "/skatt/deklarera-enskild-firma", readTime: "7 min" },
  { title: "Arbetsgivaravgifter – så räknar du", href: "/skatt/arbetsgivaravgifter", readTime: "5 min" },
  { title: "Preliminärskatt – beräkna och betala", href: "/skatt/preliminarskatt", readTime: "5 min" },
  { title: "Skattekonto – så fungerar det", href: "/skatt/skattekonto", readTime: "4 min" },
  { title: "ROT- och RUT-avdrag – regler 2026", href: "/skatt/rot-rut-avdrag", readTime: "6 min" },
  { title: "Egenavgifter i enskild firma", href: "/skatt/egenavgifter", readTime: "5 min" },
  { title: "Omvänd skattskyldighet – guide", href: "/skatt/omvand-skattskyldighet", readTime: "5 min" },
  { title: "3:12-reglerna förklarade", href: "/skatt/3-12-reglerna", readTime: "10 min" },
  { title: "Utdelning i fåmansföretag", href: "/skatt/utdelning-famansforetag", readTime: "8 min" },
  { title: "Tjänstebil eller milersättning?", href: "/skatt/tjanstebil-vs-milersattning", readTime: "6 min" },
];

export default function Skatt() {
  return (
    <>
      <section className="bg-[var(--color-brand)] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="text-sm text-white/40 mb-6"><a href="/" className="hover:text-white/70">Hem</a><span className="mx-2">›</span><span className="text-white/70">Skatt</span></nav>
          <div className="max-w-3xl">
            <span className="text-4xl mb-4 block">🧾</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-white">Skatt för företagare</h1>
            <p className="text-lg text-white/70 leading-relaxed">F-skatt, moms, deklaration, skatteavdrag och skatteplanering – allt du behöver veta.</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--color-brand)] mb-8">📌 Viktigaste guiderna</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {pillarArticles.map((a) => (<a key={a.href} href={a.href} className="card group border-l-4 border-l-[#14B8A6]"><h3 className="text-lg font-bold text-[var(--color-brand)] group-hover:text-[var(--color-accent)] transition-colors mb-2 leading-snug">{a.title}</h3><p className="text-sm text-[var(--color-text-muted)] mb-3">{a.desc}</p><span className="text-xs text-[var(--color-text-muted)]">📖 {a.readTime}</span></a>))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--color-brand)] mb-8">Alla skatteguider</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clusterArticles.map((a) => (<a key={a.href} href={a.href} className="silo-link group"><h3 className="font-semibold text-[var(--color-brand)] group-hover:text-[var(--color-accent)] transition-colors text-sm leading-snug">{a.title}</h3><span className="text-xs text-[var(--color-text-muted)] mt-1 block">📖 {a.readTime}</span></a>))}
          </div>
        </div>
      </section>
    </>
  );
}
