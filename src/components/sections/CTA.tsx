"use client";

// =====================================================
// IMPORTS
// =====================================================
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Mail, Trophy, ArrowRight, Sparkles } from "lucide-react";

// =====================================================
// COMPOSANT CTA PREMIUM COMPACT HORIZONTAL
// Version plus légère pour la home page
// =====================================================
export default function CTA() {
  // ---------------------------------------------------
  // Référence de section pour animation au scroll
  // ---------------------------------------------------
  const sectionRef = useRef<HTMLElement | null>(null);

  // ---------------------------------------------------
  // Etat visibilité
  // ---------------------------------------------------
  const [isVisible, setIsVisible] = useState(false);

  // ---------------------------------------------------
  // Détection entrée viewport
  // ---------------------------------------------------
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative overflow-hidden
        bg-[#080808]
        py-12 text-white md:py-14 lg:py-16
      "
    >
      {/* =================================================
          DÉCORS DE FOND PREMIUM
          Version plus subtile pour éviter l'effet massif
      ================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-4rem] top-8 h-36 w-36 rounded-full bg-red-600/12 blur-3xl" />
        <div className="absolute right-[-3rem] top-10 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute bottom-[-2rem] left-1/3 h-44 w-44 rounded-full bg-white/4 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.035),transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.28)_1px,transparent_1px)] [background-size:30px_30px]" />
      </div>

      {/* =================================================
          CONTENU PRINCIPAL
      ================================================= */}
      <div className="container-custom relative z-10">
        {/* =============================================
            EN-TÊTE COMPACT
        ============================================= */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <span
            className="
              inline-flex items-center gap-2 rounded-full
              border border-white/10 bg-white/[0.06]
              px-3.5 py-1.5 text-[0.66rem] font-bold uppercase
              tracking-[0.18em] text-amber-300
              shadow-[0_8px_20px_rgba(0,0,0,0.16)]
              backdrop-blur-md
            "
          >
            <Sparkles size={12} />
            Rejoindre le club
          </span>

          <h2
            className="
              mt-4 text-3xl font-black uppercase leading-[0.95]
              tracking-[0.05em] text-white
              sm:text-4xl md:text-[2.8rem]
            "
          >
            Passez à l’action
          </h2>

          <p
            className="
              mx-auto mt-3 max-w-2xl
              text-sm leading-6 text-white/68
              md:text-[0.98rem]
            "
          >
            Réservez une première séance ou recevez les actualités du club en
            avant-première.
          </p>
        </div>

        {/* =============================================
            GRILLE DES 2 BLOCS CTA
            Version séparée pour laisser respirer les cartes
        ============================================= */}
        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          {/* =================================================
              BLOC 1 : SÉANCE D’ESSAI
          ================================================= */}
          <article
            className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.05] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.20)] backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] hover:border-red-400/20 hover:bg-white/[0.07] hover:shadow-[0_24px_50px_rgba(0,0,0,0.24)] md:p-7 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "120ms" }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-500/12 via-transparent to-amber-300/8 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-red-500 via-amber-400 to-transparent opacity-80" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="flex items-center gap-4">
                  <div
                    className="
                      inline-flex h-11 w-11 items-center justify-center
                      rounded-2xl border border-red-400/15
                      bg-red-500/10 text-red-400
                      shadow-[0_10px_24px_rgba(220,38,38,0.12)]
                      transition-all duration-300
                      group-hover:scale-[1.04]
                    "
                  >
                    <Trophy size={22} />
                  </div>

                  <p className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-red-300">
                    Première approche
                  </p>
                </div>

                <h3 className="mt-5 text-2xl font-black text-white md:text-[1.9rem]">
                  Essayez une séance gratuitement
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/75 md:text-[0.98rem]">
                  Découvrez l’ambiance du club, rencontrez l’équipe et testez
                  nos disciplines dans un cadre sérieux, structuré et
                  motivant.
                </p>

                <div className="mt-4 flex flex-wrap gap-2.5">
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[0.72rem] font-semibold text-white/80">
                    Encadrement sérieux
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[0.72rem] font-semibold text-white/80">
                    Tous niveaux
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/inscription"
                  className="
                    inline-flex items-center gap-2 rounded-full
                    bg-red-600 px-5 py-3
                    text-sm font-semibold text-white
                    shadow-[0_12px_28px_rgba(220,38,38,0.20)]
                    transition-all duration-300
                    hover:-translate-y-[1px]
                    hover:bg-red-700
                    hover:shadow-[0_16px_34px_rgba(220,38,38,0.26)]
                  "
                >
                  Réserver ma séance
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </article>

          {/* =================================================
              BLOC 2 : NEWSLETTER / ÉVÉNEMENTS
          ================================================= */}
          <article
            className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.05] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.20)] backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] hover:border-amber-300/20 hover:bg-white/[0.07] hover:shadow-[0_24px_50px_rgba(0,0,0,0.24)] md:p-7 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "240ms" }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-300/12 via-transparent to-white/8 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-amber-300 via-white/60 to-transparent opacity-75" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="flex items-center gap-4">
                  <div
                    className="
                      inline-flex h-11 w-11 items-center justify-center
                      rounded-2xl border border-amber-300/15
                      bg-amber-300/10 text-amber-300
                      shadow-[0_10px_24px_rgba(251,191,36,0.10)]
                      transition-all duration-300
                      group-hover:scale-[1.04]
                    "
                  >
                    <Mail size={22} />
                  </div>

                  <p className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-amber-300">
                    Suivre le club
                  </p>
                </div>

                <h3 className="mt-5 text-2xl font-black text-white md:text-[1.9rem]">
                  Recevez les actualités du club
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/75 md:text-[0.98rem]">
                  Galas, stages, annonces et temps forts de la saison
                  directement dans votre boîte mail.
                </p>

                <div className="mt-4 flex flex-wrap gap-2.5">
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[0.72rem] font-semibold text-white/80">
                    Galas
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[0.72rem] font-semibold text-white/80">
                    Stages
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[0.72rem] font-semibold text-white/80">
                    Actualités
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <form className="flex flex-col gap-3 sm:flex-row">
                  <div className="relative w-full">
                    <input
                      type="email"
                      placeholder="Votre adresse email"
                      className="
                        w-full rounded-full border border-white/10
                        bg-white px-5 py-3 text-sm text-black
                        shadow-[0_8px_18px_rgba(255,255,255,0.06)]
                        outline-none transition-all duration-300
                        placeholder:text-zinc-500
                        focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20
                      "
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="
                      inline-flex shrink-0 items-center justify-center
                      rounded-full bg-amber-400 px-5 py-3
                      text-sm font-semibold text-black
                      transition-all duration-300
                      hover:-translate-y-[1px]
                      hover:bg-amber-500
                      hover:shadow-[0_12px_26px_rgba(251,191,36,0.16)]
                    "
                  >
                    S’inscrire
                  </button>
                </form>

                <p className="mt-3 text-[0.72rem] leading-5 text-white/45">
                  Pas de spam. Seulement les informations utiles du club.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}