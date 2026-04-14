// =====================================================
// IMPORTS GLOBAUX
// =====================================================
import type { Metadata } from "next";
import "./globals.css";

// =====================================================
// MÉTADONNÉES GLOBALES DU SITE
// =====================================================
export const metadata: Metadata = {
  title: {
    default: "Boxing Club Tours Nord - Club de boxe à Tours",
    template: "%s | Boxing Club Tours Nord",
  },

  description:
    "Boxing Club Tours Nord : club de boxe à Tours proposant Kickboxing, K1 Rules, Full Contact, Low Kick et Point Fighting pour tous les niveaux.",

  keywords: [
    "boxing club tours",
    "club de boxe tours",
    "boxe tours nord",
    "kickboxing tours",
    "k1 tours",
    "full contact tours",
    "low kick tours",
    "point fighting tours",
    "sports de combat tours",
    "club de boxe indre et loire",
    "club de boxe tours métropole",
  ],

  metadataBase: new URL("https://boxingclub-tours.fr"),

  // =====================================================
  // FAVICONS ET ICÔNES
  // =====================================================
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  // =====================================================
  // OPEN GRAPH
  // =====================================================
  openGraph: {
    title: "Boxing Club Tours Nord - Club de boxe à Tours",
    description:
      "Découvrez le Boxing Club Tours Nord et rejoignez un club d'excellence dédié aux sports de combat à Tours.",
    url: "https://boxingclub-tours.fr",
    siteName: "Boxing Club Tours Nord",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Boxing Club Tours Nord",
      },
    ],
  },

  // =====================================================
  // TWITTER CARD
  // =====================================================
  twitter: {
    card: "summary_large_image",
    title: "Boxing Club Tours Nord - Club de boxe à Tours",
    description:
      "Kickboxing, K1 Rules, Full Contact, Low Kick et Point Fighting à Tours.",
    images: ["/images/og-image.jpg"],
  },
};

// =====================================================
// ROOT LAYOUT
// =====================================================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}