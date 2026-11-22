import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { ProdukService } from './produk.service';

describe('ProdukService', () => {
  let service: ProdukService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdukService, { provide: PrismaService, useValue: {} }],
    }).compile();

    service = module.get<ProdukService>(ProdukService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
