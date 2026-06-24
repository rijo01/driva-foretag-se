import type { GuideContent } from "./types";

// ──────────────────────────────────────────────────────────────────────────
// STARTGUIDE: KONSULTFÖRETAG
//
// YMYL – faktagranskad mot primärkälla. Verifierade uppgifter (juni 2026):
//  • Aktiekapital privat AB 25 000 kr; AB-registrering 1 900 kr e-tjänst /
//    2 200 kr blankett (Bolagsverket). Enskild firma frivillig att registrera;
//    namnskydd ca 1 000 kr (exakt avgift kontrolleras hos Bolagsverket).
//  • F-skatt gratis via Skatteverket/verksamt.se. FA-skatt för den som både är
//    anställd och driver företag. Moms normalsats 25 %. Momsbefrielse möjlig vid
//    omsättning ≤ 120 000 kr/år (fr.o.m. 1 jan 2025).
//  • Egenavgifter (enskild firma) 28,97 % (aktiv näringsverksamhet 2026),
//    schablonavdrag 25 %. Arbetsgivaravgift 31,42 % (2026). (Skatteverket.)
//  • Bolagsskatt 20,6 % (oförändrad 2026). (Skatteverket.)
//  • NYA 3:12-REGLER i kraft 1 januari 2026 (riksdagsbeslut 2025-11-26,
//    tillämpas första gången inkomståret 2026):
//      - Förenklingsregeln (2,75 IBB) slopad. Ersätts av ett GRUNDBELOPP =
//        4 inkomstbasbelopp. IBB 2025 = 80 600 kr → grundbelopp ca 322 400 kr
//        (vid 100 % ägande; fördelas på aktierna).
//      - Lönebaserat utrymme = 50 % av ägarens andel av löneunderlaget som
//        överstiger 8 IBB (644 800 kr 2026). 4 %-spärren och löneuttagskravet
//        slopas (med vissa undantag).
//      - Utdelning inom gränsbeloppet beskattas med 20 % (2/3 av 30 %).
//    Exakta belopp kan justeras; uppmana alltid till kontroll hos Skatteverket.
//
// Pensions- och avgiftstak skrivs kvalitativt där exakt siffra ej verifierats.
// ──────────────────────────────────────────────────────────────────────────

const konsultforetag: GuideContent = {
  slug: "konsultforetag",
  industry: "Konsultföretag",
  title: "Starta & driva konsultföretag",
  subtitle: "Komplett startguide 2026",
  year: 2026,
  reviewedAt: "2026-06-04",
  reviewedSources: "Skatteverket & Bolagsverket",
  intro:
    "Den kompletta, faktagranskade guiden för dig som ska starta konsultföretag i Sverige – från val av bolagsform och F-skatt till de nya 3:12-reglerna för utdelning, timpris, avtal, pension och steget från anställning till eget. Varje siffra är kontrollerad mot Skatteverket och Bolagsverket.",

  chapters: [
    // 1 ──────────────────────────────────────────────────────────────────
    {
      number: 1,
      title: "Att driva konsultföretag i Sverige",
      lead: "Vad det innebär att sälja sin kompetens som eget företag – och vad som gör det lönsamt.",
      blocks: [
        {
          type: "paragraph",
          text: "Att starta konsultföretag är ett av de vanligaste och enklaste sätten att bli egenföretagare: du säljer din kompetens och tid, behöver lite kapital och kan ofta börja vid sidan av en anställning. Samtidigt finns det avgörande val att göra rätt från start – bolagsform, skatteupplägg, timpris och avtal – som tillsammans avgör hur mycket du faktiskt får behålla av det du fakturerar.",
        },
        {
          type: "paragraph",
          text: "Med **konsultföretag** menar vi i den här guiden företag där du säljer kvalificerade tjänster baserade på din kunskap – inom t.ex. IT, teknik, ekonomi, HR, management, kommunikation eller projektledning. Du fakturerar din tid eller dina leveranser till andra företag, ofta på löpande timdebitering eller i fastprisuppdrag. Reglerna i guiden gäller i grunden lika oavsett bransch.",
        },
        {
          type: "paragraph",
          text: "Tre saker präglar konsultens ekonomi när du startar: **valet mellan enskild firma och aktiebolag** (som styr skatt och ansvar), **3:12-reglerna** (som avgör hur förmånligt du kan ta ut pengar ur ett AB via utdelning) och **timpriset** (som måste täcka allt det en anställd får gratis: semester, sjukdom, pension och perioder utan uppdrag). De tre är genomgående teman i guiden.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Så använder du guiden",
          text: "Läs kapitel 1–6 innan du registrerar företaget – de avgör bolagsform, skatteupplägg och hur du tar ut pengar. Kapitel 7–12 är drift: försäkring, pris, bokföring, anställda och kunder. Kapitel 13 är en komplett checklista du kan kryssa av, och kapitel 14 samlar alla myndighetskontakter med länkar.",
        },
      ],
    },

    // 2 ──────────────────────────────────────────────────────────────────
    {
      number: 2,
      title: "Välj bolagsform: enskild firma eller aktiebolag",
      lead: "För konsulter är detta det enskilt viktigaste valet – det styr skatt, ansvar och hur du tar ut pengar.",
      blocks: [
        {
          type: "paragraph",
          text: "För konsultföretag står valet i praktiken mellan **enskild näringsverksamhet** (enskild firma) och **aktiebolag (AB)**. Eftersom konsultverksamhet sällan kräver kapital eller utrustning handlar valet mindre om pengar att starta och mer om skatt, ansvar och möjligheten att jämna ut din inkomst över tid med utdelning.",
        },
        {
          type: "subheading",
          text: "Enskild firma",
        },
        {
          type: "paragraph",
          text: "Enklast och billigast att starta och driva. Du och företaget är samma juridiska person, vilket betyder att du har **personligt ansvar** för företagets skulder. Du betalar **egenavgifter** på överskottet (28,97 % för aktiv näringsverksamhet 2026, med ett schablonavdrag på 25 % innan avgiften beräknas), och hela överskottet beskattas som din inkomst samma år. Passar bra när du börjar i mindre skala, vid sidan av anställning eller med jämn och inte alltför hög inkomst.",
          source: "Skatteverket, egenavgifter 28,97 % och schablonavdrag 25 % (2026).",
        },
        {
          type: "subheading",
          text: "Aktiebolag",
        },
        {
          type: "paragraph",
          text: "Ett aktiebolag är en egen juridisk person. Ditt personliga ansvar begränsas i normalfallet till **aktiekapitalet på 25 000 kr** (lägsta tillåtna för privat AB). Många större uppdragsgivare och ramavtal arbetar hellre med AB. Den stora fördelen för en konsult med god inkomst är att du kan **ta ut en del som lön och en del som utdelning** – och utdelning inom det så kallade gränsbeloppet beskattas lägre (se kapitel 6). Du kan också spara vinst i bolaget och jämna ut inkomsten mellan goda och magra år.",
          source: "Bolagsverket, aktiekapital minst 25 000 kr för privat AB.",
        },
        {
          type: "table",
          columns: ["", "Enskild firma", "Aktiebolag"],
          rows: [
            ["Startkapital", "Inget krav", "25 000 kr aktiekapital"],
            ["Personligt ansvar", "Ja, fullt ut", "Begränsat (normalfall)"],
            ["Skatt på vinst", "Egenavgifter 28,97 %, beskattas som inkomst", "Bolagsskatt 20,6 % + lön/utdelning"],
            ["Ta ut pengar", "Hela överskottet beskattas löpande", "Lön och utdelning (3:12) – kan jämnas ut"],
            ["Förtroende hos stora uppdragsgivare", "Lägre", "Högre"],
            ["Administration", "Enklare bokföring", "Årsredovisning, mer formalia"],
          ],
          source: "Bolagsverket och Skatteverket (aktiekapital 25 000 kr, egenavgifter 28,97 % 2026, bolagsskatt 20,6 %).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Tumregel för konsulter",
          text: "Räknar du med relativt låg eller oregelbunden inkomst, eller vill testa på deltid vid sidan av anställning – börja som enskild firma. Räknar du med god och stabil inkomst (förenklat: en lön där du har utrymme att även ta utdelning) blir AB ofta mer skatteeffektivt tack vare 3:12-reglerna. Många konsulter ombildar från enskild firma till AB när inkomsten växer.",
        },
      ],
    },

    // 3 ──────────────────────────────────────────────────────────────────
    {
      number: 3,
      title: "F-skatt, moms och registrering",
      lead: "Konsultföretag har få branschtillstånd – men dessa registreringar måste vara på plats.",
      blocks: [
        {
          type: "paragraph",
          text: "Konsultverksamhet kräver normalt **inga särskilda branschtillstånd** – tröskeln är låg. Men ett par registreringar hos Skatteverket är grundläggande, och vissa konsultområden (t.ex. finansiell rådgivning, fastighetsmäkleri, vissa tekniska besiktningar) har egen reglering. Kontrollera om just ditt område är reglerat.",
        },
        {
          type: "subheading",
          text: "F-skatt och FA-skatt (Skatteverket)",
        },
        {
          type: "paragraph",
          text: "**F-skatt** är grunden. Den visar att du själv betalar din skatt och dina egenavgifter, och i praktiken kräver alla företagskunder att din firma har F-skatt innan de anlitar dig – annars riskerar de att behöva göra skatteavdrag och betala arbetsgivaravgifter på din faktura. Du ansöker gratis hos **Skatteverket** via verksamt.se. Är du **både anställd och driver företag** ansöker du om **FA-skatt** (F-skatt med villkor i kombination med din anställning) – vanligt för den som konsultar vid sidan av ett jobb.",
          source: "Skatteverket, F-skatt och FA-skatt.",
        },
        {
          type: "subheading",
          text: "Moms",
        },
        {
          type: "paragraph",
          text: "Konsulttjänster har **moms 25 %** (normalsats). Du momsregistrerar dig i samband med att du startar. Du kan vara momsbefriad om omsättningen är högst **120 000 kr per år** (gränsen gäller sedan 1 januari 2025) – men då går du också miste om att dra av ingående moms på dina inköp. Vid uppdrag åt utländska företag gäller särskilda momsregler (omvänd skattskyldighet) – kontrollera hur dina specifika uppdrag ska faktureras hos Skatteverket.",
          source: "Skatteverket, momsnormalsats 25 % och momsbefrielse vid omsättning ≤ 120 000 kr/år (fr.o.m. 1 jan 2025).",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Är ditt konsultområde reglerat?",
          text: "De flesta konsulttjänster är oreglerade, men vissa kräver tillstånd, registrering eller behörighet – t.ex. finansiell rådgivning (Finansinspektionen), fastighetsmäkleri (Fastighetsmäklarinspektionen) och vissa besiktnings- och kontrolltjänster. Kontrollera om ditt område omfattas av särskild reglering innan du tar uppdrag.",
        },
        {
          type: "links",
          items: [
            { label: "Skatteverket – F-skatt och FA-skatt", url: "https://www.skatteverket.se", note: "F-skatt, FA-skatt, moms, 3:12" },
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare" },
            { label: "Bolagsverket", url: "https://www.bolagsverket.se", note: "Registrering av AB eller enskild firma, namnskydd" },
          ],
        },
      ],
    },

    // 4 ──────────────────────────────────────────────────────────────────
    {
      number: 4,
      title: "Startkapital och faktiska kostnader",
      lead: "En av de billigaste verksamheterna att starta – men planera för perioder utan uppdrag.",
      blocks: [
        {
          type: "paragraph",
          text: "Konsultföretag är bland de minst kapitalkrävande att starta – din främsta tillgång är din kompetens. De flesta kostnader är små och löpande snarare än stora startinvesteringar. Här är de poster du bör budgetera för. Myndighetsavgifter anges som fastställda belopp; övriga poster anges som kostnadsslag att räkna på.",
        },
        {
          type: "table",
          columns: ["Post", "Kommentar"],
          rows: [
            ["Aktiekapital (om AB)", "25 000 kr – sätts in på företagskonto, är ditt och kan användas i driften"],
            ["Registrering AB hos Bolagsverket", "1 900 kr via e-tjänst på verksamt.se (2 200 kr med pappersblankett)"],
            ["Registrering enskild firma", "Frivillig; namnskydd ca 1 000 kr (kontrollera aktuell avgift hos Bolagsverket)"],
            ["F-skatt och momsregistrering", "Gratis hos Skatteverket"],
            ["Utrustning", "Dator, telefon, programvara/licenser – relativt låg kostnad"],
            ["Försäkring", "Ansvars-/konsultansvarsförsäkring (se kapitel 7)"],
            ["Bokföring", "Eget program eller redovisningsbyrå"],
            ["Marknadsföring", "Hemsida, LinkedIn, eventuellt visitkort och profil"],
            ["Buffert för glapp mellan uppdrag", "Den viktigaste posten – pengar att leva på mellan uppdrag"],
          ],
          source: "Bolagsverket (1 900 kr AB e-tjänst, 25 000 kr aktiekapital); Skatteverket (F-skatt/moms gratis).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Bufferten är ditt startkapital",
          text: "För en konsult är den största ekonomiska risken inte startkostnaden – den är **glappen mellan uppdrag**. Du har inga anställningsförmåner och ingen lön när du inte är debiterad. Bygg en buffert som täcker flera månaders privata utgifter innan du säger upp dig från en anställning, och planera för att alltid ha nästa uppdrag på gång.",
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
              title: "Ansök om F-skatt (eller FA-skatt)",
              text: "Görs gratis via verksamt.se. F-skatt krävs i praktiken för att få uppdrag. Är du kvar i en anställning under uppstarten ansöker du om FA-skatt.",
            },
            {
              title: "Momsregistrera dig",
              text: "Anmäl moms i samma ärende. Konsulttjänster har normalmoms 25 %. (Befrielse är möjlig först om omsättningen är högst 120 000 kr/år – se kapitel 3.)",
            },
            {
              title: "Registrera dig som arbetsgivare (om du tar ut lön ur AB eller anställer)",
              text: "Driver du AB och tar ut lön till dig själv – eller ska anställa – anmäler du dig som arbetsgivare hos Skatteverket via verksamt.se. Då redovisar du arbetsgivaravgifter och avdragen skatt (se kapitel 10).",
            },
            {
              title: "Anmäl verklig huvudman",
              text: "AB ska anmäla verklig huvudman till Bolagsverket, normalt inom fyra veckor från registreringen.",
            },
            {
              title: "Öppna företagskonto och ordna bokföring",
              text: "Skaffa ett företagskonto (krav för AB) och bestäm hur du sköter bokföringen – eget program eller redovisningsbyrå (se kapitel 9).",
            },
            {
              title: "Teckna försäkring och förbered avtal",
              text: "Teckna ansvars-/konsultansvarsförsäkring (kapitel 7) och ta fram en avtals- och offertmall (kapitel 8) innan du tar första uppdraget.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Allt på ett ställe",
          text: "verksamt.se är myndigheternas gemensamma e-tjänst (Bolagsverket, Skatteverket och Tillväxtverket). Du kan registrera företag, ansöka om F-skatt/FA-skatt, momsregistrera dig och anmäla arbetsgivare i samma inloggade flöde.",
          source: "verksamt.se (Bolagsverket, Skatteverket, Tillväxtverket).",
        },
      ],
    },

    // 6 ──────────────────────────────────────────────────────────────────
    {
      number: 6,
      title: "Skatt och 3:12-reglerna för utdelning",
      lead: "Det som gör AB skatteeffektivt för konsulter – med de nya regler som gäller från 2026.",
      blocks: [
        {
          type: "paragraph",
          text: "Driver du konsultföretag som **aktiebolag** är den stora frågan hur du tar ut pengar: som **lön** (beskattas som inkomst av tjänst, med arbetsgivaravgifter) eller som **utdelning** (beskattas enligt de särskilda 3:12-reglerna för fåmansföretag). Rätt mix kan göra stor skillnad på vad du får behålla. Här är grunderna – med de **nya 3:12-regler som gäller från 1 januari 2026**.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Nya 3:12-regler i kraft från 1 januari 2026",
          text: "Riksdagen beslutade den **26 november 2025** om förenklade 3:12-regler som gäller från **1 januari 2026** och tillämpas första gången för inkomståret 2026. Den gamla \"förenklingsregeln\" (2,75 inkomstbasbelopp) är **slopad**. Räkna alltså inte med de gamla beloppen – och kontrollera alltid de exakta aktuella siffrorna hos Skatteverket innan du planerar utdelning.",
          source: "Riksdagen (beslut 2025-11-26) och Skatteverket, ändrade regler för delägare i fåmansföretag.",
        },
        {
          type: "subheading",
          text: "Gränsbeloppet – så mycket kan beskattas lågt",
        },
        {
          type: "paragraph",
          text: "Utdelning upp till ditt **gränsbelopp** beskattas med **20 %** (tekniskt: två tredjedelar av utdelningen tas upp och beskattas i kapital med 30 %). Utdelning över gränsbeloppet beskattas som inkomst av tjänst. Enligt de nya reglerna består gränsbeloppet av ett **grundbelopp på fyra inkomstbasbelopp** plus ett **lönebaserat utrymme**. Med inkomstbasbeloppet 80 600 kr (IBB 2025, som styr gränsbeloppet för inkomståret 2026) blir grundbeloppet **cirka 322 400 kr** vid 100 % ägande (beloppet fördelas på aktierna om ni är flera ägare).",
          source: "Skatteverket, gränsbelopp och skatt på utdelning i fåmansföretag (grundbelopp 4 IBB; utdelning inom gränsbeloppet beskattas med 20 %).",
        },
        {
          type: "subheading",
          text: "Lönebaserat utrymme",
        },
        {
          type: "paragraph",
          text: "Betalar bolaget ut löner (till dig eller anställda) kan du lägga till ett **lönebaserat utrymme** till gränsbeloppet. Enligt de nya reglerna är det **50 % av den del av löneunderlaget som överstiger 8 inkomstbasbelopp** (644 800 kr för 2026). Det tidigare kravet på att äga minst 4 % och kravet på ett visst eget löneuttag (löneuttagskravet) **slopas** i de nya reglerna, med vissa undantag. Det här gör att konsulter med anställda eller hög egen lön kan bygga ett större lågbeskattat utrymme.",
          source: "Skatteverket, lönebaserat utrymme enligt nya 3:12-reglerna (50 % av löneunderlag över 8 IBB).",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Lön eller utdelning – planera båda",
          text: "Att enbart ta utdelning är sällan optimalt: lön ger sjukpenning, föräldrapenning och allmän pension upp till vissa tak, och egen lön kan dessutom bygga lönebaserat utrymme. En vanlig strategi är att ta ut en lön upp till en rimlig nivå och därefter utdelning inom gränsbeloppet. Eftersom beloppen och reglerna ändras – och nu är helt nya för 2026 – är det här ett område där det ofta lönar sig att rådgöra med en redovisningskonsult.",
        },
        {
          type: "subheading",
          text: "Bolagsskatt",
        },
        {
          type: "paragraph",
          text: "Vinst i aktiebolaget beskattas med **bolagsskatt på 20,6 %** (oförändrad 2026) innan du kan dela ut den. I enskild firma finns ingen bolagsskatt – där beskattas hela överskottet löpande som din inkomst med egenavgifter. Skillnaden i hur och när vinsten beskattas är en av huvudpoängerna med att välja AB när inkomsten är god.",
          source: "Skatteverket, bolagsskatt 20,6 % (2026).",
        },
      ],
    },

    // 7 ──────────────────────────────────────────────────────────────────
    {
      number: 7,
      title: "Försäkringar du faktiskt behöver",
      lead: "Som konsult har du inget anställningsskydd – och uppdragsgivaren kräver ofta ansvarsförsäkring.",
      blocks: [
        {
          type: "paragraph",
          text: "Som konsult bär du två slags risk: ansvaret för dina råd och leveranser, och din egen försörjning utan en arbetsgivares trygghetssystem. Många uppdragsgivare kräver dessutom att du har konsultansvarsförsäkring innan du får uppdraget. Läs villkoren, inte bara priset.",
        },
        {
          type: "list",
          items: [
            "**Konsultansvars-/ansvarsförsäkring** – täcker skadeståndskrav om ditt råd eller din leverans orsakar kunden ekonomisk skada. Ofta ett krav i konsultavtal och ramavtal. Kontrollera att försäkringsbeloppet matchar uppdragens storlek.",
            "**Företagsförsäkring** – grundskydd för verksamheten, egendom (dator, utrustning) och allmänt ansvar.",
            "**Sjukförsäkring och inkomstskydd** – som egenföretagare har du varken sjuklön eller tjänstepension automatiskt; överväg privat sjuk- och inkomstförsäkring.",
            "**Olycksfallsförsäkring** – ekonomiskt skydd vid olycka som påverkar din arbetsförmåga.",
            "**Pensionssparande** – inte en försäkring i sig, men minst lika viktigt: utan arbetsgivare måste du själv ordna din pension (se kapitel 9).",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Fråga uppdragsgivaren vad som krävs",
          text: "Innan du tecknar – fråga dina typiska uppdragsgivare och ramavtal vilket ansvarsförsäkringsbelopp de kräver. Många stora kunder har miniminivåer i sina inköpsvillkor. Då köper du rätt skydd direkt i stället för att behöva uppgradera när ett stort uppdrag dyker upp.",
        },
      ],
    },

    // 8 ──────────────────────────────────────────────────────────────────
    {
      number: 8,
      title: "Timpris, avtal och lönsamhet",
      lead: "Så sätter du ett timpris som täcker allt en anställd får gratis – och avtal som skyddar dig.",
      blocks: [
        {
          type: "paragraph",
          text: "Det vanligaste misstaget nya konsulter gör är att sätta timpriset utifrån sin tidigare timlön som anställd. Men som konsult ska timpriset täcka allt en anställd får på köpet: semester, sjukdom, pension, sociala avgifter, försäkringar, administration, kompetensutveckling – och de timmar och perioder du inte är debiterad. Räkna baklänges från vad du behöver tjäna per år.",
        },
        {
          type: "subheading",
          text: "Bygg upp ditt timpris",
        },
        {
          type: "list",
          items: [
            "Utgå från din **önskade årsinkomst** och lägg på sociala avgifter och pension.",
            "Lägg till **fasta kostnader**: försäkring, utrustning, programvara, bokföring, kontor.",
            "Dela på **debiterbara timmar** – långt ifrån alla arbetstimmar är fakturerbara. Räkna realistiskt; en stor del går till försäljning, administration och kompetensutveckling.",
            "Ta höjd för **glapp mellan uppdrag** och semester – du har ingen betald ledighet.",
            "Lägg på **vinstmarginal** så att företaget tål magra perioder och kan växa.",
          ],
        },
        {
          type: "subheading",
          text: "Avtal som skyddar dig",
        },
        {
          type: "paragraph",
          text: "Ett tydligt **konsultavtal** är din viktigaste trygghet. Reglera omfattning och leverans, timpris eller fastpris, betalningsvillkor och fakturaintervall, vem som äger resultatet (immateriella rättigheter), ansvarsbegränsning, sekretess och hur uppsägning sker. Var särskilt noga med **ansvarsbegränsning** och **betalningsvillkor** – de skyddar dig mot orimliga krav och sena betalningar. För återkommande uppdrag kan en **ramavtals- eller retainer-modell** ge stabilare intäkter.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Fastpris eller löpande?",
          text: "Löpande timdebitering är tryggast när omfattningen är osäker – du får betalt för den tid du lägger. Fastpris kan ge högre förtjänst när du kan leveransen väl, men risken är din om det tar längre tid än beräknat. Var tydlig i avtalet om vad som ingår och hur tillägg hanteras, oavsett modell.",
        },
      ],
    },

    // 9 ──────────────────────────────────────────────────────────────────
    {
      number: 9,
      title: "Bokföring, skatt och pension",
      lead: "Löpande ordning i ekonomin – och de delar konsulter ofta glömmer: pension och buffert.",
      blocks: [
        {
          type: "paragraph",
          text: "Alla företag är enligt bokföringslagen skyldiga att löpande bokföra sina affärshändelser och spara underlag. Konsultverksamhet har relativt enkel bokföring, men momsen, eventuell löneutbetalning och 3:12-planeringen gör att många konsulter ändå anlitar en redovisningsbyrå – det frigör debiterbar tid och minskar risken för fel.",
        },
        {
          type: "subheading",
          text: "F-skatt och preliminärskatt",
        },
        {
          type: "paragraph",
          text: "Med **F-skatt** betalar du själv in din skatt och dina egenavgifter (enskild firma) eller bolagets skatt (AB). Skatteverket beslutar en **preliminärskatt** som du betalar varje månad, baserad på din uppskattade vinst. Lämnar du en realistisk prognos slipper du både stora restskatter och att binda upp pengar i onödan. Justera prognosen om resultatet utvecklas annorlunda än väntat.",
        },
        {
          type: "subheading",
          text: "Pension – din viktigaste egen åtgärd",
        },
        {
          type: "paragraph",
          text: "Som egenföretagare får du **ingen tjänstepension** automatiskt – den motsvarar ofta en stor del av en anställds totala ersättning. Du måste själv ersätta den. I **enskild firma** kan du göra avdrag för eget pensionssparande inom vissa gränser; i **AB** kan bolaget betala in **tjänstepension** åt dig, vilket är avdragsgillt för bolaget. De exakta avdragsgränserna ändras – **kontrollera aktuella nivåer hos Skatteverket** och överväg att ta hjälp av en rådgivare för att sätta rätt nivå.",
          source: "Skatteverket, avdrag för pensionssparande respektive tjänstepension (kontrollera aktuella nivåer).",
        },
        {
          type: "subheading",
          text: "Vanliga avdrag för konsulter",
        },
        {
          type: "list",
          items: [
            "**Dator, telefon och utrustning** – verktyg som används i verksamheten.",
            "**Programvara och licenser** – verktyg, molntjänster och fackprogram.",
            "**Kompetensutveckling** – kurser, certifieringar och facklitteratur som rör verksamheten.",
            "**Kontor** – hyrt kontor eller avdrag för arbetsrum enligt gällande regler.",
            "**Resor i tjänsten** – resor till och mellan uppdrag enligt reglerna.",
            "**Försäkringar och bokföring** – ansvars-/företagsförsäkring och redovisningstjänster.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Spara alla underlag",
          text: "Kvitton, fakturor och avtal ska sparas enligt bokföringslagen. Var särskilt noggrann med underlag för avdrag (t.ex. arbetsrum, resor och kompetensutveckling) och med dokumentationen kring lön och utdelning, så att 3:12-beräkningen håller vid en kontroll.",
        },
      ],
    },

    // 10 ─────────────────────────────────────────────────────────────────
    {
      number: 10,
      title: "Från anställning till eget – och att anställa",
      lead: "Steget från lön till eget kräver planering – och förr eller senare kanske du själv blir arbetsgivare.",
      blocks: [
        {
          type: "paragraph",
          text: "Många konsulter startar vid sidan av en anställning och går över till eget på heltid när uppdragen bär. Det steget är till stor del en fråga om trygghet och planering – och om hur du hanterar a-kassa och de förmåner du lämnar bakom dig.",
        },
        {
          type: "subheading",
          text: "Från anställning till eget",
        },
        {
          type: "paragraph",
          text: "Du kan starta företag medan du är anställd (ofta med **FA-skatt**), bygga upp en kundbas och en buffert, och säga upp dig när inkomsten är tillräckligt stabil. Tänk på att de flesta **a-kassor** har särskilda regler för företagare – för att ha rätt till ersättning behöver verksamheten normalt vara helt vilande eller avslutad, och det finns regler för hur ofta ett företag får läggas vilande. Kontrollera villkoren hos din a-kassa innan du startar, så att du vet vad som gäller om uppdragen sinar.",
          source: "Skatteverket (FA-skatt) och din a-kassa (regler för företagare och vilande företag – kontrollera aktuella villkor).",
        },
        {
          type: "subheading",
          text: "Att anställa eller anlita",
        },
        {
          type: "paragraph",
          text: "Växer konsultföretaget kan du behöva ta in fler – antingen genom att **anställa** eller genom att **anlita underkonsulter** med eget företag. Anställer du betalar du **arbetsgivaravgifter** (normalsatsen 2026 är **31,42 %** av bruttolönen) utöver lönen, och du tar på dig arbetsgivaransvar. Att anlita underkonsulter ger mer flexibilitet men kräver tydliga avtal om ansvar, leverans och immateriella rättigheter. Notera också att löner du betalar ut kan öka ditt lönebaserade utrymme i 3:12 (kapitel 6).",
          source: "Skatteverket, arbetsgivaravgift normalsats 31,42 % (2026).",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Tänk på F-skatt även hos dina underkonsulter",
          text: "Anlitar du underkonsulter – säkerställ att de har **F-skatt**, precis som dina egna kunder kräver av dig. Annars kan du som uppdragsgivare bli skyldig att göra skatteavdrag och betala arbetsgivaravgifter på det du betalar dem. Kontrollera F-skatt innan du anlitar.",
        },
      ],
    },

    // 11 ─────────────────────────────────────────────────────────────────
    {
      number: 11,
      title: "Vanliga misstag och fallgropar",
      lead: "De dyraste nybörjarfelen för nya konsulter – och hur du undviker dem.",
      blocks: [
        {
          type: "list",
          items: [
            "**För lågt timpris.** Att utgå från sin gamla timlön i stället för att räkna in semester, sjukdom, pension, avgifter och glapp mellan uppdrag. Sätt priset baklänges från din årsinkomst.",
            "**Glömma pensionen.** Att inte ersätta tjänstepensionen du hade som anställd. Avsätt till pension systematiskt från start.",
            "**Ingen buffert.** Att gå all in utan pengar för glappen mellan uppdrag. Bygg en buffert innan du säger upp dig.",
            "**Otydliga avtal.** Att sakna ansvarsbegränsning, betalningsvillkor och reglering av immateriella rättigheter. Allt skriftligt – det skyddar dig.",
            "**Fel bolagsform för inkomstnivån.** Att fastna i enskild firma trots hög inkomst, och därmed missa 3:12-fördelarna i AB – eller tvärtom starta AB i onödan vid låg inkomst.",
            "**Räkna med gamla 3:12-belopp.** De nya reglerna gäller från 2026 och de gamla schablonbeloppen stämmer inte längre. Kontrollera alltid aktuella siffror hos Skatteverket.",
            "**Missa F-skatt hos underkonsulter.** Att anlita någon utan F-skatt kan göra dig skyldig att betala skatt och avgifter.",
            "**Allt eller inget hos en kund.** Att vara helt beroende av en enda uppdragsgivare. Sprid riskerna och håll alltid nästa uppdrag varmt.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Det dyraste felet är att gissa",
          text: "Skattereglerna för fåmansföretag (3:12), egenavgifter och pensionsavdrag ändras – och 3:12 är helt nytt för 2026. Bygg en vana att kontrollera aktuell uppgift hos Skatteverket, och ta hjälp av en redovisningskonsult för lön- och utdelningsplaneringen. Det betalar sig ofta mångfalt.",
        },
      ],
    },

    // 12 ─────────────────────────────────────────────────────────────────
    {
      number: 12,
      title: "Marknadsföring och dina första uppdrag",
      lead: "Så får du de första uppdragen och bygger ett nätverk som ger återkommande jobb.",
      blocks: [
        {
          type: "paragraph",
          text: "För konsulter kommer de flesta uppdrag via **nätverk och rykte** – sällan via annonser. De som anlitar dig vill veta att du kan leverera och är trygg att samarbeta med. Det viktigaste är att synas där dina kunder finns och att bygga förtroende. Här är de kanaler som ger mest för ett nystartat konsultföretag.",
        },
        {
          type: "list",
          items: [
            "**Ditt befintliga nätverk.** Tidigare kollegor, arbetsgivare och kontakter är den vanligaste källan till första uppdraget. Berätta att du är igång.",
            "**LinkedIn.** Den viktigaste kanalen för B2B-konsulter. Tydlig profil, relevant innehåll och aktiv närvaro gör dig hittbar och trovärdig.",
            "**Konsultmäklare och ramavtal.** Mäklare och brokers förmedlar uppdrag, särskilt inom IT och teknik, medan du bygger egen kundstock.",
            "**Tydligt erbjudande.** Var konkret om vad du löser och för vem – en spetsig nisch gör dig lättare att rekommendera än \"konsult inom allt\".",
            "**Referenser och case.** Konkreta resultat från tidigare uppdrag är ditt starkaste säljargument. Be om referenser och omdömen.",
            "**Enkel hemsida.** Visa din kompetens, dina tjänster och hur man når dig. Den behöver inte vara stor, men den ska finnas.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Leverans är din bästa marknadsföring",
          text: "Den billigaste vägen till nästa uppdrag är ett välutfört förra uppdrag. Nöjda kunder återkommer och rekommenderar dig vidare – i konsultbranschen är ditt rykte din viktigaste tillgång. Prioritera kvalitet och tydlig kommunikation framför att jaga många kunder samtidigt.",
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
            "Valt bolagsform (enskild firma eller AB) utifrån inkomstnivå, ansvar och skatt",
            "Kontrollerat och valt företagsnamn hos Bolagsverket",
            "Registrerat företaget (AB: 1 900 kr e-tjänst, aktiekapital 25 000 kr insatt)",
            "Ansökt om F-skatt eller FA-skatt hos Skatteverket (gratis)",
            "Momsregistrerat företaget",
            "Anmält verklig huvudman (AB)",
            "Öppnat företagskonto",
          ],
        },
        {
          type: "subheading",
          text: "Skatt, pension och försäkring",
        },
        {
          type: "checklist",
          items: [
            "Satt mig in i de nya 3:12-reglerna 2026 (grundbelopp, lönebaserat utrymme, 20 % skatt inom gränsbeloppet)",
            "Bestämt strategi för lön vs utdelning (gärna med redovisningskonsult)",
            "Satt upp ett pensionssparande (eget sparande eller tjänstepension i AB)",
            "Tecknat konsultansvars-/ansvarsförsäkring och kontrollerat kundkrav",
            "Övervägt sjuk- och inkomstförsäkring",
          ],
        },
        {
          type: "subheading",
          text: "Pris, avtal och ekonomi",
        },
        {
          type: "checklist",
          items: [
            "Satt timpris baklänges från årsinkomst, med avgifter, pension och glapp inräknat",
            "Tagit fram konsultavtal med ansvarsbegränsning, betalningsvillkor och IP-reglering",
            "Valt bokföringslösning (eget program eller redovisningsbyrå)",
            "Byggt en buffert för flera månaders utgifter",
            "Kontrollerat a-kassans regler för företagare",
          ],
        },
        {
          type: "subheading",
          text: "Innan första uppdraget",
        },
        {
          type: "checklist",
          items: [
            "Uppdaterat LinkedIn och skapat en enkel hemsida",
            "Informerat nätverket att du är tillgänglig för uppdrag",
            "Förberett offert- och fakturarutin med korrekt moms",
            "Kontrollerat om ditt konsultområde är reglerat (tillstånd/behörighet)",
          ],
        },
      ],
    },

    // 14 ─────────────────────────────────────────────────────────────────
    {
      number: 14,
      title: "Resurser och myndighetskontakter",
      lead: "Spara den här sidan – här kontrollerar du aktuella skatteregler och belopp.",
      blocks: [
        {
          type: "paragraph",
          text: "Skattereglerna för egenföretagare och fåmansföretag uppdateras – inte minst de nya 3:12-reglerna för 2026. Använd länkarna nedan för att kontrollera aktuell uppgift direkt hos källan innan du planerar lön, utdelning eller pension.",
        },
        {
          type: "links",
          items: [
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt/FA-skatt, moms, arbetsgivare" },
            { label: "Skatteverket", url: "https://www.skatteverket.se", note: "F-skatt, moms, egenavgifter, 3:12, bolagsskatt, pensionsavdrag, belopp och procent" },
            { label: "Bolagsverket", url: "https://www.bolagsverket.se", note: "Registrering, avgifter, namn, verklig huvudman" },
            { label: "Skatteverket – fåmansföretag (3:12)", url: "https://www.skatteverket.se", note: "Gränsbelopp, lönebaserat utrymme, utdelning – nya regler 2026" },
            { label: "Din a-kassa", url: "https://www.sverigesakassor.se", note: "Regler för företagare och vilande företag" },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Vill du bolla ditt upplägg med en rådgivare?",
          text: "Den här guiden tar dig långt på egen hand. Vill du dubbelkolla val av bolagsform, lön- och utdelningsplanering enligt de nya 3:12-reglerna eller ditt pensionsupplägg med en expert kan vi matcha dig med en rådgivare kostnadsfritt på driva-foretag.se/hitta-radgivare.",
        },
      ],
    },
  ],
};

export default konsultforetag;
