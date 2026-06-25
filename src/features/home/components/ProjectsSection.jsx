'use client';

import Link from 'next/link';

import {
  ArrowRight,
  MapPin,
  Calendar,
  ExternalLink,
} from 'lucide-react';

import { motion } from 'framer-motion';

import {
  FadeIn,
  GoldLine,
  SectionLabel,
  SectionTitle,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui';


import { PROJECTS } from '../../../data/projects.js';




export function ProjectsSection() {


  const featured = PROJECTS.filter(
    (p) => p.featured
  );



  return (


    <section className="section-padding bg-white relative overflow-hidden">



      {/* Background Detail */}

      <div
        className="
        absolute
        top-0
        right-0
        w-[500px]
        h-[500px]
        bg-accent/5
        blur-[120px]
        rounded-full
        "
      />




      <div className="relative container-xl">





        {/* Header */}

        <div
          className="
          flex
          flex-col
          lg:flex-row
          justify-between
          items-start
          gap-10
          mb-5
          "
        >



          <FadeIn className="max-w-3xl">


            <SectionLabel>
              Our Work
            </SectionLabel>



            <SectionTitle className="mt-2">


              Projects That Define
              <br />


              <span className="text-gradient-gold">
                Engineering Excellence
              </span>


            </SectionTitle>




            <GoldLine className="mt-7" />




            <p
              className="
              mt-7
              text-text-muted
              text-lg
              leading-relaxed
              max-w-xl
              "
            >

              Delivering complex ground engineering solutions
              through precision, innovation, and uncompromising
              project execution standards.

            </p>


          </FadeIn>






          <FadeIn
            delay={0.2}
            className="lg:self-end"
          >


            <Link
              href="/projects"
              className="
              group
              inline-flex
              items-center
              gap-3
              bg-primary
              text-white
              px-8
              py-4
              text-sm
              uppercase
              tracking-wider
              font-semibold
              hover:bg-accent
              hover:text-primary
              transition-all
              "
            >


              View All Projects


              <ArrowRight
                size={16}
                className="
                group-hover:translate-x-1
                transition-transform
                "
              />


            </Link>


          </FadeIn>



        </div>









        {/* Projects Grid */}


        <StaggerContainer
          className="
          grid
          lg:grid-cols-3
          gap-8
          "
          staggerDelay={0.12}
        >





          {featured.map((project)=> (



            <StaggerItem
              key={project.id}
            >



              <Link
                href={`/projects/${project.id}`}
              >



                <motion.article

                  whileHover={{
                    y:-10
                  }}


                  className="
                  group
                  bg-white
                  border
                  border-border
                  overflow-hidden
                  transition-all
                  duration-500
                  hover:shadow-2xl
                  "
                >







                  {/* Image */}


                  <div
                    className="
                    relative
                    aspect-[16/10]
                    overflow-hidden
                    "
                  >



                    <img

                      src={project.image}

                      alt={project.title}

                      className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                      "
                    />






                    {/* Dark Overlay */}


                    <div
                      className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-primary/90
                      via-primary/20
                      to-transparent
                      opacity-70
                      group-hover:opacity-90
                      transition-opacity
                      "
                    />







                    {/* Service Badge */}


                    <div
                      className="
                      absolute
                      top-5
                      left-5
                      bg-accent
                      text-primary
                      px-4
                      py-2
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-widest
                      "
                    >

                      {project.service}


                    </div>








                    {/* Hover Action */}


                    <div
                      className="
                      absolute
                      right-5
                      top-5
                      w-10
                      h-10
                      bg-white/20
                      backdrop-blur
                      flex
                      items-center
                      justify-center
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      "
                    >

                      <ExternalLink
                        size={16}
                        className="text-white"
                      />

                    </div>








                    {/* Title Overlay */}


                    <div
                      className="
                      absolute
                      bottom-6
                      left-6
                      right-6
                      "
                    >


                      <h3
                        className="
                        text-white
                        font-display
                        text-xl
                        font-bold
                        leading-tight
                        "
                      >

                        {project.title}


                      </h3>



                    </div>



                  </div>









                  {/* Content */}



                  <div
                    className="
                    p-7
                    "
                  >





                    <p
                      className="
                      text-text-muted
                      text-sm
                      leading-relaxed
                      line-clamp-3
                      mb-6
                      "
                    >

                      {project.description}


                    </p>








                    {/* Meta */}



                    <div
                      className="
                      flex
                      items-center
                      justify-between
                      pt-5
                      border-t
                      border-border
                      text-xs
                      text-text-light
                      "
                    >



                      <span
                        className="
                        flex
                        items-center
                        gap-2
                        "
                      >

                        <MapPin size={13}/>

                        {project.location.split(',')[0]}

                      </span>





                      <span
                        className="
                        flex
                        items-center
                        gap-2
                        "
                      >

                        <Calendar size={13}/>

                        {project.year}

                      </span>



                    </div>





                  </div>








                  {/* Gold Line */}

                  <div
                    className="
                    h-1
                    w-0
                    bg-accent
                    group-hover:w-full
                    transition-all
                    duration-700
                    "
                  />



                </motion.article>



              </Link>



            </StaggerItem>



          ))}



        </StaggerContainer>




      </div>



    </section>


  );

}