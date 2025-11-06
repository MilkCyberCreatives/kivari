// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        {/* ✅ Favicon & app icons */}
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="apple-touch-icon" href="/logo.svg" />

        {/* ✅ Font optimization (if using Inter or any Google Font) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* ✅ SEO & branding meta */}
        <meta name="theme-color" content="#A9CF45" />
        <meta name="application-name" content="KIVARI Construction" />
        <meta
          name="description"
          content="KIVARI (Pty) Ltd — Building excellence through innovation, quality, and integrity across South Africa."
        />
        <meta
          name="keywords"
          content="KIVARI, construction, civil engineering, residential, infrastructure, South Africa"
        />
        <meta name="author" content="KIVARI Construction" />

        {/* ✅ Social / Open Graph tags */}
        <meta property="og:site_name" content="KIVARI Construction" />
        <meta property="og:title" content="KIVARI Construction | Building South Africa Smarter" />
        <meta
          property="og:description"
          content="KIVARI delivers reliable construction, infrastructure, and engineering services throughout South Africa."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://www.kivari.co.za" />

        {/* ✅ Robots & crawl control */}
        <meta name="robots" content="index, follow" />
      </Head>
      <body className="antialiased text-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
