// Genererar PLATSHÅLLAR-PDF:er för branschguiderna så att köp-/nedladdnings-
// flödet kan testas innan det riktiga (faktagranskade) innehållet finns.
//
// Kör: node scripts/generate-placeholder-pdfs.mjs
//
// Skriver content/guides-pdf/<slug>.pdf för varje bransch i src/lib/guides.ts.

import { jsPDF } from "jspdf";
import { mkdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// Liten egen kopia av guide-listan – scriptet kör utanför Next/TS.
const guides = [
  { slug: "byggforetag", name: "Byggföretag" },
  { slug: "akeri", name: "Åkeri & Transport" },
  { slug: "restaurang", name: "Restaurang" },
  { slug: "cafe", name: "Café" },
  { slug: "stadforetag", name: "Städföretag" },
  { slug: "dropshipping", name: "Dropshipping & E-handel" },
  { slug: "frisorsalong", name: "Frisörsalong" },
  { slug: "konsultforetag", name: "Konsultföretag" },
  { slug: "redovisningsbyra", name: "Redovisningsbyrå" },
  { slug: "vvsforetag", name: "VVS-företag" },
  { slug: "elforetag", name: "Elföretag" },
  { slug: "snickeri", name: "Snickeri & Hantverk" },
  { slug: "fastighetsbolag", name: "Fastighetsbolag" },
  { slug: "webbyra", name: "Webbyrå" },
  { slug: "skonhetssalong", name: "Skönhetssalong" },
  { slug: "personlig-tranare", name: "Personlig tränare & Gym" },
  { slug: "maleri", name: "Måleri" },
  { slug: "tradgard", name: "Trädgård & Landskap" },
  { slug: "fotograf", name: "Fotograf" },
  { slug: "event", name: "Event & Bröllop" },
];

const outDir = join(root, "content", "guides-pdf");
mkdirSync(outDir, { recursive: true });

const BRAND = [12, 35, 64]; // #0C2340
const ACCENT = [232, 168, 56]; // #E8A838

for (const { slug, name } of guides) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();

  // Bakgrundsband upptill
  doc.setFillColor(...BRAND);
  doc.rect(0, 0, pageW, 160, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text("DRIVA FÖRETAG", 56, 70);

  doc.setFontSize(26);
  doc.text("Startguide", 56, 110);
  doc.setTextColor(...ACCENT);
  doc.text(name, 56, 142);

  // Brödtext
  doc.setTextColor(40, 40, 40);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(13);
  const body = [
    "Guide kommer snart.",
    "",
    "Det här är en platshållare. Den fullständiga, faktagranskade",
    `startguiden för ${name} publiceras inom kort och ersätter`,
    "den här filen automatiskt.",
    "",
    "Har du redan köpt? Du har tillgång till den färdiga guiden",
    "så snart den är klar – samma nedladdningslänk gäller.",
  ];
  doc.text(body, 56, 210, { lineHeightFactor: 1.6 });

  // Sidfot
  doc.setDrawColor(...ACCENT);
  doc.setLineWidth(2);
  doc.line(56, pageH - 70, pageW - 56, pageH - 70);
  doc.setFontSize(10);
  doc.setTextColor(120, 120, 120);
  doc.text("driva-foretag.se  ·  platshållare – ej slutgiltigt innehåll", 56, pageH - 50);

  const bytes = doc.output("arraybuffer");
  writeFileSync(join(outDir, `${slug}.pdf`), Buffer.from(bytes));
  console.log(`✓ content/guides-pdf/${slug}.pdf`);
}

console.log(`\nKlart – ${guides.length} platshållar-PDF:er genererade.`);
