"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
const common_1 = require("@nestjs/common");
const products_controller_1 = require("./products.controller");
const products_service_1 = require("./products.service");
const mongoose_1 = require("@nestjs/mongoose");
const product_model_1 = require("../../Models/product.model");
const brand_model_1 = require("../../Models/brand.model");
const clounidary_module_1 = require("../../common/clounidary/clounidary.module");
const category_model_1 = require("../../Models/category.model");
let ProductsModule = class ProductsModule {
};
exports.ProductsModule = ProductsModule;
exports.ProductsModule = ProductsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            clounidary_module_1.ClounidaryModule,
            mongoose_1.MongooseModule.forFeature([
                { name: product_model_1.Product.name, schema: product_model_1.ProductSchema },
                { name: brand_model_1.Brand.name, schema: brand_model_1.BrandSchema },
                { name: category_model_1.Category.name, schema: category_model_1.CategorySchema }
            ]),
        ],
        controllers: [products_controller_1.ProductsController],
        providers: [products_service_1.ProductsService],
    })
], ProductsModule);
//# sourceMappingURL=products.module.js.map