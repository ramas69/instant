# SEO — Métadonnées par page (issue de la spec v2)

> Source : brief v2 partagé par Rama le 2026-05-01.
> À utiliser dans chaque template Twig via `{% block title %}`, `{% block description %}`, et balises `<meta>` dans `base.html.twig`.

---

## Pages publiques

| Route | Title | Meta description | H1 | Mot-clé principal |
|---|---|---|---|---|
| `/` | Formation Claude IA pour Consultants & Formateurs Solo \| Instant IA | La méthode pas-à-pas pour transformer Claude en ton bras droit en 14 jours. Pour consultants, formateurs et solopreneurs non-tech. Garantie 14j. | Transforme Claude en ton bras droit en 14 jours | formation claude consultant |
| `/formations` | Catalogue Formations Claude IA \| 3 Niveaux + Services \| Instant IA | (à compléter Sprint 3) | Le catalogue Claude IA pour solopreneurs | catalogue formation claude |
| `/formation-claude-consultant` | Le Système Claude du Consultant — Formation IA en 14 jours \| Instant IA | Formation Claude IA pour consultants et formateurs solo. 27 vidéos, 3 agents IA construits, méthode P.R.O.M.P.T. 147€ (offre fondateur). Garantie 14j. | Le Système Claude du Consultant | formation claude consultant |
| `/claude-productivite-pro` | Claude Productivité Pro — Excel, PowerPoint, Skills \| Niveau 2 \| Instant IA | (à compléter Sprint 3) | Claude Productivité Pro — Niveau 2 | claude excel powerpoint |
| `/claude-cowork-automatisation` | Claude Cowork & Automatisation — Mode Autonome \| Niveau 3 \| Instant IA | (à compléter Sprint 3) | Claude Cowork & Automatisation — Niveau 3 Master Class | claude cowork mcp automatisation |
| `/audit-ia` | (à compléter Sprint 3) | (à compléter Sprint 3) | L'audit IA personnalisé pour ton business | audit ia personnalisé |
| `/consulting` | (à compléter Sprint 3) | (à compléter Sprint 3) | Done-with-you : je construis tes systèmes IA avec toi | consulting ia |
| `/le-cercle` | (à compléter Sprint 3) | (à compléter Sprint 3) | Le Cercle Consultant Augmenté | membership ia consultant |
| `/3-agents-ia-gratuits` | (à compléter Sprint 2) | (à compléter Sprint 2) | Récupère 3 Agents IA Claude gratuits | agents ia gratuits |
| `/a-propos` | (à compléter Sprint 2) | (à compléter Sprint 2) | Bonjour, je suis Rama | rama soumaré formatrice ia |
| `/contact` | (à compléter Sprint 2) | (à compléter Sprint 2) | Comment puis-je t'aider ? | contact instant ia |

---

## Schemas Schema.org à implémenter

| Page | Schemas |
|---|---|
| `/` | Organization + Person (Rama) + FAQPage |
| `/formation-claude-consultant` | Course + FAQPage + Offer + AggregateRating (témoignages) |
| `/formations` | ItemList |
| `/audit-ia` | Service + Offer |
| `/consulting` | Service |
| `/a-propos` | Person (knowsAbout, sameAs, jobTitle) |
| `/temoignages` | AggregateRating + Review[] |
| `/blog` | Blog |
| `/blog/{slug}` | BlogPosting + Author |
| `/verifier-certificat/{code}` | EducationalOccupationalCredential |

---

## Conventions techniques

- Toute page a un `{% block title %}` et `{% block description %}` (suffixés par ` | Instant IA` automatiquement dans `base.html.twig`)
- H1 unique par page
- Lang `fr` partout
- Pas de Google CDN (RGPD) — schemas en JSON-LD inline
- Open Graph + Twitter Card sur chaque page (pour partages sociaux)
