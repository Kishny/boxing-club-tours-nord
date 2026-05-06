import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { getModel } from "@/lib/cms-models";
import { validateForCollection } from "@/services/cms.service";

type Context = { params: Promise<{ collection: string }> };

export async function GET(req: NextRequest, ctx: Context) {
  try {
    const { collection } = await ctx.params;
    await connectDB();
    const Model = getModel(collection);
    const data = await Model.find().sort({ createdAt: -1 });
    return NextResponse.json(data);
  } catch (error) {
    console.error("CMS GET error:", error);
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(req: NextRequest, ctx: Context) {
  try {
    const { collection } = await ctx.params;
    await connectDB();
    const Model = getModel(collection);
    const body = await req.json();

    const validated = validateForCollection(collection, body);
    if (!validated.success) {
      return NextResponse.json({ error: validated.error }, { status: 422 });
    }

    const item = await Model.create(validated.data);
    return NextResponse.json(item);
  } catch (error) {
    console.error("CMS POST error:", error);
    return NextResponse.json({ error: "Erreur création" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, ctx: Context) {
  try {
    const { collection } = await ctx.params;
    await connectDB();
    const Model = getModel(collection);
    const { id, ...body } = await req.json();

    const validated = validateForCollection(collection, body, true);
    if (!validated.success) {
      return NextResponse.json({ error: validated.error }, { status: 422 });
    }

    const item = await Model.findByIdAndUpdate(id, validated.data, {
      new: true,
    });
    return NextResponse.json(item);
  } catch (error) {
    console.error("CMS PUT error:", error);
    return NextResponse.json({ error: "Erreur modification" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, ctx: Context) {
  try {
    const { collection } = await ctx.params;
    await connectDB();
    const Model = getModel(collection);
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    await Model.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CMS DELETE error:", error);
    return NextResponse.json({ error: "Erreur suppression" }, { status: 500 });
  }
}
