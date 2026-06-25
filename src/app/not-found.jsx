import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center mt-0 bg-gray-50">
      <div className="container-xl text-center">

        <span className="text-accent font-semibold uppercase tracking-widest">
          Error 404
        </span>

        <h1 className="text-6xl lg:text-8xl font-bold mt-4 mb-6">
          Page Not Found
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          The page you are looking for does not exist,
          has been moved, or is temporarily unavailable.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <Link
            href="/"
            className="btn-primary"
          >
            Back To Home
          </Link>

          <Link
            href="/contact"
            className="btn-outline"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
}