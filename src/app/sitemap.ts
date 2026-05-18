import type { MetadataRoute } from "next";

import { comparePages } from "@/data/compare";
import { guidePages } from "@/data/guides";
import { templateSummaries } from "@/data/templates";
import { toolPages } from "@/data/tools";
import { siteConfig } from "@/lib/site";

const baseRoutes = [
  "/",
  "/about",
  "/contact",
  "/compare",
  "/features",
  "/guides",
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
    ...comparePages.map((page) => page.path),
    ...guidePages.map((guide) => guide.path),
  ];

  const routes = [...new Set([...baseRoutes, ...dynamicRoutes])];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
