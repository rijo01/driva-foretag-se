import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Driva Företag – Sveriges guide för företagare | Starta, driva & växa",
  description:
    "Allt du behöver veta om att starta och driva företag i Sverige. Gratis guider om bokföring, juridik, skatt, marknadsföring, finansiering och AI.",
  alternates: { canonical: "https://driva-foretag.se" },
};

/* ─── Data ─── */
const categories = [
  {
    icon: "🚀",
    title: "Starta företag",
    desc: "Bolagsform, registrering, affärsplan och allt du behöver för att komma igång.",
    href: "/starta-foretag",
    articles: 42,
    color: "#E8A838",
  },
  {
    icon: "📊",
    title: "Bokföring & ekonomi",
    desc: "Löpande bokföring, bokslut, fakturering och de bästa programmen.",
    href: "/bokforing-ekonomi",
    articles: 38,
    color: "#2D8F5E",
  },
  {
    icon: "⚖️",
    title: "Juridik",
    desc: "Avtal, bolagsrätt, GDPR, anställningsrätt och tvistlösning.",
    href: "/juridik",
    articles: 35,
    color: "#6366F1",
  },
  {
    icon: "📣",
    title: "Marknadsföring",
    desc: "SEO, sociala medier, content marketing, annonsering och varumärke.",
    href: "/marknadsforning",
    articles: 40,
    color: "#EC4899",
  },
  {
    icon: "💰",
    title: "Finansiering",
    desc: "Företagslån, bidrag, investerare, crowdfunding och bootstrap.",
    href: "/finansiering",
    articles: 28,
    color: "#F59E0B",
  },
  {
    icon: "🧾",
    title: "Skatt",
    desc: "F-skatt, moms, deklaration, skatteavdrag och skatteplanering.",
    href: "/skatt",
    articles: 32,
    color: "#14B8A6",
  },
  {
    icon: "👥",
    title: "Personal & HR",
    desc: "Anställa, löner, semester, arbetsrätt och företagskultur.",
    href: "/personal-hr",
    articles: 25,
    color: "#8B5CF6",
  },
  {
    icon: "🤖",
    title: "AI & Effektivisering",
    desc: "AI-verktyg, automatisering, produktivitet och digitalisering.",
    href: "/ai-effektivisering",
    articles: 22,
    color: "#0EA5E9",
  },
];

const popularArticles = [
  {
    title: "Enskild firma vs aktiebolag – vilken bolagsform passar dig?",
    href: "/starta-foretag/enskild-firma-vs-aktiebolag",
    category: "Starta företag",
    readTime: "8 min",
  },
  {
    title: "F-skatt – komplett guide för företagare 2026",
    href: "/skatt/f-skatt",
    category: "Skatt",
    readTime: "6 min",
  },
  {
    title: "Bästa bokföringsprogrammet – jämförelse 2026",
    href: "/bokforing-ekonomi/basta-bokforingsprogram",
    category: "Bokföring",
    readTime: "10 min",
  },
  {
    title: "Affärsplan – gratis mall och steg-för-steg-guide",
    href: "/starta-foretag/affarsplan-mall",
    category: "Starta företag",
    readTime: "12 min",
  },
  {
    title: "Så deklarerar du enskild firma – NE-bilagan förklarad",
    href: "/skatt/deklarera-enskild-firma",
    category: "Skatt",
    readTime: "7 min",
  },
  {
    title: "Momsfritt eller momspliktigt? Komplett momsguide",
    href: "/skatt/momsguide",
    category: "Skatt",
    readTime: "9 min",
  },
];

const trustSignals = [
  { text: "500+ gratis guider", icon: "📚" },
  { text: "Uppdaterat 2026", icon: "✅" },
  { text: "Skrivet av experter", icon: "🎓" },
  { text: "100% oberoende", icon: "🛡️" },
];

const tools = [
  {
    title: "Löneberäknare",
    desc: "Räkna ut lön efter skatt som företagare",
    href: "/verktyg/loneberaknare",
    icon: "💵",
  },
  {
    title: "Bolagsväljaren",
    desc: "Hitta rätt bolagsform på 2 minuter",
    href: "/verktyg/bolagsvaljaren",
    icon: "🏢",
  },
  {
    title: "Break-even kalkylator",
    desc: "När börjar ditt företag gå plus?",
    href: "/verktyg/break-even",
    icon: "📈",
  },
  {
    title: "Momsräknare",
    desc: "Beräkna moms snabbt och enkelt",
    href: "/verktyg/momsraknare",
    icon: "🧮",
  },
];

/* ─── Schema.org ─── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Driva Företag",
  url: "https://driva-foretag.se",
  description: "Sveriges mest kompletta resurs för företagare.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://driva-foretag.se/sok?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Driva Företag",
  url: "https://driva-foretag.se",
  logo: "https://driva-foretag.se/images/logo.png",
  sameAs: [],
};

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* ══════ HERO ══════ */}
      <section className="relative overflow-hidden bg-[var(--color-brand)] text-white">
        {/* Decorative */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)] rounded-full opacity-[0.03] blur-[120px] -translate-y-1/2 translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-3 mb-8">
              {trustSignals.map((t) => (
                <span key={t.text} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full text-xs font-medium text-white/80 backdrop-blur-sm">
                  <span>{t.icon}</span> {t.text}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] mb-6 text-white">
              Allt du behöver för att{" "}
              <span className="text-[var(--color-accent)]">starta, driva och växa</span>{" "}
              ditt företag
            </h1>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
              Sveriges mest kompletta kunskapsplattform för företagare. Gratis guider, praktiska verktyg och expertråd – från dag ett till exit.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="/starta-foretag" className="btn-primary !bg-[var(--color-accent)] !text-[var(--color-brand)]">
                Starta företag – guide →
              </a>
              <a href="/verktyg" className="btn-secondary !border-white/30 !text-white hover:!bg-white/10">
                Utforska verktyg
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/10">
            {[
              { value: "500+", label: "Gratis guider" },
              { value: "8", label: "Kunskapsområden" },
              { value: "12+", label: "Verktyg & kalkylatorer" },
              { value: "100%", label: "Oberoende & gratis" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-extrabold text-[var(--color-accent)]">{s.value}</div>
                <div className="text-sm text-white/50 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CATEGORIES ══════ */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-widest">Kunskapsområden</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brand)] mt-3">
              Allt om företagande – sorterat och strukturerat
            </h2>
            <p className="text-[var(--color-text-muted)] mt-4 max-w-2xl mx-auto">
              Välj det område du behöver hjälp med. Varje kategori innehåller djupgående guider skrivna av experter.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat) => (
              <a key={cat.href} href={cat.href} className="card group">
                <div className="text-3xl mb-4">{cat.icon}</div>
                <h3 className="text-lg font-bold text-[var(--color-brand)] group-hover:text-[var(--color-accent)] transition-colors mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
                  {cat.desc}
                </p>
                <span className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                  {cat.articles} guider →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ POPULAR ARTICLES ══════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <span className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-widest">Mest lästa</span>
              <h2 className="text-3xl font-bold text-[var(--color-brand)] mt-3">Populära guider</h2>
            </div>
            <a href="/blogg" className="text-sm font-semibold text-[var(--color-brand)] hover:text-[var(--color-accent)] transition-colors">
              Visa alla artiklar →
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {popularArticles.map((a) => (
              <a key={a.href} href={a.href} className="card group flex flex-col">
                <span className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-3">
                  {a.category}
                </span>
                <h3 className="text-lg font-bold text-[var(--color-brand)] group-hover:text-[var(--color-accent)] transition-colors mb-3 leading-snug">
                  {a.title}
                </h3>
                <span className="mt-auto text-xs text-[var(--color-text-muted)]">
                  📖 {a.readTime} läsning
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ TOOLS ══════ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-widest">Verktyg</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brand)] mt-3">
              Kalkylatorer & verktyg för företagare
            </h2>
            <p className="text-[var(--color-text-muted)] mt-4">
              Spara tid med våra kostnadsfria digitala verktyg.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tools.map((t) => (
              <a key={t.href} href={t.href} className="card group text-center">
                <div className="text-4xl mb-4">{t.icon}</div>
                <h3 className="font-bold text-[var(--color-brand)] group-hover:text-[var(--color-accent)] transition-colors mb-2">
                  {t.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)]">{t.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ LEAD CAPTURE ══════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-2xl bg-[var(--color-brand)] text-white p-10 md:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent)] rounded-full opacity-[0.06] blur-[80px] -translate-y-1/2 translate-x-1/3" />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Behöver du hjälp med ditt företag?
              </h2>
              <p className="text-white/70 mb-8 text-lg">
                Fyll i formuläret så matchar vi dig med en rådgivare som passar dina behov. Helt kostnadsfritt.
              </p>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* ══════ CHECKLIST CTA ══════ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                stage: "Planera",
                items: ["Välj bolagsform", "Skriv affärsplan", "Gör marknadsanalys", "Skapa budget"],
                href: "/starta-foretag",
                color: "var(--color-accent)",
              },
              {
                stage: "Starta",
                items: ["Registrera företag", "Öppna företagskonto", "Ansök om F-skatt", "Starta bokföring"],
                href: "/starta-foretag/checklista",
                color: "var(--color-success)",
              },
              {
                stage: "Växa",
                items: ["Anställ personal", "Skala marknadsföring", "Optimera skatt", "Utforska AI-verktyg"],
                href: "/ai-effektivisering",
                color: "var(--color-info)",
              },
            ].map((c) => (
              <a key={c.stage} href={c.href} className="card group">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm mb-5"
                  style={{ background: c.color }}
                >
                  {c.stage === "Planera" ? "1" : c.stage === "Starta" ? "2" : "3"}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-brand)] mb-4">{c.stage}</h3>
                <ul className="space-y-2.5">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: c.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ FAQ ══════ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[var(--color-brand)] mb-10 text-center">
            Vanliga frågor om att driva företag
          </h2>
          <FAQSection />
        </div>
      </section>
    </>
  );
}

/* ─── Lead Form Component ─── */
function LeadForm() {
  return (
    <form action="/api/leads" method="POST" className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Ditt namn"
          required
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
        />
        <input
          type="email"
          name="email"
          placeholder="Din e-post"
          required
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
        />
      </div>
      <select
        name="topic"
        required
        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white/70 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
      >
        <option value="">Vad behöver du hjälp med?</option>
        <option value="starta">Starta företag</option>
        <option value="bokforing">Bokföring & ekonomi</option>
        <option value="juridik">Juridik & avtal</option>
        <option value="skatt">Skatt & deklaration</option>
        <option value="finansiering">Finansiering & lån</option>
        <option value="marknadsforing">Marknadsföring</option>
        <option value="annat">Annat</option>
      </select>
      <textarea
        name="message"
        placeholder="Beskriv kort vad du behöver hjälp med..."
        rows={3}
        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
      />
      <button type="submit" className="btn-primary w-full justify-center !bg-[var(--color-accent)] !text-[var(--color-brand)]">
        Skicka förfrågan – helt gratis
      </button>
      <p className="text-xs text-white/40 text-center">
        Vi delar aldrig dina uppgifter. Läs vår <a href="/integritetspolicy" className="underline">integritetspolicy</a>.
      </p>
    </form>
  );
}

/* ─── FAQ Section with Schema ─── */
function FAQSection() {
  const faqs = [
    {
      q: "Vad kostar det att starta ett aktiebolag?",
      a: "Det kostar 25 000 kr i aktiekapital plus registreringsavgiften hos Bolagsverket (ca 2 200 kr online). Totalt ca 27 200 kr för att komma igång.",
    },
    {
      q: "Vad är skillnaden mellan enskild firma och aktiebolag?",
      a: "I enskild firma är du personligt ansvarig för skulder och vinsten beskattas som din inkomst. I ett aktiebolag är bolaget en egen juridisk person med begränsat ansvar, och du beskattas på lön och utdelning.",
    },
    {
      q: "Måste jag ha bokföring som enskild firma?",
      a: "Ja, alla som driver näringsverksamhet i Sverige är bokföringsskyldiga enligt bokföringslagen. Du kan välja mellan kontantmetoden och faktureringsmetoden.",
    },
    {
      q: "Vad är F-skatt och behöver jag det?",
      a: "F-skatt (företagarskatt) innebär att du själv ansvarar för att betala skatt och sociala avgifter. Du behöver F-skatt om du fakturerar för tjänster eller varor till andra företag.",
    },
    {
      q: "Hur mycket skatt betalar jag som företagare?",
      a: "Det beror på bolagsform. Enskild firma betalar ca 30–55% i inkomstskatt plus egenavgifter. Aktiebolag betalar 20,6% bolagsskatt, och du som ägare beskattas på lön och utdelning.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="space-y-4">
        {faqs.map((f) => (
          <details key={f.q} className="group card !p-0 overflow-hidden">
            <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none font-semibold text-[var(--color-brand)] hover:bg-black/[0.02] transition-colors">
              {f.q}
              <svg className="w-5 h-5 text-[var(--color-text-muted)] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-5 text-[var(--color-text-muted)] leading-relaxed">
              {f.a}
            </div>
          </details>
        ))}
      </div>
    </>
  );
}
