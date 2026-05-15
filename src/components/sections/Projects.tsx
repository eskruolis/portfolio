import { getGitHubRepos } from '@/lib/github';
import { workProjects } from '@/lib/data';
import { ProjectsClient } from './ProjectsClient';

export async function Projects() {
  const repos = await getGitHubRepos();
  return <ProjectsClient repos={repos} workProjects={workProjects} />;
}
