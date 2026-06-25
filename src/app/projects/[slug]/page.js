import { notFound } from 'next/navigation';

import { PROJECTS } from '@/data/projects';

import {
  ProjectHero,
  ProjectOverview,
  ProjectGallery,
  ProjectChallenges,
  ProjectResults,
  ProjectCTA,
} from '@/features/projects';

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {

  const { slug } = await params;

  const project = PROJECTS.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | AZAL Projects`,
    description: project.overview,
  };
}

export default async function ProjectPage({ params }) {

  const { slug } = await params;

  const project = PROJECTS.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectHero project={project} />

      <ProjectOverview project={project} />

      <ProjectGallery project={project} />

      <ProjectChallenges project={project} />

      <ProjectResults project={project} />

      <ProjectCTA />
    </>
  );
}