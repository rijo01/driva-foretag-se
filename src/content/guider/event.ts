import type { GuideContent } from "./types";

// ──────────────────────────────────────────────────────────────────────────
// STARTGUIDE: EVENT & BRÖLLOP
//
// YMYL – faktagranskad mot primärkälla. Verifierade uppgifter (juni 2026):
//  • Aktiekapital privat AB 25 000 kr; AB-reg 1 900 kr e-tjänst / 2 200 kr
//    blankett (Bolagsverket). Egenavgifter 28,97 % + schablonavdrag 25 %;
//    arbetsgivaravgift 31,42 % (Skatteverket). Moms 25 %. Momsbefrielse högst
//    120 000 kr/år.
//  • Tjänste-/uppdragsföretag: ingen branschauktorisation, ingen ROT.
//  • Serveras alkohol vid evenemang krävs serveringstillstånd från kommunen
//    (motsvarande restaurang-/cateringlogik). Offentliga tillställningar kan
//    kräva tillstånd från Polisen; mat kan kräva livsmedelsregistrering hos
//    kommunen. Anges kvalitativt – hänvisa till kommun/Polisen.
//  • Underleverantörer (fotograf, catering, DJ m.fl.): kontrollera F-skatt.
//
// Där en exakt regel/avgift inte verifierats skrivs den kvalitativt – aldrig
// gissad. Tillstånd varierar med evenemangstyp, plats och kommun.
// ──────────────────────────────────────────────────────────────────────────

const event: GuideContent = {
  slug: "event",
  industry: "Event & Bröllop",
  title: "Starta & driva event- och bröllopsföretag",
  subtitle: "Komplett startguide 2026",
  year: 2026,
  reviewedAt: "2026-06-04",
  reviewedSources: "Skatteverket, Bolagsverket & kommunen",
  intro:
    "Den kompletta, faktagranskade guiden för dig som ska starta event- eller bröllopsföretag i Sverige – från bolagsform och F-skatt till tillstånd, vattentäta avtal med avboknings- och force majeure-villkor, försäkring, prissättning, underleverantörer och din första kund. Varje siffra och regel är kontrollerad mot Skatteverket och Bolagsverket.",

  chapters: [
    // 1
    {
      number: 1,
      title: "Att driva event- och bröllopsföretag i Sverige",
      lead: "Vad branschen kräver av dig som företagare – och vad som gör den lönsam.",
      blocks: [
        {
          type: "paragraph",
          text: "Att skapa minnesvärda evenemang och bröllop är ett kreativt och socialt yrke – men bakom varje lyckad fest ligger projektledning, leverantörssamordning och, inte minst, **avtal**. Branschen präglas av enskilda, oåterkalleliga tillfällen (ett bröllop kan inte göras om) och stora inköp åt kundens räkning. Det som skiljer en lönsam eventbyrå från en stressig hobby är ordning på avtal, försäkring och kalkyl – och förmågan att hantera när något oväntat händer.",
        },
        {
          type: "paragraph",
          text: "Med **event- och bröllopsföretag** menar vi i den här guiden företag som planerar, koordinerar och genomför evenemang – bröllop, fester, företagsevent, konferenser – ofta som projektledare som samordnar en rad **underleverantörer** (lokal, catering, foto, musik, dekor). Reglerna i guiden gäller i grunden lika oavsett inriktning, men tillstånd och försäkring beror på evenemangets karaktär.",
        },
        {
          type: "paragraph",
          text: "Tre saker präglar eventbranschen när du startar: **avtalen** (avbokning, force majeure och ansvar – din viktigaste trygghet), **underleverantörerna** (du samordnar andra och bär ofta ansvaret mot kunden) och **prissättningen** (där din projektledning och tid måste tas betalt för, inte bara ges bort vid sidan av inköpen). De tre är genomgående teman i guiden. Notera att eventtjänster **inte** ger ROT-avdrag.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Så använder du guiden",
          text: "Läs kapitel 1–7 innan du tar ditt första uppdrag – de avgör bolagsform, tillstånd, moms, avtal och försäkring. Kapitel 8–12 är drift: pris, bokföring, underleverantörer/personal, vanliga misstag och marknadsföring. Kapitel 13 är en komplett checklista, och kapitel 14 samlar alla myndighetskontakter.",
        },
      ],
    },

    // 2
    {
      number: 2,
      title: "Välj bolagsform: enskild firma eller aktiebolag",
      lead: "Valet påverkar ditt personliga ansvar, din skatt och hur kunder och leverantörer ser på dig.",
      blocks: [
        {
          type: "paragraph",
          text: "För de flesta eventföretag står valet mellan **enskild näringsverksamhet** (enskild firma) och **aktiebolag (AB)**. Eftersom du ofta hanterar stora belopp åt kunder (inköp av lokal, catering m.m.) och bär ansvar mot dem väger ansvarsfrågan tungt.",
        },
        {
          type: "subheading",
          text: "Enskild firma",
        },
        {
          type: "paragraph",
          text: "Enklast och billigast att starta – vanligt för den som börjar ensam, ofta som bröllopskoordinator. Du och företaget är samma juridiska person, vilket betyder att du har **personligt ansvar** för företagets skulder. Du betalar **egenavgifter** på överskottet (28,97 % för aktiv näringsverksamhet 2026, med ett schablonavdrag på 25 % innan avgiften beräknas) och inkomsten beskattas som din lön.",
          source: "Skatteverket, egenavgifter 28,97 % och schablonavdrag 25 % (2026).",
        },
        {
          type: "subheading",
          text: "Aktiebolag",
        },
        {
          type: "paragraph",
          text: "Ett aktiebolag är en egen juridisk person. Ditt personliga ansvar begränsas i normalfallet till **aktiekapitalet på 25 000 kr** (lägsta tillåtna för privat AB) – relevant när du tecknar avtal och gör stora inköp åt kunder och bär ansvar om något går fel. Företagskunder och större leverantörer ser ofta hellre ett AB, och formen gör det enklare att anställa och bygga ett företagsvärde. Du anställs av ditt eget bolag och tar ut lön.",
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
            ["Lämpligt vid stora inköp åt kund/företagsevent", "Mindre", "Bättre"],
            ["Administration", "Enklare bokföring", "Årsredovisning, mer formalia"],
          ],
          source: "Bolagsverket och Skatteverket (aktiekapital 25 000 kr, egenavgifter 28,97 % 2026).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Tumregel för eventföretag",
          text: "Börjar du ensam som koordinator med mindre uppdrag kan enskild firma räcka. Gör du stora inköp åt kunder, riktar dig mot företagsevent eller ska anställa – välj AB för ansvarsbegränsningens skull. Tänk särskilt på att en avbokad stor fest kan röra mycket pengar.",
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
      title: "Tillstånd och krav",
      lead: "Eventbyrån i sig kräver inget tillstånd – men evenemangen kan göra det.",
      blocks: [
        {
          type: "paragraph",
          text: "Det krävs **ingen branschauktorisation** för att driva eventföretag. Däremot kan **själva evenemangen** kräva olika tillstånd beroende på storlek, plats och innehåll. Gå igenom punkterna nedan och stäm av i god tid – tillstånd tar tid att få.",
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
          text: "Serveringstillstånd vid alkohol (kommunen)",
        },
        {
          type: "paragraph",
          text: "Ska det serveras **alkohol** mot betalning vid ett evenemang krävs normalt **serveringstillstånd** från **kommunen** – samma logik som för restauranger. Ofta löses det genom att lokalen eller cateringföretaget har tillstånd, eller genom ett tillfälligt tillstånd för slutet sällskap. Vid privata bröllop där värden bjuder sina gäster gäller andra förutsättningar än vid försäljning. Klargör tidigt vem som ansvarar för alkoholserveringen och dess tillstånd, och stäm av med kommunen.",
          source: "Kommunen (serveringstillstånd enligt alkohollagen – kontrollera vad som gäller för ditt upplägg).",
        },
        {
          type: "subheading",
          text: "Offentliga tillställningar, mat och ljud",
        },
        {
          type: "paragraph",
          text: "Ett **offentligt** evenemang (öppet för allmänheten) kan kräva tillstånd från **Polisen** för att använda offentlig plats och för ordning/säkerhet, och vid större arrangemang kan krav på säkerhet, utrymning och antal deltagare tillkomma. Serveras **mat** kan livsmedelsregistrering hos kommunen behövas (ofta via cateringleverantören). Hög **ljudnivå** och sena evenemang kan beröras av buller- och ordningsregler. Vilka tillstånd som krävs beror helt på evenemanget – stäm av med kommun och Polis i god tid.",
          source: "Polisen (tillstånd för offentlig tillställning/användning av offentlig plats) och kommunen (livsmedel, buller) – kontrollera per evenemang.",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Ingen auktorisation, ingen ROT – men tillstånden ligger på evenemanget",
          text: "Själva eventföretaget behöver bara F-skatt och momsregistrering för att komma igång. Det är evenemangen – alkohol, offentlig plats, mat, musik – som utlöser tillstånd. Bygg in en rutin för att tidigt kartlägga vilka tillstånd varje uppdrag kräver, och vem (du, kunden eller en underleverantör) som ansvarar för dem.",
        },
        {
          type: "links",
          items: [
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare" },
            { label: "Din kommun", url: "https://www.verksamt.se", note: "Serveringstillstånd, livsmedel, lokala ordningsregler" },
            { label: "Polisen", url: "https://www.polisen.se", note: "Tillstånd för offentlig tillställning och användning av offentlig plats" },
            { label: "Skatteverket", url: "https://www.skatteverket.se", note: "F-skatt och moms" },
          ],
        },
      ],
    },

    // 4
    {
      number: 4,
      title: "Startkapital och faktiska kostnader",
      lead: "Vad det faktiskt kostar att komma igång – låg fast kostnad, men stora flöden i projekten.",
      blocks: [
        {
          type: "paragraph",
          text: "En eventbyrå är billig att starta rent fysiskt – det är en kunskaps- och relationsverksamhet. Den största ekonomiska utmaningen är i stället **likviditeten i projekten**, där du ofta ligger ute med eller förmedlar stora inköp. Här är de poster du bör budgetera för. Myndighetsavgifter anges som fastställda belopp; övriga poster som kostnadsslag att räkna på.",
        },
        {
          type: "table",
          columns: ["Post", "Kommentar"],
          rows: [
            ["Aktiekapital (om AB)", "25 000 kr – sätts in på företagskonto, är ditt och kan användas i driften"],
            ["Registrering AB hos Bolagsverket", "1 900 kr via e-tjänst på verksamt.se (2 200 kr med pappersblankett)"],
            ["F-skatt och momsregistrering", "Gratis hos Skatteverket"],
            ["Dator, telefon och programvara", "Projekt-, offert- och bokföringsverktyg"],
            ["Webbplats och portfolio", "Bilder från tidigare event, referenser, kontakt"],
            ["Försäkringar", "Ansvars- och evenemangsförsäkring (se kapitel 7)"],
            ["Eventutrustning (vid behov)", "Egen dekor, ljud, ljus – eller hyrs in per projekt"],
            ["Marknadsföring", "Mässor, sociala medier, nätverkande med leverantörer"],
            ["Likviditet för projekt", "Buffert för inköp och utlägg innan kunden betalar"],
          ],
          source: "Bolagsverket (1 900 kr AB e-tjänst, 25 000 kr aktiekapital); Skatteverket (F-skatt/moms gratis).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Låt kunden finansiera inköpen",
          text: "Lägg inte ut stora summor för lokal, catering och leverantörer ur egen ficka. Arbeta med **handpenning och delbetalningar** så att kundens pengar finansierar inköpen, eller låt kunden betala vissa leverantörer direkt. Det skyddar din likviditet och minskar risken om kunden avbokar.",
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
              text: "Sök på Bolagsverkets namnsöktjänst att namnet är ledigt och kontrollera domän och sociala konton. För AB registreras namnet i samband med bolaget; för enskild firma kan du registrera och skydda namnet separat.",
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
              text: "Anmäl moms i samma ärende. Eventtjänster har moms 25 % (befrielse möjlig först vid omsättning på högst 120 000 kr/år – se kapitel 6).",
            },
            {
              title: "Ta fram avtalsmallar",
              text: "Förbered uppdragsavtal med avboknings- och force majeure-villkor och betalningsplan (kapitel 7) samt avtal med underleverantörer innan du tar uppdrag.",
            },
            {
              title: "Registrera dig som arbetsgivare (om du ska anställa)",
              text: "Ska du ha anställd personal anmäler du dig som arbetsgivare hos Skatteverket via verksamt.se. Då börjar du redovisa arbetsgivaravgifter och avdragen skatt (se kapitel 10).",
            },
            {
              title: "Anmäl verklig huvudman",
              text: "AB ska anmäla verklig huvudman till Bolagsverket, normalt inom fyra veckor från registreringen.",
            },
            {
              title: "Öppna företagskonto, teckna försäkring och ordna bokföring",
              text: "Skaffa företagskonto (krav för AB), teckna ansvars- och evenemangsförsäkring (kapitel 7) och bestäm bokföringslösning (kapitel 9) innan du tar första uppdraget.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Allt på ett ställe",
          text: "verksamt.se är myndigheternas gemensamma e-tjänst (Bolagsverket, Skatteverket och Tillväxtverket). Du kan registrera företag, ansöka om F-skatt, momsregistrera dig och anmäla arbetsgivare i samma inloggade flöde. Tillstånd för enskilda evenemang söks hos kommun/Polis.",
          source: "verksamt.se (Bolagsverket, Skatteverket, Tillväxtverket).",
        },
      ],
    },

    // 6
    {
      number: 6,
      title: "Moms och fakturering",
      lead: "25 % moms och samordning av underleverantörer – fakturera så att det blir rätt och lönsamt.",
      blocks: [
        {
          type: "paragraph",
          text: "Momsen är enkel i grunden, men eftersom du ofta samordnar och vidarefakturerar underleverantörer finns några saker att hålla reda på.",
        },
        {
          type: "subheading",
          text: "Moms 25 %",
        },
        {
          type: "paragraph",
          text: "Event-, koordinerings- och projektledningstjänster har **moms 25 %** (normalsats). Du kan vara momsbefriad först om omsättningen är **högst 120 000 kr per år** (gränsen gäller sedan 1 januari 2025) – men då kan du inte dra av ingående moms på dina inköp, vilket sällan lönar sig. Notera att olika delar av ett evenemang i sällsynta fall kan ha andra momssatser (t.ex. vissa kulturella inslag) – stäm av med Skatteverket om du är osäker.",
          source: "Skatteverket, momsnormalsats 25 % och momsbefrielse vid omsättning på högst 120 000 kr/år (fr.o.m. 1 jan 2025).",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Ingen ROT i eventbranschen",
          text: "Eventtjänster ger **inte** ROT-avdrag och omfattas inte av omvänd byggmoms – de reglerna gäller bygg- och hushållsnära tjänster. Fakturera vanliga 25 % moms.",
        },
        {
          type: "subheading",
          text: "Vidarefakturering och eget arvode",
        },
        {
          type: "paragraph",
          text: "När du köper in tjänster (lokal, catering, foto) och vidarefakturerar dem till kunden ska det göras korrekt med moms, och ditt eget **arvode/påslag** ska framgå. Var transparent: kunden ska förstå vad som är leverantörskostnad och vad som är din ersättning. Ta alltid betalt för din **projektledning och tid** – den största fällan är att ge bort den gratis vid sidan av inköpen (kapitel 8).",
        },
        {
          type: "subheading",
          text: "Handpenning och betalningsplan",
        },
        {
          type: "paragraph",
          text: "Arbeta med **handpenning vid bokning** och **delbetalningar** kopplade till milstolpar, med slutbetalning före eller i nära anslutning till evenemanget. Det skyddar din likviditet (kapitel 4) och din ersättning om kunden avbokar (kapitel 7).",
        },
      ],
    },

    // 7
    {
      number: 7,
      title: "Avtal, avbokning, force majeure och försäkring",
      lead: "Branschens viktigaste kapitel: avtalet och försäkringen är din trygghet när något går fel.",
      blocks: [
        {
          type: "paragraph",
          text: "Evenemang är oåterkalleliga och beroende av många faktorer du inte styr över – väder, leverantörer, sjukdom, avbokningar. Därför är **avtalet** din absolut viktigaste trygghet, tätt följt av rätt **försäkring**.",
        },
        {
          type: "subheading",
          text: "Uppdragsavtal",
        },
        {
          type: "paragraph",
          text: "Skriv alltid ett tydligt **uppdragsavtal** som anger exakt vad du ansvarar för (planering, koordinering, vilka leverantörer), tidsplan, pris och betalningsplan, samt vad som ingår och inte. Otydlig omfattning och muntliga löften är den vanligaste tvistekällan i branschen. Reglera också vem som ansvarar för tillstånd (kapitel 3) och för avtal med underleverantörer.",
        },
        {
          type: "subheading",
          text: "Avbokning och force majeure",
        },
        {
          type: "paragraph",
          text: "Reglera **avbokning** noga: vilken handpenning som inte återbetalas, hur stor del av priset som ska betalas vid avbokning olika lång tid före evenemanget, och hur redan gjorda inköp/leverantörsåtaganden hanteras. Ta in en **force majeure-klausul** för händelser utanför parternas kontroll (t.ex. myndighetsbeslut, allvarliga händelser) som anger vad som gäller om evenemanget inte kan genomföras. Pandemiåren visade hur avgörande tydliga avboknings- och force majeure-villkor är.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Du bär ofta ansvaret mot kunden",
          text: "När du anlitar underleverantörer i kundens namn är det ofta du som står som kundens motpart och bär ansvaret om en leverantör inte levererar. Reglera i dina avtal – både mot kund och mot underleverantör – vem som ansvarar för vad, och se till att underleverantörerna har egna avtal, F-skatt och försäkring (kapitel 10).",
        },
        {
          type: "subheading",
          text: "Försäkring",
        },
        {
          type: "list",
          items: [
            "**Företags- och ansvarsförsäkring** – täcker skador på person eller egendom under evenemanget (t.ex. en gäst eller lokal som skadas).",
            "**Evenemangs-/arrangörsförsäkring** – kan täcka inställt eller avbrutet evenemang och vissa risker kopplade till arrangemanget.",
            "**Egendomsförsäkring** – för egen utrustning (dekor, ljud, ljus) mot stöld och skada.",
            "**Avbrotts-/sjukförsäkring** – ekonomiskt skydd om du själv blir sjuk och inte kan genomföra ett bokat uppdrag.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Ha en plan B – och dokumentera den",
          text: "Det professionella i eventbranschen är inte att inget går fel, utan att du har en plan när det gör det: ersättningsleverantör, regnplan, reservutrustning. Dokumentera plan B i avtalet och i din projektplan – det skyddar både kundens dag och ditt rykte.",
        },
      ],
    },

    // 8
    {
      number: 8,
      title: "Prissättning och paket",
      lead: "Så tar du betalt för din projektledning – inte bara för inköpen.",
      blocks: [
        {
          type: "paragraph",
          text: "Den vanligaste orsaken till att eventföretag tjänar för lite är att de tar betalt för inköpen men ger bort sin egen tid och projektledning. Ditt pris ska täcka all din tid (möten, planering, leverantörskontakt, genomförande, efterarbete), företagets kostnader, risk och vinst. Räkna baklänges från vad du behöver tjäna per år och per uppdrag.",
        },
        {
          type: "subheading",
          text: "Prismodeller",
        },
        {
          type: "list",
          items: [
            "**Fast arvode per uppdrag** – tydligt för kunden; kräver att du kan uppskatta tidsåtgången väl.",
            "**Procent på evenemangets budget** – vanligt vid större event; ditt arvode skalar med projektets storlek.",
            "**Timpris** – för rådgivning eller avgränsade delar; mindre lämpligt för helhetsåtaganden.",
            "**Paket** – t.ex. bröllopspaket i olika nivåer (koordinering på dagen, helhetsplanering) – tydligt och lätt att sälja.",
          ],
        },
        {
          type: "subheading",
          text: "Skilj arvode från inköp",
        },
        {
          type: "paragraph",
          text: "Var tydlig i offert och avtal med vad som är **ditt arvode** och vad som är **leverantörskostnader** som vidarefaktureras eller betalas direkt av kunden. Det gör det lättare för kunden att förstå värdet av din tjänst – och säkerställer att du faktiskt får betalt för din kompetens och tid, inte bara förmedlar andras fakturor.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Ta betalt för värdet, inte bara timmarna",
          text: "Din erfarenhet sparar kunden tid, pengar och stress och minskar risken för att något går fel på en oersättlig dag. Det är ett stort värde – prissätt därefter, särskilt i paket och vid helhetsåtaganden, i stället för att konkurrera med lägsta timpris.",
        },
      ],
    },

    // 9
    {
      number: 9,
      title: "Bokföring och skatt",
      lead: "Löpande ordning i ekonomin – med projektens flöden under kontroll.",
      blocks: [
        {
          type: "paragraph",
          text: "Alla företag är enligt bokföringslagen skyldiga att löpande bokföra sina affärshändelser och spara underlag. En eventbyrå har projekt med många in- och utbetalningar (handpenning, leverantörer, slutbetalning) – ett bra system och ofta en redovisningsbyrå hjälper dig hålla isär projektens ekonomi.",
        },
        {
          type: "subheading",
          text: "Projektredovisning och vidarefakturering",
        },
        {
          type: "paragraph",
          text: "Håll ordning på varje projekts intäkter och kostnader, och redovisa vidarefakturerade leverantörskostnader och ditt arvende korrekt med moms (kapitel 6). En tydlig projektredovisning gör att du ser vilka uppdrag som faktiskt är lönsamma – och underlättar momsdeklarationen.",
        },
        {
          type: "subheading",
          text: "F-skatt och preliminärskatt",
        },
        {
          type: "paragraph",
          text: "Med **F-skatt** betalar du själv in din skatt och dina egenavgifter (enskild firma) eller bolagets skatt (AB). Skatteverket beslutar en **preliminärskatt** som du betalar varje månad utifrån din uppskattade vinst. Eventbranschen är ofta säsongsbetonad (bröllop sommartid, företagsevent och fester mot årets slut) – lägg undan för skatt och moms under intensiva perioder.",
        },
        {
          type: "subheading",
          text: "Vanliga avdrag för eventföretag",
        },
        {
          type: "list",
          items: [
            "**Programvara och system** – projekt-, offert- och bokföringsverktyg.",
            "**Egen eventutrustning** – dekor, ljud och ljus; större inköp skrivs av över tid.",
            "**Resor och transport** – kostnader för att besöka lokaler, leverantörer och genomföra event.",
            "**Hemmakontor eller lokal** – för den del som används i verksamheten enligt särskilda regler.",
            "**Försäkringar** – företags-, ansvars- och evenemangsförsäkring.",
            "**Marknadsföring och nätverk** – webb, mässor och branschnätverk.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Spara alla underlag",
          text: "Kvitton, fakturor, avtal (med kund och underleverantörer) och underlag för vidarefakturering ska sparas enligt bokföringslagen. Eftersom du hanterar andras pengar och många leverantörer är ordnad projekt- och avtalsdokumentation ditt bästa skydd både ekonomiskt och vid en eventuell tvist.",
        },
      ],
    },

    // 10
    {
      number: 10,
      title: "Underleverantörer och att anställa",
      lead: "Du arbetar med ett nätverk av leverantörer – och ibland egen personal vid event.",
      blocks: [
        {
          type: "paragraph",
          text: "Eventbranschen bygger på samarbete med underleverantörer (lokal, catering, foto, musik, dekor) och ofta tillfällig personal vid genomförandet. Båda har sina regler och sitt ansvar.",
        },
        {
          type: "subheading",
          text: "Underleverantörer och F-skatt",
        },
        {
          type: "paragraph",
          text: "När du anlitar underleverantörer – kontrollera att de har **F-skatt** (annars kan du i vissa fall bli skyldig att betala arbetsgivaravgifter). Skriv tydliga avtal som reglerar leverans, pris, avbokning och ansvar, så att kedjan av åtaganden håller hela vägen från din underleverantör via dig till kunden. Säkerställ också att leverantörer som behöver det (t.ex. catering, alkoholservering) har egna **tillstånd och försäkringar**.",
          source: "Skatteverket (kontroll av F-skatt hos anlitade företag).",
        },
        {
          type: "subheading",
          text: "Arbetsgivaravgifter vid anställning",
        },
        {
          type: "paragraph",
          text: "Anställer du personal (fast eller för enstaka event) betalar du lön plus **arbetsgivaravgifter** – normalsatsen 2026 är **31,42 %** av bruttolönen. Tillfällig eventpersonal anställs ofta för kort tid; var noga med korrekta anställningsavtal och villkor. Vissa nedsättningar kan finnas i särskilda fall; kontrollera hos Skatteverket. För många eventföretag räcker dock ett nätverk av frilansande underleverantörer långt innan anställning blir aktuell.",
          source: "Skatteverket, arbetsgivaravgift normalsats 31,42 % (2026).",
        },
      ],
    },

    // 11
    {
      number: 11,
      title: "Vanliga misstag och fallgropar",
      lead: "De dyraste nybörjarfelen i eventbranschen – och hur du undviker dem.",
      blocks: [
        {
          type: "list",
          items: [
            "**Svaga eller saknade avtal.** Muntliga överenskommelser kring ett oåterkalleligt evenemang är en garanterad risk. Allt skriftligt, med tydlig omfattning.",
            "**Inga avboknings- och force majeure-villkor.** Utan dem kan en avbokning eller en oväntad händelse lämna dig utan ersättning men med gjorda inköp. Reglera noga.",
            "**Ligga ute med kundens inköp.** Att betala lokal och leverantörer ur egen ficka utan handpenning slår mot likviditeten. Låt kundens betalningar finansiera inköpen.",
            "**Ge bort projektledningen gratis.** Att bara ta betalt för inköpen och inte för din tid. Skilj arvode från leverantörskostnad och ta betalt för värdet.",
            "**Missa tillstånd.** Alkohol, offentlig plats, mat och musik kan kräva tillstånd. Kartlägg dem tidigt och klargör vem som ansvarar.",
            "**Lita på underleverantörer utan avtal.** Kontrollera F-skatt, skriv avtal och säkra deras försäkringar – du bär ofta ansvaret mot kunden.",
            "**Sakna ansvarsförsäkring.** En skada på gäst eller lokal kan bli dyr utan skydd.",
            "**Ingen plan B.** Väder, sjukdom och leverantörsbortfall händer. Ha reservplaner och dokumentera dem.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Det dyraste felet är att gissa",
          text: "Vilka tillstånd och försäkringar som krävs varierar med varje evenemang. Bygg en vana att kartlägga tillstånd, avtal och ansvar för varje uppdrag – och stäm av med kommun och Polis i god tid innan evenemanget.",
        },
      ],
    },

    // 12
    {
      number: 12,
      title: "Marknadsföring och dina första kunder",
      lead: "Så får du de första uppdragen och bygger ett rykte i en relationsdriven bransch.",
      blocks: [
        {
          type: "paragraph",
          text: "Eventbranschen är **relations- och rekommendationsdriven** – nöjda kunder och samarbetande leverantörer är dina bästa säljare. Det viktigaste i början är att visa upp tidigare arbeten, bygga ett nätverk av leverantörer och vara den som är trygg att lämna ansvaret till. Här är de kanaler som ger mest för ett nystartat eventföretag.",
        },
        {
          type: "list",
          items: [
            "**Portfolio och referenser.** Visa bilder och berättelser från tidigare event (med kundens samtycke) – sociala bevis väger tungt vid stora, viktiga tillfällen.",
            "**Instagram och Pinterest.** Bröllop och event är visuella och inspirationsdrivna – ett vackert, konsekvent flöde lockar rätt kunder.",
            "**Leverantörsnätverk.** Samarbeta med fotografer, lokaler, florister och cateringföretag som rekommenderar dig vidare – och du dem.",
            "**Mässor och branschträffar.** Bröllops- och eventmässor ger direktkontakt med kunder och leverantörer.",
            "**Google och egen webbplats.** Synas när någon söker bröllops- eller eventplanerare; tydliga paket och kontakt.",
            "**Nisch.** Att specialisera dig (t.ex. bröllop, företagsevent, en viss stil) gör dig lättare att hitta och rekommendera.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Förtroende säljer i en bransch med höga insatser",
          text: "Kunden lämnar en av sina viktigaste dagar i dina händer. Tydliga avtal, referenser, proffsig kommunikation och ett starkt leverantörsnätverk gör att kunden vågar boka dig – och vågar betala för trygghet. Lyft fram det i all marknadsföring.",
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
            "Valt bolagsform (enskild firma eller AB) utifrån ansvar, skatt och uppdragens storlek",
            "Kontrollerat företagsnamn hos Bolagsverket och säkrat domän/sociala konton",
            "Registrerat företaget (AB: 1 900 kr e-tjänst, aktiekapital 25 000 kr insatt)",
            "Ansökt om F-skatt och momsregistrerat företaget",
            "Anmält verklig huvudman (AB) och öppnat företagskonto",
          ],
        },
        {
          type: "subheading",
          text: "Avtal, tillstånd och försäkring",
        },
        {
          type: "checklist",
          items: [
            "Tagit fram uppdragsavtal med tydlig omfattning, betalningsplan, avbokning och force majeure",
            "Tagit fram avtalsmall för underleverantörer (leverans, ansvar, F-skatt)",
            "Satt rutin för att kartlägga tillstånd per evenemang (alkohol, offentlig plats, mat, ljud)",
            "Tecknat ansvars- och evenemangsförsäkring samt egendomsförsäkring vid behov",
            "Klart för dig att eventtjänster inte ger ROT",
          ],
        },
        {
          type: "subheading",
          text: "Ekonomi och projekt",
        },
        {
          type: "checklist",
          items: [
            "Satt prismodell som skiljer arvode från leverantörskostnad",
            "Satt rutin för handpenning och delbetalningar som skyddar likviditeten",
            "Valt bokföringslösning med projektredovisning",
            "Byggt en buffert för utlägg innan kunden betalar",
          ],
        },
        {
          type: "subheading",
          text: "Inför första uppdraget",
        },
        {
          type: "checklist",
          items: [
            "Byggt portfolio och referenser från tidigare arbeten",
            "Skapat webbplats och profil i sociala medier",
            "Byggt ett nätverk av pålitliga underleverantörer",
            "Tagit fram en mall för projektplan med plan B",
          ],
        },
      ],
    },

    // 14
    {
      number: 14,
      title: "Resurser och myndighetskontakter",
      lead: "Spara den här sidan – här kontrollerar du aktuella regler om tillstånd, moms och skatt.",
      blocks: [
        {
          type: "paragraph",
          text: "Vilka tillstånd som krävs varierar med evenemang och kommun, och reglerna uppdateras. Använd länkarna nedan för att kontrollera aktuell uppgift direkt hos källan innan du planerar ett evenemang, prissätter eller anlitar leverantörer.",
        },
        {
          type: "links",
          items: [
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare – allt på ett ställe" },
            { label: "Skatteverket", url: "https://www.skatteverket.se", note: "Moms, F-skatt, 3:12, kontroll av F-skatt hos leverantörer" },
            { label: "Din kommun", url: "https://www.verksamt.se", note: "Serveringstillstånd, livsmedel och lokala ordningsregler" },
            { label: "Polisen", url: "https://www.polisen.se", note: "Tillstånd för offentlig tillställning och användning av offentlig plats" },
            { label: "Bolagsverket", url: "https://www.bolagsverket.se", note: "Registrering, avgifter, namn, verklig huvudman" },
            { label: "Konsumentverket", url: "https://www.konsumentverket.se", note: "Avtalsvillkor mot konsument och ångerrätt vid distansavtal" },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Vill du bolla ditt upplägg med en rådgivare?",
          text: "Den här guiden tar dig långt på egen hand. Vill du dubbelkolla val av bolagsform, dina avtal eller försäkring med en expert kan vi matcha dig med en rådgivare kostnadsfritt på driva-foretag.se/hitta-radgivare.",
        },
      ],
    },
  ],
};

export default event;
