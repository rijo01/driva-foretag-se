export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { getGuide } from "@/lib/guides";

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

  try {
    const { default: Stripe } = await import("stripe");
    const stripe = new Stripe(secretKey);

    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const paid = session.payment_status === "paid";
    const slug = session.metadata?.slug;
    const guide = slug ? getGuide(slug) : undefined;

    if (!paid || !guide) {
      return NextResponse.json({ paid: false });
    }

    // Ingen statisk fil-URL längre – nedladdningen går via den skyddade
    // routen /api/download?session_id=..., som verifierar betalningen på nytt
    // serverside och streamar PDF:en. Klienten bygger den URL:en själv.
    return NextResponse.json({
      paid: true,
      slug: guide.slug,
      name: guide.name,
    });
  } catch (error) {
    console.error("Verify session error:", error);
    return NextResponse.json(
      { error: "Kunde inte verifiera betalningen." },
      { status: 500 }
    );
  }
}
