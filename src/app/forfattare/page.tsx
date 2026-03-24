import type { Metadata } from "next";
import Link from "next/link";
import { authors } from "@/lib/authors";

export const metadata: Metadata = {
  title: "Vår redaktion – Experterna bakom Driva Företag",
  description:
    "Möt redaktionen bakom Driva Företag. Auktoriserade revisorer, affärsjurister och marknadsföringsexperter som skriver våra guider.",
  alternates: { canonical: "https://driva-foretag.se/forfattare" },
};

export default function ForfattarePage() {
  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand">Hem</Link>
        <span className="mx-2">/</span>
        <span className="text-brand font-medium">Redaktionen</span>
      </nav>

      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-brand mb-4">
            Vår redaktion
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl">
            Alla artiklar på Driva Företag skrivs och faktagranskas av erfarna
            experter inom respektive område. Möt teamet bakom våra guider.
          </p>

          <div className="space-y-8">
            {authors.map((author) => (
              <Link
                key={author.slug}
                href={`/forfattare/${author.slug}`}
                className="group flex items-start gap-5 p-6 bg-surface rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0"
                  style={{ backgroundColor: author.bgColor }}
                >
                  {author.initials}
                </div>
                <div>
                  <h2 className="font-heading font-bold text-lg text-brand group-hover:text-accent transition-colors">
                    {author.name}
                  </h2>
                  <p className="text-sm text-accent font-medium mb-2">
                    {author.title}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {author.bio}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
