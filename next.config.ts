import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Guide-PDF:erna ligger utanför public/ och läses serverside av
  // /api/download. De måste tracas in i den serverlösa funktionens bundle,
  // annars saknas de i produktion (404).
  outputFileTracingIncludes: {
    "/api/download": ["./content/guides-pdf/**/*"],
  },

  // De gamla författarsidorna (påhittade personer) är borttagna. Både index
  // och varje enskild författar-slug skickas med 301 till /redaktionen, som nu
  // är sajtens avsändare. (statusCode i stället för permanent, som ger 308.)
  async redirects() {
    return [
      { source: "/forfattare", destination: "/redaktionen", statusCode: 301 },
      {
        source: "/forfattare/:slug",
        destination: "/redaktionen",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
