'use client';

import {
  FadeIn,
  GoldLine,
  SectionLabel,
  SectionTitle,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui';


import ProjectCard from '@/components/ui/ProjectCard';


import { PROJECTS } from '@/data/projects';



export function ProjectsGrid() {


  return (


    <section className="
    section-padding
    bg-background
    ">


      <div className="container-xl">





        <FadeIn className="
        max-w-3xl
        mb-16
        ">


          <SectionLabel>
            Our Projects
          </SectionLabel>



          <SectionTitle className="mt-5">


            Engineering Projects

            <span className="
            text-gradient-gold
            ">

              Delivered With Excellence

            </span>


          </SectionTitle>



          <GoldLine className="mt-7"/>



          <p className="
          mt-7
          text-text-muted
          text-lg
          leading-relaxed
          max-w-2xl
          ">


            Explore AZAL Projects across infrastructure,
            utilities, and ground engineering sectors,
            delivering reliable solutions with safety
            and technical precision.


          </p>



        </FadeIn>







        <StaggerContainer

          className="
          grid
          lg:grid-cols-2
          gap-8
          "

          staggerDelay={0.12}

        >




          {PROJECTS.map((project)=>(


            <StaggerItem

              key={project.id}

            >


              <ProjectCard

                project={project}

              />


            </StaggerItem>



          ))}





        </StaggerContainer>





      </div>


    </section>


  );

}