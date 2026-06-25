import {
  HSEHero,
  HSEOverview,
  SafetyCommitment,
  SafetyPrinciples,
  HSEStatistics,
  CertificationsSection,
  TrainingPrograms,
  EmergencyResponse,
  HSECTA,
} from '../../features/hse';

export const metadata = {
  title: 'HSE | AZAL Projects',
};

export default function HSEPage() {
  return (
    <>
      <HSEHero />

      <HSEOverview />

      <SafetyCommitment />

      <SafetyPrinciples />

      <HSEStatistics />

      <CertificationsSection />

      <TrainingPrograms />

      <EmergencyResponse />

      <HSECTA />
    </>
  );
}