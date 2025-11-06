import Head from "next/head";
import { useRouter } from "next/router";

/**
 * Site-wide defaults
 */
const SITE_NAME = "KIVARI Construction";
const SITE_URL = "https://www.kivari.co.za"; // change here for staging if needed
const DEFAULT_TITLE = "KIVARI Construction | Building South Africa Smarter";
const DEFAULT_DESC =
  "KIVARI (Pty) Ltd — Residential & Civil Construction, Earthworks, Renovations, Roofing, Waterproofing, and more.";
const DEFAULT_IMAGE_PATH = "/images/about/aboutus.jpg"; // 1200x630 recommended social image

/**
 * Ensure we always output absolute URLs for OG/Twitter
 */
function toAbsoluteUrl(pathOrUrl) {
  if (!pathOrUrl) return SITE_URL;
  try {
    // Already absolute?
    const u = new URL(pathOrUrl);
    return u.href;
  } catch {
    // Treat as relative path
    return `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
  }
}

/**
 * SEO Component
 * - canonicalPath: optionally override path (e.g., "/services")
 * - image: relative ("/images/..") or absolute ("https://..")
 * - noIndex: set to true on pages you don't want indexed
 * - schema: JSON object for JSON-LD (we'll stringify & inject)
 */
export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  image = DEFAULT_IMAGE_PATH,
  canonicalPath,
  url, // optional full URL override
  noIndex = false,
  schema, // optional JSON-LD object
  locale = "en_ZA",
  siteName = SITE_NAME,
  ogType = "website",
  twitterCard = "summary_large_image",
}) {
  const router = useRouter();

  // Build canonical URL
  const canonicalUrl =
    url ??
    (canonicalPath
      ? `${SITE_URL}${canonicalPath}`
      : `${SITE_URL}${router?.asPath ? router.asPath.split("#")[0].split("?")[0] : ""}`);

  const absoluteImage = toAbsoluteUrl(image);
  const fullTitle = title || DEFAULT_TITLE;

  return (
    <Head>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content={locale} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:alt" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />

      {/* Robots */}
      {noIndex ? (
        <>
          <meta name="robots" content="noindex,nofollow" />
          <meta name="googlebot" content="noindex,nofollow" />
        </>
      ) : (
        <>
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
        </>
      )}

      {/* Optional JSON-LD */}
      {schema && (
        <script
          type="application/ld+json"
          // Avoid hydration warnings by serializing safely
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </Head>
  );
}
