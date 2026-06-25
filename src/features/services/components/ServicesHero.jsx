'use client';

import { PageHero } from '@/components/ui';
import { COMPANY_IMAGES } from '@/data/company';

export function ServicesHero() {
  return (
    <PageHero
      label="Engineering Services"
      title="Ground Engineering Solutions"
      subtitle="Specialized services engineered for Saudi Arabia's most demanding construction environments."
      image={COMPANY_IMAGES.servicesHero}
    />
  );
}