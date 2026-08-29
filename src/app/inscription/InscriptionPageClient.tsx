// /app/inscription/InscriptionPageClient.tsx
"use client";

// =====================================================
// IMPORTS
// =====================================================
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import {
  UserPlus,
  ChevronRight,
  Send,
  CalendarDays,
  Phone,
  Mail,
  CheckCircle2,
  Crown,
  ClipboardCheck,
  ChevronDown,
  Download,
  Printer,
  FileText,
  MapPin,
  Info,
} from "lucide-react";


// =====================================================
// FICHES D’INSCRIPTION À TÉLÉCHARGER
// Les PDF vivent dans public/documents/ — pour la saison
// suivante, remplacer le fichier et mettre à jour season.
// =====================================================
type InscriptionFile = {
  slug: string;
  short: string;
  name: string;
  address: string;
  price: string;
  file: string;
  accent: string;
  glow: string;
};

const INSCRIPTION_FILES: InscriptionFile[] = [
  {
    slug: "bctn",
    short: "BCTN",
    name: "Boxing Club Tours Nord",
    address: "81 avenue de l’Europe, 37100 Tours",
    price: "Adulte +16 ans 210 € · École de boxe 200 €",
    file: "/documents/fiche-inscription-bctn-2026-2027.pdf",
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.20)",
  },
  {
    slug: "bclr",
    short: "BCLR",
    name: "Boxing Club La Riche",
    address: "Gymnase J.M Bialy, 6 rue du Petit Plessis, 37520 La Riche",
    price: "Adulte +16 ans 210 € · École de boxe 200 €",
    file: "/documents/fiche-inscription-bclr-2026-2027.pdf",
    accent: "#ef4444",
    glow: "rgba(239,68,68,0.20)",
  },
  {
    slug: "bctm",
    short: "BCTM",
    name: "Boxing Club Tours Métropole",
    address: "Gymnase du Hallebardier, allée Yvon Gilbert, 37000 Tours",
    price: "Adulte +16 ans 230 € · École de boxe 200 €",
    file: "/documents/fiche-inscription-bctm-2026-2027.pdf",
    accent: "#ffffff",
    glow: "rgba(255,255,255,0.14)",
  },
];

const INSCRIPTION_DOCUMENTS: string[] = [
  "La fiche de renseignements complétée en MAJUSCULES et signée",
  "1 photo d’identité",
  "Un certificat médical de moins de 3 ans ou le questionnaire de santé",
  "Le règlement de la cotisation",
];

// =====================================================
// TYPES
// =====================================================
type MobileStepKey = "request" | "orientation" | "entry";

// =====================================================
// PAGE INSCRIPTION PREMIUM
// VERSION MOBILE ULTRA COMPACTE + SEO READY
// =====================================================
export default function InscriptionPageClient() {
  // ---------------------------------------------------
  // Accordéon mobile
  // ---------------------------------------------------
  const [openMobileStep, setOpenMobileStep] = useState<MobileStepKey | null>(
    "request"
  );

  const toggleMobileStep = (step: MobileStepKey) => {
    setOpenMobileStep((prev) => (prev === step ? null : step));
  };

  return (
    <>
      {/* =================================
          HEADER
      ================================= */}
      <Navbar />

      {/* =================================
          CONTENU PRINCIPAL
      ================================= */}
      <main className="bg-[#0a0a0a] text-white">
        {/* =================================================
            HERO INSCRIPTION PREMIUM
            VERSION MOBILE ULTRA COMPACTE
        ================================================= */}
        <section className="relative overflow-hidden border-b border-white/10 pt-[120px] pb-8 md:pt-[185px] md:pb-20 lg:pb-24">
          {/* ---------------------------------------------
              DÉCORS DE FOND
          --------------------------------------------- */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-0 h-44 w-44 rounded-full bg-amber-300/10 blur-3xl md:h-72 md:w-72 md:bg-amber-300/12" />
            <div className="absolute right-0 top-10 h-44 w-44 rounded-full bg-red-500/8 blur-3xl md:h-72 md:w-72 md:bg-red-500/10" />
            <div className="absolute bottom-0 left-1/3 h-36 w-36 rounded-full bg-white/5 blur-3xl md:h-64 md:w-64" />

            <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#0a0a0a] to-[#050505]" />
            <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(135deg,rgba(255,255,255,0.30)_1px,transparent_1px)] [background-size:22px_22px] md:opacity-[0.045] md:[background-size:28px_28px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_42%)]" />
            <div className="inscription-light-sweep absolute inset-y-0 left-[-20%] hidden w-[35%] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent blur-2xl md:block" />
          </div>

          {/* ---------------------------------------------
              ONDES PREMIUM DESKTOP
          --------------------------------------------- */}
          <div className="pointer-events-none absolute inset-0 hidden items-center justify-center md:flex">
            <div className="relative h-[380px] w-[380px]">
              <div className="inscription-ring inscription-ring-1 absolute inset-0 rounded-full border border-white/8" />
              <div className="inscription-ring inscription-ring-2 absolute inset-[28px] rounded-full border border-amber-300/10" />
              <div className="inscription-ring inscription-ring-3 absolute inset-[58px] rounded-full border border-red-400/10" />
              <div className="absolute inset-[118px] rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm" />
            </div>
          </div>

          {/* ---------------------------------------------
              CONTENU HERO
          --------------------------------------------- */}
          <div className="container-custom relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.56rem] font-bold uppercase tracking-[0.12em] text-amber-300 shadow-[0_8px_20px_rgba(0,0,0,0.16)] backdrop-blur-md sm:px-3 sm:py-1.5 sm:text-[0.62rem] md:px-4 md:py-2 md:text-[0.72rem] md:tracking-[0.18em]">
                <UserPlus size={11} className="md:h-[14px] md:w-[14px]" />
                Accès au club
              </span>

              <h1 className="mt-3 text-[2rem] font-black uppercase leading-[0.9] tracking-[0.025em] text-white sm:text-[2.5rem] md:mt-5 md:text-6xl md:tracking-[0.04em] xl:text-7xl">
                Entrez dans
                <br className="hidden sm:block" />
                <span className="block bg-gradient-to-r from-white via-amber-300 to-red-500 bg-clip-text text-transparent">
                  l’expérience boxing club
                </span>
              </h1>

              <p className="mx-auto mt-3 max-w-[23rem] text-[0.88rem] leading-5 text-white/68 sm:max-w-[31rem] sm:text-[0.94rem] sm:leading-6 md:mt-5 md:max-w-3xl md:text-lg md:leading-7">
                Votre inscription marque le départ d’une progression encadrée,
                structurée et adaptée à votre profil.
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 md:mt-8 md:gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/80 sm:px-3 sm:py-1.5 sm:text-[0.72rem] md:px-4 md:py-2 md:text-xs">
                  Entrée progressive
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/80 sm:px-3 sm:py-1.5 sm:text-[0.72rem] md:px-4 md:py-2 md:text-xs">
                  Orientation personnalisée
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/80 sm:px-3 sm:py-1.5 sm:text-[0.72rem] md:px-4 md:py-2 md:text-xs">
                  Tous profils
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            SECTION PRINCIPALE
        ================================================= */}
        <section className="relative overflow-hidden py-8 md:py-16 lg:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-4rem] top-16 h-40 w-40 rounded-full bg-amber-300/10 blur-3xl md:h-56 md:w-56" />
            <div className="absolute right-[-4rem] bottom-10 h-40 w-40 rounded-full bg-red-500/8 blur-3xl md:h-56 md:w-56" />
          </div>

          <div className="container-custom relative z-10">
            <div className="grid gap-4 md:gap-8 xl:grid-cols-[0.92fr_1.08fr]">
              {/* =========================================
                  COLONNE GAUCHE
              ========================================= */}
              <div className="space-y-4 md:space-y-6">
                {/* =====================================
                    VERSION MOBILE PROCESSUS
                ===================================== */}
                <div className="space-y-3 md:hidden">
                  <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.05] p-4 shadow-[0_14px_30px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-amber-300 via-white/60 to-red-500 opacity-90" />

                    <div className="relative z-10">
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-amber-300">
                        Parcours d’entrée
                      </p>

                      <h2 className="mt-3 text-[1.5rem] font-black leading-[0.96] text-white">
                        Une inscription pensée avec méthode
                      </h2>

                      <p className="mt-3 text-[0.88rem] leading-6 text-white/68">
                        Une démarche claire pour intégrer le club dans les
                        bonnes conditions.
                      </p>
                    </div>
                  </div>

                  {/* Step 1 */}
                  <article className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.05] shadow-[0_14px_30px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                    <button
                      type="button"
                      onClick={() => toggleMobileStep("request")}
                      className="flex w-full items-center gap-3 px-4 py-4 text-left"
                      aria-expanded={openMobileStep === "request"}
                    >
                      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/10 text-amber-300">
                        <ClipboardCheck size={18} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-[1rem] font-black text-white">
                          1. Déposez votre demande
                        </h3>
                        <p className="mt-1 text-[0.82rem] leading-5 text-white/58">
                          Coordonnées, discipline et niveau
                        </p>
                      </div>

                      <div
                        className={`shrink-0 transition-transform duration-300 ${
                          openMobileStep === "request" ? "rotate-180" : ""
                        }`}
                      >
                        <ChevronDown size={20} className="text-white/70" />
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        openMobileStep === "request"
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-80"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-white/10 px-4 pb-4 pt-3">
                          <p className="text-[0.84rem] leading-6 text-white/68">
                            Remplissez le formulaire avec vos informations
                            essentielles pour permettre au club d’évaluer votre
                            demande correctement.
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>

                  {/* Step 2 */}
                  <article className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.05] shadow-[0_14px_30px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                    <button
                      type="button"
                      onClick={() => toggleMobileStep("orientation")}
                      className="flex w-full items-center gap-3 px-4 py-4 text-left"
                      aria-expanded={openMobileStep === "orientation"}
                    >
                      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-red-400/20 bg-red-500/10 text-red-400">
                        <CalendarDays size={18} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-[1rem] font-black text-white">
                          2. Le club vous oriente
                        </h3>
                        <p className="mt-1 text-[0.82rem] leading-5 text-white/58">
                          Réponse et orientation personnalisée
                        </p>
                      </div>

                      <div
                        className={`shrink-0 transition-transform duration-300 ${
                          openMobileStep === "orientation" ? "rotate-180" : ""
                        }`}
                      >
                        <ChevronDown size={20} className="text-white/70" />
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        openMobileStep === "orientation"
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-80"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-white/10 px-4 pb-4 pt-3">
                          <p className="text-[0.84rem] leading-6 text-white/68">
                            Le club vous guide selon votre niveau, votre
                            objectif et la discipline la plus pertinente pour
                            vous.
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>

                  {/* Step 3 */}
                  <article className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.05] shadow-[0_14px_30px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                    <button
                      type="button"
                      onClick={() => toggleMobileStep("entry")}
                      className="flex w-full items-center gap-3 px-4 py-4 text-left"
                      aria-expanded={openMobileStep === "entry"}
                    >
                      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.08] text-white">
                        <CheckCircle2 size={18} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-[1rem] font-black text-white">
                          3. Vous entrez dans la dynamique
                        </h3>
                        <p className="mt-1 text-[0.82rem] leading-5 text-white/58">
                          Intégration dans le cadre du club
                        </p>
                      </div>

                      <div
                        className={`shrink-0 transition-transform duration-300 ${
                          openMobileStep === "entry" ? "rotate-180" : ""
                        }`}
                      >
                        <ChevronDown size={20} className="text-white/70" />
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        openMobileStep === "entry"
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-80"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-white/10 px-4 pb-4 pt-3">
                          <p className="text-[0.84rem] leading-6 text-white/68">
                            Une fois orienté, vous pouvez amorcer votre entrée
                            dans un environnement sérieux, progressif et
                            motivant.
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>

                  {/* Carte identité mobile */}
                  <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_14px_30px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-300/10 via-transparent to-red-500/8" />

                    <div className="relative z-10">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-white">
                        <Crown size={18} />
                      </div>

                      <h3 className="mt-3 text-[1.2rem] font-black leading-[1.02] text-white">
                        Plus qu’une inscription,
                        <br />
                        une entrée dans une identité
                      </h3>

                      <p className="mt-3 text-[0.88rem] leading-6 text-white/65">
                        Le club vous accueille dans un univers de progression,
                        d’exigence et d’engagement collectif.
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[0.72rem] font-semibold text-white/75">
                          Discipline
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[0.72rem] font-semibold text-white/75">
                          Respect
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[0.72rem] font-semibold text-white/75">
                          Progression
                        </span>
                      </div>

                      <div className="mt-4">
                        <Link
                          href="/historique"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition hover:text-white"
                        >
                          Découvrir l’esprit du club
                          <ChevronRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* =====================================
                    VERSION DESKTOP PROCESSUS
                ===================================== */}
                <div className="hidden space-y-6 md:block">
                  <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] p-7 shadow-[0_18px_40px_rgba(0,0,0,0.20)] backdrop-blur-xl">
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-amber-300 via-white/60 to-red-500 opacity-90" />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_28%)]" />

                    <div className="relative z-10">
                      <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-amber-300">
                        Parcours d’entrée
                      </p>

                      <h2 className="mt-3 text-3xl font-black text-white">
                        Une inscription pensée avec méthode
                      </h2>

                      <p className="mt-4 text-sm leading-7 text-white/68 md:text-base">
                        Nous avons conçu une démarche claire pour faciliter
                        votre entrée au club, tout en respectant votre niveau,
                        votre rythme et vos objectifs.
                      </p>

                      <div className="mt-7 space-y-4">
                        <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                          <div className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-300/20 bg-amber-300/10 text-amber-300">
                            <ClipboardCheck size={18} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">
                              1. Déposez votre demande
                            </p>
                            <p className="mt-1 text-sm leading-6 text-white/60">
                              Remplissez le formulaire avec vos coordonnées,
                              votre discipline souhaitée et votre niveau.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                          <div className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-red-400/20 bg-red-500/10 text-red-400">
                            <CalendarDays size={18} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">
                              2. Le club vous oriente
                            </p>
                            <p className="mt-1 text-sm leading-6 text-white/60">
                              Nous revenons vers vous pour préciser les
                              conditions d’intégration et vous guider vers la
                              bonne pratique.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                          <div className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] text-white">
                            <CheckCircle2 size={18} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">
                              3. Vous entrez dans la dynamique
                            </p>
                            <p className="mt-1 text-sm leading-6 text-white/60">
                              Une fois orienté, vous pouvez amorcer votre entrée
                              dans un cadre sérieux, motivant et structuré.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-300/10 via-transparent to-red-500/8" />

                    <div className="relative z-10">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-white">
                        <Crown size={22} />
                      </div>

                      <h3 className="mt-4 text-2xl font-black text-white">
                        Plus qu’une inscription,
                        <br />
                        une entrée dans une identité
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-white/65 md:text-base">
                        Le club vous accueille dans un univers de progression,
                        d’exigence et d’engagement collectif. Chaque entrée est
                        pensée comme un vrai départ.
                      </p>

                      <div className="mt-5 flex flex-wrap gap-3">
                        <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/75">
                          Discipline
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/75">
                          Respect
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/75">
                          Progression
                        </span>
                      </div>

                      <div className="mt-5">
                        <Link
                          href="/historique"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition hover:text-white"
                        >
                          Découvrir l’esprit du club
                          <ChevronRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* =========================================
                  COLONNE DROITE
                  FORMULAIRE D’ADHÉSION PREMIUM
              ========================================= */}
              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.04] p-5 shadow-[0_16px_34px_rgba(0,0,0,0.18)] backdrop-blur-xl md:rounded-[34px] md:p-8 md:shadow-[0_20px_50px_rgba(0,0,0,0.24)]">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-amber-300 via-white/60 to-red-500 opacity-95" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.09),transparent_30%)]" />

                <div className="inscription-badge-pulse pointer-events-none absolute right-5 top-5 hidden rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-amber-300 md:block">
                  Sélection club
                </div>

                <div className="relative z-10">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-amber-300 md:text-[0.72rem] md:tracking-[0.18em]">
                    Dossier d’adhésion
                  </p>

                  <h2 className="mt-3 text-[1.7rem] font-black leading-[0.96] text-white md:text-4xl">
                    Déposez votre candidature sportive
                  </h2>

                  <p className="mt-3 max-w-2xl text-[0.88rem] leading-6 text-white/68 md:mt-4 md:text-base md:leading-7">
                    Remplissez ce formulaire pour amorcer votre entrée au club.
                    Plus votre demande est claire, plus l’orientation sera
                    précise.
                  </p>

                  <form className="mt-6 grid gap-4 md:mt-8 md:gap-5">
                    <div>
                      <label className="mb-2 block text-[0.86rem] font-semibold text-white md:text-sm">
                        Nom complet
                      </label>
                      <Input type="text" placeholder="Votre nom complet" />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 md:gap-5">
                      <div>
                        <label className="mb-2 block text-[0.86rem] font-semibold text-white md:text-sm">
                          Email
                        </label>
                        <Input type="email" placeholder="Votre email" />
                      </div>

                      <div>
                        <label className="mb-2 block text-[0.86rem] font-semibold text-white md:text-sm">
                          Téléphone
                        </label>
                        <Input type="tel" placeholder="Votre numéro" />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-[0.86rem] font-semibold text-white md:text-sm">
                        Discipline souhaitée
                      </label>
                      <Select defaultValue="">
                        <option value="" disabled>
                          Choisir une discipline
                        </option>
                        <option value="kickboxing">Kickboxing</option>
                        <option value="k1-rules">K1 Rules</option>
                        <option value="full-contact">Full Contact</option>
                        <option value="low-kick">Low Kick</option>
                        <option value="point-fighting">Point Fighting</option>
                      </Select>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 md:gap-5">
                      <div>
                        <label className="mb-2 block text-[0.86rem] font-semibold text-white md:text-sm">
                          Votre niveau
                        </label>
                        <Select defaultValue="">
                          <option value="" disabled>
                            Choisir votre niveau
                          </option>
                          <option value="debutant">Débutant</option>
                          <option value="intermediaire">Intermédiaire</option>
                          <option value="confirme">Confirmé</option>
                          <option value="competiteur">Compétiteur</option>
                        </Select>
                      </div>

                      <div>
                        <label className="mb-2 block text-[0.86rem] font-semibold text-white md:text-sm">
                          Objectif principal
                        </label>
                        <Select defaultValue="">
                          <option value="" disabled>
                            Choisir un objectif
                          </option>
                          <option value="decouverte">Découverte</option>
                          <option value="remise-en-forme">Remise en forme</option>
                          <option value="perfectionnement">
                            Perfectionnement
                          </option>
                          <option value="competition">Compétition</option>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-[0.86rem] font-semibold text-white md:text-sm">
                        Message complémentaire
                      </label>
                      <Textarea
                        rows={5}
                        placeholder="Précisez vos disponibilités, votre motivation ou tout élément utile..."
                      />
                    </div>

                    <div className="grid gap-3 rounded-[18px] border border-white/8 bg-white/[0.04] p-4 md:rounded-2xl">
                      <div className="flex items-center gap-3">
                        <Phone size={16} className="text-red-400" />
                        <p className="text-[0.84rem] leading-6 text-white/70 md:text-sm">
                          Le club pourra vous recontacter par téléphone pour
                          confirmer l’orientation ou une séance d’essai.
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <Mail size={16} className="text-amber-300" />
                        <p className="text-[0.84rem] leading-6 text-white/70 md:text-sm">
                          Une réponse par email vous sera envoyée après étude de
                          votre demande.
                        </p>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      variant="gold"
                      size="lg"
                      className="group"
                    >
                      Envoyer ma demande
                      <Send
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            DOSSIER D’INSCRIPTION — FICHES À TÉLÉCHARGER
        ================================================= */}
        <section className="relative overflow-hidden border-t border-white/10 py-8 md:py-16 lg:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-4rem] top-12 h-40 w-40 rounded-full bg-amber-300/10 blur-3xl md:h-56 md:w-56" />
            <div className="absolute right-[-4rem] bottom-10 h-40 w-40 rounded-full bg-red-500/10 blur-3xl md:h-56 md:w-56" />
          </div>

          <div className="container-custom relative z-10 mx-auto max-w-6xl">
            {/* En-tête */}
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-amber-300 backdrop-blur-md md:px-4 md:py-2 md:text-[0.72rem] md:tracking-[0.18em]">
                <FileText size={13} />
                Dossier d’inscription 2026 - 2027
              </span>

              <h2 className="mt-4 text-[1.7rem] font-black uppercase leading-[0.96] tracking-[0.02em] text-white sm:text-[2rem] md:mt-5 md:text-4xl lg:text-5xl">
                Téléchargez votre fiche d’inscription
              </h2>

              <p className="mt-3 text-[0.9rem] leading-6 text-white/70 md:mt-4 md:text-base md:leading-7">
                Choisissez votre salle, imprimez la fiche, remplissez-la en
                majuscules et rapportez-la au club avec les pièces demandées.
              </p>
            </div>

            {/* Cartes par club */}
            <div className="mt-6 grid gap-4 md:mt-12 md:gap-6 lg:grid-cols-3">
              {INSCRIPTION_FILES.map((club) => (
                <article
                  key={club.slug}
                  className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.05] p-5 shadow-[0_14px_30px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-colors duration-300 hover:border-white/20 md:rounded-[28px] md:p-7"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-[2px]"
                    style={{
                      background: `linear-gradient(to right, ${club.accent}, rgba(255,255,255,0.45), transparent)`,
                    }}
                  />

                  <div
                    className="pointer-events-none absolute inset-0 opacity-70"
                    style={{
                      background: `radial-gradient(circle at top right, ${club.glow} 0%, transparent 42%)`,
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p
                          className="text-[0.68rem] font-bold uppercase tracking-[0.16em]"
                          style={{ color: club.accent }}
                        >
                          {club.short}
                        </p>
                        <h3 className="mt-1.5 text-[1.05rem] font-black leading-5 text-white md:text-xl">
                          {club.name}
                        </h3>
                      </div>

                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/25 text-white/70">
                        <FileText size={18} />
                      </span>
                    </div>

                    <p className="mt-4 flex items-start gap-2 text-[0.84rem] leading-5 text-white/62">
                      <MapPin size={14} className="mt-0.5 shrink-0" />
                      {club.address}
                    </p>

                    <div className="mt-4 rounded-[16px] border border-white/10 bg-black/20 p-3.5">
                      <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-white/50">
                        Cotisation saison
                      </p>
                      <p className="mt-1.5 text-[0.86rem] font-semibold text-white/85">
                        {club.price}
                      </p>
                    </div>

                    <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                      <a
                        href={club.file}
                        download
                        className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full bg-red-600 px-4 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(220,38,38,0.24)] transition-all duration-300 hover:bg-red-700"
                      >
                        <Download size={16} />
                        Télécharger
                      </a>

                      <a
                        href={club.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                      >
                        <Printer size={16} />
                        Imprimer
                      </a>
                    </div>

                    <p className="mt-3 text-center text-[0.68rem] text-white/40">
                      PDF A4 · 1 page
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Pièces à fournir */}
            <div className="mt-4 grid gap-4 md:mt-8 md:gap-6 lg:grid-cols-2">
              <div className="rounded-[22px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl md:rounded-[28px] md:p-7">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-amber-300 md:text-[0.7rem]">
                  À rapporter au club
                </p>

                <ul className="mt-4 space-y-3">
                  {INSCRIPTION_DOCUMENTS.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[0.88rem] leading-6 text-white/70"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-amber-300"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl md:rounded-[28px] md:p-7">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-amber-300/10" />

                <div className="relative z-10">
                  <p className="inline-flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-amber-300 md:text-[0.7rem]">
                    <Info size={14} />
                    Moyens de paiement
                  </p>

                  <p className="mt-4 text-[0.88rem] leading-6 text-white/70">
                    Espèces, ANCV, Pass’Sport (dispositif de l’État), Passeport
                    Loisirs Jeunes (CAF) et chèques avec facilités de paiement
                    jusqu’à 3 fois.
                  </p>

                  <p className="mt-4 inline-flex rounded-full border border-red-500/25 bg-red-500/10 px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-red-300">
                    Pas de carte bancaire
                  </p>

                  <p className="mt-4 text-[0.82rem] leading-5 text-white/50">
                    Le règlement reste acquis au club, aucun remboursement n’est
                    effectué. La cotisation comprend l’assurance obligatoire en
                    cas d’accident.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =================================
          FOOTER
      ================================= */}
      <Footer />

      {/* =================================
          STYLES / ANIMATIONS LOCALES
      ================================= */}
      <style jsx>{`
        .inscription-light-sweep {
          animation: lightSweep 8s ease-in-out infinite;
        }

        .inscription-ring {
          animation: ringPulse 5.8s ease-in-out infinite;
        }

        .inscription-ring-2 {
          animation-delay: 0.8s;
        }

        .inscription-ring-3 {
          animation-delay: 1.6s;
        }

        .inscription-badge-pulse {
          animation: badgePulse 2.8s ease-in-out infinite;
        }

        @keyframes lightSweep {
          0%,
          100% {
            transform: translateX(-10%) skewX(-12deg);
            opacity: 0;
          }
          18% {
            opacity: 0.35;
          }
          50% {
            transform: translateX(230%) skewX(-12deg);
            opacity: 0.22;
          }
          70% {
            opacity: 0;
          }
        }

        @keyframes ringPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.38;
          }
          50% {
            transform: scale(1.045);
            opacity: 0.18;
          }
        }

        @keyframes badgePulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 rgba(251, 191, 36, 0);
          }
          50% {
            transform: scale(1.03);
            box-shadow: 0 0 24px rgba(251, 191, 36, 0.16);
          }
        }
      `}</style>
    </>
  );
}
