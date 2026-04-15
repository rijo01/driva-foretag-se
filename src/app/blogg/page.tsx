import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogg – Senaste artiklarna om företagande",
  description: "Senaste guiderna och artiklarna om att starta, driva och utveckla företag i Sverige.",
  alternates: { canonical: "https://driva-foretag.se/blogg" },
};

export default function Blogg() {
  return (
    <>
      <section className="bg-[var(--color-brand)] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-white">Alla artiklar</h1>
          <p className="text-lg text-white/70">Senaste guiderna och insikterna för svenska företagare.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-[var(--color-text-muted)]">
            Artiklar publiceras löpande av vårt team och MaxiAI. Utforska våra <a href="/starta-foretag" className="text-[var(--color-info)] underline">kunskapsområden</a> för att hitta det du söker.
          </p>
        </div>
      </section>
    </>
  );
}
