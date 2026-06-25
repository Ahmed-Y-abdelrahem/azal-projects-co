'use client';

export function ProjectResults({ project }) {

  if (!project.results) return null;

  return (
    <section className="section-padding bg-gray-50">

      <div className="container-xl">

        <h2 className="text-4xl font-bold mb-12">
          Results
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {project.results.map((result) => (
            <div
              key={result}
              className="border p-6"
            >
              {result}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}