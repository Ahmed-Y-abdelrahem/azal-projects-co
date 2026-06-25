'use client';

export function ProjectOverview({ project }) {
  return (
    <section className="section-padding">

      <div className="container-xl">

        <h2 className="text-4xl font-bold mb-8">
          Project Overview
        </h2>

        <p className="text-lg leading-relaxed text-gray-600">
          {project.overview}
        </p>

      </div>

    </section>
  );
}