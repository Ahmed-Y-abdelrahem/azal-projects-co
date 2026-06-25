'use client';

import {
  ShieldCheck,
  Award,
  Users,
  Lightbulb,
  Clock,
  Target,
} from 'lucide-react';

import {
  FadeIn,
  GoldLine,
  SectionLabel,
  SectionTitle,
  StaggerContainer,
  StaggerItem,
} from '../../../components/ui';

const values = [
  {
    icon: ShieldCheck,
    title: 'Safety',
    description:
      'Safety is the foundation of every decision, process, and activity we perform.',
  },
  {
    icon: Award,
    title: 'Quality',
    description:
      'We deliver engineering solutions that consistently exceed expectations.',
  },
  {
    icon: Users,
    title: 'Integrity',
    description:
      'We build trust through transparency, accountability, and professionalism.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We embrace new technologies and engineering methodologies.',
  },
  {
    icon: Clock,
    title: 'Reliability',
    description:
      'Clients depend on us to deliver safely, efficiently, and on time.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description:
      'We pursue continuous improvement in every aspect of our business.',
  },
];

export function CoreValues() {
  return (
    <section className="section-padding bg-background">
      <div className="container-xl">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Our Values</SectionLabel>

          <SectionTitle className="mb-6">
            The Principles That
            <span className="text-gradient-gold"> Guide Us</span>
          </SectionTitle>

          <GoldLine className="mx-auto" />
        </FadeIn>

        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <StaggerItem key={value.title}>
                <div className="bg-white border border-border p-8 hover:shadow-card transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-accent/10 flex items-center justify-center mb-5">
                    <Icon size={24} className="text-accent" />
                  </div>

                  <h3 className="font-semibold text-primary text-lg mb-3">
                    {value.title}
                  </h3>

                  <p className="text-text-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}