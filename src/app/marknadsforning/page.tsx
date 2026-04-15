import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marknadsföring för företag – SEO, sociala medier & annonsering",
  description: "Lär dig marknadsföra ditt företag: SEO, Google Ads, sociala medier, content marketing, e-postmarknadsföring och varumärke.",
  alternates: { canonical: "https://driva-foretag.se/marknadsforning" },
};

const pillarArticles = [
  { title: "SEO för företag – komplett guide 2026", href: "/marknadsforning/seo-guide", desc: "Så rankar du högre på Google. On-page, off-page, teknisk SEO och content.", readTime: "15 min" },
  { title: "Google Ads för nybörjare – steg-för-steg", href: "/marknadsforning/google-ads-guide", desc: "Skapa din första kampanj, välj sökord och optimera dina annonser.", readTime: "12 min" },
  { title: "Content marketing – strategi som fungerar", href: "/marknadsforning/content-marketing", desc: "Så bygger du en content-strategi som driver trafik och konverteringar.", readTime: "11 min" },
];

const clusterArticles = [
  { title: "Instagram för företag – guide 2026", href: "/marknadsforning/instagram-foretag", readTime: "8 min" },
  { title: "LinkedIn-marknadsföring – så syns du", href: "/marknadsforning/linkedin-marknadsforing", readTime: "7 min" },
  { title: "E-postmarknadsföring – gratis verktyg & tips", href: "/marknadsforning/epost-marknadsforing", readTime: "9 min" },
  { title: "Facebook-annonsering – guide för företag", href: "/marknadsforning/facebook-annonsering", readTime: "10 min" },
  { title: "TikTok för företag – är det värt det?", href: "/marknadsforning/tiktok-foretag", readTime: "6 min" },
  { title: "Varumärkesbyggande – skapa ett starkt varumärke", href: "/marknadsforning/varumarkesbyggande", readTime: "8 min" },
  { title: "Hemsida för företag – vad kostar det?", href: "/marknadsforning/hemsida-foretag", readTime: "7 min" },
  { title: "Google Business Profile – lokal SEO", href: "/marknadsforning/google-business-profile", readTime: "6 min" },
  { title: "Copywriting – skriv texter som säljer", href: "/marknadsforning/copywriting-guide", readTime: "9 min" },
  { title: "Nyhetsbrev – så bygger du en e-postlista", href: "/marknadsforning/nyhetsbrev-guide", readTime: "7 min" },
  { title: "Affiliate marketing – tjäna pengar på rekommendationer", href: "/marknadsforning/affiliate-marketing", readTime: "8 min" },
  { title: "PR och pressmeddelanden för småföretag", href: "/marknadsforning/pr-pressmeddelanden", readTime: "6 min" },
];

export default function Marknadsforing() {
  return (
    <>
      <section className="bg-[var(--color-brand)] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="text-sm text-white/40 mb-6"><a href="/" className="hover:text-white/70">Hem</a><span className="mx-2">›</span><span className="text-white/70">Marknadsföring</span></nav>
          <div className="max-w-3xl">
            <span className="text-4xl mb-4 block">📣</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-white">Marknadsföring för företag</h1>
            <p className="text-lg text-white/70 leading-relaxed">SEO, sociala medier, annonsering och content marketing – allt du behöver för att nå fler kunder.</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--color-brand)] mb-8">📌 Viktigaste guiderna</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {pillarArticles.map((a) => (<a key={a.href} href={a.href} className="card group border-l-4 border-l-[#EC4899]"><h3 className="text-lg font-bold text-[var(--color-brand)] group-hover:text-[var(--color-accent)] transition-colors mb-2 leading-snug">{a.title}</h3><p className="text-sm text-[var(--color-text-muted)] mb-3">{a.desc}</p><span className="text-xs text-[var(--color-text-muted)]">📖 {a.readTime}</span></a>))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--color-brand)] mb-8">Alla marknadsföringsguider</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clusterArticles.map((a) => (<a key={a.href} href={a.href} className="silo-link group"><h3 className="font-semibold text-[var(--color-brand)] group-hover:text-[var(--color-accent)] transition-colors text-sm leading-snug">{a.title}</h3><span className="text-xs text-[var(--color-text-muted)] mt-1 block">📖 {a.readTime}</span></a>))}
          </div>
        </div>
      </section>
    </>
  );
}
