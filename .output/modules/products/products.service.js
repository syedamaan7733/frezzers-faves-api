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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const brand_model_1 = require("../../Models/brand.model");
const product_model_1 = require("../../Models/product.model");
let ProductsService = class ProductsService {
    constructor(productModel, brandModel) {
        this.productModel = productModel;
        this.brandModel = brandModel;
    }
    async createProduct(createProdcutDto) {
        try {
            const isBrandAvailable = await this.brandModel.findById(createProdcutDto.brand);
            if (!isBrandAvailable) {
                throw new common_1.HttpException('Brand does not exist', common_1.HttpStatus.BAD_REQUEST);
            }
            const newProdcut = new this.productModel(createProdcutDto);
            await newProdcut.save();
            return newProdcut;
        }
        catch (error) {
            throw new common_1.BadRequestException(`Something went wrong while uploading product, ${{ error: error.message }}`);
        }
    }
    async getAllProduct() {
        try {
            const products = await this.productModel
                .find()
                .populate('brand', 'brandName')
                .exec();
            return products;
        }
        catch (error) {
            throw new common_1.BadRequestException(`Something went wrong while fetching products, ${{ error: error.message }}`);
        }
    }
    async getOneProduct(id) {
        try {
            const product = await this.productModel
                .findById(id)
                .populate('brand', 'brandName')
                .exec();
            if (!product)
                throw new common_1.NotFoundException(`No product found with id: ${id}`);
            return product;
        }
        catch (error) {
            throw new common_1.BadRequestException(`Some this wrong while fetching product detail, ${{ error: error.message }}`);
        }
    }
    async updateProduct(id, updateProductDTO) {
        try {
            const updatedProduct = await this.productModel.findOneAndUpdate({ _id: id }, { $set: updateProductDTO }, { new: true, runValidators: true, omitUndefined: true });
            return updatedProduct;
        }
        catch (error) {
            if (error.name === 'CastError') {
                throw new common_1.HttpException('Invalid user Id ', common_1.HttpStatus.BAD_REQUEST);
            }
            throw new common_1.HttpException(`Error updating user: ${error.message}`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getDistictCategory() {
        const distinctCategory = await this.productModel.distinct('category');
        console.log(distinctCategory);
        return;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_model_1.Product.name)),
    __param(1, (0, mongoose_1.InjectModel)(brand_model_1.Brand.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], ProductsService);
//# sourceMappingURL=products.service.js.map