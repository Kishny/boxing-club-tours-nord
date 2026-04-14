"use client";

// =====================================================
// IMPORTS
// =====================================================
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  ShieldCheck,
  UserPlus,
  ChevronRight,
  Send,
  CalendarDays,
  Dumbbell,
  Sparkles,
  Phone,
  Mail,
  CheckCircle2,
  Crown,
  ClipboardCheck,
} from "lucide-react";

// =====================================================
// PAGE INSCRIPTION PREMIUM
// VERSION REMANIÉE POUR LA DIFFÉRENCIER DE CONTACT
// - Plus "adhésion / accès au club / prestige"
// - Palette graphite / or / blanc / rouge ciblé
// - Animations différentes : pulse, halo, balayage
// =====================================================
export default function InscriptionPage() {
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
            Identité visuelle différente de la page contact
        ================================================= */}
        <section className="relative overflow-hidden border-b border-white/10 pt-[150px] pb-16 md:pt-[185px] md:pb-20 lg:pb-24">
          {/* ---------------------------------------------
              DÉCORS DE FOND
          --------------------------------------------- */}
          <div className="pointer-events-none absolute inset-0">
            {/* Halos principaux */}
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-amber-300/12 blur-3xl" />
            <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

            {/* Dégradé vertical */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#0a0a0a] to-[#050505]" />

            {/* Trame diagonale premium */}
            <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(135deg,rgba(255,255,255,0.30)_1px,transparent_1px)] [background-size:28px_28px]" />

            {/* Voile central */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_42%)]" />

            {/* Balayage lumineux vertical */}
            <div className="inscription-light-sweep absolute inset-y-0 left-[-20%] w-[35%] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent blur-2xl" />
          </div>

          {/* ---------------------------------------------
              ORBES / ONDES CENTRALES PREMIUM
              Différent des gants animés de la page contact
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
              {/* Badge */}
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-amber-300 shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-md">
                <UserPlus size={14} />
                Accès au club
              </span>

              {/* Titre */}
              <h1 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-[0.04em] text-white sm:text-5xl md:text-6xl xl:text-7xl">
                Entrez dans
                <br className="hidden sm:block" />
                <span className="block bg-gradient-to-r from-white via-amber-300 to-red-500 bg-clip-text text-transparent">
                  l’expérience boxing club
                </span>
              </h1>

              {/* Intro */}
              <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base md:text-lg">
                Votre inscription est le point de départ d’un cadre exigeant,
                structuré et motivant. Choisissez votre discipline, exprimez
                votre objectif, et laissez le club vous orienter vers la
                meilleure trajectoire.
              </p>

              {/* Mini badges */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/80">
                  Entrée progressive
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/80">
                  Orientation personnalisée
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/80">
                  Tous profils
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            SECTION PRINCIPALE
            PROCESSUS + FORMULAIRE
        ================================================= */}
        <section className="relative overflow-hidden py-14 md:py-16 lg:py-20">
          {/* Décor secondaire */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-4rem] top-16 h-56 w-56 rounded-full bg-amber-300/10 blur-3xl" />
            <div className="absolute right-[-4rem] bottom-10 h-56 w-56 rounded-full bg-red-500/8 blur-3xl" />
          </div>

          <div className="container-custom relative z-10">
            <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
              {/* =========================================
                  COLONNE GAUCHE
                  PROCESSUS D’INSCRIPTION
              ========================================= */}
              <div className="space-y-6">
                {/* Carte processus */}
                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] p-7 shadow-[0_18px_40px_rgba(0,0,0,0.20)] backdrop-blur-xl">
                  {/* Accent */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-amber-300 via-white/60 to-red-500 opacity-90" />

                  {/* Halo interne */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_28%)]" />

                  <div className="relative z-10">
                    <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-amber-300">
                      Parcours d’entrée
                    </p>

                    <h2 className="mt-3 text-3xl font-black text-white">
                      Une inscription pensée avec méthode
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-white/68 md:text-base">
                      Nous avons conçu une démarche claire pour faciliter votre
                      entrée au club, tout en respectant votre niveau, votre
                      rythme et vos objectifs.
                    </p>

                    {/* Timeline premium */}
                    <div className="mt-7 space-y-4">
                      {/* Étape 1 */}
                      <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                        <div className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-300/20 bg-amber-300/10 text-amber-300">
                          <ClipboardCheck size={18} />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-white">
                            1. Déposez votre demande
                          </p>
                          <p className="mt-1 text-sm leading-6 text-white/60">
                            Remplissez le formulaire avec vos coordonnées, votre
                            discipline souhaitée et votre niveau.
                          </p>
                        </div>
                      </div>

                      {/* Étape 2 */}
                      <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                        <div className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-red-400/20 bg-red-500/10 text-red-400">
                          <CalendarDays size={18} />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-white">
                            2. Le club vous oriente
                          </p>
                          <p className="mt-1 text-sm leading-6 text-white/60">
                            Nous revenons vers vous pour préciser les conditions
                            d’intégration et vous guider vers la bonne pratique.
                          </p>
                        </div>
                      </div>

                      {/* Étape 3 */}
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

                {/* Carte identité / engagement */}
                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-300/10 via-transparent to-red-500/8" />

                  <div className="relative z-10">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-white">
                      <Crown size={22} />
                    </div>

                    <h3 className="mt-4 text-2xl font-black text-white">
                      Plus qu’une inscription,
                      <br /> une entrée dans une identité
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

              {/* =========================================
                  COLONNE DROITE
                  FORMULAIRE D’ADHÉSION PREMIUM
              ========================================= */}
              <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.04] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl md:p-8">
                {/* Accent haut */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-amber-300 via-white/60 to-red-500 opacity-95" />

                {/* Reflet premium */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.09),transparent_30%)]" />

                {/* Badge floating */}
                <div className="inscription-badge-pulse pointer-events-none absolute right-5 top-5 hidden rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-amber-300 md:block">
                  Sélection club
                </div>

                <div className="relative z-10">
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-amber-300">
                    Dossier d’adhésion
                  </p>

                  <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
                    Déposez votre candidature sportive
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68 md:text-base">
                    Remplissez ce formulaire pour amorcer votre entrée au club.
                    Plus votre demande est claire, plus l’orientation sera
                    précise et efficace.
                  </p>

                  <form className="mt-8 grid gap-5">
                    {/* Nom complet */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-white">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        placeholder="Votre nom complet"
                        className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3.5 text-black outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20"
                      />
                    </div>

                    {/* Ligne 2 colonnes */}
                    <div className="grid gap-5 md:grid-cols-2">
                      {/* Email */}
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-white">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="Votre email"
                          className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3.5 text-black outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20"
                        />
                      </div>

                      {/* Téléphone */}
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-white">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          placeholder="Votre numéro"
                          className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3.5 text-black outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20"
                        />
                      </div>
                    </div>

                    {/* Discipline */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-white">
                        Discipline souhaitée
                      </label>
                      <select className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3.5 text-black outline-none transition-all duration-300 focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20">
                        <option>Choisir une discipline</option>
                        <option>Kickboxing</option>
                        <option>K1 Rules</option>
                        <option>Full Contact</option>
                        <option>Low Kick</option>
                        <option>Point Fighting</option>
                      </select>
                    </div>

                    {/* Niveau + objectif */}
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-white">
                          Votre niveau
                        </label>
                        <select className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3.5 text-black outline-none transition-all duration-300 focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20">
                          <option>Choisir votre niveau</option>
                          <option>Débutant</option>
                          <option>Intermédiaire</option>
                          <option>Confirmé</option>
                          <option>Compétiteur</option>
                        </select>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-white">
                          Objectif principal
                        </label>
                        <select className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3.5 text-black outline-none transition-all duration-300 focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20">
                          <option>Choisir un objectif</option>
                          <option>Découverte</option>
                          <option>Remise en forme</option>
                          <option>Perfectionnement</option>
                          <option>Compétition</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-white">
                        Message complémentaire
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Précisez vos disponibilités, votre motivation ou tout élément utile..."
                        className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3.5 text-black outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20"
                      />
                    </div>

                    {/* Bloc rappel premium */}
                    <div className="grid gap-3 rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                      <div className="flex items-center gap-3">
                        <Phone size={16} className="text-red-400" />
                        <p className="text-sm text-white/70">
                          Le club pourra vous recontacter par téléphone pour
                          confirmer l’orientation ou une séance d’essai.
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <Mail size={16} className="text-amber-300" />
                        <p className="text-sm text-white/70">
                          Une réponse par email vous sera envoyée après étude de
                          votre demande.
                        </p>
                      </div>
                    </div>

                    {/* Bouton */}
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-red-500 px-6 py-3.5 text-sm font-semibold text-black shadow-[0_16px_36px_rgba(251,191,36,0.18)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_20px_42px_rgba(251,191,36,0.24)] md:text-base"
                    >
                      Envoyer ma demande
                      <Send
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  </form>
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