// =====================================================
// IMPORTS
// =====================================================
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { CalendarDays, Home, Mail, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

// =====================================================
// SEO DE LA PAGE
// =====================================================
export const metadata: Metadata = {
  title: "Page introuvable",
  description:
    "Cette page n’existe pas ou n’existe plus. Retrouvez les horaires, les tarifs et les contacts des clubs de boxe de Tours Métropole.",
  robots: { index: false, follow: true },
};

// =====================================================
// RACCOURCIS PROPOSÉS
// =====================================================
const SHORTCUTS = [
  { href: "/", label: "Accueil", icon: Home },
  { href: "/horaires", label: "Horaires", icon: CalendarDays },
  { href: "/athletes", label: "Nos athlètes", icon: Users },
  { href: "/contact", label: "Nous contacter", icon: Mail },
];

// =====================================================
// PAGE 404
// =====================================================
export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="bg-[#070707] text-white">
        <section className="relative overflow-hidden pt-[120px] pb-20 md:pt-[185px] md:pb-28">
          {/* Décor identique au reste du site */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-6 h-40 w-40 rounded-full bg-red-600/16 blur-3xl md:top-10 md:h-72 md:w-72" />
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-amber-400/12 blur-3xl md:h-80 md:w-80" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#0a0a0a] to-[#050505]" />
            <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.26)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.26)_1px,transparent_1px)] [background-size:28px_28px]" />
          </div>

          <div className="container-custom relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-amber-300 backdrop-blur-md md:px-4 md:py-2 md:text-[0.72rem] md:tracking-[0.18em]">
                Erreur 404
              </span>

              <p className="mt-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-[5rem] font-black leading-none text-transparent md:text-[8rem]">
                404
              </p>

              <h1 className="mt-2 text-2xl font-black uppercase tracking-tight md:text-4xl">
                Cette page est hors du ring
              </h1>

              <p className="mx-auto mt-4 max-w-xl text-sm text-white/60 md:text-base">
                La page que vous cherchez n’existe pas ou a été déplacée.
                Voici les raccourcis les plus utiles pour retrouver votre
                chemin.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
                {SHORTCUTS.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-5 text-xs font-semibold uppercase tracking-wide text-white/80 backdrop-blur-md transition hover:border-red-500/50 hover:bg-white/[0.08] hover:text-white md:text-sm"
                  >
                    <Icon
                      size={20}
                      className="text-red-500 transition group-hover:scale-110"
                    />
                    {label}
                  </Link>
                ))}
              </div>

              <Link
                href="/inscription"
                className="mt-10 inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-red-500"
              >
                Rejoindre le club
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
