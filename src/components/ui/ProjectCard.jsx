'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';


export default function ProjectCard({
  project,
}) {


  return (

    <Link
      href={`/projects/${project.slug}`}
      className="block h-full"
    >


      <article

        className="
        group
        relative
        h-full
        bg-white
        border
        border-border
        overflow-hidden
        transition-all
        duration-700
        hover:-translate-y-3
        hover:shadow-[0_35px_70px_rgba(0,0,0,0.15)]
        "

      >


        {/* Top Accent Line */}

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
          z-20
          "

        />



        {/* Image */}

        <div

          className="
          relative
          h-80
          overflow-hidden
          "

        >


          <Image

            src={project.image}

            alt={project.imageAlt}

            fill

            className="
            object-cover
            transition-transform
            duration-[1200ms]
            group-hover:scale-110
            "

          />


          {/* Dark Overlay */}

          <div

            className="
            absolute
            inset-0
            bg-gradient-to-t
            from-primary/80
            via-primary/20
            to-transparent
            opacity-70
            group-hover:opacity-90
            transition-opacity
            duration-500
            "

          />



          {/* Category */}

          <div

            className="
            absolute
            top-6
            left-6
            "

          >

            <span

              className="
              inline-flex
              bg-white/90
              backdrop-blur-sm
              px-4
              py-2
              text-xs
              uppercase
              tracking-[0.25em]
              font-semibold
              text-primary
              "

            >

              {project.category}

            </span>


          </div>



          {/* Hover View */}

          <div

            className="
            absolute
            bottom-6
            left-6
            opacity-0
            translate-y-5
            group-hover:opacity-100
            group-hover:translate-y-0
            transition-all
            duration-500
            "

          >

            <span

              className="
              text-white
              text-sm
              tracking-widest
              uppercase
              "

            >

              Explore Project

            </span>


          </div>



        </div>





        {/* Content */}

        <div className="p-8">


          <h3

            className="
            text-2xl
            font-bold
            text-primary
            mb-4
            transition-colors
            duration-300
            group-hover:text-accent
            "

          >

            {project.title}

          </h3>




          <p

            className="
            text-text-muted
            leading-relaxed
            mb-8
            line-clamp-3
            "

          >

            {project.description}

          </p>





          <div

            className="
            flex
            items-center
            justify-between
            border-t
            border-border
            pt-6
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

              View Details

            </span>




            <div

              className="
              w-11
              h-11
              flex
              items-center
              justify-center
              border
              border-border
              transition-all
              duration-500
              group-hover:bg-primary
              group-hover:border-primary
              "

            >


              <ArrowRight

                size={18}

                className="
                transition-all
                duration-500
                group-hover:text-white
                group-hover:translate-x-1
                "

              />


            </div>



          </div>



        </div>



      </article>


    </Link>

  );

}