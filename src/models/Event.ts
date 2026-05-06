import mongoose, { Schema } from "mongoose";

const EventSchema = new Schema(
  {
    title: String,
    slug: String,
    date: String,
    time: String,
    poster: String,
    description: String,
    ticketLink: String,
    venue: String,
    participants: [String],
    published: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.models.Event ||
  mongoose.model("Event", EventSchema);
