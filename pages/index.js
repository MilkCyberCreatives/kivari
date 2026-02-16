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
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kivari.co.za').trim();

  return (
    <>
      <SEO
        title="KIVARI Construction | Residential & Civil Construction in Gauteng"
        description="Trusted construction company in Midrand, Gauteng. We build homes, roads, and infrastructure across South Africa with safety and quality."
        url={siteUrl}
        image="/images/about/aboutus.jpg"
        faq={[
          {
            question: 'What construction services does KIVARI provide?',
            answer:
              'KIVARI provides residential construction, civil engineering, earthworks, renovations, waterproofing, scaffolding, project supervision, and maintenance services.',
          },
          {
            question: 'Where does KIVARI operate?',
            answer:
              'KIVARI is based in Midrand, Gauteng and supports projects across South Africa.',
          },
          {
            question: 'How can I request a quote from KIVARI?',
            answer:
              'Use the website contact form or call KIVARI to request a consultation and project quote.',
          },
        ]}
      />

      {/* Home Page JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': `${siteUrl}#home`,
                url: siteUrl,
                name: 'KIVARI Construction Home',
                isPartOf: { '@id': `${siteUrl}#website` },
                about: { '@id': `${siteUrl}#organization` },
                description:
                  'KIVARI provides premium residential, civil, and infrastructure construction services in Midrand, Gauteng, and across South Africa.',
              },
              {
                '@type': 'ItemList',
                name: 'Featured Construction Services',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Residential Building Construction', url: `${siteUrl}/services` },
                  { '@type': 'ListItem', position: 2, name: 'Civil Engineering and Infrastructure', url: `${siteUrl}/services` },
                  { '@type': 'ListItem', position: 3, name: 'Site Preparation and Earthworks', url: `${siteUrl}/services` },
                  { '@type': 'ListItem', position: 4, name: 'Renovations and Extensions', url: `${siteUrl}/services` },
                ],
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

