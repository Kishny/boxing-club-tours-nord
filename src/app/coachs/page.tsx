"use client";

// =====================================================
// IMPORTS
// =====================================================
"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  Dumbbell,
  ShieldCheck,
  Sparkles,
  Users,
  Target,
  Flame,
} from "lucide-react";

// =====================================================
// TYPE DES COACHS
// =====================================================
type Coach = {
  id: number;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  description: string;
  philosophy: string;
  strengths: string[];
  image: string;
  accent: string;
};

// =====================================================
// DONNÉES DES COACHS
// Remplace les images et les contenus par les vraies infos
// =====================================================
const coaches: Coach[] = [
  {
    id: 1,
    name: "Coach Principal",
    role: "Head Coach",
    specialty: "Kickboxing • K1 Rules",
    experience: "Encadrement technique & progression compétitive",
    description:
      "Un encadrement exigeant, structuré et moderne, avec une vraie attention portée à la progression individuelle et à la qualité du travail technique.",
    philosophy:
      "Former des pratiquants solides, disciplinés et capables de progresser durablement dans un cadre clair et motivant.",
    strengths: ["Technique", "Exigence", "Lecture du combat"],
    image: "/images/coach-1.png",
    accent: "#ef4444",
  },
  {
    id: 2,
    name: "Coach Technique",
    role: "Technique Coach",
    specialty: "Full Contact • Low Kick",
    experience: "Construction gestuelle & précision du travail debout",
    description:
      "Un profil orienté précision, répétition, maîtrise des bases et développement des automatismes dans une logique de progression propre.",
    philosophy:
      "Construire une boxe lisible, efficace et disciplinée, en travaillant avec rigueur les fondamentaux et l’intelligence de combat.",
    strengths: ["Précision", "Structure", "Pédagogie"],
    image: "/images/coach-2.png",
    accent: "#f59e0b",
  },
  {
    id: 3,
    name: "Coach Performance",
    role: "Performance Coach",
    specialty: "Condition physique • Vitesse • Réactivité",
    experience: "Préparation physique & intensité d’entraînement",
    description:
      "Un accompagnement orienté engagement, explosivité, mobilité et montée en puissance, pour renforcer l’impact global du pratiquant.",
    philosophy:
      "Faire émerger un mental fort, une condition solide et une présence physique capable de soutenir le travail technique dans la durée.",
    strengths: ["Cardio", "Explosivité", "Mental"],
    image: "/images/coach-3.png",
    accent: "#facc15",
  },
];

// =====================================================
// COMPOSANT PAGE COACHS PREMIUM
// =====================================================
export default function CoachesPage() {
  // ---------------------------------------------------
  // Etat d'ouverture des cartes sur mobile
  // ---------------------------------------------------
  const [openCoachId, setOpenCoachId] = useState<number | null>(1);

  // ---------------------------------------------------
  // Ouvre / ferme une carte mobile
  // ---------------------------------------------------
  const toggleCoach = (coachId: number) => {
    setOpenCoachId((prev) => (prev === coachId ? null : coachId));
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
        {/* =================================================
            HERO PREMIUM
        ================================================= */}
        <section className="relative overflow-hidden border-b border-white/10 pt-[150px] pb-16 md:pt-[185px] md:pb-20 lg:pb-24">
          {/* ---------------------------------------------
              DÉCORS DE FOND
          --------------------------------------------- */}
          <div className="pointer-events-none absolute inset-0">
            {/* Halos */}
            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-red-600/18 blur-3xl" />
            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-amber-400/14 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-white/6 blur-3xl" />

            {/* Dégradé */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#0a0a0a] to-[#050505]" />

            {/* Trame technique */}
            <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.30)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.30)_1px,transparent_1px)] [background-size:34px_34px]" />

            {/* Lignes diagonales */}
            <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(135deg,rgba(255,255,255,0.30)_1px,transparent_1px)] [background-size:28px_28px]" />

            {/* Anneaux centraux */}
            <div className="absolute inset-0 hidden items-center justify-center md:flex">
              <div className="relative h-[420px] w-[420px]">
                <div className="absolute inset-0 rounded-full border border-white/8" />
                <div className="absolute inset-[34px] rounded-full border border-red-500/10" />
                <div className="absolute inset-[68px] rounded-full border border-amber-300/12" />
                <div className="absolute inset-[114px] rounded-full border border-white/8 bg-white/[0.02]" />
              </div>
            </div>

            {/* Voile */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_40%)]" />
          </div>

          {/* ---------------------------------------------
              CONTENU HERO
          --------------------------------------------- */}
          <div className="container-custom relative z-10">
            <div className="mx-auto max-w-5xl text-center">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-amber-300 shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-md">
                <Sparkles size={14} />
                Encadrement du club
              </span>

              {/* Titre */}
              <h1 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-[0.04em] text-white sm:text-5xl md:text-6xl xl:text-7xl">
                Les coachs qui
                <br className="hidden sm:block" />
                <span className="block bg-gradient-to-r from-red-500 via-white to-amber-300 bg-clip-text text-transparent">
                  façonnent la progression
                </span>
              </h1>

              {/* Intro */}
              <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base md:text-lg">
                L’encadrement du club repose sur l’exigence, la pédagogie, la
                lecture technique et l’accompagnement humain. Découvrez celles
                et ceux qui transmettent l’identité du Boxing Club.
              </p>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/80">
                  Exigence
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/80">
                  Pédagogie
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

        {/* =================================================
            BLOC INTRO / MÉTHODE
        ================================================= */}
        <section className="relative overflow-hidden py-12 md:py-14 lg:py-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-10 h-48 w-48 rounded-full bg-red-600/10 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-52 w-52 rounded-full bg-amber-400/10 blur-3xl" />
          </div>

          <div className="container-custom relative z-10">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Carte 1 */}
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

              {/* Carte 2 */}
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

              {/* Carte 3 */}
              <div className="rounded-[30px] border border-white/10 bg-white/[0.05] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.08] text-white">
                  <Dumbbell size={22} />
                </div>
                <h2 className="mt-4 text-2xl font-black text-white">
                  Travail exigeant
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/65 md:text-base">
                  L’objectif reste le même : faire grandir chaque pratiquant dans
                  un environnement solide, motivant et fidèle à l’esprit du club.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            SECTION COACHS
            MOBILE : cartes compactes et dépliantes
            DESKTOP : grandes cartes premium
        ================================================= */}
        <section className="relative overflow-hidden pb-14 md:pb-16 lg:pb-20">
          <div className="container-custom relative z-10">
            <div className="flex flex-col gap-8 md:gap-10">
              {coaches.map((coach, index) => {
                const isOpen = openCoachId === coach.id;
                const isEven = index % 2 === 0;

                return (
                  <article
                    key={coach.id}
                    className="rounded-[34px] border border-white/10 bg-white/[0.05] shadow-[0_20px_46px_rgba(0,0,0,0.22)] backdrop-blur-xl overflow-hidden"
                  >
                    {/* =====================================
                        VERSION MOBILE / TABLETTE
                        Carte compacte dépliante
                    ===================================== */}
                    <div className="block xl:hidden">
                      {/* Header carte mobile */}
                      <button
                        type="button"
                        onClick={() => toggleCoach(coach.id)}
                        className="flex w-full items-center gap-4 p-4 text-left sm:p-5"
                        aria-expanded={isOpen}
                      >
                        {/* Avatar compact */}
                        <div
                          className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06]"
                          style={{
                            boxShadow: `0 0 24px ${coach.accent}22`,
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

                        {/* Infos compactes */}
                        <div className="min-w-0 flex-1">
                          <p
                            className="text-[0.68rem] font-bold uppercase tracking-[0.16em]"
                            style={{ color: coach.accent }}
                          >
                            {coach.role}
                          </p>

                          <h2 className="mt-1 text-lg font-black text-white sm:text-xl">
                            {coach.name}
                          </h2>

                          <p className="mt-1 text-sm text-white/60">
                            {coach.specialty}
                          </p>
                        </div>

                        {/* Chevron */}
                        <div
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          <ChevronDown size={22} className="text-white/70" />
                        </div>
                      </button>

                      {/* Contenu dépliant mobile */}
                      <div
                        className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-80"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="border-t border-white/10 px-4 pb-5 pt-4 sm:px-5">
                            {/* Ligne accent */}
                            <div
                              className="mb-4 h-[2px] w-full rounded-full"
                              style={{
                                background: `linear-gradient(to right, ${coach.accent}, rgba(255,255,255,0.4), transparent)`,
                              }}
                            />

                            <p className="text-sm leading-7 text-white/68">
                              {coach.description}
                            </p>

                            <div className="mt-4 rounded-[22px] border border-white/8 bg-white/[0.04] p-4">
                              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                                Philosophie
                              </p>
                              <p className="mt-2 text-sm leading-7 text-white/68">
                                {coach.philosophy}
                              </p>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2.5">
                              {coach.strengths.map((strength) => (
                                <span
                                  key={strength}
                                  className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[0.72rem] font-semibold text-white/80"
                                >
                                  {strength}
                                </span>
                              ))}
                            </div>

                            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                              <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/[0.12]"
                              >
                                Contacter le club
                              </Link>

                              <Link
                                href="/inscription"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-red-600 hover:text-white"
                              >
                                S’inscrire
                                <ArrowRight size={16} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* =====================================
                        VERSION DESKTOP
                        Grande carte premium
                    ===================================== */}
                    <div
                      className={`hidden xl:grid xl:grid-cols-[0.92fr_1.08fr] ${
                        isEven ? "" : ""
                      }`}
                    >
                      {/* Bloc image / impact */}
                      <div
                        className={`relative min-h-[420px] overflow-hidden ${
                          isEven ? "order-1" : "order-2"
                        }`}
                      >
                        {/* Image */}
                        <div className="absolute inset-0">
                          <Image
                            src={coach.image}
                            alt={coach.name}
                            fill
                            sizes="(max-width: 1280px) 50vw, 40vw"
                            className="object-cover"
                          />
                        </div>

                        {/* Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/15 to-black/65" />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `radial-gradient(circle at top right, ${coach.accent}28 0%, transparent 34%)`,
                          }}
                        />

                        {/* Lignes techniques */}
                        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(135deg,rgba(255,255,255,0.45)_1px,transparent_1px)] [background-size:28px_28px]" />

                        {/* Contenu image */}
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

                      {/* Bloc texte / contenu */}
                      <div
                        className={`relative overflow-hidden p-8 lg:p-10 ${
                          isEven ? "order-2" : "order-1"
                        }`}
                      >
                        {/* Accent */}
                        <div
                          className="absolute inset-x-0 top-0 h-[2px]"
                          style={{
                            background: `linear-gradient(to right, ${coach.accent}, rgba(255,255,255,0.5), transparent)`,
                          }}
                        />

                        {/* Halo interne */}
                        <div
                          className="pointer-events-none absolute inset-0"
                          style={{
                            background: `radial-gradient(circle at top right, ${coach.accent}16 0%, transparent 32%)`,
                          }}
                        />

                        <div className="relative z-10 flex h-full flex-col justify-between">
                          <div>
                            {/* Intro */}
                            <p className="text-base leading-8 text-white/70">
                              {coach.description}
                            </p>

                            {/* Philosophie */}
                            <div className="mt-7 rounded-[26px] border border-white/10 bg-black/20 p-5 backdrop-blur-md">
                              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                                Philosophie d’encadrement
                              </p>
                              <p className="mt-3 text-base leading-8 text-white/72">
                                {coach.philosophy}
                              </p>
                            </div>

                            {/* Forces */}
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
                          </div>

                          {/* CTA */}
                          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                              href="/contact"
                              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.12]"
                            >
                              Échanger avec le club
                            </Link>

                            <Link
                              href="/inscription"
                              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-[1px] hover:bg-red-600 hover:text-white"
                            >
                              Rejoindre le club
                              <ArrowRight size={16} />
                            </Link>
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

      {/* =================================
          FOOTER
      ================================= */}
      <Footer />
    </>
  );
}