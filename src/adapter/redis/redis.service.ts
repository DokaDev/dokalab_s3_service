import { Injectable, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  // export class RedisService implements OnModuleDestroy {
  //   private readonly client: Redis;
  //   constructor() {
  //     this.client = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');
  //   }
  //   async set(key: string, value: string, mode?: string, duration?: number) {
  //     if (mode && duration) {
  //       await this.client.set(key, value, mode, duration);
  //     } else {
  //       await this.client.set(key, value);
  //     }
  //   }
  //   async get(key: string): Promise<string | null> {
  //     return this.client.get(key);
  //   }
  //   async del(key: string): Promise<number> {
  //     return this.client.del(key);
  //   }
  //   async onModuleDestroy() {
  //     await this.client.quit();
  //   }
}
