import {
  siReact,
  siNextdotjs,
  siAngular,
  siTypescript,
  siJavascript,
  siTailwindcss,
  siHtml5,
  siTurborepo,
  siGit,
  siFigma,
  siStorybook,
  siVitest,
  siPhp,
  siMysql,
  siWordpress,
  siOry,
  siCss,
} from 'simple-icons'

type SimpleIcon = { path: string; hex: string; title: string }

const ICON_MAP: Record<string, SimpleIcon> = {
  'React': siReact,
  'Next.js': siNextdotjs,
  'Angular': siAngular,
  'TypeScript': siTypescript,
  'JavaScript': siJavascript,
  'JavaScript (ES6+)': siJavascript,
  'Tailwind CSS': siTailwindcss,
  'HTML & CSS': siHtml5,
  'Turborepo': siTurborepo,
  'Git': siGit,
  'Figma': siFigma,
  'Storybook': siStorybook,
  'Vitest': siVitest,
  'PHP': siPhp,
  'MySQL': siMysql,
  'WordPress': siWordpress,
  'Ory SDK': siOry,
  'CSS': siCss,
}

interface TechPillProps {
  name: string
  gradient?: boolean
}

export function TechPill({ name, gradient = false }: TechPillProps) {
  const icon = ICON_MAP[name]

  return (
    <span
      className={
        gradient
          ? 'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium btn-gradient text-white'
          : 'inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground'
      }
    >
      {icon && (
        <svg
          role="img"
          aria-label={icon.title}
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5 shrink-0"
          fill={gradient ? 'currentColor' : `#${icon.hex}`}
        >
          <path d={icon.path} />
        </svg>
      )}
      {name}
    </span>
  )
}
