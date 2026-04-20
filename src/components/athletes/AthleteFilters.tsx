"use client";

// =====================================================
// IMPORTS
// =====================================================
import { motion } from "framer-motion";

// =====================================================
// TYPES DU COMPOSANT
// =====================================================
type Props = {
  disciplines: string[];
  active: string;
  onChange: (discipline: string) => void;
};

// =====================================================
// COMPOSANT FILTRES ATHLÈTES
// V2 PREMIUM MOBILE
// =====================================================
export default function AthleteFilters({
  disciplines,
  active,
  onChange,
}: Props) {
  const filters = ["Tous", ...disciplines];

  return (
    <motion.div
      className="mb-6 md:mb-10"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Label */}
      <div className="mb-3 flex items-center justify-between md:mb-4">
        <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/45 md:text-[0.78rem] md:tracking-[0.16em]">
          Filtrer les profils
        </p>
      </div>

      {/* Mobile : scroll horizontal premium */}
      <div className="-mx-1 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max min-w-full gap-2 px-1 md:flex-wrap md:justify-center md:gap-3">
          {filters.map((discipline) => {
            const isActive = active === discipline;

            return (
              <motion.button
                key={discipline}
                type="button"
                onClick={() => onChange(discipline)}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  shrink-0 rounded-full border px-3.5 py-2
                  text-[0.84rem] font-semibold transition-all duration-300
                  md:px-4 md:text-sm
                  ${
                    isActive
                      ? "border-red-500 bg-red-600 text-white shadow-[0_12px_24px_rgba(220,38,38,0.22)]"
                      : "border-white/10 bg-white/[0.06] text-white/78 hover:border-white/20 hover:bg-white/[0.12] hover:text-white"
                  }
                `}
              >
                {discipline}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}