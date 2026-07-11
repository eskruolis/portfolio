interface BrandLogoProps {
  size?: number;
  className?: string;
}

export function BrandLogo({ size = 32, className }: BrandLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 34"
      fill="none"
      width={size}
      height={size * (34 / 32)}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="logo-a"
          x1="0"
          y1="0"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#0d9488" />
        </linearGradient>
        <linearGradient
          id="logo-b"
          x1="32"
          y1="0"
          x2="0"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#6ee7b7" />
          <stop offset="100%" stopColor="#2dd4bf" />
        </linearGradient>
        <linearGradient
          id="logo-c"
          x1="0"
          y1="32"
          x2="32"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#065f46" />
          <stop offset="100%" stopColor="#0f766e" />
        </linearGradient>
      </defs>
      {/* Back-left face */}
      <polygon
        points="4,10 16,4 16,22 4,28"
        fill="url(#logo-c)"
        opacity="0.85"
      />
      {/* Top face */}
      <polygon points="4,10 16,4 28,10 16,16" fill="url(#logo-b)" />
      {/* Front-right face */}
      <polygon points="16,16 28,10 28,28 16,22" fill="url(#logo-a)" />
      {/* Bottom accent edge */}
      <polygon points="4,28 16,22 28,28 16,34" fill="#065f46" opacity="0.4" />
    </svg>
  );
}
