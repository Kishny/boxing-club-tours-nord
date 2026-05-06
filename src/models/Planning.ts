import mongoose from "mongoose";

const PlanningSchema = new mongoose.Schema({
  club: String,
  discipline: String,
  category: String,
  color: String,
  day: String,
  time: String,
  audience: String,
  level: String,
});

export default mongoose.models.Planning ||
  mongoose.model("Planning", PlanningSchema);
