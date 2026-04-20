"use client";

// =====================================================
// IMPORTS
// =====================================================
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Clock3, Building2, ChevronDown } from "lucide-react";

// =====================================================
// DONNÉES DES CLUBS
// Remplace les infos par les vraies
// =====================================================
const clubLogos = [
  {
    id: 1,
    name: "Boxing Club Tours Nord",
    src: "/images/logo-blanc.png",
    address: "81 Av. de l'Europe • 37100 Tours",
    hours: "Lun - Ven • 18h00 à 21h00",
    info: "Club orienté progression, discipline et sports de combat encadrés.",
  },
  {
    id: 2,
    name: "Boxing Club La Riche",
    src: "/images/image.png",
    address: "1 rue du petit Plessis • 37520 La Riche",
    hours: "Mar - Sam • 17h30 à 20h30",
    info: "Structure partenaire avec une approche technique et éducative.",
  },
  {
    id: 3,
    name: "Boxing Club Tours Métropole",
    src: "/images/event-fight.png",
    address: "65 Av. du Général de Gaulle • 37000 Tours",
    hours: "Mer - Dim • 18h00 à 22h00",
    info: "Club engagé dans les événements, galas et accompagnement compétitif.",
  },
];

// =====================================================
// ANIMATIONS
// =====================================================
const revealUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.12,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

// =====================================================
// COMPOSANT SECTION LOGOS DES CLUBS
// DESKTOP : hover premium Framer Motion
// MOBILE : tap pour ouvrir / fermer
// =====================================================
export default function ClubsMarquee() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // ---------------------------------------------------
  // État mobile : une seule card ouverte à la fois
  // ---------------------------------------------------
  const [openId, setOpenId] = useState<number | null>(1);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative overflow-hidden
        border-y border-white/10
        bg-linear-to-r from-[#111111] via-[#171717] to-[#111111]
        py-8 md:py-10 lg:py-12
      "
      aria-label="Clubs représentés"
    >
      {/* =============================================
          LUEURS DE FOND PREMIUM
      ============================================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.28)_1px,transparent_1px)] [background-size:30px_30px]" />
      </div>

      {/* =============================================
          TITRE DE SECTION
      ============================================= */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isVisible ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="container-custom relative z-10 mb-8 md:mb-12 lg:mb-14"
      >
        <p className="text-center text-[0.68rem] font-bold uppercase tracking-[0.24em] text-white/50 md:text-sm md:tracking-[0.28em]">
          Les clubs représentés
        </p>
      </motion.div>

      <div className="container-custom relative z-10">
        {/* =============================================
            VERSION DESKTOP / TABLETTE
        ============================================= */}
        <div className="hidden gap-4 md:grid md:grid-cols-3 lg:gap-5">
          {clubLogos.map((club, index) => (
            <motion.article
              key={club.id}
              custom={index}
              variants={revealUp}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="
                group relative overflow-hidden
                h-[192px] lg:h-[198px]
                rounded-[22px] border border-white/5
                bg-white/[0.025]
                shadow-[0_6px_20px_rgba(0,0,0,0.12)]
                backdrop-blur-md
              "
            >
              {/* Fond / reflet */}
              <div className="pointer-events-none absolute inset-0 rounded-[22px] bg-gradient-to-br from-white/[0.03] via-transparent to-white/[0.02]" />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-red-500/8 via-transparent to-amber-300/8 opacity-70" />

              {/* État normal */}
              <motion.div
                className="absolute inset-0 z-10 flex flex-col items-center justify-center px-5 pb-16 pt-5"
                whileHover={{ scale: 0.985, opacity: 0.18 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative h-[58px] w-[145px]">
                  <Image
                    src={club.src}
                    alt={club.name}
                    fill
                    sizes="145px"
                    className="object-contain opacity-80"
                  />
                </div>

                <p className="mt-4 text-center text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white/42">
                  {club.name}
                </p>
              </motion.div>

              {/* Accordéon bas desktop */}
              <motion.div
                initial={false}
                whileHover={{ height: "100%" }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="
                  absolute inset-x-0 bottom-0 z-20
                  h-[58px]
                  overflow-hidden
                  rounded-t-[20px]
                  border-t border-white/10
                  bg-black/84
                  backdrop-blur-xl
                "
              >
                <div className="pointer-events-none absolute inset-0 rounded-t-[20px] bg-linear-to-br from-red-500/10 via-transparent to-amber-300/10" />

                <div className="relative z-10 px-4 pb-4 pt-4">
                  <div className="flex min-h-[34px] items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-amber-300">
                      <Building2 size={12} />
                      Club
                    </div>

                    <p className="truncate text-right text-sm font-extrabold text-white">
                      {club.name}
                    </p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.22, delay: 0.1 }}
                    className="mt-4 space-y-3"
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-red-400">
                        <MapPin size={13} />
                      </div>
                      <p className="text-[0.76rem] leading-5 text-white/72">
                        {club.address}
                      </p>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-amber-300">
                        <Clock3 size={13} />
                      </div>
                      <p className="text-[0.76rem] leading-5 text-white/72">
                        {club.hours}
                      </p>
                    </div>

                    <p className="pt-1 text-[0.74rem] leading-5 text-white/58">
                      {club.info}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>

        {/* =============================================
            VERSION MOBILE COMPACTE + TAP
        ============================================= */}
        <div className="grid gap-4 md:hidden">
          {clubLogos.map((club, index) => {
            const isOpen = openId === club.id;

            return (
              <motion.article
                key={club.id}
                custom={index}
                variants={revealUp}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="
                  relative overflow-hidden
                  rounded-[22px] border border-white/8
                  bg-white/[0.03]
                  shadow-[0_10px_24px_rgba(0,0,0,0.14)]
                  backdrop-blur-md
                "
              >
                {/* Fond */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-white/[0.02]" />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-red-500/8 via-transparent to-amber-300/8" />

                {/* Header compact cliquable */}
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : club.id)}
                  className="relative z-10 w-full text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col items-center justify-center px-5 pb-4 pt-6">
                    <div className="relative h-[54px] w-[138px]">
                      <Image
                        src={club.src}
                        alt={club.name}
                        fill
                        sizes="138px"
                        className="object-contain opacity-85"
                      />
                    </div>

                    <p className="mt-4 text-center text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/38">
                      {club.name}
                    </p>
                  </div>

                  <div className="relative z-10 border-t border-white/10 bg-black/55 px-4 py-4 backdrop-blur-xl">
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-amber-300">
                          <Building2 size={12} />
                          Club
                        </div>

                        <h3 className="mt-3 truncate pr-3 text-lg font-extrabold text-white">
                          {club.name}
                        </h3>
                      </div>

                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="shrink-0 text-white/65"
                      >
                        <ChevronDown size={18} />
                      </motion.span>
                    </div>
                  </div>
                </button>

                {/* Contenu dépliant */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="relative z-10 border-t border-white/10 bg-black/45 px-4 pb-4 pt-1 backdrop-blur-xl">
                        <div className="mt-4 space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-red-400">
                              <MapPin size={14} />
                            </div>
                            <p className="text-[0.82rem] leading-5 text-white/72">
                              {club.address}
                            </p>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-amber-300">
                              <Clock3 size={14} />
                            </div>
                            <p className="text-[0.82rem] leading-5 text-white/72">
                              {club.hours}
                            </p>
                          </div>
                        </div>

                        <p className="mt-4 text-[0.8rem] leading-6 text-white/58">
                          {club.info}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
