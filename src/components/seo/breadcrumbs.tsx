import Link from "next/link";
import { ChevronRight } from "lucide-react";

import type { BreadcrumbItem } from "@/lib/seo/breadcrumbs";

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li className="flex items-center gap-2" key={item.href}>
              {index > 0 ? <ChevronRight className="h-4 w-4 text-muted-foreground/70" /> : null}
              {isLast ? (
                <span className="text-white">{item.name}</span>
              ) : (
                <Link className="transition-colors hover:text-white" href={item.href}>
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
