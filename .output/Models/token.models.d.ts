import { Document, Model } from 'mongoose';
export declare class TokenLog extends Document {
    userId: string;
    token: string;
    isLoggedOut: boolean;
    loggedOutAt?: Date;
}
export declare const TokenLogSchma: import("mongoose").Schema<TokenLog, Model<TokenLog, any, any, any, Document<unknown, any, TokenLog> & TokenLog & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TokenLog, Document<unknown, {}, import("mongoose").FlatRecord<TokenLog>> & import("mongoose").FlatRecord<TokenLog> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export declare class TokenLogService {
    private tokenLogModel;
    constructor(tokenLogModel: Model<TokenLog>);
    logTokenCreation(userId: string, token: string): Promise<Document<unknown, {}, TokenLog> & TokenLog & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    markTokenAsLoggedOut(token: string): Promise<void>;
    isTokenvalid(token: string): Promise<boolean>;
}
