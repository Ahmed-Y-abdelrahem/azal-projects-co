'use client';

export function JobHero({ job }) {
  if (!job) return null;

  return (
    <section className="bg-primary text-white py-28">

      <div className="container-xl">

        <span className="uppercase tracking-[4px] text-accent">
          Career Opportunity
        </span>

        <h1 className="text-5xl font-bold mt-6 mb-6">
          {job.title}
        </h1>

        <div className="flex flex-wrap gap-6 text-white/70">

          <span>
            📍 {job.location}
          </span>

          <span>
            💼 {job.type}
          </span>

        </div>

      </div>

    </section>
  );
}