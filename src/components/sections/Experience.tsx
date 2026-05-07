import { experience } from '@/lib/data'
import { TechPill } from '@/components/shared/TechPill'

export function Experience() {
  return (
    <section id="experience" aria-label="Work experience" className="py-16 px-8 lg:px-16 max-w-3xl">
      <h2 className="text-2xl font-bold tracking-tight mb-8">Experience</h2>
      <ol className="flex flex-col gap-12" aria-label="Work history">
        {experience.map((job) => (
          <li key={job.company} className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            <p className="shrink-0 text-xs font-medium uppercase tracking-widest text-muted-foreground sm:w-28 sm:pt-1">
              {job.startDate}
              {' — '}
              {job.current ? 'Present' : job.endDate}
            </p>
            <div className="flex flex-col gap-3">
              <div>
                {job.url ? (
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:text-primary transition-colors"
                  >
                    {job.company}
                  </a>
                ) : (
                  <span className="font-semibold">{job.company}</span>
                )}
                <p className="text-sm text-muted-foreground">{job.role}</p>
              </div>
              <p className="text-sm leading-7 text-muted-foreground">{job.description}</p>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <TechPill key={skill} name={skill} />
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
