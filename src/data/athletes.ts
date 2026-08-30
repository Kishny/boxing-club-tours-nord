// data/athletes.ts
// =====================================================
// TYPE ATHLÈTE
// =====================================================
export type Athlete = {
  id: number;
  slug: string;
  name: string;
  discipline: string;
  level: string;
  record: string;
  image: string;
  imagePosition: string;
  description: string;
  achievements: string[];
  accent: string;
  glow: string;
  icon: "flame" | "trophy" | "shield";
};

// =====================================================
// DONNÉES ATHLÈTES - Compétiteurs du Boxing Club Tours Nord
// Données extraites de "Infos site club Boxe - Compétiteurs"
// =====================================================
/**
 * Vignette recadrée pour les cartes : cadrage buste centré sur le visage,
 * généré à partir du portrait (voir scripts/ ou la note dans le README).
 * Retombe sur le portrait complet si la vignette n'existe pas.
 */
export function cardImage(image: string): string {
  return image.startsWith("/images/athletes/") && image.endsWith(".png")
    ? image.replace(/\.png$/, "-card.webp")
    : image;
}

export const athletes: Athlete[] = [
  {
    id: 1,
    slug: "conde-moussa",
    name: "Conde Moussa",
    discipline: "Kickboxing",
    level: "Semi-professionnel",
    record: "13 victoires • 5 défaites",
    image: "/images/athletes/conde-moussa.png",
    imagePosition: "50% 12%",
    description:
      "Combattant aguerri en Kickboxing. Record: 13 victoires • 5 défaites",
    achievements: [
      "champion de France",
      "champion régional",
      "et champion de WKN amateur",
    ],
    accent: "#ef4444",
    glow: "rgba(239,68,68,0.20)",
    icon: "flame",
  },
  {
    id: 2,
    slug: "ozmanyan-rustam",
    name: "Ozmanyan Rustam",
    discipline: "Kickboxing",
    level: "Professionnel",
    record: "20 victoires • 6 défaites",
    image: "/images/athletes/ozmanyan-rustam.png",
    imagePosition: "50% 12%",
    description:
      "Combattant aguerri en Kickboxing. Record: 20 victoires • 6 défaites",
    achievements: [
      "Compétiteur de Kickboxing",
    ],
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.20)",
    icon: "trophy",
  },
  {
    id: 3,
    slug: "raed-saadi-ali",
    name: "Raed Saadi Ali",
    discipline: "Kickboxing",
    level: "Avancé",
    record: "22 victoires • 10 défaites",
    image: "/images/athletes/raed-saadi-ali.png",
    imagePosition: "50% 12%",
    description:
      "Combattant aguerri en Kickboxing. Record: 22 victoires • 10 défaites",
    achievements: [
      "Compétiteur de Kickboxing",
    ],
    accent: "#ffffff",
    glow: "rgba(255,255,255,0.16)",
    icon: "shield",
  },
  {
    id: 4,
    slug: "raed-saadi-hayder",
    name: "Raed Saadi Hayder",
    discipline: "Kickboxing",
    level: "Professionnel",
    record: "19 victoires • 5 défaites",
    image: "/images/athletes/raed-saadi-hayder.png",
    imagePosition: "50% 12%",
    description:
      "Combattant aguerri en Kickboxing. Record: 19 victoires • 5 défaites",
    achievements: [
      "champion de France 2025",
    ],
    accent: "#f97316",
    glow: "rgba(249,115,22,0.30)",
    icon: "flame",
  },
  {
    id: 5,
    slug: "singh-balraj",
    name: "Singh Balraj",
    discipline: "Full Contact",
    level: "Confirmé",
    record: "14 victoires • 9 défaites",
    image: "/images/athletes/singh-balraj.png",
    imagePosition: "50% 12%",
    description:
      "Combattant aguerri en Full Contact. Record: 14 victoires • 9 défaites",
    achievements: [
      "champion de France full 2026/ champion open iska 2026",
    ],
    accent: "#3b82f6",
    glow: "rgba(59,130,246,0.20)",
    icon: "shield",
  },
  {
    id: 6,
    slug: "svay-anthony",
    name: "Svay Anthony",
    discipline: "Kickboxing",
    level: "Professionnel",
    record: "26 victoires • 7 défaites",
    image: "/images/athletes/svay-anthony.png",
    imagePosition: "50% 12%",
    description:
      "Combattant aguerri en Kickboxing. Record: 26 victoires • 7 défaites",
    achievements: [
      "champion France 2014",
    ],
    accent: "#8b5cf6",
    glow: "rgba(139,92,246,0.20)",
    icon: "flame",
  },
  {
    id: 7,
    slug: "ulmann-jefferson",
    name: "Ulmann Jefferson",
    discipline: "Kickboxing",
    level: "Professionnel",
    record: "23 victoires • 4 défaites",
    image: "/images/athletes/ulmann-jefferson.png",
    imagePosition: "50% 12%",
    description:
      "Combattant aguerri en Kickboxing. Record: 23 victoires • 4 défaites",
    achievements: [
      "1x champion France kick 2026",
    ],
    accent: "#ec4899",
    glow: "rgba(236,72,153,0.20)",
    icon: "trophy",
  },
  {
    id: 8,
    slug: "bourges-jordan",
    name: "Bourges Jordan",
    discipline: "Kickboxing",
    level: "Professionnel",
    record: "38 victoires • 16 défaites",
    image: "/images/athletes/bourges-jordan.png",
    imagePosition: "50% 12%",
    description:
      "Le plus expérimenté du club : 54 combats disputés, 38 victoires dont 9 avant la limite. Compétiteur du Boxing Club La Riche en catégorie 63,5 kg, entraîné par Brian Macé.",
    achievements: [
      "54 combats amateurs et pro confondus",
      "9 victoires par KO",
      "Record professionnel : 4 victoires en 7 combats",
      "Catégorie 63,5 kg",
    ],
    accent: "#10b981",
    glow: "rgba(16,185,129,0.20)",
    icon: "trophy",
  },
  {
    id: 9,
    slug: "dufay-clement",
    name: "Dufay Clement",
    discipline: "Kickboxing",
    level: "Compétiteur",
    record: "3 victoires • 0 défaite",
    image: "/images/athletes/dufay-clement.png",
    imagePosition: "50% 12%",
    description:
      "Surnommé « l’Immortel », compétiteur du Boxing Club La Riche en catégorie 71 kg. Invaincu sur ses trois premiers combats.",
    achievements: [
      "Invaincu : 3 combats, 3 victoires",
      "Catégorie 71 kg",
    ],
    accent: "#06b6d4",
    glow: "rgba(6,182,212,0.20)",
    icon: "flame",
  },
  {
    id: 10,
    slug: "feirera-mota-goncalo",
    name: "Ferreira Gonçalo",
    discipline: "Kickboxing",
    level: "Confirmé",
    record: "18 victoires • 10 défaites",
    image: "/images/athletes/feirera-mota-goncalo.png",
    imagePosition: "50% 12%",
    description:
      "Compétiteur du Boxing Club La Riche en catégorie -57 / -60 kg, entraîné par Brian Macé. Vingt-huit combats disputés, dont trois victoires avant la limite.",
    achievements: [
      "28 combats amateurs et pro confondus",
      "3 victoires par KO",
      "Catégorie -57 / -60 kg",
    ],
    accent: "#eab308",
    glow: "rgba(234,179,8,0.20)",
    icon: "shield",
  },
  {
    id: 11,
    slug: "gomes-angelina",
    name: "Gomes Angelina",
    discipline: "Kickboxing",
    level: "Compétitrice",
    record: "—",
    image: "/images/athletes/gomes-angelina.png",
    imagePosition: "50% 12%",
    description:
      "Compétitrice en Kickboxing au sein du club.",
    achievements: [
      "Compétitrice du club",
    ],
    accent: "#ec4899",
    glow: "rgba(236,72,153,0.2)",
    icon: "flame",
  },
  {
    id: 12,
    slug: "gomes-catalina",
    name: "Gomes Catalina",
    discipline: "Kickboxing",
    level: "Compétitrice",
    record: "—",
    image: "/images/athletes/gomes-catalina.png",
    imagePosition: "50% 12%",
    description:
      "Compétitrice en Kickboxing au sein du club.",
    achievements: [
      "Compétitrice du club",
    ],
    accent: "#a855f7",
    glow: "rgba(168,85,247,0.2)",
    icon: "trophy",
  },
  {
    id: 13,
    slug: "kamdoum-gabin",
    name: "Kamdoum Gabin",
    discipline: "Kickboxing",
    level: "Confirmé",
    record: "31 victoires • 5 défaites",
    image: "/images/athletes/kamdoum-gabin.png",
    imagePosition: "50% 12%",
    description:
      "Surnommé « The Black Warriors », champion de France classe A 2025. Compétiteur du Boxing Club La Riche, trente-six combats au compteur.",
    achievements: [
      "Champion de France classe A 2025",
      "36 combats amateurs et pro confondus",
      "2 victoires par KO",
    ],
    accent: "#ef4444",
    glow: "rgba(239,68,68,0.20)",
    icon: "trophy",
  },
  {
    id: 14,
    slug: "metreveli-nika",
    name: "Metreveli Nika",
    discipline: "K1",
    level: "Confirmé",
    record: "8 victoires • 3 défaites",
    image: "/images/athletes/metreveli-nika.png",
    imagePosition: "50% 12%",
    description:
      "Compétiteur de K1 classé en classe A, catégorie 71 kg, entraîné par Brian Macé à Tours.",
    achievements: [
      "Classe A",
      "11 combats amateurs et pro confondus",
      "1 victoire par KO",
      "Catégorie 71 kg",
    ],
    accent: "#3b82f6",
    glow: "rgba(59,130,246,0.20)",
    icon: "trophy",
  },
  {
    id: 15,
    slug: "ozmanyan-roman",
    name: "Ozmanyan Roman",
    discipline: "Kickboxing",
    level: "Confirmé",
    record: "8 victoires • 7 défaites • 1 nul",
    image: "/images/athletes/ozmanyan-roman.png",
    imagePosition: "50% 12%",
    description:
      "Surnommé « Goldenboy », compétiteur du Boxing Club Tours Nord en catégorie 57-60 kg. Record : 8 victoires • 7 défaites • 1 nul sur 16 combats.",
    achievements: [
      "16 combats amateurs et pro confondus",
      "Catégorie 57-60 kg",
    ],
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.2)",
    icon: "trophy",
  },
  {
    id: 16,
    slug: "zoundi-mateo",
    name: "Zoundi Mateo",
    discipline: "Kickboxing",
    level: "Compétiteur",
    record: "1 victoire • 2 défaites",
    image: "/images/athletes/zoundi-mateo.png",
    imagePosition: "50% 12%",
    description:
      "Compétiteur du Boxing Club La Riche en catégorie -67 kg, engagé en classe B.",
    achievements: [
      "3 combats en classe B",
      "Catégorie -67 kg",
    ],
    accent: "#14b8a6",
    glow: "rgba(20,184,166,0.20)",
    icon: "flame",
  },
  {
    id: 17,
    slug: "guasch-louka",
    name: "Guasch Louka",
    discipline: "Kickboxing",
    level: "Compétiteur",
    record: "7 victoires • 6 défaites • 2 nuls",
    image: "/images/athletes/guasch-louka.png",
    imagePosition: "50% 12%",
    description:
      "Compétiteur du Boxing Club La Riche en catégorie -37 kg, déjà quinze combats au compteur.",
    achievements: [
      "15 combats amateurs et pro confondus",
      "Catégorie -37 kg",
    ],
    accent: "#22c55e",
    glow: "rgba(34,197,94,0.2)",
    icon: "flame",
  },
  {
    id: 18,
    slug: "lahmer-walid",
    name: "Lahmer Walid",
    discipline: "Kickboxing",
    level: "Confirmé",
    record: "12 victoires • 5 défaites",
    image: "/images/athletes/lahmer-walid.png",
    imagePosition: "50% 12%",
    description:
      "Surnommé « Chlefman », compétiteur du Boxing Club La Riche en catégorie 60 kg.",
    achievements: [
      "17 combats amateurs et pro confondus",
      "1 victoire avant la limite",
      "Catégorie 60 kg",
    ],
    accent: "#0ea5e9",
    glow: "rgba(14,165,233,0.2)",
    icon: "trophy",
  },
  {
    id: 19,
    slug: "meberbeche-mohamed",
    name: "Meberbeche Mohamed",
    discipline: "Kickboxing",
    level: "Compétiteur",
    record: "2 victoires • 1 défaite",
    image: "/images/athletes/meberbeche-mohamed.png",
    imagePosition: "50% 12%",
    description:
      "Surnommé « Momo Labf », compétiteur du Boxing Club Tours Métropole en catégorie -60 kg.",
    achievements: [
      "Vice-champion régional",
      "Catégorie -60 kg",
    ],
    accent: "#f43f5e",
    glow: "rgba(244,63,94,0.2)",
    icon: "trophy",
  },
  {
    id: 20,
    slug: "tahraoui-medhi",
    name: "Tahraoui Medhi",
    discipline: "Muay Thai",
    level: "Compétiteur",
    record: "1 victoire • 3 défaites",
    image: "/images/athletes/tahraoui-medhi.png",
    imagePosition: "50% 12%",
    description:
      "Surnommé « Simba », compétiteur en muay thaï, catégorie -67 kg. Finaliste de la Coupe de France 2025.",
    achievements: [
      "Finaliste de la Coupe de France de muay thaï 2025",
      "5 combats amateurs et pro confondus",
      "Catégorie -67 kg",
    ],
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.2)",
    icon: "trophy",
  },
  {
    id: 21,
    slug: "vrillon-angelo",
    name: "Vrillon Angelo",
    discipline: "Kickboxing",
    level: "Compétiteur",
    record: "3 victoires • 5 défaites • 3 nuls",
    image: "/images/athletes/vrillon-angelo.png",
    imagePosition: "50% 12%",
    description:
      "Compétiteur du Boxing Club La Riche, en catégorie -63,5 / -67 kg.",
    achievements: [
      "Catégorie -63,5 / -67 kg",
    ],
    accent: "#8b5cf6",
    glow: "rgba(139,92,246,0.2)",
    icon: "shield",
  },
];
