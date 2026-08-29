// src/data/contact.ts
// =====================================================
// COORDONNÉES DU CLUB
// Source unique pour les pages Inscription, Contact et
// les données structurées de la page d'accueil.
// Source : programme officiel BCLR saison 2026-2027.
// =====================================================

export type ClubContact = {
  name: string;
  phone: string;
  phoneHref: string;
};

// Adresse email commune aux trois clubs (BCTN, BCTM, BCLR).
export const CLUB_EMAIL = "bctnbctmbclr@gmail.com";

// Contact principal, utilisé quand un seul numéro est affiché.
export const CLUB_MAIN_CONTACT: ClubContact = {
  name: "André Macé",
  phone: "06 08 95 66 66",
  phoneHref: "+33608956666",
};

export const CLUB_CONTACTS: ClubContact[] = [
  CLUB_MAIN_CONTACT,
  { name: "Yves Le Vern", phone: "07 50 52 54 15", phoneHref: "+33750525415" },
  { name: "Brenda Macé", phone: "06 76 52 50 87", phoneHref: "+33676525087" },
  { name: "Brian Macé", phone: "07 83 04 53 84", phoneHref: "+33783045384" },
];

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
    address: "Salle Jean-Marie Bialy, 6 rue du Petit Plessis, 37520 La Riche",
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
