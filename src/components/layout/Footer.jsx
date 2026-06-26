'use client';

import Link from 'next/link';
import Image from 'next/image';

import logo from '@/assets/logos/logo.png';

import { SOCIALS } from '@/data/socials';

import {
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  MessageCircle,
} from 'lucide-react';


export function Footer() {

  return (

    <footer
      className="
      relative
      bg-primary
      text-white
      overflow-hidden
      "
    >


      <div
        className="
        absolute
        inset-0
        opacity-[0.03]
        "
        style={{
          backgroundImage:`
          repeating-linear-gradient(
          0deg,
          transparent,
          transparent 80px,
          white 80px,
          white 81px
          ),
          repeating-linear-gradient(
          90deg,
          transparent,
          transparent 80px,
          white 80px,
          white 81px
          )
          `
        }}
      />


      <div className="relative container-xl py-24">


        <div className="grid lg:grid-cols-4 gap-12">



          {/* Company */}


          <div>


            <Image
              src={logo}
              alt="AZAL Projects"
              width={150}
              className="mb-6"
            />


            <p className="text-white/70 leading-relaxed mb-6">

              Specialized Ground Engineering,
              Shoring Systems, Excavation,
              Dewatering & Infrastructure
              Solutions across Saudi Arabia.

            </p>



            <div className="flex gap-3">


              <a
                href={SOCIALS.linkedin}
                target="_blank"
                className="
                w-10 h-10
                rounded-full
                bg-white/10
                flex items-center justify-center
                hover:bg-accent
                hover:text-primary
                transition
                "
              >
                <Linkedin size={18}/>
              </a>



              <a
                href={SOCIALS.facebook}
                target="_blank"
                className="
                w-10 h-10
                rounded-full
                bg-white/10
                flex items-center justify-center
                hover:bg-accent
                hover:text-primary
                transition
                "
              >
                <Facebook size={18}/>
              </a>



              <a
                href={SOCIALS.instagram}
                target="_blank"
                className="
                w-10 h-10
                rounded-full
                bg-white/10
                flex items-center justify-center
                hover:bg-accent
                hover:text-primary
                transition
                "
              >
                <Instagram size={18}/>
              </a>



              <a
                href={SOCIALS.whatsapp}
                target="_blank"
                className="
                w-10 h-10
                rounded-full
                bg-white/10
                flex items-center justify-center
                hover:bg-accent
                hover:text-primary
                transition
                "
              >
                <Mail size={18}/>
              </a>


            </div>



          </div>






          {/* Company Links */}


          <div>


            <h4 className="font-bold mb-6">
              Company
            </h4>


            <div className="space-y-3">


              <Link
                className="block text-white/70 hover:text-accent"
                href="/about"
              >
                About Us
              </Link>


              <Link
                className="block text-white/70 hover:text-accent"
                href="/services"
              >
                Services
              </Link>


              <Link
                className="block text-white/70 hover:text-accent"
                href="/projects"
              >
                Projects
              </Link>


              <Link
                className="block text-white/70 hover:text-accent"
                href="/careers"
              >
                Careers
              </Link>


            </div>

          </div>







          {/* Services */}


          <div>


            <h4 className="font-bold mb-6">
              Services
            </h4>


            <div className="space-y-3">


              <Link
              href="/services/shoring-systems"
              className="block text-white/70 hover:text-accent"
              >
              Shoring Systems
              </Link>



              <Link
              href="/services/excavation-earthwork"
              className="block text-white/70 hover:text-accent"
              >
              Excavation & Earthwork
              </Link>




              <Link
              href="/services/dewatering"
              className="block text-white/70 hover:text-accent"
              >
              Dewatering
              </Link>





              <Link
              href="/services/trench-shuttering"
              className="block text-white/70 hover:text-accent"
              >
              Trench Shuttering
              </Link>



            </div>


          </div>









          {/* Contact */}



          <div>


          <h4 className="font-bold mb-6">
            Contact
          </h4>



          <div className="space-y-5 text-white/70">


          <p className="flex gap-3 items-center">

          <MapPin
          size={18}
          className="text-accent"
          />

          Khobar, Saudi Arabia

          </p>




          <a
          href="mailto:info@azalprojects.com"
          className="flex gap-3 items-center hover:text-accent"
          >

          <Mail
          size={18}
          className="text-accent"
          />

          info@azalprojects.com

          </a>





          <a
          href="tel:+966547264860"
          className="flex gap-3 items-center hover:text-accent"
          >

          <Phone
          size={18}
          className="text-accent"
          />

          +966 54 726 4860

          </a>




          </div>


          </div>



        </div>





        <div
        className="
        border-t
        border-white/10
        mt-16
        pt-8
        flex
        flex-col
        lg:flex-row
        justify-between
        gap-4
        "
        >


        <p className="text-white/50 text-sm">

        © 2026 AZAL Projects.
        All Rights Reserved.

        </p>


        <p className="text-white/40 text-sm">

        Engineering Excellence • Safety First • Sustainable Solutions

        </p>


        </div>




      </div>



    </footer>

  );

}