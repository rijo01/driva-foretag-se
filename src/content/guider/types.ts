// Strukturerad datamodell för de branschspecifika startguiderna (PDF-produkt).
//
// Innehållet skrivs som typad data – INTE som hårdkodad text i ett engångs-
// script – så att samma struktur kan återanvändas för alla 20 guider och
// återanvändas på webben. PDF-generatorn (scripts/generate-guide-pdf.ts)
// renderar varje blocktyp nedan.
//
// YMYL: alla faktasiffror i en guide ska vara verifierade mot primärkälla.
// Använd `source`-fältet på faktarutor och tabeller för att ange källan.

/** Ett textblock kan innehålla enkel **fetstil** med dubbla asterisker. */
export type RichText = string;

export interface ParagraphBlock {
  type: "paragraph";
  text: RichText;
  /** Primärkälla – renderas som källrad under stycket (YMYL). */
  source?: string;
}

/** Underrubrik inom ett kapitel (renderas som H3, indexeras inte i TOC). */
export interface SubheadingBlock {
  type: "subheading";
  text: string;
}

/** Punktlista. */
export interface ListBlock {
  type: "list";
  items: RichText[];
}

/** Numrerad steg-lista med valfri rubrik per steg. */
export interface StepsBlock {
  type: "steps";
  items: { title: string; text: RichText }[];
}

/** Tabell med kolumnrubriker och rader. */
export interface TableBlock {
  type: "table";
  columns: string[];
  rows: string[][];
  /** Primärkälla för siffrorna i tabellen (YMYL). */
  source?: string;
}

/** Faktaruta / tips / varning. */
export interface CalloutBlock {
  type: "callout";
  variant: "fact" | "tip" | "warning";
  title?: string;
  text: RichText;
  /** Primärkälla – visas i rutan när angiven (YMYL). */
  source?: string;
}

/** Kryssbar checklista (rendereras med kryssrutor). */
export interface ChecklistBlock {
  type: "checklist";
  items: RichText[];
}

/** Lista med myndighets-/resurslänkar. */
export interface LinksBlock {
  type: "links";
  items: { label: string; url: string; note?: string }[];
}

export type Block =
  | ParagraphBlock
  | SubheadingBlock
  | ListBlock
  | StepsBlock
  | TableBlock
  | CalloutBlock
  | ChecklistBlock
  | LinksBlock;

export interface Chapter {
  /** Visas som kapitelnummer på omslag/TOC och kapitelsida. */
  number: number;
  title: string;
  /** Kort ingress under kapitelrubriken (valfri). */
  lead?: string;
  blocks: Block[];
}

export interface GuideContent {
  /** Matchar src/lib/guides.ts och filnamnet public/guider/<slug>.pdf. */
  slug: string;
  /** Branschnamn, t.ex. "Byggföretag". */
  industry: string;
  /** Omslagets huvudtitel. */
  title: string;
  /** Omslagets underrubrik. */
  subtitle: string;
  /** Årtal som visas på omslaget – ska matcha verifierade siffror. */
  year: number;
  /** Datum då innehållet faktagranskades (ISO), visas i sidfot. */
  reviewedAt: string;
  /**
   * Myndigheter guiden är faktagranskad mot – branschspecifikt. Renderas på
   * omslaget som "Faktagranskad mot <reviewedSources>". Exempel för åkeri:
   * "Transportstyrelsen, Trafikverket, Skatteverket & Bolagsverket".
   */
  reviewedSources: string;
  /** Kort säljande ingress på omslagets baksida / första sidan. */
  intro: string;
  chapters: Chapter[];
}
