interface BrandLogoProps {
  size?: number
  className?: string
}

export function BrandLogo({ size = 32, className }: BrandLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo-a" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#c8956b" />
          <stop offset="100%" stopColor="#8a5c42" />
        </linearGradient>
        <linearGradient id="logo-b" x1="32" y1="0" x2="0" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#e8b48a" />
          <stop offset="100%" stopColor="#c07848" />
        </linearGradient>
        <linearGradient id="logo-c" x1="0" y1="32" x2="32" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6b3e2a" />
          <stop offset="100%" stopColor="#8a5038" />
        </linearGradient>
      </defs>
      {/* Back-left face */}
      <polygon points="4,10 16,4 16,22 4,28" fill="url(#logo-c)" opacity="0.85" />
      {/* Top face */}
      <polygon points="4,10 16,4 28,10 16,16" fill="url(#logo-b)" />
      {/* Front-right face */}
      <polygon points="16,16 28,10 28,28 16,22" fill="url(#logo-a)" />
      {/* Bottom accent edge */}
      <polygon points="4,28 16,22 28,28 16,34" fill="#6b3e2a" opacity="0.4" />
    </svg>
  )
}
