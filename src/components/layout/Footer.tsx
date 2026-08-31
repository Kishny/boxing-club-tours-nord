"use client";

// =====================================================
// IMPORTS
// =====================================================
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ExternalLink,
  Clock3,
  BadgeEuro,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { CLUB_SOCIALS } from "@/data/contact";

// =====================================================
// TYPES
// =====================================================
type FooterLink = {
  name: string;
  href: string;
};

type UtilityLink = {
  name: string;
  href: string;
  icon: React.ElementType;
};

// =====================================================
// LIENS PRINCIPAUX
// =====================================================
const footerLinks: FooterLink[] = [
  { name: "Accueil", href: "/" },
  { name: "Disciplines", href: "/disciplines" },
  { name: "Coachs", href: "/coachs" },
  { name: "Athlètes", href: "/athletes" },
  { name: "Historique", href: "/historique" },
  { name: "Contact", href: "/contact" },
];

// =====================================================
// LIENS SPÉCIAUX
// =====================================================
const utilityLinks: UtilityLink[] = [
  { name: "Horaires", href: "/horaires", icon: Clock3 },
  { name: "Tarifs", href: "/tarifs", icon: BadgeEuro },
];

// =====================================================
// LIEN EXTERNE
// =====================================================
const ffkmdaLink = {
  name: "FFKMDA",
  href: "https://www.ffkmda.com/",
};

// =====================================================
// RÉSEAUX
// =====================================================
const socialLinks = [
  {
    name: "Facebook",
    href: CLUB_SOCIALS.facebook,
    icon: FaFacebookF,
    color: "#ef4444",
    glow: "rgba(239,68,68,0.28)",
  },
  {
    name: "Instagram",
    href: CLUB_SOCIALS.instagram,
    icon: FaInstagram,
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.28)",
  },
];

// =====================================================
// COMPOSANT FOOTER
// =====================================================
export default function Footer() {
  const pathname = usePathname();

  const [navOpen, setNavOpen] = useState(false);
  const [utilsOpen, setUtilsOpen] = useState(false);

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#060606] text-white">
      {/* Arrière-plan premium */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-48 w-48 rounded-full bg-red-600/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_36%)]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:22px_22px] md:[background-size:28px_28px]" />
      </div>

      <div className="container-custom relative z-10 py-10 md:py-14 lg:py-16">
        {/* =========================================
            VERSION DESKTOP
        ========================================= */}
        <div className="hidden md:block">
          <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr_0.9fr] xl:gap-10">
            {/* Colonne Identité */}
            <div>
              <Link
                href="/"
                className="group inline-flex items-center gap-3"
                aria-label="Retour à l'accueil"
              >
                <div className="relative h-14 w-14 shrink-0 md:h-[68px] md:w-[68px]">
                  <Image
                    src="/images/logo.png"
                    alt="Logo Boxing Club"
                    fill
                    sizes="(max-width: 768px) 56px, 68px"
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.04] group-hover:-rotate-[2deg]"
                  />
                </div>
                <div className="leading-[0.9]">
                  <span className="block text-base font-extrabold uppercase tracking-[0.12em] text-white md:text-[1.25rem]">
                    BOXING
                  </span>
                  <span className="block text-base font-extrabold uppercase tracking-[0.12em] text-white md:text-[1.25rem]">
                    CLUB
                  </span>
                </div>
              </Link>

              <p className="mt-5 max-w-md text-[0.92rem] leading-7 text-white/62 md:text-base">
                Boxing Club Tours Métropole. Un univers de progression, de
                discipline et d&apos;engagement, pensé pour tous les profils.
              </p>

              <div className="mt-6 flex items-center gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      className="footer-social-pulse inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white/88 transition-all duration-300 hover:-translate-y-[2px] hover:scale-[1.04] hover:text-white"
                      style={{
                        animationDelay: `${index * 0.35}s`,
                        boxShadow: `0 0 0 rgba(0,0,0,0)`,
                      }}
                    >
                      <span
                        className="inline-flex h-full w-full items-center justify-center rounded-full"
                        style={{
                          boxShadow: `0 0 22px ${social.glow}`,
                        }}
                      >
                        <Icon size={22} style={{ color: social.color }} />
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Colonne Navigation */}
            <div>
              <div className="mb-5 border-t border-white/10 pt-4">
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-amber-300">
                  Navigation
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {footerLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`group inline-flex items-center gap-2 text-[0.92rem] transition-all duration-300 md:text-[0.96rem] ${
                        isActive
                          ? "font-bold text-white"
                          : "font-medium text-white/62 hover:text-white"
                      }`}
                    >
                      <ChevronRight
                        size={15}
                        className={`transition-transform duration-300 ${
                          isActive
                            ? "text-red-400"
                            : "text-white/30 group-hover:translate-x-0.5 group-hover:text-red-400"
                        }`}
                      />
                      <span>{link.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Colonne Informations utiles */}
            <div>
              <div className="mb-5 border-t border-white/10 pt-4">
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-amber-300">
                  Informations utiles
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {utilityLinks.map((link) => {
                  const isActive = pathname === link.href;
                  const Icon = link.icon;

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`group inline-flex items-center gap-3 rounded-full border px-4 py-3 transition-all duration-300 ${
                        isActive
                          ? "border-amber-300/35 bg-white text-black shadow-[0_10px_28px_rgba(255,255,255,0.08)]"
                          : "border-white/10 bg-white/[0.05] text-white hover:-translate-y-[1px] hover:border-amber-300/30 hover:bg-white/[0.08]"
                      }`}
                    >
                      <span
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-full border ${
                          isActive
                            ? "border-black/10 bg-black/5"
                            : "border-white/10 bg-white/[0.06]"
                        }`}
                      >
                        <Icon
                          size={18}
                          className={
                            isActive ? "text-red-500" : "text-amber-300"
                          }
                        />
                      </span>

                      <span className="text-[0.84rem] font-bold uppercase tracking-[0.08em]">
                        {link.name}
                      </span>
                    </Link>
                  );
                })}

                <a
                  href={ffkmdaLink.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-white/78 transition-all duration-300 hover:-translate-y-[1px] hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
                    <ExternalLink size={18} className="text-amber-300" />
                  </span>

                  <span className="text-[0.84rem] font-bold uppercase tracking-[0.08em]">
                    {ffkmdaLink.name}
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Desktop */}
          <div className="mt-8 border-t border-white/10 pt-5 md:mt-10 md:pt-6">
            <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
              <p className="text-[0.78rem] text-white/42 md:text-sm">
                © {new Date().getFullYear()} Boxing Club Tours Métropole. Tous
                droits réservés.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 text-[0.78rem] text-white/42 md:justify-end md:text-sm">
                <span>Tours • La Riche • Métropole</span>
                <span className="h-1 w-1 rounded-full bg-white/20" />
                <span>
                  Site réalisé par{" "}
                  <a
                    href="https://jeyko.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white/70 underline-offset-4 transition-colors duration-300 hover:text-amber-300 hover:underline"
                  >
                    Jeyko.dev
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            VERSION MOBILE
        ========================================= */}
        <div className="md:hidden">
          {/* Identité + Réseaux */}
          <div>
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
              aria-label="Retour à l'accueil"
            >
              <div className="relative h-12 w-12 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Logo Boxing Club"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div className="leading-[0.9]">
                <span className="block text-sm font-extrabold uppercase tracking-[0.12em] text-white">
                  BOXING
                </span>
                <span className="block text-sm font-extrabold uppercase tracking-[0.12em] text-white">
                  CLUB
                </span>
              </div>
            </Link>

            <p className="mt-4 text-[0.85rem] leading-6 text-white/62">
              Boxing Club Tours Métropole. Un univers de progression, de
              discipline et d&apos;engagement.
            </p>

            <div className="mt-5 flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="footer-social-pulse inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white/88 transition-all duration-300 hover:-translate-y-[2px] hover:scale-[1.04]"
                    style={{
                      animationDelay: `${index * 0.35}s`,
                    }}
                  >
                    <span
                      className="inline-flex h-full w-full items-center justify-center rounded-full"
                      style={{
                        boxShadow: `0 0 18px ${social.glow}`,
                      }}
                    >
                      <Icon size={19} style={{ color: social.color }} />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Accordéon Navigation */}
          <div className="mt-8 border-t border-white/10 pt-6">
            <button
              type="button"
              onClick={() => setNavOpen(!navOpen)}
              className="flex w-full items-center justify-between py-2 text-left"
            >
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-amber-300">
                Navigation
              </span>
              <ChevronDown
                size={20}
                className={`text-white/60 transition-transform duration-300 ${
                  navOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {navOpen && (
              <div className="mt-4 grid grid-cols-2 gap-2 pb-2">
                {footerLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`flex items-center gap-2 py-1.5 text-[0.9rem] ${
                        isActive
                          ? "font-bold text-white"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      <ChevronRight size={14} className="text-red-400/70" />
                      <span>{link.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Accordéon Informations utiles */}
          <div className="mt-5 border-t border-white/10 pt-6">
            <button
              type="button"
              onClick={() => setUtilsOpen(!utilsOpen)}
              className="flex w-full items-center justify-between py-2 text-left"
            >
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-amber-300">
                Informations utiles
              </span>
              <ChevronDown
                size={20}
                className={`text-white/60 transition-transform duration-300 ${
                  utilsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {utilsOpen && (
              <div className="mt-4 flex flex-wrap gap-3 pb-2">
                {utilityLinks.map((link) => {
                  const isActive = pathname === link.href;
                  const Icon = link.icon;

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`group inline-flex items-center gap-2.5 rounded-full border px-3.5 py-2.5 transition-all duration-300 ${
                        isActive
                          ? "border-amber-300/35 bg-white text-black"
                          : "border-white/10 bg-white/[0.05] text-white hover:bg-white/[0.08]"
                      }`}
                    >
                      <span
                        className={`inline-flex h-9 w-9 items-center justify-center rounded-full border ${
                          isActive
                            ? "border-black/10 bg-black/5"
                            : "border-white/10 bg-white/[0.06]"
                        }`}
                      >
                        <Icon
                          size={16}
                          className={
                            isActive ? "text-red-500" : "text-amber-300"
                          }
                        />
                      </span>

                      <span className="text-[0.76rem] font-bold uppercase tracking-[0.08em]">
                        {link.name}
                      </span>
                    </Link>
                  );
                })}

                <a
                  href={ffkmdaLink.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-white/80"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
                    <ExternalLink size={16} className="text-amber-300" />
                  </span>

                  <span className="text-[0.76rem] font-bold uppercase tracking-[0.08em]">
                    {ffkmdaLink.name}
                  </span>
                </a>
              </div>
            )}
          </div>

          {/* Copyright Mobile */}
          <div className="mt-8 border-t border-white/10 pt-5 text-center">
            <p className="text-[0.75rem] text-white/42">
              © {new Date().getFullYear()} Boxing Club Tours Métropole.
            </p>
            <p className="mt-1 text-[0.7rem] text-white/32">
              Tours • La Riche • Métropole
            </p>
            <p className="mt-2 text-[0.7rem] text-white/32">
              Site réalisé par{" "}
              <a
                href="https://jeyko.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/55 underline-offset-4 transition-colors duration-300 hover:text-amber-300 hover:underline"
              >
                Jeyko.dev
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* STYLES LOCAUX */}
      <style jsx>{`
        .footer-social-pulse {
          animation: socialPulse 2.8s ease-in-out infinite;
        }

        @keyframes socialPulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 rgba(255, 255, 255, 0);
          }
          50% {
            transform: scale(1.045);
            box-shadow: 0 0 24px rgba(255, 255, 255, 0.08);
          }
        }
      `}</style>
    </footer>
  );
}
