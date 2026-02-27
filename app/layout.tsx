import "@/styles/globals.css";
import Layout from "@/components/Layout";
import type { ReactNode } from "react";
import config from "@/data/config";

export const metadata = {
  title: config.title,
  viewport: "initial-scale=1.0, width=device-width",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
