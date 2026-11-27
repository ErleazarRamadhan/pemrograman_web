import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/jwt.guard';
import { ProdukService } from './produk.service';
import { CreateProdukDto } from './dto/create-produk.dto';
import { UpdateProdukDto } from './dto/update-produk.dto';

@Controller('produk')
export class ProdukController {
  constructor(private readonly produkService: ProdukService) {}

  @Post()
  @UseGuards(JwtGuard)
  create(@Body() dto: CreateProdukDto) {
    return this.produkService.create(dto);
  }

  @Get()
  findAll() {
    return this.produkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.produkService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtGuard)
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateProdukDto) {
    return this.produkService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.produkService.remove(id);
  }
}
