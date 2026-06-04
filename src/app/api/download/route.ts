export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";
import { getGuide } from "@/lib/guides";

// Serverside-mapp utanför public/ – PDF:erna serveras ALDRIG statiskt.
const PDF_DIR = join(process.cwd(), "content", "guides-pdf");

export async function GET(request: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      { error: "Betalning är inte konfigurerad (STRIPE_SECRET_KEY saknas)." },
      { status: 503 }
    );
  }

  const sessionId = request.nextUrl.searchParams.get("session_id");
  if (!sessionId) {
    return NextResponse.json({ error: "session_id saknas." }, { status: 400 });
  }

  const { default: Stripe } = await import("stripe");
  const stripe = new Stripe(secretKey);

  let guide;
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const paid = session.payment_status === "paid";
    const slug = session.metadata?.slug;
    guide = slug ? getGuide(slug) : undefined;

    // 403 om betalningen inte är verifierad eller guiden okänd.
    if (!paid || !guide) {
      return NextResponse.json(
        { error: "Betalning kunde inte verifieras." },
        { status: 403 }
      );
    }
  } catch (error) {
    // Ett ogiltigt/okänt session_id (StripeInvalidRequestError, t.ex.
    // resource_missing) betyder att betalningen inte kan verifieras → 403.
    // Fel API-nyckel (autentisering) är ett konfigfel → 503. Övrigt → 500.
    if (error instanceof Stripe.errors.StripeAuthenticationError) {
      console.error("Download: Stripe authentication failed.", error);
      return NextResponse.json(
        { error: "Betalning är inte korrekt konfigurerad." },
        { status: 503 }
      );
    }
    if (error instanceof Stripe.errors.StripeInvalidRequestError) {
      return NextResponse.json(
        { error: "Betalning kunde inte verifieras." },
        { status: 403 }
      );
    }
    console.error("Download error:", error);
    return NextResponse.json(
      { error: "Kunde inte leverera guiden." },
      { status: 500 }
    );
  }

  // Läs PDF:en serverside. getGuide() har redan validerat att slug:en finns
  // i katalogen, så filnamnet kan inte manipuleras (ingen path traversal).
  let pdf: Buffer;
  try {
    pdf = await readFile(join(PDF_DIR, `${guide.slug}.pdf`));
  } catch {
    return NextResponse.json(
      { error: "Guiden kunde inte hittas." },
      { status: 404 }
    );
  }

  return new NextResponse(new Uint8Array(pdf), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="startguide-${guide.slug}.pdf"`,
      "Content-Length": String(pdf.byteLength),
      "Cache-Control": "private, no-store",
    },
  });
}
