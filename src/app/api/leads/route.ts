export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { Resend } = await import("resend");
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await request.json();
    const { name, email, phone, company, category, message, source } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Namn och e-post krävs" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Driva Företag <leads@driva-foretag.se>",
      to: [process.env.LEAD_EMAIL ?? "info@driva-foretag.se"],
      subject: `Ny lead: ${name} – ${category || "Allmän förfrågan"}`,
      html: `
        <h2>Ny förfrågan från ${source || "okänd källa"}</h2>
        <table>
          <tr><td><strong>Namn:</strong></td><td>${name}</td></tr>
          <tr><td><strong>E-post:</strong></td><td>${email}</td></tr>
          <tr><td><strong>Telefon:</strong></td><td>${phone || "-"}</td></tr>
          <tr><td><strong>Företag:</strong></td><td>${company || "-"}</td></tr>
          <tr><td><strong>Kategori:</strong></td><td>${category || "-"}</td></tr>
          <tr><td><strong>Meddelande:</strong></td><td>${message || "-"}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Kunde inte skicka förfrågan" },
      { status: 500 }
    );
  }
}
