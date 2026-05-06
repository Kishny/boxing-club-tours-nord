import mongoose, { Schema } from "mongoose";

const CoachSchema = new Schema(
  {
    name: String,
    slug: String,
    photo: String,
    specialty: String,
    bio: String,
    experience: Number,
    club: String,
    certifications: [String],
    instagram: String,
    facebook: String,
    // UI fields
    role: String,
    tagline: String,
    description: String,
    philosophy: String,
    strengths: [String],
    accent: String,
  },
  { timestamps: true },
);

export default mongoose.models.Coach ||
  mongoose.model("Coach", CoachSchema);
