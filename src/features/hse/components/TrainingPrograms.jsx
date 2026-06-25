'use client';

const programs = [
  'Site Safety Orientation',
  'Emergency Response Training',
  'Work At Height Training',
  'Excavation Safety Program',
  'Equipment Operation Safety',
  'Environmental Awareness',
];

export function TrainingPrograms() {
  return (
    <section className="section-padding bg-gray-50">

      <div className="container-xl">

        <h2 className="text-4xl font-bold mb-12">
          Training Programs
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {programs.map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-xl border"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}