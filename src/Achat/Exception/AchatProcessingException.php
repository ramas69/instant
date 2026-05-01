<?php

declare(strict_types=1);

namespace App\Achat\Exception;

/**
 * Exception levée par AchatService quand le traitement d'un paiement Stripe
 * ne peut pas aboutir (payload incomplet, cours introuvable, etc.).
 *
 * Capturée par StripeWebhookController qui retourne 500 → Stripe retentera.
 */
final class AchatProcessingException extends \RuntimeException
{
    public static function emailIntrouvableDansSession(string $sessionId): self
    {
        return new self(\sprintf('Aucun email trouvé dans la session Stripe %s.', $sessionId));
    }

    public static function coursIntrouvable(string $slug): self
    {
        return new self(\sprintf('Cours "%s" introuvable en base. Charge les fixtures avant de traiter un paiement.', $slug));
    }
}
