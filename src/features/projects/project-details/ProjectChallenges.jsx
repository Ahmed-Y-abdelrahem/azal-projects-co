'use client';

export function ProjectChallenges({ project }) {
  return (
    <section className="section-padding">

      <div className="container-xl">

        <div className="grid lg:grid-cols-2 gap-10">

          <div>

            <h2 className="text-4xl font-bold mb-6">
              Challenge
            </h2>

            <p className="text-gray-600 leading-relaxed">
              {project.challenge}
            </p>

          </div>

          <div>

            <h2 className="text-4xl font-bold mb-6">
              Solution
            </h2>

            <p className="text-gray-600 leading-relaxed">
              {project.solution}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}