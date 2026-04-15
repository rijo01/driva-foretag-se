import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { marked } from "marked";
import { getArticle, getArticlesByCategory } from "@/lib/content";

const CATEGORY = "starta-foretag";
const BASE_URL = "https://driva-foretag.se";

marked.setOptions({ gfm: true, breaks: false });

export function generateStaticParams() {
  const dir = path.join(process.cwd(), "src/content", CATEGORY);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => ({ slug: f.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(CATEGORY, slug);
  if (!article) return {};
  return {
    title: article.meta.title,
    description: article.meta.description,
    alternates: {
      canonical: `${BASE_URL}/${CATEGORY}/${slug}`,
    },
    openGraph: {
      title: article.meta.title,
      description: article.meta.description,
      type: "article",
      url: `${BASE_URL}/${CATEGORY}/${slug}`,
    },
  };
}

export default async function BranschGuide({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(CATEGORY, slug);
  if (!article) notFound();

  const html = await marked.parse(article.content);

  const related = getArticlesByCategory(CATEGORY)
    .filter((a) => a.slug !== slug)
    .slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.meta.title,
    description: article.meta.description,
    datePublished: article.meta.date,
    author: { "@type": "Organization", name: article.meta.author },
    publisher: {
      "@type": "Organization",
      name: "Driva Företag",
      url: BASE_URL,
    },
    mainEntityOfPage: `${BASE_URL}/${CATEGORY}/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <nav className="text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-blue-600">
              Hem
            </Link>
            <span className="mx-2">/</span>
            <Link href="/starta-foretag" className="hover:text-blue-600">
              Starta företag
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700">{article.meta.title}</span>
          </nav>

          <header className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
              {article.meta.title}
            </h1>
            <p className="mt-4 text-xl text-slate-600 leading-relaxed">
              {article.meta.description}
            </p>
            <div className="mt-4 text-sm text-slate-500 flex gap-4">
              <span>{article.meta.author}</span>
              <span>·</span>
              <span>{article.meta.readTime}</span>
              <span>·</span>
              <time dateTime={article.meta.date}>
                {new Date(article.meta.date).toLocaleDateString("sv-SE")}
              </time>
            </div>
          </header>

          <div
            className="prose-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {related.length > 0 && (
            <aside className="mt-16 pt-10 border-t border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Fler guider inom Starta företag
              </h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {related.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/starta-foretag/${a.slug}`}
                      className="block p-4 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-md transition"
                    >
                      <div className="font-semibold text-slate-900">
                        {a.title}
                      </div>
                      <div className="text-sm text-slate-500 mt-1">
                        {a.readTime}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </article>
      </main>
    </>
  );
}
