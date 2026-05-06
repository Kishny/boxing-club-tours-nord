import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let isConnected = false;

export default async function connectDB() {
  if (isConnected) return;

  if (!MONGODB_URI) {
    console.warn("⚠️ MongoDB non configuré");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log("✅ Mongo connecté");
  } catch (error) {
    console.error("❌ Mongo erreur:", error);
  }
}