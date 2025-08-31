import { Module } from '@nestjs/common';
import { ObjectResolver } from './object.resolver';
import { ObjectService } from './object.service';
import { PrismaModule } from 'src/adapter/prisma/prisma.module';
import { S3Module } from 'src/adapter/s3/s3.module';

@Module({
  imports: [PrismaModule, S3Module],
  providers: [ObjectService, ObjectResolver],
})
export class ObjectModule {}
