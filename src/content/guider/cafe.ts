import type { GuideContent } from "./types";

// ──────────────────────────────────────────────────────────────────────────
// STARTGUIDE: CAFÉ
//
// YMYL – faktagranskad mot primärkälla. Verifierade uppgifter (juni 2026):
//  • Aktiekapital privat AB: 25 000 kr; AB-reg 1 900 kr e-tjänst / 2 200 kr
//    blankett (Bolagsverket). Egenavgifter 28,97 % + schablonavdrag 25 %;
//    arbetsgivaravgift 31,42 % (Skatteverket).
//  • Momsbefrielse: omsättning högst 120 000 kr/år (fr.o.m. 1 jan 2025).
//  • MOMS CAFÉ: servering (mat/dryck som konsumeras på stället) = TJÄNST = 12 %.
//    Mat/bakverk som tas med (avhämtning) = LIVSMEDEL = 6 %. Alkoholdryck vid
//    servering = 25 %. Alkoholfri dryck/lättöl = livsmedel.
//    OBS: livsmedelsmomsen är TILLFÄLLIGT sänkt från 12 % till 6 % fr.o.m.
//    1 april 2026 t.o.m. 31 december 2027 (Skatteverket/Regeringen). Servering
//    på plats är fortsatt 12 %. (Skatteverket.)
//  • Livsmedelsregistrering: anmäl till kommunens miljö-/livsmedelsförvaltning
//    minst två veckor innan start (EU-förordning 852/2004); egenkontroll/HACCP.
//    (Livsmedelsverket/kommunen.)
//  • Kassaregister: certifierat kassaregister krävs om kontant-/kortförsäljning
//    (Swish jämställs med kort) överstiger fyra prisbasbelopp inkl. moms per år
//    = 236 800 kr (2026). (Skatteverket.) Reglerna ses över inför 2027 –
//    kontrollera aktuellt.
//  • Personalliggare: café/restaurang omfattas. Kontrollavgift 12 500 kr +
//    2 500 kr/ej antecknad person. (Skatteverket.)
//
// Där en exakt siffra inte gått att verifiera mot primärkälla skrivs den
// kvalitativt ("kontrollera aktuell uppgift hos …") – aldrig gissad.
// ──────────────────────────────────────────────────────────────────────────

const cafe: GuideContent = {
  slug: "cafe",
  industry: "Café",
  title: "Starta & driva café",
  subtitle: "Komplett startguide 2026",
  year: 2026,
  reviewedAt: "2026-06-04",
  reviewedSources: "Skatteverket, Livsmedelsverket, kommunen & Bolagsverket",
  intro:
    "Den kompletta, faktagranskade guiden för dig som ska starta café i Sverige – från bolagsform och livsmedelsregistrering till egenkontroll, kassaregister, den knepiga moms­skillnaden mellan servering och avhämtning, prissättning och din första gäst. Varje siffra är kontrollerad mot Skatteverket, Livsmedelsverket och Bolagsverket.",

  chapters: [
    // 1 ──────────────────────────────────────────────────────────────────
    {
      number: 1,
      title: "Att driva café i Sverige",
      lead: "Vad branschen kräver av dig som företagare – och vad som gör den lönsam.",
      blocks: [
        {
          type: "paragraph",
          text: "Caféet är en av de mest älskade men samtidigt mest krävande verksamheterna att starta. Drömmen om ett eget fik är stark – men marginalerna är tunna, läget avgör nästan allt, och du lyder under livsmedelslagstiftning, momsregler och kassaregisterkrav från första dagen. Den som förstår ekonomin och reglerna från start har en betydligt större chans att överleva de första åren.",
        },
        {
          type: "paragraph",
          text: "Med **café** menar vi i den här guiden verksamheter som serverar kaffe, bakverk, smörgåsar, lättare lunch och liknande – med eller utan eget bageri – till gäster på plats och för avhämtning. En del av reglerna delas med restaurangbranschen (livsmedel, personalliggare, serveringsmoms), men caféet har oftast ingen alkoholservering och en enklare meny, vilket påverkar både tillstånd och kalkyl.",
        },
        {
          type: "paragraph",
          text: "Tre saker präglar cafébranschen när du startar: **livsmedelsreglerna** (registrering hos kommunen och egenkontroll innan du får öppna), **momsen** (den knepiga skillnaden mellan servering 12 % och avhämtning 6 %) och **marginalerna** (där svinn, råvarukostnad och läge avgör om det går runt). De tre är genomgående teman i guiden.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Så använder du guiden",
          text: "Läs kapitel 1–6 innan du öppnar – de avgör bolagsform, livsmedelsregistrering, kassaregister och hur du hanterar momsen rätt. Kapitel 7–12 är drift: försäkring, pris, bokföring, personal och marknadsföring. Kapitel 13 är en komplett checklista du kan kryssa av, och kapitel 14 samlar alla myndighetskontakter med länkar.",
        },
      ],
    },

    // 2 ──────────────────────────────────────────────────────────────────
    {
      number: 2,
      title: "Välj bolagsform: enskild firma eller aktiebolag",
      lead: "Valet påverkar ditt personliga ansvar, din skatt och hur hyresvärdar och leverantörer ser på dig.",
      blocks: [
        {
          type: "paragraph",
          text: "För de flesta caféer står valet mellan **enskild näringsverksamhet** (enskild firma) och **aktiebolag (AB)**. Eftersom ett café ofta kräver investeringar i lokal, inredning och utrustning – och innebär avtal med hyresvärd och leverantörer – väger ansvars- och kapitalfrågan tungt.",
        },
        {
          type: "subheading",
          text: "Enskild firma",
        },
        {
          type: "paragraph",
          text: "Enklast och billigast att starta. Du och företaget är samma juridiska person, vilket betyder att du har **personligt ansvar** för företagets skulder – något att ta på allvar när du tecknar ett dyrt lokalhyresavtal. Du betalar **egenavgifter** på överskottet (28,97 % för aktiv näringsverksamhet 2026, med ett schablonavdrag på 25 % innan avgiften beräknas) och inkomsten beskattas som din lön. Passar bra för ett litet café du driver själv.",
          source: "Skatteverket, egenavgifter 28,97 % och schablonavdrag 25 % (2026).",
        },
        {
          type: "subheading",
          text: "Aktiebolag",
        },
        {
          type: "paragraph",
          text: "Ett aktiebolag är en egen juridisk person. Ditt personliga ansvar begränsas i normalfallet till **aktiekapitalet på 25 000 kr** (lägsta tillåtna för privat AB) – en viktig trygghet när du binder kapital i utrustning och tecknar långa hyresavtal. Många hyresvärdar och leverantörer ser hellre ett AB, och bolagsformen gör det enklare att ta in delägare, anställa och bygga ett företagsvärde. Du anställs av ditt eget bolag och tar ut lön, vilket ger jämnare skatt och tillgång till t.ex. sjukpenninggrundande inkomst.",
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
            ["Förtroende hos hyresvärd/leverantör", "Lägre", "Högre"],
            ["Administration", "Enklare bokföring", "Årsredovisning, mer formalia"],
          ],
          source: "Bolagsverket och Skatteverket (aktiekapital 25 000 kr, egenavgifter 28,97 % 2026).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Tumregel för café",
          text: "Driver du ett litet café själv med låg investering kan enskild firma räcka i början. Tecknar du ett dyrt lokalhyresavtal, investerar i utrustning eller ska anställa – välj AB direkt för ansvarsbegränsningens skull. Hyresvärden frågar ofta efter bolagsform och säkerhet innan kontrakt.",
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
      title: "Tillstånd och krav: livsmedel, egenkontroll och kassaregister",
      lead: "Caféet är en livsmedelsverksamhet – flera krav måste vara på plats innan du får öppna.",
      blocks: [
        {
          type: "paragraph",
          text: "Att hantera livsmedel innebär ansvar för gästernas hälsa, och därför finns tydliga krav du måste uppfylla innan första koppen kaffe säljs. Gå igenom punkterna nedan.",
        },
        {
          type: "subheading",
          text: "Registrera livsmedelsverksamheten (kommunen)",
        },
        {
          type: "paragraph",
          text: "Innan du öppnar ska caféet **registreras som livsmedelsverksamhet** hos **kommunens miljö-/livsmedelsförvaltning**. Anmälan ska normalt göras **minst två veckor innan** du startar, så att registreringen hinner träda i kraft. Kravet följer av EU:s livsmedelslagstiftning (bland annat förordning 852/2004). Kommunen tar ut en avgift för registrering och för den löpande kontrollen – kontrollera aktuella avgifter hos din kommun.",
          source: "Livsmedelsverket och kommunen (registrering enligt EU-förordning 852/2004, normalt minst två veckor före start).",
        },
        {
          type: "subheading",
          text: "Egenkontroll och HACCP",
        },
        {
          type: "paragraph",
          text: "Du ska ha ett system för **egenkontroll** byggt på **HACCP**-principerna – att identifiera och hantera riskerna i din hantering (temperaturer i kyl och frys, varmhållning, hygien, rengöring, spårbarhet och allergener). Det ska vara dokumenterat och tillämpas i praktiken; kommunen kontrollerar det vid sina besök. **Allergeninformation** ska kunna lämnas till gästen för det du serverar.",
          source: "Livsmedelsverket (egenkontroll/HACCP och allergeninformation).",
        },
        {
          type: "subheading",
          text: "Kassaregister",
        },
        {
          type: "paragraph",
          text: "Säljer du mot kontanter eller kort (Swish jämställs med kort) behöver du normalt ett **certifierat kassaregister**. Undantag gäller om sådan försäljning är högst **fyra prisbasbelopp inkl. moms per år – 236 800 kr för 2026**. De flesta caféer ligger över den gränsen och behöver alltså kassaregister med kontrollenhet, anmält till Skatteverket. Reglerna kring kassaregister ses över inför 2027 – kontrollera aktuella krav hos Skatteverket.",
          source: "Skatteverket, krav på kassaregister och undantaget fyra prisbasbelopp (236 800 kr 2026; Swish jämställs med kortbetalning).",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Personalliggare – café omfattas",
          text: "Café och restaurang omfattas av kravet på **elektronisk personalliggare** – alla som är verksamma ska antecknas löpande. Saknas eller är liggaren felaktig kan Skatteverket ta ut en **kontrollavgift på 12 500 kr** plus **2 500 kr för varje person** som inte är antecknad. Håll liggaren uppdaterad från dag ett.",
          source: "Skatteverket, personalliggare (restaurang/café omfattas).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Alkohol kräver serveringstillstånd",
          text: "Vill du servera alkohol (t.ex. vin eller öl till lunch) krävs **serveringstillstånd** från kommunen, vilket bland annat förutsätter mat­utbud och godkänt kunskapsprov. Många caféer avstår och håller sig till kaffe och alkoholfritt – men planerar du alkohol, ansök i god tid hos kommunen.",
        },
        {
          type: "links",
          items: [
            { label: "Livsmedelsverket", url: "https://www.livsmedelsverket.se", note: "Livsmedelsregistrering, egenkontroll/HACCP, allergener" },
            { label: "Din kommun", url: "https://www.verksamt.se", note: "Registrering av livsmedelsverksamhet och eventuellt serveringstillstånd" },
            { label: "Skatteverket – kassaregister", url: "https://www.skatteverket.se", note: "Kassaregister, kontrollenhet, personalliggare" },
          ],
        },
      ],
    },

    // 4 ──────────────────────────────────────────────────────────────────
    {
      number: 4,
      title: "Startkapital och faktiska kostnader",
      lead: "Vad det faktiskt kostar att komma igång – och varför läge och utrustning dominerar.",
      blocks: [
        {
          type: "paragraph",
          text: "Café är kapitalkrävande att starta: lokal, inredning, espressomaskin och kylutrustning kostar pengar innan första gästen kommit. Här är de poster du bör budgetera för. Myndighetsavgifter anges som fastställda belopp; övriga poster som kostnadsslag att räkna på.",
        },
        {
          type: "table",
          columns: ["Post", "Kommentar"],
          rows: [
            ["Aktiekapital (om AB)", "25 000 kr – sätts in på företagskonto, är ditt och kan användas i driften"],
            ["Registrering AB hos Bolagsverket", "1 900 kr via e-tjänst på verksamt.se (2 200 kr med pappersblankett)"],
            ["F-skatt och momsregistrering", "Gratis hos Skatteverket"],
            ["Livsmedelsregistrering + kontrollavgift", "Kommunal avgift – kontrollera aktuellt belopp hos din kommun"],
            ["Lokal", "Hyra, deposition och eventuell ombyggnad/anpassning – ofta den största posten"],
            ["Inredning och utrustning", "Espressomaskin, kyl/frys, disk, möbler, kassasystem"],
            ["Kassaregister med kontrollenhet", "Certifierat kassaregister anmält till Skatteverket"],
            ["Råvarulager och förbrukning", "Kaffe, mjölk, bageri, engångsmaterial"],
            ["Försäkringar", "Företags-, egendoms- och ansvarsförsäkring (se kapitel 7)"],
            ["Marknadsföring vid öppning", "Skylt, Google-profil, sociala medier"],
          ],
          source: "Bolagsverket (1 900 kr AB e-tjänst, 25 000 kr aktiekapital); Skatteverket (F-skatt/moms gratis).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Läget är halva affären",
          text: "Ett cafés omsättning står och faller med läget och gångflödet. Ett billigare läge med få förbipasserande kan bli dyrare i längden än en högre hyra på rätt plats. Räkna på hyra i förhållande till realistisk omsättning innan du skriver på – hyran bör vara en hanterbar andel av omsättningen, inte en gissning.",
        },
      ],
    },

    // 5 ──────────────────────────────────────────────────────────────────
    {
      number: 5,
      title: "Steg-för-steg: så registrerar du företaget och öppnar",
      lead: "Hela processen i rätt ordning – från namn till första öppningsdagen.",
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
              text: "Görs gratis via verksamt.se. Ett café är i praktiken alltid momsregistrerat (befrielse möjlig först vid omsättning på högst 120 000 kr/år – se kapitel 6).",
            },
            {
              title: "Registrera livsmedelsverksamheten hos kommunen",
              text: "Anmäl caféet till kommunens miljö-/livsmedelsförvaltning minst två veckor innan start. Förbered egenkontroll/HACCP.",
            },
            {
              title: "Skaffa kassaregister och anmäl till Skatteverket",
              text: "Certifierat kassaregister med kontrollenhet om din kontant-/kortförsäljning överstiger fyra prisbasbelopp/år. Anmäl registret till Skatteverket.",
            },
            {
              title: "Registrera dig som arbetsgivare (om du ska anställa)",
              text: "Ska du ha personal anmäler du dig som arbetsgivare hos Skatteverket via verksamt.se. Då börjar du redovisa arbetsgivaravgifter och avdragen skatt (se kapitel 10).",
            },
            {
              title: "Anmäl verklig huvudman",
              text: "AB ska anmäla verklig huvudman till Bolagsverket, normalt inom fyra veckor från registreringen.",
            },
            {
              title: "Öppna företagskonto, teckna försäkring och ordna bokföring",
              text: "Skaffa företagskonto (krav för AB), teckna försäkringar (kapitel 7), sätt rutin för personalliggare och bestäm bokföringslösning (kapitel 9) innan du öppnar.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Allt på ett ställe",
          text: "verksamt.se är myndigheternas gemensamma e-tjänst (Bolagsverket, Skatteverket och Tillväxtverket). Du kan registrera företag, ansöka om F-skatt, momsregistrera dig och anmäla arbetsgivare i samma inloggade flöde. Livsmedelsregistreringen görs hos kommunen.",
          source: "verksamt.se (Bolagsverket, Skatteverket, Tillväxtverket).",
        },
      ],
    },

    // 6 ──────────────────────────────────────────────────────────────────
    {
      number: 6,
      title: "Moms på café: servering eller avhämtning",
      lead: "Den knepigaste – och mest missade – regeln i caféets ekonomi.",
      blocks: [
        {
          type: "paragraph",
          text: "Momsen är där caféägare oftast gör fel, eftersom **samma kanelbulle kan ha olika momssats beroende på om gästen äter den på plats eller tar den med sig**. Här är vad som gäller 2026.",
        },
        {
          type: "subheading",
          text: "Servering (äts på stället) – 12 %",
        },
        {
          type: "paragraph",
          text: "Mat och dryck som **konsumeras på caféet** räknas som **serveringstjänst** och har **12 % moms**. Det gäller kaffet och bakverket du serverar till en gäst som sätter sig och fikar.",
          source: "Skatteverket, serveringstjänst 12 % moms.",
        },
        {
          type: "subheading",
          text: "Avhämtning (tas med) – 6 %",
        },
        {
          type: "paragraph",
          text: "Mat och bakverk som gästen **tar med sig** räknas som **livsmedel** och har den lägre livsmedelsmomsen. Livsmedelsmomsen är **tillfälligt sänkt från 12 % till 6 % under perioden 1 april 2026–31 december 2027**. En kanelbulle eller en smörgås \"to go\" har alltså 6 % moms, medan samma vara ätit på plats har 12 %.",
          source: "Skatteverket och Regeringen (livsmedelsmoms tillfälligt sänkt till 6 % 1 apr 2026–31 dec 2027).",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Servering 12 %, avhämtning 6 % – kassan måste klara båda",
          text: "Eftersom servering (12 %) och avhämtning (6 %) har olika momssats måste ditt kassasystem kunna hantera båda parallellt, och personalen måste fråga \"äta här eller ta med?\". Alkoholfri dryck och lättöl följer livsmedelsmomsen; serverad **alkoholdryck** har alltid **25 %**. Att redovisa fel moms är den vanligaste och dyraste tabben i branschen.",
          source: "Skatteverket (servering 12 %, livsmedel/avhämtning 6 % t.o.m. 31 dec 2027, alkoholservering 25 %).",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Den sänkta livsmedelsmomsen är tillfällig",
          text: "Sänkningen till 6 % gäller **bara t.o.m. 31 december 2027**, därefter återgår livsmedelsmomsen till 12 % om inget nytt beslut fattas. Servering på plats är 12 % hela tiden. Bygg din prissättning och dina marginaler så att du klarar en återgång – och kontrollera alltid aktuell momssats hos Skatteverket.",
          source: "Skatteverket/Regeringen (tillfällig period 1 apr 2026–31 dec 2027).",
        },
        {
          type: "paragraph",
          text: "Du kan vara momsbefriad först om omsättningen är **högst 120 000 kr per år** (gränsen gäller sedan 1 januari 2025) – men då kan du inte dra av ingående moms på dina inköp, vilket sällan lönar sig för ett café. Notera att de olika momssatserna gör det extra viktigt att kassan delar upp försäljningen rätt i bokföringen.",
          source: "Skatteverket, momsbefrielse vid omsättning på högst 120 000 kr/år (fr.o.m. 1 jan 2025).",
        },
      ],
    },

    // 7 ──────────────────────────────────────────────────────────────────
    {
      number: 7,
      title: "Försäkringar du faktiskt behöver",
      lead: "Rätt skydd när du arbetar med livsmedel, gäster och en lokal full av utrustning.",
      blocks: [
        {
          type: "paragraph",
          text: "Ett café har både en lokal full av värdefull utrustning och dagligen gäster på plats – det gör försäkring nödvändigt. Många hyresvärdar kräver dessutom att du kan visa giltig försäkring. Läs villkoren, inte bara priset.",
        },
        {
          type: "list",
          items: [
            "**Företagsförsäkring med ansvarsförsäkring** – täcker skador på gäster eller tredje person, t.ex. om någon blir sjuk eller skadar sig. Ofta ett krav från hyresvärden.",
            "**Egendoms- och maskinförsäkring** – skyddar inredning, espressomaskin, kyl/frys och övrig utrustning mot brand, vatten, stöld och haveri.",
            "**Avbrottsförsäkring** – ersätter utebliven inkomst om du tvingas hålla stängt efter t.ex. en brand eller ett kylhaveri.",
            "**Glas- och inbrottsförsäkring** – relevant för en lokal i gatuplan med skyltfönster.",
            "**Olycksfalls- och sjukavbrottsförsäkring** – ekonomiskt skydd för dig själv när verksamheten står och faller med att du är på plats.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Kyl- och fryshaveri kan bli dyrt",
          text: "Ett strömavbrott eller kylhaveri kan förstöra hela ditt råvarulager på en natt. Kontrollera att din egendoms-/maskinförsäkring täcker varuförluster vid kyl- och fryshaveri – det är en vanlig och kostsam skada i livsmedelsverksamheter.",
        },
      ],
    },

    // 8 ──────────────────────────────────────────────────────────────────
    {
      number: 8,
      title: "Prissättning och marginaler",
      lead: "Så sätter du priser som täcker råvaror, svinn, personal och hyra – med vinst kvar.",
      blocks: [
        {
          type: "paragraph",
          text: "Café är en bransch med tunna marginaler, och den vanligaste orsaken till att caféer inte överlever är att priserna inte täcker de verkliga kostnaderna. Priset på varje produkt måste bära råvarukostnad, svinn, personal, hyra, moms och vinst. Räkna på varje produkt – inte bara på kaffet.",
        },
        {
          type: "subheading",
          text: "Räkna på råvarukostnad och svinn",
        },
        {
          type: "list",
          items: [
            "Räkna ut **råvarukostnaden** (food cost) per produkt och sikta på en marginal som täcker allt annat – kaffe har ofta hög marginal, färska bakverk lägre.",
            "Lägg in **svinn** i kalkylen – osålt färskt bröd och bakverk är en garanterad kostnad i ett café.",
            "Täck **personalkostnaden** – den är ofta den största posten; räkna med bemanning även under lugna timmar.",
            "Fördela **hyra och fasta kostnader** på en realistisk dagsförsäljning.",
            "Lägg på **vinstmarginal** så att caféet tål svaga perioder och säsongsvariation.",
          ],
        },
        {
          type: "subheading",
          text: "Öka snittnotan",
        },
        {
          type: "paragraph",
          text: "Lönsamheten i ett café förbättras ofta mer av att höja **snittnotan** (laga lunch, sälja smörgås till kaffet, erbjuda kombinationer) än av att jaga fler gäster. Tänk igenom menyn så att den styr mot lite högre köp per gäst, och planera bemanning och bakning efter när gästerna faktiskt kommer.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Glöm inte momsskillnaden i priskommunikationen",
          text: "Eftersom servering (12 %) och avhämtning (6 %) har olika moms kan din marginal skilja sig åt mellan att äta på plats och ta med. Sätt priser som fungerar i båda fallen och låt kassan hantera rätt momssats – kommunicera ett tydligt pris till gästen.",
        },
      ],
    },

    // 9 ──────────────────────────────────────────────────────────────────
    {
      number: 9,
      title: "Bokföring och skatt",
      lead: "Löpande ordning i ekonomin – och det caféer ofta gör fel med moms och kontanthantering.",
      blocks: [
        {
          type: "paragraph",
          text: "Alla företag är enligt bokföringslagen skyldiga att löpande bokföra sina affärshändelser och spara underlag. Ett café har många små transaktioner, kontanthantering och flera momssatser – det gör ett bra kassasystem och ofta en redovisningsbyrå väl värt pengarna.",
        },
        {
          type: "subheading",
          text: "Flera momssatser i redovisningen",
        },
        {
          type: "paragraph",
          text: "Försäljningen ska delas upp på rätt momssatser i bokföringen: servering 12 %, avhämtning/livsmedel 6 % (t.o.m. 31 dec 2027) och eventuell alkoholservering 25 %. Ett kassasystem som registrerar momssats per försäljning och stäms av mot bokföringen sparar mycket tid och förebygger fel i momsdeklarationen.",
          source: "Skatteverket, redovisning av olika momssatser.",
        },
        {
          type: "subheading",
          text: "F-skatt och preliminärskatt",
        },
        {
          type: "paragraph",
          text: "Med **F-skatt** betalar du själv in din skatt och dina egenavgifter (enskild firma) eller bolagets skatt (AB). Skatteverket beslutar en **preliminärskatt** som du betalar varje månad utifrån din uppskattade vinst. Justera prognosen om omsättningen utvecklas annorlunda än väntat.",
        },
        {
          type: "subheading",
          text: "Vanliga avdrag för café",
        },
        {
          type: "list",
          items: [
            "**Råvaror och förbrukningsmaterial** – kaffe, mjölk, bageri, engångsmaterial.",
            "**Utrustning** – espressomaskin, kyl/frys och inredning; större inköp skrivs av över tid.",
            "**Lokalkostnader** – hyra, el, vatten, värme och städning.",
            "**Kassaregister och programvara** – kassasystem, kontrollenhet och bokföringsprogram.",
            "**Arbetskläder och hygienmaterial** – förkläden, rengöring och skyddsmaterial.",
            "**Försäkringar och marknadsföring** – företagsförsäkring, skyltning och annonsering.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Kontanthantering granskas hårt",
          text: "Café är en kontantintensiv bransch som Skatteverket granskar särskilt – med krav på kassaregister och personalliggare. Ordnad kassaredovisning, korrekt momsuppdelning och dokumenterad personalliggare är ditt bästa skydd vid en kontroll. Spara alla underlag enligt bokföringslagen.",
        },
      ],
    },

    // 10 ─────────────────────────────────────────────────────────────────
    {
      number: 10,
      title: "Att anställa",
      lead: "Från första medarbetaren: avgifter, kollektivavtal, personalliggare och arbetsmiljö.",
      blocks: [
        {
          type: "paragraph",
          text: "De flesta caféer behöver personal – arbetet är platsbundet och du kan inte stå i disken jämt. Men personal följer med kostnader och ansvar du måste ha koll på innan du skriver första anställningsavtalet.",
        },
        {
          type: "subheading",
          text: "Arbetsgivaravgifter",
        },
        {
          type: "paragraph",
          text: "Utöver lönen betalar du **arbetsgivaravgifter**. Normalsatsen 2026 är **31,42 %** av bruttolönen. På en månadslön på 28 000 kr betyder det runt 8 800 kr i arbetsgivaravgift utöver lönen – budgetera för det i din kalkyl (kapitel 8). Vissa nedsättningar kan finnas i särskilda fall; kontrollera aktuella regler hos Skatteverket.",
          source: "Skatteverket, arbetsgivaravgift normalsats 31,42 % (2026).",
        },
        {
          type: "subheading",
          text: "Kollektivavtal",
        },
        {
          type: "paragraph",
          text: "Café- och restaurangbranschen är i hög grad kollektivavtalsreglerad. Det centrala avtalet tecknas mellan arbetsgivarorganisationen Visita och Hotell- och restaurangfacket (HRF) och reglerar bland annat minimilöner, OB-tillägg, arbetstider och försäkringar. Kontrollera aktuella lönenivåer och villkor direkt hos parterna innan du anställer.",
        },
        {
          type: "subheading",
          text: "Personalliggare och arbetsmiljö",
        },
        {
          type: "paragraph",
          text: "Alla som arbetar ska antecknas i den **elektroniska personalliggaren** (kapitel 3). Som arbetsgivare har du dessutom ett **arbetsmiljöansvar**: arbete i café innebär heta ytor, vassa redskap, halkrisk och stress vid rusning. Du ska bedriva systematiskt arbetsmiljöarbete, ge introduktion och se till att livsmedelshygienen sköts av alla. Brister kan ge sanktionsavgifter.",
          source: "Arbetsmiljöverket (systematiskt arbetsmiljöarbete); Skatteverket (personalliggare).",
        },
      ],
    },

    // 11 ─────────────────────────────────────────────────────────────────
    {
      number: 11,
      title: "Vanliga misstag och fallgropar",
      lead: "De dyraste nybörjarfelen i cafébranschen – och hur du undviker dem.",
      blocks: [
        {
          type: "list",
          items: [
            "**Fel moms på servering vs avhämtning.** Att inte skilja på 12 % (äta här) och 6 % (ta med) i kassan. Säkerställ att systemet och personalen hanterar båda – och kom ihåg att 6 % är tillfälligt t.o.m. 31 dec 2027.",
            "**För hög hyra i förhållande till omsättning.** Att skriva på ett dyrt kontrakt utan realistisk omsättningskalkyl. Räkna på hyra mot förväntad försäljning innan du binder dig.",
            "**Underskatta svinnet.** Färska varor som inte säljs är en daglig kostnad. Baka och beställ efter faktisk efterfrågan.",
            "**Sakna eller missköta kassaregister/personalliggare.** Båda krävs och kontrolleras hårt; kontrollavgifterna är höga.",
            "**Glömma egenkontrollen.** HACCP ska tillämpas i praktiken, inte ligga oläst. Brister kan stänga caféet vid en kommunkontroll.",
            "**Sätta priser som inte täcker personal.** Personalkostnaden är ofta störst – den måste in i varje produkts pris.",
            "**Ingen plan för säsong och vardagar.** Omsättningen svänger; planera bemanning och inköp efter när gästerna faktiskt kommer.",
            "**Saknad försäkring för kyl-/fryshaveri.** Ett haveri kan förstöra hela lagret – kontrollera att skyddet finns.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Det dyraste felet är att gissa",
          text: "Reglerna kring moms (särskilt den tillfälliga livsmedelsmomsen), kassaregister och livsmedel ändras. Bygg en vana att kontrollera aktuell uppgift hos Skatteverket, Livsmedelsverket och kommunen – och spara dokumentationen.",
        },
      ],
    },

    // 12 ─────────────────────────────────────────────────────────────────
    {
      number: 12,
      title: "Marknadsföring och dina första gäster",
      lead: "Så fyller du caféet och bygger en stamkundskrets som kommer tillbaka.",
      blocks: [
        {
          type: "paragraph",
          text: "Ett café lever på återkommande gäster och lokal synlighet. Det viktigaste i början är att synas där folk söker fik, ge en bra första upplevelse och få gästerna att komma tillbaka. Här är de kanaler som ger mest för ett nystartat café.",
        },
        {
          type: "list",
          items: [
            "**Google – sökning och karta.** Skapa en Google-företagsprofil med öppettider, bilder och meny så att du syns när någon söker fik i ditt område. Be nöjda gäster om omdömen.",
            "**Instagram och lokala flöden.** Café är visuellt – bilder på bakverk, kaffe och miljö lockar nya gäster och bygger varumärke.",
            "**Skylt och skyltfönster.** Tydlig skylt och inbjudande skyltfönster är avgörande för spontanbesök från förbipasserande.",
            "**Stamkundsförmåner.** Ett enkelt stämpelkort eller en app som belönar återkommande besök bygger lojalitet.",
            "**Lokala samarbeten.** Samarbeta med kontor i närheten (lunch/fika), grannbutiker och lokala evenemang.",
            "**En tydlig nisch.** Specialkaffe, glutenfritt, eget bageri eller ett tema gör caféet lättare att minnas och rekommendera.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Första intrycket avgör återbesöket",
          text: "Ett café säljs på upplevelsen: bemötande, kvalitet och miljö. En nöjd gäst kommer tillbaka och tar med sig vänner – den billigaste och bästa marknadsföringen. Lägg krut på de första veckornas gästupplevelse.",
        },
      ],
    },

    // 13 ─────────────────────────────────────────────────────────────────
    {
      number: 13,
      title: "Komplett checklista",
      lead: "Allt på ett ställe. Kryssa av i tur och ordning innan du öppnar.",
      blocks: [
        {
          type: "subheading",
          text: "Innan start",
        },
        {
          type: "checklist",
          items: [
            "Valt bolagsform (enskild firma eller AB) utifrån ansvar, skatt och hyresavtal",
            "Kontrollerat och valt företagsnamn hos Bolagsverket",
            "Registrerat företaget (AB: 1 900 kr e-tjänst, aktiekapital 25 000 kr insatt)",
            "Ansökt om F-skatt och momsregistrerat företaget",
            "Anmält verklig huvudman (AB) och öppnat företagskonto",
          ],
        },
        {
          type: "subheading",
          text: "Livsmedel, kassa och säkerhet",
        },
        {
          type: "checklist",
          items: [
            "Registrerat livsmedelsverksamheten hos kommunen (minst två veckor före start)",
            "Upprättat egenkontroll/HACCP och rutin för allergeninformation",
            "Skaffat certifierat kassaregister med kontrollenhet och anmält det till Skatteverket",
            "Satt rutin för elektronisk personalliggare",
            "Sökt serveringstillstånd hos kommunen om alkohol ska serveras",
          ],
        },
        {
          type: "subheading",
          text: "Ekonomi och försäkring",
        },
        {
          type: "checklist",
          items: [
            "Tecknat företags-, egendoms- och avbrottsförsäkring (inkl. kyl-/frysskydd)",
            "Satt priser som täcker råvaror, svinn, personal, hyra och vinst",
            "Konfigurerat kassan för rätt momssatser (servering 12 %, avhämtning 6 %, alkohol 25 %)",
            "Valt bokföringslösning som hanterar flera momssatser",
          ],
        },
        {
          type: "subheading",
          text: "Inför öppning",
        },
        {
          type: "checklist",
          items: [
            "Skapat Google-företagsprofil och sociala kanaler med bilder och öppettider",
            "Satt upp skylt och inbjudande skyltfönster",
            "Planerat bemanning och bakning efter förväntade gästtider",
            "Säkerställt likviditet/kassareserv för de första månaderna",
          ],
        },
      ],
    },

    // 14 ─────────────────────────────────────────────────────────────────
    {
      number: 14,
      title: "Resurser och myndighetskontakter",
      lead: "Spara den här sidan – här kontrollerar du aktuella moms-, livsmedels- och kassaregler.",
      blocks: [
        {
          type: "paragraph",
          text: "Reglerna och beloppen i cafébranschen uppdateras – inte minst den tillfälliga livsmedelsmomsen. Använd länkarna nedan för att kontrollera aktuell uppgift direkt hos källan innan du prissätter, öppnar eller anställer.",
        },
        {
          type: "links",
          items: [
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare – allt på ett ställe" },
            { label: "Skatteverket", url: "https://www.skatteverket.se", note: "Moms (servering/avhämtning), kassaregister, personalliggare, belopp och procent" },
            { label: "Livsmedelsverket", url: "https://www.livsmedelsverket.se", note: "Livsmedelsregistrering, egenkontroll/HACCP, allergener" },
            { label: "Din kommun", url: "https://www.verksamt.se", note: "Registrering av livsmedelsverksamhet och serveringstillstånd" },
            { label: "Bolagsverket", url: "https://www.bolagsverket.se", note: "Registrering, avgifter, namn, verklig huvudman" },
            { label: "Visita", url: "https://www.visita.se", note: "Bransch- och arbetsgivarstöd, kollektivavtal" },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Vill du bolla ditt upplägg med en rådgivare?",
          text: "Den här guiden tar dig långt på egen hand. Vill du dubbelkolla val av bolagsform, moms- och kassahantering eller kalkyl med en expert kan vi matcha dig med en rådgivare kostnadsfritt på driva-foretag.se/hitta-radgivare.",
        },
      ],
    },
  ],
};

export default cafe;
