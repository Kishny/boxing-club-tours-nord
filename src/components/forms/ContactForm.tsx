"use client";

// =====================================================
// FORMULAIRE DE CONTACT — MIS DE CÔTÉ (NON UTILISÉ)
// =====================================================
// Ce formulaire était affiché sur /contact. Il a été retiré du site le
// 29/08/2026 : aucun onSubmit, aucune route API — il n’envoyait rien.
//
// Le code est conservé ici pour pouvoir le remettre facilement.
// POUR LE RÉACTIVER :
//   1. Lui donner un vrai traitement (voir README.md de ce dossier).
//   2. Dans src/app/contact/page.tsx :
//        import ContactForm from "@/components/forms/ContactForm";
//      puis remplacer le bloc « contact direct » par <ContactForm />.
// =====================================================

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.05] p-5 shadow-[0_16px_34px_rgba(0,0,0,0.18)] backdrop-blur-xl md:rounded-[34px] md:p-8">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-red-500 via-amber-400 to-transparent opacity-85" />

      <div className="relative z-10">
  <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-amber-300 md:text-[0.72rem] md:tracking-[0.18em]">
    Formulaire de contact
  </p>

  <h2 className="mt-3 text-[1.7rem] font-black leading-[0.96] text-white md:text-4xl">
    Envoyez votre message
  </h2>

  <p className="mt-3 max-w-2xl text-[0.88rem] leading-6 text-white/68 md:mt-4 md:text-base md:leading-7">
    Décrivez votre demande et laissez-nous vos coordonnées. Nous
    reviendrons vers vous rapidement.
  </p>

  <form className="mt-6 grid gap-4 md:mt-8 md:gap-5">
    <div>
      <label className="mb-2 block text-[0.86rem] font-semibold text-white md:text-sm">
        Nom
      </label>
      <Input
        type="text"
        placeholder="Votre nom"
        className="focus:border-red-500 focus:ring-red-500/20"
      />
    </div>

    <div>
      <label className="mb-2 block text-[0.86rem] font-semibold text-white md:text-sm">
        Email
      </label>
      <Input
        type="email"
        placeholder="Votre email"
        className="focus:border-red-500 focus:ring-red-500/20"
      />
    </div>

    <div>
      <label className="mb-2 block text-[0.86rem] font-semibold text-white md:text-sm">
        Sujet
      </label>
      <Input
        type="text"
        placeholder="Ex : séance d’essai, inscription..."
        className="focus:border-red-500 focus:ring-red-500/20"
      />
    </div>

    <div>
      <label className="mb-2 block text-[0.86rem] font-semibold text-white md:text-sm">
        Message
      </label>
      <Textarea
        rows={6}
        placeholder="Votre message"
        className="focus:border-red-500 focus:ring-red-500/20"
      />
    </div>

    <p className="text-[0.74rem] leading-5 text-white/45 md:text-xs md:leading-6">
      En envoyant ce formulaire, vous acceptez d’être recontacté
      par le club au sujet de votre demande.
    </p>

    <Button
      type="submit"
      variant="primary"
      size="lg"
      className="group"
    >
      Envoyer le message
      <Send
        size={17}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Button>
  </form>
      </div>
    </div>
  );
}
