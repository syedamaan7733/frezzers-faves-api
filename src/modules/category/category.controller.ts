import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorators';
import { UserRole } from 'src/Models/user.model';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { ClounidaryService } from 'src/common/clounidary/clounidary.service';

@Controller('products/category')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly cloudinaryService: ClounidaryService,
  ) {}

  @Get('/')
  async getAllCategories() {
    return await this.categoryService.getAllCategories();
  }

  @Post('/')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @UseInterceptors(
    FileInterceptor('image', {
      storage: memoryStorage(),
    }),
  )
  async createCategory(
    @Body('name') name: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!name || !file) {
      throw new BadRequestException(
        'Invalid request! Must provide name and image',
      );
    }

    const uploadImage = await this.cloudinaryService.uploadImage(
      file,
      'CATEGORIES',
    );
    return this.categoryService.createCategory(name, uploadImage.url);
  }

  @Patch('/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @UseInterceptors(
    FileInterceptor('image', {
      storage: memoryStorage(),
    }),
  )
  async updateCategory(
    @Param('id') id: string,
    @Body('name') name: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    let imageURL: string | null = null;

    // Check if a new image file is uploaded
    if (!id) {
      throw new BadRequestException(
        'Invalid request! Must provide both category ID.',
      );
    }

    if (!file && !name) {
      throw new BadRequestException(
        'Invalid request! Must provide either name or image',
      );
    }

    if (file) {
      const uploadImage = await this.cloudinaryService.uploadImage(
        file,
        'CATEGORIES',
      );
      imageURL = uploadImage.url;
    }
    console.log(id, name);

    return this.categoryService.updateCategory(id, name, imageURL);
  }
}
