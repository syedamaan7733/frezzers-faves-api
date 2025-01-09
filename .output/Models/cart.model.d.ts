import { Document, Types } from 'mongoose';
import { User } from './user.model';
interface CartItem {
    product: Types.ObjectId;
    quantity: number;
}
export declare class Cart extends Document {
    userId: User | Types.ObjectId;
    items: CartItem[];
    totalPrice: number;
    totalItems: number;
}
export declare const CartSchema: import("mongoose").Schema<Cart, import("mongoose").Model<Cart, any, any, any, Document<unknown, any, Cart> & Cart & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Cart, Document<unknown, {}, import("mongoose").FlatRecord<Cart>> & import("mongoose").FlatRecord<Cart> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export {};
