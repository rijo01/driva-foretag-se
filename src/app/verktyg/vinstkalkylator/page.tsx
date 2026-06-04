import type { Metadata } from "next";
import Link from "next/link";
import VinstkalkylatorClient from "./VinstkalkylatorClient";

export const metadata: Metadata = {
  title: "Vinstkalkylator – Beräkna vinst, vinstmarginal & täckningsbidrag",
  description:
    "Gratis vinstkalkylator för svenska företagare. Räkna ut vinst, vinstmarginal och täckningsbidrag direkt utifrån intäkter och kostnader. Uppdateras live.",
  alternates: { canonical: "https://driva-foretag.se/verktyg/vinstkalkylator" },
};

export default function VinstkalkylatorPage() {
  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand">Hem</Link>
        <span className="mx-2">/</span>
        <Link href="/verktyg" className="hover:text-brand">Verktyg</Link>
        <span className="mx-2">/</span>
        <span className="text-brand font-medium">Vinstkalkylator</span>
      </nav>

      <section className="bg-gradient-to-br from-brand to-brand-light text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-5xl mb-4 block">📈</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Vinstkalkylator
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Fyll i intäkter och kostnader så räknar vi ut din vinst,
            vinstmarginal och täckningsbidrag – direkt medan du skriver.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <VinstkalkylatorClient />
        </div>
      </section>
    </>
  );
}
