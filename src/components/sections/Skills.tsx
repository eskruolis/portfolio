import { skills } from '@/lib/data'

const CATEGORY_LABELS: Record<string, string> = {
  frontend: 'Frontend',
  tooling: 'Tooling & DevOps',
  testing: 'Testing',
  backend: 'Backend',
  other: 'Other',
}

const CATEGORY_ORDER = ['frontend', 'tooling', 'testing', 'backend', 'other'] as const

export function Skills() {
  const grouped = skills.reduce<Record<string, string[]>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category].push(skill.name)
    return acc
  }, {})

  return (
    <section id="skills" aria-label="Skills" className="py-16 px-8 lg:px-16 max-w-3xl">
      <h2 className="text-2xl font-bold tracking-tight mb-8">Skills</h2>
      <div className="flex flex-col gap-6">
        {CATEGORY_ORDER.filter((cat) => grouped[cat]?.length).map((category) => (
          <div key={category}>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
              {CATEGORY_LABELS[category]}
            </p>
            <div className="flex flex-wrap gap-2">
              {grouped[category].map((name) => (
                <span
                  key={name}
                  className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-sm font-medium text-muted-foreground"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
