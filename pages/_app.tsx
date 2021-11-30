import { AppProps } from "next/app";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>심다송의 포트폴리오</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
