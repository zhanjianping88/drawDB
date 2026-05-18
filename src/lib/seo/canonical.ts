import { siteConfig } from "@/lib/site";

export function getCanonicalUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}
