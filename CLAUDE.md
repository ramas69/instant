# CLAUDE.md — Manuel projet Instant IA

> Fichier source de vérité pour reprendre le projet à zéro à n'importe quel moment.
> Mis à jour à chaque décision technique majeure.

**Dernière mise à jour :** 2026-04-30
**Auteur projet :** Rama Soumaré (rama@hallia.ai) — formatrice IA & cofondatrice technique
**Repo :** https://github.com/ramas69/instant
**URL prod cible :** https://instant-ia.com

---

## 1. Contexte business

Plateforme e-learning à construire sur **instant-ia.com** (refonte complète de la marque mère existante, ancien site Next.js archivé en branche `legacy-nextjs`).

### Produit principal MVP
**"Le Système Claude du Consultant"** — formation 14 jours, transformer Claude en assistant n°1 pour consultants/formateurs solo non-tech.

- Pricing early-bird : **147€** (30 premières acheteuses)
- Pricing catalogue : **297€**
- Garantie 14 jours satisfait/remboursé
- Statut juridique vendeur : **micro-entreprise** (franchise en base de TVA)

### Catalogue cible
1. Niveau 1 (MVP) — Le Système Claude du Consultant
2. Niveau 2 — Productivité Pro (post-MVP)
3. Niveau 3 — Cowork & Automatisation (post-MVP)
4. Audit IA (497€)
5. Consulting (1500€+)

### Bonus existants (post-MVP, sacrifiés du MVP)
- Lead magnet "3 Agents IA du Solopreneur" (gratuit)
- Kit IA Solopreneur (27€)
- Guide Pratique des Agents IA (29€)

### Cible — Sandra
Consultante 39 ans Lyon, ex-RH grand groupe, 80K€ CA, 55h/sem, 8 clients en parallèle, non-tech, peur de l'IA. Suit ~150 solopreneurs sur Insta+LinkedIn. Capacité d'achat 200-500€ pour Niveau 1.

### Volume estimé année 1
100-300 acheteurs · 5-10K€ MRR à 6 mois · ~5K visiteurs/mois en organique à M12.

### Témoignages déjà recueillis
- Sophie M (Coach business)
- Karim D (Fondateur e-commerce)
- Laura P (Directrice agence marketing)

### Contact
- Email : hello@instant-ia.com
- LinkedIn : rama-soumaré-aa5131a0
- Instagram : @rama__soumare

---

## 2. Stack technique

| Couche | Choix |
|---|---|
| Framework | Symfony 7.4 (installé via `^7.2`, dernière LTS 11/2028) |
| PHP | 8.5.5 (Homebrew CLI) |
| ORM | Doctrine 3 |
| BDD | MySQL 8.0 via MAMP (port 8889 en local, cf. décision #013) |
| Front | Twig + Symfony UX (Stimulus + Turbo) + **Tailwind CSS 4** (cf. décision #014) |
| Build | AssetMapper + Tailwind CLI standalone |
| Admin | EasyAdmin 4 |
| Auth | Symfony Security + symfonycasts/verify-email-bundle + symfonycasts/reset-password-bundle |
| Paiement | stripe/stripe-php (officiel) |
| Vidéos | Vimeo Pro embed |
| Mailer | Symfony Mailer + Brevo |
| Stockage | Flysystem + S3 (OVH ou AWS, à trancher au déploiement) |
| PDF | Dompdf ou Spipu/HTML2PDF (certificats) — à trancher au Sprint 6 |
| Tests | PHPUnit + Symfony Panther (E2E) |
| Linter | PHP-CS-Fixer + PHPStan niveau 8 |
| CI/CD | GitHub Actions |
| Monitoring | Sentry (gratuit pour solo) |
| Analytics | Plausible (RGPD-friendly) |
| Hosting | Platform.sh ou Scalingo (à trancher au Sprint 6) |
| Headers HTTP | NelmioSecurityBundle (CSP, HSTS, X-Frame-Options) |
| Cookies RGPD | Tarteaucitron ou équivalent (à trancher au Sprint 6) |

**Toute déviation de cette stack requiert une justification écrite avec 3 alternatives chiffrées (à consigner dans DECISIONS.md).**

---

## 3. Architecture

### DDD light — bounded contexts
Un dossier par contexte dans `src/`. Pas de logique métier dans les contrôleurs. Services + repositories systématiques.

```
src/
├── User/              # Authentification, profil utilisateur
├── Cours/             # Catalogue formations (Cours, Module, Lecon)
├── Achat/             # Paiement Stripe, factures, webhooks
├── Progression/       # Suivi élève, complétion leçons
├── Certificat/        # Génération PDF, vérification publique
└── Shared/            # Kernel, helpers transverses
```

### Naming entités (décision figée)
- `User` — exception en anglais (convention Symfony Security)
- Tout le reste du domaine métier en français : `Cours`, `Module`, `Lecon`, `Achat`, `Progression`, `Certificat`

### Services + Repositories
- **Service** = orchestration métier (`AchatService`, `ProgressionService`)
- **Repository** = accès données Doctrine (méthodes nommées clairement, jamais de `findBy` magique mal compris)
- **Controller** = entrée HTTP, validation DTO, délégation au service, return Response

### Flux type d'une requête
HTTP → Controller → DTO valide (Assert) → Service métier → Repository → Doctrine → réponse Twig/JSON

---

## 4. Conventions de code

### Standards PHP
- PSR-12 strict
- `declare(strict_types=1)` partout
- Type hints stricts sur tous les paramètres et retours
- `readonly` properties + constructor property promotion (PHP 8.3+)
- Enums pour tous les statuts (`StatutAchat`, `StatutProgression`)
- PHPDoc en français sur services / méthodes publiques / entités → expliquer le **pourquoi**, pas le **quoi**
- Validation Assert sur toutes les entités et formulaires
- 1 classe = 1 responsabilité ; viser max 300 lignes par fichier

### Naming
- Classes : StudlyCase (`AchatService`, `Cours`)
- Méthodes : camelCase (`creerSessionStripe`, `getCoursAccessibles`)
- Variables : camelCase (`$cours`, `$utilisateurConnecte`)
- Routes : kebab-case (`/formations/{slug}`, `/mon-compte`)
- Tables BDD : snake_case (`cours`, `lecon`, `achat`, `progression`)

### Twig
- Auto-escape activé (default)
- 1 partial par composant du Design System dans `templates/components/`
- Pas de logique métier dans les templates
- Macros pour patterns répétitifs

### Git — Conventional Commits
Format : `type(scope): message en français`
Types autorisés : `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `perf`, `security`

Exemples :
- `feat(achat): ajoute la création de session Stripe Checkout`
- `fix(progression): corrige le calcul de pourcentage complétion`
- `security(auth): ajoute rate limiter sur le login`

**Atomic commits** : 1 commit = 1 changement logique. Interdits : `wip`, `stuff`, `fix` génériques.

### Branches
- `main` = production
- `legacy-nextjs` = archive ancien site Next.js (locale, à push)
- `feature/sprint-X-nom` = par feature
- `hotfix/...` = urgences

---

## 5. Entités & relations (à compléter au Sprint 1)

À documenter dès la création des entités.

```
User ────< Achat >──── Cours
                       └─< Module ─< Lecon
User ────< Progression >──── Lecon
User ────< Certificat ──── Cours
```

| Entité | Champs clés | Relations |
|---|---|---|
| User | email, password, roles, isVerified | hasMany Achat, Progression, Certificat |
| Cours | titre, slug, description, prix, isPublished | hasMany Module |
| Module | titre, ordre, cours_id | belongsTo Cours, hasMany Lecon |
| Lecon | titre, slug, ordre, vimeoId, contenu, module_id | belongsTo Module |
| Achat | montant, stripeSessionId, statut, user_id, cours_id | belongsTo User, Cours |
| Progression | user_id, lecon_id, completedAt | belongsTo User, Lecon |
| Certificat | user_id, cours_id, code, generatedAt, pdfPath | belongsTo User, Cours |

> Schéma indicatif, à valider/ajuster au Sprint 1.

---

## 6. Routes principales (à compléter au fil des sprints)

| Méthode | Route | Action |
|---|---|---|
| GET | `/` | Page d'accueil |
| GET | `/formations` | Catalogue |
| GET | `/formations/{slug}` | Détail formation |
| GET/POST | `/inscription` | Register |
| GET/POST | `/connexion` | Login |
| GET | `/mon-compte` | Dashboard élève |
| GET | `/mon-compte/formations` | Mes formations |
| GET | `/mon-compte/formations/{slug}/lecons/{leconSlug}` | Page leçon |
| POST | `/checkout/{slug}` | Créer session Stripe |
| GET | `/checkout/success` | Callback success |
| POST | `/webhooks/stripe` | Webhook Stripe |
| GET | `/certificats/{code}` | Vérification publique |
| GET | `/admin` | EasyAdmin dashboard |

---

## 7. Services métier (à compléter au fil des sprints)

À documenter dès leur création.

- `App\Achat\AchatService` — création Stripe Checkout, traitement webhook, idempotence
- `App\Cours\CatalogueService` — listing publié, lookup slug
- `App\Progression\ProgressionService` — marquer leçon vue, calculer pourcentage
- `App\Certificat\CertificatService` — génération PDF, vérification code
- `App\User\InscriptionService` — register avec verify email

---

## 8. Standards qualité (non négociables)

### Sécurité OWASP Top 10
- CSRF token sur tous les forms
- Twig auto-escape actif partout
- Doctrine QueryBuilder ou prepared statements uniquement (jamais d'SQL brut concaténé)
- DTOs pour mass-assignment safe
- Rate limiter sur login, register, reset password
- NelmioSecurityBundle (CSP, HSTS, X-Frame-Options)
- Mots de passe : argon2id
- Sessions : HttpOnly + Secure + SameSite=Lax
- HTTPS obligatoire en prod
- Variables sensibles uniquement dans `.env.local` (jamais committé)

### Performance
- TTFB < 500ms
- LCP < 2.5s (Core Web Vitals)
- Lazy loading toutes images
- WebP par défaut
- HTTP cache (ESI si nécessaire)
- OPcache + APCu activés
- **Zéro N+1** : fetch joins explicites systématiques
- Doctrine batch processing pour imports volumineux

### Accessibilité WCAG 2.2 AA
- Sémantique HTML5 (header/nav/main/article/aside/footer)
- ARIA labels sur les interactifs
- Contraste min 4.5:1
- Navigation clavier complète
- Focus visible
- Alt text sur toutes images
- Skip links

### RGPD
- Bannière cookies au premier visit
- Politique confidentialité visible et lisible
- Bouton "exporter mes données" pour chaque user
- Bouton "supprimer mon compte" : soft-delete + purge à 30 jours
- Logs des consentements
- DPA Stripe / Brevo / Vimeo signés (à vérifier au Sprint 4-6)

### Tests
- Unitaires sur services métier
- Fonctionnels sur controllers critiques (login, paiement, accès formation)
- E2E sur parcours critiques (achat, login, complétion)
- Couverture min **70%** sur le code métier

---

## 9. Design System "Editorial Atelier"

**Source :** Claude Design (claude.ai/design)
**Bundle local :** `/tmp/claude-design/instant-ia-design-system/` (réextractable depuis l'URL Anthropic, voir DECISIONS.md)

### Direction visuelle
"Editorial Atelier" — entre rigueur magazine éditorial et chaleur atelier d'artisan. Vert profond + or + crème.

### Tokens principaux
| Catégorie | Détail |
|---|---|
| Verts (ink) | 900=`#051F18` · 700=`#064E3B` (primary) · 500=`#0A6B52` · 300=`#3D564B` · 200=`#6B877B` · 100=`#A8BFB6` |
| Or (gold) | 700=`#9C7E2F` · 500=`#C5A044` · 400=`#D4AF37` (CTA) · 300=`#E8C547` · 100=`#F4E5B3` |
| Crème | 50=`#FDFBF6` · 100=`#FAF8F4` (page bg) · 200=`#F0EBE1` · 300=`#E5DCC9` |
| Neutres | carbon=`#0E0E0C` · paper=`#FFFFFF` |
| Sémantique | success=`#0A6B52` · warning=`#C5A044` · danger=`#C0392B` · info=`#3D564B` |

### Typographie
- **Display/italics** : Instrument Serif (Georgia fallback)
- **Body** : Inter (system-ui fallback)
- **Mono/labels** : Space Grotesk (ui-monospace fallback)
- Échelle modulaire 1.250 : 11 / 12 / 14 / 16 / 18 / 22 / 28 / 36 / 48 / 72 / 104 px
- Weights : 400 / 500 / 600 / 700 / 800

### Spacing
Grille 4pt : 0 / 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128 px.

### Radii
0 / 4 / 8 / 12 / 16 / 20 / 24 / 999 (pill).

### Composants disponibles (23)
badges, before-after, buttons, colors, elevation, faq, footer, forms, hero-patterns, iconography, lead-magnet, logo, marquee, motion, navigation, offer-cards, shop-cards, spacing, stats, testimonials, typography, voice + page d'accueil complète.

**Couverture MVP : 100%.** Aucun composant manquant identifié.

### Voix Instant IA
Tutoiement, direct, zéro blabla.

---

## 10. Liens utiles

- **Repo** : https://github.com/ramas69/instant
- **Site actuel** (à refondre) : https://instant-ia.com
- **Marque secondaire** : https://lecho-ia.com (segment Coachs, post-MVP)
- **Stripe test** : URLs en `buy.stripe.com/test_*` (déjà connecté)
- **Symfony docs** : https://symfony.com/doc/current/index.html
- **EasyAdmin docs** : https://symfony.com/bundles/EasyAdminBundle/current/index.html
- **Stripe PHP SDK** : https://github.com/stripe/stripe-php
- **Tailwind CSS** : https://tailwindcss.com/docs

---

## 11. Règle d'or de session

**À chaque nouvelle session, lecture obligatoire dans cet ordre :**
1. CLAUDE.md (ce fichier)
2. PROGRESS.md
3. DECISIONS.md
4. ROADMAP.md

Puis récap 5 lignes : "Voici où on en est : [...]. Prêt à attaquer [...]. Confirme ou redirige."
