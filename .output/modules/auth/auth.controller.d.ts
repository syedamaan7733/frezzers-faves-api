import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LogInDto } from './dto/login.dto';
import { Response } from 'express';
import { TokenLogService } from 'src/Models/token.models';
export declare class AuthController {
    private authService;
    private tokenLogService;
    constructor(authService: AuthService, tokenLogService: TokenLogService);
    private setCookie;
    register(createUserDto: CreateUserDto, response: Response): Promise<{
        id: unknown;
        name: string;
        phoneNumber: string;
        role: import("../../Models/user.model").UserRole;
    }>;
    login(loginDto: LogInDto, response: Response): Promise<{
        id: unknown;
        name: string;
        phoneNumber: string;
        role: import("../../Models/user.model").UserRole;
    }>;
    logOut(req: any, response: Response): Promise<{
        message: string;
    }>;
    getProfile(req: any): any;
    checkAuth(req: any): Promise<{
        isAuthenticated: boolean;
        user: {
            userId: any;
            name: any;
            phoneNumber: any;
            role: any;
        };
    }>;
}
