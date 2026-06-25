'use client';

export function IndustryHero({ industry }) {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container-xl">

        <h1 className="text-5xl font-bold mb-6">
          {industry.title}
        </h1>

        <p className="max-w-3xl text-xl">
          {industry.description}
        </p>

      </div>
    </section>
  );
}