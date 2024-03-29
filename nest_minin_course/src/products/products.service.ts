import { Product, ProductDocument } from './schemas/product.shema';
import { CreateProductDto } from './dto/create-product.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async getAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async getById(id: string): Promise<Product> {
    return this.productModel.findById(id);
  }

  async create(productDto: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(productDto);

    return newProduct.save();
  }

  async remove(id: string): Promise<Product> {
    return this.productModel.findByIdAndRemove(id);
  }

  // async update(id: string, productDto: UpdateProductDto): Promise<Product> {}
}
