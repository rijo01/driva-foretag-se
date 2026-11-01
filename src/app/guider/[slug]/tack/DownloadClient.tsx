"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface VerifyResult {
  paid: boolean;
  name?: string;
}

export default function DownloadClient({ slug }: { slug: string }) {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState<"loading" | "paid" | "unpaid" | "error">(
    "loading"
  );
  const [result, setResult] = useState<VerifyResult | null>(null);

  useEffect(() => {
    if (!sessionId) {
      setStatus("unpaid");
      return;
    }
    let active = true;
    fetch(`/api/verify-session?session_id=${encodeURIComponent(sessionId)}`)
      .then((res) => res.json())
      .then((data: VerifyResult) => {
        if (!active) return;
        if (data.paid) {
          setResult(data);
          setStatus("paid");
        } else {
          setStatus("unpaid");
        }
      })
      .catch(() => {
        if (active) setStatus("error");
      });
    return () => {
      active = false;
    };
  }, [sessionId]);

  if (status === "loading") {
    return (
      <p className="text-gray-600">Verifierar din betalning…</p>
    );
  }

  if (status === "paid" && result) {
    return (
      <div>
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/15 text-accent text-3xl mb-6">
          ✓
        </div>
        <h1 className="font-heading font-bold text-3xl text-brand mb-3">
          Tack för ditt köp!
        </h1>
        <p className="text-gray-600 mb-8 max-w-xl">
          Din startguide för {result.name} är klar att ladda ner. Spara filen –
          länken är personlig för det här köpet.
        </p>
        <a
          href={`/api/download?session_id=${encodeURIComponent(sessionId ?? "")}`}
          download
          className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-brand font-semibold rounded-lg px-8 py-4 text-lg transition-colors"
        >
          ⬇ Ladda ner guiden (PDF)
        </a>
        <p className="mt-8 max-w-xl mx-auto text-sm text-gray-600 bg-surface rounded-lg px-4 py-3">
          Du har samtyckt till omedelbar leverans och därmed avstått från
          ångerrätten. Har du inte laddat ner guiden kan du fortfarande ångra
          köpet inom 14 dagar, se{" "}
          <Link href="/kopvillkor" className="text-accent underline">
            köpvillkoren
          </Link>
          .
        </p>
        <p className="mt-6 text-sm text-gray-500">
          Vill du bolla ditt upplägg med en redovisningskonsult eller revisor?{" "}
          <Link href="/hitta-radgivare" className="text-accent underline">
            Så väljer du rätt
          </Link>
          .
        </p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div>
        <h1 className="font-heading font-bold text-3xl text-brand mb-3">
          Något gick fel
        </h1>
        <p className="text-gray-600 mb-6 max-w-xl">
          Vi kunde inte verifiera din betalning just nu. Har pengarna dragits men
          du inte fått din guide? Kontakta oss så hjälper vi dig direkt.
        </p>
        <Link href={`/guider/${slug}`} className="text-accent underline">
          Tillbaka till guiden
        </Link>
      </div>
    );
  }

  // unpaid / saknar session_id
  return (
    <div>
      <h1 className="font-heading font-bold text-3xl text-brand mb-3">
        Ingen betalning hittades
      </h1>
      <p className="text-gray-600 mb-6 max-w-xl">
        Vi kunde inte hitta en genomförd betalning för den här guiden. Om du
        avbröt köpet kan du försöka igen.
      </p>
      <Link
        href={`/guider/${slug}`}
        className="inline-flex items-center justify-center bg-accent hover:bg-accent-light text-brand font-semibold rounded-lg px-6 py-3 transition-colors"
      >
        Till guiden
      </Link>
    </div>
  );
}
