# Formulaires mis de côté

Les trois formulaires du site (inscription, contact et newsletter) ont été
**retirés des pages le 29/08/2026**. Ils sont conservés ici, intacts, et ne sont
importés nulle part.

## Pourquoi ils ont été retirés

Aucun des deux n'envoyait quoi que ce soit : `<form>` sans `onSubmit`, sans
`action`, et aucune route API pour les recevoir. Cliquer sur « Envoyer » ne
faisait que recharger la page — alors que la page promettait une réponse par
email. Chaque visiteur qui remplissait le formulaire attendait une réponse qui
n'arrivait jamais.

Ils ont été remplacés sur les pages par un bloc de contact direct (téléphone,
email, adresses des salles), qui lui fonctionne.

### Cas particulier : la newsletter

`NewsletterForm.tsx` était le bloc « Recevez les actualités du club » de la page
d'accueil. Il ne suffit pas de lui ajouter un `onSubmit` : il n'existe aucune
liste de diffusion derrière. Le remettre suppose de créer un compte chez un
service d'emailing (Brevo, Mailchimp…), d'y créer une liste, puis une route API
qui y inscrit l'adresse — et de prévoir le lien de désinscription obligatoire.

Il a été remplacé sur l'accueil par deux boutons vers les pages Facebook et
Instagram du club, qui sont le canal réellement utilisé pour annoncer les galas.

## Comment les remettre

Les remettre tels quels reproduirait le problème. Il faut d'abord leur donner un
traitement. Deux pistes, par ordre de simplicité :

### 1. Stockage en base + rubrique dans l'admin (le plus cohérent ici)

Le site a déjà MongoDB et un CMS générique. Il suffit d'ajouter une collection :

- `src/services/cms.service.ts` — un `DemandeSchema` (zod) avec les champs du
  formulaire, ajouté à la fonction de validation par collection.
- `src/lib/cms-models.ts` — le modèle Mongoose correspondant.
- `src/lib/cms-schemas.ts` — un `DEMANDES_SCHEMA` pour l'affichage admin.
- Attention : `src/proxy.ts` protège `/api/cms/*` en écriture. Il faut y ouvrir
  le POST sur cette collection uniquement, sinon le formulaire public sera
  rejeté en 401.
- Côté composant : un `onSubmit` qui `POST` vers `/api/cms/demandes`, plus un
  état d'envoi et un message de confirmation.

### 2. Envoi par email

Un service type Resend, une route `/api/inscription` qui envoie le mail, la clé
API dans `.env` et sur Vercel. Rien à consulter dans l'admin.

### Puis, dans les deux cas

```tsx
// src/app/inscription/InscriptionPageClient.tsx
import InscriptionForm from "@/components/forms/InscriptionForm";
// ... et remplacer le bloc « contact direct » par <InscriptionForm />

// src/app/contact/page.tsx
import ContactForm from "@/components/forms/ContactForm";
```

## Rappel

Ces formulaires collectent des données personnelles, y compris de mineurs
(école de boxe). Si le stockage en base est retenu, se limiter aux champs
réellement utiles et prévoir comment les demandes sont supprimées une fois
traitées.
