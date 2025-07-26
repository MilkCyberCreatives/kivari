import MainHeader from '@/components/MainHeader';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactCTA from '@/components/ContactCTA';
import WhyChooseUs from '@/components/WhyChooseUs';
import StatsSection from '@/components/StatsSection';
import PhotoGallerySection from '@/components/PhotoGallerySection';
import FooterSection from '@/components/FooterSection';
import ScrollUpButton from '@/components/ScrollUpButton';

export default function HomePage() {
  return (
    <>
      <MainHeader />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactCTA />
      <WhyChooseUs />
      <StatsSection />
      <PhotoGallerySection />
      <FooterSection />
      {/* Add other sections as needed */}
      <ScrollUpButton />
    </>
  );
}
