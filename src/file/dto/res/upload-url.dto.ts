import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UploadUrlResponse {
  @Field()
  presignedUrl: string;

  @Field()
  redisKey: string;
}
