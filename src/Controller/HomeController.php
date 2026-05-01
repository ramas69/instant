<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Page d'accueil publique.
 *
 * Cette page est volontairement minimale en Sprint 1 : son rôle est de prouver
 * que le Design System "Editorial Atelier" est correctement câblé sur Tailwind v4.
 * Le contenu réel (hero + sections de vente) sera intégré en Sprint 2 — Phase 1
 * Fondations communes, à partir du copy fourni par Rama.
 */
final class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home', methods: ['GET'])]
    public function index(): Response
    {
        return $this->render('home/index.html.twig');
    }
}
