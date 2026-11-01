/**
 * Faktagranskningsmetoden – delas av /om-oss och /redaktionen så att de två
 * sidorna aldrig kan glida isär och beskriva olika processer.
 *
 * Varje påstående här måste vara sant om hur vi faktiskt arbetar. Inga
 * meriter, inga titlar, inga externa granskare vi inte har.
 */
export default function Faktagranskningsmetod() {
  return (
    <>
      <ol className="list-decimal pl-6 space-y-4 text-gray-700 mb-8">
        <li>
          <strong className="text-brand">Primärkälla först.</strong> Varje
          belopp, procentsats, avgift, gränsvärde och lagrum kontrolleras mot
          den myndighet eller lagtext som äger uppgiften – Skatteverket,
          Bolagsverket, Försäkringskassan, Arbetsmiljöverket eller lagtexten på
          riksdagen.se. Vi skriver aldrig av en siffra från en annan
          webbplats, och vi återanvänder aldrig en siffra från ett tidigare år
          utan att kontrollera den på nytt.
        </li>
        <li>
          <strong className="text-brand">Länkar till källan.</strong>{" "}
          Artiklarna länkar till myndighetskällor som Skatteverket,
          Bolagsverket och verksamt.se eller till lagtexten, så att du kan gå
          direkt till originalet och kontrollera oss. Några äldre artiklar
          saknar ännu sådana länkar och kompletteras löpande. Hittar du en
          uppgift utan källa får du gärna höra av dig.
        </li>
        <li>
          <strong className="text-brand">Datum per artikel.</strong> Varje
          artikel visar när den publicerades och när den senast stämdes av mot
          källorna. Ett uppdateringsdatum sätts bara när innehållet faktiskt
          har kontrollerats om – inte när vi rör en rubrik.
        </li>
        <li>
          <strong className="text-brand">Rättelser.</strong> Hittar du ett fel
          vill vi veta det. Vi rättar och flyttar fram
          uppdateringsdatumet när något visar sig vara felaktigt eller
          inaktuellt.
        </li>
      </ol>

      <div className="bg-surface rounded-xl p-6 mb-8">
        <h3 className="font-semibold text-brand mb-2">
          Vad det här inte är
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Innehållet på sajten är allmän information, inte individuell
          juridisk, skattemässig eller ekonomisk rådgivning. Regler ändras och
          din situation kan skilja sig från exemplen. Vid beslut som betyder
          något – bolagsform, större transaktioner, tvister, komplicerad
          beskattning – ta kontakt med en rådgivare som kan gå igenom just ditt
          fall.
        </p>
      </div>
    </>
  );
}
