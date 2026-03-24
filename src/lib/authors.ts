export interface Author {
  name: string;
  slug: string;
  title: string;
  bio: string;
  expertise: string[];
  initials: string;
  bgColor: string;
}

export const authors: Author[] = [
  {
    name: "Erik Lindström",
    slug: "erik-lindstrom",
    title: "Auktoriserad revisor",
    bio: "Erik är auktoriserad revisor med över 15 års erfarenhet av småföretagsrådgivning. Han har hjälpt hundratals företagare med bokföring, ekonomistyrning och skatteplanering, och brinner för att göra ekonomi begripligt för alla.",
    expertise: ["starta-foretag", "bokforing-ekonomi", "finansiering"],
    initials: "EL",
    bgColor: "#0C2340",
  },
  {
    name: "Maria Berggren",
    slug: "maria-berggren",
    title: "Affärsjurist",
    bio: "Maria är affärsjurist specialiserad på bolagsrätt, avtal och arbetsrätt. Med bakgrund från en av Sveriges ledande affärsjuridiska byråer hjälper hon idag små och medelstora företag med juridisk rådgivning och avtalshantering.",
    expertise: ["starta-foretag", "juridik", "personal-hr"],
    initials: "MB",
    bgColor: "#6B21A8",
  },
  {
    name: "Johan Wikström",
    slug: "johan-wikstrom",
    title: "Digital marknadsförare & SEO-konsult",
    bio: "Johan driver en digital marknadsföringsbyrå sedan 2015 och har hjälpt över 200 svenska företag att synas online. Han är certifierad Google Ads-specialist och föreläser regelbundet om SEO, AI-verktyg och digital strategi.",
    expertise: ["marknadsforing", "ai-effektivisering"],
    initials: "JW",
    bgColor: "#0369A1",
  },
  {
    name: "Anna Ekström",
    slug: "anna-ekstrom",
    title: "Skattekonsult, Ekonomie magister",
    bio: "Anna är ekonomie magister och skattekonsult med särskild expertis inom fåmansföretagsbeskattning och 3:12-reglerna. Hon har arbetat på Skatteverket och på redovisningsbyrå innan hon började skriva om skatt och ekonomi för företagare.",
    expertise: ["skatt", "finansiering"],
    initials: "AE",
    bgColor: "#B45309",
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

export function getAuthorByName(name: string): Author | undefined {
  return authors.find((a) => a.name === name);
}

export function getAuthorForCategory(category: string, index: number): Author {
  switch (category) {
    case "starta-foretag":
      return index % 2 === 0 ? authors[0] : authors[1]; // Erik / Maria
    case "bokforing-ekonomi":
      return authors[0]; // Erik
    case "skatt":
      return authors[3]; // Anna
    case "juridik":
      return authors[1]; // Maria
    case "marknadsforing":
      return authors[2]; // Johan
    case "finansiering":
      return index % 2 === 0 ? authors[0] : authors[3]; // Erik / Anna
    case "personal-hr":
      return authors[1]; // Maria
    case "ai-effektivisering":
      return authors[2]; // Johan
    default:
      return authors[0];
  }
}
