import {
  CreateBucketCommand,
  DeleteBucketCommand,
  S3,
} from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';

@Injectable()
export class S3Service {
  private s3: S3;

  constructor() {
    this.s3 = new S3({
      endpoint: process.env.S3_ENDPOINT,
      region: 'us-east-1',
      forcePathStyle: true,
      credentials: {
        accessKeyId: process.env.MINIO_ROOT_USER!,
        secretAccessKey: process.env.MINIO_ROOT_PASSWORD!,
      },
    });
  }

  async createBucket(name: string): Promise<boolean> {
    await this.s3.send(
      new CreateBucketCommand({
        Bucket: name,
      }),
    );

    return true;
  }

  async deleteBucket(name: string): Promise<boolean> {
    await this.s3.send(
      new DeleteBucketCommand({
        Bucket: name,
      }),
    );

    return true;
  }
}
