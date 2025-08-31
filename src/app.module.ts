import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { S3Module } from './adapter/s3/s3.module';
import { BucketModule } from './bucket/bucket.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      // uploads: false,
      playground: process.env.NODE_ENV !== 'production' || true,
      introspection: process.env.NODE_ENV !== 'production' || true,
    }),
    S3Module,
    BucketModule,
    // FileModule,
    // MqModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
