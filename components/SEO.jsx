import Head from "next/head";

export default function SEO({
  title = "KIVARI Construction | Residential, Civil & Infrastructure Experts in South Africa",
  description = "KIVARI (Pty) Ltd is a Midrand-based construction company offering residential building, civil works, earthworks, renovations, roofing, waterproofing and turnkey project solutions across South Africa.",
  url = "https://www.kivari.co.za",
  image = "/images/about/aboutus.jpg",
  type = "website",
  canonical = url
}) {
  const structuredDataOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KIVARI (Pty) Ltd",
    url: "https://www.kivari.co.za",
    logo: "https://www.kivari.co.za/logo2.svg",
    sameAs: [
      "https://www.facebook.com/kivari",
      "https://www.linkedin.com/company/kivari"
    ]
  };

  const structuredDataLocal = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "KIVARI Construction",
    url: "https://www.kivari.co.za",
    image: "https://www.kivari.co.za/logo2.svg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Midrand",
      addressRegion: "Gauteng",
      addressCountry: "ZA"
    },
    telephone: "+27-71-902-0281",
    areaServed: {
      "@type": "Country",
      name: "South Africa"
    },
    priceRange: "$$"
  };

  return (
    <Head>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Basic meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="KIVARI (Pty) Ltd" />
      <meta
        name="keywords"
        content="KIVARI, construction company Midrand, construction Gauteng, building contractor South Africa, residential construction, civil works, earthworks, renovations, roofing, waterproofing"
      />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* JSON-LD (Organization + LocalBusiness) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([structuredDataOrg, structuredDataLocal])
        }}
      />
    </Head>
  );
}
