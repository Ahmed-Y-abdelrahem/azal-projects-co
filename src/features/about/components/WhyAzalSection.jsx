'use client';

import {
  FadeIn,
  GoldLine,
  SectionLabel,
  SectionTitle,
  StaggerContainer,
  StaggerItem,
} from '../../../components/ui';

import { WHY_AZAL } from '@/data/whyAzal';


export function WhyAzalSection() {

  return (

    <section className="section-padding bg-primary relative overflow-hidden">


      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
          absolute
          -top-40
          right-0
          w-[450px]
          h-[450px]
          rounded-full
          bg-accent/10
          blur-[130px]
          "
        />

      </div>





      <div className="container-xl relative">





        <FadeIn className="text-center max-w-3xl mx-auto mb-16">


          <SectionLabel light>
            Why Choose AZAL
          </SectionLabel>



          <SectionTitle light className="mt-5 mb-5">

            Your Trusted

            <span className="text-accent">
              Engineering Partner
            </span>

          </SectionTitle>



          <GoldLine className="mx-auto"/>



          <p
            className="
            mt-6
            text-white/60
            text-base
            leading-relaxed
            "
          >

            Combining engineering expertise, safety culture,
            and reliable execution to deliver successful projects.

          </p>


        </FadeIn>









        <StaggerContainer

          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-5
          "

          staggerDelay={0.08}

        >





          {WHY_AZAL.map((item)=>{


            const Icon = item.icon;


            return (


              <StaggerItem
                key={item.id}
              >


                <article

                  className="
                  group
                  relative
                  h-full
                  bg-white/[0.04]
                  border
                  border-white/10
                  p-6
                  overflow-hidden
                  hover:bg-white/[0.08]
                  transition-all
                  duration-500
                  "

                >



                  <div

                    className="
                    absolute
                    top-0
                    left-0
                    h-[2px]
                    w-0
                    bg-accent
                    group-hover:w-full
                    transition-all
                    duration-700
                    "

                  />







                  <div

                    className="
                    w-11
                    h-11
                    bg-accent
                    flex
                    items-center
                    justify-center
                    mb-5
                    "

                  >


                    <Icon

                      size={22}

                      className="text-primary"

                    />


                  </div>








                  <h3

                    className="
                    text-white
                    font-semibold
                    text-base
                    mb-3
                    leading-snug
                    "

                  >

                    {item.title}

                  </h3>








                  <p

                    className="
                    text-white/55
                    text-sm
                    leading-relaxed
                    "

                  >

                    {item.description}

                  </p>








                  <div

                    className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    bg-accent
                    w-0
                    group-hover:w-full
                    transition-all
                    duration-700
                    "

                  />



                </article>


              </StaggerItem>


            );


          })}



        </StaggerContainer>





      </div>



    </section>

  );

}