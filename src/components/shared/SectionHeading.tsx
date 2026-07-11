interface SectionHeadingProps {
  label: string;
  title: string;
  intro?: string;
}

export function SectionHeading({ label, title, intro }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <p className="section-label mb-3">{label}</p>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {intro && (
        <p className="text-muted-foreground mt-4 max-w-xl leading-7">{intro}</p>
      )}
    </div>
  );
}
