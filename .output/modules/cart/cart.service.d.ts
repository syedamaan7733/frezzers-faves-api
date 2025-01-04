import { Model } from 'mongoose';
import { Cart } from 'src/Models/cart.model';
import { Product } from 'src/Models/product.model';
export declare class CartService {
    private readonly cartModel;
    private readonly productModel;
    constructor(cartModel: Model<Cart>, productModel: Model<Product>);
    addTOCart: (userId: string, productId: string, quantity: number) => Promise<Omit<import("mongoose").Document<unknown, {}, Cart> & Cart & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, never>>;
    getCart: (userid: string) => Promise<Cart>;
    deleteItemFromCart: (userId: string, productId: string) => Promise<Omit<import("mongoose").Document<unknown, {}, Cart> & Cart & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, never>>;
    deleteAllItemsFromCart: (userId: string) => Promise<Omit<import("mongoose").Document<unknown, {}, Cart> & Cart & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, never>>;
}
