import {
  IndustriesHero,
  IndustriesGrid,
  IndustryBenefits,
  IndustriesCTA,
} from '../../features/industries/index.js';

export const metadata = {
  title: 'Industries | AZAL Projects',
};

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHero />
      <IndustriesGrid />
      <IndustryBenefits />
      <IndustriesCTA />
    </>
  );
}