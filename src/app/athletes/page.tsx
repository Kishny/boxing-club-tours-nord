// =====================================================
// IMPORTS
// =====================================================
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AthletesGrid from "@/components/athletes/AthletesGrid";
import { Sparkles, Medal, Flame } from "lucide-react";

// =====================================================
// SEO DE LA PAGE ATHLÈTES
// =====================================================
export const metadata: Metadata = {
  title: "Athlètes du Boxing Club Tours Nord",
  description:
    "Découvrez les athlètes du Boxing Club Tours Nord à Tours : profils, disciplines, palmarès, progression et esprit du club.",
  alternates: {
    canonical: "https://boxingclub-tours.fr/athletes",
  },
};

// =====================================================
// PAGE ATHLÈTES PREMIUM
// =====================================================
export default function AthletesPage() {
  return (
    <>
      {/* =================================
          NAVBAR
      ================================= */}
      <Navbar />

      {/* =================================
          CONTENU PRINCIPAL
      ================================= */}
      <main className="bg-[#070707] pt-[140px] text-white">
        {/* ---------------------------------
            HERO PREMIUM
        --------------------------------- */}
        <section className="relative overflow-hidden border-b border-white/10 pb-14 md:pb-18">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-6 h-72 w-72 rounded-full bg-red-600/16 blur-3xl" />
            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-amber-400/12 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

            <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#0a0a0a] to-[#050505]" />

            <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.30)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.30)_1px,transparent_1px)] [background-size:34px_34px]" />
          </div>

          <div className="container-custom relative z-10 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-amber-300 shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-md">
              <Sparkles size={14} />
              Les athlètes du club
            </div>

            {/* Titre */}
            <h1 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-[0.04em] text-white sm:text-5xl md:text-6xl xl:text-7xl">
              Les profils qui
              <br className="hidden sm:block" />
              <span className="block bg-gradient-to-r from-red-500 via-white to-amber-300 bg-clip-text text-transparent">
                incarnent la progression
              </span>
            </h1>

            {/* Intro */}
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base md:text-lg">
              Découvrez les athlètes du Boxing Club Tours Nord, leurs
              disciplines, leur progression, leur palmarès et l’énergie qu’ils
              apportent à l’identité du club.
            </p>

            {/* Mini stats */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/80">
                <Medal size={14} />
                Profils engagés
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/80">
                <Flame size={14} />
                Esprit combat
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/80">
                Progression encadrée
              </span>
            </div>
          </div>
        </section>

        {/* ---------------------------------
            GRILLE ATHLÈTES
        --------------------------------- */}
        <AthletesGrid />
      </main>

      {/* Séparateur premium animé */}
      <div className="container-custom py-6">
        <div className="separator-premium relative h-[1px] w-full overflow-hidden">
          <span className="separator-line absolute inset-0"></span>
          <span className="separator-glow absolute inset-0"></span>
        </div>
      </div>

      {/* =================================
          FOOTER
      ================================= */}
      <Footer />
    </>
  );
}
