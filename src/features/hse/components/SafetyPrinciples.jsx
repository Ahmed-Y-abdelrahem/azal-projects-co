'use client';

const principles = [
  'Zero Harm Culture',
  'Risk Assessment',
  'Environmental Protection',
  'Incident Prevention',
  'Continuous Training',
  'Regulatory Compliance',
];

export function SafetyPrinciples() {
  return (
    <section className="section-padding">

      <div className="container-xl">

        <h2 className="text-4xl font-bold mb-12">
          Safety Principles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {principles.map((item) => (
            <div
              key={item}
              className="border border-gray-200 p-8 rounded-xl"
            >
              <h3 className="font-semibold text-xl">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}