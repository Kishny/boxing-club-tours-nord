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
  description: string;
  achievements: string[];
  accent: string;
  glow: string;
  icon: "flame" | "trophy" | "shield";
};

// =====================================================
// DONNÉES ATHLÈTES
// Version premium compatible avec les nouveaux composants
// =====================================================
export const athletes: Athlete[] = [
  {
    id: 1,
    slug: "alexandre-dupont",
    name: "Alexandre Dupont",
    discipline: "Kickboxing",
    level: "Avancé",
    record: "15 victoires • 3 défaites",
    image: "/images/athletes/athlete-1.jpg",
    description:
      "Combattant technique et explosif, Alexandre incarne la rigueur, l’intensité et la progression structurée du Boxing Club Tours Nord.",
    achievements: [
      "Champion régional 2024",
      "Finaliste Coupe de France",
      "Athlète élite du club",
    ],
    accent: "#ef4444",
    glow: "rgba(239,68,68,0.20)",
    icon: "flame",
  },
  {
    id: 2,
    slug: "mehdi-belkacem",
    name: "Mehdi Belkacem",
    discipline: "K1 Rules",
    level: "Semi-professionnel",
    record: "12 victoires • 2 défaites",
    image: "/images/athletes/athlete-2.jpg",
    description:
      "Puissant, stratégique et engagé, Mehdi se distingue par son timing, sa lecture du combat et son impact dans l’échange.",
    achievements: [
      "Champion interrégional",
      "Combattant de l’année 2023",
      "Vainqueur gala national",
    ],
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.20)",
    icon: "trophy",
  },
  {
    id: 3,
    slug: "lucas-martin",
    name: "Lucas Martin",
    discipline: "Full Contact",
    level: "Confirmé",
    record: "10 victoires • 1 défaite",
    image: "/images/athletes/athlete-3.jpg",
    description:
      "Lucas construit sa progression autour de la discipline, du mental et d’un vrai socle technique, avec une implication constante.",
    achievements: [
      "Champion départemental",
      "Médaillé national",
      "Athlète espoir",
    ],
    accent: "#ffffff",
    glow: "rgba(255,255,255,0.16)",
    icon: "shield",
  },
  {
    id: 4,
    slug: "karim-benali",
    name: "Karim Benali",
    discipline: "Kickboxing",
    level: "Professionnel",
    record: "18 victoires • 2 défaites",
    image: "/images/athletes/karim-benali.jpg",
    description:
      "Combattant explosif et technique, reconnu pour son engagement et sa régularité au plus haut niveau.",
    achievements: [
      "Champion de France",
      "Vainqueur Open International",
      "Athlète élite du club",
    ],
    accent: "#ef4444",
    glow: "rgba(239,68,68,0.35)",
    icon: "flame",
  },
  {
    id: 5,
    slug: "yassine-el-amrani",
    name: "Yassine El Amrani",
    discipline: "K1 Rules",
    level: "Professionnel",
    record: "20 victoires • 4 défaites",
    image: "/images/athletes/yassine-el-amrani.jpg",
    description:
      "Combattant spectaculaire et redoutable stratège, Yassine se distingue par sa puissance et sa précision en compétition.",
    achievements: [
      "Champion d’Europe WKN",
      "Vainqueur du Grand Prix International",
      "Athlète professionnel du club",
    ],
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.30)",
    icon: "trophy",
  },
  {
    id: 6,
    slug: "enzo-moreau",
    name: "Enzo Moreau",
    discipline: "Low Kick",
    level: "Élite",
    record: "14 victoires • 2 défaites",
    image: "/images/athletes/enzo-moreau.jpg",
    description:
      "Athlète complet et déterminé, Enzo se démarque par son endurance, sa mobilité et son engagement dans le combat.",
    achievements: [
      "Champion national Low Kick",
      "Vainqueur de la Coupe de France",
      "Espoir international",
    ],
    accent: "#f97316",
    glow: "rgba(249,115,22,0.30)",
    icon: "flame",
  },
];