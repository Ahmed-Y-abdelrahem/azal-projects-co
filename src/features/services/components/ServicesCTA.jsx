'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import {
  FadeIn,
  GoldLine,
  SectionLabel,
} from '@/components/ui';



export function ServicesCTA() {


  return (


    <section className="
    relative
    overflow-hidden
    bg-white
    py-24
    border-t
    border-border
    ">



      <div className="
      absolute
      inset-0
      pointer-events-none
      ">


        <div

          className="
          absolute
          right-0
          top-0
          w-[450px]
          h-[450px]
          bg-accent/10
          blur-[130px]
          rounded-full
          "

        />


        <div

          className="
          absolute
          left-0
          bottom-0
          w-[300px]
          h-[300px]
          bg-primary/5
          blur-[100px]
          rounded-full
          "

        />


      </div>







      <div className="
      container-xl
      relative
      ">





        <FadeIn>


          <div className="
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-12
          ">







            <div className="
            max-w-3xl
            ">



              <SectionLabel>

                Let's Work Together

              </SectionLabel>






              <h2 className="
              mt-6
              font-display
              text-3xl
              lg:text-4xl
              font-bold
              text-primary
              leading-tight
              ">


                Ready To Start Your


                <span className="
                block
                text-gradient-gold
                ">

                  Next Engineering Project

                </span>


              </h2>






              <GoldLine className="mt-8"/>







              <p className="
              mt-7
              text-text-muted
              text-lg
              leading-relaxed
              max-w-2xl
              ">


                Partner with AZAL Projects for reliable
                ground engineering solutions built with
                precision, safety, and technical expertise.


              </p>





            </div>








            <div className="
            flex
            flex-col
            gap-4
            shrink-0
            ">





              <Link

                href="/contact"

                className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                bg-primary
                text-white
                px-10
                py-5
                text-sm
                font-semibold
                uppercase
                tracking-wider
                hover:bg-accent
                hover:text-primary
                transition-all
                duration-300
                "

              >

                Request Consultation


                <ArrowRight

                  size={17}

                  className="
                  group-hover:translate-x-1
                  transition-transform
                  "

                />


              </Link>





              <Link

                href="/projects"

                className="
                text-center
                text-primary
                text-sm
                font-semibold
                uppercase
                tracking-wider
                hover:text-accent
                transition-colors
                "

              >

                Explore Projects


              </Link>





            </div>






          </div>






        </FadeIn>






      </div>







    </section>


  );

}