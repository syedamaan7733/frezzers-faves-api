import { CategoryService } from './category.service';
import { ClounidaryService } from 'src/common/clounidary/clounidary.service';
export declare class CategoryController {
    private readonly categoryService;
    private readonly cloudinaryService;
    constructor(categoryService: CategoryService, cloudinaryService: ClounidaryService);
    getAllCategories(): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../Models/category.model").Category> & import("../../Models/category.model").Category & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("../../Models/category.model").Category> & import("../../Models/category.model").Category & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    createCategory(name: string, file: Express.Multer.File): Promise<import("../../Models/category.model").Category>;
    updateCategory(id: string, name: string, file: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../Models/category.model").Category> & import("../../Models/category.model").Category & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("../../Models/category.model").Category> & import("../../Models/category.model").Category & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
