import "@/styles/globals.css";
import Layout from "@/components/Layout";
import type { ReactNode } from "react";

export const metadata = {
  title: "심다송의 포트폴리오",
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
