import Link from 'next/link';
import Image from 'next/image';

import logo from '@/assets/logos/logo.png';

import {
  Linkedin,
  Mail,
  Phone,
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
      {/* Pattern */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.03]
      "
        style={{
          backgroundImage: `
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
        `,
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
                href="#"
                className="
                w-10
                h-10
                rounded-full
                bg-white/10
                flex
                items-center
                justify-center
                hover:bg-accent
                hover:text-primary
                transition-all
              "
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:info@azalprojects.com"
                className="
                w-10
                h-10
                rounded-full
                bg-white/10
                flex
                items-center
                justify-center
                hover:bg-accent
                hover:text-primary
                transition-all
              "
              >
                <Mail size={18} />
              </a>

              <a
                href="tel:+966000000000"
                className="
                w-10
                h-10
                rounded-full
                bg-white/10
                flex
                items-center
                justify-center
                hover:bg-accent
                hover:text-primary
                transition-all
              "
              >
                <Phone size={18} />
              </a>

            </div>

          </div>

          {/* Company */}

          <div>

            <h4 className="font-bold mb-6">
              Company
            </h4>

            <div className="space-y-3 text-white/70">

              <Link href="/about">
                About Us
              </Link>

              <br />

              <Link href="/services">
                Services
              </Link>

              <br />

              <Link href="/projects">
                Projects
              </Link>

              <br />

              <Link href="/careers">
                Careers
              </Link>

            </div>

          </div>

          {/* Services */}

          <div>

            <h4 className="font-bold mb-6">
              Services
            </h4>

            <div className="space-y-3 text-white/70">

              <p>Shoring Systems</p>

              <p>Excavation</p>

              <p>Dewatering</p>

              <p>Trench Shuttering</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h4 className="font-bold mb-6">
              Contact
            </h4>

            <div className="space-y-4 text-white/70">

              <p>
                Riyadh, Saudi Arabia
              </p>

              <p>
                info@azalprojects.com
              </p>

              <p>
                +966 000 000 000
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}

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
          items-center
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