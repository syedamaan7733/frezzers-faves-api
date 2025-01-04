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
exports.BrandController = void 0;
const common_1 = require("@nestjs/common");
const brand_service_1 = require("./brand.service");
const clounidary_service_1 = require("../../common/clounidary/clounidary.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const exceptions_handler_1 = require("@nestjs/core/exceptions/exceptions-handler");
const roles_decorators_1 = require("../../common/decorators/roles.decorators");
const user_model_1 = require("../../Models/user.model");
let BrandController = class BrandController {
    constructor(brandService, cloudinaryService) {
        this.brandService = brandService;
        this.cloudinaryService = cloudinaryService;
    }
    async getAllBrand() {
        return this.brandService.getAllBrand();
    }
    async createBrand(name, file) {
        try {
            const uploadImage = await this.cloudinaryService.uploadImage(file, 'BRANDS');
            return this.brandService.createBrand(name, uploadImage.url);
        }
        catch (error) {
            throw new exceptions_handler_1.ExceptionsHandler(error.message);
        }
    }
    async updateBrand(id, name, file) {
        let imageURL = null;
        if (file) {
            const uploadImage = await this.cloudinaryService.uploadImage(file, 'BRANDS');
            imageURL = uploadImage.url;
        }
        return this.brandService.updateBrand(id, name, imageURL);
    }
};
exports.BrandController = BrandController;
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "getAllBrand", null);
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
], BrandController.prototype, "createBrand", null);
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
], BrandController.prototype, "updateBrand", null);
exports.BrandController = BrandController = __decorate([
    (0, common_1.Controller)('products/brand'),
    __metadata("design:paramtypes", [brand_service_1.BrandService,
        clounidary_service_1.ClounidaryService])
], BrandController);
//# sourceMappingURL=brand.controller.js.map