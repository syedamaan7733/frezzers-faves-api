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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = exports.Product = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const brand_model_1 = require("./brand.model");
const category_model_1 = require("./category.model");
let Product = class Product extends mongoose_2.Document {
};
exports.Product = Product;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: 'Brand',
        required: true,
        autopopulate: true,
    }),
    __metadata("design:type", brand_model_1.Brand)
], Product.prototype, "brand", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: 'Category',
        required: true,
        autopopulate: true,
    }),
    __metadata("design:type", category_model_1.Category)
], Product.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], Product.prototype, "MRP", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true }),
    __metadata("design:type", String)
], Product.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Product.prototype, "isFavorite", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        message: 'Please provide the image',
    }),
    __metadata("design:type", String)
], Product.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: true }),
    __metadata("design:type", Boolean)
], Product.prototype, "inStock", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Product.prototype, "tags", void 0);
exports.Product = Product = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: {
            transform: (doc, ret) => {
                delete ret.__v;
                return ret;
            },
        },
    })
], Product);
exports.ProductSchema = mongoose_1.SchemaFactory.createForClass(Product);
exports.ProductSchema.plugin(require('mongoose-autopopulate'));
//# sourceMappingURL=product.model.js.map