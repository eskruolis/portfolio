import { siteConfig } from '@/lib/data';
import { cn } from '@/lib/utils';

interface AvailabilityBadgeProps {
  className?: string;
  compact?: boolean;
}

export function AvailabilityBadge({
  className,
  compact = false,
}: AvailabilityBadgeProps) {
  if (!siteConfig.availableForFreelance) return null;

  return (
    <span
      className={cn(
        `border-primary/25 bg-primary/8 text-primary inline-flex items-center
        gap-2 rounded-full border font-mono`,
        compact ? 'px-2.5 py-1 text-[0.65rem]' : 'px-3.5 py-1.5 text-xs',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="availability-dot bg-primary h-1.5 w-1.5 shrink-0
          rounded-full"
      />
      Open to freelance &amp; full-time
    </span>
  );
}
