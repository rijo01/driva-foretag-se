import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getArticle,
  getAllArticles,
  getArticlesByCategory,
  extractToc,
  getAdjacentArticles,
} from "@/lib/content";
import { getCategoryBySlug } from "@/lib/categories";
import ShareButtons from "@/components/ShareButtons";

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((a) => ({ category: a.category, slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
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

/* Heading component that adds id attributes for TOC linking */
function createHeadingComponent(level: 2 | 3) {
  const Tag = `h${level}` as const;
  return function Heading({ children }: { children?: React.ReactNode }) {
    const text = String(children ?? "")
      .replace(/\*\*/g, "")
      .replace(/[`*_~]/g, "")
      .trim();
    const id = text
      .toLowerCase()
      .replace(/[åä]/g, "a")
      .replace(/ö/g, "o")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    return (
      <Tag id={id}>
        {children}
      </Tag>
    );
  };
}

const mdxComponents = {
  h2: createHeadingComponent(2),
  h3: createHeadingComponent(3),
};

export default async function ArticlePage({ params }: PageProps) {
  const { category, slug } = await params;
  const article = getArticle(category, slug);
  if (!article) notFound();

  const cat = getCategoryBySlug(category);
  const catTitle = cat?.title ?? category;
  const catEmoji = cat?.emoji ?? "";

  const toc = extractToc(article.content);
  const { prev, next } = getAdjacentArticles(category, slug);

  const relatedArticles = getArticlesByCategory(category)
    .filter((a) => a.slug !== slug)
    .slice(0, 5);

  const articleUrl = `https://driva-foretag.se/${category}/${slug}`;

  /* JSON-LD Article schema */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.frontmatter.title,
    description: article.frontmatter.description,
    datePublished: article.frontmatter.publishedAt,
    dateModified: article.frontmatter.updatedAt ?? article.frontmatter.publishedAt,
    author: {
      "@type": "Organization",
      name: article.frontmatter.author ?? "Driva Företag-redaktionen",
    },
    publisher: {
      "@type": "Organization",
      name: "Driva Företag",
      url: "https://driva-foretag.se",
    },
    mainEntityOfPage: articleUrl,
    inLanguage: "sv-SE",
  };

  /* Extract FAQ if present */
  const faqRegex =
    /###\s+(.+?\?)\s*\n+([\s\S]*?)(?=###\s+.+?\?|\n## |\n---|\n\*\*|$)/g;
  const faqSection = article.content.match(
    /## (?:Vanliga frågor|FAQ)[\s\S]*$/i
  );
  const faqItems: { question: string; answer: string }[] = [];
  if (faqSection) {
    let faqMatch;
    while ((faqMatch = faqRegex.exec(faqSection[0])) !== null) {
      faqItems.push({
        question: faqMatch[1].trim(),
        answer: faqMatch[2].trim().replace(/\n+/g, " "),
      });
    }
  }

  const faqSchema =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand transition-colors">
          Hem
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/${category}`}
          className="hover:text-brand transition-colors"
        >
          {catTitle}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700 font-medium truncate">
          {article.frontmatter.title}
        </span>
      </nav>

      {/* Main layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 lg:pb-20">
        <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-12">
          {/* Article column */}
          <article className="min-w-0">
            {/* Header */}
            <header className="mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface text-sm font-medium text-brand rounded-full">
                {catEmoji} {catTitle}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-heading font-bold text-brand mt-4 mb-4 leading-tight">
                {article.frontmatter.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {article.frontmatter.description}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-4 text-sm text-gray-400">
                {article.frontmatter.author && (
                  <span>{article.frontmatter.author}</span>
                )}
                {article.frontmatter.publishedAt && (
                  <span>Publicerad: {article.frontmatter.publishedAt}</span>
                )}
                {article.frontmatter.updatedAt &&
                  article.frontmatter.updatedAt !==
                    article.frontmatter.publishedAt && (
                    <span>Uppdaterad: {article.frontmatter.updatedAt}</span>
                  )}
                {article.frontmatter.readTime && (
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {article.frontmatter.readTime} läsning
                  </span>
                )}
              </div>
              {article.frontmatter.type === "pillar" && (
                <span className="inline-block mt-3 px-2 py-0.5 text-xs font-semibold bg-accent/10 text-accent rounded">
                  Huvudguide
                </span>
              )}
            </header>

            {/* Table of Contents — mobile (collapsible) */}
            {toc.length > 2 && (
              <details className="lg:hidden mb-8 bg-surface rounded-xl border border-gray-100">
                <summary className="px-5 py-3 font-semibold text-brand cursor-pointer">
                  Innehållsförteckning
                </summary>
                <nav className="px-5 pb-4">
                  <ul className="space-y-2">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-sm text-gray-600 hover:text-accent transition-colors"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </details>
            )}

            {/* MDX Content */}
            <div className="article-prose">
              <MDXRemote source={article.content} components={mdxComponents} />
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <ShareButtons
                url={articleUrl}
                title={article.frontmatter.title}
              />
            </div>

            {/* Prev / Next navigation */}
            {(prev || next) && (
              <nav className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prev ? (
                  <Link
                    href={`/${category}/${prev.slug}`}
                    className="group p-5 bg-surface rounded-xl border border-gray-100 hover:border-accent/20 transition-colors"
                  >
                    <span className="text-xs text-gray-400 uppercase tracking-wider">
                      ← Föregående
                    </span>
                    <p className="mt-1 font-heading font-semibold text-brand group-hover:text-accent transition-colors leading-snug">
                      {prev.frontmatter.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
                {next ? (
                  <Link
                    href={`/${category}/${next.slug}`}
                    className="group p-5 bg-surface rounded-xl border border-gray-100 hover:border-accent/20 transition-colors text-right"
                  >
                    <span className="text-xs text-gray-400 uppercase tracking-wider">
                      Nästa →
                    </span>
                    <p className="mt-1 font-heading font-semibold text-brand group-hover:text-accent transition-colors leading-snug">
                      {next.frontmatter.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
              </nav>
            )}

            {/* Back + CTA */}
            <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
          </article>

          {/* Sidebar — desktop only */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              {/* TOC */}
              {toc.length > 2 && (
                <div className="bg-surface rounded-xl p-5 border border-gray-100">
                  <h3 className="font-heading font-bold text-brand text-sm uppercase tracking-wider mb-3">
                    Innehåll
                  </h3>
                  <nav>
                    <ul className="space-y-2">
                      {toc.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="toc-link block text-sm text-gray-500 border-l-2 border-transparent pl-3 py-0.5 hover:text-brand hover:border-accent transition-colors"
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              )}

              {/* CTA box */}
              <div className="bg-gradient-to-br from-brand to-brand-light rounded-xl p-6 text-white">
                <h3 className="font-heading font-bold text-lg mb-2">
                  Behöver du hjälp?
                </h3>
                <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                  Vi matchar dig med erfarna rådgivare – helt gratis.
                </p>
                <Link
                  href="/hitta-radgivare"
                  className="inline-block w-full text-center px-4 py-2.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-colors text-sm"
                >
                  Hitta rådgivare →
                </Link>
              </div>

              {/* Related articles */}
              {relatedArticles.length > 0 && (
                <div>
                  <h3 className="font-heading font-bold text-brand text-sm uppercase tracking-wider mb-3">
                    Relaterade artiklar
                  </h3>
                  <ul className="space-y-3">
                    {relatedArticles.map((a) => (
                      <li key={a.slug}>
                        <Link
                          href={`/${category}/${a.slug}`}
                          className="block text-sm text-gray-600 hover:text-accent transition-colors leading-snug"
                        >
                          {a.frontmatter.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
