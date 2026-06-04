import type { GuideContent } from "./types";

// ──────────────────────────────────────────────────────────────────────────
// STARTGUIDE: VVS-FÖRETAG
//
// YMYL – faktagranskad mot primärkälla. Verifierade uppgifter (juni 2026):
//  • Aktiekapital privat AB: 25 000 kr (Bolagsverket)
//  • AB-nyregistrering: 1 900 kr e-tjänst / 2 200 kr blankett (Bolagsverket)
//  • Momsbefrielse-gräns: omsättning ≤ 120 000 kr/år (Skatteverket, fr.o.m.
//    1 jan 2025); moms normalsats 25 %
//  • Omvänd byggmoms: köparen redovisar momsen – ML (2023:200) 16 kap. 13 §
//  • ROT-avdrag 2026: 30 % av arbetskostnaden, max 50 000 kr/person/år; ROT+RUT
//    max 75 000 kr/person/år (Skatteverket; tillfälliga 50 % gällde 12 maj–
//    31 dec 2025 och har upphört)
//  • Arbetsgivaravgift 2026: 31,42 %; egenavgifter 28,97 % + schablonavdrag 25 %
//  • Personalliggare bygg: 12 500 kr + 2 500 kr/oregistrerad person; 25 000 kr om
//    byggstart ej anmälts (Skatteverket). VVS på byggarbetsplats omfattas av
//    byggets personalliggare.
//  • Säker Vatten-auktorisation är FRIVILLIG branschauktorisation – INTE lagkrav.
//    Krävs dock i praktiken av försäkringsbolag, kommuner och större beställare
//    för att arbetet ska räknas fackmässigt. (Säker Vatten AB.)
//  • Nya Branschregler Säker Vatteninstallation 2026:1 gäller fr.o.m. 1 jan 2026
//    (ersätter 2021:2; reglerna släpptes 1 okt 2025). Auktoriserat företag ska
//    ha minst en heltidsanställd VVS-montör med branschcertifikat/validering;
//    montörer/lärlingar ska ha branschlegitimation (giltig 5 år). Sex månaders
//    prövotid för nyauktoriserade företag. (Säker Vatten AB.)
//  • F-skatt: registrering gratis hos Skatteverket via verksamt.se
//
// Där en exakt siffra inte gått att verifiera mot primärkälla skrivs den
// kvalitativt ("kontrollera aktuell uppgift hos …") – aldrig gissad.
// ──────────────────────────────────────────────────────────────────────────

const vvsforetag: GuideContent = {
  slug: "vvsforetag",
  industry: "VVS-företag",
  title: "Starta & driva VVS-företag",
  subtitle: "Komplett startguide 2026",
  year: 2026,
  reviewedAt: "2026-06-04",
  reviewedSources: "Skatteverket, Bolagsverket, Säker Vatten & Arbetsmiljöverket",
  intro:
    "Den kompletta, faktagranskade guiden för dig som ska starta VVS-företag i Sverige – från bolagsform, F-skatt och Säker Vatten-auktorisation till omvänd byggmoms, ROT-avdrag, försäkringar, prissättning och din första kund. Varje siffra är kontrollerad mot Skatteverket, Bolagsverket och Säker Vatten.",

  chapters: [
    // 1 ──────────────────────────────────────────────────────────────────
    {
      number: 1,
      title: "Att driva VVS-företag i Sverige",
      lead: "Vad branschen kräver av dig som företagare – och vad som gör den lönsam.",
      blocks: [
        {
          type: "paragraph",
          text: "VVS är en av de mest efterfrågade hantverksbranscherna i Sverige – varje bostad, lokal och fastighet behöver värme, vatten och avlopp som fungerar, och behovet av reparationer, renoveringar och nyinstallationer är stabilt över konjunkturen. Samtidigt är det en bransch där en felaktig installation kan leda till vattenskador för hundratusentals kronor. Därför ställer både försäkringsbolag och beställare höga krav på att arbetet utförs fackmässigt – och den som förstår de kraven från start får ett tydligt försprång.",
        },
        {
          type: "paragraph",
          text: "Med **VVS-företag** menar vi i den här guiden företag som installerar, reparerar och underhåller värme-, ventilations- och sanitetssystem – allt från enmans rörfirma som byter blandare och installerar badrum åt privatpersoner till bolag som tar totalentreprenader åt byggföretag och fastighetsägare. Reglerna i guiden gäller i grunden lika oavsett storlek, men ju större uppdrag och ju fler du anlitar, desto mer ansvar landar på dig.",
        },
        {
          type: "paragraph",
          text: "Tre saker präglar VVS-branschen när du startar: **Säker Vatten-auktorisationen** (en frivillig men i praktiken nödvändig branschauktorisation som försäkringsbolag och beställare kräver), **momsreglerna** (omvänd byggmoms mellan företag, 25 % och ROT-avdrag mot privatpersoner) och **det stora skadeansvaret** vid vattenskador. De tre är genomgående teman i guiden.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Så använder du guiden",
          text: "Läs kapitel 1–6 innan du tar din första kund – de avgör bolagsform, auktorisation och hur du hanterar momsen rätt. Kapitel 7–12 är drift: försäkring, pris, bokföring, anställda och marknadsföring. Kapitel 13 är en komplett checklista du kan kryssa av, och kapitel 14 samlar alla myndighetskontakter med länkar.",
        },
      ],
    },

    // 2 ──────────────────────────────────────────────────────────────────
    {
      number: 2,
      title: "Välj bolagsform: enskild firma eller aktiebolag",
      lead: "Valet påverkar ditt personliga ansvar, din skatt och hur beställare ser på dig.",
      blocks: [
        {
          type: "paragraph",
          text: "För de flesta VVS-företag står valet mellan **enskild näringsverksamhet** (enskild firma) och **aktiebolag (AB)**. Båda går utmärkt att driva VVS i – men de skiljer sig åt på fyra punkter som spelar extra stor roll i en bransch med dyra materialinköp och risk för stora skadeståndskrav: personligt ansvar, kapitalkrav, skatt och förtroende hos beställare.",
        },
        {
          type: "subheading",
          text: "Enskild firma",
        },
        {
          type: "paragraph",
          text: "Enklast och billigast att starta. Du och företaget är samma juridiska person, vilket betyder att du har **personligt ansvar** för företagets skulder – något att ta på allvar i en bransch där en vattenskada kan bli mycket dyr. Du betalar **egenavgifter** på överskottet (28,97 % för aktiv näringsverksamhet 2026, med ett schablonavdrag på 25 % innan avgiften beräknas) och inkomsten beskattas som din lön. Passar bra när du är ensam, har låg risk och vill komma igång snabbt.",
          source: "Skatteverket, egenavgifter 28,97 % och schablonavdrag 25 % (2026).",
        },
        {
          type: "subheading",
          text: "Aktiebolag",
        },
        {
          type: "paragraph",
          text: "Ett aktiebolag är en egen juridisk person. Ditt personliga ansvar begränsas i normalfallet till **aktiekapitalet på 25 000 kr** (lägsta tillåtna för privat AB) – en viktig trygghet när du tar på dig större installationer med stort skadeansvar. Många byggföretag, fastighetsägare och offentliga upphandlingar arbetar hellre med AB, och bolagsformen gör det enklare att ta in delägare, anställa montörer och bygga upp ett företagsvärde. Du anställs av ditt eget bolag och tar ut lön, vilket ger jämnare skatt och tillgång till t.ex. sjukpenninggrundande inkomst.",
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
            ["Förtroende hos stora beställare", "Lägre", "Högre"],
            ["Administration", "Enklare bokföring", "Årsredovisning, mer formalia"],
          ],
          source: "Bolagsverket och Skatteverket (aktiekapital 25 000 kr, egenavgifter 28,97 % 2026).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Tumregel för VVS-företag",
          text: "Ska du jobba ensam med mindre service- och reparationsjobb åt privatpersoner och vill komma igång billigt – börja som enskild firma och ombilda till AB när omsättningen växer. Ska du ta större entreprenader, jobba mot byggföretag eller anställa montörer – välj AB direkt för ansvarsbegränsningens skull.",
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
      title: "Tillstånd, behörigheter och Säker Vatten-auktorisation",
      lead: "VVS har inget generellt yrkestillstånd – men auktorisationen som försäkringsbolagen kräver är i praktiken avgörande.",
      blocks: [
        {
          type: "paragraph",
          text: "Det finns inget statligt \"VVS-tillstånd\" du måste ha för att starta – men det finns en rad krav och en branschauktorisation som i praktiken avgör vilka uppdrag du får. Gå igenom listan nedan och bocka av det som rör din verksamhet.",
        },
        {
          type: "subheading",
          text: "F-skatt och registrering (Skatteverket)",
        },
        {
          type: "paragraph",
          text: "**F-skatt** är grunden. Den visar att du själv betalar din skatt och dina egenavgifter, och i praktiken kräver alla seriösa beställare att din firma har F-skatt innan de anlitar dig. Du ansöker gratis hos **Skatteverket** via verksamt.se, samtidigt som du registrerar företaget och anmäler moms (samt arbetsgivare om du ska anställa).",
        },
        {
          type: "subheading",
          text: "Säker Vatten-auktorisation – frivillig men i praktiken nödvändig",
        },
        {
          type: "paragraph",
          text: "**Säker Vatten-auktorisation** är en **frivillig branschauktorisation** – det är alltså **inget lagkrav** för att driva VVS-företag. Men den fungerar i praktiken som en biljett till marknaden: **försäkringsbolag, kommuner, bostadsrättsföreningar och större beställare** kräver normalt ett auktoriserat VVS-företag för att installationen ska räknas som fackmässigt utförd. Görs ett vattenskadearbete av ett icke-auktoriserat företag kan en framtida vattenskada bli svår att få ersatt. Auktorisationen administreras av branschorganet Säker Vatten AB.",
          source: "Säker Vatten AB (auktorisationen är frivillig, inte lagstadgad, men krävs i praktiken av försäkringsbolag och beställare).",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Nya Branschregler Säker Vatteninstallation 2026:1",
          text: "Från **1 januari 2026** gäller de nya **Branschreglerna Säker Vatteninstallation 2026:1**, som ersätter 2021:2. Arbeten som påbörjas efter den 1 januari 2026 ska följa 2026:1. Ett auktoriserat VVS-företag ska bland annat ha **minst en heltidsanställd VVS-montör med branschcertifikat eller validering**, och montörer och lärlingar som utför arbetet ska ha **branschlegitimation** (giltig i fem år). För nyauktoriserade företag införs en sex månaders prövotid. Kontrollera de exakta kraven och hur du ansöker hos Säker Vatten.",
          source: "Säker Vatten AB, Branschregler Säker Vatteninstallation 2026:1 (gäller fr.o.m. 1 jan 2026).",
        },
        {
          type: "subheading",
          text: "Personalliggare på byggarbetsplatser (Skatteverket)",
        },
        {
          type: "paragraph",
          text: "Utför du VVS-arbete på en **byggarbetsplats** omfattas du normalt av byggets krav på **elektronisk personalliggare** – en löpande förteckning över vilka som är verksamma på platsen, som branschen i praktiken sköter via **ID06**. Saknas eller är liggaren felaktig kan Skatteverket ta ut en kontrollavgift på **12 500 kr** plus **2 500 kr per oregistrerad person**, och **25 000 kr** om byggstart inte anmälts. Säkerställ rutinen innan du tar uppdrag på byggen.",
          source: "Skatteverket, personalliggare i byggbranschen (skatteförfarandelagen).",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Angränsande behörigheter",
          text: "Vissa moment kräver särskild behörighet hos andra myndigheter: **elinstallation** (t.ex. inkoppling av elpanna eller varmvattenberedare) kräver att arbetet utförs av ett företag registrerat hos **Elsäkerhetsverket**, **heta arbeten** kräver behörighetsutbildning, och arbete med **köldmedier** (kyla/värmepump) kräver certifiering. Tar du in sådana moment – skaffa rätt behörighet eller anlita behörig underentreprenör innan arbetet påbörjas.",
        },
        {
          type: "links",
          items: [
            { label: "Skatteverket – F-skatt och personalliggare", url: "https://www.skatteverket.se", note: "F-skatt, moms, personalliggare byggbranschen" },
            { label: "Säker Vatten", url: "https://www.sakervatten.se", note: "Branschregler 2026:1, auktorisation och branschlegitimation" },
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare" },
            { label: "Elsäkerhetsverket", url: "https://www.elsakerhetsverket.se", note: "Registrering för elinstallationsarbete" },
          ],
        },
      ],
    },

    // 4 ──────────────────────────────────────────────────────────────────
    {
      number: 4,
      title: "Startkapital och faktiska kostnader",
      lead: "Vad det faktiskt kostar att komma igång – och vilka utgifter som återkommer.",
      blocks: [
        {
          type: "paragraph",
          text: "VVS-företag är mer kapitalkrävande att starta än många tjänsteföretag, eftersom verktyg, fordon, lager och försäkringar kostar pengar innan första fakturan är betald. Här är de poster du bör budgetera för. Myndighetsavgifter anges som fastställda belopp; övriga poster anges som typiska kostnadsslag att räkna på, eftersom priserna varierar med leverantör och omfattning.",
        },
        {
          type: "table",
          columns: ["Post", "Kommentar"],
          rows: [
            ["Aktiekapital (om AB)", "25 000 kr – sätts in på företagskonto, är ditt och kan användas i driften"],
            ["Registrering AB hos Bolagsverket", "1 900 kr via e-tjänst på verksamt.se (2 200 kr med pappersblankett)"],
            ["Registrering enskild firma", "Frivillig; namnskydd kostar ca 1 000 kr (kontrollera aktuell avgift hos Bolagsverket)"],
            ["F-skatt och momsregistrering", "Gratis hos Skatteverket"],
            ["Säker Vatten-auktorisation och utbildning", "Avgift för auktorisation samt utbildning/branschlegitimation – kontrollera aktuella belopp hos Säker Vatten"],
            ["Verktyg och maskiner", "Pressverktyg, svets, kärnborr, kamera m.m. – en stor startpost"],
            ["Servicebil och lager", "Köp eller leasing + inredning, drivmedel, försäkring; lager av rördelar och förbrukning"],
            ["Försäkringar", "Ansvars-, allrisk- och fordonsförsäkring (se kapitel 7)"],
            ["ID06-kort", "Kostnad per kort/person vid arbete på byggarbetsplatser"],
            ["Arbetskläder och skydd", "Personlig skyddsutrustning enligt arbetsmiljökraven"],
          ],
          source: "Bolagsverket (1 900 kr AB e-tjänst, 25 000 kr aktiekapital); Skatteverket (F-skatt/moms gratis).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Aktiekapitalet är inte borta",
          text: "Många tror att aktiekapitalet är en avgift. Det är det inte – de 25 000 kronorna är fortfarande dina och kan användas till att köpa verktyg, betala material eller täcka löpande kostnader så snart bolaget är registrerat. Det ska bara finnas vid starten.",
        },
        {
          type: "paragraph",
          text: "**Likviditet är viktigare än vinst i början.** I VVS ligger du ofta ute med material och lön innan kunden betalar, särskilt vid ROT-jobb där en del av betalningen kommer från Skatteverket i efterhand. Planera för att ha pengar att röra dig med i minst de första månaderna, och använd gärna a contofakturering vid längre projekt (se kapitel 6 och 8).",
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
              text: "Sök på Bolagsverkets namnsöktjänst att namnet är ledigt. För AB registreras namnet i samband med bolaget; för enskild firma kan du registrera och skydda namnet separat.",
            },
            {
              title: "Registrera företaget hos Bolagsverket",
              text: "AB registreras via e-tjänsten på **verksamt.se** för **1 900 kr**. Du laddar upp stiftelseurkund, bolagsordning och bankintyg på att aktiekapitalet (25 000 kr) är insatt. Enskild firma behöver inte registreras, men du kan göra det för att skydda namnet.",
            },
            {
              title: "Ansök om F-skatt hos Skatteverket",
              text: "Görs gratis via verksamt.se, ofta i samma flöde. F-skatt är ett krav i praktiken för att få uppdrag i VVS-branschen. Räkna med någon till några veckors handläggning.",
            },
            {
              title: "Momsregistrera dig",
              text: "Anmäl moms i samma ärende. Säljer du VVS-tjänster är du i praktiken alltid momsregistrerad. (Befrielse är möjlig först om omsättningen är högst 120 000 kr/år – se kapitel 6.)",
            },
            {
              title: "Ansök om Säker Vatten-auktorisation",
              text: "Vill du (vilket du i praktiken behöver) utföra arbeten som försäkringsbolag och beställare godtar – ansök om auktorisation hos Säker Vatten och se till att rätt personal har branschcertifikat/branschlegitimation enligt Branschregler 2026:1.",
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
              title: "Öppna företagskonto, teckna försäkring och ordna bokföring",
              text: "Skaffa företagskonto (krav för AB), teckna ansvars- och övriga försäkringar (kapitel 7), beställ ID06-kort vid behov och bestäm bokföringslösning (kapitel 9) innan du tar första uppdraget.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Allt på ett ställe",
          text: "verksamt.se är myndigheternas gemensamma e-tjänst (Bolagsverket, Skatteverket och Tillväxtverket). Du kan registrera företag, ansöka om F-skatt, momsregistrera dig och anmäla arbetsgivare i samma inloggade flöde. Auktorisationen söker du separat hos Säker Vatten.",
          source: "verksamt.se (Bolagsverket, Skatteverket, Tillväxtverket).",
        },
      ],
    },

    // 6 ──────────────────────────────────────────────────────────────────
    {
      number: 6,
      title: "Moms i VVS-branschen: omvänd byggmoms och ROT",
      lead: "De två momsreglerna som styr hur du fakturerar – och som du måste få rätt.",
      blocks: [
        {
          type: "paragraph",
          text: "Momsen är där nya VVS-företagare oftast gör fel. Två regler styr: **omvänd byggmoms** (mellan byggföretag) och **ROT-avdraget** (mot privatpersoner). Vilken som gäller avgörs av vem du säljer till.",
        },
        {
          type: "subheading",
          text: "Omvänd byggmoms (försäljning mellan företag i byggsektorn)",
        },
        {
          type: "paragraph",
          text: "När du säljer **byggtjänster** – och VVS-installation räknas som byggtjänst – **till ett annat företag som i sin tur säljer byggtjänster** gäller omvänd skattskyldighet: **köparen** redovisar och betalar momsen till Skatteverket, inte du som säljare. På din faktura anger du beloppet **utan moms** och hänvisar till att omvänd skattskyldighet gäller (t.ex. \"Omvänd skattskyldighet för byggtjänster\"). Det är en **tvingande regel** – du får alltså inte lägga på moms i dessa fall.",
          source: "Skatteverket och mervärdesskattelagen (2023:200) 16 kap. 13 §.",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Privatperson eller byggföretag – det avgör momsen",
          text: "Säljer du VVS-tjänst till en **privatperson**: lägg på **normal moms 25 %**. Säljer du byggtjänst till ett **byggföretag** som omsätter byggtjänster: **omvänd byggmoms** – fakturera utan moms, köparen redovisar den. Att blanda ihop dessa är det vanligaste momsfelet i branschen.",
          source: "Skatteverket; mervärdesskattelagen (2023:200) 16 kap. 13 §; momssats 25 %.",
        },
        {
          type: "subheading",
          text: "ROT-avdrag (försäljning till privatperson)",
        },
        {
          type: "paragraph",
          text: "ROT-avdraget gör dina tjänster billigare för privatpersoner och är ett av VVS-företagets bästa säljargument. Kunden får skattereduktion på **arbetskostnaden** (inte material). För **2026 är avdraget 30 % av arbetskostnaden**, upp till **50 000 kr per person och år**. ROT och RUT räknas ihop till sammanlagt **högst 75 000 kr per person och år**.",
          source: "Skatteverket, ROT-avdrag 2026.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Den tillfälliga höjningen till 50 % har upphört",
          text: "Under perioden **12 maj–31 december 2025** var rotavdraget tillfälligt höjt till 50 %. Den höjningen gäller **inte längre** – från **1 januari 2026** är avdraget tillbaka på ordinarie **30 %**. Lova aldrig kunden 50 % för arbete som betalas 2026.",
          source: "Regeringen och Skatteverket (tillfällig höjning 12 maj–31 dec 2025).",
        },
        {
          type: "paragraph",
          text: "Praktiskt fungerar ROT som en **fakturamodell**: du drar av kundens skattereduktion direkt på fakturan, kunden betalar mellanskillnaden, och du begär resten från Skatteverket. För att det ska fungera måste du **specificera arbetskostnaden separat** från materialet, kunden måste **äga bostaden** och ha tillräckligt skatteutrymme, och du behöver kundens personnummer och fastighets-/bostadsuppgifter. Dubbelkolla alltid utrymmet – får du avslag från Skatteverket riskerar du att stå för mellanskillnaden.",
        },
      ],
    },

    // 7 ──────────────────────────────────────────────────────────────────
    {
      number: 7,
      title: "Försäkringar du faktiskt behöver",
      lead: "Rätt skydd är ofta ett krav från beställaren – och helt avgörande i en bransch med stort vattenskadeansvar.",
      blocks: [
        {
          type: "paragraph",
          text: "VVS är en av de branscher där försäkring inte är valfritt i praktiken: en enda felaktig installation kan orsaka en vattenskada som kostar hundratusentals kronor, och många beställare kräver att du kan visa giltig ansvarsförsäkring innan du får börja. Lika viktigt är att skyddet faktiskt täcker den typ av arbete du utför – läs villkoren, inte bara priset.",
        },
        {
          type: "list",
          items: [
            "**Företagsförsäkring med ansvarsförsäkring** – täcker skador du orsakar på kundens egendom eller på tredje person, t.ex. en vattenskada efter en läckande koppling. Ofta ett krav för att ens få uppdraget. Kontrollera att försäkringsbeloppet räcker.",
            "**Allriskförsäkring / entreprenadförsäkring** – skyddar själva entreprenaden, material och arbete mot t.ex. brand, vatten, stöld och skadegörelse under byggtiden.",
            "**Fordonsförsäkring** – trafikförsäkring är lagstadgad; lägg till halv-/helförsäkring för servicebilen samt skydd för verktyg och lager som förvaras i fordonet.",
            "**Egendoms- och verktygsförsäkring** – täcker stöld och skada på dina maskiner och verktyg, på arbetsplatsen och i bilen.",
            "**Sjukavbrotts- och olycksfallsförsäkring** – ger dig själv ekonomiskt skydd vid sjukdom eller olycka när du är ensam i firman.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Auktorisation och försäkring hänger ihop",
          text: "Försäkringsbolagens ersättning vid en vattenskada förutsätter ofta att arbetet utförts av ett auktoriserat VVS-företag enligt branschreglerna. Säkerställ att din auktorisation, din branschlegitimation och din ansvarsförsäkring är på plats och samspelar innan du tar uppdrag där en skada kan bli dyr.",
        },
      ],
    },

    // 8 ──────────────────────────────────────────────────────────────────
    {
      number: 8,
      title: "Prissättning och lönsamhet",
      lead: "Så sätter du ett timpris och materialpåslag som faktiskt lämnar vinst.",
      blocks: [
        {
          type: "paragraph",
          text: "Den vanligaste orsaken till att nya VVS-företag inte går runt är inte brist på jobb – det är för lågt pris. Ditt timpris ska inte bara täcka din lön, utan också alla timmar du inte fakturerar (offerter, inköp, administration, resor), semester, sjukdom, försäkringar, fordon, verktyg, pension och vinst. Räkna baklänges från vad du behöver tjäna per år, inte framåt från en \"lagom\" timpenning.",
        },
        {
          type: "subheading",
          text: "Bygg upp ditt timpris",
        },
        {
          type: "list",
          items: [
            "Utgå från din **önskade årslön** och lägg på sociala avgifter, pension och semester.",
            "Lägg till **fasta kostnader**: servicebil, försäkringar, verktyg, lager, telefon, bokföring, auktorisation och utbildning.",
            "Dela på **fakturerbara timmar** – inte alla arbetade timmar är fakturerbara. Räkna realistiskt, ofta 60–75 % av arbetstiden.",
            "Lägg på **vinstmarginal** så att företaget kan växa och tåla magra perioder.",
          ],
        },
        {
          type: "subheading",
          text: "Påslag på material",
        },
        {
          type: "paragraph",
          text: "Att lägga ett **påslag på material** är standard och fullt legitimt – det täcker din tid för inköp, hämtning, lagring, spill och garantiansvar. Hur stort påslaget är varierar med uppdrag; bestäm en tydlig princip och var konsekvent. Var transparent mot kunden om hur material och arbete faktureras, särskilt vid ROT-jobb där bara arbetskostnaden ger skattereduktion.",
        },
        {
          type: "callout",
          variant: "fact",
          title: "ROT-effekten i din offert",
          text: "ROT gör ditt arbete märkbart billigare för privatkunden utan att du sänker ditt pris. På en arbetskostnad på 20 000 kr blir kundens nettokostnad 14 000 kr efter 30 % rotavdrag (max 50 000 kr/person/år). Visa kunden både bruttopris och pris efter ROT i offerten – det höjer din avslutsfrekvens.",
          source: "Räkneexempel baserat på rotavdrag 30 % 2026 (Skatteverket).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Skriftlig offert – alltid",
          text: "Lämna alltid skriftlig offert med tydlig avgränsning av vad som ingår, hur ändrings- och tilläggsarbeten (ÄTA) hanteras, betalningsplan och giltighetstid. Det förebygger de flesta tvister och gör dig mer professionell i kundens ögon.",
        },
      ],
    },

    // 9 ──────────────────────────────────────────────────────────────────
    {
      number: 9,
      title: "Bokföring och skatt",
      lead: "Löpande ordning i ekonomin – och de avdrag VVS-företag ofta missar.",
      blocks: [
        {
          type: "paragraph",
          text: "Alla företag är enligt bokföringslagen skyldiga att löpande bokföra sina affärshändelser och spara underlag. Du kan sköta det själv i ett bokföringsprogram eller anlita en redovisningsbyrå – för många VVS-företagare är byrån värd pengarna, eftersom den frigör fakturerbar tid och minskar risken för fel i moms och ROT.",
        },
        {
          type: "subheading",
          text: "F-skatt och preliminärskatt",
        },
        {
          type: "paragraph",
          text: "Med **F-skatt** betalar du själv in din skatt och dina egenavgifter (enskild firma) eller bolagets skatt (AB). Skatteverket beslutar en **preliminärskatt** som du betalar varje månad, baserad på din uppskattade vinst. Lämnar du en realistisk prognos slipper du både stora restskatter och att binda upp pengar i onödan. Justera prognosen hos Skatteverket om resultatet utvecklas annorlunda än väntat.",
        },
        {
          type: "subheading",
          text: "Moms och redovisningsperiod",
        },
        {
          type: "paragraph",
          text: "Du redovisar moms månads-, kvartals- eller årsvis beroende på omsättning. Kom ihåg den omvända byggmomsen från kapitel 6 – den ska redovisas korrekt i momsdeklarationen även när du fakturerar utan moms. Ett bokföringsprogram med stöd för bygg/omvänd skattskyldighet sparar mycket tid.",
        },
        {
          type: "subheading",
          text: "Vanliga avdrag för VVS-företag",
        },
        {
          type: "list",
          items: [
            "**Verktyg, maskiner och förbrukningsmaterial** – avdragsgilla; större inköp kan behöva skrivas av över tid.",
            "**Arbetskläder och skyddsutrustning** – skyddskläder och PPE är avdragsgilla.",
            "**Servicebil och drivmedel** – kostnader för företagets fordon; för privat bil i tjänsten gäller särskilda regler.",
            "**Försäkringar** – företags-, ansvars- och entreprenadförsäkring.",
            "**Utbildning, auktorisation och certifieringar** – branschlegitimation, Säker Vatten-utbildning och behörighetsutbildningar som rör verksamheten.",
            "**Kontor/lager, telefon och programvara** – den del som används i verksamheten.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Spara alla underlag",
          text: "Kvitton, fakturor och avtal ska sparas enligt bokföringslagen. I en bransch som granskas hårt (personalliggare, ROT, omvänd moms) är ordnad dokumentation ditt bästa skydd vid en kontroll. Spara också dokumentation av utförda arbeten enligt branschreglerna – den behövs vid en eventuell vattenskada.",
        },
      ],
    },

    // 10 ─────────────────────────────────────────────────────────────────
    {
      number: 10,
      title: "Att anställa",
      lead: "Från första montören: avgifter, kollektivavtal, branschlegitimation och ditt arbetsmiljöansvar.",
      blocks: [
        {
          type: "paragraph",
          text: "Att anställa montörer är ofta steget som tar VVS-företaget från enmansfirma till riktigt företag – men det följer med kostnader och ansvar du måste ha koll på innan du skriver första anställningsavtalet.",
        },
        {
          type: "subheading",
          text: "Arbetsgivaravgifter",
        },
        {
          type: "paragraph",
          text: "Utöver lönen betalar du **arbetsgivaravgifter**. Normalsatsen 2026 är **31,42 %** av bruttolönen. På en månadslön på 35 000 kr betyder det runt 11 000 kr i arbetsgivaravgift utöver lönen – budgetera för det när du sätter ditt timpris (kapitel 8). Vissa nedsättningar kan finnas i särskilda fall; kontrollera aktuella regler hos Skatteverket.",
          source: "Skatteverket, arbetsgivaravgift normalsats 31,42 % (2026).",
        },
        {
          type: "subheading",
          text: "Kollektivavtal",
        },
        {
          type: "paragraph",
          text: "VVS-branschen är i hög grad kollektivavtalsreglerad. VVS-montörer omfattas typiskt av branschens installationsavtal mellan arbetsgivarorganisationen (Installatörsföretagen) och Byggnads. Ett kollektivavtal binder dig till bland annat minimilöner, arbetstider, försäkringar och avsättningar, och krävs ofta av större beställare. Kontrollera aktuellt avtal, lönenivåer och villkor direkt hos arbetsgivarorganisationen och facket innan du anställer.",
        },
        {
          type: "subheading",
          text: "Branschlegitimation och arbetsmiljöansvar",
        },
        {
          type: "paragraph",
          text: "Montörer som utför Säker Vatteninstallation ska ha **branschlegitimation** enligt Branschregler 2026:1 (kapitel 3). Som arbetsgivare har du dessutom ett långtgående **arbetsmiljöansvar**: du ska systematiskt undersöka, åtgärda och följa upp risker, se till att skyddsutrustning används och att personalen har rätt kompetens. På byggarbetsplatser ska anställda registreras i personalliggaren. Brister i arbetsmiljön kan leda till sanktionsavgifter och, vid allvarliga fall, straffansvar.",
          source: "Arbetsmiljöverket (systematiskt arbetsmiljöarbete); Säker Vatten AB (branschlegitimation enligt Branschregler 2026:1).",
        },
      ],
    },

    // 11 ─────────────────────────────────────────────────────────────────
    {
      number: 11,
      title: "Vanliga misstag och fallgropar",
      lead: "De dyraste nybörjarfelen i VVS-branschen – och hur du undviker dem.",
      blocks: [
        {
          type: "list",
          items: [
            "**Fel moms på fakturan.** Att lägga moms på en byggtjänst som omfattas av omvänd skattskyldighet – eller tvärtom. Bestäm alltid först: privatperson (25 %) eller byggföretag (omvänd moms)?",
            "**Jobba utan auktorisation där den krävs.** Utför du arbete som försäkringsbolag förutsätter ska vara auktoriserat – utan auktorisation – kan kundens vattenskada bli oförsäkrad. Det skadar både kunden och ditt rykte.",
            "**Lova fel ROT-procent.** Den tillfälliga 50-procentsnivån gällde bara t.o.m. 31 december 2025. För 2026 är det 30 %. Räkna alltid med rätt nivå i offerten.",
            "**För lågt timpris.** Att inte räkna in icke-fakturerbar tid, servicebil, lager, försäkringar och vinst. Sätt priset baklänges från din årslön (kapitel 8).",
            "**Dålig likviditet.** Att ligga ute med material och lön utan buffert. Använd a conto/betalningsplan och håll en kassareserv.",
            "**Otydliga avtal och ÄTA-hantering.** Muntliga överenskommelser och oklara tilläggsarbeten är den vanligaste tvistekällan. Allt skriftligt.",
            "**Missa personalliggaren på byggen.** Tar du uppdrag på byggarbetsplats utan att checka in i liggaren riskerar du Skatteverkets kontrollavgifter.",
            "**Saknad eller fel försäkring.** Att börja ett jobb utan ansvarsförsäkring – eller med ett skydd som inte täcker arbetet – kan bli förödande dyrt vid en vattenskada.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Det dyraste felet är att gissa",
          text: "Reglerna i VVS ändras (momsgränser, ROT-nivåer, branschregler – t.ex. nya 2026:1). Bygg en vana att kontrollera aktuell uppgift hos rätt instans (Skatteverket, Säker Vatten) innan du fakturerar eller lovar något – och spara dokumentationen.",
        },
      ],
    },

    // 12 ─────────────────────────────────────────────────────────────────
    {
      number: 12,
      title: "Marknadsföring och dina första kunder",
      lead: "Så får du de första uppdragen och bygger ett rykte som ger återkommande jobb.",
      blocks: [
        {
          type: "paragraph",
          text: "I VVS-branschen kommer de flesta jobb via **rekommendationer** och akuta behov (en läcka ska åtgärdas nu) – men du måste vara lätt att hitta, snabb att svara och tydlig i offerten. Här är de kanaler som ger mest för ett nystartat VVS-företag.",
        },
        {
          type: "list",
          items: [
            "**Snabba, tydliga offerter och jourberedskap.** Den som svarar först vinner ofta jobbet, särskilt vid akuta läckor. Ha en offertmall klar.",
            "**Google – sökning och karta.** Skapa en Google-företagsprofil så att du syns när någon söker rörmokare i ditt område. Be nöjda kunder om omdömen.",
            "**Enkel hemsida.** Visa vad du gör, referensbilder, kontaktuppgifter och att du har F-skatt, försäkring och Säker Vatten-auktorisation. Det räcker långt.",
            "**Samarbete med byggföretag och fastighetsägare.** Återkommande underentreprenörsuppdrag och serviceavtal ger stabil beläggning.",
            "**Förmedlingstjänster.** Plattformar som matchar hantverkare och kunder kan ge de första jobben medan du bygger eget rykte.",
            "**Bilen och skyltningen.** Dekaler på servicebilen är billig, lokal marknadsföring som syns varje dag.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Visa att du är seriös",
          text: "F-skatt, försäkring, Säker Vatten-auktorisation, branschlegitimation och skriftliga avtal är inte bara krav – de är säljargument. Privatkunder och beställare väljer gärna det VVS-företag som tydligt visar att allt är i ordning. Lyft fram det i offert och på hemsidan.",
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
            "Valt bolagsform (enskild firma eller AB) utifrån ansvar, skatt och beställarkrav",
            "Kontrollerat och valt företagsnamn hos Bolagsverket",
            "Registrerat företaget (AB: 1 900 kr e-tjänst, aktiekapital 25 000 kr insatt)",
            "Ansökt om F-skatt hos Skatteverket (gratis)",
            "Momsregistrerat företaget",
            "Anmält verklig huvudman (AB)",
            "Öppnat företagskonto",
          ],
        },
        {
          type: "subheading",
          text: "Auktorisation, behörighet och säkerhet",
        },
        {
          type: "checklist",
          items: [
            "Ansökt om Säker Vatten-auktorisation och säkrat branschcertifikat/branschlegitimation (Branschregler 2026:1)",
            "Säkerställt behörighet/underentreprenör för el, köldmedier och heta arbeten vid behov",
            "Skaffat ID06-kort och satt rutin för personalliggare vid arbete på byggen",
            "Skaffat personlig skyddsutrustning och satt rutin för riskbedömning",
          ],
        },
        {
          type: "subheading",
          text: "Ekonomi och försäkring",
        },
        {
          type: "checklist",
          items: [
            "Tecknat ansvars-/företagsförsäkring och kontrollerat beställarkrav",
            "Tecknat entreprenad-/allrisk- och fordonsförsäkring vid behov",
            "Satt timpris baklänges från årslön, med icke-fakturerbar tid och vinst",
            "Bestämt princip för materialpåslag",
            "Valt bokföringslösning (eget program eller redovisningsbyrå)",
            "Förstått omvänd byggmoms (företag) vs 25 % moms (privatperson)",
            "Satt rutin för ROT (30 % 2026, max 50 000 kr/person/år) på privatjobb",
          ],
        },
        {
          type: "subheading",
          text: "Innan första uppdraget",
        },
        {
          type: "checklist",
          items: [
            "Tagit fram offertmall med ÄTA-hantering, betalningsplan och giltighetstid",
            "Skapat Google-företagsprofil och enkel hemsida",
            "Förberett rutin för fakturering med korrekt moms/ROT",
            "Säkerställt likviditet/kassareserv för de första månaderna",
          ],
        },
      ],
    },

    // 14 ─────────────────────────────────────────────────────────────────
    {
      number: 14,
      title: "Resurser och myndighetskontakter",
      lead: "Spara den här sidan – här kontrollerar du aktuella siffror, regler och branschkrav.",
      blocks: [
        {
          type: "paragraph",
          text: "Reglerna och beloppen i VVS-branschen uppdateras. Använd länkarna nedan för att kontrollera aktuell uppgift direkt hos källan innan du fakturerar, prissätter eller lovar något till en kund.",
        },
        {
          type: "links",
          items: [
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare – allt på ett ställe" },
            { label: "Bolagsverket", url: "https://www.bolagsverket.se", note: "Registrering, avgifter, namn, verklig huvudman" },
            { label: "Skatteverket", url: "https://www.skatteverket.se", note: "F-skatt, moms, omvänd byggmoms, ROT, personalliggare, belopp och procent" },
            { label: "Säker Vatten", url: "https://www.sakervatten.se", note: "Branschregler 2026:1, auktorisation, branschlegitimation" },
            { label: "Arbetsmiljöverket", url: "https://www.av.se", note: "Systematiskt arbetsmiljöarbete, skyddsutrustning" },
            { label: "Elsäkerhetsverket", url: "https://www.elsakerhetsverket.se", note: "Registrering för elinstallationsarbete" },
            { label: "Installatörsföretagen", url: "https://www.installatorsforetagen.se", note: "Bransch- och arbetsgivarstöd, kollektivavtal" },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Vill du bolla ditt upplägg med en rådgivare?",
          text: "Den här guiden tar dig långt på egen hand. Vill du dubbelkolla val av bolagsform, skatteupplägg eller försäkring med en expert kan vi matcha dig med en rådgivare kostnadsfritt på driva-foretag.se/hitta-radgivare.",
        },
      ],
    },
  ],
};

export default vvsforetag;
