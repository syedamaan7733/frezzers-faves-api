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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const cart_model_1 = require("../../Models/cart.model");
const product_model_1 = require("../../Models/product.model");
let CartService = class CartService {
    constructor(cartModel, productModel) {
        this.cartModel = cartModel;
        this.productModel = productModel;
        this.addTOCart = async (userId, productId, quantity) => {
            const productObjectId = new mongoose_2.Types.ObjectId(productId);
            const product = await this.productModel.findById(productId);
            if (!product) {
                throw new common_1.NotFoundException('Product not found');
            }
            let cart = await this.cartModel.findOne({ userId });
            if (!cart) {
                cart = new this.cartModel({
                    userId: userId,
                    items: [],
                    totalPrice: 0,
                    totalItems: 0,
                });
            }
            const existingItemIndex = cart.items.findIndex((item) => item.product.toString() === productId);
            if (existingItemIndex > -1) {
                cart.items[existingItemIndex].quantity += quantity;
            }
            else {
                cart.items.push({ product: productObjectId, quantity });
            }
            await cart.populate('items.product');
            const saveCart = await cart.save();
            return (await saveCart.populate('items.product')).populate('userId');
        };
        this.getCart = async (userid) => {
            const cart = await this.cartModel
                .findOne({ userId: userid })
                .populate('userId', 'name')
                .populate('items.product');
            if (!cart) {
                throw new common_1.NotFoundException('No cart found for this user, add items to cart');
            }
            cart.items.sort((a, b) => a.createdAt - b.createdAt);
            return cart;
        };
        this.deleteItemFromCart = async (userId, productId) => {
            const cart = await this.cartModel.findOne({ userId });
            if (!cart) {
                throw new common_1.NotFoundException('Cart not found');
            }
            const existingItemIndex = cart.items.findIndex((item) => item.product.toString() === productId);
            if (existingItemIndex > -1) {
                cart.items.splice(existingItemIndex, 1);
            }
            else {
                throw new common_1.NotFoundException('Item not found in cart');
            }
            await cart.populate('items.product');
            const saveCart = await cart.save();
            return (await saveCart.populate('items.product')).populate('userId');
        };
        this.deleteAllItemsFromCart = async (userId) => {
            const cart = await this.cartModel.findOne({ userId });
            if (!cart) {
                throw new common_1.NotFoundException('Cart not found');
            }
            cart.items = [];
            await cart.populate('items.product');
            const saveCart = await cart.save();
            return (await saveCart.populate('items.product')).populate('userId');
        };
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(cart_model_1.Cart.name)),
    __param(1, (0, mongoose_1.InjectModel)(product_model_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], CartService);
//# sourceMappingURL=cart.service.js.map