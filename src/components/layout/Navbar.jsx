'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, ArrowRight } from 'lucide-react';

import logo from '@/assets/logos/logo.png';
import { NAVIGATION } from '@/data/navigation';
import { MobileMenu } from './MobileMenu';


export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="
        fixed
        top-0
        left-0
        right-0
        z-50
        bg-white/85
        backdrop-blur-xl
        border-b
        border-slate-200/70
        shadow-sm
      ">
        <div className="container-xl">
          <div className="h-24 flex items-center justify-between">

            <Link href="/" className="flex items-center group">
              <Image
                src={logo}
                alt="AZAL Projects"
                width={110}
                priority
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-10">
              {NAVIGATION.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      relative
                      py-3
                      text-sm
                      font-semibold
                      uppercase
                      tracking-wide
                      transition-colors
                      duration-300
                      ${active ? 'text-primary' : 'text-slate-600 hover:text-primary'}
                    `}
                  >
                    {item.label}

                    <span
                      className={`
                        absolute
                        left-0
                        -bottom-1
                        h-[3px]
                        bg-accent
                        transition-all
                        duration-300
                        ${active ? 'w-full' : 'w-0 group-hover:w-full'}
                      `}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  bg-primary
                  text-white
                  px-6
                  py-3
                  text-xs
                  font-bold
                  uppercase
                  tracking-widest
                  hover:bg-accent
                  hover:text-primary
                  transition-all
                  duration-300
                "
              >
                Contact Us

                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="
                lg:hidden
                w-11
                h-11
                border
                border-slate-200
                flex
                items-center
                justify-center
                hover:border-accent
                transition
              "
            >
              <Menu size={22} className="text-primary" />
            </button>

          </div>
        </div>
      </header>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}