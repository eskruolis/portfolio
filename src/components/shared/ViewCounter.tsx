'use client';

import { useEffect, useState } from 'react';
import { incrementViews } from '@/actions/views';
import type { Dictionary } from '@/i18n/dictionaries';

interface ViewCounterProps {
  slug: string;
  dict: Dictionary;
}

export function ViewCounter({ slug, dict }: ViewCounterProps) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    incrementViews(slug).then(setViews);
  }, [slug]);

  if (views === null) return null;

  return (
    <span className="text-muted-foreground text-sm">
      {views.toLocaleString()} {views === 1 ? dict.blog.view : dict.blog.views}
    </span>
  );
}
