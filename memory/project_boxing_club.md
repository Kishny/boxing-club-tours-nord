---
name: Boxing Club Tours Métropole — projet Next.js
description: Site premium pour 3 clubs de boxe à Tours. Stack, auth, BDD et features implémentées.
type: project
---

Site web Next.js 16 (App Router) pour Boxing Club Tours Métropole (3 clubs : Tours Nord, Tours Métropole, La Riche).

**Stack:** Next.js 16.2.3, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Mongoose (MongoDB Atlas), jose (JWT).

**Auth admin :** `/admin` protégé par proxy.ts (JWT httpOnly cookie `admin_token`). Login via `/admin/login`. Mot de passe dans `.env` : `ADMIN_PASSWORD`. Secret JWT : `JWT_SECRET`.

**BDD :** MongoDB Atlas. Fallback automatique vers `src/data/planning-fallback.json` si Mongo est indisponible.

**API routes :**
- `GET/POST/PUT/DELETE /api/planning` — CRUD créneaux
- `POST /api/auth/login` — connexion admin (JWT cookie)
- `POST /api/auth/logout` — déconnexion

**Admin dashboard :** stats (total créneaux, disciplines, club le plus actif, cours du jour), formulaire ajout, modale édition Framer Motion, liste avec couleur d'accent.

**Page horaires :** filtres (recherche discipline, chips audience), navigation mobile (onglets jours + prev/next), grille desktop multi-colonnes.

**Why:** Client veut gérer ses cours sans toucher au code. Site vitrine premium pour attirer des adhérents.

**How to apply:** Toujours vérifier les docs Next.js 16 dans `node_modules/next/dist/docs/` avant d'écrire du code (conventions changeantes).

**Page /historique :** contenu réel des clubs (sources : PDF « Historique du BCTN » et « Historique BCLR » fournis par le client). Sélecteur d'onglets BCLR (1991) / BCTN (2004) ; chaque club a sa présentation, sa chronologie, ses valeurs et ses dirigeants dans le tableau `clubs` de `HistoriquePageClient.tsx`. Dirigeants BCTN encore inconnus (TODO dans le fichier) ; pas de photos de dirigeants → avatars à initiales. Le BCTM n'a pas encore d'historique fourni.

**Athlètes :** 16 compétiteurs (dossier `COMPETITEURS SITE` du Bureau = source de référence). La page Athlètes est alimentée par MongoDB (`athletes`) qui **écrase totalement** `src/data/athletes.ts` dès qu'elle contient au moins un document — toute nouvelle fiche doit donc être créée dans le CMS, pas seulement dans le code. Les photos de `public/images/athletes/` ne sont **pas suivies par git** (seules les images placeholder anna/karim/lorie/mehdi/stacy/yassine le sont) : tant qu'elles ne sont pas commitées, elles renvoient 404 en production. 8 fiches sur 16 sont encore des placeholders (discipline Kickboxing par défaut, record « — ») en attente des fiches infos.

**Planning & documents :** la page /horaires affiche l'affiche officielle de la salle sélectionnée (WebP dans `public/images/plannings/`) puis la grille interactive alimentée par MongoDB (collection `planning`, 59 créneaux saison 2026-2027, champ `coach` inclus). Les PDF (plannings + fiches d'inscription) sont dans `public/documents/`. Sources : dossiers `planning 2026:2027` et `FICHES D'INSCRIPTIONS 26:27` du Bureau.

**Déploiement :** le webhook GitHub → Vercel a été muet un temps (un push ne déclenchait aucun build ; il fallait passer par Deployments → Create Deployment → main → Deploy to Production). Il refonctionne depuis le 29/08/2026. Le push doit venir de la machine du client : le shell distant n'a ni réseau ni identifiants GitHub. Écrire dans MongoDB se fait via l'admin du site déployé dans Chrome (fetch sur /api/*), le conteneur n'atteignant pas Atlas — et toujours APRÈS le déploiement, sinon la validation Zod de l'ancien build supprime les champs récents.
