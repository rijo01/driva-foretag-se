"use client";

import { useId, useState } from "react";
import Link from "next/link";

export default function BuyButton({
  slug,
  price,
}: {
  slug: string;
  price: number;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Uttryckligt samtycke krävs för att ångerrätten ska upphöra vid leverans av
  // digitalt innehåll (lagen 2005:59, 2 kap. 11 § 11). Utan kryss – inget köp.
  const [accepted, setAccepted] = useState(false);
  const checkboxId = useId();

  async function handleClick() {
    if (!accepted) {
      setError("Kryssa i rutan om leverans och ångerrätt för att gå vidare.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Kunde inte starta betalningen.");
      }
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Något gick fel.");
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto text-left">
      <div className="flex items-start gap-2.5 mb-4">
        <input
          id={checkboxId}
          type="checkbox"
          checked={accepted}
          onChange={(e) => {
            setAccepted(e.target.checked);
            if (e.target.checked) setError(null);
          }}
          className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-accent focus:ring-accent"
        />
        <label htmlFor={checkboxId} className="text-sm text-gray-600 leading-relaxed">
          Jag godkänner{" "}
          <Link href="/kopvillkor" className="text-accent underline">
            köpvillkoren
          </Link>{" "}
          och att guiden levereras direkt efter betalningen. Jag förstår att
          ångerrätten upphör när leveransen har påbörjats.
        </label>
      </div>
      <button
        onClick={handleClick}
        disabled={loading}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-brand font-semibold rounded-lg px-8 py-4 text-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Öppnar betalning…" : `Köp guiden – ${price} kr`}
      </button>
      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
      <p className="mt-3 text-xs text-gray-500">
        Betalningen sköts av Stripe. Läs hur vi hanterar dina uppgifter i vår{" "}
        <Link href="/integritetspolicy" className="underline">
          integritetspolicy
        </Link>
        .
      </p>
    </div>
  );
}
