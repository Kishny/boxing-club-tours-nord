// src/data/contact.ts
// =====================================================
// COORDONNÉES DU CLUB
// Source unique pour les pages Inscription et Contact.
// -----------------------------------------------------
// ⚠️ À COMPLÉTER : email et téléphone sont encore les valeurs
// d'exemple du template. Les remplacer par les vraies coordonnées
// avant la mise en ligne définitive.
// =====================================================

export const CLUB_CONTACT = {
  email: "contact@boxingclub.fr",
  phone: "+33 6 00 00 00 00",
  phoneHref: "+33600000000",
};

export type Salle = {
  short: string;
  name: string;
  address: string;
  accent: string;
  glow: string;
};

export const CLUB_SALLES: Salle[] = [
  {
    short: "BCTN",
    name: "Boxing Club Tours Nord",
    address: "81 avenue de l’Europe, 37100 Tours",
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.20)",
  },
  {
    short: "BCLR",
    name: "Boxing Club La Riche",
    address: "Gymnase J.M Bialy, 6 rue du Petit Plessis, 37520 La Riche",
    accent: "#ef4444",
    glow: "rgba(239,68,68,0.20)",
  },
  {
    short: "BCTM",
    name: "Boxing Club Tours Métropole",
    address: "Gymnase du Hallebardier, allée Yvon Gilbert, 37000 Tours",
    accent: "#ffffff",
    glow: "rgba(255,255,255,0.14)",
  },
];
