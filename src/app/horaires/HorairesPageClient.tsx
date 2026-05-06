"use client";

import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// ──────────────────────────────────────────────────────
// TYPES
// ──────────────────────────────────────────────────────

type DayKey =
  | "Lundi"
  | "Mardi"
  | "Mercredi"
  | "Jeudi"
  | "Vendredi"
  | "Samedi"
  | "Dimanche";

type PlanningItem = {
  _id?: string;
  club: string;
  discipline: string;
  category?: string;
  color?: string;
  day: DayKey;
  time: string;
  audience: string;
  level: string;
};

type ScheduleCell = {
  day: DayKey;
  time: string;
  audience: string;
  level: string;
};

type DisciplineRow = {
  discipline: string;
  category: string;
  color: string;
  slots: ScheduleCell[];
};

type Club = {
  id: number;
  name: string;
  cityLabel: string;
  address: string;
  phone: string;
  accent: string;
  glow: string;
  age: string;
  rows: DisciplineRow[];
};

type DayBlock = {
  discipline: string;
  category: string;
  color: string;
  time: string;
  audience: string;
  level: string;
};

// ──────────────────────────────────────────────────────
// CONSTANTS
// ──────────────────────────────────────────────────────

const days: DayKey[] = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

const shortDayLabels: Record<DayKey, string> = {
  Lundi: "LUN",
  Mardi: "MAR",
  Mercredi: "MER",
  Jeudi: "JEU",
  Vendredi: "VEN",
  Samedi: "SAM",
  Dimanche: "DIM",
};

// ──────────────────────────────────────────────────────
// HELPERS
// ──────────────────────────────────────────────────────

function parseStartMinutes(time: string) {
  const start = time.split(/[-–]/)[0].trim();
  const [h, m] = start.split(":").map(Number);
  return h * 60 + (m || 0);
}

function buildClubsFromAPI(data: PlanningItem[]): Club[] {
  const baseClubs: Record<string, Club> = {
    "Tours Nord": {
      id: 1,
      name: "Boxing Club Tours Nord",
      cityLabel: "Tours Nord",
      address: "81 Av. de l'Europe, 37100 Tours",
      phone: "06 08 95 66 66",
      accent: "#ef4444",
      glow: "rgba(239,68,68,0.25)",
      age: "Enfants à partir de 6 ans",
      rows: [],
    },
    "Tours Métropole": {
      id: 2,
      name: "Boxing Club Tours Métropole",
      cityLabel: "Tours Métropole",
      address: "65 Av. du Général de Gaulle, 37000 Tours",
      phone: "06 08 95 66 66",
      accent: "#f59e0b",
      glow: "rgba(245,158,11,0.25)",
      age: "Enfants à partir de 6 ans",
      rows: [],
    },
    "La Riche": {
      id: 3,
      name: "Boxing Club La Riche",
      cityLabel: "La Riche",
      address: "1 Rue du Petit Plessis, 37520 La Riche",
      phone: "02 47 55 51 61",
      accent: "#22c55e",
      glow: "rgba(34,197,94,0.25)",
      age: "Enfants à partir de 6 ans",
      rows: [],
    },
  };

  data.forEach((item) => {
    const club = baseClubs[item.club];
    if (!club) return;

    let row = club.rows.find((r) => r.discipline === item.discipline);
    if (!row) {
      row = {
        discipline: item.discipline,
        category: item.category ?? "Club",
        color: item.color ?? "#ffffff",
        slots: [],
      };
      club.rows.push(row);
    }

    row.slots.push({
      day: item.day,
      time: item.time,
      audience: item.audience,
      level: item.level,
    });
  });

  return Object.values(baseClubs);
}

function groupSlotsByDay(club: Club): Record<DayKey, DayBlock[]> {
  const map = Object.fromEntries(
    days.map((d) => [d, [] as DayBlock[]]),
  ) as Record<DayKey, DayBlock[]>;

  club.rows.forEach((row) => {
    row.slots.forEach((slot) => {
      map[slot.day].push({
        discipline: row.discipline,
        category: row.category,
        color: row.color,
        time: slot.time,
        audience: slot.audience,
        level: slot.level,
      });
    });
  });

  days.forEach((day) => {
    map[day].sort(
      (a, b) => parseStartMinutes(a.time) - parseStartMinutes(b.time),
    );
  });

  return map;
}

function activeDaysForClub(club: Club): DayKey[] {
  const grouped = groupSlotsByDay(club);
  return days.filter((d) => grouped[d].length > 0);
}

// ──────────────────────────────────────────────────────
// COURSE CARD
// ──────────────────────────────────────────────────────

function CourseCard({ slot }: { slot: DayBlock }) {
  return (
    <div
      className="rounded-[24px] border border-white/10 bg-black/50 p-5 transition-all duration-300 hover:scale-[1.02] hover:border-white/20"
      style={{ borderLeftColor: slot.color + "66", borderLeftWidth: 3 }}
    >
      <p className="text-sm text-white/40">{slot.time}</p>
      <h3 className="mt-2 text-lg font-black uppercase leading-tight text-white">
        {slot.discipline}
      </h3>
      <p className="mt-3 text-sm text-white/60">{slot.audience}</p>
      <p className="mt-0.5 text-xs text-white/35">{slot.level}</p>
    </div>
  );
}

// ──────────────────────────────────────────────────────
// PAGE
// ──────────────────────────────────────────────────────

export default function HorairesPageClient() {
  const [planningData, setPlanningData] = useState<PlanningItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [search, setSearch] = useState("");
  const [audienceFilter, setAudienceFilter] = useState("Tous");

  // Club selector
  const [activeClubId, setActiveClubId] = useState(1);

  // Mobile day navigation
  const [selectedDay, setSelectedDay] = useState<DayKey | null>(null);

  // ── FETCH ────────────────────────────────────

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/planning");
        if (!res.ok) return;
        const data: PlanningItem[] = await res.json();
        setPlanningData(data);
      } catch {
        // fallback data is served by the API
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // ── FILTER DATA ──────────────────────────────

  const filteredData = useMemo(() => {
    return planningData.filter((item) => {
      const matchSearch =
        !search ||
        item.discipline.toLowerCase().includes(search.toLowerCase());
      const matchAudience =
        audienceFilter === "Tous" ||
        item.audience.toLowerCase().includes(audienceFilter.toLowerCase());
      return matchSearch && matchAudience;
    });
  }, [planningData, search, audienceFilter]);

  // ── CLUBS + ACTIVE CLUB ──────────────────────

  const clubs = useMemo(
    () => buildClubsFromAPI(filteredData),
    [filteredData],
  );

  const activeClub = useMemo(
    () => clubs.find((c) => c.id === activeClubId) ?? clubs[0],
    [clubs, activeClubId],
  );

  // ── GROUPING ─────────────────────────────────

  const grouped = useMemo<Record<DayKey, DayBlock[]>>(
    () =>
      activeClub
        ? groupSlotsByDay(activeClub)
        : days.reduce<Record<DayKey, DayBlock[]>>(
            (acc, d) => ({ ...acc, [d]: [] }),
            {} as Record<DayKey, DayBlock[]>,
          ),
    [activeClub],
  );

  const shownDays = useMemo(
    () => (activeClub ? activeDaysForClub(activeClub) : []),
    [activeClub],
  );

  // ── SET DEFAULT MOBILE DAY ───────────────────

  useEffect(() => {
    if (shownDays.length > 0) {
      setSelectedDay((prev) =>
        shownDays.includes(prev as DayKey) ? prev : shownDays[0],
      );
    }
  }, [shownDays]);

  // ── UNIQUE AUDIENCES ─────────────────────────

  const audiences = useMemo(() => {
    const raw = [
      ...new Set(planningData.map((p) => p.audience.split("/")[0].trim())),
    ].filter(Boolean);
    return ["Tous", ...raw];
  }, [planningData]);

  // ── MOBILE DAY NAVIGATION ────────────────────

  const selectedDayIndex = selectedDay ? shownDays.indexOf(selectedDay) : 0;

  const goPrev = () => {
    if (selectedDayIndex > 0)
      setSelectedDay(shownDays[selectedDayIndex - 1]);
  };

  const goNext = () => {
    if (selectedDayIndex < shownDays.length - 1)
      setSelectedDay(shownDays[selectedDayIndex + 1]);
  };

  // ── LOADING ──────────────────────────────────

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <div className="mx-auto mb-4 h-14 w-14 animate-spin rounded-full border-4 border-red-500 border-t-transparent" />
          <p className="text-lg font-semibold text-white/70">
            Chargement du planning...
          </p>
        </div>
      </div>
    );
  }

  // ── RENDER ───────────────────────────────────

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050505] pt-28 text-white md:pt-32">
        {/* ── HERO ───────────────────────────── */}

        <section className="border-b border-white/10 bg-gradient-to-b from-[#111] to-[#050505] py-14">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-4xl font-black uppercase tracking-wide">
              Horaires des clubs
            </h1>
            <p className="mt-4 max-w-2xl text-white/50">
              Retrouvez tous les créneaux des clubs Boxing Club Tours
              Métropole.
            </p>
          </div>
        </section>

        {/* ── CONTENT ────────────────────────── */}

        <section className="py-10">
          <div className="mx-auto max-w-7xl px-6">
            {/* ── CLUB SELECTOR ──────────────── */}

            <div className="mb-8 flex flex-wrap gap-3">
              {clubs.map((club) => (
                <button
                  key={club.id}
                  onClick={() => setActiveClubId(club.id)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    activeClubId === club.id
                      ? "scale-105 text-white"
                      : "bg-white/5 text-white/60 hover:bg-white/10"
                  }`}
                  style={
                    activeClubId === club.id
                      ? {
                          background: club.accent,
                          boxShadow: `0 8px 20px ${club.glow}`,
                        }
                      : {}
                  }
                >
                  {club.cityLabel}
                </button>
              ))}
            </div>

            {/* ── FILTERS ────────────────────── */}

            <div className="mb-8 flex flex-wrap items-center gap-3">
              {/* Search */}
              <div className="relative">
                <Search
                  size={14}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30"
                />
                <input
                  type="text"
                  placeholder="Rechercher une discipline..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="h-10 rounded-full bg-white/10 pl-9 pr-9 text-sm text-white outline-none placeholder:text-white/30 focus:ring-2 focus:ring-white/20"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60"
                  >
                    <X size={13} />
                  </button>
                )}
              </div>

              {/* Audience chips */}
              <div className="flex flex-wrap gap-2">
                {audiences.map((aud) => (
                  <button
                    key={aud}
                    onClick={() => setAudienceFilter(aud)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                      audienceFilter === aud
                        ? "bg-white text-black"
                        : "bg-white/10 text-white/60 hover:bg-white/15"
                    }`}
                  >
                    {aud}
                  </button>
                ))}
              </div>
            </div>

            {/* ── EMPTY STATE ────────────────── */}

            {shownDays.length === 0 && (
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-12 text-center">
                <p className="text-xl font-bold">Aucun cours disponible</p>
                <p className="mt-3 text-white/40">
                  {search || audienceFilter !== "Tous"
                    ? "Essayez d'autres filtres."
                    : "Ajoutez des créneaux depuis l'admin."}
                </p>
              </div>
            )}

            {shownDays.length > 0 && (
              <>
                {/* ── MOBILE: Day tabs + single column ── */}

                <div className="md:hidden">
                  {/* Day tabs */}
                  <div className="mb-5 flex items-center gap-2">
                    <button
                      onClick={goPrev}
                      disabled={selectedDayIndex === 0}
                      className="flex-shrink-0 rounded-xl bg-white/10 p-2 disabled:opacity-30"
                    >
                      <ChevronLeft size={16} />
                    </button>

                    <div className="flex flex-1 gap-2 overflow-x-auto pb-1 scrollbar-none">
                      {shownDays.map((day) => (
                        <button
                          key={day}
                          onClick={() => setSelectedDay(day)}
                          className={`flex-shrink-0 rounded-full px-4 py-2 text-xs font-bold transition-all ${
                            selectedDay === day
                              ? "text-white"
                              : "bg-white/10 text-white/50"
                          }`}
                          style={
                            selectedDay === day
                              ? {
                                  background: activeClub?.accent,
                                  boxShadow: `0 4px 12px ${activeClub?.glow}`,
                                }
                              : {}
                          }
                        >
                          {shortDayLabels[day]}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={goNext}
                      disabled={
                        selectedDayIndex === shownDays.length - 1
                      }
                      className="flex-shrink-0 rounded-xl bg-white/10 p-2 disabled:opacity-30"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>

                  {/* Day header */}
                  {selectedDay && (
                    <div
                      className="mb-4 rounded-2xl p-4 text-center text-xl font-black uppercase tracking-wide"
                      style={{
                        background: activeClub?.accent,
                        boxShadow: `0 10px 25px ${activeClub?.glow}`,
                      }}
                    >
                      {selectedDay}
                    </div>
                  )}

                  {/* Courses for selected day */}
                  <AnimatePresence mode="wait">
                    {selectedDay && (
                      <motion.div
                        key={selectedDay}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3"
                      >
                        {grouped[selectedDay].length === 0 ? (
                          <p className="py-8 text-center text-white/40">
                            Aucun cours ce jour.
                          </p>
                        ) : (
                          grouped[selectedDay].map((slot, i) => (
                            <CourseCard
                              key={`${slot.discipline}-${i}`}
                              slot={slot}
                            />
                          ))
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* ── DESKTOP: All days grid ── */}

                <div className="hidden md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                  {shownDays.map((day) => (
                    <div
                      key={day}
                      className="rounded-[32px] border border-white/10 bg-white/[0.03] p-5"
                    >
                      {/* Day header */}
                      <div
                        className="rounded-2xl p-4 text-center text-xl font-black uppercase tracking-wide"
                        style={{
                          background: activeClub?.accent,
                          boxShadow: `0 10px 25px ${activeClub?.glow}`,
                        }}
                      >
                        {shortDayLabels[day]}
                      </div>

                      {/* Courses */}
                      <div className="mt-5 space-y-4">
                        {grouped[day].map((slot, i) => (
                          <CourseCard
                            key={`${slot.discipline}-${i}`}
                            slot={slot}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
