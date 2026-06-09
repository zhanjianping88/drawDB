import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { popularTools } from "@/data/home";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/marketing/section-heading";

export function PopularToolsSection() {
  return (
    <section className="py-20">
      <div className="container-shell space-y-10">
        <SectionHeading
          description="Start with the highest-intent acquisition pages and give each keyword a credible, product-led destination."
          title="High-intent routes that feel like product gateways, not content dead ends."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {popularTools.map((tool, index) => (
            <Link href={tool.href} key={tool.title}>
              <Card className="mesh-card panel-glow data-pulse h-full overflow-hidden transition-transform duration-200 hover:-translate-y-1">
                <CardHeader className="relative">
                  <div className="mb-5 flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                    <span>Route {String(index + 1).padStart(2, "0")}</span>
                    <span>Search intent</span>
                  </div>
                  <CardTitle className="flex items-start justify-between gap-4 text-lg">
                    <span>{tool.title}</span>
                    <ArrowUpRight className="mt-1 h-4 w-4 text-cyan-300" />
                  </CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="surface-grid rounded-2xl border border-white/8 bg-[#0d1117]/90 p-4">
                    <div className="grid grid-cols-3 gap-2">
                      {Array.from({ length: 6 }).map((_, gridIndex) => (
                        <div className="h-8 rounded-lg border border-white/8 bg-white/4" key={gridIndex} />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/18 px-4 py-3 text-xs uppercase tracking-[0.22em] text-blue-100/80">
                    <span>Open landing page</span>
                    <span className="text-cyan-200">Live</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
