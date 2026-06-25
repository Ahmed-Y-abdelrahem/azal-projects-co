'use client';

import Link from 'next/link';
import { ArrowRight, ShieldCheck, AlertTriangle, HardHat, FileText } from 'lucide-react';
import { FadeIn, GoldLine, SectionLabel, SectionTitle, StaggerContainer, StaggerItem } from '../../../components/ui';
import { commitments } from '../constants.js';
import { COMPANY_IMAGES } from '@/data/company';

export function HSESection() {
  return (
    <section className="section-padding relative overflow-hidden">
     <div
  className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
  style={{
    backgroundImage: `url(${COMPANY_IMAGES.hseHero.src})`,
  }}
/>

<div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" />

      <div className="relative container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <SectionLabel>Health, Safety & Environment</SectionLabel>
            <SectionTitle light className="mb-6">
              Safety Is Not a{' '}
              <span className="text-accent">Priority.</span>
              <br />
              It Is a Value.
            </SectionTitle>
            <GoldLine className="mb-8" />
            <p className="text-white/70 leading-relaxed mb-8">
              At AZAL Projects, HSE is embedded in our DNA — not a checkbox. Our people go home safe every day because we invest in training, systems, and a culture that makes doing things right the easiest choice on site.
            </p>
            <Link href="/hse" className="btn-primary">
              Our HSE Commitment
              <ArrowRight size={16} />
            </Link>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-5" staggerDelay={0.1}>
            {commitments.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <div className="bg-white/5 border border-white/10 hover:border-accent/40 p-6 transition-all duration-300 group">
                    <Icon size={24} className="text-accent mb-4" />
                    <h3 className="text-white font-semibold text-sm mb-2 uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

export function ContactCTASection() {
  return (
    <section className="py-20 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.3) 30px, rgba(255,255,255,0.3) 31px)',
        }}
      />
      <div className="relative container-xl text-center">
        <FadeIn>
          <p className="text-primary/70 text-xs font-mono uppercase tracking-[0.3em] mb-4">
            Let's Work Together
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary/70 text-lg mb-10 max-w-xl mx-auto">
            Contact our engineering team today for a consultation and discover how AZAL can solve your ground engineering challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 uppercase tracking-wider text-sm hover:bg-primary-dark transition-colors shadow-xl"
            >
              Get a Free Quote
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold px-8 py-4 uppercase tracking-wider text-sm hover:bg-primary hover:text-white transition-all"
            >
              Explore Services
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
