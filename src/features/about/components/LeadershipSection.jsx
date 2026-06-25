'use client';

import {
  FadeIn,
  GoldLine,
  SectionLabel,
  SectionTitle,
  StaggerContainer,
  StaggerItem,
} from '../../../components/ui';

import { LEADERSHIP } from '@/data/leadership';


export function LeadershipSection() {

  return (

    <section className="section-padding bg-white relative overflow-hidden">


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





        <FadeIn className="text-center max-w-3xl mx-auto mb-20">


          <SectionLabel>
            Leadership
          </SectionLabel>



          <SectionTitle className="mt-5 mb-6">

            Experienced

            <span className="text-gradient-gold">
              Leadership Team
            </span>

          </SectionTitle>



          <GoldLine className="mx-auto" />



          <p className="
          mt-7
          text-text-muted
          text-lg
          leading-relaxed
          "
          >

            A strong leadership structure combining
            engineering expertise, project execution,
            and safety-driven excellence.

          </p>



        </FadeIn>








        <StaggerContainer

          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
          items-stretch
          "

          staggerDelay={0.1}

        >



          {LEADERSHIP.map((leader)=>{


            const Icon = leader.icon;



            return (


              <StaggerItem
                key={leader.id}
                className="h-full"
              >



                <article

                  className="
                  group
                  relative
                  h-full
                  min-h-[420px]
                  bg-background
                  border
                  border-border
                  p-8
                  flex
                  flex-col
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







                  <div

                    className="
                    absolute
                    top-5
                    right-5
                    text-[100px]
                    font-black
                    leading-none
                    text-primary/[0.04]
                    "

                  >

                    {leader.id}

                  </div>








                  <div

                    className="
                    relative
                    w-24
                    h-24
                    shrink-0
                    mx-auto
                    mb-8
                    bg-primary
                    flex
                    items-center
                    justify-center
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

                      size={38}

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
                    text-primary
                    font-bold
                    text-lg
                    text-center
                    uppercase
                    tracking-wide
                    mb-3
                    "

                  >

                    {leader.name}

                  </h3>






                  <p

                    className="
                    text-accent
                    text-sm
                    font-semibold
                    text-center
                    mb-6
                    "

                  >

                    {leader.role}

                  </p>








                  <p

                    className="
                    text-text-muted
                    text-sm
                    leading-relaxed
                    text-center
                    min-h-[72px]
                    "

                  >

                    {leader.description}

                  </p>







                  <div

                    className="
                    mt-auto
                    pt-8
                    "

                  >

                    <div

                      className="
                      h-px
                      bg-border
                      w-full
                      "

                    />


                  </div>







                  <div

                    className="
                    absolute
                    bottom-0
                    left-0
                    h-1
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