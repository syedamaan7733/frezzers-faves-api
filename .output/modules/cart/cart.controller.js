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
exports.CartController = exports.AddToCartDto = void 0;
const common_1 = require("@nestjs/common");
const cart_service_1 = require("./cart.service");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const rxjs_1 = require("rxjs");
const class_validator_1 = require("class-validator");
class AddToCartDto {
}
exports.AddToCartDto = AddToCartDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddToCartDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], AddToCartDto.prototype, "quantity", void 0);
let CartController = class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    async addTOCart(req, addToCartDTO) {
        try {
            if (!addToCartDTO.productId || !addToCartDTO.quantity) {
                throw new common_1.BadRequestException('Product ID and quantity are required');
            }
            const userId = req.user.userId;
            console.log(req.user);
            const cart = await this.cartService.addTOCart(userId, addToCartDTO.productId, addToCartDTO.quantity);
            return {
                success: true,
                message: 'Item added to cart successfully',
                data: "cart",
            };
        }
        catch (error) {
            if (error instanceof rxjs_1.NotFoundError) {
                throw error;
            }
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.BadRequestException('Could not add item to cart' + ' : ' + error.message);
        }
    }
    async getCart(req) {
        try {
            const userId = req.user.userId;
            const cart = await this.cartService.getCart(userId);
            return {
                success: true,
                message: 'Cart items fetched successfully',
                data: cart,
            };
        }
        catch (error) {
            throw new common_1.BadRequestException('Could not get cart items' + ' : ' + error.message);
        }
    }
    async deleteItemFromCart(req, productId) {
        try {
            const { id } = productId;
            if (!id) {
                throw new common_1.BadRequestException('Product ID is required');
            }
            const userId = req.user.userId;
            const cart = await this.cartService.deleteItemFromCart(userId, id);
            return {
                success: true,
                message: 'Item deleted from cart successfully',
                data: cart,
            };
        }
        catch (error) {
            throw new common_1.BadRequestException('Could not delete item from cart' + ' : ' + error.message);
        }
    }
    async deleteAllItemsFromCart(req) {
        try {
            const userId = req.user.userId;
            const cart = await this.cartService.deleteAllItemsFromCart(userId);
            return {
                success: true,
                message: 'All items deleted from cart successfully',
                data: cart,
            };
        }
        catch (error) {
            throw new common_1.BadRequestException('Could not delete all items from cart' + ' : ' + error.message);
        }
    }
};
exports.CartController = CartController;
__decorate([
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, AddToCartDto]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "addTOCart", null);
__decorate([
    (0, common_1.Get)('get'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "getCart", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "deleteItemFromCart", null);
__decorate([
    (0, common_1.Delete)('clearAll'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "deleteAllItemsFromCart", null);
exports.CartController = CartController = __decorate([
    (0, common_1.Controller)('cart'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
//# sourceMappingURL=cart.controller.js.map