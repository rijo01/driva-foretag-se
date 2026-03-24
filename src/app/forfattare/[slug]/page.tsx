import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { authors, getAuthorBySlug } from "@/lib/authors";
import { getAllArticles } from "@/lib/content";
import { getCategoryBySlug } from "@/lib/categories";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) return {};
  return {
    title: `${author.name} – ${author.title}`,
    description: author.bio,
    alternates: { canonical: `https://driva-foretag.se/forfattare/${slug}` },
  };
}

export default async function AuthorPage({ params }: PageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) notFound();

  const allArticles = getAllArticles();
  const authorArticles = allArticles.filter(
    (a) => a.frontmatter.author === author.name
  );

  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand">Hem</Link>
        <span className="mx-2">/</span>
        <Link href="/forfattare" className="hover:text-brand">Redaktionen</Link>
        <span className="mx-2">/</span>
        <span className="text-brand font-medium">{author.name}</span>
      </nav>

      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-6 mb-12">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0"
              style={{ backgroundColor: author.bgColor }}
            >
              {author.initials}
            </div>
            <div>
              <h1 className="text-3xl font-heading font-bold text-brand">
                {author.name}
              </h1>
              <p className="text-accent font-medium mt-1">{author.title}</p>
              <p className="text-gray-600 mt-3 leading-relaxed max-w-xl">
                {author.bio}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {author.expertise.map((cat) => {
                  const catData = getCategoryBySlug(cat);
                  return (
                    <Link
                      key={cat}
                      href={`/${cat}`}
                      className="text-xs px-2.5 py-1 bg-surface rounded-full text-brand font-medium hover:bg-surface-dark transition-colors"
                    >
                      {catData?.emoji} {catData?.title ?? cat}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-heading font-bold text-brand mb-6">
            Artiklar av {author.name} ({authorArticles.length})
          </h2>

          {authorArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {authorArticles.map((article) => {
                const cat = getCategoryBySlug(article.category);
                return (
                  <Link
                    key={`${article.category}/${article.slug}`}
                    href={`/${article.category}/${article.slug}`}
                    className="p-5 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      {cat?.emoji} {cat?.title}
                    </span>
                    <h3 className="font-heading font-semibold text-brand mt-1.5 leading-snug">
                      {article.frontmatter.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">
                      {article.frontmatter.publishedAt}
                      {article.frontmatter.readTime &&
                        ` · ${article.frontmatter.readTime}`}
                    </p>
                  </Link>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-500">Inga publicerade artiklar ännu.</p>
          )}
        </div>
      </section>
    </>
  );
}
