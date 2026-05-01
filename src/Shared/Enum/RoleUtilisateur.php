<?php

declare(strict_types=1);

namespace App\Shared\Enum;

/**
 * Rôles applicatifs Symfony Security.
 *
 * On garde le préfixe ROLE_ exigé par Symfony Security dans les valeurs string,
 * pour pouvoir injecter directement le résultat de `value` dans `roles[]` de l'entité User.
 */
enum RoleUtilisateur: string
{
    case USER = 'ROLE_USER';
    case ADMIN = 'ROLE_ADMIN';
}
