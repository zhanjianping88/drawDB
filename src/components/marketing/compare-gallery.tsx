import Link from "next/link";
import { ArrowUpRight, Scale } from "lucide-react";

import type { compareSummaries } from "@/data/compare";
import { Badge } from "@/components/ui/badge";

type CompareSummary = (typeof compareSummaries)[number];

export function CompareGallery({ pages }: { pages: CompareSummary[] }) {
  const [featured, ...rest] = pages;

  if (!featured) {
    return null;
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1.1fr,0.9fr]">
      <Link
        className="mesh-card panel-glow group relative overflow-hidden rounded-[2rem] border border-white/10 p-8 transition-transform duration-300 hover:-translate-y-1"
        href={featured.href}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.02),transparent_60%)]" />
        <div className="relative flex h-full flex-col justify-between gap-10">
          <div className="space-y-5">
            <div className="flex items-center justify-between gap-4">
              <Badge variant="muted">
                <Scale className="h-3.5 w-3.5" />
                Featured comparison
              </Badge>
              <ArrowUpRight className="h-4 w-4 text-cyan-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">Decision layer</p>
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {featured.leftName} vs {featured.rightName}
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-muted-foreground">{featured.description}</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.4rem] border border-white/10 bg-black/30 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Search intent</p>
              <p className="mt-2 text-sm leading-6 text-white">{featured.title}</p>
            </div>
            <div className="rounded-[1.4rem] border border-white/10 bg-black/30 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Outcome</p>
              <p className="mt-2 text-sm leading-6 text-white">
                Clear tradeoffs, use-case fit, and internal links into tools and templates.
              </p>
            </div>
          </div>
        </div>
      </Link>

      <div className="grid gap-4">
        {rest.map((page) => (
          <Link
            className="mesh-card group rounded-[1.6rem] border border-white/10 p-5 transition-transform duration-300 hover:-translate-y-1"
            href={page.href}
            key={page.slug}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-3">
                <Badge variant="muted">
                  <Scale className="h-3.5 w-3.5" />
                  Compare
                </Badge>
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-semibold text-white">
                    {page.leftName} vs {page.rightName}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">{page.description}</p>
                </div>
              </div>
              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-cyan-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
