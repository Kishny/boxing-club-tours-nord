// src/app/athletes/[slug]/page.tsx
// =====================================================
// IMPORTS
// =====================================================
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { athletes } from "@/data/athletes";
import {
  ArrowLeft,
  ArrowRight,
  Medal,
  ShieldCheck,
  Trophy,
  Zap,
} from "lucide-react";
import MobileAthleteProfile from "./MobileAthleteProfile";

// =====================================================
// PARAMÈTRES STATIQUES
// =====================================================
export function generateStaticParams() {
  return athletes.map((athlete) => ({
    slug: athlete.slug,
  }));
}

// =====================================================
// SEO DYNAMIQUE
// =====================================================
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const athlete = athletes.find((item) => item.slug === slug);

  if (!athlete) {
    return {
      title: "Athlète introuvable",
      description: "Le profil demandé n'existe pas.",
    };
  }

  return {
    title: `${athlete.name} - Athlète du club`,
    description: `${athlete.name}, athlète du Boxing Club Tours Nord à Tours. Discipline : ${athlete.discipline}. Niveau : ${athlete.level}. Record : ${athlete.record}.`,
    alternates: {
      canonical: `https://boxingclub-tours.fr/athletes/${athlete.slug}`,
    },
    openGraph: {
      title: `${athlete.name} - Boxing Club Tours Nord`,
      description: `${athlete.name}, profil athlète du Boxing Club Tours Nord.`,
      url: `https://boxingclub-tours.fr/athletes/${athlete.slug}`,
      siteName: "Boxing Club Tours Nord",
      locale: "fr_FR",
      type: "profile",
      images: [
        {
          url: athlete.image,
          width: 1200,
          height: 630,
          alt: athlete.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${athlete.name} - Boxing Club Tours Nord`,
      description: `${athlete.name}, ${athlete.discipline}, ${athlete.level}.`,
      images: [athlete.image],
    },
  };
}

// =====================================================
// PAGE PROFIL ATHLÈTE
// =====================================================
export default async function AthleteProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const athlete = athletes.find((item) => item.slug === slug);

  if (!athlete) {
    notFound();
  }

  const relatedAthletes = athletes
    .filter((item) => item.slug !== athlete.slug)
    .sort((a, b) => {
      if (
        a.discipline === athlete.discipline &&
        b.discipline !== athlete.discipline
      ) {
        return -1;
      }

      if (
        a.discipline !== athlete.discipline &&
        b.discipline === athlete.discipline
      ) {
        return 1;
      }

      return 0;
    })
    .slice(0, 3);

  return (
    <>
      <Navbar />

      <main className="bg-[#070707] text-white">
        {/* =============================================
            HERO / INTRO PROFIL
        ============================================= */}
        <section className="relative overflow-hidden border-b border-white/10 pt-[120px] pb-8 md:pt-[180px] md:pb-16 lg:pb-20">
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute -left-20 top-6 h-40 w-40 rounded-full blur-3xl md:top-10 md:h-72 md:w-72"
              style={{ backgroundColor: athlete.glow }}
            />
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-amber-400/10 blur-3xl md:h-80 md:w-80" />
            <div className="absolute bottom-0 left-1/3 h-36 w-36 rounded-full bg-white/5 blur-3xl md:h-72 md:w-72" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#0a0a0a] to-[#050505]" />
            <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.28)_1px,transparent_1px)] [background-size:24px_24px] md:opacity-[0.05] md:[background-size:34px_34px]" />
          </div>

          <div className="container-custom relative z-10">
            <div>
              <Link
                href="/athletes"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-[0.8rem] font-semibold text-white/80 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.10] hover:text-white md:px-4 md:text-sm"
              >
                <ArrowLeft size={15} />
                Retour aux athlètes
              </Link>
            </div>

            <div className="mt-5 grid items-center gap-5 md:mt-8 md:gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.05] shadow-[0_16px_34px_rgba(0,0,0,0.20)] backdrop-blur-xl md:rounded-[34px] md:shadow-[0_20px_50px_rgba(0,0,0,0.24)]">
                <div
                  className="absolute inset-x-0 top-0 z-10 h-[2px]"
                  style={{
                    background: `linear-gradient(to right, ${athlete.accent}, rgba(255,255,255,0.45), transparent)`,
                  }}
                />

                <div className="relative h-[320px] w-full sm:h-[400px] md:h-[520px] lg:h-[580px]">
                  <Image
                    src={athlete.image}
                    alt={athlete.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                    style={{ objectPosition: athlete.imagePosition }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
                </div>
              </div>

              {/* TEXTE */}
              <div>
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white/85 shadow-[0_0_24px_rgba(255,255,255,0.05)] md:px-4 md:py-2 md:text-[0.72rem] md:tracking-[0.18em]"
                  style={{ boxShadow: `0 0 24px ${athlete.glow}` }}
                >
                  <Trophy size={13} className="md:h-[14px] md:w-[14px]" />
                  {athlete.discipline}
                </span>

                <h1 className="mt-4 text-[2rem] font-black uppercase leading-[0.9] tracking-[0.025em] text-white sm:text-[2.6rem] md:mt-5 md:text-6xl md:tracking-[0.04em] xl:text-7xl">
                  {athlete.name}
                </h1>

                <p
                  className="mt-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] md:mt-3 md:text-xs md:tracking-[0.18em]"
                  style={{ color: athlete.accent }}
                >
                  {athlete.level}
                </p>

                <p className="mt-4 max-w-2xl text-[0.92rem] leading-6 text-white/70 md:mt-6 md:text-base md:leading-8">
                  {athlete.description}
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 md:mt-8 md:gap-4">
                  <div className="rounded-[20px] border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl md:rounded-[24px] md:p-5">
                    <p className="text-[0.66rem] font-bold uppercase tracking-[0.14em] text-white/55 md:text-[0.72rem] md:tracking-[0.16em]">
                      Discipline
                    </p>
                    <p className="mt-2 text-[0.95rem] font-semibold text-white md:text-base">
                      {athlete.discipline}
                    </p>
                  </div>

                  <div className="rounded-[20px] border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl md:rounded-[24px] md:p-5">
                    <p className="text-[0.66rem] font-bold uppercase tracking-[0.14em] text-white/55 md:text-[0.72rem] md:tracking-[0.16em]">
                      Record
                    </p>
                    <p className="mt-2 text-[0.95rem] font-semibold text-white md:text-base">
                      {athlete.record}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-2.5 sm:flex-row md:mt-8 md:gap-3">
                  <Link
                    href="/inscription"
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(220,38,38,0.24)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-red-700 md:px-6 md:py-3.5"
                  >
                    Rejoindre le club
                    <ArrowRight size={16} />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.12] md:px-6 md:py-3.5"
                  >
                    Contacter le club
                    <ShieldCheck size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MOBILE */}
        <MobileAthleteProfile
          athlete={athlete}
          relatedAthletes={relatedAthletes}
        />

        {/* =============================================
            SECTION DÉTAILS – DESKTOP
        ============================================= */}
        <section className="relative hidden overflow-hidden py-8 md:block md:py-16 lg:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-4rem] top-12 h-40 w-40 rounded-full bg-red-600/8 blur-3xl md:h-56 md:w-56" />
            <div className="absolute right-[-4rem] bottom-8 h-40 w-40 rounded-full bg-amber-400/8 blur-3xl md:h-56 md:w-56" />
          </div>

          <div className="container-custom relative z-10">
            <div className="grid gap-4 md:gap-6 xl:grid-cols-[1.05fr_0.95fr]">
              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.05] p-5 shadow-[0_16px_34px_rgba(0,0,0,0.20)] backdrop-blur-xl md:rounded-[32px] md:p-8 lg:p-10">
                <div
                  className="absolute inset-x-0 top-0 h-[2px]"
                  style={{
                    background: `linear-gradient(to right, ${athlete.accent}, rgba(255,255,255,0.55), transparent)`,
                  }}
                />

                <div className="relative z-10">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white/85 md:px-3 md:py-1.5 md:text-[0.72rem] md:tracking-[0.16em]">
                    <Medal size={13} className="md:h-[14px] md:w-[14px]" />
                    Palmarès
                  </span>

                  <h2 className="mt-4 text-[1.7rem] font-black uppercase leading-[0.96] tracking-[0.02em] text-white sm:text-[2rem] md:mt-5 md:text-4xl md:tracking-[0.03em]">
                    Un parcours construit
                  </h2>

                  <p className="mt-3 max-w-2xl text-[0.9rem] leading-6 text-white/68 md:mt-4 md:text-base md:leading-8">
                    Chaque résultat reflète un engagement, une discipline et un
                    travail constant au sein du Boxing Club Tours Nord.
                  </p>

                  <ul className="mt-5 space-y-3 md:mt-8 md:space-y-4">
                    {athlete.achievements.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 rounded-[18px] border border-white/10 bg-white/[0.04] p-4 md:rounded-[22px]"
                      >
                        <span
                          className="mt-2 h-2 w-2 shrink-0 rounded-full"
                          style={{
                            backgroundColor: athlete.accent,
                            boxShadow: `0 0 14px ${athlete.glow}`,
                          }}
                        />
                        <span className="text-[0.9rem] leading-6 text-white/72 md:text-base md:leading-7">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-[#111111] to-[#090909] p-5 shadow-[0_16px_34px_rgba(0,0,0,0.22)] md:rounded-[32px] md:p-8 lg:p-10">
                <div
                  className="absolute inset-0 opacity-90"
                  style={{
                    background: `radial-gradient(circle at top right, ${athlete.glow} 0%, transparent 38%)`,
                  }}
                />

                <div className="relative z-10">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white/82 md:text-[0.72rem] md:tracking-[0.16em]">
                    <Zap size={13} className="md:h-[14px] md:w-[14px]" />
                    Identité sportive
                  </span>

                  <h2 className="mt-4 text-[1.7rem] font-black uppercase leading-[0.96] tracking-[0.02em] text-white sm:text-[2rem] md:mt-5 md:text-4xl md:tracking-[0.03em]">
                    Profil du combattant
                  </h2>

                  <div className="mt-5 grid gap-3 md:mt-8 md:gap-4">
                    <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4 md:rounded-[24px] md:p-5">
                      <p className="text-[0.66rem] font-bold uppercase tracking-[0.14em] text-white/55 md:text-[0.72rem] md:tracking-[0.16em]">
                        Nom
                      </p>
                      <p className="mt-2 text-[0.95rem] font-semibold text-white md:text-base">
                        {athlete.name}
                      </p>
                    </div>

                    <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4 md:rounded-[24px] md:p-5">
                      <p className="text-[0.66rem] font-bold uppercase tracking-[0.14em] text-white/55 md:text-[0.72rem] md:tracking-[0.16em]">
                        Discipline
                      </p>
                      <p className="mt-2 text-[0.95rem] font-semibold text-white md:text-base">
                        {athlete.discipline}
                      </p>
                    </div>

                    <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4 md:rounded-[24px] md:p-5">
                      <p className="text-[0.66rem] font-bold uppercase tracking-[0.14em] text-white/55 md:text-[0.72rem] md:tracking-[0.16em]">
                        Niveau
                      </p>
                      <p className="mt-2 text-[0.95rem] font-semibold text-white md:text-base">
                        {athlete.level}
                      </p>
                    </div>

                    <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4 md:rounded-[24px] md:p-5">
                      <p className="text-[0.66rem] font-bold uppercase tracking-[0.14em] text-white/55 md:text-[0.72rem] md:tracking-[0.16em]">
                        Record
                      </p>
                      <p className="mt-2 text-[0.95rem] font-semibold text-white md:text-base">
                        {athlete.record}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 rounded-[18px] border border-white/10 bg-white/[0.04] p-4 md:mt-8 md:rounded-[24px] md:p-5">
                    <p className="text-[0.66rem] font-bold uppercase tracking-[0.14em] text-white/55 md:text-[0.72rem] md:tracking-[0.16em]">
                      Vision club
                    </p>
                    <p className="mt-3 text-[0.9rem] leading-6 text-white/68 md:text-base md:leading-7">
                      Un athlète du club représente plus qu’un niveau ou un
                      palmarès : il incarne la régularité, l’exigence, le cadre
                      et la progression dans la durée.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =============================================
            ATHLÈTES LIÉS – DESKTOP
        ============================================= */}
        <section className="relative hidden overflow-hidden border-t border-white/10 py-8 md:block md:py-16 lg:py-20">
          <div className="container-custom">
            <div className="mb-6 text-center md:mb-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-amber-300 md:px-4 md:py-2 md:text-[0.72rem] md:tracking-[0.18em]">
                <Trophy size={13} className="md:h-[14px] md:w-[14px]" />
                Autres profils
              </span>

              <h2 className="mt-4 text-[1.7rem] font-black uppercase leading-[0.96] text-white sm:text-[2rem] md:mt-5 md:text-5xl">
                Découvrir d’autres athlètes
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
              {relatedAthletes.map((item) => (
                <article
                  key={item.slug}
                  className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.05] p-4 shadow-[0_16px_34px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-[3px] md:rounded-[28px] md:p-5 md:shadow-[0_18px_40px_rgba(0,0,0,0.20)]"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-[2px]"
                    style={{
                      background: `linear-gradient(to right, ${item.accent}, rgba(255,255,255,0.45), transparent)`,
                    }}
                  />

                  <div className="relative h-48 overflow-hidden rounded-[18px] md:h-56 md:rounded-[22px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      style={{ objectPosition: item.imagePosition }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  </div>

                  <div className="relative z-10 mt-4 md:mt-5">
                    <p
                      className="text-[0.66rem] font-bold uppercase tracking-[0.14em] md:text-[0.72rem] md:tracking-[0.16em]"
                      style={{ color: item.accent }}
                    >
                      {item.discipline}
                    </p>

                    <h3 className="mt-2 text-[1.05rem] font-black uppercase text-white md:text-xl">
                      {item.name}
                    </h3>

                    <p className="mt-3 text-[0.88rem] leading-6 text-white/66 md:text-sm md:leading-7">
                      {item.description}
                    </p>

                    <div className="mt-4 md:mt-5">
                      <Link
                        href={`/athletes/${item.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-all duration-300 hover:translate-x-1"
                      >
                        Voir le profil
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
