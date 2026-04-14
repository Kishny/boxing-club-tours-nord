"use client";

// =====================================================
// IMPORTS
// =====================================================
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// =====================================================
// DONNÉES DES LOGOS
// Remplace les noms et chemins si besoin
// =====================================================
const clubLogos = [
  {
    id: 1,
    name: "Club 1",
    src: "/images/logo-blanc.png",
  },
  {
    id: 2,
    name: "Club 2",
    src: "/images/image.png",
  },
  {
    id: 3,
    name: "Club 3",
    src: "/images/event-fight.png",
  },
];

// =====================================================
// COMPOSANT SECTION LOGOS DES CLUBS
// VERSION PREMIUM :
// - 3 cartes uniquement
// - apparition au scroll
// - shimmer discret
// =====================================================
export default function ClubsMarquee() {
  // ---------------------------------------------------
  // Référence de section pour détecter l’entrée au scroll
  // ---------------------------------------------------
  const sectionRef = useRef<HTMLElement | null>(null);

  // ---------------------------------------------------
  // Etat d’animation d’apparition
  // ---------------------------------------------------
  const [isVisible, setIsVisible] = useState(false);

  // ---------------------------------------------------
  // IntersectionObserver :
  // quand la section entre dans le viewport,
  // on déclenche l’animation d’apparition
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
        threshold: 0.2,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative overflow-hidden
        border-y border-white/10
        bg-gradient-to-r from-[#111111] via-[#171717] to-[#111111]
        py-8 md:py-10
      "
      aria-label="Logos des clubs"
    >
      {/* =============================================
          LUEURS DE FOND PREMIUM
      ============================================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      {/* =============================================
          TITRE DE SECTION
          On augmente l’espace sous le titre
      ============================================= */}
      <div
        className={`
    container-custom relative z-10 mb-14 md:mb-16 lg:mb-20
    transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
    ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
  `}
      >
        <p className="text-center text-xs md:text-sm font-bold uppercase tracking-[0.28em] text-white/50">
          Les clubs représentés
        </p>
      </div>

      {/* =============================================
          3 CARTES UNIQUEMENT
      ============================================= */}
      <div className="container-custom relative z-10 mt-6 md:mt-8 lg:mt-10">
        <div className="grid gap-5 md:grid-cols-3">
          {clubLogos.map((logo, index) => (
            <div
              key={logo.id}
              className={`
                club-logo-card-shimmer
                group relative overflow-hidden
                flex items-center justify-center
                rounded-[26px]
                border border-white/5
                bg-white/[0.025]
                px-6 py-7
                shadow-[0_6px_20px_rgba(0,0,0,0.12)]
                backdrop-blur-md
                transition-all duration-500 ease-out
                hover:-translate-y-[2px]
                hover:border-white/10
                hover:bg-white/[0.045]
                hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)]
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
              style={{
                transitionDelay: `${index * 130}ms`,
              }}
            >
              {/* -------------------------------------
                  Reflet lumineux interne très discret
              ------------------------------------- */}
              <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-gradient-to-br from-white/[0.03] via-transparent to-white/[0.02]" />

              {/* -------------------------------------
                  Logo
              ------------------------------------- */}
              <div className="relative z-10 h-[62px] w-[150px] md:h-[72px] md:w-[170px]">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="(max-width: 768px) 150px, 170px"
                  className="
                    object-contain
                    opacity-80
                    transition-all duration-300
                    group-hover:scale-105
                    group-hover:opacity-100
                    group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
