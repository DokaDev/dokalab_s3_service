import { Module } from '@nestjs/common';
import { S3Module } from './adapter/s3/s3.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: process.env.NODE_ENV !== 'production' || true,
      introspection: process.env.NODE_ENV !== 'production' || true,
    }),
    S3Module,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
