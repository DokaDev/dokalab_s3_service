import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FileDto {
  @Field(() => Int)
  id: number;

  @Field()
  key: string;

  @Field()
  originalFileName: string;

  @Field(() => BigInt)
  fileSize: bigint;

  @Field(() => GraphQLISODateTime)
  uploadedAt: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  deletedAt?: Date;
}
