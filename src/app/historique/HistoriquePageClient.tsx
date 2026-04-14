"use client";

// =====================================================
// IMPORTS
// =====================================================
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Trophy,
  ArrowRight,
  Clock3,
  ChevronDown,
} from "lucide-react";

// =====================================================
// TYPES
// =====================================================
type HistoryIcon = "shield" | "trophy" | "clock";

type HistoryStep = {
  year: string;
  title: string;
  description: string;
  badge: string;
  accent: string;
  glow: string;
  icon: HistoryIcon;
};

type Leader = {
  name: string;
  role: string;
  image: string;
  description: string;
};

// =====================================================
// DONNÉES DE L’HISTORIQUE
// =====================================================
const historySteps: HistoryStep[] = [
  {
    year: "Création",
    title: "Naissance du club",
    description:
      "Le club se construit autour d’une ambition claire : proposer un encadrement sérieux, structuré et accessible, porté par la passion des sports de combat.",
    badge: "Fondations",
    accent: "#ef4444",
    glow: "rgba(239,68,68,0.20)",
    icon: "shield",
  },
  {
    year: "Développement",
    title: "Montée en puissance",
    description:
      "Les disciplines se développent, l’équipe s’étoffe et le club affirme progressivement son identité, son exigence et sa dynamique sportive.",
    badge: "Expansion",
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.20)",
    icon: "trophy",
  },
  {
    year: "Aujourd’hui",
    title: "Un club en mouvement",
    description:
      "Le Boxing Club poursuit son évolution avec la volonté d’accompagner durablement les pratiquants, de valoriser ses athlètes et de renforcer son rayonnement.",
    badge: "Vision",
    accent: "#ffffff",
    glow: "rgba(255,255,255,0.14)",
    icon: "clock",
  },
];

// =====================================================
// DONNÉES DES DIRIGEANTS
// =====================================================
const leaders: Leader[] = [
  {
    name: "Jean Dupont",
    role: "Président du Boxing Club Tours Nord",
    image: "/images/leaders/president.jpg",
    description:
      "Fondateur et pilier du club, Jean Dupont a contribué à bâtir une structure solide fondée sur la discipline, le respect et l’excellence sportive. Sa vision a permis au club de devenir une référence à Tours.",
  },
  {
    name: "Karim Benali",
    role: "Entraîneur Principal",
    image: "/images/leaders/coach.jpg",
    description:
      "Ancien compétiteur de haut niveau, Karim transmet son expérience et sa passion aux athlètes. Il joue un rôle central dans la progression technique et mentale des pratiquants.",
  },
  {
    name: "Sophie Martin",
    role: "Responsable Administrative",
    image: "/images/leaders/founder.jpg",
    description:
      "Actrice essentielle du développement du club, Sophie assure son organisation et contribue activement à son rayonnement au sein de la métropole tourangelle.",
  },
];

// =====================================================
// CONFIG ANIMATIONS
// =====================================================
const premiumEase = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: premiumEase,
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const timelineLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -80,
    y: 30,
    rotate: -2,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: premiumEase,
    },
  },
};

const timelineRight: Variants = {
  hidden: {
    opacity: 0,
    x: 80,
    y: 30,
    rotate: 2,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: premiumEase,
    },
  },
};

const timelineMobile: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.98,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: premiumEase,
    },
  },
};

// =====================================================
// ICÔNES PAR ÉTAPE
// =====================================================
function renderHistoryIcon(icon: HistoryIcon) {
  switch (icon) {
    case "shield":
      return <ShieldCheck size={16} />;
    case "trophy":
      return <Trophy size={16} />;
    case "clock":
      return <Clock3 size={16} />;
    default:
      return <Sparkles size={16} />;
  }
}

// =====================================================
// PAGE HISTORIQUE PREMIUM ANIMÉE
// =====================================================
export default function HistoriquePageClient() {
  const [openMobileSteps, setOpenMobileSteps] = useState<Record<number, boolean>>({
    0: true,
    1: false,
    2: false,
  });

  const toggleMobileStep = (index: number) => {
    setOpenMobileSteps((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      {/* =================================
          NAVBAR
      ================================= */}
      <Navbar />

      {/* =================================
          CONTENU PRINCIPAL
      ================================= */}
      <main className="bg-[#070707] text-white">
        {/* ---------------------------------
            HERO PREMIUM
        --------------------------------- */}
        <section className="relative overflow-hidden border-b border-white/10 pt-[150px] pb-16 md:pt-[185px] md:pb-20 lg:pb-24">
          <div className="pointer-events-none absolute inset-0">
            <motion.div
              className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-red-600/15 blur-3xl"
              animate={{ scale: [1, 1.08, 1], opacity: [0.65, 0.85, 0.65] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute right-0 top-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl"
              animate={{ scale: [1, 1.06, 1], opacity: [0.55, 0.8, 0.55] }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            />
            <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute inset-0 bg-linear-to-b from-[#111111] via-[#0a0a0a] to-[#050505]" />
            <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.28)_1px,transparent_1px)] [background-size:34px_34px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_42%)]" />
          </div>

          <motion.div
            className="container-custom relative z-10 text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-amber-300 shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-md"
            >
              <Sparkles size={14} />
              Historique du club
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-[0.04em] text-white sm:text-5xl md:text-6xl xl:text-7xl"
            >
              L’histoire
              <br className="hidden sm:block" />
              <span className="block bg-linear-to-r from-red-500 via-white to-amber-300 bg-clip-text text-transparent">
                qui façonne le club
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base md:text-lg"
            >
              Découvrez les grandes étapes qui ont forgé l’identité du Boxing
              Club Tours Nord : ses débuts, sa montée en puissance et la vision
              qui continue de porter sa dynamique aujourd’hui.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              {["Transmission", "Discipline", "Évolution", "Rayonnement"].map(
                (tag) => (
                  <motion.span
                    key={tag}
                    variants={fadeUp}
                    whileHover={{ y: -2, scale: 1.02 }}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80"
                  >
                    {tag}
                  </motion.span>
                )
              )}
            </motion.div>
          </motion.div>
        </section>

        {/* ---------------------------------
            TIMELINE PREMIUM
        --------------------------------- */}
        <section className="relative overflow-hidden py-16 md:py-20 lg:py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-4rem] top-12 h-56 w-56 rounded-full bg-red-600/10 blur-3xl" />
            <div className="absolute right-[-4rem] bottom-10 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />
          </div>

          <div className="container-custom relative z-10 mx-auto max-w-6xl">
            {/* =========================================
                VERSION DESKTOP / TABLETTE LARGE
            ========================================= */}
            <div className="relative hidden md:block">
              <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-linear-to-b from-red-500 via-amber-400 to-transparent" />

              <motion.div
                className="absolute left-1/2 top-0 h-full w-[14px] -translate-x-1/2 bg-linear-to-b from-red-500/15 via-amber-300/20 to-transparent blur-md"
                animate={{
                  opacity: [0.35, 0.9, 0.35],
                  scaleY: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="flex flex-col gap-12"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.08 }}
              >
                {historySteps.map((step, index) => {
                  const isEven = index % 2 === 0;

                  return (
                    <motion.article
                      key={step.title}
                      variants={isEven ? timelineLeft : timelineRight}
                      className={`relative w-[calc(50%-2rem)] ${
                        isEven ? "mr-auto" : "ml-auto"
                      }`}
                    >
                      {/* Point timeline */}
                      <motion.span
                        className={`absolute top-10 h-4 w-4 rounded-full shadow-[0_0_0_8px_rgba(255,255,255,0.03)] ${
                          isEven ? "right-[-42px]" : "left-[-42px]"
                        }`}
                        style={{
                          backgroundColor: step.accent,
                          boxShadow: `0 0 0 8px rgba(255,255,255,0.03), 0 0 18px ${step.glow}`,
                        }}
                        animate={{
                          scale: [1, 1.18, 1],
                          opacity: [0.9, 1, 0.9],
                        }}
                        transition={{
                          duration: 2.1,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Card */}
                      <motion.div
                        whileHover={{ y: -8, scale: 1.01, rotateX: 1.2 }}
                        transition={{ duration: 0.28 }}
                        className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-7 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl hover:border-white/15 md:p-8"
                      >
                        <div
                          className="absolute inset-x-0 top-0 h-[2px]"
                          style={{
                            background: `linear-gradient(to right, ${step.accent}, rgba(255,255,255,0.45), transparent)`,
                          }}
                        />

                        <div
                          className="pointer-events-none absolute inset-0 opacity-80"
                          style={{
                            background: `radial-gradient(circle at top right, ${step.glow} 0%, transparent 35%)`,
                          }}
                        />

                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_28%)]" />

                        <motion.div
                          className="pointer-events-none absolute -inset-y-full left-[-30%] w-[40%] rotate-[18deg] bg-linear-to-r from-transparent via-white/10 to-transparent"
                          animate={{ x: ["-140%", "340%"] }}
                          transition={{
                            duration: 2.8,
                            repeat: Infinity,
                            repeatDelay: 2.2,
                            ease: "easeInOut",
                          }}
                        />

                        <div className="relative z-10">
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <span
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/85"
                                style={{
                                  boxShadow: `0 0 22px ${step.glow}`,
                                }}
                              >
                                {renderHistoryIcon(step.icon)}
                                {step.year}
                              </span>

                              <h2 className="mt-5 text-2xl font-black uppercase tracking-[0.03em] text-white md:text-3xl">
                                {step.title}
                              </h2>
                            </div>

                            <span
                              className="inline-flex w-fit rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.16em]"
                              style={{ color: step.accent }}
                            >
                              {step.badge}
                            </span>
                          </div>

                          <p className="mt-5 text-sm leading-8 text-white/68 md:text-base">
                            {step.description}
                          </p>

                          <div className="mt-6 rounded-[22px] border border-white/10 bg-black/20 p-5">
                            <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/55">
                              Ce que cette étape raconte
                            </p>
                            <p className="mt-3 text-sm leading-7 text-white/62">
                              Une construction progressive, portée par une
                              vision claire, une culture d’exigence et la
                              volonté de faire grandir durablement le club.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </motion.article>
                  );
                })}
              </motion.div>
            </div>

            {/* =========================================
                VERSION MOBILE DÉPLIANTE
            ========================================= */}
            <motion.div
              className="space-y-4 md:hidden"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
            >
              {historySteps.map((step, index) => {
                const isOpen = !!openMobileSteps[index];

                return (
                  <motion.article
                    key={step.title}
                    variants={timelineMobile}
                    className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/5 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl"
                  >
                    <div
                      className="absolute inset-x-0 top-0 h-[2px]"
                      style={{
                        background: `linear-gradient(to right, ${step.accent}, rgba(255,255,255,0.45), transparent)`,
                      }}
                    />

                    <div
                      className="pointer-events-none absolute inset-0 opacity-80"
                      style={{
                        background: `radial-gradient(circle at top right, ${step.glow} 0%, transparent 35%)`,
                      }}
                    />

                    <button
                      type="button"
                      onClick={() => toggleMobileStep(index)}
                      className="relative z-10 flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <div className="min-w-0">
                        <span
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white/85"
                          style={{ boxShadow: `0 0 18px ${step.glow}` }}
                        >
                          {renderHistoryIcon(step.icon)}
                          {step.year}
                        </span>

                        <h2 className="mt-4 text-xl font-black uppercase tracking-[0.03em] text-white">
                          {step.title}
                        </h2>

                        <p
                          className="mt-2 text-[0.7rem] font-bold uppercase tracking-[0.16em]"
                          style={{ color: step.accent }}
                        >
                          {step.badge}
                        </p>
                      </div>

                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="shrink-0 text-white/75"
                      >
                        <ChevronDown size={18} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: premiumEase,
                          }}
                          className="overflow-hidden"
                        >
                          <div className="relative z-10 px-5 pb-5">
                            <p className="text-sm leading-7 text-white/68">
                              {step.description}
                            </p>

                            <div className="mt-5 rounded-[20px] border border-white/10 bg-black/20 p-4">
                              <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-white/55">
                                Ce que cette étape raconte
                              </p>
                              <p className="mt-3 text-sm leading-7 text-white/62">
                                Une construction progressive, portée par une
                                vision claire, une culture d’exigence et la
                                volonté de faire grandir durablement le club.
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                );
              })}
            </motion.div>

            {/* ---------------------------------
                DIRIGEANTS DU CLUB
            --------------------------------- */}
            <section className="relative overflow-hidden border-t border-white/10 py-16 md:py-20 lg:py-24">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-4rem] top-10 h-56 w-56 rounded-full bg-red-600/10 blur-3xl" />
                <div className="absolute right-[-4rem] bottom-10 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />
              </div>

              <motion.div
                className="container-custom relative z-10"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.08 }}
              >
                <motion.div
                  variants={fadeUp}
                  className="mx-auto max-w-3xl text-center"
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-amber-300 backdrop-blur-md">
                    Direction & Encadrement
                  </span>

                  <h2 className="mt-5 text-3xl font-black uppercase tracking-[0.04em] text-white md:text-4xl lg:text-5xl">
                    Les dirigeants du club
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-white/70 md:text-base">
                    Des femmes et des hommes passionnés, engagés dans la
                    transmission des valeurs sportives et humaines qui façonnent
                    l’identité du Boxing Club Tours Nord.
                  </p>
                </motion.div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                  {leaders.map((leader) => (
                    <motion.div
                      key={leader.name}
                      variants={fadeUp}
                      whileHover={{ y: -8, scale: 1.01 }}
                      transition={{ duration: 0.3 }}
                      className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl hover:border-white/20"
                    >
                      <div className="relative h-80 w-full overflow-hidden">
                        <motion.div
                          whileHover={{ scale: 1.06 }}
                          transition={{
                            duration: 0.7,
                            ease: premiumEase,
                          }}
                          className="h-full w-full"
                        >
                          <Image
                            src={leader.image}
                            alt={leader.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            className="object-cover"
                          />
                        </motion.div>

                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
                      </div>

                      <div className="relative p-6">
                        <h3 className="text-xl font-bold text-white">
                          {leader.name}
                        </h3>

                        <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-red-400">
                          {leader.role}
                        </p>

                        <p className="mt-4 text-sm leading-7 text-white/70">
                          {leader.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* ---------------------------------
                CTA FINAL
            --------------------------------- */}
            <motion.div
              className="mt-14 flex justify-center md:mt-16"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: premiumEase }}
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.20)] backdrop-blur-xl md:p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-amber-300/10" />

                <div className="relative z-10 text-center">
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-amber-300">
                    Continuer l’histoire
                  </p>

                  <h3 className="mt-3 text-2xl font-black uppercase text-white md:text-3xl">
                    Envie de rejoindre la dynamique du club ?
                  </h3>

                  <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/68 md:text-base">
                    Prenez contact avec le Boxing Club Tours Nord pour découvrir
                    l’ambiance, l’encadrement et les disciplines proposées.
                  </p>

                  <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(220,38,38,0.24)] transition-all duration-300 hover:bg-red-700"
                      >
                        Contacter le club
                        <ArrowRight size={16} />
                      </Link>
                    </motion.div>

                    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href="/inscription"
                        className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                      >
                        S’inscrire
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* =================================
          FOOTER
      ================================= */}
      <Footer />
    </>
  );
}