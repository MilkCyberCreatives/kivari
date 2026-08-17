import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const siteName = 'KIVARI Construction';
  const themeColor = '#A9CF45';
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim();
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kivari.co.za')
    .trim()
    .replace(/\/+$/, '');

  return (
    <Html lang="en-ZA" className="scroll-smooth">
      <Head>
        {/* Favicon & Manifest */}
        <link rel="icon" type="image/svg+xml" href="/logo2.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content={themeColor} />

        {/* Basic PWA + mobile */}
        <meta name="application-name" content={siteName} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={siteName} />
        <meta
          name="google-site-verification"
          content="su6vC9r-DOW9UbMsjkMP1AB3jX1TvZS3113mi6VRu30"
        />

        {/* AI and search discoverability */}
        <link rel="alternate" type="text/plain" href={`${siteUrl}/llms.txt`} />
      </Head>
      <body>
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title="Google Tag Manager"
            />
          </noscript>
        ) : null}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
