import { z } from "zod";
import { SignJWT } from "jose";

export const LoginSchema = z.object({
  password: z.string().min(1, "Mot de passe requis"),
});

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET ?? "boxing-club-dev-secret-change-in-prod",
);

export async function signAdminToken(): Promise<string> {
  return new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("24h")
    .sign(JWT_SECRET);
}

export function buildAuthCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    maxAge: 86400,
    path: "/",
  };
}
