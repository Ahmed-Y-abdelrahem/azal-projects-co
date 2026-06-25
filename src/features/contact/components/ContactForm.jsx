'use client';

export function ContactForm() {
  return (
    <section className="section-padding bg-gray-50">

      <div className="container-xl max-w-4xl">

        <h2 className="text-4xl font-bold mb-10 text-center">
          Send Us a Message
        </h2>

        <form className="space-y-6">

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Full Name"
              className="border p-4 w-full"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border p-4 w-full"
            />

          </div>

          <input
            type="text"
            placeholder="Subject"
            className="border p-4 w-full"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="border p-4 w-full"
          />

          <button
            type="submit"
            className="btn-primary"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}