import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { projects } from '@/lib/data'

export function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="py-16 px-8 lg:px-16 max-w-3xl">
      <h2 className="text-2xl font-bold tracking-tight mb-8">Projects</h2>
      <ul className="grid gap-4 sm:grid-cols-2" role="list">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:bg-card/80"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold">{project.title}</h3>
              <div className="flex shrink-0 gap-1">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} source code on GitHub`}
                    className="rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
                  </a>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live site`}
                    className="rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm leading-6 text-muted-foreground grow">{project.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
