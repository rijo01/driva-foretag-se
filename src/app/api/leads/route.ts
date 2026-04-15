import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);

    if (!body) {
      const formData = await req.formData().catch(() => null);
      if (!formData) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
      }
    }

    const data = body || {};

    // Validate required fields
    if (!data.email || !data.name) {
      return NextResponse.json(
        { error: "Namn och e-post krävs" },
        { status: 400 }
      );
    }

    // Send via Resend (initialize inside function, not module level)
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Driva Företag <noreply@driva-foretag.se>",
        to: process.env.LEAD_EMAIL || "info@driva-foretag.se",
        subject: `Ny förfrågan: ${data.topic || data.advisor_type || "Allmän"}`,
        html: `
          <h2>Ny förfrågan från driva-foretag.se</h2>
          <p><strong>Namn:</strong> ${data.name}</p>
          <p><strong>E-post:</strong> ${data.email}</p>
          <p><strong>Telefon:</strong> ${data.phone || "Ej angivet"}</p>
          <p><strong>Ämne:</strong> ${data.topic || data.advisor_type || "Ej angivet"}</p>
          <p><strong>Meddelande:</strong> ${data.message || "Inget meddelande"}</p>
        `,
      });
    }

    // Redirect to thank you or return JSON
    return NextResponse.json({
      success: true,
      message: "Tack! Vi återkommer inom 24 timmar.",
    });
  } catch (error) {
    console.error("Lead form error:", error);
    return NextResponse.json(
      { error: "Något gick fel. Försök igen." },
      { status: 500 }
    );
  }
}
