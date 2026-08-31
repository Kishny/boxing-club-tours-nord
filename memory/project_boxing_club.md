---
name: Boxing Club Tours Métropole — projet Next.js
description: Site des trois salles de boxe. Architecture, contenu réel, pièges de déploiement et travaux restants.
type: project
---

Site Next.js 16 (App Router) pour trois salles : Tours Nord (BCTN), La Riche
(BCLR) et Tours Métropole (BCTM). Voir `CLAUDE.md` à la racine pour les
repères d'architecture — ce fichier retient l'état du contenu et l'historique
des décisions.

**Stack :** Next.js 16.2.3, React 19, TypeScript, Tailwind 4, Framer Motion,
Mongoose (MongoDB Atlas), jose, Cloudinary. Admin protégé par `src/proxy.ts`
(cookie JWT `admin_token`).

## Contenu réel en place

- **21 compétiteurs, 21 fiches complètes** (31 août 2026). Plus aucun athlète
  avec un record « — ». Les deux dernières (Gomes Angelina « Gigi », -60 kg,
  13 V / 5 D, six titres nationaux + Collectif France ; Gomes Catalina
  « Catal », -48 kg, 3 V / 1 D, championne de France K1 et full) ont été
  saisies depuis les fiches papier du club.
- **Disciplines représentées** : Kickboxing, Muay Thai, K1 et Full Contact.
  Le filtre de la page Athlètes est construit à partir de ces valeurs, donc
  toute nouvelle graphie crée une entrée de filtre en plus.
- **59 créneaux** saison 2026-2027, avec coach, transcrits des trois affiches.
- **Historique** des deux clubs (BCLR 1991, BCTN 2004), avec sélecteur d'onglets.
- **Tarifs annuels** : enfant 200 €, adulte 210 € (230 € au BCTM), 2 salles
  285 €, 3 salles 350 €. Assurance comprise, jusqu'à 3 chèques, dégressif au
  prorata à partir de janvier, non remboursable.
- **Contacts** : bctnbctmbclr@gmail.com, André Macé 06 08 95 66 66, Yves Le Vern
  07 50 52 54 15, Brenda Macé 06 76 52 50 87, Brian Macé 07 83 04 53 84.
- **Gala** : Tour Event Fight, samedi 21 novembre 2026, gymnase Jean-Marie
  Bialy à La Riche, billetterie sur toureventfight.com.
- **Documents** téléchargeables dans `public/documents/` : fiches d'inscription
  et plannings des trois salles.

## Points de vigilance sur les fiches athlètes

- **Ferreira Gonçalo** : le site l'affichait « Feirera Mota Gonçalo », d'après
  le nom de son dossier photo. Sa fiche donne **Ferreira**. Le nom est corrigé,
  mais le slug reste `feirera-mota-goncalo` pour ne pas casser l'URL déjà en
  ligne. Le corriger suppose de renommer aussi ses deux images et le document
  en base.
- **Ne jamais publier** les dates de naissance, numéros de licence, comptes
  Instagram/TikTok, liens de musique d'entrée ni téléphones des coachs que
  contiennent les fiches. Les cartes s'en tiennent au nom, à la discipline, au
  niveau, au record, au palmarès et à la catégorie de poids.

## Décisions prises

- **Les trois formulaires ont été retirés** (inscription, contact, newsletter) :
  aucun n'avait de traitement, ils promettaient des réponses jamais envoyées.
  Code conservé dans `src/components/forms/`, remplacés par du contact direct
  et des liens vers les réseaux.
- **Page Horaires** : l'affiche officielle de la salle s'affiche en haut, la
  grille interactive en dessous. Deux sources indépendantes, donc dates de mise
  à jour visibles des deux côtés, mention « l'affiche fait foi » et
  avertissement dans l'admin.
- **Cartes athlètes** : vignettes recadrées sur le visage, parce qu'un
  `object-position` réglé à la main coupait les têtes.

## Reste à faire

1. **Page Horaires invisible pour Google** — rendue côté client, le HTML servi
   ne contient qu'un écran de chargement. Le plus gros chantier restant.
2. **Canoniques manquantes** sur `/coachs` et `/contact` — ce sont des
   composants client, il faut les scinder en page serveur + composant client.
3. **Pages `/disciplines/<slug>` en 404** — la collection CMS est vide, donc
   `generateStaticParams` ne génère rien. Sans conséquence tant qu'aucun lien
   n'y mène.
4. **Page 404 par défaut de Next**, en anglais, sans menu.
5. **Sitemap** — les 21 fiches athlètes manquent, il faudrait le rendre async.
6. `?discipline=` transmis par les liens mais ignoré par la page Inscription.
7. **Session admin** : le cookie JWT expire vite. Avant une série d'écritures
   en base, tester par un appel qui doit échouer en 422 et non en 401 — sinon
   demander à l'utilisateur de se reconnecter à `/admin`.
8. **DNS** : `boxingtoursmetropole.fr` pointe encore vers OVH. À rattacher au
   projet Vercel avant la mise en ligne, sinon les URL canoniques désignent
   l'ancien site.

## À faire préciser par le club

- Chevauchement vendredi soir au BCLR : boxe anglaise 18h30–19h45 puis
  19h00–20h30.
- L'affiche BCTM annonce la reprise en « septembre 2027 » là où les deux autres
  disent 2026.
- L'affiche BCTN écrit `bctnbctnbclr@gmail.com`, les deux autres
  `bctnbctmbclr@gmail.com` — c'est cette dernière qui est en ligne.
- Fiche d'Angelo Vrillon : 10 combats annoncés, mais 3 + 5 + 3 = 11.
