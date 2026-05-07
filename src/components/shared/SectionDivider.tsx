export function SectionDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`relative h-px mx-8 lg:mx-16 ${flip ? 'bg-linear-to-l' : 'bg-linear-to-r'} from-transparent via-border to-transparent`}
    />
  )
}
