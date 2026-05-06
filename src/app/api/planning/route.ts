import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Planning from "@/models/Planning";
import fallbackData from "@/data/planning-fallback.json";
import { PlanningSchema } from "@/services/cms.service";

export async function GET() {
  try {
    await connectDB();
    const data = await Planning.find();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API GET error, using fallback:", error);
    return NextResponse.json(fallbackData);
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const parsed = PlanningSchema.safeParse(body);
    if (!parsed.success) {
      const msg = parsed.error.issues
        .map((e: import("zod").ZodIssue) => `${e.path.join(".") || "champ"} : ${e.message}`)
        .join(" | ");
      return NextResponse.json({ error: msg }, { status: 422 });
    }

    const newItem = await Planning.create(parsed.data);
    return NextResponse.json(newItem);
  } catch (error) {
    console.error("API POST error:", error);
    return NextResponse.json({ error: "Erreur création" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    await connectDB();
    const { id, ...body } = await req.json();

    const parsed = PlanningSchema.partial().safeParse(body);
    if (!parsed.success) {
      const msg = parsed.error.issues
        .map((e: import("zod").ZodIssue) => `${e.path.join(".") || "champ"} : ${e.message}`)
        .join(" | ");
      return NextResponse.json({ error: msg }, { status: 422 });
    }

    const updated = await Planning.findByIdAndUpdate(id, parsed.data, {
      new: true,
    });
    return NextResponse.json(updated);
  } catch (error) {
    console.error("API PUT error:", error);
    return NextResponse.json({ error: "Erreur modification" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    await Planning.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API DELETE error:", error);
    return NextResponse.json(
      { error: "Erreur suppression" },
      { status: 500 },
    );
  }
}
