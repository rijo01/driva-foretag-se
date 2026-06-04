import type { Metadata } from "next";
import Link from "next/link";
import LonekalkylatorClient from "./LonekalkylatorClient";

export const metadata: Metadata = {
  title: "Lönekalkylator – Arbetsgivaravgift & arbetsgivarkostnad",
  description:
    "Gratis lönekalkylator för arbetsgivare. Uppskatta arbetsgivaravgift och total arbetsgivarkostnad utifrån bruttolön och avgiftsfall. Förenklad – kontrollera satser hos Skatteverket.",
  alternates: { canonical: "https://driva-foretag.se/verktyg/lonekalkylator" },
};

export default function LonekalkylatorPage() {
  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand">Hem</Link>
        <span className="mx-2">/</span>
        <Link href="/verktyg" className="hover:text-brand">Verktyg</Link>
        <span className="mx-2">/</span>
        <span className="text-brand font-medium">Lönekalkylator</span>
      </nav>

      <section className="bg-gradient-to-br from-brand to-brand-light text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-5xl mb-4 block">💵</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Lönekalkylator
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Uppskatta arbetsgivaravgiften och din totala arbetsgivarkostnad
            utifrån bruttolön och avgiftsfall – direkt medan du skriver.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* YMYL: synlig friskrivning */}
          <div className="mb-8 rounded-lg border-l-4 border-accent bg-surface px-4 py-3 text-sm text-gray-700">
            Förenklad uppskattning – kontrollera aktuella satser och din
            skattetabell hos{" "}
            <a
              href="https://www.skatteverket.se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2 hover:text-accent-light"
            >
              skatteverket.se
            </a>
            .
          </div>

          <LonekalkylatorClient />
        </div>
      </section>
    </>
  );
}
