<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Pages légales : mentions, CGV, confidentialité, cookies.
 *
 * Sprint 2 : les templates contiennent des placeholders explicites pour les
 * informations que Rama doit fournir (SIRET, dénomination, adresse, hébergeur).
 * Le contenu rédigé est un squelette type micro-entreprise + e-learning ;
 * il doit être validé par un juriste / avocat avant publication réelle.
 */
final class LegalController extends AbstractController
{
    #[Route('/mentions-legales', name: 'legal_mentions', methods: ['GET'])]
    public function mentions(): Response
    {
        return $this->render('legal/mentions-legales.html.twig');
    }

    #[Route('/cgv', name: 'legal_cgv', methods: ['GET'])]
    public function cgv(): Response
    {
        return $this->render('legal/cgv.html.twig');
    }

    #[Route('/confidentialite', name: 'legal_confidentialite', methods: ['GET'])]
    public function confidentialite(): Response
    {
        return $this->render('legal/confidentialite.html.twig');
    }

    #[Route('/cookies', name: 'legal_cookies', methods: ['GET'])]
    public function cookies(): Response
    {
        return $this->render('legal/cookies.html.twig');
    }
}
