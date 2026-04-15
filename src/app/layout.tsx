import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://driva-foretag.se"),
  title: {
    default: "Driva Företag – Sveriges guide för företagare | Starta, driva & växa",
    template: "%s | Driva Företag",
  },
  description:
    "Allt du behöver för att starta, driva och utveckla ditt företag i Sverige. Guider, mallar, kalkylatorer och expertråd – helt gratis.",
  keywords: [
    "starta företag",
    "driva företag",
    "företagande Sverige",
    "enskild firma",
    "aktiebolag",
    "bokföring",
    "företagsguide",
  ],
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: "Driva Företag",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://driva-foretag.se" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,300..700&family=Playfair+Display:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

/* ─── Header ─── */
function Header() {
  const categories = [
    { name: "Starta företag", href: "/starta-foretag" },
    { name: "Bokföring & ekonomi", href: "/bokforing-ekonomi" },
    { name: "Juridik", href: "/juridik" },
    { name: "Marknadsföring", href: "/marknadsforning" },
    { name: "Finansiering", href: "/finansiering" },
    { name: "Skatt", href: "/skatt" },
    { name: "Personal & HR", href: "/personal-hr" },
    { name: "AI & Effektivisering", href: "/ai-effektivisering" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[var(--color-brand)] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="font-[var(--font-display)] text-lg font-bold text-[var(--color-brand)] tracking-tight">
              Driva&nbsp;Företag
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {categories.map((c) => (
              <a
                key={c.href}
                href={c.href}
                className="px-3 py-2 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-brand)] rounded-lg hover:bg-black/[0.03] transition-colors"
              >
                {c.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="/verktyg" className="btn-secondary !py-2 !px-4 !text-sm hidden sm:inline-flex">
              Verktyg
            </a>
            <a href="/hitta-radgivare" className="btn-primary !py-2 !px-4 !text-sm">
              Hitta rådgivare
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ─── Footer ─── */
function Footer() {
  const footerSections = [
    {
      title: "Guider",
      links: [
        { name: "Starta företag", href: "/starta-foretag" },
        { name: "Bokföring", href: "/bokforing-ekonomi" },
        { name: "Juridik", href: "/juridik" },
        { name: "Skatt", href: "/skatt" },
      ],
    },
    {
      title: "Resurser",
      links: [
        { name: "Verktyg & kalkylatorer", href: "/verktyg" },
        { name: "Hitta rådgivare", href: "/hitta-radgivare" },
        { name: "Blogg", href: "/blogg" },
        { name: "Om oss", href: "/om-oss" },
        { name: "Hitta svenska företag på InfoFinder", href: "https://www.infofinder.se", external: true },
      ],
    },
    {
      title: "Populärt",
      links: [
        { name: "Enskild firma vs AB", href: "/starta-foretag/enskild-firma-vs-aktiebolag" },
        { name: "F-skatt guide", href: "/skatt/f-skatt" },
        { name: "Bokföringsprogram", href: "/bokforing-ekonomi/basta-bokforingsprogram" },
        { name: "Affärsplan mall", href: "/starta-foretag/affarsplan-mall" },
      ],
    },
  ];

  return (
    <footer className="bg-[var(--color-brand)] text-white/80 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-[var(--font-display)] font-bold text-white">
                Driva&nbsp;Företag
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Sveriges mest kompletta resurs för företagare. Gratis guider, verktyg och expertråd.
            </p>
          </div>
          {footerSections.map((s) => (
            <div key={s.title}>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                {s.title}
              </h4>
              <ul className="space-y-2.5">
                {s.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      {...("external" in l && l.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {l.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} driva-foretag.se – All information är generell och ersätter inte professionell rådgivning.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="/integritetspolicy" className="hover:text-white/70">Integritetspolicy</a>
            <a href="/ansvarsfriskrivning" className="hover:text-white/70">Ansvarsfriskrivning</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
