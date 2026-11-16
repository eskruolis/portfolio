'use client';

import { useEffect } from 'react';

/**
 * Feeds the pointer position to whichever `.card-glow` card is under the
 * cursor (as --mx / --my), so globals.css can paint a soft spotlight that
 * follows it. Renders nothing. Mouse-only: touch devices never fire it.
 */
export function CardSpotlight() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!(event.target instanceof Element)) return;
        const card = event.target.closest<HTMLElement>('.card-glow');
        if (!card) return;
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
        card.style.setProperty('--my', `${event.clientY - rect.top}px`);
      });
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      document.removeEventListener('pointermove', onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
