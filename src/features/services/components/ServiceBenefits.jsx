'use client';

export function ServiceBenefits({ service }) {

  if (!service) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-xl">

        <h2 className="text-4xl font-bold mb-12">
          Benefits
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {service.benefits.map((item) => (
            <div
              key={item}
              className="p-6 border border-border"
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}