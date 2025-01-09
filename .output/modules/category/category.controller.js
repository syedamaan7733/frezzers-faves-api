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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const category_service_1 = require("./category.service");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const roles_decorators_1 = require("../../common/decorators/roles.decorators");
const user_model_1 = require("../../Models/user.model");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const clounidary_service_1 = require("../../common/clounidary/clounidary.service");
let CategoryController = class CategoryController {
    constructor(categoryService, cloudinaryService) {
        this.categoryService = categoryService;
        this.cloudinaryService = cloudinaryService;
    }
    async getAllCategories() {
        return await this.categoryService.getAllCategories();
    }
    async createCategory(name, file) {
        if (!name || !file) {
            throw new common_1.BadRequestException('Invalid request! Must provide name and image');
        }
        const uploadImage = await this.cloudinaryService.uploadImage(file, 'CATEGORIES');
        return this.categoryService.createCategory(name, uploadImage.url);
    }
    async updateCategory(id, name, file) {
        let imageURL = null;
        if (!id) {
            throw new common_1.BadRequestException('Invalid request! Must provide both category ID.');
        }
        if (!file && !name) {
            throw new common_1.BadRequestException('Invalid request! Must provide either name or image');
        }
        if (file) {
            const uploadImage = await this.cloudinaryService.uploadImage(file, 'CATEGORIES');
            imageURL = uploadImage.url;
        }
        return this.categoryService.updateCategory(id, name, imageURL);
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getAllCategories", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorators_1.Roles)(user_model_1.UserRole.ADMIN),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.memoryStorage)(),
    })),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "createCategory", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorators_1.Roles)(user_model_1.UserRole.ADMIN),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.memoryStorage)(),
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "updateCategory", null);
exports.CategoryController = CategoryController = __decorate([
    (0, common_1.Controller)('products/category'),
    __metadata("design:paramtypes", [category_service_1.CategoryService,
        clounidary_service_1.ClounidaryService])
], CategoryController);
//# sourceMappingURL=category.controller.js.map