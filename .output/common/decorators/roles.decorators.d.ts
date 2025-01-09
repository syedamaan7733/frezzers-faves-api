import { UserRole } from '../../Models/user.model';
export declare const ROLES_KEYS = "roles";
export declare const Roles: (...roles: UserRole[]) => import("@nestjs/common").CustomDecorator<string>;
