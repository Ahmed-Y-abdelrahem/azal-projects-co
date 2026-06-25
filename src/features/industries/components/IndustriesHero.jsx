'use client';

import { PageHero } from '@/components/ui';
import { COMPANY_IMAGES } from '@/data/company';

export function IndustriesHero() {
  return (
    <PageHero
      label="Industries"
      title="Industries We Serve"
      subtitle="Delivering specialized engineering solutions across infrastructure, industrial, utilities, oil & gas, and mega development sectors."
      image={COMPANY_IMAGES.industriesHero}
    />
  );
}