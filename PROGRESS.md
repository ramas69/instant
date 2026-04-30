# PROGRESS.md — Journal de bord Instant IA

> Mis à jour à la fin de chaque session.
> Ordre chronologique inversé : la session la plus récente en haut.

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
