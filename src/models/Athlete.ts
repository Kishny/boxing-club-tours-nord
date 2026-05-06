import mongoose, { Schema } from "mongoose";

const AthleteSchema = new Schema(
  {
    name: String,
    slug: String,
    photo: String,
    age: Number,
    weight: Number,
    category: String,
    discipline: String,
    club: String,
    palmares: [String],
    description: String,
    active: { type: Boolean, default: true },
    // UI fields
    record: String,
    level: String,
    accent: String,
    icon: String,
  },
  { timestamps: true },
);

export default mongoose.models.Athlete ||
  mongoose.model("Athlete", AthleteSchema);
