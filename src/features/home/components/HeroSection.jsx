'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { COMPANY_IMAGES } from '@/data/company';


export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Background image */}
      <div
  className="absolute inset-0 bg-cover bg-center blur-[1px] scale-105"
  style={{
    backgroundImage: `url(${COMPANY_IMAGES.homeHero.src})`
  }}
/>

{/* Light Overlay */}
<div className="absolute inset-0 bg-gradient-to-r from-primary/75 via-primary/45 to-primary/20 backdrop-blur-[1px]" />

      {/* Accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent" />

      {/* Grid lines decorative */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(255,255,255,0.5) 80px, rgba(255,255,255,0.5) 81px), repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255,255,255,0.5) 80px, rgba(255,255,255,0.5) 81px)',
          }}
        />
      </div>

      <div className="relative container-xl pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent text-xs font-mono uppercase tracking-[0.3em]">
              Engineering Excellence Since 2015
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] mb-8"
          >
            Ground Engineering
            <br />
            <span className="text-gradient-gold">Built to Last.</span>
          </motion.h1>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-white/70 text-lg lg:text-xl leading-relaxed max-w-2xl mb-12"
          >
            AZAL Projects delivers precision shoring systems, excavation, dewatering, and trench shuttering across the Kingdom of Saudi Arabia — on schedule, on budget, and without compromise on safety.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/services" className="btn-primary">
              Explore Our Services
              <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Request a Consultation
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-xl"
          >
            {[
              { value: '9+', label: 'Years Active' },
              { value: '200+', label: 'Projects Done' },
              { value: '100%', label: 'Safety Record' },
            ].map((stat) => (
              <div key={stat.label} className="border-l border-accent/40 pl-4">
                <div className="font-display text-3xl font-bold text-accent">{stat.value}</div>
                <div className="text-white/50 text-xs uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
