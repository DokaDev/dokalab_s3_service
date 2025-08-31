import { Module } from '@nestjs/common';
import { BucketService } from './bucket.service';
import { BucketResolver } from './bucket.resolver';
import { PrismaModule } from 'src/adapter/prisma/prisma.module';
import { S3Module } from 'src/adapter/s3/s3.module';

@Module({
  imports: [PrismaModule, S3Module],
  providers: [BucketService, BucketResolver],
})
export class BucketModule {}
