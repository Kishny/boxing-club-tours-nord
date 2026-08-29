import { absoluteUrl } from "@/data/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { fetchCollection } from "@/lib/db-fetch";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Ticket,
  Users,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type EventDoc = {
  slug: string;
  title: string;
  date: string;
  time?: string;
  poster?: string;
  description?: string;
  ticketLink?: string;
  venue?: string;
  participants?: string[];
  published?: boolean;
};

// ─── Data helpers ─────────────────────────────────────────────────────────────

async function getAllEvents(): Promise<EventDoc[]> {
  const docs = await fetchCollection<Record<string, unknown>>("events", {
    date: 1,
  });
  if (!docs || docs.length === 0) return [];
  return docs
    .filter((d) => d.published !== false)
    .map((d) => ({
      slug: (d.slug as string) || "",
      title: (d.title as string) || "",
      date: (d.date as string) || "",
      time: (d.time as string) || undefined,
      poster: (d.poster as string) || undefined,
      description: (d.description as string) || undefined,
      ticketLink: (d.ticketLink as string) || undefined,
      venue: (d.venue as string) || undefined,
      participants: Array.isArray(d.participants)
        ? (d.participants as string[])
        : [],
    }));
}

// ─── SEO ──────────────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const events = await getAllEvents();
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const events = await getAllEvents();
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return { title: "Événement introuvable" };
  }

  const description =
    event.description?.slice(0, 155) ||
    `${event.title} — ${event.date}${event.venue ? ` à ${event.venue}` : ""}. Gala et compétition du Boxing Club Tours Nord.`;

  return {
    title: `${event.title} - Boxing Club Tours Nord`,
    description,
    alternates: {
      canonical: absoluteUrl(`/events/${event.slug}`),
    },
    openGraph: {
      title: `${event.title} - Boxing Club Tours Nord`,
      description,
      url: absoluteUrl(`/events/${event.slug}`),
      siteName: "Boxing Club Tours Nord",
      locale: "fr_FR",
      type: "article",
      ...(event.poster
        ? { images: [{ url: event.poster, width: 1200, height: 630, alt: event.title }] }
        : {}),
    },
    twitter: {
      card: event.poster ? "summary_large_image" : "summary",
      title: `${event.title} - Boxing Club Tours Nord`,
      description,
      ...(event.poster ? { images: [event.poster] } : {}),
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const events = await getAllEvents();
  const event = events.find((e) => e.slug === slug);

  if (!event) notFound();

  const formattedDate = (() => {
    try {
      return new Date(event.date).toLocaleDateString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return event.date;
    }
  })();

  const nextEvents = events
    .filter((e) => e.slug !== event.slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />

      <main className="bg-[#070707] text-white">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10 pt-[120px] pb-10 md:pt-[185px] md:pb-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-6 h-52 w-52 rounded-full bg-red-600/16 blur-3xl md:h-80 md:w-80" />
            <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-amber-400/12 blur-3xl md:h-80 md:w-80" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#0a0a0a] to-[#050505]" />
            <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.26)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.26)_1px,transparent_1px)] [background-size:28px_28px]" />
          </div>

          <div className="container-custom relative z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-[0.8rem] font-semibold text-white/80 transition hover:border-white/20 hover:bg-white/[0.10] hover:text-white md:text-sm"
            >
              <ArrowLeft size={15} />
              Retour
            </Link>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
              {/* LEFT — infos */}
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-amber-300">
                  <Sparkles size={11} />
                  Événement
                </span>

                <h1 className="mt-4 text-[2.2rem] font-black uppercase leading-[0.92] tracking-[0.02em] text-white md:text-5xl xl:text-6xl">
                  {event.title}
                </h1>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-white/70">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-amber-300">
                      <Calendar size={16} />
                    </span>
                    <span className="capitalize">{formattedDate}</span>
                  </div>

                  {event.time && (
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-amber-300">
                        <Clock size={16} />
                      </span>
                      <span>{event.time}</span>
                    </div>
                  )}

                  {event.venue && (
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-amber-300">
                        <MapPin size={16} />
                      </span>
                      <span>{event.venue}</span>
                    </div>
                  )}
                </div>

                {event.description && (
                  <p className="mt-7 text-base leading-8 text-white/68 md:text-lg md:leading-9">
                    {event.description}
                  </p>
                )}

                {event.participants && event.participants.length > 0 && (
                  <div className="mt-7">
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/50">
                      <Users size={13} />
                      Participants
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {event.participants.map((p) => (
                        <span
                          key={p}
                          className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-sm font-semibold text-white/80"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-8 flex flex-wrap gap-3">
                  {event.ticketLink && (
                    <a
                      href={event.ticketLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(220,38,38,0.24)] transition hover:-translate-y-[1px] hover:bg-red-700"
                    >
                      <Ticket size={15} />
                      Réserver ma place
                      <ArrowRight size={15} />
                    </a>
                  )}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.12]"
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>

              {/* RIGHT — poster */}
              {event.poster && (
                <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.05] shadow-[0_16px_34px_rgba(0,0,0,0.22)] md:rounded-[34px]">
                  <div className="absolute inset-x-0 top-0 z-10 h-[2px] bg-gradient-to-r from-red-500 via-amber-300/50 to-transparent" />
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={event.poster}
                      alt={event.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* AUTRES ÉVÉNEMENTS */}
        {nextEvents.length > 0 && (
          <section className="border-t border-white/10 py-10 md:py-16">
            <div className="container-custom">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
                Autres événements
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {nextEvents.map((e) => (
                  <Link
                    key={e.slug}
                    href={`/events/${e.slug}`}
                    className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.05] p-5 transition hover:border-white/20 hover:bg-white/[0.08]"
                  >
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-red-500/60 via-amber-300/30 to-transparent" />
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-amber-300">
                      {e.date}
                    </p>
                    <h3 className="mt-2 text-base font-black text-white">
                      {e.title}
                    </h3>
                    {e.venue && (
                      <p className="mt-1 text-xs text-white/50">{e.venue}</p>
                    )}
                    <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-red-400 transition group-hover:gap-2">
                      Voir <ArrowRight size={12} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
