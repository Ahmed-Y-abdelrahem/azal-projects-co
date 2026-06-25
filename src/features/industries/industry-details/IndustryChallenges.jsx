'use client';

export function IndustryChallenges({ industry }) {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-xl">

        <h2 className="text-4xl font-bold mb-12">
          Key Challenges
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {industry.challenges.map((item) => (
            <div
              key={item}
              className="p-6 border"
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}