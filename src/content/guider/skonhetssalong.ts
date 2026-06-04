import type { GuideContent } from "./types";

// ──────────────────────────────────────────────────────────────────────────
// STARTGUIDE: SKÖNHETSSALONG
//
// YMYL – faktagranskad mot primärkälla. Verifierade uppgifter (juni 2026):
//  • Aktiekapital privat AB 25 000 kr; AB-reg 1 900 kr e-tjänst / 2 200 kr
//    blankett (Bolagsverket). Egenavgifter 28,97 % + schablonavdrag 25 %;
//    arbetsgivaravgift 31,42 % (Skatteverket). Moms 25 %. Momsbefrielse högst
//    120 000 kr/år (fr.o.m. 1 jan 2025).
//  • HYGIENLOKAL/ANMÄLNINGSPLIKT: verksamhet där allmänheten yrkesmässigt
//    erbjuds behandling med stickande/skärande verktyg och risk för blodsmitta
//    (t.ex. piercing, tatuering, kosmetisk tatuering, akupunktur, fotvård,
//    microneedling, koppning, användning av lansetter) är anmälningspliktig
//    till kommunens miljö-/hälsoskyddsnämnd enligt 38 § förordning (1998:899)
//    om miljöfarlig verksamhet och hälsoskydd. Anmälan innan start +
//    egenkontrollprogram. (Socialstyrelsen/kommunen; nya regler 1 juli 2021.)
//  • ESTETISKA INJEKTIONER (lag 2021:363): estetiska injektionsbehandlingar
//    (t.ex. botulinumtoxin/botox och fillers) får ENDAST utföras av legitimerad
//    läkare, tandläkare eller sjuksköterska. Estetiska kirurgiska ingrepp endast
//    leg. läkare/tandläkare med adekvat specialistkompetens. INGEN delegering.
//    Verksamheten ska anmälas till IVO och betala årsavgift; IVO utövar tillsyn.
//    (Lag 2021:363; IVO; gäller fr.o.m. 1 juli 2021.)
//  • Personalliggare: skönhetsvård omfattas (kropps-/skönhetsvård). 12 500 kr +
//    2 500 kr/ej antecknad. Kassaregister krävs över fyra prisbasbelopp
//    (236 800 kr 2026). (Skatteverket.)
//
// Där en exakt siffra/regel inte verifierats skrivs den kvalitativt – aldrig
// gissad. Vad som är anmälningspliktigt varierar – hänvisa till kommunen.
// ──────────────────────────────────────────────────────────────────────────

const skonhetssalong: GuideContent = {
  slug: "skonhetssalong",
  industry: "Skönhetssalong",
  title: "Starta & driva skönhetssalong",
  subtitle: "Komplett startguide 2026",
  year: 2026,
  reviewedAt: "2026-06-04",
  reviewedSources: "Skatteverket, IVO, Socialstyrelsen & kommunens miljöförvaltning",
  intro:
    "Den kompletta, faktagranskade guiden för dig som ska starta skönhetssalong i Sverige – från bolagsform och F-skatt till hygienlokalens anmälningsplikt, reglerna för injektionsbehandlingar, kassaregister, prissättning och din första kund. Varje siffra och regel är kontrollerad mot Skatteverket, IVO, Socialstyrelsen och berörda myndigheter.",

  chapters: [
    // 1
    {
      number: 1,
      title: "Att driva skönhetssalong i Sverige",
      lead: "Vad branschen kräver av dig som företagare – och var de viktigaste reglerna finns.",
      blocks: [
        {
          type: "paragraph",
          text: "Skönhetsbranschen växer, och efterfrågan på hudvård, naglar, fransar, fotvård och olika behandlingar är stark. Tröskeln att starta verkar låg, men just den här branschen har en avgörande skiljelinje som många missar: **vilka behandlingar du erbjuder avgör vilka regler och tillstånd som gäller.** Vissa behandlingar är fria, andra är anmälningspliktiga hygienlokaler, och vissa – som injektioner – får över huvud taget bara utföras av legitimerad vårdpersonal. Den som förstår den skillnaden från start undviker både dyra misstag och allvarliga juridiska problem.",
        },
        {
          type: "paragraph",
          text: "Med **skönhetssalong** menar vi i den här guiden verksamheter som erbjuder hud- och skönhetsvård – ansiktsbehandlingar, hudvård, naglar, fransar och bryn, vaxning, fotvård och liknande. En del salonger vill också erbjuda mer ingripande behandlingar (t.ex. microneedling, piercing eller injektioner), vilket utlöser särskilda och strängare krav (kapitel 3).",
        },
        {
          type: "paragraph",
          text: "Tre saker präglar skönhetsbranschen när du startar: **regelnivån för dina behandlingar** (fritt, anmälningspliktigt eller endast för legitimerad personal), **hygien- och arbetsmiljökraven** (du arbetar nära kundens hud, ibland med stickande verktyg) och **prissättningen** (där fyllnadsgrad och merförsäljning avgör lönsamheten). De tre är genomgående teman i guiden.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Så använder du guiden",
          text: "Läs kapitel 1–6 innan du öppnar – de avgör bolagsform, tillstånd för dina behandlingar, kassaregister och moms. Kapitel 7–12 är drift: försäkring, pris, bokföring, personal och marknadsföring. Kapitel 13 är en komplett checklista, och kapitel 14 samlar alla myndighetskontakter.",
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
          text: "För de flesta skönhetssalonger står valet mellan **enskild näringsverksamhet** (enskild firma) och **aktiebolag (AB)**. Branschen har relativt låg startkostnad, så valet styrs av ansvar, skatt och hur du vill växa – men eftersom du behandlar kundens hud och kropp väger ansvarsfrågan tyngre än i många andra tjänsteyrken.",
        },
        {
          type: "subheading",
          text: "Enskild firma",
        },
        {
          type: "paragraph",
          text: "Enklast och billigast att starta – vanligt för den som börjar ensam. Du och företaget är samma juridiska person, vilket betyder att du har **personligt ansvar** för företagets skulder. Du betalar **egenavgifter** på överskottet (28,97 % för aktiv näringsverksamhet 2026, med ett schablonavdrag på 25 % innan avgiften beräknas) och inkomsten beskattas som din lön. Passar för en liten salong med låg risk.",
          source: "Skatteverket, egenavgifter 28,97 % och schablonavdrag 25 % (2026).",
        },
        {
          type: "subheading",
          text: "Aktiebolag",
        },
        {
          type: "paragraph",
          text: "Ett aktiebolag är en egen juridisk person. Ditt personliga ansvar begränsas i normalfallet till **aktiekapitalet på 25 000 kr** (lägsta tillåtna för privat AB) – relevant i ett yrke där en behandling kan orsaka skada. Bolagsformen gör det enklare att anställa, ta in delägare och bygga ett företagsvärde. Du anställs av ditt eget bolag och tar ut lön, vilket ger jämnare skatt och tillgång till t.ex. sjukpenninggrundande inkomst.",
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
            ["Lämpligt vid behandlingar med skaderisk", "Mindre", "Bättre"],
            ["Administration", "Enklare bokföring", "Årsredovisning, mer formalia"],
          ],
          source: "Bolagsverket och Skatteverket (aktiekapital 25 000 kr, egenavgifter 28,97 % 2026).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Tumregel för skönhetssalong",
          text: "Börjar du ensam med behandlingar med låg risk kan enskild firma räcka. Erbjuder du mer ingripande behandlingar, ska anställa eller tecknar ett större lokalavtal – välj AB för ansvarsbegränsningens skull.",
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
      title: "Tillstånd, hygienlokal och regler för behandlingar",
      lead: "Det här kapitlet avgör vad du får erbjuda – och var gränserna går. Läs det noga.",
      blocks: [
        {
          type: "paragraph",
          text: "Vilka regler som gäller beror helt på **vilka behandlingar** du erbjuder. Det finns tre nivåer: behandlingar som är i princip fria, behandlingar som gör lokalen anmälningspliktig, och behandlingar som bara får utföras av legitimerad vårdpersonal. Gå igenom dem nedan innan du bestämmer ditt utbud.",
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
          text: "Anmälningspliktig hygienlokal (kommunen)",
        },
        {
          type: "paragraph",
          text: "Erbjuder du yrkesmässigt behandlingar med **stickande eller skärande verktyg och risk för blodsmitta** – exempelvis **piercing, tatuering, kosmetisk tatuering, akupunktur, fotvård, microneedling, koppning eller användning av lansetter** – är verksamheten **anmälningspliktig** enligt **38 § förordning (1998:899) om miljöfarlig verksamhet och hälsoskydd**. Du ska då göra en **anmälan till kommunens miljö-/hälsoskyddsnämnd innan du startar** och ha ett **egenkontrollprogram**. Många vanliga behandlingar (t.ex. ansiktsbehandling utan stickande moment, makeup, vaxning, nagelvård) är normalt **inte** anmälningspliktiga, men lokalen lyder ändå under miljöbalkens hälsoskydd och kommunens tillsyn. Vad som gäller varierar – kontrollera med din kommun.",
          source: "Socialstyrelsen och kommunen (anmälningsplikt enligt 38 § förordning 1998:899 för behandling med risk för blodsmitta; gäller fr.o.m. 1 juli 2021).",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Injektioner och estetiska ingrepp – endast legitimerad vårdpersonal",
          text: "**Estetiska injektionsbehandlingar som botulinumtoxin (\"botox\") och fillers får enligt lag (2021:363) endast utföras av legitimerad läkare, tandläkare eller sjuksköterska** – och estetiska kirurgiska ingrepp endast av legitimerad läkare/tandläkare med adekvat specialistkompetens. **Det finns ingen rätt att delegera detta.** Verksamheter som utför sådana behandlingar ska dessutom **anmäla sig till IVO** och betala årsavgift, och står under IVO:s tillsyn. En vanlig skönhetssalong utan legitimerad vårdpersonal får alltså **inte** erbjuda injektioner – att göra det ändå är olagligt och farligt.",
          source: "Lag (2021:363) om estetiska kirurgiska ingrepp och estetiska injektionsbehandlingar; IVO (anmälan, årsavgift och tillsyn; gäller fr.o.m. 1 juli 2021).",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Personalliggare – skönhetsvård omfattas",
          text: "Skönhets- och kroppsvård omfattas av kravet på **elektronisk personalliggare** – alla verksamma ska antecknas löpande. Saknas eller är liggaren felaktig kan Skatteverket ta ut en **kontrollavgift på 12 500 kr** plus **2 500 kr per person** som inte är antecknad.",
          source: "Skatteverket, personalliggare (kropps- och skönhetsvård omfattas).",
        },
        {
          type: "subheading",
          text: "Produkter, kemikalier och arbetsmiljö",
        },
        {
          type: "paragraph",
          text: "Du hanterar produkter och kemikalier (t.ex. vid vaxning, nagelprodukter, hudvård) som kan orsaka allergier och besvär. Ha säkerhetsdatablad tillgängliga, sörj för god ventilation (särskilt vid nagelprodukter), och följ Arbetsmiljöverkets regler om kemiska arbetsmiljörisker och ergonomi. Kosmetiska produkter omfattas dessutom av EU:s kosmetikaregler och tillsyn (Läkemedelsverket) – använd godkända produkter.",
          source: "Arbetsmiljöverket (kemiska arbetsmiljörisker, ergonomi); Läkemedelsverket (kosmetiska produkter).",
        },
        {
          type: "links",
          items: [
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare" },
            { label: "Din kommuns miljöförvaltning", url: "https://www.verksamt.se", note: "Anmälningsplikt hygienlokal enligt 38 § FMH" },
            { label: "IVO", url: "https://www.ivo.se", note: "Estetiska injektioner och kirurgiska ingrepp (lag 2021:363)" },
            { label: "Socialstyrelsen", url: "https://www.socialstyrelsen.se", note: "Hälsoskydd och estetiska behandlingar" },
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
          text: "En skönhetssalong kräver lokal, inredning, behandlingsutrustning och produkter. Kostnaden varierar mycket med utbud – en nagelsalong är billigare att utrusta än en avancerad hudvårdsklinik. Här är de poster du bör budgetera för. Myndighetsavgifter anges som fastställda belopp; övriga poster som kostnadsslag att räkna på.",
        },
        {
          type: "table",
          columns: ["Post", "Kommentar"],
          rows: [
            ["Aktiekapital (om AB)", "25 000 kr – sätts in på företagskonto, är ditt och kan användas i driften"],
            ["Registrering AB hos Bolagsverket", "1 900 kr via e-tjänst på verksamt.se (2 200 kr med pappersblankett)"],
            ["F-skatt och momsregistrering", "Gratis hos Skatteverket"],
            ["Anmälan hygienlokal (vid behov)", "Kommunal avgift om din verksamhet är anmälningspliktig – kontrollera hos kommunen"],
            ["Lokal", "Hyra, deposition och anpassning (vatten, ventilation, behandlingsrum)"],
            ["Behandlingsutrustning och inredning", "Britsar, stolar, apparater, lampor, sterilisering"],
            ["Produkter och förbrukning", "Hudvård, vax, nagelprodukter, engångsmaterial"],
            ["Kassaregister med kontrollenhet", "Certifierat kassaregister anmält till Skatteverket"],
            ["Boknings- och kassasystem", "Tidbokning, betalning och kvitton"],
            ["Försäkringar", "Företags-, egendoms- och behandlingsansvarsförsäkring (se kapitel 7)"],
          ],
          source: "Bolagsverket (1 900 kr AB e-tjänst, 25 000 kr aktiekapital); Skatteverket (F-skatt/moms gratis).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Utbudet styr investeringen – och reglerna",
          text: "Innan du investerar, bestäm ditt behandlingsutbud noga. Det avgör både hur dyr utrustningen blir och vilka tillstånd som krävs (kapitel 3). Att börja smalt och bygga ut när salongen går runt sänker både risk och startkostnad.",
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
              title: "Bestäm ditt behandlingsutbud",
              text: "Avgör vilka behandlingar du ska erbjuda – det styr vilka tillstånd som krävs (anmälningsplikt, eventuellt krav på legitimerad personal). Gör detta först.",
            },
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
              text: "Görs gratis via verksamt.se. Skönhetstjänster har moms 25 % (befrielse möjlig först vid omsättning på högst 120 000 kr/år – se kapitel 6).",
            },
            {
              title: "Gör eventuell hygienlokalsanmälan till kommunen",
              text: "Är din verksamhet anmälningspliktig (stickande/skärande, blodsmitterisk) – anmäl till kommunens miljöförvaltning innan start och upprätta egenkontrollprogram. Ska du erbjuda injektioner krävs legitimerad personal och anmälan till IVO.",
            },
            {
              title: "Skaffa kassaregister och anmäl till Skatteverket",
              text: "Certifierat kassaregister med kontrollenhet om kontant-/kortförsäljningen överstiger fyra prisbasbelopp/år. Anmäl registret till Skatteverket.",
            },
            {
              title: "Registrera arbetsgivare och anmäl verklig huvudman",
              text: "Anmäl dig som arbetsgivare hos Skatteverket om du ska anställa. AB ska anmäla verklig huvudman till Bolagsverket, normalt inom fyra veckor.",
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
          text: "verksamt.se är myndigheternas gemensamma e-tjänst (Bolagsverket, Skatteverket och Tillväxtverket). Du kan registrera företag, ansöka om F-skatt, momsregistrera dig och anmäla arbetsgivare i samma inloggade flöde. Hygienanmälan görs hos kommunen och injektionsanmälan hos IVO.",
          source: "verksamt.se (Bolagsverket, Skatteverket, Tillväxtverket).",
        },
      ],
    },

    // 6
    {
      number: 6,
      title: "Moms och kassaregister",
      lead: "Skönhetstjänster har 25 % moms – och kassaregisterkraven är hårda i en kontantbransch.",
      blocks: [
        {
          type: "paragraph",
          text: "Momsen är enkel i skönhetsbranschen, men kassaregister- och personalliggarkraven är desto viktigare eftersom branschen granskas särskilt.",
        },
        {
          type: "subheading",
          text: "Moms 25 %",
        },
        {
          type: "paragraph",
          text: "Skönhets- och hudvårdstjänster samt försäljning av produkter har **moms 25 %** (normalsats). Du kan vara momsbefriad först om omsättningen är **högst 120 000 kr per år** (gränsen gäller sedan 1 januari 2025) – men då kan du inte dra av ingående moms på dina inköp, vilket sällan lönar sig.",
          source: "Skatteverket, momsnormalsats 25 % och momsbefrielse vid omsättning på högst 120 000 kr/år (fr.o.m. 1 jan 2025).",
        },
        {
          type: "subheading",
          text: "Kassaregister",
        },
        {
          type: "paragraph",
          text: "Säljer du mot kontanter eller kort (Swish jämställs med kort) behöver du normalt ett **certifierat kassaregister** med kontrollenhet, anmält till Skatteverket. Undantag gäller bara om sådan försäljning är **högst fyra prisbasbelopp inkl. moms per år – 236 800 kr för 2026**. De flesta salonger ligger över gränsen. Reglerna ses över inför 2027 – kontrollera aktuellt hos Skatteverket.",
          source: "Skatteverket, krav på kassaregister och undantaget fyra prisbasbelopp (236 800 kr 2026; Swish jämställs med kort).",
        },
        {
          type: "callout",
          variant: "fact",
          title: "Notera: vård kan vara momsfri – men skönhetsvård är det normalt inte",
          text: "Sjukvård och tandvård är momsbefriade, men **estetiska behandlingar utan medicinskt syfte räknas normalt som momspliktiga (25 %)**. Gränsdragningen kan vara knepig om du erbjuder behandlingar med medicinskt inslag – kontrollera mot Skatteverket vad som gäller för just dina tjänster.",
          source: "Skatteverket (sjukvård momsfri; estetiska behandlingar utan medicinskt syfte normalt momspliktiga 25 %).",
        },
      ],
    },

    // 7
    {
      number: 7,
      title: "Försäkringar du faktiskt behöver",
      lead: "Rätt skydd när du behandlar kundens hud och kropp.",
      blocks: [
        {
          type: "paragraph",
          text: "Som skönhetssalong arbetar du nära kundens hud och kropp – en behandling kan ge allergiska reaktioner, brännskador eller andra skador som leder till skadeståndskrav. Behandlingsansvarsförsäkring är därför i praktiken nödvändig. Läs villkoren noga, eftersom vissa behandlingar kan vara undantagna.",
        },
        {
          type: "list",
          items: [
            "**Företagsförsäkring med ansvars-/behandlingsförsäkring** – täcker skador på kund vid behandling. Kontrollera att just dina behandlingar omfattas av villkoren.",
            "**Egendoms- och inventarieförsäkring** – skyddar inredning, apparater och produktlager mot brand, vatten, stöld och skadegörelse.",
            "**Avbrottsförsäkring** – ersätter utebliven inkomst om salongen tvingas hålla stängt efter en skada.",
            "**Produktansvarsförsäkring** – om du säljer hud- och skönhetsprodukter.",
            "**Olycksfalls- och sjukavbrottsförsäkring** – ekonomiskt skydd för dig själv när verksamheten står och faller med att du är på plats.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Kontrollera att behandlingarna omfattas",
          text: "Försäkringsbolag kan ha undantag eller särskilda villkor för vissa behandlingar (t.ex. stickande/skärande moment, laser, kemiska peelingar). Berätta exakt vilka behandlingar du erbjuder när du tecknar – annars riskerar du att stå utan skydd just där risken är som störst.",
        },
      ],
    },

    // 8
    {
      number: 8,
      title: "Prissättning och lönsamhet",
      lead: "Så sätter du priser och fyller tiderna så att det blir vinst.",
      blocks: [
        {
          type: "paragraph",
          text: "Lönsamheten i en skönhetssalong avgörs av **fyllnadsgrad** (hur stor del av din behandlingstid som är bokad) och **merförsäljning**. Ditt pris ska täcka din (eller de anställdas) lön, sociala avgifter, lokal, produkter, utrustning, försäkring och vinst – och du tjänar bara när stolen eller britsen är upptagen. Räkna baklänges från vad du behöver per år.",
        },
        {
          type: "subheading",
          text: "Bygg upp ditt pris",
        },
        {
          type: "list",
          items: [
            "Utgå från **önskad lön** och lägg på sociala avgifter, semester och pension.",
            "Lägg till **fasta kostnader**: hyra, el, produkter, apparater, försäkring och system.",
            "Räkna med **realistisk fyllnadsgrad** – tomtid mellan bokningar är din största dolda kostnad.",
            "Prissätt **per behandling** efter faktisk tidsåtgång och produktåtgång; långa behandlingar måste bära sin tid.",
            "Lägg på **vinstmarginal** och räkna med produktförsäljning som komplement.",
          ],
        },
        {
          type: "subheading",
          text: "Merförsäljning och paket",
        },
        {
          type: "paragraph",
          text: "Försäljning av hudvårdsprodukter och behandlingspaket/klippkort höjer snittnotan och binder kunden. Rekommendera produkter du själv använder i behandlingen, och erbjud paket som ger återkommande besök. Det är ofta mer lönsamt att öka värdet per kund än att jaga ständigt nya kunder.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Onlinebokning minskar tomtid",
          text: "Ett bokningssystem där kunder bokar själva dygnet runt, med påminnelser för att minska uteblivna besök, är ett av de mest lönsamhetshöjande verktygen i branschen. Varje tom tid är förlorad intäkt.",
        },
      ],
    },

    // 9
    {
      number: 9,
      title: "Bokföring och skatt",
      lead: "Löpande ordning i ekonomin – och det skönhetssalonger ofta gör fel med kontanter.",
      blocks: [
        {
          type: "paragraph",
          text: "Alla företag är enligt bokföringslagen skyldiga att löpande bokföra sina affärshändelser och spara underlag. En skönhetssalong har många små transaktioner och kontanthantering – ett bra kassasystem och ofta en redovisningsbyrå underlättar.",
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
          text: "Vanliga avdrag för skönhetssalong",
        },
        {
          type: "list",
          items: [
            "**Produkter och förbrukningsmaterial** – hudvård, vax, nagelprodukter, engångsmaterial.",
            "**Behandlingsutrustning och inredning** – apparater, britsar och stolar; större inköp skrivs av över tid.",
            "**Lokalkostnader** – hyra, el, vatten, ventilation och städning.",
            "**Kassa- och bokningssystem** – programvara, kontrollenhet och licenser.",
            "**Utbildning och certifieringar** – kurser som rör de behandlingar du erbjuder.",
            "**Försäkringar och arbetskläder** – företags-/behandlingsförsäkring och yrkeskläder.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Kontantbranschen granskas hårt",
          text: "Skönhetsbranschen är kontantintensiv och granskas särskilt av Skatteverket, med krav på kassaregister och personalliggare. Ordnad kassaredovisning och dokumenterad personalliggare är ditt bästa skydd vid en kontroll. Spara alla underlag enligt bokföringslagen, och dokumentera även egenkontrollen om din verksamhet är anmälningspliktig.",
        },
      ],
    },

    // 10
    {
      number: 10,
      title: "Att anställa",
      lead: "Från första medarbetaren: avgifter, kompetens, personalliggare och ansvar.",
      blocks: [
        {
          type: "paragraph",
          text: "Skönhetssalonger växer ofta genom att anställa behandlare – arbetet är platsbundet och personberoende. Men personal följer med kostnader och ansvar du måste ha koll på innan du skriver första anställningsavtalet.",
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
          text: "Rätt kompetens för behandlingarna",
        },
        {
          type: "paragraph",
          text: "Se till att anställda har rätt utbildning för de behandlingar de utför, och kom ihåg att vissa behandlingar (injektioner, kirurgiska ingrepp) **bara får utföras av legitimerad vårdpersonal** (kapitel 3) – det kan du inte lösa genom att anställa en behandlare utan legitimation. Alla verksamma ska antecknas i **personalliggaren**, och du har arbetsmiljöansvar för ergonomi, kemikalier och hygien.",
          source: "Lag (2021:363) och Arbetsmiljöverket; Skatteverket (personalliggare).",
        },
      ],
    },

    // 11
    {
      number: 11,
      title: "Vanliga misstag och fallgropar",
      lead: "De dyraste – och allvarligaste – nybörjarfelen i skönhetsbranschen.",
      blocks: [
        {
          type: "list",
          items: [
            "**Erbjuda injektioner utan legitimerad personal.** Botox och fillers får enligt lag (2021:363) bara utföras av leg. läkare, tandläkare eller sjuksköterska, med anmälan till IVO. Att göra det ändå är olagligt och farligt.",
            "**Missa hygienlokalsanmälan.** Stickande/skärande behandlingar (piercing, microneedling, fotvård m.m.) kräver anmälan till kommunen innan start och egenkontroll.",
            "**Sakna eller missköta kassaregister/personalliggare.** Båda krävs och kontrolleras hårt; kontrollavgifterna är höga.",
            "**Försäkring som inte täcker dina behandlingar.** Berätta exakt vad du erbjuder så att skyddet gäller – annars står du utan vid en skada.",
            "**Hög tomtid.** Olönsamma luckor i bokningen är branschens största dolda kostnad. Använd onlinebokning och påminnelser.",
            "**För lågt pris på tidskrävande behandlingar.** Prissätt efter faktisk tid och produktåtgång, inte magkänsla.",
            "**Slarv med kemikalier och ventilation.** Allergier och besvär (särskilt nagelprodukter) är vanliga – sköt ventilation och skydd från start.",
            "**Ingen merförsäljning.** Att inte ta vara på produkt- och paketförsäljning lämnar lönsamhet på bordet.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Det dyraste felet är att gissa",
          text: "Reglerna kring behandlingar, hygienlokal och injektioner är stränga och kontrolleras av flera myndigheter. Bygg en vana att kontrollera aktuell uppgift hos kommunen, IVO och Skatteverket innan du lägger till en ny behandling – och spara dokumentationen.",
        },
      ],
    },

    // 12
    {
      number: 12,
      title: "Marknadsföring och dina första kunder",
      lead: "Så fyller du tiderna och bygger en lojal kundstock.",
      blocks: [
        {
          type: "paragraph",
          text: "En skönhetssalong lever på återkommande kunder, synliga resultat och lokal närvaro. Det viktigaste i början är att vara lätt att hitta och boka, visa upp ditt arbete och få kunderna att boka om. Här är de kanaler som ger mest för en nystartad salong.",
        },
        {
          type: "list",
          items: [
            "**Instagram och TikTok.** Skönhetsarbete är visuellt – före- och efterbilder och korta klipp lockar nya kunder och visar din nivå.",
            "**Onlinebokning dygnet runt.** Låt kunder boka själva med påminnelser – det fyller tiderna och minskar uteblivna besök.",
            "**Google – sökning och karta.** En Google-företagsprofil med bilder, behandlingar och omdömen gör att du syns när någon söker i ditt område.",
            "**Boka-om vid besöket.** Be kunden boka nästa behandling redan på plats – det skapar återkommande intäkter.",
            "**Paket och klippkort.** Binder kunden och höjer värdet per kund.",
            "**Värvning och samarbeten.** Belöna kunder som tipsar vänner, och samarbeta med t.ex. frisörer och bröllopsfotografer.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Resultatet och upplevelsen säljer",
          text: "Nöjda kunder som ser resultat kommer tillbaka och rekommenderar dig vidare – den billigaste och bästa marknadsföringen. Lägg krut på kvalitet, hygien och bemötande från första kunden.",
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
            "Bestämt behandlingsutbud och klargjort vilka regler det utlöser",
            "Valt bolagsform (enskild firma eller AB) utifrån ansvar och skatt",
            "Registrerat företaget (AB: 1 900 kr e-tjänst, aktiekapital 25 000 kr insatt)",
            "Ansökt om F-skatt och momsregistrerat företaget",
            "Anmält verklig huvudman (AB) och öppnat företagskonto",
          ],
        },
        {
          type: "subheading",
          text: "Tillstånd, hygien och kassa",
        },
        {
          type: "checklist",
          items: [
            "Gjort hygienlokalsanmälan till kommunen om verksamheten är anmälningspliktig",
            "Säkerställt att injektioner/ingrepp endast utförs av legitimerad personal med IVO-anmälan (om sådant erbjuds)",
            "Upprättat egenkontrollprogram vid anmälningspliktig verksamhet",
            "Skaffat certifierat kassaregister och anmält det till Skatteverket",
            "Satt rutin för elektronisk personalliggare",
          ],
        },
        {
          type: "subheading",
          text: "Ekonomi och försäkring",
        },
        {
          type: "checklist",
          items: [
            "Tecknat behandlings-/ansvarsförsäkring som omfattar just dina behandlingar",
            "Tecknat egendoms- och avbrottsförsäkring",
            "Satt priser per behandling efter tid och produktåtgång, med realistisk fyllnadsgrad",
            "Satt rutin för ventilation och kemikaliehantering",
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
            "Skapat Google-profil och sociala kanaler med bilder",
            "Planerat produktförsäljning, paket och merförsäljning",
            "Säkerställt likviditet/kassareserv för de första månaderna",
          ],
        },
      ],
    },

    // 14
    {
      number: 14,
      title: "Resurser och myndighetskontakter",
      lead: "Spara den här sidan – här kontrollerar du aktuella regler om hygien, behandlingar och skatt.",
      blocks: [
        {
          type: "paragraph",
          text: "Reglerna kring behandlingar, hygienlokal och injektioner är stränga och kan ändras. Använd länkarna nedan för att kontrollera aktuell uppgift direkt hos källan innan du lägger till en behandling, prissätter eller anställer.",
        },
        {
          type: "links",
          items: [
            { label: "verksamt.se", url: "https://www.verksamt.se", note: "Registrera företag, F-skatt, moms, arbetsgivare – allt på ett ställe" },
            { label: "IVO", url: "https://www.ivo.se", note: "Estetiska injektioner och kirurgiska ingrepp (lag 2021:363), anmälan och tillsyn" },
            { label: "Socialstyrelsen", url: "https://www.socialstyrelsen.se", note: "Hälsoskydd och yrkesmässig hygienisk verksamhet" },
            { label: "Din kommuns miljöförvaltning", url: "https://www.verksamt.se", note: "Anmälningsplikt hygienlokal enligt 38 § FMH och egenkontroll" },
            { label: "Skatteverket", url: "https://www.skatteverket.se", note: "Moms, kassaregister, personalliggare, belopp och procent" },
            { label: "Läkemedelsverket", url: "https://www.lakemedelsverket.se", note: "Regler för kosmetiska produkter" },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Vill du bolla ditt upplägg med en rådgivare?",
          text: "Den här guiden tar dig långt på egen hand. Vill du dubbelkolla val av bolagsform, vilka tillstånd dina behandlingar kräver eller försäkring med en expert kan vi matcha dig med en rådgivare kostnadsfritt på driva-foretag.se/hitta-radgivare.",
        },
      ],
    },
  ],
};

export default skonhetssalong;
