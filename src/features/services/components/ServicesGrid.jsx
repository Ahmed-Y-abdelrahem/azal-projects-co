'use client';

import Link from 'next/link';

import {
  ArrowRight,
} from 'lucide-react';


import {
  SectionLabel,
  SectionTitle,
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui';


import { SERVICES } from '@/data/services';



export function ServicesGrid() {


  return (


    <section className="section-padding bg-white">


      <div className="container-xl">






        <FadeIn className="max-w-3xl mx-auto text-center mb-20">


          <SectionLabel>
            Our Services
          </SectionLabel>




          <SectionTitle className="mt-5">


            Comprehensive Ground

            <span className="text-gradient-gold">
              Engineering Solutions
            </span>


          </SectionTitle>




          <p

            className="
            mt-6
            text-text-muted
            text-lg
            leading-relaxed
            "

          >

            Specialized engineering services designed to support
            complex construction projects across Saudi Arabia
            with safety, precision, and reliability.

          </p>


        </FadeIn>









        <StaggerContainer


          className="
          grid
          lg:grid-cols-2
          gap-10
          "


          staggerDelay={0.12}


        >





          {SERVICES.map((service,index)=>(



            <StaggerItem

              key={service.id}

            >





              <article


                className="
                group
                relative
                bg-background
                border
                border-border
                overflow-hidden
                hover:shadow-2xl
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






                <div className="relative h-64 overflow-hidden">


                  <img

                    src={service.image}

                    alt={service.title}

                    className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-700
                    "

                  />



                  <div

                    className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-primary/70
                    to-transparent
                    "

                  />




                  <div

                    className="
                    absolute
                    bottom-5
                    left-6
                    text-white
                    text-5xl
                    font-black
                    opacity-20
                    "

                  >

                    0{index+1}

                  </div>


                </div>









                <div className="p-8">





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

                    {service.title}


                  </h3>







                  <p

                    className="
                    text-text-muted
                    leading-relaxed
                    mb-6
                    "

                  >

                    {service.longDescription}


                  </p>








                  <div

                    className="
                    flex
                    flex-wrap
                    gap-2
                    mb-8
                    "

                  >



                    {service.features.slice(0,3).map(feature=>(


                      <span

                        key={feature}

                        className="
                        text-xs
                        bg-primary/5
                        text-primary
                        px-3
                        py-2
                        "

                      >

                        {feature}

                      </span>


                    ))}


                  </div>








                  <Link

                    href={`/services/${service.slug}`}

                    className="
                    inline-flex
                    items-center
                    gap-2
                    text-primary
                    text-sm
                    font-semibold
                    uppercase
                    tracking-wider
                    group-hover:text-accent
                    transition-colors
                    "

                  >

                    Explore Service


                    <ArrowRight

                      size={16}

                      className="
                      group-hover:translate-x-1
                      transition-transform
                      "

                    />


                  </Link>







                </div>







              </article>




            </StaggerItem>




          ))}





        </StaggerContainer>






      </div>


    </section>


  );


}