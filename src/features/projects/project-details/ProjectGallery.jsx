'use client';

import Image from 'next/image';


export function ProjectGallery({ project }) {


  if (!project.gallery?.length) return null;


  return (

    <section className="section-padding bg-gray-50">


      <div className="container-xl">


        <h2
          className="
          text-4xl
          font-bold
          mb-12
          "
        >
          Project Gallery
        </h2>



        <div
          className="
          grid
          md:grid-cols-3
          gap-8
          "
        >


          {project.gallery.map((image,index)=>(


            <div
            key={index}
            className="
            relative
            h-80
            overflow-hidden
            group
            "
            >


              <Image

              src={image}

              alt={`${project.galleryAlt} - image ${index + 1}`}

              fill

              className="
              object-cover
              group-hover:scale-110
              transition-transform
              duration-700
              "

              />


            </div>


          ))}



        </div>


      </div>


    </section>

  );
}