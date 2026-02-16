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
import SEO from '@/components/SEO';

export default function HomePage() {
  const siteUrl = 'https://www.kivari.co.za';
  const displayEmail = process.env.NEXT_PUBLIC_DISPLAY_EMAIL || 'info1.kivari@gmail.com';

  return (
    <>
      <SEO
        title="KIVARI Construction | Residential & Civil Construction in Gauteng"
        description="Trusted construction company in Midrand, Gauteng. We build homes, roads, and infrastructure across South Africa with safety and quality."
        url={siteUrl}
        image="/images/about/aboutus.jpg"
      />

      {/* Organization + WebSite JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': `${siteUrl}#org`,
                name: 'KIVARI Construction',
                url: siteUrl,
                logo: `${siteUrl}/logo.svg`,
                email: displayEmail,
                telephone: '+27 71 902 0281',
                sameAs: [],
              },
              {
                '@type': 'WebSite',
                '@id': `${siteUrl}#website`,
                url: siteUrl,
                name: 'KIVARI Construction',
                publisher: { '@id': `${siteUrl}#org` },
                potentialAction: {
                  '@type': 'SearchAction',
                  target: `${siteUrl}/search?q={search_term_string}`,
                  'query-input': 'required name=search_term_string',
                },
              },
            ],
          }),
        }}
      />

      <MainHeader />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactCTA />
      <WhyChooseUs />
      <StatsSection />
      <PhotoGallerySection />
      <FooterSection />
      <ScrollUpButton />
    </>
  );
}
