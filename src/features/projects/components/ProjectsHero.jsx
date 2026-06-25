'use client';

import { PageHero } from '@/components/ui';
import { COMPANY_IMAGES } from '@/data/company';

export function ProjectsHero() {
  return (
    <PageHero
      label="Portfolio"
      title="Featured Projects"
      subtitle="Explore AZAL Projects portfolio across infrastructure, utilities, industrial and commercial developments."
      image={COMPANY_IMAGES.projectsHero}
    />
  );
}