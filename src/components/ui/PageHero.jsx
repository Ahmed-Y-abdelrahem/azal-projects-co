'use client';

import FadeIn from './FadeIn';
import SectionLabel from './SectionLabel';

export default function PageHero({
  label,
  title,
  subtitle,
  image,
  children,
}) {
  return (
    <section className="relative min-h-[65vh] flex items-center overflow-hidden pt-32 pb-20">

      {/* Background Image */}
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url(${image.src})`,
          }}
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Corporate Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-primary/95
          via-primary/85
          to-primary/55
        "
      />

      {/* Engineering Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 80px,
                rgba(255,255,255,1) 80px,
                rgba(255,255,255,1) 81px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 80px,
                rgba(255,255,255,1) 80px,
                rgba(255,255,255,1) 81px
              )
            `,
          }}
        />
      </div>

      {/* Accent Line */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent" />

      <div className="relative z-10 container-xl">

        <FadeIn>

          {label && (
            <SectionLabel light>
              {label}
            </SectionLabel>
          )}

          <h1
            className="
              font-display
              text-5xl
              lg:text-7xl
              xl:text-8xl
              font-bold
              text-white
              leading-[0.95]
              mb-6
              max-w-5xl
              drop-shadow-2xl
            "
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className="
                text-white/80
                text-lg
                lg:text-xl
                leading-relaxed
                max-w-3xl
              "
            >
              {subtitle}
            </p>
          )}

          {children}

        </FadeIn>

      </div>

    </section>
  );
}