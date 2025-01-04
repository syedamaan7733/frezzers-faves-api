import { UserRole } from '../../../Models/user.model';
export declare class CreateUserDto {
    name: string;
    phoneNumber: string;
    password: string;
    role?: UserRole;
}
