import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const siteName = 'KIVARI Construction';
  const themeColor = '#A9CF45';

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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
