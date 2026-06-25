'use client';

export function JobRequirements({ job }) {
  if (!job) return null;

  return (
    <section className="section-padding bg-gray-50">

      <div className="container-xl">

        <h2 className="text-4xl font-bold mb-12">
          Requirements
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {job.requirements.map((item) => (
            <div
              key={item}
              className="bg-white border p-6"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}