<?php

declare(strict_types=1);

namespace App\Controller;

use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * Page lead magnet "3 Agents IA gratuits".
 *
 * Sprint 2 : capture email basique avec validation Symfony Validator + log Monolog.
 * L'intégration Brevo (envoi du PDF + ajout à la liste de contacts marketing)
 * arrive au Sprint 4 / Phase 1 fondations.
 */
final class LeadMagnetController extends AbstractController
{
    #[Route('/3-agents-ia-gratuits', name: 'lead_magnet_form', methods: ['GET'])]
    public function form(): Response
    {
        return $this->render('lead-magnet/3-agents-ia-gratuits.html.twig');
    }

    #[Route('/3-agents-ia-gratuits', name: 'lead_magnet_submit', methods: ['POST'])]
    public function submit(
        Request $request,
        ValidatorInterface $validator,
        LoggerInterface $logger,
    ): RedirectResponse {
        $email = trim((string) $request->request->get('email', ''));
        $consent = $request->request->getBoolean('consent');

        $errors = $validator->validate($email, [
            new Assert\NotBlank(message: 'Saisis ton email.'),
            new Assert\Email(message: 'Cet email n\'est pas valide.'),
            new Assert\Length(max: 180),
        ]);

        if (\count($errors) > 0 || !$consent) {
            foreach ($errors as $error) {
                $this->addFlash('error', $error->getMessage());
            }
            if (!$consent) {
                $this->addFlash('error', 'Coche la case de consentement pour continuer.');
            }

            return $this->redirectToRoute('lead_magnet_form');
        }

        // Sprint 2 : on log uniquement. Sprint 4 : ajout à Brevo + envoi PDF.
        $logger->info('Lead magnet — capture email', [
            'email' => $email,
            'magnet' => '3-agents-ia-gratuits',
            'ip' => $request->getClientIp(),
        ]);

        return $this->redirectToRoute('lead_magnet_merci', ['email' => $email]);
    }

    #[Route('/merci-3-agents-ia', name: 'lead_magnet_merci', methods: ['GET'])]
    public function merci(Request $request): Response
    {
        $email = (string) $request->query->get('email', '');

        return $this->render('lead-magnet/merci.html.twig', [
            'email' => $email,
        ]);
    }
}
