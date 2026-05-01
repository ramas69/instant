<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use EasyCorp\Bundle\EasyAdminBundle\Attribute\AdminDashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Symfony\Component\HttpFoundation\Response;

/**
 * Tableau de bord d'administration.
 *
 * TODO Sprint 2 : protéger derrière `ROLE_ADMIN` une fois Symfony Security activée.
 * Pour l'instant le `/admin` est accessible librement en dev — c'est volontaire.
 */
#[AdminDashboard(routePath: '/admin', routeName: 'admin')]
final class DashboardController extends AbstractDashboardController
{
    public function index(): Response
    {
        // Pas de page d'accueil custom au Sprint 1 → on redirige vers le CRUD User.
        $url = $this->container->get(AdminUrlGenerator::class)
            ->setController(UserCrudController::class)
            ->generateUrl();

        return $this->redirect($url);
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Instant IA · Admin')
            ->setLocales(['fr']);
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::section('Comptes');
        yield MenuItem::linkTo(UserCrudController::class, 'Utilisateurs', 'fa fa-user');

        yield MenuItem::section('Catalogue');
        yield MenuItem::linkTo(CoursCrudController::class, 'Cours', 'fa fa-graduation-cap');
        yield MenuItem::linkTo(ModuleCrudController::class, 'Modules', 'fa fa-folder');
        yield MenuItem::linkTo(LeconCrudController::class, 'Lecons', 'fa fa-play-circle');

        yield MenuItem::section('Ventes');
        yield MenuItem::linkTo(AchatCrudController::class, 'Achats', 'fa fa-credit-card');

        yield MenuItem::section('Suivi élèves');
        yield MenuItem::linkTo(ProgressionCrudController::class, 'Progressions', 'fa fa-chart-line');
        yield MenuItem::linkTo(CertificatCrudController::class, 'Certificats', 'fa fa-certificate');
    }
}
