"use client";

// =====================================================
// IMPORTS
// =====================================================
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, CalendarDays, MapPin } from "lucide-react";

// =====================================================
// TYPE DES SLIDES HERO
// contentPosition permet de déplacer le texte
// selon chaque image pour éviter les visages importants
// =====================================================
type HeroSlide = {
  id: number;
  image: string;
  alt: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  contentPosition: "left" | "center-left" | "right";
};

// =====================================================
// DONNÉES DU CAROUSEL HERO
// =====================================================
const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/images/hero.png",
    alt: "Combattants du Boxing Club - slide 1",
    badge: "Club • Performance • Passion",
    title: "BOXING CLUB",
    subtitle: "La Riche • Tours Nord • Tours Métropole",
    description:
      "Discipline, respect et dépassement de soi dans un cadre exigeant, moderne et accessible à tous.",
    contentPosition: "left",
  },
  {
    id: 2,
    image: "/images/hero-2.png",
    alt: "Entraînement intense du Boxing Club - slide 2",
    badge: "Kickboxing • K1 • Full Contact",
    title: "ENTRAÎNE-TOI AVEC INTENSITÉ",
    subtitle: "Des disciplines fortes. Un club structuré. Une ambiance unique.",
    description:
      "Débutants, passionnés et compétiteurs trouvent ici un environnement taillé pour progresser sérieusement.",
    contentPosition: "right",
  },
  {
    id: 3,
    image: "/images/hero-3.png",
    alt: "Ambiance premium et combattants du club - slide 3",
    badge: "Coachs • Énergie • Progression",
    title: "REJOINS L’EXPÉRIENCE",
    subtitle: "Un club qui allie rigueur, accompagnement et identité forte.",
    description:
      "Découvre les disciplines, l’équipe et l’univers du club à travers une expérience plus immersive et plus premium.",
    contentPosition: "center-left",
  },
];

// =====================================================
// INFOS DU PROCHAIN GALA
// Tu pourras remplacer facilement ces données plus tard
// =====================================================
const upcomingEvent = {
  label: "Prochain gala",
  title: "Tour Event Fight • Édition 2026",
  date: "Samedi 18 octobre 2026",
  location: "Tours Métropole",
  cta: "Réserver mes places",
  href: "#contact",
};

// =====================================================
// COMPOSANT HERO PREMIUM
// =====================================================
export default function Hero() {
  // ---------------------------------
  // Slide actuellement affichée
  // ---------------------------------
  const [currentSlide, setCurrentSlide] = useState(0);

  // ---------------------------------
  // Slide suivante
  // ---------------------------------
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  // ---------------------------------
  // Slide précédente
  // ---------------------------------
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  // ---------------------------------
  // Défilement automatique
  // ---------------------------------
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  // ---------------------------------
  // Slide active
  // ---------------------------------
  const activeSlide = heroSlides[currentSlide];

  // ---------------------------------
  // Date cible du prochain gala
  // ---------------------------------
  const eventDate = new Date("2026-10-18T20:00:00");

  // ---------------------------------
  // Etat du compte à rebours
  // ---------------------------------
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
  });

  // ---------------------------------
  // Calcul du compte à rebours
  // Version discrète : jours / heures / minutes
  // ---------------------------------
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 60000);

    return () => clearInterval(interval);
  }, []);

  // ---------------------------------
  // Positionnement dynamique du texte
  // selon la slide
  // ---------------------------------
  const contentPositionClasses = {
    left: "justify-start text-left",
    "center-left": "justify-start text-left md:pl-8 lg:pl-12",
    right: "justify-start text-left md:justify-end md:text-right",
  };

  const textBlockWidthClasses = {
    left: "max-w-3xl",
    "center-left": "max-w-3xl",
    right: "max-w-3xl md:ml-auto",
  };

  return (
    <section
      className="
        relative overflow-hidden
        mt-[96px] md:mt-[118px] lg:mt-[126px]

        /* Hauteur premium mais contenue */
        min-h-[72vh] md:min-h-[78vh] lg:min-h-[82vh]
      "
    >
      {/* =================================================
          ZONE IMAGE DU HERO
          1) fond cover flouté pour remplir l'espace
          2) image contain pour ne pas couper la photo
      ================================================= */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-[1.015]"
            }`}
          >
            {/* Fond premium large */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="
                  object-cover
                  object-center
                  scale-[1.04]
                  blur-[6px]
                  brightness-[0.34]
                "
              />
            </div>

            {/* Image principale entière */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="
                  object-contain
                  object-center
                "
              />
            </div>
          </div>
        ))}
      </div>

      {/* =================================================
          OVERLAYS PREMIUM
      ================================================= */}
      <div className="absolute inset-0 bg-black/28" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/28 to-black/46" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/20 to-white/5" />

      {/* Lueurs décoratives */}
      <div className="absolute -left-20 top-16 h-48 w-48 rounded-full bg-red-500/10 blur-3xl" />
      <div className="absolute right-0 top-10 h-60 w-60 rounded-full bg-amber-400/10 blur-3xl" />

      {/* =================================================
          CONTENU DU HERO
          On ajoute du padding bottom pour laisser
          la place au bandeau événement sans chevauchement
      ================================================= */}
      <div className="relative z-10">
        <div className="container-custom">
          <div
            className={`
              flex min-h-[72vh] md:min-h-[78vh] lg:min-h-[82vh]
              items-center pb-[10rem] md:pb-[9rem] lg:pb-[8rem]
              ${contentPositionClasses[activeSlide.contentPosition]}
            `}
          >
            {/* =============================================
                BLOC TEXTE ANIMÉ
                La key relance l'animation à chaque slide
                sans setState supplémentaire
            ============================================= */}
            <div
              key={activeSlide.id}
              className={`
                hero-text-enter
                ${textBlockWidthClasses[activeSlide.contentPosition]}
              `}
            >
              {/* Badge premium */}
              <span
                className="
                  inline-flex items-center rounded-full
                  border border-white/20 bg-white/10
                  px-4 py-2 text-[0.76rem] font-semibold uppercase
                  tracking-[0.18em] text-white/90
                  shadow-[0_10px_30px_rgba(0,0,0,0.10)]
                  backdrop-blur-md
                  md:text-[0.82rem]
                "
              >
                {activeSlide.badge}
              </span>

              {/* Titre */}
              <h1
                className="
                  mt-5
                  text-4xl font-black uppercase leading-[0.95]
                  tracking-[0.06em] text-white
                  drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                "
              >
                {activeSlide.title}
              </h1>

              {/* Sous-titre */}
              <p
                className="
                  mt-5
                  text-base font-semibold text-white/95
                  sm:text-lg
                  md:text-2xl
                "
              >
                {activeSlide.subtitle}
              </p>

              {/* Description */}
              <p
                className="
                  mt-4 max-w-2xl
                  text-sm leading-7 text-gray-200
                  sm:text-base
                  md:text-lg
                "
              >
                {activeSlide.description}
              </p>

              {/* Boutons CTA */}
              <div
                className={`mt-8 flex flex-col gap-4 sm:flex-row ${
                  activeSlide.contentPosition === "right"
                    ? "md:justify-end"
                    : ""
                }`}
              >
                <Link
                  href="#disciplines"
                  className="
                    inline-flex items-center justify-center
                    rounded-full bg-red-600 px-7 py-3.5
                    text-sm font-semibold text-white
                    shadow-[0_12px_30px_rgba(220,38,38,0.30)]
                    transition-all duration-300
                    hover:-translate-y-[1px]
                    hover:bg-red-700
                    md:text-base
                  "
                >
                  Découvrir les disciplines
                </Link>

                <Link
                  href="#contact"
                  className="
                    inline-flex items-center justify-center
                    rounded-full border border-white/20
                    bg-white/12 px-7 py-3.5
                    text-sm font-semibold text-white
                    backdrop-blur-md
                    transition-all duration-300
                    hover:-translate-y-[1px]
                    hover:bg-white hover:text-black
                    md:text-base
                  "
                >
                  Nous contacter
                </Link>
              </div>

              {/* Infos premium */}
              <div
                className={`mt-8 flex flex-wrap gap-3 ${
                  activeSlide.contentPosition === "right"
                    ? "md:justify-end"
                    : ""
                }`}
              >
                <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-sm md:text-sm">
                  Club structuré
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-sm md:text-sm">
                  Ambiance premium
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-sm md:text-sm">
                  Tous niveaux
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          BANDEAU ÉVÉNEMENT PREMIUM
          Version raffinée :
          - accent rouge/or
          - badge billetterie ouverte
          - compte à rebours discret
          - rendu fin et élégant
      ================================================= */}
      <div className="pointer-events-none absolute inset-x-0 bottom-16 z-20 md:bottom-14 lg:bottom-12">
        <div className="container-custom">
          <div
            className="
              pointer-events-auto
              mx-auto flex w-full max-w-5xl flex-col gap-4
              rounded-[24px] border border-white/10
              bg-white/[0.06] px-4 py-3 text-white
              shadow-[0_12px_32px_rgba(0,0,0,0.12)]
              backdrop-blur-xl
              md:flex-row md:items-center md:justify-between md:px-5 md:py-3.5
              lg:px-6
            "
          >
            {/* =========================================
                Bloc gauche : accent visuel + infos gala
            ========================================= */}
            <div className="flex min-w-0 items-start gap-4">
              {/* Accent vertical lumineux premium */}
              {/* Accent vertical lumineux premium avec shimmer discret */}
              <div className="event-shimmer-line hidden h-[72px] w-[3px] rounded-full md:block" />

              <div className="min-w-0">
                {/* Ligne badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex rounded-full bg-red-600/85 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white">
                    {upcomingEvent.label}
                  </span>

                  {/* Badge billetterie avec pulse ultra discret */}
                  <span className="event-ticket-badge inline-flex rounded-full border border-amber-300/25 bg-amber-400/10 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-amber-200">
                    Billetterie ouverte
                  </span>
                </div>

                {/* Titre */}
                <h2 className="mt-2 text-base font-extrabold text-white md:text-lg lg:text-xl">
                  {upcomingEvent.title}
                </h2>

                {/* Meta infos */}
                <div className="mt-2 flex flex-col gap-1.5 text-xs text-white/85 md:flex-row md:flex-wrap md:items-center md:gap-4 md:text-sm">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays size={14} />
                    {upcomingEvent.date}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <MapPin size={14} />
                    {upcomingEvent.location}
                  </span>
                </div>
              </div>
            </div>

            {/* =========================================
                Bloc droit : countdown + CTA
            ========================================= */}
            <div className="flex flex-col gap-3 md:items-end">
              {/* Compte à rebours discret */}
              <div className="flex flex-wrap items-center gap-2 md:justify-end">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/55">
                  Début dans
                </span>

                <div className="flex items-center gap-2">
                  <div className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-xs font-semibold text-white/90">
                    {timeLeft.days}j
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-xs font-semibold text-white/90">
                    {timeLeft.hours}h
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-xs font-semibold text-white/90">
                    {timeLeft.minutes}m
                  </div>
                </div>
              </div>

              {/* CTA gala */}
              <Link
                href={upcomingEvent.href}
                className="
                  inline-flex shrink-0 items-center justify-center
                  rounded-full border border-white/15
                  bg-white/88 px-4 py-2.5
                  text-xs font-semibold text-black
                  transition-all duration-300
                  hover:-translate-y-[1px]
                  hover:bg-red-600 hover:text-white
                  md:px-5 md:text-sm
                "
              >
                {upcomingEvent.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          CONTRÔLES DU CAROUSEL
      ================================================= */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20">
        <div className="container-custom flex items-center justify-between gap-4">
          {/* Flèches */}
          <div className="pointer-events-auto flex items-center gap-3">
            <button
              type="button"
              onClick={goToPrevSlide}
              aria-label="Slide précédente"
              className="
                inline-flex h-11 w-11 items-center justify-center
                rounded-full border border-white/20
                bg-white/10 text-white
                backdrop-blur-md
                transition-all duration-300
                hover:bg-white hover:text-black
              "
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={goToNextSlide}
              aria-label="Slide suivante"
              className="
                inline-flex h-11 w-11 items-center justify-center
                rounded-full border border-white/20
                bg-white/10 text-white
                backdrop-blur-md
                transition-all duration-300
                hover:bg-white hover:text-black
              "
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Indicateurs */}
          <div className="pointer-events-auto flex items-center gap-2">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Aller à la slide ${index + 1}`}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-10 bg-white"
                    : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
