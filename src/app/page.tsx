// =====================================================
// IMPORTS
// =====================================================
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ClubMarquee from "@/components/sections/ClubsMarquee";
import Disciplines from "@/components/sections/Disciplines";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

// =====================================================
// MÉTADONNÉES DE LA PAGE D'ACCUEIL
// =====================================================
export const metadata: Metadata = {
  title: "Club de boxe à Tours - Boxing Club Tours Nord",
  description:
    "Rejoignez le Boxing Club Tours Nord, un club de boxe à Tours proposant Kickboxing, K1 Rules, Full Contact, Low Kick et Point Fighting pour tous les niveaux.",
  alternates: {
    canonical: "https://boxingclub-tours.fr/",
  },
};

// =====================================================
// PAGE D'ACCUEIL
// =====================================================
export default function Home() {
  // ---------------------------------------------------
  // DONNÉES STRUCTURÉES JSON-LD
  // IMPORTANT : remplace les infos par les vraies
  // ---------------------------------------------------
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    name: "Boxing Club Tours Nord",
    url: "https://boxingclub-tours.fr",
    logo: "https://boxingclub-tours.fr/images/logo.png",
    image: "https://boxingclub-tours.fr/images/og-image.jpg",
    telephone: "+33 6 08 95 66 66",
    email: "bctnbctmbclr@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "81 avenue de l'Europe",
      postalCode: "37100",
      addressLocality: "Tours",
      addressCountry: "FR",
    },
    areaServed: "Tours Métropole",
    sameAs: [
      "https://www.facebook.com/association.boxingclub.tours",
      "https://www.instagram.com/boxingclubtoursmetropole/",
    ],
    sport: [
      "Kickboxing",
      "K1 Rules",
      "Full Contact",
      "Low Kick",
      "Point Fighting",
    ],
  };

  return (
    <>
      {/* =================================
          DONNÉES STRUCTURÉES SEO
      ================================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* =================================
          NAVBAR
      ================================= */}
      <Navbar />

      {/* =================================
          CONTENU PRINCIPAL
      ================================= */}
      <main>
        <section id="accueil">
          <Hero />
        </section>

        <ClubMarquee />
        <Disciplines />
        <CTA />
      </main>

      {/* =================================
          FOOTER
      ================================= */}
      <Footer />
    </>
  );
}