const defaultSiteUrl = "https://drawdb.example.com";

export function getSiteUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!value) {
    return defaultSiteUrl;
  }

  return value.endsWith("/") ? value.slice(0, -1) : value;
}

export const siteConfig = {
  name: "drawDB",
  url: getSiteUrl(),
  description:
    "Production-grade database schema generator, ERD tool, and SQL design platform built for modern engineering teams.",
  nav: [
    { href: "/tools", label: "Tools" },
    { href: "/templates", label: "Templates" },
    { href: "/features", label: "Features" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
  ],
};
