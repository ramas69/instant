---
name: Instant IA
description: Plateforme e-learning française qui transforme l'IA en outil de pro sérieux, pour des consultantes solo non-tech. Editorial Atelier v2 filtré par la rigueur Apple.
colors:
  ink-900: "#051F18"
  ink-700: "#064E3B"
  ink-500: "#0A6B52"
  ink-300: "#3D564B"
  ink-200: "#6B877B"
  ink-100: "#A8BFB6"
  gold-700: "#9C7E2F"
  gold-500: "#C5A044"
  gold-400: "#D4AF37"
  gold-300: "#E8C547"
  gold-100: "#F4E5B3"
  cream-50: "#FDFBF6"
  cream-100: "#FAF8F4"
  cream-200: "#F0EBE1"
  cream-300: "#E5DCC9"
  carbon: "#0E0E0C"
  paper: "#FFFFFF"
  success: "#0A6B52"
  warning: "#C5A044"
  danger: "#C0392B"
  info: "#3D564B"
typography:
  display:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(3rem, 7vw, 6.5rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(2.25rem, 4.5vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "1.75rem"
    fontWeight: 400
    lineHeight: 1.20
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.70
    letterSpacing: "0"
  label:
    fontFamily: "Space Grotesk, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: "0.20em"
rounded:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  "2xl": "24px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
  "3xl": "64px"
  "4xl": "80px"
  "5xl": "96px"
  "6xl": "128px"
components:
  button-primary:
    backgroundColor: "{colors.gold-400}"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.gold-500}"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-secondary:
    backgroundColor: "{colors.cream-100}"
    textColor: "{colors.ink-700}"
    rounded: "{rounded.pill}"
    padding: "12px 28px"
  button-secondary-hover:
    backgroundColor: "{colors.ink-700}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "12px 28px"
  button-ghost:
    backgroundColor: "{colors.cream-100}"
    textColor: "{colors.ink-300}"
    rounded: "{rounded.xs}"
    padding: "8px 8px"
  button-on-ink:
    backgroundColor: "{colors.ink-700}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  card-default:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.2xl}"
    padding: "28px"
  card-cream:
    backgroundColor: "{colors.cream-50}"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.2xl}"
    padding: "28px"
  card-dark:
    backgroundColor: "{colors.ink-700}"
    textColor: "{colors.paper}"
    rounded: "{rounded.2xl}"
    padding: "28px"
  card-gold:
    backgroundColor: "{colors.gold-100}"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.2xl}"
    padding: "28px"
---

# Design System: Instant IA

## 1. Overview

**Creative North Star: "Apple en Atelier Français"**

Le système vit dans une tension productive : la rigueur du moins d'Apple croisée avec la
chaleur d'un atelier d'artisan français. D'un côté, l'économie radicale (une promesse,
un visuel, un CTA par section), des marges généreuses, une hiérarchie typographique qui
porte toute l'émotion. De l'autre, le vert sapin profond, le crème ivoire, l'or signature
en italique, les numérotations 01 02 03, les tirets éditoriaux. Pas le blanc/noir glacial
de Cupertino : le vert profond et la chaleur d'un livre relié.

Le système rejette explicitement trois familles : les pages Skool / Kajabi génériques
(violet-orange saturés, témoignages en dégradés, compteurs gigantesques), les "tech bros
ChatGPT" (bleu nuit + jaune fluo, vocabulaire "second brain / productivity stack / ROI 10x"),
et les coachs bien-être pastel (rose poudré, beige sable, typo manuscrite, tarifs en 333€/777€).
La cible, Sandra, doit ressentir un soulagement dans les 3 premières secondes : *"ah enfin,
quelqu'un parle ma langue de pro sérieuse, sans me prendre pour une débile ni pour une geek."*

**Key Characteristics**
- Économie radicale : une chose à regarder par section, marges généreuses
- Hiérarchie typographique forte : un H1 immense porte l'émotion, basta
- Italiques signature en or sur les mots-clés émotionnels — la patte qui distingue d'Apple
- Palette vert sapin + or + crème, jamais le glacial blanc/gris/noir
- Animations subtiles : fade exponentiel au scroll, jamais bounce ni elastic
- Sémantique éditoriale : numérotations 01 02 03, tirets, eyebrows mono micro-uppercase

## 2. Colors: La Palette Atelier Éditorial

Trois familles, une seule voix : vert sapin (autorité), or (signature), crème (respiration).
Aucun pur noir, aucun pur blanc — tous les neutres sont teintés vers le vert.

### Primary
- **Vert Forêt Profond** (`#064E3B`, `ink-700`) : couleur structurante. Fonds des sections sombres,
  bordures, texte sur fond clair pour les titres secondaires et le corps de texte.
- **Vert Encre** (`#051F18`, `ink-900`) : titres principaux sur fond clair, texte le plus dense.
  Le presque-noir teinté vert qui remplace `#000`.
- **Vert Atelier** (`#0A6B52`, `ink-500`) : couleur sémantique success, accents secondaires.

### Secondary
- **Or Signature** (`#D4AF37`, `gold-400`) : la signature CTA. Fond du bouton primary,
  glow `shadow-glow-gold`. Apparaît rare, pèse fort.
- **Or Profond** (`#C5A044`, `gold-500`) : état hover du primary, italiques signature
  (Instrument Serif italic + or-500), couleur warning sémantique.
- **Or Vif** (`#E8C547`, `gold-300`) : version plus claire pour titres italiques sur fond
  ink-700, eyebrows DS sur fond sombre.
- **Or Pâle** (`#F4E5B3`, `gold-100`) : fonds de cartes accent, halos doux.

### Neutral
- **Crème Ivoire** (`#FAF8F4`, `cream-100`) : fond de page par défaut. Le bg principal —
  jamais le `#FFFFFF` glacial.
- **Crème Frais** (`#FDFBF6`, `cream-50`) : variant légèrement plus clair pour cartes "elevated"
  sur fond cream-100.
- **Crème Chaude** (`#F0EBE1`, `cream-200`) : zones "warm", fonds de sections différenciatrices.
- **Crème Profonde** (`#E5DCC9`, `cream-300`) : zones encore plus chaudes, séparateurs visuels.
- **Carbone** (`#0E0E0C`, `carbon`) : presque-noir teinté vert. Réservé aux contrastes maximum.
- **Papier** (`#FFFFFF`, `paper`) : pur blanc. Réservé aux cartes flat sur fond cream-100.

### Sémantique
- **Success** : `ink-500` (`#0A6B52`)
- **Warning** : `gold-500` (`#C5A044`)
- **Danger** : `#C0392B` — utilisé uniquement pour erreurs de formulaire et confirmations destructives
- **Info** : `ink-300` (`#3D564B`)

### Named Rules

**The One-Voice Rule.** L'or n'apparaît que sur ≤10% de la surface visible d'un écran à un
instant donné. Sa rareté est le point. Un CTA primary, une italique signature dans un H1,
peut-être un eyebrow — mais jamais trois zones d'or simultanées. Si tu vois quatre éléments
or sur un même écran, tu es en train de fabriquer du Skool.

**The No-Pure-Black Rule.** Jamais `#000`. Toujours `#0E0E0C` (carbone teinté vert) ou
`#051F18` (vert encre). Le pur noir est glacial, américain, distant. Le carbone est
chaleureux, français, atelier.

## 3. Typography: La Trinité Éditoriale

**Display Font:** Instrument Serif (Georgia fallback)
**Body Font:** Inter (system-ui fallback)
**Label/Mono Font:** Space Grotesk (ui-monospace fallback)

**Character.** Instrument Serif porte l'émotion : ses italiques sont la signature visuelle
de la marque. Inter porte la lecture : neutre, technique, lisible à 14-18px en corps de
texte. Space Grotesk porte les marqueurs : eyebrows micro-uppercase, métriques, labels.
Le contraste entre serif et sans est le moteur de hiérarchie.

### Hierarchy
- **Display** (Instrument Serif 400, `clamp(3rem, 7vw, 6.5rem)`, line-height 1.05) :
  réservé aux H1 hero. Une fois par page. Italiques en or sur 1-3 mots émotionnels.
- **Headline** (Instrument Serif 400, `clamp(2.25rem, 4.5vw, 4.5rem)`, line-height 1.05) :
  H2 de section. Marque chaque chapitre du scroll narratif.
- **Title** (Instrument Serif 400, 28px / 1.75rem, line-height 1.20) :
  H3 — titres de cartes, sous-sections.
- **Body** (Inter 400, 16px / 1rem, line-height 1.70) :
  paragraphes courants. Plafond 65-75ch par ligne.
- **Label** (Space Grotesk 700, 11px / 0.6875rem, letter-spacing 0.20em, uppercase) :
  eyebrows, métadonnées, métriques, badges.

### Named Rules

**The Italics-Earn-Their-Place Rule.** Les italiques (Instrument Serif italic + or-500
ou or-300 selon fond) sont la signature de la marque. Réservées aux mots-clés émotionnels :
*propal du vendredi soir*, *consœur*, *enfin*. Maximum 1 à 3 mots italiques par bloc de
texte. Pas de décoration, pas d'italique pour faire joli. Si tu mets une phrase entière
en italique, tu casses la signature.

**The Body-65ch Rule.** Les paragraphes de corps de texte sont plafonnés à 65-75 caractères
par ligne (`max-width: 65ch` typique). Au-delà, c'est un mur de texte. Sandra scrolle
verticalement, pas horizontalement.

**The Bold-Earns-Its-Weight Rule.** Le gras est rare et porte un message. Pas de gras
décoratif sur des mots aléatoires. Le gras se mérite : il signale une promesse, un chiffre
clé, une conclusion. Quand il apparaît, il pèse.

**The Display-Once-Per-Page Rule.** Un seul Display par page (le H1 hero). Si tu sens le
besoin d'un deuxième Display pour "donner du poids" à une section, c'est que la hiérarchie
est cassée — utilise Headline.

## 4. Elevation

Le système est tonal-first : la profondeur passe d'abord par les valeurs (cream-100 → paper →
cream-200 → ink-700), pas par les ombres. Les ombres existent mais sont une exception, pas
un default. Quatre niveaux ambient (`shadow-1` à `shadow-4`) plus deux glows signature pour
les CTA (`shadow-glow-gold`, `shadow-glow-ink`).

### Shadow Vocabulary
- **shadow-1** (`0 1px 2px rgba(6,78,59,0.04), 0 0 0 1px rgba(6,78,59,0.04)`) :
  surfaces flat avec un soupçon de séparation. Inputs, boutons secondary.
- **shadow-2** (`0 4px 12px rgba(6,78,59,0.06), 0 1px 3px rgba(6,78,59,0.04)`) :
  cards par défaut. Niveau d'élévation le plus utilisé.
- **shadow-3** (`0 12px 32px rgba(6,78,59,0.08), 0 2px 6px rgba(6,78,59,0.04)`) :
  cards en hover, panneaux importants.
- **shadow-4** (`0 24px 60px rgba(6,78,59,0.12), 0 4px 12px rgba(6,78,59,0.06)`) :
  modales, popovers, hero CTAs en scroll.
- **shadow-glow-gold** (`0 12px 40px rgba(212,175,55,0.25)`) :
  signature CTA primary uniquement.
- **shadow-glow-ink** (`0 12px 40px rgba(6,78,59,0.20)`) :
  rare — éléments dark importants sur fond clair.

### Named Rules

**The Tonal-First Rule.** Avant d'ajouter une ombre, demande-toi si un changement de
valeur (cream-100 → paper → cream-200) ne ferait pas le même travail. Réponse 9 fois sur
10 : oui. Les ombres sont l'exception, pas le default.

**The Glow-Is-A-Reward Rule.** `shadow-glow-gold` est réservé exclusivement au CTA primary
(le bouton qui fait acheter / inscrire). Pas de glow sur des cartes informatives, pas de
glow sur des boutons secondaires, pas de glow décoratif. Le glow est une récompense.

## 5. Components

### Buttons

**Shape.** Pill (`border-radius: 999px`) sur tous les variants except ghost (radius xs).
La pill porte la chaleur — anti-rectangle SaaS.

**Primary.** Fond `gold-400`, texte `ink-900`, padding 14px 28px, glow gold permanent.
Hover : fond `gold-500`. Active : `scale(0.98)`. Suffixe arrow `→` systématique. Une
fois par section maximum.

**Secondary.** Outline 2px `ink-700`, fond `cream-100` (transparent visuel), texte `ink-700`,
padding 12px 28px. Hover : inversion (fond ink-700, texte paper). Pour les CTA neutres.

**Ghost.** Texte `ink-300`, padding 8px, pas de fond, pas de bordure. Hover : texte `ink-700`.
Pour les actions tertiaires (lien retour, "ignorer", etc.).

**On-ink.** Variant pour fonds sombres (`ink-700`). Bordure `paper/30`, texte `paper`.
Hover : fond `paper`, texte `ink-700`.

### Cards

**Shape.** Radius `2xl` (24px), padding interne 28px, ombre `shadow-2` par défaut.

**Variants** : default (paper), cream (cream-50), dark (ink-700, texte paper), gold
(gold-100). Tous suivent la même structure : badge optionnel haut-droit, icône ou
numéro 01/02/03 italique, titre serif, description body, features list optionnelle,
metric optionnelle (chip mono sur fond gold-100), footer prix + CTA.

**Pas de cards imbriquées.** Une carte n'en contient jamais une autre. Une carte est
un atome, pas un container.

### Inputs

**Style.** Bordure 1px `rgba(6,78,59,0.08)` (rule), fond paper, radius `md` (12px),
padding 12px 16px, font-family Inter. Focus : outline 3px `gold-300`, offset 3px.

### Eyebrow

**Signature pattern.** Mono Space Grotesk, micro-size (11px), uppercase, letter-spacing
0.20em, couleur `gold-500`, font-weight 700. Variant `eyebrow-ds` ajoute une ligne
décorative de 24px en `::before`. Marque chaque section comme un chapitre.

### Rule Draw

**Signature pattern.** Ligne or 1px qui se dessine au scroll de 0 à 100% de width.
Transition 1.2s ease-out. Désactivée en `prefers-reduced-motion`. Marque la fin d'un
bloc important — séparateur narratif, pas décoration.

### Hero Kinetic (composant exception)

Style sombre alternatif (fond `ink-900`, grid pattern, word-cycling, glassmorphism agent
dashboard, badges flottants). Existe pour la home actuelle mais n'est PAS le pattern
default. À utiliser avec parcimonie — si un futur écran a besoin d'un hero, partir du
hero light/cream et justifier explicitement le passage en kinetic dark.

## 6. Do's and Don'ts

### Do:

- **Do** réserver une promesse, un visuel, un CTA par section (Apple economy). Si tu
  comptes 4 colonnes ou 6 features dans une section, tu es en train de saturer.
- **Do** maintenir des marges 80-120px constants entre sections sur desktop. Le vide est
  un message, pas un manque.
- **Do** dimensionner les H1 entre 64 et 104px (text-5xl à text-6xl) sur desktop. Le H1
  porte l'émotion, il ne s'excuse pas.
- **Do** réserver les italiques en or à 1-3 mots émotionnels par bloc. Pas plus.
- **Do** utiliser le tutoiement systématique. Phrases courtes, verbes forts en début de
  ligne (*Transforme. Récupère. Construis.*).
- **Do** respecter `prefers-reduced-motion` partout. Animations désactivées en mode réduit.
- **Do** utiliser une seule fois `shadow-glow-gold` par écran (le CTA primary).
- **Do** valider la galère du métier dans la copy : *propal du vendredi soir à 23h*,
  *factures en retard*, *clients qui changent d'avis*. Pas d'aspirationnel abstrait.
- **Do** numérotations 01 02 03 italiques en serif (variant card.iconNumber). C'est une
  signature visuelle, pas un placeholder.
- **Do** sémantique HTML5 stricte (header/nav/main/article/footer), skip-links, ARIA
  labels, focus visible gold (3px outline + 3px offset). WCAG 2.2 AA non négociable.

### Don't:

- **Don't** saturer les pages avec violet-orange-jaune (style Skool / Kajabi). Si Sandra
  reconnaît le style "infopreneur américain mal traduit", elle scrolle et fuit.
- **Don't** utiliser des compteurs gigantesques `+3 247 élèves`, des avant/après en
  capture de virement bancaire, des boutons orange clignotants `REJOINS LA TRIBU 🔥`.
- **Don't** virer vers le bleu nuit + jaune fluo neon (style "tech bros ChatGPT").
  Pas de vocabulaire `second brain / productivity stack / ROI 10x` dans la copy.
- **Don't** utiliser des photos studio fond noir regard intense. Photo Rama = lumière
  naturelle, fond uni clair, regard direct mais chaleureux.
- **Don't** virer vers le rose poudré, beige sable, typo manuscrite (Caveat / Dancing
  Script). Décrédibilise la marque que Sandra vend à ses propres clients DRH.
- **Don't** utiliser des tarifs en 333€ / 777€ ou des promesses `alignement / abondance /
  belle énergie`. Catégorie coach bien-être interdite.
- **Don't** appliquer du `background-clip: text` sur un gradient (gradient text). Toujours
  une couleur solide pour le texte. Emphase via taille ou poids, pas via dégradé.
- **Don't** utiliser des `border-left` ou `border-right` > 1px comme stripe colorée
  (cards alert/callout). Bordures complètes ou rien.
- **Don't** utiliser le glassmorphism comme default. Le hero kinetic agent dashboard est
  une exception, pas un pattern à reproduire dans les cards / sections informatives.
- **Don't** utiliser des modales en premier réflexe. Inline / progressive disclosure
  d'abord, modale en dernier recours.
- **Don't** animer en bounce, elastic, ou spring excessif. Fade-out exponentiel
  (`ease-out` cubic-bezier(0.23, 1, 0.32, 1)) uniquement.
- **Don't** utiliser des adjectifs vides : *incroyable*, *innovant*, *puissant*,
  *révolutionnaire*. Verbes concrets ou rien.
- **Don't** utiliser des stock photos de "femme souriante devant ordinateur". Captures
  Claude reshootées sur fond crème ivoire avec ombre douce, ou rien.
- **Don't** ajouter une ombre quand un changement de valeur tonale fait le même travail
  (Tonal-First Rule).
