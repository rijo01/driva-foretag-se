import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import {
  SITE_NAME,
  SITE_URL,
  SITE_LOGO,
  SITE_SAME_AS,
  OWNER_COMPANY,
  OWNER_ORG_NR,
  CONTACT_EMAIL,
  isPlaceholder,
} from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Driva Företag – Sveriges guide för företagare",
    template: "%s | Driva Företag",
  },
  description:
    "Guider för svenska företagare om att starta företag, bokföring, juridik, marknadsföring, skatt och finansiering – med källor till Skatteverket och Bolagsverket.",
  metadataBase: new URL("https://driva-foretag.se"),
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: "Driva Företag",
  },
  alternates: {
    canonical: "https://driva-foretag.se",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
};

/**
 * Organization-schema. Bara verifierbara uppgifter.
 *
 * - `sameAs` utelamnas helt sa lange vi inte har nagon profil som faktiskt
 *   existerar. En tom array sager ingenting; en pahittad profil ar en logn.
 * - `legalName` och `taxID` (organisationsnumret) skickas bara med nar
 *   platshallarna i src/lib/site.ts ar ifyllda – annars skulle "[AGARBOLAG]"
 *   hamna i strukturerad data.
 * - Inga aggregateRating/Review: vi har inga riktiga betyg, alltsa inga betyg.
 */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: SITE_LOGO,
  description:
    "Guider och verktyg för svenska företagare om bolagsformer, bokföring, skatt, juridik och finansiering.",
  ...(isPlaceholder(OWNER_COMPANY) ? {} : { legalName: OWNER_COMPANY }),
  ...(isPlaceholder(OWNER_ORG_NR) ? {} : { taxID: OWNER_ORG_NR }),
  ...(SITE_SAME_AS.length > 0 ? { sameAs: SITE_SAME_AS } : {}),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: CONTACT_EMAIL,
    availableLanguage: ["sv"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <meta name="theme-color" content="#0C2340" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: SITE_NAME,
              url: SITE_URL,
              description:
                "Guider och verktyg för svenska företagare om bolagsformer, bokföring, skatt, juridik och finansiering.",
              inLanguage: "sv-SE",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 font-body antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* GA4 laddas först efter samtycke – se CookieConsent. */}
        <CookieConsent />
      </body>
    </html>
  );
}
