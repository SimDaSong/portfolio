import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div>
    <Head>
      <title>심다송의 포트폴리오</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </div>
);

Layout.defaultProps = {
  children: null,
};

export default Layout;
