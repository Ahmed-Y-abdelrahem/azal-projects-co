"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow && (
        <span className="eyebrow">
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          "mt-4 font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]",
          invert
            ? "text-white"
            : "text-[var(--navy)]"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-5 text-base md:text-lg leading-relaxed",
            invert
              ? "text-white/70"
              : "text-[var(--muted-foreground)]"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}