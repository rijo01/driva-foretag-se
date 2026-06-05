import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  guides,
  getGuide,
  getTableOfContents,
  getPreviewPoints,
  getFaq,
  GUIDE_PRICE_SEK,
} from "@/lib/guides";
import BuyButton from "./BuyButton";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: `Startguide för ${guide.name} – allt du behöver (PDF)`,
    description: `Branschspecifik startguide för ${guide.name.toLowerCase()}: tillstånd, kostnader, registrering steg för steg, prissättning och checklista. ${GUIDE_PRICE_SEK} kr, direkt nedladdning.`,
    alternates: { canonical: `https://driva-foretag.se/guider/${guide.slug}` },
  };
}

export default async function GuideLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const toc = getTableOfContents(guide.name);
  const preview = getPreviewPoints(guide.name);
  const faq = getFaq(guide.name);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Startguide: ${guide.name}`,
    description: `Branschspecifik startguide för ${guide.name.toLowerCase()} i PDF-format.`,
    image: "https://driva-foretag.se/logo.png",
    // Digital nedladdning (PDF) – inga frakt-/returfält (shippingDetails,
    // hasMerchantReturnPolicy) eftersom produkten levereras direkt online.
    category: "Digital guide (PDF-nedladdning)",
    brand: { "@type": "Brand", name: "Driva Företag" },
    offers: {
      "@type": "Offer",
      price: String(GUIDE_PRICE_SEK),
      priceCurrency: "SEK",
      availability: guide.available
        ? "https://schema.org/InStock"
        : "https://schema.org/PreOrder",
      availableDeliveryMethod:
        "http://purl.org/goodrelations/v1#DeliveryModeDirectDownload",
      url: `https://driva-foretag.se/guider/${guide.slug}`,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-brand text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 lg:py-20">
          <Link
            href="/guider"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            ← Alla branschguider
          </Link>
          <h1 className="mt-6 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Startguide för {guide.name}
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl leading-relaxed">
            {guide.tagline} En komplett, branschspecifik guide som tar dig från
            idé till första uppdraget.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            {guide.available ? (
              <>
                <BuyButton slug={guide.slug} price={GUIDE_PRICE_SEK} />
                <p className="text-sm text-white/70">
                  <span className="font-semibold text-accent">
                    {GUIDE_PRICE_SEK} kr
                  </span>{" "}
                  – allt du behöver på ett ställe. PDF, direkt nedladdning.
                </p>
              </>
            ) : (
              <>
                <span className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white/80 font-semibold rounded-lg px-8 py-4 text-lg border border-white/20 cursor-default">
                  Kommer snart
                </span>
                <p className="text-sm text-white/70">
                  Den här guiden är under produktion och faktagranskning. Den
                  går att köpa så snart den är klar.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Innehållsförteckning */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-bold text-2xl text-brand mb-2">
            Det här innehåller guiden
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            {toc.length} kapitel som tar dig hela vägen – konkret och anpassat
            för {guide.name.toLowerCase()}.
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {toc.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-surface text-brand font-semibold text-sm flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-gray-700 pt-0.5">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Gratis försmak */}
      <section className="py-12 lg:py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <span className="inline-block bg-accent/15 text-brand text-sm font-medium rounded-full px-3 py-1 mb-4">
            Gratis försmak
          </span>
          <h2 className="font-heading font-bold text-2xl text-brand mb-6">
            Få en känsla för innehållet
          </h2>
          <ul className="space-y-4">
            {preview.map((point, i) => (
              <li
                key={i}
                className="flex gap-3 bg-white rounded-xl p-5 border border-gray-100"
              >
                <span className="shrink-0 text-accent text-xl leading-none">✓</span>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-gray-600">
            Det här är bara början. Den fullständiga guiden går på djupet i varje
            kapitel.
          </p>
        </div>
      </section>

      {/* Köp-CTA */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center bg-surface rounded-2xl py-10 px-6">
          {guide.available ? (
            <>
              <h2 className="font-heading font-bold text-2xl text-brand mb-3">
                Redo att starta {guide.name.toLowerCase()}?
              </h2>
              <p className="text-gray-600 mb-6">
                {GUIDE_PRICE_SEK} kr – allt du behöver på ett ställe.
              </p>
              <div className="flex justify-center">
                <BuyButton slug={guide.slug} price={GUIDE_PRICE_SEK} />
              </div>
            </>
          ) : (
            <>
              <h2 className="font-heading font-bold text-2xl text-brand mb-3">
                Guiden för {guide.name.toLowerCase()} kommer snart
              </h2>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Vi skriver och faktagranskar just nu. Under tiden kan du få
                kostnadsfri hjälp av en rådgivare.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/hitta-radgivare"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent-light text-brand font-semibold rounded-lg px-6 py-3 transition-colors"
                >
                  Hitta en rådgivare kostnadsfritt
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-bold text-2xl text-brand mb-8">
            Vanliga frågor
          </h2>
          <div className="space-y-4">
            {faq.map((f, i) => (
              <details
                key={i}
                className="bg-white rounded-xl border border-gray-100 p-5 group"
              >
                <summary className="font-heading font-semibold text-brand cursor-pointer list-none flex justify-between items-center">
                  {f.question}
                  <span className="text-accent group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
