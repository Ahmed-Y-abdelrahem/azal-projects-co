import {
  AboutHero,
  CompanyStory,
  MissionVision,
  CoreValues,
  LeadershipSection,
  WhyAzalSection,
  CertificationsSection,servic
} from '../../features/about/index.js';

export const metadata = {
  title: 'About AZAL Projects',
  description:
    'Learn more about AZAL Projects for Contracting and our engineering excellence.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <CompanyStory />

      <MissionVision />

      <CoreValues />

      <LeadershipSection />

      <WhyAzalSection />

      <CertificationsSection />
    </>
  );
}