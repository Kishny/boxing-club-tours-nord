import { z } from "zod";

// ─── Field helpers ────────────────────────────────────────────────────────────

const imgUrl = z.string().optional();
const strArr = z.array(z.string()).optional();

// ─── Schemas ──────────────────────────────────────────────────────────────────

export const PlanningSchema = z.object({
  club: z.string().min(1, "Club requis"),
  discipline: z.string().min(1, "Discipline requise"),
  category: z.string().optional(),
  color: z.string().optional(),
  day: z.string().min(1, "Jour requis"),
  time: z.string().min(1, "Heure requise"),
  audience: z.string().optional(),
  level: z.string().optional(),
  coach: z.string().optional(),
});

export const AthleteSchema = z.object({
  name: z.string().min(1, "Nom requis"),
  slug: z.string().min(1, "Slug requis"),
  photo: imgUrl,
  age: z.number().optional(),
  weight: z.number().optional(),
  category: z.string().optional(),
  discipline: z.string().optional(),
  club: z.string().optional(),
  palmares: strArr,
  description: z.string().optional(),
  active: z.boolean().optional(),
  record: z.string().optional(),
  level: z.string().optional(),
  accent: z.string().optional(),
  icon: z.enum(["flame", "trophy", "shield"]).optional(),
});

export const CoachSchema = z.object({
  name: z.string().min(1, "Nom requis"),
  slug: z.string().optional(),
  photo: imgUrl,
  specialty: z.string().optional(),
  bio: z.string().optional(),
  experience: z.string().optional(),
  club: z.string().optional(),
  certifications: strArr,
  instagram: z.string().optional(),
  facebook: z.string().optional(),
  role: z.string().optional(),
  tagline: z.string().optional(),
  description: z.string().optional(),
  philosophy: z.string().optional(),
  strengths: strArr,
  accent: z.string().optional(),
});

export const DisciplineSchema = z.object({
  name: z.string().min(1, "Nom requis"),
  slug: z.string().min(1, "Slug requis"),
  description: z.string().optional(),
  image: imgUrl,
  color: z.string().optional(),
  minAge: z.number().optional(),
  levels: strArr,
  icon: z
    .enum(["flame", "shield", "trophy", "swords", "dumbbell"])
    .optional(),
  details: z.string().optional(),
  profile: z.string().optional(),
  tagline: z.string().optional(),
});

export const PricingSchema = z.object({
  title: z.string().min(1, "Titre requis"),
  price: z.number().min(0, "Prix invalide"),
  period: z.string().optional(),
  category: z.string().optional(),
  features: strArr,
  highlight: z.boolean().optional(),
  promo: z.string().optional(),
  reduction: z.string().optional(),
  order: z.number().optional(),
  description: z.string().optional(),
});

export const EventSchema = z.object({
  title: z.string().min(1, "Titre requis"),
  slug: z.string().min(1, "Slug requis"),
  date: z.string().min(1, "Date requise"),
  time: z.string().optional(),
  poster: imgUrl,
  description: z.string().optional(),
  ticketLink: z.string().optional(),
  venue: z.string().optional(),
  participants: strArr,
  published: z.boolean().optional(),
});

// ─── Registry ──────────────────────────────────────────────────────────────────

type AnyZodObject = z.ZodObject<z.ZodRawShape>;

const SCHEMAS: Record<string, AnyZodObject> = {
  planning: PlanningSchema,
  athletes: AthleteSchema,
  coachs: CoachSchema,
  disciplines: DisciplineSchema,
  pricing: PricingSchema,
  events: EventSchema,
};

// ─── Validate ─────────────────────────────────────────────────────────────────

type ValidateResult =
  | { success: true; data: Record<string, unknown> }
  | { success: false; error: string };

export function validateForCollection(
  collection: string,
  data: unknown,
  isUpdate = false,
): ValidateResult {
  const schema = SCHEMAS[collection];
  if (!schema) {
    return { success: false, error: `Collection inconnue : ${collection}` };
  }

  const s = isUpdate ? schema.partial() : schema;
  const result = s.safeParse(data);

  if (!result.success) {
    const msg = result.error.issues
      .map((e: z.ZodIssue) => `${e.path.join(".") || "champ"} : ${e.message}`)
      .join(" | ");
    return { success: false, error: msg };
  }

  return { success: true, data: result.data as Record<string, unknown> };
}
