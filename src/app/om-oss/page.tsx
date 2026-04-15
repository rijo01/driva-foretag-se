import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om Driva Företag – Sveriges kunskapsplattform för företagare",
  description: "Driva Företag är Sveriges mest kompletta kunskapsplattform för företagare. Lär känna oss och vår mission.",
  alternates: { canonical: "https://driva-foretag.se/om-oss" },
};

export default function OmOss() {
  return (
    <>
      <section className="bg-[var(--color-brand)] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-white">Om Driva Företag</h1>
            <p className="text-lg text-white/70 leading-relaxed">Vi bygger Sveriges mest kompletta och tillgängliga kunskapsplattform för alla som vill starta, driva och utveckla företag.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose-content">
          <h2>Vår mission</h2>
          <p>Att göra företagande i Sverige enklare, mer tillgängligt och mer framgångsrikt. Vi tror att rätt kunskap vid rätt tidpunkt kan vara skillnaden mellan ett företag som lyckas och ett som inte gör det.</p>

          <h2>Vad vi erbjuder</h2>
          <p>Driva Företag är ett oberoende kunskapscenter med hundratals gratis guider, verktyg och resurser. Vårt innehåll täcker allt från att välja bolagsform och skriva affärsplan till avancerad skatteplanering och AI-driven effektivisering.</p>

          <h2>Våra principer</h2>
          <p><strong>Oberoende:</strong> Vi tar inte betalt av företag för att rekommendera deras tjänster. När vi jämför produkter och tjänster baseras det på faktisk kvalitet.</p>
          <p><strong>Praktiskt:</strong> Inga fluffiga svar. Vi fokuserar på konkret, handlingskraftig information som du kan använda direkt.</p>
          <p><strong>Uppdaterat:</strong> Lagar, regler och villkor ändras. Vi granskar och uppdaterar vårt innehåll löpande så att du alltid har korrekt information.</p>
          <p><strong>Expertgranskat:</strong> Vårt innehåll granskas av auktoriserade revisorer, jurister och erfarna företagare (E-E-A-T).</p>

          <h2>Så tjänar vi pengar</h2>
          <p>Driva Företag finansieras genom affiliate-samarbeten (vi kan få provision när du klickar vidare till en tjänst vi rekommenderar) och leadgenerering (när vi kopplar dig med en rådgivare). Detta påverkar aldrig våra omdömen eller rekommendationer.</p>

          <h2>Kontakt</h2>
          <p>Har du frågor, feedback eller vill samarbeta? Kontakta oss på <a href="mailto:info@driva-foretag.se">info@driva-foretag.se</a>.</p>
        </div>
      </section>
    </>
  );
}
