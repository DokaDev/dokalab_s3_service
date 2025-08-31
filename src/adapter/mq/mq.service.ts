import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { EachMessagePayload, Kafka } from 'kafkajs';

@Injectable()
export class MqService implements OnModuleInit, OnModuleDestroy {
  private kafka = new Kafka({
    brokers: [process.env.KAFKA_BROKER_URL || 'localhost:29092'],
  });

  private consumer = this.kafka.consumer({
    groupId: 'test-consumer',
  });

  async onModuleInit() {
    await this.consumer.connect();
    await this.consumer.subscribe({
      topic: 'minio-events',
      fromBeginning: true,
    });

    await this.consumer.run({
      eachMessage: async ({
        topic,
        partition,
        message,
      }: EachMessagePayload) => {
        console.log('--- MinIO Event ---');
        console.log({
          topic,
          partition,
          offset: message.offset,
          value: message.value?.toString(),
        });
      },
    });
  }

  async onModuleDestroy() {
    await this.consumer.disconnect();
  }
}
