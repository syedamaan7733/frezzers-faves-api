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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const category_model_1 = require("../../Models/category.model");
let CategoryService = class CategoryService {
    constructor(categoryModel) {
        this.categoryModel = categoryModel;
    }
    async getAllCategories() {
        try {
            const categories = await this.categoryModel.find();
            if (!categories || categories.length < 1) {
                throw new common_1.BadRequestException('No Category available. Please create all category');
            }
            return categories;
        }
        catch (error) {
            throw new common_1.HttpException(`Something went wrong while fetching categories data. ${error},`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createCategory(name, imgUrl) {
        try {
            const isCategoryExist = await this.categoryModel.findOne({ name });
            let newCategory;
            if (!isCategoryExist) {
                newCategory = new this.categoryModel({ name, img: imgUrl });
            }
            else {
                throw new common_1.BadRequestException('Category alreadt exist.');
            }
            await newCategory.save();
            return newCategory;
        }
        catch (error) {
            throw new common_1.HttpException(` ${error}
        Something went wrong while creating category`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateCategory(id, name, imageURL) {
        const category = await this.categoryModel.findById(id);
        if (!category) {
            throw new common_1.NotFoundException(`Category with ID ${id} not found.`);
        }
        if (name) {
            category.name = name;
        }
        if (imageURL) {
            category.img = imageURL;
        }
        return category.save();
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(category_model_1.Category.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CategoryService);
//# sourceMappingURL=category.service.js.map