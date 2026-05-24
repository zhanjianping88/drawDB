import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { highlightPills, stats } from "@/data/home";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

function SchemaNode({
  title,
  fields,
  className,
}: {
  title: string;
  fields: string[];
  className: string;
}) {
  return (
    <div className={`absolute w-48 rounded-2xl border border-white/10 bg-[#11151b]/95 p-4 shadow-2xl ${className}`}>
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-semibold text-white">{title}</p>
        <span className="rounded-full bg-cyan-400/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-200">
          table
        </span>
      </div>
      <div className="space-y-2 text-xs text-muted-foreground">
        {fields.map((field) => (
          <div className="flex items-center justify-between rounded-lg bg-white/3 px-2.5 py-2" key={field}>
            <span>{field}</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-blue-200/70">col</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="container-shell grid items-center gap-14 lg:grid-cols-[1.08fr,0.92fr]">
        <div className="space-y-8">
          <Badge>
            <Sparkles className="h-3.5 w-3.5" />
            SEO-led database tooling platform
          </Badge>
          <div className="space-y-6">
            <h1 className="text-balance font-heading text-5xl font-semibold tracking-tight text-white md:text-6xl">
              Build your database schema brand around fast tools, sharp ERDs, and long-tail search.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              Launch drawDB as a production-ready marketing site for database schema generation,
              SQL design workflows, template discovery, and future premium monetization.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/app/editor/templates/blank?mode=blank&database=postgresql">
                Open The Editor
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/features">View Platform Features</Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-3">
            {highlightPills.map((pill) => {
              const Icon = pill.icon;

              return (
                <div
                  className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/4 px-4 py-2 text-sm text-muted-foreground"
                  key={pill.label}
                >
                  <Icon className="h-4 w-4 text-cyan-300" />
                  {pill.label}
                </div>
              );
            })}
          </div>
          <div className="grid gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <Card className="p-5" key={stat.label}>
                <p className="font-heading text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>

        <Card className="surface-grid relative min-h-[520px] overflow-hidden border-white/10 bg-[#0d1117]/90 p-6">
          <div className="mb-8 flex items-center justify-between rounded-2xl border border-white/8 bg-white/4 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-white">drawDB Visual Workspace</p>
              <p className="text-xs text-muted-foreground">Marketing-led interface preview</p>
            </div>
            <div className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-100">
              Preview
            </div>
          </div>
          <SchemaNode
            className="left-6 top-28"
            fields={["id", "email", "created_at"]}
            title="users"
          />
          <SchemaNode
            className="left-56 top-56"
            fields={["id", "user_id", "status"]}
            title="orders"
          />
          <SchemaNode
            className="right-8 top-36"
            fields={["id", "sku", "price"]}
            title="products"
          />
          <SchemaNode
            className="right-24 bottom-16"
            fields={["id", "order_id", "total"]}
            title="invoices"
          />
          <svg className="pointer-events-none absolute inset-0 h-full w-full" fill="none">
            <path d="M198 200 C 260 200, 260 280, 318 280" stroke="rgba(34,211,238,0.7)" strokeWidth="2" />
            <path d="M404 280 C 470 280, 520 180, 566 180" stroke="rgba(47,107,255,0.8)" strokeWidth="2" />
            <path d="M566 180 C 620 180, 620 390, 522 390" stroke="rgba(34,211,238,0.45)" strokeWidth="2" />
          </svg>
          <div className="absolute inset-x-6 bottom-6 rounded-[1.25rem] border border-white/8 bg-black/30 p-4">
            <p className="text-sm font-medium text-white">Positioning snapshot</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Use real schema canvases as the signature visual for homepage hero sections, tool
              pages, and template previews.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
