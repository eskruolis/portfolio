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
  siNodedotjs,
  siPostgresql,
  siRedis,
  siVercel,
  siClaude,
  siFramer,
  siReactivex,
} from 'simple-icons';

type SimpleIcon = { path: string; hex: string; title: string };

const ICON_MAP: Record<string, SimpleIcon> = {
  React: siReact,
  'Next.js': siNextdotjs,
  Angular: siAngular,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  'JavaScript (ES6+)': siJavascript,
  'Tailwind CSS': siTailwindcss,
  'HTML & CSS': siHtml5,
  Turborepo: siTurborepo,
  Git: siGit,
  Figma: siFigma,
  Storybook: siStorybook,
  Vitest: siVitest,
  'Testing (Vitest / RTL)': siVitest,
  PHP: siPhp,
  MySQL: siMysql,
  SQL: siPostgresql,
  WordPress: siWordpress,
  'Ory SDK': siOry,
  CSS: siCss,
  'Node.js': siNodedotjs,
  PostgreSQL: siPostgresql,
  Redis: siRedis,
  Vercel: siVercel,
  Claude: siClaude,
  'Framer Motion': siFramer,
  RxJS: siReactivex,
};

interface TechPillProps {
  name: string;
  gradient?: boolean;
}

export function TechPill({ name, gradient = false }: TechPillProps) {
  const icon = ICON_MAP[name];

  return (
    <span
      className={
        gradient
          ? `btn-gradient inline-flex items-center gap-1.5 rounded-full px-3
            py-1 text-xs font-medium text-white`
          : `border-border bg-muted text-muted-foreground inline-flex
            items-center gap-1.5 rounded-full border px-3 py-1 text-xs
            font-medium`
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
  );
}
