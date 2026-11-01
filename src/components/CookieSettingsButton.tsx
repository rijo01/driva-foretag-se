"use client";

import { OPEN_CONSENT_EVENT } from "@/components/CookieConsent";

/** Öppnar cookie-bannern igen så att besökaren kan ändra eller dra tillbaka sitt val. */
export default function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
      className={className}
    >
      Cookieinställningar
    </button>
  );
}
