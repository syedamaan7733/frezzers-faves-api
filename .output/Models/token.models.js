"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenLogService = exports.TokenLogSchma = exports.TokenLog = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TokenLog = class TokenLog extends mongoose_2.Document {
};
exports.TokenLog = TokenLog;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], TokenLog.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], TokenLog.prototype, "token", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], TokenLog.prototype, "isLoggedOut", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], TokenLog.prototype, "loggedOutAt", void 0);
exports.TokenLog = TokenLog = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, expires: '1h' })
], TokenLog);
exports.TokenLogSchma = mongoose_1.SchemaFactory.createForClass(TokenLog);
let TokenLogService = class TokenLogService {
    constructor(tokenLogModel) {
        this.tokenLogModel = tokenLogModel;
    }
    async logTokenCreation(userId, token) {
        const tokenLog = new this.tokenLogModel({
            userId,
            token,
            isLoggedOut: false,
        });
        return await tokenLog.save();
    }
    async markTokenAsLoggedOut(token) {
        await this.tokenLogModel.findOneAndUpdate({ token, isLoggedOut: false }, { isLoggedOut: true, loggedOutAt: new Date() });
    }
    async isTokenvalid(token) {
        const tokenLog = await this.tokenLogModel.findOne({ token });
        if (!tokenLog || tokenLog.isLoggedOut)
            return false;
        return true;
    }
};
exports.TokenLogService = TokenLogService;
exports.TokenLogService = TokenLogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(TokenLog.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TokenLogService);
//# sourceMappingURL=token.models.js.map