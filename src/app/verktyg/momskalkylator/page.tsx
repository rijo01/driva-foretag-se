import type { Metadata } from "next";
import Link from "next/link";
import MomskalkylatorClient from "./MomskalkylatorClient";

export const metadata: Metadata = {
  title: "Momskalkylator – Räkna ut moms (25 %, 12 %, 6 %)",
  description:
    "Gratis momskalkylator för svenska företagare. Lägg på moms eller räkna baklänges från ett pris inklusive moms. Visar nettopris, momsbelopp och totalpris – live.",
  alternates: { canonical: "https://driva-foretag.se/verktyg/momskalkylator" },
};

export default function MomskalkylatorPage() {
  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand">Hem</Link>
        <span className="mx-2">/</span>
        <Link href="/verktyg" className="hover:text-brand">Verktyg</Link>
        <span className="mx-2">/</span>
        <span className="text-brand font-medium">Momskalkylator</span>
      </nav>

      <section className="bg-gradient-to-br from-brand to-brand-light text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-5xl mb-4 block">🧮</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Momskalkylator
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Lägg på moms eller räkna baklänges från ett pris inklusive moms.
            Nettopris, momsbelopp och totalpris räknas ut direkt medan du skriver.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <MomskalkylatorClient />

          {/* Faktanotering – verifierad mot Skatteverket (publicerad 2026-02-26) */}
          <div className="mt-12 max-w-3xl rounded-2xl border border-accent/30 bg-surface p-6">
            <h2 className="text-base font-heading font-bold text-brand mb-2">
              Sänkt moms på livsmedel från 1 april 2026
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Skatteverket uppger att skattesatsen på livsmedel sänks till 6 %
              från tidigare 12 % den 1 april 2026, och att sänkningen gäller fram
              till och med den 31 december 2027. Momsen på restaurang- och
              cateringtjänster är oförändrad 12 % – för en restaurang som både
              serverar på plats och säljer hämtmat blir det alltså 12 % för det
              som äts på plats och 6 % för hämtmat. Kontrollera alltid aktuell
              momssats hos{" "}
              <a
                href="https://www.skatteverket.se"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2 hover:text-accent-light"
              >
                skatteverket.se
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
