import type { GuideContent } from "./types";

// ──────────────────────────────────────────────────────────────────────────
// STARTGUIDE: FRISÖRSALONG
//
// YMYL – faktagranskad mot primärkälla. Verifierade uppgifter (juni 2026):
//  • Aktiekapital privat AB 25 000 kr; AB-reg 1 900 kr e-tjänst / 2 200 kr
//    blankett (Bolagsverket). Egenavgifter 28,97 % + schablonavdrag 25 %;
//    arbetsgivaravgift 31,42 % (Skatteverket). Moms 25 %. Momsbefrielse högst
//    120 000 kr/år (fr.o.m. 1 jan 2025).
//  • Ingen yrkesauktorisation krävs i lag. Gesäll-/mästarbrev är en FRIVILLIG
//    branschstandard (Frisörföretagarna/Sveriges Hantverksråd).
//  • Hygienlokal: vanlig frisering är normalt INTE anmälningspliktig. Men
//    verksamhet med stickande/skärande verktyg och risk för blodsmitta
//    (t.ex. rakning med rakkniv/barberare, håltagning i öron, viss hudvård)
//    är anmälningspliktig till kommunens miljö-/hälsoskyddsnämnd enligt 38 §
//    förordning (1998:899) om miljöfarlig verksamhet och hälsoskydd. Frisör­
//    salonger lyder under miljöbalkens hälsoskydd och kommunens tillsyn oavsett.
//    Verifiera vad som gäller hos din kommun. (Socialstyrelsen/kommunen.)
//  • Personalliggare: frisör omfattas (kropps- och skönhetsvård). Kontrollavgift
//    12 500 kr + 2 500 kr/ej antecknad person. (Skatteverket.)
//  • Kassaregister: krävs vid kontant-/kortförsäljning (Swish = kort) över fyra
//    prisbasbelopp inkl. moms/år = 236 800 kr (2026). (Skatteverket.)
//
// Där en exakt siffra inte gått att verifiera mot primärkälla skrivs den
// kvalitativt ("kontrollera aktuell uppgift hos …") – aldrig gissad.
// ──────────────────────────────────────────────────────────────────────────

const frisorsalong: GuideContent = {
  slug: "frisorsalong",
  industry: "Frisörsalong",
  title: "Starta & driva frisörsalong",
  subtitle: "Komplett startguide 2026",
  year: 2026,
  reviewedAt: "2026-06-04",
  reviewedSources: "Skatteverket, Bolagsverket & kommunens miljöförvaltning",
  intro:
    "Den kompletta, faktagranskade guiden för dig som ska starta frisörsalong i Sverige – från bolagsform och F-skatt till hygienkrav, kassaregister, valet mellan stolhyra och anställning, prissättning och din första kund. Varje siffra är kontrollerad mot Skatteverket, Bolagsverket och berörda myndigheter.",

  chapters: [
    // 1
    {
      number: 1,
      title: "Att driva frisörsalong i Sverige",
      lead: "Vad branschen kräver av dig som företagare – och vad som gör den lönsam.",
      blocks: [
        {
          type: "paragraph",
          text: "Frisöryrket är ett hantverk med stadig efterfrågan – hår ska klippas oavsett konjunktur. Tröskeln att starta är relativt låg, men branschen är konkurrensutsatt och personalintensiv, och lönsamheten avgörs av hur du prissätter, fyller stolarna och organiserar arbetet. En central fråga som skiljer frisörbranschen från de flesta andra är valet mellan att **anställa frisörer** eller att **hyra ut stolar** till egna företagare.",
        },
        {
          type: "paragraph",
          text: "Med **frisörsalong** menar vi i den här guiden verksamheter som erbjuder klippning, färgning, styling och liknande hårvård – från en enmanssalong till en salong med flera frisörer, anställda eller stolhyrande. En del salonger erbjuder även barberartjänster, rakning eller hudvård, vilket kan utlösa särskilda hygienkrav (kapitel 3).",
        },
        {
          type: "paragraph",
          text: "Tre saker präglar frisörbranschen när du startar: **affärsmodellen** (anställning eller stolhyra – det påverkar skatt, ansvar och ekonomi), **hygien- och arbetsmiljökraven** (du arbetar nära kunder med kemikalier och ibland stickande/skärande verktyg) och **prissättningen** (där fyllnadsgrad i stolarna avgör lönsamheten). De tre är genomgående teman i guiden.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Så använder du guiden",
          text: "Läs kapitel 1–6 innan du öppnar – de avgör bolagsform, tillstånd, kassaregister och moms. Kapitel 7–12 är drift: försäkring, pris och affärsmodell, bokföring, personal/stolhyra och marknadsföring. Kapitel 13 är en komplett checklista, och kapitel 14 samlar alla myndighetskontakter.",
        },
      ],
    },

    // 2
    {
      number: 2,
      title: "Välj bolagsform: enskild firma eller aktiebolag",
      lead: "Valet påverkar ditt personliga ansvar, din skatt och hur du kan växa.",
      blocks: [
        {
          type: "paragraph",
          text: "För de flesta frisörsalonger står valet mellan **enskild näringsverksamhet** (enskild firma) och **aktiebolag (AB)**. Branschen har relativt låg startkostnad, så valet styrs mer av skatt, ansvar och hur du vill växa än av kapitalbehov.",
        },
        {
          type: "subheading",
          text: "Enskild firma",
        },
        {
          type: "paragraph",
          text: "Enklast och billigast att starta – vanligt för den som börjar ensam. Du och företaget är samma juridiska person, vilket betyder att du har **personligt ansvar** för företagets skulder. Du betalar **egenavgifter** på överskottet (28,97 % för aktiv näringsverksamhet 2026, med ett schablonavdrag på 25 % innan avgiften beräknas) och inkomsten beskattas som din lön. Passar bra för en enmanssalong med låg risk.",
          source: "Skatteverket, egenavgifter 28,97 % och schablonavdrag 25 % (2026).",
        },
        {
          type: "subheading",
          text: "Aktiebolag",
        },
        {
          type: "paragraph",
          text: "Ett aktiebolag är en egen juridisk person. Ditt personliga ansvar begränsas i normalfallet till **aktiekapitalet på 25 000 kr** (lägsta tillåtna för privat AB). Bolagsformen gör det enklare att anställa, ta in delägare, hyra ut stolar och bygga ett företagsvärde, och uppfattas ofta som mer seriös av hyresvärdar. Du anställs av ditt eget bolag och tar ut lön, vilket ger jämnare skatt och tillgång till t.ex. sjukpenninggrundande inkomst.",
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
            ["Lämplig vid uthyrning av stolar/anställda", "Mindre", "Bättre"],
            ["Administration", "Enklare bokföring", "Årsredovisning, mer formalia"],
          ],
          source: "Bolagsverket och Skatteverket (aktiekapital 25 000 kr, egenavgifter 28,97 % 2026).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Tumregel för frisörsalong",
          text: "Börjar du ensam med låg investering kan enskild firma räcka. Ska du anställa, hyra ut stolar eller teckna ett större lokalavtal – välj AB för ansvarsbegränsningen och för en tydligare struktur mellan salongen och de frisörer som arbetar där.",
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

    // 3
    {
      number: 3,
      title: "Tillstånd, krav och hygienlokal",
      lead: "Frisöryrket är inte auktorisationspliktigt – men hygien- och lokalkraven måste du få rätt.",
      blocks: [
        {
          type: "paragraph",
          text: "Det krävs **ingen yrkesauktorisation enligt lag** för att klippa hår och driva frisörsalong. Men det finns kompetens- och lokalkrav att hantera. Gå igenom punkterna nedan.",
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
          text: "Gesäll- och mästarbrev (frivilligt)",
        },
        {
          type: "paragraph",
          text: "**Gesällbrev** (efter avslutad utbildning och praktik) och **mästarbrev** är en **frivillig branschstandard** som visar yrkesskicklighet – inget lagkrav för att driva salong. Många kunder och arbetsgivare värderar det, och det kan stärka ditt varumärke, men du får driva frisörsalong utan det. Kontrollera aktuella krav hos Frisörföretagarna och Sveriges Hantverksråd.",
          source: "Frisörföretagarna och Sveriges Hantverksråd (gesäll-/mästarbrev är frivillig branschstandard, inte lagkrav).",
        },
        {
          type: "subheading",
          text: "Hygienlokal och eventuell anmälningsplikt (kommunen)",
        },
        {
          type: "paragraph",
          text: "En frisörsalong är en **hygienlokal** och lyder under miljöbalkens hälsoskyddsregler och kommunens tillsyn. **Vanlig frisering är normalt inte anmälningspliktig.** Men erbjuder du behandlingar med **stickande eller skärande verktyg och risk för blodsmitta** – t.ex. **rakning med rakkniv/barberartjänster, håltagning i öron eller viss hudvård** – kan verksamheten vara **anmälningspliktig** till kommunens miljö-/hälsoskyddsnämnd enligt **38 § förordning (1998:899) om miljöfarlig verksamhet och hälsoskydd**. Anmälan ska då göras innan start och du behöver ett egenkontrollprogram. Kontrollera med din kommun vad som gäller för just dina tjänster.",
          source: "Socialstyrelsen och kommunen (anmälningsplikt enligt 38 § förordning 1998:899 för verksamhet med blodsmitterisk; vanlig frisering normalt ej anmälningspliktig).",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Personalliggare – frisör omfattas",
          text: "Frisörverksamhet räknas till kropps- och skönhetsvård och omfattas av kravet på **elektronisk personalliggare** – alla verksamma ska antecknas löpande, även stolhyrande frisörer. Saknas eller är liggaren felaktig kan Skatteverket ta ut en **kontrollavgift på 12 500 kr** plus **2 500 kr per person** som inte är antecknad.",
          source: "Skatteverket, personalliggare (kropps- och skönhetsvård omfattas).",
        },
        {
          type: "subheading",
          text: "Kemikalier och arbetsmiljö",
        },
        {
          type: "paragraph",
          text: "Hårfärg, blekning och andra produkter är kemikalier. Du ska ha säkerhetsdatablad tillgängliga, följa Arbetsmiljöverkets regler om kemiska arbetsmiljörisker och se till att ventilation, handskar och hudskydd används. Allergirisk och belastningsskador (axlar, händer) är vanliga i yrket – planera för det.",
          source: "Arbetsmiljöverket (kemiska arbetsmiljörisker, ergonomi).",
        },
        {
          type: "links",
          items: [
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare" },
            { label: "Din kommuns miljöförvaltning", url: "https://www.verksamt.se", note: "Hygienlokal och eventuell anmälningsplikt" },
            { label: "Skatteverket", url: "https://www.skatteverket.se", note: "Kassaregister och personalliggare" },
            { label: "Frisörföretagarna", url: "https://www.frisorforetagarna.se", note: "Bransch- och arbetsgivarstöd, gesäll-/mästarbrev" },
          ],
        },
      ],
    },

    // 4
    {
      number: 4,
      title: "Startkapital och faktiska kostnader",
      lead: "Vad det faktiskt kostar att komma igång – och vilka utgifter som återkommer.",
      blocks: [
        {
          type: "paragraph",
          text: "En frisörsalong kräver lokal, inredning och utrustning, men är mindre kapitalkrävande än t.ex. ett café. Här är de poster du bör budgetera för. Myndighetsavgifter anges som fastställda belopp; övriga poster som kostnadsslag att räkna på.",
        },
        {
          type: "table",
          columns: ["Post", "Kommentar"],
          rows: [
            ["Aktiekapital (om AB)", "25 000 kr – sätts in på företagskonto, är ditt och kan användas i driften"],
            ["Registrering AB hos Bolagsverket", "1 900 kr via e-tjänst på verksamt.se (2 200 kr med pappersblankett)"],
            ["F-skatt och momsregistrering", "Gratis hos Skatteverket"],
            ["Lokal", "Hyra, deposition och eventuell anpassning (vatten, tvättstationer)"],
            ["Inredning och stolar", "Frisörstolar, speglar, tvättbäddar, väntplats"],
            ["Verktyg och utrustning", "Saxar, maskiner, föntorkar, kemikalier och produkter"],
            ["Kassaregister med kontrollenhet", "Certifierat kassaregister anmält till Skatteverket"],
            ["Boknings-/kassasystem", "System för tidbokning, betalning och kvitton"],
            ["Försäkringar", "Företags-, egendoms- och ansvarsförsäkring (se kapitel 7)"],
            ["Startlager av produkter", "Färg, schampo och produkter för försäljning"],
          ],
          source: "Bolagsverket (1 900 kr AB e-tjänst, 25 000 kr aktiekapital); Skatteverket (F-skatt/moms gratis).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Stolhyra sänker din startkostnad",
          text: "Väljer du att hyra ut stolar till frisörer med egna företag (kapitel 10) delar du investeringen i lokal och inredning, och får intäkter utan eget anställningsansvar. Många nya salonger startar med en blandning – egen stol plus uthyrda – för att hålla nere risken.",
        },
      ],
    },

    // 5
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
              title: "Ansök om F-skatt och momsregistrera dig",
              text: "Görs gratis via verksamt.se. Frisörtjänster har moms 25 % (befrielse möjlig först vid omsättning på högst 120 000 kr/år – se kapitel 6).",
            },
            {
              title: "Kontrollera hygienkrav med kommunen",
              text: "Stäm av med kommunens miljöförvaltning om dina tjänster (t.ex. rakning, håltagning, hudvård) är anmälningspliktiga, och förbered i så fall egenkontrollprogram.",
            },
            {
              title: "Skaffa kassaregister och anmäl till Skatteverket",
              text: "Certifierat kassaregister med kontrollenhet om kontant-/kortförsäljningen överstiger fyra prisbasbelopp/år. Anmäl registret till Skatteverket.",
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
              text: "Skaffa företagskonto (krav för AB), teckna försäkringar (kapitel 7), sätt rutin för personalliggare och bestäm bokföringslösning (kapitel 9) innan du öppnar.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Allt på ett ställe",
          text: "verksamt.se är myndigheternas gemensamma e-tjänst (Bolagsverket, Skatteverket och Tillväxtverket). Du kan registrera företag, ansöka om F-skatt, momsregistrera dig och anmäla arbetsgivare i samma inloggade flöde. Hygienfrågor sköter du med kommunen.",
          source: "verksamt.se (Bolagsverket, Skatteverket, Tillväxtverket).",
        },
      ],
    },

    // 6
    {
      number: 6,
      title: "Moms och kassaregister",
      lead: "Frisörtjänster har 25 % moms – och kassaregisterkraven är hårda i en kontantbransch.",
      blocks: [
        {
          type: "paragraph",
          text: "Momsen är enkel i frisörbranschen, men kassaregister- och kontantreglerna är desto viktigare eftersom Skatteverket granskar branschen särskilt.",
        },
        {
          type: "subheading",
          text: "Moms 25 %",
        },
        {
          type: "paragraph",
          text: "Frisörtjänster och försäljning av hårvårdsprodukter har **moms 25 %** (normalsats). Du kan vara momsbefriad först om omsättningen är **högst 120 000 kr per år** (gränsen gäller sedan 1 januari 2025) – men då kan du inte dra av ingående moms på dina inköp, vilket sällan lönar sig för en salong.",
          source: "Skatteverket, momsnormalsats 25 % och momsbefrielse vid omsättning på högst 120 000 kr/år (fr.o.m. 1 jan 2025).",
        },
        {
          type: "subheading",
          text: "Kassaregister",
        },
        {
          type: "paragraph",
          text: "Säljer du mot kontanter eller kort (Swish jämställs med kort) behöver du normalt ett **certifierat kassaregister** med kontrollenhet, anmält till Skatteverket. Undantag gäller bara om sådan försäljning är **högst fyra prisbasbelopp inkl. moms per år – 236 800 kr för 2026**. De flesta salonger ligger över den gränsen. Reglerna kring kassaregister ses över inför 2027 – kontrollera aktuellt hos Skatteverket.",
          source: "Skatteverket, krav på kassaregister och undantaget fyra prisbasbelopp (236 800 kr 2026; Swish jämställs med kort).",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Stolhyra påverkar vem som redovisar vad",
          text: "Hyr du ut en stol till en frisör med eget företag har **var och en sin egen försäljning, sin egen moms och sitt eget kassaregister** för sina kunder. Salongen fakturerar stolhyra (moms 25 %) till frisören. Det är viktigt att hålla isär flödena – och att uthyrningen är en verklig självständig verksamhet (se kapitel 10).",
          source: "Skatteverket (uthyrning av plats/stol och självständig näringsverksamhet).",
        },
      ],
    },

    // 7
    {
      number: 7,
      title: "Försäkringar du faktiskt behöver",
      lead: "Rätt skydd när du arbetar nära kunder med kemikalier och vassa verktyg.",
      blocks: [
        {
          type: "paragraph",
          text: "Som frisör arbetar du nära kundens hud och hår med kemikalier och vassa verktyg – en felbehandling eller allergisk reaktion kan leda till skadeståndskrav. Ansvarsförsäkring är därför i praktiken nödvändig, och hyresvärden kräver ofta att du kan visa giltigt skydd. Läs villkoren, inte bara priset.",
        },
        {
          type: "list",
          items: [
            "**Företagsförsäkring med ansvarsförsäkring** – täcker skador på kund (t.ex. allergisk reaktion på färg eller skada vid behandling) och på tredje person.",
            "**Egendoms- och inventarieförsäkring** – skyddar inredning, stolar, speglar och utrustning mot brand, vatten, stöld och skadegörelse.",
            "**Avbrottsförsäkring** – ersätter utebliven inkomst om salongen tvingas hålla stängt efter en skada.",
            "**Glas- och inbrottsförsäkring** – relevant för en lokal i gatuplan med skyltfönster och produkter.",
            "**Olycksfalls- och sjukavbrottsförsäkring** – ekonomiskt skydd för dig själv i ett fysiskt yrke med belastnings- och allergirisk.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Stolhyrare behöver egen försäkring",
          text: "En frisör som hyr stol och driver eget företag ska ha sin **egen ansvarsförsäkring** – salongens försäkring täcker normalt inte en självständig företagares behandlingar. Reglera försäkringskravet i stolhyresavtalet så att alla i salongen har giltigt skydd.",
        },
      ],
    },

    // 8
    {
      number: 8,
      title: "Prissättning och lönsamhet",
      lead: "Så sätter du priser och fyller stolarna så att det blir vinst.",
      blocks: [
        {
          type: "paragraph",
          text: "Den vanligaste orsaken till att frisörsalonger inte går runt är låg **fyllnadsgrad** i stolarna och priser som inte täcker tomtid. Ditt pris ska täcka din (eller de anställdas) lön, sociala avgifter, lokal, produkter, utrustning, försäkring och vinst – och du tjänar bara när stolen är upptagen. Räkna baklänges från vad du behöver per år.",
        },
        {
          type: "subheading",
          text: "Bygg upp ditt pris",
        },
        {
          type: "list",
          items: [
            "Utgå från **önskad lön** (din egen eller de anställdas) och lägg på sociala avgifter, semester och pension.",
            "Lägg till **fasta kostnader**: hyra, el, produkter, utrustning, försäkring och system.",
            "Räkna med **realistisk fyllnadsgrad** – alla timmar är inte bokade. Tomtid är din största dolda kostnad.",
            "Sätt **prislista per tjänst** (klippning, färg, slingor) och se till att tidskrävande behandlingar är prissatta efter faktisk tidsåtgång.",
            "Lägg på **vinstmarginal** och räkna in produktförsäljning som ett komplement.",
          ],
        },
        {
          type: "subheading",
          text: "Produktförsäljning och merförsäljning",
        },
        {
          type: "paragraph",
          text: "Försäljning av hårvårdsprodukter kan vara en viktig och lönsam intäktskälla utöver behandlingarna. Rekommendera produkter du själv använder och står för, och se till att de finns synligt i salongen. Merförsäljning (t.ex. inpackning eller styling till klippningen) höjer snittnotan utan att kräva fler kunder.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Boka smart och minska tomtid",
          text: "Ett online-bokningssystem som låter kunder boka själva dygnet runt, med påminnelser för att minska uteblivna besök, är ett av de mest lönsamhetshöjande verktygen i branschen. Varje tom stol är förlorad intäkt du inte får tillbaka.",
        },
      ],
    },

    // 9
    {
      number: 9,
      title: "Bokföring och skatt",
      lead: "Löpande ordning i ekonomin – och det frisörsalonger ofta gör fel med kontanter och stolhyra.",
      blocks: [
        {
          type: "paragraph",
          text: "Alla företag är enligt bokföringslagen skyldiga att löpande bokföra sina affärshändelser och spara underlag. En frisörsalong har många små transaktioner, kontanthantering och ibland stolhyresintäkter – ett bra kassasystem och ofta en redovisningsbyrå underlättar.",
        },
        {
          type: "subheading",
          text: "F-skatt och preliminärskatt",
        },
        {
          type: "paragraph",
          text: "Med **F-skatt** betalar du själv in din skatt och dina egenavgifter (enskild firma) eller bolagets skatt (AB). Skatteverket beslutar en **preliminärskatt** som du betalar varje månad utifrån din uppskattade vinst. Justera prognosen om resultatet ändras.",
        },
        {
          type: "subheading",
          text: "Kontanter och stolhyra i bokföringen",
        },
        {
          type: "paragraph",
          text: "Kontant- och kortförsäljning ska registreras i kassaregistret och stämmas av dagligen. Hyr du ut stolar ska **stolhyran (med 25 % moms) hållas isär** från salongens egen tjänsteförsäljning. Var noga med att uthyrningen behandlas korrekt och att varje frisörs egen verksamhet redovisas av frisören själv (kapitel 10).",
        },
        {
          type: "subheading",
          text: "Vanliga avdrag för frisörsalong",
        },
        {
          type: "list",
          items: [
            "**Produkter och förbrukningsmaterial** – färg, schampo, folie och engångsmaterial.",
            "**Verktyg och utrustning** – saxar, maskiner, stolar; större inköp skrivs av över tid.",
            "**Lokalkostnader** – hyra, el, vatten och städning.",
            "**Kassa- och bokningssystem** – programvara, kontrollenhet och licenser.",
            "**Utbildning** – kurser och fortbildning som rör yrket.",
            "**Försäkringar och arbetskläder** – företagsförsäkring och yrkeskläder.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Kontantbranschen granskas hårt",
          text: "Frisörbranschen är kontantintensiv och granskas särskilt av Skatteverket, med krav på kassaregister och personalliggare. Ordnad kassaredovisning och dokumenterad personalliggare (även för stolhyrare) är ditt bästa skydd vid en kontroll. Spara alla underlag enligt bokföringslagen.",
        },
      ],
    },

    // 10
    {
      number: 10,
      title: "Att anställa eller hyra ut stolar",
      lead: "Branschens centrala vägval – med olika kostnader, ansvar och skatteregler.",
      blocks: [
        {
          type: "paragraph",
          text: "I frisörbranschen finns två huvudsakliga sätt att växa: **anställa frisörer** eller **hyra ut stolar** till frisörer med egna företag. Valet påverkar din ekonomi, ditt ansvar och hur Skatteverket ser på verksamheten.",
        },
        {
          type: "subheading",
          text: "Anställa",
        },
        {
          type: "paragraph",
          text: "Anställer du frisörer betalar du lön plus **arbetsgivaravgifter** – normalsatsen 2026 är **31,42 %** av bruttolönen – och har fullt arbetsgivar- och arbetsmiljöansvar. Du styr arbetet, tar intäkterna och bär risken för tomtid. Branschen är till stor del kollektivavtalsreglerad (avtal mellan Frisörföretagarna och Handelsanställdas förbund) med bland annat minimilöner och provisionssystem – kontrollera aktuella villkor hos parterna.",
          source: "Skatteverket, arbetsgivaravgift normalsats 31,42 % (2026).",
        },
        {
          type: "subheading",
          text: "Hyra ut stolar (stolhyra)",
        },
        {
          type: "paragraph",
          text: "Vid **stolhyra** driver varje frisör sitt **eget företag** och hyr en plats i din salong. Du fakturerar hyra (moms 25 %), slipper anställningskostnader och tomtidsrisk, men har mindre kontroll. Frisören ansvarar själv för sin skatt, moms, försäkring och kassaregister.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Stolhyra måste vara en verklig självständig verksamhet",
          text: "För att stolhyra ska godtas skattemässigt måste den uthyrda frisören driva en **verkligt självständig verksamhet** – egen prissättning, egna kunder, eget ansvar och egen risk. Är upplägget i praktiken en anställning (du styr tider, priser och arbete) kan Skatteverket omklassificera det, och du kan bli skyldig att betala arbetsgivaravgifter och skatt i efterhand. Skriv tydliga stolhyresavtal och låt frisören vara genuint självständig.",
          source: "Skatteverket (gränsdragning mellan självständig näringsverksamhet och anställning).",
        },
        {
          type: "paragraph",
          text: "Oavsett modell ska **alla verksamma antecknas i personalliggaren** (kapitel 3), och alla i salongen bör ha giltig ansvarsförsäkring (kapitel 7).",
        },
      ],
    },

    // 11
    {
      number: 11,
      title: "Vanliga misstag och fallgropar",
      lead: "De dyraste nybörjarfelen i frisörbranschen – och hur du undviker dem.",
      blocks: [
        {
          type: "list",
          items: [
            "**Stolhyra som egentligen är anställning.** Om du styr frisörens tider, priser och arbete kan Skatteverket omklassificera upplägget och kräva arbetsgivaravgifter i efterhand. Gör uthyrningen genuint självständig.",
            "**Sakna eller missköta kassaregister/personalliggare.** Båda krävs och kontrolleras hårt; kontrollavgifterna är höga (12 500 kr + 2 500 kr/person).",
            "**Missa anmälningsplikt för stickande/skärande tjänster.** Erbjuder du rakning, håltagning eller viss hudvård – kontrollera anmälningsplikten hos kommunen innan start.",
            "**Hög tomtid.** Olönsamma luckor i bokningen är branschens största dolda kostnad. Använd onlinebokning och påminnelser.",
            "**För lågt pris på tidskrävande behandlingar.** Färg och slingor tar lång tid – prissätt efter faktisk tidsåtgång, inte schablon.",
            "**Slarv med kemikalier och ergonomi.** Allergi och belastningsskador är vanliga – följ kemikalie- och arbetsmiljöregler från start.",
            "**Glömma försäkring för stolhyrare.** Varje självständig frisör behöver egen ansvarsförsäkring; reglera det i avtalet.",
            "**Ingen merförsäljning.** Att inte ta vara på produktförsäljning lämnar lönsamhet på bordet.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Det dyraste felet är att gissa",
          text: "Reglerna kring stolhyra, kassaregister och hygienlokal kan vara knepiga. Bygg en vana att kontrollera aktuell uppgift hos Skatteverket och kommunen innan du sätter upp ett upplägg – och spara dokumentationen.",
        },
      ],
    },

    // 12
    {
      number: 12,
      title: "Marknadsföring och dina första kunder",
      lead: "Så fyller du stolarna och bygger en lojal kundstock.",
      blocks: [
        {
          type: "paragraph",
          text: "En frisörsalong lever på återkommande kunder och lokal synlighet. Det viktigaste i början är att vara lätt att hitta och boka, ge en bra upplevelse och få kunderna att boka om direkt. Här är de kanaler som ger mest för en nystartad salong.",
        },
        {
          type: "list",
          items: [
            "**Onlinebokning dygnet runt.** Låt kunder boka själva när de vill, med automatiska påminnelser – det fyller stolarna och minskar uteblivna besök.",
            "**Google – sökning och karta.** Skapa en Google-företagsprofil med bilder, tjänster och öppettider. Omdömen väger tungt när någon väljer ny frisör.",
            "**Instagram och TikTok.** Frisörarbete är visuellt – före- och efterbilder och stylingklipp lockar nya kunder och visar din stil.",
            "**Boka-om vid besöket.** Be kunden boka nästa tid redan i stolen – det är branschens enklaste sätt att skapa återkommande intäkter.",
            "**Värvning och förmåner.** Belöna kunder som tipsar vänner – mun-till-mun är starkt i en lokal bransch.",
            "**Lokal synlighet.** Tydlig skylt och samarbeten med grannföretag drar förbipasserande.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Återbesöket är affären",
          text: "Lönsamheten ligger i att kunden kommer tillbaka var sjätte till åttonde vecka. En bra upplevelse och en redan bokad nästa tid är värd mer än många engångskunder. Bygg rutiner kring återbokning från dag ett.",
        },
      ],
    },

    // 13
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
            "Valt bolagsform (enskild firma eller AB) utifrån ansvar, skatt och tillväxtplan",
            "Kontrollerat och valt företagsnamn hos Bolagsverket",
            "Registrerat företaget (AB: 1 900 kr e-tjänst, aktiekapital 25 000 kr insatt)",
            "Ansökt om F-skatt och momsregistrerat företaget",
            "Anmält verklig huvudman (AB) och öppnat företagskonto",
          ],
        },
        {
          type: "subheading",
          text: "Tillstånd, kassa och säkerhet",
        },
        {
          type: "checklist",
          items: [
            "Kontrollerat med kommunen om dina tjänster är anmälningspliktiga (rakning, håltagning, hudvård)",
            "Skaffat certifierat kassaregister med kontrollenhet och anmält det till Skatteverket",
            "Satt rutin för elektronisk personalliggare (även för stolhyrare)",
            "Satt rutin för kemikaliehantering, säkerhetsdatablad och ergonomi",
          ],
        },
        {
          type: "subheading",
          text: "Ekonomi, modell och försäkring",
        },
        {
          type: "checklist",
          items: [
            "Bestämt affärsmodell (anställning, stolhyra eller blandning)",
            "Tagit fram stolhyresavtal som gör uthyrningen genuint självständig (vid stolhyra)",
            "Tecknat företags-, egendoms- och ansvarsförsäkring (samt krav på stolhyrares egen)",
            "Satt prislista per tjänst och räknat med realistisk fyllnadsgrad",
            "Valt boknings- och bokföringslösning",
          ],
        },
        {
          type: "subheading",
          text: "Inför öppning",
        },
        {
          type: "checklist",
          items: [
            "Satt upp onlinebokning med påminnelser",
            "Skapat Google-företagsprofil och sociala kanaler med bilder",
            "Planerat produktförsäljning och merförsäljning",
            "Säkerställt likviditet/kassareserv för de första månaderna",
          ],
        },
      ],
    },

    // 14
    {
      number: 14,
      title: "Resurser och myndighetskontakter",
      lead: "Spara den här sidan – här kontrollerar du aktuella regler om kassa, hygien och skatt.",
      blocks: [
        {
          type: "paragraph",
          text: "Reglerna och beloppen uppdateras. Använd länkarna nedan för att kontrollera aktuell uppgift direkt hos källan innan du sätter upp stolhyra, prissätter eller anställer.",
        },
        {
          type: "links",
          items: [
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare – allt på ett ställe" },
            { label: "Skatteverket", url: "https://www.skatteverket.se", note: "Moms, kassaregister, personalliggare, stolhyra vs anställning, 3:12" },
            { label: "Din kommuns miljöförvaltning", url: "https://www.verksamt.se", note: "Hygienlokal och anmälningsplikt enligt 38 § FMH" },
            { label: "Bolagsverket", url: "https://www.bolagsverket.se", note: "Registrering, avgifter, namn, verklig huvudman" },
            { label: "Arbetsmiljöverket", url: "https://www.av.se", note: "Kemiska arbetsmiljörisker, ergonomi" },
            { label: "Frisörföretagarna", url: "https://www.frisorforetagarna.se", note: "Kollektivavtal, gesäll-/mästarbrev, branschstöd" },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Vill du bolla ditt upplägg med en rådgivare?",
          text: "Den här guiden tar dig långt på egen hand. Vill du dubbelkolla val av bolagsform, stolhyra vs anställning eller försäkring med en expert kan vi matcha dig med en rådgivare kostnadsfritt på driva-foretag.se/hitta-radgivare.",
        },
      ],
    },
  ],
};

export default frisorsalong;
