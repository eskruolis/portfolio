'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faArrowRight,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { TechPill } from '@/components/shared/TechPill';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { cn } from '@/lib/utils';
import type { WorkProject } from '@/types';
import type { GitHubRepo } from '@/lib/github';
import { repoToTags } from '@/lib/github';

// ── Card components ──────────────────────────────────────────────────────────

function CardShell({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      style={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        transformStyle: 'preserve-3d',
        perspective: 800,
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setTilt({
          x: ((e.clientY - rect.top) / rect.height - 0.5) * -8,
          y: ((e.clientX - rect.left) / rect.width - 0.5) * 8,
        });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="border-border bg-card card-glow flex flex-col gap-3 rounded-xl
        border p-5"
    >
      {children}
    </motion.li>
  );
}

function RepoCard({ repo, index }: { repo: GitHubRepo; index: number }) {
  const tags = repoToTags(repo);
  return (
    <CardShell index={index}>
      <div className="flex items-start justify-between gap-2">
        <h3 className="leading-snug font-semibold">
          {repo.name.replace(/-/g, ' ')}
        </h3>
        <div className="flex shrink-0 gap-1">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${repo.name} on GitHub`}
            className="text-muted-foreground hover:text-foreground
              focus-visible:ring-ring rounded-md p-1 transition-colors
              focus-visible:ring-2 focus-visible:outline-none"
          >
            <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
          </a>
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${repo.name} live site`}
              className="text-muted-foreground hover:text-foreground
                focus-visible:ring-ring rounded-md p-1 transition-colors
                focus-visible:ring-2 focus-visible:outline-none"
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="h-4 w-4"
              />
            </a>
          )}
        </div>
      </div>
      <p className="text-muted-foreground grow text-sm leading-6">
        {repo.description}
      </p>
      {repo.stargazers_count > 0 && (
        <p className="text-muted-foreground text-xs">
          ★ {repo.stargazers_count}
        </p>
      )}
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <TechPill key={tag} name={tag} />
        ))}
      </div>
    </CardShell>
  );
}

function WorkCard({ project, index }: { project: WorkProject; index: number }) {
  return (
    <CardShell index={index}>
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="leading-snug font-semibold">{project.title}</h3>
          <p className="text-muted-foreground mt-0.5 text-xs">
            {project.company}
          </p>
        </div>
        <div className="flex shrink-0 gap-1 pt-0.5">
          {project.private && (
            <span
              title="Private / client work"
              className="text-muted-foreground rounded-md p-1"
              aria-label="Private project"
            >
              <FontAwesomeIcon icon={faLock} className="h-3.5 w-3.5" />
            </span>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} site`}
              className="text-muted-foreground hover:text-foreground
                focus-visible:ring-ring rounded-md p-1 transition-colors
                focus-visible:ring-2 focus-visible:outline-none"
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="h-4 w-4"
              />
            </a>
          )}
        </div>
      </div>
      <p className="text-muted-foreground grow text-sm leading-6">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <TechPill key={tag} name={tag} />
        ))}
      </div>
      {project.caseStudy && (
        <Link
          href={`/work/${project.caseStudy}`}
          className="text-primary group/link mt-1 inline-flex w-fit items-center
            gap-1.5 text-sm font-medium underline-offset-4 hover:underline"
        >
          Read case study
          <FontAwesomeIcon
            icon={faArrowRight}
            className="h-3 w-3 transition-transform
              group-hover/link:translate-x-0.5"
          />
        </Link>
      )}
    </CardShell>
  );
}

// ── Tag filter bar ────────────────────────────────────────────────────────────

function TagFilter({
  tags,
  active,
  onChange,
}: {
  tags: string[];
  active: string | null;
  onChange: (tag: string | null) => void;
}) {
  return (
    <div
      className="mb-6 flex flex-wrap gap-2"
      role="group"
      aria-label="Filter by technology"
    >
      <button
        onClick={() => onChange(null)}
        className={cn(
          'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
          active === null
            ? 'bg-primary text-primary-foreground border-transparent'
            : 'border-border bg-muted text-muted-foreground hover:bg-muted/80',
        )}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onChange(active === tag ? null : tag)}
          className={cn(
            `rounded-full border px-3 py-1 text-xs font-medium
            transition-colors`,
            active === tag
              ? 'bg-primary text-primary-foreground border-transparent'
              : 'border-border bg-muted text-muted-foreground hover:bg-muted/80',
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

type Tab = 'work' | 'github';

interface ProjectsClientProps {
  repos: GitHubRepo[];
  workProjects: WorkProject[];
}

export function ProjectsClient({ repos, workProjects }: ProjectsClientProps) {
  const [tab, setTab] = useState<Tab>('work');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const workTags = Array.from(
    new Set(workProjects.flatMap((p) => p.tags)),
  ).sort();
  const repoTags = Array.from(new Set(repos.flatMap(repoToTags))).sort();

  const filteredWork = activeTag
    ? workProjects.filter((p) => p.tags.includes(activeTag))
    : workProjects;

  const filteredRepos = activeTag
    ? repos.filter((r) => repoToTags(r).includes(activeTag))
    : repos;

  function switchTab(next: Tab) {
    setTab(next);
    setActiveTag(null);
  }

  return (
    <section
      id="projects"
      aria-label="Projects"
      className="max-w-5xl px-8 py-20 lg:px-16"
    >
      <ScrollReveal>
        <SectionHeading
          label="Work"
          title="Selected work & projects"
          intro="Client work lives behind NDAs and logins — the case studies
            tell the story. The GitHub tab pulls my public repos live."
        />
      </ScrollReveal>

      {/* Tab switcher */}
      <ScrollReveal delay={0.05}>
        <div
          className="bg-muted mb-6 flex w-fit gap-1 rounded-lg p-1"
          role="tablist"
        >
          {(['work', 'github'] as const).map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              onClick={() => switchTab(t)}
              className={cn(
                'rounded-md px-4 py-1.5 text-sm font-medium transition-colors',
                tab === t
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {t === 'work' ? 'Work' : 'GitHub'}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Tag filter */}
      <ScrollReveal delay={0.1}>
        <TagFilter
          tags={tab === 'work' ? workTags : repoTags}
          active={activeTag}
          onChange={setActiveTag}
        />
      </ScrollReveal>

      {/* Cards */}
      <AnimatePresence mode="wait">
        {tab === 'work' ? (
          <motion.ul
            key="work"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid gap-4 sm:grid-cols-2"
            role="list"
          >
            {filteredWork.map((p, i) => (
              <WorkCard key={p.title} project={p} index={i} />
            ))}
            {filteredWork.length === 0 && (
              <li
                className="text-muted-foreground col-span-2 py-8 text-center
                  text-sm"
              >
                No projects match that filter.
              </li>
            )}
          </motion.ul>
        ) : (
          <motion.ul
            key="github"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid gap-4 sm:grid-cols-2"
            role="list"
          >
            {filteredRepos.map((r, i) => (
              <RepoCard key={r.id} repo={r} index={i} />
            ))}
            {filteredRepos.length === 0 && (
              <li
                className="text-muted-foreground col-span-2 py-8 text-center
                  text-sm"
              >
                No repositories match that filter.
              </li>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </section>
  );
}
