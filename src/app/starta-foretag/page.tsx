import type { Metadata } from "next";
import Link from "next/link";
import { getCategoryBySlug } from "@/lib/categories";
import { getArticlesByCategory } from "@/lib/content";
import CategoryPage from "@/components/CategoryPage";

const category = getCategoryBySlug("starta-foretag")!;

export const metadata: Metadata = {
  title: category.metaTitle,
  description: category.metaDescription,
  alternates: { canonical: "https://driva-foretag.se/starta-foretag" },
};

export default function Page() {
  const hardcodedSlugs = new Set([
    ...category.pillars.map((a) => a.slug),
    ...category.clusters.map((a) => a.slug),
  ]);

  const branschguider = getArticlesByCategory("starta-foretag")
    .filter((a) => !hardcodedSlugs.has(a.slug))
    .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title, "sv"));

  return (
    <>
      <CategoryPage category={category} />

      {branschguider.length > 0 && (
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-heading font-bold mb-2 text-brand">
              Branschguider – starta bolag i din bransch
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Komplett vägledning för dig som vill starta företag i en specifik
              bransch. Krav, tillstånd, kostnader och lönsamhet – skräddarsytt
              för varje verksamhet.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {branschguider.map((article) => (
                <Link
                  key={article.slug}
                  href={`/starta-foretag/${article.slug}`}
                  className="bg-surface rounded-xl p-6 hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
                >
                  <h3 className="font-heading font-semibold text-brand mb-2 leading-snug">
                    {article.frontmatter.title}
                  </h3>
                  <p className="text-sm text-gray-600 flex-1">
                    {article.frontmatter.description}
                  </p>
                  <span className="text-sm text-accent font-medium mt-4 inline-block">
                    Läs guiden →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
