import type { AppProps } from "next/app";
import Head from "next/head";
import { NextUIProvider } from "@nextui-org/react";

import Header from "../components/Header";
import { mainTheme } from "../utils/themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={mainTheme}>
      <Header />
      <Head>
        <title>Amiibo Center</title>
      </Head>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
