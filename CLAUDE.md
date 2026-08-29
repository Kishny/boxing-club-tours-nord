@AGENTS.md

# Boxing Club Tours Métropole — repères du projet

Site Next.js 16 (App Router) pour **trois salles** : Boxing Club Tours Nord
(BCTN), Boxing Club La Riche (BCLR) et Boxing Club Tours Métropole (BCTM).
Stack : React 19, TypeScript, Tailwind 4, Framer Motion, Mongoose/MongoDB
Atlas, jose (JWT), Cloudinary.

## Le piège principal : deux sources de données

Presque chaque page publique lit MongoDB **et** possède un jeu de données de
repli codé en dur. Dès que la collection contient au moins un document, elle
**écrase intégralement** le repli. Modifier uniquement le fichier
`src/data/*.ts` ne change donc rien en ligne.

| Rubrique | Repli dans le code | Collection | État |
|---|---|---|---|
| Athlètes | `src/data/athletes.ts` | `athletes` | 21 en base |
| Planning | `src/data/planning-fallback.json` | `planning` | 59 créneaux en base |
| Coachs | `src/app/coachs/page.tsx` | `coachs` | vide |
| Disciplines | `src/app/disciplines/page.tsx` | `disciplines` | vide |
| Tarifs | `src/app/tarifs/page.tsx` | `pricing` | vide |
| Événements | — | `events` | vide |

**Toute modification de contenu doit être faite aux deux endroits**, sinon le
code et le site divergent.

## Écrire dans la base

Le conteneur d'exécution n'atteint pas MongoDB Atlas, et le shell distant n'a
pas de réseau. On passe donc par l'admin du site déployé, dans Chrome, avec des
`fetch` sur `/api/cms/<collection>` ou `/api/planning` — l'utilisateur doit
s'être connecté à `/admin` au préalable (mot de passe : ne jamais le saisir
soi-même).

**Toujours écrire en base APRÈS le déploiement**, jamais avant : la validation
Zod de l'ancien build supprime silencieusement les champs récents.

## Déploiement

`git push` doit venir de la machine de l'utilisateur — le shell distant n'a ni
réseau ni identifiants GitHub. Vercel redéploie ensuite tout seul depuis
`main`. Le webhook GitHub a été muet un temps (fin août 2026) : si aucun build
ne démarre, passer par Deployments → Create Deployment → `main` → Deploy to
Production.

`next build` ne tourne pas sur le shell distant (binaire SWC compilé pour
macOS, VM en Linux arm64). Vérifier avec `npx tsc --noEmit` et `npx eslint src`.

Le dossier monté n'autorise pas la suppression par défaut : `git` laisse des
`.lock` derrière lui. Demander la permission de suppression puis nettoyer
`.git/*.lock` et `.git/objects/tmp_obj_*`.

## Contenu : la règle de fond

Ce site est parti d'un gabarit rempli de contenu fictif. Plusieurs éléments
inventés sont restés en ligne longtemps : deux coachs qui n'existent pas, des
tarifs mensuels imaginaires, des horaires d'ouverture inventés, une date de
gala erronée, des formulaires qui promettaient une réponse sans rien envoyer.

**Devant un contenu invraisemblable, vérifier avant de le reprendre.** Les
documents du club font foi : plannings et fiches d'inscription 2026-2027,
programmes de saison, fiches athlètes. Ne jamais compléter un trou par une
invention plausible.

Les fiches athlètes contiennent des données personnelles — dates de naissance,
numéros de licence, comptes Instagram, téléphones des coachs. **Seuls le nom,
la discipline, le niveau, le record, le palmarès et la catégorie de poids sont
publiés.** Deux compétiteurs sont mineurs.

## Sources uniques

- `src/data/site.ts` — domaine et nom du site (`boxingtoursmetropole.fr`).
- `src/data/contact.ts` — email, téléphones, salles, réseaux sociaux.
- `src/components/forms/` — les trois formulaires retirés du site, conservés
  avec un README expliquant ce qu'il faut brancher pour les remettre.
- `public/images/athletes/README.md` — convention des vignettes de carte.

## Formats

Horaires en `18h30 – 20h00` (`parseStartMinutes` accepte aussi `18:30`).
Photos d'athlètes : portrait `<slug>.png` haut de 1200 px pour la fiche, et
vignette `<slug>-card.webp` en 720 × 900 cadrée sur le visage pour les cartes.
