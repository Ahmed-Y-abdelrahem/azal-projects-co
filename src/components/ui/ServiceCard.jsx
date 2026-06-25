'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServiceCard({
  service,
  Icon,
  index = 1,
}) {
  return (
    <Link href={`/services/${service.slug}`}>
      <motion.article
        whileHover={{
          y: -10,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
        group
        relative
        h-full
        bg-white
        border
        border-border
        overflow-hidden
        shadow-sm
        hover:shadow-2xl
        transition-all
        duration-500
        "
      >

        {/* Top Accent */}

        <div
          className="
          absolute
          top-0
          left-0
          h-1
          bg-accent
          w-0
          group-hover:w-full
          transition-all
          duration-700
          "
        />

        {/* Number */}

        <div
          className="
          absolute
          right-6
          top-5
          text-[90px]
          font-black
          leading-none
          text-primary/[0.04]
          group-hover:text-accent/[0.12]
          transition-all
          "
        >
          0{index}
        </div>

        <div className="p-8">

          <div
            className="
            relative
            w-16
            h-16
            bg-primary
            flex
            items-center
            justify-center
            overflow-hidden
            mb-8
            "
          >

            <div
              className="
              absolute
              inset-0
              bg-accent
              translate-y-full
              group-hover:translate-y-0
              transition-transform
              duration-500
              "
            />

            <Icon
              size={28}
              className="
              relative
              z-10
              text-white
              group-hover:text-primary
              transition-colors
              "
            />

          </div>

          <h3
            className="
            text-xl
            font-bold
            text-primary
            mb-4
            group-hover:text-accent
            transition-colors
            "
          >
            {service.title}
          </h3>

          <p
            className="
            text-text-muted
            leading-relaxed
            mb-8
            "
          >
            {service.description}
          </p>

          <div
            className="
            flex
            justify-between
            items-center
            pt-5
            border-t
            border-border
            "
          >

            <span
              className="
              text-xs
              uppercase
              tracking-[0.25em]
              font-semibold
              "
            >
              Learn More
            </span>

            <ArrowRight
              size={18}
              className="
              group-hover:translate-x-1
              transition-transform
              "
            />

          </div>

        </div>

      </motion.article>
    </Link>
  );
}