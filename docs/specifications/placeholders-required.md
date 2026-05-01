# Placeholders à fournir par Rama

> Tout ce qui sera marqué `[PLACEHOLDER : ...]` dans les templates Twig de Sprint 2.
> Rama complétera au fur et à mesure pour remplacer les placeholders par le contenu final.

---

## 🖼️ Visuels

| # | Description | Format / Dimensions | Usage |
|---|---|---|---|
| V1 | Photo Rama (avatar pro) hero home | carré, 600×600+ px, JPG/WebP | hero home + section À propos |
| V2 | Photo Rama (portrait) page À propos | rectangle 4:5, 800×1000+ px | `/a-propos` hero |
| V3 | Photo Sophie M. (Coach business) | carré, 200×200+ px | témoignage home + Niveau 1 |
| V4 | Photo Karim D. (Fondateur e-commerce) | carré, 200×200+ px | témoignage home + Niveau 1 |
| V5 | Photo Laura P. (Directrice agence) | carré, 200×200+ px | témoignage home + Niveau 1 |
| V6 | Vidéo VSL Niveau 1 (ID Vimeo) | embed Vimeo | section 1 hero `/formation-claude-consultant` |
| V7 | Mockup 3 agents lead magnet | image PNG/SVG | hero `/3-agents-ia-gratuits` |
| V8 | Logo Instant IA (header + footer) | SVG | partout |
| V9 | Favicon | SVG ou PNG 32×32 | head meta (j'ai mis un placeholder unicode 𓂀) |
| V10 | Open Graph image (partages sociaux) | 1200×630 px | meta tags partout |

---

## 📝 Copy texte (à rédiger ou valider)

| # | Section | Description |
|---|---|---|
| C1 | Méthode P.R.O.M.P.T. (sections home + Niveau 1) | Les 6 lettres de l'acronyme + leur signification (P.R.O.M.P.T. = ?) |
| C2 | Storytelling Sandra — section 2 page Niveau 1 | 300-400 mots — l'histoire de Sandra (consultante 39 ans Lyon, ex-RH, débordée, découvre Claude) |
| C3 | Bio Rama complète — section 8 page Niveau 1 | bio + parcours + crédibilité (chiffres, expériences) |
| C4 | Chiffres clés Rama — section 5 page À propos | X élèves accompagnés / X heures sauvées / X% satisfaction |
| C5 | Description détaillée des 7 modules Niveau 1 | Pour chaque M0/M1/.../M6 : titre + 2 lignes description + nb vidéos |
| C6 | Description détaillée des 3 Agents Niveau 1 | Pour chaque (Inbox / Mission / Propal) : description + démo + gain de temps |
| C7 | 15 Q/R FAQ formation Niveau 1 | Liste exhaustive (5 fournies dans copy-from-legacy.md) |
| C8 | 8 Q/R FAQ home | Liste (5 fournies dans copy-from-legacy.md) |
| C9 | Storytelling parcours Rama — section 2 page À propos | Histoire personnelle / pourquoi Instant IA |
| C10 | Mission Instant IA — section 3 page À propos | Pourquoi Instant IA existe |
| C11 | 3-4 valeurs — section 4 page À propos | Transparence, accessibilité, etc. |
| C12 | 5-7 témoignages texte complet Niveau 1 | Étendre les 3 existants (Sophie/Karim/Laura) avec 2-4 nouveaux |
| C13 | Description Avant/Après — section 3 home | Visualisation transformation 14 jours |

---

## 🛒 Stripe Payment Link

| # | Description |
|---|---|
| S1 | Payment Link Stripe pour formation Niveau 1 à **147€** (early-bird, 30 premières) |
| S2 | Payment Link Stripe pour formation Niveau 1 à **197€** (lancement, après les 30 premières) |
| S3 | Payment Link Stripe pour formation Niveau 1 à **297€** (catalogue, après le lancement) |
| S4 | Webhook secret Stripe `whsec_*` (configurable depuis dashboard Stripe → webhooks → "Add endpoint" pointing vers `instant-ia.com/webhooks/stripe`) |

→ Les Stripe Payment Links pour Kit IA (27€) et Guide Pratique (29€) **existent déjà** dans le legacy — réutilisables.

---

## ⚖️ Légal

| # | Description |
|---|---|
| L1 | Dénomination commerciale (= Rama Soumaré ou nom commercial) |
| L2 | Numéro SIRET de la micro-entreprise |
| L3 | Adresse de domiciliation |
| L4 | Templates Mentions légales / CGV / Politique de confidentialité / Cookies si déjà rédigés (avocat ?) |
| L5 | Hébergeur (Platform.sh / Scalingo / autre) — pour mentions légales |

→ Si non disponible, **placeholders explicites dans les pages légales** : "[À COMPLÉTER : SIRET / dénomination / adresse]".
La page reste publique mais avec un avertissement clair que le contenu juridique est en cours de validation.

---

## 📧 Emails transactionnels

| # | Description |
|---|---|
| E1 | Compte Brevo créé + clé API SMTP/HTTP — à fournir au passage de `null://null` à `brevo+smtp://...` |
| E2 | From-name de l'expéditeur (ex : "Rama d'Instant IA") |
| E3 | From-email validé chez Brevo (ex : `hello@instant-ia.com` ou `bonjour@instant-ia.com`) |
| E4 | Logo + signature email (image dans la footer email) |

→ **En attendant** : `MAILER_DSN=null://null` → les emails partent dans `var/log/dev.log`. L'app fonctionne, mais les vrais emails ne sont pas envoyés.

---

## 📋 Liste de courses pour Rama (synthèse priorisée)

### 🔴 Critique avant lancement mi-mai
- S1 : Payment Link Stripe formation Niveau 1 à 147€
- L1+L2+L3 : SIRET + dénomination + adresse (au moins en placeholder + correction post-lancement)
- C1 : Acronyme P.R.O.M.P.T. (les 6 lettres)
- V6 : ID Vimeo VSL Niveau 1 (ou image fallback si vidéo pas tournée)
- V1 : Photo Rama avatar pro (au moins une, peut-être tirée de l'ancien site)

### 🟡 Important pour qualité conversion
- C2 : Storytelling Sandra
- C5+C6 : Description modules + agents Niveau 1
- C7 : 15 Q/R FAQ
- V3+V4+V5 : Photos témoignages

### 🟢 Peut être différé après lancement
- C9-C13 : copy détaillé (À propos, valeurs, etc.)
- V7+V10 : Mockup + OG image
- E1-E4 : Brevo (Sprint 4 ou plus tard)
