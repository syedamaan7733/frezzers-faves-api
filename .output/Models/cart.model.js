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
exports.CartSchema = exports.Cart = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Cart = class Cart extends mongoose_2.Document {
};
exports.Cart = Cart;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: 'User',
        required: true,
    }),
    __metadata("design:type", Object)
], Cart.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)([
        {
            product: {
                type: mongoose_2.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                min: 1,
            },
            _id: false,
        },
    ]),
    __metadata("design:type", Array)
], Cart.prototype, "items", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        required: true,
        default: 0,
    }),
    __metadata("design:type", Number)
], Cart.prototype, "totalPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        required: true,
        default: 0,
    }),
    __metadata("design:type", Number)
], Cart.prototype, "totalItems", void 0);
exports.Cart = Cart = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: {
            transform: (doc, ret) => {
                delete ret.__v;
                return ret;
            },
        },
    })
], Cart);
exports.CartSchema = mongoose_1.SchemaFactory.createForClass(Cart);
exports.CartSchema.pre('save', async function (next) {
    const cart = this;
    cart.totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    try {
        await cart.populate('items.product');
        cart.totalPrice = cart.items.reduce((sum, item) => {
            const product = item.product;
            const price = parseFloat(product.price || product.MRP);
            return sum + price * item.quantity;
        }, 0);
    }
    catch (error) {
        next(error);
    }
    next();
});
//# sourceMappingURL=cart.model.js.map