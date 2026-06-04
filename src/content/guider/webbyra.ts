import type { GuideContent } from "./types";

// ──────────────────────────────────────────────────────────────────────────
// STARTGUIDE: WEBBYRÅ
//
// YMYL – faktagranskad mot primärkälla. Verifierade uppgifter (juni 2026):
//  • Aktiekapital privat AB: 25 000 kr (Bolagsverket)
//  • AB-nyregistrering: 1 900 kr e-tjänst / 2 200 kr blankett (Bolagsverket)
//  • Momsbefrielse-gräns: omsättning ≤ 120 000 kr/år (Skatteverket, fr.o.m.
//    1 jan 2025); moms normalsats 25 % på webb-/marknadsföringstjänster
//  • Tjänster till företag i andra EU-länder: omvänd skattskyldighet (köparen
//    redovisar momsen) enligt huvudregeln; redovisas i periodisk sammanställning.
//    Digitala tjänster till privatpersoner i andra EU-länder kan redovisas via
//    OSS. Kontrollera mot Skatteverket. (Skatteverket.)
//  • Arbetsgivaravgift 2026: 31,42 %; egenavgifter 28,97 % + schablonavdrag 25 %
//  • INGEN branschauktorisation. INGEN ROT (ej bygg/hushållsnära tjänst).
//    INGEN omvänd byggmoms (ej byggtjänst).
//  • GDPR: en webbyrå är ofta personuppgiftsbiträde åt kunden (som är
//    personuppgiftsansvarig) och behöver då personuppgiftsbiträdesavtal.
//    Tillsynsmyndighet är Integritetsskyddsmyndigheten (IMY).
//  • Immaterialrätt: upphovsrätt uppstår automatiskt hos upphovsmannen; rätten
//    till levererat arbete (kod, design) måste regleras i avtal (nyttjanderätt
//    eller överlåtelse). (Lag 1960:729 om upphovsrätt.)
//  • F-skatt: registrering gratis hos Skatteverket via verksamt.se
//
// Där en exakt siffra inte gått att verifiera mot primärkälla skrivs den
// kvalitativt ("kontrollera aktuell uppgift hos …") – aldrig gissad.
// ──────────────────────────────────────────────────────────────────────────

const webbyra: GuideContent = {
  slug: "webbyra",
  industry: "Webbyrå",
  title: "Starta & driva webbyrå",
  subtitle: "Komplett startguide 2026",
  year: 2026,
  reviewedAt: "2026-06-04",
  reviewedSources: "Skatteverket, Bolagsverket & Integritetsskyddsmyndigheten (IMY)",
  intro:
    "Den kompletta, faktagranskade guiden för dig som ska starta webbyrå i Sverige – från bolagsform och F-skatt till moms vid EU-försäljning, avtal och immaterialrätt, GDPR-ansvar för kunddata, paket- och retainerprissättning och din första kund. Varje siffra är kontrollerad mot Skatteverket och Bolagsverket.",

  chapters: [
    // 1 ──────────────────────────────────────────────────────────────────
    {
      number: 1,
      title: "Att driva webbyrå i Sverige",
      lead: "Vad branschen kräver av dig som företagare – och vad som gör den lönsam.",
      blocks: [
        {
          type: "paragraph",
          text: "En webbyrå är ett av de enklaste företagen att starta rent praktiskt: du behöver i grunden en dator, kompetens och en första kund. Men just därför är konkurrensen hård, och det som avgör lönsamheten är inte tekniken utan affären – hur du paketerar och prissätter dina tjänster, skriver tydliga avtal, hanterar immaterialrätten och tar ansvar för kundernas persondata. Den som får ordning på det får återkommande intäkter och nöjda kunder; den som inte gör det fastnar i underbetalda engångsprojekt och tvister.",
        },
        {
          type: "paragraph",
          text: "Med **webbyrå** menar vi i den här guiden företag som levererar webbplatser, webbutveckling, design, digital marknadsföring, SEO och liknande digitala tjänster åt företag och organisationer. Reglerna i guiden gäller i grunden lika oavsett om du är ensam frilansare eller bygger ett team – men ju fler kunder och underkonsulter du har, desto viktigare blir avtal, moms och dataskydd.",
        },
        {
          type: "paragraph",
          text: "Tre saker präglar webbyråbranschen när du startar: **prissättningen** (timpris, fast paketpris eller löpande retainer avgör din lönsamhet), **avtalen och immaterialrätten** (vem äger koden, designen och materialet – och vad får kunden använda?) och **GDPR-ansvaret** (du hanterar ofta kundernas persondata och blir då personuppgiftsbiträde). De tre är genomgående teman i guiden. Notera att webbyråtjänster **inte** ger ROT-avdrag och **inte** omfattas av omvänd byggmoms – det är byggbranschens regler.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Så använder du guiden",
          text: "Läs kapitel 1–7 innan du tar din första kund – de avgör bolagsform, moms, avtal, immaterialrätt och GDPR. Kapitel 8–12 är drift: pris, bokföring, anställda/underkonsulter, vanliga misstag och marknadsföring. Kapitel 13 är en komplett checklista du kan kryssa av, och kapitel 14 samlar alla myndighetskontakter med länkar.",
        },
      ],
    },

    // 2 ──────────────────────────────────────────────────────────────────
    {
      number: 2,
      title: "Välj bolagsform: enskild firma eller aktiebolag",
      lead: "Valet påverkar ditt personliga ansvar, din skatt och hur kunder ser på dig.",
      blocks: [
        {
          type: "paragraph",
          text: "För de flesta webbyråer står valet mellan **enskild näringsverksamhet** (enskild firma) och **aktiebolag (AB)**. Branschen har låg startkostnad, så valet styrs mer av skatt, ansvar och hur du vill växa än av kapitalbehov.",
        },
        {
          type: "subheading",
          text: "Enskild firma",
        },
        {
          type: "paragraph",
          text: "Enklast och billigast att starta – populärt bland frilansare och vid sidoverksamhet. Du och företaget är samma juridiska person, vilket betyder att du har **personligt ansvar** för företagets skulder. Du betalar **egenavgifter** på överskottet (28,97 % för aktiv näringsverksamhet 2026, med ett schablonavdrag på 25 % innan avgiften beräknas) och inkomsten beskattas som din lön. Passar bra när du startar ensam, har låg risk och vill komma igång snabbt.",
          source: "Skatteverket, egenavgifter 28,97 % och schablonavdrag 25 % (2026).",
        },
        {
          type: "subheading",
          text: "Aktiebolag",
        },
        {
          type: "paragraph",
          text: "Ett aktiebolag är en egen juridisk person. Ditt personliga ansvar begränsas i normalfallet till **aktiekapitalet på 25 000 kr** (lägsta tillåtna för privat AB) – relevant när du tar på dig större uppdrag med ansvar för t.ex. driftsäkerhet och persondata. Många större företagskunder och offentliga upphandlingar arbetar hellre med AB, och bolagsformen gör det enklare att ta in delägare, anställa och bygga upp ett företagsvärde. Du anställs av ditt eget bolag och tar ut lön, vilket ger jämnare skatt och tillgång till t.ex. sjukpenninggrundande inkomst.",
          source: "Bolagsverket, aktiekapital minst 25 000 kr för privat AB.",
        },
        {
          type: "table",
          columns: ["", "Enskild firma", "Aktiebolag"],
          rows: [
            ["Startkapital", "Inget krav", "25 000 kr aktiekapital"],
            ["Personligt ansvar", "Ja, fullt ut", "Begränsat (normalfall)"],
            ["Skatt på vinst", "Egenavgifter 28,97 %, beskattas som inkomst", "Bolagsskatt + lön/utdelning"],
            ["Registrering", "Frivillig hos Bolagsverket", "Obligatorisk hos Bolagsverket"],
            ["Förtroende hos större företagskunder", "Lägre", "Högre"],
            ["Administration", "Enklare bokföring", "Årsredovisning, mer formalia"],
          ],
          source: "Bolagsverket och Skatteverket (aktiekapital 25 000 kr, egenavgifter 28,97 % 2026).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Tumregel för webbyrå",
          text: "Ska du börja ensam, testa marknaden eller köra vid sidan av en anställning – starta gärna som enskild firma och ombilda till AB när omsättningen växer. Riktar du dig mot större företagskunder, vill begränsa ansvaret eller tar in delägare – välj AB direkt.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Skatteregler för delägare i fåmansföretag (3:12)",
          text: "Driver du AB och tar utdelning gäller de särskilda 3:12-reglerna med årligt gränsbelopp. Reglerna ändrades från 1 januari 2026 – kontrollera aktuellt gränsbelopp och regler hos Skatteverket innan du planerar utdelning.",
          source: "Skatteverket, reglerna för utdelning i fåmansföretag (3:12).",
        },
      ],
    },

    // 3 ──────────────────────────────────────────────────────────────────
    {
      number: 3,
      title: "Tillstånd, krav och GDPR-ansvar",
      lead: "Webbyrå kräver ingen yrkesauktorisation – men dataskyddet är ett verkligt ansvar du måste hantera rätt.",
      blocks: [
        {
          type: "paragraph",
          text: "Det krävs **ingen branschauktorisation eller särskilt tillstånd** för att starta webbyrå. Det gör tröskeln låg – men du har ändå ett juridiskt ansvar, framför allt för de persondata du hanterar åt dina kunder. Gå igenom punkterna nedan.",
        },
        {
          type: "subheading",
          text: "F-skatt och registrering (Skatteverket)",
        },
        {
          type: "paragraph",
          text: "**F-skatt** är grunden. Den visar att du själv betalar din skatt och dina egenavgifter, och i praktiken kräver alla seriösa företagskunder att din firma har F-skatt innan de anlitar dig. Du ansöker gratis hos **Skatteverket** via verksamt.se, samtidigt som du registrerar företaget och anmäler moms.",
        },
        {
          type: "subheading",
          text: "GDPR – ditt dataskyddsansvar",
        },
        {
          type: "paragraph",
          text: "När du bygger och driftar webbplatser, e-handel eller marknadsföring hanterar du nästan alltid **personuppgifter** – besökare, kunder, prenumeranter. Då gäller dataskyddsförordningen (GDPR). I de flesta uppdrag är **kunden personuppgiftsansvarig** och din byrå **personuppgiftsbiträde** (du behandlar uppgifterna för kundens räkning). Det kräver ett **personuppgiftsbiträdesavtal** mellan er som reglerar hur uppgifterna får behandlas och skyddas. När du behandlar uppgifter i din egen verksamhet (t.ex. ditt eget CRM och dina nyhetsbrev) är du själv personuppgiftsansvarig. Tillsynsmyndighet är **Integritetsskyddsmyndigheten (IMY)**.",
          source: "Integritetsskyddsmyndigheten (IMY); dataskyddsförordningen (GDPR) om personuppgiftsansvarig och personuppgiftsbiträde.",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Personuppgiftsbiträdesavtal är inte valfritt",
          text: "Behandlar du persondata för en kunds räkning ska det finnas ett skriftligt personuppgiftsbiträdesavtal. Ha en standardmall klar att bifoga dina uppdragsavtal. Tänk också på var data lagras (t.ex. molntjänster utanför EU/EES kan kräva särskild grund för överföring) och hur du hjälper kunden vid en eventuell personuppgiftsincident.",
        },
        {
          type: "subheading",
          text: "Bokföring och bransch-regler du slipper",
        },
        {
          type: "paragraph",
          text: "Du omfattas av bokföringslagen (kapitel 10) men – till skillnad från bygg- och hantverksbranscherna – **inte** av kraven på elektronisk personalliggare, och dina tjänster ger **inte** ROT-avdrag och omfattas **inte** av omvänd byggmoms. Det är regler som hör till byggsektorn och hushållsnära tjänster.",
        },
        {
          type: "links",
          items: [
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms" },
            { label: "Skatteverket", url: "https://www.skatteverket.se", note: "F-skatt, moms, försäljning av tjänster inom och utanför EU" },
            { label: "Integritetsskyddsmyndigheten (IMY)", url: "https://www.imy.se", note: "GDPR, personuppgiftsbiträde, personuppgiftsincidenter" },
          ],
        },
      ],
    },

    // 4 ──────────────────────────────────────────────────────────────────
    {
      number: 4,
      title: "Startkapital och faktiska kostnader",
      lead: "Vad det faktiskt kostar att komma igång – en av de billigaste branscherna att starta i.",
      blocks: [
        {
          type: "paragraph",
          text: "En webbyrå är bland de minst kapitalkrävande verksamheterna att starta. Du behöver i grunden en dator, mjukvara och en internetuppkoppling – inte lokal, fordon eller dyra maskiner. Här är de poster du bör budgetera för. Myndighetsavgifter anges som fastställda belopp; övriga poster som kostnadsslag att räkna på.",
        },
        {
          type: "table",
          columns: ["Post", "Kommentar"],
          rows: [
            ["Aktiekapital (om AB)", "25 000 kr – sätts in på företagskonto, är ditt och kan användas i driften"],
            ["Registrering AB hos Bolagsverket", "1 900 kr via e-tjänst på verksamt.se (2 200 kr med pappersblankett)"],
            ["Registrering enskild firma", "Frivillig; namnskydd kostar ca 1 000 kr (kontrollera aktuell avgift hos Bolagsverket)"],
            ["F-skatt och momsregistrering", "Gratis hos Skatteverket"],
            ["Dator och kringutrustning", "Den huvudsakliga investeringen för en webbyrå"],
            ["Mjukvara och licenser", "Design-, utvecklings- och projektverktyg – ofta löpande abonnemang"],
            ["Domän, hosting och e-post", "Egna kanaler samt ev. drift åt kunder (vidarefaktureras)"],
            ["Försäkringar", "Konsultansvars- och ev. cyberförsäkring (se kapitel 7)"],
            ["Bokförings- och faktureringssystem", "Programvara eller redovisningsbyrå"],
            ["Marknadsföring", "Egen webbplats, portfolio och eventuell annonsering"],
          ],
          source: "Bolagsverket (1 900 kr AB e-tjänst, 25 000 kr aktiekapital); Skatteverket (F-skatt/moms gratis).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Den verkliga investeringen är tid",
          text: "Eftersom de fasta kostnaderna är låga är din största investering den tid det tar att bygga portfolio, rykte och en kundstock. Räkna med en uppstartsperiod där en del arbete (egen webbplats, mallar, processer) inte är fakturerbart – och se till att ha en buffert som täcker dina egna levnadsomkostnader under den tiden.",
        },
      ],
    },

    // 5 ──────────────────────────────────────────────────────────────────
    {
      number: 5,
      title: "Steg-för-steg: så registrerar du företaget",
      lead: "Hela registreringsprocessen i rätt ordning – från namn till första fakturan.",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Välj och kontrollera företagsnamn",
              text: "Sök på Bolagsverkets namnsöktjänst att namnet är ledigt. Kontrollera samtidigt att en passande domän och sociala konton är lediga. För AB registreras namnet i samband med bolaget; för enskild firma kan du registrera och skydda namnet separat.",
            },
            {
              title: "Registrera företaget hos Bolagsverket",
              text: "AB registreras via e-tjänsten på **verksamt.se** för **1 900 kr** (stiftelseurkund, bolagsordning och bankintyg på aktiekapitalet 25 000 kr). Enskild firma behöver inte registreras, men du kan göra det för att skydda namnet.",
            },
            {
              title: "Ansök om F-skatt hos Skatteverket",
              text: "Görs gratis via verksamt.se, ofta i samma flöde. F-skatt är ett krav i praktiken för att få uppdrag från företagskunder.",
            },
            {
              title: "Momsregistrera dig",
              text: "Anmäl moms i samma ärende. Webbtjänster har normalmoms 25 %. (Momsbefrielse är möjlig först om omsättningen är högst 120 000 kr/år – se kapitel 6.)",
            },
            {
              title: "Registrera dig som arbetsgivare (om du ska anställa)",
              text: "Ska du ha anställda anmäler du dig som arbetsgivare hos Skatteverket via verksamt.se. Då börjar du redovisa arbetsgivaravgifter och avdragen skatt (se kapitel 11).",
            },
            {
              title: "Anmäl verklig huvudman",
              text: "AB ska anmäla verklig huvudman till Bolagsverket, normalt inom fyra veckor från registreringen.",
            },
            {
              title: "Öppna företagskonto och förbered avtalen",
              text: "Skaffa företagskonto (krav för AB), ta fram uppdragsavtal, personuppgiftsbiträdesavtal och offertmall (kapitel 7) och bestäm bokföringslösning (kapitel 10) innan du tar första uppdraget.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Allt på ett ställe",
          text: "verksamt.se är myndigheternas gemensamma e-tjänst (Bolagsverket, Skatteverket och Tillväxtverket). Du kan registrera företag, ansöka om F-skatt, momsregistrera dig och anmäla arbetsgivare i samma inloggade flöde.",
          source: "verksamt.se (Bolagsverket, Skatteverket, Tillväxtverket).",
        },
      ],
    },

    // 6 ──────────────────────────────────────────────────────────────────
    {
      number: 6,
      title: "Moms och fakturering",
      lead: "25 % på webbtjänster – men gränsöverskridande försäljning har egna regler du måste få rätt.",
      blocks: [
        {
          type: "paragraph",
          text: "Webbyråer säljer tjänster, och momsen är oftast enkel – men så snart du fakturerar kunder i andra länder finns regler som är lätta att missa. Här är grunderna.",
        },
        {
          type: "subheading",
          text: "Moms i Sverige",
        },
        {
          type: "paragraph",
          text: "Webb-, utvecklings- och marknadsföringstjänster har **moms 25 %** (normalsats) vid försäljning till kunder i Sverige. Du kan vara momsbefriad först om omsättningen är högst **120 000 kr per år** (gränsen gäller sedan 1 januari 2025) – men då går du också miste om att dra av ingående moms på dina inköp. De flesta webbyråer som arbetar mot företag är momsregistrerade.",
          source: "Skatteverket, momsnormalsats 25 % och momsbefrielse vid omsättning på högst 120 000 kr/år (fr.o.m. 1 jan 2025).",
        },
        {
          type: "subheading",
          text: "Försäljning till andra EU-länder och utanför EU",
        },
        {
          type: "paragraph",
          text: "Säljer du tjänster till ett **företag i ett annat EU-land** gäller som huvudregel **omvänd skattskyldighet** – köparen redovisar momsen i sitt land, och du fakturerar utan svensk moms men ska redovisa försäljningen i en **periodisk sammanställning**. Säljer du **digitala tjänster till privatpersoner i andra EU-länder** kan momsen i stället redovisas via **OSS (One Stop Shop)**. Försäljning till kunder **utanför EU** ligger ofta utanför svensk moms. Reglerna beror på exakt vilken tjänst och vilken köpare det gäller – kontrollera alltid mot Skatteverket innan du fakturerar utländska kunder.",
          source: "Skatteverket, försäljning av tjänster till andra länder (huvudregeln för tjänster till beskattningsbara personer, periodisk sammanställning, OSS).",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Ingen ROT och ingen omvänd byggmoms",
          text: "Till skillnad från bygg-, el-, VVS- och måleriföretag ger webbyråtjänster **inte** ROT-avdrag, och de omfattas **inte** av omvänd byggmoms. De reglerna gäller bara bygg- och hushållsnära tjänster. Lova aldrig en kund ROT på en webbtjänst.",
          source: "Skatteverket (ROT och omvänd byggmoms gäller byggtjänster, inte webbtjänster).",
        },
        {
          type: "subheading",
          text: "Tydliga fakturor och vidarefakturering",
        },
        {
          type: "paragraph",
          text: "Specificera dina fakturor: arbete, eventuella licenser och utlägg (domän, hosting, stockbilder) som du vidarefakturerar. Var tydlig med betalningsvillkor och dröjsmålsränta. Vid längre projekt – fakturera **a conto** eller i delbetalningar kopplade till milstolpar, så att du inte ligger ute med arbetstid i månader.",
        },
      ],
    },

    // 7 ──────────────────────────────────────────────────────────────────
    {
      number: 7,
      title: "Avtal, immaterialrätt och försäkring",
      lead: "De juridiska detaljerna som avgör vem som äger arbetet – och som skyddar dig när något går fel.",
      blocks: [
        {
          type: "paragraph",
          text: "I en webbyrå ligger de största riskerna inte i fysiska skador utan i otydliga avtal, oklar äganderätt till det du levererar och ansvar när en leverans inte fungerar. Tre saker behöver du ha ordning på: uppdragsavtalet, immaterialrätten och försäkringen.",
        },
        {
          type: "subheading",
          text: "Uppdragsavtal",
        },
        {
          type: "paragraph",
          text: "Skriv alltid ett **uppdragsavtal** som tydligt anger omfattning (vad ingår och inte), tidplan, pris och betalningsvillkor, hur ändringar och tillägg hanteras, antal korrekturrundor, vad som gäller vid försening och uppsägning, samt ansvar och ansvarsbegränsning. Otydlig omfattning – \"scope creep\" – är den vanligaste orsaken till olönsamma projekt och tvister i branschen.",
        },
        {
          type: "subheading",
          text: "Immaterialrätt – vem äger koden och designen?",
        },
        {
          type: "paragraph",
          text: "**Upphovsrätt** uppstår automatiskt hos den som skapar ett verk (t.ex. kod, design, text) och tillfaller alltså i utgångsläget dig eller din anställda – inte kunden – om inget annat avtalas. Du måste därför reglera i avtalet vad kunden får: en **nyttjanderätt (licens)** att använda resultatet, eller en **överlåtelse** av rättigheterna. Reglera också rätten till bakomliggande verktyg, ramverk och komponenter du återanvänder, och om du får visa arbetet i din portfolio. Tydlighet här skyddar både dig och kunden.",
          source: "Lag (1960:729) om upphovsrätt till litterära och konstnärliga verk (upphovsrätt uppstår hos upphovsmannen; rättigheter överlåts/licensieras genom avtal).",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Reglera rättigheterna före leverans – inte efter",
          text: "En vanlig och dyr tvist uppstår när en kund tror sig äga allt medan byrån behållit rättigheterna, eller tvärtom. Bestäm i avtalet, innan projektet börjar, exakt vilka rättigheter som överförs och när (ofta vid slutbetalning). Knyt gärna överlåtelsen till att fakturan är betald.",
        },
        {
          type: "subheading",
          text: "Försäkring",
        },
        {
          type: "paragraph",
          text: "Teckna en **konsultansvarsförsäkring** (ansvarsförsäkring för tjänsteföretag) som täcker rena förmögenhetsskador – alltså ekonomisk skada en kund kan drabbas av om din leverans är felaktig eller försenad. Hanterar du persondata, e-handel eller drift kan en **cyber-/dataansvarsförsäkring** vara värd att överväga, eftersom dataintrång och driftavbrott kan bli kostsamma. Läs villkoren så att skyddet matchar de uppdrag du faktiskt tar.",
        },
      ],
    },

    // 8 ──────────────────────────────────────────────────────────────────
    {
      number: 8,
      title: "Prissättning: timpris, paket och retainer",
      lead: "Hur du tar betalt avgör din lönsamhet mer än vad du tar betalt.",
      blocks: [
        {
          type: "paragraph",
          text: "Den vanligaste orsaken till att nya webbyråer inte går runt är inte brist på uppdrag – det är fel prismodell och för lågt pris. Ditt pris ska täcka din lön, sociala avgifter, all icke-fakturerbar tid (sälj, offerter, admin, kompetensutveckling), mjukvara, försäkring, pension och vinst. Räkna baklänges från vad du behöver tjäna per år.",
        },
        {
          type: "subheading",
          text: "Tre prismodeller",
        },
        {
          type: "list",
          items: [
            "**Timpris** – enkelt och rättvist vid löpande arbete och oklar omfattning, men du tjänar bara när du fakturerar timmar och premieras inte för att jobba effektivt. Räkna realistiskt med att bara 60–70 % av arbetstiden är fakturerbar.",
            "**Fast paketpris** – tydligt för kunden och kan vara mer lönsamt om du arbetar effektivt, men kräver att du kan avgränsa omfattningen exakt. Bygg in en gräns för antal rundor och en tydlig ÄTA-modell för tillägg.",
            "**Retainer (löpande avtal)** – kunden betalar ett fast belopp per månad för t.ex. drift, support, uppdateringar eller löpande marknadsföring. Ger **förutsägbara, återkommande intäkter** och är ofta nyckeln till en stabil webbyrå.",
          ],
        },
        {
          type: "callout",
          variant: "fact",
          title: "Retainers ger stabiliteten",
          text: "En byrå som lever på enstaka projekt börjar varje månad om från noll. Bygg därför in **återkommande intäkter** – drifts-, support- och marknadsföringsavtal – så att en växande del av omsättningen är förutsägbar. Det jämnar ut intäkterna, förenklar planeringen och gör företaget mer värt.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Skriftlig offert – alltid",
          text: "Lämna alltid skriftlig offert kopplad till uppdragsavtalet: omfattning, pris och prismodell, tidplan, antal korrekturrundor, vad som händer vid tillägg och giltighetstid. Det förebygger scope creep och de flesta tvister – och får dig att framstå som mer professionell.",
        },
      ],
    },

    // 9 ──────────────────────────────────────────────────────────────────
    {
      number: 9,
      title: "Bokföring och skatt",
      lead: "Löpande ordning i ekonomin – och de avdrag tjänsteföretag ofta missar.",
      blocks: [
        {
          type: "paragraph",
          text: "Alla företag är enligt bokföringslagen skyldiga att löpande bokföra sina affärshändelser och spara underlag. Du kan sköta det själv i ett bokföringsprogram eller anlita en redovisningsbyrå – för många webbyråer räcker ett enkelt program långt eftersom affärshändelserna är relativt få, men en byrå kan vara värd pengarna när du växer eller säljer utomlands.",
        },
        {
          type: "subheading",
          text: "F-skatt och preliminärskatt",
        },
        {
          type: "paragraph",
          text: "Med **F-skatt** betalar du själv in din skatt och dina egenavgifter (enskild firma) eller bolagets skatt (AB). Skatteverket beslutar en **preliminärskatt** som du betalar varje månad, baserad på din uppskattade vinst. Lämnar du en realistisk prognos slipper du både stora restskatter och att binda upp pengar i onödan.",
        },
        {
          type: "subheading",
          text: "Moms och redovisningsperiod",
        },
        {
          type: "paragraph",
          text: "Du redovisar moms månads-, kvartals- eller årsvis beroende på omsättning. Säljer du till företag i andra EU-länder ska du även lämna **periodisk sammanställning** (kapitel 6). Ett bokföringsprogram som hanterar EU-försäljning och omvänd skattskyldighet sparar tid och fel.",
        },
        {
          type: "subheading",
          text: "Vanliga avdrag för webbyråer",
        },
        {
          type: "list",
          items: [
            "**Dator, telefon och kringutrustning** – arbetsredskap; större inköp kan skrivas av över tid.",
            "**Mjukvara och licenser** – design-, utvecklings- och projektverktyg, ofta som abonnemang.",
            "**Domän, hosting och molntjänster** – för egen verksamhet (kundernas drift vidarefaktureras).",
            "**Hemmakontor eller kontorshyra** – avdrag enligt särskilda regler för den del som används i verksamheten.",
            "**Kompetensutveckling** – kurser och facklitteratur som rör verksamheten.",
            "**Försäkringar och bankavgifter** – konsultansvars-/cyberförsäkring och företagskonto.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Spara alla underlag",
          text: "Kvitton, fakturor och avtal ska sparas enligt bokföringslagen. Spara även dina uppdrags- och personuppgiftsbiträdesavtal ordnat – de är ditt bästa skydd både vid en skattekontroll och vid en eventuell tvist eller dataskyddsfråga.",
        },
      ],
    },

    // 10 ─────────────────────────────────────────────────────────────────
    {
      number: 10,
      title: "Att anställa och anlita underkonsulter",
      lead: "Två sätt att växa: anställa eller bygga ett nätverk av frilansare.",
      blocks: [
        {
          type: "paragraph",
          text: "Webbyråer växer ofta genom en kombination av anställda och inhyrda specialister (frilansare/underkonsulter). Båda har sina kostnader och sitt ansvar – välj utifrån hur jämn din uppdragsström är.",
        },
        {
          type: "subheading",
          text: "Arbetsgivaravgifter vid anställning",
        },
        {
          type: "paragraph",
          text: "Utöver lönen betalar du **arbetsgivaravgifter**. Normalsatsen 2026 är **31,42 %** av bruttolönen. På en månadslön på 40 000 kr betyder det runt 12 600 kr i arbetsgivaravgift utöver lönen – budgetera för det när du sätter ditt pris (kapitel 8). Anställda ger stabilitet och samlad kompetens men en fast kostnad även när uppdragen tryter.",
          source: "Skatteverket, arbetsgivaravgift normalsats 31,42 % (2026).",
        },
        {
          type: "subheading",
          text: "Underkonsulter och frilansare",
        },
        {
          type: "paragraph",
          text: "Att anlita **underkonsulter med egen F-skatt** ger flexibilitet – du skalar upp vid stora projekt utan fasta lönekostnader. Säkerställ att de har **F-skatt** (annars kan du bli skyldig att betala arbetsgivaravgifter), skriv tydliga underkonsultavtal och se till att **immaterialrätten** till deras arbete förs vidare till dig så att du kan leverera den till slutkunden (kapitel 7). Reglera även sekretess och dataskydd.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Kedjan av rättigheter får inte brista",
          text: "Om en frilansare bygger en del av en kundleverans måste rättigheterna gå hela vägen: från frilansaren till din byrå och vidare till kunden enligt ert avtal. Saknas ett led kan du inte ge kunden de rättigheter du lovat. Ha standardklausuler om immaterialrätt i alla underkonsultavtal.",
        },
      ],
    },

    // 11 ─────────────────────────────────────────────────────────────────
    {
      number: 11,
      title: "Vanliga misstag och fallgropar",
      lead: "De dyraste nybörjarfelen i webbyråbranschen – och hur du undviker dem.",
      blocks: [
        {
          type: "list",
          items: [
            "**Otydlig omfattning (scope creep).** Att börja jobba utan avgränsat uppdragsavtal leder till gratisarbete och tvister. Skriv ned vad som ingår – och vad som inte gör det.",
            "**Oreglerad immaterialrätt.** Att leverera utan att ha bestämt vem som äger koden och designen. Reglera nyttjanderätt eller överlåtelse i avtalet, kopplat till betalning.",
            "**Glömma personuppgiftsbiträdesavtal.** Hanterar du kundens persondata utan avtal bryter ni mot GDPR. Ha en mall klar.",
            "**Fel moms vid utlandsförsäljning.** Att lägga svensk moms på EU-företagsförsäljning som ska ha omvänd skattskyldighet – eller glömma periodisk sammanställning. Kontrollera mot Skatteverket.",
            "**Lova ROT eller blanda in byggmoms.** Webbtjänster ger inte ROT och omfattas inte av omvänd byggmoms. Det är byggbranschens regler.",
            "**Bara timpris och engångsprojekt.** Att inte bygga retainers ger ojämn omsättning. Satsa på återkommande drifts- och supportavtal.",
            "**För lågt pris.** Att inte räkna in icke-fakturerbar tid, mjukvara, försäkring och vinst. Sätt priset baklänges från din årslön.",
            "**Svag ansvarsbegränsning.** Utan ansvarsbegränsning i avtalet och konsultansvarsförsäkring kan ett enda fel bli mycket dyrt.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Det dyraste felet är att gissa",
          text: "Reglerna kring moms vid utlandsförsäljning, GDPR och immaterialrätt är lätta att missförstå. Bygg en vana att kontrollera aktuell uppgift hos Skatteverket och IMY innan du fakturerar utländska kunder eller skriver dataavtal – och spara dokumentationen.",
        },
      ],
    },

    // 12 ─────────────────────────────────────────────────────────────────
    {
      number: 12,
      title: "Marknadsföring och dina första kunder",
      lead: "Så får du de första uppdragen och bygger en stabil kundstock.",
      blocks: [
        {
          type: "paragraph",
          text: "En webbyrå säljs på **förtroende och bevis** – kan du visa att du levererat liknande resultat förut är halva jobbet gjort. Det viktigaste i början är att bygga portfolio, vara synlig där dina kunder söker och leverera så bra att de rekommenderar dig vidare. Här är de kanaler som ger mest för en nystartad webbyrå.",
        },
        {
          type: "list",
          items: [
            "**Egen webbplats och portfolio.** Din egen sajt är ditt främsta arbetsprov – visa case med konkreta resultat, inte bara snygga bilder.",
            "**Referenser och rekommendationer.** Be nöjda kunder om omdömen och vidareförmedling; mun-till-mun är branschens starkaste kanal.",
            "**Nisch och specialisering.** Att vara \"byrån för restauranger\" eller \"för e-handel\" gör dig lättare att hitta och rekommendera än en generalist.",
            "**Innehåll och synlighet.** Dela kunskap via blogg, sociala medier eller nyhetsbrev så att potentiella kunder hittar dig och ser din kompetens.",
            "**Nätverk och partnerskap.** Samarbeta med t.ex. fotografer, copywriters och reklambyråer som skickar uppdrag de inte tar själva.",
            "**Lokala företag.** Många mindre företag behöver hjälp med webb och digital närvaro – sök upp dem direkt i ditt område.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Visa att du är seriös",
          text: "F-skatt, tydliga avtal, ordnad GDPR-hantering och en professionell egen webbplats är inte bara grundkrav – de är säljargument. Företagskunder anlitar gärna den byrå som tydligt visar att både leverans och juridik är i ordning. Lyft fram det i offert och på hemsidan.",
        },
      ],
    },

    // 13 ─────────────────────────────────────────────────────────────────
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
            "Valt bolagsform (enskild firma eller AB) utifrån ansvar, skatt och tillväxtplan",
            "Kontrollerat företagsnamn hos Bolagsverket och säkrat domän/sociala konton",
            "Registrerat företaget (AB: 1 900 kr e-tjänst, aktiekapital 25 000 kr insatt)",
            "Ansökt om F-skatt hos Skatteverket (gratis)",
            "Momsregistrerat företaget",
            "Anmält verklig huvudman (AB)",
            "Öppnat företagskonto",
          ],
        },
        {
          type: "subheading",
          text: "Avtal, moms och dataskydd",
        },
        {
          type: "checklist",
          items: [
            "Tagit fram uppdragsavtal med omfattning, ÄTA, betalning och ansvarsbegränsning",
            "Reglerat immaterialrätt (nyttjanderätt/överlåtelse) kopplat till betalning",
            "Tagit fram mall för personuppgiftsbiträdesavtal (GDPR)",
            "Klargjort momshantering vid försäljning inom och utanför EU",
            "Förstått att webbtjänster inte ger ROT och inte omfattas av omvänd byggmoms",
          ],
        },
        {
          type: "subheading",
          text: "Ekonomi och försäkring",
        },
        {
          type: "checklist",
          items: [
            "Tecknat konsultansvars- och ev. cyberförsäkring",
            "Satt prismodell (timpris/paket/retainer) och pris baklänges från årslön",
            "Planerat för återkommande intäkter (retainers)",
            "Valt bokföringslösning som hanterar EU-försäljning",
          ],
        },
        {
          type: "subheading",
          text: "Innan första uppdraget",
        },
        {
          type: "checklist",
          items: [
            "Byggt egen webbplats med portfolio/case",
            "Förberett offertmall kopplad till uppdragsavtalet",
            "Satt rutin för fakturering (a conto vid längre projekt) och påminnelser",
            "Säkerställt buffert för egna omkostnader under uppstarten",
          ],
        },
      ],
    },

    // 14 ─────────────────────────────────────────────────────────────────
    {
      number: 14,
      title: "Resurser och myndighetskontakter",
      lead: "Spara den här sidan – här kontrollerar du aktuella regler om moms, skatt och dataskydd.",
      blocks: [
        {
          type: "paragraph",
          text: "Reglerna kring moms vid utlandsförsäljning, skatt och GDPR uppdateras. Använd länkarna nedan för att kontrollera aktuell uppgift direkt hos källan innan du fakturerar utländska kunder, skriver dataavtal eller anställer.",
        },
        {
          type: "links",
          items: [
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare – allt på ett ställe" },
            { label: "Bolagsverket", url: "https://www.bolagsverket.se", note: "Registrering, avgifter, namn, verklig huvudman" },
            { label: "Skatteverket", url: "https://www.skatteverket.se", note: "F-skatt, moms, försäljning av tjänster inom/utanför EU, periodisk sammanställning, OSS" },
            { label: "Integritetsskyddsmyndigheten (IMY)", url: "https://www.imy.se", note: "GDPR, personuppgiftsbiträde, incidenter" },
            { label: "PRV", url: "https://www.prv.se", note: "Immaterialrätt – varumärke, upphovsrätt, design" },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Vill du bolla ditt upplägg med en rådgivare?",
          text: "Den här guiden tar dig långt på egen hand. Vill du dubbelkolla val av bolagsform, moms vid utlandsförsäljning, avtal eller GDPR med en expert kan vi matcha dig med en rådgivare kostnadsfritt på driva-foretag.se/hitta-radgivare.",
        },
      ],
    },
  ],
};

export default webbyra;
