// Avsändaruppgifter – EN sanningskälla för sidfot, /om-oss, /redaktionen och
// Organization-schemat i layout.tsx.
//
// Värden som börjar med "[" räknas som ofyllda platshållare och utelämnas ur
// JSON-LD (se `organizationSchema` i src/app/layout.tsx). Vi hittar hellre
// ingenting på än publicerar en gissning – sajten är YMYL.

export const SITE_NAME = "Driva Företag";
export const SITE_URL = "https://driva-foretag.se";
export const SITE_LOGO = `${SITE_URL}/logo.png`;

/**
 * Registrerat bolag som äger och driver sajten.
 * Verifierat mot foretagskoll.se 2026-11-01: aktivt AB, registrerat 2022-01-07.
 */
export const OWNER_COMPANY = "Rickard Johansson Invest AB";
/** Organisationsnummer för OWNER_COMPANY. */
export const OWNER_ORG_NR = "559359-0416";

/** GA4-mätnings-ID. Laddas bara efter samtycke (src/components/CookieConsent.tsx). */
export const GA_MEASUREMENT_ID = "G-R8758D2N9X";

/** Redaktionens kontaktadress. Samma brevlåda som lead-formuläret går till. */
export const CONTACT_EMAIL = "info@driva-foretag.se";

/**
 * Profiler på andra plattformar (sameAs i Organization-schemat).
 *
 * TOM MED FLIT. Lägg bara till en URL här när profilen faktiskt existerar och
 * ägs av oss – ett sameAs mot ett konto vi inte kontrollerar är ren fabrikation
 * och slår tillbaka i Googles E-E-A-T-bedömning.
 */
export const SITE_SAME_AS: string[] = [];

/** True så länge ett värde fortfarande är en ifyllningsbar platshållare. */
export function isPlaceholder(value: string): boolean {
  return value.trim().startsWith("[");
}
