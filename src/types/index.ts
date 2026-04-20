// =====================================================
// TYPES GLOBAUX DU PROJET
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
  
  export type Coach = {
    id: number;
    name: string;
    role: string;
    specialty: string;
    experience: string;
    description: string;
    philosophy: string;
    strengths: string[];
    image: string;
    accent: string;
  };
  
  export type Discipline = {
    slug: string;
    title: string;
    category: string;
    description: string;
    details: string;
    profile: string;
    icon: "flame" | "shield" | "trophy" | "swords" | "dumbbell";
    accent: string;
    glow: string;
    panel: string;
    keywords: string[];
  };
  
  export type Leader = {
    name: string;
    role: string;
    image: string;
    description: string;
  };
  
  export type HistoryIcon = "shield" | "trophy" | "clock";
  
  export type HistoryStep = {
    year: string;
    title: string;
    description: string;
    badge: string;
    accent: string;
    glow: string;
    icon: HistoryIcon;
  };