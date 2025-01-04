import { CartService } from './cart.service';
export declare class AddToCartDto {
    productId: string;
    quantity: number;
}
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    addTOCart(req: any, addToCartDTO: AddToCartDto): Promise<{
        success: boolean;
        message: string;
        data: Omit<import("mongoose").Document<unknown, {}, import("../../Models/cart.model").Cart> & import("../../Models/cart.model").Cart & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }, never>;
    }>;
    getCart(req: any): Promise<{
        success: boolean;
        message: string;
        data: import("../../Models/cart.model").Cart;
    }>;
    deleteItemFromCart(req: any, productId: any): Promise<{
        success: boolean;
        message: string;
        data: Omit<import("mongoose").Document<unknown, {}, import("../../Models/cart.model").Cart> & import("../../Models/cart.model").Cart & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }, never>;
    }>;
    deleteAllItemsFromCart(req: any): Promise<{
        success: boolean;
        message: string;
        data: Omit<import("mongoose").Document<unknown, {}, import("../../Models/cart.model").Cart> & import("../../Models/cart.model").Cart & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }, never>;
    }>;
}
