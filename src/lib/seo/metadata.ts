import type { Metadata } from "next";

import { getCanonicalUrl } from "@/lib/seo/canonical";
import { siteConfig } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  noIndex?: boolean;
  verification?: Metadata["verification"];
};

export function createMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
  noIndex = false,
  verification,
}: MetadataInput): Metadata {
  const url = getCanonicalUrl(path);

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    keywords,
    verification,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
    openGraph: {
      title,
      description,
      type,
      url,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
