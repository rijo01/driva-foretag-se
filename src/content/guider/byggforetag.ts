import type { GuideContent } from "./types";

// ──────────────────────────────────────────────────────────────────────────
// STARTGUIDE: BYGGFÖRETAG
//
// YMYL – faktagranskad mot primärkälla. Verifierade siffror (juni 2026):
//  • Aktiekapital privat AB: 25 000 kr (Bolagsverket)
//  • AB-nyregistrering: 1 900 kr e-tjänst / 2 200 kr blankett (Bolagsverket)
//  • Momsbefrielse-gräns: omsättning ≤ 120 000 kr/år (Skatteverket, fr.o.m.
//    1 jan 2025, höjt från 80 000 kr)
//  • Moms normalsats: 25 % (Skatteverket)
//  • Omvänd byggmoms: köparen redovisar momsen – ML (2023:200) 16 kap. 13 §
//  • ROT-avdrag 2026: 30 % av arbetskostnaden, max 50 000 kr/person/år; ROT+RUT
//    max 75 000 kr/person/år (Skatteverket; tillfälliga 50 % gällde endast
//    12 maj–31 dec 2025 och har upphört – Regeringen)
//  • Arbetsgivaravgift 2026: 31,42 % (normalsats)
//  • Egenavgifter 2026: 28,97 % (aktiv näringsverksamhet), schablonavdrag 25 %
//    (Skatteverket)
//  • Personalliggare bygg: kontrollavgift 12 500 kr + 2 500 kr/oregistrerad
//    person; 25 000 kr om byggstart ej anmälts (Skatteverket,
//    skatteförfarandelagen)
//  • BAS-P/BAS-U: arbetsmiljölagen 3 kap. 7 a §; AFS 2023:3 gäller fr.o.m.
//    1 jan 2025 (Arbetsmiljöverket)
//  • F-skatt: registrering gratis hos Skatteverket via verksamt.se
//
// Där en exakt siffra inte gått att verifiera mot primärkälla skrivs den
// kvalitativt ("kontrollera aktuell uppgift hos …") – aldrig gissad.
// ──────────────────────────────────────────────────────────────────────────

const byggforetag: GuideContent = {
  slug: "byggforetag",
  industry: "Byggföretag",
  title: "Starta & driva byggföretag",
  subtitle: "Komplett startguide 2026",
  year: 2026,
  reviewedAt: "2026-06-04",
  reviewedSources: "Skatteverket, Bolagsverket & Arbetsmiljöverket",
  intro:
    "Den kompletta, faktagranskade guiden för dig som ska starta byggföretag i Sverige – från val av bolagsform, F-skatt och ID06 till omvänd byggmoms, ROT-avdrag, försäkringar, prissättning och din första kund. Varje siffra är kontrollerad mot Skatteverket, Bolagsverket och Arbetsmiljöverket.",

  chapters: [
    // 1 ──────────────────────────────────────────────────────────────────
    {
      number: 1,
      title: "Att driva byggföretag i Sverige",
      lead: "Vad branschen kräver av dig som företagare – och vad som gör den lönsam.",
      blocks: [
        {
          type: "paragraph",
          text: "Byggbranschen är en av Sveriges största näringar och efterfrågan på skickliga hantverkare är stabil över tid. Samtidigt är det en av de mest reglerade branscherna för en ny företagare: här möts skatteregler, arbetsmiljöansvar, försäkringskrav och särskilda momsregler som inte finns i andra branscher. Den som förstår reglerna från start får ett stort försprång – och slipper de dyra misstagen.",
        },
        {
          type: "paragraph",
          text: "Med **byggföretag** menar vi i den här guiden företag som utför bygg-, anläggnings-, reparations-, om- och tillbyggnadsarbeten åt privatpersoner, bostadsrättsföreningar och andra företag. Det kan vara allt från en enmans hantverksfirma till ett bolag med flera anställda och underentreprenörer. Reglerna i guiden gäller i grunden lika oavsett storlek – men ju fler du anlitar, desto mer ansvar landar på dig.",
        },
        {
          type: "paragraph",
          text: "Tre saker skiljer byggbranschen från de flesta andra när du startar: **omvänd byggmoms** (köparen redovisar momsen vid bygg­tjänster mellan företag), **ROT-avdraget** (som gör dina tjänster billigare för privatpersoner) och **det skärpta arbetsmiljöansvaret** med byggarbetsmiljösamordnare och elektronisk personalliggare. De tre styr hur du fakturerar, prissätter och organiserar arbetet – och de är genomgående teman i den här guiden.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Så använder du guiden",
          text: "Läs kapitel 1–6 innan du registrerar företaget – de avgör vilken bolagsform, momshantering och vilka tillstånd du behöver. Kapitel 7–12 är drift: försäkring, pris, bokföring, anställda och marknadsföring. Kapitel 13 är en komplett checklista du kan kryssa av, och kapitel 14 samlar alla myndighetskontakter med länkar.",
        },
      ],
    },

    // 2 ──────────────────────────────────────────────────────────────────
    {
      number: 2,
      title: "Välj bolagsform: enskild firma eller aktiebolag",
      lead: "Valet påverkar ditt personliga ansvar, din skatt och hur kunder och beställare ser på dig.",
      blocks: [
        {
          type: "paragraph",
          text: "För de allra flesta byggföretag står valet mellan **enskild näringsverksamhet** (enskild firma) och **aktiebolag (AB)**. Båda går utmärkt att driva bygg i – men de skiljer sig åt på fyra punkter som spelar extra stor roll just i byggbranschen: personligt ansvar, kapitalkrav, skatt och förtroende hos beställare.",
        },
        {
          type: "subheading",
          text: "Enskild firma",
        },
        {
          type: "paragraph",
          text: "Enklast och billigast att starta. Du och företaget är samma juridiska person, vilket betyder att du har **personligt ansvar** för företagets skulder – något att ta på allvar i en bransch med dyra material­inköp, maskiner och risk för skadeståndskrav. Du betalar **egenavgifter** på överskottet (28,97 % för aktiv näringsverksamhet 2026, med ett schablonavdrag på 25 % innan avgiften beräknas) och inkomsten beskattas som din lön. Passar bra när du är ensam, har låg risk och vill komma igång snabbt.",
        },
        {
          type: "subheading",
          text: "Aktiebolag",
        },
        {
          type: "paragraph",
          text: "Ett aktiebolag är en egen juridisk person. Ditt personliga ansvar begränsas i normalfallet till **aktiekapitalet på 25 000 kr** (lägsta tillåtna för privat AB) – en viktig trygghet när du tar på dig större entreprenader. Många större beställare, bostadsrättsföreningar och offentliga upphandlingar arbetar dessutom hellre med AB, och bolagsformen gör det enklare att ta in delägare, anställa och bygga upp ett företagsvärde. Du anställs av ditt eget bolag och tar ut lön, vilket ger jämnare skatt och tillgång till t.ex. sjukpenninggrundande inkomst.",
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
          title: "Tumregel för byggföretag",
          text: "Ska du jobba ensam med mindre uppdrag och vill komma igång billigt – börja som enskild firma och ombilda till AB när omsättningen växer. Ska du ta större entreprenader, anlita underentreprenörer eller anställa – välj AB direkt för ansvarsbegränsningens skull.",
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
      title: "Tillstånd, behörigheter och krav",
      lead: "Byggbranschen har fler krav än de flesta. Här är vad som gäller – och vilken myndighet du vänder dig till.",
      blocks: [
        {
          type: "paragraph",
          text: "Det finns inget generellt \"bygglov\" för att starta byggföretag – men en rad krav som måste vara på plats. Vissa gäller alla byggföretag, andra bara vissa arbeten. Gå igenom listan nedan och bocka av det som rör din verksamhet.",
        },
        {
          type: "subheading",
          text: "F-skatt och registrering (Skatteverket)",
        },
        {
          type: "paragraph",
          text: "**F-skatt** är grunden. Den visar att du själv betalar din skatt och dina egenavgifter, och i praktiken kräver alla seriösa beställare att din firma har F-skatt innan de anlitar dig. Du ansöker gratis hos **Skatteverket** via verksamt.se, samtidigt som du registrerar företaget. Där anmäler du också moms och – om du ska ha anställda – dig som arbetsgivare.",
        },
        {
          type: "subheading",
          text: "ID06 och elektronisk personalliggare (Skatteverket)",
        },
        {
          type: "paragraph",
          text: "På de flesta byggarbetsplatser måste det föras en **elektronisk personalliggare** – en löpande förteckning över vilka som är verksamma på platsen. Kravet följer av skatteförfarandelagen och kontrolleras av Skatteverket. **ID06** är det system branschen i praktiken använder för att uppfylla kravet: varje person får ett ID06-kort med foto och legitimering som registrerar in- och utcheckning. ID06 är inte en myndighet utan en branschstandard, men i praktiken behöver både du och dina anställda ID06-kort för att få jobba på de flesta arbetsplatser.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Personalliggare – dyra avgifter om det missas",
          text: "Saknas eller är personalliggaren felaktig kan Skatteverket ta ut en **kontrollavgift på 12 500 kr**, plus **2 500 kr för varje person** som är verksam men inte registrerad. Har byggstarten dessutom inte anmälts i förväg är avgiften **25 000 kr**. Anmäl byggstart och håll liggaren uppdaterad från dag ett.",
          source: "Skatteverket, personalliggare i byggbranschen (skatteförfarandelagen).",
        },
        {
          type: "subheading",
          text: "Byggarbetsmiljösamordnare BAS-P och BAS-U (Arbetsmiljöverket)",
        },
        {
          type: "paragraph",
          text: "I projekt där fler än en aktör arbetar ska byggherren utse **byggarbetsmiljösamordnare** – en för planering och projektering (**BAS-P**) och en för utförandet (**BAS-U**). Kravet följer av arbetsmiljölagen (3 kap. 7 a §). Sedan **1 januari 2025** gäller Arbetsmiljöverkets nya föreskrifter **AFS 2023:3 \"Projektering och byggarbetsmiljösamordning – grundläggande skyldigheter\"**, som ersatt äldre regler. Tar du på dig rollen som BAS-U behöver du rätt kompetens och utbildning – kontrollera aktuella krav och utbildningar hos Arbetsmiljöverket.",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Behörighet för vissa arbeten",
          text: "Vissa arbeten kräver särskild behörighet och regleras av andra myndigheter än de byggspecifika: **elinstallationer** kräver registrering hos Elsäkerhetsverket, **VVS/heta arbeten** kräver särskild behörighet/certifiering, och arbeten med t.ex. **asbest** kräver tillstånd från Arbetsmiljöverket. Tar du in sådana moment – anlita behörig underentreprenör eller skaffa rätt behörighet innan arbetet påbörjas.",
        },
        {
          type: "links",
          items: [
            { label: "Skatteverket – F-skatt och personalliggare", url: "https://www.skatteverket.se", note: "F-skatt, moms, personalliggare byggbranschen" },
            { label: "Arbetsmiljöverket – byggarbetsmiljö", url: "https://www.av.se", note: "BAS-P/BAS-U, AFS 2023:3, asbest" },
            { label: "ID06", url: "https://www.id06.se", note: "ID06-kort och personalliggarsystem" },
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
          text: "Byggföretag är mer kapitalkrävande att starta än många tjänsteföretag, eftersom verktyg, fordon och försäkringar kostar pengar innan första fakturan är betald. Här är de poster du bör budgetera för. Exakta priser varierar med leverantör och omfattning – siffrorna nedan är de avgifter som är fastställda av myndigheter, övriga poster anges som typiska kostnadsslag att räkna på.",
        },
        {
          type: "table",
          columns: ["Post", "Kommentar"],
          rows: [
            ["Aktiekapital (om AB)", "25 000 kr – sätts in på företagskonto, är ditt och kan användas i driften"],
            ["Registrering AB hos Bolagsverket", "1 900 kr via e-tjänst på verksamt.se (2 200 kr med pappersblankett)"],
            ["Registrering enskild firma", "Frivillig; ca 1 000 kr för att skydda firmanamnet (kontrollera aktuell avgift)"],
            ["F-skatt och momsregistrering", "Gratis hos Skatteverket"],
            ["ID06-kort", "Kostnad per kort/person – kontrollera aktuellt pris hos ID06"],
            ["Verktyg och maskiner", "Den enskilt största startposten – budgetera efter ditt yrke"],
            ["Fordon (skåpbil/släp)", "Köp eller leasing + drivmedel, försäkring, service"],
            ["Försäkringar", "Ansvars-, allrisk- och fordonsförsäkring (se kapitel 7)"],
            ["Arbetskläder och skydd", "Personlig skyddsutrustning enligt arbetsmiljökraven"],
          ],
          source: "Bolagsverket (1 900 kr AB e-tjänst, 25 000 kr aktiekapital) och Skatteverket (F-skatt/moms gratis).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Aktiekapitalet är inte borta",
          text: "Många tror att aktiekapitalet är en avgift. Det är det inte – de 25 000 kronorna är fortfarande dina och kan användas till att köpa verktyg, betala material eller täcka löpande kostnader så snart bolaget är registrerat. Det ska bara finnas vid starten.",
        },
        {
          type: "paragraph",
          text: "**Likviditet är viktigare än vinst i början.** I byggbranschen ligger du ofta ute med material och lön innan kunden betalar, särskilt vid ROT-jobb där en del av betalningen kommer från Skatteverket i efterhand. Planera för att ha pengar att röra dig med i minst de första månaderna, och använd gärna a contofakturering vid längre projekt (se kapitel 6 och 8).",
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
              text: "AB registreras via e-tjänsten på **verksamt.se** för **1 900 kr**. Du laddar upp stiftelseurkund, bolagsordning och bankintyg på att aktiekapitalet (25 000 kr) är insatt. Enskild firma behöver inte registreras hos Bolagsverket, men du kan göra det för att skydda namnet.",
            },
            {
              title: "Ansök om F-skatt hos Skatteverket",
              text: "Görs gratis via verksamt.se, ofta i samma flöde. F-skatt är ett krav i praktiken för att få uppdrag i byggbranschen. Räkna med någon till några veckors handläggning.",
            },
            {
              title: "Momsregistrera dig",
              text: "Anmäl moms i samma ärende. Säljer du byggtjänster är du i praktiken alltid momsregistrerad. (Befrielse är möjlig först om omsättningen är högst 120 000 kr/år – se kapitel 6.)",
            },
            {
              title: "Registrera dig som arbetsgivare (om du ska anställa)",
              text: "Ska du ha anställda anmäler du dig som arbetsgivare hos Skatteverket, också via verksamt.se. Då börjar du redovisa arbetsgivaravgifter och avdragen skatt (se kapitel 10).",
            },
            {
              title: "Anmäl verklig huvudman",
              text: "AB ska anmäla verklig huvudman till Bolagsverket, normalt inom fyra veckor från registreringen.",
            },
            {
              title: "Öppna företagskonto och ordna bokföring",
              text: "Skaffa ett företagskonto (krav för AB) och bestäm hur du sköter bokföringen – eget bokföringsprogram eller redovisningsbyrå (se kapitel 9).",
            },
            {
              title: "Skaffa ID06 och teckna försäkringar",
              text: "Beställ ID06-kort till dig och eventuella anställda, och teckna ansvars- och övriga försäkringar (kapitel 7) innan du tar första uppdraget.",
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
      title: "Moms i byggbranschen: omvänd byggmoms och ROT",
      lead: "De två momsreglerna som är unika för bygg – och som du måste få rätt på fakturan.",
      blocks: [
        {
          type: "paragraph",
          text: "Momsen är där nya byggföretagare oftast gör fel. Två regler styr: **omvänd byggmoms** (mellan byggföretag) och **ROT-avdraget** (mot privatpersoner). Vilken som gäller avgörs av vem du säljer till.",
        },
        {
          type: "subheading",
          text: "Omvänd byggmoms (försäljning mellan byggföretag)",
        },
        {
          type: "paragraph",
          text: "När du säljer **byggtjänster till ett annat företag som i sin tur säljer byggtjänster** gäller omvänd skattskyldighet: **köparen** redovisar och betalar momsen till Skatteverket – inte du som säljare. På din faktura anger du beloppet **utan moms** och hänvisar till att omvänd skattskyldighet gäller (t.ex. \"Omvänd skattskyldighet för byggtjänster\"). Det är en **tvingande regel** – du får alltså inte lägga på moms i dessa fall.",
          source: "Skatteverket och mervärdesskattelagen (2023:200) 16 kap. 13 §.",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Privatperson eller företag – det avgör momsen",
          text: "Säljer du byggtjänst till en **privatperson**: lägg på **normal moms 25 %**. Säljer du byggtjänst till ett **byggföretag** som omsätter byggtjänster: **omvänd byggmoms** – fakturera utan moms, köparen redovisar den. Att blanda ihop dessa är det vanligaste momsfelet i branschen.",
          source: "Skatteverket; mervärdesskattelagen (2023:200) 16 kap. 13 §; momssats 25 %.",
        },
        {
          type: "subheading",
          text: "ROT-avdrag (försäljning till privatperson)",
        },
        {
          type: "paragraph",
          text: "ROT-avdraget gör dina tjänster billigare för privatpersoner och är ett av byggföretagets bästa säljargument. Kunden får skattereduktion på **arbetskostnaden** (inte material). För **2026 är avdraget 30 % av arbetskostnaden**, upp till **50 000 kr per person och år**. ROT och RUT räknas ihop till sammanlagt **högst 75 000 kr per person och år**.",
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
      lead: "Rätt skydd är ofta ett krav från beställaren – och räddar dig den dag något går fel.",
      blocks: [
        {
          type: "paragraph",
          text: "Byggbranschen är en av få där försäkring inte är valfritt i praktiken: många beställare, ramavtal och upphandlingar kräver att du kan visa giltig ansvarsförsäkring innan du får börja. Lika viktigt är att skyddet faktiskt täcker den typ av arbete du utför – läs villkoren, inte bara priset.",
        },
        {
          type: "list",
          items: [
            "**Företagsförsäkring med ansvarsförsäkring** – täcker skador du orsakar på kundens egendom eller på tredje person. Ofta ett krav för att ens få uppdraget. Kontrollera att försäkringsbeloppet räcker för de jobb du tar.",
            "**Allriskförsäkring / entreprenadförsäkring** – skyddar själva entreprenaden, material och arbete mot t.ex. brand, vatten, stöld och skadegörelse under byggtiden.",
            "**Fordonsförsäkring** – trafikförsäkring är lagstadgad för fordon; lägg till halv-/helförsäkring för skåpbil och släp samt skydd för verktyg som förvaras i fordonet.",
            "**Egendoms- och verktygsförsäkring** – täcker stöld och skada på dina maskiner och verktyg, på arbetsplatsen och i bilen.",
            "**Sjukavbrotts- och olycksfallsförsäkring** – ger dig själv ekonomiskt skydd vid sjukdom eller olycka när du är ensam i firman.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Fråga beställaren vad som krävs",
          text: "Innan du tecknar – fråga dina typiska beställare vilket försäkringsskydd och vilka belopp de kräver. Många bygg- och fastighetsbolag har miniminivåer i sina inköpsvillkor. Då köper du rätt skydd direkt i stället för att uppgradera mitt i ett projekt.",
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
          text: "Den vanligaste orsaken till att nya byggföretag inte går runt är inte brist på jobb – det är för lågt pris. Ditt timpris ska inte bara täcka din lön, utan också alla timmar du inte fakturerar (offerter, inköp, administration), semester, sjukdom, försäkringar, fordon, verktyg, pension och vinst. Räkna baklänges från vad du behöver tjäna per år, inte framåt från en \"lagom\" timpenning.",
        },
        {
          type: "subheading",
          text: "Bygg upp ditt timpris",
        },
        {
          type: "list",
          items: [
            "Utgå från din **önskade årslön** och lägg på sociala avgifter, pension och semester.",
            "Lägg till **fasta kostnader**: fordon, försäkringar, verktyg, telefon, bokföring, ID06.",
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
          text: "Att lägga ett **påslag på material** är standard och fullt legitimt – det täcker din tid för inköp, hantering, lagring, spill och garantiansvar. Hur stort påslaget är varierar med uppdrag och bransch; bestäm en tydlig princip och var konsekvent. Var transparent mot kunden om hur material och arbete faktureras, särskilt vid ROT-jobb där bara arbetskostnaden ger skattereduktion.",
        },
        {
          type: "callout",
          variant: "fact",
          title: "ROT-effekten i din offert",
          text: "ROT gör ditt arbete märkbart billigare för privatkunden utan att du sänker ditt pris. På en arbetskostnad på 30 000 kr blir kundens nettokostnad 21 000 kr efter 30 % rotavdrag (max 50 000 kr/person/år). Visa kunden både bruttopris och pris efter ROT i offerten – det höjer din avslutsfrekvens.",
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
      lead: "Löpande ordning i ekonomin – och de avdrag byggföretag ofta missar.",
      blocks: [
        {
          type: "paragraph",
          text: "Alla företag är enligt bokföringslagen skyldiga att löpande bokföra sina affärshändelser och spara underlag. Du kan sköta det själv i ett bokföringsprogram eller anlita en redovisningsbyrå – för många byggföretagare är byrån värd pengarna, eftersom den frigör fakturerbar tid och minskar risken för fel i moms och ROT.",
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
          text: "Vanliga avdrag för byggföretag",
        },
        {
          type: "list",
          items: [
            "**Verktyg, maskiner och förbrukningsmaterial** – avdragsgilla; större inköp kan behöva skrivas av över tid.",
            "**Arbetskläder och skyddsutrustning** – skyddskläder och PPE är avdragsgilla.",
            "**Fordon och drivmedel** – kostnader för företagets fordon; för privat bil i tjänsten gäller särskilda regler.",
            "**Försäkringar** – företags-, ansvars- och entreprenadförsäkring.",
            "**Utbildning och certifieringar** – som rör verksamheten, t.ex. säkerhets- och behörighetsutbildningar.",
            "**Kontor/förråd, telefon och programvara** – den del som används i verksamheten.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Spara alla underlag",
          text: "Kvitton, fakturor och avtal ska sparas enligt bokföringslagen. I en bransch som granskas hårt (personalliggare, ROT, omvänd moms) är ordnad dokumentation ditt bästa skydd vid en kontroll. Digitalisera kvitton löpande så de inte bleknar bort.",
        },
      ],
    },

    // 10 ─────────────────────────────────────────────────────────────────
    {
      number: 10,
      title: "Att anställa",
      lead: "Från första medarbetaren: avgifter, avtal, ID06 och ditt arbetsmiljöansvar.",
      blocks: [
        {
          type: "paragraph",
          text: "Att anställa är ofta steget som tar byggföretaget från enmansfirma till riktigt företag – men det följer med kostnader och ansvar du måste ha koll på innan du skriver första anställningsavtalet.",
        },
        {
          type: "subheading",
          text: "Arbetsgivaravgifter",
        },
        {
          type: "paragraph",
          text: "Utöver lönen betalar du **arbetsgivaravgifter**. Normalsatsen 2026 är **31,42 %** av bruttolönen. På en månadslön på 35 000 kr betyder det runt 11 000 kr i arbetsgivaravgift utöver lönen – budgetera för det när du sätter ditt timpris (kapitel 8). Vissa nedsättningar kan finnas för exempelvis unga eller i särskilda fall; kontrollera aktuella regler hos Skatteverket.",
          source: "Skatteverket, arbetsgivaravgift normalsats 31,42 % (2026).",
        },
        {
          type: "subheading",
          text: "Kollektivavtal (Byggnads)",
        },
        {
          type: "paragraph",
          text: "Byggbranschen är till stor del kollektivavtalsreglerad. Tecknar du kollektivavtal – oftast Byggavtalet mellan **Byggnads** och Byggföretagen – binder det dig till bland annat minimilöner, arbetstider, försäkringar och avsättningar. Många beställare kräver kollektivavtal eller motsvarande villkor. Kontrollera aktuella lönenivåer och villkor direkt hos Byggnads/Byggföretagen innan du anställer.",
        },
        {
          type: "subheading",
          text: "ID06 och arbetsmiljöansvar",
        },
        {
          type: "paragraph",
          text: "Alla anställda behöver **ID06-kort** och ska registreras i personalliggaren på arbetsplatsen (kapitel 3). Som arbetsgivare har du ett långtgående **arbetsmiljöansvar**: du ska systematiskt undersöka, åtgärda och följa upp risker, se till att skyddsutrustning används och att personalen har rätt kompetens. I projekt med flera aktörer tillkommer rollerna BAS-P/BAS-U. Brister i arbetsmiljön kan leda till sanktionsavgifter och, vid allvarliga fall, straffansvar.",
          source: "Arbetsmiljöverket (systematiskt arbetsmiljöarbete; BAS-P/BAS-U enligt AFS 2023:3).",
        },
      ],
    },

    // 11 ─────────────────────────────────────────────────────────────────
    {
      number: 11,
      title: "Vanliga misstag och fallgropar",
      lead: "De dyraste nybörjarfelen i byggbranschen – och hur du undviker dem.",
      blocks: [
        {
          type: "list",
          items: [
            "**Fel moms på fakturan.** Att lägga moms på en byggtjänst som omfattas av omvänd skattskyldighet – eller tvärtom. Bestäm alltid först: privatperson (25 %) eller byggföretag (omvänd moms)?",
            "**Glömma eller missköta personalliggaren.** Kontrollavgifterna är höga (12 500 kr + 2 500 kr/person). Anmäl byggstart och checka in alla, varje dag.",
            "**Lova fel ROT-procent.** Den tillfälliga 50-procentsnivån gällde bara t.o.m. 31 december 2025. För 2026 är det 30 %. Räkna alltid med rätt nivå i offerten.",
            "**För lågt timpris.** Att inte räkna in icke-fakturerbar tid, fordon, försäkringar och vinst. Sätt priset baklänges från din årslön (kapitel 8).",
            "**Dålig likviditet.** Att ligga ute med material och lön utan buffert. Använd a conto/betalningsplan och håll en kassareserv.",
            "**Otydliga avtal och ÄTA-hantering.** Muntliga överenskommelser och oklara tilläggsarbeten är den vanligaste tvistekällan. Allt skriftligt.",
            "**Underskatta arbetsmiljöansvaret.** Att hoppa över skyddsrond, riskbedömning och rätt utrustning kan ge sanktionsavgifter och allvarliga olyckor.",
            "**Saknad eller fel försäkring.** Att börja ett jobb utan ansvarsförsäkring – eller med ett skydd som inte täcker arbetet – kan bli förödande dyrt.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Det dyraste felet är att gissa",
          text: "Reglerna i bygg ändras (momsgränser, ROT-nivåer, arbetsmiljöföreskrifter). Bygg en vana att kontrollera aktuell uppgift hos rätt myndighet innan du fakturerar eller lovar något – och spara dokumentationen.",
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
          text: "I byggbranschen kommer de flesta jobb via **rekommendationer** – men du måste ge rekommendationerna något att hänga upp sig på: vara lätt att hitta, snabb att svara och tydlig i offerten. Här är de kanaler som ger mest för ett nystartat byggföretag.",
        },
        {
          type: "list",
          items: [
            "**Snabba, tydliga offerter.** Den som svarar först och mest professionellt vinner ofta jobbet. Ha en offertmall klar.",
            "**Google – sökning och karta.** Skapa en Google-företagsprofil så att du syns när någon söker hantverkare i ditt område. Be nöjda kunder om omdömen.",
            "**Enkel hemsida.** Visa vad du gör, några referensbilder, kontaktuppgifter och att du har F-skatt och försäkring. Det räcker långt.",
            "**Förmedlingstjänster.** Plattformar som matchar hantverkare och kunder kan ge de första jobben medan du bygger eget rykte.",
            "**Lokala nätverk.** Samarbeta med andra hantverkare, mäklare och bostadsrättsföreningar – de skickar vidare jobb de inte tar själva.",
            "**Bilden och skyltningen.** Dekaler på bilen och skylt på arbetsplatsen är billig, lokal marknadsföring som syns varje dag.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Visa att du är seriös",
          text: "F-skatt, försäkring, kollektivavtal/villkor, ID06 och skriftliga avtal är inte bara krav – de är säljargument. Privatkunder och beställare väljer gärna den hantverkare som tydligt visar att allt är i ordning. Lyft fram det i offert och på hemsidan.",
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
          text: "Tillstånd, behörighet och säkerhet",
        },
        {
          type: "checklist",
          items: [
            "Skaffat ID06-kort till dig och eventuella anställda",
            "Satt rutin för elektronisk personalliggare och anmälan av byggstart",
            "Klarlagt behov av BAS-P/BAS-U i kommande projekt (AFS 2023:3)",
            "Säkerställt behörighet/underentreprenör för el, VVS, asbest m.m. vid behov",
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
      lead: "Spara den här sidan – här kontrollerar du aktuella siffror och regler.",
      blocks: [
        {
          type: "paragraph",
          text: "Reglerna och beloppen i byggbranschen uppdateras. Använd länkarna nedan för att kontrollera aktuell uppgift direkt hos källan innan du fakturerar, prissätter eller lovar något till en kund.",
        },
        {
          type: "links",
          items: [
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare – allt på ett ställe" },
            { label: "Bolagsverket", url: "https://www.bolagsverket.se", note: "Registrering, avgifter, namn, verklig huvudman" },
            { label: "Skatteverket", url: "https://www.skatteverket.se", note: "F-skatt, moms, omvänd byggmoms, ROT, personalliggare, belopp och procent" },
            { label: "Arbetsmiljöverket", url: "https://www.av.se", note: "Byggarbetsmiljö, BAS-P/BAS-U, AFS 2023:3, asbest, skyddsutrustning" },
            { label: "Boverket", url: "https://www.boverket.se", note: "Bygg- och konstruktionsregler (BBR/EKS)" },
            { label: "ID06", url: "https://www.id06.se", note: "ID06-kort och elektronisk personalliggare" },
            { label: "Elsäkerhetsverket", url: "https://www.elsakerhetsverket.se", note: "Registrering för elinstallationsarbete" },
            { label: "Byggnads / Byggföretagen", url: "https://www.byggnads.se", note: "Kollektivavtal, minimilöner och villkor" },
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

export default byggforetag;
