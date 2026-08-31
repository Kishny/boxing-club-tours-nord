// =====================================================
// IMPORTS
// =====================================================
import fallbackPlanning from "@/data/planning-fallback.json";
import { absoluteUrl } from "@/data/site";
import connectDB from "@/lib/mongodb";
import Planning from "@/models/Planning";
import type { Metadata } from "next";
import HorairesPageClient, { type PlanningItem } from "./HorairesPageClient";

// =====================================================
// SEO DE LA PAGE
// =====================================================
export const metadata: Metadata = {
  title: "Horaires des clubs",
  description:
    "Consultez les horaires des 3 clubs Boxing Club Tours Nord, Tours Métropole et La Riche : créneaux, disciplines, niveaux et informations pratiques.",
  alternates: {
    canonical: absoluteUrl("/horaires"),
  },
};

// Le planning bouge rarement : on sert du HTML statique régénéré toutes les
// cinq minutes. Indispensable pour que Google voie les créneaux, qui étaient
// auparavant chargés côté navigateur (la page ne contenait qu'un spinner).
export const revalidate = 300;

// =====================================================
// CHARGEMENT DU PLANNING CÔTÉ SERVEUR
// =====================================================
async function getPlanning(): Promise<PlanningItem[]> {
  try {
    await connectDB();
    const data = await Planning.find().lean();
    if (Array.isArray(data) && data.length > 0) {
      // `lean()` renvoie des ObjectId : on sérialise pour le composant client.
      return JSON.parse(JSON.stringify(data)) as PlanningItem[];
    }
  } catch (error) {
    console.error("Horaires : base injoignable, données locales utilisées", error);
  }
  return fallbackPlanning as PlanningItem[];
}

// =====================================================
// PAGE SERVEUR
// =====================================================
export default async function HorairesPage() {
  const planning = await getPlanning();
  return <HorairesPageClient initialPlanning={planning} />;
}
