import type { GuideContent } from "./types";

// ──────────────────────────────────────────────────────────────────────────
// STARTGUIDE: FOTOGRAF
//
// YMYL – faktagranskad mot primärkälla. Verifierade uppgifter (juni 2026):
//  • Aktiekapital privat AB 25 000 kr; AB-reg 1 900 kr e-tjänst / 2 200 kr
//    blankett (Bolagsverket). Egenavgifter 28,97 % + schablonavdrag 25 %;
//    arbetsgivaravgift 31,42 % (Skatteverket). Momsbefrielse högst 120 000 kr/år.
//  • MOMS (viktig nyans): fotografier är ALDRIG konstverk i momslagens mening –
//    försäljning av fotografier/bilder samt fototjänster har ALLTID 25 %.
//    DÄREMOT: överlåtelse eller upplåtelse av själva UPPHOVSRÄTTEN till ett verk
//    har 6 % moms. (Skatteverket.) Den reducerade konstverkssatsen (12 %) gäller
//    alltså INTE foton.
//  • Upphovsrätt: fotografen är upphovsman och innehar normalt rättigheterna
//    (lag 1960:729 om upphovsrätt). Kunden får det som avtalas – nyttjanderätt
//    (licens) eller överlåtelse. (Lag 1960:729.)
//  • GDPR/modellavtal: vid porträtt/personbilder hanteras personuppgifter;
//    samtycke/modellavtal och dataskydd är centralt. (IMY/GDPR.)
//  • Ingen branschauktorisation. Ingen ROT.
//
// Där en exakt regel inte verifierats skrivs den kvalitativt – aldrig gissad.
// ──────────────────────────────────────────────────────────────────────────

const fotograf: GuideContent = {
  slug: "fotograf",
  industry: "Fotograf",
  title: "Starta & driva fotograffirma",
  subtitle: "Komplett startguide 2026",
  year: 2026,
  reviewedAt: "2026-06-04",
  reviewedSources: "Skatteverket, Bolagsverket & PRV",
  intro:
    "Den kompletta, faktagranskade guiden för dig som ska starta som fotograf i Sverige – från bolagsform och F-skatt till moms på bilder och upphovsrätt, bildrättigheter och avtal, GDPR vid porträtt, paketprissättning och din första kund. Varje siffra och regel är kontrollerad mot Skatteverket och Bolagsverket.",

  chapters: [
    // 1
    {
      number: 1,
      title: "Att driva fotograffirma i Sverige",
      lead: "Vad branschen kräver av dig som företagare – och vad som gör den lönsam.",
      blocks: [
        {
          type: "paragraph",
          text: "Att leva på sitt fotograferande lockar många, och behovet finns: bröllop, porträtt, företag, produkter, event och sociala medier. Men branschen är konkurrensutsatt, och det som skiljer en hobby från ett lönsamt företag är sällan kameran – det är **affären**: hur du paketerar och prissätter, hur du hanterar **upphovsrätten** till dina bilder och hur du sköter avtal och moms. Den som får ordning på det tar betalt för sitt värde i stället för att sälja timmar billigt.",
        },
        {
          type: "paragraph",
          text: "Med **fotograffirma** menar vi i den här guiden företag som säljer fotograferingstjänster och bilder – porträtt, bröllop, företag, produkt, event och liknande – samt licensiering av bilder. Reglerna i guiden gäller i grunden lika oavsett inriktning, men upphovsrätt, modellavtal och moms ser lite olika ut beroende på vad du fotograferar.",
        },
        {
          type: "paragraph",
          text: "Tre saker präglar fotografbranschen när du startar: **upphovsrätten** (du äger normalt bilderna – kunden får det ni avtalar), **avtal och GDPR** (särskilt vid porträtt av människor) och **prissättningen** (där paket och licensiering avgör lönsamheten). De tre är genomgående teman i guiden. Notera att fototjänster **inte** ger ROT-avdrag.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Så använder du guiden",
          text: "Läs kapitel 1–7 innan du tar ditt första betalda uppdrag – de avgör bolagsform, moms, upphovsrätt, avtal och försäkring. Kapitel 8–12 är drift: pris, bokföring, anlita/anställa, vanliga misstag och marknadsföring. Kapitel 13 är en komplett checklista, och kapitel 14 samlar alla myndighetskontakter.",
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
          text: "För de flesta fotografer står valet mellan **enskild näringsverksamhet** (enskild firma) och **aktiebolag (AB)**. Branschen har relativt låg startkostnad (utöver utrustning), så valet styrs mest av skatt, ansvar och hur du vill växa.",
        },
        {
          type: "subheading",
          text: "Enskild firma",
        },
        {
          type: "paragraph",
          text: "Enklast och billigast att starta – mycket vanligt bland fotografer, ofta vid sidan av annat arbete i början. Du och företaget är samma juridiska person, vilket betyder att du har **personligt ansvar** för företagets skulder. Du betalar **egenavgifter** på överskottet (28,97 % för aktiv näringsverksamhet 2026, med ett schablonavdrag på 25 % innan avgiften beräknas) och inkomsten beskattas som din lön.",
          source: "Skatteverket, egenavgifter 28,97 % och schablonavdrag 25 % (2026).",
        },
        {
          type: "subheading",
          text: "Aktiebolag",
        },
        {
          type: "paragraph",
          text: "Ett aktiebolag är en egen juridisk person. Ditt personliga ansvar begränsas i normalfallet till **aktiekapitalet på 25 000 kr** (lägsta tillåtna för privat AB). Många företagskunder ser hellre ett AB, och bolagsformen gör det enklare att ta in delägare, anställa och bygga ett företagsvärde. Du anställs av ditt eget bolag och tar ut lön, vilket ger jämnare skatt och tillgång till t.ex. sjukpenninggrundande inkomst.",
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
          title: "Tumregel för fotografer",
          text: "Börjar du smått, vid sidan av annat, eller testar marknaden – starta gärna som enskild firma. Riktar du dig mot företagskunder, har stora intäkter eller vill begränsa ansvaret – välj AB. Många fotografer börjar som enskild firma och ombildar när omsättningen växer.",
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
      title: "Tillstånd, krav och fotojuridik",
      lead: "Fotografyrket är inte auktorisationspliktigt – men vad och vem du fotograferar har juridiska gränser.",
      blocks: [
        {
          type: "paragraph",
          text: "Det krävs **ingen yrkesauktorisation enligt lag** för att arbeta som fotograf. Men det finns juridik kring vad du får fotografera och publicera, och kring de personuppgifter som bilder på människor utgör. Gå igenom punkterna nedan.",
        },
        {
          type: "subheading",
          text: "F-skatt och registrering (Skatteverket)",
        },
        {
          type: "paragraph",
          text: "**F-skatt** är grunden och visar att du själv betalar din skatt. Du ansöker gratis hos **Skatteverket** via verksamt.se, samtidigt som du registrerar företaget och anmäler moms.",
        },
        {
          type: "subheading",
          text: "Att fotografera och publicera människor",
        },
        {
          type: "paragraph",
          text: "Bilder på identifierbara personer är **personuppgifter** och omfattas av GDPR när du behandlar dem i din verksamhet. För uppdragsfotografering (t.ex. porträtt och bröllop) har du normalt en rättslig grund i avtalet med kunden, men vill du **publicera** bilder (t.ex. i din portfolio eller marknadsföring) behöver du som regel personens **samtycke** – lös det med ett **modellavtal** (kapitel 7). Tänk också på regler om kränkande fotografering och på att vissa miljöer (t.ex. inne på vissa platser) kan ha fotoförbud eller kräva tillstånd. Vid drönarfoto gäller särskilda regler (Transportstyrelsen).",
          source: "IMY/GDPR (bilder på personer är personuppgifter); Transportstyrelsen (drönarregler).",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Inga branschtillstånd – men avtal och GDPR är ditt regelverk",
          text: "Till skillnad från många andra branscher finns ingen yrkeslicens och inga särskilda tillstånd för att fotografera kommersiellt. Det är i stället **upphovsrätten, avtalen och GDPR** (kapitel 7) som utgör din juridiska ram. Lägg tid på dem – det är där en fotograffirma vinner eller förlorar pengar och förtroende.",
        },
        {
          type: "links",
          items: [
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms" },
            { label: "Skatteverket", url: "https://www.skatteverket.se", note: "Moms på foto och upphovsrätt, F-skatt" },
            { label: "Integritetsskyddsmyndigheten (IMY)", url: "https://www.imy.se", note: "GDPR vid bilder på personer" },
            { label: "PRV", url: "https://www.prv.se", note: "Upphovsrätt och immaterialrätt" },
          ],
        },
      ],
    },

    // 4
    {
      number: 4,
      title: "Startkapital och utrustning",
      lead: "Vad det faktiskt kostar att komma igång – kameran är bara början.",
      blocks: [
        {
          type: "paragraph",
          text: "En fotograffirma är billig att registrera, men utrustningen kan vara en stor investering. Tänk på att du behöver mer än en kamera – objektiv, ljus, backup och redigering hör till. Här är de poster du bör budgetera för. Myndighetsavgifter anges som fastställda belopp; övriga poster som kostnadsslag att räkna på.",
        },
        {
          type: "table",
          columns: ["Post", "Kommentar"],
          rows: [
            ["Aktiekapital (om AB)", "25 000 kr – sätts in på företagskonto, är ditt och kan användas i driften"],
            ["Registrering AB hos Bolagsverket", "1 900 kr via e-tjänst på verksamt.se (2 200 kr med pappersblankett)"],
            ["F-skatt och momsregistrering", "Gratis hos Skatteverket"],
            ["Kamerahus och objektiv", "Den huvudsakliga investeringen; ofta flera objektiv och ett reservhus"],
            ["Ljus och studio", "Blixtar, stativ, bakgrunder; egen studio eller hyrd vid behov"],
            ["Dator, lagring och backup", "Kraftfull dator, redigeringsskärm och säker lagring (dubbel backup)"],
            ["Programvara", "Redigerings- och katalogprogram, ofta abonnemang"],
            ["Leverans och webb", "Galleri-/leveransplattform och portfoliosajt"],
            ["Försäkringar", "Utrustnings- och ansvarsförsäkring (se kapitel 7)"],
            ["Marknadsföring", "Portfolio, sociala medier och eventuell annonsering"],
          ],
          source: "Bolagsverket (1 900 kr AB e-tjänst, 25 000 kr aktiekapital); Skatteverket (F-skatt/moms gratis).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Backup är inte valfritt",
          text: "Förlorade bilder från ett bröllop eller ett betalt uppdrag kan inte fotograferas om – och är ett av de allvarligaste felen en fotograf kan göra. Investera i dubbel lagring och en rutin för backup direkt efter varje uppdrag. Det skyddar både kunden och ditt rykte.",
        },
      ],
    },

    // 5
    {
      number: 5,
      title: "Steg-för-steg: så registrerar du företaget",
      lead: "Hela registreringsprocessen i rätt ordning – från namn till första uppdraget.",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Välj och kontrollera företagsnamn",
              text: "Sök på Bolagsverkets namnsöktjänst att namnet är ledigt och kontrollera att domän och sociala konton är lediga. För AB registreras namnet i samband med bolaget; för enskild firma kan du registrera och skydda namnet separat.",
            },
            {
              title: "Registrera företaget hos Bolagsverket",
              text: "AB registreras via e-tjänsten på **verksamt.se** för **1 900 kr** (stiftelseurkund, bolagsordning och bankintyg på aktiekapitalet 25 000 kr). Enskild firma behöver inte registreras, men du kan göra det för att skydda namnet.",
            },
            {
              title: "Ansök om F-skatt hos Skatteverket",
              text: "Görs gratis via verksamt.se. F-skatt är ett krav i praktiken för att få uppdrag, särskilt från företagskunder.",
            },
            {
              title: "Momsregistrera dig",
              text: "Anmäl moms i samma ärende. Fototjänster och bildförsäljning har moms 25 % (befrielse möjlig först vid omsättning på högst 120 000 kr/år – se kapitel 6).",
            },
            {
              title: "Ta fram avtal och modellavtal",
              text: "Förbered uppdragsavtal som reglerar upphovsrätt och leverans samt modellavtal/samtycke för publicering (kapitel 7) innan du tar betalda uppdrag.",
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
              text: "Skaffa företagskonto (krav för AB), teckna utrustnings- och ansvarsförsäkring (kapitel 7) och bestäm bokföringslösning (kapitel 9) innan du tar första uppdraget.",
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

    // 6
    {
      number: 6,
      title: "Moms och fakturering",
      lead: "En viktig nyans: foton har 25 % – men själva upphovsrätten har 6 %.",
      blocks: [
        {
          type: "paragraph",
          text: "Momsen för fotografer rymmer en detalj som många missar: skillnaden mellan att sälja en **bild/tjänst** och att upplåta **upphovsrätten** till ett verk. Här är vad som gäller.",
        },
        {
          type: "subheading",
          text: "Fototjänster och bilder – 25 %",
        },
        {
          type: "paragraph",
          text: "Fotograferingstjänster och försäljning av fotografier (digitala filer eller kopior) har **moms 25 %** (normalsats). **Ett fotografi räknas aldrig som ett konstverk i momslagens mening**, så den reducerade konstverkssatsen gäller inte – det är 25 % som är huvudregeln för fotografer.",
          source: "Skatteverket (fototjänster och fotografier 25 %; fotografi är inte konstverk i momslagens mening).",
        },
        {
          type: "subheading",
          text: "Upplåtelse av upphovsrätt – 6 %",
        },
        {
          type: "paragraph",
          text: "Däremot gäller den reducerade satsen **6 % moms** när du **överlåter eller upplåter själva upphovsrätten** till ett upphovsrättsligt skyddat verk. I praktiken kan ett uppdrag innehålla båda delar – fototjänsten (25 %) och en rättighetsupplåtelse (6 %). Hur du ska dela upp och fakturera beror på vad du faktiskt säljer och hur avtalet är utformat. Eftersom gränsdragningen kan vara knepig – kontrollera mot Skatteverket hur just din fakturering ska hanteras.",
          source: "Skatteverket (överlåtelse/upplåtelse av upphovsrätt 6 % moms).",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Ingen ROT – och momsbefrielse sällan lönsamt",
          text: "Fototjänster ger **inte** ROT-avdrag. Du kan vara momsbefriad först om omsättningen är **högst 120 000 kr per år** (gränsen gäller sedan 1 januari 2025), men då kan du inte dra av ingående moms på din dyra utrustning – vilket sällan lönar sig. De flesta fotografer som investerar i utrustning är momsregistrerade.",
          source: "Skatteverket, momsbefrielse vid omsättning på högst 120 000 kr/år (fr.o.m. 1 jan 2025).",
        },
        {
          type: "subheading",
          text: "Fakturera tydligt",
        },
        {
          type: "paragraph",
          text: "Specificera vad fakturan avser (fotografering, efterarbete, antal bilder, eventuell rättighetsupplåtelse) och med vilken momssats. Vid längre uppdrag eller bröllop – ta en **bokningsavgift/handpenning** vid bokning och resten vid leverans, så att du inte står utan betalning om kunden avbokar. Var tydlig med betalningsvillkor.",
        },
      ],
    },

    // 7
    {
      number: 7,
      title: "Upphovsrätt, avtal och försäkring",
      lead: "Det här avgör vad kunden får, hur du skyddas och vad du kan ta betalt för i framtiden.",
      blocks: [
        {
          type: "paragraph",
          text: "För en fotograf ligger de största värdena och riskerna i upphovsrätten, avtalen och den dyra utrustningen. Tre saker behöver du ha ordning på: vem som äger bilderna, vad kunden får, och hur du försäkrar dig.",
        },
        {
          type: "subheading",
          text: "Upphovsrätt – du äger bilderna",
        },
        {
          type: "paragraph",
          text: "Som fotograf är du **upphovsman** och innehar **upphovsrätten** till dina bilder enligt lagen (1960:729) om upphovsrätt – även när du fotograferar på uppdrag, om inget annat avtalas. Kunden köper alltså inte automatiskt rätten att göra vad som helst med bilderna; kunden får det ni **avtalar**. Det är därför du kan ta betalt för bildanvändning över tid och behålla rätten att visa bilderna i din portfolio (med modellens samtycke).",
          source: "Lag (1960:729) om upphovsrätt (fotografen är upphovsman och innehar rättigheterna om inget annat avtalas).",
        },
        {
          type: "subheading",
          text: "Nyttjanderätt eller överlåtelse",
        },
        {
          type: "paragraph",
          text: "Reglera i avtalet vad kunden får: en **nyttjanderätt (licens)** för ett visst ändamål (t.ex. privat bruk, eller företagets marknadsföring i vissa kanaler under viss tid), eller en **överlåtelse** av rättigheterna (kunden tar över rätten helt). Ju bredare rättigheter kunden får, desto mer bör det kosta. En vanlig och lönsam modell är att sälja en avgränsad nyttjanderätt och ta extra betalt för utökad användning – men var tydlig så att kunden vet vad den får.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Modellavtal och GDPR vid personbilder",
          text: "Fotograferar du **människor** hanterar du personuppgifter (GDPR). För att få **publicera** bilder (portfolio, sociala medier, kundens marknadsföring) behöver du normalt personens **samtycke** – använd ett **modellavtal (model release)** som tydligt anger hur bilderna får användas. Var särskilt försiktig med bilder på **barn** (vårdnadshavares samtycke) och i känsliga sammanhang. Otydliga eller saknade samtycken är en vanlig och allvarlig fallgrop.",
          source: "IMY/GDPR (samtycke för publicering av personbilder); modellavtal som dokumentation.",
        },
        {
          type: "subheading",
          text: "Försäkring",
        },
        {
          type: "list",
          items: [
            "**Utrustningsförsäkring (all risk)** – din kamerautrustning är dyr och bärs ofta ut på plats; täck stöld och skada, gärna även utomlands om du reser.",
            "**Ansvarsförsäkring** – täcker skador du orsakar på person eller egendom under ett uppdrag (t.ex. ett vält stativ).",
            "**Konsultansvar / rena förmögenhetsskador** – ekonomisk skada om du t.ex. missar leverans eller förlorar bilder; läs villkoren noga.",
            "**Avbrotts-/sjukförsäkring** – ekonomiskt skydd om du blir sjuk och inte kan genomföra bokade uppdrag.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Avtalet skyddar dig vid bröllop och avbokning",
          text: "Vid oåterkalleliga uppdrag som bröllop är avtalet din viktigaste trygghet: reglera handpenning, avbokningsvillkor, vad som händer vid sjukdom (ersättningsfotograf), leveranstid och rättigheter. Ett tydligt avtal förebygger de flesta tvister och visar att du är professionell.",
        },
      ],
    },

    // 8
    {
      number: 8,
      title: "Prissättning och paket",
      lead: "Så tar du betalt för värdet – inte bara för timmarna bakom kameran.",
      blocks: [
        {
          type: "paragraph",
          text: "Den vanligaste orsaken till att fotografer tjänar för lite är att de bara prissätter fototiden och glömmer allt annat: efterarbete (ofta lika lång tid som fotograferingen), utrustning, försäkring, programvara, marknadsföring och all icke-debiterbar tid. Räkna baklänges från vad du behöver tjäna per år och dela på de uppdrag du realistiskt hinner.",
        },
        {
          type: "subheading",
          text: "Vad priset måste täcka",
        },
        {
          type: "list",
          items: [
            "**Fotograferingstid** – själva uppdraget på plats.",
            "**Efterarbete** – urval, redigering, leverans; ofta den största dolda tidsposten.",
            "**Utrustning och programvara** – avskrivning, uppgraderingar och abonnemang.",
            "**Icke-debiterbar tid** – offerter, kontakt, administration, marknadsföring.",
            "**Försäkring, lokal och resor** – samt en vinstmarginal som låter företaget växa.",
          ],
        },
        {
          type: "subheading",
          text: "Paket och licensiering",
        },
        {
          type: "paragraph",
          text: "Sälj gärna **paket** (t.ex. bröllops- eller porträttpaket med definierat antal bilder och leverans) i stället för lösa timmar – det är tydligt för kunden och låter dig prissätta värdet. Lägg till intäkter genom **merförsäljning** (extra bilder, prints, album) och genom **licensiering** (utökad användningsrätt mot tillägg). För företagskunder är rättigheterna ofta en stor del av värdet – ta betalt för dem.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Räkna in efterarbetet",
          text: "En timmes fotografering kan ge flera timmars redigering. Många nya fotografer prissätter bara tiden bakom kameran och jobbar i praktiken gratis med efterarbetet. Räkna in hela arbetsflödet i ditt pris – det är där lönsamheten avgörs.",
        },
      ],
    },

    // 9
    {
      number: 9,
      title: "Bokföring och skatt",
      lead: "Löpande ordning i ekonomin – och de avdrag fotografer ofta missar.",
      blocks: [
        {
          type: "paragraph",
          text: "Alla företag är enligt bokföringslagen skyldiga att löpande bokföra sina affärshändelser och spara underlag. En fotograffirma har relativt få men ibland stora transaktioner (utrustning) och två momssatser att hålla isär – ett enkelt bokföringsprogram räcker ofta långt, men en redovisningsbyrå kan vara värd pengarna när du växer.",
        },
        {
          type: "subheading",
          text: "Moms och utrustning i bokföringen",
        },
        {
          type: "paragraph",
          text: "Håll isär de två momssatserna från kapitel 6 (fototjänst 25 %, rättighetsupplåtelse 6 %) i redovisningen. Dyr utrustning bokförs ofta som **inventarier och skrivs av** över sin livslängd i stället för att kostnadsföras direkt – det påverkar resultat och skatt. Mindre inköp kan dras direkt.",
          source: "Skatteverket, momssatser och avskrivning av inventarier.",
        },
        {
          type: "subheading",
          text: "F-skatt och preliminärskatt",
        },
        {
          type: "paragraph",
          text: "Med **F-skatt** betalar du själv in din skatt och dina egenavgifter (enskild firma) eller bolagets skatt (AB). Skatteverket beslutar en **preliminärskatt** som du betalar varje månad utifrån din uppskattade vinst. Justera prognosen när uppdragen utvecklas; fotografverksamhet kan vara säsongsbetonad (t.ex. bröllop sommartid).",
        },
        {
          type: "subheading",
          text: "Vanliga avdrag för fotografer",
        },
        {
          type: "list",
          items: [
            "**Kamerautrustning och tillbehör** – avskrivning av dyrare utrustning; mindre tillbehör direkt.",
            "**Dator, lagring och programvara** – redigering, katalog och säker lagring/backup.",
            "**Studio eller hemmakontor** – hyra eller avdrag enligt särskilda regler för den del som används i verksamheten.",
            "**Resor och transport** – kostnader för att ta dig till uppdrag.",
            "**Kompetensutveckling** – kurser och facklitteratur som rör verksamheten.",
            "**Försäkringar, webb och marknadsföring** – utrustnings-/ansvarsförsäkring, portfoliosajt och annonsering.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Spara alla underlag",
          text: "Kvitton, fakturor och avtal ska sparas enligt bokföringslagen. Spara även dina uppdrags- och modellavtal ordnat – de är ditt bästa skydd både vid en skattekontroll och vid en eventuell tvist om bildanvändning eller publicering.",
        },
      ],
    },

    // 10
    {
      number: 10,
      title: "Att anställa och anlita",
      lead: "Att växa med assistenter, second shooters och frilansare.",
      blocks: [
        {
          type: "paragraph",
          text: "Många fotografer arbetar ensamma, men vid större uppdrag (bröllop, event) eller högre volym behövs hjälp – assistenter, andrafotografer (second shooters) eller redigerare. Du kan anställa eller anlita frilansare.",
        },
        {
          type: "subheading",
          text: "Anlita frilansare och second shooters",
        },
        {
          type: "paragraph",
          text: "Det vanligaste sättet att skala är att **anlita frilansare med egen F-skatt** per uppdrag – flexibelt och utan fasta lönekostnader. Säkerställ att de har **F-skatt** (annars kan du bli skyldig att betala arbetsgivaravgifter), och reglera i avtal att **upphovsrätten** till deras bilder förs vidare till dig eller direkt till kunden enligt ert uppdragsavtal (kapitel 7) – annars kan du inte leverera de rättigheter du lovat kunden.",
        },
        {
          type: "subheading",
          text: "Arbetsgivaravgifter vid anställning",
        },
        {
          type: "paragraph",
          text: "Anställer du personal betalar du lön plus **arbetsgivaravgifter** – normalsatsen 2026 är **31,42 %** av bruttolönen – och får fullt arbetsgivaransvar. För de flesta fotografer räcker frilanssamarbeten långt innan en anställning blir aktuell. Vissa nedsättningar kan finnas i särskilda fall; kontrollera hos Skatteverket.",
          source: "Skatteverket, arbetsgivaravgift normalsats 31,42 % (2026).",
        },
      ],
    },

    // 11
    {
      number: 11,
      title: "Vanliga misstag och fallgropar",
      lead: "De dyraste nybörjarfelen i fotografbranschen – och hur du undviker dem.",
      blocks: [
        {
          type: "list",
          items: [
            "**Oreglerad upphovsrätt.** Att leverera bilder utan att ha bestämt vad kunden får (nyttjanderätt eller överlåtelse). Reglera det i avtalet – det är en av dina viktigaste intäktskällor.",
            "**Sakna modellavtal/samtycke.** Att publicera bilder på personer utan samtycke bryter mot GDPR och kan ge tvister. Använd modellavtal, särskilt vid barn.",
            "**Fel moms.** Att inte hålla isär fototjänst (25 %) och upplåtelse av upphovsrätt (6 %). Kontrollera faktureringen med Skatteverket.",
            "**Ingen backup.** Förlorade bilder från ett betalt uppdrag kan inte tas om. Dubbel lagring och rutin direkt efter uppdrag är ett måste.",
            "**Prissätta bara fototiden.** Efterarbetet glöms bort och du jobbar gratis. Räkna in hela arbetsflödet i priset.",
            "**Svaga avtal vid bröllop.** Utan handpenning, avboknings- och sjukdomsvillkor står du oskyddad vid oåterkalleliga uppdrag.",
            "**Underförsäkrad utrustning.** Dyr utrustning som bärs ut på plats utan all risk-skydd är en stor risk.",
            "**Lova ROT.** Fototjänster ger inte ROT-avdrag – blanda aldrig in det.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Det dyraste felet är att gissa",
          text: "Reglerna kring moms på upphovsrätt och kring GDPR vid personbilder är lätta att missförstå. Bygg en vana att kontrollera aktuell uppgift hos Skatteverket och IMY innan du fakturerar rättigheter eller publicerar bilder – och spara avtalen.",
        },
      ],
    },

    // 12
    {
      number: 12,
      title: "Marknadsföring och dina första kunder",
      lead: "Så får du de första uppdragen och bygger ett namn.",
      blocks: [
        {
          type: "paragraph",
          text: "En fotograf säljs på sina **bilder och sitt rykte**. Det viktigaste i början är att visa upp ett starkt och fokuserat bildflöde, vara lätt att hitta och boka, och få nöjda kunder att rekommendera dig vidare. Här är de kanaler som ger mest för en nystartad fotograffirma.",
        },
        {
          type: "list",
          items: [
            "**Portfolio och egen webbplats.** Dina bilder är ditt främsta säljargument – visa ett kurerat urval inom din nisch, inte allt du fotograferat.",
            "**Instagram och sociala medier.** Foto är gjort för bildflöden; var konsekvent i stil och nisch så att rätt kunder hittar dig.",
            "**Nisch och specialisering.** Att vara \"bröllopsfotografen\" eller \"företagsporträttören\" gör dig lättare att rekommendera än en allätare.",
            "**Google – sökning och profil.** Synas när någon söker fotograf i ditt område; omdömen väger tungt.",
            "**Rekommendationer och samarbeten.** Nöjda kunder, bröllopsleverantörer, eventbyråer och företag som skickar uppdrag vidare.",
            "**Visa rättigheter och proffsighet.** Tydliga avtal, leveransvillkor och bra bemötande gör att kunder vågar boka och betala mer.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Kvalitet före kvantitet i portfolion",
          text: "Visa bara dina bästa bilder inom det du vill bli bokad för. En fokuserad portfolio som matchar din nisch drar rätt kunder och låter dig ta bättre betalt än ett spretigt flöde som visar allt. Uppdatera den när du höjer din nivå.",
        },
      ],
    },

    // 13
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
            "Valt bolagsform (enskild firma eller AB) utifrån ansvar, skatt och tillväxtplan",
            "Kontrollerat företagsnamn hos Bolagsverket och säkrat domän/sociala konton",
            "Registrerat företaget (AB: 1 900 kr e-tjänst, aktiekapital 25 000 kr insatt)",
            "Ansökt om F-skatt och momsregistrerat företaget",
            "Anmält verklig huvudman (AB) och öppnat företagskonto",
          ],
        },
        {
          type: "subheading",
          text: "Avtal, rättigheter och moms",
        },
        {
          type: "checklist",
          items: [
            "Tagit fram uppdragsavtal som reglerar upphovsrätt (nyttjanderätt/överlåtelse) och leverans",
            "Tagit fram modellavtal/samtycke för publicering (särskilt vid barn)",
            "Förstått momsen: fototjänst 25 %, upplåtelse av upphovsrätt 6 %",
            "Klart för dig att fototjänster inte ger ROT",
            "Satt rutin för handpenning och avbokningsvillkor (särskilt bröllop)",
          ],
        },
        {
          type: "subheading",
          text: "Utrustning, ekonomi och försäkring",
        },
        {
          type: "checklist",
          items: [
            "Satt upp dubbel lagring och en backup-rutin direkt efter uppdrag",
            "Tecknat utrustnings- (all risk) och ansvarsförsäkring",
            "Satt paketpriser som täcker fototid, efterarbete, utrustning och vinst",
            "Valt bokföringslösning som hanterar två momssatser",
          ],
        },
        {
          type: "subheading",
          text: "Inför första uppdraget",
        },
        {
          type: "checklist",
          items: [
            "Byggt en fokuserad portfolio inom din nisch",
            "Skapat webbplats och profil i sociala medier",
            "Satt rutin för leverans (galleri/plattform) och fakturering",
            "Säkerställt buffert för egna omkostnader under uppstarten",
          ],
        },
      ],
    },

    // 14
    {
      number: 14,
      title: "Resurser och myndighetskontakter",
      lead: "Spara den här sidan – här kontrollerar du aktuella regler om moms, upphovsrätt och GDPR.",
      blocks: [
        {
          type: "paragraph",
          text: "Reglerna kring moms på upphovsrätt och kring personuppgifter kan ändras. Använd länkarna nedan för att kontrollera aktuell uppgift direkt hos källan innan du fakturerar rättigheter, publicerar bilder eller anlitar frilansare.",
        },
        {
          type: "links",
          items: [
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare – allt på ett ställe" },
            { label: "Skatteverket", url: "https://www.skatteverket.se", note: "Moms på foto (25 %) och upphovsrätt (6 %), F-skatt, 3:12" },
            { label: "Integritetsskyddsmyndigheten (IMY)", url: "https://www.imy.se", note: "GDPR och samtycke vid bilder på personer" },
            { label: "PRV", url: "https://www.prv.se", note: "Upphovsrätt och immaterialrätt" },
            { label: "Bolagsverket", url: "https://www.bolagsverket.se", note: "Registrering, avgifter, namn, verklig huvudman" },
            { label: "Transportstyrelsen", url: "https://www.transportstyrelsen.se", note: "Regler för drönarfotografering" },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Vill du bolla ditt upplägg med en rådgivare?",
          text: "Den här guiden tar dig långt på egen hand. Vill du dubbelkolla val av bolagsform, moms på upphovsrätt eller dina avtal med en expert kan vi matcha dig med en rådgivare kostnadsfritt på driva-foretag.se/hitta-radgivare.",
        },
      ],
    },
  ],
};

export default fotograf;
