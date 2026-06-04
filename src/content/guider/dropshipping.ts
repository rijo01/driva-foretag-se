import type { GuideContent } from "./types";

// ──────────────────────────────────────────────────────────────────────────
// STARTGUIDE: DROPSHIPPING & E-HANDEL
//
// YMYL – faktagranskad mot primärkälla. Verifierade uppgifter (juni 2026):
//  • Aktiekapital privat AB: 25 000 kr (Bolagsverket)
//  • AB-nyregistrering: 1 900 kr e-tjänst / 2 200 kr blankett (Bolagsverket)
//  • Momsbefrielse-gräns: omsättning ≤ 120 000 kr/år (Skatteverket, fr.o.m.
//    1 jan 2025); moms normalsats 25 %
//  • IMPORTMOMS (Tullverket/Skatteverket): moms ska betalas på varor som köps
//    från land UTANFÖR EU, OAVSETT värde (det tidigare lågvärdeundantaget för
//    importmoms är borttaget). Momsen är normalt 25 %. Är importören
//    momsregistrerad redovisas importmomsen till Skatteverket; annars betalas
//    den till Tullverket. (Tullverket.)
//  • NYA REGLER FR.O.M. 1 JULI 2026 (beslutad EU-rätt): tullfriheten för
//    försändelser under 150 euro tas bort och ersätts av en tillfällig
//    schablontull på 3 euro PER VARUKATEGORI (tulltaxenummer/tariff heading) –
//    inte per paket eller per varupost. Ett paket med varor ur flera olika
//    tulltaxenummer ger 3 euro per kategori (3 kategorier = 9 euro). Rådet
//    godkände beslutet 11 februari 2026 (slopat 150-euro-undantag + tillfällig
//    schablontull). Kontrollera aktuellt läge hos Tullverket, då övergången sker
//    mitt i 2026.
//  • OSS (One Stop Shop, Skatteverket): vid unionsintern distansförsäljning av
//    varor/digitala tjänster till privatpersoner i andra EU-länder gäller svensk
//    moms upp till tröskeln 10 000 euro (99 680 kr)/år; över tröskeln tas
//    köparlandets moms ut och redovisas via OSS. IOSS finns för import av
//    försändelser med värde högst 150 euro. (Skatteverket.)
//  • Distansavtalslagen (2005:59): konsument har som huvudregel 14 dagars
//    ångerrätt vid distansköp; ångerfristen börjar dagen efter att varan
//    mottagits. Nya regler om bl.a. ångerfunktion ("ångerknapp") på webbplatser
//    träder i kraft 19 juni 2026. (Konsumentverket; lag 2005:59.)
//  • Konsumentköplagen och prisinformationslagen gäller vid försäljning till
//    konsument. (Konsumentverket.)
//  • Arbetsgivaravgift 2026: 31,42 %; egenavgifter 28,97 % + schablonavdrag 25 %
//  • Ingen branschauktorisation. Ingen ROT. Ingen omvänd byggmoms.
//  • F-skatt: registrering gratis hos Skatteverket via verksamt.se
//
// Där en exakt siffra inte gått att verifiera mot primärkälla skrivs den
// kvalitativt ("kontrollera aktuell uppgift hos …") – aldrig gissad. Moms vid
// import är en känd fälla – verifiera alltid mot Skatteverket och Tullverket.
// ──────────────────────────────────────────────────────────────────────────

const dropshipping: GuideContent = {
  slug: "dropshipping",
  industry: "Dropshipping & E-handel",
  title: "Starta & driva e-handel och dropshipping",
  subtitle: "Komplett startguide 2026",
  year: 2026,
  reviewedAt: "2026-06-04",
  reviewedSources: "Skatteverket, Tullverket, Bolagsverket & Konsumentverket",
  intro:
    "Den kompletta, faktagranskade guiden för dig som ska starta e-handel eller dropshipping i Sverige – från bolagsform och F-skatt till importmoms och tull, OSS vid EU-försäljning, ångerrätt och konsumenträtt, betallösningar, marginaler och din första kund. Varje siffra är kontrollerad mot Skatteverket, Tullverket och Bolagsverket – med särskilt fokus på den momsfälla som fäller många nya e-handlare.",

  chapters: [
    // 1 ──────────────────────────────────────────────────────────────────
    {
      number: 1,
      title: "Att driva e-handel och dropshipping i Sverige",
      lead: "Vad branschen kräver av dig som företagare – och var de flesta nybörjare går vilse.",
      blocks: [
        {
          type: "paragraph",
          text: "E-handel lockar för att tröskeln verkar låg: en webbutik, några produkter och en leverantör räcker för att komma igång. Men just den låga tröskeln döljer de två saker som avgör om du tjänar pengar eller inte – **momsen och tullen vid import**, och **marginalerna efter frakt, returer och annonsering**. Den som tror att dropshipping är skattefritt eller att leverantören sköter momsen får en dyr läxa. Den som förstår reglerna från start kan bygga en lönsam affär.",
        },
        {
          type: "paragraph",
          text: "Med **e-handel och dropshipping** menar vi i den här guiden företag som säljer fysiska varor online till konsumenter och företag – antingen från eget lager eller genom **dropshipping**, där en leverantör (ofta i ett land utanför EU) skickar varan direkt till din kund. Reglerna i guiden gäller i grunden lika oavsett modell, men dropshipping från länder utanför EU gör moms- och tullfrågorna särskilt viktiga.",
        },
        {
          type: "paragraph",
          text: "Tre saker präglar e-handel när du startar: **moms och tull vid import** (den vanligaste och dyraste fällan – se kapitel 6), **konsumenträtten** (ångerrätt, reklamation och prisinformation som du måste följa mot privatkunder) och **marginalerna** (där frakt, returer och annonskostnader äter upp vinsten om du inte räknar rätt). De tre är genomgående teman i guiden.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Den vanligaste myten – och varför den är farlig",
          text: "Många nybörjare tror att man slipper moms och tull när varan skickas direkt från t.ex. Kina till kunden, eller att det gamla undantaget för billiga försändelser fortfarande gäller. Det stämmer inte: **importmoms tas ut oavsett varans värde**, och från **1 juli 2026** försvinner dessutom tullfriheten för försändelser under 150 euro och ersätts av en **schablontull på 3 euro per varukategori (tulltaxenummer)**. Läs kapitel 6 noga innan du sätter dina priser.",
          source: "Rådets beslut 11 februari 2026 (slopat 150-euro-undantag + tillfällig schablontull fr.o.m. 1 juli 2026); Tullverket.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Så använder du guiden",
          text: "Läs kapitel 1–7 innan du säljer din första vara – de avgör bolagsform, moms/tull, konsumenträtt och betallösningar. Kapitel 8–12 är drift: marginaler, bokföring, att växa, vanliga misstag och marknadsföring. Kapitel 13 är en komplett checklista du kan kryssa av, och kapitel 14 samlar alla myndighetskontakter med länkar.",
        },
      ],
    },

    // 2 ──────────────────────────────────────────────────────────────────
    {
      number: 2,
      title: "Välj bolagsform: enskild firma eller aktiebolag",
      lead: "Valet påverkar ditt personliga ansvar, din skatt och hur leverantörer och betalpartners ser på dig.",
      blocks: [
        {
          type: "paragraph",
          text: "För de flesta e-handlare står valet mellan **enskild näringsverksamhet** (enskild firma) och **aktiebolag (AB)**. Branschen kan startas billigt, så valet styrs mer av skatt, ansvar och hur du vill växa än av kapitalbehov – men tänk på att lagerinköp och annonsbudgetar kan binda mycket kapital och innebära risk.",
        },
        {
          type: "subheading",
          text: "Enskild firma",
        },
        {
          type: "paragraph",
          text: "Enklast och billigast att starta – populärt för att testa en e-handelsidé. Du och företaget är samma juridiska person, vilket betyder att du har **personligt ansvar** för företagets skulder – något att ta på allvar om du köper in lager eller spenderar på annonser. Du betalar **egenavgifter** på överskottet (28,97 % för aktiv näringsverksamhet 2026, med ett schablonavdrag på 25 % innan avgiften beräknas) och inkomsten beskattas som din lön. Passar bra när du startar ensam, i liten skala och vill komma igång snabbt.",
          source: "Skatteverket, egenavgifter 28,97 % och schablonavdrag 25 % (2026).",
        },
        {
          type: "subheading",
          text: "Aktiebolag",
        },
        {
          type: "paragraph",
          text: "Ett aktiebolag är en egen juridisk person. Ditt personliga ansvar begränsas i normalfallet till **aktiekapitalet på 25 000 kr** (lägsta tillåtna för privat AB) – en trygghet när du binder kapital i lager och annonsering. Många leverantörer, betalpartners och plattformar arbetar hellre med AB, och bolagsformen gör det enklare att ta in delägare, anställa och bygga upp ett företagsvärde. Du anställs av ditt eget bolag och tar ut lön, vilket ger jämnare skatt och tillgång till t.ex. sjukpenninggrundande inkomst.",
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
            ["Förtroende hos leverantörer/betalpartners", "Lägre", "Högre"],
            ["Administration", "Enklare bokföring", "Årsredovisning, mer formalia"],
          ],
          source: "Bolagsverket och Skatteverket (aktiekapital 25 000 kr, egenavgifter 28,97 % 2026).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Tumregel för e-handel",
          text: "Ska du testa en idé i liten skala och vill komma igång billigt – starta gärna som enskild firma. Tänker du binda kapital i lager, köra större annonsbudgetar eller skala upp – välj AB för ansvarsbegränsningens skull och för att framstå som en seriös motpart hos leverantörer och betalpartners.",
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
      title: "Konsumenträtt och krav vid e-handel",
      lead: "E-handel kräver ingen auktorisation – men konsumentlagarna är tvingande och kontrolleras av Konsumentverket.",
      blocks: [
        {
          type: "paragraph",
          text: "Det krävs **ingen branschauktorisation eller särskilt tillstånd** för att starta e-handel. Men du säljer ofta till **konsumenter**, och då gäller flera tvingande lagar du måste följa – annars riskerar du både missnöjda kunder och ingripanden från Konsumentverket. Gå igenom punkterna nedan.",
        },
        {
          type: "subheading",
          text: "F-skatt och registrering (Skatteverket)",
        },
        {
          type: "paragraph",
          text: "**F-skatt** är grunden och visar att du själv betalar din skatt. Du ansöker gratis hos **Skatteverket** via verksamt.se, samtidigt som du registrerar företaget och anmäler moms. Säljer du varor är du i praktiken nästan alltid momsregistrerad – vilket dessutom påverkar hur importmomsen hanteras (kapitel 6).",
        },
        {
          type: "subheading",
          text: "Ångerrätt och distansavtalslagen",
        },
        {
          type: "paragraph",
          text: "Vid försäljning på distans till konsument gäller **lagen om distansavtal och avtal utanför affärslokaler (2005:59)**. Konsumenten har som huvudregel **14 dagars ångerrätt** – ångerfristen börjar dagen efter att kunden tagit emot varan. Du är skyldig att **informera om ångerrätten innan** köpet; gör du inte det kan ångerfristen förlängas väsentligt. Vissa varor (t.ex. förseglade hygienartiklar som öppnats, specialtillverkat) är undantagna. **Nya regler träder i kraft 19 juni 2026**, bland annat krav på en särskild **ångerfunktion (\"ångerknapp\")** på webbplatser och i appar – kontrollera de uppdaterade kraven hos Konsumentverket.",
          source: "Konsumentverket; lag (2005:59) om distansavtal och avtal utanför affärslokaler (14 dagars ångerrätt; nya regler fr.o.m. 19 juni 2026).",
        },
        {
          type: "subheading",
          text: "Konsumentköplagen och prisinformationslagen",
        },
        {
          type: "paragraph",
          text: "**Konsumentköplagen** reglerar bland annat fel på varan och konsumentens rätt att reklamera. **Prisinformationslagen** kräver att du lämnar korrekt och tydlig prisinformation – totalpris inklusive moms, och tydlighet om frakt och andra avgifter. Du ska också ha tydliga köpvillkor och kontaktuppgifter på sajten. Följ Konsumentverkets vägledning för e-handel.",
          source: "Konsumentverket (konsumentköplagen, prisinformationslagen, krav på e-handel).",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Ingen auktorisation, ingen ROT – men hård konsumenträtt",
          text: "Till skillnad från bygg-, el- och VVS-branscherna finns ingen yrkesauktorisation, och dina varor ger varken ROT eller omfattas av omvänd byggmoms. Men konsumentlagarna är tvingande och kan inte avtalas bort till kundens nackdel. Bygg in ångerrätt, reklamation och tydlig prisinformation i din butik från dag ett.",
        },
        {
          type: "links",
          items: [
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms" },
            { label: "Konsumentverket", url: "https://www.konsumentverket.se", note: "Distansavtalslagen, ångerrätt, konsumentköplagen, prisinformation" },
            { label: "Skatteverket", url: "https://www.skatteverket.se", note: "F-skatt, moms, import, OSS" },
          ],
        },
      ],
    },

    // 4 ──────────────────────────────────────────────────────────────────
    {
      number: 4,
      title: "Startkapital och faktiska kostnader",
      lead: "Vad det faktiskt kostar att komma igång – och varför lager och annonser kan binda mer än du tror.",
      blocks: [
        {
          type: "paragraph",
          text: "Ren dropshipping kan startas billigt eftersom du inte köper lager i förväg. Lagerbaserad e-handel kräver mer kapital. I båda fallen är det ofta **annonseringen** och **returerna** som blir de stora rörliga kostnaderna. Här är de poster du bör budgetera för. Myndighetsavgifter anges som fastställda belopp; övriga poster som kostnadsslag att räkna på.",
        },
        {
          type: "table",
          columns: ["Post", "Kommentar"],
          rows: [
            ["Aktiekapital (om AB)", "25 000 kr – sätts in på företagskonto, är ditt och kan användas i driften"],
            ["Registrering AB hos Bolagsverket", "1 900 kr via e-tjänst på verksamt.se (2 200 kr med pappersblankett)"],
            ["Registrering enskild firma", "Frivillig; namnskydd kostar ca 1 000 kr (kontrollera aktuell avgift hos Bolagsverket)"],
            ["F-skatt och momsregistrering", "Gratis hos Skatteverket"],
            ["Webbutik/plattform", "Abonnemang för e-handelsplattform, tema och appar"],
            ["Lager (vid egen lagerhållning)", "Inköp av varor + ev. lagerhyra och 3PL – binder kapital"],
            ["Importmoms och tull", "Vid import från land utanför EU – moms och ev. tull/avgifter (se kapitel 6)"],
            ["Frakt och returhantering", "Frakt till kund och kostnad för returer – ofta underskattat"],
            ["Betallösning (PSP)", "Transaktions- och fasta avgifter till betalpartner"],
            ["Marknadsföring", "Annonsering (sociala medier, sök) – ofta den största rörliga kostnaden"],
          ],
          source: "Bolagsverket (1 900 kr AB e-tjänst, 25 000 kr aktiekapital); Skatteverket (F-skatt/moms gratis).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Räkna på enhetsekonomin innan du skalar",
          text: "Innan du lägger pengar på annonser – räkna igenom vad EN order faktiskt kostar och ger: varukostnad, importmoms och tull, frakt, betalavgift, andel returer och annonskostnad per försäljning. Tjänar du inte pengar på en order tjänar du inte pengar på tusen. Den uträkningen (se kapitel 8) avgör om affären håller.",
        },
      ],
    },

    // 5 ──────────────────────────────────────────────────────────────────
    {
      number: 5,
      title: "Steg-för-steg: så registrerar du företaget",
      lead: "Hela registreringsprocessen i rätt ordning – från namn till första ordern.",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Välj och kontrollera företagsnamn",
              text: "Sök på Bolagsverkets namnsöktjänst att namnet är ledigt och kontrollera att domän och sociala konton är lediga. För AB registreras namnet i samband med bolaget; för enskild firma kan du registrera och skydda namnet separat.",
            },
            {
              title: "Registrera företaget hos Bolagsverket",
              text: "AB registreras via e-tjänsten på **verksamt.se** för **1 900 kr** (stiftelseurkund, bolagsordning och bankintyg på aktiekapitalet 25 000 kr). Enskild firma behöver inte registreras, men du kan göra det för att skydda namnet.",
            },
            {
              title: "Ansök om F-skatt och momsregistrera dig",
              text: "Görs gratis via verksamt.se. Säljer du varor är du i praktiken alltid momsregistrerad – och momsregistreringen avgör hur importmomsen hanteras (kapitel 6).",
            },
            {
              title: "Ordna EORI-nummer om du importerar",
              text: "Importerar du varor från länder utanför EU behöver ditt företag normalt ett **EORI-nummer** för tullhanteringen. Ansök hos Tullverket. Klargör också om du eller din leverantör står som importör.",
            },
            {
              title: "Sätt upp betallösning och köpvillkor",
              text: "Anslut en betalpartner (PSP) och publicera tydliga köpvillkor, ångerrätt, retur- och dataskyddsinformation i butiken (kapitel 3 och 7).",
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
              title: "Öppna företagskonto och ordna bokföring",
              text: "Skaffa företagskonto (krav för AB) och bestäm bokföringslösning som klarar e-handel, import och OSS (kapitel 9) innan du tar emot första ordern.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Allt på ett ställe – nästan",
          text: "verksamt.se samlar Bolagsverket, Skatteverket och Tillväxtverket för registrering, F-skatt, moms och arbetsgivare. Tull- och importfrågor (t.ex. EORI-nummer) hanterar du separat hos Tullverket.",
          source: "verksamt.se (Bolagsverket, Skatteverket, Tillväxtverket); Tullverket (EORI och import).",
        },
      ],
    },

    // 6 ──────────────────────────────────────────────────────────────────
    {
      number: 6,
      title: "Moms och tull: e-handelns viktigaste kapitel",
      lead: "Här fälls flest nya e-handlare. Läs långsamt – och kontrollera alltid mot Skatteverket och Tullverket.",
      blocks: [
        {
          type: "paragraph",
          text: "Momsen och tullen avgör om din affär är lönsam eller går med förlust. Reglerna skiljer sig åt beroende på **var varan kommer ifrån** och **var din kund finns**. Det här kapitlet går igenom de fyra vanligaste situationerna.",
        },
        {
          type: "subheading",
          text: "1. Import från land utanför EU (t.ex. dropshipping från Kina)",
        },
        {
          type: "paragraph",
          text: "När varor förs in i EU från ett land utanför unionen ska **importmoms** betalas – **oavsett varans värde**. Momsen är normalt **25 %**, beräknad på varans värde inklusive frakt och eventuell tull. Är ditt företag **momsregistrerat** redovisar du importmomsen till **Skatteverket** i din momsdeklaration (och kan i normalfallet dra av den som ingående moms). Är du **inte** momsregistrerad betalas importmomsen i stället till **Tullverket**. Det gamla undantaget för moms på billiga försändelser finns alltså inte längre – tron att smågrejer från utlandet är \"momsfria\" är fel.",
          source: "Tullverket och Skatteverket (importmoms tas ut oavsett värde; momsregistrerad importör redovisar till Skatteverket, annars betalas till Tullverket).",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Nya tullregler från 1 juli 2026",
          text: "Från **1 juli 2026** tas tullfriheten för försändelser med ett värde under 150 euro bort vid import till EU och ersätts av en tillfällig **schablontull på 3 euro per varukategori (tulltaxenummer)** – alltså inte per paket eller per varupost. Innehåller ett paket varor ur flera olika tulltaxenummer tas 3 euro ut per kategori: ett paket med varor ur **tre olika tulltaxenummer** ger **3 x 3 = 9 euro**. Det här är beslutad EU-rätt (rådet godkände beslutet 11 februari 2026), inte längre ett förslag, och påverkar dropshipping av billiga varor direkt – en kostnad som måste in i din kalkyl. Eftersom övergången sker mitt under året: kontrollera det exakta, aktuella läget hos Tullverket innan du prissätter.",
          source: "Rådets beslut 11 februari 2026 (slopat undantag för försändelser under 150 euro + tillfällig schablontull på 3 euro per varukategori/tulltaxenummer fr.o.m. 1 juli 2026); Tullverket.",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Vem är importör – du eller kunden?",
          text: "I dropshipping är det avgörande vem som står som **importör** av varan. Skickas paketet direkt till kunden kan kunden i vissa upplägg drabbas av moms- och tullavgifter vid leverans – en mycket dålig kundupplevelse som ger returer och missnöje. Klargör i ditt upplägg och med din leverantör vem som ansvarar för import, moms och tull, och var transparent mot kunden. Kontrollera det konkreta upplägget mot Skatteverket och Tullverket.",
        },
        {
          type: "subheading",
          text: "2. Försäljning till svenska konsumenter",
        },
        {
          type: "paragraph",
          text: "Säljer du varor till kunder i Sverige tar du ut **svensk moms** (normalt 25 %; vissa varor har lägre sats – t.ex. livsmedel och böcker – kontrollera rätt sats per varugrupp hos Skatteverket). Du kan vara momsbefriad först om omsättningen är högst **120 000 kr per år** (gränsen gäller sedan 1 januari 2025), men då kan du inte dra av ingående moms, vilket sällan lönar sig för en importerande e-handel.",
          source: "Skatteverket, momsnormalsats 25 % (vissa varor lägre sats); momsbefrielse vid omsättning på högst 120 000 kr/år (fr.o.m. 1 jan 2025).",
        },
        {
          type: "subheading",
          text: "3. Försäljning till konsumenter i andra EU-länder (OSS)",
        },
        {
          type: "paragraph",
          text: "Vid **distansförsäljning av varor till privatpersoner i andra EU-länder** gäller en gemensam tröskel på **10 000 euro (99 680 kr) per år** för den samlade försäljningen. Under tröskeln kan du ta ut **svensk moms**; över tröskeln ska du ta ut **köparlandets moms**, vilket du enklast redovisar samlat via **OSS (One Stop Shop)** i stället för att momsregistrera dig i varje land. För import av försändelser med värde högst 150 euro finns en särskild ordning, **IOSS**. Reglerna är detaljerade – kontrollera mot Skatteverket.",
          source: "Skatteverket, distansförsäljning och OSS (tröskel 10 000 euro = 99 680 kr/år); IOSS för import upp till 150 euro.",
        },
        {
          type: "subheading",
          text: "4. Försäljning till företag och utanför EU",
        },
        {
          type: "paragraph",
          text: "Försäljning till **företag i andra EU-länder** (med giltigt VAT-nummer) kan vara unionsintern omsättning utan svensk moms, medan **export** till länder utanför EU normalt sker utan svensk moms men kan utlösa import i mottagarlandet. Exakt hantering beror på leveransvillkor och dokumentation – stäm av med Skatteverket och Tullverket innan du börjar sälja över gränserna.",
          source: "Skatteverket (unionsintern omsättning och export); Tullverket (exportformaliteter).",
        },
      ],
    },

    // 7 ──────────────────────────────────────────────────────────────────
    {
      number: 7,
      title: "Betallösningar, ansvar och försäkring",
      lead: "Hur du tar betalt och hanterar risk – från chargebacks till produktansvar.",
      blocks: [
        {
          type: "paragraph",
          text: "I e-handel ligger riskerna i betalflödet, i leveranskedjan och i ansvaret för produkterna du säljer. Tre saker behöver du ha ordning på: betallösningen, produktansvaret och försäkringen.",
        },
        {
          type: "subheading",
          text: "Betallösning (PSP)",
        },
        {
          type: "paragraph",
          text: "Svenska konsumenter förväntar sig flera betalsätt – kort, faktura/delbetalning och Swish hör till de vanligaste. En **betalpartner (PSP)** sköter transaktionerna mot en transaktionsavgift och ibland en fast avgift; väg in dessa i din marginalkalkyl (kapitel 8). Tänk också på **bedrägerier och chargebacks** (återförda kortbetalningar) – en kostnad som kan bita hårt vid dropshipping med långa leveranstider.",
        },
        {
          type: "subheading",
          text: "Produktansvar och produktsäkerhet",
        },
        {
          type: "paragraph",
          text: "Som säljare ansvarar du för att produkterna du säljer är säkra och uppfyller gällande krav (t.ex. CE-märkning där det krävs, kemikalie- och leksaksregler). Säljer du importerade varor kan du i praktiken få ett ansvar som liknar tillverkarens gentemot konsumenten. Sälj inte produkter du inte kan stå för – kontrollera vilka regler som gäller för dina varugrupper hos Konsumentverket, Kemikalieinspektionen och andra berörda myndigheter.",
          source: "Konsumentverket (produktsäkerhet) och berörda myndigheter beroende på varugrupp.",
        },
        {
          type: "subheading",
          text: "Försäkring",
        },
        {
          type: "list",
          items: [
            "**Företags- och produktansvarsförsäkring** – skydd om en produkt du sålt orsakar skada på person eller egendom.",
            "**Egendoms-/lagerförsäkring** – vid egen lagerhållning, mot brand, vatten och stöld.",
            "**Cyber-/dataförsäkring** – relevant eftersom du hanterar kunddata och betalflöden online.",
            "**Avbrottsförsäkring** – ekonomiskt skydd om driften eller försäljningen stoppas.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Returer är en del av affären – planera för dem",
          text: "Med 14 dagars ångerrätt och konsumentköplagens reklamationsrätt kommer returer alltid att finnas. Ha en tydlig, enkel returprocess och räkna in returandelen i din marginal. En smidig returhantering är dessutom ett konkurrensmedel som bygger förtroende.",
        },
      ],
    },

    // 8 ──────────────────────────────────────────────────────────────────
    {
      number: 8,
      title: "Prissättning och marginaler",
      lead: "Så räknar du så att det blir vinst kvar efter moms, tull, frakt, returer och annonser.",
      blocks: [
        {
          type: "paragraph",
          text: "Den vanligaste orsaken till att nya e-handlare förlorar pengar är inte brist på försäljning – det är för tunna marginaler. I e-handel måste priset täcka betydligt mer än varukostnaden. Räkna igenom **enhetsekonomin** för en enskild order innan du skalar upp annonseringen.",
        },
        {
          type: "subheading",
          text: "Vad priset måste täcka",
        },
        {
          type: "list",
          items: [
            "**Varukostnad** – inköpspris från leverantören.",
            "**Importmoms och tull** – vid import från land utanför EU (kapitel 6); från 1 juli 2026 även schablontull på 3 euro per varukategori (tulltaxenummer) på tidigare tullfria låga värden.",
            "**Frakt** – både inleverans och frakt till kund.",
            "**Betalavgifter** – transaktions- och fasta avgifter till PSP.",
            "**Returer** – en andel av ordrarna returneras; kostnaden ska fördelas på alla.",
            "**Annonskostnad per försäljning** – ofta den största posten; mät den faktiska kostnaden att skaffa en kund.",
            "**Din lön, fasta kostnader och vinst** – plattform, appar, administration och en marginal att växa på.",
          ],
        },
        {
          type: "callout",
          variant: "fact",
          title: "Täckningsbidrag före annonser – nyckeltalet",
          text: "Räkna ut vad som blir kvar av priset (exkl. moms) efter varukostnad, frakt, betalavgift och returandel. Det är pengarna du har att lägga på annonsering och vinst. Är den summan för liten finns ingen lönsam annonsering – då måste du höja priset, sänka varukostnaden eller byta produkt. Gör uträkningen per produkt innan du satsar annonsbudget.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Visa rätt pris – och följ prisinformationslagen",
          text: "Ange alltid totalpris inklusive moms och var tydlig med fraktkostnad och eventuella avgifter innan kunden slutför köpet. Otydliga priser och dolda avgifter strider mot prisinformationslagen och ökar dessutom andelen avbrutna köp och returer.",
          source: "Konsumentverket, prisinformationslagen.",
        },
      ],
    },

    // 9 ──────────────────────────────────────────────────────────────────
    {
      number: 9,
      title: "Bokföring och skatt",
      lead: "Löpande ordning i ekonomin – och det e-handlare ofta gör fel med moms, import och lager.",
      blocks: [
        {
          type: "paragraph",
          text: "Alla företag är enligt bokföringslagen skyldiga att löpande bokföra sina affärshändelser och spara underlag. E-handel ger ofta många transaktioner, utländska inköp och flera momsflöden – det gör ett bokföringsprogram med e-handelsstöd, eller en redovisningsbyrå, väl värt pengarna.",
        },
        {
          type: "subheading",
          text: "Moms, import och OSS i bokföringen",
        },
        {
          type: "paragraph",
          text: "Håll isär de olika momsflödena från kapitel 6: svensk försäljning, importmoms, OSS-försäljning till andra EU-länder och eventuell export. Importmomsen ska redovisas rätt i momsdeklarationen när du är momsregistrerad. Ett system som hanterar import och OSS och kan stämmas av mot din betalpartner och plattform sparar mycket tid och minskar felrisken.",
          source: "Skatteverket, redovisning av importmoms och OSS.",
        },
        {
          type: "subheading",
          text: "Lager och varukostnad",
        },
        {
          type: "paragraph",
          text: "Har du eget lager ska varulagret värderas och periodiseras rätt – varukostnaden bokförs när varan säljs, inte enbart när den köps in. Det påverkar ditt resultat och din skatt. Vid ren dropshipping är detta enklare eftersom du inte håller lager, men du behöver ändå stämma av inköp, frakt och importkostnader mot försäljningen.",
        },
        {
          type: "subheading",
          text: "F-skatt och preliminärskatt",
        },
        {
          type: "paragraph",
          text: "Med **F-skatt** betalar du själv in din skatt och dina egenavgifter (enskild firma) eller bolagets skatt (AB). Skatteverket beslutar en **preliminärskatt** som du betalar månadsvis utifrån din uppskattade vinst. Eftersom e-handel kan svänga snabbt – justera prognosen hos Skatteverket när omsättningen ändras.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Spara alla underlag – även de utländska",
          text: "Inköpsfakturor, tull- och importdokument, fraktunderlag och avräkningar från betalpartner och plattform ska sparas enligt bokföringslagen. Vid import och utlandsförsäljning är ordnad dokumentation helt avgörande för att kunna redovisa moms och tull rätt – och ditt bästa skydd vid en kontroll.",
        },
      ],
    },

    // 10 ─────────────────────────────────────────────────────────────────
    {
      number: 10,
      title: "Att växa och att anställa",
      lead: "Från enmansbutik till team: avgifter, automatisering och vad du behöver innan du anställer.",
      blocks: [
        {
          type: "paragraph",
          text: "E-handel kan skalas långt innan du behöver anställa – mycket kan automatiseras eller läggas ut (lager via tredjepartslogistik, kundtjänst, bokföring). Men när volymen växer kommer ofta behovet av personal för kundtjänst, inköp och marknadsföring.",
        },
        {
          type: "subheading",
          text: "Arbetsgivaravgifter",
        },
        {
          type: "paragraph",
          text: "Utöver lönen betalar du **arbetsgivaravgifter**. Normalsatsen 2026 är **31,42 %** av bruttolönen. På en månadslön på 32 000 kr betyder det runt 10 000 kr i arbetsgivaravgift utöver lönen – budgetera för det i din marginalkalkyl (kapitel 8). Vissa nedsättningar kan finnas i särskilda fall; kontrollera aktuella regler hos Skatteverket.",
          source: "Skatteverket, arbetsgivaravgift normalsats 31,42 % (2026).",
        },
        {
          type: "subheading",
          text: "Lägg ut innan du anställer",
        },
        {
          type: "paragraph",
          text: "Innan en fast anställning – överväg att lägga ut funktioner: **tredjepartslogistik (3PL)** för lager och frakt, **frilansare** för annonser och innehåll, och **redovisningsbyrå** för moms och bokföring. Det håller de fasta kostnaderna nere och låter dig växa i takt med försäljningen. Anlitar du frilansare, kontrollera att de har **F-skatt** så att du inte blir skyldig att betala arbetsgivaravgifter.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Kundtjänst är en tillväxtfråga",
          text: "I e-handel är snabb och tydlig kundtjänst – särskilt kring leveranstider och returer – direkt kopplad till omdömen, återköp och färre chargebacks. Sätt rutiner och svarstider tidigt; det är ofta det första du behöver avlasta dig själv från när volymen ökar.",
        },
      ],
    },

    // 11 ─────────────────────────────────────────────────────────────────
    {
      number: 11,
      title: "Vanliga misstag och fallgropar",
      lead: "De dyraste nybörjarfelen i e-handel och dropshipping – och hur du undviker dem.",
      blocks: [
        {
          type: "list",
          items: [
            "**Tro att import är momsfritt.** Importmoms tas ut oavsett varans värde. Räkna in den – och från 1 juli 2026 även schablontullen på 3 euro per varukategori (tulltaxenummer) på tidigare tullfria låga värden – i ditt pris från början.",
            "**Oklart vem som är importör.** Att låta kunden drabbas av oväntade moms-/tullavgifter vid leverans ger returer och dåliga omdömen. Klargör ansvaret i ditt upplägg.",
            "**Fel moms vid utlandsförsäljning.** Att missa OSS-tröskeln (10 000 euro/99 680 kr) eller ta ut fel lands moms. Kontrollera mot Skatteverket.",
            "**Strunta i ångerrätt och konsumenträtt.** 14 dagars ångerrätt och reklamationsrätt är tvingande. Saknad information kan förlänga ångerfristen väsentligt; nya krav (ångerknapp) gäller från 19 juni 2026.",
            "**För tunna marginaler.** Att skala annonser på en order som inte är lönsam efter alla kostnader. Räkna enhetsekonomin först (kapitel 8).",
            "**Glömma returkostnaden.** Returer är en garanterad kostnad i e-handel – fördela den på alla ordrar i kalkylen.",
            "**Otydlig prisinformation.** Dolda fraktavgifter och oklara totalpriser strider mot prisinformationslagen och ökar avhopp.",
            "**Sälja osäkra produkter.** Importerade varor utan rätt märkning/säkerhet kan ge produktansvar. Sälj bara det du kan stå för.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Det dyraste felet är att gissa – särskilt om momsen",
          text: "Moms- och tullreglerna vid import och EU-försäljning är den vanligaste och dyraste fällan i e-handel, och de ändras (bl.a. nya tullregler 1 juli 2026). Bygg en vana att kontrollera aktuell uppgift hos Skatteverket och Tullverket innan du prissätter eller säljer över gränserna – och spara dokumentationen.",
        },
      ],
    },

    // 12 ─────────────────────────────────────────────────────────────────
    {
      number: 12,
      title: "Marknadsföring och dina första kunder",
      lead: "Så får du de första ordrarna och bygger en butik som säljer om och om igen.",
      blocks: [
        {
          type: "paragraph",
          text: "I e-handel kommer trafiken sällan av sig själv – du måste aktivt skapa den, och göra det lönsamt. Det viktigaste i början är att hitta en kanal som ger fler intäkter än den kostar, och att bygga förtroende så att besökare vågar köpa av en ny butik. Här är de kanaler som ger mest för en nystartad e-handel.",
        },
        {
          type: "list",
          items: [
            "**Betald annonsering.** Sociala medier och sök ger snabb trafik – men mät kostnaden per försäljning mot din marginal (kapitel 8) och skala bara det som är lönsamt.",
            "**SEO och innehåll.** Sökoptimerade produkt- och guidesidor ger trafik som inte kostar per klick på sikt – en långsiktig grund.",
            "**Sociala medier och kortvideo.** Produkter som syns i flöden kan spridas organiskt; visa produkten i användning.",
            "**E-post och retargeting.** Fånga e-postadresser och påminn om varukorgar – återkommande köp är billigare än nya.",
            "**Omdömen och förtroende.** Tydliga villkor, recensioner, säkra betalsätt och kontaktuppgifter gör att besökare vågar handla av en ny butik.",
            "**Marknadsplatser.** Att sälja via etablerade plattformar kan ge de första ordrarna och volym medan du bygger din egen butik.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Visa att du är seriös",
          text: "Tydlig prisinformation, ångerrätt och returvillkor, säkra betalsätt och svensk kundtjänst är inte bara lagkrav – de är säljargument som får besökare att våga köpa av en okänd butik. Lyft fram dem tydligt i kassan och på sajten.",
        },
      ],
    },

    // 13 ─────────────────────────────────────────────────────────────────
    {
      number: 13,
      title: "Komplett checklista",
      lead: "Allt på ett ställe. Kryssa av i tur och ordning innan du tar emot första ordern.",
      blocks: [
        {
          type: "subheading",
          text: "Innan start",
        },
        {
          type: "checklist",
          items: [
            "Valt bolagsform (enskild firma eller AB) utifrån ansvar, skatt och kapitalbehov",
            "Kontrollerat företagsnamn hos Bolagsverket och säkrat domän/sociala konton",
            "Registrerat företaget (AB: 1 900 kr e-tjänst, aktiekapital 25 000 kr insatt)",
            "Ansökt om F-skatt och momsregistrerat företaget",
            "Skaffat EORI-nummer hos Tullverket om du importerar",
            "Anmält verklig huvudman (AB) och öppnat företagskonto",
          ],
        },
        {
          type: "subheading",
          text: "Moms, tull och konsumenträtt",
        },
        {
          type: "checklist",
          items: [
            "Förstått att importmoms tas ut oavsett varans värde (kapitel 6)",
            "Klargjort vem som är importör och vem som bär moms/tull i dropshipping-upplägget",
            "Kontrollerat de nya tullreglerna fr.o.m. 1 juli 2026 hos Tullverket (schablontull 3 euro per varukategori/tulltaxenummer)",
            "Klargjort OSS/IOSS för försäljning till andra EU-länder (tröskel 10 000 euro)",
            "Publicerat ångerrätt (14 dagar), reklamation och tydlig prisinformation",
            "Förberett ångerfunktion enligt nya reglerna fr.o.m. 19 juni 2026",
          ],
        },
        {
          type: "subheading",
          text: "Ekonomi, betalning och risk",
        },
        {
          type: "checklist",
          items: [
            "Räknat enhetsekonomin per order (vara, moms/tull, frakt, betalavgift, returer, annons)",
            "Anslutit betallösning (PSP) och planerat för chargebacks",
            "Tecknat produktansvars- och ev. lager-/cyberförsäkring",
            "Säkerställt att produkterna uppfyller säkerhets-/märkningskrav",
            "Valt bokföringslösning som hanterar import och OSS",
          ],
        },
        {
          type: "subheading",
          text: "Innan första ordern",
        },
        {
          type: "checklist",
          items: [
            "Satt upp webbutik med villkor, retur- och dataskyddsinformation",
            "Satt rutin för kundtjänst, leveranstider och returer",
            "Valt och testat en lönsam första marknadsföringskanal",
            "Säkerställt likviditet för lager, annonser och importkostnader",
          ],
        },
      ],
    },

    // 14 ─────────────────────────────────────────────────────────────────
    {
      number: 14,
      title: "Resurser och myndighetskontakter",
      lead: "Spara den här sidan – här kontrollerar du aktuella moms-, tull- och konsumentregler.",
      blocks: [
        {
          type: "paragraph",
          text: "Moms- och tullreglerna vid import och e-handel uppdateras – inte minst de nya tullreglerna under 2026. Använd länkarna nedan för att kontrollera aktuell uppgift direkt hos källan innan du prissätter, importerar eller säljer över gränserna.",
        },
        {
          type: "links",
          items: [
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare – allt på ett ställe" },
            { label: "Skatteverket", url: "https://www.skatteverket.se", note: "Moms, importmoms, OSS/IOSS, försäljning inom och utanför EU" },
            { label: "Tullverket", url: "https://www.tullverket.se", note: "Import, tull, EORI, lågvärdeförsändelser och regler fr.o.m. 1 juli 2026" },
            { label: "Bolagsverket", url: "https://www.bolagsverket.se", note: "Registrering, avgifter, namn, verklig huvudman" },
            { label: "Konsumentverket", url: "https://www.konsumentverket.se", note: "Distansavtalslagen, ångerrätt, konsumentköplagen, prisinformation, produktsäkerhet" },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Vill du bolla ditt upplägg med en rådgivare?",
          text: "Den här guiden tar dig långt på egen hand. Vill du dubbelkolla val av bolagsform, moms vid import och EU-försäljning eller konsumenträtt med en expert kan vi matcha dig med en rådgivare kostnadsfritt på driva-foretag.se/hitta-radgivare.",
        },
      ],
    },
  ],
};

export default dropshipping;
