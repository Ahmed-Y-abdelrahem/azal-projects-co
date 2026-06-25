'use client';

import {
  FadeIn,
  GoldLine,
  SectionLabel,
  SectionTitle,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui';

import { SERVICE_PROCESS } from '@/data/process';


export function ServiceProcess() {


  return (

    <section className="section-padding bg-background relative overflow-hidden">


      <div className="absolute inset-0 pointer-events-none">


        <div
          className="
          absolute
          -top-40
          right-0
          w-[500px]
          h-[500px]
          rounded-full
          bg-accent/10
          blur-[140px]
          "
        />


      </div>





      <div className="container-xl relative">





        <FadeIn className="max-w-3xl mx-auto text-center mb-20">


          <SectionLabel>
            Our Methodology
          </SectionLabel>


          <SectionTitle className="mt-5 mb-6">

            A Proven

            <span className="text-gradient-gold">
              Engineering Process
            </span>

          </SectionTitle>


          <GoldLine className="mx-auto"/>


          <p className="
          mt-6
          text-text-muted
          text-lg
          leading-relaxed
          ">

            A structured approach that ensures safety,
            efficiency, and successful project delivery.

          </p>


        </FadeIn>








        <StaggerContainer

          className="
          grid
          md:grid-cols-2
          lg:grid-cols-5
          gap-6
          "

          staggerDelay={0.12}

        >




          {SERVICE_PROCESS.map((step,index)=>(



            <StaggerItem key={step.id}>


              <article

                className="
                group
                relative
                bg-white
                border
                border-border
                p-7
                h-full
                hover:-translate-y-2
                hover:shadow-xl
                transition-all
                duration-500
                "

              >





                <div

                  className="
                  absolute
                  top-0
                  left-0
                  w-0
                  h-1
                  bg-accent
                  group-hover:w-full
                  transition-all
                  duration-700
                  "

                />






                <div

                  className="
                  text-accent
                  text-5xl
                  font-black
                  mb-6
                  opacity-30
                  group-hover:opacity-100
                  transition-opacity
                  "

                >

                  0{index + 1}

                </div>






                <h3

                  className="
                  text-primary
                  font-bold
                  text-lg
                  mb-4
                  "

                >

                  {step.title}

                </h3>






                <p

                  className="
                  text-text-muted
                  text-sm
                  leading-relaxed
                  "

                >

                  {step.description}

                </p>





              </article>


            </StaggerItem>




          ))}



        </StaggerContainer>





      </div>


    </section>

  );

}