import { UsersService } from './users.service';
import { User } from '../../Models/user.model';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getAllUsers(): Promise<{
        data: (import("mongoose").Document<unknown, {}, User> & User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
    }>;
    getCurrentUser(req: any): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getByID(id: string): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
