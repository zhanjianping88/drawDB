import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";

import type { guideSummaries } from "@/data/guides";
import { Badge } from "@/components/ui/badge";

type GuideSummary = (typeof guideSummaries)[number];

export function GuideGallery({ guides }: { guides: GuideSummary[] }) {
  const [featured, ...rest] = guides;

  if (!featured) {
    return null;
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1.05fr,0.95fr]">
      <Link
        className="mesh-card panel-glow group relative overflow-hidden rounded-[2rem] border border-white/10 p-8 transition-transform duration-300 hover:-translate-y-1"
        href={featured.href}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_60%)]" />
        <div className="relative flex h-full flex-col justify-between gap-10">
          <div className="space-y-5">
            <div className="flex items-center justify-between gap-4">
              <Badge variant="muted">
                <BookOpen className="h-3.5 w-3.5" />
                Featured guide
              </Badge>
              <ArrowUpRight className="h-4 w-4 text-cyan-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">{featured.category}</p>
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {featured.title}
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-muted-foreground">{featured.description}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5">
              {featured.readingTime}
            </span>
            <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5">
              Educational cluster
            </span>
            <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5">
              Internal links included
            </span>
          </div>
        </div>
      </Link>

      <div className="grid gap-4 md:grid-cols-2">
        {rest.map((guide) => (
          <Link
            className="mesh-card group rounded-[1.6rem] border border-white/10 p-5 transition-transform duration-300 hover:-translate-y-1"
            href={guide.href}
            key={guide.slug}
          >
            <div className="flex h-full flex-col justify-between gap-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <Badge variant="muted">
                    <BookOpen className="h-3.5 w-3.5" />
                    Guide
                  </Badge>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-cyan-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-semibold text-white">{guide.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{guide.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span>{guide.category}</span>
                <span>{guide.readingTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
