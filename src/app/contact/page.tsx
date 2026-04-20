// /app/contact/page.tsx
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
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock3,
  ShieldCheck,
  MessageSquareText,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

// =====================================================
// TYPES
// =====================================================
type MobileInfoKey = "location" | "email" | "phone" | "hours";

// =====================================================
// PAGE CONTACT PREMIUM
// VERSION MOBILE ULTRA COMPACTE
// =====================================================
export default function ContactPage() {
  // ---------------------------------------------------
  // Accordéons mobile
  // ---------------------------------------------------
  const [openInfoCard, setOpenInfoCard] = useState<MobileInfoKey | null>(
    "location"
  );

  const toggleInfoCard = (key: MobileInfoKey) => {
    setOpenInfoCard((prev) => (prev === key ? null : key));
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
      <main className="bg-[#060606] text-white">
        {/* =================================================
            HERO CONTACT PREMIUM
            VERSION MOBILE ULTRA COMPACTE
        ================================================= */}
        <section className="relative overflow-hidden border-b border-white/10 pt-[120px] pb-8 md:pt-[185px] md:pb-20 lg:pb-24">
          {/* ---------------------------------------------
              DÉCORS DE FOND
          --------------------------------------------- */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-6 h-40 w-40 rounded-full bg-red-600/16 blur-3xl md:top-10 md:h-64 md:w-64 md:bg-red-600/18" />
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-amber-400/10 blur-3xl md:h-72 md:w-72 md:bg-amber-400/12" />
            <div className="absolute bottom-0 left-1/3 h-36 w-36 rounded-full bg-white/5 blur-3xl md:h-64 md:w-64 md:bg-white/6" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_36%)]" />
            <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.30)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.30)_1px,transparent_1px)] [background-size:24px_24px] md:opacity-[0.04] md:[background-size:34px_34px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
          </div>

          {/* ---------------------------------------------
              GANTS ANIMÉS DESKTOP
          --------------------------------------------- */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="contact-glove-left absolute left-[-2rem] top-[26%] hidden md:block">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10 text-4xl shadow-[0_0_40px_rgba(220,38,38,0.18)] backdrop-blur-md lg:h-28 lg:w-28">
                🥊
              </div>
            </div>

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
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.56rem] font-bold uppercase tracking-[0.12em] text-amber-300 shadow-[0_8px_20px_rgba(0,0,0,0.16)] backdrop-blur-md sm:px-3 sm:py-1.5 sm:text-[0.62rem] md:px-4 md:py-2 md:text-[0.72rem] md:tracking-[0.18em]">
                <MessageSquareText
                  size={11}
                  className="md:h-[14px] md:w-[14px]"
                />
                Contact premium
              </span>

              <h1 className="mt-3 text-[2rem] font-black uppercase leading-[0.9] tracking-[0.025em] text-white sm:text-[2.5rem] md:mt-5 md:text-6xl md:tracking-[0.04em] xl:text-7xl">
                Entrez en
                <br className="hidden sm:block" />
                contact avec
                <span className="block bg-gradient-to-r from-red-500 via-white to-amber-300 bg-clip-text text-transparent">
                  le Boxing Club
                </span>
              </h1>

              <p className="mx-auto mt-3 max-w-[23rem] text-[0.88rem] leading-5 text-white/68 sm:max-w-[31rem] sm:text-[0.94rem] sm:leading-6 md:mt-5 md:max-w-3xl md:text-lg md:leading-7">
                Une question, une séance d’essai, une inscription ou simplement
                envie d’échanger ? Prends contact avec le club.
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 md:mt-8 md:gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/80 sm:px-3 sm:py-1.5 sm:text-[0.72rem] md:px-4 md:py-2 md:text-xs">
                  Réponse rapide
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/80 sm:px-3 sm:py-1.5 sm:text-[0.72rem] md:px-4 md:py-2 md:text-xs">
                  Séance d’essai possible
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/80 sm:px-3 sm:py-1.5 sm:text-[0.72rem] md:px-4 md:py-2 md:text-xs">
                  Tous niveaux
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
            <div className="absolute left-0 top-16 h-40 w-40 rounded-full bg-red-600/10 blur-3xl md:h-56 md:w-56" />
            <div className="absolute right-0 top-28 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl md:h-56 md:w-56" />
          </div>

          <div className="container-custom relative z-10">
            <div className="grid gap-4 md:gap-8 xl:grid-cols-[0.95fr_1.05fr]">
              {/* =========================================
                  COLONNE GAUCHE
              ========================================= */}
              <div className="space-y-4 md:space-y-6">
                {/* =====================================
                    VERSION MOBILE INFOS
                ===================================== */}
                <div className="space-y-3 md:hidden">
                  <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.05] p-4 shadow-[0_14px_30px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-red-500 via-amber-400 to-transparent opacity-80" />

                    <div className="relative z-10">
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-red-300">
                        Coordonnées du club
                      </p>

                      <h2 className="mt-3 text-[1.5rem] font-black leading-[0.96] text-white">
                        Parlons directement
                      </h2>

                      <p className="mt-3 text-[0.88rem] leading-6 text-white/68">
                        Utilise le formulaire ou retrouve les informations du
                        club juste ici.
                      </p>
                    </div>
                  </div>

                  {/* Localisation */}
                  <article className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.05] shadow-[0_14px_30px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                    <button
                      type="button"
                      onClick={() => toggleInfoCard("location")}
                      className="flex w-full items-center gap-3 px-4 py-4 text-left"
                      aria-expanded={openInfoCard === "location"}
                    >
                      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-red-400/20 bg-red-500/10 text-red-400">
                        <MapPin size={18} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-[1rem] font-black text-white">
                          Zone du club
                        </h3>
                        <p className="mt-1 text-[0.82rem] leading-5 text-white/58">
                          La Riche • Tours Nord • Tours Métropole
                        </p>
                      </div>

                      <div
                        className={`shrink-0 transition-transform duration-300 ${
                          openInfoCard === "location" ? "rotate-180" : ""
                        }`}
                      >
                        <ChevronDown size={20} className="text-white/70" />
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        openInfoCard === "location"
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-80"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-white/10 px-4 pb-4 pt-3">
                          <p className="text-[0.84rem] leading-6 text-white/68">
                            Le club rayonne sur plusieurs secteurs autour de
                            Tours, avec une logique d’accompagnement structuré
                            et accessible.
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>

                  {/* Email */}
                  <article className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.05] shadow-[0_14px_30px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                    <button
                      type="button"
                      onClick={() => toggleInfoCard("email")}
                      className="flex w-full items-center gap-3 px-4 py-4 text-left"
                      aria-expanded={openInfoCard === "email"}
                    >
                      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/10 text-amber-300">
                        <Mail size={18} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-[1rem] font-black text-white">
                          Email
                        </h3>
                        <p className="mt-1 text-[0.82rem] leading-5 text-white/58">
                          contact@boxingclub.fr
                        </p>
                      </div>

                      <div
                        className={`shrink-0 transition-transform duration-300 ${
                          openInfoCard === "email" ? "rotate-180" : ""
                        }`}
                      >
                        <ChevronDown size={20} className="text-white/70" />
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        openInfoCard === "email"
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-80"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-white/10 px-4 pb-4 pt-3">
                          <p className="text-[0.84rem] leading-6 text-white/68">
                            Idéal pour les demandes d’informations,
                            d’inscription, de séance d’essai ou toute question
                            liée au club.
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>

                  {/* Téléphone */}
                  <article className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.05] shadow-[0_14px_30px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                    <button
                      type="button"
                      onClick={() => toggleInfoCard("phone")}
                      className="flex w-full items-center gap-3 px-4 py-4 text-left"
                      aria-expanded={openInfoCard === "phone"}
                    >
                      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.08] text-white">
                        <Phone size={18} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-[1rem] font-black text-white">
                          Téléphone
                        </h3>
                        <p className="mt-1 text-[0.82rem] leading-5 text-white/58">
                          +33 6 00 00 00 00
                        </p>
                      </div>

                      <div
                        className={`shrink-0 transition-transform duration-300 ${
                          openInfoCard === "phone" ? "rotate-180" : ""
                        }`}
                      >
                        <ChevronDown size={20} className="text-white/70" />
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        openInfoCard === "phone"
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-80"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-white/10 px-4 pb-4 pt-3">
                          <p className="text-[0.84rem] leading-6 text-white/68">
                            Pour un échange plus direct sur les demandes
                            urgentes ou les renseignements rapides.
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>

                  {/* Horaires */}
                  <article className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.05] shadow-[0_14px_30px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                    <button
                      type="button"
                      onClick={() => toggleInfoCard("hours")}
                      className="flex w-full items-center gap-3 px-4 py-4 text-left"
                      aria-expanded={openInfoCard === "hours"}
                    >
                      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.08] text-white">
                        <Clock3 size={18} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-[1rem] font-black text-white">
                          Disponibilités
                        </h3>
                        <p className="mt-1 text-[0.82rem] leading-5 text-white/58">
                          Réponse sous 24 à 48h
                        </p>
                      </div>

                      <div
                        className={`shrink-0 transition-transform duration-300 ${
                          openInfoCard === "hours" ? "rotate-180" : ""
                        }`}
                      >
                        <ChevronDown size={20} className="text-white/70" />
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        openInfoCard === "hours"
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-80"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-white/10 px-4 pb-4 pt-3">
                          <p className="text-[0.84rem] leading-6 text-white/68">
                            Le club répond aussi vite que possible selon
                            l’activité sportive et les événements en cours.
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>

                  {/* Carte ambiance mobile */}
                  <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_14px_30px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-amber-300/8" />

                    <div className="relative z-10">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-white">
                        <ShieldCheck size={18} />
                      </div>

                      <h3 className="mt-3 text-[1.2rem] font-black leading-[1.02] text-white">
                        Un échange clair,
                        <br />
                        un accompagnement sérieux
                      </h3>

                      <p className="mt-3 text-[0.88rem] leading-6 text-white/65">
                        Le club répond avec sérieux, clarté et efficacité, que
                        tu sois débutant, curieux ou déjà engagé.
                      </p>

                      <div className="mt-4">
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

                {/* =====================================
                    VERSION DESKTOP INFOS
                ===================================== */}
                <div className="hidden space-y-6 md:block">
                  <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] p-7 shadow-[0_18px_40px_rgba(0,0,0,0.20)] backdrop-blur-xl">
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

                  <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-amber-300/8" />

                    <div className="relative z-10">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-white">
                        <ShieldCheck size={22} />
                      </div>

                      <h3 className="mt-4 text-2xl font-black text-white">
                        Un échange clair,
                        <br />
                        un accompagnement sérieux
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-white/65 md:text-base">
                        Le club met un point d’honneur à répondre avec sérieux,
                        clarté et efficacité, que tu sois débutant, curieux ou
                        déjà engagé dans la pratique.
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
              </div>

              {/* =========================================
                  COLONNE DROITE
                  FORMULAIRE PREMIUM
              ========================================= */}
              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.05] p-5 shadow-[0_16px_34px_rgba(0,0,0,0.18)] backdrop-blur-xl md:rounded-[34px] md:p-8 md:shadow-[0_20px_50px_rgba(0,0,0,0.22)]">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-red-500 via-amber-400 to-transparent opacity-85" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_28%)]" />

                <div className="relative z-10">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-amber-300 md:text-[0.72rem] md:tracking-[0.18em]">
                    Formulaire de contact
                  </p>

                  <h2 className="mt-3 text-[1.7rem] font-black leading-[0.96] text-white md:text-4xl">
                    Envoyez votre message
                  </h2>

                  <p className="mt-3 max-w-2xl text-[0.88rem] leading-6 text-white/68 md:mt-4 md:text-base md:leading-7">
                    Décrivez votre demande et laissez-nous vos coordonnées. Nous
                    reviendrons vers vous rapidement.
                  </p>

                  <form className="mt-6 grid gap-4 md:mt-8 md:gap-5">
                    <div>
                      <label className="mb-2 block text-[0.86rem] font-semibold text-white md:text-sm">
                        Nom
                      </label>
                      <Input
                        type="text"
                        placeholder="Votre nom"
                        className="focus:border-red-500 focus:ring-red-500/20"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-[0.86rem] font-semibold text-white md:text-sm">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="Votre email"
                        className="focus:border-red-500 focus:ring-red-500/20"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-[0.86rem] font-semibold text-white md:text-sm">
                        Sujet
                      </label>
                      <Input
                        type="text"
                        placeholder="Ex : séance d’essai, inscription..."
                        className="focus:border-red-500 focus:ring-red-500/20"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-[0.86rem] font-semibold text-white md:text-sm">
                        Message
                      </label>
                      <Textarea
                        rows={6}
                        placeholder="Votre message"
                        className="focus:border-red-500 focus:ring-red-500/20"
                      />
                    </div>

                    <p className="text-[0.74rem] leading-5 text-white/45 md:text-xs md:leading-6">
                      En envoyant ce formulaire, vous acceptez d’être recontacté
                      par le club au sujet de votre demande.
                    </p>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="group"
                    >
                      Envoyer le message
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
