"use client";

// =====================================================
// BLOC DE CONTACT DIRECT
// Remplace les anciens formulaires (voir
// src/components/forms/README.md).
// =====================================================
import Link from "next/link";
import { Phone, Mail, MapPin, Clock3, ChevronRight } from "lucide-react";
import { CLUB_CONTACT, CLUB_SALLES } from "@/data/contact";

type Props = {
  variant?: "inscription" | "contact";
};

export default function DirectContact({ variant = "contact" }: Props) {
  const isInscription = variant === "inscription";

  return (
    <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.04] p-5 shadow-[0_16px_34px_rgba(0,0,0,0.18)] backdrop-blur-xl md:rounded-[34px] md:p-8">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-amber-300 via-white/60 to-red-500 opacity-95" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.09),transparent_30%)]" />

      <div className="relative z-10">
        <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-amber-300 md:text-[0.72rem] md:tracking-[0.18em]">
          {isInscription ? "Nous rejoindre" : "Nous joindre"}
        </p>

        <h2 className="mt-3 text-[1.7rem] font-black leading-[0.96] text-white md:text-4xl">
          {isInscription
            ? "Une question avant de vous inscrire ?"
            : "Parlons de votre projet sportif"}
        </h2>

        <p className="mt-3 max-w-2xl text-[0.88rem] leading-6 text-white/68 md:mt-4 md:text-base md:leading-7">
          {isInscription
            ? "Cours d’essai, âge minimum, discipline adaptée, horaires : appelez-nous ou écrivez-nous, on vous répond directement. Vous pouvez aussi passer à la salle pendant les entraînements."
            : "Renseignements, séance d’essai, partenariats ou organisation d’un événement : le club vous répond par téléphone ou par email."}
        </p>

        {/* Téléphone + email */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:mt-8">
          <a
            href={`tel:${CLUB_CONTACT.phoneHref}`}
            className="group flex items-center gap-3 rounded-[18px] border border-white/10 bg-black/20 p-4 transition-colors duration-300 hover:border-amber-300/30 hover:bg-amber-300/[0.06]"
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/10 text-amber-300">
              <Phone size={18} />
            </span>
            <span className="min-w-0">
              <span className="block text-[0.6rem] font-bold uppercase tracking-[0.14em] text-white/50">
                Téléphone
              </span>
              <span className="mt-1 block truncate text-[0.92rem] font-semibold text-white">
                {CLUB_CONTACT.phone}
              </span>
            </span>
          </a>

          <a
            href={`mailto:${CLUB_CONTACT.email}`}
            className="group flex items-center gap-3 rounded-[18px] border border-white/10 bg-black/20 p-4 transition-colors duration-300 hover:border-red-500/30 hover:bg-red-500/[0.06]"
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 text-red-400">
              <Mail size={18} />
            </span>
            <span className="min-w-0">
              <span className="block text-[0.6rem] font-bold uppercase tracking-[0.14em] text-white/50">
                Email
              </span>
              <span className="mt-1 block truncate text-[0.92rem] font-semibold text-white">
                {CLUB_CONTACT.email}
              </span>
            </span>
          </a>
        </div>

        {/* Salles */}
        <div className="mt-4 space-y-2.5 md:mt-6">
          <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-white/50">
            Venir nous voir
          </p>

          {CLUB_SALLES.map((salle) => (
            <div
              key={salle.short}
              className="flex items-start gap-3 rounded-[18px] border border-white/10 bg-black/20 p-4"
            >
              <span
                className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5"
                style={{ color: salle.accent }}
              >
                <MapPin size={16} />
              </span>

              <div className="min-w-0">
                <p
                  className="text-[0.66rem] font-bold uppercase tracking-[0.14em]"
                  style={{ color: salle.accent }}
                >
                  {salle.short}
                </p>
                <p className="mt-0.5 text-[0.9rem] font-semibold leading-5 text-white">
                  {salle.name}
                </p>
                <p className="mt-1 text-[0.84rem] leading-5 text-white/60">
                  {salle.address}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Liens utiles */}
        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row md:mt-7">
          <Link
            href="/horaires"
            className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10"
          >
            <Clock3 size={16} />
            Voir les horaires
          </Link>

          <Link
            href={isInscription ? "/tarifs" : "/inscription"}
            className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(220,38,38,0.24)] transition-all duration-300 hover:bg-red-700"
          >
            {isInscription ? "Consulter les tarifs" : "S’inscrire au club"}
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
