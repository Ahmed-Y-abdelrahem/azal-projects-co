'use client';

const certifications = [
  'ISO 45001',
  'ISO 14001',
  'ISO 9001',
  'Saudi Building Code Compliance',
];

export function CertificationsSection() {
  return (
    <section className="section-padding">

      <div className="container-xl">

        <h2 className="text-4xl font-bold mb-12">
          Certifications & Compliance
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {certifications.map((item) => (
            <div
              key={item}
              className="border p-8 rounded-xl text-center"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}