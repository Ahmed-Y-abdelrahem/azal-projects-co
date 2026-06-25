import {
  ProjectsHero,
  ProjectsGrid,
  ProjectsStats,
  ProjectsCTA,
} from '../../features/projects/index.js';

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />

      <ProjectsGrid />

      <ProjectsStats />

      <ProjectsCTA />
    </>
  );
}