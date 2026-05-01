<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Cours\Entity\Cours;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

/**
 * @extends AbstractCrudController<Cours>
 */
final class CoursCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Cours::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Cours')
            ->setEntityLabelInPlural('Cours')
            ->setDefaultSort(['ordre' => 'ASC']);
    }

    public function configureFields(string $pageName): iterable
    {
        yield IdField::new('id')->hideOnForm();
        yield TextField::new('titre');
        yield TextField::new('slug')->setHelp('Format kebab-case (ex : "le-systeme-claude").');
        yield TextareaField::new('description');
        yield MoneyField::new('prixCentimes', 'Prix')
            ->setCurrency('EUR')
            ->setStoredAsCents(true);
        yield BooleanField::new('isPublished', 'Publié');
        yield IntegerField::new('ordre');
        yield DateTimeField::new('createdAt', 'Créé le')->hideOnForm();
    }
}
