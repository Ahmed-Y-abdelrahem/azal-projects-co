'use client';

export function JobDescription({ job }) {
  if (!job) return null;

  return (
    <section className="section-padding">

      <div className="container-xl max-w-4xl">

        <h2 className="text-4xl font-bold mb-8">
          Job Description
        </h2>

        <p className="text-lg leading-relaxed text-gray-600">
          {job.description}
        </p>

      </div>

    </section>
  );
}