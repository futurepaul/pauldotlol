import { AppProps } from "next/app";
require("typeface-inter");
require("typeface-ibm-plex-serif");

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
