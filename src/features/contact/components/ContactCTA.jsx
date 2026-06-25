'use client';

import Link from 'next/link';

export function ContactCTA() {
  return (
    <section className="py-24 bg-primary">

      <div className="container-xl text-center">

        <h2 className="text-4xl text-white font-bold mb-6">
          Ready To Start Your Project?
        </h2>

        <p className="text-white/70 mb-8">
          Speak with our engineering team today.
        </p>

        <Link
          href="/services"
          className="btn-primary"
        >
          Explore Services
        </Link>

      </div>

    </section>
  );
}