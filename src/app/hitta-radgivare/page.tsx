import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hitta rådgivare – Företagsrådgivning, bokföring & juridik",
  description: "Hitta rätt rådgivare för ditt företag. Jämför revisorer, bokföringskonsulter, jurister och affärscoacher – kostnadsfritt.",
  alternates: { canonical: "https://driva-foretag.se/hitta-radgivare" },
};

const categories = [
  { title: "Redovisningskonsult", desc: "Bokföring, bokslut och årsredovisning", icon: "📊", count: "240+" },
  { title: "Revisor", desc: "Revision och granskning av aktiebolag", icon: "🔍", count: "180+" },
  { title: "Affärsjurist", desc: "Avtal, bolagsrätt och tvistlösning", icon: "⚖️", count: "120+" },
  { title: "Skatterådgivare", desc: "Skatteplanering och deklaration", icon: "🧾", count: "95+" },
  { title: "Affärscoach", desc: "Affärsutveckling, strategi och tillväxt", icon: "🚀", count: "75+" },
  { title: "Marknadsföringskonsult", desc: "Digital marknadsföring och varumärke", icon: "📣", count: "110+" },
];

const steps = [
  { num: "1", title: "Beskriv ditt behov", desc: "Fyll i formuläret med vad du behöver hjälp med." },
  { num: "2", title: "Vi matchar dig", desc: "Vi skickar din förfrågan till de bäst lämpade rådgivarna." },
  { num: "3", title: "Jämför & välj", desc: "Du får offerter och väljer den som passar dig bäst." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hitta företagsrådgivare",
  description: "Kostnadsfri matchning med företagsrådgivare i Sverige.",
  provider: { "@type": "Organization", name: "Driva Företag" },
  areaServed: { "@type": "Country", name: "Sverige" },
  offers: { "@type": "Offer", price: "0", priceCurrency: "SEK" },
};

export default function HittaRadgivare() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-[var(--color-brand)] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex gap-2 mb-6">
                <span className="trust-badge !bg-white/10 !text-white/80">✅ 100% gratis</span>
                <span className="trust-badge !bg-white/10 !text-white/80">⚡ Svar inom 24h</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-white">
                Hitta rätt rådgivare för ditt företag
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Beskriv vad du behöver hjälp med – vi matchar dig med kvalificerade rådgivare helt kostnadsfritt.
              </p>
              <div className="flex gap-6">
                {steps.map((s) => (
                  <div key={s.num} className="flex-1">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-[var(--color-brand)] font-bold text-sm mb-2">{s.num}</div>
                    <h3 className="text-sm font-semibold text-white mb-1">{s.title}</h3>
                    <p className="text-xs text-white/50">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Lead Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-xl font-bold text-[var(--color-brand)] mb-6">Få offerter – helt gratis</h2>
              <form action="/api/leads" method="POST" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Ditt namn</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg border border-black/10 focus:outline-none focus:border-[var(--color-accent)] transition-colors text-[var(--color-text)]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">E-post</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-black/10 focus:outline-none focus:border-[var(--color-accent)] transition-colors text-[var(--color-text)]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Telefon</label>
                  <input type="tel" name="phone" className="w-full px-4 py-3 rounded-lg border border-black/10 focus:outline-none focus:border-[var(--color-accent)] transition-colors text-[var(--color-text)]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Typ av rådgivare</label>
                  <select name="advisor_type" required className="w-full px-4 py-3 rounded-lg border border-black/10 focus:outline-none focus:border-[var(--color-accent)] transition-colors text-[var(--color-text)]">
                    <option value="">Välj typ...</option>
                    <option value="redovisning">Redovisningskonsult</option>
                    <option value="revisor">Revisor</option>
                    <option value="jurist">Affärsjurist</option>
                    <option value="skatt">Skatterådgivare</option>
                    <option value="coach">Affärscoach</option>
                    <option value="marknadsforing">Marknadsföringskonsult</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Beskriv ditt behov</label>
                  <textarea name="message" rows={3} required className="w-full px-4 py-3 rounded-lg border border-black/10 focus:outline-none focus:border-[var(--color-accent)] transition-colors text-[var(--color-text)] resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Skicka förfrågan – helt gratis →
                </button>
                <p className="text-xs text-[var(--color-text-muted)] text-center">
                  Ingen spam. Läs vår <a href="/integritetspolicy" className="underline">integritetspolicy</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--color-brand)] mb-8">Hitta rätt kompetens</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((c) => (
              <div key={c.title} className="card">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{c.icon}</span>
                  <span className="text-xs font-semibold text-[var(--color-success)] bg-[var(--color-success)]/8 px-2 py-0.5 rounded-full">{c.count} rådgivare</span>
                </div>
                <h3 className="font-bold text-[var(--color-brand)] mb-1">{c.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
