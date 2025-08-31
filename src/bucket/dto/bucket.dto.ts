import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BucketDto {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  deletedAt: Date | null;

  // TODO: Implement files field(ResolveField)
  //   @Field(() => [FileDto])
  //   files: FileDto[];
}
