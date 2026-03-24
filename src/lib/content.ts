import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content");

export interface ArticleFrontmatter {
  title: string;
  description: string;
  category: string;
  type: "pillar" | "cluster";
  publishedAt: string;
  updatedAt?: string;
  author?: string;
  readTime?: string;
  tags?: string[];
  reviewedBy?: string;
}

export interface TocItem {
  id: string;
  text: string;
}

export function extractToc(content: string): TocItem[] {
  const headingRegex = /^## (.+)$/gm;
  const items: TocItem[] = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[1].replace(/\*\*/g, "").replace(/[`*_~]/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[åä]/g, "a")
      .replace(/ö/g, "o")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    items.push({ id, text });
  }
  return items;
}

export function getAdjacentArticles(
  category: string,
  slug: string
): { prev: ArticleData | null; next: ArticleData | null } {
  const articles = getArticlesByCategory(category);
  const index = articles.findIndex((a) => a.slug === slug);
  return {
    prev: index > 0 ? articles[index - 1] : null,
    next: index < articles.length - 1 ? articles[index + 1] : null,
  };
}

export interface ArticleData {
  slug: string;
  category: string;
  frontmatter: ArticleFrontmatter;
  content: string;
}

export function getArticlesByCategory(category: string): ArticleData[] {
  const categoryDir = path.join(contentDirectory, category);
  if (!fs.existsSync(categoryDir)) return [];

  const files = fs.readdirSync(categoryDir).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => {
    const filePath = path.join(categoryDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    return {
      slug: file.replace(/\.mdx$/, ""),
      category,
      frontmatter: data as ArticleFrontmatter,
      content,
    };
  });
}

export function getArticle(
  category: string,
  slug: string
): ArticleData | null {
  const filePath = path.join(contentDirectory, category, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return {
    slug,
    category,
    frontmatter: data as ArticleFrontmatter,
    content,
  };
}

export function getAllArticles(): ArticleData[] {
  if (!fs.existsSync(contentDirectory)) return [];

  const categoryDirs = fs
    .readdirSync(contentDirectory, { withFileTypes: true })
    .filter((d) => d.isDirectory());

  return categoryDirs.flatMap((dir) => getArticlesByCategory(dir.name));
}
