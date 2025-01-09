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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_model_1 = require("../../Models/user.model");
const mongoose_2 = require("mongoose");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async getAllUsers() {
        try {
            const users = await this.userModel.find({}, { password: 0 });
            if (!users || users.length === 0) {
                throw new common_1.HttpException('No user found,', common_1.HttpStatus.NOT_FOUND);
            }
            return { data: users };
        }
        catch (error) {
            throw new common_1.HttpException(error.message || 'Failed to fetch users.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getUserById(id) {
        try {
            const user = await this.userModel.findById(id, { password: 0 });
            return user || null;
        }
        catch (error) {
            throw new common_1.HttpException(`Invalid user ID formal or error occurred: ${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateUser(id, updateUserDto) {
        try {
            const updatedUser = await this.userModel.findOneAndUpdate({ _id: id }, { $set: updateUserDto }, { new: true, runValidators: true, omitUndefined: true });
            return updatedUser;
        }
        catch (error) {
            if (error.name === 'CastError') {
                throw new common_1.HttpException('Invalid user Id ', common_1.HttpStatus.BAD_REQUEST);
            }
            throw new common_1.HttpException(`Error updating user: ${error.message}`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async showCurrentUser(userId) {
        try {
            const user = await this.userModel.findById(userId, { password: 0 });
            if (!user) {
                throw new common_1.HttpException('User Not Found', common_1.HttpStatus.NOT_FOUND);
            }
            return user;
        }
        catch (error) {
            throw new common_1.HttpException(error.message || 'Failed to fetch current user', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteUser() { }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_model_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
//# sourceMappingURL=users.service.js.map