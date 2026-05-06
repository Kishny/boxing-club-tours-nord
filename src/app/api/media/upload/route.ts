import { NextRequest, NextResponse } from "next/server";
import { uploadImage } from "@/services/media.service";

const MAX_SIZE = 5 * 1024 * 1024; // 5 Mo
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "Fichier manquant" }, { status: 400 });
    }

    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { error: "Fichier trop lourd (max 5 Mo)" },
        { status: 400 },
      );
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: "Format non supporté — JPG, PNG, WEBP ou GIF uniquement" },
        { status: 400 },
      );
    }

    const folder = (formData.get("folder") as string | null) ?? "boxing-club";
    const result = await uploadImage(file, folder);

    return NextResponse.json(result);
  } catch (error) {
    console.error("[media/upload]", error);
    return NextResponse.json({ error: "Erreur upload" }, { status: 500 });
  }
}
