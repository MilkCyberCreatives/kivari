import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const siteName = 'KIVARI Construction';
  const themeColor = '#A9CF45';
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim();
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kivari.co.za').trim();

  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        {/* Favicon & Manifest */}
        <link rel="icon" type="image/svg+xml" href="/logo2.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content={themeColor} />

        {/* Preconnect/DNS Prefetch (Google Maps on Contact page) */}
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.gstatic.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="" />

        {/* Basic PWA + mobile */}
        <meta name="application-name" content={siteName} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={siteName} />

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
            />
          </noscript>
        ) : null}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

