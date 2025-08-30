import { Module } from '@nestjs/common';
import { S3Module } from 'src/adapter/s3/s3.module';
import { StorageService } from './storage.service';

@Module({
  imports: [S3Module],
  providers: [StorageService], // TODO: add resolver
})
export class StorageModule {}
