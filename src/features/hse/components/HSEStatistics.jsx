'use client';

const stats = [
  {
    value: '500K+',
    label: 'Safe Working Hours',
  },
  {
    value: '0',
    label: 'Major Incidents',
  },
  {
    value: '100%',
    label: 'Compliance Rate',
  },
  {
    value: '1000+',
    label: 'Safety Trainings',
  },
];

export function HSEStatistics() {
  return (
    <section className="section-padding bg-primary text-white">

      <div className="container-xl">

        <div className="grid md:grid-cols-4 gap-10">

          {stats.map((item) => (
            <div
              key={item.label}
              className="text-center"
            >
              <h3 className="text-5xl font-bold text-accent mb-4">
                {item.value}
              </h3>

              <p className="text-white/70">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}