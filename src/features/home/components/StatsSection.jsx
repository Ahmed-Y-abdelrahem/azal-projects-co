'use client';

import { useCounter } from '../../../hooks/useCounter';
import { FadeIn, StaggerContainer, StaggerItem } from '../../../components/ui';
import { STATS } from '../../../data/company';

function StatItem({ stat }) {
  const { count, ref } = useCounter(stat.value, 2200);
  return (
    <div ref={ref} className="text-center group">
      <div className="font-display text-6xl lg:text-7xl font-bold text-accent leading-none mb-2">
        {count}{stat.suffix}
      </div>
      <div className="w-8 h-0.5 bg-accent/40 mx-auto mb-3 group-hover:w-16 transition-all duration-300" />
      <div className="text-white/60 text-sm uppercase tracking-widest leading-relaxed">{stat.label}</div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 lg:py-24 bg-primary relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.1) 30px, rgba(255,255,255,0.1) 31px)',
        }}
      />
      {/* Accent line top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

      <div className="relative container-xl">
        <FadeIn className="text-center mb-16">
          <p className="text-accent text-xs font-mono uppercase tracking-[0.3em] mb-4">
            Our Track Record
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
            Numbers That Define Us
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12" staggerDelay={0.15}>
          {STATS.map((stat) => (
            <StaggerItem key={stat.label}>
              <StatItem stat={stat} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
