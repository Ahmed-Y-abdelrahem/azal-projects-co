import {
  ServicesHero,
  ServicesGrid,
  ServiceProcess,
  ServiceBenefits,
  ServicesCTA,
} from '../../features/services/index.js';

export const metadata = {
  title: 'Services | AZAL Projects',
  description:
    'Ground engineering services including shoring, excavation, dewatering and trench shuttering.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServiceProcess />
      <ServiceBenefits />
      <ServicesCTA />
    </>
  );
}