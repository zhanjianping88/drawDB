import type { MetadataRoute } from "next";

import { templateSummaries } from "@/data/templates";
import { toolPages } from "@/data/tools";
import { siteConfig } from "@/lib/site";

const baseRoutes = [
  "/",
  "/about",
  "/contact",
  "/features",
  "/pricing",
  "/privacy",
  "/terms",
  "/tools",
  "/templates",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const dynamicRoutes = [
    ...toolPages.map((tool) => tool.path),
    ...templateSummaries.map((template) => template.href),
  ];

  const routes = [...new Set([...baseRoutes, ...dynamicRoutes])];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
