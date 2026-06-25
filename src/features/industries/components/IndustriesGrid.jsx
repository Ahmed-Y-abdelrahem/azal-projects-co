'use client';

import { INDUSTRIES } from '@/data/industries';
import IndustryCard from '@/components/ui/IndustryCard';

import {
  FadeIn,
  GoldLine,
  SectionLabel,
  SectionTitle,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui';


export function IndustriesGrid() {
  return (
    <section className="section-padding bg-background">
      <div className="container-xl">


        <FadeIn className="max-w-3xl mb-16">

          <SectionLabel>
            Industries We Serve
          </SectionLabel>


          <SectionTitle className="mt-4 mb-6">

            Engineering Solutions

            <span className="text-gradient-gold">
              Across Multiple Sectors
            </span>

          </SectionTitle>


          <GoldLine />

        </FadeIn>




        <StaggerContainer

          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
          "

          staggerDelay={0.12}

        >


          {INDUSTRIES.map((industry, index) => (

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