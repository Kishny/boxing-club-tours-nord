// ──────────────────────────────────────────────────────
// CMS FIELD + COLLECTION SCHEMA DEFINITIONS
// One source of truth for admin forms and tables.
// ──────────────────────────────────────────────────────

export type FieldType =
  | "text"
  | "textarea"
  | "number"
  | "select"
  | "image"
  | "tags"
  | "color"
  | "date"
  | "boolean";

export type FieldDef = {
  key: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: string[];
  required?: boolean;
  span?: "full";
};

export type ColumnDef = {
  key: string;
  label: string;
  render?: (item: Record<string, unknown>) => React.ReactNode;
};

export type CollectionSchema = {
  title: string;
  singular: string;
  fields: FieldDef[];
  columns: ColumnDef[];
  defaultValue: Record<string, unknown>;
};

const CLUBS = ["Tours Nord", "Tours Métropole", "La Riche"];

// ──────────────────────────────────────────────────────
// ATHLETES
// ──────────────────────────────────────────────────────

export const ATHLETES_SCHEMA: CollectionSchema = {
  title: "Athlètes",
  singular: "athlète",
  defaultValue: {
    name: "",
    slug: "",
    photo: "",
    age: "",
    weight: "",
    category: "",
    discipline: "",
    club: "Tours Nord",
    palmares: [],
    description: "",
    active: true,
  },
  fields: [
    { key: "name", label: "Nom complet", type: "text", placeholder: "ex: Mohamed Ali", required: true },
    { key: "slug", label: "Slug URL", type: "text", placeholder: "ex: mohamed-ali" },
    { key: "photo", label: "Photo (URL)", type: "image" },
    { key: "age", label: "Âge", type: "number", placeholder: "ex: 24" },
    { key: "weight", label: "Poids (kg)", type: "number", placeholder: "ex: 72" },
    { key: "category", label: "Catégorie", type: "text", placeholder: "ex: Poids léger" },
    { key: "discipline", label: "Discipline", type: "text", placeholder: "ex: Boxe Anglaise" },
    { key: "club", label: "Club", type: "select", options: CLUBS },
    { key: "palmares", label: "Palmarès", type: "tags" },
    { key: "description", label: "Description", type: "textarea", span: "full" },
    { key: "active", label: "Actif", type: "boolean" },
  ],
  columns: [
    { key: "photo", label: "Photo" },
    { key: "name", label: "Nom" },
    { key: "club", label: "Club" },
    { key: "discipline", label: "Discipline" },
    { key: "category", label: "Catégorie" },
  ],
};

// ──────────────────────────────────────────────────────
// COACHS
// ──────────────────────────────────────────────────────

export const COACHS_SCHEMA: CollectionSchema = {
  title: "Coachs",
  singular: "coach",
  defaultValue: {
    name: "",
    slug: "",
    photo: "",
    specialty: "",
    bio: "",
    experience: "",
    club: "Tours Nord",
    certifications: [],
    instagram: "",
    facebook: "",
  },
  fields: [
    { key: "name", label: "Nom complet", type: "text", placeholder: "ex: Jean Dupont", required: true },
    { key: "slug", label: "Slug URL", type: "text", placeholder: "ex: jean-dupont" },
    { key: "photo", label: "Photo (URL)", type: "image" },
    { key: "specialty", label: "Spécialité", type: "text", placeholder: "ex: Boxe Anglaise, MMA" },
    { key: "experience", label: "Expérience (années)", type: "number", placeholder: "ex: 10" },
    { key: "club", label: "Club", type: "select", options: CLUBS },
    { key: "certifications", label: "Certifications", type: "tags" },
    { key: "instagram", label: "Instagram (URL)", type: "text", placeholder: "https://instagram.com/..." },
    { key: "facebook", label: "Facebook (URL)", type: "text", placeholder: "https://facebook.com/..." },
    { key: "bio", label: "Bio", type: "textarea", span: "full" },
  ],
  columns: [
    { key: "photo", label: "Photo" },
    { key: "name", label: "Nom" },
    { key: "specialty", label: "Spécialité" },
    { key: "club", label: "Club" },
    { key: "experience", label: "Exp." },
  ],
};

// ──────────────────────────────────────────────────────
// DISCIPLINES
// ──────────────────────────────────────────────────────

export const DISCIPLINES_SCHEMA: CollectionSchema = {
  title: "Disciplines",
  singular: "discipline",
  defaultValue: {
    name: "",
    slug: "",
    description: "",
    image: "",
    color: "#ef4444",
    minAge: 6,
    levels: [],
    icon: "",
  },
  fields: [
    { key: "name", label: "Nom", type: "text", placeholder: "ex: Kickboxing", required: true },
    { key: "slug", label: "Slug URL", type: "text", placeholder: "ex: kickboxing" },
    { key: "image", label: "Image (URL)", type: "image" },
    { key: "color", label: "Couleur", type: "color" },
    { key: "minAge", label: "Âge minimum", type: "number", placeholder: "ex: 6" },
    { key: "icon", label: "Icône (emoji)", type: "text", placeholder: "ex: 🥊" },
    { key: "levels", label: "Niveaux", type: "tags" },
    { key: "description", label: "Description", type: "textarea", span: "full" },
  ],
  columns: [
    { key: "image", label: "Image" },
    { key: "name", label: "Nom" },
    { key: "minAge", label: "Âge min." },
    { key: "color", label: "Couleur" },
  ],
};

// ──────────────────────────────────────────────────────
// PRICING
// ──────────────────────────────────────────────────────

export const PRICING_SCHEMA: CollectionSchema = {
  title: "Tarifs",
  singular: "tarif",
  defaultValue: {
    title: "",
    price: "",
    period: "mois",
    category: "Adulte",
    features: [],
    highlight: false,
    promo: "",
    reduction: "",
    order: 0,
  },
  fields: [
    { key: "title", label: "Titre", type: "text", placeholder: "ex: Abonnement mensuel", required: true },
    { key: "price", label: "Prix (€)", type: "number", placeholder: "ex: 45" },
    { key: "period", label: "Période", type: "select", options: ["mois", "trimestre", "an", "unique"] },
    { key: "category", label: "Catégorie", type: "select", options: ["Adulte", "Enfant", "Ado", "Famille", "Senior"] },
    { key: "promo", label: "Promo / Badge", type: "text", placeholder: "ex: -20% jusqu'au 31 jan" },
    { key: "reduction", label: "Réduction", type: "text", placeholder: "ex: -10% pour les étudiants" },
    { key: "order", label: "Ordre d'affichage", type: "number" },
    { key: "highlight", label: "Mettre en avant", type: "boolean" },
    { key: "features", label: "Avantages inclus", type: "tags", span: "full" },
  ],
  columns: [
    { key: "title", label: "Titre" },
    { key: "price", label: "Prix" },
    { key: "period", label: "Période" },
    { key: "category", label: "Catégorie" },
    { key: "highlight", label: "Mis en avant" },
  ],
};

// ──────────────────────────────────────────────────────
// EVENTS
// ──────────────────────────────────────────────────────

export const EVENTS_SCHEMA: CollectionSchema = {
  title: "Événements",
  singular: "événement",
  defaultValue: {
    title: "",
    slug: "",
    date: "",
    time: "",
    poster: "",
    description: "",
    ticketLink: "",
    venue: "",
    participants: [],
    published: false,
  },
  fields: [
    { key: "title", label: "Titre", type: "text", placeholder: "ex: Gala de Boxe 2025", required: true },
    { key: "slug", label: "Slug URL", type: "text", placeholder: "ex: gala-boxe-2025" },
    { key: "date", label: "Date", type: "date" },
    { key: "time", label: "Heure", type: "text", placeholder: "ex: 20:00" },
    { key: "venue", label: "Lieu", type: "text", placeholder: "ex: Salle Omnisports de Tours" },
    { key: "ticketLink", label: "Lien billetterie", type: "text", placeholder: "https://..." },
    { key: "poster", label: "Affiche (URL)", type: "image" },
    { key: "participants", label: "Participants", type: "tags" },
    { key: "published", label: "Publié", type: "boolean" },
    { key: "description", label: "Description", type: "textarea", span: "full" },
  ],
  columns: [
    { key: "poster", label: "Affiche" },
    { key: "title", label: "Titre" },
    { key: "date", label: "Date" },
    { key: "venue", label: "Lieu" },
    { key: "published", label: "Publié" },
  ],
};
