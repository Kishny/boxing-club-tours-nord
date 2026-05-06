import type { Model } from "mongoose";
import Planning from "@/models/Planning";
import Athlete from "@/models/Athlete";
import Coach from "@/models/Coach";
import Discipline from "@/models/Discipline";
import Pricing from "@/models/Pricing";
import Event from "@/models/Event";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const REGISTRY: Record<string, Model<any>> = {
  planning: Planning,
  athletes: Athlete,
  coachs: Coach,
  disciplines: Discipline,
  pricing: Pricing,
  events: Event,
};

export function getModel(collection: string) {
  const model = REGISTRY[collection];
  if (!model) throw new Error(`Unknown CMS collection: ${collection}`);
  return model;
}
