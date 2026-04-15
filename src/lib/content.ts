import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "src/content");

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
  pillar?: boolean;
}

export function getArticlesByCategory(category: string): ArticleMeta[] {
  const categoryDir = path.join(contentDir, category);

  if (!fs.existsSync(categoryDir)) return [];

  const files = fs.readdirSync(categoryDir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(categoryDir, file), "utf-8");
      const { data } = matter(raw);

      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        category,
        date: data.date || new Date().toISOString(),
        author: data.author || "Driva Företag",
        readTime: data.readTime || "5 min",
        tags: data.tags || [],
        pillar: data.pillar || false,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticle(category: string, slug: string) {
  const filePath = path.join(contentDir, category, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    meta: {
      slug,
      title: data.title || slug,
      description: data.description || "",
      category,
      date: data.date || new Date().toISOString(),
      author: data.author || "Driva Företag",
      readTime: data.readTime || "5 min",
      tags: data.tags || [],
      pillar: data.pillar || false,
    } as ArticleMeta,
    content,
  };
}

export function getAllArticles(): ArticleMeta[] {
  const categories = [
    "starta-foretag",
    "bokforing-ekonomi",
    "juridik",
    "marknadsforing",
    "finansiering",
    "skatt",
    "personal-hr",
    "ai-effektivisering",
  ];

  return categories.flatMap((c) => getArticlesByCategory(c));
}
