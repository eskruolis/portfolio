import { getGitHubRepos } from '@/lib/github';
import { ProjectsClient } from './ProjectsClient';
import type { Dictionary } from '@/i18n/dictionaries';
import type { PortfolioData } from '@/lib/data';
import type { Locale } from '@/i18n/config';

interface ProjectsProps {
  dict: Dictionary;
  data: PortfolioData;
  locale: Locale;
}

export async function Projects({ dict, data, locale }: ProjectsProps) {
  const repos = await getGitHubRepos();
  return (
    <ProjectsClient
      repos={repos}
      workProjects={data.workProjects}
      dict={dict}
      locale={locale}
    />
  );
}
