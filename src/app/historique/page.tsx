// =====================================================
// IMPORTS
// =====================================================
import type { Metadata } from "next";
import HistoriquePageClient from "./HistoriquePageClient";

// =====================================================
// SEO DE LA PAGE
// =====================================================
export const metadata: Metadata = {
  title: "Historique des clubs — Boxing Club La Riche & Tours Nord",
  description:
    "Découvrez l’histoire du Boxing Club de La Riche (1991) et du Boxing Club de Tours Nord (2004) : leurs grandes étapes, leurs dirigeants et les valeurs qui façonnent les clubs aujourd’hui.",
  alternates: {
    canonical: "https://boxingclub-tours.fr/historique",
  },
};

// =====================================================
// PAGE SERVEUR
// =====================================================
export default function HistoriquePage() {
  return <HistoriquePageClient />;
}
