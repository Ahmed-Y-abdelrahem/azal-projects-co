'use client';

import {
  FadeIn,
  GoldLine,
  SectionLabel,
  SectionTitle,
} from '../../../components/ui';

export function CompanyStory() {
  return (
    <section className="section-padding bg-white">
      <div className="container-xl max-w-5xl">
        <FadeIn>
          <SectionLabel>Our Story</SectionLabel>

          <SectionTitle className="mb-6">
            Building Trust Since 2015
          </SectionTitle>

          <GoldLine className="mb-8" />

          <p className="text-text-muted leading-relaxed mb-6">
            AZAL Projects was established to provide specialized
            engineering services for excavation, shoring,
            dewatering, and trench support systems.
          </p>

          <p className="text-text-muted leading-relaxed">
            Over the years, we have become a trusted partner
            for contractors, developers, and government
            entities throughout Saudi Arabia.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}