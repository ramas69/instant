<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\User\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;

/**
 * @extends AbstractCrudController<User>
 */
final class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Utilisateur')
            ->setEntityLabelInPlural('Utilisateurs')
            ->setDefaultSort(['createdAt' => 'DESC']);
    }

    public function configureFields(string $pageName): iterable
    {
        // On NE PAS exposer le password (hash) dans l'admin — Sprint 2 ajoutera
        // un formulaire dédié pour reset mot de passe.
        yield IdField::new('id')->hideOnForm();
        yield EmailField::new('email');
        yield BooleanField::new('isVerified', 'Email vérifié');
        yield ArrayField::new('roles');
        yield DateTimeField::new('createdAt', 'Créé le')->hideOnForm();
    }
}
