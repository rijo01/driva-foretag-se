import Link from "next/link";
import type { Category } from "@/lib/categories";

export default function CategoryPage({ category }: { category: Category }) {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand">
          Hem
        </Link>
        <span className="mx-2">/</span>
        <span className="text-brand font-medium">{category.title}</span>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand to-brand-light text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-5xl mb-4 block">{category.emoji}</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            {category.title}
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            {category.description}
          </p>
        </div>
      </section>

      {/* Pillar Articles */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-heading font-bold mb-8">
            Huvudguider
          </h2>
          <div className="space-y-6">
            {category.pillars.map((article) => (
              <Link
                key={article.slug}
                href={`/${category.slug}/${article.slug}`}
                className="block border-l-4 border-accent bg-surface rounded-r-xl p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-heading font-bold text-lg text-brand mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600">{article.description}</p>
                <span className="text-sm text-accent font-medium mt-2 inline-block">
                  Läs guiden →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cluster Articles */}
      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-heading font-bold mb-8">
            Alla artiklar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.clusters.map((article) => (
              <Link
                key={article.slug}
                href={`/${category.slug}/${article.slug}`}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <h3 className="font-heading font-semibold text-brand mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600">{article.description}</p>
                <span className="text-sm text-accent font-medium mt-3 inline-block">
                  Läs mer →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">
            Behöver du professionell hjälp?
          </h2>
          <p className="text-gray-600 mb-8">
            Vi matchar dig med erfarna rådgivare inom {category.title.toLowerCase()}.
          </p>
          <Link
            href="/hitta-radgivare"
            className="inline-block px-8 py-3.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-colors"
          >
            Hitta rådgivare →
          </Link>
        </div>
      </section>
    </>
  );
}
