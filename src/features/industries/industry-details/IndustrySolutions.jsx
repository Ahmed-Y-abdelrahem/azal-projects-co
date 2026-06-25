'use client';

export function IndustrySolutions({ industry }) {
  return (
    <section className="section-padding">
      <div className="container-xl">

        <h2 className="text-4xl font-bold mb-12">
          AZAL Solutions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {industry.solutions.map((item) => (
            <div
              key={item}
              className="border p-6"
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}