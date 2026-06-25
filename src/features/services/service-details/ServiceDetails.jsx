'use client';

import {
  FadeIn,
  SectionLabel,
  SectionTitle,
  GoldLine,
} from '../../../components/ui';

export function ServiceDetails({ service }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-xl">

        <FadeIn>
          <SectionLabel>
            Service Overview
          </SectionLabel>

          <SectionTitle className="mb-6">
            {service.title}
          </SectionTitle>

          <GoldLine className="mb-8" />

          <div className="max-w-4xl">
            <p className="text-text-muted text-lg leading-relaxed">
              {service.longDescription}
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}