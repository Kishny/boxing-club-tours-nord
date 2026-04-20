"use client";

// =====================================================
// IMPORTS
// =====================================================
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AthleteCard from "./AthleteCard";
import AthleteFilters from "./AthleteFilters";
import { athletes } from "@/data/athletes";

// =====================================================
// COMPOSANT GRILLE ATHLÈTES
// V2 PREMIUM MOBILE + FILTRES ULTRA PROPRES
// =====================================================
export default function AthletesGrid() {
  // ---------------------------------------------------
  // État du filtre actif
  // ---------------------------------------------------
  const [filter, setFilter] = useState("Tous");

  // ---------------------------------------------------
  // Liste unique des disciplines
  // ---------------------------------------------------
  const disciplines = useMemo(() => {
    return Array.from(new Set(athletes.map((athlete) => athlete.discipline)));
  }, []);

  // ---------------------------------------------------
  // Athlètes filtrés
  // ---------------------------------------------------
  const filteredAthletes = useMemo(() => {
    if (filter === "Tous") return athletes;
    return athletes.filter((athlete) => athlete.discipline === filter);
  }, [filter]);

  return (
    <section className="container-custom py-8 pb-16 md:py-16 md:pb-32 lg:pb-36">
      {/* ---------------------------------------------
          FILTRES
      --------------------------------------------- */}
      <AthleteFilters
        disciplines={disciplines}
        active={filter}
        onChange={setFilter}
      />

      {/* ---------------------------------------------
          RÉSULTAT MOBILE COMPACT
      --------------------------------------------- */}
      <div className="mb-4 flex items-center justify-between md:mb-6">
        <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/45 md:text-[0.78rem] md:tracking-[0.16em]">
          {filteredAthletes.length} profil
          {filteredAthletes.length > 1 ? "s" : ""}
        </p>

        <p className="text-[0.78rem] text-white/42 md:text-sm">
          {filter === "Tous" ? "Toutes disciplines" : filter}
        </p>
      </div>

      {/* ---------------------------------------------
          GRILLE ANIMÉE
      --------------------------------------------- */}
      <motion.div
        layout
        className="grid gap-4 md:grid-cols-2 md:gap-7 xl:grid-cols-3 xl:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredAthletes.map((athlete, index) => (
            <motion.div
              key={athlete.slug}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.97 }}
              transition={{
                duration: 0.38,
                delay: index * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full"
            >
              <AthleteCard athlete={athlete} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}