'use client';

import Image from 'next/image';

export function ProjectHero({ project }) {
  return (
    <section className="relative h-[70vh] overflow-hidden">

      <Image

src={project.image}

alt={project.imageAlt}

fill

priority

className="
object-cover
"

/>

      <div className="absolute inset-0 bg-black/60" />


      <div className="
      relative
      z-10
      h-full
      flex
      items-center
      ">

        <div className="container-xl">

          <span
            className="
            text-accent
            uppercase
            tracking-[3px]
            text-sm
            "
          >
            {project.category}
          </span>


          <h1
            className="
            text-5xl
            lg:text-6xl
            text-white
            font-bold
            mt-5
            "
          >
            {project.title}
          </h1>


          <p
            className="
            text-white/70
            mt-5
            text-lg
            "
          >
            {project.location}
          </p>


        </div>


      </div>


    </section>
  );
}