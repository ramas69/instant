# Spécification — Architecture site Instant IA & brief des pages

> Document fourni par Rama le 2026-05-01.
> Source de vérité pour l'arborescence, les sections de chaque page, le maillage SEO et le plan de migration.
> Toute référence à "la spec" dans les commits / PROGRESS pointe ici.

---

## Arborescence complète

```
/
│
├── / ················································ HOME (page d'accueil)
│
├── 🎁 GRATUIT
│   ├── /3-agents-ia-gratuits ························ Lead magnet (existant)
│   └── /ressources ·································· Bibliothèque downloads
│
├── 📚 FORMATIONS
│   ├── /formations ·································· Catalogue 3 niveaux
│   ├── /formation-claude-consultant ················· Niveau 1 ⭐
│   ├── /claude-productivite-pro ····················· Niveau 2
│   └── /claude-cowork-automatisation ················ Niveau 3
│
├── 🎯 SERVICES
│   ├── /audit-ia ···································· Audit 497€
│   └── /consulting ·································· 1500€+
│
├── 💎 MEMBERSHIP (M+6)
│   └── /le-cercle ··································· 39€/mois
│
├── 📰 BLOG (cocon SEO)
│   ├── /blog ········································ Hub principal
│   ├── /blog/{slug-article} ························· 18 articles
│   └── /blog/categorie/{slug} ······················· 4 catégories
│
├── 👤 À PROPOS
│   ├── /a-propos ···································· Page Rama
│   └── /temoignages ································· Avis élèves
│
├── 🔐 ESPACE MEMBRE (plateforme Symfony)
│   ├── /app/connexion
│   ├── /app/inscription
│   ├── /app/mot-de-passe-oublie
│   ├── /app/mes-formations ·························· Dashboard élève
│   ├── /app/formation/{slug} ························ Page formation accédée
│   ├── /app/formation/{slug}/lecon/{id} ············· Player vidéo
│   ├── /app/mes-certificats ························· Liste certificats
│   └── /app/mon-compte ······························ Paramètres
│
├── 🛒 PARCOURS ACHAT
│   ├── /achat/{slug} ································ Init Stripe
│   ├── /achat/success ······························· Confirmation paiement
│   └── /achat/annule ································ Retour annulation
│
├── 🔧 ADMIN (EasyAdmin)
│   └── /admin ······································· Back-office complet
│
├── 📞 CONTACT
│   └── /contact ····································· Formulaire + infos
│
├── ⚖️ LÉGAL
│   ├── /mentions-legales
│   ├── /cgv
│   ├── /confidentialite
│   ├── /cookies
│   └── /verifier-certificat/{code} ·················· Vérification publique
│
└── 🤖 SEO
    ├── /sitemap.xml
    └── /robots.txt
```

---

## Navigation

```
[Logo Instant IA] | Formations ▾ | Services ▾ | Blog | À propos | Connexion | [CTA: 3 Agents Gratuits]
                       │              │
                       │              ├── Audit IA
                       │              └── Consulting
                       │
                       ├── 🟢 Niveau 1 - Le Système Claude
                       ├── 🟡 Niveau 2 - Productivité Pro
                       ├── 🔴 Niveau 3 - Cowork & Auto
                       └── 💎 Le Cercle (Membership)
```

## Footer

```
Colonne 1 - Formations    Colonne 2 - Services    Colonne 3 - Ressources    Colonne 4 - Légal
- Niveau 1                - Audit IA              - Blog                    - Mentions légales
- Niveau 2                - Consulting            - 3 Agents gratuits       - CGV
- Niveau 3                - Le Cercle             - Témoignages             - Confidentialité
- Catalogue                                       - À propos                - Cookies
                                                  - Contact                 - Vérifier certificat

Réseaux : LinkedIn | Instagram | YouTube
Newsletter signup
```

---

## Pages — brief sectionné

### `/` — Home (12 sections)

1. **Hero** — H1 "Transforme Claude en ton bras droit en 14 jours" + sous-titre + avatar Rama + CTA "Je découvre la formation" + CTA secondaire "Récupère 3 Agents IA gratuits"
2. **Pain Points (Sandra)** — H2 "Tu as testé ChatGPT 2-3 fois sans résultats" + 4 douleurs (55h/sem, propals à 23h, 8 clients sans système, peur IA)
3. **Promesse Transformation** — H2 "Dans 14 jours, tu auras ton Système Claude opérationnel" + Avant/Après + 4 résultats concrets
4. **Les 3 Agents** — H2 "Les 3 Agents IA que tu vas construire" + 3 cards (📧 Inbox 4-5h/sem, 🎙️ Mission 3-4h/sem, 📋 Propal 2-3h/sem) — total 9-12h/sem
5. **Pour qui** — ✅ consultants/formateurs/coachs solos, 35-45 ans, non-tech ; ❌ pas pour devs ni grandes équipes
6. **Témoignages** — Sophie M (Coach business) + Karim D (Fondateur e-commerce) + Laura P (Directrice agence)
7. **La formation** — cards 7 modules + bouton "Voir le programme détaillé"
8. **Méthode P.R.O.M.P.T.** — visualisation acronyme 6 lettres
9. **Garantie** — 14 jours satisfait ou remboursé
10. **À propos Rama (court)** — photo + bio courte + lien `/a-propos`
11. **FAQ** — 8 Q/R + lien "Voir toutes les questions"
12. **CTA final + Lead magnet** — formulaire email + lien formation

### `/formation-claude-consultant` — Niveau 1 ⭐ (15 sections)

1. **Hero page de vente** — H1 + sous-titre + VSL/avatar + 3 bullets promesse + CTA "Je rejoins (147€)" + compteur places
2. **L'histoire de Sandra** — storytelling 300-400 mots
3. **Ce que tu apprends en 14 jours** — 7 modules accordéons :
   - M0 : Bienvenue & Quick Win (3 vidéos)
   - M1 : Comprendre Claude (4 vidéos)
   - M2 : Méthode P.R.O.M.P.T. (5 vidéos) ⭐
   - M3 : Projets Claude (4 vidéos)
   - M4 : Construire tes 3 Agents (6 vidéos) ⭐
   - M5 : Routines & anti-erreurs (3 vidéos)
   - M6 : Et après ? (2 vidéos)
4. **Les 3 Agents détaillés** — 📧 Agent Inbox + 🎙️ Agent Mission + 📋 Agent Propal (description, démo, gain de temps)
5. **Méthode P.R.O.M.P.T.** — visualisation + explication 6 lettres
6. **Le format** — sprint 14j, 45 min/jour, 27 vidéos courtes, communauté + lives
7. **Bonus inclus (~985€)** — 11 bonus listés avec valeur :
   - Kit IA Solopreneur (27€)
   - Guide Pratique Agents IA (29€)
   - Prompt Library Consultant Pro (197€)
   - 3 Templates Projets Claude (97€)
   - Communauté privée WhatsApp (297€)
   - 3 Lives Q&R mensuels (297€)
   - Mises à jour à vie (Inestimable)
   - Certificat de complétion (97€)
8. **Ta formatrice** — photo + bio + parcours + crédibilité
9. **Témoignages** — 5-7 témoignages avec photo + métier + résultat chiffré
10. **Tarif & offre fondateur** — comparatif 3 tiers (147€ / 197€ / 297€) + scarcity "30 places, X restantes" + paiement comptant/3x + 2 CTAs
11. **Garantie 14 jours** — badge + texte rassurant
12. **FAQ formation** — 15 Q/R exhaustives
13. **Dernier push** — récap promesse + risk reversal + CTA final
14. **Pas prête ?** — capture email lead magnet
15. **Alternatives** — liens Niveau 2 / Niveau 3

### `/formations` — Catalogue (6 sections)

1. Intro + "3 niveaux pour aller du débutant au pro de l'automatisation"
2. Les 3 niveaux — 3 cards alignées (pictogramme couleur, titre, promesse, 3 bénéfices, prix, durée, CTA)
3. Services complémentaires — 2 cards (Audit IA 497€, Consulting 1500€+)
4. Membership (teaser) — "Bientôt : Le Cercle" + CTA liste d'attente
5. Guide de choix — quiz interactif ou tableau de comparaison
6. FAQ comparative — tableau de comparaison features

### `/claude-productivite-pro` — Niveau 2 (7 sections)

1. Hero — "Transforme Claude en ton équipe complète" + sous-titre Excel/PowerPoint/Artifacts/Skills/Connecteurs
2. À qui c'est destiné — terminé Niveau 1 ou maîtrise les bases
3. Promesse — "10x moins de temps" sur livrables clients
4. Programme — 9 modules (Artifacts x2, Excel, PowerPoint, Excalidraw+Mermaid, Skills, Connecteurs, Workflow métier, Routine Pro)
5. Bonus N2 — 50 Artifacts + 10 templates Excel + 8 PowerPoint + Guide Drive/Slack/Notion + communauté + certificat
6. Tarifs — 297€ early-bird (diplômés N1) / 397€ lancement / 597€ catalogue
7. FAQ + CTA

### `/claude-cowork-automatisation` — Niveau 3 (7 sections)

1. Hero — "Claude en autonomie totale. Il pilote ton ordinateur." + vidéo démo + CTA Master Class
2. Pré-requis — Niveau 2 recommandé + Claude Desktop OBLIGATOIRE
3. Promesse — automatisations complètes (Cowork, MCP, Sub-agents, Plugins)
4. Programme — 9 modules (Cowork ⭐, Hands-Free, MCP ⭐, Plugins, Sub-agents, Cowork avancé, Auto métier, Sécurité, Bilan)
5. Bonus N3 — 3 sessions coaching live (90 min) + 30 workflows Cowork + Guide MCP 10 outils + 5 sub-agents pré-configs + audit sécurité + certificat
6. Tarifs — 597€ early-bird (diplômés N2) / 897€ lancement / 1 497€ catalogue
7. FAQ + CTA

### `/audit-ia` (5 sections)

1. Hero "L'audit IA personnalisé pour ton business" + CTA "Je réserve mon audit"
2. Pour qui — solopreneurs sur-mesure / pros qui hésitent
3. Déroulement — 1h visio + audit outils/tâches + plan d'action + suivi 30j
4. Prix & réservation — 497€ + Calendly + -30% diplômés N1
5. FAQ + CTA

### `/consulting` (5 sections)

1. Hero — "Done-with-you : je construis tes systèmes IA avec toi"
2. Pour qui — pros qui veulent déléguer / équipes
3. Prestations — setup Agents + intégration MCP/Cowork + formation équipe
4. Tarifs — à partir de 1 500€ + devis sur-mesure
5. Contact — formulaire de prise de contact

### `/le-cercle` — Membership teaser (3 sections)

1. Hero — "Le Cercle Consultant Augmenté" + "Bientôt disponible"
2. Promesse — 39€/mois + toutes les formations + lives mensuels + communauté + nouveautés Claude
3. Liste d'attente — capture email + "-30% à vie au lancement"

### `/blog` (5 sections)

1. Hero blog — H1 "Le blog Claude IA pour solopreneurs" + search bar + CTA capture email
2. 4 catégories : Claude Débutant / Cas d'usage Consultant / Comparaisons (Claude vs ChatGPT) / Tutoriels avancés
3. Articles à la une — 3 featured
4. Grille articles — 12/page pagination
5. Newsletter sidebar

### `/blog/{slug}` — Template article

1. Header — catégorie + date + temps de lecture + H1 + image hero + auteur Rama
2. Sommaire auto-généré (ancres H2)
3. Contenu Markdown rendu HTML + 2-3 CTAs internes
4. CTA formation — encadré "Va plus loin avec Le Système Claude"
5. Articles similaires — 3 connexes
6. Commentaires (Disqus ou natif, optionnel MVP)

### `/3-agents-ia-gratuits` — Lead magnet (4 sections)

1. Hero — H1 "Récupère 3 Agents IA Claude gratuits" + sous-titre + mockup 3 agents + form email + CTA
2. Ce que tu reçois — 3 templates instructions complètes + vidéo bonus 7 min + newsletter hebdo
3. Qui est Rama (court) — 2 lignes + photo
4. Garantie no-spam — "Désabonnement en 1 clic"

### `/a-propos` (6 sections)

1. Hero — photo Rama + "Bonjour, je suis Rama" + positionnement
2. Mon histoire — storytelling parcours
3. Ma mission — pourquoi Instant IA existe
4. Mes valeurs — 3-4 valeurs (transparence, accessibilité)
5. Chiffres clés — X élèves / X heures sauvées / X% satisfaction
6. Contact & réseaux — LinkedIn / Insta / Email

Schema : `Person` (knowsAbout, sameAs, jobTitle).

### `/temoignages` (4 sections)

1. Hero — "Ils ont transformé leur business"
2. Grille — 12-15 témoignages avec filtres par métier (Consultant/Formateur/Coach)
3. Vidéos — 3-5 vidéos courtes (1 min)
4. CTA formation

### `/contact` (4 sections)

1. Hero — "Comment puis-je t'aider ?"
2. 3 options — FAQ / Calendly pro / email support
3. Formulaire — nom, email, sujet, message + protection anti-spam (honeypot)
4. Infos — délai 48h + email hello@instant-ia.com + LinkedIn / Insta

### Pages légales

- `/mentions-legales` — éditeur, hébergeur, contact
- `/cgv` — conditions vente, paiement, garantie 14j, remboursement
- `/confidentialite` — RGPD, données collectées, droit accès/suppression
- `/cookies` — liste cookies + gestion consentements
- `/verifier-certificat/{code}` — vérification publique d'un certificat (nom, formation, date)

### Espace membre (Symfony)

- `/app/connexion` — form login + register + reset
- `/app/inscription` — form register email verification + RGPD + CGV
- `/app/mes-formations` — dashboard élève (Course achetés, % progression, CTA Continuer)
- `/app/formation/{slug}` — vue d'ensemble + liste modules+leçons + progression + CTA
- `/app/formation/{slug}/lecon/{id}` — player Vimeo + description + ressources PDF + bouton "Marquer terminé" + bouton "Suivante" + sidebar nav
- `/app/mes-certificats` — liste + PDF téléchargeable + partage LinkedIn
- `/app/mon-compte` — modifier email/nom + changer password + préférences emails + suppression compte (RGPD)

### Parcours achat

- `/achat/{slug}` — init Stripe Checkout (vérif User connecté, vérif Course publié, créer Session, redirect Stripe)
- `/achat/success` — vérifie Purchase via session_id + félicitations + nom + CTA "Accéder à la formation"
- `/achat/annule` — message rassurant + lien retour formation

### `/admin` — EasyAdmin

- Dashboard simple (ventes du mois, nb users, top formations)
- CRUD Course / Module / Lesson
- Vue Purchase (read-only, filtre date)
- Vue User (peut promouvoir admin)
- Vue Progression (analytics)
- Vue Certificate (liste + génération manuelle)

---

## Règles de design

- **Tailwind classes** : utiliser le design system Editorial Atelier (couleurs, typo, spacings)
- **Mobile-first impératif**
- **Pas de framework JS lourd** : juste Stimulus + Turbo

## Composants Twig réutilisables (à créer)

```
templates/components/
├── button.html.twig (variants: primary, secondary, ghost)
├── card.html.twig (variants: course, testimonial, blog)
├── hero.html.twig (variants: home, product, blog)
├── pricing-table.html.twig
├── faq-accordion.html.twig
├── testimonial-card.html.twig
├── module-accordion.html.twig
├── newsletter-signup.html.twig
├── footer.html.twig
└── header.html.twig
```

## Typographie

- H1 : grand impact, 1 par page max
- H2 : sections principales
- H3 : sous-sections
- Texte : 16-18px sur mobile, lisible

## CTAs

- Primary : background coloré, large, animation hover
- Secondary : outline, plus discret
- Toujours **1 CTA principal par section**

---

## Plan de maillage interne (cocon SEO)

```
HOME (page hub)
  ├── /formation-claude-consultant (Niveau 1) ⭐
  │     ├── lien depuis tous les articles blog "débutant"
  │     ├── lien depuis /3-agents-ia-gratuits
  │     └── lien depuis tous les autres niveaux
  │
  ├── /claude-productivite-pro (Niveau 2)
  │     └── lien depuis Niveau 1 (upsell)
  │
  ├── /claude-cowork-automatisation (Niveau 3)
  │     └── lien depuis Niveau 2 (upsell)
  │
  ├── /audit-ia
  │     └── lien depuis tous les niveaux (alternative)
  │
  ├── /blog (hub SEO)
  │     ├── 4 articles "débutant" → Niveau 1
  │     ├── 6 articles "cas d'usage" → Niveau 1 ou 2
  │     ├── 3 articles "comparaison" → Niveau 1
  │     └── 5 articles "avancé" → Niveau 2 ou 3
  │
  └── /a-propos (autorité)
        └── lien depuis le footer + bio articles
```

---

## Plan de migration depuis l'ancien Next.js

### Phase 1 — Préparation (semaine 1)
- Backup complet (✅ via branche `legacy-nextjs`)
- Liste URLs existantes
- Liste contenus à conserver (Kit IA, Guide IA)

### Phase 2 — Construction Symfony (semaines 2-7)
- Sprints 1-6
- Pages publiques prioritaires
- Espace membre fonctionnel

### Phase 3 — Migration contenu (semaine 8)
- Imports articles blog existants
- Redirections 301 anciennes URLs
- Tests staging

### Phase 4 — Lancement (semaine 9)
- DNS pointer vers nouveau site
- Sitemap soumis Google Search Console
- Tester redirections
- Monitoring Sentry

---

## Checklist qualité (avant chaque mise en prod)

### SEO
- Title + meta sur chaque page
- H1 unique par page
- Schemas validés (Schema.org Validator)
- Sitemap.xml à jour
- Robots.txt OK
- Pas de pages orphelines

### Performance
- Core Web Vitals > 90 (PageSpeed)
- Images WebP + lazy loading
- OPcache activé
- Cache HTTP configuré

### Sécurité
- HTTPS partout
- CSRF tokens
- Rate limiter login/register
- Headers HTTP sécurisés (NelmioSecurityBundle)

### Accessibilité (WCAG 2.2 AA)
- Sémantique HTML5
- ARIA labels
- Contraste 4.5:1 min
- Navigation clavier

### RGPD
- Bannière cookies
- Politique confidentialité
- Bouton suppression compte
- Export données

### Contenu
- Pas de fautes
- Liens internes fonctionnels
- CTAs visibles
- Témoignages avec accord écrit
