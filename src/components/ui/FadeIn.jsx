'use client';

import { motion } from 'framer-motion';

const variants = {
  up: {
    y: 40,
    opacity: 0,
  },

  down: {
    y: -40,
    opacity: 0,
  },

  left: {
    x: -40,
    opacity: 0,
  },

  right: {
    x: 40,
    opacity: 0,
  },

  none: {
    opacity: 0,
  },
};

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}) {
  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{
        x: 0,
        y: 0,
        opacity: 1,
      }}
      viewport={{
        once: true,
        margin: '-80px',
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}