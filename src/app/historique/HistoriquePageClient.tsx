"use client";

// =====================================================
// IMPORTS
// =====================================================
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Trophy,
  ArrowRight,
  Clock3,
  ChevronDown,
  Users,
  Flame,
  Medal,
  MapPin,
  CalendarDays,
  Building2,
  HeartHandshake,
} from "lucide-react";

// =====================================================
// TYPES
// =====================================================
type HistoryIcon = "shield" | "trophy" | "clock" | "users" | "flame" | "medal";
type FactIcon = "calendar" | "pin" | "building" | "users";

type HistoryStep = {
  year: string;
  title: string;
  description: string;
  badge: string;
  icon: HistoryIcon;
};

type ClubFact = {
  label: string;
  value: string;
  icon: FactIcon;
};

type Leader = {
  name: string;
  initials: string;
  role: string;
  description: string;
};

type Club = {
  id: string;
  short: string;
  name: string;
  tagline: string;
  founded: string;
  accent: string;
  glow: string;
  intro: string[];
  facts: ClubFact[];
  steps: HistoryStep[];
  values: string[];
  highlight: { label: string; text: string };
  leaders: Leader[];
};

// =====================================================
// DONNÉES DES CLUBS
// Source : documents « Historique du BCTN » et « Historique BCLR »
// =====================================================
const clubs: Club[] = [
  {
    id: "bclr",
    short: "BCLR",
    name: "Boxing Club de La Riche",
    tagline: "Plus de trente ans de compétition et de transmission",
    founded: "Depuis 1991",
    accent: "#ef4444",
    glow: "rgba(239,68,68,0.20)",
    intro: [
      "Créé le 1er octobre 1991, le Boxing Club de La Riche est une association régie par la loi 1901, déclarée en préfecture sous le numéro 0372009922. Depuis l’inauguration de la salle Jean-Marie Bialy en janvier 1992, les entraînements sont assurés sous la responsabilité d’André Macé, fondateur du club.",
      "Depuis plus de trente ans, le club s’impose comme une structure reconnue dans le paysage sportif régional, national et international. Grâce à la qualité de son encadrement et à l’engagement de ses athlètes, il a formé de nombreux champions titrés aux niveaux national, européen et mondial.",
    ],
    facts: [
      { label: "Création", value: "1er octobre 1991", icon: "calendar" },
      { label: "Siège social", value: "Saint-Cyr-sur-Loire (37540)", icon: "pin" },
      { label: "Statut", value: "Association loi 1901 · n° 0372009922", icon: "building" },
      { label: "Présidence", value: "Carole Macé", icon: "users" },
    ],
    steps: [
      {
        year: "1991",
        title: "La naissance du club",
        badge: "Fondation",
        icon: "shield",
        description:
          "Le 1er octobre 1991, le Boxing Club de La Riche est déclaré en préfecture sous le régime de la loi 1901. André Macé en pose les bases : un encadrement rigoureux et une exigence technique au service des pratiquants.",
      },
      {
        year: "1992",
        title: "La salle Jean-Marie Bialy",
        badge: "Structuration",
        icon: "users",
        description:
          "L’inauguration de la salle Jean-Marie Bialy en janvier 1992 donne au club son véritable point d’ancrage. Les entraînements s’y organisent sous la responsabilité pédagogique du fondateur.",
      },
      {
        year: "30 ans +",
        title: "Une école de champions",
        badge: "Rayonnement",
        icon: "trophy",
        description:
          "Galas, compétitions, championnats de France, d’Europe et du Monde, stages sportifs : le club forme des athlètes titrés aux plus hauts niveaux et installe durablement sa réputation bien au-delà de la région.",
      },
      {
        year: "Aujourd’hui",
        title: "Une structure reconnue",
        badge: "Vision",
        icon: "clock",
        description:
          "Le club bénéficie d’une solide reconnaissance auprès de la Ville de La Riche, de Tours Métropole, du Conseil départemental et du Conseil régional, ainsi que de nombreux partenaires économiques locaux.",
      },
    ],
    values: [
      "Respect",
      "Discipline",
      "Solidarité",
      "Courage",
      "Dépassement de soi",
      "Citoyenneté",
      "Vivre-ensemble",
    ],
    highlight: {
      label: "L’esprit du club",
      text: "La pratique des sports de combat est utilisée comme un véritable outil d’éducation, d’intégration sociale et de développement personnel. Le club œuvre également en faveur de la mixité sociale, de l’égalité femmes-hommes, de la santé et de la lutte contre la sédentarité.",
    },
    leaders: [
      {
        name: "André Macé",
        initials: "AM",
        role: "Fondateur & responsable pédagogique",
        description:
          "Fondateur du club et ancien président, il assure depuis l’origine la responsabilité pédagogique des entraînements et la transmission de l’exigence technique qui fait la réputation du BCLR.",
      },
      {
        name: "Carole Macé",
        initials: "CM",
        role: "Présidente de l’association",
        description:
          "Elle assure aujourd’hui la présidence du Boxing Club de La Riche et porte son développement auprès des collectivités territoriales et des partenaires économiques locaux.",
      },
    ],
  },
  {
    id: "bctn",
    short: "BCTN",
    name: "Boxing Club de Tours Nord",
    tagline: "Le sport pour tous au nord de l’agglomération tourangelle",
    founded: "Depuis 2004",
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.20)",
    intro: [
      "Fondé le 20 juillet 2004, le Boxing Club de Tours Nord est une association loi 1901. Depuis sa création, le club œuvre activement au développement des disciplines pugilistiques et à la promotion du sport pour tous sur le territoire du nord de l’agglomération tourangelle.",
      "Les entraînements sont assurés par une équipe de moniteurs diplômés bénévoles, engagés dans la transmission des valeurs éducatives, sportives et citoyennes propres aux sports de combat.",
    ],
    facts: [
      { label: "Création", value: "20 juillet 2004", icon: "calendar" },
      { label: "Territoire", value: "Nord de l’agglomération tourangelle", icon: "pin" },
      { label: "Statut", value: "Association loi 1901", icon: "building" },
      { label: "Encadrement", value: "Moniteurs diplômés bénévoles", icon: "users" },
    ],
    steps: [
      {
        year: "2004",
        title: "La fondation du club",
        badge: "Fondation",
        icon: "shield",
        description:
          "Le 20 juillet 2004, le Boxing Club de Tours Nord est créé sous le régime de la loi 1901, avec une ambition claire : rendre les disciplines pugilistiques accessibles à tous, au nord de l’agglomération tourangelle.",
      },
      {
        year: "Disciplines",
        title: "Une pratique complète",
        badge: "Expansion",
        icon: "flame",
        description:
          "Boxe française, boxe thaïlandaise, kick-boxing, K1, boxe anglaise, pancrace : le club élargit son offre et développe en parallèle des activités axées sur la remise en forme et le bien-être corporel.",
      },
      {
        year: "Événements",
        title: "Le Tours Event Fight",
        badge: "Rayonnement",
        icon: "medal",
        description:
          "Galas, interclubs, journées sport ouvertes, actions de découverte et animations pour les familles, les entreprises et le jeune public. Parmi les rendez-vous phares figure le Tours Event Fight, organisé à la Halle Monconseil.",
      },
      {
        year: "Aujourd’hui",
        title: "Le sport pour tous",
        badge: "Vision",
        icon: "clock",
        description:
          "Formation continue des bénévoles, dirigeants, officiels et encadrants, partenariats avec les structures socioculturelles, les établissements scolaires, les associations et les familles : le club s’inscrit pleinement dans la dynamique éducative et citoyenne du territoire.",
      },
    ],
    values: [
      "Mixité sociale et culturelle",
      "Égalité filles-garçons",
      "Respect des règles",
      "Vivre-ensemble",
      "Dépassement de soi",
    ],
    highlight: {
      label: "Bien-être & santé",
      text: "Le club met également l’accent sur les activités liées au bien-être et à la santé, à travers des pratiques de fitness et de préparation physique favorisant l’hygiène de vie, la connaissance du corps et la lutte contre la sédentarité.",
    },
    // TODO : compléter avec les noms des dirigeants du BCTN dès qu’ils sont communiqués.
    leaders: [
      {
        name: "Une équipe de bénévoles",
        initials: "TN",
        role: "Moniteurs diplômés & encadrants",
        description:
          "Les entraînements sont assurés par des moniteurs diplômés bénévoles. Le club accorde une place importante à la formation de ses bénévoles, dirigeants et officiels afin de garantir un encadrement de qualité et un développement durable de ses activités.",
      },
    ],
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
    transition: { duration: 0.65, ease: premiumEase },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const timelineLeft: Variants = {
  hidden: { opacity: 0, x: -80, y: 30, rotate: -2, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: premiumEase },
  },
};

const timelineRight: Variants = {
  hidden: { opacity: 0, x: 80, y: 30, rotate: 2, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: premiumEase },
  },
};

const timelineMobile: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: premiumEase },
  },
};

// =====================================================
// ICÔNES
// =====================================================
function renderHistoryIcon(icon: HistoryIcon) {
  switch (icon) {
    case "shield":
      return <ShieldCheck size={15} />;
    case "trophy":
      return <Trophy size={15} />;
    case "clock":
      return <Clock3 size={15} />;
    case "users":
      return <Users size={15} />;
    case "flame":
      return <Flame size={15} />;
    case "medal":
      return <Medal size={15} />;
    default:
      return <Sparkles size={15} />;
  }
}

function renderFactIcon(icon: FactIcon) {
  switch (icon) {
    case "calendar":
      return <CalendarDays size={16} />;
    case "pin":
      return <MapPin size={16} />;
    case "building":
      return <Building2 size={16} />;
    case "users":
      return <Users size={16} />;
    default:
      return <Sparkles size={16} />;
  }
}

// =====================================================
// PAGE HISTORIQUE PREMIUM ANIMÉE
// =====================================================
export default function HistoriquePageClient() {
  const [activeClubId, setActiveClubId] = useState(clubs[0].id);
  const [openMobileSteps, setOpenMobileSteps] = useState<
    Record<string, boolean>
  >({});

  const activeClub = clubs.find((club) => club.id === activeClubId) ?? clubs[0];

  const toggleMobileStep = (key: string) => {
    setOpenMobileSteps((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isStepOpen = (key: string, fallback: boolean) =>
    openMobileSteps[key] ?? fallback;

  return (
    <>
      <Navbar />

      <main className="bg-[#070707] text-white">
        {/* ---------------------------------
            HERO PREMIUM
        --------------------------------- */}
        <section className="relative overflow-hidden border-b border-white/10 pt-[120px] pb-8 md:pt-[185px] md:pb-20 lg:pb-24">
          <div className="pointer-events-none absolute inset-0">
            <motion.div
              className="absolute -left-20 top-6 h-40 w-40 rounded-full bg-red-600/15 blur-3xl md:top-10 md:h-72 md:w-72"
              animate={{ scale: [1, 1.08, 1], opacity: [0.65, 0.85, 0.65] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute right-0 top-0 h-44 w-44 rounded-full bg-amber-400/10 blur-3xl md:h-80 md:w-80"
              animate={{ scale: [1, 1.06, 1], opacity: [0.55, 0.8, 0.55] }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            />
            <div className="absolute bottom-0 left-1/3 h-36 w-36 rounded-full bg-white/5 blur-3xl md:h-72 md:w-72" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#0a0a0a] to-[#050505]" />
            <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.28)_1px,transparent_1px)] [background-size:24px_24px] md:opacity-[0.05] md:[background-size:34px_34px]" />
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
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.56rem] font-bold uppercase tracking-[0.12em] text-amber-300 shadow-[0_8px_20px_rgba(0,0,0,0.16)] backdrop-blur-md sm:px-3 sm:py-1.5 sm:text-[0.62rem] md:px-4 md:py-2 md:text-[0.72rem] md:tracking-[0.18em]"
            >
              <Sparkles size={11} className="md:h-[14px] md:w-[14px]" />
              Historique des clubs
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-3 text-[2rem] font-black uppercase leading-[0.9] tracking-[0.025em] text-white sm:text-[2.5rem] md:mt-5 md:text-6xl md:tracking-[0.04em] xl:text-7xl"
            >
              L’histoire
              <br className="hidden sm:block" />
              <span className="block bg-gradient-to-r from-red-500 via-white to-amber-300 bg-clip-text text-transparent">
                qui façonne nos clubs
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-3 max-w-[23rem] text-[0.88rem] leading-5 text-white/68 sm:max-w-[30rem] sm:text-[0.94rem] sm:leading-6 md:mt-5 md:max-w-3xl md:text-lg md:leading-7"
            >
              De La Riche en 1991 à Tours Nord en 2004, deux structures
              complémentaires réunies par les mêmes valeurs : transmission,
              exigence et sport pour tous.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="mt-4 flex flex-wrap items-center justify-center gap-2 md:mt-8 md:gap-3"
            >
              {["Transmission", "Discipline", "Évolution"].map((tag) => (
                <motion.span
                  key={tag}
                  variants={fadeUp}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.66rem] font-semibold text-white/78 sm:px-3 sm:py-1.5 sm:text-[0.72rem] md:px-4 md:py-2 md:text-xs"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ---------------------------------
            SÉLECTEUR DE CLUB
        --------------------------------- */}
        <section className="relative border-b border-white/10 bg-[#070707]/90 py-5 md:py-8">
          <div className="container-custom relative z-10">
            <div className="mx-auto flex w-full max-w-xl items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-xl">
              {clubs.map((club) => {
                const isActive = club.id === activeClubId;

                return (
                  <button
                    key={club.id}
                    type="button"
                    onClick={() => setActiveClubId(club.id)}
                    aria-pressed={isActive}
                    className="relative flex-1 rounded-full px-3 py-2.5 text-center transition-colors duration-300 md:px-5 md:py-3"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="club-tab-pill"
                        transition={{ duration: 0.35, ease: premiumEase }}
                        className="absolute inset-0 rounded-full border border-white/15 bg-white/10"
                        style={{ boxShadow: `0 0 26px ${club.glow}` }}
                      />
                    )}

                    <span className="relative z-10 block">
                      <span
                        className="block text-[0.8rem] font-black uppercase tracking-[0.12em] md:text-sm"
                        style={{ color: isActive ? club.accent : undefined }}
                      >
                        {club.short}
                      </span>
                      <span
                        className={`mt-0.5 block text-[0.58rem] font-semibold uppercase tracking-[0.14em] md:text-[0.66rem] ${
                          isActive ? "text-white/75" : "text-white/45"
                        }`}
                      >
                        {club.founded}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------------------------------
            CONTENU DU CLUB SÉLECTIONNÉ
        --------------------------------- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeClub.id}
            initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -14, filter: "blur(8px)" }}
            transition={{ duration: 0.45, ease: premiumEase }}
          >
            {/* =========================================
                PRÉSENTATION DU CLUB
            ========================================= */}
            <section className="relative overflow-hidden py-8 md:py-16 lg:py-20">
              <div className="pointer-events-none absolute inset-0">
                <div
                  className="absolute left-[-4rem] top-10 h-40 w-40 rounded-full blur-3xl md:h-56 md:w-56"
                  style={{ backgroundColor: activeClub.glow }}
                />
                <div className="absolute right-[-4rem] bottom-10 h-40 w-40 rounded-full bg-white/5 blur-3xl md:h-56 md:w-56" />
              </div>

              <div className="container-custom relative z-10 mx-auto max-w-5xl">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl md:rounded-[32px] md:p-10"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-[2px]"
                    style={{
                      background: `linear-gradient(to right, ${activeClub.accent}, rgba(255,255,255,0.45), transparent)`,
                    }}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-80"
                    style={{
                      background: `radial-gradient(circle at top right, ${activeClub.glow} 0%, transparent 38%)`,
                    }}
                  />

                  <div className="relative z-10">
                    <motion.span
                      variants={fadeUp}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.16em]"
                      style={{ color: activeClub.accent }}
                    >
                      {activeClub.founded}
                    </motion.span>

                    <motion.h2
                      variants={fadeUp}
                      className="mt-4 text-[1.6rem] font-black uppercase leading-[0.98] tracking-[0.02em] text-white sm:text-[2rem] md:text-4xl"
                    >
                      {activeClub.name}
                    </motion.h2>

                    <motion.p
                      variants={fadeUp}
                      className="mt-2 text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-white/55 md:text-sm"
                    >
                      {activeClub.tagline}
                    </motion.p>

                    <div className="mt-5 space-y-3 md:mt-7 md:space-y-4">
                      {activeClub.intro.map((paragraph) => (
                        <motion.p
                          key={paragraph.slice(0, 40)}
                          variants={fadeUp}
                          className="text-[0.9rem] leading-6 text-white/70 md:text-base md:leading-8"
                        >
                          {paragraph}
                        </motion.p>
                      ))}
                    </div>

                    <motion.div
                      variants={staggerContainer}
                      className="mt-6 grid gap-3 sm:grid-cols-2 md:mt-9 md:gap-4"
                    >
                      {activeClub.facts.map((fact) => (
                        <motion.div
                          key={fact.label}
                          variants={fadeUp}
                          className="flex items-start gap-3 rounded-[18px] border border-white/10 bg-black/20 p-4"
                        >
                          <span
                            className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5"
                            style={{ color: activeClub.accent }}
                          >
                            {renderFactIcon(fact.icon)}
                          </span>

                          <div className="min-w-0">
                            <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white/50">
                              {fact.label}
                            </p>
                            <p className="mt-1 text-[0.9rem] font-semibold leading-5 text-white/85">
                              {fact.value}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* =========================================
                TIMELINE PREMIUM
            ========================================= */}
            <section className="relative overflow-hidden py-6 md:py-16 lg:py-20">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-4rem] top-12 h-40 w-40 rounded-full bg-red-600/10 blur-3xl md:h-56 md:w-56" />
                <div className="absolute right-[-4rem] bottom-10 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl md:h-56 md:w-56" />
              </div>

              <div className="container-custom relative z-10 mx-auto max-w-6xl">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="mx-auto mb-6 max-w-3xl text-center md:mb-14"
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-amber-300 backdrop-blur-md md:px-4 md:py-2 md:text-[0.72rem] md:tracking-[0.18em]">
                    Les grandes étapes
                  </span>

                  <h2 className="mt-4 text-[1.7rem] font-black uppercase leading-[0.96] tracking-[0.02em] text-white sm:text-[2rem] md:mt-5 md:text-4xl lg:text-5xl">
                    La chronologie du {activeClub.short}
                  </h2>
                </motion.div>

                {/* DESKTOP / TABLETTE LARGE */}
                <div className="relative hidden md:block">
                  <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-red-500 via-amber-400 to-transparent" />

                  <motion.div
                    className="absolute left-1/2 top-0 h-full w-[14px] -translate-x-1/2 bg-gradient-to-b from-red-500/15 via-amber-300/20 to-transparent blur-md"
                    animate={{ opacity: [0.35, 0.9, 0.35], scaleY: [1, 1.02, 1] }}
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
                    {activeClub.steps.map((step, index) => {
                      const isEven = index % 2 === 0;

                      return (
                        <motion.article
                          key={step.title}
                          variants={isEven ? timelineLeft : timelineRight}
                          className={`relative w-[calc(50%-2rem)] ${
                            isEven ? "mr-auto" : "ml-auto"
                          }`}
                        >
                          <motion.span
                            className={`absolute top-10 h-4 w-4 rounded-full ${
                              isEven ? "right-[-42px]" : "left-[-42px]"
                            }`}
                            style={{
                              backgroundColor: activeClub.accent,
                              boxShadow: `0 0 0 8px rgba(255,255,255,0.03), 0 0 18px ${activeClub.glow}`,
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

                          <motion.div
                            whileHover={{ y: -8, scale: 1.01 }}
                            transition={{ duration: 0.28 }}
                            className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-7 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl hover:border-white/15 md:p-8"
                          >
                            <div
                              className="absolute inset-x-0 top-0 h-[2px]"
                              style={{
                                background: `linear-gradient(to right, ${activeClub.accent}, rgba(255,255,255,0.45), transparent)`,
                              }}
                            />

                            <div
                              className="pointer-events-none absolute inset-0 opacity-80"
                              style={{
                                background: `radial-gradient(circle at top right, ${activeClub.glow} 0%, transparent 35%)`,
                              }}
                            />

                            <div className="relative z-10">
                              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                  <span
                                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/85"
                                    style={{ boxShadow: `0 0 22px ${activeClub.glow}` }}
                                  >
                                    {renderHistoryIcon(step.icon)}
                                    {step.year}
                                  </span>

                                  <h3 className="mt-5 text-2xl font-black uppercase tracking-[0.03em] text-white md:text-3xl">
                                    {step.title}
                                  </h3>
                                </div>

                                <span
                                  className="inline-flex w-fit rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.16em]"
                                  style={{ color: activeClub.accent }}
                                >
                                  {step.badge}
                                </span>
                              </div>

                              <p className="mt-5 text-sm leading-8 text-white/68 md:text-base">
                                {step.description}
                              </p>
                            </div>
                          </motion.div>
                        </motion.article>
                      );
                    })}
                  </motion.div>
                </div>

                {/* MOBILE : ACCORDÉON COMPACT */}
                <motion.div
                  className="space-y-3 md:hidden"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.08 }}
                >
                  {activeClub.steps.map((step, index) => {
                    const key = `${activeClub.id}-step-${index}`;
                    const isOpen = isStepOpen(key, index === 0);

                    return (
                      <motion.article
                        key={key}
                        variants={timelineMobile}
                        className="relative overflow-hidden rounded-[22px] border border-white/10 bg-white/5 shadow-[0_14px_30px_rgba(0,0,0,0.16)] backdrop-blur-xl"
                      >
                        <div
                          className="absolute inset-x-0 top-0 h-[2px]"
                          style={{
                            background: `linear-gradient(to right, ${activeClub.accent}, rgba(255,255,255,0.45), transparent)`,
                          }}
                        />

                        <div
                          className="pointer-events-none absolute inset-0 opacity-80"
                          style={{
                            background: `radial-gradient(circle at top right, ${activeClub.glow} 0%, transparent 35%)`,
                          }}
                        />

                        <button
                          type="button"
                          onClick={() => toggleMobileStep(key)}
                          className="relative z-10 flex w-full items-center justify-between gap-3 px-4 py-4 text-left"
                          aria-expanded={isOpen}
                        >
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-white/85"
                                style={{ boxShadow: `0 0 16px ${activeClub.glow}` }}
                              >
                                {renderHistoryIcon(step.icon)}
                                {step.year}
                              </span>

                              <span
                                className="inline-flex rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.14em]"
                                style={{ color: activeClub.accent }}
                              >
                                {step.badge}
                              </span>
                            </div>

                            <h3 className="mt-3 text-[1rem] font-black uppercase leading-5 tracking-[0.02em] text-white">
                              {step.title}
                            </h3>
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
                              transition={{ duration: 0.3, ease: premiumEase }}
                              className="overflow-hidden"
                            >
                              <div className="relative z-10 border-t border-white/10 px-4 pb-4 pt-3">
                                <p className="text-[0.86rem] leading-6 text-white/68">
                                  {step.description}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.article>
                    );
                  })}
                </motion.div>
              </div>
            </section>

            {/* =========================================
                VALEURS & ENGAGEMENTS
            ========================================= */}
            <section className="relative overflow-hidden border-t border-white/10 py-8 md:py-16 lg:py-20">
              <div className="container-custom relative z-10 mx-auto max-w-5xl">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  className="grid gap-4 md:grid-cols-2 md:gap-6"
                >
                  <motion.div
                    variants={fadeUp}
                    className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl md:rounded-[28px] md:p-7"
                  >
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white/55 md:text-[0.7rem]">
                      Les valeurs défendues
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {activeClub.values.map((value) => (
                        <span
                          key={value}
                          className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[0.72rem] font-semibold text-white/78 md:text-[0.78rem]"
                        >
                          {value}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeUp}
                    className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl md:rounded-[28px] md:p-7"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-70"
                      style={{
                        background: `radial-gradient(circle at top right, ${activeClub.glow} 0%, transparent 40%)`,
                      }}
                    />

                    <div className="relative z-10">
                      <p
                        className="inline-flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] md:text-[0.7rem]"
                        style={{ color: activeClub.accent }}
                      >
                        <HeartHandshake size={14} />
                        {activeClub.highlight.label}
                      </p>

                      <p className="mt-3 text-[0.88rem] leading-6 text-white/70 md:text-[0.95rem] md:leading-7">
                        {activeClub.highlight.text}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* =========================================
                DIRIGEANTS & ENCADREMENT
            ========================================= */}
            <section className="relative overflow-hidden border-t border-white/10 py-8 md:py-16 lg:py-20">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-4rem] top-10 h-40 w-40 rounded-full bg-red-600/10 blur-3xl md:h-56 md:w-56" />
                <div className="absolute right-[-4rem] bottom-10 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl md:h-56 md:w-56" />
              </div>

              <motion.div
                className="container-custom relative z-10 mx-auto max-w-5xl"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
              >
                <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-amber-300 backdrop-blur-md md:px-4 md:py-2 md:text-[0.72rem] md:tracking-[0.18em]">
                    Direction & Encadrement
                  </span>

                  <h2 className="mt-4 text-[1.7rem] font-black uppercase leading-[0.96] tracking-[0.02em] text-white sm:text-[2rem] md:mt-5 md:text-4xl lg:text-5xl">
                    Celles et ceux qui font vivre le club
                  </h2>

                  <p className="mt-3 text-[0.9rem] leading-6 text-white/70 md:mt-4 md:text-base md:leading-7">
                    Des femmes et des hommes engagés dans la transmission des
                    valeurs sportives et humaines du {activeClub.short}.
                  </p>
                </motion.div>

                <div className="mt-6 grid gap-4 md:mt-12 md:gap-6 lg:grid-cols-2">
                  {activeClub.leaders.map((leader) => (
                    <motion.article
                      key={leader.name}
                      variants={fadeUp}
                      whileHover={{ y: -6, scale: 1.01 }}
                      transition={{ duration: 0.3 }}
                      className="relative overflow-hidden rounded-[22px] border border-white/10 bg-white/5 p-5 shadow-[0_16px_34px_rgba(0,0,0,0.18)] backdrop-blur-xl hover:border-white/20 md:rounded-[28px] md:p-7"
                    >
                      <div
                        className="pointer-events-none absolute inset-0 opacity-70"
                        style={{
                          background: `radial-gradient(circle at top right, ${activeClub.glow} 0%, transparent 42%)`,
                        }}
                      />

                      <div className="relative z-10 flex items-start gap-4">
                        <span
                          className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/25 text-sm font-black tracking-[0.06em]"
                          style={{
                            color: activeClub.accent,
                            boxShadow: `0 0 22px ${activeClub.glow}`,
                          }}
                        >
                          {leader.initials}
                        </span>

                        <div className="min-w-0">
                          <h3 className="text-[1.05rem] font-black text-white md:text-xl">
                            {leader.name}
                          </h3>

                          <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-red-400 md:text-[0.78rem]">
                            {leader.role}
                          </p>
                        </div>
                      </div>

                      <p className="relative z-10 mt-4 text-[0.88rem] leading-6 text-white/70 md:text-[0.95rem] md:leading-7">
                        {leader.description}
                      </p>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            </section>
          </motion.div>
        </AnimatePresence>

        {/* ---------------------------------
            CTA FINAL
        --------------------------------- */}
        <section className="relative overflow-hidden border-t border-white/10 py-8 md:py-16 lg:py-20">
          <div className="container-custom relative z-10">
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: premiumEase }}
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                className="relative w-full max-w-3xl overflow-hidden rounded-[22px] border border-white/10 bg-white/5 p-5 shadow-[0_16px_34px_rgba(0,0,0,0.18)] backdrop-blur-xl md:rounded-[28px] md:p-8 md:shadow-[0_18px_40px_rgba(0,0,0,0.20)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-amber-300/10" />

                <div className="relative z-10 text-center">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-amber-300 md:text-[0.72rem] md:tracking-[0.18em]">
                    Continuer l’histoire
                  </p>

                  <h3 className="mt-3 text-[1.35rem] font-black uppercase leading-[1] text-white sm:text-[1.6rem] md:text-3xl">
                    Envie de rejoindre la dynamique du club ?
                  </h3>

                  <p className="mx-auto mt-3 max-w-2xl text-[0.88rem] leading-6 text-white/68 md:mt-4 md:text-base md:leading-7">
                    Prenez contact avec nos clubs pour découvrir l’ambiance,
                    l’encadrement et les disciplines proposées.
                  </p>

                  <div className="mt-5 flex flex-col items-center justify-center gap-2.5 sm:flex-row md:mt-6 md:gap-3">
                    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href="/contact"
                        className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(220,38,38,0.24)] transition-all duration-300 hover:bg-red-700 md:px-6 md:py-3.5"
                      >
                        Contacter le club
                        <ArrowRight size={16} />
                      </Link>
                    </motion.div>

                    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href="/inscription"
                        className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10 md:px-6 md:py-3.5"
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

      <Footer />
    </>
  );
}
