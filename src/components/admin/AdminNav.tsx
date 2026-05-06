"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Dumbbell,
  Users,
  User,
  Target,
  CreditCard,
  Calendar,
  LogOut,
} from "lucide-react";

const NAV = [
  { href: "/admin", label: "Planning", icon: Dumbbell, exact: true },
  { href: "/admin/athletes", label: "Athlètes", icon: User },
  { href: "/admin/coachs", label: "Coachs", icon: Users },
  { href: "/admin/disciplines", label: "Disciplines", icon: Target },
  { href: "/admin/tarifs", label: "Tarifs", icon: CreditCard },
  { href: "/admin/events", label: "Événements", icon: Calendar },
];

export default function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <>
      {/* ── DESKTOP SIDEBAR ─────────────────── */}

      <aside className="fixed left-0 top-0 z-20 hidden h-screen w-52 flex-col border-r border-white/[0.07] bg-[#080808] lg:flex">
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/15">
            <Dumbbell size={18} className="text-red-500" />
          </div>
          <div>
            <p className="text-sm font-black uppercase leading-none">
              Admin
            </p>
            <p className="text-[10px] text-white/30">Boxing Club</p>
          </div>
        </div>

        <div className="mx-3 mb-4 h-px bg-white/[0.07]" />

        {/* Nav links */}
        <nav className="flex-1 space-y-1 px-3">
          {NAV.map(({ href, label, icon: Icon, exact }) => {
            const active = isActive(href, exact);
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all ${
                  active
                    ? "bg-red-500/15 text-red-400"
                    : "text-white/50 hover:bg-white/5 hover:text-white/80"
                }`}
              >
                <Icon size={16} />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-3">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-white/40 transition hover:bg-white/5 hover:text-white/70"
          >
            <LogOut size={16} />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* ── MOBILE TOP BAR ──────────────────── */}

      <header className="fixed left-0 right-0 top-0 z-20 border-b border-white/[0.07] bg-[#080808] lg:hidden">
        <div className="flex items-center gap-2 overflow-x-auto px-4 py-3 scrollbar-none">
          {/* Logo chip */}
          <div className="mr-2 flex flex-shrink-0 items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-500/15">
              <Dumbbell size={14} className="text-red-500" />
            </div>
            <span className="text-xs font-black uppercase text-white/50">
              Admin
            </span>
          </div>

          {NAV.map(({ href, label, icon: Icon, exact }) => {
            const active = isActive(href, exact);
            return (
              <Link
                key={href}
                href={href}
                className={`flex flex-shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  active
                    ? "bg-red-500 text-white"
                    : "bg-white/5 text-white/50 hover:bg-white/10"
                }`}
              >
                <Icon size={12} />
                {label}
              </Link>
            );
          })}

          {/* Logout chip */}
          <button
            onClick={handleLogout}
            className="ml-2 flex flex-shrink-0 items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/40"
          >
            <LogOut size={12} />
            Déco
          </button>
        </div>
      </header>
    </>
  );
}
