import { Resolver } from '@nestjs/graphql';
import { ObjectService } from './object.service';

@Resolver()
export class ObjectResolver {
  constructor(private readonly objectService: ObjectService) {}
}
