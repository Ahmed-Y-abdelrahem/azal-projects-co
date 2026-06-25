'use client';

import Link from 'next/link';

export function ServiceCTA() {
  return (
    <section className="py-20 bg-primary">
      <div className="container-xl text-center">

        <h2 className="font-display text-4xl text-white mb-6">
          Need Expert Engineering Support?
        </h2>

        <p className="text-white/70 max-w-2xl mx-auto mb-10">
          Contact AZAL Projects today to discuss your
          project requirements and receive a tailored
          engineering solution.
        </p>

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