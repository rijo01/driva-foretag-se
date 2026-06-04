import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Guide-PDF:erna ligger utanför public/ och läses serverside av
  // /api/download. De måste tracas in i den serverlösa funktionens bundle,
  // annars saknas de i produktion (404).
  outputFileTracingIncludes: {
    "/api/download": ["./content/guides-pdf/**/*"],
  },
};

export default nextConfig;
