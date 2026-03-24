import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    "Komplett resurs för svenska företagare. Guider om att starta företag, bokföring, juridik, marknadsföring, skatt och mycket mer.",
  metadataBase: new URL("https://driva-foretag.se"),
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: "Driva Företag",
  },
  alternates: {
    canonical: "https://driva-foretag.se",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Driva Företag",
              url: "https://driva-foretag.se",
              description:
                "Sveriges mest kompletta resurs för företagare.",
              inLanguage: "sv-SE",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Driva Företag",
              url: "https://driva-foretag.se",
              logo: "https://driva-foretag.se/logo.png",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 font-body antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
