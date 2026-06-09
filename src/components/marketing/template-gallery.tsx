import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { TemplateSummary } from "@/data/templates";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export function TemplateGallery({ templates }: { templates: TemplateSummary[] }) {
  const [featured, ...rest] = templates;

  if (!featured) {
    return null;
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1.15fr,0.85fr]">
      <Link href={featured.href}>
        <Card className="mesh-card panel-glow h-full overflow-hidden transition-transform duration-200 hover:-translate-y-1">
          <div className="surface-grid relative h-64 border-b border-white/8 bg-[#0d1117] p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_26%),radial-gradient(circle_at_80%_30%,rgba(47,107,255,0.14),transparent_24%)]" />
            <div className="relative grid h-full grid-cols-[1.1fr,0.9fr] gap-4">
              <div className="rounded-[1.2rem] border border-white/8 bg-black/22 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-100/80">Featured template</p>
                <h3 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-white">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                  {featured.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge variant="muted">{featured.tableCount} tables</Badge>
                  <Badge variant="muted">{featured.database}</Badge>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    className={`rounded-xl border border-white/8 bg-white/4 ${
                      index === 0 ? "col-span-2 bg-blue-500/10" : ""
                    }`}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
          <CardContent className="flex items-center justify-between gap-4 p-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-blue-100/80">
              <span>{featured.category}</span>
              <span className="text-muted-foreground">/</span>
              <span>Open in editor ready</span>
            </div>
            <ArrowUpRight className="h-4 w-4 text-cyan-300" />
          </CardContent>
        </Card>
      </Link>

      <div className="grid gap-4">
        {rest.map((template) => (
          <Link href={template.href} key={template.slug}>
            <Card className="mesh-card h-full overflow-hidden transition-transform duration-200 hover:-translate-y-1">
              <div className="grid h-full gap-4 p-5 md:grid-cols-[120px,1fr]">
                <div className="surface-grid flex min-h-[108px] items-center justify-center rounded-[1rem] border border-white/8 bg-[#0d1117]/90 p-3">
                  <div className="grid h-full w-full grid-cols-2 gap-2">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div className="rounded-lg border border-white/8 bg-white/4" key={index} />
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <CardTitle className="text-lg">{template.title}</CardTitle>
                    <Badge variant="muted">{template.tableCount}</Badge>
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">{template.description}</p>
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-blue-100/80">
                    <span>{template.database}</span>
                    <span className="text-muted-foreground">/</span>
                    <span>{template.category}</span>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
