'use client';

import Link from 'next/link';

export function HSECTA() {
  return (
    <section className="py-24 bg-primary text-white">

      <div className="container-xl text-center">

        <h2 className="text-5xl font-bold mb-6">
          Safety Starts With The Right Partner
        </h2>

        <p className="max-w-2xl mx-auto text-white/70 mb-10">
          Partner with AZAL Projects to ensure safe,
          compliant and efficient project execution.
        </p>

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