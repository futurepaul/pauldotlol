import { AppProps } from "next/app";
require("typeface-inter");

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
