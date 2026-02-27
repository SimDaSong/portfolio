import "@/styles/globals.css";
import Layout from "@/components/Layout";
import type { ReactNode } from "react";
import config from "@/data/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  metadataBase: new URL(config.url),
  openGraph: {
    title: config.title,
    description: config.description,
    url: config.url,
    siteName: config.title,
    locale: config.locale,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: config.title,
    description: config.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: config.title,
      url: config.url,
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: config.name,
      url: config.url,
      description: config.description,
      sameAs: config.links
        .filter((l) => l.label !== "Email")
        .map((l) => l.href),
    },
  ];

  return (
    <html lang="ko">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
