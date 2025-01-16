import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotFoundError } from 'rxjs';
import { Brand } from 'src/Models/brand.model';
import { Product } from 'src/Models/product.model';
import { CreateBrandDto } from '../brand/dto/create-brand.dto/create-brand.dto';
import { CreateProductDto } from './dto/create-product.dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto/update-product.dto';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { Category } from 'src/Models/category.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
    @InjectModel(Brand.name) private readonly brandModel: Model<Brand>,
    @InjectModel(Category.name) private readonly categoryModel: Model<Category>,
  ) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    try {
      const [brand, category] = await Promise.all([
        this.brandModel.findById(createProductDto.brand),
        this.categoryModel.findById(createProductDto.category),
      ]);

      if (!brand) {
        throw new HttpException('Brand does not exist', HttpStatus.BAD_REQUEST);
      }

      if (!category) {
        throw new HttpException(
          'Category does not exist',
          HttpStatus.BAD_REQUEST,
        );
      }

      const newProduct = new this.productModel(createProductDto);
      await newProduct.save();

      return newProduct;
    } catch (error) {
      throw new BadRequestException(
        `Something went wrong while uploading product: ${error.message}`,
      );
    }
  }

  async getAllProduct(page: number = 1, limit: number = 10) {
    try {
      const skip = (page - 1) * limit;

      const [products, totalProducts] = await Promise.all([
        this.productModel
          .find()
          .sort({ createdAt: -1 }) // Sort by newest first
          .skip(skip)
          .limit(limit)
          .exec(),
        this.productModel.countDocuments(),
      ]);

      const totalPages = Math.ceil(totalProducts / limit);

      return {
        products,
        totalProducts,
        totalPages,
      };
    } catch (error) {
      throw new BadRequestException(
        `Something went wrong while fetching products: ${error.message}`,
      );
    }
  }

  async getOneProduct(id: string): Promise<Product> {
    try {
      const product = await this.productModel.findById(id).exec();

      if (!product) {
        throw new NotFoundException(`No product found with id: ${id}`);
      }

      return product;
    } catch (error) {
      throw new BadRequestException(
        `Something went wrong while fetching product detail: ${error.message}`,
      );
    }
  }

  async updateProduct(id: string, updateProductDTO: UpdateProductDto) {
    try {
      const updatedProduct = await this.productModel.findOneAndUpdate(
        { _id: id },
        { $set: updateProductDTO },
        { new: true, runValidators: true, omitUndefined: true },
      );
      return updatedProduct;
    } catch (error) {
      if (error.name === 'CastError') {
        throw new HttpException('Invalid user Id ', HttpStatus.BAD_REQUEST);
      }
      throw new HttpException(
        `Error updating user: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getDistictCategory(): Promise<Product> {
    const distinctCategory = await this.productModel.distinct('category');
    console.log(distinctCategory);
    return;
  }
}