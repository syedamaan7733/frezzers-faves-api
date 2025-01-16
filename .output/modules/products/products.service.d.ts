import { Model } from 'mongoose';
import { Brand } from 'src/Models/brand.model';
import { Product } from 'src/Models/product.model';
import { CreateProductDto } from './dto/create-product.dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto/update-product.dto';
import { Category } from 'src/Models/category.model';
export declare class ProductsService {
    private readonly productModel;
    private readonly brandModel;
    private readonly categoryModel;
    constructor(productModel: Model<Product>, brandModel: Model<Brand>, categoryModel: Model<Category>);
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    getAllProduct(): Promise<Product[]>;
    getOneProduct(id: string): Promise<Product>;
    updateProduct(id: string, updateProductDTO: UpdateProductDto): Promise<import("mongoose").Document<unknown, {}, Product> & Product & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getDistictCategory(): Promise<Product>;
}
