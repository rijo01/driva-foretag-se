import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Effektivisering – Verktyg och automation för företagare",
  description: "Så använder du AI, automation och digitala verktyg för att effektivisera ditt företag. ChatGPT, automatisering och produktivitet.",
  alternates: { canonical: "https://driva-foretag.se/ai-effektivisering" },
};

const pillarArticles = [
  { title: "AI för företagare – komplett guide 2026", href: "/ai-effektivisering/ai-guide-foretagare", desc: "Vilka AI-verktyg finns, hur använder du dem och var börjar du?", readTime: "14 min" },
  { title: "Automatisera ditt företag – steg-för-steg", href: "/ai-effektivisering/automatisera-foretag", desc: "Bokföring, kundkommunikation, fakturering och marknadsföring på autopilot.", readTime: "11 min" },
  { title: "Bästa AI-verktygen för småföretag 2026", href: "/ai-effektivisering/basta-ai-verktyg", desc: "ChatGPT, Claude, Midjourney, Zapier och 20+ fler verktyg rankade.", readTime: "12 min" },
];

const clusterArticles = [
  { title: "ChatGPT för företag – praktiska användningsområden", href: "/ai-effektivisering/chatgpt-foretag", readTime: "8 min" },
  { title: "AI-bokföring – framtiden är här", href: "/ai-effektivisering/ai-bokforing", readTime: "6 min" },
  { title: "AI för kundtjänst – chatbotar och automation", href: "/ai-effektivisering/ai-kundtjanst", readTime: "7 min" },
  { title: "AI-driven marknadsföring", href: "/ai-effektivisering/ai-marknadsforing", readTime: "8 min" },
  { title: "Zapier och Make – automatisera utan kod", href: "/ai-effektivisering/zapier-make-guide", readTime: "9 min" },
  { title: "Digitalisera ditt företag – checklista", href: "/ai-effektivisering/digitalisera-foretag", readTime: "7 min" },
  { title: "Produktivitetsverktyg – bästa valen 2026", href: "/ai-effektivisering/produktivitetsverktyg", readTime: "8 min" },
  { title: "AI och juridik – vad gäller?", href: "/ai-effektivisering/ai-juridik", readTime: "6 min" },
  { title: "No-code verktyg för företagare", href: "/ai-effektivisering/no-code-verktyg", readTime: "7 min" },
  { title: "AI för rekrytering och HR", href: "/ai-effektivisering/ai-rekrytering", readTime: "6 min" },
];

export default function AIEffektivisering() {
  return (
    <>
      <section className="bg-[var(--color-brand)] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="text-sm text-white/40 mb-6"><a href="/" className="hover:text-white/70">Hem</a><span className="mx-2">›</span><span className="text-white/70">AI & Effektivisering</span></nav>
          <div className="max-w-3xl">
            <span className="text-4xl mb-4 block">🤖</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-white">AI & Effektivisering</h1>
            <p className="text-lg text-white/70 leading-relaxed">AI-verktyg, automatisering och digitalisering – så sparar du tid och pengar i ditt företag.</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--color-brand)] mb-8">📌 Viktigaste guiderna</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {pillarArticles.map((a) => (<a key={a.href} href={a.href} className="card group border-l-4 border-l-[#0EA5E9]"><h3 className="text-lg font-bold text-[var(--color-brand)] group-hover:text-[var(--color-accent)] transition-colors mb-2 leading-snug">{a.title}</h3><p className="text-sm text-[var(--color-text-muted)] mb-3">{a.desc}</p><span className="text-xs text-[var(--color-text-muted)]">📖 {a.readTime}</span></a>))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--color-brand)] mb-8">Alla AI-guider</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clusterArticles.map((a) => (<a key={a.href} href={a.href} className="silo-link group"><h3 className="font-semibold text-[var(--color-brand)] group-hover:text-[var(--color-accent)] transition-colors text-sm leading-snug">{a.title}</h3><span className="text-xs text-[var(--color-text-muted)] mt-1 block">📖 {a.readTime}</span></a>))}
          </div>
        </div>
      </section>
    </>
  );
}
