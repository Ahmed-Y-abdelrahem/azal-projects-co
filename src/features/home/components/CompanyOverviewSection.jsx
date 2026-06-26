'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { FadeIn, GoldLine, SectionLabel, SectionTitle, StaggerContainer, StaggerItem } from '../../../components/ui';
import { COMPANY_IMAGES } from '@/data/company';
import { strengths } from '../constants.js';
import Image from 'next/image';
export function CompanyOverviewSection() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <FadeIn direction="left">
            <div className="relative">
              <div
  className="
  group
  relative
  aspect-[4/5]
  overflow-hidden
  bg-background
  "
>
                <Image
  src={COMPANY_IMAGES.aboutCompany}
  alt="AZAL Projects engineering team"
  fill
  className="object-cover transition-transform duration-700 group-hover:scale-105"
/>
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 w-48 shadow-xl">
                <div className="font-display text-4xl font-bold text-accent">2015</div>
                <div className="text-white/70 text-xs uppercase tracking-widest mt-1">Founded</div>
                <div className="text-white text-sm mt-2 font-medium">Engineering Saudi Arabia's future</div>
              </div>
              {/* Gold accent bar */}
              <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
            </div>
          </FadeIn>

          {/* Content side */}
          <FadeIn direction="right" delay={0.15}>
            <SectionLabel>Who We Are</SectionLabel>
            <SectionTitle className="mb-6">
              Saudi Arabia's Specialist in{' '}
              <span className="text-gradient-gold">Ground Engineering</span>
            </SectionTitle>
            <GoldLine className="mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Since 2015, AZAL Projects For Contracting has been delivering engineered ground solutions across the Kingdom of Saudi Arabia. We combine deep geotechnical expertise with modern equipment and a safety-first culture to serve contractors, developers, and government clients across all major sectors.
            </p>
            <p className="text-text-muted leading-relaxed mb-10">
              From complex shoring systems in congested city centres to large-scale dewatering on mega-projects, our multidisciplinary team brings engineering rigour to every challenge we undertake.
            </p>

            <StaggerContainer className="space-y-3 mb-10" staggerDelay={0.08}>
              {strengths.map((item) => (
                <StaggerItem key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-text text-sm">{item}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <Link href="/about" className="btn-outline">
              Learn More About Us
              <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
