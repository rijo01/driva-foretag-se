import type { GuideContent } from "./types";

// ──────────────────────────────────────────────────────────────────────────
// STARTGUIDE: TRÄDGÅRD & LANDSKAP
//
// YMYL – faktagranskad mot primärkälla. Verifierade uppgifter (juni 2026):
//  • Aktiekapital privat AB 25 000 kr; AB-reg 1 900 kr e-tjänst / 2 200 kr
//    blankett (Bolagsverket). Egenavgifter 28,97 % + schablonavdrag 25 %;
//    arbetsgivaravgift 31,42 % (Skatteverket). Moms 25 %. Momsbefrielse högst
//    120 000 kr/år.
//  • RUT-AVDRAG (50 % av arbetskostnaden) för TRÄDGÅRDSSKÖTSEL i/nära bostaden:
//    häck- och gräsklippning, krattning, ogräsrensning, beskärning samt
//    fällning/borttagande av träd och buskar (ej bortforsling), vattning/gödning
//    i samband med klippning, höstgrävning av land, omgrävning av kompost.
//    Material och maskinkostnad ger INTE avdrag. (Skatteverket.)
//  • INTE RUT (och normalt INTE ROT): ANLÄGGNINGSARBETE – sten-/plattläggning,
//    asfaltering, murar, uppfarter, staket, trädgårdsgångar, bryggor, plantering
//    av växter/buskar/träd, ny gräsmatta (sådd/rullgräs), design/planering,
//    dränering/schaktning, pergola/spaljéer/plank. (Skatteverket – vanlig
//    felkälla; "felaktiga avdrag för trädgårdsarbete".)
//  • ROT+RUT gemensamt tak 75 000 kr/person/år (RUT upp till hela taket).
//  • Personalliggare: ren trädgårdsskötsel omfattas inte; anläggningsarbete på
//    en byggarbetsplats kan omfattas av byggets personalliggare. (Skatteverket.)
//
// Där en exakt regel inte verifierats skrivs den kvalitativt. RUT-gränsdragningen
// för trädgård är en känd fälla – hänvisa till Skatteverkets lista.
// ──────────────────────────────────────────────────────────────────────────

const tradgard: GuideContent = {
  slug: "tradgard",
  industry: "Trädgård & Landskap",
  title: "Starta & driva trädgårdsföretag",
  subtitle: "Komplett startguide 2026",
  year: 2026,
  reviewedAt: "2026-06-04",
  reviewedSources: "Skatteverket & Bolagsverket",
  intro:
    "Den kompletta, faktagranskade guiden för dig som ska starta trädgårds- eller landskapsföretag i Sverige – från bolagsform och F-skatt till den knepiga gränsdragningen mellan RUT-grundande skötsel och anläggning utan avdrag, säsongsplanering, maskinpark, försäkring och din första kund. Varje siffra och regel är kontrollerad mot Skatteverket och Bolagsverket.",

  chapters: [
    // 1
    {
      number: 1,
      title: "Att driva trädgårdsföretag i Sverige",
      lead: "Vad branschen kräver av dig som företagare – och var den vanligaste fällan finns.",
      blocks: [
        {
          type: "paragraph",
          text: "Trädgårds- och landskapsbranschen har stadig efterfrågan: villaägare och bostadsrättsföreningar vill ha skötta tomter, och RUT-avdraget gör skötseltjänster märkbart billigare för privatkunder. Men branschen är starkt **säsongsbetonad**, och det finns en avgörande fälla många nya företagare går i: **gränsen mellan trädgårdsskötsel som ger RUT-avdrag och anläggningsarbete som inte ger något avdrag alls.** Den som har koll på den skillnaden – och planerar för säsongen – får ett tydligt försprång.",
        },
        {
          type: "paragraph",
          text: "Med **trädgårds- och landskapsföretag** menar vi i den här guiden företag som utför trädgårdsskötsel (gräs, häckar, ogräs, beskärning), anläggning (plattor, murar, planteringar, gräsmattor) och liknande utomhusarbete åt privatpersoner, bostadsrättsföreningar och företag. Reglerna skiljer sig åt beroende på om du utför skötsel eller anläggning, och åt vem du säljer.",
        },
        {
          type: "paragraph",
          text: "Tre saker präglar trädgårdsbranschen när du startar: **RUT-gränsdragningen** (skötsel ger ofta RUT, anläggning ger normalt inget avdrag – kapitel 6), **säsongen** (intensiva sommarmånader och tunna vintrar) och **maskinparken** (en investering som måste bära sig). De tre är genomgående teman i guiden.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Så använder du guiden",
          text: "Läs kapitel 1–6 innan du tar din första kund – de avgör bolagsform, tillstånd, moms och framför allt RUT-gränsdragningen. Kapitel 7–12 är drift: försäkring, pris och säsong, bokföring, personal och marknadsföring. Kapitel 13 är en komplett checklista, och kapitel 14 samlar alla myndighetskontakter.",
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
          text: "För de flesta trädgårdsföretag står valet mellan **enskild näringsverksamhet** (enskild firma) och **aktiebolag (AB)**. En säsongsbetonad verksamhet med maskininvesteringar gör att både skatte- och ansvarsfrågan är värd att tänka igenom.",
        },
        {
          type: "subheading",
          text: "Enskild firma",
        },
        {
          type: "paragraph",
          text: "Enklast och billigast att starta. Du och företaget är samma juridiska person, vilket betyder att du har **personligt ansvar** för företagets skulder. Du betalar **egenavgifter** på överskottet (28,97 % för aktiv näringsverksamhet 2026, med ett schablonavdrag på 25 % innan avgiften beräknas) och inkomsten beskattas som din lön. Passar bra för en mindre, säsongsbetonad verksamhet du börjar ensam.",
          source: "Skatteverket, egenavgifter 28,97 % och schablonavdrag 25 % (2026).",
        },
        {
          type: "subheading",
          text: "Aktiebolag",
        },
        {
          type: "paragraph",
          text: "Ett aktiebolag är en egen juridisk person. Ditt personliga ansvar begränsas i normalfallet till **aktiekapitalet på 25 000 kr** (lägsta tillåtna för privat AB) – relevant när du investerar i maskiner och tar större anläggningsuppdrag. Bostadsrättsföreningar och företagskunder arbetar ofta hellre med AB, och formen gör det enklare att anställa (även säsong) och bygga ett företagsvärde. Du anställs av ditt eget bolag och tar ut lön.",
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
            ["Förtroende hos föreningar/företag", "Lägre", "Högre"],
            ["Administration", "Enklare bokföring", "Årsredovisning, mer formalia"],
          ],
          source: "Bolagsverket och Skatteverket (aktiekapital 25 000 kr, egenavgifter 28,97 % 2026).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Tumregel för trädgårdsföretag",
          text: "Börjar du ensam med skötseluppdrag åt privatkunder kan enskild firma räcka. Investerar du i maskinpark, tar anläggningsentreprenader eller anställer (även säsong) – välj AB för ansvarsbegränsningens skull.",
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
      title: "Tillstånd, krav och säkerhet",
      lead: "Trädgårdsarbete kräver ingen yrkesauktorisation – men maskiner och avfall ställer krav.",
      blocks: [
        {
          type: "paragraph",
          text: "Det krävs **ingen yrkesauktorisation enligt lag** för att starta trädgårdsföretag. Men det finns krav kring F-skatt, maskinsäkerhet och avfall att hantera. Gå igenom punkterna nedan.",
        },
        {
          type: "subheading",
          text: "F-skatt och registrering (Skatteverket)",
        },
        {
          type: "paragraph",
          text: "**F-skatt** är grunden. Den visar att du själv betalar din skatt och dina egenavgifter, och krävs i praktiken av seriösa kunder – särskilt föreningar och företag. Du ansöker gratis hos **Skatteverket** via verksamt.se, samtidigt som du registrerar företaget och anmäler moms (samt arbetsgivare om du ska anställa).",
        },
        {
          type: "subheading",
          text: "Maskiner, fordon och säkerhet",
        },
        {
          type: "paragraph",
          text: "Trädgårdsarbete innebär maskiner med skaderisk (gräsklippare, röjsåg, motorsåg, flismaskin) och ofta släp och transport. Du ska följa Arbetsmiljöverkets regler om säker användning av arbetsutrustning, använda skyddsutrustning och se till att den som kör maskiner och fordon har rätt behörighet (t.ex. körkortsbehörighet för släp). Arbete med motorsåg och vissa maskiner kan kräva särskild utbildning – kontrollera vad som gäller för dina arbetsmoment.",
          source: "Arbetsmiljöverket (säker användning av arbetsutrustning och skyddsutrustning).",
        },
        {
          type: "subheading",
          text: "Trädgårdsavfall och växtskydd",
        },
        {
          type: "paragraph",
          text: "Du hanterar ofta stora mängder **trädgårdsavfall** (ris, grenar, jord) som ska tas om hand korrekt enligt kommunens regler. Använder du växtskyddsmedel kan särskild behörighet krävas, och vissa invasiva växter omfattas av särskilda hanteringsregler. Stäm av avfallshantering och eventuella behörigheter med kommunen och berörda myndigheter.",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Personalliggare – oftast inte, men kolla byggarbetsplatser",
          text: "Ren trädgårdsskötsel omfattas **inte** av kravet på elektronisk personalliggare. **Undantag:** utför du anläggningsarbete på en **byggarbetsplats** kan personalen behöva registreras i byggets personalliggare. Säkerställ rutinen om du tar sådana uppdrag.",
          source: "Skatteverket, personalliggare (trädgårdsskötsel ej listad; bygg omfattar arbete på byggarbetsplats).",
        },
        {
          type: "links",
          items: [
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare" },
            { label: "Skatteverket", url: "https://www.skatteverket.se", note: "F-skatt, moms, RUT-avdrag och lista över rutarbeten" },
            { label: "Arbetsmiljöverket", url: "https://www.av.se", note: "Maskinsäkerhet, motorsåg, skyddsutrustning" },
          ],
        },
      ],
    },

    // 4
    {
      number: 4,
      title: "Startkapital, maskinpark och kostnader",
      lead: "Vad det faktiskt kostar att komma igång – maskiner och transport är de stora posterna.",
      blocks: [
        {
          type: "paragraph",
          text: "Ett trädgårdsföretag kan startas smått (handredskap och skötseluppdrag) eller stort (maskinpark och anläggning). Maskiner, släp och transport är de tyngsta posterna. Här är de poster du bör budgetera för. Myndighetsavgifter anges som fastställda belopp; övriga poster som kostnadsslag att räkna på.",
        },
        {
          type: "table",
          columns: ["Post", "Kommentar"],
          rows: [
            ["Aktiekapital (om AB)", "25 000 kr – sätts in på företagskonto, är ditt och kan användas i driften"],
            ["Registrering AB hos Bolagsverket", "1 900 kr via e-tjänst på verksamt.se (2 200 kr med pappersblankett)"],
            ["F-skatt och momsregistrering", "Gratis hos Skatteverket"],
            ["Maskiner och redskap", "Gräsklippare, röjsåg, häcksax, motorsåg, flismaskin – stor startpost"],
            ["Fordon och släp", "Transport av personal, maskiner och avfall + drivmedel och försäkring"],
            ["Skyddsutrustning", "Hörsel-, ögon- och skärskydd, handskar och kläder"],
            ["Anläggningsutrustning (vid anläggning)", "Minigrävare, vibroplatta m.m. – köp eller hyra"],
            ["Försäkringar", "Ansvars-, maskin- och fordonsförsäkring (se kapitel 7)"],
            ["Avfallshantering", "Tippavgifter och transport av trädgårdsavfall"],
            ["Boknings- och faktureringssystem", "System med stöd för RUT-fakturering"],
          ],
          source: "Bolagsverket (1 900 kr AB e-tjänst, 25 000 kr aktiekapital); Skatteverket (F-skatt/moms gratis).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Hyr innan du köper de dyra maskinerna",
          text: "Anläggningsmaskiner (minigrävare, vibroplatta) används bara ibland och är dyra att äga. Hyr dem per projekt tills volymen motiverar köp. Det håller nere kapitalbindningen och låter dig växa i takt med uppdragen – viktigt i en säsongsbransch.",
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
              text: "Sök på Bolagsverkets namnsöktjänst att namnet är ledigt. För AB registreras namnet i samband med bolaget; för enskild firma kan du registrera och skydda namnet separat.",
            },
            {
              title: "Registrera företaget hos Bolagsverket",
              text: "AB registreras via e-tjänsten på **verksamt.se** för **1 900 kr** (stiftelseurkund, bolagsordning och bankintyg på aktiekapitalet 25 000 kr). Enskild firma behöver inte registreras, men du kan göra det för att skydda namnet.",
            },
            {
              title: "Ansök om F-skatt hos Skatteverket",
              text: "Görs gratis via verksamt.se. F-skatt är ett krav i praktiken för att få uppdrag, särskilt från föreningar och företag.",
            },
            {
              title: "Momsregistrera dig",
              text: "Anmäl moms i samma ärende. Trädgårdstjänster har moms 25 % (befrielse möjlig först vid omsättning på högst 120 000 kr/år – se kapitel 6).",
            },
            {
              title: "Registrera dig för rutavdrag hos Skatteverket",
              text: "Vill du erbjuda RUT på skötseluppdrag till privatkunder – registrera dig för Skatteverkets e-tjänst för rot och rut så att du kan begära utbetalning av skattereduktionen.",
            },
            {
              title: "Registrera dig som arbetsgivare (om du ska anställa)",
              text: "Ska du ha personal, även säsong, anmäler du dig som arbetsgivare hos Skatteverket via verksamt.se. Då börjar du redovisa arbetsgivaravgifter och avdragen skatt (se kapitel 10).",
            },
            {
              title: "Anmäl verklig huvudman",
              text: "AB ska anmäla verklig huvudman till Bolagsverket, normalt inom fyra veckor från registreringen.",
            },
            {
              title: "Öppna företagskonto, teckna försäkring och ordna bokföring",
              text: "Skaffa företagskonto (krav för AB), teckna ansvars- och maskinförsäkring (kapitel 7) och bestäm bokföringslösning med RUT-stöd (kapitel 9) innan du tar första uppdraget.",
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
      title: "RUT, ROT och moms: gränsdragningen som fäller många",
      lead: "Skötsel ger ofta RUT – men anläggning ger normalt inget avdrag alls. Få det rätt.",
      blocks: [
        {
          type: "paragraph",
          text: "Den vanligaste och dyraste fällan i trädgårdsbranschen är att lova kunden RUT på arbete som inte ger avdrag. Skatteverket har särskilt påpekat att felaktiga avdrag för trädgårdsarbete är vanliga. Här är vad som gäller – kontrollera alltid mot Skatteverkets lista över rutarbeten.",
        },
        {
          type: "subheading",
          text: "Trädgårdsskötsel som ger RUT (50 %)",
        },
        {
          type: "paragraph",
          text: "**Skötselarbete** i eller i nära anslutning till en privatpersons bostad ger **RUT-avdrag på arbetskostnaden – 50 % för 2026**. Exempel på RUT-grundande arbeten: **häck- och gräsklippning, krattning, ogräsrensning, beskärning samt fällning och borttagande av träd och buskar** (men inte bortforsling), **vattning och gödning i samband med klippning/rensning**, **höstgrävning av land** och **omgrävning av kompost**. ROT och RUT delar ett gemensamt tak på **75 000 kr per person och år**, där RUT kan utnyttja hela taket. Material- och maskinkostnad ger inte avdrag.",
          source: "Skatteverket, rutavdrag för trädgårdsarbete (50 % av arbetskostnaden; gemensamt tak 75 000 kr/person/år).",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Anläggning ger normalt VARKEN RUT ELLER ROT",
          text: "**Anläggningsarbete ger inte rutavdrag** – och räknas normalt **inte heller** som ROT. Det gäller t.ex. **sten- och plattläggning, asfaltering, murar, uppfarter, staket, trädgårdsgångar, bryggor, plantering av växter/buskar/träd, anläggning av ny gräsmatta (sådd eller rullgräs), trädgårdsdesign och planering, dränering och schaktning samt byggnation av pergola, spaljéer och plank**. Lova aldrig en kund avdrag för anläggning – kontrollera alltid mot Skatteverkets lista innan du offererar.",
          source: "Skatteverket, lista över rutarbeten (anläggningsarbete ger inte rutavdrag; vanlig felkälla).",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Tre lägen att hålla isär",
          text: "**1) Skötsel åt privatperson:** moms 25 % och ofta RUT 50 % på arbetskostnaden. **2) Anläggning åt privatperson:** moms 25 %, normalt inget avdrag. **3) Arbete åt företag/förening:** moms 25 % (eller omvänd byggmoms om det är en byggtjänst åt ett byggföretag). Avgör alltid först vilket läge du är i innan du offererar.",
          source: "Skatteverket (RUT endast för skötsel i privatbostad; moms 25 %).",
        },
        {
          type: "subheading",
          text: "Så fungerar RUT i praktiken",
        },
        {
          type: "paragraph",
          text: "RUT fungerar som en **fakturamodell**: du drar av kundens skattereduktion direkt på fakturan, kunden betalar mellanskillnaden, och du begär resten från Skatteverket. Du måste **specificera arbetskostnaden separat** (material och maskiner ger inget avdrag), arbetet ska ske i/vid kundens bostad, kunden måste ha tillräckligt **skatteutrymme**, och du behöver kundens **personnummer**. Får du avslag riskerar du att stå för mellanskillnaden – dubbelkolla alltid.",
          source: "Skatteverket, fakturamodellen för rot och rut.",
        },
      ],
    },

    // 7
    {
      number: 7,
      title: "Försäkringar du faktiskt behöver",
      lead: "Rätt skydd när du arbetar med tunga maskiner på andras tomter.",
      blocks: [
        {
          type: "paragraph",
          text: "Trädgårdsarbete innebär maskiner med stor skaderisk och arbete på kunders egendom – ett feltramp med grävaren eller en sten som slungas iväg från gräsklipparen kan orsaka dyra skador. Ansvarsförsäkring är därför i praktiken nödvändig, och föreningar och företag kräver ofta att du kan visa giltigt skydd. Läs villkoren, inte bara priset.",
        },
        {
          type: "list",
          items: [
            "**Företagsförsäkring med ansvarsförsäkring** – täcker skador du orsakar på kundens egendom eller på tredje person (t.ex. fönster, bil eller person träffad av material).",
            "**Maskin- och egendomsförsäkring** – skyddar din maskinpark mot brand, stöld och haveri, på arbetsplatsen och i släp/förråd.",
            "**Fordons- och släpförsäkring** – trafikförsäkring är lagstadgad; lägg till skydd för fordon, släp och lastad utrustning.",
            "**Entreprenad-/allriskförsäkring** – relevant vid större anläggningsuppdrag, skyddar arbete och material under projekttiden.",
            "**Olycksfalls- och sjukavbrottsförsäkring** – ekonomiskt skydd för dig själv i ett fysiskt yrke med maskinrisker.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Stöldskydd för maskiner",
          text: "Trädgårdsmaskiner är stöldbegärliga och förvaras ofta i släp och förråd. Kontrollera att din försäkring täcker stöld även utanför fast lokal, och investera i lås och märkning. Stöld av maskinparken mitt i högsäsong kan stoppa hela verksamheten.",
        },
      ],
    },

    // 8
    {
      number: 8,
      title: "Prissättning, säsong och lönsamhet",
      lead: "Så sätter du pris och planerar året så att du tjänar pengar trots säsongen.",
      blocks: [
        {
          type: "paragraph",
          text: "Trädgårdsbranschen är starkt säsongsbetonad – intäkterna koncentreras till några intensiva månader, medan vintern är tunn. Lönsamheten avgörs av att du prissätter rätt under högsäsong och planerar för helåret. Ditt pris ska täcka lön, sociala avgifter, maskiner, transport, försäkring, avfall och vinst. Räkna baklänges från vad du behöver per år, inte per sommarmånad.",
        },
        {
          type: "subheading",
          text: "Bygg upp ditt pris",
        },
        {
          type: "list",
          items: [
            "Utgå från din **önskade årslön** och lägg på sociala avgifter, pension och semester.",
            "Lägg till **fasta kostnader**: maskiner (köp/avskrivning, service), fordon, försäkring, avfall, administration.",
            "Räkna med **säsongen** – årslönen ska tjänas in på relativt få månader. Det höjer det pris du behöver under högsäsong.",
            "Skilj på **RUT-skötsel** (visa pris efter avdrag för privatkund) och **anläggning** (inget avdrag, var tydlig).",
            "Lägg på **vinstmarginal** och en buffert för regn- och stilleståndsdagar.",
          ],
        },
        {
          type: "subheading",
          text: "Jämna ut säsongen",
        },
        {
          type: "paragraph",
          text: "Bygg en affär som håller hela året: **löpande skötselavtal** (gräs och rabatter under säsong) ger återkommande intäkter, och du kan fylla axlarna av säsongen med **vårstädning, höststädning, lövupptagning, beskärning** och under vintern **snöröjning och halkbekämpning**. Ett tydligt skötselavtal med privatkunder och föreningar ger en stabilare omsättning än enstaka uppdrag.",
        },
        {
          type: "callout",
          variant: "fact",
          title: "RUT-effekten i din offert",
          text: "På RUT-grundande skötsel blir arbetet märkbart billigare för privatkunden utan att du sänker ditt pris: på en arbetskostnad på 4 000 kr blir kundens nettokostnad 2 000 kr efter 50 % rutavdrag (inom taket). Visa både bruttopris och pris efter RUT – men bara på de arbeten som faktiskt ger avdrag (kapitel 6).",
          source: "Räkneexempel baserat på rutavdrag 50 % av arbetskostnaden 2026 (Skatteverket).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Skriftlig offert – alltid",
          text: "Lämna alltid skriftlig offert med tydlig avgränsning av vad som ingår, vad som är RUT-grundande och inte, hur tillägg hanteras, samt pris och giltighetstid. Det förebygger tvister – särskilt kring vilka arbeten som ger avdrag.",
        },
      ],
    },

    // 9
    {
      number: 9,
      title: "Bokföring och skatt",
      lead: "Löpande ordning i ekonomin – och det trädgårdsföretag ofta gör fel med RUT.",
      blocks: [
        {
          type: "paragraph",
          text: "Alla företag är enligt bokföringslagen skyldiga att löpande bokföra sina affärshändelser och spara underlag. Trädgårdsföretag har säsongssvängningar, RUT-fakturering och maskininvesteringar – ett bra system och ofta en redovisningsbyrå underlättar.",
        },
        {
          type: "subheading",
          text: "RUT i bokföringen",
        },
        {
          type: "paragraph",
          text: "RUT innebär att en del av betalningen kommer från **kunden** och en del från **Skatteverket**. Det ska redovisas korrekt, och arbetskostnaden (som ger avdrag) ska hållas isär från material och maskiner (som inte gör det). Ett system med RUT-stöd som håller reda på utestående utbetalningar sparar tid och förebygger fel.",
          source: "Skatteverket, rot- och rutavdrag (fakturamodellen).",
        },
        {
          type: "subheading",
          text: "Maskiner och avskrivning",
        },
        {
          type: "paragraph",
          text: "Dyra maskiner bokförs normalt som **inventarier och skrivs av** över sin livslängd i stället för att kostnadsföras direkt. Det jämnar ut resultatet och påverkar skatten. Mindre redskap kan dras direkt. Prata med din bokförare om avskrivning och om köp kontra leasing/hyra.",
        },
        {
          type: "subheading",
          text: "F-skatt, preliminärskatt och säsongen",
        },
        {
          type: "paragraph",
          text: "Med **F-skatt** betalar du själv in din skatt och dina egenavgifter (enskild firma) eller bolagets skatt (AB). Skatteverket beslutar en **preliminärskatt** som du betalar varje månad – men eftersom intäkterna är säsongsbetonade är det viktigt att lägga undan pengar under högsäsong för skatt, moms och vinterns lägre intäkter. Justera prognosen hos Skatteverket efter säsongens utfall.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Spara alla underlag",
          text: "Kvitton, fakturor, avtal och RUT-underlag (med kunduppgifter och specificerad arbetskostnad) ska sparas enligt bokföringslagen. Eftersom RUT innebär utbetalning från Skatteverket – och felaktiga trädgårdsavdrag är vanliga – är ordnad dokumentation ditt bästa skydd vid en kontroll.",
        },
      ],
    },

    // 10
    {
      number: 10,
      title: "Att anställa",
      lead: "Från första medarbetaren: avgifter, säsongsanställning och arbetsmiljö.",
      blocks: [
        {
          type: "paragraph",
          text: "Trädgårdsbranschen är personalintensiv under högsäsong, och många företag växer genom säsongsanställningar. Det följer med kostnader och ansvar du måste ha koll på.",
        },
        {
          type: "subheading",
          text: "Arbetsgivaravgifter",
        },
        {
          type: "paragraph",
          text: "Utöver lönen betalar du **arbetsgivaravgifter**. Normalsatsen 2026 är **31,42 %** av bruttolönen. På en månadslön på 30 000 kr betyder det runt 9 400 kr i arbetsgivaravgift utöver lönen – budgetera för det i din prissättning (kapitel 8). Vissa nedsättningar kan finnas i särskilda fall; kontrollera aktuella regler hos Skatteverket.",
          source: "Skatteverket, arbetsgivaravgift normalsats 31,42 % (2026).",
        },
        {
          type: "subheading",
          text: "Säsongsanställning",
        },
        {
          type: "paragraph",
          text: "Säsongsbetonad verksamhet kan anställa för en avgränsad säsong, men reglerna i anställningsskyddslagen (LAS) och eventuella kollektivavtal gäller. Var noga med korrekta anställningsavtal, anställningsform och villkor. Kontrollera vad som gäller för säsongsanställning – och vilka kollektivavtal som kan vara tillämpliga i din verksamhet – innan du anställer.",
        },
        {
          type: "subheading",
          text: "Arbetsmiljöansvar",
        },
        {
          type: "paragraph",
          text: "Som arbetsgivare har du ett **arbetsmiljöansvar**: arbete med motorsåg, röjsåg och maskiner innebär hög skaderisk. Du ska bedriva systematiskt arbetsmiljöarbete, ge introduktion och utbildning på maskinerna, se till att skyddsutrustning används och riskbedöma arbetet. Olyckor med maskiner kan vara allvarliga och ge sanktionsavgifter.",
          source: "Arbetsmiljöverket, systematiskt arbetsmiljöarbete och maskinsäkerhet.",
        },
      ],
    },

    // 11
    {
      number: 11,
      title: "Vanliga misstag och fallgropar",
      lead: "De dyraste nybörjarfelen i trädgårdsbranschen – och hur du undviker dem.",
      blocks: [
        {
          type: "list",
          items: [
            "**Lova RUT på anläggning.** Sten-/plattläggning, planteringar, ny gräsmatta och liknande ger inget rutavdrag. Kontrollera mot Skatteverkets lista innan du offererar.",
            "**Blanda ihop skötsel och anläggning på fakturan.** Bara den RUT-grundande skötseldelen ger avdrag; specificera arbetskostnaden separat.",
            "**Glömma att material och maskiner inte ger avdrag.** Endast arbetskostnaden är RUT-grundande – var tydlig mot kunden.",
            "**Prissätta efter sommaren, inte året.** Årslönen ska tjänas in på få månader. Räkna med säsongen i ditt timpris.",
            "**Ingen plan för lågsäsong.** Utan skötselavtal, höst-/vårstädning och vinterjobb (snöröjning) blir omsättningen ojämn.",
            "**Underförsäkrad maskinpark.** Stöld eller haveri mitt i högsäsong kan stoppa verksamheten. Kontrollera stöld- och maskinskydd.",
            "**Slarv med maskinsäkerhet.** Motorsåg och röjsåg utan rätt skydd och utbildning ger allvarliga skador och sanktionsavgifter.",
            "**Oklar avfallshantering.** Trädgårdsavfall och tippavgifter ska in i kalkylen och hanteras enligt kommunens regler.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Det dyraste felet är att gissa",
          text: "RUT-gränsdragningen för trädgård är en känd fälla och Skatteverket granskar den. Bygg en vana att kontrollera mot Skatteverkets lista över rutarbeten innan du lovar en kund avdrag – och spara dokumentationen.",
        },
      ],
    },

    // 12
    {
      number: 12,
      title: "Marknadsföring och dina första kunder",
      lead: "Så får du de första uppdragen och bygger en stock av skötselavtal.",
      blocks: [
        {
          type: "paragraph",
          text: "I trädgårdsbranschen kommer många kunder via **lokal synlighet och rekommendationer**, och eftersom skötsel köps löpande är varje ny kund potentiellt återkommande intäkt i flera säsonger. Det viktigaste är att synas lokalt inför säsongen, vara snabb att svara och tydlig om vad som ger RUT. Här är de kanaler som ger mest för ett nystartat trädgårdsföretag.",
        },
        {
          type: "list",
          items: [
            "**Google – sökning och karta.** Skapa en Google-företagsprofil så att du syns när någon söker trädgårdshjälp i ditt område. Be nöjda kunder om omdömen.",
            "**Före- och efterbilder.** Trädgårdsarbete är visuellt – visa förvandlingar på hemsida och i sociala medier.",
            "**Lokal synlighet inför säsong.** Dekaler på bil och släp, flyers i villaområden och anslag i lokala grupper – timingen mot vårsäsongen är viktig.",
            "**Skötselavtal till föreningar.** Bostadsrättsföreningar och samfälligheter ger större, återkommande uppdrag – sök upp dem direkt.",
            "**Förmedlingstjänster.** Plattformar som matchar hantverkare/trädgårdsföretag och kunder kan ge de första jobben.",
            "**Tydlighet om RUT.** Att visa pris efter rutavdrag på skötsel är ett starkt säljargument mot privatkunder.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Återkommande skötsel är guld",
          text: "Ett löpande skötselavtal ger förutsägbar intäkt säsong efter säsong och är mer värt än enstaka jobb. Använd enstaka uppdrag (t.ex. en vårstädning) som väg in till ett löpande avtal, och bygg din affär kring återkommande kunder.",
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
            "Valt bolagsform (enskild firma eller AB) utifrån ansvar, skatt och maskininvestering",
            "Kontrollerat och valt företagsnamn hos Bolagsverket",
            "Registrerat företaget (AB: 1 900 kr e-tjänst, aktiekapital 25 000 kr insatt)",
            "Ansökt om F-skatt och momsregistrerat företaget",
            "Anmält verklig huvudman (AB) och öppnat företagskonto",
          ],
        },
        {
          type: "subheading",
          text: "RUT, säkerhet och maskiner",
        },
        {
          type: "checklist",
          items: [
            "Registrerat dig för Skatteverkets e-tjänst för rot och rut",
            "Lärt dig gränsen: skötsel ger RUT, anläggning ger normalt inget avdrag",
            "Skaffat skyddsutrustning och rätt utbildning/behörighet för maskiner",
            "Satt rutin för trädgårdsavfall och tippning",
          ],
        },
        {
          type: "subheading",
          text: "Ekonomi och försäkring",
        },
        {
          type: "checklist",
          items: [
            "Tecknat ansvars-, maskin- och fordonsförsäkring (inkl. stöldskydd)",
            "Satt pris baklänges från årslön, med säsongen inräknad",
            "Bestämt hur RUT-skötsel och anläggning prissätts och specificeras",
            "Valt bokföringslösning med RUT-stöd",
          ],
        },
        {
          type: "subheading",
          text: "Inför säsong och första uppdraget",
        },
        {
          type: "checklist",
          items: [
            "Tagit fram offertmall som skiljer RUT-grundande arbete från anläggning",
            "Skapat Google-profil och enkel hemsida med referensbilder",
            "Satt en plan för att jämna ut säsongen (skötselavtal, höst/vinterjobb)",
            "Säkerställt likviditet/kassareserv för lågsäsong",
          ],
        },
      ],
    },

    // 14
    {
      number: 14,
      title: "Resurser och myndighetskontakter",
      lead: "Spara den här sidan – här kontrollerar du aktuella RUT-regler, moms och avgifter.",
      blocks: [
        {
          type: "paragraph",
          text: "Reglerna kring RUT och moms uppdateras, och gränsdragningen för trädgård är knepig. Använd länkarna nedan för att kontrollera aktuell uppgift direkt hos källan innan du lovar en kund avdrag, prissätter eller anställer.",
        },
        {
          type: "links",
          items: [
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare – allt på ett ställe" },
            { label: "Skatteverket – rot och rut", url: "https://www.skatteverket.se", note: "Rutavdrag för trädgårdsarbete, lista över rutarbeten, fakturamodellen" },
            { label: "Bolagsverket", url: "https://www.bolagsverket.se", note: "Registrering, avgifter, namn, verklig huvudman" },
            { label: "Arbetsmiljöverket", url: "https://www.av.se", note: "Maskinsäkerhet, motorsåg, skyddsutrustning" },
            { label: "Din kommun", url: "https://www.verksamt.se", note: "Avfallshantering och eventuella behörigheter (växtskydd)" },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Vill du bolla ditt upplägg med en rådgivare?",
          text: "Den här guiden tar dig långt på egen hand. Vill du dubbelkolla val av bolagsform, RUT-hantering eller prissättning med en expert kan vi matcha dig med en rådgivare kostnadsfritt på driva-foretag.se/hitta-radgivare.",
        },
      ],
    },
  ],
};

export default tradgard;
