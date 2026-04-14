// =====================================================
// IMPORT
// =====================================================
import type { MetadataRoute } from "next";

// =====================================================
// ROBOTS DU SITE
// =====================================================
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://boxingclub-tours.fr/sitemap.xml",
  };
}