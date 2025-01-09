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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_model_1 = require("../../Models/user.model");
const mongoose_2 = require("mongoose");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const token_models_1 = require("../../Models/token.models");
let AuthService = class AuthService {
    constructor(userModel, jwtService, tokenLogService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
        this.tokenLogService = tokenLogService;
    }
    async register(createUserDto) {
        const { phoneNumber, password } = createUserDto;
        const exisitingUser = await this.userModel.findOne({ phoneNumber });
        if (exisitingUser)
            throw new common_1.ConflictException('User already exists');
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new this.userModel({
            ...createUserDto,
            password: hashedPassword,
        });
        await newUser.save();
        const payload = {
            sub: newUser._id,
            phoneNumber: newUser.phoneNumber,
            role: newUser.role,
        };
        const access_token = this.jwtService.sign(payload);
        await this.tokenLogService.logTokenCreation(newUser._id.toString(), access_token);
        return {
            id: newUser._id,
            name: newUser.name,
            phoneNumber: newUser.phoneNumber,
            role: newUser.role,
            access_token: access_token,
        };
    }
    async login(logInDto) {
        const { phoneNumber, password } = logInDto;
        const user = await this.userModel.findOne({ phoneNumber });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid Credantials: No user with this phone number.');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new common_1.UnauthorizedException('Invalid Credentails');
        }
        const payload = {
            sub: user._id,
            phoneNumber: user.phoneNumber,
            role: user.role,
        };
        const access_token = this.jwtService.sign(payload);
        await this.tokenLogService.logTokenCreation(user._id.toString(), access_token);
        return {
            id: user._id,
            name: user.name,
            phoneNumber: user.phoneNumber,
            role: user.role,
            access_token: access_token,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_model_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService,
        token_models_1.TokenLogService])
], AuthService);
//# sourceMappingURL=auth.service.js.map