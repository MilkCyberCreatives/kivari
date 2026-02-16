import Head from "next/head";

const defaultKeywordList = [
  "KIVARI",
  "KIVARI construction",
  "construction company Midrand",
  "construction company Gauteng",
  "construction company South Africa",
  "building contractor Midrand",
  "building contractor Gauteng",
  "residential construction",
  "civil engineering contractor",
  "infrastructure contractor",
  "earthworks contractor",
  "road construction",
  "stormwater drainage contractor",
  "renovations and extensions",
  "painting and plastering",
  "roof maintenance",
  "waterproofing contractor",
  "scaffolding services",
  "scanning and coring",
  "project planning and supervision",
  "general maintenance and repairs",
  "turnkey construction",
  "property development partner",
  "commercial construction support",
  "industrial maintenance support",
  "construction project management",
  "facility upgrades",
  "business construction solutions",
  "subcontracting opportunities",
  "tender support",
  "construction procurement partner",
  "trusted builders South Africa",
];

export default function SEO({
  title = "KIVARI Construction | Residential, Civil and Infrastructure Experts in South Africa",
  description =
    "KIVARI (Pty) Ltd is a Midrand-based construction company offering residential building, civil works, earthworks, renovations, roofing, waterproofing, maintenance, and turnkey project solutions across South Africa.",
  url,
  image = "/images/about/aboutus.jpg",
  type = "website",
  canonical,
  keywords = defaultKeywordList,
  faq = [],
  noindex = false,
}) {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.kivari.co.za").trim();
  const displayEmail = (process.env.NEXT_PUBLIC_DISPLAY_EMAIL || "info1.kivari@gmail.com").trim();

  const normalizedUrl = url || siteUrl;
  const normalizedCanonical = canonical || normalizedUrl;
  const ogImage = image.startsWith("http") ? image : `${siteUrl}${image}`;
  const keywordContent = Array.isArray(keywords) ? keywords.join(", ") : keywords;

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
    sameAs: [
      "https://www.facebook.com/kivari",
      "https://www.linkedin.com/company/kivari",
      "https://www.instagram.com/kivari",
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
    priceRange: "$$",
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

  const faqSchema =
    Array.isArray(faq) && faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordContent} />
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
      <meta property="og:locale" content="en_ZA" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="canonical" href={normalizedCanonical} />
      <link rel="alternate" hrefLang="en-za" href={normalizedCanonical} />
      <link rel="alternate" hrefLang="x-default" href={normalizedCanonical} />
      <link rel="alternate" type="text/plain" href={`${siteUrl}/llms.txt`} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([structuredDataOrg, structuredDataLocal, structuredDataWebsite]),
        }}
      />

      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      ) : null}
    </Head>
  );
}

