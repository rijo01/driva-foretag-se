"use client";

import { useState } from "react";

export default function LeadForm({ source = "general" }: { source?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
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
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", category: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <p className="text-green-800 font-semibold text-lg">Tack för din förfrågan!</p>
        <p className="text-green-700 mt-2">Vi återkommer inom 24 timmar.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Namn *
          </label>
          <input
            id="name"
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
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none"
          />
        </div>
      </div>
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
          Vad behöver du hjälp med?
        </label>
        <select
          id="category"
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
          Meddelande
        </label>
        <textarea
          id="message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3 px-6 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Skickar..." : "Skicka förfrågan"}
      </button>
      {status === "error" && (
        <p className="text-red-600 text-sm text-center">Något gick fel. Försök igen.</p>
      )}
    </form>
  );
}
