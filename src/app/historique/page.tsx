// =====================================================
// IMPORTS
// =====================================================
import type { Metadata } from "next";
import HistoriquePageClient from "./HistoriquePageClient";

// =====================================================
// SEO DE LA PAGE
// =====================================================
export const metadata: Metadata = {
  title: "Historique du Boxing Club Tours Nord",
  description:
    "Découvrez l’histoire du Boxing Club Tours Nord, ses grandes étapes, son évolution et l’identité sportive qui façonne aujourd’hui le club à Tours.",
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
