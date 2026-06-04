import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { guides, getGuide } from "@/lib/guides";
import DownloadClient from "./DownloadClient";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export const metadata: Metadata = {
  title: "Tack för ditt köp",
  description: "Ladda ner din branschspecifika startguide.",
  robots: { index: false, follow: false },
};

export default async function TackPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <Suspense fallback={<p className="text-gray-600">Laddar…</p>}>
          <DownloadClient slug={guide.slug} />
        </Suspense>
      </div>
    </section>
  );
}
