"use client";

// =====================================================
// IMPORTS
// =====================================================
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ExternalLink } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

// =====================================================
// TYPES
// =====================================================
type NavLink = {
  name: string;
  href: string;
};

// =====================================================
// LIENS INTERNES DU SITE
// On enlève le "highlight" permanent sur Disciplines
// pour éviter qu'il ressemble toujours à une page active
// =====================================================
const navLinks: NavLink[] = [
  { name: "Accueil", href: "/" },
  { name: "Disciplines", href: "/disciplines" },
  { name: "Coachs", href: "/coachs" },
  { name: "Athlètes", href: "/athletes" },
  { name: "Historique", href: "/historique" },
  { name: "Contact", href: "/contact" },
];

// =====================================================
// LIEN EXTERNE FFKMDA
// =====================================================
const ffkmdaLink = {
  name: "FFKMDA",
  href: "https://www.ffkmda.com/",
};

// =====================================================
// RÉSEAUX SOCIAUX DU CLUB
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
// COMPOSANT NAVBAR
// =====================================================
export default function Navbar() {
  // ---------------------------------------------------
  // Etat du menu mobile / tablette
  // ---------------------------------------------------
  const [isOpen, setIsOpen] = useState(false);

  // ---------------------------------------------------
  // Etat du scroll pour compacter légèrement le header
  // ---------------------------------------------------
  const [isScrolled, setIsScrolled] = useState(false);

  // ---------------------------------------------------
  // Route active actuelle
  // ---------------------------------------------------
  const pathname = usePathname();

  // ---------------------------------------------------
  // Détection du scroll
  // ---------------------------------------------------
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ---------------------------------------------------
  // Ferme le menu mobile
  // ---------------------------------------------------
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isScrolled
          ? "shadow-[0_10px_35px_rgba(0,0,0,0.10)]"
          : "shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
      }`}
    >
      {/* =================================================
          TOPBAR PREMIUM
      ================================================= */}
      <div className="hidden border-b border-white/10 bg-black text-white xl:block">
        <div className="container-custom flex items-center justify-between py-2">
          {/* Texte à gauche */}
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/50">
            Boxing Club • Tours Métropole
          </p>

          {/* Liens externes à droite */}
          <div className="flex items-center gap-3">
            {/* Lien FFKMDA */}
            <a
              href={ffkmdaLink.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[0.78rem] font-semibold text-white/75 transition hover:text-white"
              aria-label="Ouvrir le site de la FFKMDA"
            >
              {ffkmdaLink.name}
              <ExternalLink size={13} />
            </a>

            {/* Séparateur */}
            <span className="h-4 w-px bg-white/15" />

            {/* Réseaux sociaux */}
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all duration-300 hover:border-red-400/40 hover:bg-white/10 hover:text-white"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* =================================================
          NAVBAR PRINCIPALE
      ================================================= */}
      <div
        className={`border-b transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled
            ? "border-white/20 bg-white/72 backdrop-blur-xl"
            : "border-black/10 bg-white/96 backdrop-blur-md"
        }`}
      >
        <div
          className={`container-custom flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isScrolled ? "py-2.5 md:py-3" : "py-3 md:py-4"
          }`}
        >
          {/* =========================================
              LOGO + NOM DU CLUB
          ========================================= */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 md:gap-3"
            aria-label="Retour à l'accueil"
          >
            {/* Bloc image du logo */}
            <div
              className={`relative shrink-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isScrolled
                  ? "h-12 w-12 md:h-[62px] md:w-[62px]"
                  : "h-14 w-14 md:h-[74px] md:w-[74px] lg:h-[80px] lg:w-[80px]"
              }`}
            >
              <Image
                src="/images/logo.png"
                alt="Logo Boxing Club"
                fill
                priority
                sizes="(max-width: 768px) 56px, (max-width: 1200px) 74px, 80px"
                className={`object-contain transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isScrolled
                    ? "scale-95 rotate-0 group-hover:scale-100 group-hover:rotate-[2deg]"
                    : "scale-100 rotate-0 group-hover:scale-[1.04] group-hover:-rotate-[2deg]"
                }`}
              />
            </div>

            {/* Nom du club sur 2 lignes */}
            <div className="leading-[0.9]">
              <span
                className={`block font-extrabold uppercase tracking-[0.1em] text-black transition-all duration-500 group-hover:text-red-600 ${
                  isScrolled
                    ? "text-sm md:text-[1.28rem] lg:text-[1.5rem]"
                    : "text-base md:text-[1.6rem] lg:text-[1.85rem]"
                }`}
              >
                BOXING
              </span>
              <span
                className={`block font-extrabold uppercase tracking-[0.1em] text-black transition-all duration-500 group-hover:text-red-600 ${
                  isScrolled
                    ? "text-sm md:text-[1.28rem] lg:text-[1.5rem]"
                    : "text-base md:text-[1.6rem] lg:text-[1.85rem]"
                }`}
              >
                CLUB
              </span>
            </div>
          </Link>

          {/* =========================================
              MENU DESKTOP
          ========================================= */}
          <div className="hidden xl:flex items-center gap-4">
            {/* Navigation principale */}
            <nav className="flex items-center gap-3 xl:gap-4 2xl:gap-5">
              {navLinks.map((link) => {
                // -----------------------------
                // Vérifie si le lien correspond
                // à la route actuelle
                // -----------------------------
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`group relative rounded-full transition-all duration-300 ${
                      isScrolled
                        ? "text-[0.88rem] 2xl:text-[0.95rem]"
                        : "text-[0.92rem] 2xl:text-[1rem]"
                    } ${
                      isActive
                        ? "px-4 py-2 font-extrabold text-red-700 border border-red-200/80 bg-white shadow-[0_10px_24px_rgba(220,38,38,0.08)]"
                        : "px-3 py-2 font-semibold text-gray-800 hover:bg-red-50/70 hover:text-red-600"
                    }`}
                  >
                    {/* Texte du lien */}
                    <span className="relative z-[1]">{link.name}</span>

                    {/* Effet premium discret pour la page active */}
                    {isActive && (
                      <>
                        <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-red-300/60" />
                        <span className="pointer-events-none absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.35)]" />
                      </>
                    )}

                    {/* Soulignement animé pour les liens inactifs */}
                    {!isActive && (
                      <span className="pointer-events-none absolute left-3 right-3 bottom-[6px] h-[2px] scale-x-0 bg-gradient-to-r from-red-500 to-amber-400 transition-transform duration-300 origin-left group-hover:scale-x-100" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA desktop */}
            <Link
              href="/inscription"
              className={`inline-flex items-center justify-center rounded-full bg-black text-white shadow-md transition-all duration-300 hover:-translate-y-[1px] hover:bg-red-600 hover:shadow-[0_10px_25px_rgba(220,38,38,0.25)] ${
                isScrolled
                  ? "px-4.5 py-2.5 text-[0.9rem] font-semibold"
                  : "px-5 py-2.5 text-[0.95rem] font-semibold"
              }`}
            >
              S’inscrire
            </Link>
          </div>

          {/* =========================================
              BOUTON BURGER
              Visible sous xl
          ========================================= */}
          <button
            type="button"
            className={`rounded-xl text-black transition-all duration-300 hover:bg-black/5 hover:text-red-600 xl:hidden ${
              isScrolled ? "p-2" : "p-2.5"
            }`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* =================================================
          MENU MOBILE / TABLETTE
      ================================================= */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] xl:hidden ${
          isOpen
            ? "max-h-[950px] border-t border-black/10 bg-white/92 opacity-100 backdrop-blur-xl"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-2 px-5 py-5">
          {/* Liens internes */}
          {navLinks.map((link) => {
            // -----------------------------
            // Vérifie si le lien correspond
            // à la route actuelle
            // -----------------------------
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-2xl px-4 py-3.5 text-center text-[1.02rem] font-semibold transition-all duration-300 ${
                  isActive
                    ? "border border-red-200/80 bg-white text-red-700 shadow-[0_10px_24px_rgba(220,38,38,0.08)]"
                    : "text-gray-800 hover:bg-red-50 hover:text-red-600"
                }`}
              >
                <span className="relative">
                  {link.name}

                  {/* Petit point discret sur la page active */}
                  {isActive && (
                    <span className="ml-2 inline-block h-2 w-2 rounded-full bg-red-500 align-middle shadow-[0_0_10px_rgba(239,68,68,0.35)]" />
                  )}
                </span>
              </Link>
            );
          })}

          {/* Lien FFKMDA */}
          <a
            href={ffkmdaLink.href}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-4 py-3 text-base font-semibold text-black transition-all duration-300 hover:border-red-200 hover:text-red-600"
          >
            {ffkmdaLink.name}
            <ExternalLink size={16} />
          </a>

          {/* Réseaux sociaux */}
          <div className="mt-3 flex items-center justify-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-black transition-all duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          {/* CTA mobile */}
          <Link
            href="/inscription"
            onClick={closeMobileMenu}
            className="mt-3 inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-red-600"
          >
            S’inscrire
          </Link>
        </nav>
      </div>
    </header>
  );
}
