// =====================================================
// IMPORT
// =====================================================
import { absoluteUrl } from "@/data/site";
import type { MetadataRoute } from "next";

// =====================================================
// ROBOTS DU SITE
// =====================================================
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // L'administration et l'API n'ont rien à faire dans les résultats
      // de recherche.
      disallow: ["/admin", "/api"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}