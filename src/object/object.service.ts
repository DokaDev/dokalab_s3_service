import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/adapter/prisma/prisma.service';

@Injectable()
export class ObjectService {
  constructor(private readonly prisma: PrismaService) {}
}
