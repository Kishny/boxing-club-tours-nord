"use client";

// =====================================================
// IMPORTS
// =====================================================
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Mail,
  Trophy,
  ArrowRight,
  Sparkles,
  ChevronDown,
} from "lucide-react";

// =====================================================
// COMPOSANT CTA PREMIUM
// VERSION MOBILE : ACCORDÉONS COMPACTS
// VERSION DESKTOP : 2 CARDS PREMIUM
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
  // Accordéon mobile
  // ---------------------------------------------------
  const [openMobileCard, setOpenMobileCard] = useState<"trial" | "news" | null>(
    null
  );

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
        py-8 text-white md:py-14 lg:py-16
      "
    >
      {/* =================================================
          DÉCORS DE FOND PREMIUM
      ================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-4rem] top-8 h-28 w-28 rounded-full bg-red-600/12 blur-3xl md:h-36 md:w-36" />
        <div className="absolute right-[-3rem] top-10 h-32 w-32 rounded-full bg-amber-400/10 blur-3xl md:h-40 md:w-40" />
        <div className="absolute bottom-[-2rem] left-1/3 h-32 w-32 rounded-full bg-white/4 blur-3xl md:h-44 md:w-44" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.035),transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.28)_1px,transparent_1px)] [background-size:26px_26px] md:[background-size:30px_30px]" />
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
              px-3 py-1.5 text-[0.58rem] font-bold uppercase
              tracking-[0.16em] text-amber-300
              shadow-[0_8px_20px_rgba(0,0,0,0.16)]
              backdrop-blur-md
              md:px-3.5 md:text-[0.66rem] md:tracking-[0.18em]
            "
          >
            <Sparkles size={11} />
            Rejoindre le club
          </span>

          <h2
            className="
              mt-3 text-[2.1rem] font-black uppercase leading-[0.94]
              tracking-[0.03em] text-white
              sm:text-[2.5rem] md:mt-4 md:text-[2.8rem] md:tracking-[0.05em]
            "
          >
            Passez à l’action
          </h2>

          <p
            className="
              mx-auto mt-3 max-w-[24rem]
              text-[0.92rem] leading-6 text-white/68
              sm:max-w-2xl sm:text-[0.96rem]
              md:text-[0.98rem]
            "
          >
            Réservez une première séance ou recevez les actualités du club en
            avant-première.
          </p>
        </div>

        {/* =============================================
            VERSION MOBILE : ACCORDÉONS COMPACTS
        ============================================= */}
        <div className="mt-6 space-y-3 md:hidden">
          {/* =================================================
              ACCORDÉON 1 : SÉANCE D’ESSAI
          ================================================= */}
          <article
            className={`relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.05] shadow-[0_14px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "120ms" }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-500/12 via-transparent to-amber-300/8 opacity-70" />
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-red-500 via-amber-400 to-transparent opacity-80" />

            <button
              type="button"
              onClick={() =>
                setOpenMobileCard((prev) => (prev === "trial" ? null : "trial"))
              }
              className="relative z-10 flex w-full items-center justify-between gap-3 px-4 py-4 text-left"
              aria-expanded={openMobileCard === "trial"}
            >
              <div className="flex min-w-0 items-center gap-3">
                <div
                  className="
                    inline-flex h-9 w-9 shrink-0 items-center justify-center
                    rounded-xl border border-red-400/15
                    bg-red-500/10 text-red-400
                  "
                >
                  <Trophy size={18} />
                </div>

                <div className="min-w-0">
                  <p className="text-[0.56rem] font-bold uppercase tracking-[0.15em] text-red-300">
                    Première approche
                  </p>
                  <h3 className="mt-1 text-[1rem] font-extrabold leading-5 text-white">
                    Essayez une séance gratuitement
                  </h3>
                </div>
              </div>

              <ChevronDown
                size={18}
                className={`shrink-0 text-white/75 transition-transform duration-300 ${
                  openMobileCard === "trial" ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                openMobileCard === "trial"
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="relative z-10 border-t border-white/10 px-4 pb-4 pt-3">
                  <p className="text-[0.9rem] leading-6 text-white/75">
                    Découvrez l’ambiance du club, rencontrez l’équipe et testez
                    nos disciplines dans un cadre sérieux, structuré et motivant.
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/80">
                      Encadrement sérieux
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/80">
                      Tous niveaux
                    </span>
                  </div>

                  <div className="mt-4">
                    <Link
                      href="/inscription"
                      className="
                        inline-flex min-h-[46px] items-center gap-2 rounded-full
                        bg-red-600 px-4 py-2.5
                        text-sm font-semibold text-white
                        transition-all duration-300
                        hover:bg-red-700
                      "
                    >
                      Réserver ma séance
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* =================================================
              ACCORDÉON 2 : NEWSLETTER / ÉVÉNEMENTS
          ================================================= */}
          <article
            className={`relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.05] shadow-[0_14px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "240ms" }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-300/12 via-transparent to-white/8 opacity-70" />
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-amber-300 via-white/60 to-transparent opacity-75" />

            <button
              type="button"
              onClick={() =>
                setOpenMobileCard((prev) => (prev === "news" ? null : "news"))
              }
              className="relative z-10 flex w-full items-center justify-between gap-3 px-4 py-4 text-left"
              aria-expanded={openMobileCard === "news"}
            >
              <div className="flex min-w-0 items-center gap-3">
                <div
                  className="
                    inline-flex h-9 w-9 shrink-0 items-center justify-center
                    rounded-xl border border-amber-300/15
                    bg-amber-300/10 text-amber-300
                  "
                >
                  <Mail size={18} />
                </div>

                <div className="min-w-0">
                  <p className="text-[0.56rem] font-bold uppercase tracking-[0.15em] text-amber-300">
                    Suivre le club
                  </p>
                  <h3 className="mt-1 text-[1rem] font-extrabold leading-5 text-white">
                    Recevez les actualités du club
                  </h3>
                </div>
              </div>

              <ChevronDown
                size={18}
                className={`shrink-0 text-white/75 transition-transform duration-300 ${
                  openMobileCard === "news" ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                openMobileCard === "news"
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="relative z-10 border-t border-white/10 px-4 pb-4 pt-3">
                  <p className="text-[0.9rem] leading-6 text-white/75">
                    Galas, stages, annonces et temps forts de la saison
                    directement dans votre boîte mail.
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/80">
                      Galas
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/80">
                      Stages
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/80">
                      Actualités
                    </span>
                  </div>

                  <div className="mt-4">
                    <form className="flex flex-col gap-2.5">
                      <div className="relative w-full">
                        <input
                          type="email"
                          placeholder="Votre adresse email"
                          className="
                            min-h-[46px] w-full rounded-full border border-white/10
                            bg-white px-4 py-2.5 text-sm text-black
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
                          inline-flex min-h-[46px] items-center justify-center
                          rounded-full bg-amber-400 px-4 py-2.5
                          text-sm font-semibold text-black
                          transition-all duration-300
                          hover:bg-amber-500
                        "
                      >
                        S’inscrire
                      </button>
                    </form>

                    <p className="mt-2.5 text-[0.66rem] leading-5 text-white/45">
                      Pas de spam. Seulement les informations utiles du club.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* =============================================
            VERSION DESKTOP / TABLETTE LARGE
        ============================================= */}
        <div className="mt-6 hidden gap-4 md:mt-8 md:grid md:gap-6 xl:grid-cols-2">
          {/* =================================================
              BLOC 1 : SÉANCE D’ESSAI
          ================================================= */}
          <article
            className={`group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.05] p-4 shadow-[0_14px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] hover:border-red-400/20 hover:bg-white/[0.07] hover:shadow-[0_24px_50px_rgba(0,0,0,0.24)] sm:rounded-[24px] sm:p-5 md:rounded-[30px] md:p-7 ${
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
                <div className="flex items-center gap-3">
                  <div
                    className="
                      inline-flex h-9 w-9 items-center justify-center
                      rounded-xl border border-red-400/15
                      bg-red-500/10 text-red-400
                      shadow-[0_10px_24px_rgba(220,38,38,0.12)]
                      transition-all duration-300
                      group-hover:scale-[1.04]
                      md:h-11 md:w-11 md:rounded-2xl
                    "
                  >
                    <Trophy size={18} className="md:h-[22px] md:w-[22px]" />
                  </div>

                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.15em] text-red-300 md:text-[0.66rem] md:tracking-[0.18em]">
                    Première approche
                  </p>
                </div>

                <h3 className="mt-4 text-[1.45rem] font-black leading-[1.02] text-white sm:text-[1.6rem] md:mt-5 md:text-[1.9rem]">
                  Essayez une séance gratuitement
                </h3>

                <p className="mt-3 max-w-xl text-[0.9rem] leading-6 text-white/75 md:text-[0.98rem]">
                  Découvrez l’ambiance du club, rencontrez l’équipe et testez
                  nos disciplines dans un cadre sérieux, structuré et motivant.
                </p>

                <div className="mt-3 flex flex-wrap gap-2 md:mt-4 md:gap-2.5">
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.68rem] font-semibold text-white/80 md:px-3 md:py-1.5 md:text-[0.72rem]">
                    Encadrement sérieux
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.68rem] font-semibold text-white/80 md:px-3 md:py-1.5 md:text-[0.72rem]">
                    Tous niveaux
                  </span>
                </div>
              </div>

              <div className="mt-5 md:mt-6">
                <Link
                  href="/inscription"
                  className="
                    inline-flex min-h-[48px] items-center gap-2 rounded-full
                    bg-red-600 px-4 py-2.5
                    text-sm font-semibold text-white
                    shadow-[0_12px_28px_rgba(220,38,38,0.20)]
                    transition-all duration-300
                    hover:-translate-y-[1px]
                    hover:bg-red-700
                    hover:shadow-[0_16px_34px_rgba(220,38,38,0.26)]
                    md:px-5 md:py-3
                  "
                >
                  Réserver ma séance
                  <ArrowRight
                    size={16}
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
            className={`group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.05] p-4 shadow-[0_14px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] hover:border-amber-300/20 hover:bg-white/[0.07] hover:shadow-[0_24px_50px_rgba(0,0,0,0.24)] sm:rounded-[24px] sm:p-5 md:rounded-[30px] md:p-7 ${
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
                <div className="flex items-center gap-3">
                  <div
                    className="
                      inline-flex h-9 w-9 items-center justify-center
                      rounded-xl border border-amber-300/15
                      bg-amber-300/10 text-amber-300
                      shadow-[0_10px_24px_rgba(251,191,36,0.10)]
                      transition-all duration-300
                      group-hover:scale-[1.04]
                      md:h-11 md:w-11 md:rounded-2xl
                    "
                  >
                    <Mail size={18} className="md:h-[22px] md:w-[22px]" />
                  </div>

                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.15em] text-amber-300 md:text-[0.66rem] md:tracking-[0.18em]">
                    Suivre le club
                  </p>
                </div>

                <h3 className="mt-4 text-[1.45rem] font-black leading-[1.02] text-white sm:text-[1.6rem] md:mt-5 md:text-[1.9rem]">
                  Recevez les actualités du club
                </h3>

                <p className="mt-3 max-w-xl text-[0.9rem] leading-6 text-white/75 md:text-[0.98rem]">
                  Galas, stages, annonces et temps forts de la saison
                  directement dans votre boîte mail.
                </p>

                <div className="mt-3 flex flex-wrap gap-2 md:mt-4 md:gap-2.5">
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.68rem] font-semibold text-white/80 md:px-3 md:py-1.5 md:text-[0.72rem]">
                    Galas
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.68rem] font-semibold text-white/80 md:px-3 md:py-1.5 md:text-[0.72rem]">
                    Stages
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.68rem] font-semibold text-white/80 md:px-3 md:py-1.5 md:text-[0.72rem]">
                    Actualités
                  </span>
                </div>
              </div>

              <div className="mt-5 md:mt-6">
                <form className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
                  <div className="relative w-full">
                    <input
                      type="email"
                      placeholder="Votre adresse email"
                      className="
                        min-h-[48px] w-full rounded-full border border-white/10
                        bg-white px-4 py-2.5 text-sm text-black
                        shadow-[0_8px_18px_rgba(255,255,255,0.06)]
                        outline-none transition-all duration-300
                        placeholder:text-zinc-500
                        focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20
                        md:px-5 md:py-3
                      "
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="
                      inline-flex min-h-[48px] shrink-0 items-center justify-center
                      rounded-full bg-amber-400 px-4 py-2.5
                      text-sm font-semibold text-black
                      transition-all duration-300
                      hover:-translate-y-[1px]
                      hover:bg-amber-500
                      hover:shadow-[0_12px_26px_rgba(251,191,36,0.16)]
                      md:px-5 md:py-3
                    "
                  >
                    S’inscrire
                  </button>
                </form>

                <p className="mt-2.5 text-[0.68rem] leading-5 text-white/45 md:mt-3 md:text-[0.72rem]">
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