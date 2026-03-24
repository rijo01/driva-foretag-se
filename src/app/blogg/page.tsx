import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/content";
import { categories } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Blogg – Artiklar och guider för företagare",
  description:
    "Läs våra senaste artiklar och guider om att starta och driva företag i Sverige.",
  alternates: { canonical: "https://driva-foretag.se/blogg" },
};

export default function BloggPage() {
  const articles = getAllArticles();

  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand">Hem</Link>
        <span className="mx-2">/</span>
        <span className="text-brand font-medium">Blogg</span>
      </nav>

      <section className="bg-gradient-to-br from-brand to-brand-light text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Blogg
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Senaste artiklarna och guiderna för svenska företagare.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Link
                  key={`${article.category}/${article.slug}`}
                  href={`/${article.category}/${article.slug}`}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {article.frontmatter.category}
                  </span>
                  <h2 className="font-heading font-semibold text-brand mt-2 mb-2">
                    {article.frontmatter.title}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {article.frontmatter.description}
                  </p>
                  <span className="text-sm text-accent font-medium mt-3 inline-block">
                    Läs mer →
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg mb-8">
                Inga publicerade artiklar ännu. Utforska våra guider istället:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {categories.slice(0, 4).map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/${cat.slug}`}
                    className="p-4 bg-surface rounded-lg hover:shadow-sm transition-shadow"
                  >
                    <span className="text-2xl block mb-2">{cat.emoji}</span>
                    <span className="text-sm font-medium text-brand">
                      {cat.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
