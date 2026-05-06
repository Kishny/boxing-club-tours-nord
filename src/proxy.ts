import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET ?? "boxing-club-dev-secret-change-in-prod",
);

async function verifyToken(token: string | undefined) {
  if (!token) return false;
  try {
    await jwtVerify(token, JWT_SECRET);
    return true;
  } catch {
    return false;
  }
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Login page: always accessible
  if (pathname === "/admin/login") return NextResponse.next();

  const token = request.cookies.get("admin_token")?.value;

  // Protect admin pages → redirect to login
  if (pathname.startsWith("/admin")) {
    if (!(await verifyToken(token))) {
      const res = NextResponse.redirect(new URL("/admin/login", request.url));
      res.cookies.delete("admin_token");
      return res;
    }
    return NextResponse.next();
  }

  // Protect CMS mutations and media upload — GET is public
  const isProtectedApi =
    (pathname.startsWith("/api/cms") || pathname.startsWith("/api/media")) &&
    request.method !== "GET";
  if (isProtectedApi && !(await verifyToken(token))) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/cms/:path*", "/api/media/:path*"],
};
