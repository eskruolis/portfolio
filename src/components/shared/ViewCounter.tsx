'use client';

import { useEffect, useState } from 'react';
import { incrementViews } from '@/actions/views';

interface ViewCounterProps {
  slug: string;
}

export function ViewCounter({ slug }: ViewCounterProps) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    incrementViews(slug).then(setViews);
  }, [slug]);

  if (views === null) return null;

  return (
    <span className="text-muted-foreground text-sm">
      {views.toLocaleString()} {views === 1 ? 'view' : 'views'}
    </span>
  );
}
