import type { GuideContent } from "./types";

// ──────────────────────────────────────────────────────────────────────────
// STARTGUIDE: MÅLERIFÖRETAG
//
// YMYL – faktagranskad mot primärkälla. Verifierade uppgifter (juni 2026):
//  • Aktiekapital privat AB: 25 000 kr (Bolagsverket)
//  • AB-nyregistrering: 1 900 kr e-tjänst / 2 200 kr blankett (Bolagsverket)
//  • Momsbefrielse-gräns: omsättning ≤ 120 000 kr/år (Skatteverket, fr.o.m.
//    1 jan 2025); moms normalsats 25 %
//  • Omvänd byggmoms: köparen redovisar momsen – ML (2023:200) 16 kap. 13 §
//    (måleri på byggprojekt räknas som byggtjänst)
//  • ROT-avdrag 2026: 30 % av arbetskostnaden, max 50 000 kr/person/år; ROT+RUT
//    max 75 000 kr/person/år (Skatteverket; tillfälliga 50 % gällde 12 maj–
//    31 dec 2025 och har upphört)
//  • Arbetsgivaravgift 2026: 31,42 %; egenavgifter 28,97 % + schablonavdrag 25 %
//  • Personalliggare bygg: 12 500 kr + 2 500 kr/oregistrerad; 25 000 kr om
//    byggstart ej anmälts (Skatteverket). Måleri på byggarbetsplats omfattas av
//    byggets personalliggare.
//  • Kollektivavtal: Måleriavtalet ("kollektivavtal för måleriyrket") mellan
//    arbetsgivarorganisationen Måleriföretagen i Sverige och Byggnads. Svenska
//    Målareförbundet gick upp i Byggnads i maj 2024. Avtalsperiod 1 maj 2025–
//    30 april 2027. (Byggnads, Måleriföretagen.)
//  • F-skatt: registrering gratis hos Skatteverket via verksamt.se
//
// Där en exakt siffra inte gått att verifiera mot primärkälla skrivs den
// kvalitativt ("kontrollera aktuell uppgift hos …") – aldrig gissad.
// ──────────────────────────────────────────────────────────────────────────

const maleri: GuideContent = {
  slug: "maleri",
  industry: "Måleriföretag",
  title: "Starta & driva måleriföretag",
  subtitle: "Komplett startguide 2026",
  year: 2026,
  reviewedAt: "2026-06-04",
  reviewedSources: "Skatteverket, Bolagsverket & Arbetsmiljöverket",
  intro:
    "Den kompletta, faktagranskade guiden för dig som ska starta måleriföretag i Sverige – från bolagsform och F-skatt till omvänd byggmoms, ROT-avdrag, säsongsplanering, försäkringar, prissättning och din första kund. Varje siffra är kontrollerad mot Skatteverket och Bolagsverket.",

  chapters: [
    // 1 ──────────────────────────────────────────────────────────────────
    {
      number: 1,
      title: "Att driva måleriföretag i Sverige",
      lead: "Vad branschen kräver av dig som företagare – och vad som gör den lönsam.",
      blocks: [
        {
          type: "paragraph",
          text: "Måleri är ett av de mest tillgängliga hantverksyrkena att starta eget i: investeringen är låg jämfört med många andra byggyrken, efterfrågan på både privat- och företagssidan är stabil, och ROT-avdraget gör dina tjänster märkbart billigare för privatkunder. Samtidigt är branschen konkurrensutsatt och säsongsbetonad – lönsamheten avgörs av att du prissätter rätt, planerar året smart och håller hög kvalitet.",
        },
        {
          type: "paragraph",
          text: "Med **måleriföretag** menar vi i den här guiden företag som utför in- och utvändig målning, tapetsering, spackling och ytbehandling åt privatpersoner, bostadsrättsföreningar, byggföretag och fastighetsägare. Reglerna i guiden gäller i grunden lika oavsett storlek, men en sak skiljer kunderna åt rejält: **ROT-avdraget gäller bara privatpersoner**, medan måleri åt byggföretag ofta hanteras med omvänd byggmoms.",
        },
        {
          type: "paragraph",
          text: "Tre saker präglar måleribranschen när du startar: **ROT-avdraget** (ditt bästa säljargument mot privatkunder), **säsongsväxlingen** (utvändigt måleri på sommaren, invändigt på vintern) och **momsreglerna** (omvänd byggmoms mellan byggföretag, 25 % och ROT mot privatpersoner). De tre är genomgående teman i guiden.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Så använder du guiden",
          text: "Läs kapitel 1–6 innan du tar din första kund – de avgör bolagsform, moms och hur du hanterar ROT rätt. Kapitel 7–12 är drift: försäkring, pris, bokföring, anställda och marknadsföring. Kapitel 13 är en komplett checklista du kan kryssa av, och kapitel 14 samlar alla myndighetskontakter med länkar.",
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
          text: "För de flesta måleriföretag står valet mellan **enskild näringsverksamhet** (enskild firma) och **aktiebolag (AB)**. Båda fungerar utmärkt i måleribranschen – den har låg startkostnad, så valet styrs mer av skatt, ansvar och hur du vill växa än av kapitalbehov.",
        },
        {
          type: "subheading",
          text: "Enskild firma",
        },
        {
          type: "paragraph",
          text: "Enklast och billigast att starta – populärt i måleribranschen just för att investeringen är låg. Du och företaget är samma juridiska person, vilket betyder att du har **personligt ansvar** för företagets skulder. Du betalar **egenavgifter** på överskottet (28,97 % för aktiv näringsverksamhet 2026, med ett schablonavdrag på 25 % innan avgiften beräknas) och inkomsten beskattas som din lön. Passar bra när du startar ensam, har låg risk och vill komma igång snabbt.",
          source: "Skatteverket, egenavgifter 28,97 % och schablonavdrag 25 % (2026).",
        },
        {
          type: "subheading",
          text: "Aktiebolag",
        },
        {
          type: "paragraph",
          text: "Ett aktiebolag är en egen juridisk person. Ditt personliga ansvar begränsas i normalfallet till **aktiekapitalet på 25 000 kr** (lägsta tillåtna för privat AB). Många byggföretag, bostadsrättsföreningar och offentliga upphandlingar arbetar hellre med AB, och bolagsformen gör det enklare att ta in delägare, anställa målare och bygga upp ett företagsvärde. Du anställs av ditt eget bolag och tar ut lön, vilket ger jämnare skatt och tillgång till t.ex. sjukpenninggrundande inkomst.",
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
          title: "Tumregel för måleriföretag",
          text: "Ska du börja ensam med privatkunder och mindre jobb och vill komma igång billigt – starta gärna som enskild firma och ombilda till AB när omsättningen och antalet anställda växer. Vill du rikta in dig på byggföretag, större entreprenader eller upphandlingar – välj AB direkt.",
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
      title: "Tillstånd, krav och säkerhet",
      lead: "Måleri har få formella tillståndskrav – men desto viktigare att få rätt på det som gäller.",
      blocks: [
        {
          type: "paragraph",
          text: "Till skillnad från el och VVS krävs **inget särskilt yrkestillstånd eller auktorisation** för att starta måleriföretag. Det gör tröskeln låg – men det finns ändå krav och rutiner du måste hantera rätt. Gå igenom punkterna nedan.",
        },
        {
          type: "subheading",
          text: "F-skatt och registrering (Skatteverket)",
        },
        {
          type: "paragraph",
          text: "**F-skatt** är grunden. Den visar att du själv betalar din skatt och dina egenavgifter, och i praktiken kräver alla seriösa kunder – särskilt företag och föreningar – att din firma har F-skatt. Du ansöker gratis hos **Skatteverket** via verksamt.se, samtidigt som du registrerar företaget och anmäler moms (samt arbetsgivare om du ska anställa).",
        },
        {
          type: "subheading",
          text: "Personalliggare på byggarbetsplatser (Skatteverket)",
        },
        {
          type: "paragraph",
          text: "Utför du måleri på en **byggarbetsplats** omfattas du normalt av byggets krav på **elektronisk personalliggare** – en löpande förteckning över vilka som är verksamma på platsen, som branschen i praktiken sköter via **ID06**. Saknas eller är liggaren felaktig kan Skatteverket ta ut en kontrollavgift på **12 500 kr** plus **2 500 kr per oregistrerad person**, och **25 000 kr** om byggstart inte anmälts. Säkerställ rutinen innan du tar uppdrag på byggen.",
          source: "Skatteverket, personalliggare i byggbranschen (skatteförfarandelagen).",
        },
        {
          type: "subheading",
          text: "Kemikalier, farligt avfall och arbete på höjd",
        },
        {
          type: "paragraph",
          text: "Måleri innebär hantering av färg, lösningsmedel och spackel som kan vara hälso- och miljöfarliga. Du ska ha säkerhetsdatablad tillgängliga, hantera och lämna **farligt avfall** korrekt och följa Arbetsmiljöverkets regler om kemiska arbetsmiljörisker. Arbete från **stege och ställning** ställer krav på fallskydd och säker utrustning. Vid äldre fastigheter kan färg innehålla bly eller andra ämnen som kräver särskild hantering – kontrollera aktuella regler hos Arbetsmiljöverket och Naturvårdsverket.",
          source: "Arbetsmiljöverket (kemiska arbetsmiljörisker, arbete på höjd); Naturvårdsverket (farligt avfall).",
        },
        {
          type: "links",
          items: [
            { label: "Skatteverket – F-skatt och personalliggare", url: "https://www.skatteverket.se", note: "F-skatt, moms, personalliggare byggbranschen" },
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare" },
            { label: "Arbetsmiljöverket", url: "https://www.av.se", note: "Kemiska arbetsmiljörisker, arbete på höjd, ställning" },
          ],
        },
      ],
    },

    // 4 ──────────────────────────────────────────────────────────────────
    {
      number: 4,
      title: "Startkapital och faktiska kostnader",
      lead: "Vad det faktiskt kostar att komma igång – en av de billigare byggbranscherna att starta i.",
      blocks: [
        {
          type: "paragraph",
          text: "Måleri är relativt billigt att starta jämfört med el, VVS och bygg: du behöver i grunden verktyg, ställning/stege, transport och försäkring – inte dyra maskiner. Här är de poster du bör budgetera för. Myndighetsavgifter anges som fastställda belopp; övriga poster som kostnadsslag att räkna på.",
        },
        {
          type: "table",
          columns: ["Post", "Kommentar"],
          rows: [
            ["Aktiekapital (om AB)", "25 000 kr – sätts in på företagskonto, är ditt och kan användas i driften"],
            ["Registrering AB hos Bolagsverket", "1 900 kr via e-tjänst på verksamt.se (2 200 kr med pappersblankett)"],
            ["Registrering enskild firma", "Frivillig; namnskydd kostar ca 1 000 kr (kontrollera aktuell avgift hos Bolagsverket)"],
            ["F-skatt och momsregistrering", "Gratis hos Skatteverket"],
            ["Verktyg och utrustning", "Penslar, rollers, sprutor, slipmaskiner, stege/ställning, avtäckning"],
            ["Transport", "Skåpbil för material och utrustning + drivmedel och försäkring"],
            ["Försäkringar", "Ansvars- och företagsförsäkring (se kapitel 7)"],
            ["ID06-kort", "Kostnad per kort/person vid arbete på byggarbetsplatser"],
            ["Arbetskläder och skydd", "Andningsskydd, handskar och skyddskläder"],
          ],
          source: "Bolagsverket (1 900 kr AB e-tjänst, 25 000 kr aktiekapital); Skatteverket (F-skatt/moms gratis).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Låg tröskel – men räkna ändå på lönsamheten",
          text: "Att måleri är billigt att starta betyder inte att det är lätt att tjäna pengar. Den låga tröskeln gör branschen konkurrensutsatt, och lönsamheten avgörs av hur du prissätter, planerar säsongen och håller kvaliteten. Lägg krut på kalkylen i kapitel 8 från början.",
        },
      ],
    },

    // 5 ──────────────────────────────────────────────────────────────────
    {
      number: 5,
      title: "Steg-för-steg: så registrerar du företaget",
      lead: "Hela registreringsprocessen i rätt ordning – från namn till första kunden.",
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
              title: "Ansök om F-skatt hos Skatteverket",
              text: "Görs gratis via verksamt.se, ofta i samma flöde. F-skatt är ett krav i praktiken för att få uppdrag. Räkna med någon till några veckors handläggning.",
            },
            {
              title: "Momsregistrera dig",
              text: "Anmäl moms i samma ärende. Säljer du måleritjänster är du i praktiken alltid momsregistrerad (befrielse möjlig först vid omsättning på högst 120 000 kr/år – se kapitel 6).",
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
              text: "Skaffa företagskonto (krav för AB), teckna ansvars- och företagsförsäkring (kapitel 7), beställ ID06-kort vid behov och bestäm bokföringslösning (kapitel 9) innan du tar första uppdraget.",
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
      title: "Moms i måleribranschen: omvänd byggmoms och ROT",
      lead: "De två momsreglerna som styr hur du fakturerar – och som du måste få rätt.",
      blocks: [
        {
          type: "paragraph",
          text: "Momsen är där nya måleriföretagare oftast gör fel. Två regler styr: **omvänd byggmoms** (mellan byggföretag) och **ROT-avdraget** (mot privatpersoner). Vilken som gäller avgörs av vem du säljer till.",
        },
        {
          type: "subheading",
          text: "Omvänd byggmoms (försäljning mellan företag i byggsektorn)",
        },
        {
          type: "paragraph",
          text: "När du utför måleri som **byggtjänst** **åt ett annat företag som i sin tur säljer byggtjänster** (t.ex. en byggentreprenör) gäller omvänd skattskyldighet: **köparen** redovisar och betalar momsen till Skatteverket, inte du som säljare. På din faktura anger du beloppet **utan moms** och hänvisar till att omvänd skattskyldighet gäller (t.ex. \"Omvänd skattskyldighet för byggtjänster\"). Det är en **tvingande regel** – du får alltså inte lägga på moms i dessa fall.",
          source: "Skatteverket och mervärdesskattelagen (2023:200) 16 kap. 13 §.",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Privatperson eller byggföretag – det avgör momsen",
          text: "Säljer du måleritjänst till en **privatperson**: lägg på **normal moms 25 %**. Utför du måleri som byggtjänst åt ett **byggföretag** som omsätter byggtjänster: **omvänd byggmoms** – fakturera utan moms, köparen redovisar den. Att blanda ihop dessa är det vanligaste momsfelet i branschen.",
          source: "Skatteverket; mervärdesskattelagen (2023:200) 16 kap. 13 §; momssats 25 %.",
        },
        {
          type: "subheading",
          text: "ROT-avdrag (försäljning till privatperson)",
        },
        {
          type: "paragraph",
          text: "ROT-avdraget gör dina tjänster billigare för privatpersoner och är måleriföretagets bästa säljargument. Kunden får skattereduktion på **arbetskostnaden** (inte material som färg och tapet). För **2026 är avdraget 30 % av arbetskostnaden**, upp till **50 000 kr per person och år**. ROT och RUT räknas ihop till sammanlagt **högst 75 000 kr per person och år**. Eftersom arbetskostnaden ofta är en stor del av notan vid måleri blir rabatten för kunden betydande.",
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
          text: "Praktiskt fungerar ROT som en **fakturamodell**: du drar av kundens skattereduktion direkt på fakturan, kunden betalar mellanskillnaden, och du begär resten från Skatteverket. För att det ska fungera måste du **specificera arbetskostnaden separat** från materialet, kunden måste **äga bostaden** och ha tillräckligt skatteutrymme, och du behöver kundens personnummer och fastighets-/bostadsuppgifter. Observera att utvändig målning av t.ex. fasad normalt ger ROT medan vissa nybyggnadsmoment inte gör det – dubbelkolla mot Skatteverkets lista och kundens utrymme.",
          source: "Skatteverket, rotavdrag (arbetskostnad, fakturamodellen, lista över rotarbeten).",
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
          text: "Som måleriföretag arbetar du i andras hem och lokaler, ofta nära dyra ytor, möbler och inredning. Det gör ansvarsförsäkring i princip nödvändig – många kunder, särskilt företag och bostadsrättsföreningar, kräver att du kan visa giltigt skydd innan du får uppdraget. Läs villkoren, inte bara priset.",
        },
        {
          type: "list",
          items: [
            "**Företagsförsäkring med ansvarsförsäkring** – täcker skador du orsakar på kundens egendom (t.ex. färgstänk på golv eller skadad inredning). Ofta ett krav för att få uppdraget.",
            "**Allriskförsäkring / entreprenadförsäkring** – skyddar entreprenaden, material och arbete under projekttiden vid större jobb.",
            "**Fordonsförsäkring** – trafikförsäkring är lagstadgad; lägg till halv-/helförsäkring för skåpbilen samt skydd för utrustning som förvaras i fordonet.",
            "**Egendoms- och verktygsförsäkring** – täcker stöld och skada på dina maskiner, sprutor och ställningar.",
            "**Sjukavbrotts- och olycksfallsförsäkring** – ger dig själv ekonomiskt skydd vid sjukdom eller olycka, viktigt i ett fysiskt yrke med arbete på höjd.",
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
      title: "Prissättning, säsong och lönsamhet",
      lead: "Så sätter du pris och planerar året så att du har jobb även i lågsäsong.",
      blocks: [
        {
          type: "paragraph",
          text: "Den vanligaste orsaken till att nya måleriföretag inte går runt är inte brist på jobb – det är för lågt pris och ojämn beläggning över året. Ditt pris ska täcka din lön, sociala avgifter, utrustning, transport, försäkring, administration och vinst. Räkna baklänges från vad du behöver tjäna per år, inte framåt från konkurrentens lägstapris.",
        },
        {
          type: "subheading",
          text: "Bygg upp ditt pris",
        },
        {
          type: "list",
          items: [
            "Utgå från din **önskade årslön** och lägg på sociala avgifter, pension och semester.",
            "Lägg till **fasta kostnader**: bil, drivmedel, utrustning, försäkring, administration.",
            "Dela på **fakturerbara timmar** – offerter, inköp och restid är sällan betalda. Räkna realistiskt.",
            "Bestäm om du prissätter **per timme, per kvadratmeter eller per fast pris** – fast pris kräver att du kan mäta upp och kalkylera åtgång noggrant.",
            "Lägg på **vinstmarginal** så att företaget tål magra perioder.",
          ],
        },
        {
          type: "subheading",
          text: "Säsongsplanering",
        },
        {
          type: "paragraph",
          text: "Måleri är säsongsbetonat: **utvändig målning** (fasader, fönster, staket) sker när det är torrt och varmt, alltså under den varmare delen av året, medan **invändigt måleri** (väggar, tak, snickerier, tapetsering) kan utföras året runt och passar bra under vinterhalvåret. Planera året så att utvändiga jobb bokas in under sommarmånaderna och invändiga uppdrag fyller vintern – då undviker du svackor i beläggning och intäkter.",
        },
        {
          type: "callout",
          variant: "fact",
          title: "ROT-effekten i din offert",
          text: "ROT gör ditt arbete märkbart billigare för privatkunden utan att du sänker ditt pris. På en arbetskostnad på 25 000 kr blir kundens nettokostnad 17 500 kr efter 30 % rotavdrag (max 50 000 kr/person/år). Visa kunden både bruttopris och pris efter ROT i offerten – det höjer din avslutsfrekvens.",
          source: "Räkneexempel baserat på rotavdrag 30 % 2026 (Skatteverket).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Skriftlig offert – alltid",
          text: "Lämna alltid skriftlig offert med tydlig avgränsning av vad som ingår (antal strykningar, förbehandling, kulörer), hur ändrings- och tilläggsarbeten (ÄTA) hanteras, betalningsplan och giltighetstid. Det förebygger de flesta tvister och gör dig mer professionell i kundens ögon.",
        },
      ],
    },

    // 9 ──────────────────────────────────────────────────────────────────
    {
      number: 9,
      title: "Bokföring och skatt",
      lead: "Löpande ordning i ekonomin – och de avdrag måleriföretag ofta missar.",
      blocks: [
        {
          type: "paragraph",
          text: "Alla företag är enligt bokföringslagen skyldiga att löpande bokföra sina affärshändelser och spara underlag. Du kan sköta det själv i ett bokföringsprogram eller anlita en redovisningsbyrå – för många måleriföretagare är byrån värd pengarna, eftersom den frigör fakturerbar tid och minskar risken för fel i moms och ROT.",
        },
        {
          type: "subheading",
          text: "F-skatt och preliminärskatt",
        },
        {
          type: "paragraph",
          text: "Med **F-skatt** betalar du själv in din skatt och dina egenavgifter (enskild firma) eller bolagets skatt (AB). Skatteverket beslutar en **preliminärskatt** som du betalar varje månad, baserad på din uppskattade vinst. I en säsongsbetonad bransch är det extra viktigt att prognosen är realistisk – justera den hos Skatteverket om beläggningen svänger.",
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
          text: "Vanliga avdrag för måleriföretag",
        },
        {
          type: "list",
          items: [
            "**Verktyg, maskiner och förbrukningsmaterial** – penslar, sprutor, slipmaskiner, ställning; större inköp kan skrivas av över tid.",
            "**Arbetskläder och skyddsutrustning** – andningsskydd, handskar och skyddskläder.",
            "**Fordon och drivmedel** – kostnader för företagets bil; för privat bil i tjänsten gäller särskilda regler.",
            "**Försäkringar** – företags-, ansvars- och fordonsförsäkring.",
            "**Utbildning** – t.ex. arbetsmiljö, kemikaliehantering och ställningsbyggnad.",
            "**Kontor/förråd, telefon och programvara** – den del som används i verksamheten.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Spara alla underlag",
          text: "Kvitton, fakturor och avtal ska sparas enligt bokföringslagen. I en bransch som granskas (personalliggare på byggen, ROT, omvänd moms) är ordnad dokumentation ditt bästa skydd vid en kontroll. Digitalisera kvitton löpande så de inte bleknar bort.",
        },
      ],
    },

    // 10 ─────────────────────────────────────────────────────────────────
    {
      number: 10,
      title: "Att anställa",
      lead: "Från första målaren: avgifter, kollektivavtal och ditt arbetsmiljöansvar.",
      blocks: [
        {
          type: "paragraph",
          text: "Att anställa målare är ofta steget som tar måleriföretaget från enmansfirma till riktigt företag – men det följer med kostnader och ansvar du måste ha koll på innan du skriver första anställningsavtalet.",
        },
        {
          type: "subheading",
          text: "Arbetsgivaravgifter",
        },
        {
          type: "paragraph",
          text: "Utöver lönen betalar du **arbetsgivaravgifter**. Normalsatsen 2026 är **31,42 %** av bruttolönen. På en månadslön på 32 000 kr betyder det runt 10 000 kr i arbetsgivaravgift utöver lönen – budgetera för det när du sätter ditt pris (kapitel 8). Vissa nedsättningar kan finnas i särskilda fall; kontrollera aktuella regler hos Skatteverket.",
          source: "Skatteverket, arbetsgivaravgift normalsats 31,42 % (2026).",
        },
        {
          type: "subheading",
          text: "Kollektivavtal (Måleriavtalet)",
        },
        {
          type: "paragraph",
          text: "Måleribranschen är i hög grad kollektivavtalsreglerad. Det centrala avtalet är **Måleriavtalet** (kollektivavtalet för måleriyrket) mellan arbetsgivarorganisationen **Måleriföretagen i Sverige** och **Byggnads** (Svenska Målareförbundet gick upp i Byggnads under 2024). Avtalet reglerar bland annat löner, ackord, arbetstider och försäkringar. Många beställare kräver kollektivavtal eller motsvarande villkor. Kontrollera aktuella lönenivåer och villkor direkt hos parterna innan du anställer.",
          source: "Byggnads och Måleriföretagen i Sverige (Måleriavtalet; Svenska Målareförbundet uppgick i Byggnads 2024).",
        },
        {
          type: "subheading",
          text: "Arbetsmiljöansvar",
        },
        {
          type: "paragraph",
          text: "Som arbetsgivare har du ett **arbetsmiljöansvar**: måleri innebär arbete på höjd, repetitiva rörelser och hantering av kemikalier. Du ska bedriva systematiskt arbetsmiljöarbete – undersöka och åtgärda risker, se till att rätt skyddsutrustning (andningsskydd, fallskydd) används och att personalen får introduktion och rätt kemikaliehantering. På byggarbetsplatser ska anställda registreras i personalliggaren.",
          source: "Arbetsmiljöverket, systematiskt arbetsmiljöarbete (kemiska risker, arbete på höjd).",
        },
      ],
    },

    // 11 ─────────────────────────────────────────────────────────────────
    {
      number: 11,
      title: "Vanliga misstag och fallgropar",
      lead: "De dyraste nybörjarfelen i måleribranschen – och hur du undviker dem.",
      blocks: [
        {
          type: "list",
          items: [
            "**Fel moms på fakturan.** Att lägga moms på måleri som omfattas av omvänd skattskyldighet – eller tvärtom. Bestäm alltid först: privatperson (25 %) eller byggföretag (omvänd moms)?",
            "**Lova fel ROT-procent.** Den tillfälliga 50-procentsnivån gällde bara t.o.m. 31 december 2025. För 2026 är det 30 %. Räkna alltid med rätt nivå i offerten.",
            "**Räkna fel på åtgång vid fast pris.** Underskatta inte förbehandling, antal strykningar och svåra ytor. Mät upp och kalkylera noggrant innan du lämnar fast pris.",
            "**Ojämn beläggning över året.** Att inte planera in invändiga jobb för vintern ger inkomstsvackor. Planera säsongen aktivt (kapitel 8).",
            "**För lågt pris.** Att inte räkna in icke-fakturerbar tid, utrustning, försäkring och vinst. Den låga tröskeln pressar priserna – sätt ditt baklänges från din lön.",
            "**Otydliga avtal och ÄTA-hantering.** Oklart vad som ingår (kulörer, strykningar) är en vanlig tvistekälla. Allt skriftligt.",
            "**Slarv med kemikalier och arbete på höjd.** Att hoppa över andningsskydd, säker ställning och korrekt avfallshantering ger skador och sanktionsavgifter.",
            "**Missa personalliggaren på byggen.** Tar du uppdrag på byggarbetsplats utan att checka in i liggaren riskerar du Skatteverkets kontrollavgifter.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Det dyraste felet är att gissa",
          text: "Reglerna ändras (momsgränser, ROT-nivåer, kollektivavtal). Bygg en vana att kontrollera aktuell uppgift hos Skatteverket innan du fakturerar eller lovar något – och spara dokumentationen.",
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
          text: "I måleribranschen kommer de flesta jobb via **rekommendationer och referensbilder** – ett välmålat hem säljer sig självt. Du måste vara lätt att hitta, snabb att svara och tydlig i offerten. Här är de kanaler som ger mest för ett nystartat måleriföretag.",
        },
        {
          type: "list",
          items: [
            "**Före- och efterbilder.** Måleri är visuellt – bygg en portfölj med bilder från dina jobb och visa dem på hemsida och i sociala medier.",
            "**Google – sökning och karta.** Skapa en Google-företagsprofil så att du syns när någon söker målare i ditt område. Be nöjda kunder om omdömen.",
            "**Enkel hemsida.** Visa tjänster, referensbilder, områden du täcker och att du har F-skatt och försäkring. Det räcker långt.",
            "**Samarbete med byggföretag, mäklare och bostadsrättsföreningar.** Större och återkommande uppdrag, särskilt fasad- och trappstädmåleri.",
            "**Förmedlingstjänster.** Plattformar som matchar hantverkare och kunder kan ge de första jobben medan du bygger eget rykte.",
            "**Bilen och skyltningen.** Dekaler på bilen och skylt på arbetsplatsen är billig, lokal marknadsföring som syns varje dag.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Visa att du är seriös",
          text: "F-skatt, försäkring, kollektivavtal/villkor och skriftliga avtal är inte bara krav – de är säljargument. Privatkunder och beställare väljer gärna den målare som tydligt visar att allt är i ordning. Lyft fram det i offert och på hemsidan.",
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
          text: "Säkerhet och rutiner",
        },
        {
          type: "checklist",
          items: [
            "Skaffat ID06-kort och satt rutin för personalliggare vid arbete på byggen",
            "Satt rutin för kemikaliehantering, säkerhetsdatablad och farligt avfall",
            "Skaffat andningsskydd, fallskydd och säker ställning/stege",
            "Satt rutin för riskbedömning vid arbete på höjd",
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
            "Tecknat fordons- och eventuell entreprenadförsäkring",
            "Satt pris baklänges från årslön, med icke-fakturerbar tid och vinst",
            "Bestämt prismodell (timme/kvm/fast pris) och princip för materialpåslag",
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
            "Tagit fram offertmall med strykningar, ÄTA, betalningsplan och giltighetstid",
            "Skapat Google-företagsprofil och enkel hemsida med referensbilder",
            "Planerat säsongen (utvändigt sommar, invändigt vinter)",
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
          text: "Reglerna och beloppen i måleribranschen uppdateras. Använd länkarna nedan för att kontrollera aktuell uppgift direkt hos källan innan du fakturerar, prissätter eller lovar något till en kund.",
        },
        {
          type: "links",
          items: [
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare – allt på ett ställe" },
            { label: "Bolagsverket", url: "https://www.bolagsverket.se", note: "Registrering, avgifter, namn, verklig huvudman" },
            { label: "Skatteverket", url: "https://www.skatteverket.se", note: "F-skatt, moms, omvänd byggmoms, ROT, personalliggare, belopp och procent" },
            { label: "Arbetsmiljöverket", url: "https://www.av.se", note: "Kemiska arbetsmiljörisker, arbete på höjd, ställning" },
            { label: "Måleriföretagen i Sverige", url: "https://www.maleriforetagen.se", note: "Bransch- och arbetsgivarstöd, Måleriavtalet" },
            { label: "Byggnads", url: "https://www.byggnads.se", note: "Kollektivavtal för måleriyrket, löner och villkor" },
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

export default maleri;
