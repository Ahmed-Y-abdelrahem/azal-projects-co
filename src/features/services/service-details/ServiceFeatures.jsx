'use client';

import { CheckCircle2 } from 'lucide-react';

import {
  FadeIn,
  SectionLabel,
  SectionTitle,
  GoldLine,
} from '../../../components/ui';

export function ServiceFeatures({ service }) {
  return (
    <section className="section-padding bg-background">
      <div className="container-xl">

        <FadeIn>
          <SectionLabel>
            Key Features
          </SectionLabel>

          <SectionTitle className="mb-6">
            What's Included
          </SectionTitle>

          <GoldLine className="mb-10" />

          <div className="grid md:grid-cols-2 gap-6">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 bg-white p-6 border border-border"
              >
                <CheckCircle2
                  size={18}
                  className="text-accent mt-1"
                />

                <span className="text-text">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}