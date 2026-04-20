"use client";

// =====================================================
// IMPORTS
// =====================================================
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Trophy, ShieldCheck } from "lucide-react";
import type { Athlete } from "@/data/athletes";

// =====================================================
// PROPS DU COMPOSANT
// =====================================================
type Props = {
  athlete: Athlete;
  index?: number;
};

// =====================================================
// COMPOSANT CARD ATHLÈTE
// V2 PREMIUM MOBILE + DESKTOP
// =====================================================
export default function AthleteCard({ athlete, index = 0 }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{
        duration: 0.52,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -5 }}
      className="
        group relative flex h-full flex-col
        overflow-hidden rounded-[24px]
        border border-white/10 bg-white/[0.05]
        shadow-[0_16px_34px_rgba(0,0,0,0.20)]
        backdrop-blur-xl
        md:rounded-[30px]
        md:shadow-[0_18px_40px_rgba(0,0,0,0.22)]
      "
    >
      {/* Halo dynamique */}
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background: `radial-gradient(circle at top right, ${athlete.glow} 0%, transparent 35%)`,
        }}
      />

      {/* Ligne d’accent */}
      <div
        className="absolute inset-x-0 top-0 h-[2px]"
        style={{
          background: `linear-gradient(to right, ${athlete.accent}, rgba(255,255,255,0.45), transparent)`,
        }}
      />

      {/* =============================================
          IMAGE / HERO CARD
      ============================================= */}
      <div className="relative h-44 w-full overflow-hidden sm:h-48 md:h-56 xl:h-60">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full"
        >
          <Image
            src={athlete.image}
            alt={athlete.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover"
            style={{ objectPosition: athlete.imagePosition }}
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

        {/* Discipline badge */}
        <div className="absolute left-3 top-3 md:left-4 md:top-4">
          <span
            className="
              inline-flex items-center gap-1.5 rounded-full
              border border-white/10 bg-black/35
              px-2.5 py-1 text-[0.58rem] font-bold uppercase
              tracking-[0.14em] text-white
              backdrop-blur-md
              sm:px-3 sm:text-[0.62rem]
              md:px-3 md:py-1.5 md:text-[0.72rem] md:tracking-[0.16em]
            "
            style={{ boxShadow: `0 0 24px ${athlete.glow}` }}
          >
            <Trophy size={11} className="md:h-[13px] md:w-[13px]" />
            {athlete.discipline}
          </span>
        </div>

        {/* Niveau + nom */}
        <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4">
          <p
            className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-white/74 sm:text-[0.64rem] md:text-xs md:tracking-[0.16em]"
            style={{ color: athlete.accent }}
          >
            {athlete.level}
          </p>

          <h3 className="mt-1 text-[1.1rem] font-black uppercase leading-[1] tracking-[0.02em] text-white sm:text-[1.22rem] md:mt-2 md:text-2xl md:tracking-[0.03em]">
            {athlete.name}
          </h3>
        </div>
      </div>

      {/* =============================================
          CONTENU
      ============================================= */}
      <div className="relative z-10 flex flex-1 flex-col p-4 md:p-6">
        {/* Stats compactes */}
        <div className="grid grid-cols-2 gap-2.5 md:gap-3">
          <div className="rounded-[16px] border border-white/10 bg-white/[0.04] p-3 md:rounded-[18px]">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white/50 md:text-[0.68rem] md:tracking-[0.14em]">
              Niveau
            </p>
            <p className="mt-1 text-[0.84rem] font-semibold text-white sm:text-[0.88rem] md:text-sm">
              {athlete.level}
            </p>
          </div>

          <div className="rounded-[16px] border border-white/10 bg-white/[0.04] p-3 md:rounded-[18px]">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white/50 md:text-[0.68rem] md:tracking-[0.14em]">
              Record
            </p>
            <p className="mt-1 text-[0.84rem] font-semibold text-white sm:text-[0.88rem] md:text-sm">
              {athlete.record}
            </p>
          </div>
        </div>

        {/* Description desktop */}
        <p className="mt-4 hidden text-sm leading-7 text-white/68 md:block">
          {athlete.description}
        </p>

        {/* Palmarès desktop */}
        <div className="mt-4 hidden md:block">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/65">
            Palmarès
          </p>

          <ul className="mt-3 space-y-2.5">
            {athlete.achievements.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="flex items-start gap-2 text-sm leading-6 text-white/68"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: athlete.accent }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile teaser */}
        <div className="mt-3 md:hidden">
          <p className="line-clamp-2 text-[0.84rem] leading-6 text-white/64">
            {athlete.description}
          </p>
        </div>

        {/* Bouton mobile */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="
            mt-3 flex items-center gap-2
            text-[0.84rem] font-semibold text-white/78
            transition hover:text-white
            md:hidden
          "
          aria-expanded={open}
        >
          {open ? "Réduire" : "Voir plus"}
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <ChevronDown size={15} />
          </motion.span>
        </button>

        {/* Zone mobile dépliante */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden md:hidden"
            >
              <div className="pt-4">
                <p className="text-[0.88rem] leading-6 text-white/68">
                  {athlete.description}
                </p>

                <div className="mt-4 rounded-[18px] border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-[0.66rem] font-bold uppercase tracking-[0.14em] text-white/65">
                    Palmarès
                  </p>

                  <ul className="mt-3 space-y-2.5">
                    {athlete.achievements.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-[0.84rem] leading-6 text-white/68"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: athlete.accent }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA alignés en bas */}
        <div className="mt-auto flex flex-col gap-2.5 pt-5 sm:flex-row md:pt-6 md:gap-3">
          <Link
            href={`/athletes/${athlete.slug}`}
            className="
              inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full
              border border-white/10 bg-white/[0.06]
              px-4 py-2.5 text-sm font-semibold text-white
              transition-all duration-300
              hover:border-white/20 hover:bg-white/[0.12]
              md:px-5 md:py-3
            "
          >
            Voir le profil
            <ShieldCheck size={15} className="md:h-4 md:w-4" />
          </Link>

          <Link
            href="/inscription"
            className="
              inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full
              bg-white px-4 py-2.5 text-sm font-semibold text-black
              transition-all duration-300
              hover:bg-red-600 hover:text-white
              md:px-5 md:py-3
            "
          >
            Rejoindre le club
            <ArrowRight size={15} className="md:h-4 md:w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}