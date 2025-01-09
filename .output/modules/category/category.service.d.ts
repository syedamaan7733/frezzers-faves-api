import { Model } from 'mongoose';
import { Category, CategoryDocument } from 'src/Models/category.model';
export declare class CategoryService {
    private readonly categoryModel;
    constructor(categoryModel: Model<CategoryDocument>);
    getAllCategories(): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Category> & Category & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Category> & Category & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    createCategory(name: string, imgUrl: string): Promise<Category>;
    updateCategory(id: string, name?: string, imageURL?: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Category> & Category & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Category> & Category & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
