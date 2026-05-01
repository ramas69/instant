<?php

declare(strict_types=1);

namespace App\Achat\Enum;

/**
 * États du cycle de vie d'un achat de formation.
 *
 * Transitions valides :
 *   PENDING  → PAID     (webhook Stripe `checkout.session.completed`)
 *   PENDING  → FAILED   (webhook `checkout.session.async_payment_failed`)
 *   PAID     → REFUNDED (remboursement manuel ou demande de garantie 14 jours)
 *
 * On stocke la valeur en minuscule snake_case pour rester proche du naming
 * Stripe (qui utilise lui-même `paid`, `unpaid`, `no_payment_required`...).
 */
enum StatutAchat: string
{
    case PENDING = 'pending';      // Session Stripe créée, paiement en attente
    case PAID = 'paid';            // Paiement validé par Stripe
    case REFUNDED = 'refunded';    // Remboursement effectué
    case FAILED = 'failed';        // Paiement échoué ou abandonné

    /**
     * Indique si l'achat ouvre l'accès à la formation.
     *
     * Utilisé par le voter d'accès aux leçons.
     */
    public function ouvreAcces(): bool
    {
        return self::PAID === $this;
    }

    /**
     * Indique si l'achat peut encore être remboursé.
     *
     * Le timing (garantie 14 jours) est vérifié dans le service métier — ici
     * on filtre uniquement par statut.
     */
    public function peutEtreRembourse(): bool
    {
        return self::PAID === $this;
    }
}
