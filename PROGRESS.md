# PROGRESS.md — Journal de bord Instant IA

> Mis à jour à la fin de chaque session.
> Ordre chronologique inversé : la session la plus récente en haut.

---

## Session 2 — 2026-05-01 — Sprint 2 complet (site vendable mi-mai)

**Sprint en cours :** Sprint 2 / Phase 1 Fondations communes → **TERMINÉ ✅**
**Branche :** `main`
**Commits ajoutés cette session :** 9 (de `df7d318` à `(2.9)`)
**Heures travaillées :** ~6-8h cumulées

### ✅ Fait — 10 sous-tâches Sprint 2

| # | Sous-tâche | Commit |
|---|---|---|
| 2.0 | Préparation : extraction copy legacy + spec v2 SEO + placeholders + stratégie Stripe (4 docs dans docs/specifications/) | `df7d318` |
| 2.1 | 4 Stimulus controllers (scroll-reveal, counter-animation, marquee, faq-accordion) + CSS animations (.rv/.rv-l/.rv-r/.vis/.d1-d5, blobs, marquee) + page démo | `91a2370` |
| 2.2 | 10 composants Twig DS (header dropdowns + drawer mobile, footer 4 cols, button macros, hero, card, faq, module-accordion, pricing-table, testimonial-card, newsletter-signup) + 5e controller mobile-menu | `c13d8db` |
| 2.3 | Page Home `/` complète 12 sections + Schema.org Organization+Person+FAQPage + scroll-driving cascadé | `3fe70df` |
| 2.4 | Page Niveau 1 `/formation-claude-consultant` 15 sections (LA page de vente principale) + Schema.org Course+Offer+FAQPage | `c0dd35e` |
| 2.5 | Lead magnet `/3-agents-ia-gratuits` + page merci + capture email avec validation Symfony Validator + consentement RGPD | `258174a` |
| 2.6 | Stripe Payment Links integration + AchatController routes /achat/{slug} success annule + composer require stripe/stripe-php | `39829fa` |
| 2.7 | StripeWebhookController (signature + idempotence) + AchatService final readonly + AchatMailer + email confirmation HTML+texte + 4 tests fonctionnels | `fe864cb` |
| 2.8 | 4 pages légales (mentions/CGV/confidentialité/cookies avec layout commun + sidebar nav + placeholders) + /a-propos 6 sections + /contact (form anti-spam honeypot) | `(2.8 commit)` |
| 2.9 | MAJ docs mémoire (CLAUDE.md routes/services + PROGRESS.md + ROADMAP.md) | (ce commit) |

### 📊 État technique en fin de Sprint 2

- **Pages publiques livrées** : 14 routes (home, niveau 1, lead magnet form/submit/merci, achat slug/success/annule, mentions, CGV, confidentialité, cookies, a-propos, contact form/submit, webhook stripe)
- **Composants Twig** : 10 partials réutilisables dans `templates/components/`
- **Stimulus controllers** : 5 (scroll-reveal, counter-animation, marquee, faq-accordion, mobile-menu)
- **Schemas Schema.org** : Organization, Person Rama, Course, Offer (3 tiers), FAQPage (sur home et Niveau 1)
- **Tests** : **37 tests / 83 assertions / 100% PASS** en ~10ms
- **PHPStan** : niveau 8, 0 erreur
- **PHP-CS-Fixer** : code conforme
- **Server boot** : `symfony serve` HTTP 200, TTFB 91-208ms selon page
- **Tailwind v4** : build 35-65ms

### 🎁 Ce qui est livré et vendable mi-mai

Le site peut **encaisser une vente Niveau 1 maintenant** (à condition que Rama configure les Payment Links Stripe + les 4 placeholders critiques :
1. Payment Link Niveau 1 early-bird 147€ dans dashboard Stripe
2. Webhook secret Stripe (whsec) dans .env.local
3. SIRET + dénomination + adresse pour mentions/CGV
4. Photo Rama + vidéo VSL Niveau 1 (ou retrait du placeholder VSL)

Tout le reste (storytelling Sandra, P.R.O.M.P.T., bio détaillée, témoignages additionnels, chiffres clés Rama, Brevo) sont des **améliorations** mais le site fonctionne sans.

### 🔜 Sprint suivant — décision check-point J+8

Selon ROADMAP.md stratégie pragmatique :
- **Option A** (pré-launch mi-mai) : Rama publie le site, ouvre les 30 places early-bird, livraison contenu par email pendant qu'on développe la suite
- **Option B** (MVP complet mi-juin) : on continue Sprint 3 (auth Symfony Security) → Sprint 4 (espace membre) → Sprint 5 (progression) → Sprint 6 (certificats + déploiement prod)
- **Option C** (hybride) : liste d'attente mi-mai, vente fin mai/début juin

À trancher avec Rama au check-point J+8 (~2026-05-08).

### 🐛 Bugs corrigés cette session
- Routing : `/achat/{slug}` matchait `/achat/success` et `/achat/annule` → ajout requirement regex `(?!success|annule)[a-z0-9-]+`
- Env vars : `MAILER_FROM_EMAIL` avec `@` → split en 2 vars dans .env (pas de chars spéciaux dans noms env)
- PHPStan : strict comparison false avec password_hash() → retiré (PHP 8+ throw plutôt que return false)

### ⏸️ Points en attente
- **Push branche `main`** sur le remote (à valider avec Rama avant push)
- **Décision check-point J+8** : option A / B / C
- **Placeholders à fournir par Rama** (cf. docs/specifications/placeholders-required.md, 13 blocs copy + 10 visuels + 4 Stripe + 5 légal + 4 Brevo)
- **Tests métier AchatService** : nécessitent fixtures Cours en BDD (Sprint 3)
- **Brevo intégration** : Sprint 4 — actuellement MAILER_DSN=null:// → emails dans logs

### 📌 Décisions ajoutées cette session
*(aucune nouvelle décision majeure — cf. DECISIONS.md, les choix Sprint 2 dérivent des décisions Sprint 1)*

---

## Session 1 — 2026-05-01 — Sprint 1 complet

**Sprint en cours :** Sprint 1 — Setup & Entités → **TERMINÉ ✅**
**Branche :** `feature/sprint-1-setup-entities`
**Commits ajoutés cette session :** 11 (de `81f8925` à `fb8b77e`)
**Heures travaillées :** ~6-7h cumulées

### ✅ Fait — 9 sous-tâches Sprint 1

| # | Sous-tâche | Commit |
|---|---|---|
| 1.1 | Init Symfony **7.4.8** + webapp pack + `symfony/uid` + `symfonycasts/tailwind-bundle` | `f01cec7` |
| — | Décisions D1 (Uuid v7) + D2 (tailwind-bundle) | `81f8925` |
| 1.2 | Configuration BDD MySQL 8.0 via MAMP (port 8889) + base `instant_ia` créée | `2a196d1` |
| — | Décision D3 (MySQL au lieu de PostgreSQL) | `ba2a2af` |
| 1.3 | Tailwind v4 + tokens DS Editorial Atelier (16 couleurs, 3 fonts, type scale, spacing, radii, shadows) + 8 polices WOFF2 self-hosted + page hello | `66763a0` |
| — | Décisions D4 (Tailwind v4) + D5 (polices self-hosted) | `aeb2a38` |
| 1.4 | Enums `RoleUtilisateur`, `StatutAchat`, `StatutProgression` + 12 tests | `d1a7de3` |
| 1.5 | Entité `User` (UUID v7, UserInterface, PasswordAuthenticatedUserInterface) + repo + 8 tests | `728b78c` |
| 1.6 | 6 entités métier (Cours, Module, Lecon, Achat, Progression, Certificat) + repos + migration init + 13 tests | `c4053cf` |
| 1.7 | PHP-CS-Fixer + PHPStan niveau 8 (0 erreur) + 8 corrections de typage | `fd569a0` |
| 1.8 | EasyAdmin 5 minimal (dashboard + 7 CRUD controllers, `/admin` HTTP 200) | `fb8b77e` |
| 1.9 | MAJ docs mémoire (CLAUDE.md, PROGRESS.md, ROADMAP.md) | (ce commit) |

### 📊 État technique en fin de Sprint 1

- **Symfony** : 7.4.8 (LTS jusqu'au 11/2028)
- **PHP** : 8.5.5 (Homebrew)
- **BDD** : MySQL 8.0.44 via MAMP (`instant_ia`, 9 tables dont 7 métier)
- **Bundles activés** : 14 (incl. Doctrine, Twig, Security, AssetMapper, EasyAdmin, Stimulus, Turbo, Mailer, Maker, Monolog, WebProfiler, Tailwind)
- **Tests** : **33 tests / 77 assertions / 100% PASS** en 0.012s
- **PHPStan** : niveau 8 sur 33 fichiers, **0 erreur**
- **PHP-CS-Fixer** : code conforme PSR-12 + Symfony + risky
- **Server boot** : `symfony serve` HTTP 200, TTFB ~210ms
- **Routes principales** : `/` (HomeController), `/admin`, `/admin/{entity}`

### 🔜 Sprint suivant — Phase 1 Fondations (J+8 check-point)

Selon ROADMAP.md stratégie pragmatique :
- **Sprint 2 / Phase 1** : auth + page d'accueil avec copy + page formation détail + Stripe Checkout + emails
- **Check-point J+8** (~2026-05-08) : décision A/B/C selon avancement

### 🐛 Bugs connus
- Aucun.

### ⏸️ Points en attente
- **Push branche `feature/sprint-1-setup-entities`** sur le remote (à valider avec Rama avant push)
- **Merge branche → develop / main** (à décider : on crée `develop` ? on merge direct sur main ?)
- Vidéos formation toujours à tourner (placeholders Vimeo en attendant)
- Doc Notion stratégie SEO/GEO toujours en attente (lien privé, à fournir)
- Comptes tiers à confirmer avant les Sprints concernés (Brevo, Vimeo Pro, OVH/AWS S3, Sentry, Plausible)

### 📌 Décisions ajoutées cette session
6 décisions consignées (#011 à #015) → cf. DECISIONS.md.

---

## Session 0 — 2026-04-30 — Initialisation & cadrage

**Sprint en cours :** Pré-Sprint 1 (cadrage, mémoire, plan)
**Branche :** `main`
**Dernier commit :** *(à venir — premier commit sera "chore: reset for Symfony 7 rewrite + init memory system")*
**Heures travaillées :** ~1h cadrage

### ✅ Fait
- Brainstorming initial avec Rama : rôle, méthodo Plan First, système mémoire 4 fichiers, contexte business, stack imposée, standards qualité, workflow Git, roadmap MVP, méthodologies, claude code tooling
- Vérification environnement local : macOS arm64, PHP 8.5.5, Composer 2.9.7, Symfony CLI 5.17.1, Node 24.13, npm 11.8, PostgreSQL 16.13, Git 2.50 — tout est prêt
- Récupération du Design System "Editorial Atelier" depuis Claude Design (URL `https://api.anthropic.com/v1/design/h/dVazrt_LoY9C7Dx7uF_QIg`, 23 composants + tokens.css)
- Clonage du repo `ramas69/instant` (ancien Next.js) dans le dossier de travail
- Création de la branche `legacy-nextjs` (locale) pour archiver l'ancien Next.js
- Reset de `main` (suppression de tous les fichiers Next.js)
- Création de la mémoire projet : `CLAUDE.md`, `PROGRESS.md`, `DECISIONS.md`, `ROADMAP.md`, `.gitignore`

### 🔜 À faire (prochaine session ou suite directe)
- Push de la branche `legacy-nextjs` sur le remote (ATTENTE validation Rama)
- Commit + push du reset de `main` avec les 4 fichiers mémoire (ATTENTE validation Rama)
- Présentation du **plan détaillé Sprint 1** (étape 2 méthodo Plan First)
- Validation du plan Sprint 1 par Rama
- Exécution Sprint 1 sous-tâche par sous-tâche

### 🐛 Bugs connus
- Aucun à ce stade.

### ⏸️ Points en attente
- **Date early-bird** : mi-mai 2026 — seulement ~24h de dev possible avant cible → stratégie pragmatique adoptée (cf. ROADMAP.md)
- **Vidéos formation** : à tourner — le dev se fera avec placeholders Vimeo, contenu réel injecté plus tard
- **Doc Notion stratégie SEO/GEO** : lien `app.notion.com` privé, fetch impossible. À reporter au Sprint 3 (SEO) ou à fournir plus tard publié/copié
- **Comptes tiers** : à confirmer comme actifs avant les sprints concernés (Brevo, Vimeo Pro abonnement, OVH/AWS S3, Sentry, Plausible)
- **Hosting prod** : Platform.sh vs Scalingo — décision au Sprint 6 (déploiement)
- **Lib PDF certificat** : Dompdf vs Spipu/HTML2PDF — décision au Sprint 6
- **Bannière cookies RGPD** : Tarteaucitron vs équivalent — décision au Sprint 6
- **`.claude/settings.local.json`** : écrasé pendant le clone, sera recréé automatiquement au besoin (non critique)

### 📌 Décisions prises pendant la session
Voir `DECISIONS.md` (10 décisions consignées).

---
