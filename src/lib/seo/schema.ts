import { getCanonicalUrl } from "@/lib/seo/canonical";
import type { ToolFaq } from "@/data/tools";

type BreadcrumbInput = {
  name: string;
  href: string;
}[];

export function buildBreadcrumbSchema(items: BreadcrumbInput) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.href),
    })),
  };
}

export function buildFaqSchema(faqs: ToolFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

type WebPageSchemaInput = {
  name: string;
  description: string;
  path: string;
};

export function buildWebPageSchema({ name, description, path }: WebPageSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: getCanonicalUrl(path),
  };
}

type WebApplicationSchemaInput = {
  name: string;
  description: string;
  path: string;
  category?: string;
  keywords?: string[];
  applicationSubCategory?: string;
};

export function buildWebApplicationSchema({
  name,
  description,
  path,
  category = "DeveloperApplication",
  keywords = [],
  applicationSubCategory = "Database design tool",
}: WebApplicationSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: getCanonicalUrl(path),
    applicationCategory: category,
    applicationSubCategory,
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript. Works in modern browsers.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: keywords,
  };
}
