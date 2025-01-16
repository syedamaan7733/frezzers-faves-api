import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from 'src/Models/product.model';
import { Brand, BrandSchema } from 'src/Models/brand.model';
import { ClounidaryModule } from 'src/common/clounidary/clounidary.module';
import { Category, CategorySchema } from 'src/Models/category.model';

@Module({
  imports: [
    ClounidaryModule,
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: Brand.name, schema: BrandSchema },
      {name: Category.name, schema: CategorySchema}
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
