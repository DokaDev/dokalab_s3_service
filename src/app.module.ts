import { Module } from '@nestjs/common';
import { S3Module } from './adapter/s3/s3.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { BucketModule } from './bucket/bucket.module';
import { ObjectModule } from './object/object.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: process.env.NODE_ENV !== 'production' || true,
      introspection: process.env.NODE_ENV !== 'production' || true,
    }),
    S3Module,
    BucketModule,
    ObjectModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
