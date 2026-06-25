'use client';

import { motion } from 'framer-motion';

export default function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        margin: '-60px',
      }}
      variants={{
        hidden: {},

        show: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}