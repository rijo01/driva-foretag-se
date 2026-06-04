export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { getGuide, GUIDE_PRICE_SEK } from "@/lib/guides";

function baseUrl(request: NextRequest): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl) return envUrl.replace(/\/$/, "");
  const origin = request.headers.get("origin");
  if (origin) return origin;
  return "https://driva-foretag.se";
}

export async function POST(request: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      { error: "Betalning är inte konfigurerad (STRIPE_SECRET_KEY saknas)." },
      { status: 503 }
    );
  }

  let slug: string | undefined;
  try {
    const body = await request.json();
    slug = body?.slug;
  } catch {
    return NextResponse.json({ error: "Ogiltig förfrågan." }, { status: 400 });
  }

  const guide = slug ? getGuide(slug) : undefined;
  if (!guide) {
    return NextResponse.json({ error: "Okänd guide." }, { status: 404 });
  }

  // Tillåt aldrig köp av en guide vars PDF ännu inte är klar – även om någon
  // anropar API:t direkt förbi "Kommer snart"-knappen i gränssnittet.
  if (!guide.available) {
    return NextResponse.json(
      { error: "Guiden är inte tillgänglig ännu." },
      { status: 409 }
    );
  }

  try {
    const { default: Stripe } = await import("stripe");
    const stripe = new Stripe(secretKey);
    const url = baseUrl(request);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      locale: "sv",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "sek",
            unit_amount: GUIDE_PRICE_SEK * 100,
            product_data: {
              name: `Startguide: ${guide.name}`,
              description: "Branschspecifik startguide (PDF) från Driva Företag.",
            },
          },
        },
      ],
      metadata: { slug: guide.slug },
      success_url: `${url}/guider/${guide.slug}/tack?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${url}/guider/${guide.slug}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Kunde inte starta betalningen. Försök igen." },
      { status: 500 }
    );
  }
}
