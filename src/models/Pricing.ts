import mongoose, { Schema } from "mongoose";

const PricingSchema = new Schema(
  {
    title: String,
    price: Number,
    period: String,
    category: String,
    features: [String],
    highlight: { type: Boolean, default: false },
    promo: String,
    reduction: String,
    order: { type: Number, default: 0 },
    description: String,
  },
  { timestamps: true },
);

export default mongoose.models.Pricing ||
  mongoose.model("Pricing", PricingSchema);
