import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBucketInput {
  @Field()
  name: string;
}
