import { Model } from 'mongoose';
import { Brand, BrandDocument } from 'src/Models/brand.model';
export declare class BrandService {
    private brandModel;
    constructor(brandModel: Model<BrandDocument>);
    getAllBrand(): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Brand> & Brand & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & import("mongoose").Document<unknown, {}, Brand> & Brand & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    createBrand(brandName: string, imgURL: string): Promise<Brand>;
    updateBrand(id: string, name: string, imageURL: string | null): Promise<Brand>;
}
