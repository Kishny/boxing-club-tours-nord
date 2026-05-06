"use client";

// =====================================================
// IMPORTS
// =====================================================
import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import {
  ArrowRight,
  ChevronDown,
  Dumbbell,
  Sparkles,
  Users,
  Target,
  Flame,
  ShieldCheck,
} from "lucide-react";
import type { Coach } from "@/types";

// =====================================================
// DONNÉES DES COACHS (fallback si MongoDB vide)
// =====================================================
const hardcodedCoaches: Coach[] = [
  {
    id: 1,
    name: "Brian MACE",
    role: "Head Coach",
    specialty: "Kickboxing • K1 Rules",
    experience: "Encadrement technique & progression compétitive",
    description:
      "Un encadrement exigeant, structuré et moderne, avec une vraie attention portée à la progression individuelle et à la qualité du travail technique.",
    philosophy:
      "Former des pratiquants solides, disciplinés et capables de progresser durablement dans un cadre clair et motivant.",
    strengths: ["Technique", "Exigence", "Lecture du combat"],
    image: "/images/coachs/brian.jpg",
    accent: "#ef4444",
  },
  {
    id: 2,
    name: "Jean LOU",
    role: "Technique Coach",
    specialty: "Full Contact • Low Kick",
    experience: "Construction gestuelle & précision du travail debout",
    description:
      "Un profil orienté précision, répétition, maîtrise des bases et développement des automatismes dans une logique de progression propre.",
    philosophy:
      "Construire une boxe lisible, efficace et disciplinée, en travaillant avec rigueur les fondamentaux et l’intelligence de combat.",
    strengths: ["Précision", "Structure", "Pédagogie"],
    image: "/images/coachs/jean.png",
    accent: "#f59e0b",
  },
  {
    id: 3,
    name: "Leslie DEL PIERRO",
    role: "Performance Coach",
    specialty: "Condition physique • Vitesse • Réactivité",
    experience: "Préparation physique & intensité d’entraînement",
    description:
      "Un accompagnement orienté engagement, explosivité, mobilité et montée en puissance, pour renforcer l’impact global du pratiquant.",
    philosophy:
      "Faire émerger un mental fort, une condition solide et une présence physique capable de soutenir le travail technique dans la durée.",
    strengths: ["Cardio", "Explosivité", "Mental"],
    image: "/images/coachs/leslie.png",
    accent: "#facc15",
  },
];

// =====================================================
// COMPOSANT PAGE COACHS PREMIUM
// =====================================================
export default function CoachesPage() {
  const [coaches, setCoaches] = useState<Coach[]>(hardcodedCoaches);
  const [openMethodId, setOpenMethodId] = useState<number | null>(1);
  const [openMobileCard, setOpenMobileCard] = useState<number | null>(1);

  useEffect(() => {
    fetch("/api/cms/coachs")
      .then((r) => r.json())
      .then((docs) => {
        if (!Array.isArray(docs) || docs.length === 0) return;
        const mapped: Coach[] = (docs as Record<string, unknown>[]).map(
          (doc, i) => ({
            id: i + 1,
            name: (doc.name as string) || "",
            role: (doc.role as string) || "Coach",
            specialty: (doc.specialty as string) || "",
            experience: (doc.experience as string) || (doc.bio as string) || "",
            description:
              (doc.description as string) || (doc.bio as string) || "",
            philosophy: (doc.philosophy as string) || "",
            strengths: Array.isArray(doc.strengths)
              ? (doc.strengths as string[])
              : [],
            image: (doc.photo as string) || "",
            accent: (doc.accent as string) || "#ef4444",
          }),
        );
        setCoaches(mapped);
      })
      .catch(() => {});
  }, []);

  const toggleMethod = (methodId: number) => {
    setOpenMethodId((prev) => (prev === methodId ? null : methodId));
  };

  return (
    <>
      <Navbar />

      <main className="bg-[#070707] text-white">
        <section className="relative overflow-hidden border-b border-white/10 pt-[120px] pb-8 md:pt-[185px] md:pb-20 lg:pb-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-6 h-40 w-40 rounded-full bg-red-600/16 blur-3xl md:top-10 md:h-72 md:w-72 md:bg-red-600/18" />
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-amber-400/12 blur-3xl md:h-80 md:w-80 md:bg-amber-400/14" />
            <div className="absolute bottom-0 left-1/3 h-36 w-36 rounded-full bg-white/5 blur-3xl md:h-72 md:w-72 md:bg-white/6" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#0a0a0a] to-[#050505]" />
            <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.26)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.26)_1px,transparent_1px)] [background-size:28px_28px] md:opacity-[0.05] md:[background-size:34px_34px]" />
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(135deg,rgba(255,255,255,0.30)_1px,transparent_1px)] [background-size:24px_24px] md:opacity-[0.07] md:[background-size:28px_28px]" />

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

          <div className="container-custom relative z-10">
            <div className="mx-auto max-w-5xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.56rem] font-bold uppercase tracking-[0.12em] text-amber-300 shadow-[0_8px_20px_rgba(0,0,0,0.16)] backdrop-blur-md sm:px-3 sm:py-1.5 sm:text-[0.62rem] md:px-4 md:py-2 md:text-[0.72rem] md:tracking-[0.18em]">
                <Sparkles size={11} className="md:h-[14px] md:w-[14px]" />
                Encadrement du club
              </span>

              <h1 className="mt-3 text-[2rem] font-black uppercase leading-[0.9] tracking-[0.025em] text-white sm:text-[2.5rem] md:mt-5 md:text-6xl md:tracking-[0.04em] xl:text-7xl">
                Les coachs qui
                <br className="hidden sm:block" />
                <span className="block bg-gradient-to-r from-red-500 via-white to-amber-300 bg-clip-text text-transparent">
                  façonnent la progression
                </span>
              </h1>

              <p className="mx-auto mt-3 max-w-[23rem] text-[0.88rem] leading-5 text-white/68 sm:max-w-[30rem] sm:text-[0.94rem] sm:leading-6 md:mt-5 md:max-w-3xl md:text-lg md:leading-7">
                Exigence, pédagogie, lecture technique et accompagnement humain :
                découvre l’encadrement qui donne sa vraie colonne vertébrale au
                club.
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 md:mt-8 md:gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/78 sm:px-3 sm:py-1.5 sm:text-[0.72rem] md:px-4 md:py-2 md:text-xs">
                  Exigence
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/78 sm:px-3 sm:py-1.5 sm:text-[0.72rem] md:px-4 md:py-2 md:text-xs">
                  Pédagogie
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/78 sm:px-3 sm:py-1.5 sm:text-[0.72rem] md:px-4 md:py-2 md:text-xs">
                  Progression
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-6 md:py-14 lg:py-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-10 h-40 w-40 rounded-full bg-red-600/10 blur-3xl md:h-48 md:w-48" />
            <div className="absolute right-0 bottom-0 h-44 w-44 rounded-full bg-amber-400/10 blur-3xl md:h-52 md:w-52" />
          </div>

          <div className="container-custom relative z-10">
            <div className="space-y-3 md:hidden">
              {[
                {
                  id: 1,
                  icon: <Target size={20} />,
                  iconClasses:
                    "border-red-400/20 bg-red-500/10 text-red-400",
                  title: "Lecture précise",
                  subtitle: "Lecture claire des besoins et axes de progression.",
                  description:
                    "Chaque coach accompagne la progression avec une lecture claire des besoins du pratiquant, du rythme de travail et des axes d’amélioration.",
                },
                {
                  id: 2,
                  icon: <Users size={20} />,
                  iconClasses:
                    "border-amber-300/20 bg-amber-300/10 text-amber-300",
                  title: "Encadrement humain",
                  subtitle:
                    "Confiance, écoute et qualité du cadre d’apprentissage.",
                  description:
                    "La technique compte, mais l’attention humaine, la confiance et la qualité du cadre d’apprentissage font aussi la différence.",
                },
                {
                  id: 3,
                  icon: <Dumbbell size={20} />,
                  iconClasses: "border-white/15 bg-white/[0.08] text-white",
                  title: "Travail exigeant",
                  subtitle:
                    "Un cadre solide, motivant et fidèle à l’esprit du club.",
                  description:
                    "L’objectif reste le même : faire grandir chaque pratiquant dans un environnement solide, motivant et fidèle à l’esprit du club.",
                },
              ].map((item) => (
                <article
                  key={item.id}
                  className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.05] shadow-[0_14px_30px_rgba(0,0,0,0.16)] backdrop-blur-xl"
                >
                  <button
                    type="button"
                    onClick={() => toggleMethod(item.id)}
                    className="relative flex w-full items-center gap-3 px-4 py-4 text-left"
                    aria-expanded={openMethodId === item.id}
                  >
                    <div
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${item.iconClasses}`}
                    >
                      {item.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="text-[1rem] font-black text-white">
                        {item.title}
                      </h2>
                      <p className="mt-1 text-[0.82rem] leading-5 text-white/58">
                        {item.subtitle}
                      </p>
                    </div>

                    <div
                      className={`shrink-0 transition-transform duration-300 ${
                        openMethodId === item.id ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown size={20} className="text-white/70" />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      openMethodId === item.id
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-80"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-white/10 px-4 pb-4 pt-3">
                        <p className="text-[0.84rem] leading-6 text-white/68">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="hidden gap-6 md:grid lg:grid-cols-3">
              <div className="rounded-[30px] border border-white/10 bg-white/[0.05] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-red-400/20 bg-red-500/10 text-red-400">
                  <Target size={22} />
                </div>
                <h2 className="mt-4 text-2xl font-black text-white">
                  Lecture précise
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/65 md:text-base">
                  Chaque coach accompagne la progression avec une lecture claire
                  des besoins du pratiquant, du rythme de travail et des axes
                  d’amélioration.
                </p>
              </div>

              <div className="rounded-[30px] border border-white/10 bg-white/[0.05] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/10 text-amber-300">
                  <Users size={22} />
                </div>
                <h2 className="mt-4 text-2xl font-black text-white">
                  Encadrement humain
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/65 md:text-base">
                  La technique compte, mais l’attention humaine, la confiance et
                  la qualité du cadre d’apprentissage font aussi la différence.
                </p>
              </div>

              <div className="rounded-[30px] border border-white/10 bg-white/[0.05] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.08] text-white">
                  <Dumbbell size={22} />
                </div>
                <h2 className="mt-4 text-2xl font-black text-white">
                  Travail exigeant
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/65 md:text-base">
                  L’objectif reste le même : faire grandir chaque pratiquant
                  dans un environnement solide, motivant et fidèle à l’esprit du
                  club.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden pb-10 md:pb-16 lg:pb-20">
          <div className="container-custom relative z-10">
            <div className="flex flex-col gap-4 md:gap-10">
              {coaches.map((coach, index) => {
                const isOpen = openMobileCard === coach.id;
                const isEven = index % 2 === 0;

                return (
                  <article
                    key={coach.id}
                    className="overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.05] shadow-[0_16px_34px_rgba(0,0,0,0.18)] backdrop-blur-xl md:rounded-[34px] md:shadow-[0_20px_46px_rgba(0,0,0,0.22)]"
                  >
                    <div className="block xl:hidden">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMobileCard((prev) =>
                            prev === coach.id ? null : coach.id
                          )
                        }
                        className="relative flex w-full items-center gap-3 p-4 text-left sm:gap-4 sm:p-5"
                        aria-expanded={isOpen}
                      >
                        <div
                          className="pointer-events-none absolute inset-0 opacity-80"
                          style={{
                            background: `radial-gradient(circle at top right, ${coach.accent}16 0%, transparent 35%)`,
                          }}
                        />

                        <div
                          className="absolute inset-x-0 top-0 h-[2px]"
                          style={{
                            background: `linear-gradient(to right, ${coach.accent}, rgba(255,255,255,0.4), transparent)`,
                          }}
                        />

                        <div
                          className="relative z-10 h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] sm:h-16 sm:w-16"
                          style={{
                            boxShadow: `0 0 22px ${coach.accent}18`,
                          }}
                        >
                          <Image
                            src={coach.image}
                            alt={coach.name}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </div>

                        <div className="relative z-10 min-w-0 flex-1">
                          <p
                            className="text-[0.62rem] font-bold uppercase tracking-[0.14em] sm:text-[0.68rem] sm:tracking-[0.16em]"
                            style={{ color: coach.accent }}
                          >
                            {coach.role}
                          </p>

                          <h2 className="mt-1 text-[1rem] font-black leading-5 text-white sm:text-xl">
                            {coach.name}
                          </h2>

                          <p className="mt-1 text-[0.82rem] leading-5 text-white/60 sm:text-sm">
                            {coach.specialty}
                          </p>
                        </div>

                        <div
                          className={`relative z-10 shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          <ChevronDown
                            size={20}
                            className="text-white/70 sm:h-[22px] sm:w-[22px]"
                          />
                        </div>
                      </button>

                      <div
                        className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-80"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="border-t border-white/10 px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4">
                            <div className="rounded-[18px] border border-white/10 bg-black/20 p-3.5 sm:p-4">
                              <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white/50 sm:text-[0.68rem]">
                                Expérience
                              </p>
                              <p className="mt-2 text-[0.84rem] leading-6 text-white/72 sm:text-sm sm:leading-7">
                                {coach.experience}
                              </p>
                            </div>

                            <p className="mt-3 text-[0.84rem] leading-6 text-white/68 sm:text-sm sm:leading-7">
                              {coach.description}
                            </p>

                            <div className="mt-3 rounded-[18px] border border-white/8 bg-white/[0.04] p-3.5 sm:p-4">
                              <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white/55 sm:text-[0.68rem]">
                                Philosophie
                              </p>
                              <p className="mt-2 text-[0.84rem] leading-6 text-white/68 sm:text-sm sm:leading-7">
                                {coach.philosophy}
                              </p>
                            </div>

                            <div className="mt-3 flex flex-wrap gap-2">
                              {coach.strengths.map((strength) => (
                                <span
                                  key={strength}
                                  className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/80 sm:px-3 sm:py-1.5 sm:text-[0.72rem]"
                                >
                                  {strength}
                                </span>
                              ))}
                            </div>

                            <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
                              <Button asChild variant="secondary" size="md">
                                <Link href="/contact">Contacter le club</Link>
                              </Button>

                              <Button asChild variant="primary" size="md">
                                <Link href="/inscription">
                                  S’inscrire
                                  <ArrowRight size={15} />
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="hidden xl:grid xl:grid-cols-[0.92fr_1.08fr]">
                      <div
                        className={`relative min-h-[420px] overflow-hidden ${
                          isEven ? "order-1" : "order-2"
                        }`}
                      >
                        <div className="absolute inset-0">
                          <Image
                            src={coach.image}
                            alt={coach.name}
                            fill
                            sizes="(max-width: 1280px) 50vw, 40vw"
                            className="object-cover"
                          />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/15 to-black/65" />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `radial-gradient(circle at top right, ${coach.accent}28 0%, transparent 34%)`,
                          }}
                        />

                        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(135deg,rgba(255,255,255,0.45)_1px,transparent_1px)] [background-size:28px_28px]" />

                        <div className="relative z-10 flex h-full flex-col justify-between p-8">
                          <div className="flex items-start justify-between">
                            <span
                              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/90"
                              style={{
                                boxShadow: `0 0 24px ${coach.accent}22`,
                              }}
                            >
                              <Flame size={14} />
                              {coach.role}
                            </span>

                            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-sm font-bold text-white">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>

                          <div>
                            <p
                              className="text-sm font-semibold uppercase tracking-[0.16em]"
                              style={{ color: coach.accent }}
                            >
                              {coach.specialty}
                            </p>

                            <h2 className="mt-3 text-4xl font-black uppercase tracking-[0.04em] text-white">
                              {coach.name}
                            </h2>

                            <p className="mt-4 max-w-lg text-base leading-8 text-white/75">
                              {coach.experience}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`relative overflow-hidden p-8 lg:p-10 ${
                          isEven ? "order-2" : "order-1"
                        }`}
                      >
                        <div
                          className="absolute inset-x-0 top-0 h-[2px]"
                          style={{
                            background: `linear-gradient(to right, ${coach.accent}, rgba(255,255,255,0.5), transparent)`,
                          }}
                        />

                        <div
                          className="pointer-events-none absolute inset-0"
                          style={{
                            background: `radial-gradient(circle at top right, ${coach.accent}16 0%, transparent 32%)`,
                          }}
                        />

                        <div className="relative z-10 flex h-full flex-col justify-between">
                          <div>
                            <p className="text-base leading-8 text-white/70">
                              {coach.description}
                            </p>

                            <div className="mt-7 rounded-[26px] border border-white/10 bg-black/20 p-5 backdrop-blur-md">
                              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                                Philosophie d’encadrement
                              </p>
                              <p className="mt-3 text-base leading-8 text-white/72">
                                {coach.philosophy}
                              </p>
                            </div>

                            <div className="mt-7">
                              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                                Axes forts
                              </p>

                              <div className="mt-4 flex flex-wrap gap-3">
                                {coach.strengths.map((strength) => (
                                  <span
                                    key={strength}
                                    className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white/82"
                                    style={{
                                      boxShadow: `0 0 18px ${coach.accent}12`,
                                    }}
                                  >
                                    {strength}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="mt-7 rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
                              <div className="flex items-start gap-3">
                                <div
                                  className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]"
                                  style={{ color: coach.accent }}
                                >
                                  <ShieldCheck size={18} />
                                </div>

                                <div>
                                  <p className="text-sm font-semibold text-white">
                                    Vision d’encadrement
                                  </p>
                                  <p className="mt-2 text-sm leading-7 text-white/62">
                                    Un accompagnement structuré, exigeant et
                                    humain pour faire progresser durablement
                                    chaque profil.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Button asChild variant="secondary" size="lg">
                              <Link href="/contact">Échanger avec le club</Link>
                            </Button>

                            <Button asChild variant="primary" size="lg">
                              <Link href="/inscription">
                                Rejoindre le club
                                <ArrowRight size={16} />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}