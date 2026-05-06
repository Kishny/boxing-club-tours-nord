import mongoose, { Schema } from "mongoose";

const DisciplineSchema = new Schema(
  {
    name: String,
    slug: String,
    description: String,
    image: String,
    color: String,
    minAge: Number,
    levels: [String],
    icon: String,
    // UI fields
    details: String,
    profile: String,
    tagline: String,
  },
  { timestamps: true },
);

export default mongoose.models.Discipline ||
  mongoose.model("Discipline", DisciplineSchema);
