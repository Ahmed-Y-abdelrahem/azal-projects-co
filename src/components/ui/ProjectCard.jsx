'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function ProjectCard({
  project,
}) {
  return (
    <Link href={`/projects/${project.slug}`}>

      <article
        className="
        group
        bg-white
        border
        border-border
        overflow-hidden
        hover:shadow-2xl
        transition-all
        duration-500
        "
      >

        <div className="relative h-72 overflow-hidden">

          <Image
            src={project.image}
            alt={project.title}
            fill
            className="
            object-cover
            group-hover:scale-110
            transition-transform
            duration-700
            "
          />

          <div className="absolute inset-0 bg-primary/20" />

        </div>

        <div className="p-8">

          <span
            className="
            text-accent
            text-xs
            uppercase
            tracking-[0.25em]
            "
          >
            {project.category}
          </span>

          <h3
            className="
            text-2xl
            font-bold
            text-primary
            mt-3
            mb-4
            "
          >
            {project.title}
          </h3>

          <p className="text-text-muted mb-8">
            {project.description}
          </p>

          <div
            className="
            flex
            items-center
            gap-3
            text-primary
            font-medium
            "
          >
            View Project
            <ArrowRight
              size={16}
              className="
              group-hover:translate-x-1
              transition-transform
              "
            />
          </div>

        </div>

      </article>

    </Link>
  );
}