import { Injectable } from '@nestjs/common';

@Injectable()
export class S3Service {
  private readonly S3_HOST = process.env.S3_HOST;
}
