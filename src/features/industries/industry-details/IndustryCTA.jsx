'use client';

import Link from 'next/link';

export function IndustryCTA() {
  return (
    <section className="py-20 bg-primary">
      <div className="container-xl text-center">

        <h2 className="text-4xl text-white mb-8">
          Discuss Your Industry Requirements
        </h2>

        <Link
          href="/contact"
          className="btn-primary"
        >
          Contact Us
        </Link>

      </div>
    </section>
  );
}