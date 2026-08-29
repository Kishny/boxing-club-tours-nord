"use client";

// =====================================================
// FORMULAIRE NEWSLETTER — MIS DE CÔTÉ (NON UTILISÉ)
// =====================================================
// Ce formulaire était affiché sur la page d'accueil (bloc CTA). Il a été
// retiré du site le 29/08/2026 : aucun onSubmit, aucune route API, aucune
// liste de diffusion — personne ne recevait rien, alors que le bloc
// promettait « les actualités du club directement dans votre boîte mail ».
//
// Il a été remplacé par un renvoi vers les réseaux sociaux du club, qui
// sont le canal réellement utilisé pour les galas et les actualités.
//
// POUR LE RÉACTIVER : il faut d'abord une vraie liste de diffusion
// (Brevo, Mailchimp…) et une route API qui y inscrit l'adresse. Voir
// README.md de ce dossier.
// =====================================================

type Props = {
  variant?: "mobile" | "desktop";
};

export default function NewsletterForm({ variant = "desktop" }: Props) {
  if (variant === "mobile") {
    return (
                  <div className="mt-4">
                    <form className="flex flex-col gap-2.5">
                      <div className="relative w-full">
                        <input
                          type="email"
                          placeholder="Votre adresse email"
                          className="
                            min-h-[46px] w-full rounded-full border border-white/10
                            bg-white px-4 py-2.5 text-sm text-black
                            outline-none transition-all duration-300
                            placeholder:text-zinc-500
                            focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20
                          "
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="
                          inline-flex min-h-[46px] items-center justify-center
                          rounded-full bg-amber-400 px-4 py-2.5
                          text-sm font-semibold text-black
                          transition-all duration-300
                          hover:bg-amber-500
                        "
                      >
                        S’inscrire
                      </button>
                    </form>

                    <p className="mt-2.5 text-[0.66rem] leading-5 text-white/45">
                      Pas de spam. Seulement les informations utiles du club.
                    </p>
                  </div>
    );
  }

  return (
              <div className="mt-5 md:mt-6">
                <form className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
                  <div className="relative w-full">
                    <input
                      type="email"
                      placeholder="Votre adresse email"
                      className="
                        min-h-[48px] w-full rounded-full border border-white/10
                        bg-white px-4 py-2.5 text-sm text-black
                        shadow-[0_8px_18px_rgba(255,255,255,0.06)]
                        outline-none transition-all duration-300
                        placeholder:text-zinc-500
                        focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20
                        md:px-5 md:py-3
                      "
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="
                      inline-flex min-h-[48px] shrink-0 items-center justify-center
                      rounded-full bg-amber-400 px-4 py-2.5
                      text-sm font-semibold text-black
                      transition-all duration-300
                      hover:-translate-y-[1px]
                      hover:bg-amber-500
                      hover:shadow-[0_12px_26px_rgba(251,191,36,0.16)]
                      md:px-5 md:py-3
                    "
                  >
                    S’inscrire
                  </button>
                </form>

                <p className="mt-2.5 text-[0.68rem] leading-5 text-white/45 md:mt-3 md:text-[0.72rem]">
                  Pas de spam. Seulement les informations utiles du club.
                </p>
              </div>
  );
}
