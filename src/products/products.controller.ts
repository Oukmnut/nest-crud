import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    const data = await this.productsService.create(createProductDto);
    return {
      success: true,
      message: 'Product created successfully',
      data: data,
    };
  }


  @Get()
  async findAll() {
    const data = await this.productsService.findAll();
    return {
      success: true,
      message: 'Products fetched successfully',
      data,
    };
  }


  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.productsService.findOne(+id);
    return {
      success: true,
      message: 'Product fetched successfully',
      data,
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    const data = await this.productsService.update(+id, updateProductDto);
    return {
      success: true,
      message: 'Product updated successfully',
      data,
    };
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.productsService.remove(+id);
    return {
      success: true,
      message: 'Product deleted successfully',
    };
  }

}
