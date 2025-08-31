import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UploadFileInput {
  @Field()
  bucketId: number;

  @Field()
  key: string;

  @Field()
  fileSize: number;
}
