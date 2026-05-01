<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Achat\Entity\Achat;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

/**
 * @extends AbstractCrudController<Achat>
 */
final class AchatCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Achat::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Achat')
            ->setEntityLabelInPlural('Achats')
            ->setDefaultSort(['createdAt' => 'DESC'])
            // Sprint 1 : on ne crée/modifie pas les achats à la main, ils
            // viennent uniquement des webhooks Stripe.
            ->showEntityActionsInlined();
    }

    public function configureFields(string $pageName): iterable
    {
        yield IdField::new('id')->hideOnForm();
        yield AssociationField::new('acheteur');
        yield AssociationField::new('cours');
        yield MoneyField::new('montantCentimes', 'Montant')
            ->setCurrency('EUR')
            ->setStoredAsCents(true);
        yield TextField::new('stripeSessionId', 'ID session Stripe');
        yield ChoiceField::new('statut')
            ->setChoices([
                'En attente' => \App\Achat\Enum\StatutAchat::PENDING,
                'Payé' => \App\Achat\Enum\StatutAchat::PAID,
                'Remboursé' => \App\Achat\Enum\StatutAchat::REFUNDED,
                'Échoué' => \App\Achat\Enum\StatutAchat::FAILED,
            ]);
        yield DateTimeField::new('createdAt', 'Créé le')->hideOnForm();
        yield DateTimeField::new('paidAt', 'Payé le')->hideOnForm();
    }
}
