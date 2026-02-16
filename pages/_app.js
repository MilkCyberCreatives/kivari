import "@/styles/globals.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/sora/600.css";
import "@fontsource/sora/700.css";
import React from "react";
import Head from "next/head";
import MarketingScripts from "@/components/MarketingScripts";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Safe defaults; page-level <Head> overrides these */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MarketingScripts />
      <div id="main">
        <Component {...pageProps} />
      </div>
    </>
  );
}
export default MyApp;
