'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {

  const [visible, setVisible] = useState(false);


  useEffect(() => {

    const handler = () => {
      setVisible(window.scrollY > 400);
    };


    window.addEventListener(
      'scroll',
      handler
    );


    return () =>
      window.removeEventListener(
        'scroll',
        handler
      );

  }, []);



  return (

    <div
      className="
      fixed
      bottom-6
      right-6
      z-50
      flex
      flex-col
      gap-4
      "
    >


      {/* WhatsApp */}

      <a
        href="https://wa.me/966547264860"
        target="_blank"
        rel="noopener noreferrer"

        className="
        w-14
        h-14
        rounded-full
        bg-green-500
        flex
        items-center
        justify-center
        shadow-xl
        hover:scale-110
        transition-all
        duration-300
        "
      >


        <svg
          viewBox="0 0 32 32"
          className="
          w-8
          h-8
          fill-white
          "
        >

          <path d="
          M16.01 3C8.83 3 3 8.7 3 15.75c0 2.77.88 5.34 2.37 7.42L4 29l5.99-1.94a13.1 13.1 0 0 0 6.02 1.46h.01c7.18 0 13.01-5.7 13.01-12.75S23.19 3 16.01 3zm0 23.08c-1.94 0-3.84-.52-5.49-1.51l-.39-.23-3.55 1.15 1.16-3.43-.25-.4a10.46 10.46 0 0 1-1.62-5.56c0-5.78 4.7-10.48 10.47-10.48 5.77 0 10.47 4.7 10.47 10.48 0 5.78-4.7 10.48-10.8 10.48z
          "/>


        </svg>


      </a>



      {/* Scroll Top */}

      {visible && (

        <button

          onClick={() =>
            window.scrollTo({
              top:0,
              behavior:'smooth',
            })
          }


          className="
          w-14
          h-14
          rounded-full
          bg-accent
          text-primary
          flex
          items-center
          justify-center
          shadow-xl
          hover:scale-110
          transition-all
          duration-300
          "

        >

          <ArrowUp
            size={32}
            strokeWidth={3}
          />


        </button>

      )}


    </div>

  );
}