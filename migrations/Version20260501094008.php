<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260501094008 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE achat (id BINARY(16) NOT NULL, montant_centimes INT NOT NULL, stripe_session_id VARCHAR(128) NOT NULL, statut VARCHAR(16) NOT NULL, created_at DATETIME NOT NULL, paid_at DATETIME DEFAULT NULL, acheteur_id BINARY(16) NOT NULL, cours_id BINARY(16) NOT NULL, UNIQUE INDEX UNIQ_26A984561A314A57 (stripe_session_id), INDEX IDX_26A9845696A7BB5F (acheteur_id), INDEX IDX_26A984567ECF78B0 (cours_id), INDEX idx_achat_stripe_session (stripe_session_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE certificat (id BINARY(16) NOT NULL, code VARCHAR(32) NOT NULL, generated_at DATETIME NOT NULL, pdf_path VARCHAR(255) DEFAULT NULL, eleve_id BINARY(16) NOT NULL, cours_id BINARY(16) NOT NULL, UNIQUE INDEX UNIQ_27448F7777153098 (code), INDEX IDX_27448F77A6CC7B2 (eleve_id), INDEX IDX_27448F777ECF78B0 (cours_id), UNIQUE INDEX uniq_certificat_eleve_cours (eleve_id, cours_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE cours (id BINARY(16) NOT NULL, titre VARCHAR(200) NOT NULL, slug VARCHAR(200) NOT NULL, description LONGTEXT NOT NULL, prix_centimes INT NOT NULL, is_published TINYINT DEFAULT 0 NOT NULL, ordre INT DEFAULT 0 NOT NULL, created_at DATETIME NOT NULL, UNIQUE INDEX UNIQ_FDCA8C9C989D9B62 (slug), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE lecon (id BINARY(16) NOT NULL, titre VARCHAR(200) NOT NULL, slug VARCHAR(200) NOT NULL, ordre INT DEFAULT 0 NOT NULL, vimeo_id VARCHAR(32) DEFAULT NULL, contenu LONGTEXT DEFAULT NULL, module_id BINARY(16) NOT NULL, INDEX IDX_94E6242EAFC2B591 (module_id), UNIQUE INDEX uniq_lecon_slug_par_module (module_id, slug), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE module (id BINARY(16) NOT NULL, titre VARCHAR(200) NOT NULL, description LONGTEXT DEFAULT NULL, ordre INT DEFAULT 0 NOT NULL, cours_id BINARY(16) NOT NULL, INDEX IDX_C2426287ECF78B0 (cours_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE progression (id BINARY(16) NOT NULL, statut VARCHAR(16) NOT NULL, last_viewed_at DATETIME DEFAULT NULL, completed_at DATETIME DEFAULT NULL, eleve_id BINARY(16) NOT NULL, lecon_id BINARY(16) NOT NULL, INDEX IDX_D5B25073A6CC7B2 (eleve_id), INDEX IDX_D5B25073EC1308A5 (lecon_id), UNIQUE INDEX uniq_progression_eleve_lecon (eleve_id, lecon_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE utilisateur (id BINARY(16) NOT NULL, email VARCHAR(180) NOT NULL, password VARCHAR(255) NOT NULL, roles JSON NOT NULL, is_verified TINYINT DEFAULT 0 NOT NULL, created_at DATETIME NOT NULL, UNIQUE INDEX UNIQ_1D1C63B3E7927C74 (email), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0FB7336F0E3BD61CE16BA31DBBF396750 (queue_name, available_at, delivered_at, id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('ALTER TABLE achat ADD CONSTRAINT FK_26A9845696A7BB5F FOREIGN KEY (acheteur_id) REFERENCES utilisateur (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE achat ADD CONSTRAINT FK_26A984567ECF78B0 FOREIGN KEY (cours_id) REFERENCES cours (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE certificat ADD CONSTRAINT FK_27448F77A6CC7B2 FOREIGN KEY (eleve_id) REFERENCES utilisateur (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE certificat ADD CONSTRAINT FK_27448F777ECF78B0 FOREIGN KEY (cours_id) REFERENCES cours (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE lecon ADD CONSTRAINT FK_94E6242EAFC2B591 FOREIGN KEY (module_id) REFERENCES module (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE module ADD CONSTRAINT FK_C2426287ECF78B0 FOREIGN KEY (cours_id) REFERENCES cours (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE progression ADD CONSTRAINT FK_D5B25073A6CC7B2 FOREIGN KEY (eleve_id) REFERENCES utilisateur (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE progression ADD CONSTRAINT FK_D5B25073EC1308A5 FOREIGN KEY (lecon_id) REFERENCES lecon (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE achat DROP FOREIGN KEY FK_26A9845696A7BB5F');
        $this->addSql('ALTER TABLE achat DROP FOREIGN KEY FK_26A984567ECF78B0');
        $this->addSql('ALTER TABLE certificat DROP FOREIGN KEY FK_27448F77A6CC7B2');
        $this->addSql('ALTER TABLE certificat DROP FOREIGN KEY FK_27448F777ECF78B0');
        $this->addSql('ALTER TABLE lecon DROP FOREIGN KEY FK_94E6242EAFC2B591');
        $this->addSql('ALTER TABLE module DROP FOREIGN KEY FK_C2426287ECF78B0');
        $this->addSql('ALTER TABLE progression DROP FOREIGN KEY FK_D5B25073A6CC7B2');
        $this->addSql('ALTER TABLE progression DROP FOREIGN KEY FK_D5B25073EC1308A5');
        $this->addSql('DROP TABLE achat');
        $this->addSql('DROP TABLE certificat');
        $this->addSql('DROP TABLE cours');
        $this->addSql('DROP TABLE lecon');
        $this->addSql('DROP TABLE module');
        $this->addSql('DROP TABLE progression');
        $this->addSql('DROP TABLE utilisateur');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
