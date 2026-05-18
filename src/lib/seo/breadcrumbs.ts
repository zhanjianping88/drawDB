export type BreadcrumbItem = {
  name: string;
  href: string;
};

export function buildBreadcrumbs(items: BreadcrumbItem[]) {
  return [{ name: "Home", href: "/" }, ...items];
}
