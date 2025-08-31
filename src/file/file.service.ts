import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/adapter/prisma/prisma.service';
import { S3Service } from 'src/adapter/s3/s3.service';
import { BucketService } from 'src/bucket/bucket.service.js';

@Injectable()
export class FileService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly s3Service: S3Service,
    private readonly bucketService: BucketService,
  ) {}
}
