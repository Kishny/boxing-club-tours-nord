// =====================================================
// IMPORTS
// =====================================================
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  ArrowRight,
  Flame,
  Shield,
  Trophy,
  Sparkles,
  Zap,
  Target,
  ChevronRight,
} from "lucide-react";

// =====================================================
// MÉTADONNÉES SEO DE LA PAGE
// IMPORTANT : metadata doit rester dans un Server Component
// Donc cette page ne doit PAS contenir "use client"
// =====================================================
export const metadata: Metadata = {
  title: "Disciplines de boxe à Tours",
  description:
    "Découvrez les disciplines du Boxing Club Tours Nord : Kickboxing, K1 Rules, Full Contact, Low Kick et Point Fighting à Tours.",
  alternates: {
    canonical: "https://boxingclub-tours.fr/disciplines",
  },
};

// =====================================================
// TYPE DES DISCIPLINES
// =====================================================
type Discipline = {
  slug: string;
  title: string;
  category: string;
  description: string;
  details: string;
  profile: string;
  icon: "flame" | "shield" | "trophy";
  accent: string;
  glow: string;
  panel: string;
  keywords: string[];
};

// =====================================================
// DONNÉES DES DISCIPLINES
// =====================================================
const disciplines: Discipline[] = [
  {
    slug: "kickboxing",
    title: "Kickboxing",
    category: "Puissance • Vitesse • Polyvalence",
    description:
      "Discipline complète mêlant puissance, vitesse, précision et travail de la distance.",
    details:
      "Le kickboxing permet de développer une vraie base en boxe pieds-poings, avec un travail global sur les déplacements, le cardio, les enchaînements et la lecture du combat. C’est une discipline complète, idéale pour progresser techniquement tout en renforçant sa condition physique.",
    profile:
      "Convient aux débutants motivés comme aux pratiquants plus avancés souhaitant évoluer dans une discipline structurée et intense.",
    icon: "flame",
    accent: "#ef4444",
    glow: "rgba(239,68,68,0.22)",
    panel: "from-red-500/18 via-red-500/6 to-transparent",
    keywords: ["Explosivité", "Cardio", "Technique"],
  },
  {
    slug: "k1-rules",
    title: "K1 Rules",
    category: "Timing • Intensité • Stratégie",
    description:
      "Format intense et spectaculaire, orienté efficacité, timing et engagement.",
    details:
      "Le K1 Rules se distingue par son rythme élevé, son efficacité en combat debout et sa lecture tactique des échanges. C’est une discipline très dynamique, appréciée pour son intensité et son exigence technique.",
    profile:
      "Particulièrement adapté aux pratiquants souhaitant développer un style plus explosif, plus direct et plus compétitif.",
    icon: "trophy",
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.24)",
    panel: "from-amber-300/18 via-amber-300/6 to-transparent",
    keywords: ["Engagement", "Rythme", "Impact"],
  },
  {
    slug: "full-contact",
    title: "Full Contact",
    category: "Rigueur • Endurance • Technique",
    description:
      "Travail technique, rigueur, endurance et maîtrise des enchaînements.",
    details:
      "Le full contact est une discipline historique de la boxe pieds-poings. Il met l’accent sur la technique, le contrôle des trajectoires, la qualité des enchaînements et la propreté du travail debout.",
    profile:
      "Idéal pour celles et ceux qui recherchent une progression encadrée, propre et exigeante, avec un vrai socle technique.",
    icon: "shield",
    accent: "#ffffff",
    glow: "rgba(255,255,255,0.18)",
    panel: "from-white/12 via-white/4 to-transparent",
    keywords: ["Maîtrise", "Structure", "Précision"],
  },
  {
    slug: "low-kick",
    title: "Low Kick",
    category: "Impact • Mobilité • Engagement",
    description:
      "Approche offensive intégrant le travail des jambes pour enrichir le combat debout.",
    details:
      "Le low kick permet d’introduire les frappes sur les jambes dans la stratégie de combat. Cette dimension supplémentaire rend les échanges plus complets, plus tactiques et plus engageants physiquement.",
    profile:
      "Pour les pratiquants qui veulent densifier leur boxe, travailler le rythme du combat et élargir leurs options offensives.",
    icon: "flame",
    accent: "#f97316",
    glow: "rgba(249,115,22,0.22)",
    panel: "from-orange-400/18 via-orange-400/6 to-transparent",
    keywords: ["Densité", "Tactique", "Pression"],
  },
  {
    slug: "point-fighting",
    title: "Point Fighting",
    category: "Vitesse • Réflexes • Précision",
    description:
      "Format dynamique basé sur la vitesse, la précision et les réflexes.",
    details:
      "Le point fighting met l’accent sur la rapidité d’exécution, la précision des touches et la lecture instantanée des ouvertures. C’est une discipline vive, technique et très formatrice.",
    profile:
      "Très intéressant pour développer les réflexes, la mobilité, la coordination et une excellente qualité de réaction.",
    icon: "trophy",
    accent: "#facc15",
    glow: "rgba(250,204,21,0.22)",
    panel: "from-yellow-300/18 via-yellow-300/6 to-transparent",
    keywords: ["Réactivité", "Lecture", "Coordination"],
  },
];

// =====================================================
// FONCTION UTILITAIRE POUR AFFICHER L’ICÔNE
// =====================================================
function renderIcon(icon: Discipline["icon"]) {
  switch (icon) {
    case "flame":
      return <Flame size={18} />;
    case "shield":
      return <Shield size={18} />;
    case "trophy":
      return <Trophy size={18} />;
    default:
      return <Flame size={18} />;
  }
}

// =====================================================
// PAGE DÉDIÉE DISCIPLINES
// VERSION PREMIUM IMMERSIVE
// =====================================================
export default function DisciplinesPage() {
  return (
    <>
      {/* =================================================
          HEADER
      ================================================= */}
      <Navbar />

      {/* =================================================
          CONTENU PRINCIPAL
      ================================================= */}
      <main className="bg-[#070707] text-white">
        {/* =============================================
            HERO IMMERSIF
        ============================================= */}
        <section className="relative overflow-hidden border-b border-white/10 pt-[150px] pb-16 md:pt-[185px] md:pb-20 lg:pb-24">
          {/* ---------------------------------------------
              DÉCORS DE FOND HERO
          --------------------------------------------- */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-red-600/18 blur-3xl" />
            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-amber-400/14 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-white/6 blur-3xl" />

            <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#0a0a0a] to-[#050505]" />

            <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.30)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.30)_1px,transparent_1px)] [background-size:34px_34px]" />

            <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(135deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:30px_30px]" />

            <div className="absolute inset-0 hidden items-center justify-center md:flex">
              <div className="relative h-[420px] w-[420px]">
                <div className="absolute inset-0 rounded-full border border-white/8" />
                <div className="absolute inset-[34px] rounded-full border border-red-500/10" />
                <div className="absolute inset-[68px] rounded-full border border-amber-300/12" />
                <div className="absolute inset-[114px] rounded-full border border-white/8 bg-white/[0.02]" />
              </div>
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_40%)]" />
          </div>

          {/* ---------------------------------------------
              CONTENU HERO
          --------------------------------------------- */}
          <div className="container-custom relative z-10">
            <div className="mx-auto max-w-5xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-amber-300 shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-md">
                <Sparkles size={14} />
                Univers des disciplines
              </span>

              <h1 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-[0.04em] text-white sm:text-5xl md:text-6xl xl:text-7xl">
                Les disciplines
                <br className="hidden sm:block" />
                <span className="block bg-gradient-to-r from-red-500 via-white to-amber-300 bg-clip-text text-transparent">
                  qui façonnent le club
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base md:text-lg">
                Chaque discipline possède sa logique, son intensité, sa lecture
                du combat et son identité propre. Explorez l’univers du club à
                travers une page pensée comme une vraie traversée de l’arena.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/80">
                  Intensité
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/80">
                  Technique
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/80">
                  Progression
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/80">
                  Esprit combat
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =============================================
            NAVIGATION STICKY PREMIUM
        ============================================= */}
        <section className="sticky top-[88px] z-30 border-y border-white/10 bg-black/60 py-4 backdrop-blur-xl md:top-[100px] xl:top-[120px]">
          <div className="container-custom flex flex-wrap justify-center gap-3">
            {disciplines.map((discipline) => (
              <Link
                key={discipline.slug}
                href={`/disciplines#${discipline.slug}`}
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white/75 transition-all duration-300 hover:-translate-y-[1px] hover:border-white/20 hover:bg-white/[0.10] hover:text-white"
              >
                <span
                  className="h-2 w-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: discipline.accent,
                    boxShadow: `0 0 12px ${discipline.glow}`,
                  }}
                />
                {discipline.title}
              </Link>
            ))}
          </div>
        </section>

        {/* =============================================
            LISTE IMMERSIVE DES DISCIPLINES
        ============================================= */}
        <section className="relative overflow-hidden py-14 md:py-16 lg:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-4rem] top-16 h-56 w-56 rounded-full bg-red-600/10 blur-3xl" />
            <div className="absolute right-[-4rem] bottom-10 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />
          </div>

          <div className="container-custom relative z-10 flex flex-col gap-10 md:gap-12">
            {disciplines.map((discipline, index) => {
              const isEven = index % 2 === 0;

              return (
                <article
                  key={discipline.slug}
                  id={discipline.slug}
                  className="scroll-mt-[170px]"
                >
                  <div
                    className={`grid gap-6 xl:grid-cols-[1.05fr_0.95fr] xl:items-stretch ${
                      isEven ? "" : "xl:grid-cols-[0.95fr_1.05fr]"
                    }`}
                  >
                    {/* =====================================
                        PANNEAU PRINCIPAL TEXTE
                    ===================================== */}
                    <div
                      className={`relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.05] p-7 shadow-[0_18px_44px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-8 lg:p-10 ${
                        isEven ? "xl:order-1" : "xl:order-2"
                      }`}
                    >
                      <div
                        className="absolute inset-x-0 top-0 h-[2px] opacity-90"
                        style={{
                          background: `linear-gradient(to right, ${discipline.accent}, rgba(255,255,255,0.65), transparent)`,
                        }}
                      />

                      <div
                        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${discipline.panel} opacity-90`}
                      />

                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_28%)]" />

                      <div className="relative z-10">
                        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                          <div className="max-w-3xl">
                            <span
                              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/85"
                              style={{
                                boxShadow: `0 0 24px ${discipline.glow}`,
                              }}
                            >
                              {renderIcon(discipline.icon)}
                              {discipline.category}
                            </span>

                            <h2 className="mt-5 text-3xl font-black uppercase tracking-[0.04em] text-white md:text-4xl xl:text-5xl">
                              {discipline.title}
                            </h2>

                            <p className="mt-4 text-base font-semibold text-white/88 md:text-lg">
                              {discipline.description}
                            </p>
                          </div>

                          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-sm font-bold text-white shadow-[0_0_24px_rgba(255,255,255,0.08)]">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                        </div>

                        <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_0.84fr]">
                          <div>
                            <p className="text-sm leading-8 text-white/68 md:text-base">
                              {discipline.details}
                            </p>
                          </div>

                          <div className="rounded-[26px] border border-white/10 bg-black/25 p-5 backdrop-blur-md">
                            <p
                              className="text-xs font-bold uppercase tracking-[0.16em]"
                              style={{ color: discipline.accent }}
                            >
                              Profil recommandé
                            </p>
                            <p className="mt-3 text-sm leading-7 text-white/70 md:text-base">
                              {discipline.profile}
                            </p>
                          </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                          {discipline.keywords.map((keyword) => (
                            <span
                              key={keyword}
                              className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/80"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                          <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.12]"
                          >
                            Demander des infos
                          </Link>

                          <Link
                            href="/inscription"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-[1px] hover:bg-red-600 hover:text-white"
                          >
                            S’inscrire à cette dynamique
                            <ArrowRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* =====================================
                        PANNEAU VISUEL / IMPACT
                    ===================================== */}
                    <div
                      className={`relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-b from-[#111111] to-[#090909] p-7 shadow-[0_18px_44px_rgba(0,0,0,0.24)] ${
                        isEven ? "xl:order-2" : "xl:order-1"
                      }`}
                    >
                      <div
                        className="absolute inset-0 opacity-90"
                        style={{
                          background: `radial-gradient(circle at top right, ${discipline.glow} 0%, transparent 38%)`,
                        }}
                      />

                      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(135deg,rgba(255,255,255,0.45)_1px,transparent_1px)] [background-size:26px_26px]" />

                      <div className="relative z-10 flex h-full flex-col">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-white/80">
                            <Zap size={14} />
                            Impact club
                          </span>

                          <div
                            className="h-3 w-3 rounded-full"
                            style={{
                              backgroundColor: discipline.accent,
                              boxShadow: `0 0 18px ${discipline.glow}`,
                            }}
                          />
                        </div>

                        <div className="mt-8 flex flex-1 items-center justify-center">
                          <div className="relative flex h-[260px] w-[260px] items-center justify-center md:h-[300px] md:w-[300px]">
                            <div className="absolute inset-0 rounded-full border border-white/10" />
                            <div className="absolute inset-[26px] rounded-full border border-white/8" />
                            <div
                              className="absolute inset-[54px] rounded-full border"
                              style={{
                                borderColor: discipline.accent,
                                boxShadow: `0 0 30px ${discipline.glow}`,
                              }}
                            />
                            <div className="absolute inset-[92px] rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm" />

                            <div
                              className="relative z-10 inline-flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-white shadow-[0_0_30px_rgba(255,255,255,0.06)]"
                              style={{
                                boxShadow: `0 0 38px ${discipline.glow}`,
                              }}
                            >
                              {renderIcon(discipline.icon)}
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                          <div className="flex items-start gap-3">
                            <div
                              className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]"
                              style={{ color: discipline.accent }}
                            >
                              <Target size={18} />
                            </div>

                            <div>
                              <p className="text-sm font-semibold text-white">
                                Esprit de la discipline
                              </p>
                              <p className="mt-2 text-sm leading-7 text-white/62">
                                Une approche structurée, une intensité propre et
                                une identité forte au service de la progression.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-5">
                          <Link
                            href={`/inscription?discipline=${discipline.slug}`}
                            className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:translate-x-1"
                            style={{ color: discipline.accent }}
                          >
                            Rejoindre cette discipline
                            <ChevronRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      {/* =================================================
          FOOTER
      ================================================= */}
      <Footer />
    </>
  );
}