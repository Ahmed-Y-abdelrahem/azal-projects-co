'use client';

export function ServiceAdvantages({ service }) {
  if (!service) return null;

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-xl">
        <h2 className="text-4xl font-bold mb-12">
          Key Advantages
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {service.benefits?.map((item) => (
            <div
              key={item}
              className="p-6 bg-white border rounded-lg"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}