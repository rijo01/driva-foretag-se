import type { GuideContent } from "./types";

// ──────────────────────────────────────────────────────────────────────────
// STARTGUIDE: ELFÖRETAG
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
//  • Personalliggare bygg: 12 500 kr + 2 500 kr/oregistrerad; 25 000 kr om
//    byggstart ej anmälts (Skatteverket). El på byggarbetsplats omfattas av
//    byggets personalliggare.
//  • Elinstallatör är ett REGLERAT yrke. Auktorisation söks hos
//    Elsäkerhetsverket (LAGKRAV, till skillnad från VVS/Säker Vatten).
//    Ansökningsavgift 1 890 kr (Elsäkerhetsverket; kontrollera aktuell).
//    Auktorisationstyper: A (full), AL (lågspänning), B (begränsad). AL avser
//    allt elinstallationsarbete på lågspänningsanläggningar och kräver
//    utbildning enligt Elsäkerhetsverkets föreskrifter samt praktik.
//  • Företag som utför elinstallationsarbete PÅ ANNANS ANLÄGGNING måste
//    registrera sig hos Elsäkerhetsverket, ha ett egenkontrollprogram och minst
//    en "elinstallatör för regelefterlevnad". Föreskrifter ELSÄK-FS 2017:3
//    (företag/egenkontroll) och ELSÄK-FS 2017:4 (auktorisation). Arbete enbart på
//    egen anläggning kräver inte registrering. (Elsäkerhetsverket.)
//  • F-skatt: registrering gratis hos Skatteverket via verksamt.se
//
// Där en exakt siffra inte gått att verifiera mot primärkälla skrivs den
// kvalitativt ("kontrollera aktuell uppgift hos …") – aldrig gissad.
// ──────────────────────────────────────────────────────────────────────────

const elforetag: GuideContent = {
  slug: "elforetag",
  industry: "Elföretag",
  title: "Starta & driva elföretag",
  subtitle: "Komplett startguide 2026",
  year: 2026,
  reviewedAt: "2026-06-04",
  reviewedSources: "Elsäkerhetsverket, Skatteverket, Bolagsverket & Arbetsmiljöverket",
  intro:
    "Den kompletta, faktagranskade guiden för dig som ska starta elföretag i Sverige – från bolagsform och F-skatt till auktorisation, företagsregistrering och egenkontrollprogram hos Elsäkerhetsverket, omvänd byggmoms, ROT-avdrag, försäkringar och din första kund. Varje siffra är kontrollerad mot Elsäkerhetsverket, Skatteverket och Bolagsverket.",

  chapters: [
    // 1 ──────────────────────────────────────────────────────────────────
    {
      number: 1,
      title: "Att driva elföretag i Sverige",
      lead: "Vad branschen kräver av dig som företagare – och vad som gör den lönsam.",
      blocks: [
        {
          type: "paragraph",
          text: "Elbranschen är en av de mest reglerade hantverksbranscherna i Sverige – och samtidigt en av de mest efterfrågade. Elektrifieringen av samhället, laddinfrastruktur, solceller och energieffektivisering driver en stadig efterfrågan. Men till skillnad från de flesta andra hantverk är **elinstallation ett reglerat yrke**: du får inte starta och börja jobba fritt, utan måste uppfylla särskilda krav från Elsäkerhetsverket. Den som förstår de kraven från start kommer rätt – och slipper de allvarliga och dyra misstagen.",
        },
        {
          type: "paragraph",
          text: "Med **elföretag** menar vi i den här guiden företag som utför elinstallationsarbete – installation, reparation och underhåll av elanläggningar och elektrisk utrustning – åt privatpersoner, företag och fastighetsägare. Det kan vara allt från en enmans elfirma till ett bolag med flera anställda elektriker. Reglerna i guiden gäller i grunden lika oavsett storlek, men en sak är gemensam: arbetet måste utföras enligt elsäkerhetslagstiftningen.",
        },
        {
          type: "paragraph",
          text: "Tre saker präglar elbranschen när du startar: **auktorisation och företagsregistrering hos Elsäkerhetsverket** (ett verkligt lagkrav, inte bara en branschstämpel), **egenkontrollprogrammet** (din dokumenterade rutin för säkert arbete) och **momsreglerna** (omvänd byggmoms mellan företag, 25 % och ROT mot privatpersoner). De tre är genomgående teman i guiden.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Så använder du guiden",
          text: "Läs kapitel 1–6 innan du tar din första kund – de avgör bolagsform, auktorisation, registrering och hur du hanterar momsen rätt. Kapitel 7–12 är drift: försäkring, pris, bokföring, anställda och marknadsföring. Kapitel 13 är en komplett checklista du kan kryssa av, och kapitel 14 samlar alla myndighetskontakter med länkar.",
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
          text: "För de flesta elföretag står valet mellan **enskild näringsverksamhet** (enskild firma) och **aktiebolag (AB)**. Båda går att driva elföretag i – men de skiljer sig åt på fyra punkter som spelar extra stor roll i en bransch med stort säkerhetsansvar och dyra installationer: personligt ansvar, kapitalkrav, skatt och förtroende hos beställare.",
        },
        {
          type: "subheading",
          text: "Enskild firma",
        },
        {
          type: "paragraph",
          text: "Enklast och billigast att starta. Du och företaget är samma juridiska person, vilket betyder att du har **personligt ansvar** för företagets skulder. Du betalar **egenavgifter** på överskottet (28,97 % för aktiv näringsverksamhet 2026, med ett schablonavdrag på 25 % innan avgiften beräknas) och inkomsten beskattas som din lön. Passar bra när du är ensam, har låg risk och vill komma igång snabbt. Observera att kraven på auktorisation, företagsregistrering och egenkontrollprogram gäller oavsett bolagsform.",
          source: "Skatteverket, egenavgifter 28,97 % och schablonavdrag 25 % (2026).",
        },
        {
          type: "subheading",
          text: "Aktiebolag",
        },
        {
          type: "paragraph",
          text: "Ett aktiebolag är en egen juridisk person. Ditt personliga ansvar begränsas i normalfallet till **aktiekapitalet på 25 000 kr** (lägsta tillåtna för privat AB) – en viktig trygghet när du tar på dig större installationer. Många byggföretag, fastighetsägare och offentliga upphandlingar arbetar hellre med AB, och bolagsformen gör det enklare att ta in delägare, anställa elektriker och bygga upp ett företagsvärde. Du anställs av ditt eget bolag och tar ut lön, vilket ger jämnare skatt och tillgång till t.ex. sjukpenninggrundande inkomst.",
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
          title: "Tumregel för elföretag",
          text: "Ska du jobba ensam med mindre service- och installationsjobb och vill komma igång billigt – börja som enskild firma och ombilda till AB när omsättningen växer. Ska du ta större entreprenader, jobba mot byggföretag eller anställa elektriker – välj AB direkt för ansvarsbegränsningens skull. Oavsett form: auktorisationen och företagsregistreringen måste vara på plats.",
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
      title: "Auktorisation, företagsregistrering och egenkontroll",
      lead: "Det här kapitlet är avgörande: elinstallation är ett reglerat yrke och kraven är lagstadgade – inte frivilliga.",
      blocks: [
        {
          type: "paragraph",
          text: "Här skiljer sig elbranschen från i princip alla andra hantverk. För att utföra elinstallationsarbete åt andra måste tre saker vara på plats enligt elsäkerhetslagstiftningen: en **auktoriserad elinstallatör**, en **registrering av företaget hos Elsäkerhetsverket** och ett **egenkontrollprogram**. Det här är **lagkrav** – inte en branschstämpel du väljer själv (som t.ex. Säker Vatten är för VVS).",
        },
        {
          type: "subheading",
          text: "Auktorisation som elinstallatör (Elsäkerhetsverket)",
        },
        {
          type: "paragraph",
          text: "Elinstallatör är ett **reglerat yrke**. Auktorisationen söks personligen hos **Elsäkerhetsverket** och bygger på utbildning och praktik. Det finns olika auktorisationstyper: **A** (fullständig auktorisation), **AL** (auktorisation lågspänning, som avser allt elinstallationsarbete på lågspänningsanläggningar och kräver utbildning enligt myndighetens föreskrifter samt praktik) och **B** (begränsad auktorisation). **Ansökningsavgiften är 1 890 kr** – kontrollera aktuell avgift och vilken typ som passar din verksamhet hos Elsäkerhetsverket, och räkna med handläggningstid.",
          source: "Elsäkerhetsverket, auktorisation som elinstallatör (ansökningsavgift 1 890 kr; typerna A, AL och B; ELSÄK-FS 2017:4).",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Detta är ett lagkrav – inte en frivillig auktorisation",
          text: "Till skillnad från exempelvis Säker Vatten i VVS-branschen, som är en **frivillig** branschauktorisation, är kraven i elbranschen **lagstadgade**. Att utföra elinstallationsarbete utan att uppfylla dem är inte tillåtet och kan leda till ingripanden från Elsäkerhetsverket. Ta därför kapitlet på största allvar redan innan du tar första uppdraget.",
        },
        {
          type: "subheading",
          text: "Registrera företaget hos Elsäkerhetsverket",
        },
        {
          type: "paragraph",
          text: "Ett företag som utför elinstallationsarbete **på någon annans anläggning** måste **registrera sig hos Elsäkerhetsverket**. I registreringen ska företaget ha minst en **elinstallatör för regelefterlevnad** – den som ansvarar för att arbetet utförs enligt regelverket – och ett **egenkontrollprogram**. Utför du arbete enbart på din **egen anläggning** krävs ingen registrering. Registreringen görs via Elsäkerhetsverkets e-tjänst.",
          source: "Elsäkerhetsverket, företagsregistrering och elinstallatör för regelefterlevnad (ELSÄK-FS 2017:3); arbete enbart på egen anläggning kräver ej registrering.",
        },
        {
          type: "subheading",
          text: "Egenkontrollprogram",
        },
        {
          type: "paragraph",
          text: "Egenkontrollprogrammet är företagets dokumenterade system för att säkerställa att elinstallationsarbetet utförs av rätt personer, med rätt kompetens och på ett elsäkert sätt. Det ska bland annat beskriva vem som är elinstallatör för regelefterlevnad, vilka som får utföra arbetet, hur de instrueras och hur arbetet kontrolleras. Det är en löpande del av driften – inte en engångshandling. Kontrollera Elsäkerhetsverkets vägledning för vad programmet måste innehålla.",
          source: "Elsäkerhetsverket, krav på egenkontrollprogram (ELSÄK-FS 2017:3).",
        },
        {
          type: "subheading",
          text: "F-skatt och personalliggare",
        },
        {
          type: "paragraph",
          text: "**F-skatt** ansöker du gratis hos **Skatteverket** via verksamt.se i samband med att du registrerar företaget. Utför du elarbete på en **byggarbetsplats** omfattas du normalt av byggets **elektroniska personalliggare** (via ID06) – Skatteverkets kontrollavgifter är **12 500 kr** plus **2 500 kr per oregistrerad person**, och **25 000 kr** om byggstart inte anmälts.",
          source: "Skatteverket, F-skatt och personalliggare i byggbranschen.",
        },
        {
          type: "links",
          items: [
            { label: "Elsäkerhetsverket – auktorisation", url: "https://www.elsakerhetsverket.se", note: "Auktorisation (A/AL/B), företagsregistrering, egenkontrollprogram, ELSÄK-FS 2017:3 och 2017:4" },
            { label: "Skatteverket – F-skatt och personalliggare", url: "https://www.skatteverket.se", note: "F-skatt, moms, personalliggare byggbranschen" },
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare" },
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
          text: "Elföretag är mer kapitalkrävande att starta än många tjänsteföretag: verktyg, mätinstrument, fordon och försäkringar kostar pengar innan första fakturan är betald, och dessutom tillkommer avgifter för auktorisation och registrering. Här är de poster du bör budgetera för. Myndighetsavgifter anges som fastställda belopp; övriga poster som kostnadsslag att räkna på.",
        },
        {
          type: "table",
          columns: ["Post", "Kommentar"],
          rows: [
            ["Aktiekapital (om AB)", "25 000 kr – sätts in på företagskonto, är ditt och kan användas i driften"],
            ["Registrering AB hos Bolagsverket", "1 900 kr via e-tjänst på verksamt.se (2 200 kr med pappersblankett)"],
            ["Registrering enskild firma", "Frivillig; namnskydd kostar ca 1 000 kr (kontrollera aktuell avgift hos Bolagsverket)"],
            ["F-skatt och momsregistrering", "Gratis hos Skatteverket"],
            ["Auktorisation hos Elsäkerhetsverket", "Ansökningsavgift 1 890 kr (kontrollera aktuell)"],
            ["Företagsregistrering hos Elsäkerhetsverket", "Krav för arbete på annans anläggning – kontrollera ev. avgift"],
            ["Verktyg och mätinstrument", "Handverktyg, isolationsprovare, installationstestare m.m. – en stor startpost"],
            ["Servicebil och lager", "Köp eller leasing + inredning, drivmedel, försäkring; lager av material"],
            ["Försäkringar", "Ansvars-, allrisk- och fordonsförsäkring (se kapitel 7)"],
            ["Arbetskläder och skydd", "Personlig skyddsutrustning enligt arbetsmiljökraven"],
          ],
          source: "Bolagsverket (1 900 kr AB e-tjänst, 25 000 kr aktiekapital); Elsäkerhetsverket (auktorisation 1 890 kr); Skatteverket (F-skatt/moms gratis).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Aktiekapitalet är inte borta",
          text: "Många tror att aktiekapitalet är en avgift. Det är det inte – de 25 000 kronorna är fortfarande dina och kan användas till verktyg, material eller löpande kostnader så snart bolaget är registrerat. Det ska bara finnas vid starten.",
        },
        {
          type: "paragraph",
          text: "**Likviditet är viktigare än vinst i början.** I elbranschen ligger du ofta ute med material och lön innan kunden betalar, särskilt vid ROT-jobb där en del av betalningen kommer från Skatteverket i efterhand. Planera för att ha pengar att röra dig med i minst de första månaderna, och använd gärna a contofakturering vid längre projekt (se kapitel 6 och 8).",
        },
      ],
    },

    // 5 ──────────────────────────────────────────────────────────────────
    {
      number: 5,
      title: "Steg-för-steg: så registrerar du företaget",
      lead: "Hela processen i rätt ordning – inklusive auktorisation och registrering hos Elsäkerhetsverket.",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Säkra auktorisationen",
              text: "Utan en auktoriserad elinstallatör (du själv eller någon du anställer) kan företaget inte ta elinstallationsuppdrag åt andra. Ansök om rätt auktorisationstyp (A/AL/B) hos Elsäkerhetsverket och räkna med handläggningstid.",
            },
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
              text: "Görs gratis via verksamt.se. F-skatt är ett krav i praktiken för att få uppdrag. Säljer du elinstallationstjänster är du i praktiken alltid momsregistrerad (befrielse möjlig först vid omsättning på högst 120 000 kr/år – se kapitel 6).",
            },
            {
              title: "Registrera företaget hos Elsäkerhetsverket",
              text: "Ska du utföra elinstallationsarbete på annans anläggning – registrera företaget hos Elsäkerhetsverket, utse en elinstallatör för regelefterlevnad och upprätta egenkontrollprogrammet.",
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
          variant: "warning",
          title: "Ordningen spelar roll i elbranschen",
          text: "Till skillnad från de flesta branscher kan du inte börja ta uppdrag direkt efter bolagsregistreringen. Auktorisation, företagsregistrering och egenkontrollprogram måste vara på plats först. Påbörja auktorisationsprocessen tidigt – handläggningstiden kan vara flera månader.",
          source: "Elsäkerhetsverket (auktorisation, företagsregistrering och egenkontrollprogram krävs för arbete på annans anläggning).",
        },
      ],
    },

    // 6 ──────────────────────────────────────────────────────────────────
    {
      number: 6,
      title: "Moms i elbranschen: omvänd byggmoms och ROT",
      lead: "De två momsreglerna som styr hur du fakturerar – och som du måste få rätt.",
      blocks: [
        {
          type: "paragraph",
          text: "Momsen är där nya elföretagare oftast gör fel. Två regler styr: **omvänd byggmoms** (mellan byggföretag) och **ROT-avdraget** (mot privatpersoner). Vilken som gäller avgörs av vem du säljer till.",
        },
        {
          type: "subheading",
          text: "Omvänd byggmoms (försäljning mellan företag i byggsektorn)",
        },
        {
          type: "paragraph",
          text: "När du säljer **byggtjänster** – och elinstallation räknas som byggtjänst – **till ett annat företag som i sin tur säljer byggtjänster** gäller omvänd skattskyldighet: **köparen** redovisar och betalar momsen till Skatteverket, inte du som säljare. På din faktura anger du beloppet **utan moms** och hänvisar till att omvänd skattskyldighet gäller (t.ex. \"Omvänd skattskyldighet för byggtjänster\"). Det är en **tvingande regel** – du får alltså inte lägga på moms i dessa fall.",
          source: "Skatteverket och mervärdesskattelagen (2023:200) 16 kap. 13 §.",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Privatperson eller byggföretag – det avgör momsen",
          text: "Säljer du eltjänst till en **privatperson**: lägg på **normal moms 25 %**. Säljer du byggtjänst till ett **byggföretag** som omsätter byggtjänster: **omvänd byggmoms** – fakturera utan moms, köparen redovisar den. Att blanda ihop dessa är det vanligaste momsfelet i branschen.",
          source: "Skatteverket; mervärdesskattelagen (2023:200) 16 kap. 13 §; momssats 25 %.",
        },
        {
          type: "subheading",
          text: "ROT-avdrag (försäljning till privatperson)",
        },
        {
          type: "paragraph",
          text: "ROT-avdraget gör dina tjänster billigare för privatpersoner och är ett av elföretagets bästa säljargument. Kunden får skattereduktion på **arbetskostnaden** (inte material). För **2026 är avdraget 30 % av arbetskostnaden**, upp till **50 000 kr per person och år**. ROT och RUT räknas ihop till sammanlagt **högst 75 000 kr per person och år**.",
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
      lead: "Rätt skydd är ofta ett krav från beställaren – och avgörande när en elinstallation orsakar skada.",
      blocks: [
        {
          type: "paragraph",
          text: "Elbranschen är en av få där försäkring inte är valfritt i praktiken: en felaktig installation kan orsaka brand eller personskada, och många beställare kräver att du kan visa giltig ansvarsförsäkring innan du får börja. Lika viktigt är att skyddet faktiskt täcker den typ av arbete du utför – läs villkoren, inte bara priset.",
        },
        {
          type: "list",
          items: [
            "**Företagsförsäkring med ansvarsförsäkring** – täcker skador du orsakar på kundens egendom eller på tredje person, t.ex. en brand efter en felaktig inkoppling. Ofta ett krav för att ens få uppdraget.",
            "**Allriskförsäkring / entreprenadförsäkring** – skyddar själva entreprenaden, material och arbete mot t.ex. brand, vatten, stöld och skadegörelse under byggtiden.",
            "**Fordonsförsäkring** – trafikförsäkring är lagstadgad; lägg till halv-/helförsäkring för servicebilen samt skydd för verktyg och instrument som förvaras i fordonet.",
            "**Egendoms- och verktygsförsäkring** – täcker stöld och skada på dina mätinstrument och verktyg, på arbetsplatsen och i bilen.",
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
          text: "Den vanligaste orsaken till att nya elföretag inte går runt är inte brist på jobb – det är för lågt pris. Ditt timpris ska inte bara täcka din lön, utan också alla timmar du inte fakturerar (offerter, inköp, dokumentation, resor), semester, sjukdom, försäkringar, fordon, verktyg, pension och vinst. Räkna baklänges från vad du behöver tjäna per år, inte framåt från en \"lagom\" timpenning.",
        },
        {
          type: "subheading",
          text: "Bygg upp ditt timpris",
        },
        {
          type: "list",
          items: [
            "Utgå från din **önskade årslön** och lägg på sociala avgifter, pension och semester.",
            "Lägg till **fasta kostnader**: servicebil, försäkringar, verktyg och instrument, telefon, bokföring, auktorisation och fortbildning.",
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
          text: "Att lägga ett **påslag på material** är standard och fullt legitimt – det täcker din tid för inköp, hantering, lagring, spill och garantiansvar. Hur stort påslaget är varierar med uppdrag; bestäm en tydlig princip och var konsekvent. Var transparent mot kunden om hur material och arbete faktureras, särskilt vid ROT-jobb där bara arbetskostnaden ger skattereduktion.",
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
      lead: "Löpande ordning i ekonomin – och de avdrag elföretag ofta missar.",
      blocks: [
        {
          type: "paragraph",
          text: "Alla företag är enligt bokföringslagen skyldiga att löpande bokföra sina affärshändelser och spara underlag. Du kan sköta det själv i ett bokföringsprogram eller anlita en redovisningsbyrå – för många elföretagare är byrån värd pengarna, eftersom den frigör fakturerbar tid och minskar risken för fel i moms och ROT.",
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
          text: "Du redovisar moms månads-, kvartals- eller årsvis beroende på omsättning. Kom ihåg den omvända byggmomsen från kapitel 6 – den ska redovisas korrekt i momsdeklarationen även när du fakturerar utan moms. Ett bokföringsprogram med stöd för bygg/omvänd skattskyldighet sparar mycket tid.",
        },
        {
          type: "subheading",
          text: "Vanliga avdrag för elföretag",
        },
        {
          type: "list",
          items: [
            "**Verktyg, mätinstrument och förbrukningsmaterial** – avdragsgilla; större inköp kan behöva skrivas av över tid.",
            "**Arbetskläder och skyddsutrustning** – skyddskläder och PPE är avdragsgilla.",
            "**Servicebil och drivmedel** – kostnader för företagets fordon; för privat bil i tjänsten gäller särskilda regler.",
            "**Försäkringar** – företags-, ansvars- och entreprenadförsäkring.",
            "**Auktorisation, fortbildning och certifieringar** – avgifter och utbildningar som rör verksamheten.",
            "**Kontor/lager, telefon och programvara** – den del som används i verksamheten, t.ex. system för dokumentation och egenkontroll.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Spara alla underlag",
          text: "Kvitton, fakturor och avtal ska sparas enligt bokföringslagen. I en bransch som granskas hårt (personalliggare, ROT, omvänd moms, elsäkerhet) är ordnad dokumentation ditt bästa skydd vid en kontroll. Dokumentationen enligt egenkontrollprogrammet ska också hållas i ordning.",
        },
      ],
    },

    // 10 ─────────────────────────────────────────────────────────────────
    {
      number: 10,
      title: "Att anställa",
      lead: "Från första elektrikern: avgifter, kollektivavtal, regelefterlevnad och ditt arbetsmiljöansvar.",
      blocks: [
        {
          type: "paragraph",
          text: "Att anställa elektriker är ofta steget som tar elföretaget från enmansfirma till riktigt företag – men det följer med kostnader och ansvar du måste ha koll på innan du skriver första anställningsavtalet.",
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
          text: "Elbranschen är i hög grad kollektivavtalsreglerad. Elektriker omfattas typiskt av Installationsavtalet mellan arbetsgivarorganisationen (Installatörsföretagen) och Svenska Elektrikerförbundet. Ett kollektivavtal binder dig till bland annat minimilöner, arbetstider, försäkringar och avsättningar, och krävs ofta av större beställare. Kontrollera aktuellt avtal, lönenivåer och villkor direkt hos parterna innan du anställer.",
        },
        {
          type: "subheading",
          text: "Regelefterlevnad och arbetsmiljöansvar",
        },
        {
          type: "paragraph",
          text: "Som arbetsgivare ansvarar du för att alla som utför elinstallationsarbete gör det inom ramen för företagets egenkontrollprogram och under elinstallatören för regelefterlevnad (kapitel 3). Du har dessutom ett långtgående **arbetsmiljöansvar**: arbete med el innebär risk för stötolyckor och brand, och du ska bedriva systematiskt arbetsmiljöarbete, se till att skyddsutrustning och säkra rutiner används och att personalen har rätt kompetens. På byggarbetsplatser ska anställda registreras i personalliggaren.",
          source: "Arbetsmiljöverket (systematiskt arbetsmiljöarbete); Elsäkerhetsverket (egenkontroll och regelefterlevnad).",
        },
      ],
    },

    // 11 ─────────────────────────────────────────────────────────────────
    {
      number: 11,
      title: "Vanliga misstag och fallgropar",
      lead: "De dyraste – och allvarligaste – nybörjarfelen i elbranschen.",
      blocks: [
        {
          type: "list",
          items: [
            "**Ta uppdrag utan auktorisation och registrering.** Det allvarligaste felet. Elinstallation åt andra kräver auktoriserad elinstallatör, företagsregistrering och egenkontrollprogram. Att hoppa över det är inte tillåtet.",
            "**Sakna eller slarva med egenkontrollprogrammet.** Programmet ska vara dokumenterat, känt av personalen och tillämpas i praktiken – inte ligga oläst i en pärm.",
            "**Fel moms på fakturan.** Att lägga moms på en byggtjänst som omfattas av omvänd skattskyldighet – eller tvärtom. Bestäm alltid först: privatperson (25 %) eller byggföretag (omvänd moms)?",
            "**Lova fel ROT-procent.** Den tillfälliga 50-procentsnivån gällde bara t.o.m. 31 december 2025. För 2026 är det 30 %.",
            "**För lågt timpris.** Att inte räkna in icke-fakturerbar tid, servicebil, instrument, försäkringar och vinst. Sätt priset baklänges från din årslön (kapitel 8).",
            "**Missa personalliggaren på byggen.** Tar du uppdrag på byggarbetsplats utan att checka in i liggaren riskerar du Skatteverkets kontrollavgifter.",
            "**Otydliga avtal och ÄTA-hantering.** Muntliga överenskommelser och oklara tilläggsarbeten är den vanligaste tvistekällan. Allt skriftligt.",
            "**Saknad eller fel försäkring.** Att börja ett jobb utan ansvarsförsäkring – eller med ett skydd som inte täcker arbetet – kan bli förödande dyrt.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Det dyraste felet är att gissa",
          text: "Reglerna i elbranschen är lagstadgade och uppdateras (auktorisationskrav, föreskrifter, momsgränser, ROT-nivåer). Bygg en vana att kontrollera aktuell uppgift hos Elsäkerhetsverket och Skatteverket innan du fakturerar eller lovar något – och spara dokumentationen.",
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
          text: "I elbranschen kommer de flesta jobb via **rekommendationer** och akuta behov – men du måste vara lätt att hitta, snabb att svara och tydlig i offerten. Här är de kanaler som ger mest för ett nystartat elföretag.",
        },
        {
          type: "list",
          items: [
            "**Snabba, tydliga offerter.** Den som svarar först och mest professionellt vinner ofta jobbet. Ha en offertmall klar.",
            "**Google – sökning och karta.** Skapa en Google-företagsprofil så att du syns när någon söker elektriker i ditt område. Be nöjda kunder om omdömen.",
            "**Enkel hemsida.** Visa vad du gör, referensbilder, kontaktuppgifter och att du har F-skatt, försäkring och auktorisation. Det räcker långt.",
            "**Växande nischer.** Laddboxar, solceller och energieffektivisering ger nya kundgrupper – profilera dig gärna mot dem.",
            "**Samarbete med byggföretag och fastighetsägare.** Återkommande underentreprenörsuppdrag och serviceavtal ger stabil beläggning.",
            "**Bilen och skyltningen.** Dekaler på servicebilen är billig, lokal marknadsföring som syns varje dag.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Visa att du är seriös",
          text: "F-skatt, försäkring, auktorisation, registrering hos Elsäkerhetsverket och skriftliga avtal är inte bara krav – de är säljargument. Privatkunder och beställare väljer gärna det elföretag som tydligt visar att allt är i ordning. Lyft fram det i offert och på hemsidan.",
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
          text: "Auktorisation och registrering (gör först)",
        },
        {
          type: "checklist",
          items: [
            "Säkrat auktoriserad elinstallatör (rätt typ A/AL/B) hos Elsäkerhetsverket",
            "Registrerat företaget hos Elsäkerhetsverket för arbete på annans anläggning",
            "Utsett elinstallatör för regelefterlevnad",
            "Upprättat och infört egenkontrollprogram",
          ],
        },
        {
          type: "subheading",
          text: "Företaget och skatten",
        },
        {
          type: "checklist",
          items: [
            "Valt bolagsform (enskild firma eller AB) utifrån ansvar och skatt",
            "Kontrollerat och valt företagsnamn hos Bolagsverket",
            "Registrerat företaget (AB: 1 900 kr e-tjänst, aktiekapital 25 000 kr insatt)",
            "Ansökt om F-skatt och momsregistrerat företaget",
            "Anmält verklig huvudman (AB) och öppnat företagskonto",
          ],
        },
        {
          type: "subheading",
          text: "Ekonomi, försäkring och säkerhet",
        },
        {
          type: "checklist",
          items: [
            "Tecknat ansvars-/företagsförsäkring och kontrollerat beställarkrav",
            "Tecknat entreprenad-/allrisk- och fordonsförsäkring vid behov",
            "Satt timpris baklänges från årslön, med icke-fakturerbar tid och vinst",
            "Förstått omvänd byggmoms (företag) vs 25 % moms (privatperson)",
            "Satt rutin för ROT (30 % 2026, max 50 000 kr/person/år) på privatjobb",
            "Skaffat ID06-kort och satt rutin för personalliggare vid arbete på byggen",
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
      lead: "Spara den här sidan – här kontrollerar du aktuella krav, siffror och regler.",
      blocks: [
        {
          type: "paragraph",
          text: "Reglerna och beloppen i elbranschen uppdateras, och kraven är lagstadgade. Använd länkarna nedan för att kontrollera aktuell uppgift direkt hos källan innan du fakturerar, prissätter eller lovar något till en kund.",
        },
        {
          type: "links",
          items: [
            { label: "Elsäkerhetsverket", url: "https://www.elsakerhetsverket.se", note: "Auktorisation (A/AL/B), företagsregistrering, egenkontrollprogram, föreskrifter" },
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare – allt på ett ställe" },
            { label: "Bolagsverket", url: "https://www.bolagsverket.se", note: "Registrering, avgifter, namn, verklig huvudman" },
            { label: "Skatteverket", url: "https://www.skatteverket.se", note: "F-skatt, moms, omvänd byggmoms, ROT, personalliggare, belopp och procent" },
            { label: "Arbetsmiljöverket", url: "https://www.av.se", note: "Systematiskt arbetsmiljöarbete, elsäkerhet vid arbete, skyddsutrustning" },
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

export default elforetag;
