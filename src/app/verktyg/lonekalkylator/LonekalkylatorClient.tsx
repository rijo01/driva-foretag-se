"use client";

import { useState } from "react";

// Ren klientberäkning – ingen localStorage. Satserna nedan är de som angetts
// som indata till verktyget; användaren uppmanas kontrollera aktuella satser
// hos Skatteverket (se notering i sidan).
const kr = new Intl.NumberFormat("sv-SE", { maximumFractionDigits: 0 });

function toNumber(value: string): number {
  if (value.trim() === "") return 0;
  const n = Number(value.replace(/\s/g, "").replace(",", "."));
  return Number.isFinite(n) ? n : 0;
}

function formatKr(n: number): string {
  return `${kr.format(Math.round(n))} kr`;
}

type Avgiftsfall = "normal" | "ung" | "pensionar";

const AVGIFTSFALL: { id: Avgiftsfall; label: string }[] = [
  { id: "normal", label: "Normal (31,42 %)" },
  {
    id: "ung",
    label: "Ung 18–22 år (20,81 % upp till 25 000 kr/mån, 1 apr 2026–30 sep 2027)",
  },
  { id: "pensionar", label: "Pensionär 67+ (10,21 %)" },
];

const NORMAL = 0.3142;
const UNG = 0.2081;
const PENSIONAR = 0.1021;
const UNG_TAK = 25000;

export default function LonekalkylatorClient() {
  const [bruttoStr, setBruttoStr] = useState("");
  const [fall, setFall] = useState<Avgiftsfall>("normal");
  const [kommunalStr, setKommunalStr] = useState("");

  const brutto = toNumber(bruttoStr);

  let avgift: number;
  if (fall === "pensionar") {
    avgift = brutto * PENSIONAR;
  } else if (fall === "ung") {
    // Skiktad: 20,81 % upp till 25 000 kr, 31,42 % på överskjutande del.
    avgift =
      Math.min(brutto, UNG_TAK) * UNG +
      Math.max(0, brutto - UNG_TAK) * NORMAL;
  } else {
    avgift = brutto * NORMAL;
  }
  const totalKostnad = brutto + avgift;

  // Nettolön: kräver att användaren själv anger kommunal skattesats. Ingen
  // förvald siffra och ingen gissning – tomt fält → ingen uträkning ("–").
  const harSkatt = kommunalStr.trim() !== "";
  const skatteSats = toNumber(kommunalStr) / 100;
  const netto = harSkatt ? brutto - brutto * skatteSats : null;

  const arbetsgivarResultat = [
    {
      label: "Arbetsgivaravgift",
      value: formatKr(avgift),
      primary: false,
    },
    {
      label: "Total arbetsgivarkostnad",
      help: "Bruttolön + arbetsgivaravgift",
      value: formatKr(totalKostnad),
      primary: true,
    },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Inmatning */}
      <div className="p-6 sm:p-8 bg-surface rounded-2xl border border-gray-100">
        <h2 className="text-xl font-heading font-bold text-brand mb-6">
          Underlag
        </h2>

        <div className="space-y-6">
          {/* Bruttolön */}
          <div>
            <label
              htmlFor="brutto"
              className="block text-sm font-medium text-brand mb-1"
            >
              Månadslön (brutto)
            </label>
            <div className="relative">
              <input
                id="brutto"
                type="number"
                inputMode="decimal"
                min={0}
                placeholder="0"
                value={bruttoStr}
                onChange={(e) => setBruttoStr(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 pr-12 text-right text-lg tabular-nums text-brand outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                kr
              </span>
            </div>
          </div>

          {/* Avgiftsfall */}
          <div>
            <label
              htmlFor="fall"
              className="block text-sm font-medium text-brand mb-1"
            >
              Avgiftsfall
            </label>
            <select
              id="fall"
              value={fall}
              onChange={(e) => setFall(e.target.value as Avgiftsfall)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-brand outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
            >
              {AVGIFTSFALL.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.label}
                </option>
              ))}
            </select>
            {fall === "ung" && (
              <p className="mt-1 text-xs text-gray-500">
                20,81 % gäller endast upp till 25 000 kr/mån; den del av lönen
                som överstiger 25 000 kr beräknas med 31,42 %.
              </p>
            )}
          </div>

          {/* Kommunal skattesats (för nettolön) */}
          <div className="border-t border-gray-200 pt-5">
            <label
              htmlFor="kommunal"
              className="block text-sm font-medium text-brand mb-1"
            >
              Kommunal skattesats (för nettolön)
            </label>
            <div className="relative">
              <input
                id="kommunal"
                type="number"
                inputMode="decimal"
                min={0}
                placeholder="Ange din kommuns skattesats"
                value={kommunalStr}
                onChange={(e) => setKommunalStr(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 pr-10 text-right text-lg tabular-nums text-brand outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                %
              </span>
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Du anger själv satsen – verktyget gissar ingen skattesats. Hittas
              hos din kommun eller Skatteverket.
            </p>
          </div>
        </div>
      </div>

      {/* Resultat (live) */}
      <div className="flex flex-col gap-4">
        {arbetsgivarResultat.map((res) => (
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
            {res.help && (
              <p
                className={`mt-1 text-xs ${
                  res.primary ? "text-gray-300" : "text-gray-400"
                }`}
              >
                {res.help}
              </p>
            )}
          </div>
        ))}

        {/* Nettolön (separat, förenklat) */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6">
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-sm font-medium text-gray-500">
              Uppskattad nettolön
            </span>
            <span className="text-2xl sm:text-3xl font-heading font-bold tabular-nums text-brand">
              {netto === null ? "–" : formatKr(netto)}
            </span>
          </div>
          <p className="mt-2 text-xs text-gray-400">
            Förenklad – tar ej hänsyn till jobbskatteavdrag, statlig skatt eller
            avgifter. Använd Skatteverkets skattetabell för exakt skatt.
          </p>
        </div>

        <p className="text-xs text-gray-400 px-1">
          Beräkningen sker direkt i din webbläsare. Inga uppgifter sparas eller
          skickas någonstans.
        </p>
      </div>
    </div>
  );
}
