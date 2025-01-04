import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { error } from 'console';
import { Model } from 'mongoose';
import { NotFoundError } from 'rxjs';
import { Category, CategoryDocument } from 'src/Models/category.model';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
  ) {}

  async getAllCategories() {
    try {
      const categories = await this.categoryModel.find();
      if (!categories || categories.length < 1) {
        throw new BadRequestException(
          'No Category available. Please create all category',
        );
      }
      return categories;
    } catch (error) {
      throw new HttpException(
        `Something went wrong while fetching categories data. ${error},`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async createCategory(name: string, imgUrl: string): Promise<Category> {
    try {
      const isCategoryExist = await this.categoryModel.findOne({ name });
      let newCategory;
      if (!isCategoryExist) {
        newCategory = new this.categoryModel({ name, img: imgUrl });
      } else {
        throw new BadRequestException('Category alreadt exist.');
      }

      await newCategory.save();
      return newCategory;
    } catch (error) {
      throw new HttpException(
        ` ${error}
        Something went wrong while creating category`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updateCategory(id: string, name?: string, imageURL?: string) {
    const category = await this.categoryModel.findById(id);

    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found.`);
    }

    if (name) {
      category.name = name;
    }

    // Update the imageURL if a new one is provided
    if (imageURL) {
      category.img = imageURL;
    }

    return category.save();
  }
}
