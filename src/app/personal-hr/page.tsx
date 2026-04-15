import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal & HR – Anställa, löner och arbetsrätt för företagare",
  description: "Guider om att anställa, lönehantering, semester, arbetsrätt, uppsägning och kollektivavtal.",
  alternates: { canonical: "https://driva-foretag.se/personal-hr" },
};

const pillarArticles = [
  { title: "Anställa personal – komplett guide", href: "/personal-hr/anstalla-personal", desc: "Steg-för-steg: rekrytering, avtal, arbetsgivaravgifter och onboarding.", readTime: "12 min" },
  { title: "Lönehantering – så sköter du löner rätt", href: "/personal-hr/lonehantering", desc: "Löneutbetalning, skatteavdrag, arbetsgivardeklaration och lönespecifikation.", readTime: "9 min" },
  { title: "Arbetsrätt för arbetsgivare – grunderna", href: "/personal-hr/arbetsratt-arbetsgivare", desc: "LAS, MBL, semesterlagen och diskrimineringslagen förklarade.", readTime: "10 min" },
];

const clusterArticles = [
  { title: "Kollektivavtal – behöver du ett?", href: "/personal-hr/kollektivavtal", readTime: "6 min" },
  { title: "Semesterlagen – regler och beräkning", href: "/personal-hr/semesterlagen", readTime: "7 min" },
  { title: "Uppsägning – regler och mallar", href: "/personal-hr/uppsagning", readTime: "8 min" },
  { title: "Tjänstepension – så väljer du rätt", href: "/personal-hr/tjanstepension", readTime: "7 min" },
  { title: "Personalhandbok – mall och tips", href: "/personal-hr/personalhandbok", readTime: "6 min" },
  { title: "Friskvårdsbidrag – regler 2026", href: "/personal-hr/friskvardsbidrag", readTime: "4 min" },
  { title: "Arbetsmiljö – ditt ansvar som arbetsgivare", href: "/personal-hr/arbetsmiljo", readTime: "7 min" },
  { title: "Rekrytering – hitta rätt personal", href: "/personal-hr/rekrytering", readTime: "8 min" },
];

export default function PersonalHR() {
  return (
    <>
      <section className="bg-[var(--color-brand)] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="text-sm text-white/40 mb-6"><a href="/" className="hover:text-white/70">Hem</a><span className="mx-2">›</span><span className="text-white/70">Personal & HR</span></nav>
          <div className="max-w-3xl">
            <span className="text-4xl mb-4 block">👥</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-white">Personal & HR</h1>
            <p className="text-lg text-white/70 leading-relaxed">Anställa, löner, semester, arbetsrätt och allt annat du behöver veta som arbetsgivare.</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--color-brand)] mb-8">📌 Viktigaste guiderna</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {pillarArticles.map((a) => (<a key={a.href} href={a.href} className="card group border-l-4 border-l-[#8B5CF6]"><h3 className="text-lg font-bold text-[var(--color-brand)] group-hover:text-[var(--color-accent)] transition-colors mb-2 leading-snug">{a.title}</h3><p className="text-sm text-[var(--color-text-muted)] mb-3">{a.desc}</p><span className="text-xs text-[var(--color-text-muted)]">📖 {a.readTime}</span></a>))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--color-brand)] mb-8">Alla HR-guider</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clusterArticles.map((a) => (<a key={a.href} href={a.href} className="silo-link group"><h3 className="font-semibold text-[var(--color-brand)] group-hover:text-[var(--color-accent)] transition-colors text-sm leading-snug">{a.title}</h3><span className="text-xs text-[var(--color-text-muted)] mt-1 block">📖 {a.readTime}</span></a>))}
          </div>
        </div>
      </section>
    </>
  );
}
