export default function Loading() {
  return (
    <div
      className="
      fixed
      inset-0
      z-[9999]
      flex
      items-center
      justify-center
      bg-primary
      "
    >

      <div
        className="
        flex
        flex-col
        items-center
        "
      >

        {/* Logo Text */}

        <div
          className="
          text-white
          text-5xl
          font-black
          tracking-[8px]
          mb-8
          "
        >
          AZAL
        </div>


        {/* Loader */}

        <div
          className="
          relative
          w-20
          h-20
          "
        >

          <div
            className="
            absolute
            inset-0
            rounded-full
            border-4
            border-white/20
            "
          />


          <div
            className="
            absolute
            inset-0
            rounded-full
            border-4
            border-accent
            border-t-transparent
            animate-spin
            "
          />


        </div>



        <p
          className="
          mt-8
          text-white/60
          uppercase
          tracking-[4px]
          text-sm
          "
        >
          Engineering Excellence
        </p>


      </div>


    </div>
  );
}