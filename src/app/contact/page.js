import {
  ContactHero,
  ContactInfo,
  ContactForm,
  OfficeLocations,
  FAQSection,
} from '../../features/contact/index.js';

export const metadata = {
  title: 'Contact Us | AZAL Projects',
  description:
    'Contact AZAL Projects for engineering consultation and project inquiries.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <OfficeLocations />

      <FAQSection />
    </>
  );
}