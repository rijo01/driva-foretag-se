import type { GuideContent } from "./types";

// ──────────────────────────────────────────────────────────────────────────
// STARTGUIDE: STÄDFÖRETAG
//
// YMYL – faktagranskad mot primärkälla. Verifierade uppgifter (juni 2026):
//  • RUT-avdrag 2026: 50 % av arbetskostnaden för hushållsnära tjänster
//    (inkl. städning). RUT-procenten är OFÖRÄNDRAD för 2026 (Skatteverket).
//  • Tak: ROT och RUT delar ett gemensamt tak på 75 000 kr/person/år 2026.
//    Inom taket är ROT begränsat till 50 000 kr; RUT kan utnyttja upp till hela
//    75 000 kr. (Skatteverket, "Rot och rut".) Den tillfälliga uppdelningen av
//    taket gällde endast 2025 för ROT och har upphört – RUT påverkades inte.
//  • RUT gäller endast arbete i/i nära anslutning till privatpersons bostad.
//    Företags-/kontorsstädning ger INTE RUT (Skatteverket).
//  • Fakturamodellen: kunden betalar minus sin skattereduktion, företaget begär
//    resten från Skatteverket. Kräver kundens personnummer och skatteutrymme.
//  • Moms städtjänster: 25 % (normalsats). Momsbefrielse möjlig vid omsättning
//    ≤ 120 000 kr/år (fr.o.m. 1 jan 2025). (Skatteverket.)
//  • Arbetsgivaravgift 31,42 % (2026), egenavgifter 28,97 %, aktiekapital privat
//    AB 25 000 kr, AB-registrering 1 900 kr e-tjänst / 2 200 kr blankett.
//  • Städbranschen omfattas INTE av kravet på personalliggare (gäller bygg,
//    fordonsservice, kropps-/skönhetsvård, livsmedels-/tobaksgrossist, restaurang,
//    tvätteri). MEN städning på en byggarbetsplats omfattas av byggets
//    personalliggare. (Skatteverket.)
//  • "Auktoriserat Serviceföretag" (Almega) är frivilligt – inget lagkrav.
//  • Kollektivavtal: Serviceentreprenadavtalet, Fastighetsanställdas Förbund
//    (Fastighets)/SEKO och Almega Serviceföretagen.
//
// Där en exakt siffra inte gått att verifiera mot primärkälla skrivs den
// kvalitativt – aldrig gissad.
// ──────────────────────────────────────────────────────────────────────────

const stadforetag: GuideContent = {
  slug: "stadforetag",
  industry: "Städföretag",
  title: "Starta & driva städföretag",
  subtitle: "Komplett startguide 2026",
  year: 2026,
  reviewedAt: "2026-06-04",
  reviewedSources: "Skatteverket, Bolagsverket & Arbetsmiljöverket",
  intro:
    "Den kompletta, faktagranskade guiden för dig som ska starta städföretag i Sverige – från bolagsform och F-skatt till RUT-avdraget (det viktigaste säljargumentet mot privatkunder), moms, avtal, prissättning och din första kund. Varje siffra är kontrollerad mot Skatteverket och Bolagsverket.",

  chapters: [
    // 1 ──────────────────────────────────────────────────────────────────
    {
      number: 1,
      title: "Att driva städföretag i Sverige",
      lead: "Vad branschen kräver av dig som företagare – och vad som gör den lönsam.",
      blocks: [
        {
          type: "paragraph",
          text: "Städbranschen är en av de lättaste branscherna att starta i – låg startkostnad, stadig efterfrågan och möjlighet att växa i egen takt. Samtidigt är den konkurrensutsatt och personalintensiv, och lönsamheten avgörs av att du prissätter rätt, håller hög kvalitet och utnyttjar RUT-avdraget som gör dina tjänster billigare för privatkunder. Den som förstår RUT, moms och avtal från start får ett tydligt försprång.",
        },
        {
          type: "paragraph",
          text: "Med **städföretag** menar vi i den här guiden verksamheter som utför städning åt privatpersoner och företag – hemstädning, flyttstädning, fönsterputs, kontors- och trappstädning. Reglerna i guiden gäller i grunden lika oavsett storlek, men en sak skiljer privat- och företagskunder åt rejält: **RUT-avdraget gäller bara privatpersoners hem**, inte företagsstädning.",
        },
        {
          type: "paragraph",
          text: "Tre saker präglar städbranschen när du startar: **RUT-avdraget** (som gör hemstädning märkbart billigare för privatkunden och driver efterfrågan), **återkommande intäkter** (städning köps ofta som löpande abonnemang, vilket ger stabil omsättning) och **personalfrågorna** (avtal, arbetsgivaravgifter och kollektivavtal när du växer). De tre är genomgående teman i guiden.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Så använder du guiden",
          text: "Läs kapitel 1–6 innan du tar din första kund – de avgör bolagsform, moms och hur du hanterar RUT-avdraget rätt. Kapitel 7–12 är drift: försäkring, pris, bokföring, personal och marknadsföring. Kapitel 13 är en komplett checklista du kan kryssa av, och kapitel 14 samlar alla myndighetskontakter med länkar.",
        },
      ],
    },

    // 2 ──────────────────────────────────────────────────────────────────
    {
      number: 2,
      title: "Välj bolagsform: enskild firma eller aktiebolag",
      lead: "Valet påverkar ditt personliga ansvar, din skatt och hur kunder och samarbetspartners ser på dig.",
      blocks: [
        {
          type: "paragraph",
          text: "För de flesta städföretag står valet mellan **enskild näringsverksamhet** (enskild firma) och **aktiebolag (AB)**. Båda fungerar utmärkt i städbranschen – den har låg startkostnad, så valet styrs mer av skatt, ansvar och hur du vill växa än av kapitalbehov.",
        },
        {
          type: "subheading",
          text: "Enskild firma",
        },
        {
          type: "paragraph",
          text: "Enklast och billigast att starta – populärt i städbranschen just för att investeringen är låg. Du och företaget är samma juridiska person, vilket betyder att du har **personligt ansvar** för företagets skulder. Du betalar **egenavgifter** på överskottet (28,97 % för aktiv näringsverksamhet 2026, med ett schablonavdrag på 25 % innan avgiften beräknas) och inkomsten beskattas som din lön. Passar bra när du startar ensam, har låg risk och vill komma igång snabbt.",
          source: "Skatteverket, egenavgifter 28,97 % och schablonavdrag 25 % (2026).",
        },
        {
          type: "subheading",
          text: "Aktiebolag",
        },
        {
          type: "paragraph",
          text: "Ett aktiebolag är en egen juridisk person. Ditt personliga ansvar begränsas i normalfallet till **aktiekapitalet på 25 000 kr** (lägsta tillåtna för privat AB). Många företagskunder och upphandlingar arbetar hellre med AB, och vissa branschauktorisationer kräver AB-form. Bolagsformen gör det enklare att anställa, ta in delägare och bygga ett företagsvärde. Du anställs av ditt eget bolag och tar ut lön, vilket ger jämnare skatt och tillgång till t.ex. sjukpenninggrundande inkomst.",
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
            ["Förtroende hos företagskunder", "Lägre", "Högre"],
            ["Administration", "Enklare bokföring", "Årsredovisning, mer formalia"],
          ],
          source: "Bolagsverket och Skatteverket (aktiekapital 25 000 kr, egenavgifter 28,97 % 2026).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Tumregel för städföretag",
          text: "Ska du börja ensam med hemstädning och privatkunder – starta gärna som enskild firma och ombilda till AB när omsättningen och antalet anställda växer. Vill du rikta in dig på företagskunder, upphandlingar eller branschauktorisation – välj AB direkt.",
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
      title: "Tillstånd, krav och auktorisation",
      lead: "Städbranschen har få formella tillståndskrav – men desto viktigare att få rätt på det som gäller.",
      blocks: [
        {
          type: "paragraph",
          text: "Till skillnad från många andra branscher krävs **inget särskilt yrkestillstånd** för att starta städföretag. Det gör tröskeln låg – men det finns ändå krav och val du måste hantera rätt. Gå igenom punkterna nedan.",
        },
        {
          type: "subheading",
          text: "F-skatt och registrering (Skatteverket)",
        },
        {
          type: "paragraph",
          text: "**F-skatt** är grunden. Den visar att du själv betalar din skatt och dina egenavgifter, och i praktiken kräver alla seriösa kunder – särskilt företag – att din firma har F-skatt. Du ansöker gratis hos **Skatteverket** via verksamt.se, samtidigt som du registrerar företaget och anmäler moms (samt arbetsgivare om du ska anställa).",
        },
        {
          type: "subheading",
          text: "RUT-godkännande för att begära utbetalning",
        },
        {
          type: "paragraph",
          text: "Vill du erbjuda RUT-avdrag till privatkunder (vilket du nästan säkert vill) behöver du kunna begära utbetalning av skattereduktionen från **Skatteverket** via deras e-tjänst för rot och rut. Det kräver att företaget har F-skatt och att du registrerar dig för tjänsten. Du behöver kundens personnummer och uppgifter om bostaden för varje begäran (se kapitel 6).",
          source: "Skatteverket, rot- och rutavdrag (utbetalning via e-tjänst).",
        },
        {
          type: "subheading",
          text: "Frivillig auktorisation",
        },
        {
          type: "paragraph",
          text: "**\"Auktoriserat Serviceföretag\"** (Almega Serviceföretagen) är en **frivillig** branschauktorisation – inget lagkrav för att driva städföretag. Den ställer krav på bland annat AB-form, F-skatt, kollektivavtal och att företaget sköter skatter och avgifter, och kan vara ett kvalitetsbevis i upphandlingar. Den är värd att överväga om du riktar dig mot företagskunder, men du kan driva städföretag helt utan den.",
          source: "Almega Serviceföretagen (auktorisation är frivillig, inte lagstadgad).",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Personalliggare – oftast inte, men kolla byggarbetsplatser",
          text: "Städbranschen omfattas **inte** av kravet på elektronisk personalliggare (det gäller bygg, fordonsservice, kropps- och skönhetsvård, livsmedels-/tobaksgrossist, restaurang och tvätteri). **Undantag:** städar du på en **byggarbetsplats** ska personalen normalt registreras i byggets personalliggare. Säkerställ rutinen om du tar uppdrag på byggen.",
          source: "Skatteverket, personalliggare (städ ej listad bransch; bygg omfattar stödverksamhet på arbetsplatsen).",
        },
        {
          type: "links",
          items: [
            { label: "Skatteverket – F-skatt och rut", url: "https://www.skatteverket.se", note: "F-skatt, moms, rutavdrag och utbetalning" },
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare" },
            { label: "Almega Serviceföretagen", url: "https://www.serviceforetagen.se", note: "Frivillig auktorisation för städföretag" },
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
          text: "Städföretag är en av de minst kapitalkrävande verksamheterna att starta. Du behöver i grunden städutrustning, transport och försäkring – inte dyra maskiner eller lokaler. Här är de poster du bör budgetera för. Myndighetsavgifter anges som fastställda belopp; övriga poster anges som kostnadsslag att räkna på.",
        },
        {
          type: "table",
          columns: ["Post", "Kommentar"],
          rows: [
            ["Aktiekapital (om AB)", "25 000 kr – sätts in på företagskonto, är ditt och kan användas i driften"],
            ["Registrering AB hos Bolagsverket", "1 900 kr via e-tjänst på verksamt.se (2 200 kr med pappersblankett)"],
            ["Registrering enskild firma", "Frivillig; namnskydd kostar ca 1 000 kr (kontrollera aktuell avgift hos Bolagsverket)"],
            ["F-skatt och momsregistrering", "Gratis hos Skatteverket"],
            ["Städutrustning och förbrukning", "Maskiner, redskap, kemikalier, mikrofiber, dunkar – relativt låg kostnad"],
            ["Transport", "Bil för att ta dig mellan kunder + drivmedel och försäkring"],
            ["Försäkringar", "Ansvars- och företagsförsäkring (se kapitel 7)"],
            ["Arbetskläder och skydd", "Kläder, handskar och skyddsutrustning"],
            ["Boknings-/administrationssystem", "System för schema, fakturering och RUT-hantering"],
          ],
          source: "Bolagsverket (1 900 kr AB e-tjänst, 25 000 kr aktiekapital); Skatteverket (F-skatt/moms gratis).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Låg tröskel – men räkna ändå på lönsamheten",
          text: "Att städföretag är billigt att starta betyder inte att det är lätt att tjäna pengar. Den låga tröskeln gör branschen konkurrensutsatt, och lönsamheten avgörs av hur du prissätter och planerar restid mellan kunder. Lägg krut på kalkylen i kapitel 8 från början.",
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
              text: "AB registreras via e-tjänsten på **verksamt.se** för **1 900 kr**. Du laddar upp stiftelseurkund, bolagsordning och bankintyg på att aktiekapitalet (25 000 kr) är insatt. Enskild firma behöver inte registreras, men du kan göra det för att skydda namnet.",
            },
            {
              title: "Ansök om F-skatt",
              text: "Görs gratis via verksamt.se. F-skatt är ett krav i praktiken för att få uppdrag, särskilt från företagskunder.",
            },
            {
              title: "Momsregistrera dig",
              text: "Anmäl moms i samma ärende. Städtjänster har normalmoms 25 %. (Momsbefrielse är möjlig först om omsättningen är högst 120 000 kr/år – se kapitel 6.)",
            },
            {
              title: "Registrera dig för rutavdrag hos Skatteverket",
              text: "Vill du erbjuda RUT till privatkunder – registrera dig för Skatteverkets e-tjänst för rot och rut så att du kan begära utbetalning av skattereduktionen.",
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
              text: "Skaffa företagskonto (krav för AB), teckna ansvars- och företagsförsäkring (kapitel 7) och bestäm bokföringslösning (kapitel 9) innan du tar första uppdraget.",
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
      title: "RUT-avdraget och momsen",
      lead: "Det viktigaste säljargumentet mot privatkunder – och hur du får det rätt på fakturan.",
      blocks: [
        {
          type: "paragraph",
          text: "RUT-avdraget är städföretagets bästa säljargument mot privatpersoner: det gör städningen märkbart billigare utan att du sänker ditt pris. Men det gäller bara privatpersoners hem, och du måste hantera det rätt på fakturan. Här är vad som gäller 2026.",
        },
        {
          type: "subheading",
          text: "RUT-avdrag 2026",
        },
        {
          type: "paragraph",
          text: "Privatpersoner får **skattereduktion på arbetskostnaden** (inte material/resor) för hushållsnära tjänster som städning. För **2026 är rutavdraget 50 % av arbetskostnaden**. ROT och RUT delar ett **gemensamt tak på 75 000 kr per person och år**; inom det taket är ROT begränsat till 50 000 kr, medan RUT kan utnyttja upp till hela **75 000 kr**. Eftersom arbetskostnaden ofta är en stor del av notan vid städning innebär det en betydande rabatt för kunden.",
          source: "Skatteverket, rot och rut (RUT 50 % av arbetskostnaden; gemensamt tak 75 000 kr/person/år, RUT upp till hela taket).",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Vilka städtjänster ger RUT?",
          text: "Vanlig städning (dammsugning, dammtorkning, golv), **fönsterputs**, **flyttstädning** och städning inuti skåp, kyl och frys ger rutavdrag. Det ska ske i eller i nära anslutning till kundens bostad. Kontrollera Skatteverkets lista över rutarbeten om du erbjuder gränsfall.",
          source: "Skatteverket, lista över rutarbeten.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Företagsstädning ger inte RUT",
          text: "RUT gäller **endast privatpersoners bostad**. Kontors-, lokal- och företagsstädning ger **inget** rutavdrag – företag är inte berättigade köpare och har inget skatteutrymme. Blanda aldrig in rutavdrag på fakturor till företagskunder; där fakturerar du fullt pris plus moms.",
          source: "Skatteverket, rutavdrag (endast arbete i privatpersons bostad).",
        },
        {
          type: "subheading",
          text: "Fakturamodellen – så fungerar RUT i praktiken",
        },
        {
          type: "paragraph",
          text: "RUT fungerar som en **fakturamodell**: du drar av kundens skattereduktion direkt på fakturan, kunden betalar mellanskillnaden, och du begär resten från Skatteverket. För att det ska fungera måste arbetet utföras i en bostad som kunden **äger eller använder**, kunden måste ha tillräckligt **skatteutrymme**, och du behöver kundens **personnummer**. Dubbelkolla utrymmet – får du avslag från Skatteverket riskerar du att stå för mellanskillnaden.",
          source: "Skatteverket, fakturamodellen för rot och rut.",
        },
        {
          type: "subheading",
          text: "Moms",
        },
        {
          type: "paragraph",
          text: "Städtjänster har **moms 25 %** (normalsats). Du kan vara momsbefriad först om omsättningen är högst **120 000 kr per år** (gränsen gäller sedan 1 januari 2025) – men då går du också miste om att dra av ingående moms på inköp. De flesta städföretag som växer är momsregistrerade. Notera att RUT-reduktionen beräknas på arbetskostnaden inklusive moms.",
          source: "Skatteverket, momsnormalsats 25 % och momsbefrielse vid omsättning ≤ 120 000 kr/år (fr.o.m. 1 jan 2025).",
        },
      ],
    },

    // 7 ──────────────────────────────────────────────────────────────────
    {
      number: 7,
      title: "Försäkringar du faktiskt behöver",
      lead: "Rätt skydd är ofta ett krav från kunden – och räddar dig den dag något går sönder.",
      blocks: [
        {
          type: "paragraph",
          text: "Som städföretag arbetar du i andras hem och lokaler, ofta med nyckel och tillgång till värdefulla ägodelar. Det gör ansvarsförsäkring i princip nödvändig – många kunder, särskilt företag och bostadsrättsföreningar, kräver att du kan visa giltigt skydd innan du får uppdraget. Läs villkoren, inte bara priset.",
        },
        {
          type: "list",
          items: [
            "**Företagsförsäkring med ansvarsförsäkring** – täcker skador du orsakar på kundens egendom (t.ex. repad parkett eller sönderslaget porslin). Ofta ett krav för att få uppdraget.",
            "**Förmögenhetsbrott-/nyckelförsäkring** – relevant när du hanterar kunders nycklar och larmkoder; täcker vissa skador vid förlust eller missbruk.",
            "**Egendoms- och maskinförsäkring** – skyddar din utrustning och dina maskiner mot stöld och skada.",
            "**Fordonsförsäkring** – trafikförsäkring är lagstadgad; lägg till halv-/helförsäkring för bilen du kör mellan kunder.",
            "**Olycksfalls- och sjukavbrottsförsäkring** – ekonomiskt skydd för dig själv vid sjukdom eller olycka, viktigt i ett fysiskt yrke.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Fråga kunden vad som krävs",
          text: "Innan du tecknar – fråga dina typiska företagskunder och bostadsrättsföreningar vilket försäkringsskydd och vilka belopp de kräver. Många har miniminivåer i sina inköpsvillkor. Då köper du rätt skydd direkt i stället för att behöva uppgradera mitt i ett avtal.",
        },
      ],
    },

    // 8 ──────────────────────────────────────────────────────────────────
    {
      number: 8,
      title: "Prissättning och lönsamhet",
      lead: "Så sätter du ett timpris och planerar rutter som faktiskt lämnar vinst.",
      blocks: [
        {
          type: "paragraph",
          text: "Den vanligaste orsaken till att nya städföretag inte går runt är inte brist på kunder – det är för lågt pris och för mycket obetald restid. Ditt timpris ska täcka din lön (eller dina anställdas), sociala avgifter, utrustning, transport, försäkring, administration och vinst. Räkna baklänges från vad du behöver tjäna – inte framåt från konkurrentens lägstapris.",
        },
        {
          type: "subheading",
          text: "Bygg upp ditt timpris",
        },
        {
          type: "list",
          items: [
            "Utgå från **önskad lön** (din egen eller de anställdas) och lägg på sociala avgifter, semester och pension.",
            "Lägg till **fasta kostnader**: bil, drivmedel, utrustning, förbrukning, försäkring, administration.",
            "Räkna med **restid mellan kunder** – den är sällan betald men kostar arbetstid. Planera rutter så att restiden minimeras.",
            "Lägg på **vinstmarginal** så att företaget kan växa och tåla bortfall när en kund säger upp sig.",
          ],
        },
        {
          type: "subheading",
          text: "Återkommande intäkter",
        },
        {
          type: "paragraph",
          text: "Styrkan i städbranschen är **återkommande intäkter** – städning köps ofta som löpande abonnemang (varje vecka eller varannan vecka). Det ger en förutsägbar omsättning som är guld värd. Bygg din affär kring abonnemangskunder med tydliga avtal, och använd enstaka uppdrag som flyttstäd och storstädning för att fylla luckor och hitta nya abonnemangskunder.",
        },
        {
          type: "callout",
          variant: "fact",
          title: "RUT-effekten i din offert",
          text: "RUT gör din hemstädning märkbart billigare för privatkunden utan att du sänker ditt pris. Eftersom kunden får 50 % av arbetskostnaden i skattereduktion (upp till taket) blir nettopriset betydligt lägre. Visa kunden både bruttopris och pris efter RUT i offerten – det höjer din avslutsfrekvens.",
          source: "Räkneexempel baserat på rutavdrag 50 % av arbetskostnaden 2026 (Skatteverket).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Skriftligt avtal – alltid",
          text: "Lämna alltid skriftligt avtal med tydlig avgränsning: vad som ingår i städningen, hur ofta, pris och RUT-hantering, uppsägningstid, nyckelhantering och vad som händer vid skada. Det förebygger de flesta tvister och gör dig mer professionell i kundens ögon.",
        },
      ],
    },

    // 9 ──────────────────────────────────────────────────────────────────
    {
      number: 9,
      title: "Bokföring och skatt",
      lead: "Löpande ordning i ekonomin – och det städföretag ofta gör fel på med RUT.",
      blocks: [
        {
          type: "paragraph",
          text: "Alla företag är enligt bokföringslagen skyldiga att löpande bokföra sina affärshändelser och spara underlag. Du kan sköta det själv i ett bokföringsprogram eller anlita en redovisningsbyrå – för många städföretagare är byrån värd pengarna, särskilt för att hantera RUT-utbetalningar och moms rätt.",
        },
        {
          type: "subheading",
          text: "RUT i bokföringen",
        },
        {
          type: "paragraph",
          text: "RUT innebär att en del av din betalning kommer från **kunden** och en del från **Skatteverket**. Det ska redovisas korrekt: kundens del på fakturan, och begäran om utbetalning av skattereduktionen via Skatteverkets e-tjänst. Ett system som stöder RUT-fakturering och håller reda på utestående utbetalningar sparar mycket tid och förebygger fel.",
          source: "Skatteverket, rot- och rutavdrag (fakturamodellen).",
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
          text: "Vanliga avdrag för städföretag",
        },
        {
          type: "list",
          items: [
            "**Städutrustning och förbrukningsmaterial** – maskiner, redskap, kemikalier, mikrofiber.",
            "**Arbetskläder och skyddsutrustning** – kläder och handskar i verksamheten.",
            "**Fordon och drivmedel** – kostnader för företagets bil; för privat bil i tjänsten gäller särskilda regler.",
            "**Försäkringar** – företags-, ansvars- och fordonsförsäkring.",
            "**Boknings-, fakturerings- och bokföringssystem** – programvara och licenser.",
            "**Utbildning** – t.ex. arbetsmiljö, kemikaliehantering och ledarskap när du växer.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Spara alla underlag",
          text: "Kvitton, fakturor, avtal och RUT-underlag (med kunduppgifter) ska sparas enligt bokföringslagen. Eftersom RUT innebär utbetalning från Skatteverket är ordnad dokumentation av arbetskostnad och kunduppgifter ditt bästa skydd vid en kontroll.",
        },
      ],
    },

    // 10 ─────────────────────────────────────────────────────────────────
    {
      number: 10,
      title: "Att anställa",
      lead: "Från första medarbetaren: avgifter, kollektivavtal och ditt arbetsmiljöansvar.",
      blocks: [
        {
          type: "paragraph",
          text: "Städföretag växer ofta genom att anställa – arbetet är personberoende och en person kan bara städa ett begränsat antal timmar. Men personal följer med kostnader och ansvar du måste ha koll på innan du skriver första anställningsavtalet.",
        },
        {
          type: "subheading",
          text: "Arbetsgivaravgifter",
        },
        {
          type: "paragraph",
          text: "Utöver lönen betalar du **arbetsgivaravgifter**. Normalsatsen 2026 är **31,42 %** av bruttolönen. På en månadslön på 28 000 kr betyder det runt 8 800 kr i arbetsgivaravgift utöver lönen – budgetera för det när du sätter ditt timpris (kapitel 8). Vissa nedsättningar kan finnas i särskilda fall; kontrollera aktuella regler hos Skatteverket.",
          source: "Skatteverket, arbetsgivaravgift normalsats 31,42 % (2026).",
        },
        {
          type: "subheading",
          text: "Kollektivavtal (Fastighets / Almega)",
        },
        {
          type: "paragraph",
          text: "Städbranschen är till stor del kollektivavtalsreglerad. Det centrala avtalet är **Serviceentreprenadavtalet** mellan **Fastighetsanställdas Förbund (Fastighets)** (tillsammans med SEKO) och arbetsgivarorganisationen **Almega Serviceföretagen**. Det reglerar bland annat minimilöner, arbetstider, OB och försäkringar. Många företagskunder och upphandlingar kräver kollektivavtal eller motsvarande villkor. Kontrollera aktuella lönenivåer och villkor direkt hos parterna innan du anställer.",
        },
        {
          type: "subheading",
          text: "Arbetsmiljöansvar",
        },
        {
          type: "paragraph",
          text: "Som arbetsgivare har du ett **arbetsmiljöansvar**: städning innebär repetitiva rörelser, tunga lyft, halkrisk och hantering av kemikalier. Du ska bedriva systematiskt arbetsmiljöarbete – undersöka och åtgärda risker, se till att rätt skyddsutrustning används och att personalen får introduktion och rätt kemikaliehantering. Det minskar både sjukfrånvaro och risken för sanktionsavgifter.",
          source: "Arbetsmiljöverket, systematiskt arbetsmiljöarbete.",
        },
      ],
    },

    // 11 ─────────────────────────────────────────────────────────────────
    {
      number: 11,
      title: "Vanliga misstag och fallgropar",
      lead: "De dyraste nybörjarfelen i städbranschen – och hur du undviker dem.",
      blocks: [
        {
          type: "list",
          items: [
            "**RUT på fel kund.** Att dra rutavdrag på företags-/kontorsstädning. RUT gäller bara privatpersoners bostad – fakturera företag fullt pris plus moms.",
            "**Missa kundens skatteutrymme.** Får du avslag på RUT-utbetalningen kan du bli sittande med mellanskillnaden. Dubbelkolla att kunden har utrymme.",
            "**För lågt timpris.** Att inte räkna in restid, utrustning, försäkring och vinst. Den låga tröskeln pressar priserna – sätt ditt baklänges från din lön.",
            "**Underskatta restiden.** Obetald körning mellan kunder äter upp lönsamheten. Planera täta, geografiskt samlade rutter.",
            "**Otydliga avtal och nyckelhantering.** Oklart vad som ingår, hur uppsägning sker och vem som ansvarar vid skada är vanliga tvistekällor. Allt skriftligt.",
            "**Saknad ansvarsförsäkring.** Att städa i andras hem utan skydd – en enda skada på dyr egendom kan bli förödande.",
            "**Slarv med arbetsmiljö.** Att hoppa över riskbedömning och rätt kemikaliehantering ger förslitningsskador och sjukfrånvaro.",
            "**Bygga på enstaka jobb.** Att inte satsa på abonnemangskunder ger ojämn omsättning. Återkommande städning är branschens styrka.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Det dyraste felet är att gissa",
          text: "Reglerna kring RUT och moms ändras (procent, tak och gränser). Bygg en vana att kontrollera aktuell uppgift hos Skatteverket innan du lovar en kund ett RUT-pris eller fakturerar – och spara dokumentationen.",
        },
      ],
    },

    // 12 ─────────────────────────────────────────────────────────────────
    {
      number: 12,
      title: "Marknadsföring och dina första kunder",
      lead: "Så får du de första uppdragen och bygger en stabil stock av abonnemangskunder.",
      blocks: [
        {
          type: "paragraph",
          text: "I städbranschen kommer många kunder via **rekommendationer och lokal synlighet** – och eftersom städning ofta köps som abonnemang är varje ny kund potentiellt återkommande intäkt i åratal. Det viktigaste är att vara lätt att hitta, snabb att svara och pålitlig från första städningen. Här är de kanaler som ger mest för ett nystartat städföretag.",
        },
        {
          type: "list",
          items: [
            "**Google – sökning och karta.** Skapa en Google-företagsprofil så att du syns när någon söker städhjälp i ditt område. Be nöjda kunder om omdömen.",
            "**Enkel hemsida.** Visa tjänster, priser med och utan RUT, områden du täcker och att du har F-skatt och försäkring. Det räcker långt.",
            "**Lokal synlighet.** Dekaler på bilen, flyers i bostadsområden och samarbete med mäklare (flyttstäd) och bostadsrättsföreningar (trappstäd).",
            "**Förmedlingstjänster.** Plattformar som matchar städföretag och privatkunder kan ge de första uppdragen medan du bygger eget rykte.",
            "**Rekommendationer.** Be nöjda kunder tipsa vänner – erbjud gärna en förmån för värvning. Mun-till-mun är branschens starkaste kanal.",
            "**Företagskunder.** Kontorsstädning ger större, stabila avtal – sök upp lokala företag och bostadsrättsföreningar direkt.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Visa att du är seriös",
          text: "F-skatt, försäkring, kollektivavtal/villkor, ordnad RUT-hantering och skriftliga avtal är inte bara krav – de är säljargument. Kunder släpper in den de litar på i sitt hem; visa tydligt att allt är i ordning i offert och på hemsidan.",
        },
      ],
    },

    // 13 ─────────────────────────────────────────────────────────────────
    {
      number: 13,
      title: "Komplett checklista",
      lead: "Allt på ett ställe. Kryssa av i tur och ordning innan du tar första kunden.",
      blocks: [
        {
          type: "subheading",
          text: "Innan start",
        },
        {
          type: "checklist",
          items: [
            "Valt bolagsform (enskild firma eller AB) utifrån ansvar, skatt och tillväxtplan",
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
          text: "RUT, moms och avtal",
        },
        {
          type: "checklist",
          items: [
            "Registrerat dig för Skatteverkets e-tjänst för rot och rut",
            "Förstått att RUT (50 % av arbetskostnaden, gemensamt tak 75 000 kr) bara gäller privatpersoners bostad",
            "Satt rutin för att kontrollera kundens skatteutrymme och samla personnummer",
            "Tagit fram avtalsmall med innehåll, pris med/utan RUT, uppsägning och nyckelhantering",
            "Bestämt momsupplägg (registrerad vs befrielse ≤ 120 000 kr/år)",
          ],
        },
        {
          type: "subheading",
          text: "Ekonomi och försäkring",
        },
        {
          type: "checklist",
          items: [
            "Tecknat ansvars-/företagsförsäkring och kontrollerat kundkrav",
            "Tecknat fordons- och eventuell nyckel-/förmögenhetsbrottsförsäkring",
            "Satt timpris baklänges från lön, med restid och vinst inräknat",
            "Valt bokföringslösning som hanterar RUT och moms",
            "Skaffat städutrustning, förbrukning och arbetskläder",
          ],
        },
        {
          type: "subheading",
          text: "Innan första kunden",
        },
        {
          type: "checklist",
          items: [
            "Skapat Google-företagsprofil och enkel hemsida med priser inkl. RUT",
            "Förberett rutin för fakturering med korrekt RUT och moms",
            "Planerat geografiskt samlade rutter för att minimera restid",
            "Satt en plan för att värva och behålla abonnemangskunder",
          ],
        },
      ],
    },

    // 14 ─────────────────────────────────────────────────────────────────
    {
      number: 14,
      title: "Resurser och myndighetskontakter",
      lead: "Spara den här sidan – här kontrollerar du aktuella RUT-regler, moms och avgifter.",
      blocks: [
        {
          type: "paragraph",
          text: "Reglerna och beloppen kring RUT och moms uppdateras. Använd länkarna nedan för att kontrollera aktuell uppgift direkt hos källan innan du lovar en kund ett RUT-pris, fakturerar eller anställer.",
        },
        {
          type: "links",
          items: [
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare – allt på ett ställe" },
            { label: "Skatteverket – rot och rut", url: "https://www.skatteverket.se", note: "Rutavdrag, procent och tak, fakturamodellen, utbetalning" },
            { label: "Bolagsverket", url: "https://www.bolagsverket.se", note: "Registrering, avgifter, namn, verklig huvudman" },
            { label: "Arbetsmiljöverket", url: "https://www.av.se", note: "Systematiskt arbetsmiljöarbete, ergonomi, kemikalier" },
            { label: "Almega Serviceföretagen", url: "https://www.serviceforetagen.se", note: "Frivillig auktorisation och branschstöd" },
            { label: "Fastighetsanställdas Förbund", url: "https://www.fastighets.se", note: "Kollektivavtal (Serviceentreprenadavtalet), löner och villkor" },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Vill du bolla ditt upplägg med en rådgivare?",
          text: "Den här guiden tar dig långt på egen hand. Vill du dubbelkolla val av bolagsform, RUT- och momshantering eller prissättning med en expert kan vi matcha dig med en rådgivare kostnadsfritt på driva-foretag.se/hitta-radgivare.",
        },
      ],
    },
  ],
};

export default stadforetag;
