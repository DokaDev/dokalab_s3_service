import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BucketDto } from './dto/bucket.dto';
import { BucketService } from './bucket.service';
import { CreateBucketInput } from './dto/create-bucket.input';

@Resolver(() => BucketDto)
export class BucketResolver {
  constructor(private readonly bucketService: BucketService) {}

  @Query(() => [BucketDto])
  async findAllBuckets(): Promise<BucketDto[]> {
    return await this.bucketService.findAll();
  }

  @Query(() => BucketDto, { nullable: true })
  async findBucketById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<BucketDto | null> {
    return await this.bucketService.findById(id);
  }

  // ----------------
  @Mutation(() => BucketDto)
  async createBucket(
    @Args('input') input: CreateBucketInput,
  ): Promise<BucketDto> {
    return await this.bucketService.create(input.name);
  }

  @Mutation(() => BucketDto)
  // id = number
  async deleteBucket(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<BucketDto> {
    return await this.bucketService.delete(id);
  }
}
