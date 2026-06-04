// Branschspecifika startguider – produktkatalog.
//
// OBS: Detta är endast infrastruktur. Innehållet i PDF:erna faktagranskas och
// produceras i en separat fas. Texterna här är strukturella (rubriker,
// säljkopia) och innehåller medvetet INGA faktasiffror (momssatser, avgifter,
// aktiekapital osv.) – sådant är YMYL och får bara läggas till efter granskning.

export const GUIDE_PRICE_SEK = 399;

export interface Guide {
  slug: string;
  name: string;
  /** Kort säljande mening till kort/hero. */
  tagline: string;
  /**
   * Finns den färdiga, faktagranskade PDF:en på plats (content/guides-pdf/)?
   * Endast `true`-guider får en aktiv köp-knapp – övriga visar "Kommer snart"
   * så att ingen kan betala för en guide som ännu inte finns.
   */
  available: boolean;
}

export const guides: Guide[] = [
  { slug: "byggforetag", name: "Byggföretag", tagline: "Från F-skatt och ID06 till första bygget.", available: true },
  { slug: "akeri", name: "Åkeri & Transport", tagline: "Trafiktillstånd, fordon och lönsam logistik.", available: true },
  { slug: "restaurang", name: "Restaurang", tagline: "Serveringstillstånd, HACCP och kalkyl som håller.", available: true },
  { slug: "cafe", name: "Café", tagline: "Livsmedelsregistrering, läge och marginaler.", available: false },
  { slug: "stadforetag", name: "Städföretag", tagline: "RUT/RUT-avdrag, avtal och återkommande intäkter.", available: true },
  { slug: "dropshipping", name: "Dropshipping & E-handel", tagline: "Leverantörer, moms vid import och betallösningar.", available: true },
  { slug: "frisorsalong", name: "Frisörsalong", tagline: "Stol-hyra eller anställning, kassaregister och kunder.", available: false },
  { slug: "konsultforetag", name: "Konsultföretag", tagline: "Timpris, avtal och att gå från lön till eget.", available: true },
  { slug: "redovisningsbyra", name: "Redovisningsbyrå", tagline: "Auktorisation, ansvar och att skala byrån.", available: true },
  { slug: "vvsforetag", name: "VVS-företag", tagline: "Behörighet, försäkring och offert som vinner.", available: true },
  { slug: "elforetag", name: "Elföretag", tagline: "Elbehörighet, egenkontroll och Elsäkerhetsverket.", available: true },
  { slug: "snickeri", name: "Snickeri & Hantverk", tagline: "Verkstad, maskiner och prissättning av hantverk.", available: true },
  { slug: "fastighetsbolag", name: "Fastighetsbolag", tagline: "Bolagsstruktur, finansiering och förvaltning.", available: false },
  { slug: "webbyra", name: "Webbyrå", tagline: "Paketering, retainers och återkommande kunder.", available: true },
  { slug: "skonhetssalong", name: "Skönhetssalong", tagline: "Hygienlokal, anmälan och behandlingsutbud.", available: false },
  { slug: "personlig-tranare", name: "Personlig tränare & Gym", tagline: "Lokal, försäkring och att bygga kundstock.", available: false },
  { slug: "maleri", name: "Måleri", tagline: "ROT-avdrag, offert och säsongsplanering.", available: true },
  { slug: "tradgard", name: "Trädgård & Landskap", tagline: "RUT/ROT, maskinpark och säsongens ekonomi.", available: false },
  { slug: "fotograf", name: "Fotograf", tagline: "Bildrättigheter, paketpris och portföljbygge.", available: false },
  { slug: "event", name: "Event & Bröllop", tagline: "Avtal, försäkring och prissättning av uppdrag.", available: false },
];

const guideMap = new Map(guides.map((g) => [g.slug, g]));

export function getGuide(slug: string): Guide | undefined {
  return guideMap.get(slug);
}

/**
 * Innehållsförteckning – vad guiden täcker. Strukturella rubriker, inga
 * faktapåståenden. {name} interpoleras med branschnamnet.
 */
export function getTableOfContents(name: string): string[] {
  return [
    "Bolagsform – enskild firma eller aktiebolag för din verksamhet",
    `Tillstånd och krav som gäller specifikt för ${name.toLowerCase()}`,
    "Startkapital och kostnader – vad du behöver innan du drar igång",
    "Steg-för-steg: registrering hos Bolagsverket och Skatteverket",
    "Försäkringar du faktiskt behöver – och de du kan hoppa över",
    "Prissättning och kalkyl som ger lönsamhet från start",
    "Bokföring och moms – upplägg som sparar tid och pengar",
    "Hitta dina första kunder – marknadsföring för branschen",
    "Vanliga misstag nya företagare gör (och hur du undviker dem)",
    "Komplett checklista – allt klart innan du tar första uppdraget",
  ];
}

/**
 * Gratis försmak – 2–3 punkter som visas öppet på landningssidan.
 */
export function getPreviewPoints(name: string): string[] {
  return [
    `Vilken bolagsform som passar bäst när du startar ${name.toLowerCase()} – och varför valet påverkar skatt och ansvar.`,
    "De tre vanligaste nybörjarmisstagen i branschen och hur du undviker dem redan första månaden.",
    "Checklistans första steg så att du kan börja direkt – resten finns i den fullständiga guiden.",
  ];
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export function getFaq(name: string): GuideFaq[] {
  const lower = name.toLowerCase();
  return [
    {
      question: "Vad innehåller guiden?",
      answer: `En komplett, branschspecifik startguide för ${lower} i PDF-format – från val av bolagsform och tillstånd till prissättning, bokföring och en färdig checklista. Allt samlat på ett ställe.`,
    },
    {
      question: "Hur får jag guiden efter köpet?",
      answer:
        "Direkt. Efter genomfört köp via vår betalpartner Stripe kommer du till en sida där du laddar ner PDF:en med en gång. Du behöver inte vänta på e-post.",
    },
    {
      question: "Hålls guiden uppdaterad?",
      answer:
        "Ja. Innehållet ses över löpande mot Bolagsverket, Skatteverket och berörda myndigheter så att uppgifterna stämmer med gällande regler.",
    },
    {
      question: "Kan jag få hjälp av en rådgivare också?",
      answer:
        "Absolut. Guiden tar dig långt på egen hand, men vill du bolla ditt upplägg kan vi matcha dig med en rådgivare kostnadsfritt via /hitta-radgivare.",
    },
    {
      question: "Får jag tillbaka pengarna om jag ångrar mig?",
      answer:
        "Eftersom det är en digital produkt som levereras direkt vid köp gäller särskilda villkor. Hör av dig till oss om något inte stämmer så löser vi det.",
    },
  ];
}
