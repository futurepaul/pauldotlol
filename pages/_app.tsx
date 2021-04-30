import { AppProps } from "next/app";
require("typeface-inter");
require("typeface-ibm-plex-serif");
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
