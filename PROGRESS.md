# PROGRESS.md — Journal de bord Instant IA

> Mis à jour à la fin de chaque session.
> Ordre chronologique inversé : la session la plus récente en haut.

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
