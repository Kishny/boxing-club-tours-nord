"use client";

// =====================================================
// IMPORTS
// =====================================================
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ExternalLink,
  MapPin,
  Mail,
  Phone,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

// =====================================================
// DONNÉES DES LIENS RAPIDES
// =====================================================
const quickLinks = [
  { name: "Accueil", href: "/" },
  { name: "Disciplines", href: "/disciplines" },
  { name: "Coachs", href: "/coachs" },
  { name: "Athlètes", href: "/athletes" },
  { name: "Historique", href: "/historique" },
  { name: "Contact", href: "/contact" },
];

// =====================================================
// DONNÉES DES LIENS UTILES
// =====================================================
const usefulLinks = [
  { name: "S’inscrire", href: "/inscription" },
  { name: "FFKMDA", href: "https://www.ffkmda.com/", external: true },
];

// =====================================================
// RÉSEAUX SOCIAUX
// IMPORTANT : remplace les href par les vrais liens
// =====================================================
const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
  },
];

// =====================================================
// TYPE DES SECTIONS DE L'ACCORDÉON MOBILE
// =====================================================
type MobileSectionKey =
  | "coordonnees"
  | "navigation"
  | "liensUtiles"
  | "reseaux";

// =====================================================
// COMPOSANT FOOTER PREMIUM
// VERSION DESKTOP LARGE + VERSION MOBILE ACCORDÉON
// =====================================================
export default function Footer() {
  // ---------------------------------------------------
  // État des sections ouvertes dans l'accordéon mobile
  // ---------------------------------------------------
  const [openSections, setOpenSections] = useState<
    Record<MobileSectionKey, boolean>
  >({
    coordonnees: true,
    navigation: false,
    liensUtiles: false,
    reseaux: false,
  });

  // ---------------------------------------------------
  // Ouvre / ferme une section mobile
  // ---------------------------------------------------
  const toggleSection = (section: MobileSectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer
      id="contact"
      className="
    relative overflow-hidden
    mt-16 md:mt-20 lg:mt-24
    border-t border-white/10
    bg-gradient-to-b from-black via-[#050505] to-[#050505]
    text-white
  "
    >
      {/* =================================================
          DÉCORS DE FOND PREMIUM
      ================================================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* Halos lumineux */}
        <div className="absolute -left-16 top-10 h-32 w-32 rounded-full bg-red-600/14 blur-3xl md:h-44 md:w-44" />
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl md:h-56 md:w-56" />
        <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-white/5 blur-3xl md:h-56 md:w-56" />

        {/* Dégradé global */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_34%)]" />

        {/* Grille discrète */}
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.28)_1px,transparent_1px)] [background-size:24px_24px] md:[background-size:30px_30px]" />
      </div>

      {/* =================================================
          PARTIE PRINCIPALE DU FOOTER
      ================================================= */}
      <div className="container-custom relative z-10 py-8 md:py-16 lg:py-20">
        {/* =============================================
            BLOC HERO DU FOOTER
            Version mobile plus compacte
        ============================================= */}
        <div className="grid gap-6 border-b border-white/10 pb-6 md:gap-10 md:pb-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          {/* ---------------------------------------------
              BRANDING / TEXTE PRINCIPAL
          --------------------------------------------- */}
          <div>
            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 rounded-full
              border border-amber-400/30 bg-amber-400/10
              px-4 py-1.5 text-[0.65rem] font-bold uppercase
              tracking-[0.18em] text-amber-300"
            >
              Fin du round, pas de l’expérience
            </span>

            {/* Logo + nom */}
            <div className="mt-4 flex items-center gap-3 md:mt-6 md:gap-4">
              <div className="relative h-12 w-12 shrink-0 md:h-20 md:w-20">
                <Image
                  src="/images/logo.png"
                  alt="Logo Boxing Club"
                  fill
                  sizes="(max-width: 768px) 48px, 80px"
                  className="object-contain"
                />
              </div>

              <div className="leading-[0.92]">
                <p className="text-lg font-black uppercase tracking-[0.1em] text-white md:text-4xl md:tracking-[0.12em]">
                  Boxing
                </p>
                <p className="text-lg font-black uppercase tracking-[0.1em] text-white md:text-4xl md:tracking-[0.12em]">
                  Club
                </p>
              </div>
            </div>

            {/* Phrase d’accroche */}
            <h2 className="mt-4 max-w-3xl text-xl font-black uppercase leading-[1] tracking-[0.03em] text-white md:mt-6 md:text-5xl md:leading-[0.96] md:tracking-[0.04em]">
              Discipline, respect
              <br className="hidden sm:block" /> et dépassement de soi.
            </h2>

            {/* Texte descriptif */}
            <p className="mt-3 max-w-2xl text-[0.84rem] leading-6 text-white/68 md:mt-5 md:text-base md:leading-7">
              Un club structuré, une identité forte, une énergie collective.
              Découvrez l’univers du Boxing Club à travers ses disciplines, ses
              athlètes, son histoire et ses événements.
            </p>
          </div>

          {/* ---------------------------------------------
              CTA À DROITE
              Version mobile plus dense
          --------------------------------------------- */}
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl md:rounded-[30px] md:p-7">
            <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-red-300 md:text-[0.68rem] md:tracking-[0.18em]">
              Prêt à rejoindre le club ?
            </p>

            <h3 className="mt-2 text-lg font-black text-white md:mt-3 md:text-3xl">
              Passez à l’action
            </h3>

            <p className="mt-2 text-[0.84rem] leading-5 text-white/68 md:mt-3 md:text-base md:leading-6">
              Réservez une séance, prenez contact avec l’équipe ou découvrez les
              disciplines du club.
            </p>

            <div className="mt-4 flex flex-col gap-2.5 sm:flex-row md:mt-6 md:gap-3">
              <Link
                href="/inscription"
                className="
                  inline-flex items-center justify-center gap-2 rounded-full
                  bg-red-600 px-4 py-2.5 text-[0.82rem] font-semibold text-white
                  shadow-[0_12px_28px_rgba(220,38,38,0.20)]
                  transition-all duration-300
                  hover:-translate-y-[1px]
                  hover:bg-red-700
                  md:px-5 md:py-3 md:text-sm
                "
              >
                Rejoindre le club
                <ChevronRight size={15} />
              </Link>

              <Link
                href="/contact"
                className="
                  inline-flex items-center justify-center rounded-full
                  border border-white/10 bg-white/5
                  px-4 py-2.5 text-[0.82rem] font-semibold text-white
                  transition-all duration-300
                  hover:border-white/20 hover:bg-white/10
                  md:px-5 md:py-3 md:text-sm
                "
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>

        {/* =============================================
            VERSION MOBILE : ACCORDÉON PREMIUM
        ============================================= */}
        <div className="mt-6 space-y-3 md:hidden">
          {/* ---------------------------------------------
              ACCORDÉON : COORDONNÉES
          --------------------------------------------- */}
          <div className="overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.04] backdrop-blur-xl">
            <button
              type="button"
              onClick={() => toggleSection("coordonnees")}
              className="flex w-full items-center justify-between px-4 py-3 text-left"
              aria-expanded={openSections.coordonnees}
            >
              <span className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/85">
                Coordonnées
              </span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  openSections.coordonnees ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                openSections.coordonnees
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-white/10 px-4 py-4 space-y-3">
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-red-400">
                      <MapPin size={14} />
                    </div>
                    <div>
                      <p className="text-[0.84rem] font-semibold text-white">
                        Tours Métropole
                      </p>
                      <p className="text-[0.8rem] leading-5 text-white/60">
                        La Riche • Tours Nord • Tours Métropole
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-amber-300">
                      <Mail size={14} />
                    </div>
                    <div>
                      <p className="text-[0.84rem] font-semibold text-white">
                        Email
                      </p>
                      <p className="text-[0.8rem] leading-5 text-white/60">
                        contact@boxingclub.fr
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white">
                      <Phone size={14} />
                    </div>
                    <div>
                      <p className="text-[0.84rem] font-semibold text-white">
                        Téléphone
                      </p>
                      <p className="text-[0.8rem] leading-5 text-white/60">
                        +33 6 00 00 00 00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------
              ACCORDÉON : NAVIGATION
          --------------------------------------------- */}
          <div className="overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.04] backdrop-blur-xl">
            <button
              type="button"
              onClick={() => toggleSection("navigation")}
              className="flex w-full items-center justify-between px-4 py-3 text-left"
              aria-expanded={openSections.navigation}
            >
              <span className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/85">
                Navigation
              </span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  openSections.navigation ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                openSections.navigation
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <ul className="border-t border-white/10 px-4 py-4 space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-2 text-[0.84rem] text-white/68 transition-all duration-300 hover:text-white"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500/70 transition-all duration-300 group-hover:scale-125 group-hover:bg-amber-300" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------
              ACCORDÉON : LIENS UTILES
          --------------------------------------------- */}
          <div className="overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.04] backdrop-blur-xl">
            <button
              type="button"
              onClick={() => toggleSection("liensUtiles")}
              className="flex w-full items-center justify-between px-4 py-3 text-left"
              aria-expanded={openSections.liensUtiles}
            >
              <span className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/85">
                Liens utiles
              </span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  openSections.liensUtiles ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                openSections.liensUtiles
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <ul className="border-t border-white/10 px-4 py-4 space-y-3">
                  {usefulLinks.map((link) => (
                    <li key={link.name}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group inline-flex items-center gap-2 text-[0.84rem] text-white/68 transition-all duration-300 hover:text-white"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-300/70 transition-all duration-300 group-hover:scale-125 group-hover:bg-red-500" />
                          {link.name}
                          <ExternalLink size={13} />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="group inline-flex items-center gap-2 text-[0.84rem] text-white/68 transition-all duration-300 hover:text-white"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-300/70 transition-all duration-300 group-hover:scale-125 group-hover:bg-red-500" />
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------
              ACCORDÉON : RÉSEAUX
          --------------------------------------------- */}
          <div className="overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.04] backdrop-blur-xl">
            <button
              type="button"
              onClick={() => toggleSection("reseaux")}
              className="flex w-full items-center justify-between px-4 py-3 text-left"
              aria-expanded={openSections.reseaux}
            >
              <span className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/85">
                Suivez le club
              </span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  openSections.reseaux ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                openSections.reseaux
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-white/10 px-4 py-4">
                  <p className="text-[0.82rem] leading-5 text-white/60">
                    Retrouvez l’actualité du club, les galas, les stages et les
                    temps forts de la saison sur les réseaux.
                  </p>

                  <div className="mt-4 flex items-center gap-2.5">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;

                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={social.name}
                          className="
                            inline-flex h-10 w-10 items-center justify-center rounded-full
                            border border-white/10 bg-white/5 text-white/80
                            transition-all duration-300
                            hover:-translate-y-[2px]
                            hover:border-red-400/30
                            hover:bg-white/[0.09]
                            hover:text-white
                            hover:shadow-[0_0_20px_rgba(220,38,38,0.16)]
                          "
                        >
                          <Icon size={16} />
                        </a>
                      );
                    })}
                  </div>

                  <div className="mt-4 rounded-[18px] border border-white/10 bg-white/[0.04] p-3.5">
                    <p className="text-[0.84rem] font-semibold text-white">
                      Le club, au-delà du ring.
                    </p>
                    <p className="mt-1.5 text-[0.8rem] leading-5 text-white/55">
                      Une dynamique sportive, humaine et structurée portée par
                      la passion du combat et la progression collective.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =============================================
    VERSION DESKTOP : GRILLE COMPACTE
============================================= */}
        <div className="hidden gap-8 pt-10 md:grid lg:grid-cols-4">
          {/* ---------------------------------------------
      COORDONNÉES
  --------------------------------------------- */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white/85">
              Coordonnées
            </h3>

            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-red-400">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Tours Métropole
                  </p>
                  <p className="text-sm text-white/60">
                    La Riche • Tours Nord • Tours Métropole
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-amber-300">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Email</p>
                  <p className="text-sm text-white/60">contact@boxingclub.fr</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Téléphone</p>
                  <p className="text-sm text-white/60">+33 6 00 00 00 00</p>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------
      NAVIGATION RAPIDE
  --------------------------------------------- */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white/85">
              Navigation
            </h3>

            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/68 transition hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500/70 transition group-hover:scale-125 group-hover:bg-amber-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------------------------------------------
      LIENS UTILES + CARTE
  --------------------------------------------- */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white/85">
              Liens utiles
            </h3>

            <ul className="mt-4 space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 text-sm text-white/68 transition hover:text-white"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-300/70 transition group-hover:scale-125 group-hover:bg-red-500" />
                      {link.name}
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-white/68 transition hover:text-white"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-300/70 transition group-hover:scale-125 group-hover:bg-red-500" />
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Bloc déplacé */}
            <div className="mt-6 rounded-[22px] border border-white/10 bg-white/[0.04] p-4">
              <p className="text-sm font-semibold text-white">
                Le club, au-delà du ring.
              </p>
              <p className="mt-2 text-sm leading-6 text-white/55">
                Une dynamique sportive, humaine et structurée portée par la
                passion du combat et la progression collective.
              </p>
            </div>
          </div>

          {/* ---------------------------------------------
      RÉSEAUX SOCIAUX
  --------------------------------------------- */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white/85">
              Suivez le club
            </h3>

            <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">
              Retrouvez l’actualité du club, les galas et les événements sur les
              réseaux.
            </p>

            <div className="mt-5 flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="
              inline-flex h-14 w-14 items-center justify-center rounded-full
              border border-white/10 bg-white/5 text-white
              transition-all duration-300
              hover:-translate-y-[3px]
              hover:border-red-500/40
              hover:bg-white/[0.10]
              hover:shadow-[0_0_25px_rgba(220,38,38,0.25)]
            "
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          BARRE INFÉRIEURE DU FOOTER
          Plus compacte sur mobile
      ================================================= */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container-custom flex flex-col gap-2.5 py-4 text-center md:flex-row md:items-center md:justify-between md:gap-3 md:py-5 md:text-left">
          <p className="text-[0.78rem] text-white/45 md:text-sm">
            © {new Date().getFullYear()} Boxing Club — Tous droits réservés.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end md:gap-4">
            <Link
              href="/contact"
              className="text-[0.78rem] text-white/45 transition hover:text-white md:text-sm"
            >
              Contact
            </Link>
            <Link
              href="/historique"
              className="text-[0.78rem] text-white/45 transition hover:text-white md:text-sm"
            >
              Historique
            </Link>
            <a
              href="https://www.ffkmda.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[0.78rem] text-white/45 transition hover:text-white md:text-sm"
            >
              FFKMDA
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
