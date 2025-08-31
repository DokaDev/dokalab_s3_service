import { Module } from '@nestjs/common';
import { FileResolver } from './file.resolver';
import { FileService } from './file.service';
import { PrismaModule } from 'src/adapter/prisma/prisma.module';
import { S3Module } from 'src/adapter/s3/s3.module';
import { BucketModule } from 'src/bucket/bucket.module';

@Module({
  imports: [PrismaModule, S3Module, BucketModule],
  providers: [FileService, FileResolver],
})
export class FileModule {}
