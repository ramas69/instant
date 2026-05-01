<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Cours\Entity\Lecon;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

/**
 * @extends AbstractCrudController<Lecon>
 */
final class LeconCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Lecon::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Lecon')
            ->setEntityLabelInPlural('Lecons')
            ->setDefaultSort(['ordre' => 'ASC']);
    }

    public function configureFields(string $pageName): iterable
    {
        yield IdField::new('id')->hideOnForm();
        yield AssociationField::new('module');
        yield TextField::new('titre');
        yield TextField::new('slug')->setHelp('Unique au sein du Module (ex : "introduction").');
        yield IntegerField::new('ordre');
        yield TextField::new('vimeoId', 'ID Vimeo')->setHelp('Identifiant numérique de la vidéo Vimeo Pro.');
        yield TextareaField::new('contenu')->setHelp('Notes, transcript, ressources.');
    }
}
