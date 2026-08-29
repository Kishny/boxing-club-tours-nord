// /app/inscription/page.tsx
// =====================================================
// IMPORTS
// =====================================================
import { absoluteUrl } from "@/data/site";
import type { Metadata } from "next";
import InscriptionPageClient from "./InscriptionPageClient";

// =====================================================
// SEO DE LA PAGE INSCRIPTION
// =====================================================
export const metadata: Metadata = {
  title: "Inscription Boxing Club Tours Nord | Kickboxing, K1, Full Contact à Tours",
  description:
    "Inscrivez-vous au Boxing Club Tours Nord à Tours. Demande d’adhésion, séance d’essai, orientation personnalisée, disciplines pieds-poings, tous niveaux, progression encadrée.",
  keywords: [
    "inscription boxing club tours nord",
    "adhésion club boxe tours",
    "séance d'essai boxe tours",
    "kickboxing tours",
    "k1 tours",
    "full contact tours",
    "club sports de combat tours",
    "boxe pieds poings tours",
    "inscription kickboxing tours",
    "boxing club tours nord",
  ],
  alternates: {
    canonical: absoluteUrl("/inscription"),
  },
  openGraph: {
    title: "Inscription | Boxing Club Tours Nord",
    description:
      "Rejoignez le Boxing Club Tours Nord : demande d’adhésion, orientation personnalisée, séance d’essai et accès à un cadre structuré pour progresser.",
    url: absoluteUrl("/inscription"),
    siteName: "Boxing Club Tours Nord",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inscription | Boxing Club Tours Nord",
    description:
      "Déposez votre demande d’inscription au Boxing Club Tours Nord à Tours.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// =====================================================
// PAGE SERVEUR
// =====================================================
export default function InscriptionPage() {
  return <InscriptionPageClient />;
}