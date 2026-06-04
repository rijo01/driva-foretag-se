"use client";

import { useState } from "react";

// Ren klientberäkning – ingen myndighetsdata, ingen localStorage.
const kr = new Intl.NumberFormat("sv-SE", { maximumFractionDigits: 0 });
const pct = new Intl.NumberFormat("sv-SE", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

/** Tolkar fältets text till ett tal; tomt/ogiltigt → 0. */
function toNumber(value: string): number {
  if (value.trim() === "") return 0;
  const n = Number(value.replace(/\s/g, "").replace(",", "."));
  return Number.isFinite(n) ? n : 0;
}

function formatKr(n: number): string {
  return `${kr.format(Math.round(n))} kr`;
}

export default function VinstkalkylatorClient() {
  const [intakter, setIntakter] = useState("");
  const [rorliga, setRorliga] = useState("");
  const [fasta, setFasta] = useState("");

  const r = toNumber(intakter);
  const v = toNumber(rorliga);
  const f = toNumber(fasta);

  const vinst = r - (v + f);
  const tackningsbidrag = r - v;
  // Division med noll: intäkter = 0 → ingen meningsfull marginal.
  const marginal = r > 0 ? (vinst / r) * 100 : null;

  const fields = [
    {
      id: "intakter",
      label: "Intäkter",
      hint: "Total omsättning (kr)",
      value: intakter,
      set: setIntakter,
    },
    {
      id: "rorliga",
      label: "Rörliga kostnader",
      hint: "Kostnader som följer försäljningen (kr)",
      value: rorliga,
      set: setRorliga,
    },
    {
      id: "fasta",
      label: "Fasta kostnader",
      hint: "Kostnader oavsett försäljning (kr)",
      value: fasta,
      set: setFasta,
    },
  ];

  const results = [
    {
      label: "Vinst",
      help: "Intäkter − rörliga − fasta kostnader",
      value: formatKr(vinst),
      negative: vinst < 0,
      primary: true,
    },
    {
      label: "Vinstmarginal",
      help: "Vinst ÷ intäkter × 100",
      value: marginal === null ? "–" : `${pct.format(marginal)} %`,
      negative: marginal !== null && marginal < 0,
      primary: false,
    },
    {
      label: "Täckningsbidrag",
      help: "Intäkter − rörliga kostnader",
      value: formatKr(tackningsbidrag),
      negative: tackningsbidrag < 0,
      primary: false,
    },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Inmatning */}
      <div className="p-6 sm:p-8 bg-surface rounded-2xl border border-gray-100">
        <h2 className="text-xl font-heading font-bold text-brand mb-6">
          Dina siffror
        </h2>
        <div className="space-y-5">
          {fields.map((field) => (
            <div key={field.id}>
              <label
                htmlFor={field.id}
                className="block text-sm font-medium text-brand mb-1"
              >
                {field.label}
              </label>
              <div className="relative">
                <input
                  id={field.id}
                  type="number"
                  inputMode="decimal"
                  min={0}
                  placeholder="0"
                  value={field.value}
                  onChange={(e) => field.set(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 pr-12 text-right text-lg tabular-nums text-brand outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                  kr
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-500">{field.hint}</p>
            </div>
          ))}
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
                  res.primary
                    ? "text-accent-light"
                    : res.negative
                      ? "text-red-600"
                      : "text-brand"
                }`}
              >
                {res.value}
              </span>
            </div>
            <p
              className={`mt-1 text-xs ${
                res.primary ? "text-gray-300" : "text-gray-400"
              }`}
            >
              {res.help}
            </p>
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
