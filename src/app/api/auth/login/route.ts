import { NextResponse } from "next/server";
import {
  LoginSchema,
  signAdminToken,
  buildAuthCookieOptions,
} from "@/services/auth.service";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = LoginSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Données invalides" }, { status: 400 });
    }

    const adminPassword = process.env.ADMIN_PASSWORD ?? "boxing2025";
    if (parsed.data.password !== adminPassword) {
      return NextResponse.json(
        { error: "Mot de passe incorrect" },
        { status: 401 },
      );
    }

    const token = await signAdminToken();
    const res = NextResponse.json({ success: true });
    res.cookies.set("admin_token", token, buildAuthCookieOptions());
    return res;
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
