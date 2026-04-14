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
// Version premium robuste et parfaitement responsive
// =====================================================
export default function AthleteCard({ athlete, index = 0 }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className="
        group relative flex h-full flex-col
        overflow-hidden rounded-[30px]
        border border-white/10 bg-white/[0.05]
        shadow-[0_18px_40px_rgba(0,0,0,0.22)]
        backdrop-blur-xl
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

      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden md:h-52 xl:h-56">
        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full"
        >
          <Image
            src={athlete.image}
            alt={athlete.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

        {/* Badge discipline */}
        <div className="absolute left-4 top-4">
          <span
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md"
            style={{ boxShadow: `0 0 24px ${athlete.glow}` }}
          >
            <Trophy size={13} />
            {athlete.discipline}
          </span>
        </div>

        {/* Nom et niveau */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white/75 md:text-xs">
            {athlete.level}
          </p>
          <h3 className="mt-2 text-xl font-black uppercase tracking-[0.03em] text-white md:text-2xl">
            {athlete.name}
          </h3>
        </div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 flex flex-1 flex-col p-5 md:p-6">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-2.5 md:gap-3">
          <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-3">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/50">
              Niveau
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              {athlete.level}
            </p>
          </div>

          <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-3">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/50">
              Record
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
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
          <ul className="mt-3 space-y-2">
            {athlete.achievements.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="flex items-start gap-2 text-sm text-white/68"
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

        {/* Bouton mobile */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="mt-4 flex items-center gap-2 text-sm font-semibold text-white/75 md:hidden"
          aria-expanded={open}
        >
          Voir plus
          <motion.span animate={{ rotate: open ? 180 : 0 }}>
            <ChevronDown size={16} />
          </motion.span>
        </button>

        {/* Zone mobile dépliante */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden md:hidden"
            >
              <div className="pt-4">
                <p className="text-sm leading-7 text-white/68">
                  {athlete.description}
                </p>

                <div className="mt-4 rounded-[20px] border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/65">
                    Palmarès
                  </p>
                  <ul className="mt-3 space-y-2">
                    {athlete.achievements.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-sm text-white/68"
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
        <div className="mt-auto pt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/athletes/${athlete.slug}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.12]"
          >
            Voir le profil
            <ShieldCheck size={16} />
          </Link>

          <Link
            href="/inscription"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-red-600 hover:text-white"
          >
            Rejoindre le club
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}