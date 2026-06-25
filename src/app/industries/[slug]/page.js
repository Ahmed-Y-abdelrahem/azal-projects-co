import { notFound } from 'next/navigation';

import { INDUSTRIES } from '../../../data/industries';

import {
  IndustryHero,
  IndustryOverview,
  IndustryChallenges,
  IndustrySolutions,
  IndustryCTA,
} from '../../../features/industries/index.js';

export async function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({
    slug: industry.slug,
  }));
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;

  const industry = INDUSTRIES.find(
    (item) => item.slug === slug
  );

  if (!industry) {
    notFound();
  }

  return (
    <>
      <IndustryHero industry={industry} />

      <IndustryOverview industry={industry} />

      <IndustryChallenges industry={industry} />

      <IndustrySolutions industry={industry} />

      <IndustryCTA />
    </>
  );
}