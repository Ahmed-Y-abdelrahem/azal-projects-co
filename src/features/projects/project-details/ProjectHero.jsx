'use client';

export function ProjectHero({ project }) {
  return (
    <section className="relative h-[70vh]">

      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 h-full flex items-center">

        <div className="container-xl">

          <span className="text-accent uppercase tracking-[3px]">
            {project.category}
          </span>

          <h1 className="text-5xl text-white font-bold mt-4">
            {project.title}
          </h1>

          <p className="text-white/70 mt-4">
            {project.location}
          </p>

        </div>

      </div>

    </section>
  );
}