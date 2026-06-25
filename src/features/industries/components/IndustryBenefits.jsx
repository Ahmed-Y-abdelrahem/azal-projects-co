'use client';

import {
  ShieldCheck,
  Award,
  Settings,
  Clock,
  MapPin,
} from 'lucide-react';

import {
  FadeIn,
  GoldLine,
  SectionLabel,
  SectionTitle,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui';

import { INDUSTRY_BENEFITS } from '@/data/industries';


const iconMap = [
  ShieldCheck,
  Settings,
  Award,
  Clock,
  MapPin,
];


export function IndustryBenefits() {


  return (

    <section className="section-padding bg-background">

      <div className="container-xl">


        <FadeIn className="max-w-3xl mb-16">


          <SectionLabel>
            Why AZAL
          </SectionLabel>


          <SectionTitle className="mt-4 mb-6">

            Built Around

            <span className="text-gradient-gold">
              Engineering Excellence
            </span>

          </SectionTitle>


          <GoldLine />


        </FadeIn>





        <StaggerContainer

          className="
          grid
          md:grid-cols-2
          lg:grid-cols-5
          gap-6
          "

          staggerDelay={0.1}

        >


          {INDUSTRY_BENEFITS.map((item,index)=>{


            const Icon = iconMap[index];


            return (


              <StaggerItem
                key={item.id}
              >


                <article

                  className="
                  group
                  bg-white
                  border
                  border-border
                  p-6
                  h-full
                  hover:-translate-y-2
                  hover:shadow-xl
                  transition-all
                  duration-500
                  "

                >



                  <div

                    className="
                    w-12
                    h-12
                    bg-primary
                    flex
                    items-center
                    justify-center
                    mb-6
                    group-hover:bg-accent
                    transition-colors
                    "

                  >

                    <Icon

                      size={22}

                      className="
                      text-white
                      group-hover:text-primary
                      transition-colors
                      "

                    />


                  </div>





                  <h3

                    className="
                    text-primary
                    font-bold
                    mb-3
                    "

                  >

                    {item.title}


                  </h3>





                  <p

                    className="
                    text-text-muted
                    text-sm
                    leading-relaxed
                    "

                  >

                    {item.description}


                  </p>




                </article>



              </StaggerItem>


            );


          })}


        </StaggerContainer>



      </div>

    </section>

  );

}