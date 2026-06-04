import type { GuideContent } from "./types";

// ──────────────────────────────────────────────────────────────────────────
// STARTGUIDE: PERSONLIG TRÄNARE & GYM
//
// YMYL – faktagranskad mot primärkälla. Verifierade uppgifter (juni 2026):
//  • Aktiekapital privat AB 25 000 kr; AB-reg 1 900 kr e-tjänst / 2 200 kr
//    blankett (Bolagsverket). Egenavgifter 28,97 % + schablonavdrag 25 %;
//    arbetsgivaravgift 31,42 % (Skatteverket). Momsbefrielse högst 120 000 kr/år.
//  • INGEN yrkesauktorisation i lag. PT-certifiering är frivillig branschstandard.
//  • IDROTTSMOMS (FÄLLA): tillträde till/utövande av idrott och motion har
//    reducerad moms 6 % när tjänsten innebär att utövaren ges möjlighet att
//    utöva idrottslig verksamhet (gymkort, PT-pass under själva träningen).
//    MEN: online-/digital träningsrådgivning = 25 %; personaluthyrning (att
//    hyra ut en PT till t.ex. ett gym) = 25 %; tjänster som inte säljs direkt
//    till den som tränar kan falla utanför idrottsmomsen. Skatteverket har
//    ändrat tolkning över tid – kontrollera ALLTID aktuell bedömning hos
//    Skatteverket för din specifika tjänst. (Skatteverket; ML 9 kap.)
//  • Distansavtal: konsument har normalt 14 dagars ångerrätt (lag 2005:59);
//    nya regler om ångerfunktion fr.o.m. 19 juni 2026. (Konsumentverket.)
//
// Där en exakt siffra/regel inte verifierats skrivs den kvalitativt – aldrig
// gissad. Idrottsmomsen är en känd fälla – hänvisa till Skatteverket.
// ──────────────────────────────────────────────────────────────────────────

const personligTranare: GuideContent = {
  slug: "personlig-tranare",
  industry: "Personlig tränare & Gym",
  title: "Starta & driva PT-verksamhet och gym",
  subtitle: "Komplett startguide 2026",
  year: 2026,
  reviewedAt: "2026-06-04",
  reviewedSources: "Skatteverket, Bolagsverket & Arbetsmiljöverket",
  intro:
    "Den kompletta, faktagranskade guiden för dig som ska starta som personlig tränare eller driva gym i Sverige – från bolagsform och F-skatt till den knepiga idrottsmomsen, lokal och försäkring, medlemsavtal och ångerrätt, prissättning och din första kund. Varje siffra och regel är kontrollerad mot Skatteverket och Bolagsverket, med särskild omsorg om momsen.",

  chapters: [
    // 1
    {
      number: 1,
      title: "Att driva PT-verksamhet och gym i Sverige",
      lead: "Vad branschen kräver av dig som företagare – och var den vanligaste fällan finns.",
      blocks: [
        {
          type: "paragraph",
          text: "Träningsbranschen växer med ett stadigt intresse för hälsa och välmående. Tröskeln att börja som **personlig tränare** är låg – ofta räcker kompetens och en första kund – medan ett eget **gym** kräver lokal och större investering. Men oavsett form finns en fälla som fäller många nya företagare: **momsen på idrott och träning**, som har olika sats beroende på exakt vad du säljer och hur. Den som förstår momsen och försäkringsbehovet från start står betydligt stadigare.",
        },
        {
          type: "paragraph",
          text: "Med **PT-verksamhet och gym** menar vi i den här guiden företag som säljer personlig träning, gruppträning, gymkort och relaterade hälsotjänster. Reglerna i guiden gäller i grunden lika oavsett om du är en frilansande PT eller driver en anläggning – men momsen, lokalen och försäkringen ser olika ut beroende på upplägg.",
        },
        {
          type: "paragraph",
          text: "Tre saker präglar träningsbranschen när du startar: **idrottsmomsen** (6 % i vissa fall, 25 % i andra – en känd fälla, se kapitel 6), **ansvaret och försäkringen** (du leder fysisk aktivitet med skaderisk) och **prissättningen** (där medlemskap och paket ger återkommande intäkter). De tre är genomgående teman i guiden.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Så använder du guiden",
          text: "Läs kapitel 1–6 innan du säljer ditt första pass – de avgör bolagsform, tillstånd, lokal och framför allt momsen. Kapitel 7–12 är drift: försäkring, pris och avtal, bokföring, personal och marknadsföring. Kapitel 13 är en komplett checklista, och kapitel 14 samlar alla myndighetskontakter.",
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
          text: "För de flesta i träningsbranschen står valet mellan **enskild näringsverksamhet** (enskild firma) och **aktiebolag (AB)**. En frilansande PT kan börja enkelt, medan ett gym med lokal och anställda oftare passar i AB.",
        },
        {
          type: "subheading",
          text: "Enskild firma",
        },
        {
          type: "paragraph",
          text: "Enklast och billigast att starta – populärt för PT som börjar ensam, ofta vid sidan av en anställning. Du och företaget är samma juridiska person, vilket betyder att du har **personligt ansvar** för företagets skulder. Du betalar **egenavgifter** på överskottet (28,97 % för aktiv näringsverksamhet 2026, med ett schablonavdrag på 25 % innan avgiften beräknas) och inkomsten beskattas som din lön.",
          source: "Skatteverket, egenavgifter 28,97 % och schablonavdrag 25 % (2026).",
        },
        {
          type: "subheading",
          text: "Aktiebolag",
        },
        {
          type: "paragraph",
          text: "Ett aktiebolag är en egen juridisk person. Ditt personliga ansvar begränsas i normalfallet till **aktiekapitalet på 25 000 kr** (lägsta tillåtna för privat AB) – en trygghet om du tecknar ett lokalhyresavtal för ett gym eller leder verksamhet med skaderisk. Bolagsformen gör det enklare att anställa, ta in delägare och bygga ett företagsvärde. Du anställs av ditt eget bolag och tar ut lön.",
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
            ["Lämpligt för gym med lokal/anställda", "Mindre", "Bättre"],
            ["Administration", "Enklare bokföring", "Årsredovisning, mer formalia"],
          ],
          source: "Bolagsverket och Skatteverket (aktiekapital 25 000 kr, egenavgifter 28,97 % 2026).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Tumregel för PT och gym",
          text: "Börjar du som frilansande PT med låg risk kan enskild firma räcka. Ska du driva ett gym med lokal, anställda och medlemsavtal – välj AB för ansvarsbegränsningens skull och för en tydligare struktur.",
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
      title: "Tillstånd, krav och lokal",
      lead: "PT-yrket är inte auktorisationspliktigt – men lokal och säkerhet ställer krav.",
      blocks: [
        {
          type: "paragraph",
          text: "Det krävs **ingen yrkesauktorisation enligt lag** för att arbeta som personlig tränare eller driva gym. Men det finns krav kring kompetens, lokal och säkerhet att hantera. Gå igenom punkterna nedan.",
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
          text: "PT-certifiering (frivillig)",
        },
        {
          type: "paragraph",
          text: "Det finns **ingen lagstadgad PT-licens** – vem som helst får kalla sig personlig tränare. Däremot är **certifiering** från etablerade utbildningsaktörer en frivillig branschstandard som ökar förtroendet, ofta krävs för att jobba på ett gym och kan vara ett villkor för ansvarsförsäkring. En gedigen utbildning minskar dessutom skaderisken i din verksamhet.",
        },
        {
          type: "subheading",
          text: "Lokal, bygglov och brandskydd (vid eget gym)",
        },
        {
          type: "paragraph",
          text: "Driver du ett eget gym i egen lokal tillkommer krav på **brandskydd** (utrymning, brandvarnare, släckutrustning – stäm av med fastighetsägaren och räddningstjänsten) och eventuellt **bygglov eller anmälan** vid ändrad användning eller ombyggnad av lokalen (kontrollera med kommunens byggnadsnämnd). Du ansvarar för att utrustningen är säker och underhållen. Ett gym med stora medlemsflöden bör ha tydliga säkerhets- och nödrutiner.",
          source: "Kommunens byggnadsnämnd och räddningstjänst (bygglov/anmälan vid ändrad användning, brandskydd – kontrollera lokalt).",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Försäkring är central i ett yrke med skaderisk",
          text: "Du leder fysisk aktivitet där kunder kan skada sig, och i ett gym ansvarar du för utrustning och lokal. Ansvarsförsäkring är därför i praktiken nödvändig (kapitel 7) – och ofta ett krav från gym där du jobbar eller från certifieringen.",
        },
        {
          type: "links",
          items: [
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare" },
            { label: "Skatteverket", url: "https://www.skatteverket.se", note: "Moms på idrott och motion, F-skatt" },
            { label: "Din kommun", url: "https://www.verksamt.se", note: "Bygglov/anmälan och brandskydd för lokal" },
          ],
        },
      ],
    },

    // 4
    {
      number: 4,
      title: "Startkapital och faktiska kostnader",
      lead: "Vad det faktiskt kostar att komma igång – stor skillnad mellan frilansande PT och eget gym.",
      blocks: [
        {
          type: "paragraph",
          text: "Som frilansande PT kan du starta nästan utan kapital, medan ett eget gym är en av branschens tyngsta investeringar (lokal och utrustning). Här är de poster du bör budgetera för. Myndighetsavgifter anges som fastställda belopp; övriga poster som kostnadsslag att räkna på.",
        },
        {
          type: "table",
          columns: ["Post", "Kommentar"],
          rows: [
            ["Aktiekapital (om AB)", "25 000 kr – sätts in på företagskonto, är ditt och kan användas i driften"],
            ["Registrering AB hos Bolagsverket", "1 900 kr via e-tjänst på verksamt.se (2 200 kr med pappersblankett)"],
            ["F-skatt och momsregistrering", "Gratis hos Skatteverket"],
            ["PT-certifiering", "Utbildning/certifiering – frivillig men ofta värd investeringen"],
            ["Lokal (eget gym)", "Hyra, deposition och anpassning – den största posten vid eget gym"],
            ["Träningsutrustning", "Maskiner, vikter, mattor – stor investering för gym; mindre för PT"],
            ["Försäkringar", "Ansvars-/olycksfallsförsäkring (se kapitel 7)"],
            ["Boknings-, medlems- och betalsystem", "System för bokning, medlemskap och autogiro/betalning"],
            ["Kassaregister", "Vid kontant-/kortförsäljning över fyra prisbasbelopp (236 800 kr 2026)"],
            ["Marknadsföring", "Hemsida, sociala medier och annonsering vid start"],
          ],
          source: "Bolagsverket (1 900 kr AB e-tjänst, 25 000 kr aktiekapital); Skatteverket (F-skatt/moms gratis).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Börja som PT, väx mot gym",
          text: "Många börjar som frilansande PT (låg kostnad, hyr tid på ett befintligt gym) och bygger en kundstock innan de investerar i en egen lokal. Det sänker risken och låter dig lära känna efterfrågan innan du binder kapital i utrustning och hyra.",
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
              title: "Ansök om F-skatt och ta reda på rätt momssats",
              text: "Görs gratis via verksamt.se. Eftersom momsen på träning är knepig (6 % eller 25 %) – stäm av din specifika verksamhet med Skatteverket innan du sätter priser (kapitel 6).",
            },
            {
              title: "Momsregistrera dig",
              text: "Anmäl moms i samma ärende (befrielse möjlig först vid omsättning på högst 120 000 kr/år – se kapitel 6).",
            },
            {
              title: "Ordna lokal, säkerhet och försäkring (vid gym)",
              text: "Säkra lokal, stäm av brandskydd och eventuellt bygglov, och teckna ansvarsförsäkring (kapitel 7) innan du öppnar.",
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
              title: "Öppna företagskonto, sätt avtal och ordna bokföring",
              text: "Skaffa företagskonto (krav för AB), ta fram medlems-/PT-avtal med korrekt ångerrätt (kapitel 8) och bestäm bokföringslösning (kapitel 9) innan du tar första kunden.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Allt på ett ställe",
          text: "verksamt.se är myndigheternas gemensamma e-tjänst (Bolagsverket, Skatteverket och Tillväxtverket). Du kan registrera företag, ansöka om F-skatt, momsregistrera dig och anmäla arbetsgivare i samma inloggade flöde. Lokalfrågor sköter du med kommunen.",
          source: "verksamt.se (Bolagsverket, Skatteverket, Tillväxtverket).",
        },
      ],
    },

    // 6
    {
      number: 6,
      title: "Idrottsmomsen: branschens svåraste fråga",
      lead: "6 % eller 25 %? Fel momssats är det dyraste och vanligaste misstaget i träningsbranschen.",
      blocks: [
        {
          type: "paragraph",
          text: "Momsen på idrott och träning är en av de mest missförstådda reglerna för nya träningsföretagare. Reducerad moms (6 %) gäller bara i vissa fall – i andra är det full moms (25 %). Att redovisa fel kan bli mycket dyrt i efterhand. Läs det här kapitlet noga och stäm av din specifika verksamhet med Skatteverket.",
        },
        {
          type: "subheading",
          text: "När gäller 6 %?",
        },
        {
          type: "paragraph",
          text: "Reducerad moms **6 %** gäller för tjänster där någon **ges möjlighet att utöva idrottslig verksamhet** – exempelvis ett **gymkort** (tillträde till gymmet) och **personlig träning under själva träningspasset**, där tjänsten utförs i samband med utövandet och handlar om träningsinstruktion till den som tränar. Det är den lägre satsen som gör att gym och PT-tjänster ofta kan säljas med 6 % moms.",
          source: "Skatteverket (idrott och motion, reducerad moms 6 % när utövaren ges möjlighet att utöva idrottslig verksamhet; mervärdesskattelagen 9 kap.).",
        },
        {
          type: "callout",
          variant: "warning",
          title: "När blir det 25 % i stället? (fällan)",
          text: "Flera vanliga upplägg faller utanför den reducerade satsen och har **25 % moms**: **online- och digital träningsrådgivning** (träningsprogram och coaching på distans), **personaluthyrning** (att hyra ut en PT till ett gym i stället för att sälja träning direkt till den som tränar), och tjänster som inte säljs direkt till utövaren. Även kost- och livsstilsrådgivning utan koppling till själva idrottsutövandet kan vara 25 %. Skatteverket har dessutom ändrat sin tolkning över tid – kontrollera ALLTID aktuell bedömning för just din tjänst.",
          source: "Skatteverket (online-/digital träning och personaluthyrning 25 %; bedömningen har ändrats över tid – kontrollera aktuellt).",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Samma PT, olika moms",
          text: "Säljer du ett fysiskt PT-pass till din kund på gymmet kan det vara 6 %. Säljer du ett digitalt träningsprogram online till samma kund kan det vara 25 %. Hyr du ut dig själv som PT till ett gym (gymmet säljer sedan till kunden) är det normalt 25 % personaluthyrning. Eftersom gränsdragningen är svår och har ändrats – be om besked från Skatteverket innan du prissätter.",
        },
        {
          type: "subheading",
          text: "Momsregistrering och befrielse",
        },
        {
          type: "paragraph",
          text: "Du kan vara momsbefriad först om omsättningen är **högst 120 000 kr per år** (gränsen gäller sedan 1 januari 2025) – men då kan du inte dra av ingående moms. Eftersom flera momssatser kan förekomma i din verksamhet är det extra viktigt att ditt system delar upp försäljningen rätt. Säljer du mot kontanter/kort över fyra prisbasbelopp (236 800 kr 2026) behöver du dessutom certifierat **kassaregister**.",
          source: "Skatteverket, momsbefrielse vid omsättning på högst 120 000 kr/år (fr.o.m. 1 jan 2025) och kassaregisterkrav (fyra prisbasbelopp).",
        },
      ],
    },

    // 7
    {
      number: 7,
      title: "Försäkringar du faktiskt behöver",
      lead: "Du leder fysisk aktivitet med skaderisk – rätt skydd är avgörande.",
      blocks: [
        {
          type: "paragraph",
          text: "Träning innebär skaderisk, både för dina kunder och för dig själv. Som PT eller gymägare kan du bli ansvarig om en kund skadar sig under ett pass eller på din utrustning. Ansvarsförsäkring är därför i praktiken nödvändig – och ofta ett krav från gym och certifieringar. Läs villkoren noga.",
        },
        {
          type: "list",
          items: [
            "**Företags- och ansvarsförsäkring** – täcker skadeståndskrav om en kund skadar sig under träning du leder eller på din utrustning.",
            "**Olycksfallsförsäkring för deltagare** – kan vara relevant beroende på verksamhet; kontrollera vad som krävs och förväntas.",
            "**Egendoms- och maskinförsäkring** – skyddar gymutrustning och inredning mot brand, vatten, stöld och haveri.",
            "**Avbrottsförsäkring** – ersätter utebliven inkomst om gymmet tvingas hålla stängt efter en skada.",
            "**Egen sjuk-/olycksfallsförsäkring** – som frilansande PT står din inkomst och faller med att du är frisk och kan arbeta.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Dokumentera hälsa och genomförande",
          text: "En enkel hälsodeklaration innan du tränar en ny kund, tydliga instruktioner och dokumentation av upplägget minskar både skaderisken och risken för tvister. Det stärker dig dessutom om ett försäkringsärende skulle uppstå.",
        },
      ],
    },

    // 8
    {
      number: 8,
      title: "Prissättning, medlemsavtal och ångerrätt",
      lead: "Så tar du betalt – och håller avtalen rätt mot konsumentreglerna.",
      blocks: [
        {
          type: "paragraph",
          text: "Lönsamheten avgörs av hur du prissätter och av att du har **återkommande intäkter**. Ditt pris ska täcka din tid (inklusive icke-debiterbar tid), lokal/utrustning, försäkring, system och vinst – och momsen (kapitel 6) påverkar vad du faktiskt får behålla.",
        },
        {
          type: "subheading",
          text: "Prismodeller",
        },
        {
          type: "list",
          items: [
            "**PT-pass styckevis eller i klippkort** – tydligt men kräver att du hela tiden fyller kalendern.",
            "**PT-paket och program** – flera pass i ett paket binder kunden och höjer värdet per kund.",
            "**Medlemskap/abonnemang (gym)** – månadsbetalning via autogiro ger **förutsägbara, återkommande intäkter** – grunden i ett lönsamt gym.",
            "**Gruppträning** – fler kunder per timme höjer din intäkt per arbetstimme.",
          ],
        },
        {
          type: "subheading",
          text: "Medlemsavtal och autogiro",
        },
        {
          type: "paragraph",
          text: "Sälj medlemskap med tydliga **avtalsvillkor**: bindningstid, uppsägningstid, vad som händer vid skada eller frysning, och hur autogirot fungerar. Otydliga eller orimligt långa bindningstider är en vanlig källa till klagomål och kan strida mot konsumentreglerna – håll villkoren skäliga och tydliga.",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Ångerrätt vid distansavtal",
          text: "Säljer du medlemskap eller PT-tjänster på **distans** (t.ex. via webben) till en konsument gäller normalt **14 dagars ångerrätt** enligt lagen om distansavtal (2005:59). Du ska informera om ångerrätten innan köpet. **Nya regler träder i kraft 19 juni 2026**, bland annat krav på en särskild ångerfunktion (\"ångerknapp\") på webbplatser. Kontrollera de uppdaterade kraven hos Konsumentverket.",
          source: "Konsumentverket; lag (2005:59) om distansavtal (14 dagars ångerrätt; nya regler fr.o.m. 19 juni 2026).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Bygg återkommande intäkter",
          text: "En verksamhet som lever på enstaka pass börjar varje månad om från noll. Medlemskap och paket ger en förutsägbar bas av intäkter som gör företaget stabilt och planerbart. Sikta på återkommande betalningar från start.",
        },
      ],
    },

    // 9
    {
      number: 9,
      title: "Bokföring och skatt",
      lead: "Löpande ordning i ekonomin – med särskild koll på momsen.",
      blocks: [
        {
          type: "paragraph",
          text: "Alla företag är enligt bokföringslagen skyldiga att löpande bokföra sina affärshändelser och spara underlag. I träningsbranschen är det framför allt momsen och de återkommande medlemsbetalningarna som gör ett bra system värdefullt.",
        },
        {
          type: "subheading",
          text: "Flera momssatser i redovisningen",
        },
        {
          type: "paragraph",
          text: "Eftersom din verksamhet kan innehålla både 6 %-tjänster (fysisk träning/gymkort) och 25 %-tjänster (t.ex. online-coaching, personaluthyrning, produktförsäljning) måste bokföringen hålla isär dem. Ett system som registrerar rätt momssats per försäljning och stäms av mot bokföringen sparar tid och förebygger fel – och en felaktig momsredovisning kan bli dyr i efterhand.",
          source: "Skatteverket, redovisning av olika momssatser.",
        },
        {
          type: "subheading",
          text: "F-skatt och preliminärskatt",
        },
        {
          type: "paragraph",
          text: "Med **F-skatt** betalar du själv in din skatt och dina egenavgifter (enskild firma) eller bolagets skatt (AB). Skatteverket beslutar en **preliminärskatt** som du betalar varje månad utifrån din uppskattade vinst. Justera prognosen när verksamheten växer.",
        },
        {
          type: "subheading",
          text: "Vanliga avdrag för PT och gym",
        },
        {
          type: "list",
          items: [
            "**Träningsutrustning** – maskiner, vikter och redskap; större inköp skrivs av över tid.",
            "**Lokalkostnader** – hyra, el och städning (vid eget gym).",
            "**Certifiering och fortbildning** – utbildning som rör verksamheten.",
            "**Boknings-, medlems- och betalsystem** – programvara och licenser.",
            "**Försäkringar** – företags-, ansvars- och egendomsförsäkring.",
            "**Marknadsföring och arbetskläder** – annonsering och profilkläder.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Spara alla underlag",
          text: "Kvitton, fakturor, avtal och medlemsregister ska hanteras ordnat och sparas enligt bokföringslagen. Eftersom momsen är knepig är tydlig dokumentation av vad du sålt (och till vilken momssats) ditt bästa skydd vid en kontroll. Spara även Skatteverkets eventuella besked om din momshantering.",
        },
      ],
    },

    // 10
    {
      number: 10,
      title: "Att anställa eller anlita tränare",
      lead: "Två sätt att växa: anställa eller samarbeta med PT som har egna företag.",
      blocks: [
        {
          type: "paragraph",
          text: "Ett växande gym behöver fler tränare. Du kan anställa dem eller samarbeta med personliga tränare som driver egna företag – båda har sina kostnader och sitt ansvar, och momsmässiga konsekvenser.",
        },
        {
          type: "subheading",
          text: "Arbetsgivaravgifter vid anställning",
        },
        {
          type: "paragraph",
          text: "Anställer du tränare betalar du lön plus **arbetsgivaravgifter** – normalsatsen 2026 är **31,42 %** av bruttolönen – och har fullt arbetsgivar- och arbetsmiljöansvar. Det ger kontroll och tillgänglig personal men en fast kostnad även när beläggningen är låg. Vissa nedsättningar kan finnas i särskilda fall; kontrollera hos Skatteverket.",
          source: "Skatteverket, arbetsgivaravgift normalsats 31,42 % (2026).",
        },
        {
          type: "subheading",
          text: "Samarbeta med PT som har egna företag",
        },
        {
          type: "paragraph",
          text: "Många gym låter självständiga PT verka i lokalen mot en avgift, eller hyr in tränare. Tänk på momsen: **att hyra ut en tränare (personaluthyrning) är normalt 25 % moms**, medan ett gym som säljer träning direkt till medlemmen kan ha 6 %. Säkerställ att inhyrda tränare har **F-skatt** och egen ansvarsförsäkring, och skriv tydliga avtal om vad som gäller i lokalen.",
          source: "Skatteverket (personaluthyrning 25 % moms; gränsdragning idrottstjänst).",
        },
      ],
    },

    // 11
    {
      number: 11,
      title: "Vanliga misstag och fallgropar",
      lead: "De dyraste nybörjarfelen i träningsbranschen – och hur du undviker dem.",
      blocks: [
        {
          type: "list",
          items: [
            "**Fel momssats.** Att ta ut 6 % på det som egentligen är 25 % (t.ex. online-coaching eller personaluthyrning) kan bli en dyr efterräkning. Be om besked från Skatteverket för din specifika tjänst.",
            "**Anta att all träning är 6 %.** Den reducerade satsen gäller bara när utövaren ges möjlighet att utöva idrott – inte automatiskt allt du säljer.",
            "**Sakna ansvarsförsäkring.** Du leder fysisk aktivitet med skaderisk; en skada utan försäkring kan bli förödande.",
            "**Orimliga medlemsavtal.** Långa bindningstider och otydliga villkor strider mot konsumentreglerna och ger klagomål. Håll villkoren skäliga och tydliga.",
            "**Glömma ångerrätten vid distansförsäljning.** 14 dagars ångerrätt gäller vid distansavtal med konsument; nya krav (ångerfunktion) från 19 juni 2026.",
            "**För låga priser och bara styckpass.** Att inte bygga medlemskap/paket ger ojämn omsättning. Återkommande intäkter är branschens styrka.",
            "**Investera i eget gym för tidigt.** Stor lokal och utrustning är tung risk innan du har en kundstock. Börja gärna som PT och väx mot gym.",
            "**Slarv med säkerhet och underhåll.** Trasig utrustning och oklara nödrutiner ökar både skade- och ansvarsrisken.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Det dyraste felet är att gissa",
          text: "Idrottsmomsen är knepig och Skatteverkets tolkning har ändrats över tid. Bygg en vana att kontrollera aktuell uppgift hos Skatteverket innan du prissätter en ny tjänst – och spara beskedet och dokumentationen.",
        },
      ],
    },

    // 12
    {
      number: 12,
      title: "Marknadsföring och dina första kunder",
      lead: "Så får du de första kunderna och bygger en lojal träningsgemenskap.",
      blocks: [
        {
          type: "paragraph",
          text: "Träningsbranschen säljs på **förtroende, resultat och gemenskap**. Det viktigaste i början är att synas där dina målgrupper finns, visa upp resultat och bygga relationer som får kunderna att stanna. Här är de kanaler som ger mest för en nystartad PT eller ett nytt gym.",
        },
        {
          type: "list",
          items: [
            "**Instagram och TikTok.** Träning är visuellt och socialt – tips, klipp och kundresultat (med samtycke) bygger förtroende och räckvidd.",
            "**Egen profil och nisch.** Specialisering (t.ex. styrka, rehab, gravidträning, seniorer) gör dig lättare att hitta och rekommendera.",
            "**Google – sökning och karta.** En företagsprofil med omdömen gör att du syns när någon söker PT eller gym i ditt område.",
            "**Prova-på och introerbjudanden.** Ett första pass eller en introvecka sänker tröskeln och låter kunden uppleva värdet.",
            "**Rekommendationer och värvning.** Nöjda kunder som tar med vänner är branschens starkaste kanal – belöna värvning.",
            "**Lokala samarbeten.** Samarbeta med företag (friskvård), idrottsföreningar och hälsoaktörer i närområdet.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Resultat och relation skapar lojalitet",
          text: "Kunder stannar hos den som hjälper dem nå resultat och får dem att känna sig sedda. En stark gemenskap och tydlig uppföljning gör mer för din lönsamhet än ständig jakt på nya kunder – behållna medlemmar är affären.",
        },
      ],
    },

    // 13
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
            "Valt bolagsform (enskild firma eller AB) utifrån ansvar, skatt och om du ska driva gym",
            "Kontrollerat och valt företagsnamn hos Bolagsverket",
            "Registrerat företaget (AB: 1 900 kr e-tjänst, aktiekapital 25 000 kr insatt)",
            "Ansökt om F-skatt och momsregistrerat företaget",
            "Anmält verklig huvudman (AB) och öppnat företagskonto",
          ],
        },
        {
          type: "subheading",
          text: "Moms, lokal och säkerhet",
        },
        {
          type: "checklist",
          items: [
            "Stämt av rätt momssats (6 % eller 25 %) för dina tjänster med Skatteverket",
            "Säkrat lokal samt stämt av brandskydd och eventuellt bygglov (vid gym)",
            "Skaffat kassaregister om kontant-/kortförsäljningen överstiger fyra prisbasbelopp",
            "Säkerställt PT-certifiering/kompetens där det krävs",
          ],
        },
        {
          type: "subheading",
          text: "Avtal, ekonomi och försäkring",
        },
        {
          type: "checklist",
          items: [
            "Tecknat ansvars- och egendomsförsäkring",
            "Tagit fram medlems-/PT-avtal med skäliga villkor och korrekt ångerrätt",
            "Satt prismodell med återkommande intäkter (medlemskap/paket)",
            "Satt rutin för hälsodeklaration och dokumentation",
            "Valt boknings-, betal- och bokföringslösning som hanterar flera momssatser",
          ],
        },
        {
          type: "subheading",
          text: "Inför start",
        },
        {
          type: "checklist",
          items: [
            "Skapat profil i sociala medier och Google-företagsprofil",
            "Tagit fram ett prova-på-/introerbjudande",
            "Satt en plan för värvning och att behålla kunder",
            "Säkerställt likviditet för de första månaderna",
          ],
        },
      ],
    },

    // 14
    {
      number: 14,
      title: "Resurser och myndighetskontakter",
      lead: "Spara den här sidan – här kontrollerar du aktuella regler om moms, avtal och skatt.",
      blocks: [
        {
          type: "paragraph",
          text: "Reglerna – särskilt idrottsmomsen – kan ändras och tolkas olika. Använd länkarna nedan för att kontrollera aktuell uppgift direkt hos källan innan du prissätter, säljer medlemskap eller anställer.",
        },
        {
          type: "links",
          items: [
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare – allt på ett ställe" },
            { label: "Skatteverket", url: "https://www.skatteverket.se", note: "Moms på idrott och motion (6 %/25 %), kassaregister, F-skatt, 3:12" },
            { label: "Konsumentverket", url: "https://www.konsumentverket.se", note: "Distansavtal, ångerrätt och skäliga avtalsvillkor" },
            { label: "Bolagsverket", url: "https://www.bolagsverket.se", note: "Registrering, avgifter, namn, verklig huvudman" },
            { label: "Din kommun", url: "https://www.verksamt.se", note: "Bygglov/anmälan och brandskydd för lokal" },
            { label: "Arbetsmiljöverket", url: "https://www.av.se", note: "Arbetsmiljö och säkerhet i lokal" },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Vill du bolla ditt upplägg med en rådgivare?",
          text: "Den här guiden tar dig långt på egen hand. Vill du dubbelkolla momshanteringen, avtalsvillkoren eller val av bolagsform med en expert kan vi matcha dig med en rådgivare kostnadsfritt på driva-foretag.se/hitta-radgivare.",
        },
      ],
    },
  ],
};

export default personligTranare;
