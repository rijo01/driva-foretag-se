/**
 * Central konfiguration för affiliate-partners.
 *
 * `url` fylls i med riktiga trackinglänkar från Adtraction/Adrecord.
 * Så länge `active: false` renderar <AffiliateCTA /> INGENTING – inga döda
 * länkar går live. Sätt active: true först när både avtal och trackinglänk
 * finns på plats.
 *
 * Märkning enligt marknadsföringslagen sker i komponenten (se AffiliateCTA).
 */

export interface Affiliate {
  /** Visningsnamn i CTA-boxen */
  name: string;
  /** Trackinglänk från affiliate-nätverket. "#" = ej inkopplad ännu. */
  url: string;
  /** Renderas komponenten? false = helt osynlig på sajten. */
  active: boolean;
}

export const affiliates = {
  qonto: {
    name: "Qonto",
    url: "#",
    active: false,
  },
  revolut: {
    name: "Revolut Business",
    url: "#",
    active: false,
  },
  fortnox: {
    name: "Fortnox",
    url: "#",
    active: false,
  },
  bokio: {
    name: "Bokio",
    url: "#",
    active: false,
  },
} as const satisfies Record<string, Affiliate>;

export type AffiliateKey = keyof typeof affiliates;

export function getAffiliate(key: string): Affiliate | null {
  return (affiliates as Record<string, Affiliate>)[key] ?? null;
}

/**
 * En partner räknas som aktiv först när både flaggan är satt och en riktig
 * URL finns. Används av AffiliateCTA och av annonspolicyn i sidfoten.
 */
export function isAffiliateLive(key: string): boolean {
  const affiliate = getAffiliate(key);
  return Boolean(affiliate?.active && affiliate.url && affiliate.url !== "#");
}

/** True först när minst en partner är live – styr annonspolicy-raden i footern. */
export function hasLiveAffiliates(): boolean {
  return Object.keys(affiliates).some(isAffiliateLive);
}
