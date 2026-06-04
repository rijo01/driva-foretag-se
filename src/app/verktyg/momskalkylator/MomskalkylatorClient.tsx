"use client";

import { useState } from "react";

// Ren klientberäkning – ingen myndighetsdata, ingen localStorage.
const kr = new Intl.NumberFormat("sv-SE", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

/** Tolkar fältets text till ett tal; tomt/ogiltigt → 0. */
function toNumber(value: string): number {
  if (value.trim() === "") return 0;
  const n = Number(value.replace(/\s/g, "").replace(",", "."));
  return Number.isFinite(n) ? n : 0;
}

function formatKr(n: number): string {
  return `${kr.format(n)} kr`;
}

const RATES = [25, 12, 6] as const;
type Direction = "add" | "reverse";

export default function MomskalkylatorClient() {
  const [belopp, setBelopp] = useState("");
  const [rate, setRate] = useState<(typeof RATES)[number]>(25);
  const [direction, setDirection] = useState<Direction>("add");

  const amount = toNumber(belopp);
  const sats = rate / 100;

  let netto: number;
  let moms: number;
  let total: number;
  if (direction === "add") {
    // Beloppet är exkl. moms.
    netto = amount;
    moms = amount * sats;
    total = amount * (1 + sats);
  } else {
    // Beloppet är inkl. moms; (1 + sats) > 0 så ingen division med noll.
    netto = amount / (1 + sats);
    moms = amount - netto;
    total = amount;
  }

  const results = [
    {
      label: "Nettopris (exkl. moms)",
      value: formatKr(netto),
      primary: false,
    },
    {
      label: `Moms (${rate} %)`,
      value: formatKr(moms),
      primary: false,
    },
    {
      label: "Totalpris (inkl. moms)",
      value: formatKr(total),
      primary: true,
    },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Inmatning */}
      <div className="p-6 sm:p-8 bg-surface rounded-2xl border border-gray-100">
        <h2 className="text-xl font-heading font-bold text-brand mb-6">
          Dina uppgifter
        </h2>

        <div className="space-y-6">
          {/* Belopp */}
          <div>
            <label
              htmlFor="belopp"
              className="block text-sm font-medium text-brand mb-1"
            >
              Belopp
            </label>
            <div className="relative">
              <input
                id="belopp"
                type="number"
                inputMode="decimal"
                min={0}
                placeholder="0"
                value={belopp}
                onChange={(e) => setBelopp(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 pr-12 text-right text-lg tabular-nums text-brand outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                kr
              </span>
            </div>
            <p className="mt-1 text-xs text-gray-500">
              {direction === "add"
                ? "Beloppet tolkas som pris exklusive moms."
                : "Beloppet tolkas som pris inklusive moms."}
            </p>
          </div>

          {/* Momssats */}
          <div>
            <span className="block text-sm font-medium text-brand mb-2">
              Momssats
            </span>
            <div className="grid grid-cols-3 gap-2">
              {RATES.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRate(r)}
                  aria-pressed={rate === r}
                  className={`rounded-lg border px-3 py-2.5 text-sm font-medium tabular-nums transition-colors ${
                    rate === r
                      ? "border-brand bg-brand text-white"
                      : "border-gray-300 bg-white text-brand hover:border-accent/50"
                  }`}
                >
                  {r} %
                </button>
              ))}
            </div>
          </div>

          {/* Riktning */}
          <div>
            <span className="block text-sm font-medium text-brand mb-2">
              Beräkning
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setDirection("add")}
                aria-pressed={direction === "add"}
                className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${
                  direction === "add"
                    ? "border-brand bg-brand text-white"
                    : "border-gray-300 bg-white text-brand hover:border-accent/50"
                }`}
              >
                Lägg på moms
              </button>
              <button
                type="button"
                onClick={() => setDirection("reverse")}
                aria-pressed={direction === "reverse"}
                className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${
                  direction === "reverse"
                    ? "border-brand bg-brand text-white"
                    : "border-gray-300 bg-white text-brand hover:border-accent/50"
                }`}
              >
                Räkna baklänges
              </button>
            </div>
            <p className="mt-1 text-xs text-gray-500">
              {direction === "add"
                ? "Lägg på moms på ett pris exklusive moms."
                : "Räkna ut momsen ur ett pris som redan inkluderar moms."}
            </p>
          </div>
        </div>
      </div>

      {/* Resultat (live) */}
      <div className="flex flex-col gap-4">
        {results.map((res) => (
          <div
            key={res.label}
            className={`rounded-2xl border p-6 ${
              res.primary
                ? "bg-brand text-white border-brand"
                : "bg-white border-gray-100"
            }`}
          >
            <div className="flex items-baseline justify-between gap-4">
              <span
                className={`text-sm font-medium ${
                  res.primary ? "text-gray-200" : "text-gray-500"
                }`}
              >
                {res.label}
              </span>
              <span
                className={`text-2xl sm:text-3xl font-heading font-bold tabular-nums ${
                  res.primary ? "text-accent-light" : "text-brand"
                }`}
              >
                {res.value}
              </span>
            </div>
          </div>
        ))}
        <p className="text-xs text-gray-400 px-1">
          Beräkningen sker direkt i din webbläsare. Inga uppgifter sparas eller
          skickas någonstans.
        </p>
      </div>
    </div>
  );
}
