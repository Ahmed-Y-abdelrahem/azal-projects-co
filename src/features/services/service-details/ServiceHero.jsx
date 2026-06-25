'use client';

import { PageHero } from '@/components/ui';

export function ServiceHero({ service }) {
  if (!service) return null;

  return (
    <PageHero
      label="Engineering Service"
      title={service.title}
      subtitle={service.description}
      image={service.image}
    />
  );
}