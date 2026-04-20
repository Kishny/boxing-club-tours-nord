"use client";

// =====================================================
// IMPORTS
// =====================================================
import { useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

// =====================================================
// HOOK HYDRATATION SAFE
// =====================================================
function useHasHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

// =====================================================
// TYPE DES DISCIPLINES
// =====================================================
type Discipline = {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  miniInfo: string;
  color: string;
  glow: string;
};

// =====================================================
// DONNÉES DES DISCIPLINES
// ALIGNÉES SUR LA PAGE /disciplines
// =====================================================
const disciplines: Discipline[] = [
  {
    id: 1,
    slug: "kickboxing",
    title: "Kickboxing",
    shortTitle: "Kick",
    description:
      "Discipline pieds-poings complète regroupant plusieurs formes de combat debout, idéale pour développer technique, cardio et lecture du combat.",
    miniInfo: "Puissance • Vitesse • Polyvalence",
    color: "#ef4444",
    glow: "rgba(239, 68, 68, 0.35)",
  },
  {
    id: 2,
    slug: "muaythai",
    title: "Muaythai",
    shortTitle: "Muay",
    description:
      "Art martial thaïlandais très complet utilisant poings, coudes, genoux et pieds, avec une forte identité martiale et un gros travail d’impact.",
    miniInfo: "Impact • Tradition • Complétude",
    color: "#f97316",
    glow: "rgba(249, 115, 22, 0.35)",
  },
  {
    id: 3,
    slug: "pancrace",
    title: "Pancrace",
    shortTitle: "Panc",
    description:
      "Discipline globale mêlant frappes, projections et travail au sol, pensée pour les pratiquants qui recherchent une vraie polyvalence technique.",
    miniInfo: "Frappe • Projection • Sol",
    color: "#22c55e",
    glow: "rgba(34, 197, 94, 0.35)",
  },
  {
    id: 4,
    slug: "boxe-anglaise",
    title: "Boxe Anglaise",
    shortTitle: "Boxe",
    description:
      "Travail centré sur les poings, les esquives, les déplacements et le timing, avec une exigence forte sur la précision et la lecture tactique.",
    miniInfo: "Poings • Esquives • Précision",
    color: "#60a5fa",
    glow: "rgba(96, 165, 250, 0.35)",
  },
  {
    id: 5,
    slug: "boxe-francaise",
    title: "Savate",
    shortTitle: "Sav.",
    description:
      "Discipline française élégante et tactique mêlant coups de pied et de poing, avec beaucoup de contrôle, de précision et de mobilité.",
    miniInfo: "Précision • Tactique • Élégance",
    color: "#ffffff",
    glow: "rgba(255, 255, 255, 0.28)",
  },
  {
    id: 6,
    slug: "aerokick",
    title: "Aérokick",
    shortTitle: "Aéro",
    description:
      "Activité fitness dynamique inspirée du kickboxing, sans opposition, parfaite pour travailler cardio, tonicité et dépense énergétique.",
    miniInfo: "Cardio • Fitness • Énergie",
    color: "#eab308",
    glow: "rgba(234, 179, 8, 0.35)",
  },
  {
    id: 7,
    slug: "cardio-step",
    title: "Cardio Step",
    shortTitle: "Step",
    description:
      "Cours rythmé sur step visant l’endurance, la coordination et le renforcement du bas du corps dans une ambiance cardio très dynamique.",
    miniInfo: "Endurance • Coordination • Tonus",
    color: "#a855f7",
    glow: "rgba(168, 85, 247, 0.35)",
  },
];

// =====================================================
// OUTILS SVG
// IMPORTANT : on arrondit pour éviter les micro-diffs
// =====================================================
function round(value: number, precision = 3) {
  return Number(value.toFixed(precision));
}

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: round(centerX + radius * Math.cos(angleInRadians)),
    y: round(centerY + radius * Math.sin(angleInRadians)),
  };
}

// =====================================================
// PATH D'UN SEGMENT DE DONUT
// =====================================================
function describeDonutSegmentPath(
  centerX: number,
  centerY: number,
  outerRadius: number,
  innerRadius: number,
  startAngle: number,
  endAngle: number
) {
  const outerStart = polarToCartesian(centerX, centerY, outerRadius, endAngle);
  const outerEnd = polarToCartesian(centerX, centerY, outerRadius, startAngle);

  const innerStart = polarToCartesian(centerX, centerY, innerRadius, endAngle);
  const innerEnd = polarToCartesian(centerX, centerY, innerRadius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 0 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 1 ${innerStart.x} ${innerStart.y}`,
    "Z",
  ].join(" ");
}

// =====================================================
// COMPOSANT SECTION DISCIPLINES HOME
// VERSION ALIGNÉE AVEC LA PAGE DÉDIÉE
// =====================================================
export default function Disciplines() {
  // ---------------------------------------------------
  // Hydratation sécurisée
  // ---------------------------------------------------
  const isMounted = useHasHydrated();

  // ---------------------------------------------------
  // Discipline active
  // ---------------------------------------------------
  const [activeId, setActiveId] = useState<number | null>(null);

  // ---------------------------------------------------
  // Discipline active courante
  // ---------------------------------------------------
  const activeDiscipline =
    disciplines.find((item) => item.id === activeId) ?? null;

  // ---------------------------------------------------
  // Paramètres du donut SVG
  // ---------------------------------------------------
  const size = 420;
  const center = size / 2;
  const outerRadius = 165;
  const innerRadius = 84;
  const angleSize = 360 / disciplines.length;

  // ---------------------------------------------------
  // Génération des segments
  // ---------------------------------------------------
  const sectors = useMemo(() => {
    return disciplines.map((discipline, index) => {
      const startAngle = index * angleSize;
      const endAngle = startAngle + angleSize;
      const midAngle = startAngle + angleSize / 2;

      const labelRadius = (outerRadius + innerRadius) / 2;

      const labelPosition = polarToCartesian(
        center,
        center,
        labelRadius,
        midAngle
      );

      return {
        ...discipline,
        startAngle,
        endAngle,
        midAngle,
        path: describeDonutSegmentPath(
          center,
          center,
          outerRadius,
          innerRadius,
          startAngle,
          endAngle
        ),
        labelX: labelPosition.x,
        labelY: labelPosition.y,
      };
    });
  }, [angleSize, center, outerRadius, innerRadius]);

  return (
    <section
      id="disciplines"
      className="
        relative overflow-hidden
        bg-gradient-to-b from-[#f6f6f6] via-white to-[#f2f3f5]
        py-10 md:py-16 lg:py-18
      "
    >
      <div className="pointer-events-none absolute inset-0 bg-black/10" />

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero-2.png"
          alt="Filigrane Boxing Club"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-center
            opacity-[0.07]
            grayscale
            contrast-125
            brightness-75
            mix-blend-multiply
            scale-[1.04]
          "
        />

        <div className="absolute inset-y-0 left-0 w-[18%] bg-gradient-to-r from-red-500/8 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[18%] bg-gradient-to-l from-amber-400/8 to-transparent" />
        <div className="absolute inset-0 bg-white/18" />
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-10 h-32 w-32 rounded-full bg-red-500/7 blur-3xl md:h-40 md:w-40" />
        <div className="absolute right-0 top-16 h-36 w-36 rounded-full bg-amber-400/8 blur-3xl md:h-48 md:w-48" />
        <div className="absolute bottom-6 left-1/3 h-32 w-32 rounded-full bg-black/4 blur-3xl md:h-40 md:w-40" />
      </div>

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-flex items-center gap-2 rounded-full
              border border-black/10 bg-white/80
              px-3 py-1.5 text-[0.62rem] font-bold uppercase
              tracking-[0.14em] text-red-600
              shadow-[0_8px_25px_rgba(0,0,0,0.05)]
              backdrop-blur-md
              md:px-3.5 md:text-[0.68rem] md:tracking-[0.16em]
            "
          >
            <Sparkles size={12} />
            Nos disciplines
          </span>

          <h2
            className="
              mt-3 text-[2.25rem] font-black uppercase leading-[0.94]
              tracking-[0.03em] text-zinc-950
              sm:text-4xl md:mt-4 md:text-5xl md:tracking-[0.05em]
            "
          >
            Explore le club
            <br className="hidden sm:block" /> autrement
          </h2>

          <p
            className="
              mx-auto mt-3 max-w-[23rem]
              text-[0.96rem] leading-7 text-zinc-600
              sm:max-w-2xl sm:text-[0.98rem]
              md:mt-4 md:max-w-2xl md:text-base
            "
          >
            Découvre l’univers du club à travers des disciplines de combat,
            de précision et de cardio, pensées pour progresser, se dépasser et
            trouver son propre rythme.
          </p>
        </div>

        <div
          className="relative mt-7 md:mt-10"
          onMouseLeave={() => {
            if (isMounted) setActiveId(null);
          }}
        >
          <div className="flex justify-center">
            <div
              className={`
                donut-appear relative
                flex items-center justify-center
                rounded-full border border-black/8
                bg-white/70 p-2.5
                shadow-[0_12px_26px_rgba(0,0,0,0.06)]
                backdrop-blur-xl
                transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${isMounted && activeDiscipline ? "lg:-translate-x-16 lg:scale-[0.9]" : "scale-100"}
                md:p-3
              `}
            >
              <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/70 via-transparent to-black/5" />
              <div className="donut-premium-ring pointer-events-none absolute inset-[8px] rounded-full md:inset-[10px]" />

              <div
                className={`relative transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isMounted && activeDiscipline
                    ? "donut-reset-orientation"
                    : "donut-slow-spin"
                }`}
              >
                <svg
                  viewBox={`0 0 ${size} ${size}`}
                  className="h-[210px] w-[210px] sm:h-[250px] sm:w-[250px] md:h-[320px] md:w-[320px] lg:h-[360px] lg:w-[360px]"
                  role="img"
                  aria-label="Donut chart interactif des disciplines du club"
                >
                  <circle
                    cx={center}
                    cy={center}
                    r={outerRadius + 10}
                    fill="rgba(255,255,255,0.42)"
                  />

                  {sectors.map((sector) => {
                    const isActive = isMounted && sector.id === activeId;

                    return (
                      <g
                        key={sector.id}
                        onMouseEnter={
                          isMounted ? () => setActiveId(sector.id) : undefined
                        }
                        onFocus={
                          isMounted ? () => setActiveId(sector.id) : undefined
                        }
                        onClick={
                          isMounted
                            ? () =>
                                setActiveId((prev) =>
                                  prev === sector.id ? null : sector.id
                                )
                            : undefined
                        }
                        className={
                          isMounted
                            ? "cursor-pointer transition-transform duration-500"
                            : "transition-transform duration-500"
                        }
                        style={{
                          transformOrigin: `${center}px ${center}px`,
                          transform: isActive
                            ? `scale(1.045) rotate(${sector.id % 2 === 0 ? "0.7deg" : "-0.7deg"})`
                            : "scale(1)",
                          filter: isActive
                            ? `drop-shadow(0 0 20px ${sector.glow})`
                            : "none",
                        }}
                      >
                        <path
                          d={sector.path}
                          fill={sector.color}
                          fillOpacity={isActive ? 0.98 : 0.82}
                          stroke="rgba(255,255,255,0.82)"
                          strokeWidth={isActive ? 3 : 2}
                          className="transition-all duration-500"
                        />

                        {isActive && (
                          <path
                            d={sector.path}
                            fill="none"
                            stroke="rgba(255,255,255,0.98)"
                            strokeWidth={1.5}
                            className="pointer-events-none"
                            style={{
                              filter: `drop-shadow(0 0 10px ${sector.glow})`,
                            }}
                          />
                        )}

                        <text
                          x={sector.labelX}
                          y={sector.labelY}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill={
                            sector.color === "#ffffff" ? "#111111" : "#ffffff"
                          }
                          fontSize={sector.shortTitle.length >= 5 ? 12 : 14}
                          fontWeight={900}
                          style={{
                            letterSpacing: "0.02em",
                            textTransform: "uppercase",
                            pointerEvents: "none",
                          }}
                        >
                          {sector.shortTitle}
                        </text>
                      </g>
                    );
                  })}

                  <circle
                    cx={center}
                    cy={center}
                    r={58}
                    fill="rgba(17,17,17,0.94)"
                    stroke="rgba(255,255,255,0.10)"
                    strokeWidth="2"
                  />

                  <circle
                    cx={center}
                    cy={center}
                    r={66}
                    fill="none"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="2"
                  />

                  <text
                    x={center}
                    y={center - 8}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="14"
                    fontWeight="900"
                    style={{
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                    }}
                  >
                    CLUB
                  </text>

                  <text
                    x={center}
                    y={center + 14}
                    textAnchor="middle"
                    fill="#fca311"
                    fontSize="11"
                    fontWeight="700"
                    style={{
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                    }}
                  >
                    DISCIPLINES
                  </text>
                </svg>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute right-0 top-1/2 hidden w-full max-w-[360px] -translate-y-1/2 lg:block">
            <div
              className={`
                transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  isMounted && activeDiscipline
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }
              `}
            >
              {isMounted && activeDiscipline && (
                <aside
                  key={activeDiscipline.id}
                  className="
                    hero-text-enter pointer-events-auto
                    relative overflow-hidden
                    rounded-[28px] border border-black/8
                    bg-white/86 p-6
                    shadow-[0_20px_45px_rgba(0,0,0,0.08)]
                    backdrop-blur-xl
                  "
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-80 transition-all duration-500"
                    style={{
                      background: `radial-gradient(circle at top right, ${activeDiscipline.glow} 0%, transparent 45%)`,
                    }}
                  />

                  <div
                    className="absolute left-0 top-0 h-full w-[4px] rounded-r-full"
                    style={{
                      background: `linear-gradient(to bottom, ${activeDiscipline.color}, rgba(255,255,255,0.2), ${activeDiscipline.color})`,
                      boxShadow: `0 0 18px ${activeDiscipline.glow}`,
                    }}
                  />

                  <div className="relative z-10">
                    <span
                      className="inline-flex rounded-full px-3 py-1 text-[0.66rem] font-bold uppercase tracking-[0.14em]"
                      style={{
                        backgroundColor:
                          activeDiscipline.color === "#ffffff"
                            ? "rgba(0,0,0,0.06)"
                            : `${activeDiscipline.color}18`,
                        color:
                          activeDiscipline.color === "#ffffff"
                            ? "#111111"
                            : activeDiscipline.color,
                        border: `1px solid ${
                          activeDiscipline.color === "#ffffff"
                            ? "rgba(0,0,0,0.08)"
                            : `${activeDiscipline.color}35`
                        }`,
                      }}
                    >
                      Discipline active
                    </span>

                    <h3 className="mt-4 text-2xl font-black uppercase tracking-[0.03em] text-zinc-950">
                      {activeDiscipline.title}
                    </h3>

                    <p
                      className="mt-2 text-xs font-semibold uppercase tracking-[0.14em]"
                      style={{
                        color:
                          activeDiscipline.color === "#ffffff"
                            ? "#444444"
                            : activeDiscipline.color,
                      }}
                    >
                      {activeDiscipline.miniInfo}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-zinc-600">
                      {activeDiscipline.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 text-xs font-medium text-zinc-500">
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ backgroundColor: activeDiscipline.color }}
                        />
                        Explorer la discipline
                      </div>

                      <Link
                        href={`/disciplines#${activeDiscipline.slug}`}
                        className="
                          inline-flex items-center gap-2 rounded-full
                          bg-black px-4 py-2.5 text-sm font-semibold text-white
                          transition-all duration-300
                          hover:bg-red-600
                        "
                      >
                        Découvrir
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </aside>
              )}
            </div>
          </div>
        </div>

        <div className="mt-5 lg:hidden">
          <div className="-mx-1 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max min-w-full gap-2 px-1">
              {disciplines.map((discipline) => {
                const isActive = isMounted && discipline.id === activeId;

                return (
                  <button
                    key={discipline.id}
                    type="button"
                    onClick={
                      isMounted
                        ? () =>
                            setActiveId((prev) =>
                              prev === discipline.id ? null : discipline.id
                            )
                        : undefined
                    }
                    className={`
                      shrink-0 rounded-full border px-3.5 py-2 text-[0.92rem] font-semibold
                      transition-all duration-300
                      ${
                        isActive
                          ? "border-black bg-black text-white shadow-[0_8px_20px_rgba(0,0,0,0.14)]"
                          : "border-black/8 bg-white/90 text-zinc-700"
                      }
                    `}
                  >
                    {discipline.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {isMounted && activeDiscipline && (
          <div className="mt-5 lg:hidden">
            <aside
              key={activeDiscipline.id}
              className="
                hero-text-enter
                relative overflow-hidden
                rounded-[24px] border border-black/8
                bg-white/86 p-5
                shadow-[0_14px_32px_rgba(0,0,0,0.08)]
                backdrop-blur-xl
                sm:rounded-[28px] sm:p-6
              "
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-80 transition-all duration-500"
                style={{
                  background: `radial-gradient(circle at top right, ${activeDiscipline.glow} 0%, transparent 45%)`,
                }}
              />

              <div
                className="absolute left-0 top-0 h-full w-[4px] rounded-r-full"
                style={{
                  background: `linear-gradient(to bottom, ${activeDiscipline.color}, rgba(255,255,255,0.2), ${activeDiscipline.color})`,
                  boxShadow: `0 0 18px ${activeDiscipline.glow}`,
                }}
              />

              <div className="relative z-10">
                <span
                  className="inline-flex rounded-full px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em]"
                  style={{
                    backgroundColor:
                      activeDiscipline.color === "#ffffff"
                        ? "rgba(0,0,0,0.06)"
                        : `${activeDiscipline.color}18`,
                    color:
                      activeDiscipline.color === "#ffffff"
                        ? "#111111"
                        : activeDiscipline.color,
                    border: `1px solid ${
                      activeDiscipline.color === "#ffffff"
                        ? "rgba(0,0,0,0.08)"
                        : `${activeDiscipline.color}35`
                    }`,
                  }}
                >
                  Discipline active
                </span>

                <h3 className="mt-4 text-[1.7rem] font-black uppercase leading-[0.96] tracking-[0.03em] text-zinc-950 sm:text-[2rem]">
                  {activeDiscipline.title}
                </h3>

                <p
                  className="mt-2 text-[0.78rem] font-semibold uppercase tracking-[0.12em] sm:text-[0.82rem]"
                  style={{
                    color:
                      activeDiscipline.color === "#ffffff"
                        ? "#444444"
                        : activeDiscipline.color,
                  }}
                >
                  {activeDiscipline.miniInfo}
                </p>

                <p className="mt-4 text-[0.94rem] leading-6 text-zinc-600 sm:text-[0.98rem]">
                  {activeDiscipline.description}
                </p>

                <div className="mt-5">
                  <Link
                    href={`/disciplines#${activeDiscipline.slug}`}
                    className="
                      inline-flex items-center gap-2 rounded-full
                      bg-black px-4 py-2.5 text-sm font-semibold text-white
                      transition-all duration-300
                      hover:bg-red-600
                    "
                  >
                    Découvrir
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}