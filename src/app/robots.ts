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
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}