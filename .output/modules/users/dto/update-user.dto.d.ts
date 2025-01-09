import { UserRole } from 'src/Models/user.model';
export declare class UpdateUserDto {
    name?: string;
    phoneNumber?: string;
    role?: UserRole;
    isActive?: boolean;
}
