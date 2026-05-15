import { Redis } from '@upstash/redis';

export const redis = Redis.fromEnv();

export function viewKey(slug: string): string {
  return `views:${slug}`;
}
