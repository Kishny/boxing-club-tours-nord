// =====================================================
// IMPORTS
// =====================================================
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Phone,
  Sparkles,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

// =====================================================
// SEO PAGE HORAIRES
// =====================================================
export const metadata: Metadata = {
  title: "Horaires des clubs",
  description:
    "Consultez les horaires des 3 clubs Boxing Club Tours Nord, Tours Métropole et La Riche : créneaux, disciplines, niveaux et informations pratiques.",
  alternates: {
    canonical: "https://boxingclub-tours.fr/horaires",
  },
};

// =====================================================
// TYPES
// =====================================================
type Slot = {
  time: string;
  discipline: string;
  audience: string;
  level: string;
};

type DaySchedule = {
  day: string;
  open: boolean;
  range?: string;
  slots?: Slot[];
};

type Club = {
  id: number;
  name: string;
  cityLabel: string;
  address: string;
  phone: string;
  accent: string;
  glow: string;
  days: DaySchedule[];
};

// =====================================================
// DONNÉES CLUBS
// INFOS HORAIRES RÉELLES + CRÉNEAUX FICTIFS TEMPORAIRES
// =====================================================
const clubs: Club[] = [
  {
    id: 1,
    name: "Boxing Club Tours Nord",
    cityLabel: "Tours Nord",
    address: "81 Av. de l'Europe, 37100 Tours",
    phone: "06 08 95 66 66",
    accent: "#ef4444",
    glow: "rgba(239,68,68,0.18)",
    days: [
      {
        day: "Lundi",
        open: true,
        range: "18:30–21:30",
        slots: [
          {
            time: "18:30–19:30",
            discipline: "Kickboxing",
            audience: "Enfants 6+ / Ados",
            level: "Initiation",
          },
          {
            time: "19:30–21:00",
            discipline: "K1 Rules",
            audience: "Ados / Adultes",
            level: "Tous niveaux",
          },
          {
            time: "21:00–21:30",
            discipline: "Renforcement / retour au calme",
            audience: "Adultes",
            level: "Libre",
          },
        ],
      },
      {
        day: "Mardi",
        open: true,
        range: "18:30–21:30",
        slots: [
          {
            time: "18:30–19:30",
            discipline: "Boxe anglaise",
            audience: "Enfants 6+ / Ados",
            level: "Débutant",
          },
          {
            time: "19:30–21:00",
            discipline: "Kickboxing",
            audience: "Adultes",
            level: "Intermédiaire",
          },
          {
            time: "21:00–21:30",
            discipline: "Travail technique",
            audience: "Adultes",
            level: "Confirmé",
          },
        ],
      },
      {
        day: "Mercredi",
        open: true,
        range: "15:00–17:30, 18:00–21:30",
        slots: [
          {
            time: "15:00–16:15",
            discipline: "Aérokick",
            audience: "Ados / Adultes",
            level: "Tous niveaux",
          },
          {
            time: "16:15–17:30",
            discipline: "Cardio Step",
            audience: "Ados / Adultes",
            level: "Tous niveaux",
          },
          {
            time: "18:00–19:15",
            discipline: "Pancrace",
            audience: "Ados / Adultes",
            level: "Initiation",
          },
          {
            time: "19:15–21:30",
            discipline: "Kickboxing / sparring léger",
            audience: "Adultes",
            level: "Confirmé / compétition",
          },
        ],
      },
      {
        day: "Jeudi",
        open: true,
        range: "18:30–21:30",
        slots: [
          {
            time: "18:30–19:30",
            discipline: "Savate",
            audience: "Enfants 6+ / Ados",
            level: "Débutant",
          },
          {
            time: "19:30–21:00",
            discipline: "Muaythai",
            audience: "Adultes",
            level: "Tous niveaux",
          },
          {
            time: "21:00–21:30",
            discipline: "Mobilité / gainage",
            audience: "Adultes",
            level: "Libre",
          },
        ],
      },
      {
        day: "Vendredi",
        open: true,
        range: "17:15–21:30",
        slots: [
          {
            time: "17:15–18:15",
            discipline: "Cardio Step",
            audience: "Ados / Adultes",
            level: "Tous niveaux",
          },
          {
            time: "18:15–19:30",
            discipline: "Kickboxing",
            audience: "Ados / Adultes",
            level: "Tous niveaux",
          },
          {
            time: "19:30–21:30",
            discipline: "Séance intensité / compétition",
            audience: "Adultes",
            level: "Confirmé",
          },
        ],
      },
      { day: "Samedi", open: false },
      { day: "Dimanche", open: false },
    ],
  },
  {
    id: 2,
    name: "Boxing Club Tours Métropole",
    cityLabel: "Tours Métropole",
    address: "65 Av. du Général de Gaulle, 37000 Tours",
    phone: "06 08 95 66 66",
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.18)",
    days: [
      {
        day: "Lundi",
        open: true,
        range: "10:30–21:30",
        slots: [
          {
            time: "10:30–12:00",
            discipline: "Aérokick",
            audience: "Adultes",
            level: "Tous niveaux",
          },
          {
            time: "18:00–19:15",
            discipline: "Boxe anglaise",
            audience: "Ados / Adultes",
            level: "Débutant",
          },
          {
            time: "19:15–21:30",
            discipline: "K1 Rules",
            audience: "Adultes",
            level: "Confirmé / compétition",
          },
        ],
      },
      {
        day: "Mardi",
        open: true,
        range: "10:30–21:30",
        slots: [
          {
            time: "10:30–12:00",
            discipline: "Cardio Step",
            audience: "Adultes",
            level: "Tous niveaux",
          },
          {
            time: "18:00–19:15",
            discipline: "Kickboxing",
            audience: "Enfants 6+ / Ados",
            level: "Initiation",
          },
          {
            time: "19:15–21:30",
            discipline: "Pancrace",
            audience: "Adultes",
            level: "Intermédiaire",
          },
        ],
      },
      {
        day: "Mercredi",
        open: true,
        range: "14:15–21:30",
        slots: [
          {
            time: "14:15–15:30",
            discipline: "Aérokick",
            audience: "Ados / Adultes",
            level: "Tous niveaux",
          },
          {
            time: "18:00–19:15",
            discipline: "Muaythai",
            audience: "Ados / Adultes",
            level: "Débutant / intermédiaire",
          },
          {
            time: "19:15–21:30",
            discipline: "K1 Rules",
            audience: "Adultes",
            level: "Confirmé",
          },
        ],
      },
      {
        day: "Jeudi",
        open: true,
        range: "10:30–21:30",
        slots: [
          {
            time: "10:30–12:00",
            discipline: "Cardio Step",
            audience: "Adultes",
            level: "Tous niveaux",
          },
          {
            time: "18:00–19:15",
            discipline: "Savate",
            audience: "Ados / Adultes",
            level: "Initiation",
          },
          {
            time: "19:15–21:30",
            discipline: "Kickboxing",
            audience: "Adultes",
            level: "Tous niveaux",
          },
        ],
      },
      {
        day: "Vendredi",
        open: true,
        range: "10:30–21:30",
        slots: [
          {
            time: "10:30–12:00",
            discipline: "Aérokick",
            audience: "Adultes",
            level: "Tous niveaux",
          },
          {
            time: "18:00–19:15",
            discipline: "Boxe anglaise",
            audience: "Ados / Adultes",
            level: "Intermédiaire",
          },
          {
            time: "19:15–21:30",
            discipline: "Séance compétition",
            audience: "Adultes",
            level: "Confirmé / élite",
          },
        ],
      },
      { day: "Samedi", open: false },
      { day: "Dimanche", open: false },
    ],
  },
  {
    id: 3,
    name: "Boxing Club La Riche",
    cityLabel: "La Riche",
    address: "1 Rue du Petit Plessis, 37520 La Riche",
    phone: "02 47 55 51 61",
    accent: "#22c55e",
    glow: "rgba(34,197,94,0.18)",
    days: [
      {
        day: "Lundi",
        open: true,
        range: "18:30–21:30",
        slots: [
          {
            time: "18:30–19:30",
            discipline: "Kickboxing",
            audience: "Enfants 6+ / Ados",
            level: "Initiation",
          },
          {
            time: "19:30–21:30",
            discipline: "Muaythai",
            audience: "Adultes",
            level: "Tous niveaux",
          },
        ],
      },
      {
        day: "Mardi",
        open: true,
        range: "18:30–21:30",
        slots: [
          {
            time: "18:30–19:30",
            discipline: "Savate",
            audience: "Enfants 6+ / Ados",
            level: "Débutant",
          },
          {
            time: "19:30–21:30",
            discipline: "Kickboxing",
            audience: "Adultes",
            level: "Intermédiaire",
          },
        ],
      },
      {
        day: "Mercredi",
        open: true,
        range: "14:15–21:30",
        slots: [
          {
            time: "14:15–15:30",
            discipline: "Cardio Step",
            audience: "Ados / Adultes",
            level: "Tous niveaux",
          },
          {
            time: "18:00–19:15",
            discipline: "Pancrace",
            audience: "Ados / Adultes",
            level: "Initiation",
          },
          {
            time: "19:15–21:30",
            discipline: "Kickboxing / sparring",
            audience: "Adultes",
            level: "Confirmé",
          },
        ],
      },
      {
        day: "Jeudi",
        open: true,
        range: "18:30–21:30",
        slots: [
          {
            time: "18:30–19:30",
            discipline: "Boxe anglaise",
            audience: "Enfants 6+ / Ados",
            level: "Débutant",
          },
          {
            time: "19:30–21:30",
            discipline: "Muaythai",
            audience: "Adultes",
            level: "Intermédiaire",
          },
        ],
      },
      {
        day: "Vendredi",
        open: true,
        range: "18:30–20:00",
        slots: [
          {
            time: "18:30–20:00",
            discipline: "Aérokick / cardio combat",
            audience: "Ados / Adultes",
            level: "Tous niveaux",
          },
        ],
      },
      {
        day: "Samedi",
        open: true,
        range: "10:30–12:00",
        slots: [
          {
            time: "10:30–12:00",
            discipline: "Séance technique club",
            audience: "Ados / Adultes",
            level: "Tous niveaux",
          },
        ],
      },
      { day: "Dimanche", open: false },
    ],
  },
];

// =====================================================
// PAGE HORAIRES
// =====================================================
export default function HorairesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#070707] text-white">
        {/* =================================================
            HERO
        ================================================= */}
        <section className="relative overflow-hidden border-b border-white/10 pt-[120px] pb-8 md:pt-[185px] md:pb-20 lg:pb-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-6 h-40 w-40 rounded-full bg-red-600/16 blur-3xl md:top-10 md:h-72 md:w-72 md:bg-red-600/18" />
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-amber-400/12 blur-3xl md:h-80 md:w-80 md:bg-amber-400/14" />
            <div className="absolute bottom-0 left-1/3 h-36 w-36 rounded-full bg-white/5 blur-3xl md:h-72 md:w-72 md:bg-white/6" />

            <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#0a0a0a] to-[#050505]" />
            <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.26)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.26)_1px,transparent_1px)] [background-size:28px_28px] md:opacity-[0.05] md:[background-size:34px_34px]" />
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(135deg,rgba(255,255,255,0.30)_1px,transparent_1px)] [background-size:24px_24px] md:opacity-[0.08] md:[background-size:30px_30px]" />
          </div>

          <div className="container-custom relative z-10">
            <div className="mx-auto max-w-5xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.56rem] font-bold uppercase tracking-[0.12em] text-amber-300 shadow-[0_8px_20px_rgba(0,0,0,0.16)] backdrop-blur-md sm:px-3 sm:py-1.5 sm:text-[0.62rem] md:px-4 md:py-2 md:text-[0.72rem] md:tracking-[0.18em]">
                <CalendarDays size={11} className="md:h-[14px] md:w-[14px]" />
                Organisation des clubs
              </span>

              <h1 className="mt-3 text-[2rem] font-black uppercase leading-[0.9] tracking-[0.025em] text-white sm:text-[2.5rem] md:mt-5 md:text-6xl md:tracking-[0.04em] xl:text-7xl">
                Les horaires
                <br className="hidden sm:block" />
                <span className="block bg-gradient-to-r from-red-500 via-white to-amber-300 bg-clip-text text-transparent">
                  des 3 clubs
                </span>
              </h1>

              <p className="mx-auto mt-3 max-w-[23rem] text-[0.88rem] leading-5 text-white/68 sm:max-w-[30rem] sm:text-[0.94rem] sm:leading-6 md:mt-5 md:max-w-3xl md:text-lg md:leading-7">
                Retrouve les créneaux du Boxing Club Tours Nord, Tours
                Métropole et La Riche, avec une lecture simple, propre et
                pensée mobile.
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 md:mt-8 md:gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/78 sm:px-3 sm:py-1.5 sm:text-[0.72rem] md:px-4 md:py-2 md:text-xs">
                  Enfants 6+
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/78 sm:px-3 sm:py-1.5 sm:text-[0.72rem] md:px-4 md:py-2 md:text-xs">
                  Ados / Adultes
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.66rem] font-semibold text-white/78 sm:px-3 sm:py-1.5 sm:text-[0.72rem] md:px-4 md:py-2 md:text-xs">
                  Créneaux modifiables
                </span>
              </div>

              <p className="mx-auto mt-4 max-w-2xl text-[0.78rem] leading-6 text-white/45 md:mt-5 md:text-sm">
                Les disciplines associées aux créneaux ci-dessous sont
                temporairement affichées à titre de structure et pourront être
                remplacées facilement par les informations définitives.
              </p>
            </div>
          </div>
        </section>

        {/* =================================================
            CLUBS
        ================================================= */}
        <section className="relative overflow-hidden py-8 md:py-16 lg:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-4rem] top-16 h-56 w-56 rounded-full bg-red-600/10 blur-3xl" />
            <div className="absolute right-[-4rem] bottom-10 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />
          </div>

          <div className="container-custom relative z-10 flex flex-col gap-6 md:gap-8 xl:gap-10">
            {clubs.map((club) => (
              <article
                key={club.id}
                className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.05] p-4 shadow-[0_16px_34px_rgba(0,0,0,0.18)] backdrop-blur-xl md:rounded-[34px] md:p-8 md:shadow-[0_20px_50px_rgba(0,0,0,0.22)]"
              >
                <div
                  className="absolute inset-x-0 top-0 h-[2px]"
                  style={{
                    background: `linear-gradient(to right, ${club.accent}, rgba(255,255,255,0.5), transparent)`,
                  }}
                />

                <div
                  className="pointer-events-none absolute inset-0 opacity-90"
                  style={{
                    background: `radial-gradient(circle at top right, ${club.glow} 0%, transparent 34%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Header club */}
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-3xl">
                      <span
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white/85 md:text-[0.72rem]"
                        style={{ boxShadow: `0 0 24px ${club.glow}` }}
                      >
                        <Sparkles size={13} />
                        {club.cityLabel}
                      </span>

                      <h2 className="mt-4 text-[1.7rem] font-black uppercase leading-[0.96] text-white sm:text-[2rem] md:text-4xl xl:text-5xl">
                        {club.name}
                      </h2>

                      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                        <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4">
                          <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white/50">
                            Adresse
                          </p>
                          <p className="mt-2 flex items-start gap-2 text-[0.9rem] leading-6 text-white/76">
                            <MapPin size={16} className="mt-1 shrink-0" />
                            <span>{club.address}</span>
                          </p>
                        </div>

                        <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4">
                          <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white/50">
                            Téléphone
                          </p>
                          <p className="mt-2 flex items-center gap-2 text-[0.9rem] leading-6 text-white/76">
                            <Phone size={16} className="shrink-0" />
                            <span>{club.phone}</span>
                          </p>
                        </div>

                        <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4 md:col-span-2 xl:col-span-1">
                          <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white/50">
                            Public
                          </p>
                          <p className="mt-2 flex items-center gap-2 text-[0.9rem] leading-6 text-white/76">
                            <ShieldCheck size={16} className="shrink-0" />
                            <span>Enfants 6+ • Ados • Adultes</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row lg:flex-col lg:items-end">
                      <Link
                        href="/contact"
                        className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.12]"
                      >
                        Demander des infos
                      </Link>

                      <Link
                        href="/inscription"
                        className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-red-600 hover:text-white"
                      >
                        Rejoindre le club
                        <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>

                  {/* Horaires */}
                  <div className="mt-6 md:mt-8">
                    <div className="mb-4 flex items-center gap-2">
                      <Clock3 size={16} className="text-amber-300" />
                      <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-amber-300 md:text-[0.78rem]">
                        Horaires & créneaux
                      </p>
                    </div>

                    <div className="grid gap-3 md:gap-4 xl:grid-cols-2">
                      {club.days.map((day) => (
                        <div
                          key={day.day}
                          className="overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.04]"
                        >
                          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3.5">
                            <div>
                              <p className="text-sm font-bold uppercase tracking-[0.08em] text-white md:text-[0.96rem]">
                                {day.day}
                              </p>
                              <p className="mt-1 text-[0.82rem] text-white/55 md:text-sm">
                                {day.open ? day.range : "Fermé"}
                              </p>
                            </div>

                            <span
                              className={`rounded-full px-3 py-1 text-[0.64rem] font-bold uppercase tracking-[0.14em] ${
                                day.open
                                  ? "border border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                                  : "border border-white/10 bg-white/[0.06] text-white/50"
                              }`}
                            >
                              {day.open ? "Ouvert" : "Fermé"}
                            </span>
                          </div>

                          {day.open && day.slots && day.slots.length > 0 ? (
                            <div className="space-y-3 p-4">
                              {day.slots.map((slot, index) => (
                                <div
                                  key={`${day.day}-${index}`}
                                  className="rounded-[16px] border border-white/8 bg-black/20 p-3.5"
                                >
                                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                    <p className="text-sm font-semibold text-white">
                                      {slot.discipline}
                                    </p>
                                    <span
                                      className="inline-flex w-fit rounded-full px-2.5 py-1 text-[0.66rem] font-bold uppercase tracking-[0.14em]"
                                      style={{
                                        backgroundColor: `${club.accent}18`,
                                        color: club.accent,
                                        border: `1px solid ${club.accent}35`,
                                      }}
                                    >
                                      {slot.time}
                                    </span>
                                  </div>

                                  <div className="mt-2 flex flex-wrap gap-2">
                                    <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.72rem] font-medium text-white/72">
                                      {slot.audience}
                                    </span>
                                    <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.72rem] font-medium text-white/72">
                                      {slot.level}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="p-4">
                              <p className="text-[0.84rem] leading-6 text-white/45">
                                Aucun créneau affiché sur cette journée.
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}