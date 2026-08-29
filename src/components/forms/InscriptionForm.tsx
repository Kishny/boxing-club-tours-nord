"use client";

// =====================================================
// FORMULAIRE D’INSCRIPTION — MIS DE CÔTÉ (NON UTILISÉ)
// =====================================================
// Ce formulaire était affiché sur /inscription. Il a été retiré du site
// le 29/08/2026 : il n’avait aucun onSubmit ni route API, donc il
// n’envoyait rien, alors qu’il promettait une réponse par email.
//
// Le code est conservé ici pour pouvoir le remettre facilement.
// POUR LE RÉACTIVER :
//   1. Lui donner un vrai traitement (voir README.md de ce dossier) —
//      sans ça, il ne servira toujours à rien.
//   2. Dans src/app/inscription/InscriptionPageClient.tsx :
//        import InscriptionForm from "@/components/forms/InscriptionForm";
//      puis remplacer le bloc « contact direct » par <InscriptionForm />.
// =====================================================

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import { Send, Phone, Mail } from "lucide-react";

export default function InscriptionForm() {
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.04] p-5 shadow-[0_16px_34px_rgba(0,0,0,0.18)] backdrop-blur-xl md:rounded-[34px] md:p-8">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-amber-300 via-white/60 to-red-500 opacity-95" />

      <div className="relative z-10">
  <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-amber-300 md:text-[0.72rem] md:tracking-[0.18em]">
    Dossier d’adhésion
  </p>

  <h2 className="mt-3 text-[1.7rem] font-black leading-[0.96] text-white md:text-4xl">
    Déposez votre candidature sportive
  </h2>

  <p className="mt-3 max-w-2xl text-[0.88rem] leading-6 text-white/68 md:mt-4 md:text-base md:leading-7">
    Remplissez ce formulaire pour amorcer votre entrée au club.
    Plus votre demande est claire, plus l’orientation sera
    précise.
  </p>

  <form className="mt-6 grid gap-4 md:mt-8 md:gap-5">
    <div>
      <label className="mb-2 block text-[0.86rem] font-semibold text-white md:text-sm">
        Nom complet
      </label>
      <Input type="text" placeholder="Votre nom complet" />
    </div>

    <div className="grid gap-4 md:grid-cols-2 md:gap-5">
      <div>
        <label className="mb-2 block text-[0.86rem] font-semibold text-white md:text-sm">
          Email
        </label>
        <Input type="email" placeholder="Votre email" />
      </div>

      <div>
        <label className="mb-2 block text-[0.86rem] font-semibold text-white md:text-sm">
          Téléphone
        </label>
        <Input type="tel" placeholder="Votre numéro" />
      </div>
    </div>

    <div>
      <label className="mb-2 block text-[0.86rem] font-semibold text-white md:text-sm">
        Discipline souhaitée
      </label>
      <Select defaultValue="">
        <option value="" disabled>
          Choisir une discipline
        </option>
        <option value="kickboxing">Kickboxing</option>
        <option value="k1-rules">K1 Rules</option>
        <option value="full-contact">Full Contact</option>
        <option value="low-kick">Low Kick</option>
        <option value="point-fighting">Point Fighting</option>
      </Select>
    </div>

    <div className="grid gap-4 md:grid-cols-2 md:gap-5">
      <div>
        <label className="mb-2 block text-[0.86rem] font-semibold text-white md:text-sm">
          Votre niveau
        </label>
        <Select defaultValue="">
          <option value="" disabled>
            Choisir votre niveau
          </option>
          <option value="debutant">Débutant</option>
          <option value="intermediaire">Intermédiaire</option>
          <option value="confirme">Confirmé</option>
          <option value="competiteur">Compétiteur</option>
        </Select>
      </div>

      <div>
        <label className="mb-2 block text-[0.86rem] font-semibold text-white md:text-sm">
          Objectif principal
        </label>
        <Select defaultValue="">
          <option value="" disabled>
            Choisir un objectif
          </option>
          <option value="decouverte">Découverte</option>
          <option value="remise-en-forme">Remise en forme</option>
          <option value="perfectionnement">
            Perfectionnement
          </option>
          <option value="competition">Compétition</option>
        </Select>
      </div>
    </div>

    <div>
      <label className="mb-2 block text-[0.86rem] font-semibold text-white md:text-sm">
        Message complémentaire
      </label>
      <Textarea
        rows={5}
        placeholder="Précisez vos disponibilités, votre motivation ou tout élément utile..."
      />
    </div>

    <div className="grid gap-3 rounded-[18px] border border-white/8 bg-white/[0.04] p-4 md:rounded-2xl">
      <div className="flex items-center gap-3">
        <Phone size={16} className="text-red-400" />
        <p className="text-[0.84rem] leading-6 text-white/70 md:text-sm">
          Le club pourra vous recontacter par téléphone pour
          confirmer l’orientation ou une séance d’essai.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Mail size={16} className="text-amber-300" />
        <p className="text-[0.84rem] leading-6 text-white/70 md:text-sm">
          Une réponse par email vous sera envoyée après étude de
          votre demande.
        </p>
      </div>
    </div>

    <Button
      type="submit"
      variant="gold"
      size="lg"
      className="group"
    >
      Envoyer ma demande
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
