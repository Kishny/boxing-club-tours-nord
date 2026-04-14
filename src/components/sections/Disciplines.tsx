"use client";

// =====================================================
// IMPORTS
// =====================================================
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

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
// =====================================================
const disciplines: Discipline[] = [
  {
    id: 1,
    slug: "kickboxing",
    title: "Kickboxing",
    shortTitle: "Kick",
    description:
      "Une discipline complète mêlant puissance, rythme, précision et déplacements. Idéale pour développer technique, cardio et impact.",
    miniInfo: "Puissance • Vitesse • Polyvalence",
    color: "#dc2626",
    glow: "rgba(220, 38, 38, 0.35)",
  },
  {
    id: 2,
    slug: "k1-rules",
    title: "K1 Rules",
    shortTitle: "K1",
    description:
      "Un format spectaculaire et intense, centré sur l’efficacité, le timing, l’engagement et la lecture du combat debout.",
    miniInfo: "Timing • Intensité • Stratégie",
    color: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.35)",
  },
  {
    id: 3,
    slug: "full-contact",
    title: "Full Contact",
    shortTitle: "Full",
    description:
      "Une boxe pieds-poings historique qui développe la maîtrise technique, l’endurance et la qualité des enchaînements.",
    miniInfo: "Rigueur • Endurance • Technique",
    color: "#ffffff",
    glow: "rgba(255, 255, 255, 0.28)",
  },
  {
    id: 4,
    slug: "low-kick",
    title: "Low Kick",
    shortTitle: "Low",
    description:
      "Une discipline offensive qui intègre le travail des jambes pour densifier le combat et enrichir les options tactiques.",
    miniInfo: "Impact • Mobilité • Engagement",
    color: "#ef4444",
    glow: "rgba(239, 68, 68, 0.35)",
  },
  {
    id: 5,
    slug: "point-fighting",
    title: "Point Fighting",
    shortTitle: "Point",
    description:
      "Un format dynamique axé sur la vitesse d’exécution, la précision des touches et la lecture immédiate des ouvertures.",
    miniInfo: "Vitesse • Réflexes • Précision",
    color: "#fbbf24",
    glow: "rgba(251, 191, 36, 0.35)",
  },
];

// =====================================================
// OUTILS SVG
// =====================================================
function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number,
) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
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
  endAngle: number,
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
// VERSION PLUS COMPACTE
// =====================================================
export default function Disciplines() {
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
        midAngle,
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
          endAngle,
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
    py-14 md:py-16 lg:py-18
  "
    >
      {/* Overlay pour foncer le fond */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      {/* =================================================
          FILIGRANE PREMIUM EN ARRIÈRE-PLAN
          Version recommandée
         ================================================= */}
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

      {/* =================================================
          DÉCORS DE FOND PREMIUM
      ================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-10 h-40 w-40 rounded-full bg-red-500/7 blur-3xl" />
        <div className="absolute right-0 top-16 h-48 w-48 rounded-full bg-amber-400/8 blur-3xl" />
        <div className="absolute bottom-6 left-1/3 h-40 w-40 rounded-full bg-black/4 blur-3xl" />
      </div>

      {/* =================================================
          CONTENU PRINCIPAL
      ================================================= */}
      <div className="container-custom relative z-10">
        {/* =============================================
            EN-TÊTE DE SECTION
            Version plus compacte
        ============================================= */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-flex items-center gap-2 rounded-full
              border border-black/10 bg-white/80
              px-3.5 py-1.5 text-[0.68rem] font-bold uppercase
              tracking-[0.16em] text-red-600
              shadow-[0_8px_25px_rgba(0,0,0,0.05)]
              backdrop-blur-md
            "
          >
            <Sparkles size={13} />
            Nos disciplines
          </span>

          <h2
            className="
              mt-4 text-3xl font-black uppercase leading-[0.95]
              tracking-[0.05em] text-zinc-950
              sm:text-4xl md:text-5xl
            "
          >
            Explore le club
            <br className="hidden sm:block" /> autrement
          </h2>

          <p
            className="
              mx-auto mt-4 max-w-2xl
              text-sm leading-6 text-zinc-600
              sm:text-[0.98rem] md:text-base
            "
          >
            Survole une discipline pour révéler une fiche premium. Le donut
            reste au centre et s’adapte avec élégance pour laisser apparaître
            les informations.
          </p>
        </div>

        {/* =============================================
            SCÈNE INTERACTIVE
            Marge réduite pour compacter la section
        ============================================= */}
        <div className="relative mt-10" onMouseLeave={() => setActiveId(null)}>
          {/* --------------------------------------------
              ZONE DONUT CENTRÉE
          -------------------------------------------- */}
          <div className="flex justify-center">
            <div
              className={`
                donut-appear relative
                flex items-center justify-center
                rounded-full border border-black/8
                bg-white/70 p-3
                shadow-[0_16px_38px_rgba(0,0,0,0.07)]
                backdrop-blur-xl
                transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${activeDiscipline ? "lg:-translate-x-16 lg:scale-[0.9]" : "scale-100"}
              `}
            >
              {/* Halo externe premium */}
              <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/70 via-transparent to-black/5" />

              {/* Liseré lumineux externe */}
              <div className="donut-premium-ring pointer-events-none absolute inset-[10px] rounded-full" />

              {/* ----------------------------------------
                  Rotation lente au repos
                  Arrêt + remise à l’endroit au hover
              ---------------------------------------- */}
              <div
                className={`relative transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  activeDiscipline
                    ? "donut-reset-orientation"
                    : "donut-slow-spin"
                }`}
              >
                <svg
                  viewBox={`0 0 ${size} ${size}`}
                  className="h-[260px] w-[260px] md:h-[320px] md:w-[320px] lg:h-[360px] lg:w-[360px]"
                  role="img"
                  aria-label="Donut chart interactif des disciplines du club"
                >
                  {/* Cercle extérieur doux */}
                  <circle
                    cx={center}
                    cy={center}
                    r={outerRadius + 10}
                    fill="rgba(255,255,255,0.42)"
                  />

                  {/* Segments du donut */}
                  {sectors.map((sector) => {
                    const isActive = sector.id === activeId;

                    return (
                      <g
                        key={sector.id}
                        onMouseEnter={() => setActiveId(sector.id)}
                        onFocus={() => setActiveId(sector.id)}
                        onClick={() =>
                          setActiveId((prev) =>
                            prev === sector.id ? null : sector.id,
                          )
                        }
                        className="cursor-pointer transition-transform duration-500"
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
                        {/* Segment */}
                        <path
                          d={sector.path}
                          fill={sector.color}
                          fillOpacity={isActive ? 0.98 : 0.82}
                          stroke="rgba(255,255,255,0.82)"
                          strokeWidth={isActive ? 3 : 2}
                          className="transition-all duration-500"
                        />

                        {/* Liseré lumineux sur segment actif */}
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

                        {/* Texte du segment */}
                        <text
                          x={sector.labelX}
                          y={sector.labelY}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill={
                            sector.color === "#ffffff" ? "#111111" : "#ffffff"
                          }
                          fontSize={isActive ? 16 : 14}
                          fontWeight={900}
                          style={{
                            transition: "all 400ms ease",
                            letterSpacing: "0.035em",
                            textTransform: "uppercase",
                            pointerEvents: "none",
                          }}
                        >
                          {sector.shortTitle}
                        </text>
                      </g>
                    );
                  })}

                  {/* Centre premium */}
                  <circle
                    cx={center}
                    cy={center}
                    r={58}
                    fill="rgba(17,17,17,0.94)"
                    stroke="rgba(255,255,255,0.10)"
                    strokeWidth="2"
                  />

                  {/* Anneau lumineux subtil */}
                  <circle
                    cx={center}
                    cy={center}
                    r={66}
                    fill="none"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="2"
                  />

                  {/* Texte central */}
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

          {/* --------------------------------------------
              PANNEAU D'INFO DESKTOP
              Plus compact
          -------------------------------------------- */}
          <div className="pointer-events-none absolute right-0 top-1/2 hidden w-full max-w-[360px] -translate-y-1/2 lg:block">
            <div
              className={`
                transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  activeDiscipline
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }
              `}
            >
              {activeDiscipline && (
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
                  {/* Accent de fond dynamique */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-80 transition-all duration-500"
                    style={{
                      background: `radial-gradient(circle at top right, ${activeDiscipline.glow} 0%, transparent 45%)`,
                    }}
                  />

                  {/* Ligne décorative premium */}
                  <div
                    className="absolute left-0 top-0 h-full w-[4px] rounded-r-full"
                    style={{
                      background: `linear-gradient(to bottom, ${activeDiscipline.color}, rgba(255,255,255,0.2), ${activeDiscipline.color})`,
                      boxShadow: `0 0 18px ${activeDiscipline.glow}`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Mini badge */}
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

                    {/* Titre */}
                    <h3 className="mt-4 text-2xl font-black uppercase tracking-[0.03em] text-zinc-950">
                      {activeDiscipline.title}
                    </h3>

                    {/* Mini info */}
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

                    {/* Description */}
                    <p className="mt-4 text-sm leading-6 text-zinc-600">
                      {activeDiscipline.description}
                    </p>

                    {/* Ligne d’action */}
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

        {/* =============================================
            VERSION MOBILE / TABLETTE
            Plus compacte
        ============================================= */}
        <div className="mt-6 flex flex-wrap justify-center gap-2.5 lg:hidden">
          {disciplines.map((discipline) => {
            const isActive = discipline.id === activeId;

            return (
              <button
                key={discipline.id}
                type="button"
                onClick={() =>
                  setActiveId((prev) =>
                    prev === discipline.id ? null : discipline.id,
                  )
                }
                className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-black text-white shadow-md"
                    : "border border-black/8 bg-white text-zinc-700"
                }`}
              >
                {discipline.title}
              </button>
            );
          })}
        </div>

        {/* =============================================
            PANNEAU MOBILE / TABLETTE
            Affiché uniquement si une discipline est active
        ============================================= */}
        {activeDiscipline && (
          <div className="mt-8 lg:hidden">
            <aside
              key={activeDiscipline.id}
              className="
                hero-text-enter
                relative overflow-hidden
                rounded-[32px] border border-black/8
                bg-white/86 p-8
                shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                backdrop-blur-xl
              "
            >
              {/* Accent de fond dynamique */}
              <div
                className="pointer-events-none absolute inset-0 opacity-80 transition-all duration-500"
                style={{
                  background: `radial-gradient(circle at top right, ${activeDiscipline.glow} 0%, transparent 45%)`,
                }}
              />

              {/* Ligne décorative premium */}
              <div
                className="absolute left-0 top-0 h-full w-[4px] rounded-r-full"
                style={{
                  background: `linear-gradient(to bottom, ${activeDiscipline.color}, rgba(255,255,255,0.2), ${activeDiscipline.color})`,
                  boxShadow: `0 0 18px ${activeDiscipline.glow}`,
                }}
              />

              <div className="relative z-10">
                {/* Mini badge */}
                <span
                  className="inline-flex rounded-full px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.16em]"
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

                {/* Titre */}
                <h3 className="mt-5 text-3xl font-black uppercase tracking-[0.04em] text-zinc-950 md:text-4xl">
                  {activeDiscipline.title}
                </h3>

                {/* Mini info */}
                <p
                  className="mt-3 text-sm font-semibold uppercase tracking-[0.14em]"
                  style={{
                    color:
                      activeDiscipline.color === "#ffffff"
                        ? "#444444"
                        : activeDiscipline.color,
                  }}
                >
                  {activeDiscipline.miniInfo}
                </p>

                {/* Description */}
                <p className="mt-5 text-sm leading-7 text-zinc-600 md:text-base">
                  {activeDiscipline.description}
                </p>

                {/* CTA */}
                <div className="mt-8">
                  <Link
                    href={`/disciplines#${activeDiscipline.slug}`}
                    className="
                      inline-flex items-center gap-2 rounded-full
                      bg-black px-5 py-3 text-sm font-semibold text-white
                      transition-all duration-300
                      hover:bg-red-600
                    "
                  >
                    Découvrir
                    <ArrowRight size={16} />
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
