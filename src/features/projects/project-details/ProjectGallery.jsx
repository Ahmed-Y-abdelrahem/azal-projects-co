'use client';

export function ProjectGallery({ project }) {

  if (!project.gallery?.length) return null;

  return (
    <section className="section-padding bg-gray-50">

      <div className="container-xl">

        <h2 className="text-4xl font-bold mb-12">
          Project Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {project.gallery.map((image) => (
            <img
              key={image}
              src={image}
              alt={project.title}
              className="h-80 w-full object-cover"
            />
          ))}

        </div>

      </div>

    </section>
  );
}