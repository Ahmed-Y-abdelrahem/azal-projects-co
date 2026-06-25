'use client';

import Link from 'next/link';

export function ProjectCTA() {
  return (
    <section className="py-24 bg-primary">

      <div className="container-xl text-center">

        <h2 className="text-4xl text-white font-bold mb-6">
          Start Your Next Project With AZAL
        </h2>

        <Link
          href="/contact"
          className="btn-primary"
        >
          Request Consultation
        </Link>

      </div>

    </section>
  );
}