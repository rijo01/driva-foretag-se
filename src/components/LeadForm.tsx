"use client";

import { useState } from "react";

const WEB3FORMS_ACCESS_KEY = "9fc4fd14-7183-472a-9ca1-cc358d7c6eee";

const categoryLabels: Record<string, string> = {
  redovisning: "Redovisning & Bokföring",
  juridik: "Juridik & Avtal",
  skatt: "Skatt & Deklaration",
  finansiering: "Finansiering & Lån",
  marknadsforing: "Marknadsföring",
  ovrigt: "Övrigt",
};

export default function LeadForm({ source = "general" }: { source?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    category: "",
    message: "",
  });

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
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", category: "", message: "" });
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
          Vi har tagit emot ditt meddelande och återkommer med matchade rådgivare
          inom <strong>24 timmar</strong>. Håll koll på din inkorg
          (och skräpposten).
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
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none"
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
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none"
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
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none"
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
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none"
          />
        </div>
      </div>
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
          Typ av rådgivare
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none bg-white"
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
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none"
          placeholder="Beskriv kort vad du behöver hjälp med…"
        />
      </div>
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
      <p className="text-xs text-gray-500 text-center">
        Vi delar aldrig dina uppgifter med tredje part utan ditt samtycke.
      </p>
    </form>
  );
}
