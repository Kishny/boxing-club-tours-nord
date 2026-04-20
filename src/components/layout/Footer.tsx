"use client";

// =====================================================
// IMPORTS
// =====================================================
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ExternalLink,
  Clock3,
  BadgeEuro,
  ChevronRight,
} from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

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
  {
    name: "Horaires",
    href: "/horaires",
    icon: Clock3,
  },
  {
    name: "Tarifs",
    href: "/tarifs",
    icon: BadgeEuro,
  },
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
// FOOTER
// =====================================================
export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#060606] text-white">
      {/* Background FX */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-48 w-48 rounded-full bg-red-600/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_36%)]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:22px_22px] md:[background-size:28px_28px]" />
      </div>

      <div className="container-custom relative z-10 py-10 md:py-14 lg:py-16">
        {/* =========================================
            TOP FOOTER
        ========================================= */}
        <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr_0.9fr] xl:gap-10">
          {/* -------------------------------------
              IDENTITÉ
          ------------------------------------- */}
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
              discipline et d’engagement, pensé pour tous les profils.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white/78 transition-all duration-300 hover:-translate-y-[1px] hover:border-red-400/35 hover:bg-white/[0.10] hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* -------------------------------------
              NAVIGATION
          ------------------------------------- */}
          <div>
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-amber-300">
              Navigation
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
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

          {/* -------------------------------------
              LIENS SPÉCIAUX + EXTERNES
          ------------------------------------- */}
          <div>
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-amber-300">
              Informations utiles
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {utilityLinks.map((link) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`group relative inline-flex items-center justify-between overflow-hidden rounded-2xl border px-4 py-3.5 transition-all duration-300 ${
                      isActive
                        ? "border-amber-300/35 bg-white text-black shadow-[0_12px_30px_rgba(255,255,255,0.08)]"
                        : "border-white/10 bg-white/[0.05] text-white hover:-translate-y-[1px] hover:border-red-400/30 hover:bg-white/[0.08]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex h-9 w-9 items-center justify-center rounded-full border ${
                          isActive
                            ? "border-black/10 bg-black/5"
                            : "border-white/10 bg-white/[0.06]"
                        }`}
                      >
                        <Icon
                          size={16}
                          className={isActive ? "text-red-500" : "text-amber-300"}
                        />
                      </span>

                      <span className="text-sm font-bold uppercase tracking-[0.08em]">
                        {link.name}
                      </span>
                    </div>

                    <ChevronRight
                      size={16}
                      className={`transition-transform duration-300 ${
                        isActive
                          ? "text-black/70"
                          : "text-white/50 group-hover:translate-x-0.5 group-hover:text-white"
                      }`}
                    />
                  </Link>
                );
              })}

              <a
                href={ffkmdaLink.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white/72 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.08em]">
                  {ffkmdaLink.name}
                </span>
                <ExternalLink
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]"
                />
              </a>
            </div>
          </div>
        </div>

        {/* =========================================
            BOTTOM FOOTER
        ========================================= */}
        <div className="mt-8 border-t border-white/10 pt-5 md:mt-10 md:pt-6">
          <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <p className="text-[0.78rem] text-white/42 md:text-sm">
              © {new Date().getFullYear()} Boxing Club Tours Métropole. Tous
              droits réservés.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-[0.78rem] text-white/42 md:justify-end md:text-sm">
              <span>Site du club</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>Tours • La Riche • Métropole</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
