import { User } from '../../Models/user.model';
import { Model } from 'mongoose';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    getAllUsers(): Promise<{
        data: (import("mongoose").Document<unknown, {}, User> & User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
    }>;
    getUserById(id: string): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    showCurrentUser(userId: string): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    deleteUser(): Promise<void>;
}
