// pages/_app.js
import "@/styles/globals.css";
import "@fontsource/inter"; // Optional: Remove if not using Inter

import React from "react";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
