"use client";

// =====================================================
// IMPORTS
// =====================================================
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock3,
  ShieldCheck,
  MessageSquareText,
  ChevronRight,
} from "lucide-react";

// =====================================================
// PAGE CONTACT PREMIUM
// Version immersive / boxe / animations
// =====================================================
export default function ContactPage() {
  return (
    <>
      {/* =================================
          HEADER
      ================================= */}
      <Navbar />

      {/* =================================
          CONTENU PRINCIPAL
      ================================= */}
      <main className="bg-[#060606] text-white">
        {/* =================================================
            HERO CONTACT PREMIUM
        ================================================= */}
        <section className="relative overflow-hidden border-b border-white/10 pt-[150px] pb-16 md:pt-[185px] md:pb-20 lg:pb-24">
          {/* ---------------------------------------------
              DÉCORS DE FOND
          --------------------------------------------- */}
          <div className="pointer-events-none absolute inset-0">
            {/* Halos lumineux */}
            <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-red-600/18 blur-3xl" />
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-amber-400/12 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-white/6 blur-3xl" />

            {/* Dégradé principal */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_36%)]" />

            {/* Grille discrète */}
            <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.30)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.30)_1px,transparent_1px)] [background-size:34px_34px]" />

            {/* Voile sombre */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
          </div>

          {/* ---------------------------------------------
              GANTS ANIMÉS
              Effet "ils partent et reviennent"
          --------------------------------------------- */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* Gant gauche */}
            <div className="contact-glove-left absolute left-[-2rem] top-[26%] hidden md:block">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10 text-4xl shadow-[0_0_40px_rgba(220,38,38,0.18)] backdrop-blur-md lg:h-28 lg:w-28">
                🥊
              </div>
            </div>

            {/* Gant droit */}
            <div className="contact-glove-right absolute right-[-2rem] top-[26%] hidden md:block">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-amber-300/20 bg-amber-300/10 text-4xl shadow-[0_0_40px_rgba(251,191,36,0.16)] backdrop-blur-md lg:h-28 lg:w-28">
                🥊
              </div>
            </div>
          </div>

          {/* ---------------------------------------------
              CONTENU HERO
          --------------------------------------------- */}
          <div className="container-custom relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-amber-300 shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-md">
                <MessageSquareText size={14} />
                Contact premium
              </span>

              {/* Titre */}
              <h1 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-[0.04em] text-white sm:text-5xl md:text-6xl xl:text-7xl">
                Entrez en
                <br className="hidden sm:block" /> contact avec
                <span className="block bg-gradient-to-r from-red-500 via-white to-amber-300 bg-clip-text text-transparent">
                  le Boxing Club
                </span>
              </h1>

              {/* Intro */}
              <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base md:text-lg">
                Une question, une demande d’information, une envie d’essayer une
                séance ou de rejoindre le club ? Écrivez-nous et prenez contact
                avec un univers structuré, exigeant et passionné.
              </p>

              {/* Mini badges */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/80">
                  Réponse rapide
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/80">
                  Séance d’essai possible
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/80">
                  Tous niveaux
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            SECTION PRINCIPALE
            FORMULAIRE + INFOS
        ================================================= */}
        <section className="relative overflow-hidden py-14 md:py-16 lg:py-20">
          {/* Décor de fond */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-16 h-56 w-56 rounded-full bg-red-600/10 blur-3xl" />
            <div className="absolute right-0 top-28 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />
          </div>

          <div className="container-custom relative z-10">
            <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
              {/* =========================================
                  COLONNE GAUCHE
                  INFOS / BLOC AMBIANCE
              ========================================= */}
              <div className="space-y-6">
                {/* Carte principale infos */}
                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] p-7 shadow-[0_18px_40px_rgba(0,0,0,0.20)] backdrop-blur-xl">
                  {/* Accent */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-red-500 via-amber-400 to-transparent opacity-80" />

                  <div className="relative z-10">
                    <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-red-300">
                      Coordonnées du club
                    </p>

                    <h2 className="mt-3 text-3xl font-black text-white">
                      Parlons directement
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-white/68 md:text-base">
                      Pour toute demande liée aux inscriptions, disciplines,
                      essais, horaires, événements ou renseignements généraux,
                      utilise le formulaire ou contacte le club directement.
                    </p>

                    <div className="mt-6 space-y-4">
                      {/* Localisation */}
                      <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                        <div className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-red-400/20 bg-red-500/10 text-red-400">
                          <MapPin size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            Zone du club
                          </p>
                          <p className="mt-1 text-sm leading-6 text-white/60">
                            La Riche • Tours Nord • Tours Métropole
                          </p>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                        <div className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-amber-300/20 bg-amber-300/10 text-amber-300">
                          <Mail size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            Email
                          </p>
                          <p className="mt-1 text-sm leading-6 text-white/60">
                            contact@boxingclub.fr
                          </p>
                        </div>
                      </div>

                      {/* Téléphone */}
                      <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                        <div className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] text-white">
                          <Phone size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            Téléphone
                          </p>
                          <p className="mt-1 text-sm leading-6 text-white/60">
                            +33 6 00 00 00 00
                          </p>
                        </div>
                      </div>

                      {/* Horaires */}
                      <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                        <div className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] text-white">
                          <Clock3 size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            Disponibilités
                          </p>
                          <p className="mt-1 text-sm leading-6 text-white/60">
                            Réponse sous 24 à 48h selon l’activité du club.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte secondaire ambiance */}
                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-amber-300/8" />

                  <div className="relative z-10">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-white">
                      <ShieldCheck size={22} />
                    </div>

                    <h3 className="mt-4 text-2xl font-black text-white">
                      Un échange clair,
                      <br /> un accompagnement sérieux
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/65 md:text-base">
                      Le club met un point d’honneur à répondre avec sérieux,
                      clarté et efficacité, que tu sois débutant, curieux ou déjà
                      engagé dans la pratique.
                    </p>

                    <div className="mt-5">
                      <Link
                        href="/disciplines"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition hover:text-white"
                      >
                        Découvrir les disciplines
                        <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* =========================================
                  COLONNE DROITE
                  FORMULAIRE PREMIUM
              ========================================= */}
              <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.05] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-8">
                {/* Accent haut */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-red-500 via-amber-400 to-transparent opacity-85" />

                {/* Reflet */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_28%)]" />

                <div className="relative z-10">
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-amber-300">
                    Formulaire de contact
                  </p>

                  <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
                    Envoyez votre message
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68 md:text-base">
                    Décrivez votre demande et laissez-nous vos coordonnées.
                    Nous reviendrons vers vous rapidement.
                  </p>

                  <form className="mt-8 grid gap-5">
                    {/* Nom */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-white">
                        Nom
                      </label>
                      <input
                        type="text"
                        placeholder="Votre nom"
                        className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3.5 text-black outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-white">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Votre email"
                        className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3.5 text-black outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                      />
                    </div>

                    {/* Sujet */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-white">
                        Sujet
                      </label>
                      <input
                        type="text"
                        placeholder="Ex : séance d’essai, inscription, informations..."
                        className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3.5 text-black outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-white">
                        Message
                      </label>
                      <textarea
                        rows={7}
                        placeholder="Votre message"
                        className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3.5 text-black outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                      />
                    </div>

                    {/* Petite note */}
                    <p className="text-xs leading-6 text-white/45">
                      En envoyant ce formulaire, vous acceptez d’être recontacté
                      par le club au sujet de votre demande.
                    </p>

                    {/* Bouton */}
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(220,38,38,0.20)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-red-700 hover:shadow-[0_18px_38px_rgba(220,38,38,0.28)] md:text-base"
                    >
                      Envoyer le message
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
        .contact-glove-left {
          animation: leftPunch 4.8s ease-in-out infinite;
        }

        .contact-glove-right {
          animation: rightPunch 4.8s ease-in-out infinite;
        }

        @keyframes leftPunch {
          0%,
          100% {
            transform: translateX(0) rotate(-8deg);
            opacity: 0.6;
          }
          25% {
            transform: translateX(58px) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translateX(18px) rotate(-3deg);
            opacity: 0.82;
          }
          75% {
            transform: translateX(68px) rotate(2deg);
            opacity: 1;
          }
        }

        @keyframes rightPunch {
          0%,
          100% {
            transform: translateX(0) rotate(8deg);
            opacity: 0.6;
          }
          25% {
            transform: translateX(-58px) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translateX(-18px) rotate(3deg);
            opacity: 0.82;
          }
          75% {
            transform: translateX(-68px) rotate(-2deg);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}