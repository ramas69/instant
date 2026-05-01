<?php

declare(strict_types=1);

namespace App\Achat\Mailer;

use App\Achat\Entity\Achat;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;

/**
 * Envoi des emails transactionnels liés aux achats.
 *
 * Sprint 2 : Mailer Symfony avec MAILER_DSN=null://null en dev (les emails
 * sont loggués mais non envoyés). En prod / staging, on bascule vers Brevo
 * (Sprint 4) en mettant un DSN du type `brevo+smtp://...` dans .env.local.
 */
final readonly class AchatMailer
{
    public function __construct(
        private MailerInterface $mailer,
        #[Autowire(env: 'MAILER_FROM_EMAIL')]
        private string $fromEmail,
        #[Autowire(env: 'MAILER_FROM_NAME')]
        private string $fromName,
    ) {
    }

    public function envoyerConfirmation(Achat $achat): void
    {
        $email = (new TemplatedEmail())
            ->from(new Address($this->fromEmail, $this->fromName))
            ->to(new Address($achat->getAcheteur()->getEmail()))
            ->subject('Bienvenue dans Le Système Claude — confirmation de ton paiement')
            ->htmlTemplate('email/achat-confirme.html.twig')
            ->textTemplate('email/achat-confirme.txt.twig')
            ->context([
                'achat' => $achat,
            ]);

        $this->mailer->send($email);
    }
}
