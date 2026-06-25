'use client';

import { Target, Award, Clock, Users, ShieldCheck, Lightbulb, Wrench } from 'lucide-react';
import { FadeIn, GoldLine, SectionLabel, SectionTitle, StaggerContainer, StaggerItem } from '../../../components/ui';

import { reasons } from '../constants.js';

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-xl">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Content */}
          <div className="lg:col-span-1">
            <FadeIn>
              <SectionLabel>Why AZAL</SectionLabel>
              <SectionTitle className="mb-6">
                Your Engineering{' '}
                <span className="text-gradient-gold">Advantage</span>
              </SectionTitle>
              <GoldLine className="mb-8" />
              <p className="text-text-muted leading-relaxed mb-8">
                Choosing AZAL means choosing a partner with the technical depth, project management capability, and safety culture to protect your investment from ground to structure.
              </p>
              <p className="text-text-muted leading-relaxed">
                We don't just provide a service — we take ownership of the ground engineering challenge and deliver a result you can build on.
              </p>
            </FadeIn>
          </div>

          {/* Right: Cards */}
          <div className="lg:col-span-2">
            <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.08}>
              {reasons.map((item) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={item.title}>
                    <div className="group flex gap-4 p-6 border border-border hover:border-accent/30 hover:shadow-card transition-all duration-300">
                      <div className="w-10 h-10 bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        <Icon size={18} className="text-accent group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-2 text-sm uppercase tracking-wide">
                          {item.title}
                        </h3>
                        <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
