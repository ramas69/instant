<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Progression\Entity\Progression;
use App\Progression\Enum\StatutProgression;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;

/**
 * @extends AbstractCrudController<Progression>
 */
final class ProgressionCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Progression::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Progression')
            ->setEntityLabelInPlural('Progressions')
            ->setDefaultSort(['lastViewedAt' => 'DESC']);
    }

    public function configureFields(string $pageName): iterable
    {
        yield IdField::new('id')->hideOnForm();
        yield AssociationField::new('eleve');
        yield AssociationField::new('lecon');
        yield ChoiceField::new('statut')
            ->setChoices([
                'Pas commencée' => StatutProgression::NOT_STARTED,
                'En cours' => StatutProgression::IN_PROGRESS,
                'Terminée' => StatutProgression::COMPLETED,
            ]);
        yield DateTimeField::new('lastViewedAt', 'Dernière vue')->hideOnForm();
        yield DateTimeField::new('completedAt', 'Terminée le')->hideOnForm();
    }
}
