import { notFound } from 'next/navigation';

import { SERVICES } from '../../../data/services.js';

import {
  ServiceHero,
  ServiceDetails,
  ServiceFeatures,
  ServiceAdvantages,
  ServicesCTA,
} from '../../../features/services';

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }) {
  const { slug } = await params;

  const service = SERVICES.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceHero service={service} />

      <ServiceDetails service={service} />

      <ServiceFeatures service={service} />

      <ServiceAdvantages service={service} />

      <ServicesCTA service={service} />
    </>
  );
}