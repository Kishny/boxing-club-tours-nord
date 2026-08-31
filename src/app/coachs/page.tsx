// =====================================================
// IMPORTS
// =====================================================
import { absoluteUrl } from "@/data/site";
import type { Metadata } from "next";
import CoachsPageClient from "./CoachsPageClient";

// =====================================================
// SEO DE LA PAGE
// =====================================================
export const metadata: Metadata = {
  title: "L’équipe d’encadrement",
  description:
    "Rencontrez l’encadrement des clubs de boxe de Tours Métropole : entraîneurs diplômés, disciplines encadrées et accompagnement des compétiteurs comme des loisirs.",
  alternates: {
    canonical: absoluteUrl("/coachs"),
  },
  openGraph: {
    title: "L’équipe d’encadrement des clubs de boxe de Tours",
    description:
      "Les entraîneurs qui encadrent le kick-boxing, le K1, le full contact et la boxe anglaise à Tours, Tours Nord et La Riche.",
    url: absoluteUrl("/coachs"),
  },
};

// =====================================================
// PAGE SERVEUR
// =====================================================
export default function CoachsPage() {
  return <CoachsPageClient />;
}
