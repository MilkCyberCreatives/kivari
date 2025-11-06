import Head from "next/head";
import dynamic from "next/dynamic";

import MainHeader from "@/components/MainHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

// Lazy-load below-the-fold sections for faster LCP
const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const ContactCTA = dynamic(() => import("@/components/ContactCTA"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));
const StatsSection = dynamic(() => import("@/components/StatsSection"));
const PhotoGallerySection = dynamic(() => import("@/components/PhotoGallerySection"));
const FooterSection = dynamic(() => import("@/components/FooterSection"));
const ScrollUpButton = dynamic(() => import("@/components/ScrollUpButton"));

export default function HomePage() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KIVARI (Pty) Ltd",
    url: "https://www.kivari.co.za",
    logo: "https://www.kivari.co.za/logo.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+27719020281",
      contactType: "Customer Service",
      areaServed: "ZA",
      availableLanguage: ["English"],
    },
  };

  return (
    <>
      <Head>
        <title>KIVARI Construction | Building South Africa Smarter</title>
        <meta
          name="description"
          content="KIVARI (Pty) Ltd — a trusted South African construction company providing residential, civil, and infrastructure solutions with excellence, safety, and innovation."
        />
        <meta
          name="keywords"
          content="KIVARI, construction, building, civil engineering, South Africa, infrastructure, residential, commercial"
        />
        <link rel="canonical" href="https://www.kivari.co.za" />
        <meta property="og:title" content="KIVARI Construction" />
        <meta
          property="og:description"
          content="KIVARI delivers top-tier construction and engineering services across South Africa."
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://www.kivari.co.za" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </Head>

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
