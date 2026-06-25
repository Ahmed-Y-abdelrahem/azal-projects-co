'use client';

import Link from 'next/link';
import {
  Shield,
  Layers,
  Droplets,
  Grid3X3,
  ArrowRight,
} from 'lucide-react';

import {
  FadeIn,
  GoldLine,
  SectionLabel,
  SectionTitle,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui';

import ServiceCard from '@/components/ui/ServiceCard';

import { SERVICES } from '../../../data/services.js';

const iconMap = {
  Shield,
  Layers,
  Droplets,
  Grid3X3,
};

export function ServicesSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">

      {/* Background Decoration */}

      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
          absolute
          -top-40
          left-1/2
          -translate-x-1/2
          w-[600px]
          h-[600px]
          rounded-full
          bg-accent/10
          blur-[140px]
          "
        />

      </div>

      <div className="container-xl relative">

        {/* Section Header */}

        <FadeIn className="max-w-3xl mb-20">

          <SectionLabel>
            What We Do
          </SectionLabel>

          <SectionTitle className="mt-5 mb-6">
            Ground Engineering
            <br />

            <span className="text-gradient-gold">
              Solutions & Services
            </span>

          </SectionTitle>

          <GoldLine className="mb-7" />

          <p className="text-text-muted text-lg leading-relaxed max-w-2xl">
            Four specialist disciplines. One engineering partner.
            AZAL delivers integrated ground solutions engineered
            for complex construction environments across Saudi Arabia.
          </p>

        </FadeIn>

        {/* Services Grid */}

        <StaggerContainer
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-6
          "
          staggerDelay={0.1}
        >

          {SERVICES.map((service, index) => {

            const Icon =
              iconMap[service.icon] || Shield;

            return (

              <StaggerItem
                key={service.slug}
              >

                <ServiceCard
                  service={service}
                  Icon={Icon}
                  index={index + 1}
                />

              </StaggerItem>

            );

          })}

        </StaggerContainer>

        {/* CTA */}

        <FadeIn
          delay={0.3}
          className="mt-14 text-center"
        >

          <Link
            href="/services"
            className="btn-outline"
          >
            View All Services

            <ArrowRight size={16} />
          </Link>

        </FadeIn>

      </div>

    </section>
  );
}