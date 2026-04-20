"use client";

// =====================================================
// IMPORTS
// =====================================================
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  MapPin,
  ChevronDown,
} from "lucide-react";

// =====================================================
// TYPE DES SLIDES HERO
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
// COMPOSANT HERO PREMIUM (MOBILE ULTRA COMPACT)
// =====================================================
export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isEventOpen, setIsEventOpen] = useState(false);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5500);
    return () => clearInterval(interval);
  }, []);

  const activeSlide = heroSlides[currentSlide];
  const eventDate = new Date("2026-10-18T20:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00" });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
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
        min-h-[95svh] md:min-h-[78vh] lg:min-h-[82vh]
      "
    >
      {/* =================================================
          ZONE IMAGE DU HERO
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
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="
                  object-cover object-center
                  scale-[1.04]
                  blur-[6px]
                  brightness-[0.28]
                  md:brightness-[0.34]
                "
              />
            </div>
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="
                  object-cover object-center
                  opacity-75
                  md:object-contain md:opacity-100
                "
              />
            </div>
          </div>
        ))}
      </div>

      {/* =================================================
          OVERLAYS PREMIUM
      ================================================= */}
      <div className="absolute inset-0 bg-black/36 md:bg-black/28" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/38 to-black/54 md:from-black/72 md:via-black/28 md:to-black/46" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/35 to-white/5 md:from-black/78 md:via-black/20 md:to-white/5" />

      <div className="absolute -left-20 top-16 h-48 w-48 rounded-full bg-red-500/10 blur-3xl" />
      <div className="absolute right-0 top-10 h-60 w-60 rounded-full bg-amber-400/10 blur-3xl" />

      {/* =================================================
          CONTENU DU HERO (COMPACTÉ SUR MOBILE)
      ================================================= */}
      <div className="relative z-10">
        <div className="container-custom">
          <div
            className={`
              flex min-h-[95svh] md:min-h-[78vh] lg:min-h-[82vh]
              items-start md:items-center
              pt-5 md:pt-0
              pb-[14rem] sm:pb-[13rem] md:pb-[9rem] lg:pb-[8rem]
              ${contentPositionClasses[activeSlide.contentPosition]}
            `}
          >
            <div
              key={activeSlide.id}
              className={`
                hero-text-enter
                ${textBlockWidthClasses[activeSlide.contentPosition]}
                w-full
              `}
            >
              {/* Badge premium - réduit sur mobile */}
              <span
                className="
                  inline-flex items-center rounded-full
                  border border-white/20 bg-white/10
                  px-2.5 py-1 text-[0.55rem] font-semibold uppercase
                  tracking-[0.14em] text-white/90
                  shadow-[0_10px_30px_rgba(0,0,0,0.10)]
                  backdrop-blur-md
                  sm:px-3 sm:py-1.5 sm:text-[0.62rem]
                  md:px-4 md:py-2 md:text-[0.82rem]
                "
              >
                {activeSlide.badge}
              </span>

              {/* Titre - réduit */}
              <h1
                className="
                  mt-2.5 sm:mt-3
                  max-w-[11ch]
                  text-[2.2rem] font-black uppercase leading-[0.92]
                  tracking-[0.02em] text-white
                  drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                  sm:max-w-[12ch] sm:text-[2.5rem]
                  md:mt-5 md:max-w-none md:text-6xl md:tracking-[0.06em]
                  lg:text-7xl
                "
              >
                {activeSlide.title}
              </h1>

              {/* Sous-titre - réduit */}
              <p
                className="
                  mt-2 max-w-[24rem]
                  text-[0.9rem] font-semibold leading-6 text-white/95
                  sm:text-[1rem] sm:leading-7
                  md:mt-5 md:text-2xl
                "
              >
                {activeSlide.subtitle}
              </p>

              {/* Description - réduite */}
              <p
                className="
                  mt-2 max-w-[28rem]
                  text-[0.85rem] leading-5 text-gray-200
                  sm:text-[0.95rem] sm:leading-6
                  md:mt-4 md:max-w-2xl md:text-lg
                "
              >
                {activeSlide.description}
              </p>

              {/* Boutons CTA - réduits */}
              <div
                className={`mt-4 flex flex-col gap-2 sm:flex-row sm:gap-3 ${
                  activeSlide.contentPosition === "right"
                    ? "md:justify-end"
                    : ""
                }`}
              >
                <Link
                  href="#disciplines"
                  className="
                    inline-flex min-h-[46px] items-center justify-center
                    rounded-full bg-red-600 px-5 py-3
                    text-sm font-semibold text-white
                    shadow-[0_12px_30px_rgba(220,38,38,0.30)]
                    transition-all duration-300
                    hover:-translate-y-[1px] hover:bg-red-700
                    md:min-h-[54px] md:px-7 md:text-base
                  "
                >
                  Découvrir les disciplines
                </Link>

                <Link
                  href="#contact"
                  className="
                    inline-flex items-center justify-center
                    text-xs font-semibold text-white/78
                    transition hover:text-white
                    sm:hidden
                  "
                >
                  Nous contacter
                </Link>

                <Link
                  href="#contact"
                  className="
                    hidden sm:inline-flex sm:min-h-[46px] sm:items-center sm:justify-center
                    rounded-full border border-white/20
                    bg-white/12 px-5 py-3
                    text-sm font-semibold text-white
                    backdrop-blur-md
                    transition-all duration-300
                    hover:-translate-y-[1px]
                    hover:bg-white hover:text-black
                    md:min-h-[54px] md:px-7 md:text-base
                  "
                >
                  Nous contacter
                </Link>
              </div>

              {/* Infos premium - inchangé sur desktop */}
              <div
                className={`mt-6 hidden flex-wrap gap-3 md:flex ${
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
          BANDEAU ÉVÉNEMENT DESKTOP (inchangé)
      ================================================= */}
      <div className="pointer-events-none absolute inset-x-0 bottom-20 z-20 hidden md:block md:bottom-14 lg:bottom-12">
        <div className="container-custom">
          <div
            className="
              pointer-events-auto
              mx-auto flex w-full max-w-5xl flex-col gap-4
              rounded-[24px] border border-white/10
              bg-white/[0.06] px-4 py-4 text-white
              shadow-[0_12px_32px_rgba(0,0,0,0.12)]
              backdrop-blur-xl
              md:flex-row md:items-center md:justify-between md:px-5 md:py-3.5
              lg:px-6
            "
          >
            <div className="flex min-w-0 items-start gap-4">
              <div className="event-shimmer-line hidden h-[72px] w-[3px] rounded-full md:block" />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex rounded-full bg-red-600/85 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-white md:text-[0.62rem]">
                    {upcomingEvent.label}
                  </span>
                  <span className="event-ticket-badge inline-flex rounded-full border border-amber-300/25 bg-amber-400/10 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-amber-200 md:text-[0.62rem]">
                    Billetterie ouverte
                  </span>
                </div>
                <h2 className="mt-3 text-[1.05rem] font-extrabold leading-7 text-white md:mt-2 md:text-lg lg:text-xl">
                  {upcomingEvent.title}
                </h2>
                <div className="mt-3 flex flex-col gap-2 text-[0.9rem] text-white/85 md:mt-2 md:flex-row md:flex-wrap md:items-center md:gap-4 md:text-sm">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays size={15} />
                    {upcomingEvent.date}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin size={15} />
                    {upcomingEvent.location}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <div className="flex flex-wrap items-center gap-2 md:justify-end">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/55 md:text-[0.68rem] md:tracking-[0.18em]">
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
              <Link
                href={upcomingEvent.href}
                className="
                  inline-flex min-h-[52px] shrink-0 items-center justify-center
                  rounded-full border border-white/15
                  bg-white/88 px-4 py-2.5
                  text-sm font-semibold text-black
                  transition-all duration-300
                  hover:-translate-y-[1px]
                  hover:bg-red-600 hover:text-white
                  md:min-h-0 md:px-5 md:text-sm
                "
              >
                {upcomingEvent.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          MINI DRAWER ÉVÉNEMENT MOBILE (ENCORE PLUS COMPACT)
      ================================================= */}
      <div className="pointer-events-none absolute inset-x-0 bottom-16 z-20 md:hidden">
        <div className="container-custom">
          <div className="pointer-events-auto mx-auto w-full max-w-xl">
            <div className="overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.07] backdrop-blur-xl shadow-[0_12px_28px_rgba(0,0,0,0.16)]">
              <button
                type="button"
                onClick={() => setIsEventOpen((prev) => !prev)}
                className="flex w-full items-center justify-between gap-2 px-3 py-3 text-left"
                aria-expanded={isEventOpen}
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="inline-flex rounded-full bg-red-600/85 px-2 py-0.5 text-[0.5rem] font-bold uppercase tracking-[0.14em] text-white">
                      {upcomingEvent.label}
                    </span>
                    <span className="inline-flex rounded-full border border-amber-300/25 bg-amber-400/10 px-2 py-0.5 text-[0.5rem] font-bold uppercase tracking-[0.14em] text-amber-200">
                      Ouvert
                    </span>
                  </div>
                  <p className="mt-2 truncate text-[0.9rem] font-extrabold text-white">
                    {upcomingEvent.title}
                  </p>
                  <p className="mt-0.5 text-[0.7rem] text-white/68">
                    {upcomingEvent.date}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <div className="rounded-full border border-white/10 bg-white/8 px-2.5 py-1 text-[0.65rem] font-semibold text-white/90">
                    {timeLeft.days}j
                  </div>
                  <ChevronDown
                    size={16}
                    className={`text-white/75 transition-transform duration-300 ${
                      isEventOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isEventOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-white/10 px-3 pb-3 pt-2">
                    <div className="space-y-1.5 text-[0.8rem] text-white/82">
                      <p className="inline-flex items-center gap-1.5">
                        <CalendarDays size={13} />
                        {upcomingEvent.date}
                      </p>
                      <p className="inline-flex items-center gap-1.5">
                        <MapPin size={13} />
                        {upcomingEvent.location}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center gap-2">
                      <div className="rounded-full border border-white/10 bg-white/8 px-2.5 py-1 text-[0.7rem] font-semibold text-white/90">
                        {timeLeft.days}j
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/8 px-2.5 py-1 text-[0.7rem] font-semibold text-white/90">
                        {timeLeft.hours}h
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/8 px-2.5 py-1 text-[0.7rem] font-semibold text-white/90">
                        {timeLeft.minutes}m
                      </div>
                    </div>

                    <Link
                      href={upcomingEvent.href}
                      className="
                        mt-3 inline-flex min-h-[42px] w-full items-center justify-center
                        rounded-full border border-white/15
                        bg-white/92 px-4 py-2.5
                        text-xs font-semibold text-black
                        transition-all duration-300
                        hover:bg-red-600 hover:text-white
                      "
                    >
                      {upcomingEvent.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          CONTRÔLES DU CAROUSEL (RÉDUITS SUR MOBILE)
      ================================================= */}
      <div className="pointer-events-none absolute inset-x-0 bottom-3 z-20 md:bottom-6">
        <div className="container-custom flex items-center justify-between gap-4">
          <div className="pointer-events-auto flex items-center gap-2">
            <button
              type="button"
              onClick={goToPrevSlide}
              aria-label="Slide précédente"
              className="
                inline-flex h-8 w-8 items-center justify-center
                rounded-full border border-white/20
                bg-white/10 text-white
                backdrop-blur-md
                transition-all duration-300
                hover:bg-white hover:text-black
                md:h-11 md:w-11
              "
            >
              <ChevronLeft size={16} className="md:h-5 md:w-5" />
            </button>
            <button
              type="button"
              onClick={goToNextSlide}
              aria-label="Slide suivante"
              className="
                inline-flex h-8 w-8 items-center justify-center
                rounded-full border border-white/20
                bg-white/10 text-white
                backdrop-blur-md
                transition-all duration-300
                hover:bg-white hover:text-black
                md:h-11 md:w-11
              "
            >
              <ChevronRight size={16} className="md:h-5 md:w-5" />
            </button>
          </div>

          <div className="pointer-events-auto flex items-center gap-1.5">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Aller à la slide ${index + 1}`}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-7 bg-white md:w-10"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}