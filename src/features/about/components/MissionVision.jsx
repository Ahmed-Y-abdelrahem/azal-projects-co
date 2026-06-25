'use client';

import { Target, Eye } from 'lucide-react';

import {
  FadeIn,
  GoldLine,
  SectionLabel,
  SectionTitle,
} from '../../../components/ui';


export function MissionVision() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
          absolute
          top-0
          right-0
          w-[500px]
          h-[500px]
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
          w-[400px]
          h-[400px]
          rounded-full
          bg-primary/5
          blur-[100px]
          "
        />

      </div>

      <div className="container-xl relative">

        <FadeIn className="max-w-3xl mb-20">

          <SectionLabel>
            Our Foundation
          </SectionLabel>

          <SectionTitle className="mt-5 mb-6">
            Mission &
            <span className="text-gradient-gold"> Vision</span>
          </SectionTitle>

          <GoldLine className="mb-7" />

          <p className="text-text-muted text-lg leading-relaxed max-w-2xl">
            Our mission and vision define the standards we uphold,
            the projects we pursue, and the value we create for
            clients, partners, and communities across Saudi Arabia.
          </p>

        </FadeIn>





        <div className="grid lg:grid-cols-2 gap-8">

          <FadeIn>

            <article
              className="
              group
              relative
              bg-white
              border
              border-border
              overflow-hidden
              p-10
              hover:shadow-2xl
              transition-all
              duration-500
              "
            >

              <div
                className="
                absolute
                top-0
                left-0
                h-1
                w-0
                bg-accent
                group-hover:w-full
                transition-all
                duration-700
                "
              />

              <div
                className="
                absolute
                top-5
                right-5
                text-[110px]
                font-black
                leading-none
                text-primary/[0.04]
                select-none
                "
              >
                M
              </div>

              <div
                className="
                w-16
                h-16
                bg-primary
                flex
                items-center
                justify-center
                mb-8
                "
              >
                <Target
                  size={28}
                  className="text-white"
                />
              </div>

              <h3
                className="
                font-display
                text-3xl
                font-bold
                text-primary
                mb-5
                "
              >
                Mission
              </h3>

              <p
                className="
                text-text-muted
                leading-relaxed
                text-lg
                "
              >
                Deliver safe, innovative, and cost-effective
                engineering solutions while maintaining the
                highest standards of quality, performance,
                and environmental responsibility.
              </p>

            </article>

          </FadeIn>









          <FadeIn delay={0.15}>

            <article
              className="
              group
              relative
              bg-white
              border
              border-border
              overflow-hidden
              p-10
              hover:shadow-2xl
              transition-all
              duration-500
              "
            >

              <div
                className="
                absolute
                top-0
                left-0
                h-1
                w-0
                bg-accent
                group-hover:w-full
                transition-all
                duration-700
                "
              />

              <div
                className="
                absolute
                top-5
                right-5
                text-[110px]
                font-black
                leading-none
                text-primary/[0.04]
                select-none
                "
              >
                V
              </div>

              <div
                className="
                w-16
                h-16
                bg-primary
                flex
                items-center
                justify-center
                mb-8
                "
              >
                <Eye
                  size={28}
                  className="text-white"
                />
              </div>

              <h3
                className="
                font-display
                text-3xl
                font-bold
                text-primary
                mb-5
                "
              >
                Vision
              </h3>

              <p
                className="
                text-text-muted
                leading-relaxed
                text-lg
                "
              >
                To become Saudi Arabia's leading ground
                engineering contractor, recognized for
                technical excellence, innovation, safety,
                and long-term client partnerships.
              </p>

            </article>

          </FadeIn>

        </div>

      </div>

    </section>
  );
}