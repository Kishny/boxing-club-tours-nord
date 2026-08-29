import { absoluteUrl } from "@/data/site";
import type { Metadata } from "next";
import HorairesPageClient from "./HorairesPageClient";

export const metadata: Metadata = {
  title: "Horaires des clubs",
  description:
    "Consultez les horaires des 3 clubs Boxing Club Tours Nord, Tours Métropole et La Riche : créneaux, disciplines, niveaux et informations pratiques.",
  alternates: {
    canonical: absoluteUrl("/horaires"),
  },
};

export default function HorairesPage() {
  return <HorairesPageClient />;
}