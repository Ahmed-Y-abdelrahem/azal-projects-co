'use client';

import { PageHero } from '@/components/ui';
import { COMPANY_IMAGES } from '@/data/company';

export function AboutHero() {
  return (
    <PageHero
      label="About Us"
      title="Engineering Excellence Built on Experience"
      subtitle="Since 2015, AZAL Projects has delivered specialized ground engineering solutions across Saudi Arabia."
      image={COMPANY_IMAGES.aboutHero}
    />
  );
}