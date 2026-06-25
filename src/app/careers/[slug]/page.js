import { notFound } from 'next/navigation';

import { JOBS } from '@/data/jobs';

import {
  JobHero,
  JobDescription,
  JobRequirements,
  JobResponsibilities,
  ApplySection,
} from '@/features/careers';

export async function generateStaticParams() {
  return JOBS.map((job) => ({
    slug: job.slug,
  }));
}

export default async function CareerDetailsPage({
  params,
}) {
  const { slug } = await params;

  const job = JOBS.find(
    (item) => item.slug === slug
  );

  if (!job) {
    notFound();
  }

  return (
    <>
      <JobHero job={job} />

      <JobDescription job={job} />

      <JobRequirements job={job} />

      <JobResponsibilities job={job} />

      <ApplySection job={job} />
    </>
  );
}