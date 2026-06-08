import Link from "next/link";
import { CirclePlay, FileJson2, GitCompareArrows, PanelsTopLeft } from "lucide-react";

import { AdPlaceholder } from "@/components/ads/ad-placeholder";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/marketing/section-heading";

const previewItems = [
  { icon: PanelsTopLeft, label: "Schema canvas", copy: "Visual entity editing surface" },
  { icon: FileJson2, label: "Export pipeline", copy: "SQL, JSON, and shareable outputs" },
  { icon: GitCompareArrows, label: "Compare-ready", copy: "Great for migration and review pages" },
];

export function EditorPreviewSection() {
  return (
    <section className="py-20">
      <div className="container-shell grid gap-8 xl:grid-cols-[1.1fr,0.9fr]">
        <Card className="mesh-card panel-glow overflow-hidden p-6">
          <SectionHeading
            description="The marketing site now routes into a real embedded drawDB workspace under /app, so visitors can move from discovery into action."
            eyebrow="Editor Preview"
            title="A sharper workflow preview that explains what users actually do next."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.72fr,1.28fr]">
            <div className="space-y-4">
              <div className="rounded-[1.25rem] border border-white/8 bg-black/18 p-4">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100/80">Workflow map</p>
                <div className="space-y-3">
                  {[
                    "Pick a keyword-driven template",
                    "Open the live schema canvas",
                    "Refine tables, relationships, and data types",
                    "Export SQL for implementation",
                  ].map((step, index) => (
                    <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/4 p-3" key={step}>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-xs font-semibold text-blue-100">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-6 text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.25rem] border border-white/8 bg-black/18 p-4">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-100/80">Why it converts</p>
                <div className="space-y-3">
                  {previewItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div className="flex gap-3" key={item.label}>
                        <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/4">
                          <Icon className="h-4 w-4 text-cyan-200" />
                        </span>
                        <div>
                          <p className="text-sm font-medium text-white">{item.label}</p>
                          <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.copy}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="surface-grid rounded-[1.5rem] border border-white/8 bg-[#0d1117] p-6">
              <div className="grid h-full min-h-[360px] gap-4 rounded-[1.25rem] border border-dashed border-cyan-400/20 bg-black/15 p-4 lg:grid-cols-[180px,1fr]">
                <div className="rounded-[1.1rem] border border-white/8 bg-black/28 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100/80">Object rail</p>
                  <div className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                    <div className="rounded-xl bg-blue-500/15 px-3 py-2 text-blue-100">users</div>
                    <div className="rounded-xl bg-white/4 px-3 py-2">orders</div>
                    <div className="rounded-xl bg-white/4 px-3 py-2">products</div>
                    <div className="rounded-xl bg-white/4 px-3 py-2">payments</div>
                  </div>
                </div>
                <div className="relative rounded-[1.1rem] border border-white/8 bg-[#0d1117]/90 p-4">
                  <div className="space-y-4 text-center">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-400/10">
                      <CirclePlay className="h-6 w-6 text-cyan-200" />
                    </span>
                    <div>
                      <p className="font-heading text-xl font-semibold text-white">Interactive ERD preview</p>
                      <p className="mx-auto mt-2 max-w-sm text-sm leading-7 text-muted-foreground">
                        Open the real editor to sketch tables, load templates, and export SQL for
                        PostgreSQL, MySQL, or SQLite workflows.
                      </p>
                    </div>
                    <Button asChild size="sm">
                      <Link href="/app/editor/templates/blank?mode=blank&database=postgresql">
                        Open Editor
                      </Link>
                    </Button>
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/8 bg-white/4 p-3 text-left">
                      <p className="text-xs uppercase tracking-[0.22em] text-blue-100/80">Outputs</p>
                      <p className="mt-2 text-sm text-white">SQL, DBML, image exports</p>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/4 p-3 text-left">
                      <p className="text-xs uppercase tracking-[0.22em] text-blue-100/80">Database modes</p>
                      <p className="mt-2 text-sm text-white">PostgreSQL, MySQL, SQLite</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="mesh-card p-6">
            <Badge>Launch signal</Badge>
            <div className="mt-4 space-y-4">
              <p className="font-heading text-2xl font-semibold text-white">
                The product story is clearer when the page looks like a system, not a slideshow.
              </p>
              <p className="text-sm leading-7 text-muted-foreground">
                This section now explains the operational path from template discovery to schema editing and export, which gives the homepage a much stronger product narrative.
              </p>
            </div>
          </Card>
          <AdPlaceholder className="min-h-[180px]" label="Homepage Mid-Content Ad Zone" />
        </div>
      </div>
    </section>
  );
}
