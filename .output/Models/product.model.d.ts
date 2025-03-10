import { Document } from 'mongoose';
import { Brand } from './brand.model';
import { Category } from './category.model';
export declare class Product extends Document {
    name: string;
    brand: Brand;
    category: Category;
    MRP: string;
    price: string;
    isFavorite: boolean;
    image: string;
    inStock: boolean;
    tags: string[];
}
export declare const ProductSchema: import("mongoose").Schema<Product, import("mongoose").Model<Product, any, any, any, Document<unknown, any, Product> & Product & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Product, Document<unknown, {}, import("mongoose").FlatRecord<Product>> & import("mongoose").FlatRecord<Product> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
