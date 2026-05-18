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
          eyebrow="Popular Tools"
          title="Long-tail landing pages built around real database search intent."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {popularTools.map((tool) => (
            <Link href={tool.href} key={tool.title}>
              <Card className="h-full transition-transform duration-200 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-start justify-between gap-4 text-lg">
                    <span>{tool.title}</span>
                    <ArrowUpRight className="mt-1 h-4 w-4 text-cyan-300" />
                  </CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-2xl border border-white/8 bg-white/3 px-4 py-3 text-xs uppercase tracking-[0.22em] text-blue-100/80">
                    High-intent SEO route
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
