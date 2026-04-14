// =====================================================
// IMPORTS
// =====================================================
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

// =====================================================
// PAGE LE CLUB
// Version minimaliste propre et évolutive
// =====================================================
export default function ClubPage() {
  return (
    <>
      {/* Header */}
      <Navbar />

      {/* Contenu principal */}
      <main className="bg-white text-black">
        {/* =============================================
            HERO DE PAGE
        ============================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f8f8f8] to-[#efefef] pt-[150px] pb-16 md:pt-[180px] md:pb-20">
          <div className="container-custom text-center">
            {/* Badge */}
            <span className="inline-flex rounded-full border border-black/10 bg-white/80 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-red-600 shadow-sm">
              Le club
            </span>

            {/* Titre */}
            <h1 className="mt-5 text-4xl font-black uppercase tracking-[0.05em] text-zinc-950 sm:text-5xl md:text-6xl">
              Un club structuré,
              <br className="hidden sm:block" /> une vraie identité
            </h1>

            {/* Intro */}
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-zinc-600 sm:text-base md:text-lg">
              Le Boxing Club accompagne débutants, passionnés et compétiteurs
              dans un cadre exigeant, sérieux et motivant, centré sur la
              progression, le respect et le dépassement de soi.
            </p>
          </div>
        </section>

        {/* =============================================
            CONTENU MINIMALISTE
        ============================================= */}
        <section className="py-16 md:py-20">
          <div className="container-custom grid gap-8 lg:grid-cols-2">
            {/* Bloc 1 */}
            <article className="rounded-[28px] border border-black/8 bg-white p-8 shadow-[0_12px_30px_rgba(0,0,0,0.05)]">
              <h2 className="text-2xl font-extrabold text-zinc-950">
                Notre philosophie
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600 md:text-base">
                Le club met l’accent sur la discipline, la qualité de
                l’encadrement, la progression durable et l’esprit collectif.
                Chaque pratiquant évolue à son rythme, avec un cadre structuré
                et motivant.
              </p>
            </article>

            {/* Bloc 2 */}
            <article className="rounded-[28px] border border-black/8 bg-white p-8 shadow-[0_12px_30px_rgba(0,0,0,0.05)]">
              <h2 className="text-2xl font-extrabold text-zinc-950">
                Pour qui ?
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600 md:text-base">
                Le club s’adresse aux jeunes, aux adultes, aux débutants, aux
                pratiquants réguliers et aux compétiteurs qui souhaitent évoluer
                dans une ambiance sérieuse, dynamique et respectueuse.
              </p>
            </article>
          </div>

          {/* CTA */}
          <div className="container-custom mt-10 flex justify-center">
            <Link
              href="/inscription"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-red-700 md:text-base"
            >
              Rejoindre le club
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}