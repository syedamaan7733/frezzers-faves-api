import { ProductsService } from './products.service';
import { ClounidaryService } from 'src/common/clounidary/clounidary.service';
export declare class ProductsController {
    private readonly productService;
    private readonly cloundinaryService;
    constructor(productService: ProductsService, cloundinaryService: ClounidaryService);
    createProduct(body: any, file: Express.Multer.File): Promise<import("../../Models/product.model").Product>;
    getAllProducts(page?: number, limit?: number): Promise<{
        products: (import("mongoose").Document<unknown, {}, import("../../Models/product.model").Product> & import("../../Models/product.model").Product & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
        totalProducts: number;
        currentPage: number;
        totalPages: number;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
    }>;
    getDistinctCategory(): Promise<import("../../Models/product.model").Product>;
    getOneProduct(id: string): Promise<import("../../Models/product.model").Product>;
    updateProduct(id: string, body: any, file: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, import("../../Models/product.model").Product> & import("../../Models/product.model").Product & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
