import type { GuideContent } from "./types";

// ──────────────────────────────────────────────────────────────────────────
// STARTGUIDE: SNICKERI & HANTVERK
//
// YMYL – faktagranskad mot primärkälla. Verifierade uppgifter (juni 2026):
//  • Aktiekapital privat AB: 25 000 kr (Bolagsverket)
//  • AB-nyregistrering: 1 900 kr e-tjänst / 2 200 kr blankett (Bolagsverket)
//  • Momsbefrielse-gräns: omsättning ≤ 120 000 kr/år (Skatteverket, fr.o.m.
//    1 jan 2025); moms normalsats 25 %
//  • Omvänd byggmoms: köparen redovisar momsen – ML (2023:200) 16 kap. 13 §
//    (snickeri som byggtjänst på byggprojekt)
//  • ROT-avdrag 2026: 30 % av arbetskostnaden, max 50 000 kr/person/år; ROT+RUT
//    max 75 000 kr/person/år (Skatteverket; tillfälliga 50 % gällde 12 maj–
//    31 dec 2025 och har upphört). ROT förutsätter arbete I/i anslutning till
//    kundens bostad – fast inredning monterad på plats kan ge ROT, medan
//    tillverkning av lösa möbler i egen verkstad inte ger ROT. Kontrollera
//    gränsdragningen mot Skatteverkets lista över rotarbeten.
//  • Arbetsgivaravgift 2026: 31,42 %; egenavgifter 28,97 % + schablonavdrag 25 %
//  • Personalliggare bygg: 12 500 kr + 2 500 kr/oregistrerad; 25 000 kr om
//    byggstart ej anmälts (Skatteverket). Snickeri på byggarbetsplats omfattas av
//    byggets personalliggare; ren verkstadstillverkning gör det inte.
//  • Maskinsäkerhet/arbetsmiljö: Arbetsmiljöverkets regler om maskiner, buller,
//    trädamm och utrymning gäller i verkstaden.
//  • F-skatt: registrering gratis hos Skatteverket via verksamt.se
//
// Där en exakt siffra inte gått att verifiera mot primärkälla skrivs den
// kvalitativt ("kontrollera aktuell uppgift hos …") – aldrig gissad.
// ──────────────────────────────────────────────────────────────────────────

const snickeri: GuideContent = {
  slug: "snickeri",
  industry: "Snickeri & Hantverk",
  title: "Starta & driva snickeri",
  subtitle: "Komplett startguide 2026",
  year: 2026,
  reviewedAt: "2026-06-04",
  reviewedSources: "Skatteverket, Bolagsverket & Arbetsmiljöverket",
  intro:
    "Den kompletta, faktagranskade guiden för dig som ska starta snickeri eller hantverksföretag i Sverige – från bolagsform och F-skatt till verkstad och maskinsäkerhet, omvänd byggmoms, ROT-avdragets gränsdragning, försäkringar, prissättning och din första kund. Varje siffra är kontrollerad mot Skatteverket och Bolagsverket.",

  chapters: [
    // 1 ──────────────────────────────────────────────────────────────────
    {
      number: 1,
      title: "Att driva snickeri i Sverige",
      lead: "Vad branschen kräver av dig som företagare – och vad som gör den lönsam.",
      blocks: [
        {
          type: "paragraph",
          text: "Snickeri spänner över ett brett fält: från bygg- och inredningssnickeri ute hos kund till möbel- och specialsnickeri i egen verkstad. Gemensamt är ett hantverkskunnande som efterfrågas stadigt – men där lönsamheten avgörs av att du prissätter ditt arbete rätt, håller ordning på maskinkostnader och förstår de två helt olika momslägena: att sälja en **tjänst** (montering hos kund) och att sälja en **vara** (en möbel du tillverkat).",
        },
        {
          type: "paragraph",
          text: "Med **snickeri** menar vi i den här guiden företag som utför bygg- och inredningssnickeri, monterar fast inredning, tillverkar specialsnickerier och möbler samt utför reparationer åt privatpersoner, byggföretag och företag. Reglerna i guiden gäller i grunden lika oavsett storlek, men en sak avgör hur du fakturerar: **var och åt vem arbetet utförs**.",
        },
        {
          type: "paragraph",
          text: "Tre saker präglar snickeribranschen när du startar: **verkstaden och maskinparken** (en betydande startkostnad och ett arbetsmiljöansvar), **ROT-avdragets gränsdragning** (när snickeri räknas som ROT-grundande arbete och inte) och **momsreglerna** (tjänst kontra vara, omvänd byggmoms mellan byggföretag och ROT mot privatpersoner). De tre är genomgående teman i guiden.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Så använder du guiden",
          text: "Läs kapitel 1–6 innan du tar din första kund – de avgör bolagsform, verkstad, moms och hur du hanterar ROT rätt. Kapitel 7–12 är drift: försäkring, pris, bokföring, anställda och marknadsföring. Kapitel 13 är en komplett checklista du kan kryssa av, och kapitel 14 samlar alla myndighetskontakter med länkar.",
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
          text: "För de flesta snickerier står valet mellan **enskild näringsverksamhet** (enskild firma) och **aktiebolag (AB)**. Båda fungerar utmärkt – men de skiljer sig åt på fyra punkter: personligt ansvar, kapitalkrav, skatt och förtroende hos beställare. Har du dyr maskinpark och tar större uppdrag väger ansvarsfrågan tyngre.",
        },
        {
          type: "subheading",
          text: "Enskild firma",
        },
        {
          type: "paragraph",
          text: "Enklast och billigast att starta. Du och företaget är samma juridiska person, vilket betyder att du har **personligt ansvar** för företagets skulder. Du betalar **egenavgifter** på överskottet (28,97 % för aktiv näringsverksamhet 2026, med ett schablonavdrag på 25 % innan avgiften beräknas) och inkomsten beskattas som din lön. Passar bra när du startar ensam, har låg risk och vill komma igång snabbt.",
          source: "Skatteverket, egenavgifter 28,97 % och schablonavdrag 25 % (2026).",
        },
        {
          type: "subheading",
          text: "Aktiebolag",
        },
        {
          type: "paragraph",
          text: "Ett aktiebolag är en egen juridisk person. Ditt personliga ansvar begränsas i normalfallet till **aktiekapitalet på 25 000 kr** (lägsta tillåtna för privat AB) – relevant när du investerar i dyra maskiner eller tar större entreprenader. Många byggföretag och offentliga upphandlingar arbetar hellre med AB, och bolagsformen gör det enklare att ta in delägare, anställa och bygga upp ett företagsvärde. Du anställs av ditt eget bolag och tar ut lön, vilket ger jämnare skatt och tillgång till t.ex. sjukpenninggrundande inkomst.",
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
          title: "Tumregel för snickeri",
          text: "Ska du börja ensam i en liten verkstad eller ute hos kund och vill komma igång billigt – starta gärna som enskild firma och ombilda till AB när omsättningen och maskinparken växer. Investerar du tungt i maskiner, lokal eller tar större entreprenader – välj AB direkt för ansvarsbegränsningens skull.",
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
      title: "Tillstånd, krav och maskinsäkerhet",
      lead: "Snickeri kräver ingen yrkesauktorisation – men verkstaden ställer höga krav på arbetsmiljö och maskinsäkerhet.",
      blocks: [
        {
          type: "paragraph",
          text: "Det krävs **ingen särskild yrkesauktorisation** för att starta snickeri. Det gör tröskeln lägre än i el- och VVS-branschen – men i en verkstad med maskiner är arbetsmiljö- och säkerhetskraven desto viktigare. Gå igenom punkterna nedan.",
        },
        {
          type: "subheading",
          text: "F-skatt och registrering (Skatteverket)",
        },
        {
          type: "paragraph",
          text: "**F-skatt** är grunden. Den visar att du själv betalar din skatt och dina egenavgifter, och i praktiken kräver alla seriösa kunder att din firma har F-skatt. Du ansöker gratis hos **Skatteverket** via verksamt.se, samtidigt som du registrerar företaget och anmäler moms (samt arbetsgivare om du ska anställa).",
        },
        {
          type: "subheading",
          text: "Maskinsäkerhet och arbetsmiljö (Arbetsmiljöverket)",
        },
        {
          type: "paragraph",
          text: "En snickeriverkstad är en arbetsplats med betydande risker: roterande maskiner (cirkelsåg, hyvel, fräs), **buller**, **trädamm** (som kan vara hälsofarligt och brandfarligt) och risk för bränder. Du ska följa Arbetsmiljöverkets föreskrifter om bland annat användning av arbetsutrustning, utforma säkra arbetsplatser med skydd på maskiner, ordna **utsug och dammhantering**, hörselskydd och brandsäkerhet, samt göra riskbedömningar. Kontrollera aktuella föreskrifter och krav hos Arbetsmiljöverket innan du sätter upp verkstaden.",
          source: "Arbetsmiljöverket (arbetsutrustning/maskiner, buller, kvarts- och trädamm, brandfarliga arbeten).",
        },
        {
          type: "subheading",
          text: "Lokal, brandskydd och miljö",
        },
        {
          type: "paragraph",
          text: "En verkstadslokal kan kräva att du stämmer av **brandskydd** med fastighetsägaren och räddningstjänsten (trädamm och lösningsmedel ökar brandrisken) och att avfall (spån, rester av lim/lack) hanteras enligt miljöreglerna. Vid uthyrning eller större verksamhet kan kommunens bygg- och miljönämnd ha synpunkter på lokalens användning – kontrollera med kommunen och fastighetsägaren.",
        },
        {
          type: "subheading",
          text: "Personalliggare på byggarbetsplatser (Skatteverket)",
        },
        {
          type: "paragraph",
          text: "Utför du snickeri på en **byggarbetsplats** omfattas du normalt av byggets **elektroniska personalliggare** (via ID06); kontrollavgiften är **12 500 kr** plus **2 500 kr per oregistrerad person** och **25 000 kr** om byggstart inte anmälts. Ren tillverkning i din **egen verkstad** omfattas däremot inte av byggets personalliggare.",
          source: "Skatteverket, personalliggare i byggbranschen (skatteförfarandelagen).",
        },
        {
          type: "links",
          items: [
            { label: "Skatteverket – F-skatt och personalliggare", url: "https://www.skatteverket.se", note: "F-skatt, moms, personalliggare byggbranschen" },
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare" },
            { label: "Arbetsmiljöverket", url: "https://www.av.se", note: "Maskiner, buller, trädamm, brandfarliga arbeten" },
          ],
        },
      ],
    },

    // 4 ──────────────────────────────────────────────────────────────────
    {
      number: 4,
      title: "Startkapital, verkstad och maskiner",
      lead: "Vad det faktiskt kostar att komma igång – maskinparken är den stora posten.",
      blocks: [
        {
          type: "paragraph",
          text: "Snickeri kan startas både smått (handverktyg och uppdrag ute hos kund) och stort (egen verkstad med maskinpark). Verkstad och maskiner är den enskilt största startposten. Här är de poster du bör budgetera för. Myndighetsavgifter anges som fastställda belopp; övriga poster som kostnadsslag att räkna på.",
        },
        {
          type: "table",
          columns: ["Post", "Kommentar"],
          rows: [
            ["Aktiekapital (om AB)", "25 000 kr – sätts in på företagskonto, är ditt och kan användas i driften"],
            ["Registrering AB hos Bolagsverket", "1 900 kr via e-tjänst på verksamt.se (2 200 kr med pappersblankett)"],
            ["Registrering enskild firma", "Frivillig; namnskydd kostar ca 1 000 kr (kontrollera aktuell avgift hos Bolagsverket)"],
            ["F-skatt och momsregistrering", "Gratis hos Skatteverket"],
            ["Verkstadslokal", "Hyra/köp + el, värme, larm, utsug – återkommande fast kostnad"],
            ["Maskiner och verktyg", "Cirkelsåg, hyvel, fräs, kantlistmaskin, handmaskiner – ofta den största investeringen"],
            ["Utsug, dammhantering och brandskydd", "Krav enligt arbetsmiljö- och brandregler"],
            ["Transport", "Skåpbil/släp för material och leveranser + drivmedel och försäkring"],
            ["Försäkringar", "Ansvars-, egendoms-/maskin- och fordonsförsäkring (se kapitel 7)"],
            ["Materiallager", "Trä, skivor, beslag, lim och lack"],
          ],
          source: "Bolagsverket (1 900 kr AB e-tjänst, 25 000 kr aktiekapital); Skatteverket (F-skatt/moms gratis).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Maskiner kan skrivas av över tid",
          text: "Dyra maskiner är inte en kostnad du tar hela på en gång i bokföringen – de skrivs normalt av över sin livslängd (inventarier). Det jämnar ut resultatet och påverkar din skatt. Prata med din bokförare om avskrivning, eventuell leasing och vad som är fördelaktigast för din likviditet.",
        },
        {
          type: "paragraph",
          text: "**Likviditet är viktigare än vinst i början.** Med stor maskininvestering och materiallager binder du kapital, och vid kunduppdrag ligger du ofta ute med material och lön innan betalning. Planera för en kassareserv, och använd a contofakturering eller delbetalning vid större specialsnickerier.",
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
              text: "Anmäl moms i samma ärende. Säljer du snickeritjänster eller varor är du i praktiken alltid momsregistrerad (befrielse möjlig först vid omsättning på högst 120 000 kr/år – se kapitel 6).",
            },
            {
              title: "Ordna verkstad, utsug och brandskydd",
              text: "Säkra lokal, sätt upp maskiner med skydd, utsug och dammhantering och stäm av brandskyddet med fastighetsägaren innan du börjar producera.",
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
              text: "Skaffa företagskonto (krav för AB), teckna ansvars-, maskin- och fordonsförsäkring (kapitel 7) och bestäm bokföringslösning (kapitel 9) innan du tar första uppdraget.",
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
      title: "Moms och ROT: tjänst eller vara, privatperson eller företag",
      lead: "Snickeri har ett extra momsknep: skillnaden mellan att sälja en tjänst och att sälja en vara.",
      blocks: [
        {
          type: "paragraph",
          text: "Momsen är där nya snickerier oftast gör fel, eftersom du kan sälja både **tjänster** (arbete hos kund) och **varor** (möbler och produkter du tillverkat). Tre regler styr: tjänst kontra vara, **omvänd byggmoms** (mellan byggföretag) och **ROT-avdraget** (mot privatpersoner).",
        },
        {
          type: "subheading",
          text: "Omvänd byggmoms (försäljning mellan företag i byggsektorn)",
        },
        {
          type: "paragraph",
          text: "När du utför snickeri som **byggtjänst** **åt ett annat företag som i sin tur säljer byggtjänster** gäller omvänd skattskyldighet: **köparen** redovisar och betalar momsen till Skatteverket, inte du. På fakturan anger du beloppet **utan moms** och hänvisar till att omvänd skattskyldighet gäller. Det är en **tvingande regel**. Ren varuförsäljning (t.ex. en möbel) omfattas däremot inte av omvänd byggmoms.",
          source: "Skatteverket och mervärdesskattelagen (2023:200) 16 kap. 13 §.",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Tre lägen att hålla isär",
          text: "**1) Snickeritjänst till privatperson:** moms 25 % – och ofta ROT på arbetskostnaden. **2) Snickeri som byggtjänst till byggföretag:** omvänd byggmoms (fakturera utan moms). **3) Försäljning av en vara (möbel) du tillverkat:** vanlig varuförsäljning med moms 25 %, ingen omvänd byggmoms och ingen ROT. Avgör alltid först vilket läge du är i.",
          source: "Skatteverket; mervärdesskattelagen (2023:200) 16 kap. 13 §; momssats 25 %.",
        },
        {
          type: "subheading",
          text: "ROT-avdrag – och var gränsen går",
        },
        {
          type: "paragraph",
          text: "ROT-avdraget ger privatpersoner skattereduktion på **arbetskostnaden** (inte material) för arbete som utförs **i eller i nära anslutning till bostaden**. För **2026 är avdraget 30 % av arbetskostnaden**, upp till **50 000 kr per person och år**; ROT och RUT delar ett gemensamt tak på **75 000 kr per person och år**. Snickeri som monteras eller byggs på plats – t.ex. platsbyggda garderober, kök och fast inredning – kan ge ROT, medan **tillverkning av lösa möbler i din verkstad inte ger ROT** eftersom arbetet då inte sker i kundens bostad.",
          source: "Skatteverket, ROT-avdrag 2026 och lista över rotarbeten.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Gränsdragningen är knepig – kontrollera den",
          text: "Var ROT-gränsen går mellan fast inredning monterad på plats och en lös, i verkstaden tillverkad produkt är en vanlig felkälla. Lova aldrig kunden ROT innan du kontrollerat mot **Skatteverkets lista över rotarbeten** att just ditt arbete och din arbetsmoment ger rätt till avdrag. Och kom ihåg: den tillfälliga höjningen till 50 % gällde bara t.o.m. 31 december 2025 – för 2026 är det 30 %.",
          source: "Skatteverket, lista över rotarbeten; Regeringen och Skatteverket (tillfällig höjning 12 maj–31 dec 2025).",
        },
        {
          type: "paragraph",
          text: "Praktiskt fungerar ROT som en **fakturamodell**: du drar av kundens skattereduktion direkt på fakturan, kunden betalar mellanskillnaden, och du begär resten från Skatteverket. Du måste **specificera arbetskostnaden separat** från materialet, kunden måste **äga bostaden** och ha tillräckligt skatteutrymme, och du behöver kundens personnummer och bostadsuppgifter. Får du avslag riskerar du att stå för mellanskillnaden.",
        },
      ],
    },

    // 7 ──────────────────────────────────────────────────────────────────
    {
      number: 7,
      title: "Försäkringar du faktiskt behöver",
      lead: "Rätt skydd täcker både verkstaden, maskinerna och de skador du kan orsaka hos kund.",
      blocks: [
        {
          type: "paragraph",
          text: "Som snickeriföretag har du två riskbilder att försäkra: din egen verkstad med dyra maskiner och materiallager, och de skador du kan orsaka när du arbetar ute hos kund. Många beställare kräver dessutom att du kan visa giltig ansvarsförsäkring innan du får uppdraget. Läs villkoren, inte bara priset.",
        },
        {
          type: "list",
          items: [
            "**Företagsförsäkring med ansvarsförsäkring** – täcker skador du orsakar på kundens egendom eller på tredje person, t.ex. vid montering i en bostad. Ofta ett krav för att få uppdraget.",
            "**Egendoms- och maskinförsäkring** – skyddar verkstad, maskiner och materiallager mot brand (trädamm ökar risken), vatten, stöld och maskinhaveri.",
            "**Allriskförsäkring / entreprenadförsäkring** – skyddar arbete och material under projekttiden vid större monteringsuppdrag.",
            "**Fordonsförsäkring** – trafikförsäkring är lagstadgad; lägg till halv-/helförsäkring för bilen och skydd för verktyg som förvaras i den.",
            "**Sjukavbrotts- och olycksfallsförsäkring** – ekonomiskt skydd för dig själv vid sjukdom eller olycka i ett yrke med maskinrisker.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Brandrisken i verkstaden",
          text: "Trädamm och lösningsmedel gör snickeriverkstaden brandkänslig. Kontrollera att din egendoms- och maskinförsäkring täcker brand och att du uppfyller försäkringsbolagets krav på utsug, städning och förvaring av brandfarliga vätskor – annars kan ersättningen sättas ned vid en skada.",
        },
      ],
    },

    // 8 ──────────────────────────────────────────────────────────────────
    {
      number: 8,
      title: "Prissättning och lönsamhet",
      lead: "Så sätter du pris på hantverk och specialarbete som faktiskt lämnar vinst.",
      blocks: [
        {
          type: "paragraph",
          text: "Den vanligaste orsaken till att nya snickerier inte går runt är att de tar för lågt betalt för sitt hantverk och glömmer maskinkostnaderna. Ditt pris ska täcka din lön, sociala avgifter, lokal, maskinavskrivning och underhåll, transport, försäkring, administration och vinst. Räkna baklänges från vad du behöver tjäna per år.",
        },
        {
          type: "subheading",
          text: "Bygg upp ditt pris",
        },
        {
          type: "list",
          items: [
            "Utgå från din **önskade årslön** och lägg på sociala avgifter, pension och semester.",
            "Lägg till **fasta kostnader**: verkstadshyra, maskinavskrivning och underhåll, el, bil, försäkring, administration.",
            "Dela på **fakturerbara timmar** – ritning, offert, inköp och maskinställtid är sällan helt betalda. Räkna realistiskt.",
            "Vid **fast pris på specialsnickeri** – kalkylera materialåtgång, spill och timmar noggrant; hantverk underskattas nästan alltid.",
            "Lägg på **vinstmarginal** så att företaget kan investera i nya maskiner och tåla magra perioder.",
          ],
        },
        {
          type: "subheading",
          text: "Påslag på material",
        },
        {
          type: "paragraph",
          text: "Att lägga ett **påslag på material** (trä, skivor, beslag) är standard och täcker din tid för inköp, hantering, lagring och spill. Var transparent mot kunden om hur material och arbete faktureras, särskilt vid ROT-jobb där bara arbetskostnaden ger skattereduktion – och kom ihåg skillnaden mellan att sälja en tjänst och att sälja en vara (kapitel 6).",
        },
        {
          type: "callout",
          variant: "fact",
          title: "ROT-effekten i din offert",
          text: "När arbetet ger ROT blir det märkbart billigare för privatkunden utan att du sänker ditt pris. På en arbetskostnad på 30 000 kr för platsbyggd inredning blir kundens nettokostnad 21 000 kr efter 30 % rotavdrag (max 50 000 kr/person/år). Visa både bruttopris och pris efter ROT – men bara när arbetet faktiskt ger avdrag (kapitel 6).",
          source: "Räkneexempel baserat på rotavdrag 30 % 2026 (Skatteverket).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Skriftlig offert – alltid",
          text: "Lämna alltid skriftlig offert med tydlig avgränsning av vad som ingår (material, mått, ytbehandling), hur ändrings- och tilläggsarbeten hanteras, betalningsplan och giltighetstid. Vid specialsnickeri – bifoga ritning eller specifikation så att förväntningarna är tydliga.",
        },
      ],
    },

    // 9 ──────────────────────────────────────────────────────────────────
    {
      number: 9,
      title: "Bokföring och skatt",
      lead: "Löpande ordning i ekonomin – och det snickerier ofta gör fel med moms och avskrivningar.",
      blocks: [
        {
          type: "paragraph",
          text: "Alla företag är enligt bokföringslagen skyldiga att löpande bokföra sina affärshändelser och spara underlag. Du kan sköta det själv i ett bokföringsprogram eller anlita en redovisningsbyrå – för många snickerier är byrån värd pengarna, särskilt för att hantera moms (tjänst/vara/omvänd), ROT och avskrivning av maskiner rätt.",
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
          text: "Moms och avskrivning",
        },
        {
          type: "paragraph",
          text: "Du redovisar moms månads-, kvartals- eller årsvis beroende på omsättning. Håll isär de tre momslägena från kapitel 6 i bokföringen, och redovisa omvänd byggmoms korrekt även när du fakturerar utan moms. Dyra maskiner bokförs som **inventarier och skrivs av** över sin livslängd i stället för att kostnadsföras direkt – det påverkar både resultat och skatt.",
        },
        {
          type: "subheading",
          text: "Vanliga avdrag för snickerier",
        },
        {
          type: "list",
          items: [
            "**Maskiner och verktyg** – avskrivning av större maskiner; mindre verktyg kan dras direkt.",
            "**Verkstadslokal** – hyra, el, värme, larm och underhåll.",
            "**Förbrukningsmaterial** – lim, skruv, slippapper, lack och liknande.",
            "**Arbetskläder och skyddsutrustning** – hörselskydd, andningsskydd och skyddskläder.",
            "**Fordon och drivmedel** – kostnader för företagets bil; för privat bil i tjänsten gäller särskilda regler.",
            "**Försäkringar och utbildning** – företags-, maskin- och fordonsförsäkring samt kurser som rör verksamheten.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Spara alla underlag",
          text: "Kvitton, fakturor och avtal ska sparas enligt bokföringslagen. Eftersom du hanterar både tjänster, varor, omvänd moms och ROT är ordnad dokumentation – och tydliga fakturor som visar arbetskostnad separat – ditt bästa skydd vid en kontroll.",
        },
      ],
    },

    // 10 ─────────────────────────────────────────────────────────────────
    {
      number: 10,
      title: "Att anställa",
      lead: "Från första medarbetaren: avgifter, kollektivavtal och ditt arbetsmiljöansvar i verkstaden.",
      blocks: [
        {
          type: "paragraph",
          text: "Att anställa är ofta steget som tar snickeriet från enmansfirma till riktigt företag – men det följer med kostnader och ett särskilt arbetsmiljöansvar i en verkstad med maskiner.",
        },
        {
          type: "subheading",
          text: "Arbetsgivaravgifter",
        },
        {
          type: "paragraph",
          text: "Utöver lönen betalar du **arbetsgivaravgifter**. Normalsatsen 2026 är **31,42 %** av bruttolönen. På en månadslön på 33 000 kr betyder det runt 10 400 kr i arbetsgivaravgift utöver lönen – budgetera för det när du sätter ditt pris (kapitel 8). Vissa nedsättningar kan finnas i särskilda fall; kontrollera aktuella regler hos Skatteverket.",
          source: "Skatteverket, arbetsgivaravgift normalsats 31,42 % (2026).",
        },
        {
          type: "subheading",
          text: "Kollektivavtal",
        },
        {
          type: "paragraph",
          text: "Beroende på inriktning kan ditt snickeri omfattas av kollektivavtal på bygg- eller träindustriområdet (t.ex. avtal där Byggnads eller GS-facket är part). Ett kollektivavtal reglerar bland annat minimilöner, arbetstider, försäkringar och avsättningar, och krävs ofta av större beställare. Kontrollera vilket avtal som är tillämpligt för din verksamhet och de aktuella villkoren direkt hos arbetsgivarorganisationen och facket innan du anställer.",
        },
        {
          type: "subheading",
          text: "Arbetsmiljöansvar i verkstaden",
        },
        {
          type: "paragraph",
          text: "Som arbetsgivare har du ett långtgående **arbetsmiljöansvar**, särskilt i en maskinverkstad. Du ska bedriva systematiskt arbetsmiljöarbete – riskbedöma maskiner, se till att skydd och utsug fungerar, att hörsel- och andningsskydd används och att personalen är utbildad på maskinerna. Olyckor med maskiner kan vara allvarliga och ge sanktionsavgifter. På byggarbetsplatser ska anställda registreras i personalliggaren.",
          source: "Arbetsmiljöverket, systematiskt arbetsmiljöarbete och maskinsäkerhet.",
        },
      ],
    },

    // 11 ─────────────────────────────────────────────────────────────────
    {
      number: 11,
      title: "Vanliga misstag och fallgropar",
      lead: "De dyraste nybörjarfelen i snickeribranschen – och hur du undviker dem.",
      blocks: [
        {
          type: "list",
          items: [
            "**Blanda ihop tjänst och vara.** Att fakturera en verkstadstillverkad möbel som om den vore en ROT-grundande tjänst. Avgör alltid först: tjänst hos kund, byggtjänst åt företag, eller varuförsäljning?",
            "**Lova ROT på fel arbete.** Lös möbeltillverkning i verkstaden ger inte ROT. Kontrollera mot Skatteverkets lista innan du lovar kunden avdrag.",
            "**Lova fel ROT-procent.** Den tillfälliga 50-procentsnivån gällde bara t.o.m. 31 december 2025. För 2026 är det 30 %.",
            "**Glömma maskinkostnaderna i priset.** Avskrivning, underhåll och lokal måste in i timpriset – annars äter maskinparken upp vinsten.",
            "**Underskatta tiden på specialarbete.** Hantverk tar längre tid än man tror. Kalkylera material, spill och timmar noggrant vid fast pris.",
            "**Slarv med maskinsäkerhet och brandskydd.** Att hoppa över skydd, utsug och dammhantering ger olycksrisk, sanktionsavgifter och brandfara.",
            "**Otydliga avtal vid specialsnickeri.** Oklara mått, material och ytbehandling är en vanlig tvistekälla. Bifoga ritning/specifikation, allt skriftligt.",
            "**Missa personalliggaren på byggen.** Tar du monteringsuppdrag på byggarbetsplats utan att checka in i liggaren riskerar du Skatteverkets kontrollavgifter.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Det dyraste felet är att gissa",
          text: "Reglerna ändras (momsgränser, ROT-nivåer och gränsdragningar). Bygg en vana att kontrollera aktuell uppgift hos Skatteverket innan du fakturerar eller lovar något – och spara dokumentationen.",
        },
      ],
    },

    // 12 ─────────────────────────────────────────────────────────────────
    {
      number: 12,
      title: "Marknadsföring och dina första kunder",
      lead: "Så får du de första uppdragen och bygger ett rykte kring ditt hantverk.",
      blocks: [
        {
          type: "paragraph",
          text: "Snickeri är ett visuellt hantverk – välgjorda arbeten säljer sig själva och rekommendationer väger tungt. Du måste vara lätt att hitta, kunna visa upp ditt arbete och vara tydlig i offerten. Här är de kanaler som ger mest för ett nystartat snickeri.",
        },
        {
          type: "list",
          items: [
            "**Portfölj med bilder.** Visa platsbyggda kök, garderober, trappor och specialmöbler på hemsida och i sociala medier – hantverk övertygar visuellt.",
            "**Google – sökning och karta.** Skapa en Google-företagsprofil så att du syns när någon söker snickare i ditt område. Be nöjda kunder om omdömen.",
            "**Enkel hemsida.** Visa vad du gör, referensbilder, kontaktuppgifter och att du har F-skatt och försäkring.",
            "**Samarbete med byggföretag, arkitekter och inredare.** De skickar vidare specialsnickerier och inredningsuppdrag.",
            "**Nisch och specialitet.** Att vara känd för t.ex. platsbyggda kök, fönsterrenovering eller specialmöbler gör dig lättare att rekommendera.",
            "**Förmedlingstjänster.** Plattformar som matchar hantverkare och kunder kan ge de första jobben medan du bygger eget rykte.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Visa att du är seriös",
          text: "F-skatt, försäkring och skriftliga avtal är inte bara krav – de är säljargument, särskilt vid dyrare specialsnickeri. Kombinera dem med en stark portfölj så väljer kunden gärna dig. Lyft fram allt i offert och på hemsidan.",
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
            "Valt bolagsform (enskild firma eller AB) utifrån ansvar, skatt och maskininvestering",
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
          text: "Verkstad och säkerhet",
        },
        {
          type: "checklist",
          items: [
            "Säkrat verkstadslokal och stämt av brandskydd med fastighetsägaren",
            "Satt upp maskiner med skydd, utsug och dammhantering",
            "Satt rutin för hörsel-/andningsskydd, riskbedömning och avfallshantering",
            "Skaffat ID06-kort och satt rutin för personalliggare vid arbete på byggen",
          ],
        },
        {
          type: "subheading",
          text: "Ekonomi, moms och försäkring",
        },
        {
          type: "checklist",
          items: [
            "Tecknat ansvars-, egendoms-/maskin- och fordonsförsäkring",
            "Satt pris baklänges från årslön, med maskinkostnader och vinst",
            "Förstått de tre momslägena (tjänst privat / byggtjänst företag / vara)",
            "Kontrollerat ROT-gränsdragningen mot Skatteverkets lista över rotarbeten",
            "Bestämt princip för materialpåslag och avskrivning av maskiner",
            "Valt bokföringslösning (eget program eller redovisningsbyrå)",
          ],
        },
        {
          type: "subheading",
          text: "Innan första uppdraget",
        },
        {
          type: "checklist",
          items: [
            "Tagit fram offertmall med material, mått, ÄTA, betalningsplan och giltighetstid",
            "Byggt en portfölj med bilder och skapat enkel hemsida och Google-profil",
            "Förberett rutin för fakturering med korrekt moms/ROT",
            "Säkerställt likviditet/kassareserv för de första månaderna",
          ],
        },
      ],
    },

    // 14 ─────────────────────────────────────────────────────────────────
    {
      number: 14,
      title: "Resurser och myndighetskontakter",
      lead: "Spara den här sidan – här kontrollerar du aktuella siffror, regler och gränsdragningar.",
      blocks: [
        {
          type: "paragraph",
          text: "Reglerna och beloppen uppdateras, och ROT-gränsdragningen i snickeri kan vara svår. Använd länkarna nedan för att kontrollera aktuell uppgift direkt hos källan innan du fakturerar, prissätter eller lovar något till en kund.",
        },
        {
          type: "links",
          items: [
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare – allt på ett ställe" },
            { label: "Bolagsverket", url: "https://www.bolagsverket.se", note: "Registrering, avgifter, namn, verklig huvudman" },
            { label: "Skatteverket", url: "https://www.skatteverket.se", note: "F-skatt, moms (tjänst/vara/omvänd), ROT och lista över rotarbeten" },
            { label: "Arbetsmiljöverket", url: "https://www.av.se", note: "Maskiner, buller, trädamm, brandfarliga arbeten, skyddsutrustning" },
            { label: "Naturvårdsverket", url: "https://www.naturvardsverket.se", note: "Hantering av farligt avfall (lim, lack, lösningsmedel)" },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Vill du bolla ditt upplägg med en rådgivare?",
          text: "Den här guiden tar dig långt på egen hand. Vill du dubbelkolla val av bolagsform, moms- och ROT-hantering eller försäkring med en expert kan vi matcha dig med en rådgivare kostnadsfritt på driva-foretag.se/hitta-radgivare.",
        },
      ],
    },
  ],
};

export default snickeri;
