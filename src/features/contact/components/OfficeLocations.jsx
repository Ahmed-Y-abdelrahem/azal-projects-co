'use client';

export function OfficeLocations() {
  return (
    <section className="section-padding">

      <div className="container-xl">

        <h2 className="text-4xl font-bold mb-12 text-center">
          Office Locations
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="border p-8">
            <h3 className="text-2xl font-bold mb-4">
              Riyadh Office
            </h3>

            <p>
              King Fahd Road
              <br />
              Riyadh, Saudi Arabia
            </p>
          </div>

          <div className="border p-8">
            <h3 className="text-2xl font-bold mb-4">
              Eastern Province Office
            </h3>

            <p>
              Al Khobar
              <br />
              Saudi Arabia
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}