export interface Article {
  title: string;
  slug: string;
  description: string;
  type: "pillar" | "cluster";
}

export interface Category {
  slug: string;
  title: string;
  emoji: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  pillars: Article[];
  clusters: Article[];
}

export const categories: Category[] = [
  {
    slug: "starta-foretag",
    title: "Starta Företag",
    emoji: "🚀",
    description: "Allt du behöver veta för att starta och registrera ditt företag i Sverige.",
    metaTitle: "Starta Företag – Guide för nya företagare | Driva Företag",
    metaDescription: "Komplett guide för att starta företag i Sverige. Bolagsformer, registrering, affärsplan och allt du behöver veta som ny företagare.",
    pillars: [
      { title: "Enskild firma vs Aktiebolag – Vilken bolagsform passar dig?", slug: "enskild-firma-vs-aktiebolag", description: "Jämför enskild firma och aktiebolag. Fördelar, nackdelar, skatt och ansvar.", type: "pillar" },
      { title: "Så skriver du en affärsplan som fungerar", slug: "affarplan-guide", description: "Steg-för-steg-guide till en affärsplan som imponerar på banker och investerare.", type: "pillar" },
      { title: "Registrera företag – Komplett guide", slug: "registrera-foretag", description: "Allt om F-skatt, moms, Bolagsverket och bankkonto för nya företag.", type: "pillar" },
    ],
    clusters: [
      { title: "Handelsbolag – fördelar och nackdelar", slug: "handelsbolag", description: "Allt om handelsbolag som företagsform.", type: "cluster" },
      { title: "Starta eget utan pengar", slug: "starta-utan-pengar", description: "Så startar du företag med minimal budget.", type: "cluster" },
      { title: "F-skatt – ansökan och regler", slug: "f-skatt", description: "Guide till F-skattsedel och vad det innebär.", type: "cluster" },
      { title: "Momspliktig verksamhet", slug: "momspliktig-verksamhet", description: "Regler kring moms för nya företag.", type: "cluster" },
      { title: "Företagsnamn – regler och tips", slug: "foretagsnamn", description: "Välj rätt namn för ditt företag.", type: "cluster" },
      { title: "Starta aktiebolag steg för steg", slug: "starta-aktiebolag", description: "Komplett guide till att starta AB.", type: "cluster" },
      { title: "Starta enskild firma steg för steg", slug: "starta-enskild-firma", description: "Registrera enskild firma snabbt.", type: "cluster" },
      { title: "Aktiekapital – nya regler 2024", slug: "aktiekapital", description: "Allt om krav på aktiekapital.", type: "cluster" },
      { title: "Starta företag från utlandet", slug: "starta-fran-utlandet", description: "Så startar du svenskt bolag utomlands.", type: "cluster" },
      { title: "Bolagsordning – mall och guide", slug: "bolagsordning", description: "Så skriver du bolagsordning.", type: "cluster" },
      { title: "Starta företag vid sidan av anställning", slug: "starta-vid-sidan-av", description: "Kombinera anställning och eget företag.", type: "cluster" },
      { title: "Affärsidé – hitta och validera", slug: "affarside", description: "Metoder för att testa din affärsidé.", type: "cluster" },
      { title: "Bolagsverket – registrering och blanketter", slug: "bolagsverket", description: "Praktisk guide till Bolagsverket.", type: "cluster" },
      { title: "Bankkonto för företag", slug: "foretagskonto", description: "Jämför företagskonton hos svenska banker.", type: "cluster" },
      { title: "Starta företag checklista", slug: "checklista", description: "Komplett checklista för nya företagare.", type: "cluster" },
    ],
  },
  {
    slug: "bokforing-ekonomi",
    title: "Bokföring & Ekonomi",
    emoji: "📊",
    description: "Lär dig bokföring, ekonomistyrning och hur du håller koll på företagets pengar.",
    metaTitle: "Bokföring & Ekonomi – Guide för företagare | Driva Företag",
    metaDescription: "Lär dig bokföring, ekonomistyrning och kassaflöde. Praktiska tips för att hålla koll på företagets ekonomi.",
    pillars: [
      { title: "Bokföring för nybörjare – komplett guide", slug: "bokforing-for-nyborjare", description: "Grunderna i bokföring för företagare.", type: "pillar" },
      { title: "Välja bokföringsprogram – jämförelse 2024", slug: "bokforingsprogram", description: "Test och jämförelse av populära bokföringsprogram.", type: "pillar" },
      { title: "Årsredovisning – så gör du", slug: "arsredovisning", description: "Komplett guide till årsredovisning.", type: "pillar" },
    ],
    clusters: [
      { title: "Enkel bokföring vs dubbel bokföring", slug: "enkel-vs-dubbel", description: "Skillnaden mellan bokföringsmetoderna.", type: "cluster" },
      { title: "Kontoplan – BAS-kontoplanen förklarad", slug: "kontoplan", description: "Guide till BAS-kontoplanen.", type: "cluster" },
      { title: "Fakturera rätt – krav och tips", slug: "fakturering", description: "Regler och tips för fakturering.", type: "cluster" },
      { title: "Kassaflödesanalys", slug: "kassaflodesanalys", description: "Förstå och förbättra kassaflödet.", type: "cluster" },
      { title: "Verifikationer och kvitton", slug: "verifikationer", description: "Hantera verifikationer korrekt.", type: "cluster" },
      { title: "Momsdeklaration steg för steg", slug: "momsdeklaration", description: "Så gör du momsdeklaration.", type: "cluster" },
      { title: "Inventering – guide och tips", slug: "inventering", description: "Praktisk guide till inventering.", type: "cluster" },
      { title: "Avskrivningar förklarade", slug: "avskrivningar", description: "Regler för avskrivningar.", type: "cluster" },
      { title: "Budget för småföretag", slug: "budget", description: "Skapa en budget som fungerar.", type: "cluster" },
      { title: "Anlita redovisningskonsult", slug: "redovisningskonsult", description: "När och hur du anlitar hjälp.", type: "cluster" },
      { title: "Digitala kvitton och scanning", slug: "digitala-kvitton", description: "Digitalisera bokföringen.", type: "cluster" },
      { title: "Periodisering – vad och varför", slug: "periodisering", description: "Så periodiserar du korrekt.", type: "cluster" },
    ],
  },
  {
    slug: "juridik",
    title: "Juridik",
    emoji: "⚖️",
    description: "Avtal, lagar och juridiska frågor för svenska företagare.",
    metaTitle: "Juridik för företag – Avtal, lagar och regler | Driva Företag",
    metaDescription: "Juridik för företagare. Avtal, GDPR, arbetsrätt och viktiga lagar du behöver känna till.",
    pillars: [
      { title: "Avtal för företagare – komplett guide", slug: "avtal-guide", description: "Allt om avtal och juridik för företag.", type: "pillar" },
      { title: "GDPR för småföretag", slug: "gdpr", description: "Praktisk GDPR-guide för mindre företag.", type: "pillar" },
      { title: "Arbetsrätt – grunderna för arbetsgivare", slug: "arbetsratt", description: "Arbetsrättsliga regler för företagare.", type: "pillar" },
    ],
    clusters: [
      { title: "Aktieägaravtal – mall och guide", slug: "aktieagaravtal", description: "Så skriver du aktieägaravtal.", type: "cluster" },
      { title: "Kundavtal – vad ska ingå?", slug: "kundavtal", description: "Skapa tydliga kundavtal.", type: "cluster" },
      { title: "Konsultavtal – mall och tips", slug: "konsultavtal", description: "Guide till konsultavtal.", type: "cluster" },
      { title: "Företagsförsäkring – vad behöver du?", slug: "foretagsforsakring", description: "Rätt försäkringar för ditt företag.", type: "cluster" },
      { title: "Varumärkesskydd", slug: "varumarkesskydd", description: "Skydda ditt varumärke och namn.", type: "cluster" },
      { title: "Tvistelösning för företag", slug: "tvistelosning", description: "Hantera konflikter och tvister.", type: "cluster" },
      { title: "Sekretessavtal (NDA)", slug: "sekretessavtal", description: "Mall och guide för NDA.", type: "cluster" },
      { title: "Personuppgiftsbiträdesavtal", slug: "personuppgiftsbitrade", description: "GDPR-krav för leverantörer.", type: "cluster" },
      { title: "Köplagen och konsumentköplagen", slug: "koplagen", description: "Skillnader och tillämpning.", type: "cluster" },
      { title: "Immaterialrätt för startups", slug: "immaterialratt", description: "Skydda innovation och IP.", type: "cluster" },
    ],
  },
  {
    slug: "marknadsforing",
    title: "Marknadsföring",
    emoji: "📣",
    description: "Strategier för digital marknadsföring, SEO och sociala medier.",
    metaTitle: "Marknadsföring för företag – SEO, SoMe & strategi | Driva Företag",
    metaDescription: "Digital marknadsföring för företagare. SEO, sociala medier, content marketing och strategier som fungerar.",
    pillars: [
      { title: "SEO för småföretag – komplett guide", slug: "seo-guide", description: "Lär dig SEO från grunden.", type: "pillar" },
      { title: "Sociala medier-strategi för företag", slug: "sociala-medier", description: "Bygg närvaro på sociala medier.", type: "pillar" },
      { title: "Content marketing som driver tillväxt", slug: "content-marketing", description: "Skapa innehåll som ger resultat.", type: "pillar" },
    ],
    clusters: [
      { title: "Google Ads för nybörjare", slug: "google-ads", description: "Starta med Google Ads.", type: "cluster" },
      { title: "E-postmarknadsföring – strategi och verktyg", slug: "epostmarknadsforing", description: "Nyhetsbrev och e-postflöden.", type: "cluster" },
      { title: "Instagram för företag", slug: "instagram", description: "Marknadsför dig på Instagram.", type: "cluster" },
      { title: "LinkedIn-marknadsföring", slug: "linkedin", description: "B2B-marknadsföring på LinkedIn.", type: "cluster" },
      { title: "Lokal SEO – syns i din stad", slug: "lokal-seo", description: "Lokal synlighet på Google.", type: "cluster" },
      { title: "Hemsida för företag – guide", slug: "hemsida", description: "Skapa en professionell hemsida.", type: "cluster" },
      { title: "Copywriting som säljer", slug: "copywriting", description: "Skriv texter som konverterar.", type: "cluster" },
      { title: "Videomarknadsföring", slug: "video", description: "Använd video i marknadsföringen.", type: "cluster" },
      { title: "Remarketing och retargeting", slug: "remarketing", description: "Nå tillbaka besökare.", type: "cluster" },
      { title: "TikTok för företag", slug: "tiktok", description: "Marknadsföring på TikTok.", type: "cluster" },
      { title: "Varumärkesbyggande", slug: "varumarkesbyggande", description: "Bygg ett starkt varumärke.", type: "cluster" },
      { title: "Konverteringsoptimering (CRO)", slug: "konverteringsoptimering", description: "Öka konverteringsgraden.", type: "cluster" },
    ],
  },
  {
    slug: "finansiering",
    title: "Finansiering",
    emoji: "💰",
    description: "Hitta rätt finansiering för ditt företag – lån, bidrag och investeringar.",
    metaTitle: "Finansiering för företag – Lån, bidrag & investerare | Driva Företag",
    metaDescription: "Hitta rätt finansiering. Företagslån, bidrag, riskkapital och crowdfunding för svenska företag.",
    pillars: [
      { title: "Företagslån – jämför och ansök", slug: "foretagslan", description: "Guide till företagslån i Sverige.", type: "pillar" },
      { title: "Bidrag och stöd för företagare", slug: "bidrag-stod", description: "Alla bidrag och stöd du kan söka.", type: "pillar" },
      { title: "Investerare och riskkapital", slug: "investerare", description: "Hitta investerare till ditt företag.", type: "pillar" },
    ],
    clusters: [
      { title: "Almi – lån och rådgivning", slug: "almi", description: "Almis tjänster för företagare.", type: "cluster" },
      { title: "Crowdfunding i Sverige", slug: "crowdfunding", description: "Finansiera via crowdfunding.", type: "cluster" },
      { title: "Factoring och fakturabelåning", slug: "factoring", description: "Frigör kapital från fakturor.", type: "cluster" },
      { title: "Starta eget-bidrag", slug: "starta-eget-bidrag", description: "Bidrag från Arbetsförmedlingen.", type: "cluster" },
      { title: "Affärsänglar – hitta och pitcha", slug: "affarsanglar", description: "Så hittar du affärsänglar.", type: "cluster" },
      { title: "Leasing för företag", slug: "leasing", description: "Leasa utrustning och fordon.", type: "cluster" },
      { title: "EU-bidrag för småföretag", slug: "eu-bidrag", description: "EU-finansiering och stöd.", type: "cluster" },
      { title: "Bootstrapping – väx utan extern finansiering", slug: "bootstrapping", description: "Finansiera tillväxt med eget kassaflöde.", type: "cluster" },
    ],
  },
  {
    slug: "skatt",
    title: "Skatt",
    emoji: "🧾",
    description: "Skatteregler, deklaration och optimering för företagare.",
    metaTitle: "Skatt för företag – Deklaration, regler & tips | Driva Företag",
    metaDescription: "Förstå skatteregler för företag. Moms, arbetsgivaravgifter, deklaration och skatteoptimering.",
    pillars: [
      { title: "Skatt för aktiebolag – komplett guide", slug: "skatt-aktiebolag", description: "Alla skatter för AB-ägare.", type: "pillar" },
      { title: "Skatt för enskild firma", slug: "skatt-enskild-firma", description: "Skatteregler för enskild firma.", type: "pillar" },
      { title: "Deklaration för företag steg för steg", slug: "deklaration", description: "Så deklarerar du företaget.", type: "pillar" },
    ],
    clusters: [
      { title: "Moms – regler och satser", slug: "moms", description: "Momsregler för företag.", type: "cluster" },
      { title: "Arbetsgivaravgifter", slug: "arbetsgivaravgifter", description: "Så beräknas arbetsgivaravgifter.", type: "cluster" },
      { title: "Lön eller utdelning från AB", slug: "lon-vs-utdelning", description: "Optimera lön och utdelning.", type: "cluster" },
      { title: "3:12-reglerna förklarade", slug: "3-12-reglerna", description: "Fåmansbolagsreglerna.", type: "cluster" },
      { title: "Representation och avdrag", slug: "representation", description: "Regler för representation.", type: "cluster" },
      { title: "Tjänstebil – förmån och skatt", slug: "tjanstebil", description: "Förmånsbeskattning av bil.", type: "cluster" },
      { title: "Periodiseringsfond", slug: "periodiseringsfond", description: "Skjut upp skatt med periodiseringsfond.", type: "cluster" },
      { title: "ROT och RUT-avdrag", slug: "rot-rut", description: "Regler för ROT och RUT.", type: "cluster" },
      { title: "Skattekonto – så fungerar det", slug: "skattekonto", description: "Hantera ditt skattekonto.", type: "cluster" },
      { title: "Preliminär skatt och F-skatt", slug: "preliminar-skatt", description: "Beräkna och betala preliminär skatt.", type: "cluster" },
    ],
  },
  {
    slug: "personal-hr",
    title: "Personal & HR",
    emoji: "👥",
    description: "Rekrytering, arbetsgivaransvar och att bygga ett framgångsrikt team.",
    metaTitle: "Personal & HR – Anställ, led och utveckla | Driva Företag",
    metaDescription: "Guide till personalfrågor för företagare. Rekrytering, anställningsavtal, löner och arbetsgivaransvar.",
    pillars: [
      { title: "Anställa personal – komplett guide", slug: "anstalla-personal", description: "Allt om att anställa din första medarbetare.", type: "pillar" },
      { title: "Lönehantering för småföretag", slug: "lonehantering", description: "Praktisk guide till löner.", type: "pillar" },
      { title: "Ledarskap för nya chefer", slug: "ledarskap", description: "Bli en bättre ledare.", type: "pillar" },
    ],
    clusters: [
      { title: "Anställningsavtal – mall och guide", slug: "anstallningsavtal", description: "Skapa korrekta anställningsavtal.", type: "cluster" },
      { title: "Rekryteringsprocess steg för steg", slug: "rekrytering", description: "Effektiv rekrytering.", type: "cluster" },
      { title: "Kollektivavtal – behöver du ett?", slug: "kollektivavtal", description: "Guide till kollektivavtal.", type: "cluster" },
      { title: "Semester och ledighet", slug: "semester", description: "Regler för semester.", type: "cluster" },
      { title: "Sjukfrånvaro och rehabilitering", slug: "sjukfranvaro", description: "Hantera sjukfrånvaro.", type: "cluster" },
      { title: "Uppsägning – regler och process", slug: "uppsagning", description: "Så hanterar du uppsägning.", type: "cluster" },
      { title: "Friskvårdsbidrag", slug: "friskvardsbidrag", description: "Förmåner för anställda.", type: "cluster" },
      { title: "Distansarbete och hybrid", slug: "distansarbete", description: "Policys för distansarbete.", type: "cluster" },
    ],
  },
  {
    slug: "ai-effektivisering",
    title: "AI & Effektivisering",
    emoji: "🤖",
    description: "Använd AI och digitala verktyg för att effektivisera ditt företag.",
    metaTitle: "AI & Effektivisering – Smartare företagande | Driva Företag",
    metaDescription: "Effektivisera företaget med AI och digitala verktyg. Praktiska tips för automatisering och produktivitet.",
    pillars: [
      { title: "AI för småföretag – kom igång", slug: "ai-for-smaforetag", description: "Praktisk guide till AI för företagare.", type: "pillar" },
      { title: "Automatisera företaget med AI", slug: "automatisera", description: "Automatisera rutinuppgifter.", type: "pillar" },
      { title: "Digitala verktyg för företagare", slug: "digitala-verktyg", description: "Bästa verktygen för varje behov.", type: "pillar" },
    ],
    clusters: [
      { title: "ChatGPT för företagare", slug: "chatgpt", description: "Använd ChatGPT i ditt företag.", type: "cluster" },
      { title: "AI-verktyg för marknadsföring", slug: "ai-marknadsforing", description: "AI i marknadsföring.", type: "cluster" },
      { title: "AI-bokföring och ekonomiverktyg", slug: "ai-bokforing", description: "AI för ekonomihantering.", type: "cluster" },
      { title: "Projekthantering med digitala verktyg", slug: "projekthantering", description: "Effektiv projekthantering.", type: "cluster" },
      { title: "CRM-system – jämförelse", slug: "crm", description: "Välj rätt CRM-system.", type: "cluster" },
      { title: "Tidrapportering och tidshantering", slug: "tidrapportering", description: "Verktyg för tidrapportering.", type: "cluster" },
      { title: "AI för kundservice", slug: "ai-kundservice", description: "Automatisera kundservice.", type: "cluster" },
      { title: "Dokumenthantering och e-signering", slug: "dokumenthantering", description: "Digitala dokument och signaturer.", type: "cluster" },
      { title: "Zapier och automatiseringar", slug: "zapier", description: "Koppla ihop dina verktyg.", type: "cluster" },
      { title: "AI-trender för företagare 2024", slug: "ai-trender", description: "Senaste AI-trenderna.", type: "cluster" },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllCategoryArticles(category: Category): Article[] {
  return [...category.pillars, ...category.clusters];
}
