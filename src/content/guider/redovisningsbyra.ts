import type { GuideContent } from "./types";

// ──────────────────────────────────────────────────────────────────────────
// STARTGUIDE: REDOVISNINGSBYRÅ
//
// YMYL – faktagranskad mot primärkälla. Verifierade uppgifter (juni 2026):
//  • Aktiekapital privat AB 25 000 kr; AB-reg 1 900 kr e-tjänst / 2 200 kr
//    blankett (Bolagsverket). Egenavgifter 28,97 % + schablonavdrag 25 %;
//    arbetsgivaravgift 31,42 %; bolagsskatt 20,6 % (Skatteverket). Moms 25 %.
//  • "Auktoriserad redovisningskonsult" är en FRIVILLIG branschtitel via Srf
//    konsulterna (SRF) eller FAR – INTE ett lagkrav för att driva byrå (samma
//    logik som Säker Vatten i VVS). Krav för titeln (kontrollera aktuellt hos
//    SRF/FAR): relevant ekonomiutbildning (t.ex. 120 hp högskola eller
//    motsvarande yrkeshögskola) + flera års kvalificerad praktik som extern
//    konsult, alternativt erfarenhetsbaserad väg utan formell examen.
//    Ansvarsförsäkring krävs för auktorisation.
//  • Kvalitetsstandard: Rex – Svensk standard för redovisningsuppdrag
//    (tidigare Reko). (SRF/FAR.)
//  • Penningtvätt: redovisningsbyråer är verksamhetsutövare enligt lag
//    (2017:630) om åtgärder mot penningtvätt och finansiering av terrorism.
//    Ska registreras i Bolagsverkets penningtvättsregister; tillsyn utövas av
//    länsstyrelserna i Stockholm, Skåne och Västra Götaland. (Länsstyrelsen.)
//  • Tjänsteföretag: ingen ROT, ingen omvänd byggmoms. 3:12 högrelevant för
//    egen byrå (utdelning i fåmansföretag).
//
// Där en exakt siffra/krav inte gått att verifiera exakt skrivs det kvalitativt
// ("kontrollera aktuellt hos SRF/FAR") – aldrig gissat.
// ──────────────────────────────────────────────────────────────────────────

const redovisningsbyra: GuideContent = {
  slug: "redovisningsbyra",
  industry: "Redovisningsbyrå",
  title: "Starta & driva redovisningsbyrå",
  subtitle: "Komplett startguide 2026",
  year: 2026,
  reviewedAt: "2026-06-04",
  reviewedSources: "Skatteverket, Bolagsverket, SRF/FAR & Länsstyrelsen",
  intro:
    "Den kompletta, faktagranskade guiden för dig som ska starta redovisningsbyrå i Sverige – från bolagsform och F-skatt till auktorisation hos SRF/FAR, kvalitetsstandarden Rex, penningtvättsreglerna, ansvarsförsäkring, prissättning och din första kund. Varje uppgift är kontrollerad mot Skatteverket, Bolagsverket och branschorganen.",

  chapters: [
    // 1
    {
      number: 1,
      title: "Att driva redovisningsbyrå i Sverige",
      lead: "Vad branschen kräver av dig som företagare – och vad som gör den lönsam.",
      blocks: [
        {
          type: "paragraph",
          text: "Redovisningsbranschen är stabil och förtroendebaserad: alla företag måste bokföra, deklarera och göra bokslut, och behovet av kompetent hjälp växer snarare än minskar i takt med att regelverken blir mer komplexa. Tröskeln att starta är låg rent praktiskt, men branschen vilar på **förtroende, kvalitet och ansvar** – en felaktig redovisning eller missad deklaration kan kosta kunden mycket, och dig ditt rykte. Den som bygger byrån på ordning, rätt försäkring och tydliga uppdrag står stark.",
        },
        {
          type: "paragraph",
          text: "Med **redovisningsbyrå** menar vi i den här guiden företag som utför löpande bokföring, lönehantering, bokslut, deklarationer och ekonomisk rådgivning åt andra företag. Reglerna i guiden gäller i grunden lika oavsett storlek, men ju fler kunder och anställda du har, desto viktigare blir kvalitetsrutiner, ansvarsförsäkring och efterlevnad av penningtvättsreglerna.",
        },
        {
          type: "paragraph",
          text: "Tre saker präglar redovisningsbranschen när du startar: **auktorisationen** (frivillig men förtroendeskapande titel via SRF eller FAR), **ansvaret och regelefterlevnaden** (ansvarsförsäkring, kvalitetsstandard och penningtvättslagen) och **prissättningen** (löpande uppdrag och paket som ger återkommande intäkter). De tre är genomgående teman i guiden.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Så använder du guiden",
          text: "Läs kapitel 1–6 innan du tar din första kund – de avgör bolagsform, auktorisation, penningtvättsregler och moms. Kapitel 7–12 är drift: ansvar och försäkring, pris, egen bokföring, anställda och marknadsföring. Kapitel 13 är en komplett checklista, och kapitel 14 samlar alla myndighets- och branschkontakter.",
        },
      ],
    },

    // 2
    {
      number: 2,
      title: "Välj bolagsform: enskild firma eller aktiebolag",
      lead: "Valet påverkar ditt personliga ansvar, din skatt och hur kunder ser på dig.",
      blocks: [
        {
          type: "paragraph",
          text: "För de flesta redovisningsbyråer står valet mellan **enskild näringsverksamhet** (enskild firma) och **aktiebolag (AB)**. Branschen har låg startkostnad, så valet styrs av ansvar, skatt och hur du vill bygga byrån. Eftersom du arbetar med andras ekonomi och bär ett professionsansvar väljer många AB.",
        },
        {
          type: "subheading",
          text: "Enskild firma",
        },
        {
          type: "paragraph",
          text: "Enklast och billigast att starta. Du och företaget är samma juridiska person, vilket betyder att du har **personligt ansvar** för företagets skulder. Du betalar **egenavgifter** på överskottet (28,97 % för aktiv näringsverksamhet 2026, med ett schablonavdrag på 25 % innan avgiften beräknas) och inkomsten beskattas som din lön. Kan fungera när du börjar ensam i liten skala.",
          source: "Skatteverket, egenavgifter 28,97 % och schablonavdrag 25 % (2026).",
        },
        {
          type: "subheading",
          text: "Aktiebolag",
        },
        {
          type: "paragraph",
          text: "Ett aktiebolag är en egen juridisk person. Ditt personliga ansvar begränsas i normalfallet till **aktiekapitalet på 25 000 kr** (lägsta tillåtna för privat AB) – relevant i ett yrke med professionsansvar. Bolagsskatten är **20,6 %** på vinsten. Många företagskunder ser hellre ett AB, och formen gör det enklare att anställa, ta in delägare och planera lön och utdelning. Du anställs av ditt eget bolag och tar ut lön, vilket ger jämnare skatt och tillgång till t.ex. sjukpenninggrundande inkomst.",
          source: "Bolagsverket (aktiekapital 25 000 kr) och Skatteverket (bolagsskatt 20,6 %).",
        },
        {
          type: "table",
          columns: ["", "Enskild firma", "Aktiebolag"],
          rows: [
            ["Startkapital", "Inget krav", "25 000 kr aktiekapital"],
            ["Personligt ansvar", "Ja, fullt ut", "Begränsat (normalfall)"],
            ["Skatt på vinst", "Egenavgifter 28,97 %, beskattas som inkomst", "Bolagsskatt 20,6 % + lön/utdelning"],
            ["Registrering", "Frivillig hos Bolagsverket", "Obligatorisk hos Bolagsverket"],
            ["Förtroende hos företagskunder", "Lägre", "Högre"],
            ["Administration", "Enklare bokföring", "Årsredovisning, mer formalia"],
          ],
          source: "Bolagsverket och Skatteverket (aktiekapital 25 000 kr, bolagsskatt 20,6 %, egenavgifter 28,97 % 2026).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Tumregel för redovisningsbyrå",
          text: "Eftersom du arbetar med andras ekonomi och bär ett professionsansvar väljer många AB redan från start – det begränsar ansvaret och ger en tydligare struktur för lön och utdelning. Enskild firma kan fungera i en liten uppstart, men ombilda i tid när kundstocken växer.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Skatteregler för delägare i fåmansföretag (3:12)",
          text: "Driver du AB och tar utdelning gäller de särskilda 3:12-reglerna med årligt gränsbelopp. Reglerna ändrades från 1 januari 2026 – kontrollera aktuellt gränsbelopp och regler hos Skatteverket innan du planerar utdelning. Som redovisningskonsult hjälper du dessutom dina kunder med detta, så håll dig uppdaterad.",
          source: "Skatteverket, reglerna för utdelning i fåmansföretag (3:12).",
        },
      ],
    },

    // 3
    {
      number: 3,
      title: "Auktorisation, kvalitetsstandard och penningtvättsregler",
      lead: "Ingen lag kräver auktorisation – men titeln, kvalitetsstandarden och penningtvättslagen styr branschen.",
      blocks: [
        {
          type: "paragraph",
          text: "Att starta redovisningsbyrå kräver **ingen myndighetslicens** – vem som helst får i princip erbjuda bokföringstjänster. Men tre saker präglar seriös verksamhet: auktorisationen, kvalitetsstandarden och penningtvättsreglerna. Gå igenom dem nedan.",
        },
        {
          type: "subheading",
          text: "F-skatt och registrering (Skatteverket)",
        },
        {
          type: "paragraph",
          text: "**F-skatt** är grunden och visar att du själv betalar din skatt. Du ansöker gratis hos **Skatteverket** via verksamt.se, samtidigt som du registrerar företaget och anmäler moms (samt arbetsgivare om du ska anställa).",
        },
        {
          type: "subheading",
          text: "Auktoriserad redovisningskonsult (frivillig titel via SRF eller FAR)",
        },
        {
          type: "paragraph",
          text: "**\"Auktoriserad redovisningskonsult\"** är en **skyddad branschtitel** som du blir genom medlemskap i **Srf konsulterna (SRF)** eller **FAR** – det är **frivilligt och inget lagkrav** för att driva byrå (samma logik som Säker Vatten-auktorisationen i VVS-branschen). Titeln signalerar kompetens och kvalitet och efterfrågas ofta av större kunder. Kraven för auktorisation handlar normalt om en kombination av **relevant ekonomiutbildning** (t.ex. högskola eller yrkeshögskola) och **flera års kvalificerad praktik som extern redovisningskonsult**, alternativt en erfarenhetsbaserad väg utan formell examen. Auktorisationen kräver också **ansvarsförsäkring** och fortlöpande utbildning. Kontrollera de exakta, aktuella kraven hos SRF respektive FAR.",
          source: "Srf konsulterna (SRF) och FAR (auktorisation är frivillig branschtitel; krav på utbildning, praktik, ansvarsförsäkring och fortbildning – kontrollera aktuella villkor).",
        },
        {
          type: "subheading",
          text: "Kvalitetsstandard: Rex",
        },
        {
          type: "paragraph",
          text: "Branschen har en gemensam kvalitetsstandard – **Rex, Svensk standard för redovisningsuppdrag** (efterföljare till tidigare Reko) – som beskriver hur ett redovisningsuppdrag ska planeras, utföras och dokumenteras, bland annat med tydliga uppdragsavtal. Auktoriserade konsulter arbetar enligt Rex, och att tillämpa standarden höjer kvaliteten och minskar din ansvarsrisk även om du inte är auktoriserad.",
          source: "SRF/FAR (Rex – Svensk standard för redovisningsuppdrag).",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Penningtvättslagen gäller din byrå",
          text: "Redovisningsbyråer är **verksamhetsutövare** enligt lag (2017:630) om åtgärder mot penningtvätt och finansiering av terrorism. Du ska bland annat göra en **allmän riskbedömning**, ha rutiner, genomföra **kundkännedom** och rapportera misstänkta transaktioner. Verksamheten ska **registreras i Bolagsverkets penningtvättsregister**, och tillsynen utövas av **länsstyrelserna i Stockholm, Skåne och Västra Götaland**. Brister kan ge sanktionsavgifter. Sätt rutinerna på plats innan du tar första kunden.",
          source: "Lag (2017:630); Bolagsverkets penningtvättsregister; tillsyn av länsstyrelserna i Stockholm, Skåne och Västra Götaland.",
        },
        {
          type: "links",
          items: [
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare" },
            { label: "Srf konsulterna (SRF)", url: "https://www.srfkonsult.se", note: "Auktorisation, Rex, penningtvättsstöd" },
            { label: "FAR", url: "https://www.far.se", note: "Auktorisation och branschstandard" },
            { label: "Länsstyrelsen – penningtvättstillsyn", url: "https://www.lansstyrelsen.se", note: "Tillsyn och vägledning penningtvätt (Stockholm, Skåne, Västra Götaland)" },
            { label: "Bolagsverket – penningtvättsregistret", url: "https://www.bolagsverket.se", note: "Registrering som verksamhetsutövare" },
          ],
        },
      ],
    },

    // 4
    {
      number: 4,
      title: "Startkapital och faktiska kostnader",
      lead: "Vad det faktiskt kostar att komma igång – en kompetensbransch med låga fasta kostnader.",
      blocks: [
        {
          type: "paragraph",
          text: "En redovisningsbyrå är billig att starta rent fysiskt – din kompetens, programvara och en dator räcker långt. De viktigaste kostnaderna är programvarulicenser, försäkring och eventuell auktorisation. Här är de poster du bör budgetera för. Myndighetsavgifter anges som fastställda belopp; övriga poster som kostnadsslag att räkna på.",
        },
        {
          type: "table",
          columns: ["Post", "Kommentar"],
          rows: [
            ["Aktiekapital (om AB)", "25 000 kr – sätts in på företagskonto, är ditt och kan användas i driften"],
            ["Registrering AB hos Bolagsverket", "1 900 kr via e-tjänst på verksamt.se (2 200 kr med pappersblankett)"],
            ["F-skatt och momsregistrering", "Gratis hos Skatteverket"],
            ["Bokförings- och lönesystem", "Licenser för redovisnings-, löne- och skatteprogram – ofta abonnemang per kund"],
            ["Auktorisation och medlemskap", "Avgift till SRF/FAR samt fortbildning (om du auktoriserar dig)"],
            ["Ansvarsförsäkring", "Professions-/förmögenhetsbrottsförsäkring (se kapitel 7)"],
            ["Dator och kontor", "Dator, säker datalagring; hemmakontor eller mindre lokal"],
            ["Penningtvättsrutiner", "Tid och eventuella verktyg för kundkännedom och riskbedömning"],
            ["Marknadsföring", "Webbplats och nätverkande"],
          ],
          source: "Bolagsverket (1 900 kr AB e-tjänst, 25 000 kr aktiekapital); Skatteverket (F-skatt/moms gratis).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Återkommande intäkter ger trygg start",
          text: "Redovisning köps oftast som löpande uppdrag – varje kund ger intäkter månad efter månad. Det gör att en byrå kan byggas stabilt med relativt få kunder, och att du tidigt får en förutsägbar omsättning. Sikta på löpande uppdrag och paket snarare än enstaka engångsjobb (kapitel 8).",
        },
      ],
    },

    // 5
    {
      number: 5,
      title: "Steg-för-steg: så registrerar du företaget",
      lead: "Hela registreringsprocessen i rätt ordning – från namn till första uppdraget.",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Välj och kontrollera företagsnamn",
              text: "Sök på Bolagsverkets namnsöktjänst att namnet är ledigt. För AB registreras namnet i samband med bolaget; för enskild firma kan du registrera och skydda namnet separat.",
            },
            {
              title: "Registrera företaget hos Bolagsverket",
              text: "AB registreras via e-tjänsten på **verksamt.se** för **1 900 kr** (stiftelseurkund, bolagsordning och bankintyg på aktiekapitalet 25 000 kr). Enskild firma behöver inte registreras, men du kan göra det för att skydda namnet.",
            },
            {
              title: "Ansök om F-skatt och momsregistrera dig",
              text: "Görs gratis via verksamt.se. Redovisningstjänster har moms 25 % (befrielse möjlig först vid omsättning på högst 120 000 kr/år – se kapitel 6).",
            },
            {
              title: "Registrera dig i penningtvättsregistret",
              text: "Anmäl byråen som verksamhetsutövare till Bolagsverkets penningtvättsregister och upprätta riskbedömning och rutiner för kundkännedom (kapitel 3).",
            },
            {
              title: "Teckna ansvarsförsäkring",
              text: "Teckna professions-/ansvarsförsäkring innan du tar uppdrag – det är dessutom ett krav för auktorisation (kapitel 7).",
            },
            {
              title: "Registrera dig som arbetsgivare (om du ska anställa)",
              text: "Ska du ha anställda anmäler du dig som arbetsgivare hos Skatteverket via verksamt.se. Då börjar du redovisa arbetsgivaravgifter och avdragen skatt (se kapitel 10).",
            },
            {
              title: "Anmäl verklig huvudman",
              text: "AB ska anmäla verklig huvudman till Bolagsverket, normalt inom fyra veckor från registreringen.",
            },
            {
              title: "Öppna företagskonto och förbered uppdragsavtal",
              text: "Skaffa företagskonto (krav för AB), ta fram uppdragsavtal enligt Rex-standarden och bestäm system och bokföringslösning (kapitel 9) innan du tar första uppdraget.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Allt på ett ställe",
          text: "verksamt.se är myndigheternas gemensamma e-tjänst (Bolagsverket, Skatteverket och Tillväxtverket). Du kan registrera företag, ansöka om F-skatt, momsregistrera dig och anmäla arbetsgivare i samma inloggade flöde. Penningtvättsregistrering och auktorisation sköts hos Bolagsverket respektive SRF/FAR.",
          source: "verksamt.se (Bolagsverket, Skatteverket, Tillväxtverket).",
        },
      ],
    },

    // 6
    {
      number: 6,
      title: "Moms och fakturering",
      lead: "25 % moms och löpande uppdrag – enkelt, men avtalen och fakturarutinen avgör lönsamheten.",
      blocks: [
        {
          type: "paragraph",
          text: "Momsen är enkel i redovisningsbranschen, men hur du paketerar och fakturerar uppdragen påverkar både din lönsamhet och ditt ansvar.",
        },
        {
          type: "subheading",
          text: "Moms 25 %",
        },
        {
          type: "paragraph",
          text: "Redovisnings-, löne- och rådgivningstjänster har **moms 25 %** (normalsats). Du kan vara momsbefriad först om omsättningen är **högst 120 000 kr per år** (gränsen gäller sedan 1 januari 2025) – men då kan du inte dra av ingående moms, vilket sällan lönar sig. Säljer du tjänster till företag i andra EU-länder kan omvänd skattskyldighet gälla (köparen redovisar momsen) med redovisning i periodisk sammanställning – kontrollera mot Skatteverket.",
          source: "Skatteverket, momsnormalsats 25 % och momsbefrielse vid omsättning på högst 120 000 kr/år (fr.o.m. 1 jan 2025).",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Ingen ROT, ingen omvänd byggmoms",
          text: "Redovisningstjänster ger **inte** ROT-avdrag och omfattas **inte** av omvänd byggmoms – de reglerna gäller bygg- och hushållsnära tjänster. Fakturera vanliga 25 % moms till svenska kunder.",
        },
        {
          type: "subheading",
          text: "Uppdragsavtal enligt Rex",
        },
        {
          type: "paragraph",
          text: "Skriv alltid ett tydligt **uppdragsavtal** som anger vad byrån ansvarar för och vad kunden själv ansvarar för (t.ex. att lämna underlag i tid). Oklar ansvarsfördelning är den vanligaste källan till tvister och reklamationer. Rex-standarden ger en bra grund för uppdragsbrev och dokumentation. Reglera även arvode, betalningsvillkor och hur penningtvättskontrollen hanteras.",
          source: "SRF/FAR (Rex – uppdragsavtal och ansvarsfördelning).",
        },
      ],
    },

    // 7
    {
      number: 7,
      title: "Ansvar och försäkring",
      lead: "Du arbetar med kundens ekonomi – ansvarsförsäkring är inte valfritt i praktiken.",
      blocks: [
        {
          type: "paragraph",
          text: "En redovisningsbyrå bär ett **professionsansvar**: ett fel i bokföring, lön eller deklaration kan orsaka kunden ekonomisk skada som du kan bli ansvarig för. Därför är rätt försäkring central – och ett krav för auktorisation.",
        },
        {
          type: "list",
          items: [
            "**Ansvarsförsäkring / konsultansvarsförsäkring** – täcker rena förmögenhetsskador, dvs. ekonomisk skada kunden lider av ett fel i ditt arbete. Krävs för auktorisation och i praktiken nödvändig.",
            "**Förmögenhetsbrottsförsäkring** – skydd vid t.ex. förskingring, relevant när du hanterar kunders betalningar och uppgifter.",
            "**Cyber-/dataförsäkring** – du hanterar känsliga ekonomiska persondata; ett dataintrång kan bli kostsamt och anmälningspliktigt.",
            "**Företags- och egendomsförsäkring** – grundskydd för kontor och utrustning.",
            "**Sjukavbrottsförsäkring** – ekonomiskt skydd för dig själv om du blir sjuk i en kunskapsberoende verksamhet.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Ansvarsförsäkring och avtal hör ihop",
          text: "Din ansvarsförsäkring och dina uppdragsavtal (kapitel 6) ska samspela: avtalet bör tydligt avgränsa ditt ansvar och innehålla en rimlig ansvarsbegränsning, medan försäkringen täcker det ansvar som ändå kan uppstå. Kontrollera att försäkringsbeloppet räcker för de kunder och uppdrag du tar.",
        },
      ],
    },

    // 8
    {
      number: 8,
      title: "Prissättning och lönsamhet",
      lead: "Löpande uppdrag, paket eller timpris – hur du tar betalt avgör din lönsamhet.",
      blocks: [
        {
          type: "paragraph",
          text: "Den vanligaste orsaken till att nya byråer tjänar för lite är att de underprissätter löpande arbete och inte tar betalt för all tid de lägger. Ditt pris ska täcka din lön, sociala avgifter, programvara, försäkring, fortbildning, icke-debiterbar tid och vinst. Räkna baklänges från vad du behöver per år.",
        },
        {
          type: "subheading",
          text: "Tre prismodeller",
        },
        {
          type: "list",
          items: [
            "**Timpris** – enkelt vid oklar omfattning, men du tjänar bara på debiterad tid och premieras inte för att jobba effektivt med bra system.",
            "**Fast pris per uppgift** – t.ex. bokslut eller deklaration till fast pris; tydligt för kunden men kräver att du kan avgränsa arbetet.",
            "**Löpande paket / abonnemang** – ett månadspris för bokföring, lön och rapportering ger **förutsägbara, återkommande intäkter** och är ofta grunden i en stabil byrå.",
          ],
        },
        {
          type: "callout",
          variant: "fact",
          title: "Återkommande intäkter är byråns styrka",
          text: "En byrå som lever på löpande uppdrag har en förutsägbar omsättning och högt värde. Bygg din affär kring månadsvisa paket, och använd enstaka uppdrag (t.ex. bokslut åt nya kunder) som väg in till löpande samarbete. Automatisera det som går så att tiden läggs på rådgivning, där värdet är högst.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Ta betalt för rådgivning",
          text: "Den mest värdefulla tjänsten du erbjuder är ofta rådgivningen kring skatt, lön och företagande – inte själva inmatningen. Se till att din prismodell fångar det värdet i stället för att ge bort rådgivning gratis vid sidan av bokföringen.",
        },
      ],
    },

    // 9
    {
      number: 9,
      title: "Bokföring och skatt – din egen byrå",
      lead: "Du sköter andras ekonomi – men glöm inte din egen, särskilt lön och utdelning.",
      blocks: [
        {
          type: "paragraph",
          text: "Som redovisningsbyrå behärskar du bokföringen – men din egen verksamhet har några särdrag värda att tänka på, särskilt i AB där fördelningen mellan lön och utdelning påverkar din skatt.",
        },
        {
          type: "subheading",
          text: "F-skatt och preliminärskatt",
        },
        {
          type: "paragraph",
          text: "Med **F-skatt** betalar du själv in din skatt och dina egenavgifter (enskild firma) eller bolagets skatt (AB). Skatteverket beslutar en **preliminärskatt** som du betalar varje månad utifrån din uppskattade vinst. Justera prognosen när kundstocken växer.",
        },
        {
          type: "subheading",
          text: "Lön och utdelning i eget AB (3:12)",
        },
        {
          type: "paragraph",
          text: "Driver du byrån som AB är fördelningen mellan **lön och utdelning** central för din egen skatt, och styrs av **3:12-reglerna** för fåmansföretag. Reglerna ändrades från 1 januari 2026. Eftersom du rådger dina kunder i samma frågor lönar det sig att hålla dig noga uppdaterad – men kontrollera alltid aktuella gränsbelopp och regler hos Skatteverket innan du planerar din egen utdelning.",
          source: "Skatteverket, 3:12-reglerna för fåmansföretag (ändrade fr.o.m. 1 jan 2026).",
        },
        {
          type: "subheading",
          text: "Vanliga avdrag för redovisningsbyrå",
        },
        {
          type: "list",
          items: [
            "**Programvara och licenser** – bokförings-, löne- och skatteprogram, ofta abonnemang.",
            "**Auktorisation och fortbildning** – medlemsavgifter och kurser som krävs för titeln och kompetensen.",
            "**Försäkringar** – ansvars-, förmögenhetsbrotts- och cyberförsäkring.",
            "**Dator, kontor och datalagring** – utrustning och säker lagring; hemmakontor enligt särskilda regler.",
            "**Facklitteratur och verktyg** – uppdaterade regelverk och stöd för penningtvättskontroll.",
            "**Bankavgifter** – företagskonto och betaltjänster.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Spara underlag – och håll penningtvättsdokumentationen i ordning",
          text: "Utöver bokföringslagens krav på att spara underlag ska du som verksamhetsutövare kunna visa din riskbedömning, dina kundkännedomsåtgärder och dina rutiner enligt penningtvättslagen. Ordnad dokumentation är ditt bästa skydd vid tillsyn från länsstyrelsen.",
        },
      ],
    },

    // 10
    {
      number: 10,
      title: "Att anställa",
      lead: "Från första medarbetaren: avgifter, kompetens och kvalitetsansvar.",
      blocks: [
        {
          type: "paragraph",
          text: "En byrå växer genom att anställa redovisningskonsulter och löneadministratörer. Det följer med kostnader och ett kvalitetsansvar – kundernas ekonomi ska skötas rätt oavsett vem på byrån som utför arbetet.",
        },
        {
          type: "subheading",
          text: "Arbetsgivaravgifter",
        },
        {
          type: "paragraph",
          text: "Utöver lönen betalar du **arbetsgivaravgifter**. Normalsatsen 2026 är **31,42 %** av bruttolönen. På en månadslön på 38 000 kr betyder det runt 11 900 kr i arbetsgivaravgift utöver lönen – budgetera för det i din prissättning (kapitel 8). Vissa nedsättningar kan finnas i särskilda fall; kontrollera aktuella regler hos Skatteverket.",
          source: "Skatteverket, arbetsgivaravgift normalsats 31,42 % (2026).",
        },
        {
          type: "subheading",
          text: "Kompetens, kvalitet och sekretess",
        },
        {
          type: "paragraph",
          text: "Anställda som utför kunduppdrag bör arbeta enligt byråns kvalitetsrutiner (Rex) och vara rätt utbildade. Du ansvarar för att kvaliteten upprätthålls och för att penningtvättsrutinerna följs av alla. Reglera **sekretess** i anställningsavtalen – ni hanterar känsliga ekonomiska uppgifter – och se till att personalen får fortbildning när regelverken ändras.",
        },
      ],
    },

    // 11
    {
      number: 11,
      title: "Vanliga misstag och fallgropar",
      lead: "De dyraste nybörjarfelen i redovisningsbranschen – och hur du undviker dem.",
      blocks: [
        {
          type: "list",
          items: [
            "**Otydliga uppdragsavtal.** Oklar ansvarsfördelning (vem lämnar underlag, vad ingår) är den vanligaste tvistekällan. Använd uppdragsbrev enligt Rex.",
            "**Sakna ansvarsförsäkring.** Ett fel i bokföring eller deklaration kan bli dyrt; försäkringen är i praktiken nödvändig och krävs för auktorisation.",
            "**Strunta i penningtvättsreglerna.** Riskbedömning, kundkännedom, registrering och rutiner är lagkrav som länsstyrelsen granskar. Brister kan ge sanktionsavgifter.",
            "**Underprissätta löpande arbete.** Att inte ta betalt för all tid och ge bort rådgivning gratis. Räkna baklänges från din årslön.",
            "**Bara engångsuppdrag.** Att inte bygga löpande paket ger ojämn omsättning. Återkommande uppdrag är byråns styrka.",
            "**Slarv med datasäkerhet och GDPR.** Du hanterar känsliga persondata – säker lagring och rutiner vid incidenter är ett måste.",
            "**Inaktuell kompetens.** Skatteregler ändras varje år (t.ex. 3:12). Fortbildning är en del av yrket, inte en valfri kostnad.",
            "**Ta för många kunder för snabbt.** Tappa inte kvaliteten när du växer – det är ditt rykte som är affären.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Det dyraste felet är att gissa",
          text: "Regelverken (skatt, penningtvätt, auktorisationskrav) ändras löpande. Bygg en vana att kontrollera aktuell uppgift hos Skatteverket, SRF/FAR och länsstyrelsen innan du ger råd eller sätter upp rutiner – och dokumentera.",
        },
      ],
    },

    // 12
    {
      number: 12,
      title: "Marknadsföring och dina första kunder",
      lead: "Så får du de första uppdragen och bygger en stabil kundstock.",
      blocks: [
        {
          type: "paragraph",
          text: "En redovisningsbyrå säljs på **förtroende och rekommendationer** – företagare lämnar ogärna sin ekonomi till någon de inte litar på. Det viktigaste i början är att synas där företagare finns, visa kompetens och få nöjda kunder att rekommendera dig vidare. Här är de kanaler som ger mest för en nystartad byrå.",
        },
        {
          type: "list",
          items: [
            "**Nätverk och rekommendationer.** De flesta första kunder kommer via personliga kontakter och andra företagare. Var aktiv i lokala företagarnätverk.",
            "**Egen webbplats.** Visa tjänster, eventuell auktorisation och tydliga kontaktuppgifter – och gärna en nisch (t.ex. byrå för restauranger eller e-handel).",
            "**Google – sökning och profil.** Synas när lokala företag söker redovisningshjälp; be nöjda kunder om omdömen.",
            "**Samarbete med banker, jurister och revisorer.** De hänvisar gärna vidare företag som behöver löpande redovisning.",
            "**Innehåll och kunskap.** Dela enkla tips om bokföring, skatt och deadlines – det visar kompetens och drar kunder.",
            "**Nisch och specialisering.** Att vara expert på en bransch eller frågetyp gör dig lättare att rekommendera än en generalist.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Visa att du är seriös",
          text: "F-skatt, auktorisation eller arbete enligt Rex, ansvarsförsäkring och ordnade penningtvättsrutiner är inte bara krav – de är starka säljargument. Företagskunder väljer gärna den byrå som tydligt visar att kvalitet och ansvar är i ordning. Lyft fram det på webbplatsen.",
        },
      ],
    },

    // 13
    {
      number: 13,
      title: "Komplett checklista",
      lead: "Allt på ett ställe. Kryssa av i tur och ordning innan du tar första uppdraget.",
      blocks: [
        {
          type: "subheading",
          text: "Innan start",
        },
        {
          type: "checklist",
          items: [
            "Valt bolagsform (ofta AB) utifrån ansvar, skatt och tillväxtplan",
            "Kontrollerat och valt företagsnamn hos Bolagsverket",
            "Registrerat företaget (AB: 1 900 kr e-tjänst, aktiekapital 25 000 kr insatt)",
            "Ansökt om F-skatt och momsregistrerat företaget",
            "Anmält verklig huvudman (AB) och öppnat företagskonto",
          ],
        },
        {
          type: "subheading",
          text: "Auktorisation, ansvar och penningtvätt",
        },
        {
          type: "checklist",
          items: [
            "Tagit ställning till auktorisation hos SRF/FAR och påbörjat eventuell väg dit",
            "Tecknat ansvars-/professionsförsäkring",
            "Registrerat byrån i Bolagsverkets penningtvättsregister",
            "Upprättat allmän riskbedömning och rutiner för kundkännedom (penningtvätt)",
            "Förberett uppdragsavtal enligt Rex-standarden",
          ],
        },
        {
          type: "subheading",
          text: "System och ekonomi",
        },
        {
          type: "checklist",
          items: [
            "Valt bokförings-, löne- och skattesystem samt säker datalagring",
            "Satt prismodell (löpande paket, fast pris, timpris) baklänges från årslön",
            "Planerat för återkommande intäkter (abonnemang)",
            "Satt rutin för GDPR och hantering av känsliga persondata",
          ],
        },
        {
          type: "subheading",
          text: "Inför första uppdraget",
        },
        {
          type: "checklist",
          items: [
            "Byggt en enkel webbplats och Google-profil",
            "Aktiverat dig i lokala företagarnätverk",
            "Satt rutin för fakturering och betalningsuppföljning",
            "Planerat fortbildning för att hålla kompetensen aktuell",
          ],
        },
      ],
    },

    // 14
    {
      number: 14,
      title: "Resurser och myndighetskontakter",
      lead: "Spara den här sidan – här kontrollerar du aktuella regler om skatt, auktorisation och penningtvätt.",
      blocks: [
        {
          type: "paragraph",
          text: "Regelverken (skatt, penningtvätt, auktorisationskrav) uppdateras löpande. Använd länkarna nedan för att kontrollera aktuell uppgift direkt hos källan innan du ger råd, auktoriserar dig eller sätter upp rutiner.",
        },
        {
          type: "links",
          items: [
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare – allt på ett ställe" },
            { label: "Skatteverket", url: "https://www.skatteverket.se", note: "Moms, F-skatt, 3:12, bolagsskatt, deklarationer" },
            { label: "Bolagsverket", url: "https://www.bolagsverket.se", note: "Registrering, verklig huvudman, penningtvättsregistret" },
            { label: "Srf konsulterna (SRF)", url: "https://www.srfkonsult.se", note: "Auktorisation, Rex, penningtvättsstöd" },
            { label: "FAR", url: "https://www.far.se", note: "Auktorisation och branschstandard" },
            { label: "Länsstyrelsen", url: "https://www.lansstyrelsen.se", note: "Tillsyn och vägledning enligt penningtvättslagen" },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Vill du bolla ditt upplägg med en rådgivare?",
          text: "Den här guiden tar dig långt på egen hand. Vill du dubbelkolla val av bolagsform, auktorisationsväg eller penningtvättsrutiner med en expert kan vi matcha dig med en rådgivare kostnadsfritt på driva-foretag.se/hitta-radgivare.",
        },
      ],
    },
  ],
};

export default redovisningsbyra;
