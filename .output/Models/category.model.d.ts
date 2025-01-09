import { HydratedDocument } from 'mongoose';
export type CategoryDocument = HydratedDocument<Category>;
export declare class Category {
    name: string;
    img: string;
}
export declare const CategorySchema: import("mongoose").Schema<Category, import("mongoose").Model<Category, any, any, any, import("mongoose").Document<unknown, any, Category> & Category & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Category, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Category>> & import("mongoose").FlatRecord<Category> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
