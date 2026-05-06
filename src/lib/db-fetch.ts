import connectDB from "@/lib/mongodb";
import { getModel } from "@/lib/cms-models";

/**
 * Server-side fetch from MongoDB.
 * Returns the array (possibly empty) on success, or null on error.
 * Pages use null to decide whether to fall back to hardcoded data.
 */
export async function fetchCollection<T = Record<string, unknown>>(
  collection: string,
  sort: Record<string, 1 | -1> = { createdAt: 1 },
): Promise<T[] | null> {
  try {
    await connectDB();
    const Model = getModel(collection);
    const data = await Model.find().sort(sort).lean();
    // Serialize: removes MongoDB ObjectId / Date non-plain objects
    return JSON.parse(JSON.stringify(data)) as T[];
  } catch (error) {
    console.error(`[db-fetch] ${collection}:`, error);
    return null;
  }
}

/** Utility: hex color → rgba string */
export function hexToRgba(hex: string, alpha: number): string {
  try {
    const h = hex.replace("#", "");
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  } catch {
    return `rgba(239,68,68,${alpha})`;
  }
}
