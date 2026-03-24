"use client";

import Link from "next/link";
import { useState } from "react";

const navCategories = [
  { href: "/starta-foretag", label: "Starta företag", emoji: "🚀" },
  { href: "/bokforing-ekonomi", label: "Bokföring", emoji: "📊" },
  { href: "/juridik", label: "Juridik", emoji: "⚖️" },
  { href: "/marknadsforing", label: "Marknadsföring", emoji: "📣" },
  { href: "/finansiering", label: "Finansiering", emoji: "💰" },
  { href: "/skatt", label: "Skatt", emoji: "🧾" },
  { href: "/personal-hr", label: "Personal & HR", emoji: "👥" },
  { href: "/ai-effektivisering", label: "AI", emoji: "🤖" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl font-bold text-brand font-heading">
              Driva Företag
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navCategories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="px-3 py-2 text-sm text-gray-700 hover:text-brand hover:bg-surface rounded-md transition-colors"
              >
                <span className="mr-1">{cat.emoji}</span>
                {cat.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/verktyg"
              className="px-4 py-2 text-sm font-medium text-brand border border-brand/20 rounded-lg hover:bg-surface transition-colors"
            >
              Verktyg
            </Link>
            <Link
              href="/hitta-radgivare"
              className="px-4 py-2 text-sm font-medium text-white bg-accent hover:bg-accent-light rounded-lg transition-colors"
            >
              Hitta rådgivare
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-600"
            aria-label="Meny"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-1">
            {navCategories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-gray-700 hover:bg-surface rounded-md"
              >
                <span className="mr-2">{cat.emoji}</span>
                {cat.label}
              </Link>
            ))}
            <hr className="my-2" />
            <Link
              href="/verktyg"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-brand font-medium"
            >
              🛠️ Verktyg
            </Link>
            <Link
              href="/hitta-radgivare"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-accent font-medium"
            >
              🔍 Hitta rådgivare
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
