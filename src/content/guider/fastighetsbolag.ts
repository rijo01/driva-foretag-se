import type { GuideContent } from "./types";

// ──────────────────────────────────────────────────────────────────────────
// STARTGUIDE: FASTIGHETSBOLAG
//
// YMYL – faktagranskad mot primärkälla. Verifierade uppgifter (juni 2026):
//  • Aktiekapital privat AB 25 000 kr; AB-reg 1 900 kr e-tjänst / 2 200 kr
//    blankett (Bolagsverket). Bolagsskatt 20,6 % (Skatteverket).
//  • STÄMPELSKATT vid lagfart (Lantmäteriet): juridisk person (t.ex. AB,
//    handelsbolag, ekonomisk förening) 4,25 % av högsta av köpeskilling eller
//    taxeringsvärde; fysisk person, bostadsrättsförening och kommun 1,5 %.
//    Expeditionsavgift 825 kr per lagfart. (Lantmäteriet.)
//  • Moms: uthyrning av BOSTAD är momsfri (ingen avdragsrätt för ingående moms);
//    uthyrning av LOKAL kan under vissa förutsättningar omfattas av frivillig
//    skattskyldighet (25 %). (Skatteverket.) Kontrollera förutsättningarna.
//  • Fastighetsskatt/-avgift och ränteavdragsbegränsningar finns men ändras –
//    anges KVALITATIVT, hänvisas till Skatteverket/skatterådgivare.
//
// VIKTIGT: Området gränsar till kvalificerad skatterådgivning. Guiden ger
// INGA konkreta skatteuppläggsråd (paketering, holdingstrukturer, avskrivnings-
// optimering osv.) utan hänvisar genomgående till Skatteverket och en
// skatterådgivare. Där en exakt siffra/regel inte verifierats skrivs den
// kvalitativt – aldrig gissad.
// ──────────────────────────────────────────────────────────────────────────

const fastighetsbolag: GuideContent = {
  slug: "fastighetsbolag",
  industry: "Fastighetsbolag",
  title: "Starta & driva fastighetsbolag",
  subtitle: "Komplett startguide 2026",
  year: 2026,
  reviewedAt: "2026-06-04",
  reviewedSources: "Skatteverket, Lantmäteriet & Bolagsverket",
  intro:
    "Den kompletta, faktagranskade guiden för dig som ska starta fastighetsbolag i Sverige – från bolagsstruktur och finansiering till stämpelskatt, moms på uthyrning, förvaltning, försäkring och din första hyresgäst. Varje verifierbar siffra är kontrollerad mot Skatteverket, Lantmäteriet och Bolagsverket; skattefrågor som kräver individuell rådgivning hänvisas tydligt vidare.",

  chapters: [
    // 1
    {
      number: 1,
      title: "Att driva fastighetsbolag i Sverige",
      lead: "Vad det innebär att äga och förvalta fastigheter i bolagsform – och vad som gör det lönsamt.",
      blocks: [
        {
          type: "paragraph",
          text: "Att äga och hyra ut fastigheter är en av de mest kapitalintensiva men också mest långsiktigt stabila företagsformerna. Intäkterna (hyror) är förutsägbara, men affären avgörs av tre saker som måste hänga ihop: **finansieringen**, **driftnettot** (hyror minus drift- och underhållskostnader) och **skatte- och avgiftsbilden**. Den som förstår dessa från start undviker de dyra felen – och de är ofta stora i en bransch där varje affär rör miljonbelopp.",
        },
        {
          type: "paragraph",
          text: "Med **fastighetsbolag** menar vi i den här guiden företag som äger och förvaltar fastigheter för uthyrning – bostäder, lokaler eller en kombination. Det kan vara allt från ett bolag som äger en hyresfastighet till en växande portfölj. Guiden fokuserar på hur du strukturerar, finansierar och förvaltar – inte på spekulation eller snabba transaktioner.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Den här guiden ersätter inte en skatterådgivare",
          text: "Fastighetsägande är skattemässigt komplext: stämpelskatt, fastighetsavgift, momsregler, avskrivningar och ränteavdragsbegränsningar samspelar och ändras över tid. Guiden ger dig grunderna och rätt frågor att ställa, men **inga konkreta skatteuppläggsråd**. Innan du strukturerar ett förvärv eller en koncern – ta in en **skatterådgivare** och stäm av med **Skatteverket**.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Så använder du guiden",
          text: "Läs kapitel 1–6 innan ditt första förvärv – de avgör bolagsstruktur, stämpelskatt, finansiering och moms. Kapitel 7–12 är drift: försäkring, förvaltning och driftnetto, bokföring, personal och uthyrning. Kapitel 13 är en komplett checklista, och kapitel 14 samlar alla myndighetskontakter.",
        },
      ],
    },

    // 2
    {
      number: 2,
      title: "Bolagsform och struktur",
      lead: "Fastigheter ägs nästan alltid i bolag – men strukturen bör du sätta med rådgivare.",
      blocks: [
        {
          type: "paragraph",
          text: "Fastigheter kan ägas privat, men för uthyrning i företagsform är **aktiebolag (AB)** den helt dominerande formen. Det beror på ansvarsbegränsning, finansiering och hur ägande och drift kan struktureras.",
        },
        {
          type: "subheading",
          text: "Aktiebolag",
        },
        {
          type: "paragraph",
          text: "Ett aktiebolag är en egen juridisk person. Ditt personliga ansvar begränsas i normalfallet till **aktiekapitalet på 25 000 kr** (lägsta tillåtna för privat AB), vilket är viktigt när bolaget tar stora lån och tecknar avtal. Vinst beskattas med **bolagsskatt 20,6 %**. AB-formen gör det möjligt att ta in delägare, belåna fastigheten och bygga ett strukturerat ägande. Du anställs av ditt eget bolag och tar ut lön.",
          source: "Bolagsverket (aktiekapital 25 000 kr) och Skatteverket (bolagsskatt 20,6 %).",
        },
        {
          type: "subheading",
          text: "Enskild firma och privat ägande",
        },
        {
          type: "paragraph",
          text: "Att äga en hyresfastighet privat eller i enskild firma är möjligt men innebär **fullt personligt ansvar** och att hyresintäkterna beskattas som inkomst hos dig. Vid större fastighetsinnehav blir AB nästan alltid mer ändamålsenligt. Vilken form som passar dig beror på innehavets storlek, finansiering och dina mål – en fråga för din rådgivare.",
        },
        {
          type: "subheading",
          text: "Holding- och koncernstrukturer",
        },
        {
          type: "paragraph",
          text: "Större fastighetsinnehav struktureras ofta i koncerner med ett **holdingbolag** som äger dotterbolag, där varje fastighet eller projekt kan ligga i ett eget bolag. Sådana strukturer påverkar ansvar, finansiering, framtida försäljning och beskattning på sätt som är mycket fallberoende. **Detta är ett typexempel på när du ska anlita en skatterådgivare** – guiden går medvetet inte in på konkreta upplägg.",
        },
        {
          type: "table",
          columns: ["", "Privat / enskild firma", "Aktiebolag"],
          rows: [
            ["Personligt ansvar", "Ja, fullt ut", "Begränsat (normalfall)"],
            ["Beskattning av överskott", "Som inkomst hos ägaren", "Bolagsskatt 20,6 % + lön/utdelning"],
            ["Stämpelskatt vid köp (lagfart)", "1,5 %", "4,25 %"],
            ["Lämpligt för större innehav/koncern", "Mindre", "Bättre"],
            ["Möjlighet att ta in delägare", "Begränsad", "Enkel"],
          ],
          source: "Lantmäteriet (stämpelskatt 1,5 % fysisk person / 4,25 % juridisk person) och Skatteverket (bolagsskatt 20,6 %).",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Skatteregler för delägare i fåmansföretag (3:12)",
          text: "Driver du fastighets-AB och tar utdelning gäller de särskilda 3:12-reglerna med årligt gränsbelopp. Reglerna ändrades från 1 januari 2026 – kontrollera aktuellt gränsbelopp och regler hos Skatteverket innan du planerar utdelning.",
          source: "Skatteverket, reglerna för utdelning i fåmansföretag (3:12).",
        },
      ],
    },

    // 3
    {
      number: 3,
      title: "Förvärv, stämpelskatt och lagfart",
      lead: "Att köpa en fastighet utlöser kostnader och formalia du måste räkna med i kalkylen.",
      blocks: [
        {
          type: "paragraph",
          text: "När bolaget köper en fastighet tillkommer skatt och avgifter utöver köpeskillingen. Den största är stämpelskatten, som skiljer sig markant beroende på om köparen är en juridisk eller fysisk person.",
        },
        {
          type: "subheading",
          text: "Stämpelskatt och lagfart (Lantmäteriet)",
        },
        {
          type: "paragraph",
          text: "När du köper en fastighet ska du ansöka om **lagfart** hos **Lantmäteriet**, och då tas **stämpelskatt** ut. För en **juridisk person** (t.ex. aktiebolag) är stämpelskatten **4,25 %**, och för en **fysisk person, bostadsrättsförening eller kommun 1,5 %**. Skatten beräknas på det högsta av **köpeskillingen** och **taxeringsvärdet** (året före det år lagfart beviljas), avrundat nedåt till närmaste tusental. Utöver det tas en **expeditionsavgift på 825 kr** ut per lagfart.",
          source: "Lantmäteriet, stämpelskatt och avgifter (4,25 % juridisk person, 1,5 % fysisk person; beräknas på högsta av köpeskilling/taxeringsvärde; expeditionsavgift 825 kr).",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Räkneexempel: stämpelskatt för ett AB",
          text: "Köper ditt aktiebolag en fastighet för 5 000 000 kr (högre än taxeringsvärdet) blir stämpelskatten 4,25 % = 212 500 kr, plus expeditionsavgift 825 kr. Hade en fysisk person köpt samma fastighet hade stämpelskatten i stället varit 1,5 % = 75 000 kr. Skillnaden är en viktig post i förvärvskalkylen – men valet av ägarform styrs av många fler faktorer än stämpelskatten (se kapitel 2 och din rådgivare).",
          source: "Räkneexempel baserat på Lantmäteriets stämpelskattesatser (4,25 % / 1,5 %).",
        },
        {
          type: "subheading",
          text: "Pantbrev",
        },
        {
          type: "paragraph",
          text: "För att belåna fastigheten behövs **pantbrev**. Vid uttag av nya pantbrev tas en **stämpelskatt på pantbrevet** ut (en procentsats på pantbrevsbeloppet) plus en expeditionsavgift. Befintliga pantbrev följer med fastigheten. Kontrollera aktuella nivåer hos Lantmäteriet och räkna in dem i finansieringskalkylen.",
          source: "Lantmäteriet, stämpelskatt på pantbrev (kontrollera aktuell procentsats och avgift).",
        },
        {
          type: "subheading",
          text: "Tillstånd och regler vid förvärv",
        },
        {
          type: "paragraph",
          text: "De flesta förvärv av hyresfastigheter kräver inget särskilt myndighetstillstånd, men det finns undantag – t.ex. kan **jordförvärvslagen** kräva tillstånd vid köp av lant- och skogsbruksfastigheter, och kommunala förköps- eller anvisningsregler kan förekomma i vissa fall. Vid köp av hyreshus finns också särskild lagstiftning som kan ge hyresgäster eller kommun viss roll. Stäm av vad som gäller för just din fastighetstyp innan affär.",
        },
        {
          type: "links",
          items: [
            { label: "Lantmäteriet", url: "https://www.lantmateriet.se", note: "Lagfart, stämpelskatt, pantbrev, avgifter" },
            { label: "Skatteverket", url: "https://www.skatteverket.se", note: "Fastighetstaxering, moms, fastighetsavgift/-skatt" },
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera bolag, F-skatt, moms" },
          ],
        },
      ],
    },

    // 4
    {
      number: 4,
      title: "Finansiering och startkapital",
      lead: "Fastighetsaffärer bygger på lån – och bankens villkor avgör vad du kan köpa.",
      blocks: [
        {
          type: "paragraph",
          text: "Fastighetsbolag är extremt kapitalintensiva, och affären byggs nästan alltid med en kombination av eget kapital och banklån. Förstå bankens logik innan du letar objekt – det är ofta finansieringen, inte objektet, som sätter gränsen.",
        },
        {
          type: "list",
          items: [
            "**Eget kapital (kontantinsats)** – banken finansierar bara en del av köpet; resten måste du tillföra som eget kapital. Hur stor andel beror på fastighetstyp, läge och bolagets ekonomi.",
            "**Banklån mot pant i fastigheten** – lånet säkras med pantbrev. Bankens bedömning utgår från fastighetens värde och, framför allt, dess **driftnetto** och kassaflöde.",
            "**Stämpelskatt och förvärvskostnader** – stämpelskatt (4,25 % för AB), pantbrevskostnader, besiktning, juridik och eventuell mäklare ska finansieras utöver köpeskillingen.",
            "**Likviditetsreserv** – budgetera för vakanser, oförutsedda reparationer och ränteuppgångar; en buffert är avgörande i en räntekänslig affär.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Driftnettot avgör både lån och lönsamhet",
          text: "Bankens vilja att låna – och din faktiska lönsamhet – styrs av fastighetens **driftnetto**: hyresintäkter minus drift- och underhållskostnader (men före räntor och avskrivningar). Räkna konservativt på hyror och realistiskt på drift, underhåll och vakanser innan du lägger ett bud. En affär som bara går ihop vid full uthyrning och låg ränta är en riskabel affär.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Ränteavdrag kan vara begränsat",
          text: "För företag finns **generella ränteavdragsbegränsningar** (kopplade till bl.a. resultatet) som kan begränsa hur mycket av räntekostnaderna du får dra av. Reglerna är komplexa och påverkar lönsamheten i en lånefinansierad fastighetsaffär. Detta är en fråga för din skatterådgivare – guiden ger inga upplägg.",
          source: "Skatteverket, generella ränteavdragsbegränsningar för företag (kontrollera aktuella regler).",
        },
      ],
    },

    // 5
    {
      number: 5,
      title: "Steg-för-steg: från bolag till första fastigheten",
      lead: "Hela processen i rätt ordning – från registrering till påskriven lagfart.",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Sätt strukturen med rådgivare",
              text: "Bestäm ägarform och eventuell koncernstruktur tillsammans med en skatterådgivare innan du köper – strukturen är svår och dyr att ändra i efterhand.",
            },
            {
              title: "Registrera bolaget hos Bolagsverket",
              text: "AB registreras via e-tjänsten på **verksamt.se** för **1 900 kr** (stiftelseurkund, bolagsordning och bankintyg på aktiekapitalet 25 000 kr).",
            },
            {
              title: "Ansök om F-skatt och ta ställning till moms",
              text: "Ansök om F-skatt gratis via verksamt.se. Uthyrning av bostad är momsfri; vid lokaluthyrning kan frivillig skattskyldighet bli aktuell (kapitel 6).",
            },
            {
              title: "Ordna finansiering",
              text: "Förhandla lånelöfte med bank utifrån eget kapital och fastighetens driftnetto. Räkna in stämpelskatt, pantbrev och förvärvskostnader (kapitel 3–4).",
            },
            {
              title: "Genomför förvärvet och besiktning",
              text: "Genomför teknisk och ekonomisk besiktning (due diligence), förhandla köpekontrakt och säkra villkoren innan tillträde.",
            },
            {
              title: "Ansök om lagfart och betala stämpelskatt",
              text: "Ansök om lagfart hos Lantmäteriet efter tillträde; stämpelskatt (4,25 % för AB) och expeditionsavgift 825 kr faktureras.",
            },
            {
              title: "Anmäl verklig huvudman",
              text: "AB ska anmäla verklig huvudman till Bolagsverket, normalt inom fyra veckor från registreringen.",
            },
            {
              title: "Sätt upp förvaltning, försäkring och bokföring",
              text: "Teckna fastighetsförsäkring (kapitel 7), ordna förvaltning (kapitel 10) och bokföring (kapitel 9) och se över hyresavtalen.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Allt på ett ställe – nästan",
          text: "verksamt.se samlar Bolagsverket, Skatteverket och Tillväxtverket för registrering, F-skatt och moms. Lagfart och stämpelskatt hanteras hos Lantmäteriet, och strukturen bör du sätta med en rådgivare.",
          source: "verksamt.se (Bolagsverket, Skatteverket, Tillväxtverket); Lantmäteriet (lagfart).",
        },
      ],
    },

    // 6
    {
      number: 6,
      title: "Moms, fastighetsavgift och skatt",
      lead: "Fastigheter har egna moms- och skatteregler – grunderna här, detaljerna med din rådgivare.",
      blocks: [
        {
          type: "paragraph",
          text: "Skattebilden för fastigheter skiljer sig från andra branscher. Här är grunderna du behöver känna till – men eftersom reglerna är komplexa och ändras, stäm av detaljerna med Skatteverket och din rådgivare.",
        },
        {
          type: "subheading",
          text: "Moms på uthyrning",
        },
        {
          type: "paragraph",
          text: "Uthyrning av **bostad är momsfri** – du lägger ingen moms på hyran, men får i gengäld normalt **inte** dra av ingående moms på kostnader som rör bostadsuthyrningen. Uthyrning av **lokal** är som utgångspunkt också momsfri, men kan under vissa förutsättningar omfattas av **frivillig skattskyldighet** (du lägger då 25 % moms på lokalhyran och får avdragsrätt för ingående moms). Förutsättningarna och hanteringen är detaljerade – kontrollera mot Skatteverket innan du tillämpar frivillig skattskyldighet.",
          source: "Skatteverket (bostadsuthyrning momsfri; frivillig skattskyldighet för lokaluthyrning, 25 %).",
        },
        {
          type: "subheading",
          text: "Fastighetsavgift och fastighetsskatt",
        },
        {
          type: "paragraph",
          text: "För bostäder tas en **kommunal fastighetsavgift** ut, och för vissa fastighetstyper (t.ex. lokaler och obebyggd mark) en **statlig fastighetsskatt**. Nivåerna och takbeloppen ändras och beror på fastighetstyp och taxeringsvärde. Kontrollera aktuella belopp och procentsatser hos Skatteverket för din specifika fastighet – guiden anger dem inte i kronor eftersom de uppdateras.",
          source: "Skatteverket, fastighetsavgift och fastighetsskatt (kontrollera aktuella nivåer per fastighetstyp).",
        },
        {
          type: "subheading",
          text: "Avskrivningar och vinst vid försäljning",
        },
        {
          type: "paragraph",
          text: "I bokföringen skrivs byggnaden (men inte marken) av över tid, vilket påverkar resultatet. Vid en framtida försäljning kan **kapitalvinst** uppstå, och hur den beskattas beror på ägarform och struktur. Både avskrivningar och beskattning vid försäljning är fallberoende skattefrågor – ta hjälp av en skatterådgivare snarare än att förlita dig på tumregler.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Inga skatteuppläggsråd här",
          text: "Paketering av fastigheter, koncerninterna överlåtelser, avskrivningsoptimering och liknande är kvalificerade skattefrågor med stora konsekvenser om de görs fel. Den här guiden ger medvetet inga sådana råd – ta in en skatterådgivare och stäm av med Skatteverket.",
        },
      ],
    },

    // 7
    {
      number: 7,
      title: "Försäkringar du faktiskt behöver",
      lead: "En fastighet är en stor tillgång och ett stort ansvar – rätt skydd är avgörande.",
      blocks: [
        {
          type: "paragraph",
          text: "Som fastighetsägare ansvarar du både för en mycket värdefull tillgång och för dem som vistas i och kring fastigheten. Försäkring är därför inte valfritt – och banken kräver normalt fullvärdesförsäkring som villkor för lånet. Läs villkoren noga.",
        },
        {
          type: "list",
          items: [
            "**Fastighetsförsäkring (fullvärde)** – skyddar byggnaden mot brand, vatten, storm och annan skada. Banken kräver normalt detta som lånevillkor.",
            "**Fastighetsägaransvar** – täcker skadeståndskrav om någon skadas på fastigheten (t.ex. halkolycka, fallande föremål, brister i underhåll).",
            "**Hyresförlust-/avbrottsförsäkring** – ersätter uteblivna hyresintäkter om fastigheten blir obrukbar efter en skada.",
            "**Försäkring för installationer och maskiner** – hiss, värme- och ventilationssystem och annan teknisk utrustning.",
            "**Styrelse-/VD-ansvarsförsäkring** – relevant i bolag med extern styrelse.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Underhåll är en del av riskhanteringen",
          text: "Många skador och ansvarskrav bottnar i eftersatt underhåll. Ett planerat underhåll (tak, fasad, vatten, el) skyddar både fastighetens värde och dig mot ansvar – och försäkringsersättning kan sättas ned om en skada beror på uppenbart eftersatt underhåll. Budgetera för underhåll varje år.",
        },
      ],
    },

    // 8
    {
      number: 8,
      title: "Förvaltning, driftnetto och lönsamhet",
      lead: "Lönsamheten ligger i förvaltningen – att hålla intäkterna uppe och kostnaderna nere.",
      blocks: [
        {
          type: "paragraph",
          text: "När fastigheten är köpt avgörs lönsamheten av förvaltningen. Nyckeltalet är **driftnettot**: hyresintäkter minus drift- och underhållskostnader. Ett gott driftnetto, låg vakans och kontroll på kostnaderna är det som gör fastighetsaffären lönsam över tid.",
        },
        {
          type: "subheading",
          text: "Det som styr driftnettot",
        },
        {
          type: "list",
          items: [
            "**Hyresintäkter** – sätts inom ramen för hyreslagstiftningen (bostäder) eller avtal (lokaler). Stabil uthyrning är viktigare än maximal hyra med hög omsättning på hyresgäster.",
            "**Vakanser** – tom yta ger ingen intäkt men kostnader löper på. Låg vakansgrad är avgörande.",
            "**Driftkostnader** – uppvärmning, el, vatten, sophämtning, försäkring, skötsel och administration.",
            "**Underhåll** – löpande och planerat; underinvestering straffar sig senare i större skador.",
            "**Räntor** – den enskilt största kostnaden i en belånad fastighet; känsligheten för ränteförändringar måste rymmas i kalkylen.",
          ],
        },
        {
          type: "subheading",
          text: "Egen eller köpt förvaltning",
        },
        {
          type: "paragraph",
          text: "Du kan sköta förvaltningen själv (teknisk skötsel, ekonomi och hyresgästkontakt) eller köpa tjänsten av en förvaltare. Egen förvaltning sparar pengar men kräver tid och kompetens; köpt förvaltning kostar men frigör tid och ger professionell hantering. Många mindre fastighetsägare börjar själva och köper in det som kräver särskild kompetens (kapitel 10).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Räkna på räntekänsligheten",
          text: "Eftersom fastighetsaffären är lånefinansierad är räntan ofta det som avgör om det går runt. Räkna igenom hur driftnettot och kassaflödet ser ut även vid en högre ränta än dagens – en fastighet som bara bär sig vid låg ränta är sårbar. Bygg in marginal.",
        },
      ],
    },

    // 9
    {
      number: 9,
      title: "Bokföring och skatt",
      lead: "Löpande ordning i ekonomin – med fastighetens särdrag i åtanke.",
      blocks: [
        {
          type: "paragraph",
          text: "Alla företag är enligt bokföringslagen skyldiga att löpande bokföra sina affärshändelser och spara underlag. Fastighetsbolag har relativt få men stora transaktioner och särskilda poster (avskrivningar, ränta, fastighetsavgift) – många anlitar en redovisningsbyrå med fastighetsvana.",
        },
        {
          type: "subheading",
          text: "Särskilda poster i fastighetsbokföringen",
        },
        {
          type: "list",
          items: [
            "**Avskrivning av byggnad** – byggnaden skrivs av över sin nyttjandeperiod (marken skrivs inte av). Det påverkar resultat och skatt.",
            "**Räntekostnader** – stor post; tänk på de generella ränteavdragsbegränsningarna (kapitel 4).",
            "**Underhåll vs förbättring** – löpande underhåll kostnadsförs, medan värdehöjande förbättringar normalt aktiveras och skrivs av. Gränsdragningen påverkar skatten.",
            "**Fastighetsavgift/-skatt och moms** – redovisas enligt reglerna i kapitel 6.",
          ],
        },
        {
          type: "subheading",
          text: "F-skatt och preliminärskatt",
        },
        {
          type: "paragraph",
          text: "Bolaget betalar **preliminärskatt** månadsvis utifrån uppskattat resultat. Eftersom fastighetsbolag kan ha stora svängningar (t.ex. vid större underhåll eller en försäljning) är det viktigt att hålla prognosen aktuell hos Skatteverket.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Gränsdragningar bör stämmas av",
          text: "Flera av fastighetsbokföringens frågor – avskrivningstakt, underhåll kontra förbättring, momsavdrag vid blandad uthyrning – har skattekonsekvenser och kan vara svåra. Stäm av med en redovisnings-/skatterådgivare och Skatteverket hellre än att gissa. Spara alla underlag enligt bokföringslagen.",
        },
      ],
    },

    // 10
    {
      number: 10,
      title: "Att anställa eller anlita förvaltning",
      lead: "När portföljen växer behöver du hjälp – anställd eller köpt tjänst.",
      blocks: [
        {
          type: "paragraph",
          text: "Ett litet fastighetsbolag sköts ofta av ägaren själv, men i takt med att innehavet växer ökar behovet av teknisk skötsel, ekonomisk förvaltning och hyresgästkontakt. Du kan anställa eller köpa tjänsterna.",
        },
        {
          type: "subheading",
          text: "Arbetsgivaravgifter vid anställning",
        },
        {
          type: "paragraph",
          text: "Anställer du personal (t.ex. fastighetsskötare eller förvaltare) betalar du lön plus **arbetsgivaravgifter** – normalsatsen 2026 är **31,42 %** av bruttolönen. Det ger kontroll och tillgänglig kompetens men en fast kostnad. Vissa nedsättningar kan finnas i särskilda fall; kontrollera aktuella regler hos Skatteverket.",
          source: "Skatteverket, arbetsgivaravgift normalsats 31,42 % (2026).",
        },
        {
          type: "subheading",
          text: "Köpa förvaltning och tjänster",
        },
        {
          type: "paragraph",
          text: "Alternativet är att köpa **förvaltningstjänster** (teknisk och/eller ekonomisk förvaltning), och att anlita hantverkare och entreprenörer för underhåll. Anlitar du underentreprenörer, kontrollera att de har **F-skatt**. Köpt förvaltning omvandlar fasta kostnader till rörliga och passar ofta ett växande bolag tills volymen motiverar egen personal.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Renoveringar kan ge ROT-relaterade regler för hyresgästen – men inte för dig",
          text: "ROT-avdraget gäller privatpersoners egen bostad och är inte något ditt fastighetsbolag använder för sina renoveringar. Anlitar du byggföretag för arbeten på fastigheten gäller i stället byggmomsreglerna (ofta omvänd byggmoms mellan företag). Stäm av momshanteringen med din redovisningsbyrå.",
        },
      ],
    },

    // 11
    {
      number: 11,
      title: "Vanliga misstag och fallgropar",
      lead: "De dyraste nybörjarfelen för fastighetsägare – och hur du undviker dem.",
      blocks: [
        {
          type: "list",
          items: [
            "**Glömma stämpelskatten i kalkylen.** 4,25 % för ett AB på ett miljonbelopp är en stor post – räkna in den och pantbrevskostnaderna i förvärvet.",
            "**Räkna på full uthyrning och låg ränta.** En affär som bara bär sig i bästa fall är riskabel. Räkna med vakans, underhåll och högre ränta.",
            "**Underinvestera i underhåll.** Eftersatt underhåll ger större skador, sänkt fastighetsvärde och kan reducera försäkringsersättning.",
            "**Missa momsreglerna vid lokaluthyrning.** Frivillig skattskyldighet har förutsättningar och formkrav – hanteras det fel kan avdragen ifrågasättas.",
            "**Sätta strukturen själv.** Ägarform och eventuell koncernstruktur har stora skattekonsekvenser – ta in en rådgivare före förvärvet, inte efter.",
            "**Slarva med hyresavtal och besittningsskydd.** Hyreslagstiftningen ger hyresgäster ett starkt skydd; otydliga avtal blir dyra tvister.",
            "**Sakna likviditetsbuffert.** Stora oförutsedda reparationer och ränteuppgångar kan slå hårt utan reserv.",
            "**Underskatta de generella ränteavdragsbegränsningarna.** De kan minska avdragen och försämra kalkylen – en fråga för rådgivaren.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Det dyraste felet är att gissa",
          text: "Fastighetsskatt, moms, avskrivningar och ränteavdrag ändras och är fallberoende. Bygg en vana att kontrollera aktuell uppgift hos Skatteverket och Lantmäteriet, och ta in en skatterådgivare för strukturen – konsekvenserna av fel är stora i den här branschen.",
        },
      ],
    },

    // 12
    {
      number: 12,
      title: "Hyresgäster och uthyrning",
      lead: "Stabila hyresgäster och korrekta avtal är grunden för ett lönsamt fastighetsbolag.",
      blocks: [
        {
          type: "paragraph",
          text: "Fastighetsbolagets intäkter kommer från uthyrning, och de bästa fastighetsägarna lägger lika mycket omsorg på hyresgästerna som på byggnaden. Låg omsättning på hyresgäster och få vakanser är mer värt än högsta möjliga hyra.",
        },
        {
          type: "list",
          items: [
            "**Korrekta hyresavtal.** Använd avtal som följer hyreslagstiftningen (jordabalkens hyresregler) och var tydlig om hyra, indexuppräkning, ansvar och uppsägning. Skilj på bostads- och lokalhyresavtal – reglerna skiljer sig.",
            "**Besittningsskydd.** Bostadshyresgäster och i viss mån lokalhyresgäster har besittningsskydd. Känn till reglerna innan du säger upp eller villkorsändrar.",
            "**Hyresförhandling.** För bostäder sätts och justeras hyror inom ett system med förhandling; för lokaler avtalar du fritt. Kontrollera vad som gäller för din fastighetstyp.",
            "**Kreditkontroll och referenser.** Stabila hyresgäster med betalningsförmåga minskar risken för hyresförluster och vakanser.",
            "**God förvaltning och kommunikation.** Snabb felavhjälpning och bra bemötande håller hyresgäster kvar – billigare än att hitta nya.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Marknadsför lediga objekt brett",
          text: "Vid vakans – annonsera lediga lägenheter och lokaler på relevanta plattformar och var snabb i kontakten. Varje månad av vakans är förlorad intäkt som inte kommer tillbaka. En tydlig annons med bilder och korrekta uppgifter förkortar tomtiden.",
        },
      ],
    },

    // 13
    {
      number: 13,
      title: "Komplett checklista",
      lead: "Allt på ett ställe. Kryssa av i tur och ordning före och efter ditt första förvärv.",
      blocks: [
        {
          type: "subheading",
          text: "Struktur och bolag",
        },
        {
          type: "checklist",
          items: [
            "Satt ägarform och eventuell koncernstruktur med skatterådgivare",
            "Registrerat bolaget (AB: 1 900 kr e-tjänst, aktiekapital 25 000 kr insatt)",
            "Ansökt om F-skatt och tagit ställning till moms (bostad/lokal)",
            "Anmält verklig huvudman (AB)",
            "Öppnat företagskonto",
          ],
        },
        {
          type: "subheading",
          text: "Förvärv och finansiering",
        },
        {
          type: "checklist",
          items: [
            "Säkrat finansiering och lånelöfte utifrån driftnetto, inte bara värde",
            "Räknat in stämpelskatt (4,25 % för AB), pantbrev och förvärvskostnader",
            "Genomfört teknisk och ekonomisk besiktning (due diligence)",
            "Ansökt om lagfart hos Lantmäteriet efter tillträde",
            "Räknat på kassaflödet även vid högre ränta och viss vakans",
          ],
        },
        {
          type: "subheading",
          text: "Drift och skydd",
        },
        {
          type: "checklist",
          items: [
            "Tecknat fullvärdig fastighetsförsäkring och fastighetsägaransvar (lånevillkor)",
            "Satt budget för löpande och planerat underhåll",
            "Bestämt egen eller köpt förvaltning",
            "Valt bokföringslösning med fastighetsvana",
            "Stämt av moms-, avskrivnings- och fastighetsavgiftsfrågor med rådgivare",
          ],
        },
        {
          type: "subheading",
          text: "Uthyrning",
        },
        {
          type: "checklist",
          items: [
            "Tagit fram korrekta hyresavtal (bostad/lokal) enligt hyreslagstiftningen",
            "Satt rutin för kreditkontroll av hyresgäster",
            "Förstått besittningsskydd och hyresregler för din fastighetstyp",
            "Satt rutin för felanmälan och snabb förvaltning",
          ],
        },
      ],
    },

    // 14
    {
      number: 14,
      title: "Resurser och myndighetskontakter",
      lead: "Spara den här sidan – här kontrollerar du aktuella regler om stämpelskatt, moms och fastighetsskatt.",
      blocks: [
        {
          type: "paragraph",
          text: "Reglerna och beloppen kring fastigheter uppdateras, och flera frågor kräver individuell rådgivning. Använd länkarna nedan för att kontrollera aktuell uppgift direkt hos källan – och ta in en skatterådgivare för struktur och upplägg.",
        },
        {
          type: "links",
          items: [
            { label: "Lantmäteriet", url: "https://www.lantmateriet.se", note: "Lagfart, stämpelskatt, pantbrev och avgifter" },
            { label: "Skatteverket", url: "https://www.skatteverket.se", note: "Moms på uthyrning, fastighetsavgift/-skatt, ränteavdrag, bolagsskatt" },
            { label: "Bolagsverket", url: "https://www.bolagsverket.se", note: "Registrering, verklig huvudman" },
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera bolag, F-skatt, moms" },
            { label: "Boverket", url: "https://www.boverket.se", note: "Bygg- och förvaltningsregler" },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Vill du bolla ditt upplägg med en rådgivare?",
          text: "Fastighetsägande är skattemässigt komplext och konsekvenserna av fel är stora. Vill du dubbelkolla struktur, finansiering eller skattefrågor med en expert kan vi matcha dig med en rådgivare kostnadsfritt på driva-foretag.se/hitta-radgivare.",
        },
      ],
    },
  ],
};

export default fastighetsbolag;
