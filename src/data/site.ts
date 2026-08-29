// src/data/site.ts
// =====================================================
// IDENTITÉ DU SITE
// Source unique pour les métadonnées, les URL canoniques,
// le sitemap et les données structurées.
// =====================================================

// Domaine officiel du club. Doit être rattaché au projet Vercel et
// pointé en DNS pour que les URL canoniques soient valides.
export const SITE_URL = "https://www.boxingtoursmetropole.fr";

export const SITE_NAME = "Boxing Club Tours Métropole";

/** Construit une URL absolue à partir d'un chemin ("/tarifs"). */
export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
