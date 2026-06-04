// Återanvändbar PDF-generator för de branschspecifika startguiderna.
//
// Läser strukturerad, faktagranskad data (src/content/guider/<slug>.ts) och
// producerar en påkostad PDF till public/guider/<slug>.pdf.
//
// Kör med tsx:
//   npx tsx scripts/generate-guide-pdf.ts byggforetag
//   npm run guide:pdf -- byggforetag
//
// Utan slug-argument genereras byggforetag (mall-guiden).
//
// Designen (omslag, brandfärger, typografi, sidnummer, sidfot) är gemensam för
// alla 20 guider – byt bara datafil.

import { jsPDF } from "jspdf";
import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import type {
  GuideContent,
  Block,
  CalloutBlock,
} from "../src/content/guider/types";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// ── Brandfärger ────────────────────────────────────────────────────────────
type RGB = [number, number, number];
const BRAND: RGB = [12, 35, 64]; // #0C2340
const BRAND_LIGHT: RGB = [26, 58, 92]; // #1a3a5c
const ACCENT: RGB = [232, 168, 56]; // #E8A838
const ACCENT_SOFT: RGB = [252, 244, 228];
const INK: RGB = [38, 43, 51];
const MUTED: RGB = [110, 118, 130];
const HAIRLINE: RGB = [222, 226, 232];
const WHITE: RGB = [255, 255, 255];

const CALLOUT_STYLE: Record<
  CalloutBlock["variant"],
  { bg: RGB; bar: RGB; title: RGB }
> = {
  fact: { bg: [234, 240, 247], bar: BRAND_LIGHT, title: BRAND },
  tip: { bg: ACCENT_SOFT, bar: ACCENT, title: [150, 100, 10] },
  warning: { bg: [251, 237, 230], bar: [196, 84, 38], title: [150, 54, 20] },
};

// ── Layout (A4, punkter) ────────────────────────────────────────────────────
const FONT = "helvetica";

function sanitize(text: string): string {
  // Standardfonten (Helvetica) renderar Latin-1 säkert (å ä ö § % é).
  // Ersätt tankstreck och liknande som ligger utanför Latin-1.
  return text
    .replace(/[–—]/g, "-") // en/em-dash → bindestreck
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/•/g, "-")
    .replace(/ /g, " ");
}

// Tokeniserar text till ord, där **fetstil** styr vikten. Varje token vet om
// det föregicks av blanksteg i källtexten (`spaceBefore`). Det är avgörande:
// ett **fet**-segment direkt följt av skiljetecken (t.ex. "**arbetskostnaden**,")
// ger en separat ","-token UTAN blanksteg före – annars skulle ett mellanslag
// felaktigt ritas in före kommatecknet. Ett token bryts vid både blanksteg och
// viktbyte, så att "ord," kan ha "ord" i fet och "," i normal stil utan glapp.
function tokenize(
  text: string,
  forceBold: boolean
): { w: string; bold: boolean; spaceBefore: boolean }[] {
  // Bygg en teckenström med vikt per tecken.
  const chars: { ch: string; bold: boolean }[] = [];
  const re = /\*\*(.+?)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  const push = (s: string, bold: boolean) => {
    for (const ch of s) chars.push({ ch, bold: forceBold || bold });
  };
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) push(text.slice(last, m.index), false);
    push(m[1], true);
    last = m.index + m[0].length;
  }
  if (last < text.length) push(text.slice(last), false);

  const tokens: { w: string; bold: boolean; spaceBefore: boolean }[] = [];
  let i = 0;
  while (i < chars.length) {
    let sawSpace = false;
    while (i < chars.length && /\s/.test(chars[i].ch)) {
      sawSpace = true;
      i++;
    }
    if (i >= chars.length) break;
    const bold = chars[i].bold;
    let w = "";
    while (i < chars.length && !/\s/.test(chars[i].ch) && chars[i].bold === bold) {
      w += chars[i].ch;
      i++;
    }
    tokens.push({ w, bold, spaceBefore: sawSpace });
  }
  return tokens;
}

interface Word {
  w: string;
  bold: boolean;
  /** Fanns det blanksteg före ordet i källtexten? Styr mellanrum vid ritning. */
  spaceBefore: boolean;
  width: number;
}

class GuidePDF {
  doc: jsPDF;
  pageW: number;
  pageH: number;
  marginX = 56;
  contentTop = 96;
  contentBottom: number;
  contentWidth: number;
  y: number;
  guide: GuideContent;
  tocPage = 0;
  chapterPages: { number: number; title: string; page: number }[] = [];

  constructor(guide: GuideContent) {
    this.guide = guide;
    this.doc = new jsPDF({ unit: "pt", format: "a4" });
    this.pageW = this.doc.internal.pageSize.getWidth();
    this.pageH = this.doc.internal.pageSize.getHeight();
    this.contentBottom = this.pageH - 74;
    this.contentWidth = this.pageW - this.marginX * 2;
    this.y = this.contentTop;
  }

  fill(rgb: RGB) {
    this.doc.setFillColor(rgb[0], rgb[1], rgb[2]);
  }
  stroke(rgb: RGB) {
    this.doc.setDrawColor(rgb[0], rgb[1], rgb[2]);
  }
  text(rgb: RGB) {
    this.doc.setTextColor(rgb[0], rgb[1], rgb[2]);
  }
  font(bold = false, italic = false) {
    const style = italic ? (bold ? "bolditalic" : "italic") : bold ? "bold" : "normal";
    this.doc.setFont(FONT, style);
  }

  // ── Radbrytning med fetstil ───────────────────────────────────────────────
  // forceBold gör hela texten fet redan vid mätningen, så att ord-bredderna
  // matchar renderingen (annars äts mellanrummen upp av de bredare fetglyferna).
  wrap(text: string, maxWidth: number, fontSize: number, forceBold = false): Word[][] {
    const d = this.doc;
    d.setFontSize(fontSize);
    const tokens = tokenize(sanitize(text), forceBold);

    const lines: Word[][] = [];
    let line: Word[] = [];
    let lineW = 0;
    for (const tok of tokens) {
      this.font(tok.bold);
      const ww = d.getTextWidth(tok.w);
      const spaceW = tok.spaceBefore && line.length ? d.getTextWidth(" ") : 0;
      // Bryt bara FÖRE token som har blanksteg före sig – skiljetecken som
      // sitter ihop med föregående ord (spaceBefore = false) följer alltid med.
      if (line.length && tok.spaceBefore && lineW + spaceW + ww > maxWidth) {
        lines.push(line);
        line = [];
        lineW = 0;
        line.push({ w: tok.w, bold: tok.bold, spaceBefore: false, width: ww });
        lineW = ww;
      } else {
        const sb = line.length > 0 && tok.spaceBefore;
        line.push({ w: tok.w, bold: tok.bold, spaceBefore: sb, width: ww });
        lineW += spaceW + ww;
      }
    }
    if (line.length) lines.push(line);
    return lines;
  }

  // Ritar en rad i viktgrupper med RIKTIGA mellanslagstecken (inte bara
  // positionsförskjutning), så att kopiering och textextrahering ur PDF:en
  // får korrekta ordmellanrum.
  drawLine(
    line: Word[],
    x: number,
    y: number,
    fontSize: number,
    color: RGB,
    italic = false
  ) {
    const d = this.doc;
    d.setFontSize(fontSize);
    this.text(color);
    let cx = x;
    let i = 0;
    while (i < line.length) {
      const bold = line[i].bold;
      let run = i > 0 && line[i].spaceBefore ? " " : "";
      let j = i;
      while (j < line.length && line[j].bold === bold) {
        if (j > i) run += line[j].spaceBefore ? " " + line[j].w : line[j].w;
        else run += line[j].w;
        j++;
      }
      this.font(bold, italic);
      d.text(run, cx, y);
      cx += d.getTextWidth(run);
      i = j;
    }
  }

  ensure(height: number) {
    if (this.y + height > this.contentBottom) this.newPage();
  }

  newPage() {
    this.doc.addPage();
    this.runningHeader();
    this.y = this.contentTop;
  }

  runningHeader() {
    const d = this.doc;
    this.font(true);
    d.setFontSize(8);
    this.text(MUTED);
    d.text("DRIVA FÖRETAG", this.marginX, 50);
    this.font(false);
    d.text(
      sanitize(`Startguide · ${this.guide.industry} ${this.guide.year}`),
      this.pageW - this.marginX,
      50,
      { align: "right" }
    );
    this.stroke(HAIRLINE);
    d.setLineWidth(0.6);
    d.line(this.marginX, 58, this.pageW - this.marginX, 58);
  }

  // ── Omslag ────────────────────────────────────────────────────────────────
  cover() {
    const d = this.doc;
    const g = this.guide;
    this.fill(BRAND);
    d.rect(0, 0, this.pageW, this.pageH, "F");

    // Accentband
    this.fill(ACCENT);
    d.rect(0, 250, this.pageW, 6, "F");

    // Logotyp-rad
    this.font(true);
    d.setFontSize(13);
    this.text(WHITE);
    d.text("DRIVA", this.marginX, 90);
    this.text(ACCENT);
    d.text("FÖRETAG", this.marginX + d.getTextWidth("DRIVA "), 90);

    this.font(false);
    d.setFontSize(10);
    this.text([170, 185, 205]);
    d.text("driva-foretag.se", this.marginX, 108);

    // Etikett
    this.font(true);
    d.setFontSize(11);
    this.text(ACCENT);
    d.text(sanitize(g.subtitle.toUpperCase()), this.marginX, 200);

    // Huvudtitel (kan radbrytas)
    this.text(WHITE);
    const titleLines = this.wrap(g.title, this.contentWidth, 38);
    let ty = 232;
    for (const line of titleLines) {
      this.drawLine(line, this.marginX, ty, 38, WHITE);
      ty += 44;
    }

    // Ingress
    const introLines = this.wrap(g.intro, this.contentWidth - 40, 12);
    let iy = 320;
    this.text([205, 214, 226]);
    for (const line of introLines) {
      this.drawLine(line, this.marginX, iy, 12, [205, 214, 226]);
      iy += 18;
    }

    // Värde-punkter på omslaget
    const bullets = [
      `Faktagranskad mot ${g.reviewedSources}`,
      "14 kapitel - från bolagsform till första kunden",
      "Komplett checklista och alla myndighetslänkar",
    ];
    let by = iy + 30;
    for (const b of bullets) {
      this.fill(ACCENT);
      d.circle(this.marginX + 3, by - 3, 2.4, "F");
      this.font(false);
      d.setFontSize(11);
      this.text([225, 231, 240]);
      d.text(sanitize(b), this.marginX + 16, by);
      by += 22;
    }

    // Sidfot på omslaget
    this.fill(ACCENT);
    d.rect(this.marginX, this.pageH - 96, 40, 3, "F");
    this.font(true);
    d.setFontSize(11);
    this.text(WHITE);
    d.text(sanitize(`Utgåva ${g.year}`), this.marginX, this.pageH - 70);
    this.font(false);
    d.setFontSize(9.5);
    this.text([150, 165, 188]);
    d.text(
      sanitize(`Faktagranskad ${g.reviewedAt} · © driva-foretag.se`),
      this.marginX,
      this.pageH - 54
    );
  }

  // ── Innehållsförteckning (fylls i efterhand) ───────────────────────────────
  reserveToc() {
    this.doc.addPage();
    this.tocPage = this.doc.getCurrentPageInfo().pageNumber;
  }

  renderToc() {
    const d = this.doc;
    d.setPage(this.tocPage);
    this.runningHeader();

    this.font(true);
    d.setFontSize(26);
    this.text(BRAND);
    d.text("Innehåll", this.marginX, 130);
    this.fill(ACCENT);
    d.rect(this.marginX, 144, 54, 4, "F");

    let ty = 190;
    for (const ch of this.chapterPages) {
      const num = String(ch.number).padStart(2, "0");
      this.font(true);
      d.setFontSize(12);
      this.text(ACCENT);
      d.text(num, this.marginX, ty);

      this.font(false);
      d.setFontSize(12);
      this.text(INK);
      const titleX = this.marginX + 34;
      const title = sanitize(ch.title);
      d.text(title, titleX, ty);
      const titleW = d.getTextWidth(title);

      const pageStr = String(ch.page);
      this.text(MUTED);
      d.setFontSize(11);
      const pageW = d.getTextWidth(pageStr);
      const pageX = this.pageW - this.marginX - pageW;
      d.text(pageStr, pageX, ty);

      // Punktledare
      this.stroke(HAIRLINE);
      d.setLineWidth(0.5);
      const dotStart = titleX + titleW + 8;
      const dotEnd = pageX - 8;
      if (dotEnd > dotStart) {
        d.setLineDashPattern([1, 3], 0);
        d.line(dotStart, ty - 3, dotEnd, ty - 3);
        d.setLineDashPattern([], 0);
      }
      ty += 27;
    }
  }

  // ── Kapitel ────────────────────────────────────────────────────────────────
  chapter(number: number, title: string, lead: string | undefined, blocks: Block[]) {
    this.newPage();
    this.chapterPages.push({
      number,
      title,
      page: this.doc.getCurrentPageInfo().pageNumber,
    });
    const d = this.doc;

    this.font(true);
    d.setFontSize(11);
    this.text(ACCENT);
    d.text(sanitize(`KAPITEL ${String(number).padStart(2, "0")}`), this.marginX, this.y);
    this.y += 26;

    this.text(BRAND);
    const titleLines = this.wrap(title, this.contentWidth, 22);
    for (const line of titleLines) {
      this.drawLine(line, this.marginX, this.y, 22, BRAND);
      this.y += 27;
    }
    this.y += 2;
    this.fill(ACCENT);
    d.rect(this.marginX, this.y, 46, 3, "F");
    this.y += 18;

    if (lead) {
      const leadLines = this.wrap(lead, this.contentWidth, 11.5);
      for (const line of leadLines) {
        this.drawLine(line, this.marginX, this.y, 11.5, MUTED, true);
        this.y += 16;
      }
      this.y += 8;
    }

    for (const block of blocks) this.block(block);
  }

  block(block: Block) {
    switch (block.type) {
      case "paragraph":
        return this.paragraph(block.text, undefined, undefined, block.source);
      case "subheading":
        return this.subheading(block.text);
      case "list":
        return this.list(block.items);
      case "steps":
        return this.steps(block.items);
      case "table":
        return this.table(block.columns, block.rows, block.source);
      case "callout":
        return this.callout(block);
      case "checklist":
        return this.checklist(block.items);
      case "links":
        return this.links(block.items);
    }
  }

  paragraph(text: string, size = 10.5, lh = 15.5, source?: string) {
    const lines = this.wrap(text, this.contentWidth, size);
    for (const line of lines) {
      this.ensure(lh);
      this.drawLine(line, this.marginX, this.y, size, INK);
      this.y += lh;
    }
    this.y += source ? 3 : 7;
    if (source) {
      this.sourceLine(source);
      this.y += 6;
    }
  }

  subheading(text: string) {
    this.ensure(30);
    this.y += 6;
    const lines = this.wrap(text, this.contentWidth, 13.5);
    for (const line of lines) {
      this.ensure(19);
      this.drawLine(line, this.marginX, this.y, 13.5, BRAND);
      this.y += 19;
    }
    this.y += 4;
  }

  list(items: string[]) {
    const size = 10.5;
    const lh = 15.5;
    const indent = 18;
    for (const item of items) {
      const lines = this.wrap(item, this.contentWidth - indent, size);
      this.ensure(lh);
      // punkt
      this.fill(ACCENT);
      this.doc.circle(this.marginX + 3, this.y - 3.5, 2.3, "F");
      lines.forEach((line, idx) => {
        this.ensure(lh);
        this.drawLine(line, this.marginX + indent, this.y, size, INK);
        this.y += lh;
        if (idx < lines.length - 1) {
          // inget
        }
      });
      this.y += 4;
    }
    this.y += 4;
  }

  steps(items: { title: string; text: string }[]) {
    const size = 10.5;
    const lh = 15.5;
    const indent = 30;
    items.forEach((item, i) => {
      const num = String(i + 1);
      this.ensure(lh + 6);
      // numrerad cirkel
      const cx = this.marginX + 9;
      const cy = this.y - 4;
      this.fill(BRAND);
      this.doc.circle(cx, cy, 9, "F");
      this.font(true);
      this.doc.setFontSize(9.5);
      this.text(WHITE);
      this.doc.text(num, cx, cy + 3.4, { align: "center" });

      // titel
      this.font(true);
      this.doc.setFontSize(11);
      this.text(BRAND);
      this.doc.text(sanitize(item.title), this.marginX + indent, this.y);
      this.y += 16;

      // text
      const lines = this.wrap(item.text, this.contentWidth - indent, size);
      for (const line of lines) {
        this.ensure(lh);
        this.drawLine(line, this.marginX + indent, this.y, size, INK);
        this.y += lh;
      }
      this.y += 9;
    });
    this.y += 2;
  }

  table(columns: string[], rows: string[][], source?: string) {
    const d = this.doc;
    const size = 9.5;
    const padX = 8;
    const padY = 7;
    const lh = 13;
    const n = columns.length;
    // kolumnbredder: första kolumnen något smalare i jämförelsetabeller
    const weights =
      n === 3 ? [0.3, 0.35, 0.35] : n === 2 ? [0.34, 0.66] : new Array(n).fill(1 / n);
    const widths = weights.map((w) => w * this.contentWidth);

    const drawHeader = () => {
      const hLines = columns.map((c, i) => this.wrap(c, widths[i] - padX * 2, size));
      const hRows = Math.max(...hLines.map((l) => l.length), 1);
      const hHeight = hRows * lh + padY * 2;
      this.ensure(hHeight + 4);
      this.fill(BRAND);
      d.rect(this.marginX, this.y, this.contentWidth, hHeight, "F");
      let cx = this.marginX;
      columns.forEach((_, i) => {
        let ty = this.y + padY + 9;
        for (const line of hLines[i]) {
          this.drawLine(line, cx + padX, ty, size, WHITE);
          ty += lh;
        }
        cx += widths[i];
      });
      this.y += hHeight;
    };

    drawHeader();

    rows.forEach((row, rIdx) => {
      const cellLines = row.map((c, i) =>
        this.wrap(c, widths[i] - padX * 2, size, i === 0 && n > 1)
      );
      const rRows = Math.max(...cellLines.map((l) => l.length), 1);
      const rHeight = rRows * lh + padY * 2;
      if (this.y + rHeight > this.contentBottom) {
        this.newPage();
        drawHeader();
      }
      if (rIdx % 2 === 1) {
        this.fill([245, 247, 250]);
        d.rect(this.marginX, this.y, this.contentWidth, rHeight, "F");
      }
      let cx = this.marginX;
      row.forEach((_, i) => {
        let ty = this.y + padY + 8;
        const isLabel = i === 0 && n > 1;
        for (const line of cellLines[i]) {
          this.drawLine(line, cx + padX, ty, size, isLabel ? BRAND : INK);
          ty += lh;
        }
        cx += widths[i];
      });
      // radlinje
      this.stroke(HAIRLINE);
      d.setLineWidth(0.5);
      d.line(this.marginX, this.y + rHeight, this.pageW - this.marginX, this.y + rHeight);
      this.y += rHeight;
    });

    this.y += 6;
    if (source) this.sourceLine(source);
    this.y += 6;
  }

  sourceLine(source: string) {
    const lines = this.wrap(`Källa: ${source}`, this.contentWidth, 8.5);
    for (const line of lines) {
      this.ensure(12);
      this.drawLine(line, this.marginX, this.y, 8.5, MUTED, true);
      this.y += 12;
    }
  }

  callout(block: CalloutBlock) {
    const d = this.doc;
    const style = CALLOUT_STYLE[block.variant];
    const size = 10;
    const lh = 14.5;
    const padX = 14;
    const padY = 12;
    const barW = 4;
    const innerW = this.contentWidth - padX * 2 - barW;

    const bodyLines = this.wrap(block.text, innerW, size);
    const titleLines = block.title ? this.wrap(block.title, innerW, 11, true) : [];
    const srcLines = block.source ? this.wrap(`Källa: ${block.source}`, innerW, 8.5) : [];

    const height =
      padY * 2 +
      titleLines.length * 15 +
      (titleLines.length ? 4 : 0) +
      bodyLines.length * lh +
      (srcLines.length ? 6 + srcLines.length * 11.5 : 0);

    this.ensure(height + 8);
    // bakgrund
    this.fill(style.bg);
    d.roundedRect(this.marginX, this.y, this.contentWidth, height, 5, 5, "F");
    // accentstapel
    this.fill(style.bar);
    d.rect(this.marginX, this.y, barW, height, "F");

    let ty = this.y + padY + 9;
    const x = this.marginX + barW + padX;
    if (titleLines.length) {
      for (const line of titleLines) {
        this.drawLine(line, x, ty, 11, style.title);
        ty += 15;
      }
      ty += 4;
    }
    for (const line of bodyLines) {
      this.drawLine(line, x, ty, size, INK);
      ty += lh;
    }
    if (srcLines.length) {
      ty += 6;
      for (const line of srcLines) {
        this.drawLine(line, x, ty, 8.5, MUTED, true);
        ty += 11.5;
      }
    }
    this.y += height + 10;
  }

  checklist(items: string[]) {
    const d = this.doc;
    const size = 10.5;
    const lh = 15.5;
    const indent = 22;
    const box = 9;
    for (const item of items) {
      const lines = this.wrap(item, this.contentWidth - indent, size);
      this.ensure(lh + 2);
      // kryssruta
      this.stroke(BRAND);
      d.setLineWidth(1.1);
      d.roundedRect(this.marginX, this.y - box - 1, box, box, 1.5, 1.5, "S");
      lines.forEach((line) => {
        this.ensure(lh);
        this.drawLine(line, this.marginX + indent, this.y, size, INK);
        this.y += lh;
      });
      this.y += 5;
    }
    this.y += 4;
  }

  links(items: { label: string; url: string; note?: string }[]) {
    const d = this.doc;
    for (const item of items) {
      this.ensure(28);
      this.fill(ACCENT);
      d.circle(this.marginX + 3, this.y - 3.5, 2.3, "F");
      this.font(true);
      d.setFontSize(10.5);
      this.text(BRAND);
      d.text(sanitize(item.label), this.marginX + 16, this.y);
      const labelW = d.getTextWidth(sanitize(item.label));
      this.font(false);
      d.setFontSize(9);
      this.text(ACCENT);
      d.textWithLink(sanitize(item.url), this.marginX + 16 + labelW + 8, this.y, {
        url: item.url,
      });
      this.y += 14;
      if (item.note) {
        const noteLines = this.wrap(item.note, this.contentWidth - 16, 9.5);
        for (const line of noteLines) {
          this.ensure(13);
          this.drawLine(line, this.marginX + 16, this.y, 9.5, MUTED);
          this.y += 13;
        }
      }
      this.y += 8;
    }
    this.y += 2;
  }

  // ── Sidfot + sidnummer (alla sidor utom omslag) ────────────────────────────
  footers() {
    const d = this.doc;
    const total = d.getNumberOfPages();
    for (let p = 2; p <= total; p++) {
      d.setPage(p);
      this.stroke(ACCENT);
      d.setLineWidth(1.4);
      d.line(this.marginX, this.pageH - 52, this.pageW - this.marginX, this.pageH - 52);
      this.font(false);
      d.setFontSize(8.5);
      this.text(MUTED);
      d.text(
        sanitize(`© driva-foretag.se · Faktagranskad ${this.guide.reviewedAt}`),
        this.marginX,
        this.pageH - 38
      );
      d.text(`Sida ${p} av ${total}`, this.pageW - this.marginX, this.pageH - 38, {
        align: "right",
      });
    }
  }

  build(): ArrayBuffer {
    this.cover();
    this.reserveToc();
    for (const ch of this.guide.chapters) {
      this.chapter(ch.number, ch.title, ch.lead, ch.blocks);
    }
    this.renderToc();
    this.footers();
    return this.doc.output("arraybuffer");
  }
}

async function main() {
  const slug = process.argv[2] || "byggforetag";
  const mod = await import(`../src/content/guider/${slug}.ts`);
  const guide: GuideContent = mod.default;
  if (!guide || guide.slug !== slug) {
    throw new Error(`Innehåll för "${slug}" saknas eller har fel slug.`);
  }

  const pdf = new GuidePDF(guide);
  const bytes = pdf.build();

  // Skrivs till content/guides-pdf/ – en mapp UTANFÖR public/ som inte
  // serveras statiskt. PDF:erna är betalvara och nås bara via /api/download.
  const outDir = join(ROOT, "content", "guides-pdf");
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, `${slug}.pdf`);
  writeFileSync(outPath, Buffer.from(bytes));
  console.log(
    `✓ content/guides-pdf/${slug}.pdf  (${pdf.doc.getNumberOfPages()} sidor, ${(
      bytes.byteLength / 1024
    ).toFixed(0)} kB)`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
