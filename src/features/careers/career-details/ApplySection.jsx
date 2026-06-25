'use client';

import Link from 'next/link';

export function ApplySection({ job }) {
  if (!job) return null;

  return (
    <section className="py-24 bg-primary text-white">

      <div className="container-xl text-center">

        <h2 className="text-4xl font-bold mb-6">
          Apply For This Position
        </h2>

        <p className="max-w-2xl mx-auto text-white/70 mb-10">
          Interested in joining our team?
          Contact our HR department and reference
          the position title:
        </p>

        <h3 className="text-2xl font-semibold mb-10">
          {job.title}
        </h3>

        <Link
          href="/contact"
          className="btn-primary"
        >
          Apply Now
        </Link>

      </div>

    </section>
  );
}