import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getArticle, getAllArticles } from "@/lib/content";
import { getCategoryBySlug, categories } from "@/lib/categories";

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((a) => ({ category: a.category, slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const article = getArticle(category, slug);
  if (!article) return {};
  return {
    title: article.frontmatter.title,
    description: article.frontmatter.description,
    alternates: {
      canonical: `https://driva-foretag.se/${category}/${slug}`,
    },
    openGraph: {
      type: "article",
      locale: "sv_SE",
      title: article.frontmatter.title,
      description: article.frontmatter.description,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { category, slug } = await params;
  const article = getArticle(category, slug);
  if (!article) notFound();

  const cat = getCategoryBySlug(category);
  const catTitle = cat?.title ?? category;

  return (
    <>
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand">Hem</Link>
        <span className="mx-2">/</span>
        <Link href={`/${category}`} className="hover:text-brand">{catTitle}</Link>
        <span className="mx-2">/</span>
        <span className="text-brand font-medium">{article.frontmatter.title}</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <header className="mb-10">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            {catTitle}
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-brand mt-3 mb-4">
            {article.frontmatter.title}
          </h1>
          <p className="text-lg text-gray-600">
            {article.frontmatter.description}
          </p>
          {article.frontmatter.publishedAt && (
            <p className="text-sm text-gray-400 mt-4">
              Publicerad: {article.frontmatter.publishedAt}
              {article.frontmatter.updatedAt &&
                ` · Uppdaterad: ${article.frontmatter.updatedAt}`}
            </p>
          )}
        </header>

        <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-brand prose-a:text-accent hover:prose-a:underline">
          <MDXRemote source={article.content} />
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link
              href={`/${category}`}
              className="text-accent font-medium hover:underline"
            >
              ← Alla {catTitle}-artiklar
            </Link>
            <Link
              href="/hitta-radgivare"
              className="px-6 py-2.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-colors"
            >
              Hitta rådgivare
            </Link>
          </div>
        </footer>
      </article>
    </>
  );
}
