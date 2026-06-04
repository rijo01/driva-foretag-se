import type { GuideContent } from "./types";

// ──────────────────────────────────────────────────────────────────────────
// STARTGUIDE: RESTAURANG
//
// YMYL – faktagranskad mot primärkälla. Verifierade uppgifter (juni 2026):
//  • MOMS (den stora fällan):
//      - Restaurang- och cateringtjänst (servering på plats): 12 %
//      - Livsmedel och hämtmat (takeaway): 6 % (sänkt från 12 % fr.o.m.
//        1 april 2026, tillfälligt t.o.m. 31 december 2027)
//      - Spritdrycker, vin och starköl: alltid 25 % (även serverat)
//    (Skatteverket: "Livsmedelsmomsen sänks till 6 procent", momssatssidan).
//  • Livsmedelsverksamhet ska REGISTRERAS (inte godkännas) hos kommunen innan
//    start; verksamheten får starta två veckor efter komplett anmälan
//    (art. 6.2 EU-förordning 852/2004; livsmedelslagen 2006:804). Egenkontroll
//    enligt HACCP-principerna krävs (Livsmedelsverket).
//  • Serveringstillstånd för alkohol söks hos KOMMUNEN enligt alkohollagen
//    (2010:1622), kräver godkänt kunskapsprov (Folkhälsomyndighetens prov,
//    minst 75 % rätt per delområde). Ansökningsavgift sätts av kommunen.
//  • Kassaregister krävs vid kontant-/kortbetalning (skatteförfarandelagen
//    39 kap.); kontrollavgift 12 500 kr, vid ny överträdelse inom 1 år 25 000 kr.
//  • Personalliggare krävs i restaurangbranschen; kontrollavgift 12 500 kr +
//    2 500 kr per ej antecknad person (Skatteverket).
//  • Arbetsgivaravgift 31,42 % (2026), aktiekapital privat AB 25 000 kr,
//    AB-registrering 1 900 kr e-tjänst / 2 200 kr blankett.
//  • Rökförbud gäller även uteserveringar (lagen 2018:2088 om tobak och
//    liknande produkter). Allergeninformation enligt EU-förordning 1169/2011.
//  • Kollektivavtal: Gröna riksavtalet mellan Visita och Hotell- och
//    restaurangfacket (HRF).
//
// Kommunala avgifter (livsmedelskontroll, serveringstillstånd, bygglov) varierar
// per kommun och skrivs kvalitativt – aldrig gissad siffra.
// ──────────────────────────────────────────────────────────────────────────

const restaurang: GuideContent = {
  slug: "restaurang",
  industry: "Restaurang",
  title: "Starta & driva restaurang",
  subtitle: "Komplett startguide 2026",
  year: 2026,
  reviewedAt: "2026-06-04",
  reviewedSources: "Skatteverket, Livsmedelsverket, Folkhälsomyndigheten & Bolagsverket",
  intro:
    "Den kompletta, faktagranskade guiden för dig som ska starta restaurang i Sverige – från bolagsform, livsmedelsregistrering och serveringstillstånd till den knepiga momsen (servering, hämtmat och alkohol), kassaregister, personalliggare, kalkyl och din första gäst. Varje siffra är kontrollerad mot Skatteverket, Livsmedelsverket och Folkhälsomyndigheten.",

  chapters: [
    // 1 ──────────────────────────────────────────────────────────────────
    {
      number: 1,
      title: "Att driva restaurang i Sverige",
      lead: "Vad branschen kräver av dig som företagare – och vad som gör den lönsam.",
      blocks: [
        {
          type: "paragraph",
          text: "Att driva restaurang är för många en dröm – men det är också en av de mest reglerade och marginalpressade branscherna att starta i. Här möts livsmedelslagstiftning, alkoholtillstånd, särskilda momsregler, krav på kassaregister och personalliggare, samt en tuff kalkyl där råvaror, personal och lokal ska rymmas i priset. Den som förstår reglerna och håller stenkoll på kalkylen från start får ett avgörande försprång.",
        },
        {
          type: "paragraph",
          text: "Med **restaurang** menar vi i den här guiden verksamheter som tillagar och säljer mat och dryck för förtäring – från lunchrestaurang, à la carte och pizzeria till food truck och cateringkök. Reglerna i guiden gäller i grunden lika, men vilka tillstånd just du behöver beror på om du serverar alkohol, hur du säljer (servering eller hämtmat) och hur lokalen är utformad.",
        },
        {
          type: "paragraph",
          text: "Tre saker skiljer restaurangbranschen från de flesta andra när du startar: **livsmedelsreglerna** (registrering hos kommunen och egenkontroll), **momsen** (olika satser för servering, hämtmat och alkohol – en klassisk fälla) och **kontrollkraven** (kassaregister och personalliggare). De tre styr hur du startar, fakturerar och dokumenterar – och de är genomgående teman i guiden.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Så använder du guiden",
          text: "Läs kapitel 1–6 innan du skriver lokalkontrakt och öppnar – de avgör bolagsform, tillstånd och momshantering. Kapitel 7–12 är drift: försäkring, kalkyl, bokföring, personal och marknadsföring. Kapitel 13 är en komplett checklista du kan kryssa av, och kapitel 14 samlar alla myndighetskontakter med länkar.",
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
          text: "För de flesta restauranger står valet mellan **enskild näringsverksamhet** (enskild firma) och **aktiebolag (AB)**. Båda går att driva restaurang i – men de skiljer sig åt på fyra punkter som spelar extra stor roll i en bransch med höga fasta kostnader och betydande risk: personligt ansvar, kapitalkrav, skatt och förtroende hos hyresvärdar, leverantörer och vid serveringstillstånd.",
        },
        {
          type: "subheading",
          text: "Enskild firma",
        },
        {
          type: "paragraph",
          text: "Enklast och billigast att starta. Du och företaget är samma juridiska person, vilket betyder att du har **personligt ansvar** för företagets skulder – tungt vägande i en bransch med dyra lokalkontrakt, köksinvesteringar och svängande gästunderlag. Du betalar **egenavgifter** på överskottet (28,97 % för aktiv näringsverksamhet 2026, med ett schablonavdrag på 25 % innan avgiften beräknas) och inkomsten beskattas som din lön. Kan passa en liten verksamhet med låg investering, men väg in ansvaret mot lokal- och köksåtagandena.",
          source: "Skatteverket, egenavgifter 28,97 % och schablonavdrag 25 % (2026).",
        },
        {
          type: "subheading",
          text: "Aktiebolag",
        },
        {
          type: "paragraph",
          text: "Ett aktiebolag är en egen juridisk person. Ditt personliga ansvar begränsas i normalfallet till **aktiekapitalet på 25 000 kr** (lägsta tillåtna för privat AB) – en viktig trygghet när du investerar i kök och tecknar långa hyresavtal. Hyresvärdar och leverantörer arbetar ofta hellre med AB, och bolagsformen gör det enklare att ta in delägare, finansiera och bygga upp ett företagsvärde. Du anställs av ditt eget bolag och tar ut lön, vilket ger jämnare skatt och tillgång till t.ex. sjukpenninggrundande inkomst.",
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
          title: "Tumregel för restaurang",
          text: "Med tanke på de höga fasta kostnaderna, investeringen i kök och risken i branschen väljer de flesta restaurangägare **AB** för ansvarsbegränsningens skull. En liten, försiktig verksamhet kan börja som enskild firma – men räkna noga på risken i lokal- och köksåtagandena först.",
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
      title: "Tillstånd och krav: livsmedel, alkohol och lokal",
      lead: "Restaurang har fler tillståndskrav än de flesta branscher. Här är vad som gäller – och vilken myndighet du vänder dig till.",
      blocks: [
        {
          type: "paragraph",
          text: "En restaurang behöver flera tillstånd och anmälningar på plats innan du öppnar. Vissa gäller alla, andra bara om du serverar alkohol eller bygger om lokalen. Gå igenom listan nedan och bocka av det som rör din verksamhet.",
        },
        {
          type: "subheading",
          text: "Registrering av livsmedelsverksamhet (kommunen)",
        },
        {
          type: "paragraph",
          text: "All livsmedelsverksamhet ska **registreras hos kommunen** (miljö- och hälsoskyddsnämnden eller motsvarande) innan den startar. För en vanlig restaurang handlar det om **registrering**, inte godkännande. Du får starta verksamheten **två veckor efter att en komplett anmälan har kommit in** till kommunen, eller tidigare om kommunen beslutar det. Kravet följer av EU-förordning 852/2004 och livsmedelslagen (2006:804). Lämna alltså in anmälan i god tid – minst två veckor före öppning.",
          source: "Livsmedelsverket; EU-förordning 852/2004 art. 6.2; livsmedelslagen (2006:804).",
        },
        {
          type: "paragraph",
          text: "Du ska också ha en **egenkontroll baserad på HACCP-principerna** – rutiner för hygien, temperaturer, rengöring, spårbarhet och hantering av allergener. Kommunen gör återkommande livsmedelskontroller och tar ut en **kontrollavgift** som är riskbaserad och **varierar mellan kommuner**. Kontakta din kommun för aktuellt belopp och vad anmälan ska innehålla.",
          source: "Livsmedelsverket, egenkontroll och offentlig kontroll (avgift varierar per kommun).",
        },
        {
          type: "subheading",
          text: "Serveringstillstånd för alkohol (kommunen)",
        },
        {
          type: "paragraph",
          text: "Ska du **servera alkohol** krävs **serveringstillstånd**, som du söker hos **kommunen** enligt alkohollagen (2010:1622). Du måste vara minst 20 år och bedömas personligt och ekonomiskt lämplig, och du ska visa kunskap om alkohollagen genom ett **kunskapsprov**. Provet hålls av kommunen enligt Folkhälsomyndighetens regler, och godkänt resultat kräver **minst 75 % rätt per delområde**. Tillstånd kan vara stadigvarande eller tillfälligt, och avse servering till allmänheten eller slutet sällskap. **Ansökningsavgiften sätts av varje kommun** och varierar.",
          source: "Folkhälsomyndigheten och alkohollagen (2010:1622); kunskapsprov minst 75 % rätt per delområde; avgift varierar per kommun.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Kontrollera de senaste alkoholreglerna",
          text: "Alkohollagen och dess tillämpning ändras över tid (t.ex. krav kopplade till matutbud och servering). Eftersom serveringstillstånd är en kärnfråga och reglerna kan ha uppdaterats – **kontrollera alltid de aktuella villkoren hos din kommun och Folkhälsomyndigheten** innan du planerar din alkoholservering och dina öppettider.",
          source: "Folkhälsomyndigheten, regler kring servering av alkohol (kontrollera aktuell tillämpning).",
        },
        {
          type: "subheading",
          text: "Lokal, bygglov och brandskydd",
        },
        {
          type: "paragraph",
          text: "Att inreda en lokal till restaurang innebär ofta krav på **bygglov för ändrad användning** och att lokalen uppfyller kraven för **livsmedelslokal** (separata ytor, handtvätt, ventilation/imkanal, eventuell fettavskiljare). Du ansvarar också för **systematiskt brandskyddsarbete (SBA)** enligt lagen (2003:778) om skydd mot olyckor. De exakta kraven är lokal- och kommunberoende – stäm av med kommunens bygglovs- och miljöavdelning samt räddningstjänsten tidigt, eftersom ombyggnad tar tid.",
          source: "Plan- och bygglagen (2010:900); lagen (2003:778) om skydd mot olyckor; krav varierar per lokal och kommun.",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Rökfritt och allergeninformation",
          text: "**Rökförbud** gäller i serveringsmiljöer och även på **uteserveringar** enligt lagen (2018:2088) om tobak och liknande produkter – inga rökrutor är tillåtna på uteserveringen. Du ska också kunna ge **allergeninformation** om de 14 vanliga allergenerna enligt EU-förordning 1169/2011, muntligt eller skriftligt.",
          source: "Lagen (2018:2088) om tobak och liknande produkter; EU-förordning 1169/2011 (allergener).",
        },
        {
          type: "links",
          items: [
            { label: "Livsmedelsverket – starta livsmedelsföretag", url: "https://www.livsmedelsverket.se", note: "Registrering, egenkontroll, HACCP, allergener" },
            { label: "Folkhälsomyndigheten – serveringstillstånd", url: "https://www.folkhalsomyndigheten.se", note: "Alkohollagen, kunskapsprov, regler för servering" },
            { label: "Din kommun", url: "https://www.sverigeskommunerochregioner.se", note: "Livsmedelsregistrering, serveringstillstånd, bygglov – sök din kommun" },
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
          text: "Restaurang är kapitalkrävande att starta: kök, inredning, lokal och de första månadernas drift innan gästunderlaget är uppbyggt kostar pengar redan innan första gästen kommer. Här är de poster du bör budgetera för. Myndighetsavgifter anges som fastställda belopp där de är nationella; kommunala avgifter och övriga poster anges som kostnadsslag att räkna på.",
        },
        {
          type: "table",
          columns: ["Post", "Kommentar"],
          rows: [
            ["Aktiekapital (om AB)", "25 000 kr – sätts in på företagskonto, är ditt och kan användas i driften"],
            ["Registrering AB hos Bolagsverket", "1 900 kr via e-tjänst på verksamt.se (2 200 kr med pappersblankett)"],
            ["F-skatt och momsregistrering", "Gratis hos Skatteverket"],
            ["Livsmedelsregistrering + kontrollavgift", "Avgift varierar per kommun – kontrollera lokalt"],
            ["Serveringstillstånd (om alkohol)", "Ansökningsavgift varierar per kommun – kontrollera lokalt"],
            ["Lokal: hyra, deposition, ombyggnad", "Ofta största posten – hyra, anpassning, bygglov, ventilation"],
            ["Köksutrustning och inredning", "Spis, kyl/frys, fläkt, möbler, porslin – stor investering"],
            ["Kassaregister", "Certifierat kassaregister – krav vid kontant-/kortförsäljning"],
            ["Försäkringar", "Företags-, egendoms- och avbrottsförsäkring (se kapitel 7)"],
            ["Varulager och rörelsekapital", "Råvaror plus pengar för löner och hyra innan intäkterna bär"],
          ],
          source: "Bolagsverket (1 900 kr AB e-tjänst, 25 000 kr aktiekapital); Skatteverket (F-skatt/moms gratis).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Räkna med en uppstartsperiod",
          text: "Få restauranger är fullsatta från dag ett. Budgetera rörelsekapital som täcker hyra, löner och råvaror under flera månader medan du bygger gästunderlag. Underkapitalisering – att börja utan buffert – är en av de vanligaste orsakerna till att nya restauranger tvingas stänga.",
        },
      ],
    },

    // 5 ──────────────────────────────────────────────────────────────────
    {
      number: 5,
      title: "Steg-för-steg: så registrerar du företaget",
      lead: "Hela vägen från företagsnamn till öppningsdag – i rätt ordning.",
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
              title: "Ansök om F-skatt och momsregistrering",
              text: "Görs gratis via verksamt.se. F-skatt krävs i praktiken för att driva verksamhet och fakturera. Restaurang är momspliktig (se kapitel 6 för satserna).",
            },
            {
              title: "Registrera livsmedelsverksamheten hos kommunen",
              text: "Lämna in anmälan om registrering till kommunens miljö-/hälsoskyddsnämnd **minst två veckor före öppning**. Förbered egenkontroll baserad på HACCP.",
            },
            {
              title: "Ansök om serveringstillstånd (om alkohol)",
              text: "Ska du servera alkohol: klara **kunskapsprovet** och ansök om serveringstillstånd hos kommunen enligt alkohollagen. Räkna med handläggningstid – sök i god tid före öppning.",
            },
            {
              title: "Registrera dig som arbetsgivare (om du ska anställa)",
              text: "Ska du ha personal anmäler du dig som arbetsgivare hos Skatteverket via verksamt.se. Då börjar du redovisa arbetsgivaravgifter och avdragen skatt (se kapitel 10).",
            },
            {
              title: "Anmäl verklig huvudman och ordna kassaregister",
              text: "AB anmäler verklig huvudman till Bolagsverket (normalt inom fyra veckor). Skaffa ett **certifierat kassaregister** och sätt rutin för personalliggare (se kapitel 6).",
            },
            {
              title: "Teckna försäkring, ordna bokföring och bygg lokalen klar",
              text: "Teckna försäkringar (kapitel 7), öppna företagskonto, bestäm bokföringslösning (kapitel 9) och säkerställ att lokal, bygglov, ventilation och brandskydd är klara innan öppning.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Allt på ett ställe",
          text: "verksamt.se är myndigheternas gemensamma e-tjänst (Bolagsverket, Skatteverket och Tillväxtverket). Du registrerar företag, ansöker om F-skatt, momsregistrerar dig och anmäler arbetsgivare i samma flöde. Livsmedelsregistrering och serveringstillstånd söker du hos kommunen.",
          source: "verksamt.se (Bolagsverket, Skatteverket, Tillväxtverket); kommunen (livsmedel och alkohol).",
        },
      ],
    },

    // 6 ──────────────────────────────────────────────────────────────────
    {
      number: 6,
      title: "Moms, kassaregister och personalliggare",
      lead: "Den momsfälla som nästan alla nya restaurangägare ramlar i – plus de två kontrollkraven Skatteverket granskar hårdast.",
      blocks: [
        {
          type: "paragraph",
          text: "Momsen är där nya restaurangägare oftast gör fel, eftersom **olika delar av försäljningen har olika momssats**. Att blanda ihop dem är både vanligt och dyrt. Här är vad som gäller 2026.",
        },
        {
          type: "subheading",
          text: "Momssatserna – servering, hämtmat och alkohol",
        },
        {
          type: "table",
          columns: ["Vad du säljer", "Momssats", "Kommentar"],
          rows: [
            ["Servering på plats (restaurang-/cateringtjänst)", "12 %", "Maten äts i lokalen, med dukning och service"],
            ["Hämtmat / takeaway (mat att ta med)", "6 %", "Sänkt från 12 % – livsmedelsmoms"],
            ["Livsmedel/råvaror (t.ex. butiksförsäljning)", "6 %", "Sänkt 1 april 2026, tillfälligt t.o.m. 31 dec 2027"],
            ["Spritdrycker, vin och starköl", "25 %", "Alltid 25 %, även vid servering"],
            ["Alkoholfri dryck, lättöl, folköl", "6 %", "Behandlas som livsmedel"],
          ],
          source: "Skatteverket: momssats restaurang-/cateringtjänst 12 %, livsmedel/hämtmat 6 % (1 apr 2026–31 dec 2027), spritdrycker/vin/starköl alltid 25 %.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Den nya livsmedelsmomsen – och fällan med servering",
          text: "Sedan **1 april 2026** är momsen på livsmedel och **hämtmat 6 %** (tillfälligt t.o.m. 31 december 2027). Men **servering på plats är fortfarande 12 %**. Erbjuder du både äta-här och ta-med måste du hantera **båda satserna**: 12 % för det som äts i lokalen, 6 % för det som tas med. **Alkohol är alltid 25 %**, även serverad. En måltid med ett glas vin ska därför delas upp: maten 12 % (eller 6 % som hämtmat), vinet 25 %.",
          source: "Skatteverket, \"Livsmedelsmomsen sänks till 6 procent\" (1 april 2026); spritdrycker/vin/starköl alltid 25 %.",
        },
        {
          type: "subheading",
          text: "Kassaregister",
        },
        {
          type: "paragraph",
          text: "Säljer du varor eller tjänster mot **kontant betalning eller kort** (Swish jämställs med kort) måste du ha ett **certifierat kassaregister** enligt skatteförfarandelagen (39 kap.). Det ska registrera all försäljning och kunna ge kvitto. Saknas eller missköts kassaregistret kan Skatteverket ta ut en **kontrollavgift på 12 500 kr**, och **25 000 kr vid en ny överträdelse inom ett år**. Vissa undantag finns, t.ex. för försäljning av obetydlig omfattning – kontrollera reglerna hos Skatteverket.",
          source: "Skatteverket; skatteförfarandelagen (2011:1244) 39 kap. (kontrollavgift 12 500 kr / 25 000 kr vid ny överträdelse).",
        },
        {
          type: "subheading",
          text: "Personalliggare",
        },
        {
          type: "paragraph",
          text: "Restaurangbranschen omfattas av kravet på **personalliggare** – en daglig förteckning över vilka som är verksamma i lokalen och när. Den ska finnas tillgänglig för Skatteverkets oannonserade kontroller. Saknas eller är liggaren felaktig kan Skatteverket ta ut en **kontrollavgift på 12 500 kr**, plus **2 500 kr för varje person** som är verksam men inte antecknad. Inför rutinen från första arbetsdagen.",
          source: "Skatteverket, personalliggare i restaurangbranschen (skatteförfarandelagen 39 kap.); 12 500 kr + 2 500 kr per ej antecknad person.",
        },
      ],
    },

    // 7 ──────────────────────────────────────────────────────────────────
    {
      number: 7,
      title: "Försäkringar du faktiskt behöver",
      lead: "Rätt skydd kan vara ett krav från hyresvärden – och räddar dig den dag något går fel.",
      blocks: [
        {
          type: "paragraph",
          text: "En restaurang har många riskkällor: brand i köket, vattenskador, matförgiftning, stöld och avbrott i driften. Hyresvärdar kräver ofta att du har giltig försäkring, och en allvarlig skada utan rätt skydd kan stänga verksamheten. Läs villkoren noga – inte bara priset.",
        },
        {
          type: "list",
          items: [
            "**Företagsförsäkring med ansvarsförsäkring** – täcker skador du orsakar på tredje man och annan egendom, inklusive om en gäst blir skadad eller matförgiftad. Ofta ett krav i hyresavtalet.",
            "**Egendomsförsäkring** – skyddar inredning, kök och utrustning mot brand, vatten, inbrott och skadegörelse.",
            "**Avbrottsförsäkring** – ersätter utebliven intäkt om du måste hålla stängt efter en skada, t.ex. en köksbrand eller vattenläcka.",
            "**Allrisk-/maskinförsäkring** – täcker plötsliga skador på dyr köksutrustning som kyl, frys och fläktsystem.",
            "**Olycksfalls- och sjukavbrottsförsäkring** – ekonomiskt skydd för dig själv vid sjukdom eller olycka, särskilt viktigt i en liten verksamhet.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Fråga hyresvärd och försäkringsbolag vad som krävs",
          text: "Innan du tecknar – fråga din hyresvärd vilka försäkringskrav som finns i lokalkontraktet, och be försäkringsbolaget specificera att skyddet täcker just restaurangverksamhet (kök, fritös, gäster). Då slipper du upptäcka ett glapp först när skadan redan inträffat.",
        },
      ],
    },

    // 8 ──────────────────────────────────────────────────────────────────
    {
      number: 8,
      title: "Prissättning och lönsamhet",
      lead: "Så sätter du en meny och kalkyl som faktiskt lämnar vinst efter råvaror, personal och lokal.",
      blocks: [
        {
          type: "paragraph",
          text: "Restaurang är en bransch med låga marginaler där små fel i kalkylen får stora följder. De tre stora kostnaderna är **råvaror, personal och lokal** – tumregeln är att råvarukostnaden ska hållas inom en viss andel av priset och personalkostnaden inom en annan, så att det blir något kvar efter hyra och övriga kostnader. Räkna på varje rätt, inte bara på menyn som helhet.",
        },
        {
          type: "subheading",
          text: "Bygg din kalkyl",
        },
        {
          type: "list",
          items: [
            "Beräkna **råvarukostnaden per rätt** (food cost) och sätt priset utifrån en målsatt råvaruandel – inte efter känsla.",
            "Lägg in **personalkostnaden** inklusive arbetsgivaravgifter, OB och schemaluckor.",
            "Täck **lokal och fasta kostnader**: hyra, el, försäkring, kassa- och bokföringssystem, sophämtning.",
            "Ta höjd för **svinn och kassationer** – det som slängs måste ändå betalas av de rätter som säljs.",
            "Lägg på **vinstmarginal** så att verksamheten tål dyrare råvaror och svaga perioder.",
          ],
        },
        {
          type: "callout",
          variant: "fact",
          title: "Momsen påverkar din marginal",
          text: "Eftersom servering (12 %), hämtmat (6 %) och alkohol (25 %) har olika moms påverkar **försäljningsmixen** din faktiska marginal. Säkerställ att kassan och menyn är upplagda så att rätt moms läggs på automatiskt – annars riskerar du både fel redovisning och felräknad lönsamhet.",
          source: "Skatteverket (momssatser servering 12 %, hämtmat 6 %, alkohol 25 %).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Följ nyckeltalen varje vecka",
          text: "Lönsamhet i restaurang byggs vecka för vecka. Följ food cost, personalkostnad i procent av omsättningen och snittnota löpande. Justera meny, portioner och bemanning innan ett dåligt mönster hinner äta upp din buffert.",
        },
      ],
    },

    // 9 ──────────────────────────────────────────────────────────────────
    {
      number: 9,
      title: "Bokföring och skatt",
      lead: "Löpande ordning i ekonomin – och det restaurangägare oftast gör fel på.",
      blocks: [
        {
          type: "paragraph",
          text: "Alla företag är enligt bokföringslagen skyldiga att löpande bokföra sina affärshändelser och spara underlag. Restaurang är extra känsligt eftersom du hanterar mycket kontanter/kort, flera momssatser och personalliggare – för många restaurangägare är en redovisningsbyrå värd pengarna, eftersom den minskar risken för dyra fel.",
        },
        {
          type: "subheading",
          text: "Moms med flera satser",
        },
        {
          type: "paragraph",
          text: "Du redovisar moms månads-, kvartals- eller årsvis beroende på omsättning. Det stora i restaurang är att hålla isär **servering (12 %), hämtmat/livsmedel (6 %) och alkohol (25 %)** korrekt – både i kassan och i redovisningen. Ett kassa- och bokföringssystem som stödjer flera momssatser sparar mycket tid och förebygger fel.",
          source: "Skatteverket, redovisning av moms (flera satser i restaurang).",
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
          text: "Vanliga avdrag för restaurang",
        },
        {
          type: "list",
          items: [
            "**Råvaror och förbrukningsmaterial** – livsmedel, förpackningar, rengöring.",
            "**Köksutrustning och inredning** – större inköp skrivs ofta av över tid.",
            "**Lokalkostnader** – hyra, el, vatten, sophämtning, ventilationsservice.",
            "**Kassa-, boknings- och bokföringssystem** – programvara och licenser i verksamheten.",
            "**Personalkostnader** – löner, arbetsgivaravgifter och arbetskläder.",
            "**Försäkringar och tillstånds-/kontrollavgifter** – företags- och egendomsförsäkring, kommunala avgifter.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Spara alla underlag",
          text: "Kvitton, leverantörsfakturor, kassajournaler och personalliggare ska sparas enligt bokföringslagen och skatteförfarandelagen. Restaurang granskas hårt – ordnad dokumentation av kassa, moms och personal är ditt bästa skydd vid en kontroll.",
        },
      ],
    },

    // 10 ─────────────────────────────────────────────────────────────────
    {
      number: 10,
      title: "Att anställa",
      lead: "Från första medarbetaren: avgifter, kollektivavtal, personalliggare och ditt arbetsmiljöansvar.",
      blocks: [
        {
          type: "paragraph",
          text: "Restaurang är personalintensivt, och de flesta anställer redan från start. Men personal följer med kostnader och ansvar du måste ha koll på innan du skriver första anställningsavtalet.",
        },
        {
          type: "subheading",
          text: "Arbetsgivaravgifter",
        },
        {
          type: "paragraph",
          text: "Utöver lönen betalar du **arbetsgivaravgifter**. Normalsatsen 2026 är **31,42 %** av bruttolönen. På en månadslön på 30 000 kr betyder det runt 9 400 kr i arbetsgivaravgift utöver lönen – budgetera för det i din kalkyl (kapitel 8). Vissa nedsättningar kan finnas i särskilda fall; kontrollera aktuella regler hos Skatteverket.",
          source: "Skatteverket, arbetsgivaravgift normalsats 31,42 % (2026).",
        },
        {
          type: "subheading",
          text: "Kollektivavtal (Visita / HRF)",
        },
        {
          type: "paragraph",
          text: "Hotell- och restaurangbranschen är till stor del kollektivavtalsreglerad. Det dominerande avtalet är **Gröna riksavtalet** mellan arbetsgivarorganisationen **Visita** och **Hotell- och restaurangfacket (HRF)**, som reglerar bland annat minimilöner, OB-ersättning, arbetstider och försäkringar. Kontrollera aktuella lönenivåer och villkor direkt hos parterna innan du anställer.",
        },
        {
          type: "subheading",
          text: "Personalliggare och arbetsmiljöansvar",
        },
        {
          type: "paragraph",
          text: "Alla som arbetar i lokalen ska föras in i **personalliggaren** (kapitel 6) – det gäller även dig själv och tillfällig personal. Som arbetsgivare har du också ett **arbetsmiljöansvar**: du ska systematiskt undersöka och åtgärda risker, t.ex. heta ytor, halka, knivar, tunga lyft och stress under rusning, och se till att personalen har rätt introduktion. Brister kan ge sanktionsavgifter och, vid allvarliga fall, straffansvar.",
          source: "Skatteverket (personalliggare) och Arbetsmiljöverket (systematiskt arbetsmiljöarbete).",
        },
      ],
    },

    // 11 ─────────────────────────────────────────────────────────────────
    {
      number: 11,
      title: "Vanliga misstag och fallgropar",
      lead: "De dyraste nybörjarfelen i restaurangbranschen – och hur du undviker dem.",
      blocks: [
        {
          type: "list",
          items: [
            "**Fel moms på fel försäljning.** Att ta 12 % på hämtmat (ska vara 6 %) eller missa att alkohol alltid är 25 %. Lägg upp kassan rätt och håll isär servering, hämtmat och alkohol.",
            "**Glömma eller missköta personalliggaren.** Kontrollavgiften är hög (12 500 kr + 2 500 kr/person). Anteckna alla, varje dag, inklusive dig själv.",
            "**Saknat eller felaktigt kassaregister.** Certifierat kassaregister är ett krav vid kort-/kontantförsäljning – kontrollavgiften är 12 500 kr (25 000 kr vid upprepning).",
            "**Sen livsmedelsregistrering eller serveringstillstånd.** Båda har handläggningstid; sök i god tid så att öppningen inte försenas.",
            "**Underkapitalisering.** Att öppna utan buffert för de första månadernas hyra och löner. Räkna med en uppbyggnadsperiod.",
            "**Slarvig food cost-kalkyl.** Att inte räkna råvarukostnad per rätt och inte följa svinn. Små fel äter upp marginalen i en lågmarginalbransch.",
            "**Underskatta arbetsmiljö och hygien.** Brister i egenkontroll, brandskydd och arbetsmiljö kan ge avgifter, stängning och allvarliga skador.",
            "**Otydliga lokalavtal.** Långa hyresavtal med oklara villkor om ombyggnad och uppsägning kan bli en fälla. Läs och förhandla noga.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Det dyraste felet är att gissa",
          text: "Reglerna i restaurang ändras (momssatser, alkoholregler, kontrollkrav). Den nya livsmedelsmomsen på 6 % är dessutom tillfällig t.o.m. 31 december 2027. Bygg en vana att kontrollera aktuell uppgift hos Skatteverket, Livsmedelsverket och kommunen innan du sätter pris eller lovar något – och spara dokumentationen.",
        },
      ],
    },

    // 12 ─────────────────────────────────────────────────────────────────
    {
      number: 12,
      title: "Marknadsföring och dina första gäster",
      lead: "Så fyller du borden från start och bygger ett rykte som ger återkommande gäster.",
      blocks: [
        {
          type: "paragraph",
          text: "I restaurangbranschen avgörs mycket av **läge, recensioner och återkommande gäster**. Den första månadens intryck sätter ryktet, så lägg krut på att leverera jämn kvalitet och bra bemötande från dag ett. Här är de kanaler som ger mest för en nystartad restaurang.",
        },
        {
          type: "list",
          items: [
            "**Google-företagsprofil och karta.** De flesta hittar restauranger via sök och karta. Lägg upp meny, öppettider, bilder och be nöjda gäster om omdömen.",
            "**Recensioner och socialt bevis.** Goda omdömen på Google och relevanta plattformar väger tungt. Bemöt feedback professionellt.",
            "**Instagram och sociala medier.** Mat är visuellt – aptitliga bilder och dagens lunch/rätter når lokala gäster billigt.",
            "**Lokalt och nära.** Skyltning, lunchutbud till närliggande arbetsplatser och samarbete med grannföretag fyller borden på vardagar.",
            "**Lunch som ingång.** Många restauranger bygger kvällsgäster genom en stark, prisvärd lunch som lockar folk att komma tillbaka.",
            "**Återkommande gäster.** Stamgäster är billigast att behålla – jämn kvalitet, igenkänning och små extra omtanke ger lojalitet.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Kvalitet och jämnhet slår kampanjer",
          text: "Den billigaste marknadsföringen är en gäst som kommer tillbaka och tar med sig vänner. Satsa på jämn kvalitet, rimlig väntetid och ett varmt bemötande – det bygger det rykte som inga annonser kan köpa.",
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
            "Valt bolagsform (enskild firma eller AB) utifrån ansvar, skatt och risk",
            "Kontrollerat och valt företagsnamn hos Bolagsverket",
            "Registrerat företaget (AB: 1 900 kr e-tjänst, aktiekapital 25 000 kr insatt)",
            "Ansökt om F-skatt och momsregistrering hos Skatteverket",
            "Anmält verklig huvudman (AB)",
            "Öppnat företagskonto",
          ],
        },
        {
          type: "subheading",
          text: "Tillstånd, lokal och säkerhet",
        },
        {
          type: "checklist",
          items: [
            "Registrerat livsmedelsverksamheten hos kommunen (minst två veckor före öppning)",
            "Tagit fram egenkontroll baserad på HACCP",
            "Klarat kunskapsprov och ansökt om serveringstillstånd (om alkohol)",
            "Säkrat bygglov/ändrad användning, ventilation och brandskydd (SBA)",
            "Säkerställt rökfri miljö och rutin för allergeninformation",
          ],
        },
        {
          type: "subheading",
          text: "Ekonomi, moms och kontroll",
        },
        {
          type: "checklist",
          items: [
            "Skaffat certifierat kassaregister och satt rutin för personalliggare",
            "Lagt upp kassan med rätt moms: servering 12 %, hämtmat 6 %, alkohol 25 %",
            "Gjort food cost-kalkyl per rätt och satt meny med vinstmarginal",
            "Tecknat företags-, egendoms- och avbrottsförsäkring (kontrollerat hyresvärdens krav)",
            "Valt bokföringslösning som stödjer flera momssatser",
            "Säkerställt rörelsekapital för flera månaders drift",
          ],
        },
        {
          type: "subheading",
          text: "Innan öppning",
        },
        {
          type: "checklist",
          items: [
            "Skapat Google-företagsprofil med meny, öppettider och bilder",
            "Anställt och introducerat personal (kollektivavtal/villkor klara)",
            "Testkört kök, kassa och rutiner inför premiären",
            "Förberett marknadsföring inför öppningen lokalt och i sociala medier",
          ],
        },
      ],
    },

    // 14 ─────────────────────────────────────────────────────────────────
    {
      number: 14,
      title: "Resurser och myndighetskontakter",
      lead: "Spara den här sidan – här kontrollerar du aktuella momssatser, tillstånd och regler.",
      blocks: [
        {
          type: "paragraph",
          text: "Reglerna och beloppen i restaurangbranschen uppdateras – momssatser, alkoholregler och kommunala avgifter. Den sänkta livsmedelsmomsen på 6 % är dessutom tillfällig t.o.m. 31 december 2027. Använd länkarna nedan för att kontrollera aktuell uppgift direkt hos källan innan du sätter pris, fakturerar eller öppnar.",
        },
        {
          type: "links",
          items: [
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare – allt på ett ställe" },
            { label: "Skatteverket", url: "https://www.skatteverket.se", note: "Momssatser, kassaregister, personalliggare, arbetsgivaravgift, belopp och procent" },
            { label: "Livsmedelsverket", url: "https://www.livsmedelsverket.se", note: "Registrering, egenkontroll, HACCP, allergener" },
            { label: "Folkhälsomyndigheten", url: "https://www.folkhalsomyndigheten.se", note: "Serveringstillstånd, alkohollagen, kunskapsprov" },
            { label: "Bolagsverket", url: "https://www.bolagsverket.se", note: "Registrering, avgifter, namn, verklig huvudman" },
            { label: "Din kommun", url: "https://www.sverigeskommunerochregioner.se", note: "Livsmedelsregistrering, serveringstillstånd, bygglov – sök din kommun" },
            { label: "Visita", url: "https://www.visita.se", note: "Branschorganisation och kollektivavtal (Gröna riksavtalet)" },
            { label: "Hotell- och restaurangfacket", url: "https://www.hrf.net", note: "Kollektivavtal, löner och villkor" },
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

export default restaurang;
