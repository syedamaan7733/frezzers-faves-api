import { BrandService } from './brand.service';
import { ClounidaryService } from 'src/common/clounidary/clounidary.service';
export declare class BrandController {
    private readonly brandService;
    private readonly cloudinaryService;
    constructor(brandService: BrandService, cloudinaryService: ClounidaryService);
    getAllBrand(): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../Models/brand.model").Brand> & import("../../Models/brand.model").Brand & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, import("../../Models/brand.model").Brand> & import("../../Models/brand.model").Brand & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    createBrand(name: string, file: Express.Multer.File): Promise<import("../../Models/brand.model").Brand>;
    updateBrand(id: string, name: string, file: Express.Multer.File): Promise<import("../../Models/brand.model").Brand>;
}
