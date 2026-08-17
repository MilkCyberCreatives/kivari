import Head from "next/head";

export default function SEO({
  title = "KIVARI Construction | Residential, Civil and Infrastructure Experts in South Africa",
  description =
    "KIVARI (Pty) Ltd is a Midrand-based construction company offering residential building, civil works, earthworks, renovations, roofing, waterproofing, maintenance, and turnkey project solutions across South Africa.",
  url,
  image = "/images/about/aboutus.jpg",
  type = "website",
  canonical,
  noindex = false,
}) {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.kivari.co.za")
    .trim()
    .replace(/\/+$/, "");
  const displayEmail = (process.env.NEXT_PUBLIC_DISPLAY_EMAIL || "info1.kivari@gmail.com").trim();

  const normalizedUrl = (url || siteUrl).replace(/\/+$/, "");
  const normalizedCanonical = (canonical || normalizedUrl).replace(/\/+$/, "");
  const ogImage = image.startsWith("http") ? image : `${siteUrl}${image}`;

  const structuredDataOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}#organization`,
    name: "KIVARI (Pty) Ltd",
    alternateName: "KIVARI Construction",
    url: siteUrl,
    logo: `${siteUrl}/logo2.svg`,
    email: displayEmail,
    telephone: "+27-71-902-0281",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+27-71-902-0281",
        contactType: "customer service",
        areaServed: "ZA",
        availableLanguage: ["en"],
      },
    ],
    sameAs: [
      "https://facebook.com/kivari",
      "https://twitter.com/kivari",
      "https://linkedin.com/company/kivari",
      "https://instagram.com/kivari",
    ],
  };

  const structuredDataLocal = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#local-business`,
    name: "KIVARI Construction",
    image: `${siteUrl}/logo2.svg`,
    url: siteUrl,
    email: displayEmail,
    telephone: "+27-71-902-0281",
    parentOrganization: { "@id": `${siteUrl}#organization` },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Midrand",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.999181,
      longitude: 28.126303,
    },
    areaServed: [
      { "@type": "City", name: "Midrand" },
      { "@type": "AdministrativeArea", name: "Gauteng" },
      { "@type": "Country", name: "South Africa" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Building Construction" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Civil Engineering and Infrastructure" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Site Preparation and Earthworks" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Renovations and Extensions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Maintenance and Waterproofing" } },
      ],
    },
  };

  const structuredDataWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    name: "KIVARI Construction",
    url: siteUrl,
    inLanguage: "en-ZA",
    publisher: { "@id": `${siteUrl}#organization` },
  };

  const structuredData = [structuredDataOrg, structuredDataLocal, structuredDataWebsite];

  if (normalizedCanonical !== siteUrl) {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${normalizedCanonical}#webpage`,
      url: normalizedCanonical,
      name: title,
      description,
      inLanguage: "en-ZA",
      isPartOf: { "@id": `${siteUrl}#website` },
      about: { "@id": `${siteUrl}#organization` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: ogImage,
      },
    });
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"} />
      <meta name="author" content="KIVARI (Pty) Ltd" />
      <meta name="application-name" content="KIVARI Construction" />
      <meta name="format-detection" content="telephone=yes, email=yes" />

      <meta name="geo.region" content="ZA-GP" />
      <meta name="geo.placename" content="Midrand" />
      <meta name="geo.position" content="-25.999181;28.126303" />
      <meta name="ICBM" content="-25.999181, 28.126303" />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="KIVARI Construction" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={normalizedUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_ZA" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />

      <link rel="canonical" href={normalizedCanonical} />
      <link rel="alternate" hrefLang="en-ZA" href={normalizedCanonical} />
      <link rel="alternate" hrefLang="x-default" href={normalizedCanonical} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </Head>
  );
}
