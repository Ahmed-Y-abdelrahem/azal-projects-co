"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbs = [],
}) {
  return (
    <section className="relative bg-[var(--navy)] text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div
        className="absolute -top-32 -right-32 size-[480px] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gold)" }}
      />

      <div className="container-x relative py-24 md:py-32">
        <nav className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-white/50 tracking-wider mb-8">
          {crumbs.map((crumb, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1.5"
            >
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-[var(--gold)]"
                >
                  {crumb.label.toUpperCase()}
                </Link>
              ) : (
                <span className="text-white/80">
                  {crumb.label.toUpperCase()}
                </span>
              )}

              {index < crumbs.length - 1 && (
                <ChevronRight className="size-3" />
              )}
            </span>
          ))}
        </nav>

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02] max-w-4xl"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}