import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/adapter/prisma/prisma.service';
import { S3Service } from 'src/adapter/s3/s3.service';
import { plainToInstance } from 'class-transformer';
import { BucketDto } from './dto/bucket.dto';

@Injectable()
export class BucketService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly s3Service: S3Service,
  ) {}

  async findAll(): Promise<BucketDto[]> {
    const buckets = await this.prisma.bucket.findMany({
      where: {
        deletedAt: null,
      },
    });

    return plainToInstance(BucketDto, buckets);
  }

  async findById(id: number): Promise<BucketDto | null> {
    const bucket = await this.prisma.bucket.findUnique({
      where: {
        id,
      },
    });

    return bucket ? plainToInstance(BucketDto, bucket) : null;
  }

  async create(name: string): Promise<BucketDto> {
    await this.s3Service.createBucket(name);

    const bucket = await this.prisma.bucket.create({
      data: {
        name,
      },
    });

    return plainToInstance(BucketDto, bucket);
  }

  async delete(id: number): Promise<BucketDto> {
    const bucket = await this.prisma.bucket.findUnique({
      where: {
        id,
      },
    });

    if (!bucket) {
      throw new Error('Bucket not found');
    }

    await this.s3Service.deleteBucket(bucket.name);
    await this.prisma.bucket.delete({
      where: {
        id,
      },
    });

    return plainToInstance(BucketDto, bucket);
  }
}
