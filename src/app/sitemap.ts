import type { MetadataRoute } from "next";
import { categories } from "@/lib/categories";
import { getAllArticles } from "@/lib/content";
import { guides } from "@/lib/guides";
import { SITE_URL } from "@/lib/site";

/**
 * lastmod far ALDRIG komma fran byggklockan. `new Date()` gor att varje
 * deploy pastar att hela sajten uppdaterats, vilket Google ganska snabbt
 * slutar lita pa. Datumen nedan kommer i stallet fran:
 *
 *  - artiklar: frontmatterns `updatedAt`, med fallback till `publishedAt`
 *  - kategorisidor: senaste artikeldatumet i kategorin (sidan ar en lista
 *    over artiklarna, sa den ar farsk nar en artikel ar det)
 *  - startsidan: senaste artikeldatumet pa hela sajten
 *  - ovriga statiska sidor: handsatt datum i STATIC_LAST_MODIFIED nedan
 *
 * Statiska sidor har ingen frontmatter att lasa. Bump datumet i tabellen nar
 * du faktiskt andrar sidans innehall – inte vid varje deploy.
 */
const STATIC_LAST_MODIFIED: Record<string, string> = {
  "/guider": "2026-07-07",
  "/verktyg": "2026-06-04",
  "/verktyg/vinstkalkylator": "2026-06-04",
  "/verktyg/momskalkylator": "2026-06-04",
  "/verktyg/lonekalkylator": "2026-06-04",
  "/hitta-radgivare": "2026-08-10",
  "/blogg": "2026-03-24",
  "/om-oss": "2026-11-01",
  "/redaktionen": "2026-09-10",
  "/integritetspolicy": "2026-11-01",
  "/kopvillkor": "2026-11-01",
};

/** Alla branschguider ligger i samma katalog och byggs om tillsammans. */
const GUIDES_LAST_MODIFIED = "2026-07-07";

/** updatedAt om den finns, annars publishedAt. Hanterar aven tom strang. */
function articleDate(fm: { updatedAt?: string; publishedAt?: string }): string {
  return fm.updatedAt?.trim() || fm.publishedAt?.trim() || "";
}

/** Senaste (storsta) ISO-datumet i listan. ISO-datum sorterar lexikalt. */
function latest(dates: string[]): string | undefined {
  const valid = dates.filter(Boolean).sort();
  return valid.length > 0 ? valid[valid.length - 1] : undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const articles = getAllArticles();

  const allDates = articles.map((a) => articleDate(a.frontmatter));
  const siteLatest = latest(allDates) ?? STATIC_LAST_MODIFIED["/om-oss"];

  const staticPage = (
    pathname: string,
    priority: number,
    changeFrequency: "weekly" | "monthly"
  ) => ({
    url: `${baseUrl}${pathname}`,
    lastModified: STATIC_LAST_MODIFIED[pathname],
    changeFrequency,
    priority,
  });

  const staticPages: MetadataRoute.Sitemap = [
    // Startsidan listar de senaste artiklarna – den ar farsk nar de ar det.
    {
      url: baseUrl,
      lastModified: siteLatest,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    staticPage("/guider", 0.9, "weekly"),
    staticPage("/verktyg", 0.8, "monthly"),
    staticPage("/verktyg/vinstkalkylator", 0.7, "monthly"),
    staticPage("/verktyg/momskalkylator", 0.7, "monthly"),
    staticPage("/verktyg/lonekalkylator", 0.7, "monthly"),
    staticPage("/hitta-radgivare", 0.9, "monthly"),
    staticPage("/blogg", 0.7, "weekly"),
    staticPage("/om-oss", 0.5, "monthly"),
    staticPage("/redaktionen", 0.5, "monthly"),
    staticPage("/integritetspolicy", 0.3, "monthly"),
    staticPage("/kopvillkor", 0.3, "monthly"),
    // OBS: /forfattare och /forfattare/:slug ar borttagna och 308:as till
    // /redaktionen. De far inte ligga kvar har – en sitemap ska bara innehalla
    // slutdestinationer, aldrig omdirigeringar eller 404:or.
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/${cat.slug}`,
    lastModified: latest(
      articles
        .filter((a) => a.category === cat.slug)
        .map((a) => articleDate(a.frontmatter))
    ),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/${article.category}/${article.slug}`,
    lastModified: articleDate(article.frontmatter) || undefined,
    changeFrequency: "monthly" as const,
    priority: article.frontmatter.type === "pillar" ? 0.8 : 0.7,
  }));

  const guidePages: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${baseUrl}/guider/${guide.slug}`,
    lastModified: GUIDES_LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages, ...articlePages, ...guidePages];
}
