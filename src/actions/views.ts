'use server';

import { redis, viewKey } from '@/lib/redis';

export async function incrementViews(slug: string): Promise<number> {
  try {
    return await redis.incr(viewKey(slug));
  } catch {
    return 0;
  }
}

export async function getViews(slug: string): Promise<number> {
  try {
    const count = await redis.get<number>(viewKey(slug));
    return count ?? 0;
  } catch {
    return 0;
  }
}
