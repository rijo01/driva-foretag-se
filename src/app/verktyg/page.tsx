import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verktyg & kalkylatorer för företagare – Gratis digitala verktyg",
  description: "Gratis kalkylatorer och verktyg: löneberäknare, momsräknare, bolagsväljare, break-even kalkylator och mallar för företagare.",
  alternates: { canonical: "https://driva-foretag.se/verktyg" },
};

const calculators = [
  { title: "Löneberäknare", desc: "Beräkna lön efter skatt, arbetsgivaravgifter och total lönekostnad.", href: "/verktyg/loneberaknare", icon: "💵", popular: true },
  { title: "Bolagsväljaren", desc: "Svara på 5 frågor och få reda på vilken bolagsform som passar dig bäst.", href: "/verktyg/bolagsvaljaren", icon: "🏢", popular: true },
  { title: "Momsräknare", desc: "Räkna ut moms snabbt – lägg till eller dra av 6%, 12% eller 25% moms.", href: "/verktyg/momsraknare", icon: "🧮", popular: true },
  { title: "Break-even kalkylator", desc: "Beräkna hur mycket du måste sälja för att gå plus.", href: "/verktyg/break-even", icon: "📈", popular: true },
  { title: "Marginalskatt-kalkylator", desc: "Se hur marginalskatt påverkar din nästa lönehöjning.", href: "/verktyg/marginalskatt", icon: "📉", popular: false },
  { title: "Utdelningskalkylator (3:12)", desc: "Räkna ut hur mycket du kan ta i utdelning med 20% skatt.", href: "/verktyg/utdelningskalkylator", icon: "💎", popular: false },
  { title: "Startkapital-kalkylator", desc: "Uppskatta hur mycket kapital du behöver för att starta.", href: "/verktyg/startkapital-kalkylator", icon: "🎯", popular: false },
  { title: "Timkostnad-kalkylator", desc: "Beräkna vad du måste ta per timme som konsult.", href: "/verktyg/timkostnad-kalkylator", icon: "⏱️", popular: false },
];

const templates = [
  { title: "Affärsplan – gratis mall", href: "/starta-foretag/affarsplan-mall", icon: "📝" },
  { title: "Budgetmall för företag", href: "/verktyg/budgetmall", icon: "📊" },
  { title: "Anställningsavtal – mall", href: "/juridik/anstallningsavtal", icon: "📃" },
  { title: "Fakturamall – gratis", href: "/bokforing-ekonomi/faktura-mall", icon: "🧾" },
  { title: "Aktieägaravtal – mall", href: "/juridik/aktieavtal", icon: "🤝" },
  { title: "Konsultavtal – mall", href: "/juridik/konsultavtal", icon: "✍️" },
];

const checklists = [
  { title: "Checklista: Starta företag", href: "/starta-foretag/checklista", items: 20 },
  { title: "Checklista: Anställa för första gången", href: "/personal-hr/anstalla-personal", items: 15 },
  { title: "Checklista: Byta bokföringsprogram", href: "/bokforing-ekonomi/basta-bokforingsprogram", items: 12 },
  { title: "Checklista: GDPR-anpassa ditt företag", href: "/juridik/gdpr-foretag", items: 18 },
];

export default function Verktyg() {
  return (
    <>
      <section className="bg-[var(--color-brand)] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="text-sm text-white/40 mb-6"><a href="/" className="hover:text-white/70">Hem</a><span className="mx-2">›</span><span className="text-white/70">Verktyg</span></nav>
          <div className="max-w-3xl">
            <span className="text-4xl mb-4 block">🛠️</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-white">Verktyg & kalkylatorer</h1>
            <p className="text-lg text-white/70 leading-relaxed">Gratis digitala verktyg, kalkylatorer, mallar och checklistor för svenska företagare.</p>
          </div>
        </div>
      </section>

      {/* Calculators */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--color-brand)] mb-8">🧮 Kalkylatorer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {calculators.map((c) => (
              <a key={c.href} href={c.href} className="card group relative">
                {c.popular && <span className="absolute top-3 right-3 text-xs font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded-full">Populär</span>}
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-[var(--color-brand)] group-hover:text-[var(--color-accent)] transition-colors mb-2">{c.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{c.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--color-brand)] mb-8">📝 Mallar & dokument</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {templates.map((t) => (
              <a key={t.href} href={t.href} className="silo-link group flex items-center gap-3">
                <span className="text-2xl">{t.icon}</span>
                <h3 className="font-semibold text-[var(--color-brand)] group-hover:text-[var(--color-accent)] transition-colors text-sm">{t.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Checklists */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--color-brand)] mb-8">✅ Checklistor</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {checklists.map((c) => (
              <a key={c.href} href={c.href} className="card group flex items-center justify-between">
                <h3 className="font-semibold text-[var(--color-brand)] group-hover:text-[var(--color-accent)] transition-colors">{c.title}</h3>
                <span className="text-xs text-[var(--color-text-muted)] bg-black/[0.04] px-2.5 py-1 rounded-full">{c.items} punkter</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
