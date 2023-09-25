import { Controller, Get, Post, Body, Patch, Param, Delete, Req, NotAcceptableException } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Req() req:any, @Body() createProductDto: CreateProductDto) {
    if(req.role != 'admin') throw new NotAcceptableException('You are not allowed to do this action');
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Req() req:any, @Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    if(req.role != 'admin') throw new NotAcceptableException('You are not allowed to do this action');
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Req() req:any, @Param('id') id: string) {
    if(req.role != 'admin') throw new NotAcceptableException('You are not allowed to do this action');
    return this.productService.remove(+id);
  }
}
