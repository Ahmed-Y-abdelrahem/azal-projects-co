'use client';

export function ContactInfo() {
  return (
    <section className="section-padding">

      <div className="container-xl">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border p-8">
            <h3 className="text-2xl font-bold mb-4">
              Phone
            </h3>

            <p>+966 XX XXX XXXX</p>
          </div>

          <div className="border p-8">
            <h3 className="text-2xl font-bold mb-4">
              Email
            </h3>

            <p>info@azalprojects.com</p>
          </div>

          <div className="border p-8">
            <h3 className="text-2xl font-bold mb-4">
              Office
            </h3>

            <p>Riyadh, Saudi Arabia</p>
          </div>

        </div>

      </div>

    </section>
  );
}