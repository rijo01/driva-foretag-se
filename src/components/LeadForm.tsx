"use client";

import Link from "next/link";
import { useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";

const WEB3FORMS_ACCESS_KEY = "9fc4fd14-7183-472a-9ca1-cc358d7c6eee";

const categoryLabels: Record<string, string> = {
  redovisning: "Redovisning & Bokföring",
  juridik: "Juridik & Avtal",
  skatt: "Skatt & Deklaration",
  finansiering: "Finansiering & Lån",
  marknadsforing: "Marknadsföring",
  ovrigt: "Övrigt",
};

const businessFormLabels: Record<string, string> = {
  ef: "Enskild firma",
  ab: "Aktiebolag",
  hb: "Handels-/kommanditbolag",
  ej_startat: "Har inte startat företag än",
};

const needLabels: Record<string, string> = {
  bokforing: "Löpande bokföring",
  deklaration: "Deklaration & bokslut",
  radgivning: "Rådgivning",
  annat: "Annat",
};

const inputClass =
  "w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none";

interface LeadFormProps {
  source?: string;
  /**
   * "basic" = namn, e-post, telefon, företag, kategori, meddelande (startsidan).
   * "full"  = som ovan + ort, bolagsform, typ av hjälp och samtyckesruta
   *           (/hitta-radgivare).
   */
  variant?: "basic" | "full";
}

export default function LeadForm({
  source = "general",
  variant = "basic",
}: LeadFormProps) {
  const isFull = variant === "full";
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    city: "",
    businessForm: "",
    need: "",
    category: "",
    message: "",
  });
  const [consent, setConsent] = useState(false);

  function resetForm() {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      city: "",
      businessForm: "",
      need: "",
      category: "",
      message: "",
    });
    setConsent(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `Ny förfrågan från driva-foretag.se (${source})`,
        from_name: "Driva Företag – Lead",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        category: formData.category ? categoryLabels[formData.category] ?? formData.category : "",
        ...(isFull
          ? {
              city: formData.city,
              businessForm: formData.businessForm
                ? businessFormLabels[formData.businessForm] ?? formData.businessForm
                : "",
              need: formData.need ? needLabels[formData.need] ?? formData.need : "",
              consent: consent ? "Ja – samtycker till kontakt via e-post" : "Nej",
            }
          : {}),
        message: formData.message,
        source,
        botcheck: "",
      };
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Submission failed");
      }
      sendGAEvent("event", "lead_submit", {
        source,
        category: formData.category || "",
        need: isFull ? formData.need || "" : "",
      });
      setStatus("success");
      resetForm();
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Okänt fel");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 sm:p-10 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-8 w-8 text-green-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl font-bold text-green-900 mb-2">
          Tack för din förfrågan!
        </h3>
        <p className="text-green-800 max-w-md mx-auto">
          Vi har tagit emot ditt meddelande och återkommer via e-post med
          förslag på hjälp. Håll koll på din inkorg (och skräpposten).
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-green-700 hover:text-green-900 underline underline-offset-4"
        >
          Skicka en till förfrågan
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Namn *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-post *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Företagsnamn
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>

      {isFull && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              Ort
            </label>
            <input
              id="city"
              name="city"
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className={inputClass}
              placeholder="T.ex. Göteborg"
            />
          </div>
          <div>
            <label htmlFor="businessForm" className="block text-sm font-medium text-gray-700 mb-1">
              Bolagsform
            </label>
            <select
              id="businessForm"
              name="businessForm"
              value={formData.businessForm}
              onChange={(e) => setFormData({ ...formData, businessForm: e.target.value })}
              className={`${inputClass} bg-white`}
            >
              <option value="">Välj bolagsform</option>
              <option value="ef">Enskild firma</option>
              <option value="ab">Aktiebolag</option>
              <option value="hb">Handels-/kommanditbolag</option>
              <option value="ej_startat">Har inte startat företag än</option>
            </select>
          </div>
        </div>
      )}

      {isFull && (
        <div>
          <label htmlFor="need" className="block text-sm font-medium text-gray-700 mb-1">
            Vad behöver du hjälp med?
          </label>
          <select
            id="need"
            name="need"
            value={formData.need}
            onChange={(e) => setFormData({ ...formData, need: e.target.value })}
            className={`${inputClass} bg-white`}
          >
            <option value="">Välj område</option>
            <option value="bokforing">Löpande bokföring</option>
            <option value="deklaration">Deklaration & bokslut</option>
            <option value="radgivning">Rådgivning</option>
            <option value="annat">Annat</option>
          </select>
        </div>
      )}

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
          Typ av rådgivare
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className={`${inputClass} bg-white`}
        >
          <option value="">Välj kategori</option>
          <option value="redovisning">Redovisning & Bokföring</option>
          <option value="juridik">Juridik & Avtal</option>
          <option value="skatt">Skatt & Deklaration</option>
          <option value="finansiering">Finansiering & Lån</option>
          <option value="marknadsforing">Marknadsföring</option>
          <option value="ovrigt">Övrigt</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Meddelande *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={inputClass}
          placeholder="Beskriv kort vad du behöver hjälp med…"
        />
      </div>

      {isFull && (
        <div className="flex items-start gap-2.5">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-accent focus:ring-accent"
          />
          <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
            Jag samtycker till att mina uppgifter används för att kontakta mig om
            min förfrågan enligt vår{" "}
            <Link href="/integritetspolicy" className="text-accent underline">
              integritetspolicy
            </Link>
            . *
          </label>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3 px-6 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Skickar…" : "Skicka förfrågan"}
      </button>
      {status === "error" && (
        <p className="text-red-600 text-sm text-center">
          Något gick fel: {errorMessage || "försök igen om en stund."}
        </p>
      )}
      <p className="text-xs text-gray-500 text-center leading-relaxed">
        Formuläret skickas som e-post till oss via tjänsten Web3Forms – vi sparar
        inga uppgifter i någon databas. Vi delar aldrig dina uppgifter med tredje
        part utan ditt samtycke. Läs mer i vår{" "}
        <Link href="/integritetspolicy" className="underline">
          integritetspolicy
        </Link>
        .
      </p>
    </form>
  );
}
