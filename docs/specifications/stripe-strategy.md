# Stratégie Stripe (Sprint 2 + post-MVP)

> Adoption du pattern **Stripe Payment Links** déjà utilisé dans le legacy plutôt que Stripe Checkout Session custom.

---

## Décision : Payment Links

**Pourquoi** : Rama utilisait déjà des `buy.stripe.com/test_*` URLs dans le legacy Next.js. On réutilise ce pattern. Avantages :

- **Côté Rama** : elle gère ses produits/prix dans le dashboard Stripe (changement = pas de redeploy)
- **Côté code** : zéro SDK Stripe pour la création de session — juste un lien `<a href="...">` dans Twig
- **Sécurité** : Stripe gère 100% du paiement, on ne touche jamais à la carte
- **MVP-friendly** : on peut lancer mi-mai sans toucher au backend complexe

**Inconvénients** (acceptables pour le MVP) :
- Pas de personnalisation Stripe Checkout (le "Powered by Stripe" classique reste)
- 1 Payment Link par tier de prix (147€ early-bird / 197€ lancement / 297€ catalogue)

---

## Flux d'achat (Sprint 2 + 4)

```
[1] User clique CTA "Je rejoins (147€)" sur /formation-claude-consultant
       ↓
[2] Redirect vers https://buy.stripe.com/<payment_link_id> (créé par Rama)
       ↓
[3] User remplit formulaire Stripe (carte, email, prénom)
       ↓
[4] Stripe traite le paiement
       ↓
[5] Stripe envoie un webhook checkout.session.completed à instant-ia.com/webhooks/stripe
       ↓
[6] Notre app :
     - Vérifie la signature du webhook avec STRIPE_WEBHOOK_SECRET
     - Vérifie idempotence (lookup Achat par stripeSessionId)
     - Si pas d'Achat existant → crée Achat (statut PAID), persist
     - Trigger email confirmation via Mailer (Brevo en prod, null:// en dev)
     - Si Achat existait déjà → ignore (retry idempotent)
       ↓
[7] Stripe redirige le user vers /achat/success?session_id=cs_test_xxx
       (URL de redirection success configurée dans le Payment Link)
       ↓
[8] Notre /achat/success affiche félicitations + lien vers /app/mes-formations
       (en Sprint 2 : juste lien email/contenu, l'espace membre vient en Sprint 3+)
```

---

## Variables d'environnement requises

```bash
# .env (template, valeurs réelles dans .env.local)

# Webhook secret de l'endpoint Stripe (dashboard Stripe → Webhooks → notre endpoint → Signing secret)
STRIPE_WEBHOOK_SECRET=whsec_PLACEHOLDER

# Payment Links par tier de prix (dashboard Stripe → Payment Links → Create)
STRIPE_PAYMENT_LINK_NIVEAU_1_EARLY_BIRD=https://buy.stripe.com/PLACEHOLDER
STRIPE_PAYMENT_LINK_NIVEAU_1_LAUNCH=https://buy.stripe.com/PLACEHOLDER
STRIPE_PAYMENT_LINK_NIVEAU_1_CATALOG=https://buy.stripe.com/PLACEHOLDER
```

`.env.local` (non versionné) contient les vraies clés Rama.

---

## Côté code Symfony Sprint 2

### 2.6 — Init Stripe (juste pour la validation webhook)

```bash
composer require stripe/stripe-php
```

Pas besoin du SDK pour créer les sessions (les Payment Links font tout). On l'utilise uniquement dans le webhook handler pour `Webhook::constructEvent()` (valide la signature).

### 2.6 — Routes parcours achat

| Route | Action |
|---|---|
| `GET /formation-claude-consultant` | Affiche page de vente avec CTA `<a href="{{ env('STRIPE_PAYMENT_LINK_NIVEAU_1_EARLY_BIRD') }}">Je rejoins</a>` |
| `GET /achat/success` | Affiche félicitations (lookup Achat par `?session_id` query param, optionnel) |
| `GET /achat/annule` | Message rassurant + lien vers `/formation-claude-consultant` |

### 2.7 — Webhook Stripe

Route : `POST /webhooks/stripe`

```php
// src/Achat/Controller/StripeWebhookController.php
public function __invoke(Request $request): Response
{
    $payload = $request->getContent();
    $sigHeader = $request->headers->get('stripe-signature');
    $secret = $this->getEnv('STRIPE_WEBHOOK_SECRET');

    try {
        $event = Webhook::constructEvent($payload, $sigHeader, $secret);
    } catch (SignatureVerificationException $e) {
        return new Response('Invalid signature', 400);
    }

    if ($event->type === 'checkout.session.completed') {
        $this->achatService->traiterPaiementReussi($event->data->object);
    }

    return new Response('OK', 200);
}
```

`AchatService::traiterPaiementReussi(Session $session)` :
1. Lookup `Achat` par `$session->id` via `AchatRepository::findOneByStripeSessionId()`
2. Si existe et déjà PAID → return (idempotence)
3. Sinon : créer Achat (extraire user_id depuis `$session->client_reference_id` ou créer User à la volée à partir de `$session->customer_email`), set montant depuis `$session->amount_total`, marquer PAID
4. Trigger email confirmation
5. Persist + flush

---

## Tests

- Test fonctionnel sur le webhook (event mock + signature valide)
- Test idempotence : envoyer le même event 3 fois → 1 seul Achat créé
- Test signature invalide → 400

---

## Avant la prod

Dashboard Stripe à configurer :
1. Créer 3 produits + 3 Payment Links (147€ / 197€ / 297€) avec :
   - URL de redirection success : `https://instant-ia.com/achat/success`
   - URL de redirection cancel : `https://instant-ia.com/achat/annule`
2. Configurer endpoint webhook : `https://instant-ia.com/webhooks/stripe`
   - Sélectionner event : `checkout.session.completed` uniquement
   - Récupérer `whsec_*` à mettre dans `.env.prod.local`

En dev/staging :
- Stripe CLI : `stripe listen --forward-to localhost:8001/webhooks/stripe` pour tester sans déploiement.
