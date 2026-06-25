'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import {
  ArrowRight,
  Flame,
  Building2,
  Building,
  Zap,
} from 'lucide-react';

const iconMap = {
  Flame,
  Building2,
  Building,
  Zap,
};

export default function IndustryCard({
  industry,
  index,
}) {
  const Icon =
    iconMap[industry.icon] || Building2;

  return (
    <Link href={`/industries/${industry.slug}`}>

      <motion.article
        whileHover={{ y: -12 }}
        transition={{ duration: 0.3 }}
        className="
        group
        relative
        h-full
        bg-white
        border
        border-border
        overflow-hidden
        shadow-sm
        hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]
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
          right-6
          text-[100px]
          font-black
          leading-none
          text-primary/[0.03]
          group-hover:text-accent/[0.08]
          transition-colors
          duration-500
          "
        >
          {String(index).padStart(2, '0')}
        </div>

        <div className="relative p-8">

          <div
            className="
            relative
            w-16
            h-16
            bg-primary
            flex
            items-center
            justify-center
            mb-8
            overflow-hidden
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
              duration-500
              "
            />

          </div>

          <h3
            className="
            font-display
            text-2xl
            font-bold
            text-primary
            mb-4
            group-hover:text-accent
            transition-colors
            "
          >
            {industry.title}
          </h3>

          <p
            className="
            text-text-muted
            leading-relaxed
            mb-8
            "
          >
            {industry.description}
          </p>

          <div
            className="
            flex
            items-center
            justify-between
            pt-6
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
              text-primary
              group-hover:text-accent
              transition-colors
              "
            >
              Explore Industry
            </span>

            <div
              className="
              w-10
              h-10
              flex
              items-center
              justify-center
              border
              border-border
              group-hover:bg-primary
              group-hover:border-primary
              transition-all
              duration-300
              "
            >
              <ArrowRight
                size={16}
                className="
                group-hover:text-white
                group-hover:translate-x-1
                transition-all
                "
              />
            </div>

          </div>

        </div>

      </motion.article>

    </Link>
  );
}