"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GA_MEASUREMENT_ID } from "@/lib/site";

/**
 * Cookie-samtycke. GA4 laddas ALDRIG förrän besökaren har klickat
 * "Godkänn statistik" (LEK 9 kap. 28 § och GDPR). Valet sparas i localStorage
 * – det är en nödvändig lagring för att komma ihåg valet och kräver inget
 * samtycke. Utan sparat val visas bannern och inget mätskript körs.
 *
 * "Cookieinställningar" i sidfoten öppnar bannern igen via eventet nedan.
 */
const STORAGE_KEY = "df-cookie-consent-v1";
export const OPEN_CONSENT_EVENT = "df:open-cookie-consent";

type Choice = "granted" | "denied";
/** "unknown" = server/ingen hydrering ännu – visa varken banner eller GA. */
type Snapshot = Choice | "none" | "unknown";

// Reserv om localStorage inte går att använda (privat läge e.d.): valet gäller
// då bara den här sidvisningen.
let memoryChoice: Choice | null = null;
const listeners = new Set<() => void>();

function readChoice(): Choice | null {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (v === "granted" || v === "denied") return v;
  } catch {
    // faller tillbaka på minnet
  }
  return memoryChoice;
}

function saveChoice(choice: Choice) {
  memoryChoice = choice;
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // se memoryChoice
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

const getSnapshot = (): Snapshot => readChoice() ?? "none";
const getServerSnapshot = (): Snapshot => "unknown";

/** Tar bort GA:s cookies på den här domänen när samtycket dras tillbaka. */
function clearGaCookies() {
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  for (const raw of document.cookie.split(";")) {
    const name = raw.split("=")[0].trim();
    if (name === "_ga" || name.startsWith("_ga_")) {
      for (const d of domains) {
        document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
      }
    }
  }
}

export default function CookieConsent() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    const reopen = () => setReopened(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  const choice: Choice | null =
    snapshot === "granted" || snapshot === "denied" ? snapshot : null;
  const open = snapshot === "none" || (snapshot !== "unknown" && reopened);

  function decide(next: Choice) {
    const wasGranted = choice === "granted";
    saveChoice(next);
    setReopened(false);
    if (next === "denied" && wasGranted) {
      // GA-skriptet är redan laddat i den här fliken. Stäng av det, rensa
      // cookies och ladda om så att inget mer skickas.
      (window as unknown as Record<string, boolean>)[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
      clearGaCookies();
      window.location.reload();
    }
  }

  return (
    <>
      {choice === "granted" && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
      {open && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookieinställningar"
          className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row md:items-center gap-4">
            <p className="text-sm text-gray-700 leading-relaxed flex-1">
              Vi vill använda Google Analytics för att se hur sajten används.
              Det sätter cookies och skickar uppgifter till Google, och det sker
              bara om du godkänner. Sajten fungerar lika bra utan. Läs mer i vår{" "}
              <Link href="/integritetspolicy" className="text-accent underline">
                integritetspolicy
              </Link>
              .
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                type="button"
                onClick={() => decide("denied")}
                className="px-4 py-2 text-sm font-semibold rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-50"
              >
                Avböj
              </button>
              <button
                type="button"
                onClick={() => decide("granted")}
                className="px-4 py-2 text-sm font-semibold rounded-lg bg-brand text-white hover:bg-brand-light"
              >
                Godkänn statistik
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
