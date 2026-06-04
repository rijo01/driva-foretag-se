import type { GuideContent } from "./types";

// ──────────────────────────────────────────────────────────────────────────
// STARTGUIDE: ÅKERI & TRANSPORT (godstrafik)
//
// YMYL – faktagranskad mot primärkälla. Verifierade uppgifter (juni 2026):
//  • Yrkestrafiktillstånd för yrkesmässig godstrafik krävs enligt
//    yrkestrafiklagen (2012:210) och EU-förordning (EG) nr 1071/2009. Söks hos
//    Transportstyrelsen via e-tjänst (Transportstyrelsen).
//  • Fyra grundkrav: faktisk och fast etablering i Sverige, yrkeskunnande
//    (trafikansvarig med godkänt prov hos Trafikverket), gott anseende,
//    ekonomiska resurser (Transportstyrelsen).
//  • Ekonomiska resurser: minst 9 000 euro för första fordonet + 5 000 euro per
//    ytterligare fordon (tunga fordon). Transportstyrelsen fastställer den
//    svenska växelkursen inför varje kalenderår → euro anges som fast belopp,
//    SEK kvalitativt (kontrollera årets kurs).
//  • Yrkeskunnandeprov hålls av Trafikverket (förarprovskontor).
//  • Lätta fordon 2,5–3,5 ton i internationell trafik kräver gemenskapstillstånd
//    sedan 21 maj 2022 (Mobilitetspaketet, Transportstyrelsen). Ett 2026-förslag
//    (Förenklingsrådet) om sänkt ekonomiskt krav (1 800/900 euro) är ännu inte
//    fastställd lag – skrivs kvalitativt.
//  • Kör- och vilotider: EU-förordning (EG) nr 561/2006; färdskrivare obligatorisk.
//    Reglerna utvidgas 1 juli 2026 till internationell godstrafik med fordon
//    2,5–3,5 ton (Transportstyrelsen).
//  • Cabotage: max 3 transporter inom 7 dagar efter internationell leverans
//    (Transportstyrelsen).
//  • Farligt gods: ADR-S (MSB); ADR-förarintyg giltigt 5 år.
//  • Vägavgift: tidsbaserad (Eurovinjett) för tunga fordon – ingen avståndsbaserad
//    km-skatt i kraft 2026 (Skatteverket/Transportstyrelsen).
//  • Moms normalsats 25 %, arbetsgivaravgift 31,42 % (2026), aktiekapital privat
//    AB 25 000 kr, AB-registrering 1 900 kr e-tjänst / 2 200 kr blankett
//    (Skatteverket, Bolagsverket).
//
// Där en exakt siffra inte gått att verifiera mot primärkälla skrivs den
// kvalitativt ("kontrollera aktuell uppgift hos …") – aldrig gissad.
// ──────────────────────────────────────────────────────────────────────────

const akeri: GuideContent = {
  slug: "akeri",
  industry: "Åkeri",
  title: "Starta & driva åkeri",
  subtitle: "Komplett startguide 2026",
  year: 2026,
  reviewedAt: "2026-06-04",
  reviewedSources: "Transportstyrelsen, Trafikverket, Skatteverket & Bolagsverket",
  intro:
    "Den kompletta, faktagranskade guiden för dig som ska starta åkeri och köra yrkesmässig godstrafik i Sverige – från yrkestrafiktillstånd, trafikansvarig och de fyra grundkraven till fordon, kör- och vilotider, cabotage, prissättning och din första kund. Varje krav är kontrollerat mot Transportstyrelsen, Trafikverket och Skatteverket.",

  chapters: [
    // 1 ──────────────────────────────────────────────────────────────────
    {
      number: 1,
      title: "Att driva åkeri i Sverige",
      lead: "Vad branschen kräver av dig som företagare – och vad som gör den lönsam.",
      blocks: [
        {
          type: "paragraph",
          text: "Transport är blodomloppet i svensk ekonomi – varje vara som säljs har transporterats minst en gång. Efterfrågan på godstransporter är stabil, men åkeribranschen är samtidigt en av de mest reglerade och kapitalkrävande branscherna att starta i. Här möts ett särskilt tillståndskrav (yrkestrafiktillstånd), hårda EU-regler om kör- och vilotider, dyra fordon och pressade marginaler. Den som förstår reglerna och räknar rätt på kilometerkostnaden från start får ett stort försprång.",
        },
        {
          type: "paragraph",
          text: "Med **åkeri** menar vi i den här guiden företag som utför **yrkesmässig godstrafik** mot betalning – allt från en enmansfirma med en lastbil till ett bolag med flera fordon och anställda förare. Reglerna i guiden gäller i grunden lika oavsett storlek, men kraven på tillstånd, kapital och trafikansvarig är desamma redan från första fordonet.",
        },
        {
          type: "paragraph",
          text: "Tre saker skiljer åkeribranschen från de flesta andra när du startar: **yrkestrafiktillståndet** med dess fyra grundkrav (etablering, yrkeskunnande, gott anseende och ekonomiska resurser), **kör- och vilotidsreglerna** med obligatorisk färdskrivare, och **den höga kapitalbindningen** i fordon. De tre styr hur du planerar verksamheten, prissätter och bemannar – och de är genomgående teman i guiden.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Så använder du guiden",
          text: "Läs kapitel 1–6 innan du registrerar företaget och köper fordon – de avgör bolagsform, tillstånd och de regler som styr din dagliga drift. Kapitel 7–12 är drift: försäkring, pris, bokföring, anställda och kunder. Kapitel 13 är en komplett checklista du kan kryssa av, och kapitel 14 samlar alla myndighetskontakter med länkar.",
        },
      ],
    },

    // 2 ──────────────────────────────────────────────────────────────────
    {
      number: 2,
      title: "Välj bolagsform: enskild firma eller aktiebolag",
      lead: "Valet påverkar ditt personliga ansvar, din skatt och hur uppdragsgivare ser på dig.",
      blocks: [
        {
          type: "paragraph",
          text: "För de flesta åkerier står valet mellan **enskild näringsverksamhet** (enskild firma) och **aktiebolag (AB)**. Båda går att driva godstrafik i – men de skiljer sig åt på fyra punkter som spelar extra stor roll i en bransch med dyra fordon och stora lån: personligt ansvar, kapitalkrav, skatt och förtroende hos transportköpare och speditörer.",
        },
        {
          type: "subheading",
          text: "Enskild firma",
        },
        {
          type: "paragraph",
          text: "Enklast och billigast att starta. Du och företaget är samma juridiska person, vilket betyder att du har **personligt ansvar** för företagets skulder – tungt vägande i en bransch där ett enda lastbilsekipage kan vara lånefinansierat för miljonbelopp. Du betalar **egenavgifter** på överskottet (28,97 % för aktiv näringsverksamhet 2026, med ett schablonavdrag på 25 % innan avgiften beräknas) och inkomsten beskattas som din lön. Passar när du börjar ensam med ett fordon och vill komma igång snabbt – men väg in ansvaret mot fordonslånen.",
          source: "Skatteverket, egenavgifter 28,97 % och schablonavdrag 25 % (2026).",
        },
        {
          type: "subheading",
          text: "Aktiebolag",
        },
        {
          type: "paragraph",
          text: "Ett aktiebolag är en egen juridisk person. Ditt personliga ansvar begränsas i normalfallet till **aktiekapitalet på 25 000 kr** (lägsta tillåtna för privat AB) – en viktig trygghet när du tar lån på fordon och tar på dig stora transportåtaganden. Många speditörer, transportcentraler och offentliga upphandlingar arbetar dessutom hellre med AB, och bolagsformen gör det enklare att finansiera fler fordon, anställa och bygga upp ett företagsvärde. Du anställs av ditt eget bolag och tar ut lön, vilket ger jämnare skatt och tillgång till t.ex. sjukpenninggrundande inkomst.",
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
            ["Förtroende hos speditörer/upphandlare", "Lägre", "Högre"],
            ["Administration", "Enklare bokföring", "Årsredovisning, mer formalia"],
          ],
          source: "Bolagsverket och Skatteverket (aktiekapital 25 000 kr, egenavgifter 28,97 % 2026).",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Tillståndet kräver ekonomiska resurser oavsett bolagsform",
          text: "Oavsett om du väljer enskild firma eller AB måste du visa **ekonomiska resurser** för att få yrkestrafiktillstånd (se kapitel 3) – minst 9 000 euro för första fordonet. Aktiekapitalet i ett AB räknas inte automatiskt som detta; kravet prövas separat av Transportstyrelsen. Planera kapitalet med båda kraven i åtanke.",
          source: "Transportstyrelsen, ekonomiska resurser för yrkestrafiktillstånd.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Skatteregler för delägare i fåmansföretag (3:12)",
          text: "Driver du AB och tar utdelning gäller de särskilda 3:12-reglerna med årligt gränsbelopp. Reglerna ändrades från 1 januari 2026 – kontrollera aktuellt gränsbelopp och regler hos Skatteverket innan du planerar utdelning.",
          source: "Skatteverket, reglerna för utdelning i fåmansföretag (3:12).",
        },
      ],
    },

    // 3 ──────────────────────────────────────────────────────────────────
    {
      number: 3,
      title: "Yrkestrafiktillstånd och de fyra grundkraven",
      lead: "Utan tillstånd får du inte köra gods mot betalning. Här är vad som krävs – och var du ansöker.",
      blocks: [
        {
          type: "paragraph",
          text: "För att utföra **yrkesmässig godstrafik** – transporter av gods åt andra mot betalning – krävs **yrkestrafiktillstånd**. Kravet följer av yrkestrafiklagen (2012:210) och EU-förordning (EG) nr 1071/2009, och du ansöker hos **Transportstyrelsen** via deras e-tjänst. Det är grunden i hela verksamheten: utan tillstånd får du inte ta uppdrag, och att köra utan är ett brott.",
          source: "Transportstyrelsen; yrkestrafiklagen (2012:210); EU-förordning (EG) nr 1071/2009.",
        },
        {
          type: "paragraph",
          text: "Tillståndet vilar på **fyra grundkrav** som alla måste vara uppfyllda. Gå igenom dem noga – det är här de flesta ansökningar fastnar.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Faktisk och fast etablering i Sverige",
              text: "Företaget ska ha ett verkligt driftställe i Sverige med en gatuadress (inte enbart en postbox), där fordonen kan parkeras och där de viktigaste företagsdokumenten förvaras. Etableringen ska vara reell – inte bara en adress på pappret.",
            },
            {
              title: "Yrkeskunnande (via trafikansvarig)",
              text: "Företaget måste ha en **trafikansvarig** som har det yrkeskunnande som krävs. Yrkeskunnandet visas genom ett **godkänt prov hos Trafikverket** (förarprovskontor). Den trafikansvariga ansvarar för att verksamheten följer trafik- och transportreglerna.",
            },
            {
              title: "Gott anseende",
              text: "Företaget, ägare och trafikansvarig prövas avseende skötsamhet – allvarliga brott, obetalda skatter och avgifter eller upprepade överträdelser kan göra att tillstånd nekas eller återkallas.",
            },
            {
              title: "Ekonomiska resurser",
              text: "Du måste visa att företaget har tillräckligt kapital och reserver: minst **9 000 euro för det första fordonet** och **5 000 euro för varje ytterligare fordon**. Transportstyrelsen prövar detta via en särskild blankett, ofta utifrån bokslut, bankintyg eller borgen.",
            },
          ],
        },
        {
          type: "callout",
          variant: "fact",
          title: "Ekonomikravet i euro – kontrollera årets kronkurs",
          text: "Kravet anges i **euro: 9 000 euro för första fordonet och 5 000 euro per ytterligare fordon** (tunga fordon). Transportstyrelsen **fastställer den svenska växelkursen inför varje kalenderår**, så kronbeloppet ändras år från år (grovt räknat i storleksordningen 90 000–100 000 kr för första fordonet respektive drygt 50 000 kr per ytterligare). Räkna med euro-beloppen och **kontrollera årets exakta kronkurs i Transportstyrelsens blankett** innan du planerar kapitalet.",
          source: "Transportstyrelsen, ekonomiska resurser (euro-belopp fasta; växelkurs fastställs årligen).",
        },
        {
          type: "subheading",
          text: "Trafikansvarig",
        },
        {
          type: "paragraph",
          text: "Den **trafikansvariga** är en utpekad person som ansvarar för att transportverksamheten bedrivs enligt reglerna. I en mindre firma är det ofta du själv. Personen ska ha godkänt yrkeskunnandeprov hos Trafikverket och faktiskt och fortlöpande leda transportverksamheten. Provet omfattar bland annat transporträtt, ekonomi, kör- och vilotider, fordonsteknik och trafiksäkerhet.",
          source: "Transportstyrelsen och Trafikverket, prov i yrkeskunnande för trafiktillstånd.",
        },
        {
          type: "subheading",
          text: "Lätta fordon (2,5–3,5 ton)",
        },
        {
          type: "paragraph",
          text: "Det fulla regelverket gäller fordon (inklusive släp) med en totalvikt **över 3,5 ton**. För **lätta fordon mellan 2,5 och 3,5 ton** finns ett lättare regelverk: sedan **21 maj 2022** krävs **gemenskapstillstånd** för internationell godstrafik med sådana fordon (en del av EU:s mobilitetspaket). Kraven för lätta fordon kan ändras – det har funnits förslag om sänkta ekonomiska krav för dem. **Kontrollera aktuella regler och beloppsgränser för lätta fordon hos Transportstyrelsen** innan du planerar en verksamhet kring skåpbilar.",
          source: "Transportstyrelsen, godstrafik inom EU/EES (gemenskapstillstånd för lätta fordon sedan 21 maj 2022).",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Farligt gods (ADR) kräver särskild behörighet",
          text: "Ska du transportera **farligt gods** gäller regelverket **ADR-S**, som föreskrivs av **MSB** (Myndigheten för samhällsskydd och beredskap). Föraren behöver ett **ADR-förarintyg** efter godkänd utbildning; intyget är giltigt i **5 år** och förnyas med repetitionsutbildning. Planerar du sådana transporter – ordna behörigheten innan du tar uppdraget.",
          source: "MSB, ADR-S; Transportstyrelsen, farligt gods.",
        },
        {
          type: "links",
          items: [
            { label: "Transportstyrelsen – yrkestrafik gods", url: "https://www.transportstyrelsen.se", note: "Yrkestrafiktillstånd, de fyra kraven, ekonomiska resurser, cabotage" },
            { label: "Trafikverket – förarprov", url: "https://www.trafikverket.se", note: "Prov i yrkeskunnande för trafikansvarig" },
            { label: "MSB – farligt gods (ADR)", url: "https://www.msb.se", note: "ADR-S, ADR-förarintyg" },
          ],
        },
      ],
    },

    // 4 ──────────────────────────────────────────────────────────────────
    {
      number: 4,
      title: "Startkapital och faktiska kostnader",
      lead: "Vad det faktiskt kostar att komma igång – och vilka utgifter som återkommer varje månad.",
      blocks: [
        {
          type: "paragraph",
          text: "Åkeri är bland de mest kapitalkrävande branscherna att starta i. Ett enda lastbilsekipage kostar ofta mer än hela startbudgeten för ett tjänsteföretag, och till det kommer drivmedel, försäkringar, däck, service och det lagstadgade ekonomikravet i tillståndet. Här är de poster du bör budgetera för. Myndighetsavgifter anges som fastställda belopp; övriga poster anges som kostnadsslag att räkna på.",
        },
        {
          type: "table",
          columns: ["Post", "Kommentar"],
          rows: [
            ["Aktiekapital (om AB)", "25 000 kr – sätts in på företagskonto, är ditt och kan användas i driften"],
            ["Registrering AB hos Bolagsverket", "1 900 kr via e-tjänst på verksamt.se (2 200 kr med pappersblankett)"],
            ["Ekonomiska resurser (tillståndskrav)", "Minst 9 000 euro för första fordonet + 5 000 euro per ytterligare (kontrollera årets kronkurs hos Transportstyrelsen)"],
            ["Yrkestrafiktillstånd", "Ansökningsavgift hos Transportstyrelsen – kontrollera aktuell avgift"],
            ["Prov för yrkeskunnande", "Provavgift hos Trafikverket – kontrollera aktuell avgift"],
            ["Fordon (dragbil/lastbil/släp)", "Den enskilt största posten – köp eller leasing, ofta lånefinansierat"],
            ["Drivmedel", "Stor löpande kostnad – följ förbrukning och drivmedelspris noga"],
            ["Försäkringar", "Trafik-, vagnskade-, gods-/transportöransvar (se kapitel 7)"],
            ["Däck, service och reparationer", "Återkommande – budgetera per mil/körd sträcka"],
            ["Färdskrivare och vägavgifter", "Färdskrivare, eventuell trängselskatt och vägavgift (Eurovinjett)"],
          ],
          source: "Bolagsverket (1 900 kr AB e-tjänst, 25 000 kr aktiekapital); Transportstyrelsen (ekonomiska resurser).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Räkna i kilometerkostnad – inte i magkänsla",
          text: "Det avgörande nyckeltalet i åkeri är **kostnad per körd kilometer (eller mil)**. Summera alla fasta kostnader (fordon, försäkring, tillstånd, lön) och rörliga kostnader (drivmedel, däck, service) och dela på realistisk körsträcka. Vet du din kilometerkostnad kan du säga nej till olönsamma uppdrag – det är skillnaden mellan ett åkeri som går runt och ett som kör ihjäl sig på för låga priser.",
        },
        {
          type: "paragraph",
          text: "**Likviditet är livsviktigt i åkeri.** Du betalar drivmedel, löner och leasing varje månad, men kunderna betalar ofta 30–60 dagar efter utfört uppdrag. Planera för att ha rörelsekapital som täcker minst ett par månaders drift, och var noga med betalningsvillkor och fakturarutiner från dag ett.",
        },
      ],
    },

    // 5 ──────────────────────────────────────────────────────────────────
    {
      number: 5,
      title: "Steg-för-steg: så registrerar du företaget",
      lead: "Hela vägen från företagsnamn till första uppdraget – i rätt ordning.",
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
              title: "Ansök om F-skatt och momsregistrering",
              text: "Görs gratis via verksamt.se. F-skatt är ett krav i praktiken för att få uppdrag. Säljer du transporttjänster är du momsregistrerad (normalsats 25 %).",
            },
            {
              title: "Säkra trafikansvarig och yrkeskunnande",
              text: "Utse en **trafikansvarig** och se till att personen har **godkänt yrkeskunnandeprov hos Trafikverket**. Boka och klara provet i god tid – det är ett krav för tillståndet.",
            },
            {
              title: "Ansök om yrkestrafiktillstånd hos Transportstyrelsen",
              text: "Lämna in ansökan via Transportstyrelsens e-tjänst och styrk de fyra kraven: etablering, yrkeskunnande, gott anseende och **ekonomiska resurser** (9 000 euro för första fordonet + 5 000 euro per ytterligare). Räkna med handläggningstid.",
            },
            {
              title: "Registrera dig som arbetsgivare (om du ska anställa förare)",
              text: "Ska du ha anställda förare anmäler du dig som arbetsgivare hos Skatteverket via verksamt.se. Då börjar du redovisa arbetsgivaravgifter och avdragen skatt (se kapitel 10).",
            },
            {
              title: "Anmäl verklig huvudman",
              text: "AB ska anmäla verklig huvudman till Bolagsverket, normalt inom fyra veckor från registreringen.",
            },
            {
              title: "Ordna fordon, försäkring, färdskrivare och bokföring",
              text: "Skaffa fordon (köp/leasing), teckna försäkringar (kapitel 7), säkerställ fungerande färdskrivare och förarkort, öppna företagskonto och bestäm bokföringslösning (kapitel 9).",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Allt på ett ställe",
          text: "verksamt.se är myndigheternas gemensamma e-tjänst (Bolagsverket, Skatteverket och Tillväxtverket). Du kan registrera företag, ansöka om F-skatt, momsregistrera dig och anmäla arbetsgivare i samma inloggade flöde. Yrkestrafiktillståndet söker du separat hos Transportstyrelsen.",
          source: "verksamt.se (Bolagsverket, Skatteverket, Tillväxtverket); Transportstyrelsen.",
        },
      ],
    },

    // 6 ──────────────────────────────────────────────────────────────────
    {
      number: 6,
      title: "Kör- och vilotider, färdskrivare och cabotage",
      lead: "De EU-regler som styr din dagliga drift – och där misstag blir dyra och tillståndshotande.",
      blocks: [
        {
          type: "paragraph",
          text: "Det som är unikt för åkeri – och som du absolut måste ha kontroll på – är **kör- och vilotidsreglerna** och hur du dokumenterar dem. De styr hur länge en förare får köra, när rast och dygnsvila ska tas, och kontrolleras både vid vägkontroller och hos företaget. Brister kan ge höga sanktionsavgifter och i förlängningen hota ditt tillstånd.",
        },
        {
          type: "subheading",
          text: "Kör- och vilotider",
        },
        {
          type: "paragraph",
          text: "Reglerna följer av **EU-förordning (EG) nr 561/2006** och gäller i grunden fordon (inklusive släp) med en totalvikt över 3,5 ton. De styr bland annat maximal körtid per dag och vecka, raster under körningen samt dygns- och veckovila. Du som arbetsgivare och trafikansvarig ansvarar för att planera turerna så att förarna kan följa reglerna – det går inte att skylla på en sen leverans.",
          source: "Transportstyrelsen; EU-förordning (EG) nr 561/2006.",
        },
        {
          type: "subheading",
          text: "Färdskrivare",
        },
        {
          type: "paragraph",
          text: "Kör- och vilotiderna registreras med **färdskrivare** (digital tachograf) och förarkort. Färdskrivaren är obligatorisk för de fordon som omfattas, och uppgifterna ska sparas och kunna visas vid kontroll. Reglerna kring smarta färdskrivare uppdateras stegvis – **kontrollera hos Transportstyrelsen vilken färdskrivartyp som krävs för dina fordon** och från vilket datum.",
          source: "Transportstyrelsen, färdskrivare och kör- och vilotider.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Reglerna utvidgas till lätta fordon 1 juli 2026",
          text: "Från **1 juli 2026** börjar EU:s kör- och vilotidsregler gälla även **internationell godstrafik (inklusive cabotage) med fordon mellan 2,5 och 3,5 ton**. Planerar du transporter med skåpbil över gränserna – räkna med färdskrivare och kör- och vilotidskrav även där. Kontrollera de exakta villkoren hos Transportstyrelsen.",
          source: "Transportstyrelsen, mobilitetspaketet (utvidgning 1 juli 2026).",
        },
        {
          type: "subheading",
          text: "Cabotage",
        },
        {
          type: "paragraph",
          text: "**Cabotage** är inrikestransporter som ett utländskt åkeri utför i Sverige (eller som du utför i ett annat EU-land). Reglerna är begränsande: efter en internationell leverans får som huvudregel **högst 3 cabotagetransporter utföras inom 7 dagar**, därefter gäller en karensperiod innan nytt cabotage får ske i samma land. Reglerna finns för att skydda inhemska åkerier mot osund konkurrens – håll koll på dem oavsett om du kör utomlands eller konkurrerar med utländska aktörer hemma.",
          source: "Transportstyrelsen, cabotage (max 3 transporter inom 7 dagar).",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Vägavgift och skatter på tunga fordon",
          text: "För tunga fordon betalas i Sverige en **tidsbaserad vägavgift (Eurovinjett)**. Någon **avståndsbaserad kilometerskatt** för lastbilar är **inte införd 2026** – den har utretts men gäller inte. Däremot omfattas tunga fordon av **trängselskatt** i Stockholm och Göteborg. Kontrollera aktuella avgifter och skatter hos Transportstyrelsen och Skatteverket.",
          source: "Transportstyrelsen och Skatteverket (Eurovinjett tidsbaserad; ingen km-skatt 2026; trängselskatt gäller tunga fordon).",
        },
      ],
    },

    // 7 ──────────────────────────────────────────────────────────────────
    {
      number: 7,
      title: "Försäkringar du faktiskt behöver",
      lead: "Rätt skydd är delvis lagstadgat, delvis ett krav från uppdragsgivaren – och räddar dig den dag något går fel.",
      blocks: [
        {
          type: "paragraph",
          text: "Försäkring är inte valfritt i åkeri: trafikförsäkring är lagstadgad för varje fordon, och uppdragsgivare och speditörer kräver ofta att du kan visa ansvars- och godsförsäkring innan du får köra åt dem. Lika viktigt är att skyddet faktiskt täcker det gods och de transporter du utför – läs villkoren, inte bara priset.",
        },
        {
          type: "list",
          items: [
            "**Trafikförsäkring** – lagstadgad för alla fordon i trafik. Utan den får fordonet inte köras och Trafikförsäkringsföreningen kan ta ut avgift.",
            "**Vagnskade-/fordonsförsäkring (halv/hel)** – skyddar dina egna fordon mot skada, brand och stöld. Dyra ekipage motiverar gott skydd.",
            "**Transportöransvar / godsansvarsförsäkring** – täcker ditt ansvar för det gods du transporterar om det skadas eller försvinner. Ofta ett krav från transportköpare och speditörer.",
            "**Företags- och ansvarsförsäkring** – täcker skador du orsakar på tredje man och annan egendom i verksamheten.",
            "**Avbrotts- och olycksfallsförsäkring** – ger dig ekonomiskt skydd om du som ensam åkare blir sjuk eller skadad och inte kan köra.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Fråga uppdragsgivaren vad som krävs",
          text: "Innan du tecknar – fråga dina typiska transportköpare och speditörer vilket försäkringsskydd och vilka ansvarsbelopp de kräver. Många har miniminivåer för transportöransvar i sina avtal. Då köper du rätt skydd direkt i stället för att stå oförsäkrad när en lastskada inträffar.",
        },
      ],
    },

    // 8 ──────────────────────────────────────────────────────────────────
    {
      number: 8,
      title: "Prissättning och lönsamhet",
      lead: "Så sätter du ett pris per kilometer och timme som faktiskt lämnar vinst.",
      blocks: [
        {
          type: "paragraph",
          text: "Den vanligaste orsaken till att nya åkerier inte går runt är inte brist på uppdrag – det är för låga priser i förhållande till den verkliga kilometerkostnaden. Drivmedel, däck, service, försäkring, fordonsavskrivning, tillstånd och lön ska alla bäras av intäkterna. Räkna baklänges från vad du behöver för att täcka kostnaderna och göra vinst – inte framåt från vad konkurrenten tar.",
        },
        {
          type: "subheading",
          text: "Bygg upp ditt pris",
        },
        {
          type: "list",
          items: [
            "Beräkna din **kilometerkostnad** – summan av fasta och rörliga kostnader delat på realistisk körsträcka.",
            "Lägg på **förarens lön och sociala avgifter** (eller din egen lön i en enmansfirma).",
            "Ta höjd för **tomkörning och väntetid** – alla mil är inte betalda mil, och lastning/lossning tar tid.",
            "Lägg på **vinstmarginal** så att åkeriet tål dyrare drivmedel, oväntade reparationer och magra perioder.",
          ],
        },
        {
          type: "subheading",
          text: "Drivmedel och index",
        },
        {
          type: "paragraph",
          text: "Drivmedel är en av dina största och mest rörliga kostnader. Vid längre avtal är det vanligt att knyta priset till ett **drivmedelsindex** eller en justeringsklausul, så att du inte går back om dieselpriset stiger kraftigt under avtalstiden. Var tydlig om hur väntetid, tilläggstjänster och eventuella avgifter (färja, väg, trängselskatt) hanteras i priset.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Skriftliga transportavtal – alltid",
          text: "Lämna alltid skriftligt avtal eller offert med tydlig avgränsning: vad som ingår, betalningsvillkor, hur väntetid och tilläggskörningar debiteras, ansvar för gods och eventuell prisjustering för drivmedel. Det förebygger de flesta tvister och gör dig mer professionell i transportköparens ögon.",
        },
      ],
    },

    // 9 ──────────────────────────────────────────────────────────────────
    {
      number: 9,
      title: "Bokföring och skatt",
      lead: "Löpande ordning i ekonomin – och de avdrag och regler åkerier ofta missar.",
      blocks: [
        {
          type: "paragraph",
          text: "Alla företag är enligt bokföringslagen skyldiga att löpande bokföra sina affärshändelser och spara underlag. Du kan sköta det själv i ett bokföringsprogram eller anlita en redovisningsbyrå – för många åkare är byrån värd pengarna, eftersom den frigör körtid och minskar risken för fel i moms och avskrivningar på dyra fordon.",
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
          text: "Moms",
        },
        {
          type: "paragraph",
          text: "Transporttjänster beläggs med **moms 25 %** (normalsats). Du redovisar moms månads-, kvartals- eller årsvis beroende på omsättning. Vid internationella transporter och transporter åt utländska företag finns särskilda momsregler – kontrollera hur dina specifika uppdrag ska faktureras hos Skatteverket.",
          source: "Skatteverket, momsnormalsats 25 %.",
        },
        {
          type: "subheading",
          text: "Vanliga avdrag och poster för åkerier",
        },
        {
          type: "list",
          items: [
            "**Fordon** – köp skrivs vanligen av över tid; leasingavgifter är löpande kostnader. Stora belopp – ta hjälp med rätt hantering.",
            "**Drivmedel, däck, service och reparationer** – avdragsgilla driftskostnader; spara alla kvitton och underlag.",
            "**Försäkringar** – trafik-, fordons-, gods- och ansvarsförsäkring.",
            "**Vägavgifter, färjor, trängselskatt och parkering** – kostnader i verksamheten.",
            "**Förarutbildning och behörigheter** – t.ex. YKB (yrkeskompetensbevis), ADR och fortbildning.",
            "**Färdskrivare, förarkort och programvara** – utrustning och system för regelefterlevnad.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Spara alla underlag",
          text: "Kvitton, fakturor, avtal och färdskrivardata ska sparas enligt bokföringslagen och transportreglerna. I en bransch som kontrolleras hårt (kör- och vilotider, cabotage, vägavgifter) är ordnad dokumentation ditt bästa skydd vid en kontroll. Digitalisera kvitton löpande och säkerhetskopiera färdskrivardata.",
        },
      ],
    },

    // 10 ─────────────────────────────────────────────────────────────────
    {
      number: 10,
      title: "Att anställa förare",
      lead: "Från första föraren: avgifter, kollektivavtal, behörigheter och ditt arbetsmiljöansvar.",
      blocks: [
        {
          type: "paragraph",
          text: "Att anställa förare är ofta steget som tar åkeriet från enmansfirma till flerbilsåkeri – men det följer med kostnader och ansvar du måste ha koll på innan du skriver första anställningsavtalet.",
        },
        {
          type: "subheading",
          text: "Arbetsgivaravgifter",
        },
        {
          type: "paragraph",
          text: "Utöver lönen betalar du **arbetsgivaravgifter**. Normalsatsen 2026 är **31,42 %** av bruttolönen. På en månadslön på 35 000 kr betyder det runt 11 000 kr i arbetsgivaravgift utöver lönen – budgetera för det när du sätter din kilometer- och timpris (kapitel 8). Vissa nedsättningar kan finnas i särskilda fall; kontrollera aktuella regler hos Skatteverket.",
          source: "Skatteverket, arbetsgivaravgift normalsats 31,42 % (2026).",
        },
        {
          type: "subheading",
          text: "Kollektivavtal",
        },
        {
          type: "paragraph",
          text: "Åkeribranschen är till stor del kollektivavtalsreglerad. Tecknar du kollektivavtal – på förarsidan oftast mellan **Svenska Transportarbetareförbundet (Transport)** och arbetsgivarsidan (Transportföretagen/Biltrafikens Arbetsgivareförbund) – binder det dig till bland annat minimilöner, arbetstider, ersättningar och försäkringar. Många uppdragsgivare kräver kollektivavtal eller motsvarande villkor. Kontrollera aktuella lönenivåer och villkor direkt hos parterna innan du anställer.",
        },
        {
          type: "subheading",
          text: "Förarbehörigheter och arbetsmiljöansvar",
        },
        {
          type: "paragraph",
          text: "Förare ska ha rätt **körkortsbehörighet** (C/CE för tunga fordon) och giltigt **yrkeskompetensbevis (YKB)**, samt eventuell **ADR-behörighet** vid farligt gods. Som arbetsgivare har du ett långtgående **arbetsmiljöansvar**: du ska planera turerna så att kör- och vilotider kan följas, se till att fordon och utrustning är säkra, och bedriva systematiskt arbetsmiljöarbete. Att pressa scheman så att vilotider inte kan hållas är både en arbetsmiljö- och en regelöverträdelse.",
          source: "Transportstyrelsen (YKB, kör- och vilotider) och Arbetsmiljöverket (systematiskt arbetsmiljöarbete).",
        },
      ],
    },

    // 11 ─────────────────────────────────────────────────────────────────
    {
      number: 11,
      title: "Vanliga misstag och fallgropar",
      lead: "De dyraste nybörjarfelen i åkeribranschen – och hur du undviker dem.",
      blocks: [
        {
          type: "list",
          items: [
            "**Att köra utan eller med fel tillstånd.** Yrkesmässig godstrafik utan yrkestrafiktillstånd är ett brott. Säkra tillståndet och håll det giltigt – inklusive trafikansvarig och ekonomiska resurser.",
            "**Att underskatta ekonomikravet.** 9 000 euro för första fordonet (plus 5 000 euro per ytterligare) ska kunna styrkas. Planera kapitalet så att kravet hålls även efter fordonsköp.",
            "**Slarv med kör- och vilotider.** Felaktig planering ger sanktionsavgifter och hotar tillståndet. Bygg turer kring reglerna, inte tvärtom.",
            "**Okunskap om cabotage.** Fel antal inrikestransporter utomlands – eller att inte känna till reglerna i konkurrensen hemma – kan bli dyrt.",
            "**För låga priser mot kilometerkostnaden.** Att köra för pris under självkostnad är den vanligaste vägen till konkurs i branschen. Räkna alltid på kilometerkostnaden.",
            "**Dålig likviditet.** Att betala drivmedel och löner varje månad men få betalt långt senare. Håll buffert och korta betalningsvillkor.",
            "**Bristande godsförsäkring.** Att köra dyrt gods utan rätt transportöransvar kan bli förödande vid en skada.",
            "**Eftersatt fordonsunderhåll.** Sparad service blir dyra stillestånd och hotad trafiksäkerhet. Planera och budgetera underhåll.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Det dyraste felet är att gissa",
          text: "Reglerna i åkeri ändras (ekonomikravets kronkurs, färdskrivartyper, kör- och vilotider för lätta fordon, vägavgifter). Bygg en vana att kontrollera aktuell uppgift hos Transportstyrelsen eller Skatteverket innan du planerar eller prissätter – och spara dokumentationen.",
        },
      ],
    },

    // 12 ─────────────────────────────────────────────────────────────────
    {
      number: 12,
      title: "Marknadsföring och dina första uppdrag",
      lead: "Så får du de första transporterna och bygger långsiktiga, återkommande avtal.",
      blocks: [
        {
          type: "paragraph",
          text: "I åkeribranschen kommer de flesta uppdrag via **relationer och avtal** snarare än annonser – speditörer, transportcentraler, industri och handel behöver pålitliga åkerier. Det viktigaste säljargumentet är att du är leveranssäker, har ordning på tillstånd och försäkringar och håller vad du lovar. Här är de kanaler som ger mest för ett nystartat åkeri.",
        },
        {
          type: "list",
          items: [
            "**Speditörer och transportcentraler.** Att ansluta sig till en transportcentral eller köra åt en speditör ger jämn beläggning medan du bygger egen kundstock.",
            "**Direktavtal med industri och handel.** Lokala tillverkare, grossister och byggvaruhandlare har återkommande transportbehov – sök upp dem direkt.",
            "**Branschnätverk.** Sveriges Åkeriföretag och lokala åkeriföreningar ger kontakter, uppdrag och kunskap.",
            "**Nischa dig.** Tempererade transporter, ADR/farligt gods, kran/tipp, bygglogistik eller budbilar – en tydlig nisch gör dig lättare att rekommendera.",
            "**Leveranssäkerhet som varumärke.** Punktlighet, kommunikation och skadefri leverans ger återkommande uppdrag och rekommendationer.",
            "**Synlig och seriös.** Profilerade fordon, enkel hemsida och tydliga kontaktuppgifter visar att du finns och är att lita på.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Visa att du är seriös",
          text: "Yrkestrafiktillstånd, F-skatt, försäkringar, kollektivavtal/villkor och ordning på kör- och vilotider är inte bara krav – de är säljargument. Transportköpare och speditörer väljer gärna det åkeri som tydligt visar att allt är i ordning, eftersom de själva riskerar mycket vid en oseriös transportör. Lyft fram det i offert och avtal.",
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
            "Valt bolagsform (enskild firma eller AB) utifrån ansvar, skatt och fordonslån",
            "Kontrollerat och valt företagsnamn hos Bolagsverket",
            "Registrerat företaget (AB: 1 900 kr e-tjänst, aktiekapital 25 000 kr insatt)",
            "Ansökt om F-skatt och momsregistrering hos Skatteverket",
            "Anmält verklig huvudman (AB)",
            "Öppnat företagskonto",
          ],
        },
        {
          type: "subheading",
          text: "Tillstånd och behörighet",
        },
        {
          type: "checklist",
          items: [
            "Utsett trafikansvarig och klarat yrkeskunnandeprov hos Trafikverket",
            "Säkrat fast etablering med gatuadress i Sverige",
            "Styrkt ekonomiska resurser (9 000 euro första fordonet + 5 000 euro per ytterligare – årets kronkurs kontrollerad)",
            "Ansökt om och beviljats yrkestrafiktillstånd hos Transportstyrelsen",
            "Ordnat förarbehörigheter: C/CE, YKB och ev. ADR",
            "Säkrat gemenskapstillstånd vid internationell trafik / lätta fordon vid behov",
          ],
        },
        {
          type: "subheading",
          text: "Fordon, ekonomi och försäkring",
        },
        {
          type: "checklist",
          items: [
            "Ordnat fordon (köp/leasing) och fungerande färdskrivare + förarkort",
            "Tecknat trafik-, fordons-, gods-/transportöransvars- och företagsförsäkring",
            "Räknat ut kilometerkostnad och satt pris med vinstmarginal",
            "Bestämt rutin för drivmedelsindex/prisjustering i längre avtal",
            "Valt bokföringslösning (eget program eller redovisningsbyrå)",
            "Satt rutin för kör- och vilotider, cabotage och sparande av färdskrivardata",
          ],
        },
        {
          type: "subheading",
          text: "Innan första uppdraget",
        },
        {
          type: "checklist",
          items: [
            "Tagit fram avtals-/offertmall med betalningsvillkor, väntetid och godsansvar",
            "Knutit kontakt med speditör/transportcentral eller direktkund",
            "Förberett fakturarutin med korrekt moms",
            "Säkerställt likviditet/rörelsekapital för de första månaderna",
          ],
        },
      ],
    },

    // 14 ─────────────────────────────────────────────────────────────────
    {
      number: 14,
      title: "Resurser och myndighetskontakter",
      lead: "Spara den här sidan – här kontrollerar du aktuella krav, avgifter och regler.",
      blocks: [
        {
          type: "paragraph",
          text: "Reglerna och beloppen i åkeribranschen uppdateras – inte minst ekonomikravets kronkurs och kör- och vilotidsreglerna för lätta fordon. Använd länkarna nedan för att kontrollera aktuell uppgift direkt hos källan innan du ansöker, prissätter eller tar ett uppdrag.",
        },
        {
          type: "links",
          items: [
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare – allt på ett ställe" },
            { label: "Transportstyrelsen", url: "https://www.transportstyrelsen.se", note: "Yrkestrafiktillstånd, ekonomiska resurser, kör- och vilotider, cabotage, vägavgifter" },
            { label: "Trafikverket", url: "https://www.trafikverket.se", note: "Prov i yrkeskunnande för trafikansvarig, förarprov" },
            { label: "Bolagsverket", url: "https://www.bolagsverket.se", note: "Registrering, avgifter, namn, verklig huvudman" },
            { label: "Skatteverket", url: "https://www.skatteverket.se", note: "F-skatt, moms, arbetsgivaravgift, vägavgift, belopp och procent" },
            { label: "MSB", url: "https://www.msb.se", note: "Farligt gods (ADR-S), ADR-förarintyg" },
            { label: "Sveriges Åkeriföretag", url: "https://www.akeri.se", note: "Branschorganisation – stöd, kalkyl och nätverk" },
            { label: "Svenska Transportarbetareförbundet", url: "https://www.transport.se", note: "Kollektivavtal, löner och villkor för förare" },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Vill du bolla ditt upplägg med en rådgivare?",
          text: "Den här guiden tar dig långt på egen hand. Vill du dubbelkolla val av bolagsform, finansiering av fordon eller försäkringsupplägg med en expert kan vi matcha dig med en rådgivare kostnadsfritt på driva-foretag.se/hitta-radgivare.",
        },
      ],
    },
  ],
};

export default akeri;
