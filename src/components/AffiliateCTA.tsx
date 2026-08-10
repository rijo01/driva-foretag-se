"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { getAffiliate } from "@/lib/affiliates";

interface AffiliateCTAProps {
  /** Nyckel i src/lib/affiliates.ts – styr både URL och om boxen visas alls. */
  partner: string;
  /** Visningsnamn. Faller tillbaka på namnet i affiliates.ts. */
  partnerName?: string;
  /** Knapptext, t.ex. "Öppna konto hos Qonto". */
  label?: string;
  /** Valfri kort beskrivning ovanför knappen. */
  description?: string;
  /** Var på sidan boxen står – skickas med som GA4-parameter. */
  placement?: string;
}

export default function AffiliateCTA({
  partner,
  partnerName,
  label,
  description,
  placement,
}: AffiliateCTAProps) {
  const affiliate = getAffiliate(partner);

  // Inga döda länkar live: renderar ingenting förrän partnern är aktiverad
  // med en riktig trackinglänk i src/lib/affiliates.ts.
  if (!affiliate?.active || !affiliate.url || affiliate.url === "#") {
    return null;
  }

  const name = partnerName ?? affiliate.name;

  return (
    <aside
      className="my-8 rounded-xl border border-accent/30 bg-surface p-5 sm:p-6"
      aria-label={`Annonslänk till ${name}`}
    >
      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-white px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-brand">
        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Annonslänk
      </span>

      <p className="mt-3 font-heading text-lg font-bold text-brand">{name}</p>

      {description && (
        <p className="mt-1 text-sm leading-relaxed text-gray-600">{description}</p>
      )}

      <a
        href={affiliate.url}
        target="_blank"
        rel="sponsored noopener"
        onClick={() =>
          sendGAEvent("event", "affiliate_click", {
            partner,
            placement: placement ?? "",
          })
        }
        className="mt-4 inline-block rounded-lg bg-accent px-6 py-2.5 font-semibold transition-colors hover:bg-accent-light"
        style={{ color: "#ffffff", textDecoration: "none" }}
      >
        {label ?? `Till ${name}`}
      </a>

      <p className="mt-3 text-xs leading-relaxed text-gray-500">
        Annonssamarbete: länken är en annonslänk och vi kan få ersättning om du
        blir kund via den. Innehållet i artikeln är redaktionellt.
      </p>
    </aside>
  );
}
