"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Medal, Zap, ArrowRight, Trophy } from "lucide-react";
import type { Athlete } from "@/data/athletes";

interface MobileAthleteProfileProps {
  athlete: Athlete;
  relatedAthletes: Athlete[];
}

export default function MobileAthleteProfile({
  athlete,
  relatedAthletes,
}: MobileAthleteProfileProps) {
  const [openSection, setOpenSection] = useState<
    "palmares" | "identite" | null
  >("palmares");

  const toggleSection = (section: "palmares" | "identite") => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <>
      {/* Section détails accordéon */}
      <section className="relative overflow-hidden py-6 md:hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-4rem] top-8 h-32 w-32 rounded-full bg-red-600/8 blur-3xl" />
          <div className="absolute right-[-4rem] bottom-4 h-32 w-32 rounded-full bg-amber-400/8 blur-3xl" />
        </div>

        <div className="container-custom relative z-10 space-y-3">
          {/* Palmarès */}
          <div className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.05] backdrop-blur-xl">
            <button
              type="button"
              onClick={() => toggleSection("palmares")}
              className="flex w-full items-center justify-between px-4 py-4 text-left"
            >
              <div className="flex items-center gap-3">
                <div
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.08]"
                  style={{ color: athlete.accent }}
                >
                  <Medal size={16} />
                </div>
                <span className="text-[0.9rem] font-black uppercase tracking-[0.05em] text-white">
                  Palmarès
                </span>
              </div>
              <ChevronDown
                size={18}
                className={`text-white/60 transition-transform duration-300 ${
                  openSection === "palmares" ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                openSection === "palmares"
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-white/10 px-4 pb-4 pt-3">
                  <p className="text-[0.82rem] leading-5 text-white/65">
                    Chaque résultat reflète un engagement, une discipline et un
                    travail constant au sein du Boxing Club Tours Nord.
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {athlete.achievements.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span
                          className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                          style={{
                            backgroundColor: athlete.accent,
                            boxShadow: `0 0 10px ${athlete.glow}`,
                          }}
                        />
                        <span className="text-[0.82rem] leading-5 text-white/70">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Identité sportive */}
          <div className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.05] backdrop-blur-xl">
            <button
              type="button"
              onClick={() => toggleSection("identite")}
              className="flex w-full items-center justify-between px-4 py-4 text-left"
            >
              <div className="flex items-center gap-3">
                <div
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.08]"
                  style={{ color: athlete.accent }}
                >
                  <Zap size={16} />
                </div>
                <span className="text-[0.9rem] font-black uppercase tracking-[0.05em] text-white">
                  Identité sportive
                </span>
              </div>
              <ChevronDown
                size={18}
                className={`text-white/60 transition-transform duration-300 ${
                  openSection === "identite" ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                openSection === "identite"
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-white/10 px-4 pb-4 pt-3">
                  <div className="space-y-2.5">
                    <div className="rounded-[16px] border border-white/10 bg-white/[0.04] p-3">
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white/50">
                        Nom
                      </p>
                      <p className="mt-1 text-[0.88rem] font-semibold text-white">
                        {athlete.name}
                      </p>
                    </div>

                    <div className="rounded-[16px] border border-white/10 bg-white/[0.04] p-3">
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white/50">
                        Discipline
                      </p>
                      <p className="mt-1 text-[0.88rem] font-semibold text-white">
                        {athlete.discipline}
                      </p>
                    </div>

                    <div className="rounded-[16px] border border-white/10 bg-white/[0.04] p-3">
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white/50">
                        Niveau
                      </p>
                      <p className="mt-1 text-[0.88rem] font-semibold text-white">
                        {athlete.level}
                      </p>
                    </div>

                    <div className="rounded-[16px] border border-white/10 bg-white/[0.04] p-3">
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white/50">
                        Record
                      </p>
                      <p className="mt-1 text-[0.88rem] font-semibold text-white">
                        {athlete.record}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-[16px] border border-white/10 bg-white/[0.04] p-3">
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white/50">
                      Vision club
                    </p>
                    <p className="mt-2 text-[0.8rem] leading-5 text-white/65">
                      Un athlète du club représente plus qu’un niveau ou un
                      palmarès : il incarne la régularité, l’exigence, le cadre
                      et la progression dans la durée.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Autres profils version mobile */}
      <section className="relative overflow-hidden border-t border-white/10 py-8 md:hidden">
        <div className="container-custom">
          <div className="mb-5 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-amber-300">
              <Trophy size={12} />
              Autres profils
            </span>

            <h2 className="mt-3 text-[1.6rem] font-black uppercase leading-[0.96] text-white">
              Découvrir d’autres athlètes
            </h2>
          </div>

          <div className="grid gap-4">
            {relatedAthletes.map((item) => (
              <article
                key={item.slug}
                className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.05] p-4 shadow-[0_12px_28px_rgba(0,0,0,0.16)] backdrop-blur-xl"
              >
                <div className="flex gap-4">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[16px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                      style={{ objectPosition: item.imagePosition }}
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className="text-[0.6rem] font-bold uppercase tracking-[0.14em]"
                      style={{ color: item.accent }}
                    >
                      {item.discipline}
                    </p>

                    <h3 className="mt-1 text-[0.95rem] font-black uppercase text-white">
                      {item.name}
                    </h3>

                    <p className="mt-1.5 line-clamp-2 text-[0.78rem] leading-5 text-white/66">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-3">
                  <Link
                    href={`/athletes/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-white transition-all duration-300 hover:translate-x-1"
                  >
                    Voir le profil
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
