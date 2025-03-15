import { Strategy } from 'passport-jwt';
import { User } from '../../Models/user.model';
import { Model } from 'mongoose';
import { Request } from 'express';
import { TokenLogService } from '../../Models/token.models';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userModel;
    private tokenLogService;
    constructor(userModel: Model<User>, tokenLogService: TokenLogService);
    private static extractJwtFromCookie;
    validate(req: Request, payload: {
        sub: string;
        phoneNumber: string;
        role: string;
    }): Promise<{
        userId: string;
        name: string;
        phoneNumber: string;
        role: string;
    }>;
}
export {};
