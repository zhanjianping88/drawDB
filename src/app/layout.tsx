import type { Metadata } from "next";

import "@/app/globals.css";

import { SiteAnalytics } from "@/components/analytics/site-analytics";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "drawDB | Database Schema Generator, ERD Tool, and SQL Design Platform",
  description:
    "Modern database schema tooling for ER diagrams, SQL generation, templates, and programmatic SEO growth.",
  path: "/",
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? {
        google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
      }
    : undefined,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <SiteAnalytics />
      </body>
    </html>
  );
}
