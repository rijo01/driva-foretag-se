import type { Metadata } from "next";
import Link from "next/link";
import Faktagranskningsmetod from "@/components/Faktagranskningsmetod";
import { CONTACT_EMAIL, OWNER_COMPANY, isPlaceholder } from "@/lib/site";

export const metadata: Metadata = {
  title: "Redaktionen – avsändare och faktagranskning",
  description:
    "Redaktionen på driva-foretag.se står bakom allt innehåll på sajten. Så kontrollerar vi belopp, avgifter och lagrum mot primärkällorna före publicering.",
  alternates: { canonical: "https://driva-foretag.se/redaktionen" },
};

export default function RedaktionenPage() {
  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand">
          Hem
        </Link>
        <span className="mx-2">/</span>
        <span className="text-brand font-medium">Redaktionen</span>
      </nav>

      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-brand mb-6">
            Redaktionen
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Allt innehåll på driva-foretag.se ges ut av redaktionen, som är
            sajtens avsändare. Artiklarna publiceras under namnet{" "}
            <strong className="text-brand">Redaktionen, driva-foretag.se</strong>{" "}
            och inte under enskilda skribenters namn.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Det är ett medvetet val. Vi anger hellre en avsändare som stämmer än
            personporträtt och yrkestitlar som inte går att kontrollera. Det du
            kan bedöma oss på är i stället metoden nedan: vilka källor vi
            använder, hur de redovisas och när innehållet senast stämdes av.
          </p>

          <p className="text-gray-700 leading-relaxed mb-10">
            Sajten drivs av{" "}
            <strong className="text-brand">{OWNER_COMPANY}</strong>
            {isPlaceholder(OWNER_COMPANY) && (
              <span className="text-red-600 font-medium">
                {" "}
                (platshållare – fylls i före publicering)
              </span>
            )}
            . Fler uppgifter om vem som står bakom sajten och hur den finansieras
            finns på{" "}
            <Link href="/om-oss" className="text-accent hover:underline">
              Om oss
            </Link>
            .
          </p>

          <h2 className="font-heading text-2xl font-bold text-brand mb-4">
            Så faktagranskar vi
          </h2>
          <Faktagranskningsmetod />

          <h2 className="font-heading text-2xl font-bold text-brand mt-12 mb-4">
            Hittat ett fel? Hör av dig
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Rättelser, frågor om en källa eller synpunkter på en artikel går
            till{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-accent hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            . Skriv gärna vilken artikel det gäller.
          </p>

          <div className="mt-10 p-6 bg-gradient-to-br from-brand to-brand-light rounded-xl text-white">
            <h2 className="font-heading font-bold text-xl mb-2">
              Behöver du någon som tittar på just ditt fall?
            </h2>
            <p className="text-gray-200 mb-5 leading-relaxed">
              Vi matchar dig med rådgivare som kan gå igenom din situation.
              Kostnadsfritt för dig som företagare.
            </p>
            <Link
              href="/hitta-radgivare"
              className="inline-block px-5 py-2.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-colors"
            >
              Hitta rådgivare →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
