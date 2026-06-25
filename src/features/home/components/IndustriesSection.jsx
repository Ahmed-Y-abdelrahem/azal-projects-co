'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import IndustryCard from '@/components/ui/IndustryCard';

import {
  FadeIn,
  GoldLine,
  SectionLabel,
  SectionTitle,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui';

import { INDUSTRIES } from '../../../data/industries.js';

export function IndustriesSection() {

  const featured = INDUSTRIES;

  return (

    <section
      className="
      section-padding
      bg-background
      relative
      overflow-hidden
      "
    >

      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
          absolute
          -top-40
          -right-40
          w-[600px]
          h-[600px]
          rounded-full
          bg-accent/10
          blur-[140px]
          "
        />

        <div
          className="
          absolute
          bottom-0
          left-0
          w-[450px]
          h-[450px]
          rounded-full
          bg-primary/10
          blur-[120px]
          "
        />

      </div>

      <div className="container-xl relative">

        <div
          className="
          flex
          flex-col
          lg:flex-row
          justify-between
          items-end
          gap-10
          mb-24
          "
        >

          <FadeIn className="max-w-3xl">

            <SectionLabel>
              Industries We Serve
            </SectionLabel>

            <SectionTitle className="mt-5">

              Engineered Solutions
              <br />

              <span className="text-gradient-gold">
                Across Critical Sectors
              </span>

            </SectionTitle>

            <GoldLine className="mt-8" />

            <p
              className="
              mt-8
              text-text-muted
              text-lg
              leading-relaxed
              max-w-2xl
              "
            >
              Delivering advanced ground engineering,
              excavation, and infrastructure solutions
              designed around the unique requirements
              of every industry we serve.
            </p>

          </FadeIn>

          <FadeIn delay={0.2}>

            <Link
              href="/industries"
              className="
              group
              inline-flex
              items-center
              gap-3
              bg-primary
              text-white
              px-9
              py-4
              text-xs
              font-bold
              uppercase
              tracking-[0.18em]
              hover:bg-accent
              hover:text-primary
              transition-all
              duration-300
              "
            >

              Discover All Sectors

              <ArrowRight
                size={16}
                className="
                group-hover:translate-x-2
                transition-transform
                "
              />

            </Link>

          </FadeIn>

        </div>

        <StaggerContainer
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-4
          gap-8
          "
          staggerDelay={0.1}
        >

          {featured.map((industry, index) => (

            <StaggerItem
              key={industry.slug}
            >

              <IndustryCard
                industry={industry}
                index={index + 1}
              />

            </StaggerItem>

          ))}

        </StaggerContainer>

      </div>

    </section>

  );
}