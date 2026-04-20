// src/app/athletes/page.tsx
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
      <main className="bg-[#070707] pt-[118px] text-white md:pt-[140px]">
        {/* ---------------------------------
            HERO PREMIUM
            VERSION MOBILE ULTRA COMPACTE
        --------------------------------- */}
        <section className="relative overflow-hidden border-b border-white/10 pb-8 md:pb-14 lg:pb-18">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-4 h-40 w-40 rounded-full bg-red-600/14 blur-3xl md:top-6 md:h-72 md:w-72 md:bg-red-600/16" />
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-amber-400/10 blur-3xl md:h-80 md:w-80 md:bg-amber-400/12" />
            <div className="absolute bottom-0 left-1/3 h-36 w-36 rounded-full bg-white/5 blur-3xl md:h-72 md:w-72" />

            <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#0a0a0a] to-[#050505]" />

            <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.28)_1px,transparent_1px)] [background-size:24px_24px] md:opacity-[0.05] md:[background-size:34px_34px]" />
          </div>

          <div className="container-custom relative z-10 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.56rem] font-bold uppercase tracking-[0.12em] text-amber-300 shadow-[0_8px_20px_rgba(0,0,0,0.16)] backdrop-blur-md sm:px-3 sm:py-1.5 sm:text-[0.62rem] md:px-4 md:py-2 md:text-[0.72rem] md:tracking-[0.18em]">
              <Sparkles size={11} className="md:h-[14px] md:w-[14px]" />
              Les athlètes du club
            </div>

            {/* Titre */}
            <h1 className="mt-3 text-[2rem] font-black uppercase leading-[0.9] tracking-[0.025em] text-white sm:text-[2.5rem] md:mt-5 md:text-6xl md:tracking-[0.04em] xl:text-7xl">
              Les profils qui
              <br className="hidden sm:block" />
              <span className="block bg-gradient-to-r from-red-500 via-white to-amber-300 bg-clip-text text-transparent">
                incarnent la progression
              </span>
            </h1>

            {/* Intro */}
            <p className="mx-auto mt-3 max-w-[23rem] text-[0.88rem] leading-5 text-white/68 sm:max-w-[30rem] sm:text-[0.94rem] sm:leading-6 md:mt-5 md:max-w-3xl md:text-lg md:leading-7">
              Découvre les athlètes du Boxing Club Tours Nord, leurs disciplines,
              leur progression, leur palmarès et l’énergie qu’ils apportent à
              l’identité du club.
            </p>

            {/* Mini stats */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 md:mt-8 md:gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/78 sm:px-3 sm:py-1.5 sm:text-[0.72rem] md:px-4 md:py-2 md:text-xs">
                <Medal size={12} className="md:h-[14px] md:w-[14px]" />
                Profils engagés
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/78 sm:px-3 sm:py-1.5 sm:text-[0.72rem] md:px-4 md:py-2 md:text-xs">
                <Flame size={12} className="md:h-[14px] md:w-[14px]" />
                Esprit combat
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/78 sm:px-3 sm:py-1.5 sm:text-[0.72rem] md:px-4 md:py-2 md:text-xs">
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
      <div className="container-custom py-4 md:py-6">
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
