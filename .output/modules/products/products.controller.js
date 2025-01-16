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
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const create_product_dto_1 = require("./dto/create-product.dto/create-product.dto");
const clounidary_service_1 = require("../../common/clounidary/clounidary.service");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const roles_decorators_1 = require("../../common/decorators/roles.decorators");
const user_model_1 = require("../../Models/user.model");
const update_product_dto_1 = require("./dto/update-product.dto/update-product.dto");
let ProductsController = class ProductsController {
    constructor(productService, cloundinaryService) {
        this.productService = productService;
        this.cloundinaryService = cloundinaryService;
    }
    async createProduct(body, file) {
        try {
            if (body.tags || typeof body.tags === 'string') {
                body.tags = JSON.parse(body.tags);
            }
            if (!file) {
                throw new common_1.BadRequestException("Can't Upload Without photo");
            }
            const imgUpload = await this.cloundinaryService.uploadImage(file, 'PRODUCTS');
            body.image = imgUpload.secure_url;
            const createProductDTO = new create_product_dto_1.CreateProductDto();
            Object.assign(createProductDTO, body);
            const product = this.productService.createProduct(createProductDTO);
            return product;
        }
        catch (error) {
            throw new common_1.BadRequestException(`Invalid Format: ${error.message}`);
        }
    }
    async getAllProducts(page = 1, limit = 10) {
        const { products, totalProducts, totalPages } = await this.productService.getAllProduct(page, limit);
        return {
            products,
            totalProducts,
            currentPage: page,
            totalPages,
            hasNextPage: page < totalPages,
            hasPreviousPage: page > 1
        };
    }
    async getDistinctCategory() {
        return this.productService.getDistictCategory();
    }
    async getOneProduct(id) {
        return this.productService.getOneProduct(id);
    }
    async updateProduct(id, body, file) {
        if (body.tags) {
            body.tags = JSON.parse(body.tags);
        }
        if (file) {
            const uploadedImg = await this.cloundinaryService.uploadImage(file, 'PRODUCTS');
            body.image = uploadedImg.secure_url;
        }
        const updateProductDto = new update_product_dto_1.UpdateProductDto();
        Object.assign(updateProductDto, body);
        return this.productService.updateProduct(id, updateProductDto);
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorators_1.Roles)(user_model_1.UserRole.ADMIN),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', { storage: (0, multer_1.memoryStorage)() })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getAllProducts", null);
__decorate([
    (0, common_1.Get)('Distinctcategory'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getDistinctCategory", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getOneProduct", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorators_1.Roles)(user_model_1.UserRole.ADMIN),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', { storage: (0, multer_1.memoryStorage)() })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "updateProduct", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService,
        clounidary_service_1.ClounidaryService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map