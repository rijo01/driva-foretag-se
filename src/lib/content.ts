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
