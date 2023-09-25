import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product = await this.productRepository.findOneBy({
      title: createProductDto.title,
    });
    if (product)
      throw new NotFoundException(
        `Product ${createProductDto.title} already exists`,
      );
    return await this.productRepository.save(createProductDto);
  }

  async findAll() {
    // return await this.productRepository.find();
    return await this.productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.rate', 'rate')
      .getMany();
  }

  async findOne(id: number) {
    return await this.productRepository.findOneBy({ id: id });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    // check if the product id exists in the table
    const product = await this.productRepository.findOneBy({ id: id });
    if (!product) throw new NotFoundException(`Product #${id} not found`);

    // check if the product title deference this id already exists in the table
    const productTitle = await this.productRepository.findOneBy({
      title: updateProductDto.title,
    });
    if (productTitle && productTitle.id != id)
      throw new NotFoundException(
        `Product ${updateProductDto.title} already exists`,
      );

    await this.productRepository.update(id, updateProductDto);

    return await this.productRepository.findOneBy({ id: id });
  }

  async remove(id: number) {
    // check if the product id exists in the table
    const product = await this.productRepository.findOneBy({ id: id });
    if (!product) throw new NotFoundException(`Product #${id} not found`);
    await this.productRepository.delete(id);
    return true;
  }
}
