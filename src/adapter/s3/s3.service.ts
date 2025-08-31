import {
  CreateBucketCommand,
  DeleteBucketCommand,
  PutObjectCommand,
  S3,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Injectable } from '@nestjs/common';

@Injectable()
export class S3Service {
  private s3: S3;
  private readonly PRESIGNED_URL_EXPIRATION = 60 * 5; // 5 minutes

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

  // --------------
  async getPresignedPutUrl(
    bucket: string,
    key: string,
    expires = this.PRESIGNED_URL_EXPIRATION,
  ): Promise<string> {
    const command = new PutObjectCommand({
      Bucket: bucket,
      Key: key,
    });

    try {
      const url = await getSignedUrl(this.s3, command, { expiresIn: expires });
      return url;
    } catch (error) {
      throw new Error(`Failed to generate presigned URL: ${error}`);
    }
  }
}
