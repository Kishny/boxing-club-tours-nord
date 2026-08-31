// =====================================================
// IMPORTS
// =====================================================
import { absoluteUrl } from "@/data/site";
import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

// =====================================================
// SEO DE LA PAGE
// =====================================================
export const metadata: Metadata = {
  title: "Contact et adresses des salles",
  description:
    "Contactez les clubs de boxe de Tours Métropole : téléphone, e-mail et adresses des trois salles à Tours Nord, Tours et La Riche.",
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
  openGraph: {
    title: "Contacter les clubs de boxe de Tours Métropole",
    description:
      "Téléphone, e-mail et adresses des trois salles : Tours Nord, Tours et La Riche.",
    url: absoluteUrl("/contact"),
  },
};

// =====================================================
// PAGE SERVEUR
// =====================================================
export default function ContactPage() {
  return <ContactPageClient />;
}
