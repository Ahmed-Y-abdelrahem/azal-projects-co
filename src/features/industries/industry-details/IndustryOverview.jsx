'use client';

export function IndustryOverview({ industry }) {
  return (
    <section className="section-padding">
      <div className="container-xl">

        <h2 className="text-4xl font-bold mb-8">
          Industry Overview
        </h2>

        <p className="text-lg leading-relaxed">
          {industry.description}
        </p>

      </div>
    </section>
  );
}