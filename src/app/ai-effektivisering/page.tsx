import type { Metadata } from "next";
import { getCategoryBySlug } from "@/lib/categories";
import CategoryPage from "@/components/CategoryPage";

const category = getCategoryBySlug("ai-effektivisering")!;

export const metadata: Metadata = {
  title: category.metaTitle,
  description: category.metaDescription,
  alternates: { canonical: "https://driva-foretag.se/ai-effektivisering" },
};

export default function Page() {
  return <CategoryPage category={category} />;
}
