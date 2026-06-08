import Link from "next/link";
import { ArrowRight, DatabaseZap, Orbit, Radar, Sparkles, Zap } from "lucide-react";

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
    <div className={`mesh-card panel-glow absolute w-48 rounded-2xl p-4 ${className}`}>
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
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="container-shell">
        <div className="grid items-start gap-14 lg:grid-cols-[1.02fr,0.98fr]">
          <div className="space-y-8 pt-4">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>
                <Sparkles className="h-3.5 w-3.5" />
                Database design workspace
              </Badge>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/12 bg-emerald-300/8 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-100/90">
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                Live editor path enabled
              </div>
            </div>
            <div className="space-y-6">
              <h1 className="text-balance font-heading text-5xl font-semibold tracking-tight text-white md:text-6xl xl:text-7xl">
                Design schema systems that feel production-grade before the first migration ships.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                SchemaForge turns search-driven discovery into real product action with visual ERDs,
                SQL export workflows, reusable templates, and a live drawDB editor embedded under
                one brand.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/app/editor/templates/blank?mode=blank&database=postgresql">
                  Open Live Editor
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/templates/ecommerce-database-schema">Open A Real Template</Link>
              </Button>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="mesh-card rounded-[1.15rem] p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10">
                    <DatabaseZap className="h-4 w-4 text-cyan-200" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Template to editor</p>
                    <p className="text-xs text-muted-foreground">SEO page to real workflow in one click</p>
                  </div>
                </div>
              </div>
              <div className="mesh-card rounded-[1.15rem] p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-blue-300/15 bg-blue-300/10">
                    <Radar className="h-4 w-4 text-blue-100" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Search intent aligned</p>
                    <p className="text-xs text-muted-foreground">Pages map directly to design jobs</p>
                  </div>
                </div>
              </div>
              <div className="mesh-card rounded-[1.15rem] p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-amber-200/15 bg-amber-200/10">
                    <Zap className="h-4 w-4 text-amber-100" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Fast export loops</p>
                    <p className="text-xs text-muted-foreground">DDL and schema output ready to iterate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {highlightPills.map((pill) => {
                const Icon = pill.icon;

                return (
                  <div
                    className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/4 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-cyan-300/30 hover:text-white"
                    key={pill.label}
                  >
                    <Icon className="h-4 w-4 text-cyan-300" />
                    {pill.label}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <Card className="mesh-card rounded-[1.2rem] p-5" key={stat.label}>
                  <p className="font-heading text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>

            <Card className="mesh-card panel-glow scanline surface-grid relative min-h-[560px] overflow-hidden p-6">
              <div className="mb-8 grid gap-4 md:grid-cols-[1.1fr,0.9fr]">
                <div className="rounded-2xl border border-white/8 bg-black/18 px-4 py-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-white">SchemaForge command center</p>
                      <p className="mt-1 text-xs leading-6 text-muted-foreground">
                        A sharper database-tool visual language: less generic SaaS, more live system surface.
                      </p>
                    </div>
                    <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-200">
                      Editor live
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/8 bg-black/18 p-4">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-blue-100/80">
                      <Orbit className="h-3.5 w-3.5" />
                      active system
                    </div>
                    <p className="mt-3 font-heading text-2xl font-semibold text-white">24 routes</p>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">tools, templates, guides, compare, editor</p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-black/18 p-4">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan-100/80">
                      <Radar className="h-3.5 w-3.5" />
                      export loop
                    </div>
                    <p className="mt-3 font-heading text-2xl font-semibold text-white">SQL ready</p>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">postgresql, mysql, sqlite workflows</p>
                  </div>
                </div>
              </div>
              <div className="absolute left-6 top-32 w-32 rounded-2xl border border-white/8 bg-black/18 p-4 backdrop-blur">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-100/70">Entities</p>
                <div className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                  <div className="rounded-xl bg-blue-500/12 px-3 py-2 text-blue-100">users</div>
                  <div className="rounded-xl bg-white/4 px-3 py-2">orders</div>
                  <div className="rounded-xl bg-white/4 px-3 py-2">products</div>
                  <div className="rounded-xl bg-white/4 px-3 py-2">events</div>
                </div>
              </div>
              <SchemaNode
                className="left-40 top-40"
                fields={["id", "email", "created_at"]}
                title="users"
              />
              <SchemaNode
                className="left-72 top-76"
                fields={["id", "user_id", "status"]}
                title="orders"
              />
              <SchemaNode
                className="right-16 top-38"
                fields={["id", "sku", "price"]}
                title="products"
              />
              <SchemaNode
                className="right-24 bottom-24"
                fields={["id", "order_id", "provider_ref"]}
                title="payments"
              />
              <svg className="pointer-events-none absolute inset-0 h-full w-full" fill="none">
                <path d="M250 226 C 310 226, 335 320, 432 320" stroke="rgba(34,211,238,0.72)" strokeWidth="2.25" />
                <path d="M520 320 C 638 320, 642 214, 760 214" stroke="rgba(47,107,255,0.82)" strokeWidth="2.25" />
                <path d="M758 250 C 758 360, 718 420, 704 458" stroke="rgba(255,164,77,0.5)" strokeWidth="2.25" />
              </svg>
              <div className="absolute bottom-6 left-6 right-6 grid gap-4 lg:grid-cols-[1.2fr,0.8fr]">
                <div className="rounded-[1.25rem] border border-white/8 bg-black/28 p-4 backdrop-blur">
                  <p className="text-sm font-medium text-white">Positioning snapshot</p>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                    The homepage now behaves like a real product surface: clear schema objects,
                    data rails, live-workspace cues, and direct entry into the editor instead of a generic startup hero.
                  </p>
                </div>
                <div className="rounded-[1.25rem] border border-white/8 bg-black/28 p-4 backdrop-blur">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    <span>Workflow</span>
                    <span>Live</span>
                  </div>
                  <div className="mt-3 space-y-2.5">
                    <div className="rounded-xl bg-white/4 px-3 py-2 text-sm text-white">Choose template</div>
                    <div className="rounded-xl bg-white/4 px-3 py-2 text-sm text-white">Refine tables</div>
                    <div className="rounded-xl bg-white/4 px-3 py-2 text-sm text-white">Export SQL</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
