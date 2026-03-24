import Link from "next/link";

const footerLinks = [
  {
    title: "Guider",
    links: [
      { href: "/starta-foretag", label: "Starta företag" },
      { href: "/bokforing-ekonomi", label: "Bokföring & Ekonomi" },
      { href: "/juridik", label: "Juridik" },
      { href: "/marknadsforing", label: "Marknadsföring" },
    ],
  },
  {
    title: "Mer",
    links: [
      { href: "/finansiering", label: "Finansiering" },
      { href: "/skatt", label: "Skatt" },
      { href: "/personal-hr", label: "Personal & HR" },
      { href: "/ai-effektivisering", label: "AI & Effektivisering" },
    ],
  },
  {
    title: "Resurser",
    links: [
      { href: "/verktyg", label: "Verktyg & kalkylatorer" },
      { href: "/hitta-radgivare", label: "Hitta rådgivare" },
      { href: "/blogg", label: "Blogg" },
      { href: "/om-oss", label: "Om oss" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold font-heading mb-3">
              Driva Företag
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Sveriges mest kompletta resurs för företagare. Guider, verktyg och
              rådgivning för alla faser av företagandet.
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-400">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Driva Företag. Informationen på denna
          sajt utgör inte juridisk eller ekonomisk rådgivning.
        </div>
      </div>
    </footer>
  );
}
