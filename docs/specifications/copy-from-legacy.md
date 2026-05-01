# Copy extrait du legacy Next.js (référence pour Sprint 2)

> Source : branche `legacy-nextjs`, commit `fbcd6e6`.
> Note : le legacy a un positionnement **généraliste IA** (ChatGPT + Claude + Midjourney + Make + Zapier).
> Le nouveau positionnement est **ultra-focus Claude pour consultants/formateurs/coachs solo**.
> → On garde la **structure** et les **témoignages** du legacy, on **réécrit le copy** pour le nouveau positionnement.

---

## ⚖️ Ce qui se réutilise tel quel (positionnement compatible)

### Témoignages (3 personnes nommées dans le brief v2)

**Sophie M.** — Coach business
> "Grâce à Rama, j'ai automatisé 80% de ma création de contenu. Je gagne 15h par semaine. Honnêtement, c'est le meilleur investissement que j'ai fait cette année."

**Karim D.** — Fondateur e-commerce
> "L'atelier prompt engineering m'a ouvert les yeux. En 3h j'ai pigé ce que des mois de bidouillage tout seul ne m'avaient jamais appris. Rama explique les choses simplement."

**Laura P.** — Directrice agence marketing
> "On a bossé ensemble sur la stratégie IA de notre agence. ROI visible dès le premier mois. Rama ne fait pas que conseiller — elle met les mains dedans avec toi."

### Bio Rama (legacy, à compléter par le nouveau brief)

Du legacy :
> "Formatrice, experte technique, stratège business — je porte toutes ces casquettes parce que je crois qu'on ne peut pas enseigner ce qu'on ne pratique pas. Chaque jour, j'utilise l'IA pour mon propre business."
>
> "Ce que je t'enseigne, je l'applique d'abord sur mes propres projets. Chaque outil, chaque prompt, chaque automatisation que je te montre — je l'ai testée et déployée dans la vraie vie."
>
> "Mon approche : zéro blabla, que de l'actionnable. Tu repars de chaque formation, chaque atelier, chaque accompagnement avec des compétences que tu appliques dès le lendemain."

### Audit IA — copy 100% réutilisable

> "J'analyse tes process, tes outils, ton workflow actuel — et je te montre exactement où l'IA peut te faire gagner du temps, de l'argent et de l'énergie."
>
> Tags : Analyse des process · Opportunités IA · Plan d'action · ROI estimé
>
> Livrable : rapport d'audit complet + recommandations priorisées
>
> 497€ HT — Durée : 1 à 2 jours
>
> Mention : "Le montant de l'audit est déduit si tu passes au consulting dans les 30 jours."

### Consulting — copy 100% réutilisable

> "On passe à l'action. Je construis et déploie tes automatisations, tes agents IA, tes workflows — et je te forme pour que tu sois autonome. Comme une cofondatrice tech à tes côtés."
>
> Tags : Automatisations · Agents IA · Stratégie IA · Suivi 1:1
>
> À partir de 1 500€ HT — Selon le scope du projet

### FAQ générique (5 Q/R legacy adaptables)

1. **"J'y connais rien en tech, c'est pour moi ?"** → "Absolument. Si tu sais utiliser un navigateur web, tu peux suivre mes formations. Je vulgarise tout, j'explique chaque étape, et on avance ensemble. Pas besoin de coder."

2. **"C'est en ligne ou en présentiel ?"** → "Principalement en ligne (visio) pour que tu puisses participer où que tu sois. Pour les entreprises, le présentiel est possible sur demande — on en discute."

3. **"Comment je récupère mes ebooks après achat ?"** → "Tu reçois un accès immédiat après paiement. Tu es redirigé vers une page de téléchargement + tu reçois un email de confirmation. Tu peux re-télécharger à tout moment."

4. **"Je peux former toute mon équipe ?"** → "Bien sûr ! Je propose des formats pensés pour les équipes avec exercices collaboratifs et contenu adapté à ton secteur. Écris-moi et on construit le programme ensemble."

5. **"Comment se passe l'audit ?"** → "Tu m'envoies un email, on échange sur ta situation, et je lance l'analyse de tes process. Tu reçois un rapport complet avec les opportunités IA et un plan d'action priorisé. L'audit peut se faire seul ou mener au consulting — zéro engagement."

---

## 🎨 Structures éditoriales clés à porter

### Hero home (legacy → adapter pour nouveau brief)

Layout :
- Grid 2 colonnes (gauche : H1 + sous-titre + CTAs / droite : card "Ce que je propose")
- Background : 2 blobs animés (`blob blob-1` et `blob blob-2`)
- Number décoratif géant en arrière-plan ("IA")
- Bottom : 3 stats animés (CounterAnimation)

Éléments à conserver :
- Layout grid 2 colonnes
- Blobs décoratifs
- Stats animés en bas
- 2 CTAs (primary + ghost)

À adapter :
- H1 : nouveau brief "Transforme Claude en ton bras droit en 14 jours"
- Sous-titre : "Pour consultants, formateurs et coachs solo non-tech qui veulent récupérer 10h/semaine sans devenir tech"
- Card droite : 4 services Niveau 1 / Niveau 2 / Niveau 3 / Audit IA
- CTAs : "Je découvre la formation" + "Récupère 3 Agents IA gratuits"

### Marquee technos (legacy)

Bandeau défilant avec ces mots : `ChatGPT · Claude · Midjourney · Make · Zapier · Prompt Engineering · Automatisation · No-Code · Agents IA · Stratégie IA`

→ **Adapter pour positionnement Claude** : `Claude Sonnet 4.5 · Projects · Artifacts · Skills · Connecteurs · MCP · Cowork · Sub-agents · Vimeo · Notion`.

### "Why Strip" — 3 cards numérotées (01/02/03)

Legacy :
- 01 : "Gagne du temps"
- 02 : "Booste ton CA"
- 03 : "Ne te fais pas dépasser"

→ Pour le nouveau brief, garder le format mais réécrire :
- 01 : "Récupère 9-12h par semaine" (axé Niveau 1)
- 02 : "Maîtrise Claude pour de bon" (méthode P.R.O.M.P.T.)
- 03 : "Construis tes 3 Agents IA opérationnels" (Inbox/Mission/Propal)

### CTA final

Legacy :
> "Prête à transformer ton business avec l'IA ?"
>
> "Écris-moi, dis-moi où tu en es et ce que tu veux accomplir. Je te réponds personnellement sous 24h."
>
> Trust marks : "Réponse sous 24h · Zéro engagement · Conseil personnalisé"

→ Réutilisable directement pour la home + CTA "Récupère 3 Agents gratuits" du brief v2.

---

## 🛠️ Composants techniques à porter

### ScrollReveal (IntersectionObserver)

```js
// Legacy : src/components/ScrollReveal.tsx
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('vis')
      }
    })
  },
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
)
document.querySelectorAll('.rv,.rv-l,.rv-r').forEach((el) => observer.observe(el))
```

Classes utilisées :
- `.rv` — fade up
- `.rv-l` — slide depuis la gauche
- `.rv-r` — slide depuis la droite
- `.d1`, `.d2`, `.d3`, `.d4` — délais d'apparition
- `.vis` — état visible (déclenché par IO)

### CounterAnimation
Animation chiffres incrémentaux des stats du hero (compteurs `s1`, `s2`, `s3`).

### FaqAccordion
Accordéon question/réponse, ouverture par clic.

### Marquee
Défilement infini horizontal des logos technos (CSS animation pure).

### Confetti
Animation confettis sur la page `/merci` (post-achat).

→ Tous portés en Stimulus controllers en Sprint 2.2.

---

## 📦 Lead magnet `/3-agents-ia-gratuits`

⚠️ **Différence importante** : le lead magnet legacy = 3 agents `Contenu / Email / Veille` (différents des 3 agents Niveau 1 = `Inbox / Mission / Propal`).

→ On garde **le lead magnet legacy en l'état** (Contenu / Email / Veille) pour ne pas réduire l'incentive à acheter le Niveau 1.

Copy legacy :
- Hero : badge "100% Gratuit · Accès immédiat" + H1 "3 Agents IA du Solopreneur" + form capture email
- 3 agents :
  - Agent 01 — Contenu : 5 posts/semaine en 20 min au lieu de 3h
  - Agent 02 — Email : +40% taux d'ouverture en moyenne
  - Agent 03 — Veille : 1h de veille compressée en 5 min

---

## 🛒 Stratégie Stripe (héritée legacy)

Legacy utilisait des **Stripe Payment Links** (URLs `buy.stripe.com/test_*`), pas du Stripe Checkout custom.

URLs trouvées dans legacy :
- Kit IA Solopreneur (27€) → `https://buy.stripe.com/test_3cI5kF6T1b7jgGIfs57g401`
- Guide Pratique Agents IA (29€) → `https://buy.stripe.com/test_28E6oJ2CL2AN7685Rv7g400`

→ **Stratégie Sprint 2** : on garde le pattern Payment Links pour le Niveau 1 à 147€ aussi. Cf. `stripe-strategy.md`.
