<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Contrôleur des pages de vente individuelles des formations.
 *
 * En Sprint 2, le contenu est hardcodé dans les templates Twig (pas de lookup BDD)
 * pour permettre la mise en ligne avant que les fixtures Cours/Module/Lecon soient
 * chargées. Au Sprint 3, on basculera vers une route dynamique
 * `/formations/{slug}` qui lookup le Cours en base et passe les données au template.
 */
final class FormationController extends AbstractController
{
    #[Route('/formation-claude-consultant', name: 'formation_le_systeme_claude', methods: ['GET'])]
    public function leSystemeClaude(): Response
    {
        return $this->render('formation/le-systeme-claude.html.twig');
    }
}
