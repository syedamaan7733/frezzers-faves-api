import { User } from '../../Models/user.model';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/create-user.dto';
import { LogInDto } from './dto/login.dto';
import { TokenLogService } from 'src/Models/token.models';
export declare class AuthService {
    private userModel;
    private jwtService;
    private tokenLogService;
    constructor(userModel: Model<User>, jwtService: JwtService, tokenLogService: TokenLogService);
    register(createUserDto: CreateUserDto): Promise<{
        id: unknown;
        name: string;
        phoneNumber: string;
        role: import("../../Models/user.model").UserRole;
        access_token: string;
    }>;
    login(logInDto: LogInDto): Promise<{
        id: unknown;
        name: string;
        phoneNumber: string;
        role: import("../../Models/user.model").UserRole;
        access_token: string;
    }>;
}
