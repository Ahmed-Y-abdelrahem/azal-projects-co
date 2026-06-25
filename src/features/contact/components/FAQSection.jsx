'use client';

const faqs = [
  {
    q: 'Do you provide engineering consultations?',
    a: 'Yes, we provide complete engineering consultation and project support.',
  },
  {
    q: 'Do you operate across Saudi Arabia?',
    a: 'Yes, AZAL Projects supports projects throughout the Kingdom.',
  },
  {
    q: 'Can I request a site visit?',
    a: 'Absolutely. Site inspections and technical evaluations are available.',
  },
];

export function FAQSection() {
  return (
    <section className="section-padding">

      <div className="container-xl max-w-4xl">

        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="border p-6"
            >
              <h3 className="font-bold mb-3">
                {faq.q}
              </h3>

              <p className="text-gray-600">
                {faq.a}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}