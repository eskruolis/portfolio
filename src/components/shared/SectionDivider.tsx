export function SectionDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className={`w-full overflow-hidden leading-none text-muted/40 ${flip ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        className="w-full h-12"
        fill="currentColor"
      >
        <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" />
      </svg>
    </div>
  )
}
