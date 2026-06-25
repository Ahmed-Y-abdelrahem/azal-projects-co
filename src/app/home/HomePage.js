import Navbar from '../../components/layout/Navbar.jsx';
import HeroSection from '../../components/sections/home/HeroSection.jsx';
import AboutSection from '../../components/sections/home/AboutSection.jsx';
import ServicesSection from '../../components/sections/home/ServicesSection.jsx';
import WhyChooseSection from '../../components/sections/home/WhyChooseSection.jsx';
import IndustriesSection from '../../components/sections/home/IndustriesSection.jsx';
import ProjectsSection from '../../components/sections/home/ProjectsSection.jsx';
import HSESection from '../../components/sections/home/HSESection.jsx';
import StatsSection from '../../components/sections/home/StatsSection.jsx';
import CTASection from '../../components/sections/home/CTASection.jsx';
import Footer from '../../components/layout/Footer.jsx';

export default function HomePage() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <AboutSection />

      <ServicesSection />

      <WhyChooseSection />

      <IndustriesSection />

      <ProjectsSection />

      <HSESection />

      <StatsSection />

      <CTASection />

      <Footer />
    </>
  );
}