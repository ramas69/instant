# ROADMAP.md — Plan global Instant IA

> Mis à jour quand un sprint / une phase est terminé(e).

---

## Stratégie globale (figée 2026-04-30)

**Contrainte forte** : early-bird annoncé publiquement pour mi-mai 2026 (~15 mai), soit ~24h de dev disponibles entre le 30 avril et la cible. La roadmap MVP de 6 sprints (~90h) ne tient pas en l'état.

**Stratégie pragmatique adoptée** : on construit d'abord les **fondations communes** à toutes les options de release, puis on tranche à J+8 selon où on en est.

```
J0 (30 avr) ──── Phase 1 : Fondations communes ──── J+8 (~10 mai)
                                                       │
                                                       ▼
                                              Check-point décisionnel
                                                       │
                       ┌───────────────────────────────┼───────────────────────────────┐
                       ▼                               ▼                               ▼
                  Option A                        Option B                        Option C
                Pré-launch léger              MVP complet                  Liste d'attente
                  mi-mai                       mi-juin                    + vente fin mai
```

---

## Phase 1 — Fondations communes (J0 → J+8, ~10-15h estimées)

**Objectif** : avoir une page de vente publique + checkout Stripe fonctionnel + emails post-achat + pages légales. Tout cela sert dans A, B et C.

### Livrables
- [ ] Setup Symfony 7.2 + bundles essentiels (Twig, Doctrine, Security squelette, AssetMapper)
- [ ] Configuration PostgreSQL locale + migration init
- [ ] Tailwind CSS 3 + tokens DS "Editorial Atelier" mappés
- [ ] Partials Twig pour composants DS de base (navigation, footer, buttons, hero, offer-cards, FAQ, testimonials)
- [ ] Page d'accueil publique (avec copy + DS, voix Instant IA)
- [ ] Page formation détail (slug = `le-systeme-claude-du-consultant`)
- [ ] Stripe Checkout Session (mode test)
- [ ] Webhook Stripe basique (signature + idempotence) — sauvegarde `Achat`
- [ ] Email de confirmation post-achat (via Brevo) avec lien temporaire de livraison
- [ ] Pages légales : Mentions légales, CGV (micro-entreprise franchise TVA), Politique de confidentialité
- [ ] Bannière cookies basique

### Check-point J+8 (~10 mai 2026)
- État réel d'avancement vs estimation
- Décision A / B / C selon la situation
- Mise à jour de cette roadmap en conséquence

---

## Phase 2 — branches selon le check-point

### Option A — Pré-launch mi-mai (si retard cumulé)

Vente OK mi-mai sans plateforme membre. Livraison du contenu par email (Drive + Vimeo lien direct envoyé chaque jour ou en lot).

- [ ] Mention claire dans la page de vente : "accès plateforme membre dès le X juin, en attendant tu reçois les leçons par email tous les jours"
- [ ] Email automation Brevo : drip 14 jours après achat
- [ ] Suite du build de la plateforme en parallèle (Sprint 2-6 en mode allégé)

### Option B — MVP complet mi-juin (si on tient le rythme)

Plateforme membre complète livrée le 15 juin aux 30 premières acheteuses.

- [ ] Sprint 2 — Authentification (register + verify + login + reset)
- [ ] Sprint 3 — Catalogue + EasyAdmin
- [ ] Sprint 4 — Paiement Stripe finalisé (déjà amorcé en Phase 1)
- [ ] Sprint 5 — Espace élève + tracking progression + player Vimeo
- [ ] Sprint 6 — Certificat PDF + finitions + déploiement prod

### Option C — Hybride (capture d'emails mi-mai, vente fin mai/début juin)

- [ ] Mi-mai : ouverture liste d'attente (formulaire simple avec capture email + relance Brevo)
- [ ] J+15 à J+25 : vente effective avec MVP réduit (auth + catalogue + Stripe + espace élève basique, sans certificat ni progression fine)
- [ ] Reste en post-MVP

---

## Roadmap MVP de référence (6 sprints, conservée pour mémoire)

> Cette roadmap initiale a été écrite par Rama avant la prise en compte de la deadline mi-mai. Elle reste valide en Option B (mi-juin) ou en post-MVP (Option A).

### Sprint 1 — Setup & entités (semaine 1)
- Installation Symfony 7.2 + bundles
- Configuration PostgreSQL + Tailwind + AssetMapper
- Création des 7 entités : User, Cours, Module, Lecon, Achat, Progression, Certificat
- Migrations Doctrine
- EasyAdmin de base
- Tests unitaires sur les entités

### Sprint 2 — Authentification (semaine 2)
- Register avec email verification
- Login avec rate limiter
- Reset password
- Logout
- Roles (USER, ADMIN)
- Tests fonctionnels auth

### Sprint 3 — Catalogue + back-office (semaine 3)
- Page publique catalogue (`/formations`)
- Page détail formation (`/formations/{slug}`)
- EasyAdmin complet (CRUD Cours/Module/Lecon)
- Dashboard admin simple
- SEO (schemas, title, meta)

### Sprint 4 — Paiement Stripe (semaine 4)
- Stripe Checkout Session
- Webhooks (vérification signature, idempotence)
- Page success
- Email de confirmation
- Logs + audit trail

### Sprint 5 — Espace élève + progression (semaine 5)
- Page "Mes formations"
- Page formation accédée
- Page leçon avec player Vimeo
- Tracking progression
- Navigation entre leçons

### Sprint 6 — Certificat + finitions (semaine 6)
- Génération PDF certificat
- Email certificat automatique
- Page vérification publique du certificat
- Pages légales (Mentions, CGV, Confidentialité)
- Bannière cookies RGPD
- Page 404/500 custom
- Sitemap.xml + robots.txt
- Déploiement production

---

## Phases post-MVP (M3 → M12)

### M3 — Bonus existants intégrés
- Kit IA Solopreneur (27€) en download post-achat automatique
- Guide Pratique des Agents IA (29€) idem
- Lead magnet "3 Agents IA du Solopreneur" (gratuit) en magnet sur la home

### M4-M5 — Stratégie SEO / GEO
- Implémentation des schemas (Organization, Course, FAQ, Person)
- Cocon sémantique (à récupérer depuis le doc Notion privé de Rama)
- Articles de blog ciblés mots-clés
- Optimisation Core Web Vitals

### M6-M9 — Membership récurrent (Phase 2 modèle économique)
- Abonnement mensuel
- Bibliothèque de contenus à jour
- Cohortes / live sessions

### M9-M12 — Affiliation (Phase 3 modèle économique)
- Système d'affiliation pour ex-élèves (commission revente)

### M9+ — Segment Coachs sur lecho-ia.com
- Dérivation de la plateforme pour la marque secondaire L'ÉCHO IA
- Catalogue formations dédié coachs

---

## Statut global

| Phase | Statut | Date |
|---|---|---|
| **Sprint 1 — Setup & entités** | ✅ **Terminé** (33 tests / PHPStan 0 / 14 commits) | 2026-04-30 → 2026-05-01 |
| **Sprint 2 — Phase 1 Fondations vendables** | ✅ **Terminé** (37 tests / PHPStan 0 / 9 commits / 14 routes publiques) | 2026-05-01 |
| Check-point J+8 — décision A / B / C | ⬜ À venir | ~2026-05-08 |
| Phase 2A pré-launch mi-mai | ⬜ À déterminer au check-point | — |
| Phase 2B MVP complet mi-juin | ⬜ À déterminer au check-point | — |
| Post-MVP M3+ (membership, blog SEO, Niveau 2/3) | ⬜ Non démarré | — |

### Avance / retard sur le timing

- **J0 = 2026-04-30**, cible early-bird = ~2026-05-15 (mi-mai)
- **J+1 = 2026-05-01** :
  - Sprint 1 livré (entités+admin+qualité) en ~6-7h
  - Sprint 2 livré (10 sous-tâches, 14 pages publiques, Stripe webhook complet, scroll-driving) en ~6-8h
- **TOTAL fin Sprint 2 : ~13-15h consommées sur ~24h disponibles avant mi-mai** → ~10h de marge
- **Site vendable maintenant** sous réserve que Rama configure les 4 placeholders critiques (Stripe Payment Link + whsec + SIRET + photo)

### Ce qui est vendable maintenant

✅ **Route `/`** Home complète 12 sections avec scroll-driving
✅ **Route `/formation-claude-consultant`** Niveau 1 page de vente 15 sections
✅ **Route `/3-agents-ia-gratuits`** lead magnet avec capture email
✅ **Route `/achat/le-systeme-claude-du-consultant`** redirige vers Stripe Payment Link
✅ **Route `/webhooks/stripe`** webhook signature + idempotence + email confirmation
✅ **Routes légales** mentions / CGV / confidentialité / cookies
✅ **Route `/a-propos`** + **`/contact`** (form anti-spam)
✅ **Header sticky avec dropdowns** + **footer 4 colonnes**
✅ **EasyAdmin `/admin`** pour gérer les entités

### Ce qui manque pour publier (à fournir par Rama)

**🔴 Critique** :
- Payment Link Stripe Niveau 1 early-bird 147€ (dashboard Stripe)
- Webhook secret Stripe (`whsec_*`) à mettre dans `.env.local`
- Pour CGV/mentions : SIRET + dénomination + adresse
- Photo Rama (au moins une, peut-être tirée de l'ancien site)

**🟡 Important** :
- Storytelling Sandra (300-400 mots)
- Acronyme P.R.O.M.P.T. (significations des 6 lettres)
- Bio Rama version finale + chiffres clés
- ID Vimeo VSL Niveau 1 (ou retrait du placeholder VSL)
- 4 témoignages additionnels (5-7 au total demandés brief v2)

**🟢 Différable** :
- Brevo configuration (Sprint 4)
- Validation juridique pages légales par avocat
- 18 articles blog SEO (M+3 post-MVP)
- Espace membre (Sprint 3+ après check-point J+8)
