<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class AProposController extends AbstractController
{
    #[Route('/a-propos', name: 'a_propos', methods: ['GET'])]
    public function index(): Response
    {
        return $this->render('a-propos/index.html.twig');
    }
}
