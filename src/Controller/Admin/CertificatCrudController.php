<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Certificat\Entity\Certificat;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

/**
 * @extends AbstractCrudController<Certificat>
 */
final class CertificatCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Certificat::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Certificat')
            ->setEntityLabelInPlural('Certificats')
            ->setDefaultSort(['generatedAt' => 'DESC']);
    }

    public function configureFields(string $pageName): iterable
    {
        yield IdField::new('id')->hideOnForm();
        yield AssociationField::new('eleve');
        yield AssociationField::new('cours');
        yield TextField::new('code')->setHelp('Code URL-safe de vérification publique.');
        yield TextField::new('pdfPath', 'Chemin PDF');
        yield DateTimeField::new('generatedAt', 'Généré le')->hideOnForm();
    }
}
